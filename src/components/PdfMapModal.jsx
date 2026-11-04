import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  X,
  Layers,
  CheckCircle2,
  Sparkles,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Info
} from 'lucide-react';
import PressableScale from './PressableScale.jsx';
import { haptics } from '../utils/haptics.js';

export const MAP_GALLERY = [
  {
    id: 'official-schematic',
    titleEn: 'Official Cairo Metro Schematic Map',
    titleAr: 'خريطة شبكة مترو القاهرة التخطيطية الرسمية',
    sourceEn: 'Ministry of Transport • RATP Dev Cairo Mobility & NAT',
    sourceAr: 'وزارة النقل • الهيئة القومية للأنفاق و RATP Dev القاهرة',
    year: '2024–2026',
    category: 'official',
    badgeEn: 'OFFICIAL SCHEMATIC',
    badgeAr: 'المخطط الرسمي المعتمد',
    badgeColor: 'bg-[#FF4A1C]/15 text-[#FF4A1C] border-[#FF4A1C]/30',
    coverImage: '/cairo-metro-schematic-map.png',
    pdfUrl: '/cairo-metro-schematic-map.pdf',
    downloadFilename: 'Cairo_Metro_Official_Schematic_Map.pdf',
    descriptionEn: 'The official Ministry of Transport schematic diagram showing Cairo Metro Lines 1, 2, 3, Capital Train LRT, and Monorail interchanges.',
    descriptionAr: 'المخطط التخطيطي الرسمي لوزارة النقل الذي يوضح خطوط مترو القاهرة 1 و2 و3 والقطار الكهربائي الخفيف ومحطات تبادل المونوريل.',
    lines: ['Line 1 (Helwan - El-Marg)', 'Line 2 (Shubra - El-Mounib)', 'Line 3 (Rod El-Farag / Cairo Univ - Adly Mansour)', 'Capital LRT', 'Monorail Interchanges'],
    linesAr: ['الخط 1 (حلوان - المرج)', 'الخط 2 (شبرا - المنيب)', 'الخط 3 (روض الفرج / جامعة القاهرة - عدلي منصور)', 'قطار العاصمة LRT', 'تبادليات المونوريل']
  },
  {
    id: 'tfc-integrated-2025',
    titleEn: 'Greater Cairo Integrated Transit Map (2025/2026)',
    titleAr: 'خريطة النقل الإقليمي الشامل لإقليم القاهرة الكبرى (2025/2026)',
    sourceEn: 'Transport for Cairo (TfC) • EON Project Network Map',
    sourceAr: 'ترانسبورت فور كايرو (TfC) • شبكة النقل الإقليمية المتكاملة EON',
    year: '2025–2026',
    category: 'regional',
    badgeEn: '2025/2026 INTEGRATED NETWORK',
    badgeAr: 'شبكة 2025/2026 المتكاملة',
    badgeColor: 'bg-[#2DD881]/15 text-[#2DD881] border-[#2DD881]/30',
    coverImage: '/maps/cairo-network-map-2025-eon.png',
    pdfUrl: '/cairo-network-map-2025-eon.pdf',
    downloadFilename: 'Cairo_Integrated_Transit_Network_2025_EON.pdf',
    descriptionEn: 'Comprehensive high-resolution regional transit map produced by Transport for Cairo. Displays all current and under-construction mass transit: Metro Lines 1-4, East & West Nile Monorails, Capital LRT, Ring Road BRT, and ENR suburban rail corridors.',
    descriptionAr: 'الخريطة الإقليمية الشاملة والمعتمدة الصادرة عن Transport for Cairo. تعرض كافة شبكات النقل الجماعي الحالية والجارية: خطوط المترو 1 إلى 4، مونوريل شرق وغرب النيل، قطار العاصمة LRT، الأتوبيس الترددي BRT على الطريق الدائري، وشبكة قطارات الضواحي.',
    lines: ['Metro 1, 2, 3, 4', 'Monorail East & West Nile', 'Capital LRT', 'Ring Road BRT', 'ENR Suburban Rail'],
    linesAr: ['مترو 1، 2، 3، 4', 'مونوريل شرق وغرب النيل', 'قطار العاصمة LRT', 'الأتوبيس الترددي BRT الدائري', 'قطارات السكك الحديدية']
  },
  {
    id: 'tfc-workshop-team1',
    titleEn: 'Experimental Transit Map (TfC Workshop — Team 1)',
    titleAr: 'خريطة تجريبية لشبكة القاهرة (ورشة TfC — فريق 1)',
    sourceEn: 'Transport for Cairo Transit Map Design Workshop',
    sourceAr: 'ورشة عمل تصميم خرائط النقل العام — ترانسبورت فور كايرو',
    year: 'Design Workshop',
    category: 'workshop',
    badgeEn: 'TFC WORKSHOP #1',
    badgeAr: 'ورشة ترانسبورت #1',
    badgeColor: 'bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30',
    coverImage: '/maps/team-1-transit-map.jpg',
    pdfUrl: '/maps/team-1-transit-map.pdf',
    downloadFilename: 'Cairo_Transit_Workshop_Team_1.pdf',
    descriptionEn: 'Experimental schematic emphasizing primary interchange hubs, geometric clarity, and unified passenger navigation routes across Greater Cairo.',
    descriptionAr: 'تصميم تخطيطي تجريبي يركز على المحطات التبادلية الكبرى والوضوح الهندسي والربط بين وسائل الانتقال المتعددة.',
    lines: ['Multi-modal Hubs', 'Metro Network', 'Regional Rail Connections'],
    linesAr: ['المحطات التبادلية', 'شبكة المترو', 'خطوط الأقاليم']
  },
  {
    id: 'tfc-workshop-team2',
    titleEn: 'Experimental Transit Map (TfC Workshop — Team 2)',
    titleAr: 'خريطة تجريبية لشبكة القاهرة (ورشة TfC — فريق 2)',
    sourceEn: 'Transport for Cairo Transit Map Design Workshop',
    sourceAr: 'ورشة عمل تصميم خرائط النقل العام — ترانسبورت فور كايرو',
    year: 'Design Workshop',
    category: 'workshop',
    badgeEn: 'TFC WORKSHOP #2',
    badgeAr: 'ورشة ترانسبورت #2',
    badgeColor: 'bg-[#A855F7]/15 text-[#A855F7] border-[#A855F7]/30',
    coverImage: '/maps/team-2-transit-map.jpg',
    pdfUrl: '/maps/team-2-transit-map.pdf',
    downloadFilename: 'Cairo_Transit_Workshop_Team_2.pdf',
    descriptionEn: 'Experimental geographic-schematic hybrid accentuating Nile crossing corridors, downtown loops, and transfer points.',
    descriptionAr: 'تصميم هجين بين الجغرافيا والمخطط التخطيطي يبرز محاور عبور النيل ومناطق وسط البلد ونقاط الانتقال الحيوية.',
    lines: ['Nile River Crossings', 'Metro 1, 2, 3', 'Central Corridors'],
    linesAr: ['معابر النيل', 'مترو 1 و 2 و 3', 'المحاور المركزية']
  },
  {
    id: 'tfc-workshop-team3',
    titleEn: 'Experimental Transit Map (TfC Workshop — Team 3)',
    titleAr: 'خريطة تجريبية لشبكة القاهرة (ورشة TfC — فريق 3)',
    sourceEn: 'Transport for Cairo Transit Map Design Workshop',
    sourceAr: 'ورشة عمل تصميم خرائط النقل العام — ترانسبورت فور كايرو',
    year: 'Design Workshop',
    category: 'workshop',
    badgeEn: 'TFC WORKSHOP #3',
    badgeAr: 'ورشة ترانسبورت #3',
    badgeColor: 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30',
    coverImage: '/maps/team-3-transit-map.jpg',
    pdfUrl: '/maps/team-3-transit-map.pdf',
    downloadFilename: 'Cairo_Transit_Workshop_Team_3.pdf',
    descriptionEn: 'Experimental schematic utilizing high-contrast typography and color hierarchies to depict suburban commuter corridors alongside the urban metro.',
    descriptionAr: 'تصميم تخطيطي عالي التباين بطبوغرافيا واضحة لربط خطوط الضواحي والقطارات الإقليمية مع شبكة المترو الحضرية.',
    lines: ['Metro Lines', 'Commuter Rail', 'Suburban Transit'],
    linesAr: ['خطوط المترو', 'قطارات الضواحي', 'النقل الإقليمي']
  },
  {
    id: 'railsmaps-light-rail',
    titleEn: 'Cairo Monorail & Light Rail Corridors (RailsMaps)',
    titleAr: 'خريطة مسارات مونوريل وقطار القاهرة الخفيف (RailsMaps)',
    sourceEn: 'RailsMaps Transit Network & Corridors',
    sourceAr: 'ريلز مابس — شبكة القطارات والمسارات الكهربائية',
    year: '2025–2026',
    category: 'lightrail',
    badgeEn: 'RAILSMAPS LRT',
    badgeAr: 'ريلز مابس',
    badgeColor: 'bg-[#EC4899]/15 text-[#EC4899] border-[#EC4899]/30',
    coverImage: '/maps/cairo-light-rail-network-map.png',
    pdfUrl: null,
    downloadFilename: 'Cairo_Light_Rail_RailsMaps.png',
    descriptionEn: 'Transit network overview showcasing the Capital LRT corridor, New Administrative Capital extensions, and East Nile monorail connections.',
    descriptionAr: 'نظرة عامة على شبكة النقل تبرز مسار القطار الكهربائي الخفيف LRT وامتدادات العاصمة الإدارية ومونوريل شرق النيل.',
    lines: ['Capital LRT Corridors', 'East Nile Monorail', 'Adly Mansour Interchange'],
    linesAr: ['مسارات قطار العاصمة LRT', 'مونوريل شرق النيل', 'محطة عدلي منصور التبادلية']
  }
];

