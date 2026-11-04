import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Layers,
  MapPin,
  Route,
  Info,
  X,
  Train,
  Clock,
  Sparkles,
  ChevronRight,
  Navigation,
  Search,
  CheckCircle2,
  ExternalLink,
  Zap,
  Activity,
  Sliders,
  Check,
  Cpu,
  Wrench,
  Copy,
  CheckCheck
} from 'lucide-react';
import { STATIONS, METRO_LINES, OPERATING_HOURS, SCHEDULE_INFO } from '../data/metroData.js';
import { MAP_STATION_COORDS, MAP_LINES_PATHS } from '../data/mapCoordinates.js';
import { findNearestStations, formatDistance, estimateWalkMinutes, getDistanceKm, normalizeArabic } from '../utils/geo.js';
import PressableScale from './PressableScale.jsx';
import { haptics } from '../utils/haptics.js';
import { serializeMapStationCoords, copyMapCoordsToClipboard } from '../utils/mapCoordsSerializer.js';

/**
 * ============================================================================
 * 🗺️ BACKGROUND TRANSIT MAP OVERLAY MANUAL CALIBRATION CONFIG
 * ============================================================================
 * Edit these values to manually calibrate and align the background transit map:
 * - href: Path to the high-resolution map image
 * - x: Horizontal offset in SVG units (increase to shift right, decrease to shift left)
 * - y: Vertical offset in SVG units (increase to shift down, decrease to shift up)
 * - width: Width of the background map bounding box in SVG units
 * - height: Height of the background map bounding box in SVG units
 * - opacity: Transparency level (e.g. 0.85 for crisp clarity)
 * - preserveAspectRatio: 'none' (stretches to fill bounds 1:1) or 'xMidYMid meet'
 * - filter: CSS filter string (e.g. 'none' or 'contrast(1.04) brightness(1.02)')
 * ============================================================================
 */
const MAP_OVERLAY_CONFIG = {
  href: '/maps/cairo-network-map-2025-eon.png',
  x: 0,
  y: 0,
  width: 1560,
  height: 1040,
  opacity: 0.85,
  preserveAspectRatio: 'none',
  filter: 'contrast(1.05) brightness(1.02)'
};

// Precomputed SVG polyline points string for high-speed zero-overhead rendering
const PRECOMPUTED_POINTS = {
  line1: (MAP_LINES_PATHS.line1 || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' '),
  line2: (MAP_LINES_PATHS.line2 || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' '),
  line3_trunk: (MAP_LINES_PATHS.line3_trunk || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' '),
  line3_branch_rod: (MAP_LINES_PATHS.line3_branch_rod || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' '),
  line3_branch_cairo_univ: (MAP_LINES_PATHS.line3_branch_cairo_univ || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' '),
  lrt_trunk: (MAP_LINES_PATHS.lrt_trunk || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' '),
  lrt_branch_ramadan: (MAP_LINES_PATHS.lrt_branch_ramadan || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' '),
  monorail_east: (MAP_LINES_PATHS.monorail_east || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' '),
  monorail_west: (MAP_LINES_PATHS.monorail_west || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' '),
  brt: (MAP_LINES_PATHS.brt || [])
    .map((id) => (MAP_STATION_COORDS[id] ? `${MAP_STATION_COORDS[id].x},${MAP_STATION_COORDS[id].y}` : null))
    .filter(Boolean)
    .join(' ')
};

/**
 * Static SVG Map Layer (River Nile, Polylines, Badges).
 * Wrapped in React.memo so station selection does NOT re-render these paths!
 */
