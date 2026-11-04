import React from 'react';
import { Plus, Minus, Navigation, Layers } from 'lucide-react';
import { haptics } from '../../utils/haptics';

interface MapFloatingControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onRecenterStadium: () => void;
  currentZoom: number;
  lang?: 'ar' | 'en';
}

export default function MapFloatingControls({
  onZoomIn,
  onZoomOut,
  onRecenterStadium,
  currentZoom,
  lang = 'ar'
}: MapFloatingControlsProps) {
  const isAr = lang === 'ar';

  return (
    <div className="absolute top-4 right-3 rtl:right-auto rtl:left-3 z-30 flex flex-col gap-2 select-none pointer-events-auto">
      {/* Zoom & Recenter Stack */}
      <div className="flex flex-col bg-white/90 dark:bg-[#151518]/90 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.1] rounded-2xl shadow-xl overflow-hidden divide-y divide-black/[0.06] dark:divide-white/[0.08]">
        {/* Zoom In */}
        <button
          type="button"
          onClick={() => {
            haptics.light();
            onZoomIn();
          }}
          className="w-11 h-11 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] active:scale-95 transition-all"
          title={isAr ? 'تكبير (+)' : 'Zoom In (+)'}
          aria-label="Zoom in"
        >
          <Plus className="w-5 h-5" />
        </button>

        {/* Zoom Out */}
        <button
          type="button"
          onClick={() => {
            haptics.light();
            onZoomOut();
          }}
          className="w-11 h-11 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] active:scale-95 transition-all"
          title={isAr ? 'تصغير (-)' : 'Zoom Out (-)'}
          aria-label="Zoom out"
        >
          <Minus className="w-5 h-5" />
        </button>

        {/* Recenter to Stadium */}
        <button
          type="button"
          onClick={() => {
            haptics.select();
            onRecenterStadium();
          }}
          className="w-11 h-11 flex items-center justify-center text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 active:scale-95 transition-all"
          title={isAr ? 'إعادة التوسيط لمحطة الاستاد' : 'Recenter to Cairo Stadium'}
          aria-label="Recenter to Cairo Stadium"
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>

      {/* Scale Badge indicator */}
      <div className="px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold text-center border border-white/10 shadow-xs">
        {currentZoom.toFixed(1)}x
      </div>
    </div>
  );
}
