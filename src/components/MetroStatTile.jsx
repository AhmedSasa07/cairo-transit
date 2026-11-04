import React from 'react';

/**
 * Terminal HUD Metric Tile (derived from Ischys StatTile.tsx)
 * - Uppercase eyebrow with clean tracking and Arabic support
 * - Large tabular figures (tabular-nums) for numerical values that never jitter or shift
 * - Auto-sized typography for text values (e.g. "مباشر" / "DIR")
 * - Distinct subdued unit label
 * - Clean badge presentation with uniform tile height
 */
export default function MetroStatTile({
  label,
  eyebrow,
  value,
  unit,
  badge,
  badgeColor = '',
  tone = 'default',
  variant,
  className = '',
  onClick
}) {
  const displayLabel = label || eyebrow;
  const resolvedTone = tone || variant || 'default';

  const toneText = {
    default: 'text-slate-900 dark:text-[#F4F4F5]',
    accent: 'text-rose-600 dark:text-rose-400',
    success: 'text-emerald-600 dark:text-emerald-400',
    amber: 'text-amber-500 dark:text-amber-400',
    blue: 'text-blue-600 dark:text-blue-400',
  };

  const isNumeric = typeof value === 'number' || (/^\d+$/.test(String(value).trim()));
  const isArabic = typeof displayLabel === 'string' && /[\u0600-\u06FF]/.test(displayLabel);

  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-between gap-1 p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-[#111113] border border-slate-200 dark:border-[#26262C] relative overflow-hidden min-h-[76px] sm:min-h-[82px] ${
        onClick
          ? 'cursor-pointer hover:border-slate-300 dark:hover:border-[#3D3D45] apple-card-interactive active:scale-[0.97]'
          : 'transition-[border-color,background-color] duration-150'
      } ${className}`}
    >
      {/* Eyebrow Label */}
      {displayLabel && (
        <span
          className={`text-[9.5px] sm:text-[10px] font-bold text-slate-600 dark:text-[#97979E] truncate leading-tight ${
            isArabic ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.8px]'
          }`}
        >
          {displayLabel}
        </span>
      )}

      {/* Numerical or Text Value with Tabular Digits & Unit */}
      <div className="flex items-baseline gap-1 my-auto">
        <span
          className={`${toneText[resolvedTone] || toneText.default} ${
            isNumeric
              ? 'text-lg sm:text-2xl font-black font-space rtl:font-cairo tracking-tight rtl:tracking-normal tabular-nums leading-none'
              : 'text-xs sm:text-sm font-bold font-cairo tracking-normal leading-tight line-clamp-2'
          }`}
          title={typeof value === 'string' ? value : undefined}
        >
          {value}
        </span>
        {unit && (
          <span className="text-[10px] sm:text-xs font-semibold font-cairo text-slate-600 dark:text-[#97979E] flex-shrink-0 self-baseline whitespace-nowrap">
            {unit}
          </span>
        )}
      </div>

      {/* Optional Badge / Ticket Color Tag */}
      {badge ? (
        <div className="mt-0.5 overflow-hidden">
          <span className={`inline-block truncate max-w-full text-[8.5px] sm:text-[9.5px] font-bold px-1.5 py-0.5 rounded-md leading-none shadow-2xs ${badgeColor}`}>
            {badge}
          </span>
        </div>
      ) : (
        <div className="h-1.5" aria-hidden="true" />
      )}
    </div>
  );
}