export default function PdfMapModal({ lang, t, onClose, initialMapId = 'tfc-integrated-2025' }) {
  const isAr = lang === 'ar';

  // Active selected map (defaults to 2025/2026 EON Integrated Transit Map)
  const [selectedMapId, setSelectedMapId] = useState(initialMapId);
  const activeMap = MAP_GALLERY.find((m) => m.id === selectedMapId) || MAP_GALLERY[1] || MAP_GALLERY[0];

  // Interactive zoom & pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

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

        {/* Action Controls: Info & Close */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <PressableScale
            onClick={() => {
              haptics.selection();
              setShowInfo((prev) => !prev);
            }}
            className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-space font-bold border transition-colors shadow-sm flex items-center gap-1.5 ${
              showInfo
                ? 'bg-[#FF4A1C]/20 border-[#FF4A1C]/40 text-[#FF4A1C]'
                : 'bg-white/10 text-slate-200 hover:bg-white/15 border-white/10'
            }`}
            title={isAr ? 'تفاصيل ومصادر الخريطة' : 'Map Information'}
          >
            <Info className="w-4 h-4" />
            <span className="hidden sm:inline">
              {isAr ? 'تفاصيل الخريطة' : 'Map Details'}
            </span>
          </PressableScale>

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

      {/* Horizontal Map Gallery Picker Bar */}
      <div className="px-3 sm:px-6 py-2 bg-slate-900/80 border-b border-white/10 overflow-x-auto no-scrollbar flex items-center gap-1.5 flex-shrink-0">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 me-1 hidden sm:inline flex-shrink-0">
          {isAr ? 'الخرائط الرسمية:' : 'Official Maps:'}
        </span>
        {MAP_GALLERY.map((map) => {
          const isSelected = map.id === selectedMapId;
          return (
            <button
              key={map.id}
              onClick={() => selectMap(map.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-space font-bold transition-all flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                isSelected
                  ? 'bg-white text-slate-950 shadow-md border border-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isSelected ? 'bg-[#FF4A1C] animate-pulse' : 'bg-slate-500'
                }`}
              />
              <span className="truncate max-w-[170px] sm:max-w-none">
                {isAr ? map.titleAr : map.titleEn}
              </span>
              <span className="text-[10px] font-mono opacity-70">
                ({map.year})
              </span>
            </button>
          );
        })}
      </div>

      {/* Zoom Indicator & Quality Sub-bar */}
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

      {/* Collapsible Info Drawer */}
      {showInfo && (
        <div className="px-4 py-3 sm:px-6 bg-slate-900 text-slate-200 border-b border-white/10 animate-fade-in text-xs font-mono flex-shrink-0">
          <div className="max-w-4xl mx-auto space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-space font-bold text-white text-sm">
                {isAr ? activeMap.titleAr : activeMap.titleEn}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white font-mono">
                {activeMap.year}
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {isAr ? activeMap.descriptionAr : activeMap.descriptionEn}
            </p>
            <div className="pt-1 flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-400 font-bold me-1">
                {isAr ? 'الخطوط والمسارات المشمولة:' : 'Covered Corridors:'}
              </span>
              {(isAr ? activeMap.linesAr : activeMap.lines).map((line, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 text-[10px]"
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Fullscreen Viewer Body */}
      <div className="flex-1 min-h-0 w-full h-full bg-[#060608] relative overflow-hidden flex flex-col">
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
