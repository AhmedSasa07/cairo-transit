import React, { useState, useMemo, useEffect } from 'react';
import {
  Navigation,
  Search,
  MapPin,
  Clock,
  Compass,
  ArrowRight,
  ArrowLeft,
  Building2,
  GraduationCap,
  Sparkles,
  Train,
  CheckCircle,
  AlertCircle,
  Info,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Bus,
  Trophy,
  X
} from 'lucide-react';
import { CAIRO_LANDMARKS, STATIONS, METRO_LINES } from '../data/metroData.js';
import { TOP_EGYPT_PLACES, CATEGORY_METADATA } from '../data/egyptPlaces.js';
import { findNearestStations, formatDistance, estimateWalkMinutes, getDistanceKm, normalizeArabic } from '../utils/geo.js';
import PressableScale from './PressableScale.jsx';
import { haptics } from '../utils/haptics.js';

// Map legacy category keys to standard keys matching CATEGORY_METADATA
const mapLegacyCategory = (cat) => {
  if (!cat) return 'landmark';
  const c = String(cat).toLowerCase().trim();
  if (['university', 'college', 'academy', 'education'].includes(c)) return 'university';
  if (['hospital', 'medical', 'clinic'].includes(c)) return 'hospital';
  if (['mall', 'shopping', 'market', 'souq'].includes(c)) return 'mall';
  if (['government', 'embassy', 'ministry'].includes(c)) return 'government';
  if (['transport', 'station', 'bus', 'airport', 'terminal'].includes(c)) return 'transport';
  if (['sports', 'club', 'stadium'].includes(c)) return 'sports';
  return 'landmark'; // tourist, museum, historic, culture, parks, neighborhood, landmark etc.
};

// Category Icon Mapping
const CATEGORY_ICONS = {
  university: GraduationCap,
  hospital: HeartPulse,
  mall: ShoppingBag,
  landmark: Landmark,
  government: Building2,
  transport: Bus,
  sports: Trophy
};

// Merged comprehensive places repository (1,000+ Egypt Places & Landmarks)
const ALL_PLACES = (() => {
  const list = [];
  const seenEn = new Set();
  const seenAr = new Set();

  // 1. Add TOP_EGYPT_PLACES (1,040+ places)
  for (const place of TOP_EGYPT_PLACES) {
    const normCategory = mapLegacyCategory(place.category);
    const item = {
      ...place,
      category: normCategory,
      categoryEn: CATEGORY_METADATA[normCategory]?.nameEn || place.categoryEn || 'Landmark & Heritage',
      categoryAr: CATEGORY_METADATA[normCategory]?.nameAr || place.categoryAr || 'معلم سياحي',
      normalizedNameAr: normalizeArabic(place.nameAr || ''),
      lowerNameEn: (place.nameEn || '').toLowerCase().trim(),
      normalizedAliases: (place.aliases || []).map(a => ({
        raw: a,
        lower: a.toLowerCase().trim(),
        normAr: normalizeArabic(a)
      }))
    };
    list.push(item);
    if (place.nameEn) seenEn.add(item.lowerNameEn);
    if (place.nameAr) seenAr.add(item.normalizedNameAr);
  }

  // 2. Merge CAIRO_LANDMARKS avoiding duplicates by name
  for (const cl of (CAIRO_LANDMARKS || [])) {
    const enKey = (cl.nameEn || '').toLowerCase().trim();
    const arKey = normalizeArabic(cl.nameAr || '');
    if (!seenEn.has(enKey) && !seenAr.has(arKey)) {
      const normCategory = mapLegacyCategory(cl.category);
      list.push({
        id: cl.id || `cl_${enKey.replace(/[^a-z0-9]/g, '_')}`,
        nameAr: cl.nameAr,
        nameEn: cl.nameEn,
        category: normCategory,
        categoryEn: CATEGORY_METADATA[normCategory]?.nameEn || cl.categoryEn || 'Landmark & Heritage',
        categoryAr: CATEGORY_METADATA[normCategory]?.nameAr || cl.categoryAr || 'معلم سياحي',
        nearestStationId: cl.nearestStationId,
        lat: cl.lat,
        lng: cl.lng,
        walkingDistanceMins: cl.walkingDistanceMins,
        aliases: cl.aliases || [],
        normalizedNameAr: arKey,
        lowerNameEn: enKey,
        normalizedAliases: (cl.aliases || []).map(a => ({
          raw: a,
          lower: a.toLowerCase().trim(),
          normAr: normalizeArabic(a)
        }))
      });
      seenEn.add(enKey);
      seenAr.add(arKey);
    }
  }

  return list;
})();

