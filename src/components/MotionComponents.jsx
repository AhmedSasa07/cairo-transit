import React, { useState } from 'react';
import { usePressAnimation, useAccordionMotion, useSheetDragToDismiss, useReducedMotion } from '../utils/motion.js';
import { ArrowUpDown, X } from 'lucide-react';
import { haptics } from '../utils/haptics.js';

/**
 * ApplePressable: Polymorphic interactive element with instant pointer-down feedback
 * Scale(0.97) on active press, sub-120ms response, zero lag
 */
export function ApplePressable({
  as: Component = 'div',
  children,
  onClick,
  activeScale = 0.97,
  hapticStyle = 'light',
  disabled = false,
  className = '',
  style = {},
  ...props
}) {
  const { props: pressProps } = usePressAnimation({
    activeScale,
    hapticStyle,
    disabled,
    onClick,
    className,
    style,
  });

  return (
    <Component {...pressProps} {...props}>
      {children}
    </Component>
  );
}

/**
 * AppleCard: Interactive surface for Route cards, Station selectors, and Fare tiles
 */
export function AppleCard({
  children,
  onClick,
  activeScale = 0.98,
  hapticStyle = 'light',
  disabled = false,
  className = '',
  style = {},
  ...props
}) {
  return (
    <ApplePressable
      as="div"
      onClick={onClick}
      activeScale={activeScale}
      hapticStyle={hapticStyle}
      disabled={disabled}
      className={`rounded-2xl transition-colors ${className}`}
      style={style}
      {...props}
    >
      {children}
    </ApplePressable>
  );
}

/**
 * AppleAccordion: Smooth GPU-composited expander under 220ms using CSS Grid
 */
export function AppleAccordion({
  isOpen,
  children,
  className = '',
}) {
  const { containerStyle, innerStyle } = useAccordionMotion(isOpen);

  return (
    <div style={containerStyle} className={`w-full ${className}`}>
      <div style={innerStyle}>
        {children}
      </div>
    </div>
  );
}

/**
 * StationSwapButton: Rotates 180deg with Apple spring physics upon reversal
 */
export function StationSwapButton({
  onSwap,
  title = 'Swap Stations',
  className = '',
}) {
  const [rotation, setRotation] = useState(0);
  const reducedMotion = useReducedMotion();

  const handleClick = (e) => {
    e.stopPropagation();
    haptics.impact('MEDIUM');
    setRotation(prev => prev + 180);
    onSwap?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={title}
      aria-label={title}
      className={`w-10 h-10 rounded-full bg-white dark:bg-[#212127] border-2 border-slate-200 dark:border-[#26262C] shadow-md flex items-center justify-center text-rose-600 dark:text-[#FF4A1C] cursor-pointer apple-swap-btn select-none touch-manipulation tap-transparent active:scale-90 ${className}`}
      style={{
        transform: reducedMotion ? 'none' : `rotate(${rotation}deg) translateZ(0)`,
        transition: reducedMotion ? 'none' : 'transform 240ms cubic-bezier(0.16, 1, 0.3, 1), background-color 150ms ease-out',
        willChange: 'transform',
        touchAction: 'manipulation',
      }}
    >
      <ArrowUpDown className="w-4 h-4" />
    </button>
  );
}

/**
 * AppleSheetModal: iOS-style bottom sheet presentation with sub-240ms curve & drag dismissal
 */
export function AppleSheetModal({
  isOpen,
  onClose,
  title,
  children,
  maxWidthClass = 'max-w-lg',
  heightClass = 'h-[82vh] sm:h-[640px]',
}) {
  const reducedMotion = useReducedMotion();
  const { handlers, sheetStyle, isDragging } = useSheetDragToDismiss({
    onClose,
    isEnabled: isOpen,
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 apple-fade-enter"
      onClick={onClose}
      style={{
        transition: 'opacity 180ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className={`w-full ${maxWidthClass} bg-white dark:bg-[#111113] rounded-t-[24px] sm:rounded-[24px] ${heightClass} flex flex-col shadow-2xl border border-slate-200 dark:border-[#26262C] overflow-hidden apple-sheet-enter pb-[env(safe-area-inset-bottom,0px)] select-none`}
        onClick={(e) => e.stopPropagation()}
        style={sheetStyle}
      >
        {/* Grab Handle with drag tracking */}
        <div
          {...handlers}
          className="w-full pt-2.5 pb-1 flex justify-center cursor-grab active:cursor-grabbing touch-none select-none"
        >
          <div className="w-10 h-1.5 bg-slate-300 dark:bg-[#2A2A32] rounded-full transition-transform active:scale-x-125" />
        </div>

        {/* Header */}
        <div className="px-4 py-2.5 border-b border-slate-100 dark:border-[#1D1D22] flex items-center justify-between bg-slate-50/70 dark:bg-[#111113] flex-shrink-0 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 dark:bg-[#FF4A1C]" />
            <h3 className="text-sm font-space font-bold text-slate-900 dark:text-[#F4F4F5]">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-[#F4F4F5] hover:bg-slate-100 dark:hover:bg-[#17171A] select-none touch-manipulation tap-transparent active:scale-90 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pb-[calc(1rem+env(safe-area-inset-bottom,0px))] overscroll-contain">
          {children}
        </div>
      </div>
    </div>
  );
}
