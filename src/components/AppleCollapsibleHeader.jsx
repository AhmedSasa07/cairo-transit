import React from 'react';
import { Navigation, Star, Share2 } from 'lucide-react';
import { haptics } from '../utils/haptics.js';

/**
 * Clean, Sleek Apple Navigation Bar
 * - Single compact header that saves vertical screen space
 * - Unifies "Plan Your Journey" title and quick actions (Near Me, Favorites, Share)
 * - Apple Liquid Glass HIG design without duplicate headers or wasted space
 */
export default function AppleCollapsibleHeader({
  lang = 'ar',
  t,
  title,
  subtitle,
  rightActions,
  isLocatingOrigin = false,
  onQuickGps,
  onOpenPdfMap,
  onOpenSchedule,
  hasActiveRoute = false,
  isSaved = false,
  onToggleSave,
  onShare
}) {
  const isAr = lang === 'ar';
  const defaultTitle = isAr ? 'تخطيط الرحلات' : 'Plan Your Journey';
  const displayTitle = title || defaultTitle;

  return (
    <div className="w-full select-none">
      <header
        className="w-full px-0.5 sm:px-1 py-1 sm:py-1.5 flex items-center justify-between gap-2 min-h-[40px]"
      >
        {/* Sleek, Compact Title - Always Visible */}
        <div className="flex-1 min-w-0 flex items-center gap-2">
          <h1
            className={`text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white truncate ${
              isAr ? 'font-cairo' : 'font-space'
            }`}
          >
            {displayTitle}
          </h1>
        </div>

        {/* Trailing Quick Tools (GPS Near Me, Favorites Star, Share) */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {onQuickGps && (
            <button
              type="button"
              onClick={() => {
                haptics.light();
                onQuickGps();
              }}
              disabled={isLocatingOrigin}
              className="py-1 px-2.5 sm:px-3 sm:py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 transition-all flex items-center gap-1.5 text-xs font-bold active:scale-95 shadow-2xs touch-manipulation tap-transparent"
              title={isAr ? 'تحديد أقرب محطة لموقعي بالـ GPS' : 'Detect Nearest Station to Me via GPS'}
              aria-label={isAr ? 'تحديد أقرب محطة لموقعي بالـ GPS' : 'Detect Nearest Station to Me via GPS'}
            >
              <Navigation
                className={`w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 ${
                  isLocatingOrigin ? 'animate-spin' : ''
                }`}
              />
              <span className={isAr ? 'font-cairo' : 'font-mono'}>
                {isLocatingOrigin
                  ? (isAr ? 'جاري التحديد...' : 'Locating...')
                  : (isAr ? 'أقرب محطة ليا' : 'Near Me')}
              </span>
            </button>
          )}

          {hasActiveRoute && onToggleSave && (
            <button
              type="button"
              onClick={() => {
                haptics.select();
                onToggleSave();
              }}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all active:scale-90 touch-manipulation tap-transparent ${
                isSaved
                  ? 'bg-amber-500/15 border-amber-500/30 text-amber-500 shadow-xs'
                  : 'bg-black/[0.04] dark:bg-white/[0.06] border-black/[0.05] dark:border-white/[0.08] text-slate-400 hover:text-amber-500'
              }`}
              title={t?.routePlanner?.saveTripTooltip || (isAr ? 'حفظ في المفضلة' : 'Save to favorites')}
              aria-label={t?.routePlanner?.saveTripTooltip || (isAr ? 'حفظ في المفضلة' : 'Save to favorites')}
            >
              <Star
                className={`w-4 h-4 ${
                  isSaved ? 'fill-amber-400 text-amber-500' : 'fill-none'
                }`}
              />
            </button>
          )}

          {hasActiveRoute && onShare && (
            <button
              type="button"
              onClick={() => {
                haptics.light();
                onShare();
              }}
              className="p-1.5 sm:p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.05] dark:border-white/[0.08] text-rose-600 dark:text-[#FF4A1C] hover:bg-rose-500/10 transition-colors active:scale-90 touch-manipulation tap-transparent"
              title={t?.routePlanner?.shareRoute || (isAr ? 'مشاركة تفاصيل الرحلة' : 'Share route details')}
              aria-label={t?.routePlanner?.shareRoute || (isAr ? 'مشاركة تفاصيل الرحلة' : 'Share route details')}
            >
              <Share2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>
    </div>
  );
}
