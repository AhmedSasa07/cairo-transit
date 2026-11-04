import React, { useState } from 'react';
import { X, FileText, MapPin, CheckCircle2, Clock, Info, ShieldCheck, Bus } from 'lucide-react';
import { METRO_SUBSCRIPTION_OFFICES_DETAILED, BRT_STUDENT_APPLICATION_INFO } from '../data/metroData.js';
import { haptics } from '../utils/haptics.js';

export default function SubscriptionInfoModal({ isOpen, onClose, lang, initialTab = 'docs' }) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'docs' or 'offices'

  if (!isOpen) return null;

  const isAr = lang === 'ar';

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className={`w-full max-w-lg bg-[#18181E] text-white rounded-t-[28px] sm:rounded-[28px] shadow-2xl border border-slate-800 max-h-[88vh] flex flex-col overflow-hidden ${isAr ? 'font-cairo' : 'font-space'}`}
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Drag handle pill */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-slate-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800/80">
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-base font-extrabold text-white">
            {isAr ? 'الأوراق ومكاتب الاشتراكات' : 'Subscription Docs & Offices'}
          </h2>

          <div className="w-8" />
        </div>

        {/* 2-Tab Navigation with Blue Underline Indicator */}
        <div className="flex border-b border-slate-800 bg-[#141419]">
          <button
            type="button"
            onClick={() => {
              haptics.selection?.();
              setActiveTab('docs');
            }}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all border-b-2 ${
              activeTab === 'docs'
                ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{isAr ? 'الأوراق المطلوبة' : 'Required Documents'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              haptics.selection?.();
              setActiveTab('offices');
            }}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all border-b-2 ${
              activeTab === 'offices'
                ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{isAr ? 'أماكن المكاتب' : 'Office Locations'}</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 no-scrollbar">
          {activeTab === 'docs' ? (
            <div className="space-y-4">
              {/* Target bracket card */}
              <div className="bg-[#1F1F27] border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white">
                    {isAr ? 'اشتراك الطلاب (من 11 حتى 26 سنة)' : 'Student Subscription (Ages 11–26)'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isAr ? 'اشتراك ربع سنوي لمدة 3 أشهر (180 رحلة)' : 'Quarterly 3-Month Pass (180 trips)'}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Checklist */}
              <div className="bg-[#1F1F27] border border-slate-800 rounded-2xl p-4 space-y-3.5">
                {[
                  {
                    ar: 'استمارة اشتراك معتمدة ومختومة بختم الشعار من المدرسة / الجامعة / المعهد (سعر الاستمارة 5 جنيهات للمترو / 15 جنيه للترددي).',
                    en: 'Subscription form stamped with the official seal of the school/university (Form fee: 5 EGP Metro / 15 EGP BRT).'
                  },
                  {
                    ar: 'سداد قيمة الكارت الذكي لأول مرة (80 جنيهاً للمترو / 100 جنيه للأتوبيس الترددي BRT).',
                    en: 'Smart card fee for first-time issuance (80 EGP Metro / 100 EGP BRT).'
                  },
                  {
                    ar: 'عدد (2) صورة شخصية حديثة مقاس (4×6) بخلفية بيضاء ومختومة على الظهر.',
                    en: '2 recent personal photos (4x6) stamped on the back.'
                  },
                  {
                    ar: 'صورة بطاقة الرقم القومي سارية أو شهادة الميلاد المميكنة للطالب.',
                    en: 'Copy of valid National ID or computerized birth certificate.'
                  },
                  {
                    ar: 'إيصال سداد مصاريف الدراسة أو إثبات قيد معتمد للعام الدراسي الحالي.',
                    en: 'Tuition payment receipt or certified enrollment certificate for current academic year.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-blue-600/40">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-semibold">
                      {isAr ? item.ar : item.en}
                    </p>
                  </div>
                ))}
              </div>

              {/* BRT Note Banner */}
              <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-3.5 flex items-start gap-3 text-amber-300">
                <Bus className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-extrabold">{isAr ? 'للطلاب المشتركين في الأتوبيس الترددي BRT:' : 'For BRT Student Passholders:'}</p>
                  <p className="text-amber-200/90 leading-relaxed">
                    {isAr
                      ? `يمكن السداد نقداً أو عبر Instapay أو الإيداع بحساب البنك الأهلي المصري: ${BRT_STUDENT_APPLICATION_INFO.paymentMethods.bankAccount}، والاستلام من محطتي الإسكندرية الزراعي أو أكاديمية الشرطة.`
                      : `Payments accepted in cash, Instapay, or NBE account ${BRT_STUDENT_APPLICATION_INFO.paymentMethods.bankAccount}. Pickup at Alexandria Agri or Police Academy stations.`}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-slate-400 px-1">
                {isAr ? 'المكاتب المعتمدة لاستخراج وتجديد اشتراكات المترو والـ BRT فورياً:' : 'Authorized offices for instant issuance and renewal:'}
              </p>

              {METRO_SUBSCRIPTION_OFFICES_DETAILED.map((office) => (
                <div
                  key={office.id}
                  className="bg-[#1F1F27] border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-2 min-w-0">
                    <h4 className="font-extrabold text-sm sm:text-base text-white">
                      {isAr ? office.nameAr : office.nameEn}
                    </h4>

                    {/* Colored Line Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {(isAr ? office.linesAr : office.linesEn).map((lineName, li) => {
                        const color = office.lineColors[li] || '#3B82F6';
                        return (
                          <span
                            key={li}
                            className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border flex items-center gap-1"
                            style={{
                              color: color,
                              borderColor: `${color}40`,
                              backgroundColor: `${color}15`
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                            {lineName}
                          </span>
                        );
                      })}
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{isAr ? office.hoursAr : office.hoursEn}</span>
                    </div>
                  </div>

                  {/* Purple/Pink Location Pin Badge */}
                  <div className="w-11 h-11 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              ))}

              {/* BRT Pickup Hubs */}
              <div className="pt-2">
                <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs">
                    <Bus className="w-4 h-4" />
                    <span>{isAr ? 'مكاتب استلام كروت الأتوبيس الترددي BRT:' : 'BRT Student Pass Pickup Hubs:'}</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-amber-200/90">
                    <div className="flex items-center justify-between">
                      <span className="font-bold">• {isAr ? 'محطة الإسكندرية الزراعي' : 'Alexandria Agricultural Station'}</span>
                      <span className="text-slate-400 text-[11px]">{isAr ? 'تقاطع الدائري' : 'Ring Road Hub'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">• {isAr ? 'محطة أكاديمية الشرطة' : 'Police Academy Station'}</span>
                      <span className="text-slate-400 text-[11px]">{isAr ? 'التجمع الأول' : 'First Settlement'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#141419] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-extrabold text-sm transition-all shadow-md shadow-blue-600/30"
          >
            {isAr ? 'فهمت، شكراً' : 'Got it, thanks'}
          </button>
        </div>
      </div>
    </div>
  );
}