const StaticMapSvgLayers = React.memo(function StaticMapSvgLayers({
  activeLineFilter,
  isAr,
  isBatterySaver,
  showIntegratedOverlay = false,
  linePoints
}) {
  const pts = linePoints || PRECOMPUTED_POINTS;
  return (
    <>
      <defs>
        {/* UK Station Spotlight Animated Glowing Radial Aura */}
        {!isBatterySaver && (
          <radialGradient id="stationSpotlightAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.70)" />
            <stop offset="35%" stopColor="rgba(59, 130, 246, 0.40)" />
            <stop offset="70%" stopColor="rgba(59, 130, 246, 0.15)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
        )}
      </defs>

      {/* River Nile stylized representation */}
      <path
        d="M 480 0 Q 460 200, 470 400 T 450 600 T 420 800 T 400 1040"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="32"
        opacity="0.18"
        strokeLinecap="round"
      />
      <text
        x="420"
        y="720"
        fill="#0284C7"
        fontSize="14"
        fontWeight="bold"
        letterSpacing="6"
        opacity="0.4"
        transform="rotate(-85 420 720)"
      >
        RIVER NILE • نهر النيل
      </text>

      {/* Line 1 Polyline (#00518e Royal Blue) */}
      {(activeLineFilter === 'all' || activeLineFilter === 'line1') && (
        <polyline
          points={pts.line1}
          fill="none"
          stroke="#00518e"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* Line 2 Polyline (#c13038 Red) */}
      {(activeLineFilter === 'all' || activeLineFilter === 'line2') && (
        <polyline
          points={pts.line2}
          fill="none"
          stroke="#c13038"
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* Line 3 Polylines (#009f87 Emerald Green) */}
      {(activeLineFilter === 'all' || activeLineFilter === 'line3') && (
        <g>
          <polyline
            points={pts.line3_trunk}
            fill="none"
            stroke="#009f87"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points={pts.line3_branch_rod}
            fill="none"
            stroke="#009f87"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points={pts.line3_branch_cairo_univ}
            fill="none"
            stroke="#009f87"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}

      {/* LRT Capital Train Polylines (#9e1b33 Crimson) */}
      {(activeLineFilter === 'all' || activeLineFilter === 'lrt') && (
        <g>
          <polyline
            points={pts.lrt_trunk}
            fill="none"
            stroke="#9e1b33"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points={pts.lrt_branch_ramadan}
            fill="none"
            stroke="#9e1b33"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}

      {/* Monorail East Polyline (#009ca6 Teal) */}
      {(activeLineFilter === 'all' || activeLineFilter === 'monorail_east') && (
        <polyline
          points={pts.monorail_east}
          fill="none"
          stroke="#009ca6"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* Monorail West Polyline (#9b2521 Dark Crimson) */}
      {(activeLineFilter === 'all' || activeLineFilter === 'monorail_west') && (
        <polyline
          points={pts.monorail_west}
          fill="none"
          stroke="#9b2521"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* BRT Ring Road Polyline (Purple #8B5CF6) */}
      {(activeLineFilter === 'all' || activeLineFilter === 'brt') && (
        <polyline
          points={pts.brt}
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="7"
          strokeDasharray="12 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* Line Terminal Badges (Suppressed when background integrated map overlay is ON to prevent label clutter) */}
      {!showIntegratedOverlay && (
        <g className="select-none pointer-events-none font-bold">
        {/* Line 1 Badges */}
        {(activeLineFilter === 'all' || activeLineFilter === 'line1') && (
          <>
            <g transform="translate(880, 36)">
              <rect x="-65" y="-13" width="130" height="26" rx="13" fill="#00518e" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'الخط الأول • المرج الجديدة' : 'M1 • New El-Marg'}
              </text>
            </g>
            <g transform="translate(505, 1008)">
              <rect x="-55" y="-13" width="110" height="26" rx="13" fill="#00518e" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'الخط الأول • حلوان' : 'M1 • Helwan'}
              </text>
            </g>
          </>
        )}

        {/* Line 2 Badges */}
        {(activeLineFilter === 'all' || activeLineFilter === 'line2') && (
          <>
            <g transform="translate(440, 76)">
              <rect x="-60" y="-13" width="120" height="26" rx="13" fill="#c13038" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'الخط الثانى • شبرا الخيمة' : 'M2 • Shubra'}
              </text>
            </g>
            <g transform="translate(280, 892)">
              <rect x="-55" y="-13" width="110" height="26" rx="13" fill="#c13038" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'الخط الثانى • المنيب' : 'M2 • El-Mounib'}
              </text>
            </g>
          </>
        )}

        {/* Line 3 Badges */}
        {(activeLineFilter === 'all' || activeLineFilter === 'line3') && (
          <>
            <g transform="translate(1125, 304)">
              <rect x="-65" y="-13" width="130" height="26" rx="13" fill="#009f87" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'الخط الثالث • عدلي منصور' : 'M3 • Adly Mansour'}
              </text>
            </g>
            <g transform="translate(205, 166)">
              <rect x="-65" y="-13" width="130" height="26" rx="13" fill="#009f87" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'الخط الثالث • روض الفرج' : 'M3 • Rod El-Farag'}
              </text>
            </g>
          </>
        )}

        {/* LRT Badges */}
        {(activeLineFilter === 'all' || activeLineFilter === 'lrt') && (
          <>
            <g transform="translate(1500, 48)">
              <rect x="-70" y="-13" width="140" height="26" rx="13" fill="#9e1b33" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'LRT • العاشر من رمضان' : 'LRT • 10th of Ramadan'}
              </text>
            </g>
            <g transform="translate(1415, 430)">
              <rect x="-65" y="-13" width="130" height="26" rx="13" fill="#9e1b33" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'LRT • مدينة الفنون' : 'LRT • City of Arts'}
              </text>
            </g>
          </>
        )}

        {/* Monorail East Badges */}
        {(activeLineFilter === 'all' || activeLineFilter === 'monorail_east') && (
          <g transform="translate(715, 480)">
            <rect x="-65" y="-13" width="130" height="26" rx="13" fill="#009ca6" stroke="#FFFFFF" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
              {isAr ? 'مونوريل شرق • الاستاد' : 'Mono East • Stadium'}
            </text>
          </g>
        )}

        {/* Monorail West Badges */}
        {(activeLineFilter === 'all' || activeLineFilter === 'monorail_west') && (
          <g transform="translate(80, 875)">
            <rect x="-65" y="-13" width="130" height="26" rx="13" fill="#9b2521" stroke="#FFFFFF" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
              {isAr ? 'مونوريل غرب • 6 أكتوبر' : 'Mono West • 6th Oct'}
            </text>
          </g>
        )}

        {/* BRT Badges */}
        {(activeLineFilter === 'all' || activeLineFilter === 'brt') && (
          <>
            <g transform="translate(410, 18)">
              <rect x="-65" y="-13" width="130" height="26" rx="13" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'BRT • الإسكندرية الزراعي' : 'BRT • Alex Agri'}
              </text>
            </g>
            <g transform="translate(860, 755)">
              <rect x="-60" y="-13" width="120" height="26" rx="13" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}>
                {isAr ? 'BRT • الجولف' : 'BRT • The Golf'}
              </text>
            </g>
          </>
        )}
      </g>
      )}
    </>
  );
});

/**
 * Individual Station Node Component.
 * Memoized so only the selected/unselected stations re-render when tapping!
 * Inversely rescales fonts on zoom so station labels stay crisp and never crowd or overlap each other!
 */
const StationNode = React.memo(function StationNode({
  st,
  coord,
  isSelected,
  isBatterySaver,
  isAr,
  zoomLevel = 1,
  showIntegratedOverlay = false,
  isCalibrating = false,
  isDragging = false,
  onPointerDown,
  onSelectStation
}) {
  const isInterchange = st.isInterchange;
  const primaryLine = st.lines[0];
  const color = isInterchange ? '#ecc15f' : METRO_LINES[primaryLine]?.color || '#00518e';

  // Responsive inverse font & stroke scaling on zoom
  const z = Math.max(0.65, Math.min(4, zoomLevel || 1));
  const baseSize = isInterchange ? 11 : 9;
  const dynamicFontSize = Math.max(4.5, Math.min(12, Number((baseSize / Math.pow(z, 0.75)).toFixed(1))));
  const dynamicStrokeWidth = Math.max(1.2, Number((2.8 / Math.sqrt(z)).toFixed(1)));

  // Decluttering: when background overlay map is ON, suppress all station text labels (they are already printed in the background map),
  // showing only the label for the actively tapped/selected station to guarantee ZERO text collision!
  const shouldRenderLabel = !isDragging && (showIntegratedOverlay
    ? isSelected
    : (z >= 0.85 || isInterchange || isSelected));

  const labelOffsetX = coord.labelPos === 'right' ? Math.max(8, 14 / Math.sqrt(z)) :
                       coord.labelPos === 'left' ? -Math.max(8, 14 / Math.sqrt(z)) : 0;
  const labelOffsetY = coord.labelPos === 'top' ? -Math.max(8, 12 / Math.sqrt(z)) :
                       coord.labelPos === 'bottom' ? Math.max(10, 16 / Math.sqrt(z)) : 4;

  return (
    <g
      onClick={(e) => {
        if (isCalibrating) return;
        e.stopPropagation();
        onSelectStation(st);
      }}
      className={isCalibrating ? "cursor-grab active:cursor-grabbing select-none" : "cursor-pointer group select-none"}
    >
      {/* Draggable Calibration Handle Target */}
      {isCalibrating && (
        <circle
          cx={coord.x}
          cy={coord.y}
          r={isDragging ? "26" : "20"}
          fill={isDragging ? "rgba(234, 179, 8, 0.45)" : "rgba(59, 130, 246, 0.18)"}
          stroke={isDragging ? "#EAB308" : "#3B82F6"}
          strokeWidth={isDragging ? "3" : "1.5"}
          strokeDasharray={isDragging ? "4 3" : "2 2"}
          className="cursor-grab active:cursor-grabbing touch-none"
          onPointerDown={(e) => onPointerDown?.(st.id, e)}
        />
      )}

      {/* Floating Coordinate Pill Badge while dragging */}
      {isDragging && (
        <g className="pointer-events-none select-none">
          <rect
            x={coord.x - 42}
            y={coord.y - 42}
            width="84"
            height="24"
            rx="12"
            fill="#0F172A"
            stroke="#EAB308"
            strokeWidth="2"
            className="filter drop-shadow-md"
          />
          <text
            x={coord.x}
            y={coord.y - 26}
            fill="#FDE047"
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {Math.round(coord.x)}, {Math.round(coord.y)}
          </text>
        </g>
      )}

      {/* Interchange Hub Node (#ecc15f Gold / Amber) */}
      {isInterchange ? (
        <g className={isBatterySaver ? '' : 'filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]'}>
          <circle
            cx={coord.x}
            cy={coord.y}
            r="12.5"
            fill="#FFFFFF"
            stroke="#ecc15f"
            strokeWidth="3.5"
          />
          <circle
            cx={coord.x}
            cy={coord.y}
            r="6"
            fill="#ecc15f"
          />
        </g>
      ) : (
        <g className={isBatterySaver ? '' : 'filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]'}>
          <circle
            cx={coord.x}
            cy={coord.y}
            r={isSelected ? '9.5' : '7'}
            fill="#FFFFFF"
            stroke={color}
            strokeWidth={isSelected ? '4' : '3.5'}
          />
          <circle
            cx={coord.x}
            cy={coord.y}
            r={isSelected ? '9.5' : '7'}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.8"
          />
          <circle
            cx={coord.x}
            cy={coord.y}
            r={isSelected ? '3' : '2'}
            fill={color}
          />
        </g>
      )}

      {/* Station Spotlight Effect */}
      {isSelected && (
        !isBatterySaver ? (
          <g className="pointer-events-none select-none">
            <circle
              cx={coord.x}
              cy={coord.y}
              r="52"
              fill="url(#stationSpotlightAura)"
              className="spotlight-glow-breathe"
            />
            <circle
              cx={coord.x}
              cy={coord.y}
              r="20"
              fill="none"
              stroke="rgba(59, 130, 246, 0.75)"
              strokeWidth="2.5"
              className="spotlight-pulse-fast"
            />
            <circle
              cx={coord.x}
              cy={coord.y}
              r="28"
              fill="none"
              stroke="rgba(59, 130, 246, 0.45)"
              strokeWidth="1.8"
              className="spotlight-pulse-delayed"
            />
            <circle
              cx={coord.x}
              cy={coord.y}
              r="18"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="4 2.5"
              className="animate-spin"
              style={{ animationDuration: '8s' }}
            />
          </g>
        ) : (
          <g className="pointer-events-none select-none">
            <circle
              cx={coord.x}
              cy={coord.y}
              r="18"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="3"
            />
            <circle
              cx={coord.x}
              cy={coord.y}
              r="25"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.8"
            />
          </g>
        )
      )}

      {/* Dynamic Zoom-Rescaled Station Label */}
      {shouldRenderLabel && (
        <text
          x={coord.x + labelOffsetX}
          y={coord.y + labelOffsetY}
          textAnchor={
            coord.labelPos === 'left' ? 'end' :
            coord.labelPos === 'right' ? 'start' :
            'middle'
          }
          fill={isSelected ? '#38BDF8' : '#F4F4F5'}
          stroke="#0A0A0B"
          strokeWidth={dynamicStrokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          paintOrder="stroke fill"
          className="select-none pointer-events-none station-map-label"
          fontSize={dynamicFontSize}
          fontWeight={isInterchange || isSelected ? '900' : '700'}
          fontFamily={isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"}
        >
          {isAr ? st.nameAr : st.nameEn}
        </text>
      )}
    </g>
  );
});

export default function InteractiveMap({
  lang,
  t,
  darkMode,
  onSetOrigin,
  onSetDestination,
  onSelectStationForModal,
  onOpenPdfMap
}) {
  const isAr = lang === 'ar';

  // Battery Saver mode (lightweight, no heavy shadows/glows)
  const [isBatterySaver, setIsBatterySaver] = useState(() => {
    try {
      return localStorage.getItem('metro_map_battery_saver') === 'true';
    } catch {
      return false;
    }
  });

  const handleToggleBatterySaver = useCallback((enabled) => {
    haptics.selection();
    setIsBatterySaver(enabled);
    try {
      localStorage.setItem('metro_map_battery_saver', String(enabled));
    } catch {}
  }, []);

  const isVector = true;

  // Drag & Drop Station Calibration Studio
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [activeDraggingStationId, setActiveDraggingStationId] = useState(null);
  const [copiedToast, setCopiedToast] = useState(null);

  // Dynamic Station Coordinates with localStorage persistence
  const [stationCoords, setStationCoords] = useState(() => {
    try {
      const saved = localStorage.getItem('cairo_metro_edited_coords');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...MAP_STATION_COORDS, ...parsed };
      }
    } catch (e) {
      console.warn('Could not read cached station coordinates:', e);
    }
    return { ...MAP_STATION_COORDS };
  });

  const coordsRef = useRef(stationCoords);
  coordsRef.current = stationCoords;

  const dragOffsetRef = useRef({ dx: 0, dy: 0 });
  const draggingIdRef = useRef(null);
  const pendingStationCoordRef = useRef(null);
  const stationRafRef = useRef(null);

  // Computes SVG ViewBox coordinates from screen client coordinates using hardware matrix inversion
  const getSvgPoint = useCallback((clientX, clientY) => {
    if (!mapSurfaceRef.current) return null;
    const ctm = mapSurfaceRef.current.getScreenCTM();
    if (!ctm) return null;
    const inv = ctm.inverse();
    if (typeof DOMPoint !== 'undefined') {
      const pt = new DOMPoint(clientX, clientY).matrixTransform(inv);
      return { x: pt.x, y: pt.y };
    }
    const pt = mapSurfaceRef.current.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const res = pt.matrixTransform(inv);
    return { x: res.x, y: res.y };
  }, []);

  // Station drag pointer handlers
  const handleStationPointerDown = useCallback((stId, e) => {
    if (!isCalibrating) return;
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    e.stopPropagation();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}

    const svgPoint = getSvgPoint(e.clientX, e.clientY);
    if (!svgPoint) return;

    const currentCoord = coordsRef.current[stId] || { x: 0, y: 0 };
    dragOffsetRef.current = {
      dx: svgPoint.x - currentCoord.x,
      dy: svgPoint.y - currentCoord.y
    };

    draggingIdRef.current = stId;
    setActiveDraggingStationId(stId);
    haptics.light();
  }, [isCalibrating, getSvgPoint]);

  const handleStationPointerMove = useCallback((e) => {
    const id = draggingIdRef.current;
    if (!id) return;

    const svgPoint = getSvgPoint(e.clientX, e.clientY);
    if (!svgPoint) return;

    const clampedX = Math.max(0, Math.min(1560, Math.round(svgPoint.x - dragOffsetRef.current.dx)));
    const clampedY = Math.max(0, Math.min(1040, Math.round(svgPoint.y - dragOffsetRef.current.dy)));

    pendingStationCoordRef.current = { id, x: clampedX, y: clampedY };

    if (!stationRafRef.current) {
      stationRafRef.current = requestAnimationFrame(() => {
        stationRafRef.current = null;
        if (!pendingStationCoordRef.current) return;
        const { id: activeId, x, y } = pendingStationCoordRef.current;

        coordsRef.current = {
          ...coordsRef.current,
          [activeId]: {
            ...coordsRef.current[activeId],
            x,
            y
          }
        };
        setStationCoords({ ...coordsRef.current });
      });
    }
  }, [getSvgPoint]);

  const handleStationPointerUp = useCallback((e) => {
    const id = draggingIdRef.current;
    if (!id) return;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    if (stationRafRef.current) {
      cancelAnimationFrame(stationRafRef.current);
      stationRafRef.current = null;
    }

    try {
      localStorage.setItem('cairo_metro_edited_coords', JSON.stringify(coordsRef.current));
    } catch (err) {
      console.warn('Failed to save edited coordinates to localStorage', err);
    }

    draggingIdRef.current = null;
    setActiveDraggingStationId(null);
    pendingStationCoordRef.current = null;
    haptics.selection();
  }, []);

  // Copy serialized coordinates to clipboard
  const handleCopyCoordinates = useCallback(async () => {
    haptics.impact('MEDIUM');
    const ok = await copyMapCoordsToClipboard(coordsRef.current);
    if (ok) {
      setCopiedToast(isAr ? '✓ تم نسخ الكود بالكامل للحافظة جاهزاً للّصق في mapCoordinates.js!' : '✓ Coordinates copied to clipboard ready for mapCoordinates.js!');
      setTimeout(() => setCopiedToast(null), 3500);
    } else {
      setCopiedToast(isAr ? '⚠️ تعذر النسخ للحافظة تلقائياً' : '⚠️ Could not copy automatically');
      setTimeout(() => setCopiedToast(null), 3500);
    }
  }, [isAr]);

  // Reset coordinates back to initial defaults
  const handleResetCoordinates = useCallback(() => {
    haptics.impact('HEAVY');
    try {
      localStorage.removeItem('cairo_metro_edited_coords');
    } catch {}
    coordsRef.current = { ...MAP_STATION_COORDS };
    setStationCoords({ ...MAP_STATION_COORDS });
    setCopiedToast(isAr ? '🔄 تم استعادة الإحداثيات الافتراضية بنجاح' : '🔄 Reset to default coordinates');
    setTimeout(() => setCopiedToast(null), 2500);
  }, [isAr]);

  // Dynamic Polylines recalculated whenever station coordinates update
  const dynamicLinePoints = useMemo(() => ({
    line1: (MAP_LINES_PATHS.line1 || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' '),
    line2: (MAP_LINES_PATHS.line2 || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' '),
    line3_trunk: (MAP_LINES_PATHS.line3_trunk || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' '),
    line3_branch_rod: (MAP_LINES_PATHS.line3_branch_rod || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' '),
    line3_branch_cairo_univ: (MAP_LINES_PATHS.line3_branch_cairo_univ || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' '),
    lrt_trunk: (MAP_LINES_PATHS.lrt_trunk || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' '),
    lrt_branch_ramadan: (MAP_LINES_PATHS.lrt_branch_ramadan || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' '),
    monorail_east: (MAP_LINES_PATHS.monorail_east || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' '),
    monorail_west: (MAP_LINES_PATHS.monorail_west || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' '),
    brt: (MAP_LINES_PATHS.brt || [])
      .map((id) => (stationCoords[id] ? `${stationCoords[id].x},${stationCoords[id].y}` : null))
      .filter(Boolean)
      .join(' ')
  }), [stationCoords]);

  // Performance Options Modal state
  const [showPerfModal, setShowPerfModal] = useState(false);

  // Framerate limiter mode: '120' (8.33ms unthrottled) vs '60' (16.67ms throttled)
  const [fpsMode, setFpsMode] = useState(() => {
    try {
      return localStorage.getItem('metro_map_fps_mode') || '120';
    } catch {
      return '120';
    }
  });

  // Greater Cairo Integrated Transit Map Overlay background toggle
  const [showIntegratedOverlay, setShowIntegratedOverlay] = useState(() => {
    try {
      return localStorage.getItem('metro_map_integrated_overlay') === 'true';
    } catch {
      return false;
    }
  });

  // Zoom & Pan transformation state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Search & Filtering state
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeLineFilter, setActiveLineFilter] = useState('all');

  // Station selection & popovers
  const [selectedStation, setSelectedStation] = useState(null);
  const [showRouteCapsuleMenu, setShowRouteCapsuleMenu] = useState(false);

  // GPS Re-centering state
  const [userLocation, setUserLocation] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [gpsToast, setGpsToast] = useState(null);

  // Hardware-decoupled gesture refs (Zero React re-renders during dragging!)
  const containerRef = useRef(null);
  const mapSurfaceRef = useRef(null);
  const searchRef = useRef(null);
  const panRef = useRef({ x: 0, y: 0 });
  const zoomRef = useRef(1);
  const pendingPanRef = useRef({ x: 0, y: 0 });
  const pendingZoomRef = useRef(1);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const pinchStartDistRef = useRef(null);
  const pinchStartZoomRef = useRef(1);
  const lastTapRef = useRef(0);
  const rafRef = useRef(null);
  const lastFrameTimeRef = useRef(0);

  // Apply GPU hardware transform directly to DOM surface
  const applyTransform = useCallback((p, z, animate = false) => {
    if (mapSurfaceRef.current) {
      mapSurfaceRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(${z})`;
      mapSurfaceRef.current.style.transition = isDraggingRef.current || !animate
        ? 'none'
        : 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)';
    }
  }, []);

  // RAF loop with 120 FPS / 60 FPS support for ultra-smooth 120Hz display tracking
  const scheduleRaf = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame((timestamp) => {
      rafRef.current = null;
      if (fpsMode === '60') {
        const elapsed = timestamp - lastFrameTimeRef.current;
        if (elapsed < 14.5) {
          rafRef.current = requestAnimationFrame((ts) => {
            rafRef.current = null;
            lastFrameTimeRef.current = ts;
            panRef.current = pendingPanRef.current;
            zoomRef.current = pendingZoomRef.current;
            if (mapSurfaceRef.current) {
              mapSurfaceRef.current.style.transform = `translate3d(${panRef.current.x}px, ${panRef.current.y}px, 0) scale(${zoomRef.current})`;
              mapSurfaceRef.current.style.transition = 'none';
            }
          });
          return;
        }
      }
      // 120 FPS: Direct execution with 8.33ms budget for ProMotion & 120Hz gaming screens
      lastFrameTimeRef.current = timestamp;
      panRef.current = pendingPanRef.current;
      zoomRef.current = pendingZoomRef.current;
      if (mapSurfaceRef.current) {
        mapSurfaceRef.current.style.transform = `translate3d(${panRef.current.x}px, ${panRef.current.y}px, 0) scale(${zoomRef.current})`;
        mapSurfaceRef.current.style.transition = 'none';
      }
    });
  }, [fpsMode]);

  // Sync transform when pan/zoom state changes
  useEffect(() => {
    panRef.current = pan;
    zoomRef.current = zoom;
    pendingPanRef.current = pan;
    pendingZoomRef.current = zoom;
    applyTransform(pan, zoom, !isDragging);
  }, [pan, zoom, applyTransform, isDragging]);

  // Dismiss GPS toast after timeout
  useEffect(() => {
    if (!gpsToast) return;
    const timer = setTimeout(() => {
      setGpsToast(null);
    }, 4500);
    return () => clearTimeout(timer);
  }, [gpsToast]);

  // Click outside search container to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Zoom Controls with fluid transition
  const handleZoomIn = useCallback(() => {
    haptics.selection();
    const next = Math.min(Number((zoomRef.current + 0.3).toFixed(2)), 4.0);
    zoomRef.current = next;
    pendingZoomRef.current = next;
    applyTransform(panRef.current, next, true);
    setZoom(next);
  }, [applyTransform]);

  const handleZoomOut = useCallback(() => {
    haptics.selection();
    const next = Math.max(Number((zoomRef.current - 0.3).toFixed(2)), 0.65);
    zoomRef.current = next;
    pendingZoomRef.current = next;
    applyTransform(panRef.current, next, true);
    setZoom(next);
  }, [applyTransform]);

  const handleReset = useCallback(() => {
    haptics.light();
    zoomRef.current = 1;
    pendingZoomRef.current = 1;
    panRef.current = { x: 0, y: 0 };
    pendingPanRef.current = { x: 0, y: 0 };
    applyTransform({ x: 0, y: 0 }, 1, true);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [applyTransform]);

  // Focus and Pan to Station with fluid animation
  const focusOnStation = useCallback((st, targetZoom = 1.9) => {
    if (!st) return;
    setSelectedStation(st);
    setShowRouteCapsuleMenu(false);
    haptics.selection();

    const coord = stationCoords[st.id] || MAP_STATION_COORDS[st.id];
    let targetX = 0;
    let targetY = 0;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const w = rect.width || 600;
      const h = rect.height || 540;

      // SVG viewBox is 0 0 1560 1040, center is (780, 520)
      const scaleFactor = Math.min(w / 1560, h / 1040);
      targetX = -(coord ? coord.x - 780 : 0) * scaleFactor * targetZoom;
      targetY = -(coord ? coord.y - 520 : 0) * scaleFactor * targetZoom - 35;
    }

    panRef.current = { x: targetX, y: targetY };
    zoomRef.current = targetZoom;
    pendingPanRef.current = { x: targetX, y: targetY };
    pendingZoomRef.current = targetZoom;

    applyTransform(panRef.current, targetZoom, true);
    setZoom(targetZoom);
    setPan({ x: targetX, y: targetY });
  }, [stationCoords, applyTransform]);

  // GPS Re-Center Handler
  const handleGpsReCenter = () => {
    haptics.light();
    setIsLocating(true);

    if (!('geolocation' in navigator)) {
      setGpsToast(isAr ? 'خدمة تحديد الموقع الجغرافي غير مدعومة' : 'Geolocation not supported in browser');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        haptics.success();
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setUserLocation({ lat, lng });

        const nearestList = findNearestStations(lat, lng, 1);
        const nearest = nearestList[0];

        if (nearest) {
          focusOnStation(nearest, 1.9);
          const distStr = formatDistance(nearest.distanceKm, lang);
          const toastMsg = isAr
            ? `أقرب محطة لك: ${nearest.nameAr} (${distStr})`
            : `Nearest station: ${nearest.nameEn} (${distStr})`;
          setGpsToast(toastMsg);
        }
        setIsLocating(false);
      },
      (err) => {
        console.warn('Geolocation error:', err);
        haptics.selection();
        setGpsToast(isAr ? 'تعذر الوصول إلى موقعك الحالي بدقة' : 'Could not detect your GPS location');
        setIsLocating(false);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Hardware-accelerated Mouse Pan Handlers
  const handleMouseDown = (e) => {
    if (draggingIdRef.current) return;
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartRef.current = {
      x: e.clientX - panRef.current.x,
      y: e.clientY - panRef.current.y
    };
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const newX = e.clientX - dragStartRef.current.x;
    const newY = e.clientY - dragStartRef.current.y;
    if (Math.hypot(newX - panRef.current.x, newY - panRef.current.y) > 6) {
      hasDraggedRef.current = true;
    }
    pendingPanRef.current = { x: newX, y: newY };
    scheduleRaf();
  };

  const handleMouseUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    panRef.current = pendingPanRef.current;
    zoomRef.current = pendingZoomRef.current;
    applyTransform(panRef.current, zoomRef.current, false);
    setIsDragging(false);
    setPan(panRef.current);
    setZoom(zoomRef.current);
  }, [applyTransform]);

  // Global window mouseup listener to avoid dragging getting stuck
  useEffect(() => {
    const onGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleMouseUp();
      }
    };
    window.addEventListener('mouseup', onGlobalMouseUp);
    return () => window.removeEventListener('mouseup', onGlobalMouseUp);
  }, [handleMouseUp]);

  // Hardware-accelerated Touch Handlers (Pan, Pinch-to-zoom, Double-tap)
  const handleTouchStart = (e) => {
    if (draggingIdRef.current) return;
    if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTapRef.current < 300) {
        haptics.commit();
        const nextZoom = zoomRef.current > 1.25 ? 1 : 2.2;
        const nextPan = zoomRef.current > 1.25 ? { x: 0, y: 0 } : panRef.current;
        zoomRef.current = nextZoom;
        pendingZoomRef.current = nextZoom;
        panRef.current = nextPan;
        pendingPanRef.current = nextPan;
        applyTransform(nextPan, nextZoom, true);
        setZoom(nextZoom);
        setPan(nextPan);
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;

      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      dragStartRef.current = {
        x: e.touches[0].clientX - panRef.current.x,
        y: e.touches[0].clientY - panRef.current.y
      };
      setIsDragging(true);
    } else if (e.touches.length === 2) {
      isDraggingRef.current = true;
      setIsDragging(true);
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      pinchStartDistRef.current = dist;
      pinchStartZoomRef.current = zoomRef.current;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDraggingRef.current) {
      const newX = e.touches[0].clientX - dragStartRef.current.x;
      const newY = e.touches[0].clientY - dragStartRef.current.y;
      if (Math.hypot(newX - panRef.current.x, newY - panRef.current.y) > 6) {
        hasDraggedRef.current = true;
      }
      pendingPanRef.current = { x: newX, y: newY };
      scheduleRaf();
    } else if (e.touches.length === 2 && pinchStartDistRef.current) {
      hasDraggedRef.current = true;
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = currentDist / pinchStartDistRef.current;
      const newZoom = Math.min(Math.max(pinchStartZoomRef.current * ratio, 0.65), 4.0);
      pendingZoomRef.current = Number(newZoom.toFixed(3));
      scheduleRaf();
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length === 1) {
      pinchStartDistRef.current = null;
      dragStartRef.current = {
        x: e.touches[0].clientX - panRef.current.x,
        y: e.touches[0].clientY - panRef.current.y
      };
    } else if (e.touches.length === 0) {
      pinchStartDistRef.current = null;
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
        panRef.current = pendingPanRef.current;
        zoomRef.current = pendingZoomRef.current;
        applyTransform(panRef.current, zoomRef.current, false);
        setIsDragging(false);
        setPan(panRef.current);
        setZoom(zoomRef.current);
      }
    }
  };

  // Mouse wheel zoom with RAF sync
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      const zoomDelta = e.deltaY < 0 ? 0.2 : -0.2;
      const nextZoom = Math.min(Math.max(Number((zoomRef.current + zoomDelta).toFixed(2)), 0.65), 4.0);
      zoomRef.current = nextZoom;
      pendingZoomRef.current = nextZoom;
      applyTransform(panRef.current, nextZoom, true);
      setZoom(nextZoom);
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [applyTransform]);

  // Station Operating Hours Calculator
  const getStationOperatingHours = (st) => {
    const hours = OPERATING_HOURS?.regular || SCHEDULE_INFO?.regular || {};
    const first = isAr
      ? (hours.firstTrainDepartureAr || '05:15 صباحاً')
      : (hours.firstTrainDeparture || '05:15 AM');

    let last = '11:45 PM';
    if (st?.isInterchange) {
      last = '12:25 AM';
    } else if (st?.lines?.includes('line2')) {
      last = hours.lastTrainLine2 || '11:55 PM';
    } else if (st?.lines?.includes('line1')) {
      last = hours.lastTrainLine1 || '11:45 PM';
    } else if (st?.lines?.includes('line3')) {
      last = hours.lastTrainLine3 || '11:45 PM';
    } else if (st?.lines?.includes('lrt')) {
      last = '11:00 PM';
    } else if (st?.lines?.includes('monorail_east') || st?.lines?.includes('monorail_west')) {
      last = '11:30 PM';
    }

    const lastFormatted = isAr
      ? last.replace('PM', 'م').replace('AM', 'ص')
      : last;

    return { first, last: lastFormatted };
  };

  // Fuzzy prefix & substring matching for stations search
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const qNormAr = normalizeArabic(q);

    const scored = STATIONS.map((st) => {
      let score = 999;
      const nameEn = st.nameEn.toLowerCase();
      const nameAr = st.nameAr;
      const normAr = normalizeArabic(nameAr);

      if (nameEn === q || normAr === qNormAr) score = 1;
      else if (nameEn.startsWith(q)) score = 2;
      else if (normAr.startsWith(qNormAr)) score = 2;
      else if (st.aliasesEn?.some((a) => a.toLowerCase().startsWith(q))) score = 3;
      else if (st.aliasesAr?.some((a) => normalizeArabic(a).startsWith(qNormAr))) score = 3;
      else if (nameEn.includes(q) || normAr.includes(qNormAr)) score = 5;
      else if (st.aliasesEn?.some((a) => a.toLowerCase().includes(q)) || st.aliasesAr?.some((a) => normalizeArabic(a).includes(qNormAr))) score = 6;
      else if (st.landmarks?.some((l) => l.toLowerCase().includes(q)) || st.landmarksAr?.some((l) => normalizeArabic(l).includes(qNormAr))) score = 8;

      let distanceKm = null;
      let walkMins = null;
      if (userLocation) {
        distanceKm = getDistanceKm(userLocation.lat, userLocation.lng, st.lat, st.lng);
        walkMins = estimateWalkMinutes(distanceKm);
      }

      return { st, score, distanceKm, walkMins };
    }).filter((item) => item.score < 999);

    scored.sort((a, b) => a.score - b.score);
    return scored.slice(0, 6);
  }, [searchQuery, userLocation]);

  // Stable station select callback for memoized StationNode items
  const handleSelectStation = useCallback((st) => {
    if (hasDraggedRef.current) return;
    focusOnStation(st, zoomRef.current > 1.4 ? zoomRef.current : 1.9);
  }, [focusOnStation]);

  return (
    <div className="relative w-full h-full flex-1 flex flex-col overflow-hidden select-none bg-slate-950 text-start min-h-[calc(100dvh-4.5rem)]">
      {/* Main Map Viewer Canvas Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-full flex-1 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{
          touchAction: 'none',
          contain: 'paint'
        }}
      >
        {/* Subtle grid background (Hidden in Battery Saver Mode for zero composite overhead) */}
        {!isBatterySaver && (
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        )}

        {/* Floating Top Control Deck: Search Capsule + Mode Switcher & Line Filters */}
        <div className="absolute top-3 inset-x-3 sm:inset-x-5 z-30 flex flex-col gap-2 pointer-events-none">
          {/* Floating Search Bar */}
          <div ref={searchRef} className="pointer-events-auto">
            <div className="relative">
              <div className="flex items-center bg-white/95 dark:bg-[#111113]/95 backdrop-blur-xl rounded-2xl border border-slate-200/90 dark:border-[#2E2E36] shadow-xl px-3.5 py-2.5 transition-all focus-within:ring-2 focus-within:ring-[#FF4A1C]/40">
                <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 me-2.5 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchFocused(true);
                  }}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder={isAr ? '🔍 ابحث عن محطة... (مثل: الشهداء، السادات، الأوبرا)' : '🔍 Search station... (e.g. Sadat, Opera, Dokki)'}
                  className="w-full bg-transparent text-xs sm:text-sm font-cairo font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#71717A] outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchFocused(false);
                    }}
                    className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg ms-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Dropdown Suggestion List */}
              {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 inset-x-0 z-40 bg-white/98 dark:bg-[#141417]/98 backdrop-blur-2xl rounded-2xl border border-slate-200 dark:border-[#2E2E36] shadow-2xl overflow-hidden max-h-72 overflow-y-auto no-scrollbar animate-in fade-in slide-in-from-top-2 duration-150 divide-y divide-slate-100 dark:divide-[#202026]">
                  {searchResults.map(({ st, distanceKm, walkMins }) => {
                    return (
                      <div
                        key={st.id}
                        onClick={() => {
                          setSearchQuery(isAr ? st.nameAr : st.nameEn);
                          setIsSearchFocused(false);
                          focusOnStation(st, 1.9);
                        }}
                        className="px-4 py-2.5 flex items-center justify-between gap-3 hover:bg-slate-100/80 dark:hover:bg-[#1F1F24] cursor-pointer transition-colors"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-cairo font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                              {isAr ? st.nameAr : st.nameEn}
                            </span>
                            {st.isInterchange && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-cairo font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400">
                                {isAr ? 'تبادلية' : 'Hub'}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 mt-1">
                            {st.lines.map((lk) => {
                              const li = METRO_LINES[lk];
                              const chipColor = li?.color || '#2563EB';
                              const chipName = isAr ? (li?.shortNameAr || lk) : (li?.shortNameEn || lk);
                              return (
                                <span
                                  key={lk}
                                  className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full text-[9px] font-space font-bold text-white shadow-xs"
                                  style={{ backgroundColor: chipColor }}
                                >
                                  <span>{chipName}</span>
                                </span>
                              );
                            })}
                            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 truncate">
                              • {isAr ? st.nameEn : st.nameAr}
                            </span>
                          </div>
                        </div>

                        {/* Distance pill if available */}
                        {distanceKm !== null && (
                          <div className="text-end flex-shrink-0">
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-lg border border-blue-200/50 dark:border-blue-900/50">
                              <Navigation className="w-2.5 h-2.5 transform -rotate-45" />
                              <span>{formatDistance(distanceKm, lang)}</span>
                            </span>
                            {walkMins && (
                              <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                                ~{walkMins} {isAr ? 'دقيقة مشياً' : 'min walk'}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Floating Mode Switcher & Tools Bar */}
          <div className="pointer-events-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-0.5">
            {/* Vector Mode Line Filters */}
            <div className="flex items-center gap-1 bg-white/95 dark:bg-[#111113]/95 backdrop-blur-xl p-1 rounded-2xl border border-slate-200/90 dark:border-[#26262C] shadow-lg flex-shrink-0 overflow-x-auto no-scrollbar">
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setActiveLineFilter('all');
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-xl font-space font-bold transition-all whitespace-nowrap ${
                    activeLineFilter === 'all'
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                      : 'text-slate-600 dark:text-[#A1A1AA] hover:bg-slate-100 dark:hover:bg-[#1E1E24]'
                  }`}
                >
                  {t.stationExplorer?.allLines || (isAr ? 'الكل' : 'All')}
                </PressableScale>
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setActiveLineFilter('line1');
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-xl font-space font-bold transition-all whitespace-nowrap ${
                    activeLineFilter === 'line1'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-[#1E1E24]'
                  }`}
                >
                  {isAr ? '1 أزرق' : 'L1'}
                </PressableScale>
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setActiveLineFilter('line2');
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-xl font-space font-bold transition-all whitespace-nowrap ${
                    activeLineFilter === 'line2'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-[#1E1E24]'
                  }`}
                >
                  {isAr ? '2 أحمر' : 'L2'}
                </PressableScale>
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setActiveLineFilter('line3');
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-xl font-space font-bold transition-all whitespace-nowrap ${
                    activeLineFilter === 'line3'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-[#1E1E24]'
                  }`}
                >
                  {isAr ? '3 أخضر' : 'L3'}
                </PressableScale>
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setActiveLineFilter('lrt');
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-xl font-space font-bold transition-all whitespace-nowrap ${
                    activeLineFilter === 'lrt'
                      ? 'bg-[#06B6D4] text-white shadow-sm'
                      : 'text-[#06B6D4] hover:bg-cyan-50 dark:hover:bg-[#1E1E24]'
                  }`}
                >
                  {isAr ? 'LRT العاصمة' : 'LRT'}
                </PressableScale>
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setActiveLineFilter('monorail_east');
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-xl font-space font-bold transition-all whitespace-nowrap ${
                    activeLineFilter === 'monorail_east'
                      ? 'bg-[#EA580C] text-white shadow-sm'
                      : 'text-[#EA580C] hover:bg-orange-50 dark:hover:bg-[#1E1E24]'
                  }`}
                >
                  {isAr ? 'مونوريل شرق' : 'Mono East'}
                </PressableScale>
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setActiveLineFilter('monorail_west');
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-xl font-space font-bold transition-all whitespace-nowrap ${
                    activeLineFilter === 'monorail_west'
                      ? 'bg-[#D97706] text-white shadow-sm'
                      : 'text-[#D97706] hover:bg-amber-50 dark:hover:bg-[#1E1E24]'
                  }`}
                >
                  {isAr ? 'مونوريل غرب' : 'Mono West'}
                </PressableScale>
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setActiveLineFilter('brt');
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-xl font-space font-bold transition-all whitespace-nowrap ${
                    activeLineFilter === 'brt'
                      ? 'bg-[#8B5CF6] text-white shadow-sm'
                      : 'text-[#8B5CF6] hover:bg-purple-50 dark:hover:bg-[#1E1E24]'
                  }`}
                >
                  {isAr ? 'BRT الترددي' : 'BRT'}
                </PressableScale>
              </div>

            {/* Action Controls: Integrated Overlay + FPS Switcher + Performance Modal + Official PDF Map */}
            <div className="flex items-center gap-1.5 ms-auto flex-shrink-0">
              {/* Integrated Transit Map Overlay Toggle */}
              {isVector && (
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setShowIntegratedOverlay((prev) => {
                      const next = !prev;
                      try {
                        localStorage.setItem('metro_map_integrated_overlay', String(next));
                      } catch {}
                      return next;
                    });
                  }}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-2xl text-xs font-space font-bold border shadow-lg backdrop-blur-xl transition-all ${
                    showIntegratedOverlay
                      ? 'bg-[#2DD881]/20 text-[#2DD881] border-[#2DD881]/40 shadow-[#2DD881]/15'
                      : 'bg-white/95 dark:bg-[#111113]/95 text-slate-700 dark:text-[#A1A1AA] border-slate-200/90 dark:border-[#26262C]'
                  }`}
                  title={isAr ? 'خريطة النقل الشامل المتكاملة كخلفية تفاعلية' : 'Toggle Integrated Transit Map Overlay'}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline">{isAr ? 'خلفية النقل الشامل' : 'Overlay Map'}</span>
                  <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${showIntegratedOverlay ? 'bg-[#2DD881] text-slate-950 font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                    {showIntegratedOverlay ? 'ON' : 'OFF'}
                  </span>
                </PressableScale>
              )}

              {/* 120 FPS / 60 FPS Toggle Button */}
              <PressableScale
                onClick={() => {
                  haptics.selection();
                  const nextFps = fpsMode === '120' ? '60' : '120';
                  setFpsMode(nextFps);
                  try {
                    localStorage.setItem('metro_map_fps_mode', nextFps);
                  } catch {}
                }}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-2xl text-xs font-space font-bold border shadow-lg backdrop-blur-xl transition-colors ${
                  fpsMode === '120'
                    ? 'bg-cyan-500/15 text-cyan-500 border-cyan-500/35'
                    : 'bg-white/95 dark:bg-[#111113]/95 text-emerald-600 dark:text-emerald-400 border-slate-200/90 dark:border-[#26262C]'
                }`}
                title={isAr ? `تبديل معدل الإطارات (الحالي: ${fpsMode} FPS) - انقر لتغيير الوضع` : `Toggle frame rate mode (Current: ${fpsMode} FPS)`}
              >
                <Activity className={`w-3.5 h-3.5 ${fpsMode === '120' ? 'text-cyan-400 animate-pulse' : 'text-emerald-500'}`} />
                <span className="font-mono">{fpsMode} FPS</span>
              </PressableScale>

              {/* Drag & Drop Station Calibration Studio Toggle */}
              <PressableScale
                onClick={() => {
                  haptics.selection();
                  setIsCalibrating((prev) => !prev);
                }}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-2xl text-xs font-space font-bold border shadow-lg backdrop-blur-xl transition-all ${
                  isCalibrating
                    ? 'bg-amber-500 text-white border-amber-400 shadow-amber-500/25 ring-2 ring-amber-400/40'
                    : 'bg-white/95 dark:bg-[#111113]/95 text-slate-700 dark:text-[#A1A1AA] border-slate-200/90 dark:border-[#26262C]'
                }`}
                title={isAr ? 'تفعيل وضع سحب وإفلات المحطات لمعايرتها فوق الخريطة مباشرة' : 'Toggle Drag & Drop Station Calibration Studio'}
              >
                <Wrench className={`w-3.5 h-3.5 ${isCalibrating ? 'text-white' : 'text-amber-500'}`} />
                <span className="hidden md:inline">{isAr ? 'معايرة المحطات' : 'Edit Stations'}</span>
                <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${isCalibrating ? 'bg-white text-amber-800 font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                  {isCalibrating ? 'ON' : 'OFF'}
                </span>
              </PressableScale>

              {/* Performance / Settings Modal Toggle */}
              <PressableScale
                onClick={() => {
                  haptics.selection();
                  setShowPerfModal(true);
                }}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-2xl text-xs font-space font-bold bg-white/95 dark:bg-[#111113]/95 text-blue-600 dark:text-blue-400 border border-slate-200/90 dark:border-[#26262C] shadow-lg backdrop-blur-xl transition-colors"
                title={isAr ? 'خيارات تحسين أداء وسلاسة الخريطة' : 'Map Performance Settings & Options'}
              >
                <Sliders className="w-3.5 h-3.5 text-blue-500" />
                <span className="hidden md:inline">{isAr ? 'الضبط' : 'Settings'}</span>
              </PressableScale>
            </div>
          </div>
        </div>

        {/* Calibration Studio Floating Toolbar when Active */}
        {isCalibrating && (
          <div className="absolute top-20 inset-x-3 sm:inset-x-auto sm:start-6 z-40 bg-slate-900/95 dark:bg-[#111113]/95 text-white backdrop-blur-xl p-3 sm:p-4 rounded-3xl border border-amber-500/40 shadow-2xl flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200 select-none">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping flex-shrink-0" />
              <div>
                <p className="text-xs font-bold font-cairo text-amber-300">
                  {isAr ? '🛠️ وضع معايرة وتعديل المحطات نشط' : '🛠️ Drag & Drop Calibration Studio Active'}
                </p>
                <p className="text-[10.5px] text-slate-300 font-mono">
                  {activeDraggingStationId
                    ? `${activeDraggingStationId}: (${stationCoords[activeDraggingStationId]?.x}, ${stationCoords[activeDraggingStationId]?.y})`
                    : (isAr ? 'اسحب أي نقطة محطة وضعها فوق مكانها في الخريطة' : 'Click & drag any station dot onto the map')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 ms-auto">
              <button
                type="button"
                onClick={handleCopyCoordinates}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#2DD881] hover:bg-[#25b86e] text-slate-950 shadow-md shadow-[#2DD881]/20 active:scale-95 transition-all touch-manipulation cursor-pointer"
                title={isAr ? 'نسخ كود mapCoordinates.js للحافظة' : 'Copy formatted mapCoordinates.js code to clipboard'}
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{isAr ? 'نسخ الإحداثيات' : 'Copy Coordinates'}</span>
              </button>

              <button
                type="button"
                onClick={handleResetCoordinates}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700 active:scale-95 transition-all touch-manipulation cursor-pointer"
                title={isAr ? 'إعادة ضبط للإحداثيات الأصلية' : 'Reset to default coordinates'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isAr ? 'إعادة ضبط' : 'Reset'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsCalibrating(false)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 active:scale-95 transition-all cursor-pointer"
                title={isAr ? 'إنهاء وضع التعديل' : 'Exit Calibration'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Copy Coordinates Toast Notification */}
        {copiedToast && (
          <div className="fixed top-24 inset-x-4 z-50 flex justify-center pointer-events-none animate-in fade-in duration-200">
            <div className="px-4 py-2.5 rounded-2xl bg-emerald-600 text-white text-xs font-cairo font-bold shadow-2xl border border-emerald-400/30 flex items-center gap-2">
              <CheckCheck className="w-4 h-4 text-emerald-200 flex-shrink-0" />
              <span>{copiedToast}</span>
            </div>
          </div>
        )}

        {/* GPS Toast Notification */}
        {gpsToast && (
          <div className="absolute top-16 inset-x-4 z-40 flex justify-center pointer-events-none animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-2 rounded-2xl bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-950 backdrop-blur-md shadow-2xl border border-slate-700 dark:border-slate-200 flex items-center gap-2 text-xs font-cairo font-bold">
              <Navigation className="w-3.5 h-3.5 text-[#2DD881] transform -rotate-45 animate-pulse" />
              <span>{gpsToast}</span>
            </div>
          </div>
        )}

        {/* ================= MAP CANVAS: PURE HIGH-PERFORMANCE INTERACTIVE VECTOR SVG ================= */}
        <svg
          ref={mapSurfaceRef}
          viewBox="0 0 1560 1040"
          className="w-full h-full"
          onPointerMove={isCalibrating ? handleStationPointerMove : undefined}
          onPointerUp={isCalibrating ? handleStationPointerUp : undefined}
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {/* Optional Integrated Transit Map Background Overlay with Clean Calibration Config */}
          {showIntegratedOverlay && (
            <image
              href={MAP_OVERLAY_CONFIG.href}
              x={MAP_OVERLAY_CONFIG.x}
              y={MAP_OVERLAY_CONFIG.y}
              width={MAP_OVERLAY_CONFIG.width}
              height={MAP_OVERLAY_CONFIG.height}
              preserveAspectRatio={MAP_OVERLAY_CONFIG.preserveAspectRatio}
              opacity={MAP_OVERLAY_CONFIG.opacity}
              style={{ filter: MAP_OVERLAY_CONFIG.filter }}
              className="pointer-events-none select-none transition-opacity duration-300"
            />
          )}

          {/* Crosshairs during active station drag in Calibration Studio */}
          {isCalibrating && activeDraggingStationId && stationCoords[activeDraggingStationId] && (
            <g className="pointer-events-none select-none opacity-80">
              <line
                x1="0"
                y1={stationCoords[activeDraggingStationId].y}
                x2="1560"
                y2={stationCoords[activeDraggingStationId].y}
                stroke="#EAB308"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <line
                x1={stationCoords[activeDraggingStationId].x}
                y1="0"
                x2={stationCoords[activeDraggingStationId].x}
                y2="1040"
                stroke="#EAB308"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </g>
          )}

          {/* Dynamic SVG Layers (River Nile, Dynamic Polylines, Badges) */}
          <StaticMapSvgLayers
            activeLineFilter={activeLineFilter}
            isAr={isAr}
            isBatterySaver={isBatterySaver}
            showIntegratedOverlay={showIntegratedOverlay}
            linePoints={dynamicLinePoints}
          />

          {/* Memoized Station Nodes with zoom-rescaling labels & drag handles */}
          {STATIONS.map((st) => {
            const coord = stationCoords[st.id] || MAP_STATION_COORDS[st.id];
            if (!coord) return null;

            if (activeLineFilter !== 'all' && !st.lines.includes(activeLineFilter)) {
              return null;
            }

            return (
              <StationNode
                key={st.id}
                st={st}
                coord={coord}
                isSelected={selectedStation?.id === st.id}
                isBatterySaver={isBatterySaver}
                isAr={isAr}
                zoomLevel={zoom}
                showIntegratedOverlay={showIntegratedOverlay}
                isCalibrating={isCalibrating}
                isDragging={activeDraggingStationId === st.id}
                onPointerDown={handleStationPointerDown}
                onSelectStation={handleSelectStation}
              />
            );
          })}
        </svg>

        {/* Bottom Helper Pill */}
        <div className="absolute bottom-20 sm:bottom-22 start-3.5 sm:start-5 z-20 bg-white/95 dark:bg-[#111113]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/90 dark:border-[#26262C] text-[11px] font-mono font-bold text-slate-700 dark:text-[#A1A1AA] shadow-lg flex items-center gap-1.5 pointer-events-none">
          <Info className="w-3.5 h-3.5 text-[#FF4A1C]" />
          <span>
            {isCalibrating
              ? (isAr ? '🛠️ وضع المعايرة نشط • اسحب أي محطة وضعها فوق مكانها' : '🛠️ Calibration Mode Active • Drag any station dot')
              : isBatterySaver
              ? (isAr ? `وضع توفير الطاقة مفعل (${fpsMode} FPS) • انقر على أي محطة` : `Battery Saver Mode Active (${fpsMode} FPS) • Tap station`)
              : (t.mapTab?.tapToSelect || (isAr ? `المتجهة السلسة ${fpsMode} FPS • انقر لاختيار محطة` : `Smooth ${fpsMode} FPS • Tap station`))}
          </span>
        </div>

        {/* Floating UK-style FAB group at bottom-end of the map */}
        <div className="absolute bottom-20 sm:bottom-22 end-3.5 sm:end-5 z-20 flex flex-col items-center gap-2 pointer-events-auto">
          {/* 1. Floating Route FAB (◯➔◯ مسار / Route) */}
          <div className="relative">
            <PressableScale
              onClick={() => {
                haptics.selection();
                if (selectedStation) {
                  setShowRouteCapsuleMenu((prev) => !prev);
                } else {
                  onSetOrigin?.('al_shohadaa');
                }
              }}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#FF4A1C] hover:bg-[#e03d12] text-white text-xs font-cairo font-bold shadow-xl shadow-[#FF4A1C]/35 border border-white/20 transition-all"
              title={isAr ? 'تخطيط مسار' : 'Plan Route'}
            >
              <span className="flex items-center gap-0.5 font-mono text-[10px] leading-none text-white font-black">
                <span className="w-2 h-2 rounded-full border-[1.5px] border-white inline-block" />
                <span className="text-[9px]">➔</span>
                <span className="w-2 h-2 rounded-full bg-white inline-block" />
              </span>
              <span>{isAr ? 'مسار' : 'Route'}</span>
            </PressableScale>

            {/* Route Capsule Popover Menu */}
            {showRouteCapsuleMenu && selectedStation && (
              <div className="absolute bottom-full mb-2 end-0 z-50 w-44 bg-white dark:bg-[#1A1A1E] rounded-2xl p-1.5 border border-slate-200 dark:border-[#2E2E36] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150">
                <PressableScale
                  onClick={() => {
                    haptics.selection();
                    setShowRouteCapsuleMenu(false);
                    onSetOrigin(selectedStation.id);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-[#26262C] text-xs font-cairo font-bold text-slate-800 dark:text-slate-100 transition-colors text-start"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="flex-1">{isAr ? 'من هنا (الانطلاق)' : 'From Here (Origin)'}</span>
                </PressableScale>

                <PressableScale
                  onClick={() => {
                    haptics.success();
                    setShowRouteCapsuleMenu(false);
                    onSetDestination(selectedStation.id);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-[#26262C] text-xs font-cairo font-bold text-slate-800 dark:text-slate-100 transition-colors text-start"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF4A1C]" />
                  <span className="flex-1">{isAr ? 'إلى هنا (الوجهة)' : 'To Here (Destination)'}</span>
                </PressableScale>
              </div>
            )}
          </div>

          {/* 2. GPS Re-Center FAB (↗ / Navigation) */}
          <PressableScale
            onClick={handleGpsReCenter}
            disabled={isLocating}
            className="w-10 h-10 rounded-2xl bg-white dark:bg-[#17171A] text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-[#212127] border border-slate-200/90 dark:border-[#2E2E36] shadow-xl flex items-center justify-center transition-all disabled:opacity-50"
            title={isAr ? 'تحديد أقرب محطة بالـ GPS' : 'Locate Nearest Station via GPS'}
          >
            <Navigation className={`w-4 h-4 ${isLocating ? 'animate-spin text-amber-500' : 'transform -rotate-45'}`} />
          </PressableScale>

          {/* 3. Zoom Controls Pill Stack */}
          <div className="flex flex-col bg-white dark:bg-[#17171A] rounded-2xl border border-slate-200/90 dark:border-[#2E2E36] shadow-xl overflow-hidden divide-y divide-slate-200/70 dark:divide-[#26262C]">
            <PressableScale
              onClick={handleZoomIn}
              className="w-10 h-9 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#212127] transition-colors"
              title={t.mapTab?.zoomIn || 'Zoom In'}
            >
              <ZoomIn className="w-4 h-4" />
            </PressableScale>
            <PressableScale
              onClick={handleZoomOut}
              className="w-10 h-9 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#212127] transition-colors"
              title={t.mapTab?.zoomOut || 'Zoom Out'}
            >
              <ZoomOut className="w-4 h-4" />
            </PressableScale>
            <PressableScale
              onClick={handleReset}
              className="w-10 h-9 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#212127] transition-colors"
              title={t.mapTab?.resetView || 'Reset View'}
            >
              <RotateCcw className="w-4 h-4" />
            </PressableScale>
          </div>
        </div>
      </div>

      {/* UK-Style Station Bottom Sheet Callout (TfL / Frosted Sheet) */}
      {selectedStation && (
        <div className="fixed bottom-20 inset-x-3 sm:inset-x-auto sm:end-6 sm:w-96 z-40 bg-white/95 dark:bg-[#111113]/95 backdrop-blur-xl rounded-[28px] p-4 sm:p-5 border border-slate-200/80 dark:border-[#26262C] shadow-2xl animate-ios-sheet overflow-visible transition-all">
          {/* Sheet Grab Handle Pill */}
          <div className="w-10 h-1 bg-slate-300 dark:bg-[#33333A] rounded-full mx-auto -mt-1 mb-3.5" />

          {/* Sheet Header: Station Typography & Controls */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-cairo font-black text-slate-900 dark:text-white leading-tight">
                  {isAr ? selectedStation.nameAr : selectedStation.nameEn}
                </h3>
                {selectedStation.isInterchange && (
                  <span className="text-[11px] font-cairo font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>{isAr ? 'محطة تبادلية كبرى' : 'Interchange Hub'}</span>
                  </span>
                )}
              </div>

              <p className="text-xs font-space font-medium text-slate-500 dark:text-[#A1A1AA] mt-0.5">
                {isAr ? selectedStation.nameEn : selectedStation.nameAr}
                {selectedStation.zone && ` • ${selectedStation.zone}`}
              </p>

              {/* Line Badges: Styled UK Tube Pill Chips */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                {selectedStation.lines.map((lineKey) => {
                  const lineInfo = METRO_LINES[lineKey];
                  const chipColor = lineInfo?.color || '#2563EB';
                  const chipName = isAr
                    ? (lineInfo?.shortNameAr || lineKey)
                    : (lineInfo?.shortNameEn || lineKey);

                  return (
                    <span
                      key={lineKey}
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-space font-bold text-white shadow-sm"
                      style={{ backgroundColor: chipColor }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                      <span>{chipName}</span>
                    </span>
                  );
                })}

                {/* Nearby Landmark preview */}
                {selectedStation.landmarks && selectedStation.landmarks.length > 0 && (
                  <span className="text-[11px] font-cairo text-slate-500 dark:text-[#8E8E93] truncate max-w-[200px] sm:max-w-xs">
                    • {isAr ? selectedStation.landmarksAr?.slice(0, 2).join('، ') : selectedStation.landmarks?.slice(0, 2).join(', ')}
                  </span>
                )}
              </div>
            </div>

            {/* Close Sheet Button */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <PressableScale
                onClick={() => {
                  haptics.light();
                  setSelectedStation(null);
                  setShowRouteCapsuleMenu(false);
                }}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-[#17171A] border border-slate-200/50 dark:border-[#26262C]"
                title={isAr ? 'إغلاق' : 'Close'}
              >
                <X className="w-4 h-4" />
              </PressableScale>
            </div>
          </div>

          {/* Operating Hours: مواعيد أول وآخر قطار */}
          {(() => {
            const hours = getStationOperatingHours(selectedStation);
            return (
              <div className="mt-3.5 bg-slate-50/90 dark:bg-[#17171A]/90 p-3 rounded-2xl border border-slate-200/70 dark:border-[#26262C] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                    <Train className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-cairo font-bold text-slate-900 dark:text-white truncate">
                        {isAr ? 'مواعيد أول وآخر قطار' : 'First & Last Train Times'}
                      </p>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-[11px] font-cairo text-slate-500 dark:text-[#A1A1AA] truncate">
                      {isAr ? 'مواعيد التشغيل الرسمية لشبكة المترو' : 'Official network schedule'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="text-end">
                    <div className="text-[10px] font-cairo text-slate-400 dark:text-slate-500 font-bold">
                      {isAr ? 'أول قيام' : 'First'}
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                      {hours.first}
                    </div>
                  </div>
                  <div className="h-6 w-px bg-slate-200 dark:bg-[#26262C]" />
                  <div className="text-end">
                    <div className="text-[10px] font-cairo text-slate-400 dark:text-slate-500 font-bold">
                      {isAr ? 'آخر قيام' : 'Last'}
                    </div>
                    <div className="text-xs font-mono font-bold text-[#FF4A1C] tabular-nums" dir="ltr">
                      {hours.last}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Quick Route Action Dual Buttons */}
          <div className="mt-3.5 grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-[#1D1D22]">
            <PressableScale
              onClick={() => {
                haptics.selection();
                onSetOrigin(selectedStation.id);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200 dark:hover:bg-[#212127] text-xs font-cairo font-bold text-slate-800 dark:text-white border border-slate-200/80 dark:border-[#26262C] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>{isAr ? 'من هنا (نقطة البداية)' : 'From Here (Origin)'}</span>
            </PressableScale>

            <PressableScale
              onClick={() => {
                haptics.success();
                onSetDestination(selectedStation.id);
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-[#FF4A1C] hover:bg-[#e03d12] text-xs font-cairo font-bold text-white transition-colors shadow-sm shadow-[#FF4A1C]/25"
            >
              <Route className="w-3.5 h-3.5" />
              <span>{isAr ? 'إلى هنا (الوجهة)' : 'To Here (Destination)'}</span>
            </PressableScale>
          </div>

          {/* Station Full Details Explorer Trigger */}
          {onSelectStationForModal && (
            <div className="mt-2 text-center">
              <PressableScale
                onClick={() => {
                  haptics.light();
                  onSelectStationForModal(selectedStation);
                }}
                className="inline-flex items-center gap-1 py-1 px-3 text-[11px] font-cairo font-bold text-slate-500 dark:text-[#A1A1AA] hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                <Info className="w-3.5 h-3.5" />
                <span>{isAr ? 'عرض تفاصيل ومرافق ومخارج المحطة' : 'View full station facilities & exits'}</span>
                <ChevronRight className="w-3 h-3 rtl:rotate-180" />
              </PressableScale>
            </div>
          )}
        </div>
      )}

      {/* ================= Performance Options & GPU Acceleration Modal ================= */}
      {showPerfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#141417] rounded-3xl p-5 sm:p-6 max-w-lg w-full border border-slate-200 dark:border-[#2E2E36] shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto no-scrollbar">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#222228]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-cairo font-bold text-slate-900 dark:text-white">
                    {isAr ? 'خيارات أداء وسلاسة الخريطة' : 'Map Performance & Rendering'}
                  </h3>
                  <p className="text-xs font-space text-slate-500 dark:text-[#8E8E93]">
                    {isAr ? 'تسريع العرض ومعالجة التقطيع (60 - 120 FPS)' : 'Hardware acceleration & lag fixes'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPerfModal(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-[#1E1E24]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Live Performance Diagnostic Pill */}
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-2.5 text-xs text-emerald-700 dark:text-emerald-400 font-mono font-bold">
              <Zap className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>
                {isAr
                  ? `حالة العرض: ${fpsMode} FPS فائق السلاسة • تسريع GPU العتادي مفعل`
                  : `Engine: ${fpsMode} FPS Ultra Smooth • GPU Hardware Acceleration Active`}
              </span>
            </div>

            {/* Display Framerate Selection: 120 FPS vs 60 FPS */}
            <div className="space-y-2">
              <p className="text-xs font-cairo font-bold text-slate-700 dark:text-[#A1A1AA]">
                {isAr ? 'معدل تحديث الشاشة وسلاسة الحركة (Frame Rate):' : 'Display Refresh Rate & Motion Budget:'}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div
                  onClick={() => {
                    haptics.selection();
                    setFpsMode('120');
                    try { localStorage.setItem('metro_map_fps_mode', '120'); } catch {}
                  }}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                    fpsMode === '120'
                      ? 'bg-cyan-500/10 border-cyan-500/50 shadow-md ring-1 ring-cyan-500/30'
                      : 'bg-slate-50 dark:bg-[#19191D] border-slate-200/80 dark:border-[#26262C] hover:border-cyan-400/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="font-space font-extrabold text-sm text-cyan-600 dark:text-cyan-400">120 FPS</span>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-space font-bold bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                        {isAr ? 'فائق' : 'Ultra'}
                      </span>
                    </div>
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                      fpsMode === '120' ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-slate-300 dark:border-slate-600'
                    }`}>
                      {fpsMode === '120' && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                  <p className="text-[10px] font-cairo text-slate-500 dark:text-[#8E8E93] mt-1.5 leading-snug">
                    {isAr ? 'معدل 8.33ms بدون أي تقطيع لشاشات 120Hz و Apple ProMotion' : '8.33ms unthrottled for 120Hz & Apple ProMotion'}
                  </p>
                </div>

                <div
                  onClick={() => {
                    haptics.selection();
                    setFpsMode('60');
                    try { localStorage.setItem('metro_map_fps_mode', '60'); } catch {}
                  }}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                    fpsMode === '60'
                      ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-slate-50 dark:bg-[#19191D] border-slate-200/80 dark:border-[#26262C] hover:border-emerald-400/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-space font-extrabold text-sm text-emerald-600 dark:text-emerald-400">60 FPS</span>
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                      fpsMode === '60' ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 dark:border-slate-600'
                    }`}>
                      {fpsMode === '60' && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                  <p className="text-[10px] font-cairo text-slate-500 dark:text-[#8E8E93] mt-1.5 leading-snug">
                    {isAr ? 'معدل 16.67ms قياسي متوازن وموفر لاستهلاك البطارية' : '16.67ms standard power-efficient for 60Hz'}
                  </p>
                </div>
              </div>
            </div>

            {/* Background Map Overlay Option */}
            <div className="space-y-2">
              <p className="text-xs font-cairo font-bold text-slate-700 dark:text-[#A1A1AA]">
                {isAr ? 'خلفية خريطة النقل الشامل المتكاملة:' : 'Integrated Transit Map Background Overlay:'}
              </p>
              <div
                onClick={() => {
                  haptics.selection();
                  setShowIntegratedOverlay((prev) => {
                    const next = !prev;
                    try { localStorage.setItem('metro_map_integrated_overlay', String(next)); } catch {}
                    return next;
                  });
                }}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  showIntegratedOverlay
                    ? 'bg-[#2DD881]/10 border-[#2DD881]/40 shadow-sm'
                    : 'bg-slate-50 dark:bg-[#19191D] border-slate-200/80 dark:border-[#26262C]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Layers className={`w-5 h-5 ${showIntegratedOverlay ? 'text-[#2DD881]' : 'text-slate-400'}`} />
                  <div>
                    <span className="font-cairo font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {isAr ? 'عرض خريطة TfC الشاملة كخلفية تفاعلية' : 'Show TfC Integrated Map as Background'}
                    </span>
                    <p className="text-[10px] font-cairo text-slate-500 dark:text-[#8E8E93]">
                      {isAr
                        ? 'عرض خريطة النقل الإقليمية المعتمدة عالية الدقة تحت مسارات المترو المتجهة'
                        : 'Overlays official high-res network map behind the interactive vector stations'}
                    </p>
                  </div>
                </div>
                <div className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold ${
                  showIntegratedOverlay
                    ? 'bg-[#2DD881] text-slate-950 shadow-sm'
                    : 'bg-slate-200 dark:bg-[#2A2A32] text-slate-600 dark:text-slate-400'
                }`}>
                  {showIntegratedOverlay ? (isAr ? 'مفعل' : 'ON') : (isAr ? 'معطل' : 'OFF')}
                </div>
              </div>
            </div>

            {/* Selectable Options Section */}
            <div className="space-y-2.5">
              <p className="text-xs font-cairo font-bold text-slate-600 dark:text-[#A1A1AA]">
                {isAr ? 'اختر نمط عرض الخريطة الأنسب لجهازك:' : 'Select optimal map rendering mode:'}
              </p>

              {/* Option A: Smooth Vector Map */}
              <div
                onClick={() => handleToggleBatterySaver(false)}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  !isBatterySaver
                    ? 'bg-blue-500/10 border-blue-500/50 shadow-md ring-1 ring-blue-500/30'
                    : 'bg-slate-50 dark:bg-[#19191D] border-slate-200/80 dark:border-[#26262C] hover:border-blue-400/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-xl">🚀</span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-cairo font-bold text-sm text-slate-900 dark:text-white">
                          {isAr ? 'المتجهة السلسة (أداء فائق وسرعة عالية)' : 'Smooth Vector Map (High FPS & Fast)'}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-space font-bold bg-blue-500/20 text-blue-600 dark:text-blue-400">
                          {isAr ? 'موصى به' : 'Recommended'}
                        </span>
                      </div>
                      <p className="text-xs font-cairo text-slate-500 dark:text-[#8E8E93] mt-1 leading-relaxed">
                        {isAr
                          ? 'خريطة تفاعلية كاملة مع تأثيرات ضوئية متحركة وتكبير فائق السلاسة بتسريع كارت الشاشة GPU.'
                          : 'Full interactive SVG map with animated station spotlights, vector lines, and GPU-driven pan/zoom.'}
                      </p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                    !isBatterySaver ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 dark:border-slate-600'
                  }`}>
                    {!isBatterySaver && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              </div>

              {/* Option C: Low-Power / Battery Saver Mode */}
              <div
                onClick={() => handleToggleBatterySaver(true)}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  isBatterySaver
                    ? 'bg-amber-500/10 border-amber-500/50 shadow-md ring-1 ring-amber-500/30'
                    : 'bg-slate-50 dark:bg-[#19191D] border-slate-200/80 dark:border-[#26262C] hover:border-amber-400/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-xl">⚡</span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-cairo font-bold text-sm text-slate-900 dark:text-white">
                          {isAr ? 'وضع توفير الطاقة والبطارية (للأجهزة الاقتصادية)' : 'Low-Power / Battery Saver Mode'}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-space font-bold bg-amber-500/20 text-amber-700 dark:text-amber-400">
                          {isAr ? 'خفيف جداً' : 'Ultra Light'}
                        </span>
                      </div>
                      <p className="text-xs font-cairo text-slate-500 dark:text-[#8E8E93] mt-1 leading-relaxed">
                        {isAr
                          ? 'يلغي النبضات الضوئية المستمرة والظلال المعقدة لتخفيف العبء بنسبة 70% وتوفير شحن البطارية على الهواتف الضعيفة.'
                          : 'Disables continuous SVG pulse animations and heavy drop-shadow filters for maximum battery efficiency on budget devices.'}
                      </p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                    isBatterySaver ? 'bg-amber-500 border-amber-500 text-white' : 'border-slate-300 dark:border-slate-600'
                  }`}>
                    {isBatterySaver && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Diagnostic Breakdown */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#19191D] border border-slate-200/80 dark:border-[#26262C] space-y-2">
              <p className="text-xs font-cairo font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-500" />
                <span>{isAr ? 'التحسينات البرمجية المنفذة لحل مشكلة التقطيع:' : 'Implemented Lag-Elimination Optimizations:'}</span>
              </p>
              <ul className="text-[11px] font-cairo text-slate-600 dark:text-[#8E8E93] space-y-1.5 list-disc list-inside">
                <li>
                  <strong className="text-slate-900 dark:text-slate-200 font-bold">
                    {isAr ? 'فك اشتباك تأثيرات الحركة (Transition Decoupling):' : 'Transition Decoupling:'}
                  </strong>{' '}
                  {isAr ? 'إلغاء CSS transition أثناء السحب لمنع تأخر استجابة الإصبع والتقطيع.' : 'Disabled CSS transitions while dragging to prevent rubber-band touch lag.'}
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-200 font-bold">
                    {isAr ? 'معالجة الحركة عبر requestAnimationFrame:' : 'RAF Hardware Throttling:'}
                  </strong>{' '}
                  {isAr ? 'تحديث مصفوفات العرض مباشرة بمعدل إنعاش الشاشة دون إجهاد شجرة React.' : 'Decoupled touchmove/mousemove with RAF, updating DOM transform directly at 60-120hz.'}
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-200 font-bold">
                    {isAr ? 'تسريع طبقات كارت الشاشة (GPU Layering):' : 'GPU Layer Compositing:'}
                  </strong>{' '}
                  {isAr ? 'تطبيق translate3d و will-change لرفع الخريطة إلى طبقة تسريع عتادي منفصلة.' : 'Enforced translate3d and will-change: transform to isolate rendering to GPU composite layer.'}
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-200 font-bold">
                    {isAr ? 'عزل العناصر الثابتة (React Memoization):' : 'React.memo Isolation:'}
                  </strong>{' '}
                  {isAr ? 'عزل مسار النيل وخطوط المترو ومحطات الشبكة حتى لا يعاد رسم 100+ محطة عند النقر.' : 'Isolated static polylines and individual station nodes so tapping one station re-renders only 2 nodes.'}
                </li>
              </ul>
            </div>

            {/* Confirm & Close Button */}
            <PressableScale
              onClick={() => {
                haptics.success();
                setShowPerfModal(false);
              }}
              className="w-full py-2.5 rounded-2xl bg-[#FF4A1C] hover:bg-[#e03d12] text-white text-xs font-cairo font-bold shadow-lg shadow-[#FF4A1C]/25 text-center transition-colors"
            >
              {isAr ? 'تم تطبيق الخيارات والمتابعة' : 'Apply & Continue'}
            </PressableScale>
          </div>
        </div>
      )}
    </div>
  );
}
