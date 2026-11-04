import React from 'react';

/**
 * Live Status Capsule Pill (derived from Ischys StreakPill.tsx)
 * - 10% alpha colored background wash
 * - 7px live pulsing status dot
 * - Tabular monospace font
 */
export default function StatusPill({
  label,
  sublabel,
  tone = 'success',
  className = '',
  onClick
}) {
  const tones = {
    success: {
      bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-[#2DD881]',
      dot: 'bg-emerald-500 dark:bg-[#2DD881]',
    },
    warning: {
      bg: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-[#FFC24B]',
      dot: 'bg-amber-500 dark:bg-[#FFC24B]',
    },
    error: {
      bg: 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-[#FF4D4D]',
      dot: 'bg-rose-500 dark:bg-[#FF4D4D]',
    },
    accent: {
      bg: 'bg-rose-600/10 border-rose-600/20 text-rose-600 dark:text-[#FF4A1C]',
      dot: 'bg-rose-600 dark:bg-[#FF4A1C]',
    },
  };

  const current = tones[tone] || tones.success;

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 py-0.5 sm:py-1 px-2 sm:px-2.5 rounded-full border text-[10px] sm:text-[11px] font-mono font-semibold tracking-tight transition-all select-none ${current.bg} ${
        onClick ? 'cursor-pointer active:scale-95' : ''
      } ${className}`}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.dot}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dot}`} />
      </span>
      <span className="truncate">{label}</span>
      {sublabel && (
        <span className="opacity-75 font-normal truncate">• {sublabel}</span>
      )}
    </div>
  );
}
