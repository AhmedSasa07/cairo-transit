import React, { useState, useRef, useEffect } from 'react';
import { X, Bookmark } from 'lucide-react';
import { haptics } from '../utils/haptics.js';

const MAX_NAME_LENGTH = 20;

export default function SaveTripModal({ lang, fromStation, toStation, onSave, onClose }) {
  const [tripName, setTripName] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 150);
    return () => clearTimeout(timer);
  }, []);

  const isAr = lang === 'ar';
  const canSave = tripName.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;
    haptics.success?.();
    onSave(tripName.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && canSave) handleSave();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className={`w-full max-w-sm bg-white dark:bg-[#18181B] rounded-3xl shadow-2xl border border-slate-200 dark:border-[#2A2A32] overflow-hidden select-none ${isAr ? 'font-cairo' : 'font-space'}`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#26262C] select-none touch-manipulation tap-transparent active:scale-90 transition-transform"
            aria-label={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-base font-extrabold text-slate-900 dark:text-[#F4F4F5]">
            {isAr ? 'حفظ المشوار' : 'Save Trip'}
          </h2>

          <div className="p-1.5 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-400" />
          </div>
        </div>

        {/* Route Preview */}
        <div className="mx-5 mb-4 bg-slate-50 dark:bg-[#111113] rounded-2xl border border-slate-200 dark:border-[#26262C] p-4 select-none">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-950 flex-shrink-0" />
              <div className="w-0.5 h-8 border-l-2 border-dashed border-slate-300 dark:border-slate-600 my-1" />
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-950 flex-shrink-0" />
            </div>
            <div className="flex flex-col gap-4 min-w-0">
              <div>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {isAr ? 'من' : 'From'}
                </p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-[#F4F4F5] truncate">
                  {fromStation ? (isAr ? fromStation.nameAr : fromStation.nameEn) : '—'}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {isAr ? 'إلى' : 'To'}
                </p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-[#F4F4F5] truncate">
                  {toStation ? (isAr ? toStation.nameAr : toStation.nameEn) : '—'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Name Input */}
        <div className="mx-5 mb-5">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 select-none">
            {isAr ? 'عنوان الرحلة' : 'Trip Title'}
          </label>
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={tripName}
              onChange={(e) => setTripName(e.target.value.slice(0, MAX_NAME_LENGTH))}
              onKeyDown={handleKeyDown}
              placeholder={isAr ? 'من فضلك ادخل عنوان' : 'e.g. Work Commute'}
              maxLength={MAX_NAME_LENGTH}
              autoCapitalize="words"
              autoCorrect="off"
              spellCheck="false"
              enterKeyHint="done"
              className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-[#111113] border-2 transition-colors text-[16px] sm:text-sm font-bold text-slate-900 dark:text-[#F4F4F5] placeholder:text-slate-400 dark:placeholder:text-[#4A4A54] outline-none select-text touch-manipulation tap-transparent ${
                tripName.length > 0
                  ? 'border-amber-400 dark:border-amber-500 ring-2 ring-amber-400/20'
                  : 'border-slate-200 dark:border-[#26262C] focus:border-amber-400 dark:focus:border-amber-500'
              } ${isAr ? 'text-right' : 'text-left'}`}
            />
          </div>
          <div className="flex items-center justify-between mt-1.5 px-1 select-none">
            <p className="text-[10px] text-slate-400 dark:text-[#5B5B63]">
              {isAr ? 'من فضلك ادخل عنوان للمشوار' : 'Enter a title for this trip'}
            </p>
            <span className={`text-[10px] font-mono font-bold tabular-nums ${
              tripName.length >= MAX_NAME_LENGTH
                ? 'text-rose-500'
                : 'text-slate-400 dark:text-[#5B5B63]'
            }`}>
              {tripName.length}/{MAX_NAME_LENGTH}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 px-5 pb-5 select-none">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-2xl border border-slate-200 dark:border-[#26262C] text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#212127] select-none touch-manipulation tap-transparent active:scale-95 transition-transform"
          >
            {isAr ? 'إلغاء' : 'Cancel'}
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={!canSave}
            className={`flex-1 py-3 px-4 rounded-2xl text-sm font-bold text-white shadow-md transition-all select-none touch-manipulation tap-transparent active:scale-95 ${
              canSave
                ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 shadow-none cursor-not-allowed'
            }`}
          >
            {isAr ? 'حفظ' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
