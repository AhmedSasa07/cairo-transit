import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  X,
  Layers,
  CheckCircle2,
  Sparkles,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  FileText,
  ExternalLink,
  Eye
} from 'lucide-react';
import PressableScale from './PressableScale.jsx';
import { haptics } from '../utils/haptics.js';

export const MAP_GALLERY = [
  {
    id: 'greater_cairo_integrated',
    altId: 'tfc-integrated-2025',
    titleEn: 'Greater Cairo Integrated Transit Map (2025/2026)',
    titleAr: 'خريطة النقل الإقليمي الشامل لإقليم القاهرة الكبرى (2025/2026)',
    sourceEn: 'Transport for Cairo (TfC) • EON Project Network Map',
    sourceAr: 'ترانسبورت فور كايرو (TfC) • شبكة النقل الإقليمية المتكاملة EON',
    year: '2025–2026',
    category: 'regional',
    badgeEn: 'INTEGRATED TRANSIT NETWORK',
    badgeAr: 'شبكة النقل المتكاملة',
    badgeColor: 'bg-[#2DD881]/15 text-[#2DD881] border-[#2DD881]/30',
    coverImage: '/maps/cairo-network-map-2025-eon.png',
    pdfUrl: '/maps/cairo-network-map-2025-eon.pdf',
    downloadFilename: 'Cairo_Integrated_Transit_Network_2025_EON.pdf',
    descriptionEn: 'Comprehensive high-resolution regional transit map produced by Transport for Cairo. Displays all current and under-construction mass transit: Metro Lines 1-4, East & West Nile Monorails, Capital LRT, Ring Road BRT, and ENR suburban rail corridors.',
    descriptionAr: 'الخريطة الإقليمية الشاملة والمعتمدة الصادرة عن Transport for Cairo. تعرض كافة شبكات النقل الجماعي الحالية والجارية: خطوط المترو 1 إلى 4، مونوريل شرق وغرب النيل، قطار العاصمة LRT، الأتوبيس الترددي BRT على الطريق الدائري، وشبكة قطارات الضواحي.',
    lines: ['Metro 1, 2, 3, 4', 'Monorail East & West Nile', 'Capital LRT', 'Ring Road BRT', 'ENR Suburban Rail'],
    linesAr: ['مترو 1، 2، 3، 4', 'مونوريل شرق وغرب النيل', 'قطار العاصمة LRT', 'الأتوبيس الترددي BRT الدائري', 'قطارات السكك الحديدية']
  },
  {
    id: 'mobility_cairo_official',
    titleEn: 'Mobility Cairo Official Network Map (2024/2026)',
    titleAr: 'خريطة شبكة مترو القاهرة الرسمية المعتمدة - موبيليتي كايرو',
    sourceEn: 'Mobility Cairo / RATP Dev / NAT',
    sourceAr: 'الهيئة القومية للأنفاق • موبيليتي كايرو (RATP Dev)',
    year: '2024–2026',
    category: 'official',
    badgeEn: 'OFFICIAL MOBILITY CAIRO',
    badgeAr: 'الخريطة الرسمية المعتمدة',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    coverImage: '/maps/mobility-cairo-official-network-map.png',
    pdfUrl: '/maps/Cairo_Network_Map_V2024.05.09.pdf',
    downloadFilename: 'Cairo_Network_Map_V2024.05.09.pdf',
    descriptionEn: 'Official high-resolution vector network map from Mobility Cairo (RATP Dev / NAT). Complete schematic showing all lines, interchange hubs, and fare zones with vector precision.',
    descriptionAr: 'الخريطة الرسمية المعتمدة من موبيليتي كايرو (RATP Dev / الهيئة القومية للأنفاق). بصيغة PDF المتجهة عالية الدقة تشمل كافة الخطوط ومحطات التبادل ومناطق التذاكر.',
    lines: ['Line 1, 2, 3', 'Capital LRT', 'East Monorail'],
    linesAr: ['الخط الأول، الثاني، الثالث', 'قطار العاصمة LRT', 'مونوريل شرق النيل']
  },
  {
    id: 'mobility_cairo_line3',
    titleEn: 'Mobility Cairo Line 3 Full Corridor Map',
    titleAr: 'خريطة مسار الخط الثالث الكامل ومحطات التبادل',
    sourceEn: 'Mobility Cairo / RATP Dev',
    sourceAr: 'موبيليتي كايرو • الخط الأخضر 3',
    year: '2024–2026',
    category: 'corridor',
    badgeEn: 'LINE 3 CORRIDOR',
    badgeAr: 'مسار الخط الثالث',
    badgeColor: 'bg-[#009f87]/15 text-[#009f87] border-[#009f87]/30',
    coverImage: '/maps/mobility-cairo-official-network-map.png',
    pdfUrl: '/maps/Line3_Static_Map_V2024.05.09.pdf',
    downloadFilename: 'Line3_Static_Map_V2024.05.09.pdf',
    descriptionEn: 'Detailed static corridor map for Cairo Metro Line 3 (Green Line) from Adly Mansour to Rod El-Farag Corridor and Cairo University.',
    descriptionAr: 'خريطة تفصيلية لمسار الخط الثالث للمترو (الخط الأخضر 3) من محطة عدلي منصور التبادلية حتى محوري روض الفرج وجامعة القاهرة.',
    lines: ['Line 3 Trunk & Branches (3A, 3B)'],
    linesAr: ['الخط الثالث وتفريعاته (3A، 3B)']
  }
];