// Category count dictionary for fast badge counts
const CATEGORY_COUNTS = (() => {
  const counts = { all: ALL_PLACES.length };
  for (const p of ALL_PLACES) {
    counts[p.category] = (counts[p.category] || 0) + 1;
  }
  return counts;
})();

// O(1) Station fast lookup map
const STATIONS_MAP = new Map(STATIONS.map(s => [s.id, s]));

// Categories navigation list
const CATEGORY_TABS = [
  { id: 'all', labelAr: 'كل الأماكن', labelEn: 'All Places', icon: Sparkles },
  { id: 'university', labelAr: 'الجامعات والأكاديميات', labelEn: 'Universities & Academies', icon: GraduationCap },
  { id: 'hospital', labelAr: 'مستشفيات', labelEn: 'Hospitals', icon: HeartPulse },
  { id: 'mall', labelAr: 'مولات وتسوّق', labelEn: 'Malls & Markets', icon: ShoppingBag },
  { id: 'landmark', labelAr: 'معالم سياحية', labelEn: 'Landmarks', icon: Landmark },
  { id: 'government', labelAr: 'جهات وهيئات', labelEn: 'Government & Embassies', icon: Building2 },
  { id: 'transport', labelAr: 'مواصلات ومحطات', labelEn: 'Transport & Stations', icon: Bus },
  { id: 'sports', labelAr: 'أندية رياضية', labelEn: 'Sports & Clubs', icon: Trophy }
];

const PAGE_SIZE = 30;

