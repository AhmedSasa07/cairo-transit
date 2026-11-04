import React, { useState, useEffect } from 'react';
import { Navigation, Star, Share2 } from 'lucide-react';
import { haptics } from '../utils/haptics.js';
import { useReducedMotion } from '../utils/motion.js';

/**
 * Modern iOS Collapsible Large Title Navigation Bar
 * - Accommodates Dynamic Island and iPhone notches: pt-[env(safe-area-inset-top,0px)]
 * - At top of scroll: Bold, expansive large title (text-3xl font-extrabold tracking-tight)
 * - On scroll > 35-45px: Smoothly collapses into a compact centered title in a frosted glass nav bar
 * - Uncluttered, liquid glass HIG design
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
  const [scrollY, setScrollY] = useState(0);
  const reducedMotion = useReducedMotion();
  const isAr = lang === 'ar';

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY || document.documentElement.scrollTop || 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Collapse progress normalized between 15px and 45px scroll
  const collapseRatio = Math.min(1, Math.max(0, (scrollY - 15) / 30));
  const isCollapsed = collapseRatio > 0.85;

  const defaultTitle = isAr ? 'تخطيط الرحلات' : 'Route Planner';
  const displayTitle = title || defaultTitle;
  const defaultSubtitle = isAr
    ? 'شبكة مترو ومونوريل وقطار القاهرة الكبرى الذكية'
    : 'Greater Cairo Rapid Metro, Monorail & LRT Network';
  const displaySubtitle = subtitle || defaultSubtitle;

  return (
    <div className="w-full relative select-none">
      {/* 
        STICKY NAVIGATION BAR (Modern iOS Liquid Glass Header)
        Docks at top of viewport, respecting Dynamic Island and notches
      */}
      <header
        className={`sticky top-0 z-30 transition-all duration-200 ${
          collapseRatio > 0.1
            ? 'backdrop-blur-xl bg-white/80 dark:bg-[#111113]/80 border-b border-black/[0.06] dark:border-white/[0.08] shadow-xs'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{
          paddingTop: 'max(env(safe-area-inset-top, 0px), 6px)',
          WebkitBackdropFilter: collapseRatio > 0.1 ? 'blur(20px)' : 'none'
        }}
      >
        <div className="w-full px-0.5 sm:px-1 py-1.5 sm:py-2">
          {/* Top Bar Row: Title & Accessory Actions */}
          <div className="flex items-center justify-between min-h-[38px] gap-2">
            {/* Leading / Compact Title */}
            <div className="flex-1 min-w-0 flex items-center gap-2">
              <div
                className="transition-all duration-200"
                style={{
                  opacity: reducedMotion ? (isCollapsed ? 1 : 0) : collapseRatio,
                  transform: reducedMotion
                    ? 'none'
                    : `translateY(${(1 - collapseRatio) * 6}px)`,
                  pointerEvents: collapseRatio > 0.5 ? 'auto' : 'none'
                }}
              >
                <h1
                  className={`text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white truncate ${
                    isAr ? 'font-cairo' : 'font-space'
                  }`}
                >
                  {displayTitle}
                </h1>
              </div>
            </div>

            {/* Trailing Quick Tools (GPS, PDF, Saved, Share) */}
            <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
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
                  <span
                    className={isAr ? 'font-cairo' : 'font-mono'}
                  >
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
                      ? 'bg-amber-500/15 border-amber-500/30 text-amber-500'
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
          </div>
        </div>
      </header>

      {/* 
        EXPANSIVE LARGE TITLE (Apple iOS HIG Style)
        Sits at top of scroll and smoothly fades/compresses as user scrolls down
      */}
      <div
        className="w-full px-0.5 sm:px-1 pt-1 pb-2 transition-transform"
        style={{
          opacity: reducedMotion ? 1 : Math.max(0, 1 - collapseRatio * 1.4),
          transform: reducedMotion
            ? 'none'
            : `translateY(${-collapseRatio * 10}px) scale(${1 - collapseRatio * 0.04})`,
          transformOrigin: isAr ? 'top right' : 'top left',
          willChange: reducedMotion ? 'auto' : 'transform, opacity'
        }}
      >
        <div className="flex items-baseline justify-between gap-2">
          <h1
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white ${
              isAr ? 'font-cairo font-black tracking-normal' : 'font-space'
            }`}
          >
            {displayTitle}
          </h1>
        </div>
        <p
          className={`text-xs sm:text-sm font-medium text-slate-500 dark:text-zinc-400 mt-0.5 ${
            isAr ? 'font-cairo' : 'font-space'
          }`}
        >
          {displaySubtitle}
        </p>
      </div>
    </div>
  );
}
