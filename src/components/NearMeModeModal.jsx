import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Navigation, Sparkles, Shuffle } from 'lucide-react';
import { haptics } from '../utils/haptics.js';
import TransitModeIcon from './TransitModeIcon.jsx';

export default function NearMeModeModal({
  lang = 'ar',
  isOpen,
  onClose,
  onSelectMode,
  isLocating = false
}) {
  const isAr = lang === 'ar';
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const MODES = [
    {
      id: 'metro',
      icon: '🚇',
      titleAr: 'أقرب محطة مترو',
      titleEn: 'Nearest Metro Station',
      descAr: 'الخطوط 1 و 2 و 3 (الشبكة الرئيسية)',
      descEn: 'Lines 1, 2 & 3 (Main Metro Network)',
      badgeAr: 'مترو الأنفاق',
      badgeEn: 'Metro',
      badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800/60',
      iconBg: 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/60',
      activeBorder: 'hover:border-blue-500/60 focus:border-blue-500'
    },
    {
      id: 'monorail',
      icon: '🚝',
      titleAr: 'أقرب محطة مونوريل',
      titleEn: 'Nearest Monorail Station',
      descAr: 'مونوريل شرق النيل (الاستاد - التجمع - العاصمة)',
      descEn: 'East Nile Monorail (Stadium - New Cairo - Capital)',
      badgeAr: 'المونوريل',
      badgeEn: 'Monorail',
      badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-950/80 dark:text-orange-300 border-orange-200 dark:border-orange-800/60',
      iconBg: 'bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800/60',
      activeBorder: 'hover:border-orange-500/60 focus:border-orange-500'
    },
    {
      id: 'lrt',
      icon: '🚋',
      titleAr: 'أقرب محطة قطار خفيف LRT',
      titleEn: 'Nearest LRT Light Rail Station',
      descAr: 'القطار الكهربائي الخفيف (عدلي منصور - العاشر - العاصمة)',
      descEn: 'LRT Electric Train (Adly Mansour - Badr - Capital)',
      badgeAr: 'قطار LRT',
      badgeEn: 'LRT Rail',
      badgeColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/80 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60',
      iconBg: 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/60',
      activeBorder: 'hover:border-cyan-500/60 focus:border-cyan-500'
    },
    {
      id: 'brt',
      icon: '🚌',
      titleAr: 'أقرب محطة أتوبيس ترددي BRT',
      titleEn: 'Nearest BRT Bus Station',
      descAr: 'أتوبيسات الطريق الدائري السريعة المعزولة',
      descEn: 'Ring Road Bus Rapid Transit',
      badgeAr: 'ترددي BRT',
      badgeEn: 'BRT Express',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800/60',
      iconBg: 'bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/60',
      activeBorder: 'hover:border-purple-500/60 focus:border-purple-500'
    },
    {
      id: 'all',
      icon: '🔀',
      titleAr: 'كل الوسائط (الأقرب مطلقاً)',
      titleEn: 'Any Mode (Nearest Overall)',
      descAr: 'أقرب محطة في القاهرة الكبرى بغض النظر عن الوسيلة',
      descEn: 'Closest station across all modes in Greater Cairo',
      badgeAr: 'الأقرب مطلقاً',
      badgeEn: 'All Modes',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60',
      activeBorder: 'hover:border-emerald-500/60 focus:border-emerald-500'
    }
  ];

  const handleSelect = (modeId) => {
    haptics.select();
    onSelectMode(modeId);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="nearme-modal-title"
    >
      <div
        className={`w-full max-w-md bg-white dark:bg-[#18181B] rounded-t-[28px] sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-[#2A2A32] overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom duration-300 pb-[env(safe-area-inset-bottom,0px)] select-none ${
          isAr ? 'font-cairo' : 'font-space'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Mobile Pull Handle */}
        <div className="w-12 h-1.5 bg-slate-300 dark:bg-[#2A2A32] rounded-full mx-auto my-2.5 sm:hidden flex-shrink-0 touch-none select-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between px-5 pt-3 pb-3 border-b border-slate-100 dark:border-[#26262C] flex-shrink-0 select-none">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h2 id="nearme-modal-title" className="text-base font-extrabold text-slate-900 dark:text-[#F4F4F5]">
                {isAr ? 'اختر وسيلة النقل لتحديد أقرب محطة' : 'Choose Transit Mode to Find Nearest Station'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {isAr
                  ? 'حدد وسيلة المواصلات لتحديد أقرب محطة لك بالـ GPS'
                  : 'Select transit mode to locate your closest station via GPS'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#26262C] select-none touch-manipulation tap-transparent active:scale-90 transition-transform flex-shrink-0"
            aria-label={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Mode Options */}
        <div className="p-4 space-y-2.5 overflow-y-auto overscroll-contain pb-[calc(1rem+env(safe-area-inset-bottom,0px))] select-none">
          {MODES.map((mode) => {
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => handleSelect(mode.id)}
                disabled={isLocating}
                className={`w-full p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-[#141416] border border-slate-200/90 dark:border-[#26262C] ${mode.activeBorder} hover:shadow-md transition-all flex items-center justify-between text-start group select-none touch-manipulation tap-transparent active:scale-[0.98] disabled:opacity-50`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-2xl ${mode.iconBg} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform p-1.5`}
                  >
                    {mode.id === 'all' ? (
                      <Shuffle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 stroke-[2.2]" />
                    ) : (
                      <TransitModeIcon mode={mode.id} size="md" className="w-6 h-6 object-contain" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900 dark:text-[#F4F4F5] truncate">
                        {isAr ? mode.titleAr : mode.titleEn}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${mode.badgeColor} hidden xs:inline-block`}>
                        {isAr ? mode.badgeAr : mode.badgeEn}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {isAr ? mode.descAr : mode.descEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white transition-colors flex-shrink-0 rtl:mr-2 ltr:ml-2">
                  <ChevronIcon className="w-4 h-4 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info tip */}
        <div className="px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] bg-slate-50/80 dark:bg-[#141416]/80 border-t border-slate-100 dark:border-[#26262C] flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 flex-shrink-0 select-none">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{isAr ? 'يستخدم دقة عالية لنظام الموقع GPS' : 'High-accuracy GPS detection'}</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-bold text-slate-600 dark:text-slate-300 hover:underline select-none touch-manipulation tap-transparent active:opacity-75"
          >
            {isAr ? 'إلغاء' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
}
