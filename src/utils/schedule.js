/**
 * Service Schedules, Realistic Headways & Live Countdowns
 * Headway frequencies matching official Egyptian National Authority for Tunnels (NAT)
 * & RATP Dev Mobility Cairo 2026 operational profiles.
 */

export const LINE_HEADWAY_INFO = {
  line1: {
    nameAr: 'الخط الأول (حلوان - المرج الجديدة)',
    nameEn: 'Line 1 (Helwan - New El-Marg)',
    daytime: '3 - 4 mins',
    daytimeAr: '3 إلى 4 دقائق نهاراً',
    lateNight: '7 - 10 mins',
    lateNightAr: '7 إلى 10 دقائق ليلاً',
    firstTrain: '05:15 AM',
    firstTrainAr: '05:15 ص',
    lastTrain: '11:45 PM',
    lastTrainAr: '11:45 م',
    ramadanLastTrain: '12:45 AM',
    ramadanLastTrainAr: '12:45 ص'
  },
  line2: {
    nameAr: 'الخط الثانى (شبرا الخيمة - المنيب)',
    nameEn: 'Line 2 (Shubra El-Kheima - El-Mounib)',
    daytime: '3 - 4 mins',
    daytimeAr: '3 إلى 4 دقائق نهاراً',
    lateNight: '7 - 10 mins',
    lateNightAr: '7 إلى 10 دقائق ليلاً',
    firstTrain: '05:15 AM',
    firstTrainAr: '05:15 ص',
    lastTrain: '11:55 PM',
    lastTrainAr: '11:55 م',
    ramadanLastTrain: '12:55 AM',
    ramadanLastTrainAr: '12:55 ص'
  },
  line3: {
    nameAr: 'الخط الثالث (عدلي منصور - روض الفرج / جامعة القاهرة)',
    nameEn: 'Line 3 (Adly Mansour - Rod El-Farag / Cairo Univ)',
    daytime: '4 - 5 mins',
    daytimeAr: '4 إلى 5 دقائق نهاراً',
    lateNight: '8 - 10 mins',
    lateNightAr: '8 إلى 10 دقائق ليلاً',
    firstTrain: '05:15 AM',
    firstTrainAr: '05:15 ص',
    lastTrain: '11:45 PM',
    lastTrainAr: '11:45 م',
    ramadanLastTrain: '12:45 AM',
    ramadanLastTrainAr: '12:45 ص'
  },
  lrt: {
    nameAr: 'القطار الكهربائي الخفيف (LRT)',
    nameEn: 'LRT Electric Commuter Train',
    daytime: '15 - 20 mins',
    daytimeAr: '15 إلى 20 دقيقة نهاراً',
    lateNight: '20 - 30 mins',
    lateNightAr: '20 إلى 30 دقيقة ليلاً',
    firstTrain: '06:00 AM',
    firstTrainAr: '06:00 ص',
    lastTrain: '11:00 PM',
    lastTrainAr: '11:00 م',
    ramadanLastTrain: '12:00 AM',
    ramadanLastTrainAr: '12:00 ص'
  },
  monorail_east: {
    nameAr: 'مونوريل شرق النيل',
    nameEn: 'East Nile Monorail',
    daytime: '5 - 8 mins',
    daytimeAr: '5 إلى 8 دقائق نهاراً',
    lateNight: '10 - 12 mins',
    lateNightAr: '10 إلى 12 دقيقة ليلاً',
    firstTrain: '06:00 AM',
    firstTrainAr: '06:00 ص',
    lastTrain: '11:00 PM',
    lastTrainAr: '11:00 م',
    ramadanLastTrain: '12:00 AM',
    ramadanLastTrainAr: '12:00 ص'
  },
  monorail_west: {
    nameAr: 'مونوريل غرب النيل',
    nameEn: 'West Nile Monorail',
    daytime: '5 - 8 mins',
    daytimeAr: '5 إلى 8 دقائق نهاراً',
    lateNight: '10 - 12 mins',
    lateNightAr: '10 إلى 12 دقيقة ليلاً',
    firstTrain: '06:00 AM',
    firstTrainAr: '06:00 ص',
    lastTrain: '11:00 PM',
    lastTrainAr: '11:00 م',
    ramadanLastTrain: '12:00 AM',
    ramadanLastTrainAr: '12:00 ص'
  },
  brt: {
    nameAr: 'الأتوبيس الترددي السريع (BRT)',
    nameEn: 'BRT Ring Road Bus Rapid Transit',
    daytime: '4 - 6 mins',
    daytimeAr: '4 إلى 6 دقائق نهاراً',
    lateNight: '10 - 12 mins',
    lateNightAr: '10 إلى 12 دقيقة ليلاً',
    firstTrain: '05:30 AM',
    firstTrainAr: '05:30 ص',
    lastTrain: '12:00 AM',
    lastTrainAr: '12:00 ص',
    ramadanLastTrain: '01:00 AM',
    ramadanLastTrainAr: '01:00 ص'
  }
};

/**
 * Calculates current operating countdown status
 * First 2 hours of morning operation (05:15 to 07:15)
 * Last 2 hours of night operation (22:00 to 00:00 / 01:00 in Ramadan)
 */
export function getServiceCountdownState(now = new Date(), isRamadan = false, simulatedMode = null) {
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  if (simulatedMode === 'night') {
    h = 23;
    m = 15;
    s = 20;
  } else if (simulatedMode === 'morning') {
    h = 6;
    m = 15;
    s = 10;
  }

  const totalMins = h * 60 + m;

  // Window definitions
  const isMorning = totalMins >= 315 && totalMins <= 435; // 05:15 to 07:15
  const nightCutoff = isRamadan ? 60 : 15; // after midnight cutoff
  const isNight = totalMins >= 1320 || totalMins <= nightCutoff; // 22:00 to midnight/1:00

  let targetDate = new Date(now.getTime());
  if (simulatedMode === 'night') {
    targetDate.setHours(23, 45, 0, 0);
  } else if (isNight) {
    if (h >= 22) {
      targetDate.setHours(isRamadan ? 24 : 23, isRamadan ? 45 : 45, 0, 0);
    } else {
      targetDate.setHours(isRamadan ? 1 : 0, 0, 0, 0);
    }
  } else if (isMorning) {
    targetDate.setHours(isRamadan ? 24 : 23, isRamadan ? 45 : 45, 0, 0);
  }

  const targetMs = targetDate.getTime();
  const currentMs = simulatedMode === 'night'
    ? new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 15, 20).getTime()
    : (simulatedMode === 'morning' ? new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 15, 10).getTime() : now.getTime());

  const diffMs = Math.max(0, targetMs - currentMs);
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);

  const pad = (n) => String(n).padStart(2, '0');
  const countdownFormatted = `${pad(diffHours)}:${pad(diffMins)}:${pad(diffSecs)}`;

  let status = 'regular';
  if (isNight) status = 'night_countdown';
  else if (isMorning) status = 'morning_countdown';
  else if (totalMins > nightCutoff && totalMins < 315) status = 'closed_maintenance';

  return {
    status,
    isMorning,
    isNight,
    diffHours,
    diffMins,
    diffSecs,
    countdownFormatted
  };
}
