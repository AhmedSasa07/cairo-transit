import React, { useState } from 'react';
import {
  Ticket,
  CreditCard,
  AlertTriangle,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  PiggyBank,
  Train,
  Layers,
  Bus,
  Zap,
  ArrowRight,
  Info,
  Accessibility
} from 'lucide-react';
import {
  TICKET_TIERS,
  MONORAIL_TIERS,
  LRT_TIERS,
  BRT_TIERS,
  METRO_LINES
} from '../data/metroData.js';
import { calculateTicketPrice } from '../utils/routing.js';
import SubscriptionCalculator from './SubscriptionCalculator.jsx';
import SmartSavingsCalculator from './SmartSavingsCalculator.jsx';
import PressableScale from './PressableScale.jsx';
import TransitModeIcon from './TransitModeIcon.jsx';
import { haptics } from '../utils/haptics.js';

export default function TicketGuide({ lang, t }) {
  const [stationCountSlider, setStationCountSlider] = useState(7);
  const [activeTab, setActiveTab] = useState('tickets'); // 'savings', 'tickets', 'subscriptions'
  const [selectedTransitMode, setSelectedTransitMode] = useState('metro'); // 'metro', 'lrt', 'monorail', 'brt', 'multimodal'

  const isAr = lang === 'ar';
  const calculatedTier = calculateTicketPrice(stationCountSlider);

  // Dynamic price calculation based on selected transit mode
  const getDynamicPrice = (mode, count) => {
    if (mode === 'metro') {
      return calculateTicketPrice(count);
    } else if (mode === 'lrt') {
      if (count <= 3) return { price: 10, nameEn: 'Zone 1 (1 to 3 Stations)', nameAr: 'المنطقة الأولى (1-3 محطات)', seniorPrice: 5, specialNeedsPrice: 5 };
      if (count <= 7) return { price: 15, nameEn: 'Zone 2 (4 to 7 Stations)', nameAr: 'المنطقة الثانية (4-7 محطات)', seniorPrice: 7.5, specialNeedsPrice: 5 };
      return { price: 20, nameEn: 'Zone 3 (8+ Stations)', nameAr: 'المنطقة الثالثة (أكثر من 7 محطات)', seniorPrice: 10, specialNeedsPrice: 5 };
    } else if (mode === 'monorail') {
      if (count <= 4) return { price: 10, nameEn: 'Tier 1 (1 to 4 Stations)', nameAr: 'الشريحة الأولى (1-4 محطات)', seniorPrice: 5, specialNeedsPrice: 5 };
      if (count <= 9) return { price: 15, nameEn: 'Tier 2 (5 to 9 Stations)', nameAr: 'الشريحة الثانية (5-9 محطات)', seniorPrice: 7.5, specialNeedsPrice: 5 };
      if (count <= 15) return { price: 20, nameEn: 'Tier 3 (10 to 15 Stations)', nameAr: 'الشريحة الثالثة (10-15 محطة)', seniorPrice: 10, specialNeedsPrice: 5 };
      return { price: 25, nameEn: 'Tier 4 (16+ Stations)', nameAr: 'الشريحة الرابعة (أكثر من 15 محطة)', seniorPrice: 12.5, specialNeedsPrice: 5 };
    } else if (mode === 'brt') {
      if (count <= 4) return { price: 5, nameEn: 'Tier 1 (1 to 4 Stations)', nameAr: 'الشريحة 1 (حتى 4 محطات)', seniorPrice: 2.5, specialNeedsPrice: 5 };
      if (count <= 10) return { price: 10, nameEn: 'Tier 2 (5 to 10 Stations)', nameAr: 'الشريحة 2 (حتى 10 محطات)', seniorPrice: 5, specialNeedsPrice: 5 };
      if (count <= 14) return { price: 15, nameEn: 'Tier 3 (11 to 14 Stations)', nameAr: 'الشريحة 3 (حتى 14 محطة)', seniorPrice: 7.5, specialNeedsPrice: 5 };
      if (count <= 18) return { price: 20, nameEn: 'Tier 4 (15 to 18 Stations)', nameAr: 'الشريحة 4 (حتى 18 محطة)', seniorPrice: 10, specialNeedsPrice: 5 };
      if (count <= 22) return { price: 25, nameEn: 'Tier 5 (19 to 22 Stations)', nameAr: 'الشريحة 5 (حتى 22 محطة)', seniorPrice: 12.5, specialNeedsPrice: 5 };
      if (count <= 26) return { price: 30, nameEn: 'Tier 6 (23 to 26 Stations)', nameAr: 'الشريحة 6 (حتى 26 محطة)', seniorPrice: 15, specialNeedsPrice: 5 };
      return { price: 35, nameEn: 'Tier 7 (27 to 30 Stations)', nameAr: 'الشريحة 7 (حتى 30 محطة)', seniorPrice: 17.5, specialNeedsPrice: 5 };
    }
    return { price: 20, nameEn: 'Multi-Modal Trip', nameAr: 'رحلة وسائط متعددة', seniorPrice: 10, specialNeedsPrice: 5 };
  };

  const currentDynamicCalculation = getDynamicPrice(selectedTransitMode, stationCountSlider);

  return (
    <div className="space-y-4 pb-32 sm:pb-36">
      {/* Header Banner - Ischys Dark Graphite Surface */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200 dark:border-[#26262C] shadow-sm space-y-2">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-[#2DD881]/10 border border-[#2DD881]/25 flex items-center justify-center text-[#2DD881] shadow-sm flex-shrink-0">
            <Ticket className="w-5 h-5" />
          </div>
          <div>
            <h2 className={`text-base font-black leading-tight text-slate-900 dark:text-white ${
              isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
            }`}>
              {t.ticketGuide.title}
            </h2>
            <p className={`text-xs text-slate-500 dark:text-[#A1A1AA] mt-0.5 ${
              isAr ? 'font-cairo tracking-normal' : 'font-mono'
            }`}>
              {t.ticketGuide.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Turnstile 50 EGP Fine Warning Notice - Ischys Red Outline Alert */}
      <div className="bg-rose-500/10 dark:bg-rose-950/25 border border-rose-500/30 rounded-3xl p-4 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-3 shadow-sm">
        <ShieldAlert className="w-5 h-5 text-[#FF4A1C] flex-shrink-0 mt-0.5" />
        <div className="space-y-1 text-start">
          <p className={`font-black text-rose-700 dark:text-rose-300 ${
            isAr ? 'font-cairo tracking-normal' : 'font-space'
          }`}>
            {isAr ? 'تنبيه مشدد لتفادي الغرامة المالية (50 جنيهاً):' : 'Turnstile Regulation: Avoid 50 EGP Fine!'}
          </p>
          <p className={`leading-relaxed text-[11px] text-slate-600 dark:text-[#D4D4D8] ${
            isAr ? 'font-cairo tracking-normal' : 'font-mono'
          }`}>
            {t.ticketGuide.fineWarning}
          </p>
        </div>
      </div>

      {/* 3 Main Tabs: Segmented Capsule */}
      <div className="grid grid-cols-3 bg-slate-100 dark:bg-[#111113] p-1 rounded-2xl gap-1 text-center border border-slate-200 dark:border-[#26262C]">
        <PressableScale
          onClick={() => {
            haptics.selection();
            setActiveTab('savings');
          }}
          className={`py-2 px-1 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            isAr ? 'font-cairo tracking-normal' : 'font-space'
          } ${
            activeTab === 'savings'
              ? 'bg-[#2DD881] text-black shadow-sm font-black'
              : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <PiggyBank className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{isAr ? 'حاسبة التوفير' : 'Smart Savings'}</span>
        </PressableScale>

        <PressableScale
          onClick={() => {
            haptics.selection();
            setActiveTab('tickets');
          }}
          className={`py-2 px-1 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            isAr ? 'font-cairo tracking-normal' : 'font-space'
          } ${
            activeTab === 'tickets'
              ? 'bg-white dark:bg-[#212127] text-slate-900 dark:text-white shadow-sm border border-slate-200/90 dark:border-[#26262C] font-black'
              : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Ticket className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{isAr ? 'التذاكر الفردية' : 'Single Tickets'}</span>
        </PressableScale>

        <PressableScale
          onClick={() => {
            haptics.selection();
            setActiveTab('subscriptions');
          }}
          className={`py-2 px-1 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            isAr ? 'font-cairo tracking-normal' : 'font-space'
          } ${
            activeTab === 'subscriptions'
              ? 'bg-white dark:bg-[#212127] text-slate-900 dark:text-white shadow-sm border border-slate-200/90 dark:border-[#26262C] font-black'
              : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <CreditCard className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{isAr ? 'الاشتراكات' : 'Passes'}</span>
        </PressableScale>
      </div>

      {/* Tab 1: Smart Savings Calculator */}
      {activeTab === 'savings' && (
        <SmartSavingsCalculator lang={lang} t={t} />
      )}

      {/* Tab 2: Subscriptions Details Guide & Wallet */}
      {activeTab === 'subscriptions' && (
        <SubscriptionCalculator lang={lang} t={t} />
      )}

      {/* Tab 3: Single Tickets, Official Colors & Multi-Modal Zones */}
      {activeTab === 'tickets' && (
        <div className="space-y-4">
          {/* Transit Mode Selector Bar */}
          <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-[#111113] rounded-2xl overflow-x-auto no-scrollbar border border-slate-200 dark:border-[#26262C]">
            <PressableScale
              onClick={() => {
                haptics.selection();
                setSelectedTransitMode('metro');
                setStationCountSlider(7);
              }}
              className={`flex-shrink-0 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                isAr ? 'font-cairo tracking-normal' : 'font-space'
              } ${
                selectedTransitMode === 'metro'
                  ? 'bg-[#00518e] text-white shadow-sm'
                  : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TransitModeIcon mode="metro" size="xs" withBackdrop={selectedTransitMode === 'metro'} />
              <span>{isAr ? 'المترو' : 'Metro'}</span>
            </PressableScale>

            <PressableScale
              onClick={() => {
                haptics.selection();
                setSelectedTransitMode('lrt');
                setStationCountSlider(4);
              }}
              className={`flex-shrink-0 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                isAr ? 'font-cairo tracking-normal' : 'font-space'
              } ${
                selectedTransitMode === 'lrt'
                  ? 'bg-[#9e1b33] text-white shadow-sm'
                  : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TransitModeIcon mode="lrt" size="xs" withBackdrop={selectedTransitMode === 'lrt'} />
              <span>{isAr ? 'قطار LRT' : 'LRT Train'}</span>
            </PressableScale>

            <PressableScale
              onClick={() => {
                haptics.selection();
                setSelectedTransitMode('monorail');
                setStationCountSlider(6);
              }}
              className={`flex-shrink-0 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                isAr ? 'font-cairo tracking-normal' : 'font-space'
              } ${
                selectedTransitMode === 'monorail'
                  ? 'bg-[#009ca6] text-white shadow-sm'
                  : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TransitModeIcon mode="monorail" size="xs" withBackdrop={selectedTransitMode === 'monorail'} />
              <span>{isAr ? 'المونوريل' : 'Monorail'}</span>
            </PressableScale>

            <PressableScale
              onClick={() => {
                haptics.selection();
                setSelectedTransitMode('brt');
                setStationCountSlider(5);
              }}
              className={`flex-shrink-0 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                isAr ? 'font-cairo tracking-normal' : 'font-space'
              } ${
                selectedTransitMode === 'brt'
                  ? 'bg-[#8B5CF6] text-white shadow-sm'
                  : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TransitModeIcon mode="brt" size="xs" withBackdrop={selectedTransitMode === 'brt'} />
              <span>{isAr ? 'ترددي BRT' : 'BRT Bus'}</span>
            </PressableScale>

            <PressableScale
              onClick={() => {
                haptics.selection();
                setSelectedTransitMode('multimodal');
              }}
              className={`flex-shrink-0 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                isAr ? 'font-cairo tracking-normal' : 'font-space'
              } ${
                selectedTransitMode === 'multimodal'
                  ? 'bg-[#2DD881] text-black shadow-sm font-black'
                  : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{isAr ? 'مشترك' : 'Mixed'}</span>
            </PressableScale>
          </div>

          {/* Interactive Fare Calculator for Selected Mode */}
          {selectedTransitMode !== 'multimodal' ? (
            <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className={`text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2 ${
                  isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
                }`}>
                  <Sparkles className="w-4 h-4 text-[#2DD881] flex-shrink-0" />
                  <span>
                    {isAr
                      ? `حاسبة تذاكر ${
                          selectedTransitMode === 'metro'
                            ? 'مترو الأنفاق'
                            : selectedTransitMode === 'lrt'
                            ? 'القطار الكهربائي الخفيف'
                            : selectedTransitMode === 'monorail'
                            ? 'مونوريل شرق النيل'
                            : 'أتوبيس BRT'
                        }`
                      : `${selectedTransitMode.toUpperCase()} Fare Calculator`}
                  </span>
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="tabular-nums px-3 py-1 rounded-full bg-[#2DD881]/15 text-[#2DD881] border border-[#2DD881]/25 text-xs font-bold inline-flex items-baseline gap-1 rtl:font-cairo">
                    <span>{currentDynamicCalculation.price}</span>
                    <span className={`text-[11px] ${isAr ? 'font-cairo' : 'font-mono'}`}>{isAr ? 'ج.م' : 'EGP'}</span>
                  </span>
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <div className={`flex items-center justify-between text-xs font-bold text-slate-700 dark:text-[#D4D4D8] ${
                  isAr ? 'font-cairo' : 'font-mono'
                }`}>
                  <span className="font-mono">1 {isAr ? 'محطة' : 'st'}</span>
                  <span className="text-base font-black text-[#FF4A1C] tabular-nums font-mono flex items-baseline gap-1">
                    <span>{stationCountSlider}</span>
                    <span className={`text-xs ${isAr ? 'font-cairo font-bold' : 'font-mono'}`}>{t.ticketGuide.stationsCount}</span>
                  </span>
                  <span className="font-mono">
                    {selectedTransitMode === 'metro'
                      ? 35
                      : selectedTransitMode === 'lrt'
                      ? 12
                      : selectedTransitMode === 'monorail'
                      ? 22
                      : 47}{' '}
                    {isAr ? 'محطة' : 'st'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={
                    selectedTransitMode === 'metro'
                      ? 35
                      : selectedTransitMode === 'lrt'
                      ? 12
                      : selectedTransitMode === 'monorail'
                      ? 22
                      : 47
                  }
                  value={stationCountSlider}
                  onChange={(e) => {
                    setStationCountSlider(Number(e.target.value));
                    haptics.selection();
                  }}
                  className="w-full h-2 bg-slate-200 dark:bg-[#17171A] rounded-lg appearance-none cursor-pointer accent-[#FF4A1C]"
                />
              </div>

              {/* Calculation Result Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#17171A] border border-slate-200/70 dark:border-[#26262C] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-xs font-bold text-slate-800 dark:text-white ${
                      isAr ? 'font-cairo' : 'font-space'
                    }`}>
                      {isAr ? currentDynamicCalculation.nameAr : currentDynamicCalculation.nameEn}
                    </span>
                    {selectedTransitMode === 'metro' && (
                      <p className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] mt-0.5 ${
                        isAr ? 'font-cairo' : 'font-mono'
                      }`}>
                        {t.routePlanner.ticketColorLabel}:{' '}
                        <b className="text-slate-800 dark:text-white">
                          {isAr ? calculatedTier.ticketColorAr : calculatedTier.ticketColorEn}
                        </b>
                      </p>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-mono tabular-nums font-black text-[#2DD881]">
                      {currentDynamicCalculation.price}
                    </span>
                    <span className={`text-xs font-bold text-slate-500 dark:text-[#A1A1AA] ${isAr ? 'font-cairo' : 'font-mono'}`}>
                      {isAr ? 'ج.م' : 'EGP'}
                    </span>
                  </div>
                </div>

                {/* Concession / Discounted Prices */}
                <div className="grid grid-cols-3 gap-2 text-xs pt-2 border-t border-slate-200/60 dark:border-[#26262C]">
                  <div className="bg-white dark:bg-[#111113] p-2.5 rounded-xl text-center border border-slate-200/40 dark:border-[#26262C]">
                    <p className={`text-[9px] font-bold text-slate-400 dark:text-[#71717A] ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
                    }`}>
                      {t.ticketGuide.elderlyDiscount}
                    </p>
                    <div className="flex items-baseline justify-center gap-1 mt-0.5">
                      <span className="text-xs font-mono tabular-nums font-bold text-slate-800 dark:text-white">
                        {currentDynamicCalculation.seniorPrice}
                      </span>
                      <span className={`text-[10px] font-bold text-slate-500 dark:text-[#A1A1AA] ${isAr ? 'font-cairo' : 'font-mono'}`}>
                        {isAr ? 'ج.م' : 'EGP'}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#111113] p-2.5 rounded-xl text-center border border-slate-200/40 dark:border-[#26262C]">
                    <p className={`text-[9px] font-bold text-slate-400 dark:text-[#71717A] ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
                    }`}>
                      {t.ticketGuide.specialNeedsDiscount}
                    </p>
                    <div className="flex items-baseline justify-center gap-1 mt-0.5">
                      <span className="text-xs font-mono tabular-nums font-bold text-slate-800 dark:text-white">
                        {currentDynamicCalculation.specialNeedsPrice}
                      </span>
                      <span className={`text-[10px] font-bold text-slate-500 dark:text-[#A1A1AA] ${isAr ? 'font-cairo' : 'font-mono'}`}>
                        {isAr ? 'ج.م' : 'EGP'}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#111113] p-2.5 rounded-xl text-center border border-slate-200/40 dark:border-[#26262C]">
                    <p className={`text-[9px] font-bold text-slate-400 dark:text-[#71717A] ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
                    }`}>
                      {t.ticketGuide.militaryDiscount}
                    </p>
                    <div className="flex items-baseline justify-center gap-1 mt-0.5">
                      <span className="text-xs font-mono tabular-nums font-bold text-slate-800 dark:text-white">
                        {Math.round(currentDynamicCalculation.price * 0.5)}
                      </span>
                      <span className={`text-[10px] font-bold text-slate-500 dark:text-[#A1A1AA] ${isAr ? 'font-cairo' : 'font-mono'}`}>
                        {isAr ? 'ج.م' : 'EGP'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Multi-Modal Combined Fare Advisory */
            <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200 dark:border-[#26262C] shadow-sm space-y-3 text-start">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#2DD881] flex-shrink-0" />
                <h3 className={`text-sm font-black text-slate-900 dark:text-white ${
                  isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
                }`}>
                  {isAr ? 'دليل الرحلات المشتركة متعددة الوسائط' : 'Multi-Modal Fare Advisory'}
                </h3>
              </div>
              <p className={`text-xs text-slate-600 dark:text-[#A1A1AA] leading-relaxed ${
                isAr ? 'font-cairo tracking-normal' : 'font-mono'
              }`}>
                {isAr
                  ? 'عند التنقل بين خطوط المترو والقطار الخفيف أو المونوريل أو الأتوبيس الترددي، يتم استخدام محطات التبادل الكبرى (عدلي منصور، الاستاد، المنيب، روض الفرج). تنطبق التذكرة المنفصلة أو المحفظة الإلكترونية الموحدة لكل وسيلة.'
                  : 'When transferring between Metro Lines and LRT, Monorail, or BRT, use central hubs (Adly Mansour, Stadium, El-Mounib, Rod El-Farag). Each system operates dedicated turnstiles with seamless electronic wallet support.'}
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="bg-slate-50 dark:bg-[#17171A] p-3 rounded-xl border border-slate-200 dark:border-[#26262C]">
                  <p className={`text-[10px] text-[#2DD881] font-bold ${
                    isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
                  }`}>
                    {isAr ? 'مترو + قطار خفيف LRT' : 'Metro + LRT Train'}
                  </p>
                  <p className={`text-sm font-bold text-slate-900 dark:text-white mt-0.5 ${
                    isAr ? 'font-cairo' : 'font-mono tabular-nums'
                  }`}>
                    {isAr ? 'من 18 إلى 40 ج.م' : '18 to 40 EGP'}
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#17171A] p-3 rounded-xl border border-slate-200 dark:border-[#26262C]">
                  <p className={`text-[10px] text-[#2DD881] font-bold ${
                    isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
                  }`}>
                    {isAr ? 'مترو + مونوريل شرق النيل' : 'Metro + East Nile Monorail'}
                  </p>
                  <p className={`text-sm font-bold text-slate-900 dark:text-white mt-0.5 ${
                    isAr ? 'font-cairo' : 'font-mono tabular-nums'
                  }`}>
                    {isAr ? 'من 18 إلى 45 ج.م' : '18 to 45 EGP'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Metro Ticket Zones */}
          {selectedTransitMode === 'metro' && (
            <div className="space-y-3">
              <h3 className={`text-[10px] text-slate-500 dark:text-[#71717A] font-bold px-1 ${
                isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'
              }`}>
                {isAr ? 'مناطق تذاكر المترو وألوانها الرسمية:' : 'METRO TICKET ZONES & PHYSICAL COLORS:'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TICKET_TIERS.map((tier) => (
                  <div
                    key={tier.tier}
                    className="bg-white dark:bg-[#111113] rounded-3xl p-4 border border-slate-200/80 dark:border-[#26262C] shadow-sm relative overflow-hidden space-y-2.5 text-start"
                  >
                    <div
                      className="absolute top-0 right-0 w-2 h-full rtl:right-auto rtl:left-0"
                      style={{ backgroundColor: tier.ticketColorHex }}
                    />

                    <div className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {tier.ticketImage && (
                          <img
                            src={tier.ticketImage}
                            alt={isAr ? tier.ticketColorAr : tier.ticketColorEn}
                            className="w-12 h-9 object-contain rounded-lg border border-slate-200/80 dark:border-white/10 shadow-xs flex-shrink-0 bg-slate-900/5 p-0.5"
                          />
                        )}
                        <div className="min-w-0">
                          <span className={`text-xs font-black text-slate-900 dark:text-white truncate block ${
                            isAr ? 'font-cairo' : 'font-space'
                          }`}>
                            {isAr ? tier.nameAr : tier.nameEn}
                          </span>
                          <span className={`block text-[10px] font-bold mt-0.5 text-slate-500 dark:text-[#A1A1AA] ${
                            isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase'
                          }`}>
                            {isAr ? `تذكرة ${tier.ticketColorAr}` : `${tier.ticketColorEn} Ticket`}
                          </span>
                        </div>
                      </div>

                      <span
                        className="text-xs font-mono tabular-nums font-black px-2.5 py-1 rounded-full text-white inline-flex items-baseline gap-1 flex-shrink-0"
                        style={{ backgroundColor: tier.ticketColorHex }}
                      >
                        <span>{tier.price}</span>
                        <span className={`text-[11px] ${isAr ? 'font-cairo' : 'font-mono'}`}>{isAr ? 'ج.م' : 'EGP'}</span>
                      </span>
                    </div>

                    <p className={`text-xs text-slate-500 dark:text-[#A1A1AA] ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono'
                    }`}>
                      {isAr ? tier.descriptionAr : tier.descriptionEn}
                    </p>

                    <div className={`flex items-center justify-between gap-2 pt-2 text-[11px] text-slate-600 dark:text-[#71717A] border-t border-slate-100 dark:border-[#1D1D22] ${
                      isAr ? 'font-cairo' : 'font-mono'
                    }`}>
                      <span className="flex items-center gap-1.5">
                        <img src="/assets/tickets/Ticket_B_Blue.png" alt="Elderly Blue Ticket" className="w-4 h-3 object-contain" />
                        <span>{isAr ? `كبار السن: ${tier.seniorPrice} ج.م` : `Seniors: ${tier.seniorPrice} EGP`}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <img src="/assets/tickets/Ticket_M_Grey.png" alt="Special Needs Mauve Ticket" className="w-4 h-3 object-contain" />
                        <span>{isAr ? `ذوو الهمم: ${tier.specialNeedsPrice} ج.م` : `Special: ${tier.specialNeedsPrice} EGP`}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Concessionary & Special Needs Subsidies Box */}
              <div className="p-4 rounded-3xl bg-slate-50 dark:bg-[#111113] border border-slate-200 dark:border-[#26262C] space-y-2.5 mt-3 text-start">
                <h4 className={`text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-2 ${
                  isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
                }`}>
                  <Accessibility className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{isAr ? 'تخفيضات ذوي الهمم وكبار السن الرسمية:' : 'Concessionary Subsidies & Benefits:'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="bg-white dark:bg-[#17171A] p-3 rounded-2xl border border-slate-200/50 dark:border-[#26262C]">
                    <span className={`font-bold text-slate-900 dark:text-white block ${
                      isAr ? 'font-cairo' : 'font-space'
                    }`}>♿ {isAr ? 'ذوو الهمم' : 'Special Needs'}</span>
                    <span className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] mt-0.5 block ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono'
                    }`}>
                      {isAr ? 'تذكرة موحدة 5 ج.م (أو 50 قرش بالاشتراك)' : 'Unified 5 EGP ticket with free companion'}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-[#17171A] p-3 rounded-2xl border border-slate-200/50 dark:border-[#26262C]">
                    <span className={`font-bold text-slate-900 dark:text-white block ${
                      isAr ? 'font-cairo' : 'font-space'
                    }`}>👴 {isAr ? 'كبار السن (60-70)' : 'Seniors (60-70)'}</span>
                    <span className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] mt-0.5 block ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono'
                    }`}>
                      {isAr ? 'خصم 50% على التذاكر والاشتراكات بالرقم القومي' : '50% discount with National ID'}
                    </span>
                  </div>
                  <div className="bg-white dark:bg-[#17171A] p-3 rounded-2xl border border-slate-200/50 dark:border-[#26262C]">
                    <span className={`font-bold text-slate-900 dark:text-white block ${
                      isAr ? 'font-cairo' : 'font-space'
                    }`}>🎖️ {isAr ? 'كبار السن 70+' : 'Seniors 70+'}</span>
                    <span className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] mt-0.5 block ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono'
                    }`}>
                      {isAr ? 'ركوب مجاني 100% بالكامل بالرقم القومي' : '100% Free Rides with National ID'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LRT Fares */}
          {selectedTransitMode === 'lrt' && (
            <div className="space-y-3">
              <h3 className={`text-[10px] text-slate-500 dark:text-[#71717A] font-bold px-1 ${
                isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'
              }`}>
                {isAr ? 'تعريفة القطار الكهربائي الخفيف LRT الرسمية:' : 'CAPITAL TRAIN (LRT) FARE ZONES:'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {LRT_TIERS.map((tier, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#111113] rounded-3xl p-4 border border-cyan-500/30 dark:border-[#26262C] shadow-sm space-y-2 text-start"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black text-cyan-600 dark:text-cyan-400 ${
                        isAr ? 'font-cairo' : 'font-space'
                      }`}>
                        {tier.minStations} - {tier.maxStations} {isAr ? 'محطات' : 'Stations'}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-mono tabular-nums font-black text-cyan-600 dark:text-cyan-400">
                          {tier.price}
                        </span>
                        <span className={`text-xs font-bold text-cyan-600 dark:text-cyan-400 ${isAr ? 'font-cairo' : 'font-mono'}`}>
                          {isAr ? 'ج.م' : 'EGP'}
                        </span>
                      </div>
                    </div>
                    <p className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono'
                    }`}>
                      {idx === 0
                        ? (isAr ? 'عدلي منصور إلى العبور / المستقبل' : 'Adly Mansour to Obour / Mostakbal')
                        : idx === 1
                        ? (isAr ? 'إلى الشروق وبدر' : 'To Shorouk & Badr City')
                        : (isAr ? 'إلى حدائق العاصمة ومدينة الفنون' : 'To Capital Gardens & Arts City')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Monorail Fares */}
          {selectedTransitMode === 'monorail' && (
            <div className="space-y-3">
              <h3 className={`text-[10px] text-slate-500 dark:text-[#71717A] font-bold px-1 ${
                isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'
              }`}>
                {isAr ? 'شرائح تذاكر مونوريل شرق النيل:' : 'EAST NILE MONORAIL FARE TIERS:'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MONORAIL_TIERS.map((tier, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#111113] rounded-3xl p-4 border border-purple-500/30 dark:border-[#26262C] shadow-sm space-y-2 text-start"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black text-purple-600 dark:text-purple-400 ${
                        isAr ? 'font-cairo' : 'font-space'
                      }`}>
                        {tier.minStations} - {tier.maxStations} {isAr ? 'محطة' : 'Stations'}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-mono tabular-nums font-black text-purple-600 dark:text-purple-400">
                          {tier.price}
                        </span>
                        <span className={`text-xs font-bold text-purple-600 dark:text-purple-400 ${isAr ? 'font-cairo' : 'font-mono'}`}>
                          {isAr ? 'ج.م' : 'EGP'}
                        </span>
                      </div>
                    </div>
                    <p className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono'
                    }`}>
                      {idx === 0
                        ? (isAr ? 'المشاوير القصيرة (الاستاد - المشير)' : 'Short hops (Stadium - Al-Moshir)')
                        : idx === 1
                        ? (isAr ? 'وسط التجمع الخامس والجامعة الأمريكية' : 'Central New Cairo & AUC')
                        : idx === 2
                        ? (isAr ? 'بيت الوطن وبداية العاصمة الإدارية' : 'Beit Al-Watan & Capital Entrance')
                        : (isAr ? 'كامل مسار المونوريل حتى مدينة الفنون' : 'Full Line to Arts & Culture City')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BRT Fares */}
          {selectedTransitMode === 'brt' && (
            <div className="space-y-3">
              <h3 className={`text-[10px] text-slate-500 dark:text-[#71717A] font-bold px-1 ${
                isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'
              }`}>
                {isAr ? 'تعريفة تذاكر الأتوبيس الترددي BRT الرسمية (7 شرائح):' : 'OFFICIAL BRT 7-TIER TARIFF:'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-start">
                {BRT_TIERS.map((tier) => (
                  <div
                    key={tier.tier}
                    className="bg-white dark:bg-[#111113] rounded-3xl p-3.5 border border-amber-500/30 dark:border-[#26262C] shadow-sm space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black text-amber-600 dark:text-amber-400 ${
                        isAr ? 'font-cairo' : 'font-space'
                      }`}>
                        {isAr ? `شريحة ${tier.tier}: ${tier.nameAr}` : `Tier ${tier.tier}: ${tier.nameEn}`}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-mono tabular-nums font-black text-amber-600 dark:text-amber-400">
                          {tier.price}
                        </span>
                        <span className={`text-xs font-bold text-amber-600 dark:text-amber-400 ${isAr ? 'font-cairo' : 'font-mono'}`}>
                          {isAr ? 'ج.م' : 'EGP'}
                        </span>
                      </div>
                    </div>
                    <p className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] ${
                      isAr ? 'font-cairo tracking-normal' : 'font-mono'
                    }`}>
                      {tier.tier === 7
                        ? (isAr ? 'من 27 محطة حتى نهاية الخط بالكامل' : 'From 27 stations to full line')
                        : (isAr ? `من ${tier.minStations} إلى ${tier.maxStations} محطة على الطريق الدائري` : `${tier.minStations} to ${tier.maxStations} Ring Road stations`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rules & Etiquette */}
          <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-3 text-start">
            <h3 className={`text-xs font-black text-slate-900 dark:text-white flex items-center gap-2 ${
              isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
            }`}>
              <AlertTriangle className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
              <span>{t.ticketGuide.rulesTitle}</span>
            </h3>

            <ul className="space-y-2">
              {t.ticketGuide.rules.map((rule, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2.5 text-xs text-slate-600 dark:text-[#D4D4D8] leading-relaxed ${
                    isAr ? 'font-cairo tracking-normal' : 'font-mono'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C] mt-1.5 flex-shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
