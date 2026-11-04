import React, { useState } from 'react';
import {
  Clock,
  Moon,
  Sun,
  X,
  AlertCircle,
  Calendar,
  CheckCircle2,
  Train
} from 'lucide-react';
import { SCHEDULE_INFO, METRO_LINES } from '../data/metroData.js';
import PressableScale from './PressableScale.jsx';
import { haptics } from '../utils/haptics.js';

export default function OperatingHoursModal({ lang, t, onClose }) {
  const [activeTab, setActiveTab] = useState('regular'); // 'regular' or 'ramadan'

  const isAr = lang === 'ar';
  const schedule = SCHEDULE_INFO[activeTab];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white dark:bg-[#111113] rounded-t-[32px] sm:rounded-[28px] max-h-[90vh] flex flex-col shadow-2xl border-t sm:border border-slate-200 dark:border-[#26262C] animate-in slide-in-from-bottom duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ischys Sheet Grab Bar */}
        <div className="w-10 h-1 bg-slate-300 dark:bg-[#26262C] rounded-full mx-auto my-2.5 flex-shrink-0" />

        {/* Header */}
        <div className="px-5 py-3.5 border-b border-slate-100 dark:border-[#1D1D22] flex items-center justify-between bg-slate-50/50 dark:bg-[#111113] flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FF4A1C]/10 border border-[#FF4A1C]/25 flex items-center justify-center text-[#FF4A1C]">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-space font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.timetable.title}
            </h3>
          </div>
          <PressableScale
            onClick={() => {
              haptics.light();
              onClose();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-[#17171A] border border-transparent dark:border-[#26262C]"
          >
            <X className="w-4 h-4" />
          </PressableScale>
        </div>

        {/* Schedule Tabs: Regular vs Ramadan */}
        <div className="p-3 border-b border-slate-100 dark:border-[#1D1D22] flex gap-2">
          <PressableScale
            onClick={() => {
              haptics.selection();
              setActiveTab('regular');
            }}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-space font-bold transition-all flex items-center justify-center gap-1.5 border ${
              activeTab === 'regular'
                ? 'bg-[#FF4A1C] text-white border-transparent'
                : 'bg-slate-100 dark:bg-[#17171A] text-slate-600 dark:text-[#A1A1AA] border-transparent dark:border-[#26262C]'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>{t.timetable.regularSchedule}</span>
          </PressableScale>

          <PressableScale
            onClick={() => {
              haptics.selection();
              setActiveTab('ramadan');
            }}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-space font-bold transition-all flex items-center justify-center gap-1.5 border ${
              activeTab === 'ramadan'
                ? 'bg-purple-600 text-white border-transparent'
                : 'bg-slate-100 dark:bg-[#17171A] text-slate-600 dark:text-[#A1A1AA] border-transparent dark:border-[#26262C]'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>{t.timetable.ramadanSchedule}</span>
          </PressableScale>
        </div>

        {/* Timetable Content */}
        <div className="overflow-y-auto p-5 space-y-4 text-start">
          {activeTab === 'ramadan' && (
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/25 text-xs text-purple-700 dark:text-purple-300 font-mono leading-relaxed">
              {isAr ? SCHEDULE_INFO.ramadan.notesAr : SCHEDULE_INFO.ramadan.notesEn}
            </div>
          )}

          {/* First & Last Trains */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-slate-50 dark:bg-[#17171A] p-4 rounded-2xl border border-slate-200/60 dark:border-[#26262C]">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-[#71717A] font-bold">
                {t.timetable.firstTrain}
              </p>
              <p className="text-base font-mono tabular-nums font-bold text-slate-900 dark:text-white mt-1">
                {isAr ? (activeTab === 'ramadan' ? schedule.firstTrainAr : schedule.firstTrainDepartureAr) : (activeTab === 'ramadan' ? schedule.firstTrain : schedule.firstTrainDeparture)}
              </p>
              <p className="text-[11px] font-mono text-slate-500 dark:text-[#A1A1AA] mt-0.5">
                {isAr ? 'من كافة النهايات' : 'All line terminals'}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#17171A] p-4 rounded-2xl border border-slate-200/60 dark:border-[#26262C]">
              <p className={`text-[10px] font-bold text-slate-400 dark:text-[#71717A] ${isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'}`}>
                {t.timetable.lastTrain}
              </p>
              <p className="text-base font-mono tabular-nums font-bold text-[#FF4A1C] mt-1 bidi-ltr" dir="ltr">
                {activeTab === 'ramadan' ? '12:45 AM - 01:00 AM' : '11:45 PM - 12:05 AM'}
              </p>
              <p className={`text-[11px] text-slate-500 dark:text-[#A1A1AA] mt-0.5 ${isAr ? 'font-cairo' : 'font-mono'}`}>
                {isAr ? 'آخر قيام' : 'Last departures'}
              </p>
            </div>
          </div>

          {/* Interchange Meeting Times */}
          <div className="bg-slate-50 dark:bg-[#17171A] p-4 rounded-2xl border border-slate-200/60 dark:border-[#26262C] space-y-2.5">
            <h4 className={`text-[10px] font-bold flex items-center gap-1.5 ${isAr ? 'font-cairo tracking-normal text-slate-600 dark:text-[#A1A1AA]' : 'font-mono uppercase tracking-[0.14em] text-slate-500 dark:text-[#71717A]'}`}>
              <Train className="w-3.5 h-3.5 text-amber-500" />
              <span>{isAr ? 'آخر مواعيد الالتقاء بالمحطات التبادلية' : 'LAST INTERCHANGE CONNECTIONS'}</span>
            </h4>

            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#111113] border border-slate-200/40 dark:border-[#26262C]">
                <span className={`font-bold text-slate-800 dark:text-[#D4D4D8] ${isAr ? 'font-cairo' : 'font-space'}`}>{t.timetable.lastInterchangeSadat}</span>
                <span className="font-mono tabular-nums font-bold text-[#FF4A1C] bidi-ltr" dir="ltr">{activeTab === 'ramadan' ? '01:25 AM' : '12:25 AM'}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#111113] border border-slate-200/40 dark:border-[#26262C]">
                <span className={`font-bold text-slate-800 dark:text-[#D4D4D8] ${isAr ? 'font-cairo' : 'font-space'}`}>{t.timetable.lastInterchangeAttaba}</span>
                <span className="font-mono tabular-nums font-bold text-[#FF4A1C] bidi-ltr" dir="ltr">{activeTab === 'ramadan' ? '01:25 AM' : '12:25 AM'}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-[#111113] border border-slate-200/40 dark:border-[#26262C]">
                <span className={`font-bold text-slate-800 dark:text-[#D4D4D8] ${isAr ? 'font-cairo' : 'font-space'}`}>{t.timetable.lastInterchangeRamses}</span>
                <span className="font-mono tabular-nums font-bold text-[#FF4A1C] bidi-ltr" dir="ltr">{activeTab === 'ramadan' ? '01:30 AM' : '12:30 AM'}</span>
              </div>
            </div>
          </div>

          {/* Headway Frequency */}
          <div className="bg-slate-50 dark:bg-[#17171A] p-4 rounded-2xl border border-slate-200/60 dark:border-[#26262C] space-y-1.5">
            <h4 className={`text-[10px] font-bold ${isAr ? 'font-cairo tracking-normal text-slate-600 dark:text-[#A1A1AA]' : 'font-mono uppercase tracking-[0.14em] text-slate-500 dark:text-[#71717A]'}`}>
              {t.timetable.headwayTitle}
            </h4>
            <p className="text-xs font-mono text-slate-600 dark:text-[#D4D4D8]">
              • {isAr ? SCHEDULE_INFO.regular.headwayRushHourAr : `Rush Hours: ${SCHEDULE_INFO.regular.headwayRushHour}`}
            </p>
            <p className="text-xs font-mono text-slate-600 dark:text-[#D4D4D8]">
              • {isAr ? SCHEDULE_INFO.regular.headwayRegularAr : `Regular Hours: ${SCHEDULE_INFO.regular.headwayRegular}`}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-slate-100 dark:border-[#1D1D22] bg-slate-50/95 dark:bg-[#111113] pb-safe">
          <PressableScale
            onClick={() => {
              haptics.light();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-slate-200 dark:bg-[#17171A] hover:bg-slate-300 dark:hover:bg-[#212127] text-slate-800 dark:text-white text-xs font-space font-bold border border-slate-300 dark:border-[#26262C] transition-colors"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </PressableScale>
        </div>
      </div>
    </div>
  );
}
