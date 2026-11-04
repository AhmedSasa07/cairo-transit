import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  ArrowUpDown,
  Search,
  Clock,
  Ticket,
  MapPin,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Share2,
  Sparkles,
  Info,
  CheckCircle2,
  Train,
  ArrowRight,
  ArrowLeft,
  X,
  Star,
  Bookmark,
  AlertTriangle,
  Layers,
  Compass,
  Navigation,
  Link,
  FileText,
  Eye,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Building2,
  Bus,
  Trophy
} from 'lucide-react';
import { STATIONS, METRO_LINES, POPULAR_TRIPS } from '../data/metroData.js';
import { TOP_EGYPT_PLACES, CATEGORY_METADATA } from '../data/egyptPlaces.js';
import { findMultipleRoutes, getTripDescription } from '../utils/routing.js';
import { searchStationsAndPlaces, parseCoordinates, formatDistance, findNearestStations } from '../utils/geo.js';
import ShareTripModal from './ShareTripModal.jsx';
import MetroStatTile from './MetroStatTile.jsx';
import SaveTripModal from './SaveTripModal.jsx';
import NearMeModeModal from './NearMeModeModal.jsx';
import { haptics } from '../utils/haptics.js';

// Dynamic Fare Themes based on Tariff Tier & Mode
function getPriceTheme(route, lang) {
  if (!route) {
    return {
      border: 'border-amber-400 dark:border-amber-500/80',
      bg: 'bg-amber-500/10 dark:bg-amber-500/15',
      text: 'text-amber-500 dark:text-amber-400',
      badgeBg: 'bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-400/40',
      badgeLabel: lang === 'ar' ? 'صفراء (١-٩ محطات)' : 'Yellow (1-9 Stns)'
    };
  }
  const isAr = lang === 'ar';
  const legs = route.legs || [];

  const hasMonorail = legs.some(l => l.lineInfo?.mode === 'monorail');
  const hasLrt = legs.some(l => l.lineInfo?.mode === 'lrt');
  const hasBrt = legs.some(l => l.lineInfo?.mode === 'brt');
  const hasMetro = legs.some(l => !l.lineInfo?.mode || l.lineInfo?.mode === 'metro');
  const modesCount = (hasMonorail ? 1 : 0) + (hasLrt ? 1 : 0) + (hasBrt ? 1 : 0) + (hasMetro ? 1 : 0);

  // Multi-modal journey
  if (modesCount > 1 || route.fareDetails?.isMultiModal) {
    return {
      border: 'border-indigo-500 dark:border-indigo-500/80',
      bg: 'bg-indigo-500/10 dark:bg-indigo-500/15',
      text: 'text-indigo-600 dark:text-indigo-400',
      badgeBg: 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30',
      badgeLabel: isAr ? 'متعدد الوسائط' : 'Multi-Modal'
    };
  }

  // Pure Monorail (#8B5CF6)
  if (hasMonorail) {
    return {
      border: 'border-[#8B5CF6] dark:border-[#8B5CF6]/80',
      bg: 'bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/15',
      text: 'text-[#8B5CF6] dark:text-[#A78BFA]',
      badgeBg: 'bg-[#8B5CF6]/20 text-[#7C3AED] dark:text-[#C4B5FD] border border-[#8B5CF6]/30',
      badgeLabel: isAr ? 'مونوريل' : 'Monorail'
    };
  }

  // Pure LRT (#06B6D4)
  if (hasLrt) {
    return {
      border: 'border-[#06B6D4] dark:border-[#06B6D4]/80',
      bg: 'bg-[#06B6D4]/10 dark:bg-[#06B6D4]/15',
      text: 'text-[#06B6D4] dark:text-[#22D3EE]',
      badgeBg: 'bg-[#06B6D4]/20 text-[#0891B2] dark:text-[#67E8F9] border border-[#06B6D4]/30',
      badgeLabel: isAr ? 'قطار LRT' : 'LRT Train'
    };
  }

  // Pure BRT (#F59E0B)
  if (hasBrt) {
    return {
      border: 'border-[#F59E0B] dark:border-[#F59E0B]/80',
      bg: 'bg-[#F59E0B]/10 dark:bg-[#F59E0B]/15',
      text: 'text-[#F59E0B] dark:text-[#FBBF24]',
      badgeBg: 'bg-[#F59E0B]/20 text-[#D97706] dark:text-[#FDE68A] border border-[#F59E0B]/30',
      badgeLabel: isAr ? 'ترددي BRT' : 'BRT Bus'
    };
  }

  // Cairo Metro Tiers
  const cost = route.fareDetails?.totalCost ?? route.ticketTier?.price ?? 8;
  const tier = route.ticketTier?.tier || (cost <= 8 ? 1 : cost <= 10 ? 2 : cost <= 15 ? 3 : 4);

  if (cost <= 8 || tier === 1) {
    return {
      border: 'border-amber-400 dark:border-amber-400/80',
      bg: 'bg-amber-500/10 dark:bg-amber-500/15',
      text: 'text-amber-500 dark:text-amber-400',
      badgeBg: 'bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-400/40',
      badgeLabel: isAr ? 'صفراء (١-٩ محطات)' : 'Yellow (1-9 Stns)'
    };
  }

  if (cost <= 10 || tier === 2) {
    return {
      border: 'border-emerald-500 dark:border-emerald-500/80',
      bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
      text: 'text-emerald-500 dark:text-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40',
      badgeLabel: isAr ? 'خضراء (١٠-١٦ محطة)' : 'Green (10-16 Stns)'
    };
  }

  if (cost <= 15 || tier === 3) {
    return {
      border: 'border-rose-500 dark:border-rose-500/80',
      bg: 'bg-rose-500/10 dark:bg-rose-500/15',
      text: 'text-rose-500 dark:text-rose-400',
      badgeBg: 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/40',
      badgeLabel: isAr ? 'وردية (١٧-٢٣ محطة)' : 'Rose (17-23 Stns)'
    };
  }

  // 20 EGP (23+ stations / Tier 4)
  return {
    border: 'border-sky-500 dark:border-sky-500/80',
    bg: 'bg-sky-500/10 dark:bg-sky-500/15',
    text: 'text-sky-500 dark:text-sky-400',
    badgeBg: 'bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-500/40',
    badgeLabel: isAr ? 'زرقاء (+٢٣ محطة)' : 'Blue (23+ Stns)'
  };
}

// Human-understandable transfer labels
function getTransferDisplay(transfersCount, lang) {
  if (lang === 'ar') {
    if (transfersCount === 0) return 'مباشر بدون تحويل';
    if (transfersCount === 1) return 'تحويل قطار 1';
    if (transfersCount === 2) return 'تحويلان';
    return `${transfersCount} تحويلات`;
  }
  if (transfersCount === 0) return 'Direct';
  if (transfersCount === 1) return '1 Transfer';
  if (transfersCount === 2) return '2 Transfers';
  return `${transfersCount} Transfers`;
}

// Plain-language trip description (First item directly under From-To card) - imported from routing.js
export { getTripDescription };