export default function NearestStationFinder({
  lang,
  t,
  onPlanRouteToStation,
  onPlanRouteFromStation,
  onSelectStationForModal,
  setNearestGpsStation
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userLocation, setUserLocation] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [gpsNearestStations, setGpsNearestStations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  // Reset pagination count on filter or search change for optimal rendering
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, selectedCategory]);

  // Trigger browser GPS
  const handleDetectLocation = () => {
    haptics.light();
    setIsLocating(true);
    setLocationError(null);

    if (!('geolocation' in navigator)) {
      setLocationError(t.nearestTab.gpsError);
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        haptics.success();
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setUserLocation({ lat, lng });
        const nearest = findNearestStations(lat, lng, 3);
        setGpsNearestStations(nearest);
        if (nearest[0]) {
          setNearestGpsStation?.(nearest[0]);
        }
        setIsLocating(false);
      },
      (err) => {
        console.warn('Geolocation error:', err);
        setLocationError(t.nearestTab.gpsError);
        setIsLocating(false);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Instant fuzzy prefix-priority search & filter across all 1,000+ places
  const filteredLandmarks = useMemo(() => {
    const rawQuery = searchQuery.trim();
    const q = rawQuery.toLowerCase();
    const qNormAr = normalizeArabic(rawQuery);

    // If query is empty, simple category slice
    if (!q) {
      if (selectedCategory === 'all') {
        return ALL_PLACES;
      }
      return ALL_PLACES.filter(item => item.category === selectedCategory);
    }

    // Prefix-weighted scoring for instant snappy matching
    const scored = [];
    for (const place of ALL_PLACES) {
      if (selectedCategory !== 'all' && place.category !== selectedCategory) {
        continue;
      }

      let score = 999;
      const nameEn = place.lowerNameEn;
      const normAr = place.normalizedNameAr;

      // Exact matches
      if (nameEn === q || normAr === qNormAr) {
        score = 1;
      }
      // Prefix match in English or Arabic
      else if (nameEn.startsWith(q) || normAr.startsWith(qNormAr)) {
        score = 2;
      }
      // Word prefix match (e.g. "Cairo" in "American University in Cairo")
      else if (nameEn.split(' ').some(w => w.startsWith(q)) || normAr.split(' ').some(w => w.startsWith(qNormAr))) {
        score = 3;
      }
      // Aliases prefix match (AUC, GUC, CU, Kasr Al Ainy, etc.)
      else if (place.normalizedAliases.some(a => a.lower.startsWith(q) || a.normAr.startsWith(qNormAr))) {
        score = 4;
      }
      // Substring match in name
      else if (nameEn.includes(q) || normAr.includes(qNormAr)) {
        score = 10;
      }
      // Substring in aliases
      else if (place.normalizedAliases.some(a => a.lower.includes(q) || a.normAr.includes(qNormAr))) {
        score = 12;
      }

      if (score < 999) {
        scored.push({ place, score });
      }
    }

    scored.sort((a, b) => a.score - b.score);
    return scored.map(item => item.place);
  }, [searchQuery, selectedCategory]);

  // Paginated slice to maintain 60 FPS scrolling with zero DOM lag
  const displayedLandmarks = useMemo(() => {
    return filteredLandmarks.slice(0, visibleCount);
  }, [filteredLandmarks, visibleCount]);

  return (
    <div className="space-y-4 pb-36 sm:pb-44 pb-safe text-start">
      {/* GPS Location Finder Hero Card */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-[#26262C] relative overflow-hidden space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-[#FF4A1C]/10 border border-[#FF4A1C]/25 flex items-center justify-center text-[#FF4A1C] shadow-sm flex-shrink-0">
            <Navigation className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-space font-black uppercase tracking-wider text-slate-900 dark:text-white leading-tight">
              {t.nearestTab.title}
            </h2>
            <p className="text-xs text-slate-500 dark:text-[#A1A1AA] font-mono mt-0.5 line-clamp-1">
              {t.nearestTab.subtitle}
            </p>
          </div>
        </div>

        <PressableScale
          onClick={handleDetectLocation}
          disabled={isLocating}
          className="w-full py-3 px-4 rounded-2xl bg-[#FF4A1C] hover:bg-[#e03d12] text-white font-space font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#FF4A1C]/20 transition-all disabled:opacity-80"
        >
          <Compass className={`w-4 h-4 text-white ${isLocating ? 'animate-spin' : ''}`} />
          <span>{isLocating ? t.nearestTab.gpsLocating : t.nearestTab.useGpsButton}</span>
        </PressableScale>

        {locationError && (
          <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs flex items-center gap-2 text-rose-500 font-mono">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{locationError}</span>
          </div>
        )}

        {/* GPS Results Card with Immediate 1-tap buttons */}
        {gpsNearestStations.length > 0 && (
          <div className="mt-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#17171A] border border-slate-200 dark:border-[#26262C] space-y-2.5">
            <p className="text-xs font-space font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#2DD881] flex-shrink-0" />
              <span>{t.nearestTab.gpsSuccess}</span>
            </p>
            {gpsNearestStations.slice(0, 3).map((st) => (
              <div
                key={st.id}
                className="bg-white dark:bg-[#111113] p-3.5 rounded-2xl border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs text-emerald-600 dark:text-[#2DD881] flex-shrink-0">
                      {st.nameEn.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h5 className={`text-sm font-bold text-slate-900 dark:text-white leading-tight truncate ${isAr ? 'font-cairo' : 'font-space'}`}>
                        {isAr ? st.nameAr : st.nameEn}
                      </h5>
                      <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                        {st.lines.map(l => (
                          <span
                            key={l}
                            className={`text-[9px] px-1.5 py-0.2 rounded font-bold text-white uppercase shadow-sm ${isAr ? 'font-cairo' : 'font-mono'}`}
                            style={{ backgroundColor: METRO_LINES[l]?.color || '#E11D48' }}
                          >
                            {isAr ? (METRO_LINES[l]?.shortNameAr || l) : (METRO_LINES[l]?.shortNameEn || l)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      haptics.selection();
                      onSelectStationForModal?.(st);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#26262C] transition-colors flex-shrink-0"
                    title={isAr ? 'عرض تفاصيل وإحداثيات المحطة' : 'View Station Details & Coordinates'}
                    aria-label="Station info"
                  >
                    <Info className="w-4 h-4 text-slate-400 hover:text-emerald-500" />
                  </button>
                </div>

                <p className="text-[11px] font-mono text-slate-500 dark:text-[#A1A1AA] flex items-center gap-1.5 px-1">
                  <span className="text-[#FF4A1C] font-bold tabular-nums">{formatDistance(st.distanceKm, lang)}</span>
                  <span>•</span>
                  <span className="tabular-nums">~{st.walkMins} {t.routePlanner?.mins || (isAr ? 'دقيقة' : 'mins')} {isAr ? 'مشياً' : 'walk'}</span>
                </p>

                {/* Direct 1-tap "Set as Start" and "Plan Route Here" */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-[#1D1D22]">
                  <PressableScale
                    onClick={() => {
                      haptics.selection();
                      onPlanRouteFromStation(st.id);
                    }}
                    className="py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200 dark:hover:bg-[#212127] text-slate-800 dark:text-white text-xs font-space font-bold text-center border border-slate-200 dark:border-[#26262C] transition-colors flex items-center justify-center gap-1"
                  >
                    <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                    <span className="truncate">{t.nearestTab.setAsStartImmediate}</span>
                  </PressableScale>
                  <PressableScale
                    onClick={() => {
                      haptics.success();
                      onPlanRouteToStation(st.id);
                    }}
                    className="py-2.5 px-2 rounded-xl bg-[#FF4A1C] hover:bg-[#e03d12] text-white text-xs font-space font-bold text-center shadow-sm shadow-[#FF4A1C]/20 transition-colors flex items-center justify-center gap-1"
                  >
                    <span className="truncate">{t.nearestTab.planTripToHere}</span>
                    <ArrowIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  </PressableScale>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 1,000+ Places Directory Search & Category Filters */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-4 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-3">
        {/* Search Input Bar with Clear Button */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 rtl:right-3.5 rtl:left-auto top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.nearestTab.searchPlacePlaceholder}
            className="w-full pl-10 pr-10 rtl:pr-10 rtl:pl-10 py-2.5 rounded-2xl bg-slate-50 dark:bg-[#17171A] text-xs font-mono font-medium text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-[#26262C] focus:outline-none focus:border-[#FF4A1C]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 rtl:left-3 rtl:right-auto top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 8 Categories Filter Pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORY_TABS.map((cat) => {
            const IconComp = cat.icon;
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all' ? ALL_PLACES.length : CATEGORY_COUNTS[cat.id] || 0;
            return (
              <PressableScale
                key={cat.id}
                onClick={() => {
                  haptics.selection();
                  setSelectedCategory(cat.id);
                }}
                className={`text-xs px-3 py-1.5 rounded-xl flex-shrink-0 font-bold transition-all border flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#FF4A1C] text-white border-transparent shadow-sm shadow-[#FF4A1C]/25'
                    : 'bg-slate-100 dark:bg-[#17171A] text-slate-600 dark:text-[#A1A1AA] hover:bg-slate-200 dark:hover:bg-[#212127] border-transparent dark:border-[#26262C]'
                }`}
              >
                <IconComp className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{isAr ? cat.labelAr : cat.labelEn}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full tabular-nums ${
                    isSelected
                      ? 'bg-white/20 text-white font-semibold'
                      : 'bg-slate-200 dark:bg-[#26262C] text-slate-500 dark:text-[#A1A1AA]'
                  }`}
                >
                  {count}
                </span>
              </PressableScale>
            );
          })}
        </div>
      </div>

      {/* Landmarks Header & Total Results Count */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className={`text-[10px] font-bold flex items-center gap-1.5 ${isAr ? 'font-cairo tracking-normal text-slate-600 dark:text-[#A1A1AA]' : 'font-mono uppercase tracking-[0.14em] text-slate-500 dark:text-[#71717A]'}`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.nearestTab.popularPlacesTitle}</span>
          </h3>
          <span className="text-[11px] font-mono tabular-nums text-slate-500 dark:text-[#A1A1AA]">
            {filteredLandmarks.length} {isAr ? 'مكان متاح' : 'places available'}
          </span>
        </div>

        {/* Empty State */}
        {filteredLandmarks.length === 0 && (
          <div className="bg-white dark:bg-[#111113] rounded-3xl p-8 border border-slate-200 dark:border-[#26262C] text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-100 dark:bg-[#17171A] flex items-center justify-center text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {isAr ? 'لم يتم العثور على أماكن مطابقة' : 'No Matching Places Found'}
            </h4>
            <p className="text-xs font-mono text-slate-500 dark:text-[#A1A1AA]">
              {isAr
                ? 'جرب البحث بكلمات أخرى أو إعادة ضبط فلتر الفئة'
                : 'Try searching with different keywords or reset the category filter'}
            </p>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  haptics.selection();
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#17171A] hover:bg-slate-200 dark:hover:bg-[#26262C] text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
              >
                {isAr ? 'إعادة ضبط البحث' : 'Reset Filters'}
              </button>
            )}
          </div>
        )}

        {/* Places List (Smoothly Paginated to avoid DOM lag) */}
        {displayedLandmarks.map((place, idx) => {
          const nearestStation = STATIONS_MAP.get(place.nearestStationId) ||
            (place.lat && place.lng ? findNearestStations(place.lat, place.lng, 1)[0] : null);

          if (!nearestStation) return null;

          const distanceKm = (place.lat && place.lng && nearestStation.lat && nearestStation.lng)
            ? getDistanceKm(place.lat, place.lng, nearestStation.lat, nearestStation.lng)
            : null;
          const distanceFormatted = distanceKm !== null ? formatDistance(distanceKm, lang) : null;
          const walkMins = place.walkingDistanceMins || (distanceKm !== null ? estimateWalkMinutes(distanceKm) : null);

          const CatIcon = CATEGORY_ICONS[place.category] || Landmark;
          const meta = CATEGORY_METADATA[place.category];
          const badgeColor = meta?.badgeColor || 'bg-slate-100 text-slate-700 dark:bg-[#1D1D22] dark:text-[#A1A1AA] border-slate-200/50 dark:border-[#26262C]';

          return (
            <div
              key={place.id || `place_${idx}`}
              className="bg-white dark:bg-[#111113] rounded-3xl p-4 border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-3"
            >
              {/* Place Header: Category Badge + Dual Name (Arabic & English) */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${badgeColor}`}>
                    <CatIcon className="w-3 h-3 flex-shrink-0" />
                    <span>{isAr ? (meta?.nameAr || place.categoryAr) : (meta?.nameEn || place.categoryEn)}</span>
                  </span>
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {isAr ? place.nameAr : place.nameEn}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-[#A1A1AA] font-mono mt-0.5">
                    {isAr ? place.nameEn : place.nameAr}
                  </p>
                </div>
              </div>

              {/* Nearest Station Card */}
              <div className="bg-slate-50 dark:bg-[#17171A] p-3.5 rounded-2xl border border-slate-200/70 dark:border-[#26262C] space-y-3">
                {/* Header label */}
                <div className="flex items-center gap-1.5 text-slate-400 dark:text-[#71717A]">
                  <Train className="w-3.5 h-3.5 text-[#FF4A1C] flex-shrink-0" />
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                    {isAr ? 'أقرب محطة نقل (مترو / قطار / مونوريل)' : 'NEAREST STATION (METRO / LRT / MONORAIL)'}
                  </span>
                </div>

                {/* Station Info Row */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-[#111113] border border-slate-200/80 dark:border-[#26262C] shadow-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Station Code Badge e.g. CU / SD */}
                    <div className="w-9 h-9 rounded-xl bg-[#FF4A1C]/15 border border-[#FF4A1C]/30 flex items-center justify-center font-mono font-bold text-xs text-[#FF4A1C] flex-shrink-0">
                      {nearestStation.nameEn.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h5 className={`text-sm font-bold text-slate-900 dark:text-[#F4F4F5] truncate ${isAr ? 'font-cairo' : 'font-space'}`}>
                        {isAr ? nearestStation.nameAr : nearestStation.nameEn}
                      </h5>
                      <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                        {nearestStation.lines.map(l => (
                          <span
                            key={l}
                            className={`text-[9px] px-1.5 py-0.2 rounded font-bold text-white uppercase shadow-sm ${isAr ? 'font-cairo' : 'font-mono'}`}
                            style={{ backgroundColor: METRO_LINES[l]?.color || '#E11D48' }}
                          >
                            {isAr ? (METRO_LINES[l]?.shortNameAr || l) : (METRO_LINES[l]?.shortNameEn || l)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* (i) Station Info Button */}
                  <button
                    type="button"
                    onClick={() => {
                      haptics.selection();
                      onSelectStationForModal?.(nearestStation);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#26262C] transition-colors flex-shrink-0"
                    title={isAr ? 'عرض تفاصيل وإحداثيات المحطة' : 'View Station Details & Coordinates'}
                    aria-label="Station info"
                  >
                    <Info className="w-4 h-4 text-slate-400 hover:text-[#FF4A1C]" />
                  </button>
                </div>

                {/* Walking Distance & Time */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 dark:text-[#A1A1AA] px-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  {walkMins && (
                    <span className="tabular-nums font-semibold">
                      ~{walkMins} {t.routePlanner?.mins || (isAr ? 'دقيقة' : 'mins')} {isAr ? 'مشياً' : 'walk'}
                    </span>
                  )}
                  {distanceFormatted && (
                    <>
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                      <span className="tabular-nums font-bold text-slate-700 dark:text-slate-300">
                        {distanceFormatted}
                      </span>
                    </>
                  )}
                </div>

                {/* 1-tap "Plan Route from here" and "Plan Route to here" */}
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/70 dark:border-[#26262C]">
                  <PressableScale
                    onClick={() => {
                      haptics.selection();
                      onPlanRouteFromStation(nearestStation.id);
                    }}
                    className="py-2.5 px-2 rounded-xl bg-white dark:bg-[#212127] hover:bg-slate-100 dark:hover:bg-[#26262C] text-slate-800 dark:text-white text-xs font-space font-bold text-center border border-slate-200 dark:border-[#2E2E36] transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FF4A1C] flex-shrink-0" />
                    <span className="truncate">{t.nearestTab.setAsStartImmediate}</span>
                  </PressableScale>

                  <PressableScale
                    onClick={() => {
                      haptics.success();
                      onPlanRouteToStation(nearestStation.id);
                    }}
                    className="py-2.5 px-2 rounded-xl bg-[#FF4A1C] hover:bg-[#e03d12] text-white text-xs font-space font-bold text-center shadow-sm shadow-[#FF4A1C]/20 transition-all flex items-center justify-center gap-1"
                  >
                    <span className="truncate">{t.nearestTab.planTripToHere}</span>
                    <ArrowIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  </PressableScale>
                </div>
              </div>
            </div>
          );
        })}

        {/* Show More Button (Smooth Pagination) */}
        {visibleCount < filteredLandmarks.length && (
          <div className="pt-2 flex flex-col items-center gap-2">
            <PressableScale
              onClick={() => {
                haptics.selection();
                setVisibleCount(prev => prev + PAGE_SIZE);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white dark:bg-[#111113] hover:bg-slate-50 dark:hover:bg-[#17171A] text-slate-800 dark:text-white font-space font-bold text-xs border border-slate-200 dark:border-[#26262C] shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>{isAr ? `عرض المزيد (+${PAGE_SIZE} مكان)` : `Show More (+${PAGE_SIZE} Places)`}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#1D1D22] text-slate-500 dark:text-slate-400">
                {Math.min(visibleCount, filteredLandmarks.length)} / {filteredLandmarks.length}
              </span>
            </PressableScale>
            <p className="text-[11px] font-mono text-slate-400">
              {isAr
                ? `متبقي ${filteredLandmarks.length - visibleCount} مكان من إجمالي ${filteredLandmarks.length}`
                : `${filteredLandmarks.length - visibleCount} remaining of ${filteredLandmarks.length} total places`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
