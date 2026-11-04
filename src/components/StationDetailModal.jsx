import React, { useState, useMemo } from 'react';
import {
  X,
  MapPin,
  Clock,
  Layers,
  Building,
  CheckCircle2,
  Route,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Accessibility,
  Compass,
  Copy,
  Check,
  AlertTriangle,
  ArrowRightLeft,
  Map,
  Maximize2,
  ExternalLink
} from 'lucide-react';
import { METRO_LINES, SCHEDULE_INFO, STATIONS } from '../data/metroData.js';
import { getDistanceKm } from '../utils/geo.js';
import { isStationAccessible } from '../utils/a11y.js';
import PressableScale from './PressableScale.jsx';
import { haptics } from '../utils/haptics.js';

// Crisp Google Maps Official Pin Logo
function GoogleMapsLogo({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 92 132" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46 0C20.596 0 0 20.596 0 46C0 80.5 46 132 46 132C46 132 92 80.5 92 46C92 20.596 71.404 0 46 0Z" fill="#1A73E8"/>
      <path d="M46 0C20.596 0 0 20.596 0 46C0 57.376 4.078 67.804 10.874 75.892L46 36V0Z" fill="#EA4335"/>
      <path d="M46 36L81.126 75.892C87.922 67.804 92 57.376 92 46C92 20.596 71.404 0 46 0V36Z" fill="#FBBC04"/>
      <path d="M10.874 75.892C19.78 86.508 30.934 101.402 46 122.25C61.066 101.402 72.22 86.508 81.126 75.892L46 36L10.874 75.892Z" fill="#34A853"/>
      <circle cx="46" cy="46" r="18" fill="white"/>
    </svg>
  );
}

// Arabic translations for station facilities and amenities
const FACILITY_TRANSLATIONS_AR = {
  // Required core facilities
  'Elevator': 'مصاعد كهربائية وسلالم متحركة',
  'Bus Connection': 'موقف أتوبيسات ووسائل نقل',
  'Ticket Kiosk': 'منافذ بيع التذاكر والاشتراكات',
  'Restrooms': 'دورات مياه',
  'Accessibility Ramp': 'مسارات كراسي متحركة',

  // Network facilities
  'Elevators': 'مصاعد كهربائية وسلالم متحركة',
  'High-Speed Elevators': 'مصاعد سريعة وسلالم متحركة',
  'Escalator': 'سلالم كهربائية متحركة',
  'Escalators': 'سلالم كهربائية متحركة',
  'Disabled Access': 'تجهيزات لذوي الاحتياجات الخاصة',
  'ATM': 'صراف آلي (ATM)',
  'Student Card Services': 'مكاتب اشتراكات الطلبة',
  'Student Ticket Services': 'منافذ تذاكر واشتراكات الطلاب',
  'Student Gates': 'بوابات مخصصة للطلاب',
  'Information Desk': 'مكتب استعلامات وإرشاد',
  'Tourist Info': 'إرشاد ومعلومات سياحية',
  'Customer Service': 'خدمة العملاء والمساعدة',
  'Luggage Assistance': 'خدمات ومساعدة الأمتعة',
  'Luggage Check': 'فحص وتفتيش الأمتعة',
  'Modern Air Conditioned Hub': 'محطة حديثة مكيفة بالكامل',
  'Full Air Conditioning': 'تكييف مركزي كامل',
  'Multiple Exits': 'مخارج وبوابات متعددة',
  'Bicycle Parking': 'موقف دراجات هوائية',
  'Bus Link': 'موقف أتوبيسات ووسائل نقل',
  'Bus Hub': 'موقف أتوبيسات مركزي',
  'Bus Terminal': 'محطة أتوبيسات عامة',
  'Regional Bus Hub': 'موقف أتوبيسات إقليمي',
  'BRT Connection': 'اتصال بحافلات التردد السريع (BRT)',
  'BRT Station': 'محطة حافلات التردد السريع (BRT)',
  'Major Interchange': 'محطة تبادلية رئيسية',
  'Mega Interchange': 'محطة تبادلية كبرى',
  'Railway Interchange': 'محطة تبادلية مع سكك حديد مصر',
  'Intermodal Mega Hub': 'مجمع نقل عملاق متعدد الوسائط',
  'Multi-story Parking': 'موقف سيارات متعدد الطوابق',
  'Parking': 'مواقف انتظار سيارات',
  'Event Parking Access': 'مواقف سيارات الفعاليات',
  'VIP Lounges': 'صالات كبار الزوار (VIP)',
  'VIP Terminal': 'صالة كبار الزوار (VIP)',
  'Crowd Management Exits': 'بوابات ومسارات إدارة الحشود',
  'Modern High-Capacity': 'محطة حديثة عالية الاستيعاب',
  'Deep Underground Station': 'محطة نفقية عميقة',
  'Underground': 'محطة نفقية',
  'Branch Interchange Junction': 'محطة تفريعة تبادلية',
  'Elevated Station': 'محطة علوية مجهزة',
  'Elevated': 'محطة علوية مجهزة',
  'Terminal Station': 'محطة نهائية',
  'Microbus Hub': 'موقف ميكروباص',
  'Monorail Elevated': 'محطة مونوريل معلقة',
  'LRT Surface Platform': 'أرصفة القطار الخفيف السطحية',
  'LRT Station': 'محطة القطار الكهربائي الخفيف (LRT)',
  'LRT Hub': 'محطة مركزية للقطار الخفيف (LRT)',
  'Pedestrian Crossing': 'معبر مشاة آمن'
};

