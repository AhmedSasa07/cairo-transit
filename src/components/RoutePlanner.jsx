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
  Link,
  FileText,
  Eye,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Building2,
  Bus,
  Trophy,
  ExternalLink,
  Navigation,
  Share2
} from 'lucide-react';
import { STATIONS, METRO_LINES, POPULAR_TRIPS } from '../data/metroData.js';
import { TOP_EGYPT_PLACES, CATEGORY_METADATA } from '../data/egyptPlaces.js';
import { findMultipleRoutes, getTripDescription, getCleanLineName } from '../utils/routing.js';
import { searchStationsAndPlaces, parseCoordinates, formatDistance, findNearestStations, getDistanceKm, estimateWalkMinutes } from '../utils/geo.js';
import ShareTripModal from './ShareTripModal.jsx';
import MetroStatTile from './MetroStatTile.jsx';
import SaveTripModal from './SaveTripModal.jsx';
import NearMeModeModal from './NearMeModeModal.jsx';
import TransitModeIcon from './TransitModeIcon.jsx';
import { AppleAccordion, StationSwapButton } from './MotionComponents.jsx';
import AppleCard from './AppleCard.jsx';
import { haptics } from '../utils/haptics.js';
import { APPLE_CURVES, APPLE_TIMINGS, useSheetDragToDismiss } from '../utils/motion.js';
import {
  WORST_CASE_FROM_STATION,
  WORST_CASE_TO_STATION,
  WORST_CASE_ROUTES,
  HUGE_SAVED_TRIPS,
  EMPTY_SAVED_TRIPS
} from '../data/breakUiFixtures.js';

