import React, { useState } from 'react';
import {
  Calculator,
  TrendingDown,
  Sparkles,
  PiggyBank,
  CheckCircle2,
  Calendar,
  Layers,
  GraduationCap,
  Users,
  Award,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { SUBSCRIPTION_RATES, TICKET_TIERS } from '../data/metroData.js';
import PressableScale from './PressableScale.jsx';
import { haptics } from '../utils/haptics.js';

export default function SmartSavingsCalculator({ lang, t }) {
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [tripsPerDay, setTripsPerDay] = useState(2);
  const [selectedZone, setSelectedZone] = useState('zone2'); // zone1, zone2, zone3, zone4
  const [category, setCategory] = useState('student'); // 'student', 'public', 'senior'

  const isAr = lang === 'ar';

  // Map zone to ticket price (Official Mobility Cairo Tariffs 2026)
  const zonePricing = {
    zone1: { single: 10, nameEn: 'Zone 1 (1 - 9 St)', nameAr: 'منطقة 1 (1 - 9 محطات)' },
    zone2: { single: 12, nameEn: 'Zone 2 (10 - 16 St)', nameAr: 'منطقة 2 (10 - 16 محطة)' },
    zone3: { single: 15, nameEn: 'Zone 3 (17 - 23 St)', nameAr: 'منطقة 3 (17 - 23 محطة)' },
    zone4: { single: 20, nameEn: 'Zone 4 (24+ St / All)', nameAr: 'منطقة 4 (كافة الخطوط)' }
  };

  const singlePrice = zonePricing[selectedZone].single;

  // Total trips over a 3-month (13-week) quarterly cycle (max capped at 180 trips per subscription)
  const calculatedTrips = Math.min(180, daysPerWeek * tripsPerDay * 13);
  const singleTotalCost = calculatedTrips * singlePrice;

  // Subscription pass cost
  let subscriptionCost = 0;
  if (category === 'student') {
    subscriptionCost = SUBSCRIPTION_RATES.students[selectedZone];
  } else if (category === 'senior') {
    subscriptionCost = SUBSCRIPTION_RATES.seniorsQuarterly[selectedZone];
  } else {
    subscriptionCost = SUBSCRIPTION_RATES.publicQuarterly[selectedZone];
  }

  const netSavings = Math.max(0, singleTotalCost - subscriptionCost);
  const savingsPercent = singleTotalCost > 0 ? Math.round((netSavings / singleTotalCost) * 100) : 0;
  const breakevenTrips = Math.ceil(subscriptionCost / singlePrice);

  return (
    <div className="space-y-4 text-start">
      {/* Hero Savings Card - Ischys Dark Graphite Surface */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200 dark:border-[#26262C] shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#2DD881]/10 border border-[#2DD881]/25 flex items-center justify-center text-[#2DD881] shadow-sm flex-shrink-0">
              <PiggyBank className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-base font-black leading-tight text-slate-900 dark:text-white ${
                isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
              }`}>
                {isAr ? 'حاسبة التوفير الذكية' : 'Smart Savings Calculator'}
              </h3>
              <p className={`text-xs text-slate-500 dark:text-[#A1A1AA] mt-0.5 ${
                isAr ? 'font-cairo tracking-normal' : 'font-mono'
              }`}>
                {isAr ? 'احسب كم ستوفر شهرياً وربع سنوياً' : 'Calculate exact net savings over 3 months'}
              </p>
            </div>
          </div>
          <span className="tabular-nums px-3 py-1 rounded-full bg-[#2DD881]/15 text-[#2DD881] border border-[#2DD881]/25 text-xs font-bold inline-flex items-center gap-1">
            <span className="font-mono">{savingsPercent}%</span>
            <span className={isAr ? 'font-cairo' : 'font-mono'}>{isAr ? 'توفير' : 'SAVED'}</span>
          </span>
        </div>

        {/* Big Savings Highlight */}
        <div className="bg-slate-50 dark:bg-[#17171A] p-4 rounded-2xl border border-slate-200/60 dark:border-[#26262C] flex items-center justify-between">
          <div>
            <p className={`text-[10px] text-slate-400 dark:text-[#71717A] font-bold ${
              isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
            }`}>
              {isAr ? 'إجمالي المبلغ الذي ستوفره (3 شهور):' : 'NET SAVINGS (3 MONTHS):'}
            </p>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-3xl font-mono tabular-nums font-black text-[#2DD881] tracking-tight">
                {Number(netSavings).toLocaleString('en-US')}
              </span>
              <span className="text-sm font-bold text-slate-500 dark:text-[#A1A1AA] font-cairo">
                {isAr ? 'ج.م' : 'EGP'}
              </span>
            </div>
          </div>
          <div className="text-end">
            <p className={`text-[10px] text-slate-400 dark:text-[#71717A] font-bold ${
              isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
            }`}>
              {isAr ? 'يغطي ثمنه بعد:' : 'BREAKEVEN:'}
            </p>
            <div className="flex items-baseline justify-end gap-1 mt-0.5">
              <span className="text-base font-mono tabular-nums font-black text-[#FFC24B]">
                {breakevenTrips}
              </span>
              <span className={`text-xs font-bold text-slate-600 dark:text-[#D4D4D8] ${isAr ? 'font-cairo' : 'font-mono'}`}>
                {isAr ? 'رحلات فقط!' : 'trips'}
              </span>
            </div>
          </div>
        </div>

        {/* Visual Comparison Bar */}
        <div className="space-y-1.5 pt-1">
          <div className={`flex items-center justify-between text-xs font-bold text-slate-700 dark:text-[#D4D4D8] ${
            isAr ? 'font-cairo' : 'font-mono'
          }`}>
            <span>{isAr ? 'بالتذاكر الفردية:' : 'Single Tickets:'} <b className="text-slate-900 dark:text-white tabular-nums whitespace-nowrap">{Number(singleTotalCost).toLocaleString('en-US')}&nbsp;{isAr ? 'ج.م' : 'EGP'}</b></span>
            <span>{isAr ? 'بالاشتراك:' : 'With Pass:'} <b className="text-[#2DD881] tabular-nums whitespace-nowrap">{Number(subscriptionCost).toLocaleString('en-US')}&nbsp;{isAr ? 'ج.م' : 'EGP'}</b></span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-[#17171A] border border-slate-200/60 dark:border-[#26262C] overflow-hidden flex">
            <div
              className="h-full bg-[#FF4A1C] rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, Math.max(5, (subscriptionCost / Math.max(1, singleTotalCost)) * 100))}%` }}
              title="Subscription Cost"
            />
            <div
              className="h-full bg-[#2DD881] opacity-70 rounded-r-full transition-all duration-300"
              style={{ width: `${Math.max(0, 100 - (subscriptionCost / Math.max(1, singleTotalCost)) * 100)}%` }}
              title="Savings"
            />
          </div>
        </div>
      </div>

      {/* Interactive Commute Settings Card */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-4">
        <h4 className={`text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-2 ${
          isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
        }`}>
          <Calculator className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
          <span>{isAr ? 'بيانات مشوارك اليومي:' : 'DAILY COMMUTE PARAMETERS:'}</span>
        </h4>

        {/* Category Selection - Concise labels that fit 360dp mobile screens without wrapping or clipping */}
        <div className="space-y-1.5">
          <label className={`text-[10px] text-slate-400 dark:text-[#71717A] font-bold ${
            isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
          }`}>
            {isAr ? 'فئة الراكب:' : 'COMMUTER CATEGORY:'}
          </label>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {[
              { id: 'student', labelEn: 'Student', labelAr: 'طالب', icon: GraduationCap },
              { id: 'public', labelEn: 'Public', labelAr: 'جمهور عام', icon: Users },
              { id: 'senior', labelEn: 'Senior', labelAr: 'كبار سن', icon: Award }
            ].map(c => {
              const Icon = c.icon;
              return (
                <PressableScale
                  key={c.id}
                  onClick={() => {
                    haptics.selection();
                    setCategory(c.id);
                  }}
                  className={`py-2.5 px-1.5 sm:px-2 rounded-2xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all ${
                    isAr ? 'font-cairo tracking-normal' : 'font-space'
                  } ${
                    category === c.id
                      ? 'border-[#FF4A1C] bg-[#FF4A1C]/10 text-[#FF4A1C]'
                      : 'border-slate-200 dark:border-[#26262C] bg-slate-50 dark:bg-[#17171A] text-slate-600 dark:text-[#A1A1AA] hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap text-xs leading-tight">{isAr ? c.labelAr : c.labelEn}</span>
                </PressableScale>
              );
            })}
          </div>
        </div>

        {/* Zone / Trip Distance Selection */}
        <div className="space-y-1.5">
          <label className={`text-[10px] text-slate-400 dark:text-[#71717A] font-bold ${
            isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
          }`}>
            {isAr ? 'منطقة المشوار (عدد المحطات):' : 'JOURNEY ZONE / DISTANCE:'}
          </label>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.entries(zonePricing).map(([key, val]) => (
              <PressableScale
                key={key}
                onClick={() => {
                  haptics.selection();
                  setSelectedZone(key);
                }}
                className={`p-3 rounded-2xl border text-start font-bold transition-all ${
                  isAr ? 'font-cairo tracking-normal' : 'font-space'
                } ${
                  selectedZone === key
                    ? 'border-[#2DD881] bg-[#2DD881]/10 text-[#2DD881]'
                    : 'border-slate-200 dark:border-[#26262C] bg-slate-50 dark:bg-[#17171A] text-slate-700 dark:text-[#D4D4D8]'
                }`}
              >
                <p className="leading-snug">{isAr ? val.nameAr : val.nameEn}</p>
                <p className={`text-[10px] tabular-nums text-slate-400 mt-0.5 ${isAr ? 'font-cairo' : 'font-mono'}`}>
                  {isAr ? `تذكرة: ${val.single} ج.م` : `Single: ${val.single} EGP`}
                </p>
              </PressableScale>
            ))}
          </div>
        </div>

        {/* Days per Week Slider */}
        <div className="space-y-1.5">
          <div className={`flex items-center justify-between text-xs font-bold text-slate-700 dark:text-[#D4D4D8] ${
            isAr ? 'font-cairo' : 'font-mono'
          }`}>
            <span>{isAr ? 'أيام السفر أسبوعياً:' : 'DAYS PER WEEK:'}</span>
            <span className="text-base font-black text-[#FF4A1C] tabular-nums font-mono flex items-baseline gap-1">
              <span>{daysPerWeek}</span>
              <span className={`text-xs ${isAr ? 'font-cairo' : 'font-mono'}`}>{isAr ? 'أيام' : 'days'}</span>
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="7"
            value={daysPerWeek}
            onChange={(e) => {
              setDaysPerWeek(Number(e.target.value));
              haptics.selection();
            }}
            className="w-full h-2 bg-slate-200 dark:bg-[#17171A] rounded-lg appearance-none cursor-pointer accent-[#FF4A1C]"
          />
        </div>

        {/* Trips per Day Selector */}
        <div className="space-y-1.5">
          <label className={`text-[10px] text-slate-400 dark:text-[#71717A] font-bold ${
            isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
          }`}>
            {isAr ? 'عدد الرحلات في اليوم:' : 'TRIPS PER DAY:'}
          </label>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {[
              { count: 1, labelEn: '1 trip (One way)', labelAr: 'رحلة واحدة (ذهاب)' },
              { count: 2, labelEn: '2 trips (Round)', labelAr: 'رحلتان (ذهاب وعودة)' },
              { count: 3, labelEn: '3+ trips', labelAr: '3 رحلات فأكثر' }
            ].map(t => (
              <PressableScale
                key={t.count}
                onClick={() => {
                  haptics.selection();
                  setTripsPerDay(t.count);
                }}
                className={`py-2.5 px-1.5 sm:px-2 rounded-xl border text-center font-bold transition-all ${
                  isAr ? 'font-cairo tracking-normal text-[11px]' : 'font-space text-xs'
                } ${
                  tripsPerDay === t.count
                    ? 'border-[#FF4A1C] bg-[#FF4A1C]/10 text-[#FF4A1C]'
                    : 'border-slate-200 dark:border-[#26262C] bg-slate-50 dark:bg-[#17171A] text-slate-700 dark:text-[#D4D4D8]'
                }`}
              >
                {isAr ? t.labelAr : t.labelEn}
              </PressableScale>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Requirements Checklist */}
      <div className="bg-slate-50 dark:bg-[#111113] p-4 rounded-3xl border border-slate-200/80 dark:border-[#26262C] space-y-2">
        <h5 className={`text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5 ${
          isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
        }`}>
          <CheckCircle2 className="w-4 h-4 text-[#2DD881] flex-shrink-0" />
          <span>{isAr ? 'الأوراق المطلوبة للاشتراك:' : 'REQUIRED DOCUMENTS:'}</span>
        </h5>
        <ul className={`text-xs text-slate-600 dark:text-[#A1A1AA] space-y-1.5 pl-2 rtl:pr-2 leading-relaxed ${
          isAr ? 'font-cairo tracking-normal' : 'font-mono'
        }`}>
          {category === 'student' ? (
            <>
              <li>• {isAr ? 'استمارة اشتراك الطلاب معتمدة ومختومة من الكلية/المدرسة.' : 'Official student pass form stamped by university/school.'}</li>
              <li>• {isAr ? 'عدد 2 صورة شخصية حديثة (مقاس 4×6).' : '2 recent passport-sized photos.'}</li>
              <li>• {isAr ? 'صورة بطاقة الرقم القومي أو شهادة الميلاد.' : 'Copy of National ID or Birth Certificate.'}</li>
            </>
          ) : category === 'senior' ? (
            <>
              <li>• {isAr ? 'صورة بطاقة الرقم القومي سارية لإثبات السن (فوق 60 عاماً).' : 'Copy of valid National ID proving age (60+).'}</li>
              <li>• {isAr ? 'عدد 2 صورة شخصية حديثة.' : '2 passport-sized photos.'}</li>
              <li>• {isAr ? 'فوق 70 عاماً: ركوب مجاني بالكامل ببطاقة الرقم القومي.' : 'Seniors 70+: Free transit with National ID.'}</li>
            </>
          ) : (
            <>
              <li>• {isAr ? 'صورة بطاقة الرقم القومي سارية واستمارة الجمهور (5 جنيهات).' : 'Copy of valid National ID + Public application form.'}</li>
              <li>• {isAr ? 'عدد 2 صورة شخصية وتحديد المحطات الأكثر استخداماً.' : '2 passport-sized photos.'}</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