// Mobility Cairo 500m local neighborhood maps available for Line 3 stations
const LOCAL_MAP_STATION_IDS = new Set([
  'adly_mansour', 'el_haykestep', 'omar_ibn_el_khattab', 'qubaa', 'hesham_barakat',
  'el_nozha', 'el_shams_club', 'alf_maskan', 'heliopolis', 'haroun',
  'al_ahram', 'koleyet_el_banat', 'stadium', 'ard_el_maared', 'abbassiya',
  'abdou_pasha', 'el_geish', 'bab_el_shaariya', 'attaba', 'nasser',
  'maspero', 'safaa_hegazy', 'kit_kat'
]);

export default function StationDetailModal({
  station,
  lang,
  t,
  onClose,
  onSetOrigin,
  onSetDestination
}) {
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [showFullLocalMap, setShowFullLocalMap] = useState(false);

  if (!station) return null;

  const hasLocalMap = Boolean(station.id && LOCAL_MAP_STATION_IDS.has(station.id));

  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const handleCopyCoords = async () => {
    try {
      haptics.select();
      const text = `${station.lat}, ${station.lng}`;
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      }
      setCopiedCoords(true);
      setTimeout(() => setCopiedCoords(false), 2200);
    } catch (_) {
      setCopiedCoords(true);
      setTimeout(() => setCopiedCoords(false), 2200);
    }
  };

  // Find counterpart / nearby interchange stations to verify physical walking distance & co-location
  const counterpartStations = useMemo(() => {
    if (!station || !station.lat || !station.lng) return [];
    const results = [];
    const normName = (station.nameEn || '').toLowerCase().replace(/[^a-z0-9]/g, '');

    STATIONS.forEach(s => {
      if (s.id === station.id || !s.lat || !s.lng) return;
      const sNormName = (s.nameEn || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const distKm = getDistanceKm(station.lat, station.lng, s.lat, s.lng);
      const distMeters = Math.round(distKm * 1000);

      // Check if stations share name or are physical interchange counterparts
      const isSameName = normName.length >= 4 && (normName === sNormName || normName.includes(sNormName) || sNormName.includes(normName));
      const isNearbyHub = distMeters <= 750 && (station.isInterchange || s.isInterchange);

      if (isSameName || isNearbyHub) {
        results.push({
          station: s,
          distMeters,
          walkMinutes: Math.max(1, Math.round((distKm / 4.8) * 60)),
          isSameName,
          isDirectComplex: distMeters <= 100
        });
      }
    });

    return results.sort((a, b) => a.distMeters - b.distMeters);
  }, [station]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white dark:bg-[#111113] rounded-t-[32px] sm:rounded-[28px] max-h-[90vh] flex flex-col shadow-2xl border-t sm:border border-slate-200 dark:border-[#26262C] animate-in slide-in-from-bottom duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sheet Grab Handle */}
        <div className="w-10 h-1 bg-slate-300 dark:bg-[#26262C] rounded-full mx-auto my-2.5 flex-shrink-0" />

        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-slate-100 dark:border-[#1D1D22] flex items-center justify-between bg-slate-50/50 dark:bg-[#111113] flex-shrink-0">
          <div className="flex items-center gap-2">
            <h3 className={`text-sm font-space font-extrabold uppercase text-slate-900 dark:text-white ${isAr ? 'tracking-normal' : 'tracking-wider'}`}>
              {t.stationExplorer?.stationDetails || (isAr ? 'بيانات المحطة' : 'Station Details')}
            </h3>
            {station.isInterchange && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-bold">
                {isAr ? 'محطة تبادلية' : 'TRANSFER HUB'}
              </span>
            )}
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

        {/* Modal Body with smooth momentum scrolling */}
        <div
          className="overflow-y-auto p-5 space-y-4 text-start flex-1 touch-pan-y"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Station Title & Lines */}
          <div className="space-y-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-space font-black text-slate-900 dark:text-white leading-tight">
                {isAr ? station.nameAr : station.nameEn}
              </h2>
              <p className="text-xs text-slate-500 dark:text-[#A1A1AA] font-mono mt-0.5">
                {isAr ? station.nameEn : station.nameAr} • <span className={`uppercase ${isAr ? 'tracking-normal' : 'tracking-wider'}`}>{station.zone}</span>
              </p>
            </div>

            {/* Metro Line Badges */}
            <div className="flex items-center gap-1.5 pt-0.5 flex-wrap">
              {station.lines.map(l => (
                <span
                  key={l}
                  className="text-xs px-2.5 py-1 rounded-xl font-bold font-space text-white shadow-sm"
                  style={{ backgroundColor: METRO_LINES[l]?.color || '#2563EB' }}
                >
                  {isAr ? METRO_LINES[l]?.shortNameAr : METRO_LINES[l]?.shortNameEn}
                </span>
              ))}
            </div>

            {/* Accessibility Elevator Badge */}
            {isStationAccessible(station) && (
              <div className="p-3 rounded-2xl bg-teal-500/10 dark:bg-teal-950/30 border border-teal-500/20 flex items-center gap-2.5 text-xs font-semibold text-teal-700 dark:text-teal-300">
                <Accessibility className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <span>
                  {isAr
                    ? '♿ المحطة مجهزة بمصاعد وسلالم كهربائية ومسارات أرضية مخصصة للمكفوفين'
                    : '♿ Station features elevators, escalators & tactile paving for the visually impaired'}
                </span>
              </div>
            )}
          </div>

          {/* Location & Maps Action Row (Icon Only: Google Maps Logo & Copy GPS) */}
          <div className="bg-slate-50 dark:bg-[#17171A] p-3.5 rounded-2xl border border-slate-200/60 dark:border-[#26262C] space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className={`text-[10px] ${isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'} text-slate-500 dark:text-[#71717A] flex items-center gap-1.5 font-bold`}>
                <Compass className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <span>{isAr ? 'الموقع والملاحة' : 'Location & Navigation'}</span>
              </h4>
            </div>

            {/* Action Buttons: Google Maps (logo only) and Copy GPS (icon only) */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${station.lat},${station.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => haptics.light()}
                className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-white dark:bg-[#111113] hover:bg-slate-100 dark:hover:bg-[#212127] border border-slate-200/80 dark:border-[#26262C] hover:border-blue-300 dark:hover:border-blue-700/60 transition-all shadow-sm active:scale-95"
                title={isAr ? 'فتح في خرائط Google' : 'Open in Google Maps'}
                aria-label={isAr ? 'فتح في خرائط Google' : 'Open in Google Maps'}
              >
                <GoogleMapsLogo className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={handleCopyCoords}
                className={`flex items-center justify-center py-2.5 px-3 rounded-xl bg-white dark:bg-[#111113] hover:bg-slate-100 dark:hover:bg-[#212127] border transition-all shadow-sm active:scale-95 ${
                  copiedCoords
                    ? 'border-emerald-500/50 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
                    : 'border-slate-200/80 dark:border-[#26262C] text-slate-700 dark:text-slate-200'
                }`}
                title={copiedCoords ? (isAr ? 'تم نسخ الإحداثيات!' : 'Coordinates Copied!') : (isAr ? 'نسخ إحداثيات GPS' : 'Copy GPS Coordinates')}
                aria-label={copiedCoords ? (isAr ? 'تم النسخ' : 'Copied') : (isAr ? 'نسخ الإحداثيات' : 'Copy GPS')}
              >
                {copiedCoords ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Official Mobility Cairo 500m Local Neighborhood Map */}
          {hasLocalMap && (
            <div className="bg-slate-50 dark:bg-[#17171A] p-3.5 rounded-2xl border border-slate-200/60 dark:border-[#26262C] space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className={`text-[10px] ${isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'} text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-bold`}>
                  <Map className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{isAr ? 'خريطة النطاق الجغرافي 500 م (Mobility Cairo)' : '500m Neighborhood Map (Mobility Cairo)'}</span>
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/20">
                  {isAr ? 'الخط الثالث M3' : 'Line 3 M3'}
                </span>
              </div>

              {/* Clickable Map Thumbnail Preview */}
              <div
                onClick={() => {
                  haptics.light();
                  setShowFullLocalMap(true);
                }}
                className="relative rounded-xl overflow-hidden border border-slate-200/80 dark:border-[#26262C] cursor-pointer group bg-slate-900 aspect-video flex items-center justify-center shadow-xs"
              >
                <img
                  src={`/assets/local_maps/${station.id}.png`}
                  alt={`${station.nameEn} 500m area map`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs font-cairo font-bold flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      {isAr ? 'اضغط لتكبير الخريطة بالتفصيل' : 'Tap to expand 500m map'}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md">
                      HD 500m
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Transfer Physical Proximity & Interchange Intelligence (Addresses User Request) */}
          {(station.isInterchange || station.transferNotice || counterpartStations.length > 0) && (
            <div className="bg-slate-50 dark:bg-[#17171A] p-4 rounded-2xl border border-slate-200/60 dark:border-[#26262C] space-y-3">
              <div className="flex items-center justify-between">
                <h4 className={`text-[10px] ${isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'} text-slate-500 dark:text-[#71717A] flex items-center gap-1.5 font-bold`}>
                  <ArrowRightLeft className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  <span>{isAr ? 'بيانات التبديل والمسافة المكانية' : 'Interchange & Transfer Proximity'}</span>
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">
                  {isAr ? 'التحقق المكاني' : 'Spatial Verified'}
                </span>
              </div>

              {/* Station Specific Transfer Notice (e.g. Al-Qawmeya Metro vs BRT 620m distance) */}
              {station.transferNotice && (
                <div className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs font-semibold ${
                  station.transferWalkDistanceM > 200
                    ? 'bg-amber-500/10 border-amber-500/25 text-amber-900 dark:text-[#FFC24B]'
                    : 'bg-emerald-500/10 border-emerald-500/25 text-emerald-800 dark:text-emerald-300'
                }`}>
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="leading-relaxed">
                      {isAr ? station.transferNoticeAr : station.transferNotice}
                    </p>
                    {station.transferWalkDistanceM && (
                      <div className="flex items-center gap-2 font-mono text-[11px] pt-0.5">
                        <span className="px-1.5 py-0.2 rounded bg-black/10 dark:bg-white/10 font-bold">
                          {station.transferWalkDistanceM} {isAr ? 'متر' : 'meters'}
                        </span>
                        <span>•</span>
                        <span>
                          ~{station.transferWalkMins} {isAr ? 'دقائق مشياً' : 'mins walk'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Counterpart / Shared Name Stations list */}
              {counterpartStations.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[11px] text-slate-500 dark:text-[#A1A1AA] font-bold">
                    {isAr ? 'المحطات التبادلية أو الشبيهة في النطاق الجغرافي:' : 'Connected / Same-Name Stations Nearby:'}
                  </p>
                  <div className="space-y-2">
                    {counterpartStations.map(({ station: s, distMeters, walkMinutes, isSameName, isDirectComplex }) => (
                      <div
                        key={s.id}
                        className="bg-white dark:bg-[#111113] p-3 rounded-xl border border-slate-200/60 dark:border-[#26262C] space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="font-bold text-xs text-slate-900 dark:text-white truncate">
                              {isAr ? s.nameAr : s.nameEn}
                            </span>
                            <div className="flex items-center gap-1">
                              {s.lines.map(l => (
                                <span
                                  key={l}
                                  className="text-[9px] px-1.5 py-0.2 rounded font-bold text-white uppercase"
                                  style={{ backgroundColor: METRO_LINES[l]?.color || '#E11D48' }}
                                >
                                  {isAr ? METRO_LINES[l]?.shortNameAr : METRO_LINES[l]?.shortNameEn}
                                </span>
                              ))}
                            </div>
                          </div>

                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                            isDirectComplex
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                              : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                          }`}>
                            {distMeters < 30 ? (isAr ? 'نفس المبنى' : 'Co-located') : `${distMeters}m (~${walkMinutes} min)`}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-600 dark:text-[#97979E] leading-relaxed">
                          {isDirectComplex
                            ? (isAr
                                ? '✅ تبديل مباشر داخلي: مجمع المحطة متصل بالكامل، التبديل يتم عبر الصالات الداخلية دون خروج للشارع.'
                                : '✅ Direct In-Station: Platforms are connected indoors; transfer without exiting.')
                            : (isAr
                                ? `⚠️ تبديل مشياً خارجياً: المحطتان تفصلهما مسافة ${distMeters} متر (~${walkMinutes} دقائق مشياً). يلزم الخروج للشارع للانتقال.`
                                : `⚠️ Outdoor Walking Transfer: Separated by ${distMeters}m (~${walkMinutes} mins walk). Requires exiting to street level.`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard In-Station Multi-line Transfer info (e.g. Sadat, Attaba, Shohadaa, Nasser, Cairo Univ) */}
              {station.lines.length > 1 && !station.transferNotice && counterpartStations.length === 0 && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>
                    {isAr
                      ? `محطة تبادلية موحدة: التبديل بين ${station.lines.map(l => METRO_LINES[l]?.shortNameAr).join(' و ')} يتم مباشرة داخل نفس المبنى عبر السلالم الداخلية دون خروج أو شراء تذكرة جديدة.`
                      : `Unified interchange: Transfer between ${station.lines.map(l => METRO_LINES[l]?.shortNameEn).join(' & ')} is inside the same complex via escalators without exiting or extra fare.`}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Timetable / Operating Hours (Terminal Metric Style) */}
          <div className="bg-slate-50 dark:bg-[#17171A] p-4 rounded-2xl border border-slate-200/60 dark:border-[#26262C] space-y-3">
            <h4 className={`text-[10px] ${isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'} text-slate-500 dark:text-[#71717A] flex items-center gap-1.5 font-bold`}>
              <Clock className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
              <span>{t.stationExplorer?.operatingHours || (isAr ? 'مواعيد التشغيل اليومية' : 'Operating Hours')}</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white dark:bg-[#111113] p-3 rounded-xl border border-slate-200/50 dark:border-[#26262C]">
                <p className={`text-[10px] ${isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'} text-slate-400 dark:text-[#71717A] font-bold`}>
                  {t.stationExplorer?.firstTrain || (isAr ? 'أول قطار' : 'First Train')}
                </p>
                <p className="font-mono tabular-nums font-bold text-slate-900 dark:text-white mt-1 text-sm">
                  <span dir="ltr" className="inline-block">
                    {isAr ? '05:15 ص' : (SCHEDULE_INFO.regular?.firstTrainDeparture || '05:15 AM')}
                  </span>
                </p>
              </div>
              <div className="bg-white dark:bg-[#111113] p-3 rounded-xl border border-slate-200/50 dark:border-[#26262C]">
                <p className={`text-[10px] ${isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-wider'} text-slate-400 dark:text-[#71717A] font-bold`}>
                  {t.stationExplorer?.lastTrain || (isAr ? 'آخر قطار' : 'Last Train')}
                </p>
                <p className="font-mono tabular-nums font-bold text-rose-600 dark:text-rose-400 mt-1 text-sm">
                  <span dir="ltr" className="inline-block">
                    {isAr ? '11:45 م - 12:20 ص' : '11:45 PM - 12:20 AM'}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-[#A1A1AA] font-mono pt-0.5">
              {isAr
                ? (SCHEDULE_INFO.regular?.headwayRushHourAr || 'قطار كل 3 إلى 4 دقائق في أوقات الذروة')
                : `Train every ${SCHEDULE_INFO.regular?.headwayRushHour || '3 - 4 mins'} during rush hour`}
            </p>
          </div>

          {/* Nearby Landmarks */}
          <div className="space-y-2">
            <h4 className={`text-[10px] ${isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'} text-slate-500 dark:text-[#71717A] flex items-center gap-1.5 font-bold`}>
              <Building className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>{t.stationExplorer?.landmarksNear || (isAr ? 'المعالم والمناطق القريبة' : 'Nearby Areas & Landmarks')}</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(isAr ? station.landmarksAr : station.landmarks)?.map((landmark, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-xl bg-slate-100 dark:bg-[#17171A] font-medium text-slate-700 dark:text-[#D4D4D8] border border-slate-200/50 dark:border-[#26262C]"
                >
                  {landmark}
                </span>
              ))}
            </div>
          </div>

          {/* Station Facilities */}
          {station.facilities && station.facilities.length > 0 && (
            <div className="space-y-2">
              <h4 className={`text-[10px] ${isAr ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.14em]'} text-slate-500 dark:text-[#71717A] flex items-center gap-1.5 font-bold`}>
                <Accessibility className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>{t.stationExplorer?.facilities || (isAr ? 'المرافق والتجهيزات' : 'Station Accessibility & Amenities')}</span>
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {station.facilities.map((facility, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-[#17171A] text-slate-700 dark:text-[#D4D4D8] font-medium border border-slate-200/40 dark:border-[#26262C]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span className={isAr ? 'font-cairo text-[11px] leading-tight font-medium' : 'text-xs'}>
                      {isAr ? (FACILITY_TRANSLATIONS_AR[facility] || facility) : facility}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-slate-100 dark:border-[#1D1D22] grid grid-cols-2 gap-2.5 bg-slate-50/95 dark:bg-[#111113] pb-[max(1.75rem,calc(1rem+env(safe-area-inset-bottom,0px)))] sm:pb-4 flex-shrink-0">
          <PressableScale
            onClick={() => {
              haptics.selection();
              onSetOrigin(station.id);
              onClose();
            }}
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-slate-200 dark:bg-[#17171A] hover:bg-slate-300 dark:hover:bg-[#212127] text-xs font-space font-bold text-slate-800 dark:text-white border border-slate-300/60 dark:border-[#26262C] transition-colors"
          >
            <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span className={isAr ? 'font-cairo font-bold text-[11px]' : ''}>{t.stationExplorer?.setAsStart || (isAr ? 'تحديد كنقطة انطلاق' : 'Set as Start')}</span>
          </PressableScale>

          <PressableScale
            onClick={() => {
              haptics.success();
              onSetDestination(station.id);
              onClose();
            }}
            className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-[#FF4A1C] hover:bg-[#e03d12] text-xs font-space font-bold text-white transition-colors shadow-lg shadow-[#FF4A1C]/20"
          >
            <Route className="w-4 h-4 flex-shrink-0" />
            <span className={isAr ? 'font-cairo font-bold text-[11px]' : ''}>{t.stationExplorer?.setAsEnd || (isAr ? 'تحديد كوجهة وصول' : 'Set as End')}</span>
          </PressableScale>
        </div>
      </div>

      {/* Full-Screen 500m Local Map Lightbox Viewer */}
      {showFullLocalMap && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex flex-col p-2 sm:p-4 animate-fade-in"
          onClick={(e) => {
            e.stopPropagation();
            setShowFullLocalMap(false);
          }}
        >
          {/* Lightbox Top Header */}
          <div className="flex items-center justify-between p-2 text-white flex-shrink-0" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-emerald-400" />
              <div>
                <h4 className="text-sm sm:text-base font-bold font-space text-white">
                  {isAr ? station.nameAr : station.nameEn}
                </h4>
                <p className="text-[11px] text-emerald-300 font-cairo">
                  {isAr ? 'خريطة النطاق الجغرافي 500 م الرسمية • Mobility Cairo' : 'Official 500m Neighborhood Map • Mobility Cairo'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`/assets/local_maps/${station.id}.png`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => haptics.light()}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-mono flex items-center gap-1 active:scale-95"
                title={isAr ? 'فتح الصورة بحجمها الأصلي' : 'Open Full Image'}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">{isAr ? 'الأصل' : 'Full HD'}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  haptics.light();
                  setShowFullLocalMap(false);
                }}
                className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all active:scale-95"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Container with Touch Pan / Zoom */}
          <div
            className="flex-1 flex items-center justify-center overflow-auto p-2 touch-pinch-zoom"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={`/assets/local_maps/${station.id}.png`}
              alt={`${station.nameEn} 500m Local Area Map`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10 select-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