// Dynamic Fare Themes based on Tariff Tier & Mode (Official Mobility Cairo Tariffs 2026)
function getPriceTheme(route, lang) {
  if (!route) {
    return {
      border: 'border-amber-400 dark:border-amber-500/80',
      bg: 'bg-amber-500/10 dark:bg-amber-500/15',
      text: 'text-amber-500 dark:text-amber-400',
      badgeBg: 'bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-400/40',
      badgeLabel: lang === 'ar' ? 'صفراء (١-٩ محطات - ١٠ ج.م)' : 'Yellow (1-9 Stns - 10 LE)',
      ticketImage: '/assets/tickets/Ticket_Y_Yellow.png'
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
      badgeLabel: isAr ? 'متعدد الوسائط' : 'Multi-Modal',
      ticketImage: '/assets/tickets/Wallet_Card_Full.png'
    };
  }

  // Pure Monorail (Teal #009ca6 for East / Dark Crimson #9b2521 for West)
  if (hasMonorail) {
    const isWest = legs.some(l => l.lineId === 'monorail_west');
    return {
      border: isWest ? 'border-[#9b2521] dark:border-[#9b2521]/80' : 'border-[#009ca6] dark:border-[#009ca6]/80',
      bg: isWest ? 'bg-[#9b2521]/10 dark:bg-[#9b2521]/15' : 'bg-[#009ca6]/10 dark:bg-[#009ca6]/15',
      text: isWest ? 'text-[#9b2521] dark:text-[#f87171]' : 'text-[#009ca6] dark:text-[#2dd4bf]',
      badgeBg: isWest ? 'bg-[#9b2521]/20 text-[#9b2521] dark:text-[#fca5a5] border border-[#9b2521]/30' : 'bg-[#009ca6]/20 text-[#0f766e] dark:text-[#5eead4] border border-[#009ca6]/30',
      badgeLabel: isAr ? (isWest ? 'مونوريل غرب' : 'مونوريل شرق') : (isWest ? 'West Monorail' : 'East Monorail'),
      ticketImage: '/assets/tickets/Wallet_Card_Full.png'
    };
  }

  // Pure LRT (Crimson #9e1b33)
  if (hasLrt) {
    return {
      border: 'border-[#9e1b33] dark:border-[#9e1b33]/80',
      bg: 'bg-[#9e1b33]/10 dark:bg-[#9e1b33]/15',
      text: 'text-[#9e1b33] dark:text-[#f87171]',
      badgeBg: 'bg-[#9e1b33]/20 text-[#9e1b33] dark:text-[#fca5a5] border border-[#9e1b33]/30',
      badgeLabel: isAr ? 'قطار LRT' : 'LRT Train',
      ticketImage: '/assets/tickets/Wallet_Card_Full.png'
    };
  }

  // Pure BRT (Purple #8B5CF6)
  if (hasBrt) {
    return {
      border: 'border-[#8B5CF6] dark:border-[#8B5CF6]/80',
      bg: 'bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/15',
      text: 'text-[#8B5CF6] dark:text-[#A78BFA]',
      badgeBg: 'bg-[#8B5CF6]/20 text-[#7C3AED] dark:text-[#C4B5FD] border border-[#8B5CF6]/30',
      badgeLabel: isAr ? 'ترددي BRT' : 'BRT Bus',
      ticketImage: '/assets/tickets/Wallet_Card_Full.png'
    };
  }

  // Cairo Metro Tiers (Official Mobility Cairo Tariffs 2026: 10, 12, 15, 20 LE)
  const cost = route.fareDetails?.totalCost ?? route.ticketTier?.price ?? 10;
  const tier = route.ticketTier?.tier || (cost <= 10 ? 1 : cost <= 12 ? 2 : cost <= 15 ? 3 : 4);

  if (tier === 1 || cost <= 10) {
    return {
      border: 'border-amber-400 dark:border-amber-400/80',
      bg: 'bg-amber-500/10 dark:bg-amber-500/15',
      text: 'text-amber-500 dark:text-amber-400',
      badgeBg: 'bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-400/40',
      badgeLabel: isAr ? 'صفراء (١-٩ محطات - ١٠ ج.م)' : 'Yellow (1-9 Stns - 10 LE)',
      ticketImage: '/assets/tickets/Ticket_Y_Yellow.png'
    };
  }

  if (tier === 2 || cost <= 12) {
    return {
      border: 'border-emerald-500 dark:border-emerald-500/80',
      bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
      text: 'text-emerald-500 dark:text-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40',
      badgeLabel: isAr ? 'خضراء (١٠-١٦ محطة - ١٢ ج.م)' : 'Green (10-16 Stns - 12 LE)',
      ticketImage: '/assets/tickets/Ticket_G_Green.png'
    };
  }

  if (tier === 3 || cost <= 15) {
    return {
      border: 'border-rose-500 dark:border-rose-500/80',
      bg: 'bg-rose-500/10 dark:bg-rose-500/15',
      text: 'text-rose-500 dark:text-rose-400',
      badgeBg: 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/40',
      badgeLabel: isAr ? 'وردية (١٧-٢٣ محطة - ١٥ ج.م)' : 'Pink (17-23 Stns - 15 LE)',
      ticketImage: '/assets/tickets/Ticket_P_Pink.png'
    };
  }

  // 20 EGP (24+ stations / Tier 4)
  return {
    border: 'border-rose-600 dark:border-rose-600/80',
    bg: 'bg-rose-500/10 dark:bg-rose-500/15',
    text: 'text-rose-600 dark:text-rose-400',
    badgeBg: 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/40',
    badgeLabel: isAr ? 'وردية (+٢٣ محطة - ٢٠ ج.م)' : 'Pink (24+ Stns - 20 LE)',
    ticketImage: '/assets/tickets/Ticket_P_Pink.png'
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

export default function RoutePlanner({
  lang,
  t,
  preselectedOrigin,
  preselectedDestination,
  onClearPreselected,
  onSelectStationForModal,
  onOpenPdfMap,
  nearestGpsStation
}) {
  const [fromStationId, setFromStationId] = useState(() => {
    return preselectedOrigin || localStorage.getItem('cairo_metro_saved_from') || 'al_shohadaa';
  });
  const [toStationId, setToStationId] = useState(() => {
    return preselectedDestination || localStorage.getItem('cairo_metro_saved_to') || 'opera';
  });
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(() => {
    const saved = localStorage.getItem('cairo_metro_selected_route_idx');
    return saved !== null ? Number(saved) : 0;
  });
  const [transitMode, setTransitMode] = useState('metro'); // 'metro' (Single transit mode) vs 'mixed' (Multi-modal)
  const [selectedModeId, setSelectedModeId] = useState('metro'); // 'metro', 'monorail', 'lrt', 'brt', 'all'
  const [acOnly, setAcOnly] = useState(false); // Air-conditioned trains only (M3, Monorail, LRT, BRT)
  const [isModeDropdownOpen, setIsModeDropdownOpen] = useState(false);
  const modeDropdownRef = useRef(null);

  // Close transit mode dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (modeDropdownRef.current && !modeDropdownRef.current.contains(e.target)) {
        setIsModeDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dev Break-UI Resilience Test State (Swaps realistic worst-case values at data boundary)
  const [devMode, setDevMode] = useState(() => {
    try {
      const p = new URLSearchParams(window.location.search).get('data');
      if (p === 'worst') return 'worst_case';
      if (p === 'empty') return 'empty_favs';
      if (p === 'huge') return 'huge_favs';
      if (p === 'xfer') return 'multi_xfer';
    } catch {}
    return 'normal';
  });

  // Search picker state
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [selectedFromLandmark, setSelectedFromLandmark] = useState(null);
  const [selectedToLandmark, setSelectedToLandmark] = useState(null);

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

  // Sync when parent updates preselected (e.g. from Map or Nearest tab)
  useEffect(() => {
    if (preselectedOrigin) {
      setFromStationId(preselectedOrigin);
      onClearPreselected?.();
    }
  }, [preselectedOrigin, onClearPreselected]);

  useEffect(() => {
    if (preselectedDestination) {
      setToStationId(preselectedDestination);
      onClearPreselected?.();
    }
  }, [preselectedDestination, onClearPreselected]);

  // Persist station selections across sessions & tab switches
  useEffect(() => {
    if (fromStationId) {
      try {
        localStorage.setItem('cairo_metro_saved_from', fromStationId);
      } catch {}
    }
  }, [fromStationId]);

  useEffect(() => {
    if (toStationId) {
      try {
        localStorage.setItem('cairo_metro_saved_to', toStationId);
      } catch {}
    }
  }, [toStationId]);

  useEffect(() => {
    try {
      localStorage.setItem('cairo_metro_selected_route_idx', String(selectedRouteIndex));
    } catch {}
  }, [selectedRouteIndex]);

  // Reset selected route index when origin or destination changes
  useEffect(() => {
    setSelectedRouteIndex(0);
  }, [fromStationId, toStationId, transitMode, acOnly, devMode]);

  // Effective Stations based on Dev Mode
  const fromStation = useMemo(() => {
    if (devMode === 'worst_case' || devMode === 'multi_xfer') return WORST_CASE_FROM_STATION;
    return STATIONS.find(s => s.id === fromStationId) || null;
  }, [devMode, fromStationId]);

  const toStation = useMemo(() => {
    if (devMode === 'worst_case' || devMode === 'multi_xfer') return WORST_CASE_TO_STATION;
    return STATIONS.find(s => s.id === toStationId) || null;
  }, [devMode, toStationId]);

  // Effective Saved Trips based on Dev Mode
  const effectiveSavedTrips = useMemo(() => {
    if (devMode === 'empty_favs') return EMPTY_SAVED_TRIPS;
    if (devMode === 'huge_favs') return HUGE_SAVED_TRIPS;
    if (devMode === 'worst_case') return HUGE_SAVED_TRIPS.slice(0, 3);
    return savedTrips;
  }, [devMode, savedTrips]);

  // Effective Routes based on Dev Mode
  const routes = useMemo(() => {
    if (devMode === 'worst_case') return WORST_CASE_ROUTES;
    if (devMode === 'multi_xfer') return [WORST_CASE_ROUTES[0]];
    if (!fromStationId || !toStationId || fromStationId === toStationId) return [];
    return findMultipleRoutes(fromStationId, toStationId, { transitMode, acOnly });
  }, [devMode, fromStationId, toStationId, transitMode, acOnly]);

  const activeRoute = routes[selectedRouteIndex] || routes[0] || null;

  const priceTheme = useMemo(() => getPriceTheme(activeRoute, lang), [activeRoute, lang]);
  const tripDescription = useMemo(() => getTripDescription(activeRoute, lang), [activeRoute, lang]);
  const transferDisplay = useMemo(() => getTransferDisplay(activeRoute?.transfersCount ?? 0, lang), [activeRoute?.transfersCount, lang]);

  // Route distance in km (with geodesic fallback if distanceKm not precomputed)
  const routeDistanceKm = useMemo(() => {
    if (activeRoute?.distanceKm != null) {
      return typeof activeRoute.distanceKm === 'number'
        ? Number(activeRoute.distanceKm.toFixed(1))
        : activeRoute.distanceKm;
    }
    if (!activeRoute?.stationsList || activeRoute.stationsList.length < 2) return null;
    let totalKm = 0;
    for (let i = 0; i < activeRoute.stationsList.length - 1; i++) {
      const s1 = activeRoute.stationsList[i];
      const s2 = activeRoute.stationsList[i + 1];
      if (s1?.lat && s1?.lng && s2?.lat && s2?.lng) {
        totalKm += getDistanceKm(s1.lat, s1.lng, s2.lat, s2.lng);
      }
    }
    return totalKm > 0 ? Number(totalKm.toFixed(1)) : null;
  }, [activeRoute]);

  const swapStations = () => {
    if (devMode !== 'normal') setDevMode('normal');
    const temp = fromStationId;
    setFromStationId(toStationId);
    setToStationId(temp);

    const tempLm = selectedFromLandmark;
    setSelectedFromLandmark(selectedToLandmark);
    setSelectedToLandmark(tempLm);
  };

  // Check if current active route is saved in favorites
  const isCurrentTripSaved = Boolean(
    fromStation && toStation && effectiveSavedTrips.some(t => t.fromId === fromStation.id && t.toId === toStation.id)
  );

  // Handle toggling route in favorites: Open modal if not saved, or remove directly if saved
  const handleToggleSaveTrip = () => {
    if (!fromStation || !toStation) return;
    const existsIndex = savedTrips.findIndex(t => t.fromId === fromStationId && t.toId === toStationId);
    if (existsIndex !== -1) {
      haptics.impact('LIGHT');
      const updated = savedTrips.filter((_, idx) => idx !== existsIndex);
      setSavedTrips(updated);
      localStorage.setItem('egymetro_saved_trips', JSON.stringify(updated));
      setSavedTripToast(lang === 'ar' ? 'اتمسح المشوار من المفضلة' : 'Removed from favorites');
      setTimeout(() => setSavedTripToast(null), 2500);
    } else {
      haptics.impact('LIGHT');
      setShowSaveTripModal(true);
    }
  };

  const handleConfirmSaveTrip = (customName) => {
    haptics.impact('MEDIUM');
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
    haptics.impact('LIGHT');
    setShowNearMeModal(true);
  };

  const handleSelectNearMeMode = (modeKey) => {
    setShowNearMeModal(false);
    haptics.select();

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
      haptics.impact('MEDIUM');
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
    haptics.impact('LIGHT');
    const updated = savedTrips.filter((_, idx) => idx !== index);
    setSavedTrips(updated);
    localStorage.setItem('egymetro_saved_trips', JSON.stringify(updated));
  };

  const handleShare = () => {
    if (!activeRoute) return;
    haptics.impact('LIGHT');
    setShowShareModal(true);
  };

  const toggleLegExpand = (legIndex) => {
    setExpandedLegs(prev => ({
      ...prev,
      [legIndex]: !prev[legIndex]
    }));
  };

  return (
    <div className="space-y-3 sm:space-y-3.5 pb-[calc(5rem+env(safe-area-inset-bottom,16px))]">
      {/* Primary Inset Grouped Journey Selector Card */}
      <AppleCard variant="primary" className="p-4 sm:p-5 space-y-3.5">
        {/* Top Control Bar: Transit Mode Logo Dropdown + AC Toggle + Near Me + Favorite Star + Share */}
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-black/[0.04] dark:border-white/[0.06] select-none">
          {/* Left/Start: Mode Dropdown (Logos only) + AC Only Toggle */}
          <div className="flex items-center gap-1.5 min-w-0">
            {/* Transit Mode Dropdown with Logos Only */}
            <div className="relative" ref={modeDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  haptics.select();
                  setIsModeDropdownOpen(prev => !prev);
                }}
                className="h-9 px-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] flex items-center gap-1 active:scale-95 transition-all touch-manipulation tap-transparent shadow-2xs"
                title={lang === 'ar' ? 'وسيلة النقل (لوجو فقط)' : 'Transit Mode (Logos only)'}
                aria-label="Transit Mode"
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  <TransitModeIcon mode={selectedModeId} size="sm" className="w-5 h-5 object-contain" />
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isModeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu Options (Logos Only, No Text) */}
              {isModeDropdownOpen && (
                <div className="absolute top-full mt-1.5 start-0 z-50 p-1.5 rounded-2xl bg-white dark:bg-[#18181B] border border-slate-200 dark:border-[#26262C] shadow-xl flex items-center gap-1 animate-scale-in">
                  {[
                    { id: 'metro', mode: 'metro', title: 'مترو الأنفاق' },
                    { id: 'monorail', mode: 'mixed', title: 'مونوريل' },
                    { id: 'lrt', mode: 'mixed', title: 'قطار LRT' },
                    { id: 'brt', mode: 'mixed', title: 'أتوبيس ترددي BRT' },
                    { id: 'all', mode: 'mixed', title: 'كل الوسائط' },
                  ].map((item) => {
                    const isSelected = selectedModeId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          haptics.select();
                          setSelectedModeId(item.id);
                          setTransitMode(item.mode);
                          setIsModeDropdownOpen(false);
                        }}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center p-1.5 transition-all active:scale-90 ${
                          isSelected
                            ? 'bg-blue-600/15 border border-blue-500/30 ring-1 ring-blue-500/40 shadow-xs'
                            : 'hover:bg-black/[0.05] dark:hover:bg-white/[0.06] opacity-75 hover:opacity-100'
                        }`}
                        title={item.title}
                      >
                        <TransitModeIcon mode={item.id} size="sm" className="w-5 h-5 object-contain" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* AC-Only Filter Toggle with Snowflake */}
            <button
              type="button"
              onClick={() => {
                haptics.selection();
                setAcOnly(prev => !prev);
              }}
              className={`h-9 px-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition-all active:scale-95 touch-manipulation tap-transparent shadow-2xs ${
                acOnly
                  ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-600 dark:text-cyan-300'
                  : 'bg-black/[0.03] dark:bg-white/[0.05] border-black/[0.06] dark:border-white/[0.08] text-slate-400 hover:text-cyan-500'
              }`}
              title={lang === 'ar' ? 'قطارات مكيفة فقط (خط 3، مونوريل، LRT، BRT)' : 'Air-Conditioned Trains Only (M3, Monorail, LRT, BRT)'}
            >
              <span className="text-sm">❄️</span>
              <span className={`text-[11px] font-bold ${lang === 'ar' ? 'font-cairo' : 'font-mono'}`}>
                {lang === 'ar' ? 'مكيف' : 'AC'}
              </span>
            </button>
          </div>

          {/* Right/End: Near Me GPS + Favorite Star + Share Trip */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Near Me GPS Button */}
            <button
              type="button"
              onClick={() => {
                haptics.light();
                handleQuickGpsOrigin();
              }}
              disabled={isLocatingOrigin}
              className="h-9 px-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 text-emerald-700 dark:text-[#2DD881] border border-emerald-500/20 flex items-center gap-1.5 text-xs font-bold active:scale-95 transition-all shadow-2xs touch-manipulation tap-transparent"
              title={lang === 'ar' ? 'تحديد أقرب محطة بالـ GPS' : 'Detect Nearest Station via GPS'}
            >
              <Navigation className={`w-3.5 h-3.5 text-emerald-600 dark:text-[#2DD881] ${isLocatingOrigin ? 'animate-spin' : ''}`} />
              <span className={`text-[11px] ${lang === 'ar' ? 'font-cairo' : 'font-mono'}`}>
                {isLocatingOrigin
                  ? (lang === 'ar' ? 'جاري...' : 'Locating...')
                  : (lang === 'ar' ? 'أقرب محطة' : 'Near Me')}
              </span>
            </button>

            {/* Favorite Star Button */}
            <button
              type="button"
              onClick={() => {
                haptics.select();
                handleToggleSaveTrip();
              }}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all active:scale-90 touch-manipulation tap-transparent shadow-2xs ${
                isCurrentTripSaved
                  ? 'bg-amber-500/15 border-amber-500/30 text-amber-500'
                  : 'bg-black/[0.03] dark:bg-white/[0.05] border-black/[0.06] dark:border-white/[0.08] text-slate-400 hover:text-amber-500'
              }`}
              title={t?.routePlanner?.saveTripTooltip || (lang === 'ar' ? 'حفظ في المفضلة' : 'Save to favorites')}
              aria-label={t?.routePlanner?.saveTripTooltip || (lang === 'ar' ? 'حفظ في المفضلة' : 'Save to favorites')}
            >
              <Star className={`w-4 h-4 ${isCurrentTripSaved ? 'fill-amber-400 text-amber-500' : 'fill-none'}`} />
            </button>

            {/* Share Trip Button */}
            <button
              type="button"
              onClick={() => {
                haptics.light();
                handleShare();
              }}
              className="w-9 h-9 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-rose-600 dark:text-[#FF4A1C] hover:bg-rose-500/10 flex items-center justify-center transition-all active:scale-90 touch-manipulation tap-transparent shadow-2xs"
              title={t?.routePlanner?.shareRoute || (lang === 'ar' ? 'مشاركة تفاصيل الرحلة' : 'Share route details')}
              aria-label={t?.routePlanner?.shareRoute || (lang === 'ar' ? 'مشاركة تفاصيل الرحلة' : 'Share route details')}
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Auto-Switched Notice if station is outside pure metro */}
        {activeRoute?.autoSwitched && (
          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2 text-xs font-mono font-bold text-amber-700 dark:text-[#FFC24B] select-none">
            <span>ℹ️</span>
            <span>
              {lang === 'ar'
                ? 'المحطة المحددة تقع على المونوريل/LRT/BRT - تم تفعيل شبكة الوسائط المتعددة تلقائياً'
                : 'Selected station is on Monorail / LRT / BRT - Multi-modal network enabled automatically'}
            </span>
          </div>
        )}

        {/* Input Fields with Swap Button */}
        <div className="relative space-y-2 select-none">
          {/* FROM Station Button (Secondary Inset Layer) */}
          <div className="relative">
            <label className={`block text-[10px] uppercase text-slate-400 dark:text-[#5B5B63] mb-1 px-1 ${lang === 'ar' ? 'font-cairo tracking-normal' : 'font-mono tracking-wider'}`}>
              {t.routePlanner.fromLabel}
            </label>
            <button
              onClick={() => {
                haptics.impact('LIGHT');
                setSearchFrom('');
                setShowFromPicker(true);
              }}
              className="w-full flex items-center justify-between p-3.5 rounded-[20px] bg-black/[0.025] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] select-none touch-manipulation tap-transparent active:scale-[0.985] transition-all duration-120 text-start"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1 pe-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs text-emerald-600 dark:text-[#2DD881] flex-shrink-0 shadow-2xs">
                  {fromStation ? fromStation.nameEn.substring(0, 2).toUpperCase() : 'IN'}
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-bold text-slate-900 dark:text-[#F4F4F5] truncate ${lang === 'ar' ? 'font-cairo' : 'font-space'}`}
                    title={selectedFromLandmark ? (lang === 'ar' ? selectedFromLandmark.nameAr : selectedFromLandmark.nameEn) : (fromStation ? (lang === 'ar' ? fromStation.nameAr : fromStation.nameEn) : '')}
                  >
                    {selectedFromLandmark
                      ? (lang === 'ar' ? selectedFromLandmark.nameAr : selectedFromLandmark.nameEn)
                      : (fromStation ? (lang === 'ar' ? fromStation.nameAr : fromStation.nameEn) : t.routePlanner.selectStation)}
                  </p>
                  {selectedFromLandmark && fromStation ? (
                    <p className="text-[10.5px] font-bold text-emerald-600 dark:text-[#2DD881] font-cairo truncate mt-0.5">
                      📍 {lang === 'ar' ? `الانطلاق عبر محطة: ${fromStation.nameAr}` : `Boarding via: ${fromStation.nameEn}`}
                    </p>
                  ) : fromStation ? (
                    <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                      {fromStation.lines.map(l => (
                        <span
                          key={l}
                          className={`text-[9px] px-1.5 py-0.2 rounded font-bold text-white uppercase flex-shrink-0 ${lang === 'ar' ? 'font-cairo' : 'font-mono'}`}
                          style={{ backgroundColor: METRO_LINES[l]?.color || '#E11D48' }}
                        >
                          {lang === 'ar' ? METRO_LINES[l]?.shortNameAr : METRO_LINES[l]?.shortNameEn}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {fromStation && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      haptics.select();
                      onSelectStationForModal?.(fromStation);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.08] select-none touch-manipulation tap-transparent active:scale-90 transition-transform"
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

          {/* Swap Button (Reverses Trip with Apple Spring 180deg Rotation) */}
          <div className="absolute right-4 rtl:left-4 rtl:right-auto top-[45%] -translate-y-1/2 z-10">
            <StationSwapButton
              onSwap={swapStations}
              title={t.routePlanner.swapStations}
            />
          </div>

          {/* TO Station Button (Secondary Inset Layer) */}
          <div className="relative">
            <label className={`block text-[10px] uppercase text-slate-400 dark:text-[#5B5B63] mb-1 px-1 ${lang === 'ar' ? 'font-cairo tracking-normal' : 'font-mono tracking-wider'}`}>
              {t.routePlanner.toLabel}
            </label>
            <button
              onClick={() => {
                haptics.impact('LIGHT');
                setSearchTo('');
                setShowToPicker(true);
              }}
              className="w-full flex items-center justify-between p-3.5 rounded-[20px] bg-black/[0.025] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] select-none touch-manipulation tap-transparent active:scale-[0.985] transition-all duration-120 text-start"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1 pe-2">
                <div className="w-8 h-8 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center font-mono font-bold text-xs text-rose-600 dark:text-[#FF4A1C] flex-shrink-0 shadow-2xs">
                  {toStation ? toStation.nameEn.substring(0, 2).toUpperCase() : 'OUT'}
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-bold text-slate-900 dark:text-[#F4F4F5] truncate ${lang === 'ar' ? 'font-cairo' : 'font-space'}`}
                    title={selectedToLandmark ? (lang === 'ar' ? selectedToLandmark.nameAr : selectedToLandmark.nameEn) : (toStation ? (lang === 'ar' ? toStation.nameAr : toStation.nameEn) : '')}
                  >
                    {selectedToLandmark
                      ? (lang === 'ar' ? selectedToLandmark.nameAr : selectedToLandmark.nameEn)
                      : (toStation ? (lang === 'ar' ? toStation.nameAr : toStation.nameEn) : t.routePlanner.selectStation)}
                  </p>
                  {selectedToLandmark && toStation ? (
                    <p className="text-[10.5px] font-bold text-rose-600 dark:text-[#FF4A1C] font-cairo truncate mt-0.5">
                      📍 {lang === 'ar' ? `المحطة المستهدفة: ${toStation.nameAr}` : `Alighting at: ${toStation.nameEn}`}
                    </p>
                  ) : toStation ? (
                    <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                      {toStation.lines.map(l => (
                        <span
                          key={l}
                          className={`text-[9px] px-1.5 py-0.2 rounded font-bold text-white uppercase flex-shrink-0 ${lang === 'ar' ? 'font-cairo' : 'font-mono'}`}
                          style={{ backgroundColor: METRO_LINES[l]?.color || '#E11D48' }}
                        >
                          {lang === 'ar' ? METRO_LINES[l]?.shortNameAr : METRO_LINES[l]?.shortNameEn}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {toStation && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      haptics.select();
                      onSelectStationForModal?.(toStation);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.08] select-none touch-manipulation tap-transparent active:scale-90 transition-transform"
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

        {/* Saved Trips (Favorites) - Resilient Empty State & Huge Feed */}
        {effectiveSavedTrips.length === 0 ? (
          <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06] select-none">
            <div className="p-3 sm:p-3.5 rounded-[20px] border border-dashed border-slate-300/80 dark:border-slate-800 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xs flex items-center justify-between gap-3 transition-all">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 fill-none" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 font-cairo truncate">
                    {lang === 'ar' ? 'مشاويرك المفضلة فارغة' : 'No Saved Routes Yet'}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-cairo truncate mt-0.5">
                    {lang === 'ar' ? 'اضغط ⭐ في الأعلى لحفظ أي مسار والوصول إليه بلمسة واحدة' : 'Tap the ⭐ star above to favorite any route for 1-tap quick access'}
                  </p>
                </div>
              </div>
              {fromStation && toStation && fromStation.id !== toStation.id && (
                <button
                  type="button"
                  onClick={() => {
                    haptics.impact('LIGHT');
                    handleToggleSaveTrip();
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-[11px] font-bold font-cairo flex-shrink-0 whitespace-nowrap active:scale-95 transition-transform"
                >
                  {lang === 'ar' ? '+ حفظ المسار' : '+ Save Route'}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06] select-none">
            <div className="flex items-center justify-between mb-1.5 px-0.5">
              <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500 flex-shrink-0" />
                <span>{t.routePlanner.savedRoutes}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-mono">
                  {effectiveSavedTrips.length}
                </span>
              </p>
              {effectiveSavedTrips.length > 5 && (
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-cairo">
                  {lang === 'ar' ? 'اسحب لعرض المزيد ←' : 'Scroll for more →'}
                </span>
              )}
            </div>
            <ScrollablePillsRow lang={lang} className="gap-1.5 -mx-1 px-1 py-1">
              {effectiveSavedTrips.map((trip, idx) => (
                <div
                  key={trip.id || idx}
                  onClick={() => {
                    haptics.select();
                    if (devMode !== 'normal') setDevMode('normal');
                    setFromStationId(trip.fromId);
                    setToStationId(trip.toId);
                  }}
                  className="flex-shrink-0 max-w-[220px] sm:max-w-[280px] text-xs px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 font-bold flex items-center justify-between gap-2 cursor-pointer select-none touch-manipulation tap-transparent active:scale-95 transition-transform duration-120 shadow-2xs"
                  title={trip.name || (lang === 'ar' ? trip.titleAr : trip.titleEn)}
                >
                  <span className="truncate min-w-0 flex-1 font-cairo">
                    {trip.name || (lang === 'ar' ? trip.titleAr : trip.titleEn)}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handleRemoveSavedTrip(idx, e)}
                    className="p-0.5 text-amber-600 hover:text-amber-900 dark:hover:text-amber-100 rounded-md select-none touch-manipulation tap-transparent active:scale-90 flex-shrink-0"
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
      </AppleCard>

      {/* Same Station Alert */}
      {fromStationId === toStationId && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-center gap-3 text-amber-800 dark:text-amber-300 select-none">
          <Info className="w-5 h-5 flex-shrink-0" />
          <p className="text-xs font-semibold">{t.routePlanner.sameStationAlert}</p>
        </div>
      )}

      {/* 1. Trip Description (Plain-language overview - First thing directly under From-To card) */}
      {activeRoute && fromStationId !== toStationId && tripDescription && (
        <AppleCard variant="primary" className="p-4 sm:p-5 rounded-[22px] space-y-2.5">
          <div className="flex items-center justify-between select-none">
            <p className="text-[11px] uppercase font-bold text-slate-500 dark:text-zinc-400 tracking-wider flex items-center gap-1.5 font-cairo">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse flex-shrink-0" />
              <span>{lang === 'ar' ? 'تفاصيل مشوارك:' : 'Trip Description:'}</span>
            </p>
            {routeDistanceKm != null && (
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-700 dark:text-blue-300 flex items-center gap-1 font-cairo">
                <MapPin className="w-3 h-3 text-blue-500 flex-shrink-0" />
                <span>{lang === 'ar' ? `المسافة: ~${routeDistanceKm} كم` : `Distance: ~${routeDistanceKm} km`}</span>
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed font-cairo break-words [overflow-wrap:anywhere]">
            {tripDescription}
          </p>
        </AppleCard>
      )}

      {/* 2. Alternative Routes Selection Tabs */}
      {routes.length > 1 && (
        <div className="space-y-1.5 select-none">
          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 px-1">
            {lang === 'ar' ? 'خيارات المسارات البديلة المتوفرة:' : 'Available Route Options:'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {routes.map((r, idx) => {
              const isSelected = selectedRouteIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    haptics.select();
                    setSelectedRouteIndex(idx);
                  }}
                  className={`p-3 rounded-2xl border text-start select-none touch-manipulation tap-transparent min-w-0 overflow-hidden active:scale-[0.98] transition-all duration-120 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-rose-500 shadow-md ring-2 ring-rose-500/20'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 opacity-75 hover:opacity-100'
                  }`}
                >
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full truncate max-w-full inline-block ${
                    idx === 0
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      : 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300'
                  }`}>
                    {lang === 'ar' ? r.labelAr : r.labelEn}
                  </span>
                  <div className="mt-2 flex items-baseline justify-between gap-1 min-w-0">
                    <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate tabular-nums">
                      {r.stationCount} {t.routePlanner.stationsPassed}
                    </span>
                    <span className="text-xs font-extrabold text-rose-600 dark:text-rose-400 flex-shrink-0 tabular-nums">
                      {r.fareDetails?.totalCost ?? r.ticketTier?.price} {lang === 'ar' ? 'ج.م' : 'EGP'}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5 truncate tabular-nums">
                    {r.distanceKm != null ? `~${r.distanceKm} ${lang === 'ar' ? 'كم' : 'km'} • ` : ''}
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
          {/* Summary Stat Cards: 4 squares next to each other in exact order: Time - Stations - Transfers - Price */}
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {/* 1. Time */}
            <MetroStatTile
              label={lang === 'ar' ? 'الوقت' : 'TIME'}
              value={activeRoute.travelTimeMins}
              unit={lang === 'ar' ? 'دقيقة' : 'MIN'}
              tone="accent"
            />

            {/* 2. Stations (No 'stn' / 'محطة' suffix as requested) */}
            <MetroStatTile
              label={lang === 'ar' ? 'المحطات' : 'STATIONS'}
              value={activeRoute.stationCount}
              unit={null}
              tone="default"
            />

            {/* 3. Transfers */}
            <MetroStatTile
              label={lang === 'ar' ? 'التحويلات' : 'TRANSFERS'}
              value={transferDisplay}
              unit={null}
              tone={activeRoute.transfersCount === 0 ? 'success' : 'amber'}
            />

            {/* 4. Price Card with Enlarged Physical Ticket Image */}
            <div
              className={`flex flex-col justify-between p-2 sm:p-2.5 rounded-2xl border-2 apple-card-interactive active:scale-[0.97] transition-[border-color,background-color] duration-150 relative overflow-hidden min-h-[76px] sm:min-h-[82px] ${priceTheme.border} ${priceTheme.bg}`}
            >
              {/* Eyebrow Label with Ticket Icon */}
              <div className="flex items-center justify-between gap-1">
                <span
                  className={`text-[9.5px] sm:text-[10px] font-bold text-slate-600 dark:text-[#97979E] truncate leading-tight ${
                    lang === 'ar' ? 'font-cairo tracking-normal' : 'font-mono uppercase tracking-[0.8px]'
                  }`}
                >
                  {lang === 'ar' ? 'السعر' : 'PRICE'}
                </span>
                <Ticket className={`w-3.5 h-3.5 ${priceTheme.text} flex-shrink-0 opacity-80`} />
              </div>

              {/* Price Value + Currency Unit */}
              <div className="flex items-baseline gap-1 my-auto">
                <span className={`text-base sm:text-xl font-black font-space rtl:font-cairo tracking-tight rtl:tracking-normal tabular-nums leading-none ${priceTheme.text}`}>
                  {activeRoute.fareDetails.totalCost}
                </span>
                <span className="text-[9.5px] sm:text-xs font-semibold font-cairo text-slate-600 dark:text-[#97979E] flex-shrink-0 self-baseline whitespace-nowrap">
                  {lang === 'ar' ? 'ج.م' : 'LE'}
                </span>
              </div>

              {/* Dynamic Ticket Badge with Enlarged Physical Ticket Image */}
              <div className="mt-0.5 overflow-hidden flex items-center gap-1.5">
                {priceTheme.ticketImage && (
                  <img
                    src={priceTheme.ticketImage}
                    alt={priceTheme.badgeLabel}
                    className="w-7 h-4.5 sm:w-8 sm:h-5 object-contain rounded-xs shadow-xs flex-shrink-0"
                  />
                )}
                <span className={`inline-block truncate max-w-full text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-md leading-none shadow-2xs ${priceTheme.badgeBg}`}>
                  {priceTheme.badgeLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Round-Trip Commuter Advisory Card */}
          <div className="p-3 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 flex items-start gap-2.5 text-xs text-blue-950 dark:text-blue-200 select-none">
            <span className="text-sm flex-shrink-0 mt-0.5">💡</span>
            <div className="min-w-0 flex-1">
              <p className="font-bold font-cairo text-xs text-blue-900 dark:text-blue-200">
                {lang === 'ar' ? 'نصيحة للمشوار (ذهاب وعودة):' : 'Round-Trip Commuter Advice:'}
              </p>
              <p className="text-[11px] text-blue-800/90 dark:text-blue-300 font-cairo mt-0.5 leading-relaxed">
                {lang === 'ar'
                  ? `لتوفير وقت الانتظار، اشترِ تذكرتين معاً الآن من شباك التذاكر (${(activeRoute.fareDetails.totalCost || 0) * 2} ج.م للذهاب والعودة) عشان متقفش في طابور محطة الرجوع.`
                  : `Skip the return line: buy 2 tickets upfront (${(activeRoute.fareDetails.totalCost || 0) * 2} EGP) at your departure station so you have your return ticket ready.`}
              </p>
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
          <AppleCard variant="primary" className="p-3.5 sm:p-4.5 space-y-3.5 h-auto">
            <div className="flex items-center justify-between pb-2.5 border-b border-black/[0.04] dark:border-white/[0.06]">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2 font-cairo">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] flex-shrink-0" />
                <span>{t.routePlanner?.stepByStep || (lang === 'ar' ? 'مسار الرحلة' : 'Route Steps')}</span>
              </h3>
              <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 font-cairo">
                {activeRoute.transfersCount === 0 ? t.routePlanner.noTransfer : `${activeRoute.transfersCount} ${t.routePlanner.transfers}`}
              </span>
            </div>

            <div className="space-y-3.5">
              {activeRoute.legs.map((leg, legIdx) => {
                const isExpanded = !!expandedLegs[legIdx];
                const intermediateCount = Math.max(0, leg.stations.length - 2);

                return (
                  <div key={legIdx} className="relative pl-6 rtl:pr-6 rtl:pl-0 border-l-2 rtl:border-r-2 rtl:border-l-0 border-slate-200 dark:border-slate-700/80 pb-3.5 last:border-transparent last:pb-0">
                    {/* Circle Node on Timeline */}
                    <span
                      className="absolute -left-[9px] rtl:-right-[9px] rtl:left-auto top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-[#111113] shadow-sm"
                      style={{ backgroundColor: leg.lineInfo.color }}
                    />

                    {/* Leg Header: Board train & direction (Protected against RTL badge collisions) */}
                    <div className="space-y-2">
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
                          <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300 min-w-0 flex-wrap">
                            <span className="text-slate-500 dark:text-slate-400 font-medium text-[11px] flex-shrink-0">
                              {t.routePlanner.towardsDirection}
                            </span>
                            <span
                              className="text-slate-900 dark:text-white font-extrabold bg-slate-100 dark:bg-[#1D1D22] px-2 py-0.5 rounded-lg border border-slate-200/60 dark:border-[#26262C] shadow-2xs truncate max-w-[190px] sm:max-w-xs inline-block align-middle"
                              title={lang === 'ar'
                                ? (leg.direction?.nameAr || leg.directionAr || leg.toStation?.nameAr || '')
                                : (leg.direction?.nameEn || leg.directionEn || leg.toStation?.nameEn || '')}
                            >
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
                      <div className="bg-slate-50 dark:bg-[#17171A] p-3 rounded-2xl border border-slate-200/70 dark:border-[#26262C] space-y-2">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="min-w-0 flex-1 pe-2">
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                              {legIdx === 0 ? t.routePlanner.boardTrain : t.routePlanner.changeAt}
                            </p>
                            <p
                              className="text-sm font-extrabold text-slate-900 dark:text-[#F4F4F5] truncate font-cairo"
                              title={lang === 'ar' ? leg.fromStation.nameAr : leg.fromStation.nameEn}
                            >
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

                        {/* Collapsible Intermediate Stations list or compact direct notification */}
                        {intermediateCount > 0 ? (
                          <div className="pt-2 border-t border-slate-200/50 dark:border-[#26262C]">
                            <button
                              type="button"
                              onClick={() => {
                                haptics.light();
                                toggleLegExpand(legIdx);
                              }}
                              className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 text-xs font-bold apple-press active:scale-[0.97] transition-colors py-0.5"
                            >
                              <span
                                className="inline-flex transition-transform duration-200"
                                style={{
                                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                              >
                                <ChevronDown className="w-3.5 h-3.5" />
                              </span>
                              <span>
                                {isExpanded
                                  ? (lang === 'ar' ? 'إخفاء المحطات المتوسطة' : 'Hide intermediate stations')
                                  : (lang === 'ar' ? `عرض المحطات (${intermediateCount})` : `Show stations (${intermediateCount})`)}
                              </span>
                            </button>

                            <AppleAccordion isOpen={isExpanded} className="mt-1">
                              <ul className="space-y-1.5 pl-2 rtl:pr-2 rtl:pl-0 border-l-2 rtl:border-r-2 rtl:border-l-0 border-teal-500/30 text-xs py-1">
                                {leg.stations.slice(1, -1).map((st) => (
                                  <li
                                    key={st.id}
                                    onClick={() => onSelectStationForModal?.(st)}
                                    className="text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer flex items-center justify-between py-1 px-1.5 rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/60 apple-press active:scale-[0.98] transition-colors"
                                  >
                                    <span
                                      className="truncate min-w-0 flex-1 pe-2 font-medium font-cairo"
                                      title={lang === 'ar' ? st.nameAr : st.nameEn}
                                    >
                                      {lang === 'ar' ? st.nameAr : st.nameEn}
                                    </span>
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
                            </AppleAccordion>
                          </div>
                        ) : (
                          <div className="pt-1.5 border-t border-slate-200/50 dark:border-[#26262C] flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 flex-shrink-0" />
                            <span>{lang === 'ar' ? 'المحطة التالية مباشرة (بدون محطات متوسطة)' : 'Direct stop (next station)'}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Next step: Teal Interchange Transfer Card (from reference app) or Destination Arrival */}
                    {legIdx < activeRoute.legs.length - 1 ? (
                      <div className="mt-2.5 flex items-center justify-between text-xs font-bold bg-teal-500/15 dark:bg-teal-500/10 border border-teal-500/30 dark:border-teal-500/25 px-3.5 py-2.5 rounded-2xl shadow-sm gap-2">
                        <div className="space-y-0.5 min-w-0 flex-1 pe-2">
                          <p className="text-[10px] uppercase font-extrabold text-teal-600 dark:text-teal-400 tracking-wider">
                            {lang === 'ar' ? 'حوّل هنا' : 'Change here'}
                          </p>
                          <p
                            className="text-sm font-black text-slate-900 dark:text-white truncate font-cairo"
                            title={lang === 'ar' ? leg.toStation.nameAr : leg.toStation.nameEn}
                          >
                            {lang === 'ar' ? leg.toStation.nameAr : leg.toStation.nameEn}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold truncate">
                            {t.routePlanner.changeToLine} <span className="font-extrabold text-teal-700 dark:text-teal-300">{lang === 'ar' ? activeRoute.legs[legIdx + 1]?.lineInfo?.shortNameAr : activeRoute.legs[legIdx + 1]?.lineInfo?.shortNameEn}</span>
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0">
                          <ArrowUpDown className="w-4 h-4" />
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2.5 flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 rounded-2xl border border-emerald-200 dark:border-emerald-800/80 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <div className="min-w-0 flex-1 break-words font-cairo">
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
          </AppleCard>

          {/* Origin First-Mile Landmark Access (if origin is a landmark) */}
          {selectedFromLandmark && fromStation && (
            <LandmarkNavigationCard
              type="origin"
              landmark={selectedFromLandmark}
              station={fromStation}
              lang={lang}
              t={t}
            />
          )}

          {/* Destination Last-Mile Landmark Navigation (if destination is a landmark) */}
          {selectedToLandmark && toStation && (
            <LandmarkNavigationCard
              type="destination"
              landmark={selectedToLandmark}
              station={toStation}
              lang={lang}
              t={t}
            />
          )}
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
          onSelect={(st, lm) => {
            setFromStationId(st.id);
            setSelectedFromLandmark(lm || null);
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
          onSelect={(st, lm) => {
            setToStationId(st.id);
            setSelectedToLandmark(lm || null);
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

// Crisp Official Google Maps Pin Logo SVG
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

// Last-Mile & First-Mile Landmark Navigation Card with Google Maps Deep-Link
function LandmarkNavigationCard({
  type = 'destination', // 'destination' (Last-Mile) or 'origin' (First-Mile)
  landmark,
  station,
  lang,
  t
}) {
  if (!landmark || !station || !landmark.lat || !landmark.lng || !station.lat || !station.lng) {
    return null;
  }

  const isAr = lang === 'ar';
  const distKm = getDistanceKm(station.lat, station.lng, landmark.lat, landmark.lng);
  const distMeters = distKm * 1000;
  const walkMinutes = estimateWalkMinutes(distKm);
  const driveMinutes = Math.max(2, Math.round((distKm / 25) * 60));
  const isWalking = distKm <= 1.2;
  const travelMode = isWalking ? 'walking' : 'driving';

  // Origin -> Station or Station -> Landmark
  const originLat = type === 'origin' ? landmark.lat : station.lat;
  const originLng = type === 'origin' ? landmark.lng : station.lng;
  const destLat = type === 'origin' ? station.lat : landmark.lat;
  const destLng = type === 'origin' ? station.lng : landmark.lng;

  const gmapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${originLat},${originLng}&destination=${destLat},${destLng}&travelmode=${travelMode}`;

  // Formatted instruction strings strictly adhering to User Requirement Task 6:
  // <= 1.2 km:
  // EN: 🚶 Walk ~${Math.round(distMeters)} m (${walkMinutes} min) from ${arrivalStation.nameEn} to ${landmark.nameEn}
  // AR: 🚶 المشي حوالي ${Math.round(distMeters)} م (${walkMinutes} دقيقة) من محطة ${arrivalStation.nameAr} إلى ${landmark.nameAr}
  // > 1.2 km:
  // EN: 🚗 Take a taxi / ride / motorcycle ~${distKm.toFixed(1)} km (${driveMinutes} min) from ${arrivalStation.nameEn} to ${landmark.nameEn}
  // AR: 🚗 استقل تاكسي أو أوبر أو دراجة نارية لمسافة ${distKm.toFixed(1)} كم (حوالي ${driveMinutes} دقيقة) من محطة ${arrivalStation.nameAr} إلى ${landmark.nameAr}
  let instructionText = '';
  if (type === 'destination') {
    if (isWalking) {
      instructionText = isAr
        ? `🚶 المشي حوالي ${Math.round(distMeters)} م (${walkMinutes} دقيقة) من محطة ${station.nameAr} إلى ${landmark.nameAr}`
        : `🚶 Walk ~${Math.round(distMeters)} m (${walkMinutes} min) from ${station.nameEn} to ${landmark.nameEn}`;
    } else {
      instructionText = isAr
        ? `🚗 استقل تاكسي أو أوبر أو دراجة نارية لمسافة ${distKm.toFixed(1)} كم (حوالي ${driveMinutes} دقيقة) من محطة ${station.nameAr} إلى ${landmark.nameAr}`
        : `🚗 Take a taxi / ride / motorcycle ~${distKm.toFixed(1)} km (${driveMinutes} min) from ${station.nameEn} to ${landmark.nameEn}`;
    }
  } else {
    // origin
    if (isWalking) {
      instructionText = isAr
        ? `🚶 المشي حوالي ${Math.round(distMeters)} م (${walkMinutes} دقيقة) من ${landmark.nameAr} إلى محطة ${station.nameAr}`
        : `🚶 Walk ~${Math.round(distMeters)} m (${walkMinutes} min) from ${landmark.nameEn} to ${station.nameEn}`;
    } else {
      instructionText = isAr
        ? `🚗 استقل تاكسي أو أوبر أو دراجة نارية لمسافة ${distKm.toFixed(1)} كم (حوالي ${driveMinutes} دقيقة) من ${landmark.nameAr} إلى محطة ${station.nameAr}`
        : `🚗 Take a taxi / ride / motorcycle ~${distKm.toFixed(1)} km (${driveMinutes} min) from ${landmark.nameEn} to ${station.nameEn}`;
    }
  }

  const CategoryIcon = getPlaceCategoryIcon(landmark.category);
  const badgeClass = getPlaceCategoryBadgeClass(landmark.category);

  return (
    <div className={`p-4 rounded-[22px] border transition-all duration-150 select-none shadow-sm ${
      type === 'destination'
        ? 'bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-500/15 dark:via-[#16161A] dark:to-[#111113] border-amber-500/30'
        : 'bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent dark:from-blue-500/15 dark:via-[#16161A] dark:to-[#111113] border-blue-500/30'
    }`}>
      {/* Top Header Badge */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`p-1.5 rounded-xl ${badgeClass} flex-shrink-0`}>
            <CategoryIcon className="w-4 h-4" />
          </span>
          <div className="min-w-0">
            <span className={`text-[10px] font-black uppercase tracking-wider block ${
              type === 'destination' ? 'text-amber-600 dark:text-amber-400' : 'text-blue-600 dark:text-blue-400'
            }`}>
              {type === 'destination'
                ? (isAr ? '📍 الميل الأخير: الملاحة إلى وجهتك' : '📍 LAST-MILE LANDMARK NAVIGATION')
                : (isAr ? '🚀 الميل الأول: الانتقال إلى المحطة' : '🚀 FIRST-MILE ACCESS')}
            </span>
            <p className="text-xs font-black text-slate-900 dark:text-white font-cairo truncate">
              {isAr ? landmark.nameAr : landmark.nameEn}
            </p>
          </div>
        </div>

        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
          isWalking
            ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25'
            : 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/25'
        }`}>
          {isWalking
            ? (isAr ? '🚶 مشي' : '🚶 Walking')
            : (isAr ? '🚗 تاكسي / دراجة' : '🚗 Ride / Taxi')}
        </span>
      </div>

      {/* Instruction Banner */}
      <div className="p-3 rounded-2xl bg-white/90 dark:bg-[#1A1A20] border border-black/[0.04] dark:border-white/[0.06] shadow-2xs mb-3 space-y-1.5">
        <p className="text-xs font-bold text-slate-900 dark:text-slate-100 font-cairo leading-relaxed">
          {instructionText}
        </p>
        <div className="flex items-center gap-3 text-[10.5px] text-slate-500 dark:text-slate-400 font-mono">
          <span>{isAr ? 'المسافة:' : 'Distance:'} <b className="text-slate-700 dark:text-slate-200">{formatDistance(distKm, lang)}</b></span>
          <span>•</span>
          <span>{isAr ? 'الوقت التقديري:' : 'Est. Time:'} <b className="text-slate-700 dark:text-slate-200">~{isWalking ? walkMinutes : driveMinutes} {isAr ? 'دقيقة' : 'mins'}</b></span>
        </div>
      </div>

      {/* Prominent Google Maps Button with Official Google Maps Pin Logo */}
      <a
        href={gmapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => haptics.impact('MEDIUM')}
        className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-white dark:bg-[#1E1E24] hover:bg-slate-50 dark:hover:bg-[#25252D] text-slate-900 dark:text-white border border-slate-200 dark:border-[#2C2C35] hover:border-blue-400 dark:hover:border-blue-500 shadow-sm active:scale-[0.98] transition-all group"
      >
        <GoogleMapsLogo className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
        <span className={`text-xs font-extrabold ${isAr ? 'font-cairo' : 'font-space tracking-wide'}`}>
          {isAr
            ? `فتح المسار في خرائط Google (${isWalking ? 'مشي' : 'سيارة'})`
            : `Open in Google Maps (${isWalking ? 'Walk' : 'Drive'})`}
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 flex-shrink-0 ms-auto rtl:ms-0 rtl:me-auto" />
      </a>
    </div>
  );
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
  const { handlers: sheetDragHandlers, sheetStyle } = useSheetDragToDismiss({ onClose });
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

  const handleStationClick = (st, lm = null) => {
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
    onSelect(st, lm);
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

  // Clean, non-clipped filter tabs with exact user-specified transit colors and line names
  const filterTabs = [
    { id: 'all', labelEn: 'All', labelAr: 'الكل' },
    { id: 'line1', labelEn: 'M1', labelAr: 'الخط الأول', color: '#00518e' },
    { id: 'line2', labelEn: 'M2', labelAr: 'الخط الثانى', color: '#c13038' },
    { id: 'line3', labelEn: 'M3', labelAr: 'الخط الثالث', color: '#009f87' },
    { id: 'interchange', labelEn: 'Hubs', labelAr: 'محطات تبادلية', color: '#ecc15f' },
    { id: 'monorail_east', labelEn: 'East Monorail', labelAr: 'مونوريل شرق', color: '#009ca6' },
    { id: 'monorail_west', labelEn: 'West Monorail', labelAr: 'مونوريل غرب', color: '#9b2521' },
    { id: 'lrt', labelEn: 'LRT', labelAr: 'القطار LRT', color: '#9e1b33' },
    { id: 'brt', labelEn: 'BRT', labelAr: 'حافلات BRT', color: '#8B5CF6' }
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
        style={sheetStyle}
        className="w-full max-w-lg bg-white dark:bg-[#111113] rounded-none sm:rounded-[24px] h-[100dvh] sm:h-[640px] max-h-[100dvh] flex flex-col shadow-2xl border-0 sm:border border-slate-200 dark:border-[#26262C] apple-sheet-enter overflow-hidden pt-[env(safe-area-inset-top,12px)] select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Apple Grab Handle (Draggable down to dismiss) */}
        <div
          {...sheetDragHandlers}
          className="w-full py-2.5 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none sm:hidden flex-shrink-0"
        >
          <div className="w-10 h-1.5 bg-slate-300 dark:bg-[#2A2A32] rounded-full" />
        </div>

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
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-[#F4F4F5] hover:bg-slate-100 dark:hover:bg-[#17171A] select-none touch-manipulation tap-transparent active:scale-90 transition-transform"
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
            <button onClick={() => setConstructionWarning(null)} className="p-1 hover:opacity-75 select-none touch-manipulation tap-transparent active:scale-90">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Search input with Paste Google Maps support & Filter Strips */}
        <div className="p-2.5 sm:p-3 border-b border-slate-100 dark:border-[#1D1D22] space-y-2 bg-white dark:bg-[#111113] flex-shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 rtl:left-auto top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  if (displayedStations.length > 0) {
                    handleStationClick(displayedStations[0]);
                  } else if (searchResults.landmarks.length > 0 && searchResults.landmarks[0].station) {
                    handleStationClick(searchResults.landmarks[0].station, searchResults.landmarks[0]);
                  }
                } else if (e.key === 'Escape') {
                  e.preventDefault();
                  onClose();
                }
              }}
              placeholder={lang === 'ar' ? 'ابحث عن محطة أو معلم...' : 'Search station or landmark...'}
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck="false"
              enterKeyHint="search"
              className="w-full pl-9 pr-9 rtl:pr-9 rtl:pl-9 py-2 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#17171A] text-[16px] sm:text-xs font-semibold font-cairo text-slate-900 dark:text-[#F4F4F5] placeholder:text-slate-400 placeholder:font-normal border border-slate-200 dark:border-[#26262C] focus:outline-none focus:ring-1 focus:ring-rose-500 select-text touch-manipulation tap-transparent"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  haptics.impact('LIGHT');
                  setSearchQuery('');
                }}
                className="absolute right-3 rtl:left-3 rtl:right-auto top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 select-none touch-manipulation tap-transparent active:scale-90 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Popular Hubs 1-Tap Chips */}
          {!searchQuery && (
            <div className="space-y-1 pt-0.5 select-none">
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
                      className="flex-shrink-0 min-w-max px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#17171A] dark:hover:bg-[#212127] text-[11.5px] font-cairo font-semibold text-slate-800 dark:text-[#F4F4F5] flex items-center gap-1.5 select-none touch-manipulation tap-transparent active:scale-95 transition-transform duration-120 border border-slate-200/60 dark:border-[#26262C] whitespace-nowrap"
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
          <ScrollablePillsRow lang={lang} className="gap-1.5 pt-0.5 select-none">
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
                  className={`flex-shrink-0 min-w-max px-2.5 py-1 rounded-xl text-[11.5px] font-cairo font-semibold select-none touch-manipulation tap-transparent active:scale-95 transition-all duration-120 flex items-center gap-1.5 whitespace-nowrap ${
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
          <ScrollablePillsRow lang={lang} className="gap-1.5 pt-0.5 border-t border-slate-100 dark:border-[#1D1D22] select-none">
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
                  className={`flex-shrink-0 min-w-max px-2.5 py-1 rounded-xl text-[11px] font-cairo font-semibold select-none touch-manipulation tap-transparent active:scale-95 transition-all duration-120 flex items-center gap-1.5 whitespace-nowrap ${
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
            <div className="p-2.5 mb-2 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900/50 select-none">
              <p className="text-[10.5px] font-bold uppercase text-rose-600 dark:text-rose-400 mb-1 flex items-center gap-1.5 font-cairo">
                <Compass className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{lang === 'ar' ? 'أقرب محطة لموقعك الحالي عبر GPS' : 'Nearest Station to your GPS'}</span>
              </p>
              <button
                onClick={() => handleStationClick(nearestGpsStation)}
                className="w-full text-start p-2 rounded-xl flex items-center justify-between hover:bg-white dark:hover:bg-slate-800 select-none touch-manipulation tap-transparent active:scale-[0.98] transition-colors"
              >
                <div className="min-w-0 flex-1 pe-2">
                  <p className="text-xs font-bold text-slate-900 dark:text-white truncate font-cairo">
                    {lang === 'ar' ? nearestGpsStation.nameAr : nearestGpsStation.nameEn}
                  </p>
                  <p className="text-[10.5px] text-slate-500 font-medium truncate font-cairo mt-0.5">
                    {formatDistance(nearestGpsStation.distanceKm, lang)} ({nearestGpsStation.walkMins} {t.routePlanner.mins})
                  </p>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-rose-600 text-white flex-shrink-0 ms-2 font-cairo select-none touch-manipulation tap-transparent active:scale-95">
                  {lang === 'ar' ? 'اختيار' : 'Select'}
                </span>
              </button>
            </div>
          )}

          {/* 1. Matched Stations (Filtered & Prefix-first sorted) - ALWAYS SHOWN FIRST */}
          {displayedStations.length > 0 && (
            <div className="py-1 mb-2 select-none">
              <div className="px-2 mb-1.5 flex items-center justify-between">
                <p className="text-[11px] font-bold text-slate-700 dark:text-zinc-300 flex items-center gap-1.5 font-cairo">
                  <Train className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>
                    {activeLineFilter !== 'all'
                      ? (lang === 'ar' ? `محطات ${filterTabs.find(f => f.id === activeLineFilter)?.labelAr || ''}:` : `${filterTabs.find(f => f.id === activeLineFilter)?.labelEn || ''} Stations:`)
                      : (lang === 'ar' ? 'المحطات (مترو • قطار خفيف • مونوريل • ترددي):' : 'Transit Stations (Metro • LRT • Monorail • BRT):')}
                  </span>
                </p>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-cairo">
                  {displayedStations.length} {lang === 'ar' ? 'محطة' : 'stations'}
                </span>
              </div>
              <div className="space-y-1">
                {displayedStations.map((st) => {
                  const isSelected = st.id === selectedId;
                  const isUnderConstruction = Boolean(st.underConstruction);
                  const isBlocked = isUnderConstruction && !st.allowSimulation;
                  const landmarksList = lang === 'ar' ? st.landmarksAr : st.landmarks;
                  const landmarksText = landmarksList && landmarksList.length > 0
                    ? landmarksList.slice(0, 2).join(' • ')
                    : null;

                  return (
                    <button
                      key={st.id}
                      onClick={() => handleStationClick(st)}
                      className={`w-full text-start p-3 rounded-2xl flex items-center justify-between select-none touch-manipulation tap-transparent active:scale-[0.98] transition-colors cv-auto ${
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
              </div>
            </div>
          )}

          {/* 2. Matched Top Egypt Places & Landmarks (Universities, Hospitals, Malls, etc.) - ALWAYS SHOWN AFTER STATIONS */}
          {searchResults.landmarks.length > 0 && (
            <div className="py-2.5 mb-2 bg-slate-50/70 dark:bg-[#151518] rounded-2xl border border-slate-100 dark:border-[#212127] p-1.5 select-none mt-2">
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
                      onClick={() => handleStationClick(lm.station, lm)}
                      className="w-full text-start p-2.5 rounded-xl hover:bg-white dark:hover:bg-[#1E1E23] flex items-center justify-between select-none touch-manipulation tap-transparent active:scale-[0.98] transition-colors group shadow-2xs border border-transparent hover:border-slate-200/60 dark:hover:border-[#2B2B32]"
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

          {displayedStations.length === 0 && searchResults.landmarks.length === 0 && (
            <div className="p-8 text-center text-xs font-cairo text-slate-400 flex flex-col items-center justify-center gap-3 my-auto animate-fade-in select-none">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-[#1E1E24] border border-slate-200/80 dark:border-[#2C2C35] flex items-center justify-center text-slate-400 dark:text-slate-500 shadow-inner">
                <Search className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="space-y-1 max-w-xs">
                <p className="font-bold text-sm text-slate-800 dark:text-slate-200">
                  {lang === 'ar' ? 'مفيش نتائج مطابقة للبحث' : 'No matching results found'}
                </p>
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  {searchQuery
                    ? (lang === 'ar' ? `لم نعثر على محطة أو معلم باسم "${searchQuery}"` : `Couldn't find any station or landmark matching "${searchQuery}"`)
                    : (lang === 'ar' ? 'لا توجد محطات في هذا التصنيف' : 'No stations in this category filter')}
                </p>
              </div>

              {/* Actionable Suggestions & Quick Recovery */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5 max-w-sm">
                <span className="w-full text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                  {lang === 'ar' ? 'اقتراحات وحلول سريعة:' : 'Quick suggestions:'}
                </span>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40 text-[11px] font-bold active:scale-95 transition-transform"
                  >
                    {lang === 'ar' ? '✕ مسح كلمة البحث' : '✕ Clear search'}
                  </button>
                )}
                {activeLineFilter !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setActiveLineFilter('all')}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#202026] text-slate-700 dark:text-slate-300 text-[11px] font-bold active:scale-95 transition-transform"
                  >
                    {lang === 'ar' ? 'عرض كل الخطوط' : 'Show all lines'}
                  </button>
                )}
                {activeCategoryFilter !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setActiveCategoryFilter('all')}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#202026] text-slate-700 dark:text-slate-300 text-[11px] font-bold active:scale-95 transition-transform"
                  >
                    {lang === 'ar' ? 'عرض كل الأماكن' : 'Show all places'}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveLineFilter('all');
                    const st = STATIONS.find(s => s.id === 'al_shohadaa');
                    if (st) handleStationClick(st);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#202026] text-slate-700 dark:text-slate-300 text-[11px] font-bold active:scale-95 transition-transform"
                >
                  {lang === 'ar' ? 'رمسيس (الشهداء)' : 'Ramses (Shohadaa)'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveLineFilter('all');
                    const st = STATIONS.find(s => s.id === 'sadat');
                    if (st) handleStationClick(st);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#202026] text-slate-700 dark:text-slate-300 text-[11px] font-bold active:scale-95 transition-transform"
                >
                  {lang === 'ar' ? 'التحرير (السادات)' : 'Tahrir (Sadat)'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
