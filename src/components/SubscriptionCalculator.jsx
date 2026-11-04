import React, { useState } from 'react';
import {
  CreditCard,
  GraduationCap,
  Users,
  Shield,
  HeartHandshake,
  MapPin,
  Plus,
  Minus,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Bus,
  Train,
  FileText,
  Clock,
  Landmark,
  Building2,
  Phone,
  ArrowRight
} from 'lucide-react';
import {
  SUBSCRIPTION_RATES,
  SUBSCRIPTION_OFFICES,
  TICKET_TIERS,
  BRT_STUDENT_SUBSCRIPTIONS,
  BRT_STUDENT_APPLICATION_INFO
} from '../data/metroData.js';
import PressableScale from './PressableScale.jsx';
import SubscriptionInfoModal from './SubscriptionInfoModal.jsx';
import { haptics } from '../utils/haptics.js';

export default function SubscriptionCalculator({ lang, t }) {
  const [subType, setSubType] = useState('metro'); // 'metro' or 'brt'
  const [category, setCategory] = useState('student'); // 'student', 'publicQuarterly', 'seniors', 'specialNeeds'
  const [selectedZone, setSelectedZone] = useState('zone1'); // 'zone1', 'zone2', 'zone3', 'zone4'
  const [brtDuration, setBrtDuration] = useState('months3'); // 'months3', 'months6', 'months9'
  const [selectedBrtBracket, setSelectedBrtBracket] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoModalTab, setInfoModalTab] = useState('docs');

  const [cardBalance, setCardBalance] = useState(() => {
    return Number(localStorage.getItem('egymetro_wallet_balance')) || 35;
  });

  const isAr = lang === 'ar';

  const updateCardBalance = (delta) => {
    haptics.selection();
    const next = Math.max(0, cardBalance + delta);
    setCardBalance(next);
    localStorage.setItem('egymetro_wallet_balance', next);
  };

  const getPassPrice = () => {
    if (category === 'specialNeeds') return 22;
    if (category === 'student') return SUBSCRIPTION_RATES.students[selectedZone];
    if (category === 'seniors') return SUBSCRIPTION_RATES.seniorsQuarterly[selectedZone];
    return SUBSCRIPTION_RATES.publicQuarterly[selectedZone];
  };

  return (
    <div className="space-y-4 text-start">
      {/* Network System Segmented Pill (Metro Passes vs BRT Student Passes) */}
      <div className="grid grid-cols-2 bg-slate-100 dark:bg-[#111113] p-1 rounded-2xl gap-1 text-center border border-slate-200 dark:border-[#26262C]">
        <button
          type="button"
          onClick={() => {
            haptics.selection();
            setSubType('metro');
          }}
          className={`py-2 px-3 rounded-xl text-xs font-cairo font-bold transition-all flex items-center justify-center gap-2 ${
            subType === 'metro'
              ? 'bg-[#FF4A1C] text-white shadow-sm'
              : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Train className="w-3.5 h-3.5" />
          <span>{isAr ? 'اشتراكات المترو' : 'Metro Subscriptions'}</span>
        </button>

        <button
          type="button"
          onClick={() => {
            haptics.selection();
            setSubType('brt');
          }}
          className={`py-2 px-3 rounded-xl text-xs font-cairo font-bold transition-all flex items-center justify-center gap-2 ${
            subType === 'brt'
              ? 'bg-[#EAB308] text-slate-950 font-black shadow-sm'
              : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Bus className="w-3.5 h-3.5" />
          <span>{isAr ? 'اشتراكات الأتوبيس BRT للطلبة' : 'BRT Student Passes'}</span>
        </button>
      </div>

      {subType === 'metro' ? (
        <>
          {/* Smart Card / Wallet Balance Tracker */}
          <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200 dark:border-[#26262C] shadow-sm space-y-3.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500 shadow-sm flex-shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className={`text-sm font-black leading-tight text-slate-900 dark:text-white truncate ${
                    isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
                  }`}>
                    {t.ticketGuide.walletCardTitle}
                  </h3>
                  <p className={`text-xs text-slate-500 dark:text-[#A1A1AA] mt-0.5 truncate ${
                    isAr ? 'font-cairo tracking-normal' : 'font-mono'
                  }`}>
                    {isAr ? 'كارت المحفظة الذكية القابل للشحن' : 'Rechargeable Contactless Wallet Card'}
                  </p>
                </div>
              </div>

              {/* Grouped Balance Badge */}
              <div className="flex-shrink-0">
                <div className="inline-flex items-baseline gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-2xl border border-amber-500/25">
                  <span className="text-2xl font-mono tabular-nums font-black text-amber-500 tracking-tight">
                    {Number(cardBalance).toLocaleString('en-US')}
                  </span>
                  <span className={`text-xs font-bold text-amber-600 dark:text-amber-400 ${isAr ? 'font-cairo' : 'font-mono'}`}>
                    {isAr ? 'ج.م' : 'EGP'}
                  </span>
                </div>
              </div>
            </div>

            {cardBalance < 15 && (
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-xs font-medium text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span className={isAr ? 'font-cairo tracking-normal' : 'font-mono'}>{t.ticketGuide.lowBalanceWarning}</span>
              </div>
            )}

            {/* Recharge & Log Buttons */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <PressableScale
                onClick={() => updateCardBalance(50)}
                className={`flex-1 py-2.5 px-2.5 sm:px-3 rounded-2xl bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200 dark:hover:bg-[#212127] text-slate-800 dark:text-white text-xs font-bold border border-slate-200 dark:border-[#26262C] transition-all flex items-center justify-center gap-1.5 ${
                  isAr ? 'font-cairo tracking-normal' : 'font-space'
                }`}
              >
                <Plus className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span className="truncate">{t.ticketGuide.cardRecharge}</span>
                <span className="font-mono text-[11px] font-bold text-amber-600 dark:text-amber-400 tabular-nums px-1.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 flex-shrink-0" dir="ltr">
                  +50
                </span>
              </PressableScale>

              <PressableScale
                onClick={() => updateCardBalance(-8)}
                className={`flex-1 py-2.5 px-2.5 sm:px-3 rounded-2xl bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200 dark:hover:bg-[#212127] text-slate-700 dark:text-[#D4D4D8] text-xs font-bold border border-slate-200 dark:border-[#26262C] transition-all flex items-center justify-center gap-1.5 ${
                  isAr ? 'font-cairo tracking-normal' : 'font-space'
                }`}
              >
                <Minus className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span className="truncate">{t.ticketGuide.logTrip}</span>
                <span className="inline-flex items-center gap-0.5 font-mono text-[11px] font-bold text-rose-500 tabular-nums px-1.5 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 flex-shrink-0" dir="ltr">
                  <span>-8</span>
                  <span className={`text-[10px] ${isAr ? 'font-cairo' : 'font-mono'}`}>{isAr ? 'ج.م' : 'EGP'}</span>
                </span>
              </PressableScale>
            </div>
          </div>

          {/* Subscription Calculator Card */}
          <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className={`text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-2 ${
                isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
              }`}>
                <GraduationCap className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
                <span>{t.ticketGuide.subscriptionCalcTitle}</span>
              </h3>
              <span className="font-mono tabular-nums px-3 py-1 rounded-full bg-[#FF4A1C]/15 text-[#FF4A1C] border border-[#FF4A1C]/25 text-xs font-bold inline-flex items-baseline gap-1 flex-shrink-0">
                <span>{Number(getPassPrice()).toLocaleString('en-US')}</span>
                <span className={`text-[11px] ${isAr ? 'font-cairo' : 'font-mono'}`}>{isAr ? 'ج.م / 3 شهور' : 'EGP / 3 mo'}</span>
              </span>
            </div>

            {/* Category Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {[
                { id: 'student', labelAr: 'الطلاب', labelEn: 'Student' },
                { id: 'publicQuarterly', labelAr: 'الجمهور', labelEn: 'Public' },
                { id: 'seniors', labelAr: 'كبار السن', labelEn: 'Seniors' },
                { id: 'specialNeeds', labelAr: 'ذوو الهمم', labelEn: 'Special Needs' }
              ].map(c => (
                <PressableScale
                  key={c.id}
                  onClick={() => {
                    haptics.selection();
                    setCategory(c.id);
                  }}
                  className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center border ${
                    isAr ? 'font-cairo tracking-normal' : 'font-space'
                  } ${
                    category === c.id
                      ? 'bg-[#FF4A1C] text-white border-transparent'
                      : 'bg-slate-100 dark:bg-[#17171A] text-slate-600 dark:text-[#A1A1AA] border-transparent dark:border-[#26262C]'
                  }`}
                >
                  <span className="truncate block">{isAr ? c.labelAr : c.labelEn}</span>
                </PressableScale>
              ))}
            </div>

            {/* Zone Selection */}
            {category !== 'specialNeeds' && (
              <div className="space-y-2">
                <label className={`text-[10px] text-slate-400 dark:text-[#71717A] font-bold ${
                  isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'
                }`}>
                  {isAr ? 'اختر نطاق عدد المحطات:' : 'SELECT JOURNEY ZONE:'}
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'zone1', labelEn: 'Zone 1 (1 - 9 St)', labelAr: 'منطقة 1 (1 - 9 محطات)' },
                    { id: 'zone2', labelEn: 'Zone 2 (10 - 16 St)', labelAr: 'منطقة 2 (10 - 16 محطة)' },
                    { id: 'zone3', labelEn: 'Zone 3 (17 - 23 St)', labelAr: 'منطقة 3 (17 - 23 محطة)' },
                    { id: 'zone4', labelEn: 'Zone 4 (All Lines)', labelAr: 'منطقة 4 (كافة الخطوط)' }
                  ].map(z => (
                    <PressableScale
                      key={z.id}
                      onClick={() => {
                        haptics.selection();
                        setSelectedZone(z.id);
                      }}
                      className={`p-3 rounded-2xl border text-start font-bold transition-all ${
                        isAr ? 'font-cairo tracking-normal' : 'font-space'
                      } ${
                        selectedZone === z.id
                          ? 'border-[#FF4A1C] bg-[#FF4A1C]/10 text-[#FF4A1C]'
                          : 'border-slate-200 dark:border-[#26262C] bg-slate-50 dark:bg-[#17171A] text-slate-700 dark:text-[#D4D4D8]'
                      }`}
                    >
                      <p className="leading-snug">{isAr ? z.labelAr : z.labelEn}</p>
                    </PressableScale>
                  ))}
                </div>
              </div>
            )}

            {category === 'student' && (
              <div className="p-3 rounded-2xl bg-[#2DD881]/10 border border-[#2DD881]/25 text-xs text-[#2DD881] flex items-center gap-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span className={isAr ? 'font-cairo tracking-normal' : 'font-mono'}>
                  {isAr ? 'دعم حكومي يصل إلى 98% بختم استمارة الجامعة أو المعهد أو المدرسة.' : 'Up to 98% state subsidy with educational stamp.'}
                </span>
              </div>
            )}
          </div>

          {/* Subscription Offices Directory */}
          <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className={`text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-2 ${
                isAr ? 'font-cairo tracking-normal' : 'font-space uppercase tracking-wider'
              }`}>
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{t.ticketGuide.subscriptionOfficesTitle}</span>
              </h3>

              <button
                type="button"
                onClick={() => {
                  haptics.selection?.();
                  setInfoModalTab('offices');
                  setShowInfoModal(true);
                }}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>{isAr ? 'مواعيد العمل والأوراق' : 'Working hours & docs'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SUBSCRIPTION_OFFICES.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-[#17171A] p-3.5 rounded-2xl border border-slate-200/60 dark:border-[#26262C]"
                >
                  <p className={`text-xs font-bold text-slate-900 dark:text-white ${isAr ? 'font-cairo' : 'font-space'}`}>
                    {isAr ? office.nameAr : office.nameEn}
                  </p>
                  <p className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] mt-0.5 ${isAr ? 'font-cairo tracking-normal' : 'font-mono'}`}>
                    {isAr ? office.locationAr : office.locationEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Tap to reveal 2-tab Modal trigger */}
            <button
              type="button"
              onClick={() => {
                haptics.selection?.();
                setInfoModalTab('docs');
                setShowInfoModal(true);
              }}
              className="w-full py-3 px-4 rounded-2xl bg-blue-500/10 hover:bg-blue-500/15 border border-blue-500/25 flex items-center justify-between text-blue-600 dark:text-blue-400 font-extrabold text-xs transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>{isAr ? 'الأوراق المطلوبة وتفاصيل المكاتب ومواعيد العمل' : 'View Required Documents & Office Working Hours'}</span>
              </div>
              <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </>
      ) : (
        /* BRT Student Subscriptions & Application Guide */
        <div className="space-y-4">
          {/* Header Card */}
          <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-amber-500/30 dark:border-[#26262C] shadow-sm space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Bus className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <h3 className="text-sm font-cairo font-black text-slate-900 dark:text-white">
                  {isAr ? 'اشتراكات الأتوبيس الترددي BRT للطلبة 2026' : 'BRT Student Subscriptions 2026'}
                </h3>
              </div>
              <span className="text-[10px] font-cairo font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                {isAr ? 'معتمد رسمياً' : 'Official Rates'}
              </span>
            </div>

            <p className="text-xs font-cairo text-slate-600 dark:text-slate-300 leading-relaxed">
              {isAr
                ? 'أسعار اشتراكات الطلاب الرسمية على الطريق الدائري مدعومة بنسبة كبيرة للطلبة (180 إلى 540 رحلة).'
                : 'Official subsidized student subscription passes on the Ring Road BRT (180 to 540 trips).'}
            </p>

            {/* Duration selector: 3 months, 6 months, 9 months */}
            <div className="grid grid-cols-3 bg-slate-100 dark:bg-[#17171A] p-1 rounded-2xl gap-1 text-center border border-slate-200 dark:border-[#26262C]">
              {[
                { id: 'months3', labelAr: '3 شهور (180 رحلة)', labelEn: '3 Months (180 Trips)' },
                { id: 'months6', labelAr: '6 شهور (360 رحلة)', labelEn: '6 Months (360 Trips)' },
                { id: 'months9', labelAr: '9 شهور (540 رحلة)', labelEn: '9 Months (540 Trips)' }
              ].map(d => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    haptics.selection();
                    setBrtDuration(d.id);
                  }}
                  className={`py-2 px-2 rounded-xl text-xs font-cairo font-bold transition-all ${
                    brtDuration === d.id
                      ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                      : 'text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{isAr ? d.labelAr : d.labelEn}</span>
                </button>
              ))}
            </div>

            {/* Brackets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {BRT_STUDENT_SUBSCRIPTIONS.map((item, idx) => {
                const isSelected = selectedBrtBracket === idx;
                const price = item[brtDuration];
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      haptics.selection();
                      setSelectedBrtBracket(idx);
                    }}
                    className={`p-3.5 rounded-2xl border text-start transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 dark:bg-amber-500/15'
                        : 'border-slate-200 dark:border-[#26262C] bg-slate-50 dark:bg-[#17171A]'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-cairo font-bold text-slate-900 dark:text-white">
                        {isAr ? `شريحة ${idx + 1}: ${item.labelAr}` : `Tier ${idx + 1}: ${item.labelEn}`}
                      </p>
                      <p className="text-[11px] font-cairo text-slate-500 dark:text-slate-400 mt-0.5">
                        {isAr ? `حتى ${item.stationsCount} محطة بالمسار` : `Up to ${item.stationsCount} stations`}
                      </p>
                    </div>

                    <div className="text-end">
                      <p className="text-sm font-mono font-black text-amber-600 dark:text-amber-400">
                        {price} <span className="text-[10px] font-cairo font-bold">{isAr ? 'ج.م' : 'EGP'}</span>
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Application Form & Paperwork Instructions (from brt 2.jpg) */}
          <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 border border-slate-200 dark:border-[#26262C] shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-rose-500 flex-shrink-0" />
              <h3 className="text-xs font-cairo font-black text-slate-900 dark:text-white uppercase tracking-wider">
                {isAr ? 'الأوراق المطلوبة واستخراج استمارة الاشتراك' : 'Required Documents & Application'}
              </h3>
            </div>

            {/* Costs details */}
            <div className="grid grid-cols-2 gap-2 text-xs font-cairo">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#17171A] border border-slate-200/60 dark:border-[#26262C]">
                <p className="text-[10.5px] text-slate-500 font-bold">{isAr ? 'سعر استمارة الاشتراك:' : 'Form Price:'}</p>
                <p className="text-sm font-black text-slate-900 dark:text-white mt-1">15 {isAr ? 'ج.م' : 'EGP'}</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#17171A] border border-slate-200/60 dark:border-[#26262C]">
                <p className="text-[10.5px] text-slate-500 font-bold">{isAr ? 'الكارت الذكي (لأول مرة):' : 'Smart Card (Once):'}</p>
                <p className="text-sm font-black text-slate-900 dark:text-white mt-1">100 {isAr ? 'ج.م' : 'EGP'}</p>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2">
              <p className="text-[11px] font-cairo font-bold text-slate-600 dark:text-slate-300">
                {isAr ? 'المستندات المطلوبة لاعتماد الاشتراك:' : 'Required Checklist:'}
              </p>
              {BRT_STUDENT_APPLICATION_INFO.requiredDocs.map((doc, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-cairo text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{doc.textAr}</span>
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1D1D22]">
              <p className="text-[11px] font-cairo font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-amber-500" />
                <span>{isAr ? 'طرق الدفع المعتمدة للاشتراك:' : 'Accepted Payment Methods:'}</span>
              </p>
              <div className="space-y-1.5">
                {BRT_STUDENT_APPLICATION_INFO.paymentMethods.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#17171A] border border-slate-200/60 dark:border-[#26262C] flex items-center justify-between text-xs font-cairo">
                    <span className="font-bold text-slate-900 dark:text-white">{m.nameAr}</span>
                    <span className="text-[11px] text-amber-600 dark:text-amber-400 font-mono font-bold">{m.descAr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission & Pickup Stations */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1D1D22]">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-cairo font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{isAr ? 'مكاتب استلام واستخراج كروت الطلبة:' : 'Submission & Pickup Offices:'}</span>
                </p>

                <button
                  type="button"
                  onClick={() => {
                    haptics.selection?.();
                    setInfoModalTab('offices');
                    setShowInfoModal(true);
                  }}
                  className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>{isAr ? 'عرض كافة المكاتب والمواعيد' : 'All offices & hours'}</span>
                  <ArrowRight className={`w-3 h-3 ${isAr ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BRT_STUDENT_APPLICATION_INFO.submissionOffices.map((off, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-[#17171A] border border-slate-200/60 dark:border-[#26262C]">
                    <p className="text-xs font-cairo font-bold text-slate-900 dark:text-white">{off.nameAr}</p>
                    <p className="text-[11px] font-cairo text-slate-500 mt-0.5">{off.locationAr}</p>
                  </div>
                ))}
              </div>

              {/* View 2-tab Modal button from BRT section */}
              <button
                type="button"
                onClick={() => {
                  haptics.selection?.();
                  setInfoModalTab('docs');
                  setShowInfoModal(true);
                }}
                className="w-full mt-2 py-3 px-4 rounded-2xl bg-blue-600/10 hover:bg-blue-600/15 border border-blue-500/30 flex items-center justify-between text-blue-600 dark:text-blue-400 font-extrabold text-xs transition-all active:scale-[0.98]"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 flex-shrink-0" />
                  <span>{isAr ? 'اضغط للاطلاع على تفاصيل الأوراق ومكاتب الاشتراكات' : 'View Full Documents Checklist & Office Details'}</span>
                </div>
                <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Winter Schedule Note from brt 4.jpg */}
            <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs font-cairo text-sky-900 dark:text-sky-200 flex items-start gap-2">
              <Clock className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="font-bold">{isAr ? 'مواعيد التشغيل الشتوية الرسمية للأتوبيس:' : 'Official Winter Operating Schedule:'}</p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  {isAr
                    ? 'من الساعة 6:00 صباحاً وحتى الساعة 11:30 مساءً يومياً بفاصل زمني (تقاطر) 5 إلى 10 دقائق.'
                    : 'From 6:00 AM to 11:30 PM daily with 5-10 minute headways.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2-Tab Subscription Info Bottom Sheet Modal */}
      <SubscriptionInfoModal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        lang={lang}
        initialTab={infoModalTab}
      />
    </div>
  );
}
