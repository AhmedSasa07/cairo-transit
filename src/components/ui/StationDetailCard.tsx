import React from 'react';
import { X, MapPin, Route, ArrowRightLeft, Sparkles } from 'lucide-react';
import { StationNode, StationDetailCardProps } from '../../types/map';
import { haptics } from '../../utils/haptics';

const LINE_CONFIG: Record<string, { labelEn: string; labelAr: string; color: string; bg: string }> = {
  M1: { labelEn: 'M1', labelAr: 'الخط الأول', color: '#00518e', bg: 'bg-[#00518e]' },
  M2: { labelEn: 'M2', labelAr: 'الخط الثانى', color: '#c13038', bg: 'bg-[#c13038]' },
  M3: { labelEn: 'M3', labelAr: 'الخط الثالث', color: '#009f87', bg: 'bg-[#009f87]' },
  LRT: { labelEn: 'LRT', labelAr: 'القطار LRT', color: '#9e1b33', bg: 'bg-[#9e1b33]' },
  MONORAIL_E: { labelEn: 'East Monorail', labelAr: 'مونوريل شرق', color: '#009ca6', bg: 'bg-[#009ca6]' },
  MONORAIL_W: { labelEn: 'West Monorail', labelAr: 'مونوريل غرب', color: '#9b2521', bg: 'bg-[#9b2521]' }
};

export default function StationDetailCard({
  station,
  onClose,
  lang = 'ar',
  onSetOrigin,
  onSetDestination
}: StationDetailCardProps) {
  if (!station) return null;

  const isAr = lang === 'ar';
  const primaryLine = LINE_CONFIG[station.line] || LINE_CONFIG.M1;

  const handleStart = () => {
    haptics.select();
    onSetOrigin?.(station.id);
    onClose();
  };

  const handleEnd = () => {
    haptics.select();
    onSetDestination?.(station.id);
    onClose();
  };

  return (
    <div
      className="absolute bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:w-96 z-40 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.1] rounded-[28px] shadow-2xl p-4 sm:p-5 select-none animate-in slide-in-from-bottom-6 duration-200"
      style={{
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)'
      }}
    >
      {/* Sheet Grab Handle on Mobile */}
      <div className="w-10 h-1 bg-slate-300 dark:bg-[#2C2C32] rounded-full mx-auto -mt-1 mb-3 sm:hidden" />

      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {/* Primary Line Badge */}
            <span
              className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full text-white shadow-xs inline-flex items-center gap-1"
              style={{ backgroundColor: primaryLine.color }}
            >
              <span>{isAr ? primaryLine.labelAr : primaryLine.labelEn}</span>
            </span>

            {/* Interchange Hub Token */}
            {station.is_interchange && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ecc15f]/15 text-[#b48624] dark:text-[#ecc15f] border border-[#ecc15f]/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 flex-shrink-0" />
                <span>{isAr ? 'محطة تبادلية' : 'Interchange Hub'}</span>
              </span>
            )}
          </div>

          {/* Station Title */}
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-cairo leading-tight truncate">
            {isAr ? station.name_ar : station.name_en}
          </h3>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono mt-0.5">
            {isAr ? station.name_en : station.name_ar} • {station.zone || 'Zone 1'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            haptics.light();
            onClose();
          }}
          className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:scale-90 transition-transform"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Connected Lines Matrix */}
      {station.connections && station.connections.length > 1 && (
        <div className="p-2.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] mb-3.5 space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-cairo">
            <ArrowRightLeft className="w-3.5 h-3.5 text-amber-500" />
            <span>{isAr ? 'خطوط الربط والتبديل المباشرة:' : 'Direct Line Connections:'}</span>
          </p>
          <div className="flex items-center gap-1.5 flex-wrap">
            {station.connections.map((c) => {
              const cfg = LINE_CONFIG[c];
              if (!cfg) return null;
              return (
                <span
                  key={c}
                  className="text-[10px] font-bold px-2 py-0.5 rounded-lg text-white"
                  style={{ backgroundColor: cfg.color }}
                >
                  {isAr ? cfg.labelAr : cfg.labelEn}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleStart}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 text-xs font-bold font-cairo active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{isAr ? 'انطلاق من هنا' : 'Set as Origin'}</span>
        </button>

        <button
          type="button"
          onClick={handleEnd}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-2xl bg-[#FF4A1C] hover:bg-[#E03D12] text-white text-xs font-bold font-cairo shadow-md shadow-[#FF4A1C]/20 active:scale-95 transition-transform"
        >
          <Route className="w-4 h-4" />
          <span>{isAr ? 'وصول إلى هنا' : 'Set as Destination'}</span>
        </button>
      </div>
    </div>
  );
}
