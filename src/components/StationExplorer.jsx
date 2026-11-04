import React, { useState, useMemo } from 'react';
import {
  Search,
  Train,
  MapPin,
  Clock,
  Layers,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronRight,
  Accessibility,
  Building
} from 'lucide-react';
import { STATIONS, METRO_LINES, SCHEDULE_INFO } from '../data/metroData.js';
import PressableScale from './PressableScale.jsx';
import TransitModeIcon from './TransitModeIcon.jsx';
import { haptics } from '../utils/haptics.js';

export default function StationExplorer({
  lang,
  t,
  onSetOrigin,
  onSetDestination,
  onSelectStationForModal
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLine, setActiveLine] = useState('all'); // 'all', 'line1', 'line2', 'line3', 'interchange'

  const isAr = lang === 'ar';

  const filteredStations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return STATIONS.filter(st => {
      let matchesLine = true;
      if (activeLine === 'interchange') {
        matchesLine = st.isInterchange;
      } else if (activeLine !== 'all') {
        matchesLine = st.lines.includes(activeLine);
      }

      const matchesQuery = !q ||
        st.nameEn.toLowerCase().includes(q) ||
        st.nameAr.includes(q) ||
        st.landmarks.some(l => l.toLowerCase().includes(q)) ||
        st.landmarksAr.some(l => l.includes(q));

      return matchesLine && matchesQuery;
    });
  }, [searchQuery, activeLine]);

  return (
    <div className="space-y-4 pb-20 text-start">
      {/* Search & Filter Header */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-4 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-3">
        <div>
          <h2 className="text-base font-space font-black uppercase tracking-wider text-slate-900 dark:text-white">
            {t.stationExplorer.title}
          </h2>
          <p className="text-xs text-slate-500 dark:text-[#A1A1AA] font-mono mt-0.5">
            {t.stationExplorer.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:right-3.5 rtl:left-auto top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.stationExplorer.searchPlaceholder}
            className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-[#17171A] text-xs font-mono font-medium text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-[#26262C] focus:outline-none focus:border-[#FF4A1C]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'all', label: t.stationExplorer.allLines },
            { id: 'line1', label: t.stationExplorer.line1 },
            { id: 'line2', label: t.stationExplorer.line2 },
            { id: 'line3', label: t.stationExplorer.line3 },
            { id: 'interchange', label: t.stationExplorer.interchangeOnly }
          ].map(flt => (
            <PressableScale
              key={flt.id}
              onClick={() => {
                haptics.selection();
                setActiveLine(flt.id);
              }}
              className={`text-xs px-3 py-1.5 rounded-xl flex-shrink-0 font-space font-bold transition-all border ${
                activeLine === flt.id
                  ? 'bg-[#FF4A1C] text-white border-transparent'
                  : 'bg-slate-100 dark:bg-[#17171A] text-slate-600 dark:text-[#A1A1AA] border-transparent dark:border-[#26262C]'
              }`}
            >
              {flt.label}
            </PressableScale>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-mono tabular-nums text-slate-500 dark:text-[#71717A]">
          {filteredStations.length} {t.stationExplorer.stationsFound}
        </span>
      </div>

      {/* Station Cards Grid / List */}
      <div className="space-y-2.5">
        {filteredStations.map((st) => (
          <div
            key={st.id}
            onClick={() => {
              haptics.selection();
              onSelectStationForModal(st);
            }}
            className="bg-white dark:bg-[#111113] rounded-3xl p-4 border border-slate-200/80 dark:border-[#26262C] shadow-sm hover:border-[#FF4A1C] transition-all cursor-pointer space-y-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-space font-bold text-slate-900 dark:text-white truncate">
                    {isAr ? st.nameAr : st.nameEn}
                  </h3>
                  {st.isInterchange && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold flex-shrink-0">
                      {isAr ? 'محطة تبادلية' : 'Transfer Hub'}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 mt-1.5">
                  {st.lines.map(l => (
                    <span
                      key={l}
                      className="text-[9px] px-2 py-0.5 rounded font-space font-bold text-white uppercase inline-flex items-center gap-1"
                      style={{ backgroundColor: METRO_LINES[l].color }}
                    >
                      <TransitModeIcon mode={METRO_LINES[l]?.mode} lineId={l} size="xs" withBackdrop />
                      <span>{isAr ? METRO_LINES[l].shortNameAr : METRO_LINES[l].shortNameEn}</span>
                    </span>
                  ))}
                  <span className="text-xs text-slate-300 dark:text-[#26262C]">•</span>
                  <span className="text-xs font-mono text-slate-500 dark:text-[#A1A1AA]">
                    {st.zone}
                  </span>
                </div>
              </div>

              <div className="text-slate-400 p-1">
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </div>
            </div>

            {/* Landmarks preview */}
            <div className="text-xs font-mono text-slate-600 dark:text-[#D4D4D8] bg-slate-50 dark:bg-[#17171A] p-2.5 rounded-2xl flex items-center gap-2 border border-slate-200/40 dark:border-[#26262C]">
              <Building className="w-3.5 h-3.5 text-[#FF4A1C] flex-shrink-0" />
              <span className="truncate">
                {isAr ? st.landmarksAr.join(' • ') : st.landmarks.join(' • ')}
              </span>
            </div>

            {/* Quick Set Buttons */}
            <div
              className="flex items-center justify-end gap-2 pt-1"
              onClick={(e) => e.stopPropagation()}
            >
              <PressableScale
                onClick={() => {
                  haptics.selection();
                  onSetOrigin(st.id);
                }}
                className="text-[11px] font-space font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200 dark:hover:bg-[#212127] text-slate-700 dark:text-[#D4D4D8] border border-slate-200 dark:border-[#26262C] transition-colors"
              >
                {t.stationExplorer.setAsStart}
              </PressableScale>
              <PressableScale
                onClick={() => {
                  haptics.success();
                  onSetDestination(st.id);
                }}
                className="text-[11px] font-space font-bold px-3 py-1.5 rounded-xl bg-[#FF4A1C] hover:bg-[#e03d12] text-white shadow-sm shadow-[#FF4A1C]/20 transition-colors"
              >
                {t.stationExplorer.setAsEnd}
              </PressableScale>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
