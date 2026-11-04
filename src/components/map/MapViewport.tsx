import React, { useRef, useState, useEffect, useCallback } from 'react';
import { StationNode, MapViewportProps, ViewportTransform } from '../../types/map';
import StationLabelsLayer from './StationLabelsLayer';
import cairoStationsData from '../../data/cairo-metro-stations.json';

const STATIONS: StationNode[] = cairoStationsData as StationNode[];

// Bounding box for Cairo Network in SVG world coordinates
const WORLD_WIDTH = 4000;
const WORLD_HEIGHT = 3000;

export default function MapViewport({
  initialCenter = { x: 1788, y: 1424 }, // Cairo Stadium Hub
  initialZoom = 1.0,
  minZoom = 0.7,
  maxZoom = 4.5,
  onStationSelect,
  selectedStationId = null,
  className = '',
  isDarkMode = true
}: MapViewportProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  // Transform states (Mutable ref for 60fps gesture loop + state for React LOD triggers)
  const transformRef = useRef<ViewportTransform>({
    x: 0,
    y: 0,
    scale: initialZoom
  });

  const [currentScale, setCurrentScale] = useState<number>(initialZoom);
  const [svgContent, setSvgContent] = useState<string>('');

  // Fetch normalized XML SVG base layer
  useEffect(() => {
    let isMounted = true;
    fetch('/assets/cairo-transit-base.svg')
      .then(res => res.text())
      .then(svgText => {
        if (isMounted) setSvgContent(svgText);
      })
      .catch(() => {});
    return () => { isMounted = false; };
  }, []);

  // Center to a given world coordinate
  const centerOnPoint = useCallback((worldX: number, worldY: number, targetZoom?: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const zoom = targetZoom ?? transformRef.current.scale;
    const clampedZoom = Math.max(minZoom, Math.min(maxZoom, zoom));

    const newX = rect.width / 2 - worldX * clampedZoom;
    const newY = rect.height / 2 - worldY * clampedZoom;

    transformRef.current = { x: newX, y: newY, scale: clampedZoom };
    setCurrentScale(clampedZoom);

    if (layerRef.current) {
      layerRef.current.style.transform = `matrix3d(${clampedZoom}, 0, 0, 0, 0, ${clampedZoom}, 0, 0, 0, 0, 1, 0, ${newX}, ${newY}, 0, 1)`;
    }
  }, [minZoom, maxZoom]);

  // Initial centering on mount
  useEffect(() => {
    centerOnPoint(initialCenter.x, initialCenter.y, initialZoom);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Gesture tracking state following SandroMaglione/infinite-html-canvas math
  const gestureState = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    vx: 0,
    vy: 0,
    initialPinchDist: 0,
    initialPinchScale: 1,
    pinchMidX: 0,
    pinchMidY: 0,
    inertiaAnimId: 0,
    lastMoveTime: 0
  });

  // Apply CSS matrix transformation directly to DOM avoiding React reflow
  const applyTransform = useCallback((x: number, y: number, scale: number) => {
    transformRef.current = { x, y, scale };
    if (layerRef.current) {
      layerRef.current.style.transform = `matrix3d(${scale}, 0, 0, 0, 0, ${scale}, 0, 0, 0, 0, 1, 0, ${x}, ${y}, 0, 1)`;
    }
  }, []);

  // Momentum Inertia Animation Loop
  const startInertia = useCallback(() => {
    const gs = gestureState.current;
    if (Math.abs(gs.vx) < 0.2 && Math.abs(gs.vy) < 0.2) return;

    const friction = 0.93;
    const loop = () => {
      gs.vx *= friction;
      gs.vy *= friction;

      if (Math.abs(gs.vx) < 0.1 && Math.abs(gs.vy) < 0.1) {
        cancelAnimationFrame(gs.inertiaAnimId);
        return;
      }

      const nextX = transformRef.current.x + gs.vx;
      const nextY = transformRef.current.y + gs.vy;
      applyTransform(nextX, nextY, transformRef.current.scale);

      gs.inertiaAnimId = requestAnimationFrame(loop);
    };

    cancelAnimationFrame(gs.inertiaAnimId);
    gs.inertiaAnimId = requestAnimationFrame(loop);
  }, [applyTransform]);

  // Zoom around focal point (midpoint or cursor)
  const zoomAtPoint = useCallback((focalX: number, focalY: number, factor: number) => {
    const oldScale = transformRef.current.scale;
    const newScale = Math.max(minZoom, Math.min(maxZoom, oldScale * factor));
    if (Math.abs(newScale - oldScale) < 0.001) return;

    const oldX = transformRef.current.x;
    const oldY = transformRef.current.y;

    const newX = focalX - (focalX - oldX) * (newScale / oldScale);
    const newY = focalY - (focalY - oldY) * (newScale / oldScale);

    applyTransform(newX, newY, newScale);
    setCurrentScale(newScale);
  }, [minZoom, maxZoom, applyTransform]);

  // Mouse wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const focalX = e.clientX - rect.left;
    const focalY = e.clientY - rect.top;
    const factor = e.deltaY < 0 ? 1.15 : 0.85;
    zoomAtPoint(focalX, focalY, factor);
  }, [zoomAtPoint]);

  // Mouse / Pointer Down
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    cancelAnimationFrame(gestureState.current.inertiaAnimId);

    const gs = gestureState.current;
    gs.isDragging = true;
    gs.startX = e.clientX;
    gs.startY = e.clientY;
    gs.lastX = e.clientX;
    gs.lastY = e.clientY;
    gs.vx = 0;
    gs.vy = 0;
    gs.lastMoveTime = performance.now();
  }, []);

  // Pointer Move
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const gs = gestureState.current;
    if (!gs.isDragging) return;

    const now = performance.now();
    const dt = Math.max(1, now - gs.lastMoveTime);
    const dx = e.clientX - gs.lastX;
    const dy = e.clientY - gs.lastY;

    gs.vx = (dx / dt) * 16.6;
    gs.vy = (dy / dt) * 16.6;
    gs.lastX = e.clientX;
    gs.lastY = e.clientY;
    gs.lastMoveTime = now;

    const newX = transformRef.current.x + dx;
    const newY = transformRef.current.y + dy;
    applyTransform(newX, newY, transformRef.current.scale);
  }, [applyTransform]);

  // Pointer Up
  const handlePointerUp = useCallback(() => {
    const gs = gestureState.current;
    if (gs.isDragging) {
      gs.isDragging = false;
      startInertia();
    }
  }, [startInertia]);

  // Multi-Touch Pinch to Zoom Support for Mobile Devices
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    cancelAnimationFrame(gestureState.current.inertiaAnimId);
    if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      const rect = containerRef.current?.getBoundingClientRect();
      const midX = (t1.clientX + t2.clientX) / 2 - (rect?.left || 0);
      const midY = (t1.clientY + t2.clientY) / 2 - (rect?.top || 0);

      const gs = gestureState.current;
      gs.initialPinchDist = dist;
      gs.initialPinchScale = transformRef.current.scale;
      gs.pinchMidX = midX;
      gs.pinchMidY = midY;
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      const gs = gestureState.current;
      if (gs.initialPinchDist > 0) {
        const factor = dist / gs.initialPinchDist;
        const newScale = Math.max(minZoom, Math.min(maxZoom, gs.initialPinchScale * factor));
        const oldScale = transformRef.current.scale;
        if (Math.abs(newScale - oldScale) > 0.005) {
          const newX = gs.pinchMidX - (gs.pinchMidX - transformRef.current.x) * (newScale / oldScale);
          const newY = gs.pinchMidY - (gs.pinchMidY - transformRef.current.y) * (newScale / oldScale);
          applyTransform(newX, newY, newScale);
          setCurrentScale(newScale);
        }
      }
    }
  }, [minZoom, maxZoom, applyTransform]);

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handlePointerUp}
      className={`relative w-full h-full overflow-hidden select-none touch-none cursor-grab active:cursor-grabbing ${className}`}
      style={{
        backgroundColor: isDarkMode ? '#0A0A0C' : '#F8FAFC'
      }}
    >
      {/* Hardware-accelerated viewport transformation layer */}
      <div
        ref={layerRef}
        style={{
          width: `${WORLD_WIDTH}px`,
          height: `${WORLD_HEIGHT}px`,
          position: 'absolute',
          top: 0,
          left: 0,
          transformOrigin: '0 0',
          willChange: 'transform',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Normalized Vector SVG Base Map */}
        {svgContent ? (
          <div
            dangerouslySetInnerHTML={{ __html: svgContent }}
            className="w-full h-full pointer-events-none"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-sm">
            Loading Cairo Transit Vector Geometry...
          </div>
        )}

        {/* Dynamic Station Interactive & Label Overlay Layer (LOD) */}
        <StationLabelsLayer
          stations={STATIONS}
          scale={currentScale}
          selectedStationId={selectedStationId}
          onStationClick={(st) => onStationSelect?.(st)}
        />
      </div>
    </div>
  );
}
