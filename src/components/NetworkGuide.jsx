import React, { useState, useRef } from 'react';
import {
  Layers,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Navigation,
  Accessibility,
  Ticket,
  Map
} from 'lucide-react';
import { METRO_LINES, STATIONS, TICKET_TIERS, MONORAIL_TIERS, LRT_TIERS, BRT_TIERS } from '../data/metroData.js';
import { LINE_A11Y_BADGES, isStationAccessible } from '../utils/a11y.js';
import MetroStatTile from './MetroStatTile.jsx';
import PressableScale from './PressableScale.jsx';
import { haptics } from '../utils/haptics.js';

export default function NetworkGuide({
  lang,
  t,
  onSetOrigin,
  onSetDestination,
  onSelectStationForModal,
  onOpenPdfMap
}) {
  const [selectedLineId, setSelectedLineId] = useState('line1');
  const [isStationsExpanded, setIsStationsExpanded] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const isAr = lang === 'ar';
  const selectedLine = METRO_LINES[selectedLineId] || METRO_LINES.line1;

  // Filter stations for this line in order
  const lineStations = STATIONS.filter(s => s.lines.includes(selectedLineId));
  const lineKeys = ['line1', 'line2', 'line3', 'monorail_east', 'monorail_west', 'lrt', 'brt'];

  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // Helper for concise fare tier subtitle that fits cleanly on 360dp screens
  const getMetroTierSubtitle = (tier) => {
    if (isAr) {
      if (tier.tier === 1) return '1 - 9 محطات';
      if (tier.tier === 2) return '10 - 16 محطة';
      if (tier.tier === 3) return '17 - 23 محطة';
      return 'أكثر من 23 محطة';
    }
    if (tier.tier === 4) return 'Over 23 stations';
    return `${tier.minStations} - ${tier.maxStations} stations`;
  };

  return (
    <div className="space-y-4 pb-20 text-start">
      {/* Network Hero Banner */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-4 sm:p-5 shadow-sm border border-slate-200 dark:border-[#26262C] space-y-3">
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-500 shadow-sm flex-shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className={`text-base font-black text-slate-900 dark:text-white leading-tight ${isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'}`}>
                {isAr ? 'دليل شبكة النقل العام الكبرى' : 'Greater Cairo Transit Network'}
              </h2>
              <p className={`text-xs text-slate-500 dark:text-[#A1A1AA] mt-0.5 line-clamp-1 ${isAr ? 'font-cairo tracking-normal' : 'font-mono'}`}>
                {isAr ? 'استكشف كافة خطوط المترو والمونوريل والقطار الخفيف' : 'Explore Metro lines, Monorail, LRT & official fares'}
              </p>
            </div>
          </div>

          {onOpenPdfMap && (
            <button
              onClick={() => {
                haptics.selection();
                onOpenPdfMap();
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-space font-bold bg-[#FF4A1C]/10 hover:bg-[#FF4A1C]/20 text-[#FF4A1C] border border-[#FF4A1C]/30 shadow-sm transition-all flex-shrink-0 active:scale-95"
              title={isAr ? 'عرض معرض الخرائط الرسمية' : 'View Official Maps Gallery'}
            >
              <Map className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isAr ? 'معرض الخرائط' : 'Maps Gallery'}</span>
            </button>
          )}
        </div>

        {/* Network Lines Selector Carousel - Clean Horizontally Scrollable Pills without Arrow Buttons */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full flex gap-1.5 overflow-x-auto py-1 scroll-smooth cursor-grab active:cursor-grabbing select-none no-scrollbar touch-pan-x"
          style={{ touchAction: 'pan-x pan-y', WebkitOverflowScrolling: 'touch' }}
        >
          {lineKeys.map((key) => {
            const line = METRO_LINES[key];
            const isSelected = selectedLineId === key;
            return (
              <button
                key={key}
                type="button"
                onClick={(e) => {
                  haptics.selection();
                  setSelectedLineId(key);
                  setIsStationsExpanded(false);
                  e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }}
                className={`flex-shrink-0 px-3 py-1.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm border ${
                  isSelected
                    ? 'text-white border-transparent'
                    : 'bg-slate-100 dark:bg-[#17171A] text-slate-600 dark:text-[#A1A1AA] hover:text-white border-transparent dark:border-[#26262C]'
                } ${isAr ? 'font-cairo tracking-normal' : 'font-space'}`}
                style={{
                  backgroundColor: isSelected ? line.color : undefined
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: line.color }}
                />
                <span className="font-mono text-[10px] opacity-90">{LINE_A11Y_BADGES[key]?.symbol || ''}</span>
                <span className="whitespace-nowrap">{isAr ? line.shortNameAr : line.shortNameEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Line Overview Card */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-4">
        {/* Line Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: selectedLine.color }}
              />
              <h3 className={`text-base font-extrabold text-slate-900 dark:text-white leading-snug break-words ${isAr ? 'font-cairo tracking-normal' : 'font-space'}`}>
                {isAr ? selectedLine.nameAr : selectedLine.nameEn}
              </h3>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid Using MetroStatTile */}
        <div className="grid grid-cols-3 gap-2">
          <MetroStatTile
            label={isAr ? 'المحطات' : 'STATIONS'}
            value={selectedLine.totalStations}
            unit={isAr ? 'محطة' : 'st'}
            tone="default"
          />
          <MetroStatTile
            label={isAr ? 'الطول' : 'LENGTH'}
            value={selectedLine.lengthKm}
            unit={isAr ? 'كم' : 'km'}
            tone="default"
          />
          <MetroStatTile
            label={isAr ? 'الافتتاح' : 'OPENED'}
            value={selectedLine.openedYear}
            tone="default"
          />
        </div>

        {/* Terminals & Endpoints with Destination-Aware Direction Arrow */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#17171A] border border-slate-200/60 dark:border-[#26262C] flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
          <div className="min-w-0">
            <p className={`text-[10px] uppercase text-slate-400 dark:text-[#71717A] ${isAr ? 'font-cairo tracking-normal font-semibold' : 'font-mono tracking-wider'}`}>
              {isAr ? 'البداية' : 'START'}
            </p>
            <p className={`text-slate-900 dark:text-white mt-0.5 font-bold truncate ${isAr ? 'font-cairo' : 'font-space'}`}>
              {isAr ? selectedLine.terminalsAr[0] : selectedLine.terminalsEn[0]}
            </p>
          </div>

          {/* Direction Arrow pointing towards destination terminal in both LTR and RTL */}
          <div className="w-8 h-8 rounded-full bg-[#FF4A1C]/10 border border-[#FF4A1C]/25 flex items-center justify-center text-[#FF4A1C] shadow-sm flex-shrink-0 mx-2">
            <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
          </div>

          <div className="text-end min-w-0">
            <p className={`text-[10px] uppercase text-slate-400 dark:text-[#71717A] ${isAr ? 'font-cairo tracking-normal font-semibold' : 'font-mono tracking-wider'}`}>
              {isAr ? 'النهاية' : 'END'}
            </p>
            <p className={`text-slate-900 dark:text-white mt-0.5 font-bold truncate ${isAr ? 'font-cairo' : 'font-space'}`}>
              {isAr ? selectedLine.terminalsAr[1] : selectedLine.terminalsEn[1]}
            </p>
          </div>
        </div>
      </div>

      {/* Official Fares Guide for Selected Line - Clean & Concise without clipping */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-3">
        <h4 className={`text-[11px] font-bold flex items-center gap-1.5 ${isAr ? 'font-cairo tracking-normal text-slate-600 dark:text-[#A1A1AA]' : 'font-mono uppercase tracking-[0.12em] text-slate-500 dark:text-[#71717A]'}`}>
          <Ticket className="w-3.5 h-3.5 text-[#2DD881] flex-shrink-0" />
          <span>
            {isAr ? `تعريفة وأسعار تذاكر ${selectedLine.shortNameAr}:` : `OFFICIAL FARES FOR ${selectedLine.shortNameEn}:`}
          </span>
        </h4>

        {selectedLine.mode === 'metro' ? (
          <div className="grid grid-cols-2 gap-2 text-xs">
            {TICKET_TIERS.map(tier => (
              <div
                key={tier.tier}
                title={isAr ? tier.nameAr : tier.nameEn}
                className="bg-slate-50 dark:bg-[#17171A] p-2.5 sm:p-3 rounded-2xl border border-slate-200/50 dark:border-[#26262C] space-y-1.5"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: tier.ticketColorHex }}
                    />
                    <span className={`text-[11px] font-bold text-slate-800 dark:text-[#E4E4E7] truncate ${isAr ? 'font-cairo' : 'font-mono'}`}>
                      {isAr ? `تذكرة ${tier.ticketColorAr}` : tier.ticketColorEn}
                    </span>
                  </div>
                  <span className="tabular-nums font-bold text-xs text-slate-900 dark:text-white flex-shrink-0 whitespace-nowrap rtl:font-cairo">
                    {tier.price} <span className="text-[10px] text-slate-500 dark:text-[#A1A1AA] font-normal">{isAr ? 'ج.م' : 'EGP'}</span>
                  </span>
                </div>
                {/* Concise, non-clipping stations count text that comfortably fits 360dp */}
                <p className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] leading-normal ${isAr ? 'font-cairo font-semibold' : 'font-mono'}`}>
                  {getMetroTierSubtitle(tier)}
                </p>
              </div>
            ))}
          </div>
        ) : selectedLine.mode === 'monorail' ? (
          <div className="grid grid-cols-2 gap-2 text-xs">
            {MONORAIL_TIERS.map((tier, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-[#17171A] p-2.5 sm:p-3 rounded-2xl border border-slate-200/50 dark:border-[#26262C] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold text-slate-700 dark:text-[#D4D4D8] ${isAr ? 'font-cairo' : 'font-mono'}`}>
                    {tier.minStations} - {tier.maxStations} {isAr ? 'محطات' : 'st'}
                  </span>
                  <span className="tabular-nums font-bold text-xs text-purple-500 whitespace-nowrap rtl:font-cairo">
                    {tier.price} <span className="text-[10px] text-slate-500 font-normal">{isAr ? 'ج.م' : 'EGP'}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : selectedLine.mode === 'lrt' ? (
          <div className="grid grid-cols-3 gap-2 text-xs">
            {LRT_TIERS.map((tier, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-[#17171A] p-2.5 rounded-2xl border border-slate-200/50 dark:border-[#26262C] text-center space-y-1">
                <span className={`text-[11px] font-bold text-slate-700 dark:text-[#D4D4D8] block ${isAr ? 'font-cairo' : 'font-mono'}`}>
                  {tier.minStations}-{tier.maxStations} {isAr ? 'محطات' : 'st'}
                </span>
                <p className="tabular-nums font-bold text-xs text-cyan-500 whitespace-nowrap rtl:font-cairo">
                  {tier.price} <span className="text-[10px] text-slate-500 font-normal">{isAr ? 'ج.م' : 'EGP'}</span>
                </p>
              </div>
            ))}
          </div>
        ) : selectedLine.mode === 'brt' ? (
          <div className="space-y-2">
            <p className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] ${isAr ? 'font-cairo' : 'font-mono'}`}>
              {isAr ? 'تعريفة التذاكر الفردية المعتمدة رسمياً للأتوبيس الترددي (7 شرائح):' : 'Official BRT 7-tier Single Ticket Fares:'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {BRT_TIERS.map((tier) => (
                <div key={tier.tier} className="bg-slate-50 dark:bg-[#17171A] p-2.5 rounded-2xl border border-slate-200/50 dark:border-[#26262C] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold text-slate-700 dark:text-[#D4D4D8] ${isAr ? 'font-cairo' : 'font-mono'}`}>
                      {tier.tier === 7 ? (isAr ? 'أكثر من 26 محطة' : '> 26 st') : `${tier.minStations}-${tier.maxStations} ${isAr ? 'محطات' : 'st'}`}
                    </span>
                    <span className="tabular-nums font-bold text-xs text-amber-500 whitespace-nowrap rtl:font-cairo">
                      {tier.price} <span className="text-[10px] text-slate-500 font-normal">{isAr ? 'ج.م' : 'EGP'}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#17171A] border border-slate-200/50 dark:border-[#26262C] text-xs text-slate-700 dark:text-[#D4D4D8] leading-relaxed">
            {isAr ? 'التعريفة الموحدة للأتوبيس الترددي حسب المسار على الطريق الدائري.' : 'Standard Tariff depending on distance.'}
          </div>
        )}
      </div>

      {/* Stations List for this Line - Collapsible */}
      <div className="space-y-2">
        <button
          type="button"
          onClick={() => {
            haptics.selection();
            setIsStationsExpanded(prev => !prev);
          }}
          className={`w-full p-3.5 rounded-2xl bg-white dark:bg-[#111113] hover:bg-slate-50 dark:hover:bg-[#17171A] border border-slate-200/80 dark:border-[#26262C] shadow-sm flex items-center justify-between text-xs font-bold transition-all text-slate-800 dark:text-slate-200 active:scale-[0.99] ${isAr ? 'font-cairo' : 'font-space'}`}
          aria-expanded={isStationsExpanded}
        >
          <span>
            {isStationsExpanded
              ? (isAr ? 'إخفاء قائمة المحطات ↑' : 'Hide Stations List ↑')
              : (isAr ? `عرض قائمة المحطات (${lineStations.length} محطة) ↓` : `Show Stations List (${lineStations.length} Stations) ↓`)}
          </span>
          <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-[#17171A] flex items-center justify-center text-slate-500 dark:text-[#A1A1AA] flex-shrink-0">
            {isStationsExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </button>

        {isStationsExpanded && (
          <div className="space-y-2 pt-1 transition-all">
            {lineStations.map((st, idx) => (
              <div
                key={st.id}
                onClick={() => {
                  haptics.selection();
                  onSelectStationForModal?.(st);
                }}
                className={`bg-white dark:bg-[#111113] p-3 sm:p-3.5 rounded-2xl border border-slate-200/80 dark:border-[#26262C] shadow-sm flex items-center justify-between cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition-all ${
                  st.underConstruction ? 'opacity-70 bg-amber-50/20 dark:bg-amber-950/10' : ''
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 pe-2">
                  <span className="w-7 h-7 rounded-full bg-slate-100 dark:bg-[#17171A] text-xs font-mono font-bold flex items-center justify-center text-slate-600 dark:text-[#A1A1AA] flex-shrink-0 border border-slate-200/50 dark:border-[#26262C]">
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className={`text-xs font-bold text-slate-900 dark:text-white truncate ${isAr ? 'font-cairo tracking-normal' : 'font-space'}`}>
                        {isAr ? st.nameAr : st.nameEn}
                      </p>
                      {st.underConstruction && (
                        <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 inline-flex items-center leading-normal ${isAr ? 'font-cairo tracking-normal' : 'font-mono'}`}>
                          {isAr ? 'تحت الإنشاء' : 'UNDER CONSTRUCTION'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0" onClick={e => e.stopPropagation()}>
                  {st.isInterchange && (
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 inline-flex items-center leading-normal ${isAr ? 'font-cairo tracking-normal' : 'font-mono'}`}>
                      {isAr ? 'تبادل' : 'HUB'}
                    </span>
                  )}
                  {isStationAccessible(st) && (
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-500 border border-teal-500/20 inline-flex items-center gap-1 leading-normal ${isAr ? 'font-cairo tracking-normal' : 'font-mono'}`} title={isAr ? 'مصعد وسلالم كهربائية' : 'Elevator Available'}>
                      <Accessibility className="w-3 h-3 flex-shrink-0" />
                      <span>{isAr ? 'مصعد' : 'LIFT'}</span>
                    </span>
                  )}
                  {!st.underConstruction && (
                    <PressableScale
                      onClick={() => {
                        haptics.selection();
                        onSetDestination(st.id);
                      }}
                      className="p-1.5 rounded-xl bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200 dark:hover:bg-[#212127] text-slate-600 dark:text-[#D4D4D8] border border-slate-200 dark:border-[#26262C]"
                      title={isAr ? 'تحديد كوجهة' : 'Route Here'}
                    >
                      <Navigation className="w-3.5 h-3.5" />
                    </PressableScale>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
