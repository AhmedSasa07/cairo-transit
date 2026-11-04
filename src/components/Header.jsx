import React, { useState, useEffect } from 'react';
import {
  Globe,
  Moon,
  Sun,
  TrainFront,
  Clock,
  Layers,
  Map,
  FileText,
  WifiOff
} from 'lucide-react';
import { haptics } from '../utils/haptics.js';

/**
 * Ischys Precision Header
 * - Background: #0A0A0B (canvas) with subtle 1px border #26262C
 * - Wordmark: Space Grotesk Bold + Mono dot
 * - Waterdrop notch safe area support (pt-safe + env(safe-area-inset-top))
 */
export default function Header({
  lang,
  setLang,
  darkMode,
  setDarkMode,
  t,
  onOpenSchedule,
  onOpenPdfMap,
  sticky = true
}) {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header
      className={`${sticky ? 'sticky top-0' : 'relative'} z-40 bg-white/95 dark:bg-[#0A0A0B]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#26262C] transition-colors pt-safe`}
      style={{
        paddingTop: 'max(env(safe-area-inset-top, 0px), 28px)'
      }}
    >
      <div className="max-w-xl mx-auto px-2.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-1 sm:gap-1.5 flex-nowrap">
        {/* Brand & Wordmark */}
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-shrink">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center shadow-md shadow-rose-600/20 text-white flex-shrink-0">
            <TrainFront className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <h1 className={`text-xs sm:text-sm font-bold leading-tight truncate ${lang === 'ar' ? 'font-cairo tracking-normal' : 'font-space tracking-tight'} text-slate-900 dark:text-[#F4F4F5]`}>
                {lang === 'ar' ? 'مترو مصر' : 'EGY METRO'}
              </h1>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 dark:bg-[#FF4A1C] flex-shrink-0" />
              <span className={`text-[9px] uppercase hidden sm:inline ${lang === 'ar' ? 'font-cairo tracking-normal text-slate-500 dark:text-[#97979E]' : 'font-mono tracking-wider text-slate-400 dark:text-[#5B5B63]'}`}>
                {lang === 'ar' ? 'القاهرة' : 'CAIRO'}
              </span>
            </div>
            <p className={`text-[10px] sm:text-[11px] text-slate-500 dark:text-[#97979E] font-medium truncate ${lang === 'ar' ? 'font-cairo' : 'font-space'}`}>
              {lang === 'ar' ? 'مترو • مونوريل • LRT' : 'Metro • Monorail • LRT'}
            </p>
          </div>
        </div>

        {/* Action icons - never wrap or crowd on narrow screens */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 flex-nowrap">
          {/* Official Maps Gallery Button */}
          <button
            onClick={() => {
              haptics.light();
              onOpenPdfMap();
            }}
            className="flex items-center justify-center p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 transition-all border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm active:scale-95 flex-shrink-0"
            title={lang === 'ar' ? 'معرض الخرائط الرسمية وشبكة القاهرة' : 'Official Cairo Metro & Transit Maps Gallery'}
            aria-label="Official Metro & Transit Maps Gallery"
          >
            <Map className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span className="text-[11px] hidden sm:inline ml-1 rtl:mr-1 rtl:ml-0">{lang === 'ar' ? 'الخرائط' : 'Maps'}</span>
          </button>

          {/* Operating Hours & Timetable */}
          <button
            onClick={() => {
              haptics.light();
              onOpenSchedule();
            }}
            className="p-1.5 rounded-xl text-slate-600 dark:text-[#97979E] hover:bg-slate-100 dark:hover:bg-[#17171A] hover:text-slate-900 dark:hover:text-[#F4F4F5] transition-all active:scale-95 flex-shrink-0"
            title={t.timetable.title}
            aria-label="Operating Hours"
          >
            <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              haptics.light();
              setDarkMode(!darkMode);
            }}
            className="p-1.5 rounded-xl text-slate-600 dark:text-[#97979E] hover:bg-slate-100 dark:hover:bg-[#17171A] hover:text-slate-900 dark:hover:text-[#F4F4F5] transition-all active:scale-95 flex-shrink-0"
            title={darkMode ? t.settings.lightMode : t.settings.darkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            )}
          </button>

          {/* Language Switcher - Crisp Feedback and High Responsiveness */}
          <button
            onClick={() => {
              haptics.selection();
              setLang(lang === 'en' ? 'ar' : 'en');
            }}
            className="flex items-center gap-1 px-2 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200/80 dark:hover:bg-[#212127] active:bg-slate-300 dark:active:bg-[#2a2a32] text-slate-800 dark:text-[#F4F4F5] transition-all border border-slate-200/80 dark:border-[#26262C] shadow-sm active:scale-95 flex-shrink-0"
            title={lang === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch language to English'}
            aria-label="Switch Language"
          >
            <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className={`text-[11px] font-bold ${lang === 'en' ? 'font-cairo tracking-normal' : 'font-mono'}`}>
              {lang === 'en' ? 'عربي' : 'EN'}
            </span>
          </button>
        </div>
      </div>

      {/* Offline Mode Reassurance Banner */}
      {isOffline && (
        <div className="bg-amber-500 text-slate-950 px-3 py-1 text-[11px] font-mono font-bold text-center flex items-center justify-center gap-1.5 shadow-inner">
          <WifiOff className="w-3.5 h-3.5" />
          <span>
            {lang === 'ar'
              ? '📶 وضع عدم الاتصال (أوفلاين) • كافة المسارات والتذاكر والخرائط تعمل 100% بدون إنترنت'
              : '📶 Offline Mode Active • All routes, fares & maps work 100% without internet'}
          </span>
        </div>
      )}
    </header>
  );
}