export const MAP_PRESETS = MAP_GALLERY;

export default function PdfMapModal({ lang, t, onClose, initialMapId = 'greater_cairo_integrated' }) {
  const isAr = lang === 'ar';

  // Active selected map (Greater Cairo Integrated Transit Map)
  const [selectedMapId, setSelectedMapId] = useState(initialMapId);
  const activeMap = MAP_GALLERY.find((m) => m.id === selectedMapId || m.altId === selectedMapId) || MAP_GALLERY[0];

  // View mode: 'canvas' (Smooth gesture zoom) or 'vector_pdf' (Crisp native vector PDF)
  const [viewMode, setViewMode] = useState('canvas');

  // Interactive zoom & pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // References for gesture tracking
  const containerRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const pinchStartDistRef = useRef(null);
  const pinchStartZoomRef = useRef(1);
  const lastTapRef = useRef(0);

  // Reset view whenever map selection changes
  const selectMap = (mapId) => {
    haptics.selection();
    setSelectedMapId(mapId);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsImageLoaded(false);
  };

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    haptics.selection();
    setZoom((prev) => Math.min(Number((prev + 0.35).toFixed(2)), 4.0));
  }, []);

  const handleZoomOut = useCallback(() => {
    haptics.selection();
    setZoom((prev) => Math.max(Number((prev - 0.35).toFixed(2)), 0.75));
  }, []);

  const handleReset = useCallback(() => {
    haptics.light();
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Keyboard shortcuts (+, -, 0, Esc, Arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0' || e.key === 'r' || e.key === 'R') {
        handleReset();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = MAP_GALLERY.findIndex((m) => m.id === selectedMapId);
        const nextIndex = isAr
          ? (currentIndex - 1 + MAP_GALLERY.length) % MAP_GALLERY.length
          : (currentIndex + 1) % MAP_GALLERY.length;
        selectMap(MAP_GALLERY[nextIndex].id);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = MAP_GALLERY.findIndex((m) => m.id === selectedMapId);
        const prevIndex = isAr
          ? (currentIndex + 1) % MAP_GALLERY.length
          : (currentIndex - 1 + MAP_GALLERY.length) % MAP_GALLERY.length;
        selectMap(MAP_GALLERY[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMapId, isAr, onClose, handleZoomIn, handleZoomOut, handleReset]);

  // Mouse pan handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - pan.x,
      y: e.clientY - pan.y
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch handlers for mobile pan & pinch-to-zoom
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      // Check for double tap to toggle zoom
      const now = Date.now();
      if (now - lastTapRef.current < 300) {
        haptics.commit();
        if (zoom > 1.2) {
          setZoom(1);
          setPan({ x: 0, y: 0 });
        } else {
          setZoom(2.2);
        }
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;

      setIsDragging(true);
      dragStartRef.current = {
        x: e.touches[0].clientX - pan.x,
        y: e.touches[0].clientY - pan.y
      };
    } else if (e.touches.length === 2) {
      // 2 fingers = pinch to zoom
      setIsDragging(false);
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      pinchStartDistRef.current = dist;
      pinchStartZoomRef.current = zoom;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDragging) {
      setPan({
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y
      });
    } else if (e.touches.length === 2 && pinchStartDistRef.current) {
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = currentDist / pinchStartDistRef.current;
      const newZoom = Math.min(Math.max(pinchStartZoomRef.current * ratio, 0.75), 4.0);
      setZoom(Number(newZoom.toFixed(2)));
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) {
      pinchStartDistRef.current = null;
    }
    if (e.touches.length === 0) {
      setIsDragging(false);
    }
  };

  // Mouse wheel zoom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      const zoomDelta = e.deltaY < 0 ? 0.2 : -0.2;
      setZoom((prev) => Math.min(Math.max(Number((prev + zoomDelta).toFixed(2)), 0.75), 4.0));
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div
      className="fixed inset-0 w-screen h-screen z-[70] p-0 m-0 bg-[#0A0A0E] flex flex-col overflow-hidden text-start animate-fade-in"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal Top Header (Full Screen Edge-to-Edge) */}
      <div className="px-3.5 py-3 sm:px-6 sm:py-3.5 border-b border-white/10 bg-slate-900/95 backdrop-blur-xl flex items-center justify-between flex-shrink-0 gap-2 pt-[max(env(safe-area-inset-top,0px),12px)]">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF4A1C]/25 to-[#FF4A1C]/10 border border-[#FF4A1C]/35 flex items-center justify-center text-[#FF4A1C] shadow-sm flex-shrink-0">
            <Layers className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm sm:text-base font-space font-extrabold uppercase tracking-wider text-white leading-tight truncate">
                {isAr ? 'معرض خرائط النقل والمترو الرسمية' : 'Cairo Transit Map Gallery'}
              </h3>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${activeMap.badgeColor}`}>
                <CheckCircle2 className="w-3 h-3" />
                {isAr ? activeMap.badgeAr : activeMap.badgeEn}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5 truncate">
              {isAr ? activeMap.sourceAr : activeMap.sourceEn}
            </p>
          </div>
        </div>

        {/* Action Controls: View Mode & Close */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Mode Switch: Canvas vs Vector PDF */}
          <div className="hidden sm:flex items-center bg-white/10 rounded-xl p-0.5 border border-white/15">
            <button
              type="button"
              onClick={() => {
                haptics.selection();
                setViewMode('canvas');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1 ${
                viewMode === 'canvas' ? 'bg-[#FF4A1C] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{isAr ? 'عرض تفاعلي' : 'Pan/Zoom'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                haptics.selection();
                setViewMode('vector_pdf');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1 ${
                viewMode === 'vector_pdf' ? 'bg-[#FF4A1C] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isAr ? 'ملف PDF متجه' : 'Vector PDF'}</span>
            </button>
          </div>

          <a
            href={activeMap.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-3 sm:py-2 rounded-xl text-white hover:text-white bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/40 flex items-center gap-1.5 transition-colors"
            title={isAr ? 'فتح ملف الـ PDF عالي الدقة في نافذة خارجية' : 'Open Full Vector PDF'}
            aria-label="Open Full Vector PDF"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden md:inline text-xs font-space font-bold">
              {isAr ? 'فتح PDF' : 'Open PDF'}
            </span>
          </a>

          <PressableScale
            onClick={() => {
              haptics.light();
              onClose();
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-xl text-white hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 flex items-center gap-1.5 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-space font-bold">
              {isAr ? 'إغلاق' : 'Close'}
            </span>
          </PressableScale>
        </div>
      </div>

      {/* Map Gallery Switcher Bar */}
      <div className="px-3 sm:px-6 py-2 bg-slate-900/90 border-b border-white/10 flex items-center justify-between gap-2 flex-shrink-0 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 flex-nowrap min-w-0">
          {MAP_GALLERY.map((map) => {
            const isSelected = map.id === activeMap.id;
            return (
              <button
                key={map.id}
                type="button"
                onClick={() => selectMap(map.id)}
                className={`py-1 px-2.5 sm:px-3 rounded-xl text-xs font-bold font-space whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-[#2DD881]/20 text-[#2DD881] border-[#2DD881]/50 shadow-xs'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
              >
                {isAr ? map.titleAr : map.titleEn}
              </button>
            );
          })}
        </div>
        <div className="text-[11px] font-mono text-slate-400 hidden lg:block flex-shrink-0">
          {isAr ? 'خرائط معتمدة رسمياً' : 'Official Verified Maps'}
        </div>
      </div>

      {/* Zoom Indicator & Quality Sub-bar */}
      {viewMode === 'canvas' && (
        <div className="px-3.5 sm:px-6 py-1.5 bg-slate-950/80 border-b border-white/5 flex items-center justify-between text-xs text-slate-400 flex-shrink-0 font-mono gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-[11px] font-bold">
            <span className="inline-flex items-center gap-1 text-[#2DD881]">
              <Sparkles className="w-3 h-3" />
              {isAr ? 'خريطة فائقة الدقة 60 FPS أوفلاين' : '100% Offline Vector HD • 60 FPS'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {zoom !== 1 && (
              <button
                onClick={handleReset}
                className="text-[11px] text-[#FF4A1C] hover:underline"
              >
                {isAr ? 'إعادة ضبط 100%' : 'Reset to 100%'}
              </button>
            )}
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[11px]">
              {Math.round(zoom * 100)}%
            </span>
          </div>
        </div>
      )}

      {/* Main Fullscreen Viewer Body */}
      <div className="flex-1 min-h-0 w-full h-full bg-[#060608] relative overflow-hidden flex flex-col">
        {viewMode === 'vector_pdf' ? (
          <div className="w-full h-full p-2 sm:p-4 flex flex-col items-center justify-center relative">
            <object
              data={activeMap.pdfUrl}
              type="application/pdf"
              className="w-full h-full rounded-2xl bg-[#0F0F13] border border-white/10 shadow-2xl"
            >
              {/* Fallback if embedded PDF viewer is not natively supported */}
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-6 text-slate-300">
                <FileText className="w-16 h-16 text-[#FF4A1C] animate-pulse" />
                <div className="space-y-1.5 max-w-sm">
                  <p className="font-space text-base font-bold text-white">
                    {isAr ? 'ملف الـ PDF المتجه عالي الدقة' : 'Crisp Vector PDF Document'}
                  </p>
                  <p className="font-cairo text-xs text-slate-400">
                    {isAr
                      ? 'يمكنك فتح ملف الـ PDF المتجه الأصلي بدقة 100% بدون أي فقد في الجودة أو تنزيله لجهازك.'
                      : 'You can open the official 100% vector PDF file directly with infinite zoom and sharpness.'}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={activeMap.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg active:scale-95 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {isAr ? 'فتح ملف PDF في القارئ' : 'Open in PDF Viewer'}
                  </a>
                  <button
                    type="button"
                    onClick={() => setViewMode('canvas')}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs active:scale-95 transition-all"
                  >
                    {isAr ? 'العودة للعرض التفاعلي' : 'Back to Interactive'}
                  </button>
                </div>
              </div>
            </object>
          </div>
        ) : (
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full h-full relative overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            style={{ touchAction: 'none' }}
          >
            {/* Subtle background radial pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* High-Resolution Schematic Map Image (No max-h-[75vh] limits!) */}
            <div
              className="transition-transform duration-75 ease-out flex items-center justify-center pointer-events-none"
              style={{
                transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
                transformOrigin: 'center center',
                willChange: 'transform'
              }}
            >
              <img
                key={activeMap.id}
                src={activeMap.coverImage}
                alt={isAr ? activeMap.titleAr : activeMap.titleEn}
                onLoad={() => setIsImageLoaded(true)}
                className={`max-w-none w-auto h-auto transition-opacity duration-300 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                draggable={false}
              />
            </div>

            {/* Loading Indicator */}
            {!isImageLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400 font-mono text-xs">
                <div className="w-8 h-8 border-2 border-[#FF4A1C] border-t-transparent rounded-full animate-spin" />
                <span>{isAr ? 'جاري تحميل الخريطة عالية الدقة...' : 'Loading high-res map...'}</span>
              </div>
            )}

            {/* Floating Interactive Controls Pill */}
            <div className="absolute bottom-5 end-5 z-20 flex items-center gap-1.5 bg-black/85 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-2xl">
              <PressableScale
                onClick={handleZoomIn}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title={isAr ? 'تكبير (+)' : 'Zoom In (+)'}
              >
                <ZoomIn className="w-4 h-4" />
              </PressableScale>
              <PressableScale
                onClick={handleZoomOut}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title={isAr ? 'تصغير (-)' : 'Zoom Out (-)'}
              >
                <ZoomOut className="w-4 h-4" />
              </PressableScale>
              <PressableScale
                onClick={handleReset}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title={isAr ? 'إعادة ضبط العرض (0)' : 'Reset View (0)'}
              >
                <RotateCcw className="w-4 h-4" />
              </PressableScale>
            </div>

            {/* Gesture Hint Toast */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <div className="px-3.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-mono flex items-center gap-1.5 shadow-sm">
                <span>
                  {isAr
                    ? 'اسحب للتنقل • باعد بأصابعك للتكبير • انقر مرتين للتكبير التلقائي'
                    : 'Drag to pan • Pinch to zoom • Double-tap to toggle zoom'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal Bottom Footer */}
      <div className="px-4 py-2 sm:px-6 bg-slate-900/95 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 flex-shrink-0 pb-[max(0.6rem,env(safe-area-inset-bottom))] font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#2DD881] animate-pulse"></span>
          <span className="truncate">
            {isAr
              ? 'الهيئة القومية للأنفاق • ترانسبورت فور كايرو • RATP Dev Cairo Mobility'
              : 'NAT • Transport for Cairo (TfC) • RATP Dev Cairo'}
          </span>
        </div>
        <PressableScale
          onClick={() => {
            haptics.light();
            onClose();
          }}
          className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-space font-bold transition-colors border border-white/15 flex-shrink-0"
        >
          {isAr ? 'إغلاق' : 'Close'}
        </PressableScale>
      </div>
    </div>
  );
}
