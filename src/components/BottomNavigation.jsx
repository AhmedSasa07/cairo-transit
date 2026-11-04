import React from 'react';
import { Route, Map as MapIcon, Navigation, Ticket, Layers } from 'lucide-react';
import { haptics } from '../utils/haptics.js';

/**
 * Ischys Floating Translucent Tab Bar Capsule
 * Suspended above the safe area, rounded 22px, with 12% accent active wash pill.
 * Optimized for narrow 360dp mobile screens and both Arabic RTL & English LTR.
 */
export default function BottomNavigation({ activeTab, setActiveTab, t, lang }) {
  const isArabic = lang === 'ar' || t?.tabs?.route === 'الرحلات' || t?.tabs?.route === 'تخطيط الرحلة';

  // Concise labels so all 5 tabs comfortably fit on 360dp screens without cutoff
  const navItems = [
    { id: 'route', label: isArabic ? 'الرحلات' : (t?.tabs?.route || 'Routes'), icon: Route },
    { id: 'network', label: isArabic ? 'الشبكة' : (t?.tabs?.network || 'Network'), icon: Layers },
    { id: 'map', label: isArabic ? 'الخريطة' : (t?.tabs?.map || 'Map'), icon: MapIcon },
    { id: 'nearest', label: isArabic ? 'الأقرب' : (t?.tabs?.nearest || 'Nearest'), icon: Navigation },
    { id: 'tickets', label: isArabic ? 'التذاكر' : (t?.tabs?.tickets || 'Tickets'), icon: Ticket }
  ];

  return (
    <div className="fixed bottom-3 inset-x-0 z-40 px-2.5 sm:px-4 pointer-events-none flex justify-center pb-[env(safe-area-inset-bottom,0px)]">
      <nav className="pointer-events-auto w-full max-w-lg rounded-[22px] backdrop-blur-md bg-white/95 dark:bg-[#111113]/95 border border-slate-200/90 dark:border-[#26262C] shadow-xl dark:shadow-[0_16px_40px_rgba(0,0,0,0.65)] p-1 sm:p-1.5 flex items-center justify-between gap-0.5 sm:gap-1 transition-all">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                haptics.light();
                setActiveTab(item.id);
              }}
              className={`flex-1 min-w-0 flex flex-col items-center justify-center py-1.5 sm:py-2 px-0.5 sm:px-1 rounded-[14px] sm:rounded-[16px] transition-all duration-150 active:scale-95 ${
                isActive
                  ? 'bg-rose-500/12 dark:bg-rose-500/20 text-rose-600 dark:text-[#FF4A1C] font-bold'
                  : 'text-slate-600 dark:text-[#97979E] hover:text-slate-900 dark:hover:text-[#F4F4F5] font-semibold'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 transition-transform ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              <span className={`text-[10px] sm:text-[11px] leading-tight truncate max-w-full text-center ${
                isArabic ? 'font-cairo font-semibold tracking-normal' : 'font-space tracking-tight'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
