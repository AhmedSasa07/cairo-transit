import React, { useRef, useEffect, useState } from 'react';
import { haptics } from '../utils/haptics.js';
import { APPLE_CURVES, APPLE_TIMINGS, useReducedMotion } from '../utils/motion.js';

/**
 * Apple iOS 17/18 Segmented Control
 * - Recessed frosted track with subtle hairline border
 * - Floating physical white/dark pill indicator with organic shadow and top specular highlight
 * - Instant pointer-down haptic feedback and scale physics
 * - Seamless RTL (Arabic) & LTR (English) support
 */
export default function AppleSegmentedControl({
  options = [],
  value,
  onChange,
  lang = 'ar',
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  fullWidth = true
}) {
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const reducedMotion = useReducedMotion();
  const isAr = lang === 'ar';

  // Measure active element position and update pill geometry
  useEffect(() => {
    if (!containerRef.current) return;
    const activeEl = containerRef.current.querySelector(`[data-segment-id="${value}"]`);
    if (activeEl) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      
      setIndicatorStyle({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
        opacity: 1
      });
    }
  }, [value, options, lang]);

  const sizeClasses = {
    sm: 'p-0.5 text-xs h-8',
    md: 'p-1 text-xs sm:text-sm h-10',
    lg: 'p-1.5 text-sm sm:text-base h-12'
  }[size] || 'p-1 text-xs sm:text-sm h-10';

  const pillPaddingClasses = {
    sm: 'rounded-full py-1 px-2.5',
    md: 'rounded-full py-1.5 px-3.5',
    lg: 'rounded-full py-2 px-4'
  }[size] || 'rounded-full py-1.5 px-3.5';

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label="View Switcher"
      className={`relative inline-flex items-center select-none ${
        fullWidth ? 'w-full' : 'w-auto'
      } rounded-full bg-black/[0.05] dark:bg-white/[0.08] backdrop-blur-md border border-black/[0.04] dark:border-white/[0.06] ${sizeClasses} ${className}`}
      style={{
        touchAction: 'manipulation'
      }}
    >
      {/* Sliding Physical Pill Indicator */}
      <div
        className="absolute top-1 bottom-1 rounded-full bg-white dark:bg-[#2C2C2E] shadow-[0_2px_8px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.5),0_1px_2px_rgba(0,0,0,0.3)] border border-black/[0.04] dark:border-white/[0.08] pointer-events-none"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          opacity: indicatorStyle.opacity,
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 2px 8px rgba(0,0,0,0.1)',
          transition: reducedMotion
            ? 'opacity 120ms ease-out'
            : `left 220ms ${APPLE_CURVES.easeOut}, width 220ms ${APPLE_CURVES.easeOut}, opacity 150ms ease-out`,
          willChange: reducedMotion ? 'auto' : 'left, width'
        }}
      />

      {/* Segment Option Buttons */}
      {options.map((option) => {
        const isActive = option.id === value;
        return (
          <button
            key={option.id}
            data-segment-id={option.id}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => {
              if (option.id !== value) {
                haptics.selection();
                onChange(option.id);
              }
            }}
            className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 text-center font-bold tracking-tight transition-all duration-150 active:scale-[0.98] ${pillPaddingClasses} ${
              isActive
                ? 'text-slate-900 dark:text-white font-extrabold'
                : 'text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200'
            } ${isAr ? 'font-cairo tracking-normal' : 'font-space'}`}
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            {option.icon && (
              <span className="flex-shrink-0 text-sm leading-none">{option.icon}</span>
            )}
            <span className="truncate">{option.label}</span>
            {option.badge && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 font-mono font-bold">
                {option.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