export default function OldRoutes({
  lang,
  t,
  preselectedOrigin,
  preselectedDestination,
  onClearPreselected,
  onSelectStationForModal,
  onOpenPdfMap,
  nearestGpsStation
}) {
  const [fromStationId, setFromStationId] = useState(preselectedOrigin || 'al_shohadaa');
  const [toStationId, setToStationId] = useState(preselectedDestination || 'opera');
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
  const [transitMode, setTransitMode] = useState('metro'); // 'metro' (Single transit mode) vs 'mixed' (Multi-modal)

  // Search picker state
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');

  const [expandedLegs, setExpandedLegs] = useState({});
  const [copied, setCopied] = useState(false);
  const [savedTripToast, setSavedTripToast] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSaveTripModal, setShowSaveTripModal] = useState(false);
  // Saved / Favorite Trips from LocalStorage
  const [savedTrips, setSavedTrips] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('egymetro_saved_trips') || '[]');
    } catch {
      return [];
    }
  });

  // Sync when parent updates preselected
  useEffect(() => {
    if (preselectedOrigin) setFromStationId(preselectedOrigin);
    if (preselectedDestination) setToStationId(preselectedDestination);
  }, [preselectedOrigin, preselectedDestination]);

  // Reset selected route index when origin or destination changes
  useEffect(() => {
    setSelectedRouteIndex(0);
  }, [fromStationId, toStationId, transitMode]);

  // Calculate multiple alternative routes
  const routes = useMemo(() => {
    if (!fromStationId || !toStationId || fromStationId === toStationId) return [];
    return findMultipleRoutes(fromStationId, toStationId, { transitMode });
  }, [fromStationId, toStationId, transitMode]);

  const activeRoute = routes[selectedRouteIndex] || routes[0] || null;

  const priceTheme = useMemo(() => getPriceTheme(activeRoute, lang), [activeRoute, lang]);
  const tripDescription = useMemo(() => getTripDescription(activeRoute, lang), [activeRoute, lang]);
  const transferDisplay = useMemo(() => getTransferDisplay(activeRoute?.transfersCount ?? 0, lang), [activeRoute?.transfersCount, lang]);

  const swapStations = () => {
    const temp = fromStationId;
    setFromStationId(toStationId);
    setToStationId(temp);
  };

  const fromStation = STATIONS.find(s => s.id === fromStationId);
  const toStation = STATIONS.find(s => s.id === toStationId);

  // Check if current active route is saved in favorites
  const isCurrentTripSaved = Boolean(
    fromStationId && toStationId && savedTrips.some(t => t.fromId === fromStationId && t.toId === toStationId)
  );

  // Handle toggling route in favorites: Open modal if not saved, or remove directly if saved
  const handleToggleSaveTrip = () => {
    if (!fromStation || !toStation) return;
    const existsIndex = savedTrips.findIndex(t => t.fromId === fromStationId && t.toId === toStationId);
    if (existsIndex !== -1) {
      const updated = savedTrips.filter((_, idx) => idx !== existsIndex);
      setSavedTrips(updated);
      localStorage.setItem('egymetro_saved_trips', JSON.stringify(updated));
      setSavedTripToast(lang === 'ar' ? 'اتمسح المشوار من المفضلة' : 'Removed from favorites');
      setTimeout(() => setSavedTripToast(null), 2500);
    } else {
      setShowSaveTripModal(true);
    }
  };

  const handleConfirmSaveTrip = (customName) => {
    const updated = [
      ...savedTrips,
      {
        id: `trip_${Date.now()}`,
        name: customName,
        fromId: fromStationId,
        toId: toStationId,
        titleEn: `${fromStation.nameEn} ➔ ${toStation.nameEn}`,
        titleAr: `${fromStation.nameAr} ➔ ${toStation.nameAr}`,
        timestamp: Date.now()
      }
    ];
    setSavedTrips(updated);
    localStorage.setItem('egymetro_saved_trips', JSON.stringify(updated));
    setShowSaveTripModal(false);
    setSavedTripToast(lang === 'ar' ? `تم حفظ "${customName}" في مشاويرك ⭐` : `"${customName}" saved to favorites ⭐`);
    setTimeout(() => setSavedTripToast(null), 2800);
  };

  // Quick GPS detection for Origin station with Mode Selection
  const [isLocatingOrigin, setIsLocatingOrigin] = useState(false);
  const [showNearMeModal, setShowNearMeModal] = useState(false);
  const [userGpsCoords, setUserGpsCoords] = useState(null);

  const handleQuickGpsOrigin = () => {
    haptics.light();
    setShowNearMeModal(true);
  };

  const handleSelectNearMeMode = (modeKey) => {
    setShowNearMeModal(false);
    haptics.light();

    if (!('geolocation' in navigator)) {
      setSavedTripToast(lang === 'ar' ? 'الـ GPS مش مدعوم على جهازك' : 'GPS not supported on device');
      setTimeout(() => setSavedTripToast(null), 3000);
      return;
    }

    const applyNearestForCoords = (latitude, longitude) => {
      // 1. Filter stations by mode
      let candidateStations = STATIONS;
      if (modeKey === 'metro') {
        candidateStations = STATIONS.filter(s => s.lines.some(l => METRO_LINES[l]?.mode === 'metro'));
      } else if (modeKey === 'monorail') {
        candidateStations = STATIONS.filter(s => s.lines.some(l => METRO_LINES[l]?.mode === 'monorail'));
      } else if (modeKey === 'lrt') {
        candidateStations = STATIONS.filter(s => s.lines.some(l => METRO_LINES[l]?.mode === 'lrt'));
      } else if (modeKey === 'brt') {
        const opBrt = STATIONS.filter(s => s.lines.some(l => METRO_LINES[l]?.mode === 'brt') && !s.underConstruction);
        candidateStations = opBrt.length > 0 ? opBrt : STATIONS.filter(s => s.lines.some(l => METRO_LINES[l]?.mode === 'brt'));
      }

      // 2. Calculate nearest station in that specific network using findNearestStations
      const nearest = findNearestStations(latitude, longitude, 1, candidateStations);
      if (!nearest || nearest.length === 0) {
        setSavedTripToast(
          lang === 'ar'
            ? 'لم يتم العثور على محطات قريبة لهذه الوسيلة'
            : 'No nearby stations found for this mode'
        );
        setTimeout(() => setSavedTripToast(null), 3500);
        return;
      }

      const foundStation = nearest[0];
      haptics.success();
      setFromStationId(foundStation.id);

      // Adapt transit mode if monorail, lrt, or brt was selected so routes display properly
      if (modeKey !== 'metro' && modeKey !== 'all') {
        setTransitMode('mixed');
      }

      // Display friendly toast (e.g. "تم تحديد أقرب محطة مترو: الشهداء (تبعد 400م)")
      const modeNamesAr = {
        metro: 'أقرب محطة مترو',
        monorail: 'أقرب محطة مونوريل',
        lrt: 'أقرب محطة قطار خفيف LRT',
        brt: 'أقرب محطة أتوبيس ترددي BRT',
        all: 'أقرب محطة'
      };
      const modeNamesEn = {
        metro: 'Nearest Metro station',
        monorail: 'Nearest Monorail station',
        lrt: 'Nearest LRT station',
        brt: 'Nearest BRT station',
        all: 'Nearest station'
      };

      const modeTitle = lang === 'ar' ? (modeNamesAr[modeKey] || 'أقرب محطة') : (modeNamesEn[modeKey] || 'Nearest station');
      const stName = lang === 'ar' ? foundStation.nameAr : foundStation.nameEn;
      const distStr = formatDistance(foundStation.distanceKm, lang);

      const toastMessage = lang === 'ar'
        ? `📍 تم تحديد ${modeTitle}: ${stName} (تبعد ${distStr})`
        : `📍 ${modeTitle} set: ${stName} (${distStr} away)`;

      setSavedTripToast(toastMessage);
      setTimeout(() => setSavedTripToast(null), 4000);
    };

    // If we have cached coords from the last 2 minutes, use them directly
    if (userGpsCoords && (Date.now() - userGpsCoords.timestamp < 120000)) {
      applyNearestForCoords(userGpsCoords.lat, userGpsCoords.lng);
      return;
    }

    setIsLocatingOrigin(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocatingOrigin(false);
        const { latitude, longitude } = pos.coords;
        setUserGpsCoords({ lat: latitude, lng: longitude, timestamp: Date.now() });
        applyNearestForCoords(latitude, longitude);
      },
      (err) => {
        setIsLocatingOrigin(false);
        console.warn('GPS error in RoutePlanner:', err);
        if (userGpsCoords) {
          applyNearestForCoords(userGpsCoords.lat, userGpsCoords.lng);
          return;
        }
        setSavedTripToast(
          lang === 'ar'
            ? 'تعذر تحديد موقعك، يرجى تفعيل إذن الـ GPS'
            : 'Could not get location. Check GPS permissions.'
        );
        setTimeout(() => setSavedTripToast(null), 3500);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const handleRemoveSavedTrip = (index, e) => {
    e.stopPropagation();
    const updated = savedTrips.filter((_, idx) => idx !== index);
    setSavedTrips(updated);
    localStorage.setItem('egymetro_saved_trips', JSON.stringify(updated));
  };

  const handleShare = () => {
    if (!activeRoute) return;
    setShowShareModal(true);
  };

  const toggleLegExpand = (legIndex) => {
    setExpandedLegs(prev => ({
      ...prev,
      [legIndex]: !prev[legIndex]
    }));
  };

  return (
    <div className="space-y-4 pb-36 sm:pb-44 pb-safe">
      {/* Origin & Destination Inputs Card */}
      <div className="bg-white dark:bg-[#111113] rounded-3xl p-4 sm:p-5 shadow-sm border border-slate-200 dark:border-[#26262C] transition-colors space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-space font-bold text-slate-900 dark:text-[#F4F4F5] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 dark:bg-[#FF4A1C]" />
            <span>{t.routePlanner.title}</span>
          </h2>

          <div className="flex items-center gap-1.5">
            {/* Quick GPS Locator Button */}
            <button
              type="button"
              onClick={handleQuickGpsOrigin}
              disabled={isLocatingOrigin}
              className="py-1 px-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 transition-all flex items-center gap-1.5 text-xs font-bold active:scale-95 shadow-xs"
              title={lang === 'ar' ? 'تحديد أقرب محطة لموقعي بالـ GPS' : 'Detect Nearest Station to Me via GPS'}
            >
              <Navigation className={`w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 ${isLocatingOrigin ? 'animate-spin' : ''}`} />
              <span className={lang === 'ar' ? 'font-cairo' : 'font-mono'}>
                {isLocatingOrigin ? (lang === 'ar' ? 'جاري التحديد...' : 'Locating...') : (lang === 'ar' ? 'أقرب محطة ليا' : 'Near Me')}
              </span>
            </button>

            {activeRoute && (
              <button
                type="button"
                onClick={() => {
                  haptics.select();
                  handleToggleSaveTrip();
                }}
                className={`p-1.5 rounded-xl border transition-all ${
                  isCurrentTripSaved
                    ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-700 text-amber-500'
                    : 'bg-slate-50 dark:bg-[#17171A] border-slate-200 dark:border-[#26262C] text-slate-400 hover:text-amber-500'
                }`}
                title={t.routePlanner.saveTripTooltip}
              >
                <Star className={`w-4 h-4 ${isCurrentTripSaved ? 'fill-amber-400 text-amber-500' : 'fill-none'}`} />
              </button>
            )}

            {activeRoute && (
              <button
                type="button"
                onClick={() => {
                  haptics.light();
                  handleShare();
                }}
                className="p-1.5 rounded-xl text-rose-600 dark:text-[#FF4A1C] hover:bg-rose-50 dark:hover:bg-[#17171A] border border-slate-200 dark:border-[#26262C] transition-colors"
                title={t.routePlanner.shareRoute}
              >
                <Share2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {savedTripToast && (
          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-[#2DD881] text-xs font-mono font-bold text-center animate-in fade-in">
            {savedTripToast}
          </div>
        )}

        {/* 2x2 Transit Mode Selection Grid (from reference app) */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: 'metro', icon: '🚇', labelAr: 'مترو', labelEn: 'Metro', mode: 'metro' },
            { id: 'monorail', icon: '🚝', labelAr: 'مونوريل', labelEn: 'Monorail', mode: 'mixed' },
            { id: 'lrt', icon: '🚋', labelAr: 'قطار LRT', labelEn: 'LRT Train', mode: 'mixed' },
            { id: 'brt', icon: '🚌', labelAr: 'ترددي BRT', labelEn: 'BRT Bus', mode: 'mixed' },
          ].map((item) => {
            const isSelected = transitMode === item.mode && (item.id === 'metro' ? transitMode === 'metro' : transitMode === 'mixed');
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  haptics.select();
                  setTransitMode(item.mode);
                }}
                className={`py-2.5 px-3 rounded-2xl border-2 font-bold text-xs sm:text-sm flex items-center justify-between transition-all duration-150 active:scale-95 ${
                  (item.id === 'metro' && transitMode === 'metro') || (item.id !== 'metro' && transitMode === 'mixed')
                    ? 'bg-blue-600 dark:bg-blue-600/90 border-blue-500 text-white shadow-md shadow-blue-500/25'
                    : 'bg-white dark:bg-[#18181D] border-slate-200 dark:border-[#26262C] text-slate-700 dark:text-[#A1A1AA] hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base">{item.icon}</span>
                  <span className={`truncate ${lang === 'ar' ? 'font-cairo' : 'font-space'}`}>
                    {lang === 'ar' ? item.labelAr : item.labelEn}
                  </span>
                </div>
                {((item.id === 'metro' && transitMode === 'metro') || (item.id !== 'metro' && transitMode === 'mixed')) && (
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Auto-Switched Notice if station is outside pure metro */}
        {activeRoute?.autoSwitched && (
          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2 text-xs font-mono font-bold text-amber-700 dark:text-[#FFC24B]">
            <span>ℹ️</span>
            <span>
              {lang === 'ar'
                ? 'المحطة المحددة تقع على المونوريل/LRT/BRT - تم تفعيل شبكة الوسائط المتعددة تلقائياً'
                : 'Selected station is on Monorail / LRT / BRT - Multi-modal network enabled automatically'}
            </span>
          </div>
        )}

        {/* Input Fields with Swap Button */}
        <div className="relative space-y-2">
          {/* FROM Station Button */}
          <div className="relative">
            <label className={`block text-[10px] uppercase text-slate-400 dark:text-[#5B5B63] mb-1 px-1 ${lang === 'ar' ? 'font-cairo tracking-normal' : 'font-mono tracking-wider'}`}>
              {t.routePlanner.fromLabel}
            </label>
            <button
              onClick={() => {
                haptics.light();
                setSearchFrom('');
                setShowFromPicker(true);
              }}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-[#17171A] border border-slate-200 dark:border-[#26262C] hover:border-slate-300 dark:hover:border-[#3D3D45] transition-all text-start active:scale-[0.99]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs text-emerald-600 dark:text-[#2DD881] flex-shrink-0">
                  {fromStation ? fromStation.nameEn.substring(0, 2).toUpperCase() : 'IN'}
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-bold text-slate-900 dark:text-[#F4F4F5] truncate ${lang === 'ar' ? 'font-cairo' : 'font-space'}`}>
                    {fromStation ? (lang === 'ar' ? fromStation.nameAr : fromStation.nameEn) : t.routePlanner.selectStation}
                  </p>
                  {fromStation && (
                    <div className="flex items-center gap-1 mt-0.5">
                      {fromStation.lines.map(l => (
                        <span
                          key={l}
                          className={`text-[9px] px-1.5 py-0.2 rounded font-bold text-white uppercase ${lang === 'ar' ? 'font-cairo' : 'font-mono'}`}
                          style={{ backgroundColor: METRO_LINES[l]?.color || '#E11D48' }}
                        >
                          {lang === 'ar' ? METRO_LINES[l]?.shortNameAr : METRO_LINES[l]?.shortNameEn}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {fromStation && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      haptics.selection();
                      onSelectStationForModal?.(fromStation);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-[#26262C] transition-colors"
                    title={lang === 'ar' ? 'عرض تفاصيل وإحداثيات المحطة' : 'View Station Details & Coordinates'}
                    aria-label="Station info"
                  >
                    <Info className="w-4 h-4 text-slate-400 hover:text-emerald-500" />
                  </button>
                )}
                <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
              </div>
            </button>
          </div>

          {/* Swap Button (Reverses Trip) */}
          <div className="absolute right-4 rtl:left-4 rtl:right-auto top-[45%] -translate-y-1/2 z-10">
            <button
              onClick={() => {
                haptics.commit();
                swapStations();
              }}
              className="w-10 h-10 rounded-full bg-white dark:bg-[#212127] border-2 border-slate-200 dark:border-[#26262C] shadow-md flex items-center justify-center text-rose-600 dark:text-[#FF4A1C] hover:scale-105 active:scale-95 transition-all"
              title={t.routePlanner.swapStations}
              aria-label={t.routePlanner.swapStations}
            >
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>

          {/* TO Station Button */}
          <div className="relative">
            <label className={`block text-[10px] uppercase text-slate-400 dark:text-[#5B5B63] mb-1 px-1 ${lang === 'ar' ? 'font-cairo tracking-normal' : 'font-mono tracking-wider'}`}>
              {t.routePlanner.toLabel}
            </label>
            <button
              onClick={() => {
                haptics.light();
                setSearchTo('');
                setShowToPicker(true);
              }}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-[#17171A] border border-slate-200 dark:border-[#26262C] hover:border-slate-300 dark:hover:border-[#3D3D45] transition-all text-start active:scale-[0.99]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center font-mono font-bold text-xs text-rose-600 dark:text-[#FF4A1C] flex-shrink-0">
                  {toStation ? toStation.nameEn.substring(0, 2).toUpperCase() : 'OUT'}
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-bold text-slate-900 dark:text-[#F4F4F5] truncate ${lang === 'ar' ? 'font-cairo' : 'font-space'}`}>
                    {toStation ? (lang === 'ar' ? toStation.nameAr : toStation.nameEn) : t.routePlanner.selectStation}
                  </p>
                  {toStation && (
                    <div className="flex items-center gap-1 mt-0.5">
                      {toStation.lines.map(l => (
                        <span
                          key={l}
                          className={`text-[9px] px-1.5 py-0.2 rounded font-bold text-white uppercase ${lang === 'ar' ? 'font-cairo' : 'font-mono'}`}
                          style={{ backgroundColor: METRO_LINES[l]?.color || '#E11D48' }}
                        >
                          {lang === 'ar' ? METRO_LINES[l]?.shortNameAr : METRO_LINES[l]?.shortNameEn}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {toStation && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      haptics.selection();
                      onSelectStationForModal?.(toStation);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-[#26262C] transition-colors"
                    title={lang === 'ar' ? 'عرض تفاصيل وإحداثيات المحطة' : 'View Station Details & Coordinates'}
                    aria-label="Station info"
                  >
                    <Info className="w-4 h-4 text-slate-400 hover:text-rose-500" />
                  </button>
                )}
                <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
              </div>
            </button>
          </div>
        </div>

        {/* Saved Trips (Favorites) */}
        {savedTrips.length > 0 && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1 px-0.5">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{t.routePlanner.savedRoutes}</span>
            </p>
            <ScrollablePillsRow lang={lang} className="gap-1.5 -mx-1 px-1 py-1">
              {savedTrips.map((trip, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    haptics.select();
                    setFromStationId(trip.fromId);
                    setToStationId(trip.toId);
                  }}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200 font-bold flex items-center gap-2 cursor-pointer whitespace-nowrap active:scale-95"
                >
                  <span>{trip.name || (lang === 'ar' ? trip.titleAr : trip.titleEn)}</span>
                  <button
                    type="button"
                    onClick={(e) => handleRemoveSavedTrip(idx, e)}
                    className="p-0.5 text-amber-600 hover:text-amber-900 dark:hover:text-amber-100 rounded-md"
                    title={lang === 'ar' ? 'إزالة' : 'Remove'}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <div className="w-3 flex-shrink-0" aria-hidden="true" />
            </ScrollablePillsRow>
          </div>
        )}
      </div>

      {/* Same Station Alert */}
      {fromStationId === toStationId && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-center gap-3 text-amber-800 dark:text-amber-300">
          <Info className="w-5 h-5 flex-shrink-0" />
          <p className="text-xs font-semibold">{t.routePlanner.sameStationAlert}</p>
        </div>
      )}

      {/* 1. Trip Description (Plain-language overview - First thing directly under From-To card) */}
      {activeRoute && fromStationId !== toStationId && tripDescription && (
        <div className="bg-white dark:bg-[#111113] p-4 rounded-2xl border border-slate-200/80 dark:border-[#26262C] shadow-sm space-y-1.5 transition-colors">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>{lang === 'ar' ? 'تفاصيل مشوارك:' : 'Trip Description:'}</span>
            </p>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#1C1C21] text-slate-600 dark:text-slate-300">
              {lang === 'ar' ? 'ملخص الرحلة' : 'Quick Summary'}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed font-cairo">
            {tripDescription}
          </p>
        </div>
      )}

      {/* 2. Alternative Routes Selection Tabs */}
      {routes.length > 1 && (
        <div className="space-y-1.5">
          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 px-1">
            {lang === 'ar' ? 'خيارات المسارات البديلة المتوفرة:' : 'Available Route Options:'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {routes.map((r, idx) => {
              const isSelected = selectedRouteIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedRouteIndex(idx)}
                  className={`p-3 rounded-2xl border text-start transition-all ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-rose-500 shadow-md ring-2 ring-rose-500/20'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 opacity-75 hover:opacity-100'
                  }`}
                >
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                    idx === 0
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      : 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300'
                  }`}>
                    {lang === 'ar' ? r.labelAr : r.labelEn}
                  </span>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-sm font-black text-slate-900 dark:text-white">
                      {r.stationCount} {t.routePlanner.stationsPassed}
                    </span>
                    <span className="text-xs font-extrabold text-rose-600 dark:text-rose-400">
                      {r.fareDetails.totalCost} {lang === 'ar' ? 'ج.م' : 'EGP'}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                    {r.transfersCount === 0 ? t.routePlanner.noTransfer : `${r.transfersCount} ${t.routePlanner.transfers}`} • ~{r.travelTimeMins} {t.routePlanner.mins}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Active Route Details */}
      {activeRoute && fromStationId !== toStationId && (
        <div className="space-y-4">
          {/* 4 Summary Stat Cards: Time, Stations, Transfers, Dynamic Price */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {/* 1. Time */}
            <MetroStatTile
              label={lang === 'ar' ? 'الوقت' : 'TIME'}
              value={activeRoute.travelTimeMins}
              unit={lang === 'ar' ? 'دقيقة' : 'MIN'}
              tone="accent"
            />

            {/* 2. Stations */}
            <MetroStatTile
              label={lang === 'ar' ? 'المحطات' : 'STATIONS'}
              value={activeRoute.stationCount}
              unit={lang === 'ar' ? 'محطة' : 'STN'}
              tone="default"
            />

            {/* 3. Transfers (Human-understandable terminology instead of technical XFER) */}
            <MetroStatTile
              label={lang === 'ar' ? 'التحويلات' : 'TRANSFERS'}
              value={transferDisplay}
              unit={null}
              tone={activeRoute.transfersCount === 0 ? 'success' : 'amber'}
            />

            {/* 4. Dynamic Ticket Price Card */}
            <div
              className={`flex flex-col justify-between gap-1 p-2 sm:p-2.5 rounded-2xl border-2 transition-all relative overflow-hidden min-h-[76px] sm:min-h-[82px] ${priceTheme.border} ${priceTheme.bg}`}
            >
              {/* Eyebrow Label with Ticket Icon */}
              <div className="flex items-center justify-between gap-1">
                <span
                  className={`text-[9.5px] sm:text-[10px] font-bold text-slate-600 dark:text-[#97979E] truncate leading-tight ${
                    lang === 'ar' ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.8px]'
                  }`}
                >
                  {lang === 'ar' ? 'سعر التذكرة' : 'PRICE'}
                </span>
                <Ticket className={`w-3.5 h-3.5 ${priceTheme.text} flex-shrink-0 opacity-80`} />
              </div>

              {/* Price Value + Currency Unit */}
              <div className="flex items-baseline gap-1 my-auto">
                <span className={`text-lg sm:text-2xl font-black font-space rtl:font-cairo tracking-tight rtl:tracking-normal tabular-nums leading-none ${priceTheme.text}`}>
                  {activeRoute.fareDetails.totalCost}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold font-cairo text-slate-600 dark:text-[#97979E] flex-shrink-0 self-baseline whitespace-nowrap">
                  {lang === 'ar' ? 'جنيه' : 'EGP'}
                </span>
              </div>

              {/* Dynamic Ticket Badge */}
              <div className="mt-0.5 overflow-hidden">
                <span className={`inline-block truncate max-w-full text-[8.5px] sm:text-[9.5px] font-bold px-1.5 py-0.5 rounded-md leading-none shadow-2xs ${priceTheme.badgeBg}`}>
                  {priceTheme.badgeLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Stations Per Line Breakdown (Addresses Review #461) */}
          {activeRoute.lineBreakdown.length > 1 && (
            <div className="bg-slate-100 dark:bg-[#17171A] p-3 rounded-2xl border border-slate-200/60 dark:border-[#26262C] flex items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-[#97979E]">
              <span className="text-slate-500 dark:text-[#5B5B63]">{t.routePlanner.lineBreakdownTitle}:</span>
              <div className="flex items-center gap-2">
                {activeRoute.lineBreakdown.map((b, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: b.lineInfo.color }}
                    />
                    <span>{b.stationCount} {lang === 'ar' ? b.lineInfo.shortNameAr : b.lineInfo.shortNameEn}</span>
                    {idx < activeRoute.lineBreakdown.length - 1 && <span className="text-slate-400">+</span>}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Line 3 Branching Alert (Kit Kat Fork Guidance - Addresses Reviews #156, #420) */}
          {activeRoute.kitKatAlert && (
            <div className="bg-amber-500/10 border border-amber-500/25 rounded-2xl p-3.5 text-amber-900 dark:text-[#FFC24B] space-y-1">
              <div className="flex items-center gap-2 font-space font-bold text-xs">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-[#FFC24B] flex-shrink-0" />
                <span>{t.routePlanner.kitKatAlertTitle}</span>
              </div>
              <p className="text-xs font-medium leading-relaxed opacity-90">
                {lang === 'ar' ? activeRoute.kitKatAlert.textAr : activeRoute.kitKatAlert.textEn}
              </p>
            </div>
          )}

          {/* Step-by-Step Navigation Guide (Optimized for RTL & No Badge Collision) */}
          <div className="bg-white dark:bg-[#111113] rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-[#26262C] shadow-sm transition-colors space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-[#212127]">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>{t.routePlanner.stepByStep}</span>
              </h3>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {activeRoute.transfersCount === 0 ? t.routePlanner.noTransfer : `${activeRoute.transfersCount} ${t.routePlanner.transfers}`}
              </span>
            </div>

            <div className="space-y-4">
              {activeRoute.legs.map((leg, legIdx) => {
                const isExpanded = !!expandedLegs[legIdx];
                const legStationCount = leg.stations.length - 1;

                return (
                  <div key={legIdx} className="relative pl-6 rtl:pr-6 rtl:pl-0 border-l-2 rtl:border-r-2 rtl:border-l-0 border-slate-200 dark:border-slate-700/80 pb-4 last:border-transparent last:pb-0">
                    {/* Circle Node on Timeline */}
                    <span
                      className="absolute -left-[9px] rtl:-right-[9px] rtl:left-auto top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-[#111113] shadow-sm"
                      style={{ backgroundColor: leg.lineInfo.color }}
                    />

                    {/* Leg Header: Board train & direction (Protected against RTL badge collisions) */}
                    <div className="space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-2">
                        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                          {/* Line Badge */}
                          <span
                            className="px-2.5 py-1 rounded-xl text-xs font-black text-white flex items-center gap-1.5 shadow-xs flex-shrink-0"
                            style={{ backgroundColor: leg.lineInfo.color }}
                          >
                            <span>{lang === 'ar' ? leg.lineInfo.shortNameAr : leg.lineInfo.shortNameEn}</span>
                          </span>

                          {/* Direction Indicator with distinct badge boundary */}
                          <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300 flex-wrap">
                            <span className="text-slate-500 dark:text-slate-400 font-medium text-[11px] flex-shrink-0">
                              {t.routePlanner.towardsDirection}
                            </span>
                            <span className="text-slate-900 dark:text-white font-extrabold bg-slate-100 dark:bg-[#1D1D22] px-2 py-0.5 rounded-lg border border-slate-200/60 dark:border-[#26262C] shadow-2xs">
                              {lang === 'ar'
                                ? (leg.direction?.nameAr || leg.directionAr || leg.toStation?.nameAr || '')
                                : (leg.direction?.nameEn || leg.directionEn || leg.toStation?.nameEn || '')}
                            </span>
                          </div>
                        </div>

                        {/* Duration estimate */}
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#1D1D22] px-2 py-0.5 rounded-md flex-shrink-0 ml-auto rtl:mr-auto rtl:ml-0">
                          ~{Math.round(leg.durationMins)} {lang === 'ar' ? 'دقيقة' : t.routePlanner.mins}
                        </span>
                      </div>

                      {/* Boarding Station Card */}
                      <div className="bg-slate-50 dark:bg-[#17171A] p-3 sm:p-3.5 rounded-2xl border border-slate-200/70 dark:border-[#26262C] space-y-2">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                              {legIdx === 0 ? t.routePlanner.boardTrain : t.routePlanner.changeAt}
                            </p>
                            <p className="text-sm font-extrabold text-slate-900 dark:text-[#F4F4F5] truncate">
                              {lang === 'ar' ? leg.fromStation.nameAr : leg.fromStation.nameEn}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5 flex-wrap flex-shrink-0">
                            {leg.fromStation.lines && leg.fromStation.lines.length > 1 && (
                              <div className="flex items-center gap-1">
                                {leg.fromStation.lines.map((l) => (
                                  <span
                                    key={l}
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: METRO_LINES[l]?.color || '#E11D48' }}
                                    title={lang === 'ar' ? METRO_LINES[l]?.shortNameAr : METRO_LINES[l]?.shortNameEn}
                                  />
                                ))}
                              </div>
                            )}
                            {leg.fromStation.isInterchange && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-black">
                                {lang === 'ar' ? 'محطة تبادلية' : 'Transfer Hub'}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Collapsible Intermediate Stations list with Teal Toggle */}
                        <div className="pt-2 border-t border-slate-200/50 dark:border-[#26262C]">
                          <button
                            type="button"
                            onClick={() => toggleLegExpand(legIdx)}
                            className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 text-xs font-bold transition-colors py-1"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            <span>
                              {isExpanded
                                ? (lang === 'ar' ? 'إخفاء المحطات المتوسطة' : 'Hide intermediate stations')
                                : (lang === 'ar' ? `عرض المحطات (${leg.stations.slice(1, -1).length})` : `Show stations (${leg.stations.slice(1, -1).length})`)}
                            </span>
                          </button>

                          {isExpanded && (
                            <ul className="mt-2 space-y-1.5 pl-2 rtl:pr-2 rtl:pl-0 border-l-2 rtl:border-r-2 rtl:border-l-0 border-teal-500/30 text-xs animate-in fade-in">
                              {leg.stations.slice(1, -1).map((st) => (
                                <li
                                  key={st.id}
                                  onClick={() => onSelectStationForModal?.(st)}
                                  className="text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer flex items-center justify-between py-1 px-1.5 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-colors"
                                >
                                  <span>{lang === 'ar' ? st.nameAr : st.nameEn}</span>
                                  <div className="flex items-center gap-1 flex-shrink-0">
                                    {st.lines && st.lines.length > 1 && (
                                      <div className="flex items-center gap-0.5">
                                        {st.lines.map(l => (
                                          <span
                                            key={l}
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{ backgroundColor: METRO_LINES[l]?.color }}
                                          />
                                        ))}
                                      </div>
                                    )}
                                    {st.isInterchange && (
                                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                                        {lang === 'ar' ? 'تبادلية' : 'Transfer'}
                                      </span>
                                    )}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Next step: Teal Interchange Transfer Card (from reference app) or Destination Arrival */}
                    {legIdx < activeRoute.legs.length - 1 ? (
                      <div className="mt-3 flex items-center justify-between text-xs font-bold bg-teal-500/15 dark:bg-teal-500/10 border border-teal-500/30 dark:border-teal-500/25 px-4 py-3 rounded-2xl shadow-sm">
                        <div className="space-y-0.5">
                          <p className="text-[10px] uppercase font-extrabold text-teal-600 dark:text-teal-400 tracking-wider">
                            {lang === 'ar' ? 'حوّل هنا' : 'Change here'}
                          </p>
                          <p className="text-sm font-black text-slate-900 dark:text-white">
                            {lang === 'ar' ? leg.toStation.nameAr : leg.toStation.nameEn}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                            {t.routePlanner.changeToLine} <span className="font-extrabold text-teal-700 dark:text-teal-300">{lang === 'ar' ? activeRoute.legs[legIdx + 1].lineInfo.shortNameAr : activeRoute.legs[legIdx + 1].lineInfo.shortNameEn}</span>
                          </p>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </div>
                    ) : (
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-2.5 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                        <div>
                          <span>
                            {t.routePlanner.alightAt}: <b className="font-black underline">{lang === 'ar' ? leg.toStation.nameAr : leg.toStation.nameEn}</b>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* From Station Search Picker Modal */}
      {showFromPicker && (
        <StationSearchPickerModal
          lang={lang}
          title={t.routePlanner.fromLabel}
          searchQuery={searchFrom}
          setSearchQuery={setSearchFrom}
          selectedId={fromStationId}
          onSelect={(st) => {
            setFromStationId(st.id);
            setShowFromPicker(false);
          }}
          onClose={() => setShowFromPicker(false)}
          nearestGpsStation={nearestGpsStation}
          t={t}
        />
      )}

      {/* To Station Search Picker Modal */}
      {showToPicker && (
        <StationSearchPickerModal
          lang={lang}
          title={t.routePlanner.toLabel}
          searchQuery={searchTo}
          setSearchQuery={setSearchTo}
          selectedId={toStationId}
          onSelect={(st) => {
            setToStationId(st.id);
            setShowToPicker(false);
          }}
          onClose={() => setShowToPicker(false)}
          nearestGpsStation={nearestGpsStation}
          t={t}
        />
      )}

      {/* Share Trip Directions Modal */}
      {showShareModal && activeRoute && (
        <ShareTripModal
          route={activeRoute}
          lang={lang}
          t={t}
          onClose={() => setShowShareModal(false)}
        />
      )}

      {/* Save Trip Naming Modal */}
      {showSaveTripModal && fromStation && toStation && (
        <SaveTripModal
          lang={lang}
          fromStation={fromStation}
          toStation={toStation}
          onSave={handleConfirmSaveTrip}
          onClose={() => setShowSaveTripModal(false)}
        />
      )}

      {/* Near Me Transit Mode Selection Modal */}
      {showNearMeModal && (
        <NearMeModeModal
          lang={lang}
          isOpen={showNearMeModal}
          onClose={() => setShowNearMeModal(false)}
          onSelectMode={handleSelectNearMeMode}
          isLocating={isLocatingOrigin}
        />
      )}
    </div>
  );
}

// Draggable, swipeable pills scroller with desktop mouse drag & mobile touch swipe support
function ScrollablePillsRow({ children, className = '', lang = 'en' }) {
  const rowRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [canScrollStart, setCanScrollStart] = useState(false);
  const [canScrollEnd, setCanScrollEnd] = useState(false);
  const hasDraggedRef = useRef(false);

  const isRtl = lang === 'ar';

  const checkScroll = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 2) {
      setCanScrollStart(false);
      setCanScrollEnd(false);
      return;
    }

    if (!isRtl) {
      setCanScrollStart(scrollLeft > 4);
      setCanScrollEnd(scrollLeft < maxScroll - 4);
    } else {
      // In RTL, starting position is at the right edge.
      // Standard modern browsers have scrollLeft <= 0 down to -maxScroll
      if (scrollLeft <= 0) {
        const abs = Math.abs(scrollLeft);
        setCanScrollStart(abs > 4);
        setCanScrollEnd(abs < maxScroll - 4);
      } else {
        // Positive scrollLeft in legacy WebKit
        setCanScrollStart(scrollLeft < maxScroll - 4);
        setCanScrollEnd(scrollLeft > 4);
      }
    }
  }, [isRtl]);

  useEffect(() => {
    checkScroll();
    const el = rowRef.current;
    if (!el) return;

    const handleScroll = () => checkScroll();
    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    const timer = setTimeout(checkScroll, 120);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timer);
    };
  }, [children, checkScroll]);

  // Desktop Mouse Drag Handling
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only primary mouse button
    if (!rowRef.current) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    setStartX(e.pageX);
    setScrollLeftState(rowRef.current.scrollLeft);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      if (!rowRef.current) return;
      const walk = e.pageX - startX;
      if (Math.abs(walk) > 4) {
        hasDraggedRef.current = true;
        rowRef.current.scrollLeft = scrollLeftState - walk * 1.3;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 60);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX, scrollLeftState]);

  const handleClickCapture = (e) => {
    if (hasDraggedRef.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const handleWheel = (e) => {
    const el = rowRef.current;
    if (!el) return;
    if (e.deltaY !== 0 && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += isRtl ? -e.deltaY : e.deltaY;
    }
  };

  const scrollByDelta = (direction) => {
    const el = rowRef.current;
    if (!el) return;
    const amount = 160;
    let delta = direction === 'forward' ? amount : -amount;
    if (isRtl) {
      delta = -delta;
    }
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className="relative group/scroller flex items-center w-full min-w-0">
      {/* Desktop Backward Scroll Button */}
      {canScrollStart && (
        <button
          type="button"
          onClick={() => scrollByDelta('backward')}
          className="hidden sm:flex absolute start-0 z-20 w-6 h-6 rounded-full bg-white/95 dark:bg-[#17171A]/95 text-slate-700 dark:text-slate-200 shadow-md border border-slate-200 dark:border-[#26262C] items-center justify-center -translate-x-1 rtl:translate-x-1 apple-press active:scale-[0.94] transition-[background-color,border-color] duration-150"
          aria-label="Scroll Back"
        >
          {isRtl ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
        </button>
      )}

      {/* Start Fade Cue */}
      {canScrollStart && (
        <div
          className={`pointer-events-none absolute start-0 top-0 bottom-0 w-6 z-10 ${
            isRtl
              ? 'bg-gradient-to-l from-white dark:from-[#111113] to-transparent'
              : 'bg-gradient-to-r from-white dark:from-[#111113] to-transparent'
          }`}
        />
      )}

      {/* Horizontal Scroll Track */}
      <div
        ref={rowRef}
        onMouseDown={handleMouseDown}
        onClickCapture={handleClickCapture}
        onWheel={handleWheel}
        className={`flex flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar touch-scroll-x cursor-grab active:cursor-grabbing select-none px-1 py-1 w-full min-w-0 pe-4 ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x pan-y',
          overscrollBehaviorX: 'contain'
        }}
      >
        {children}
      </div>

      {/* End Fade Cue with subtle animated chevron hint */}
      {canScrollEnd && (
        <div
          className={`pointer-events-none absolute end-0 top-0 bottom-0 w-8 z-10 flex items-center justify-end rtl:justify-start pe-0.5 rtl:ps-0.5 ${
            isRtl
              ? 'bg-gradient-to-r from-white dark:from-[#111113] to-transparent'
              : 'bg-gradient-to-l from-white dark:from-[#111113] to-transparent'
          }`}
        >
          <span className="text-slate-400/80 dark:text-slate-500/80 animate-pulse">
            {isRtl ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </span>
        </div>
      )}

      {/* Desktop Forward Scroll Button */}
      {canScrollEnd && (
        <button
          type="button"
          onClick={() => scrollByDelta('forward')}
          className="hidden sm:flex absolute end-0 z-20 w-6 h-6 rounded-full bg-white/95 dark:bg-[#17171A]/95 text-slate-700 dark:text-slate-200 shadow-md border border-slate-200 dark:border-[#26262C] items-center justify-center translate-x-1 rtl:-translate-x-1 apple-press active:scale-[0.94] transition-[background-color,border-color] duration-150"
          aria-label="Scroll Forward"
        >
          {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
}

// Helper to get category icon component for places
function getPlaceCategoryIcon(category) {
  switch (category) {
    case 'university': return GraduationCap;
    case 'hospital': return HeartPulse;
    case 'mall': return ShoppingBag;
    case 'landmark': return Landmark;
    case 'government': return Building2;
    case 'transport': return Bus;
    case 'sports': return Trophy;
    default: return Sparkles;
  }
}

// Helper to get category badge theme class
function getPlaceCategoryBadgeClass(category) {
  switch (category) {
    case 'university':
      return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
    case 'hospital':
      return 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800';
    case 'mall':
      return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800';
    case 'landmark':
      return 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800';
    case 'government':
      return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
    case 'transport':
      return 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200 dark:border-sky-800';
    case 'sports':
      return 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800';
    default:
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  }
}

// Enhanced Station Search Picker with Line Filtering & Quick Hubs UI/UX
function StationSearchPickerModal({
  lang,
  title,
  searchQuery,
  setSearchQuery,
  selectedId,
  onSelect,
  onClose,
  nearestGpsStation,
  t
}) {
  const [activeLineFilter, setActiveLineFilter] = useState('all'); // 'all', 'line1', 'line2', 'line3', 'interchange', 'monorail_east', 'lrt', 'brt'
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all'); // 'all', 'university', 'hospital', 'mall', 'landmark', 'government', 'transport', 'sports'
  const [constructionWarning, setConstructionWarning] = useState(null);

  const searchResults = useMemo(() => {
    return searchStationsAndPlaces(searchQuery, lang, activeCategoryFilter);
  }, [searchQuery, lang, activeCategoryFilter]);

  // Filter stations by the selected line filter tab
  const displayedStations = useMemo(() => {
    let list = searchResults.stations;
    if (activeLineFilter === 'interchange') {
      return list.filter(st => st.isInterchange);
    }
    if (activeLineFilter !== 'all') {
      return list.filter(st => st.lines.includes(activeLineFilter));
    }
    return list;
  }, [searchResults.stations, activeLineFilter]);

  const handleStationClick = (st) => {
    if (!st) return;
    if (st.underConstruction && !st.allowSimulation) {
      haptics.warning();
      setConstructionWarning(
        lang === 'ar'
          ? `محطة "${st.nameAr}" لسه تحت الإنشاء ومش شغالة في الخطوط حالياً.`
          : `Station "${st.nameEn}" is under construction and not operational yet.`
      );
      setTimeout(() => setConstructionWarning(null), 4000);
      return;
    }
    haptics.select();
    onSelect(st);
  };

  // Fast 1-tap popular hubs (Cairo font, no monospace)
  const popularHubIds = [
    { id: 'al_shohadaa', nameEn: 'Ramses (Shohadaa)', nameAr: 'رمسيس (الشهداء)', line: 'line1' },
    { id: 'sadat', nameEn: 'Tahrir (Sadat)', nameAr: 'التحرير (السادات)', line: 'line1' },
    { id: 'attaba', nameEn: 'Attaba', nameAr: 'العتبة', line: 'line2' },
    { id: 'nasser', nameEn: 'Nasser', nameAr: 'جمال عبد الناصر', line: 'line3' },
    { id: 'cairo_university', nameEn: 'Cairo Univ', nameAr: 'جامعة القاهرة', line: 'line2' },
    { id: 'adly_mansour', nameEn: 'Adly Mansour', nameAr: 'عدلي منصور', line: 'line3' },
    { id: 'kit_kat', nameEn: 'Kit Kat', nameAr: 'الكيت كات', line: 'line3' },
    { id: 'giza', nameEn: 'Giza Station', nameAr: 'محطة الجيزة', line: 'line2' }
  ];

  // Clean, non-clipped filter tabs with crisp labels
  const filterTabs = [
    { id: 'all', labelEn: 'All', labelAr: 'الكل' },
    { id: 'line1', labelEn: 'Line 1', labelAr: 'الخط 1', color: '#2563EB' },
    { id: 'line2', labelEn: 'Line 2', labelAr: 'الخط 2', color: '#DC2626' },
    { id: 'line3', labelEn: 'Line 3', labelAr: 'الخط 3', color: '#10B981' },
    { id: 'interchange', labelEn: 'Hubs', labelAr: 'محطات تبادلية', color: '#F59E0B' },
    { id: 'monorail_east', labelEn: 'East Monorail', labelAr: 'مونوريل شرق', color: '#EA580C' },
    { id: 'monorail_west', labelEn: 'West Monorail', labelAr: 'مونوريل غرب', color: '#D97706' },
    { id: 'lrt', labelEn: 'LRT', labelAr: 'القطار LRT', color: '#06B6D4' },
    { id: 'brt', labelEn: 'BRT', labelAr: 'حافلات BRT', color: '#EAB308' }
  ];

  // Egypt Top Places Categories Filter Tabs
  const categoryFilters = [
    { id: 'all', labelEn: 'All Places', labelAr: 'كل الأماكن', icon: Sparkles },
    { id: 'university', labelEn: 'Universities', labelAr: 'جامعات وأكاديميات', icon: GraduationCap },
    { id: 'hospital', labelEn: 'Hospitals', labelAr: 'مستشفيات', icon: HeartPulse },
    { id: 'mall', labelEn: 'Malls', labelAr: 'مولات وتسوق', icon: ShoppingBag },
    { id: 'landmark', labelEn: 'Landmarks', labelAr: 'معالم وسياحة', icon: Landmark },
    { id: 'government', labelEn: 'Government', labelAr: 'مقار حكومية', icon: Building2 },
    { id: 'transport', labelEn: 'Transit Hubs', labelAr: 'محطات ومواقف', icon: Bus },
    { id: 'sports', labelEn: 'Sports', labelAr: 'أندية واستادات', icon: Trophy }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start sm:items-center justify-center p-0 sm:p-4 apple-fade-enter"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white dark:bg-[#111113] rounded-none sm:rounded-[24px] h-[100dvh] sm:h-[640px] max-h-[100dvh] flex flex-col shadow-2xl border-0 sm:border border-slate-200 dark:border-[#26262C] apple-sheet-enter overflow-hidden pt-[env(safe-area-inset-top,12px)] select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ischys Grab Handle */}
        <div className="w-10 h-1.5 bg-slate-300 dark:bg-[#212127] rounded-full mx-auto my-2 flex-shrink-0 sm:hidden" />

        {/* Header */}
        <div className="px-4 py-2.5 sm:py-3 border-b border-slate-100 dark:border-[#1D1D22] flex items-center justify-between bg-slate-50 dark:bg-[#111113] flex-shrink-0 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 dark:bg-[#FF4A1C]"></span>
            <h3 className="text-sm font-space font-bold text-slate-900 dark:text-[#F4F4F5]">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-[#F4F4F5] hover:bg-slate-100 dark:hover:bg-[#17171A] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Under construction alert notification if user tapped a blocked station */}
        {constructionWarning && (
          <div className="mx-3 mt-2 p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs font-cairo font-bold flex items-center gap-2 animate-fade-in flex-shrink-0 select-none">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <span className="flex-1">{constructionWarning}</span>
            <button onClick={() => setConstructionWarning(null)} className="p-1 hover:opacity-75">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Search input with Paste Google Maps support & Filter Strips */}
        <div className="p-2.5 sm:p-3 border-b border-slate-100 dark:border-[#1D1D22] space-y-2 bg-white dark:bg-[#111113] flex-shrink-0 select-none">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 rtl:left-auto top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ar' ? 'ابحث عن محطة أو معلم...' : 'Search station or landmark...'}
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck="false"
              enterKeyHint="search"
              className="w-full pl-9 pr-9 rtl:pr-9 rtl:pl-9 py-2 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#17171A] text-[16px] sm:text-xs font-semibold font-cairo text-slate-900 dark:text-[#F4F4F5] placeholder:text-slate-400 placeholder:font-normal border border-slate-200 dark:border-[#26262C] focus:outline-none focus:ring-1 focus:ring-rose-500 select-text"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 rtl:left-3 rtl:right-auto top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Popular Hubs 1-Tap Chips */}
          {!searchQuery && (
            <div className="space-y-1 pt-0.5">
              <span className="text-[10px] font-cairo font-bold tracking-wider uppercase text-slate-500 dark:text-[#8E8E93] block px-1">
                {lang === 'ar' ? 'محطات رئيسية سريعة:' : 'POPULAR HUBS:'}
              </span>
              <ScrollablePillsRow lang={lang} className="gap-1.5 pb-0.5">
                {popularHubIds.map((h) => {
                  const fullSt = STATIONS.find(s => s.id === h.id);
                  if (!fullSt) return null;
                  return (
                    <button
                      key={h.id}
                      type="button"
                      onClick={(e) => {
                        haptics.select();
                        e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                        handleStationClick(fullSt);
                      }}
                      className="flex-shrink-0 min-w-max px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#17171A] dark:hover:bg-[#212127] text-[11.5px] font-cairo font-semibold text-slate-800 dark:text-[#F4F4F5] flex items-center gap-1.5 transition-transform active:scale-95 border border-slate-200/60 dark:border-[#26262C] whitespace-nowrap"
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: METRO_LINES[h.line]?.color || '#2563EB' }} />
                      <span>{lang === 'ar' ? h.nameAr : h.nameEn}</span>
                    </button>
                  );
                })}
              </ScrollablePillsRow>
            </div>
          )}

          {/* Line Filter Tabs Strip */}
          <ScrollablePillsRow lang={lang} className="gap-1.5 pt-0.5">
            {filterTabs.map((tab) => {
              const isSelected = activeLineFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={(e) => {
                    haptics.select();
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    setActiveLineFilter(tab.id);
                  }}
                  className={`flex-shrink-0 min-w-max px-2.5 py-1 rounded-xl text-[11.5px] font-cairo font-semibold transition-all flex items-center gap-1.5 active:scale-95 whitespace-nowrap ${
                    isSelected
                      ? 'bg-slate-900 text-white dark:bg-[#212127] dark:text-[#F4F4F5] shadow-xs'
                      : 'bg-slate-100 dark:bg-[#17171A] text-slate-600 dark:text-[#97979E] hover:bg-slate-200 dark:hover:bg-[#212127]'
                  }`}
                >
                  {tab.color && (
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: tab.color }} />
                  )}
                  <span>{lang === 'ar' ? tab.labelAr : tab.labelEn}</span>
                </button>
              );
            })}
          </ScrollablePillsRow>

          {/* Places & Institutions Category Filter Tabs Strip (Universities, Hospitals, Malls, etc.) */}
          <ScrollablePillsRow lang={lang} className="gap-1.5 pt-0.5 border-t border-slate-100 dark:border-[#1D1D22]">
            {categoryFilters.map((cat) => {
              const isSelected = activeCategoryFilter === cat.id;
              const CatIcon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={(e) => {
                    haptics.select();
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    setActiveCategoryFilter(cat.id);
                  }}
                  className={`flex-shrink-0 min-w-max px-2.5 py-1 rounded-xl text-[11px] font-cairo font-semibold transition-all flex items-center gap-1.5 active:scale-95 whitespace-nowrap ${
                    isSelected
                      ? 'bg-rose-600 text-white dark:bg-[#FF4A1C] dark:text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-[#17171A] text-slate-600 dark:text-[#97979E] hover:bg-slate-200 dark:hover:bg-[#212127]'
                  }`}
                >
                  <CatIcon className="w-3 h-3 flex-shrink-0" />
                  <span>{lang === 'ar' ? cat.labelAr : cat.labelEn}</span>
                </button>
              );
            })}
          </ScrollablePillsRow>
        </div>

        {/* Station List */}
        <div className="overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800 p-2 flex-1 pb-[calc(2rem+env(safe-area-inset-bottom,16px))] overscroll-contain select-none">
          {/* Nearest Station Pinned at top if available */}
          {!searchQuery && nearestGpsStation && (
            <div className="p-2.5 mb-2 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50">
              <p className="text-[10.5px] font-bold uppercase text-rose-600 dark:text-rose-400 mb-1 flex items-center gap-1.5 font-cairo">
                <Compass className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{lang === 'ar' ? 'أقرب محطة لموقعك الحالي عبر GPS' : 'Nearest Station to your GPS'}</span>
              </p>
              <button
                onClick={() => handleStationClick(nearestGpsStation)}
                className="w-full text-start p-2 rounded-xl flex items-center justify-between hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                <div className="min-w-0 flex-1 pe-2">
                  <p className="text-xs font-bold text-slate-900 dark:text-white truncate font-cairo">
                    {lang === 'ar' ? nearestGpsStation.nameAr : nearestGpsStation.nameEn}
                  </p>
                  <p className="text-[10.5px] text-slate-500 font-medium truncate font-cairo mt-0.5">
                    {formatDistance(nearestGpsStation.distanceKm, lang)} ({nearestGpsStation.walkMins} {t.routePlanner.mins})
                  </p>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-rose-600 text-white flex-shrink-0 ms-2 font-cairo">
                  {lang === 'ar' ? 'اختيار' : 'Select'}
                </span>
              </button>
            </div>
          )}

          {/* Matched Top Egypt Places & Landmarks (Universities, Hospitals, Malls, etc.) */}
          {searchResults.landmarks.length > 0 && (
            <div className="py-2.5 mb-2 bg-slate-50/70 dark:bg-[#151518] rounded-2xl border border-slate-100 dark:border-[#212127] p-1.5">
              <div className="px-2 mb-2 flex items-center justify-between">
                <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 font-cairo">
                  <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>
                    {activeCategoryFilter !== 'all'
                      ? (lang === 'ar' ? `نتائج ${categoryFilters.find(c => c.id === activeCategoryFilter)?.labelAr}:` : `${categoryFilters.find(c => c.id === activeCategoryFilter)?.labelEn} Results:`)
                      : (lang === 'ar' ? 'معالم وأماكن ومؤسسات مصر الكبرى:' : 'Matching Egypt Places & Landmarks:')}
                  </span>
                </p>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-cairo">
                  {searchResults.landmarks.length} {lang === 'ar' ? 'مكان' : 'places'}
                </span>
              </div>
              <div className="space-y-1">
                {searchResults.landmarks.map((lm, idx) => {
                  const CategoryIcon = getPlaceCategoryIcon(lm.category);
                  const badgeClass = getPlaceCategoryBadgeClass(lm.category);
                  return (
                    <button
                      key={lm.id || idx}
                      onClick={() => handleStationClick(lm.station)}
                      className="w-full text-start p-2.5 rounded-xl hover:bg-white dark:hover:bg-[#1E1E23] flex items-center justify-between transition-colors group shadow-2xs border border-transparent hover:border-slate-200/60 dark:hover:border-[#2B2B32]"
                    >
                      <div className="min-w-0 flex-1 pe-2">
                        <div className="flex items-center gap-1.5">
                          <span className={`p-1 rounded-md ${badgeClass} flex-shrink-0`}>
                            <CategoryIcon className="w-3.5 h-3.5" />
                          </span>
                          <p className="text-xs font-bold text-slate-900 dark:text-[#F4F4F5] truncate font-cairo group-hover:text-rose-600 dark:group-hover:text-[#FF4A1C] transition-colors">
                            {lang === 'ar' ? lm.nameAr : lm.nameEn}
                          </p>
                        </div>
                        {lm.station && (
                          <p
                            dir={lang === 'ar' ? 'rtl' : 'ltr'}
                            className="text-[10.5px] font-cairo text-slate-500 dark:text-[#8E8E93] truncate mt-1 ps-6 text-start pe-1 leading-normal"
                          >
                            ➔ {t.nearestTab.recommendedStation || (lang === 'ar' ? 'أقرب محطة:' : 'Nearest Station:')} <b className="text-rose-600 dark:text-[#FF4A1C]">{lang === 'ar' ? lm.station.nameAr : lm.station.nameEn}</b>
                          </p>
                        )}
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold flex-shrink-0 ms-2 flex items-center gap-1 ${badgeClass}`}>
                        <CategoryIcon className="w-3 h-3 flex-shrink-0" />
                        <span>{lang === 'ar' ? (lm.categoryAr || 'مكان') : (lm.categoryEn || 'Place')}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Matched Stations (Filtered & Prefix-first sorted) */}
          {displayedStations.map((st) => {
            const isSelected = st.id === selectedId;
            const isUnderConstruction = Boolean(st.underConstruction);
            const landmarksList = lang === 'ar' ? st.landmarksAr : st.landmarks;
            const landmarksText = landmarksList && landmarksList.length > 0
              ? landmarksList.slice(0, 2).join(' • ')
              : null;

            const isBlocked = isUnderConstruction && !st.allowSimulation;

            return (
              <button
                key={st.id}
                onClick={() => handleStationClick(st)}
                className={`w-full text-start p-3 rounded-2xl flex items-center justify-between transition-colors cv-auto ${
                  isBlocked
                    ? 'opacity-60 hover:bg-amber-500/10 dark:hover:bg-amber-500/10 cursor-not-allowed'
                    : isSelected
                    ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div className="min-w-0 flex-1 pe-2.5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="text-xs font-bold text-slate-900 dark:text-[#F4F4F5] truncate font-cairo">
                      {lang === 'ar' ? st.nameAr : st.nameEn}
                    </p>
                    {isUnderConstruction && (
                      <span className="text-[9.5px] px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30 flex-shrink-0">
                        {st.allowSimulation
                          ? (lang === 'ar' ? 'تشغيل تجريبي / محاكاة' : 'Trial / Simulation')
                          : (lang === 'ar' ? 'تحت الإنشاء' : 'Under Construction')}
                      </span>
                    )}
                    {isSelected && !isBlocked && (
                      <span className="text-[10px] font-bold text-rose-600 flex-shrink-0">✓</span>
                    )}
                  </div>
                  {landmarksText && (
                    <p
                      dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      className="text-[10.5px] font-cairo text-slate-500 dark:text-slate-400 truncate mt-0.5 text-start pe-1 leading-normal"
                      title={landmarksText}
                    >
                      {landmarksText}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0 ms-2">
                  {st.lines.map(l => (
                    <span
                      key={l}
                      className="text-[10px] px-2 py-0.5 rounded-md font-bold text-white uppercase tracking-tight shadow-xs inline-flex items-center justify-center leading-none"
                      style={{ backgroundColor: METRO_LINES[l]?.color || '#E11D48' }}
                    >
                      {lang === 'ar' ? METRO_LINES[l]?.shortNameAr : METRO_LINES[l]?.shortNameEn}
                    </span>
                  ))}
                  {st.isInterchange && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500 text-white font-bold tracking-tight shadow-xs inline-flex items-center justify-center leading-none">
                      {lang === 'ar' ? 'تبادل' : 'Hub'}
                    </span>
                  )}
                </div>
              </button>
            );
          })}

          {displayedStations.length === 0 && searchResults.landmarks.length === 0 && (
            <div className="p-8 text-center text-xs font-cairo text-slate-400 flex flex-col items-center justify-center gap-2 my-auto">
              <Search className="w-8 h-8 text-slate-300 dark:text-slate-600 stroke-[1.5]" />
              <p className="font-bold text-slate-600 dark:text-slate-300">
                {lang === 'ar' ? 'مفيش محطة أو مكان بالاسم ده!' : 'No matching stations or landmarks found!'}
              </p>
              <p className="text-[11px] text-slate-400">
                {lang === 'ar' ? 'جرب تبحث باسم تاني أو اختار خط من الفلاتر اللي فوق' : 'Try searching with another name or pick a line filter above'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
