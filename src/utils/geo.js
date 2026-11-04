import { STATIONS, CAIRO_LANDMARKS } from '../data/metroData.js';
import { TOP_EGYPT_PLACES, CATEGORY_METADATA } from '../data/egyptPlaces.js';

export { TOP_EGYPT_PLACES, CATEGORY_METADATA };

// Haversine formula to compute great-circle distance between two points on Earth in km
export function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// Format distance nicely: e.g. 450 m or 3.2 km
export function formatDistance(distanceKm, lang = 'en') {
  if (distanceKm < 1) {
    const meters = Math.round(distanceKm * 1000);
    return lang === 'ar' ? `${meters} متر` : `${meters} m`;
  }
  const km = distanceKm.toFixed(1);
  return lang === 'ar' ? `${km} كم` : `${km} km`;
}

// Estimate walking time in minutes
export function estimateWalkMinutes(distanceKm) {
  return Math.max(1, Math.round((distanceKm / 4.8) * 60));
}

// Find nearest N stations from coordinates (optional stationList filter)
export function findNearestStations(lat, lng, count = 5, stationList = STATIONS) {
  if (!lat || !lng) return [];

  const stationsToSearch = Array.isArray(stationList) && stationList.length > 0 ? stationList : STATIONS;

  const stationsWithDistance = stationsToSearch.map(station => {
    const distanceKm = getDistanceKm(lat, lng, station.lat, station.lng);
    const walkMins = estimateWalkMinutes(distanceKm);
    return {
      ...station,
      distanceKm,
      walkMins
    };
  });

  stationsWithDistance.sort((a, b) => a.distanceKm - b.distanceKm);
  return stationsWithDistance.slice(0, count);
}

// Parse Google Maps URLs or Lat,Lng raw coordinates
// e.g. "https://maps.google.com/?q=30.0444,31.2356" or "30.0444, 31.2356" or "geo:30.0444,31.2356"
export function parseCoordinates(input) {
  if (!input || typeof input !== 'string') return null;
  const str = input.trim();

  // Pattern 1: Raw numbers "30.0444, 31.2356"
  const rawCoords = str.match(/^(-?\d+\.\d+)[,\s]+(-?\d+\.\d+)$/);
  if (rawCoords) {
    const lat = parseFloat(rawCoords[1]);
    const lng = parseFloat(rawCoords[2]);
    if (lat >= 28 && lat <= 32 && lng >= 30 && lng <= 33) {
      return { lat, lng };
    }
  }

  // Pattern 2: Google Maps URL query "q=lat,lng" or "@lat,lng"
  const urlCoords = str.match(/(?:q=|\/|@)(-?\d+\.\d+)[,\s]+(-?\d+\.\d+)/);
  if (urlCoords) {
    const lat = parseFloat(urlCoords[1]);
    const lng = parseFloat(urlCoords[2]);
    if (lat >= 28 && lat <= 32 && lng >= 30 && lng <= 33) {
      return { lat, lng };
    }
  }

  return null;
}

// Normalize Arabic letters (remove accents/alef hamzas for clean fuzzy prefix matching)
export function normalizeArabic(text) {
  if (!text) return '';
  return text
    .replace(/[أإآ]/g, 'ا')
    .replace(/[ى]/g, 'ي')
    .replace(/[ة]/g, 'ه')
    .replace(/[ًٌٍَُِّْ]/g, '')
    .trim()
    .toLowerCase();
}

// Combined comprehensive places repository (Top 1,000+ Egypt Places & Landmarks)
const ALL_EGYPT_PLACES = [...TOP_EGYPT_PLACES];
for (const cl of (CAIRO_LANDMARKS || [])) {
  if (!ALL_EGYPT_PLACES.some(p => p.nameEn.toLowerCase() === cl.nameEn.toLowerCase())) {
    ALL_EGYPT_PLACES.push({
      id: `cairo_lm_${cl.nameEn.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
      nameAr: cl.nameAr,
      nameEn: cl.nameEn,
      category: cl.category || 'landmark',
      categoryAr: cl.categoryAr || 'معلم سياحي',
      categoryEn: cl.categoryEn || 'Landmark & Heritage',
      nearestStationId: cl.nearestStationId,
      lat: cl.lat,
      lng: cl.lng,
      aliases: cl.aliases || []
    });
  }
}

// Prefix-first Search Algorithm matching stations, top 1000 places & aliases
export function searchStationsAndPlaces(query, lang = 'en', categoryFilter = 'all') {
  const isFilterActive = categoryFilter && categoryFilter !== 'all';

  if (!query || !query.trim()) {
    if (isFilterActive) {
      const filteredPlaces = ALL_EGYPT_PLACES.filter(p => p.category === categoryFilter).slice(0, 30).map(lm => ({
        ...lm,
        station: STATIONS.find(s => s.id === lm.nearestStationId) || findNearestStations(lm.lat, lm.lng, 1)[0]
      }));
      return { stations: STATIONS, landmarks: filteredPlaces };
    }
    return { stations: STATIONS, landmarks: [] };
  }

  const q = query.trim().toLowerCase();
  const qNormAr = normalizeArabic(query);

  // Check if query is a Google Maps link or coordinates
  const parsedCoords = parseCoordinates(query);
  if (parsedCoords) {
    const nearest = findNearestStations(parsedCoords.lat, parsedCoords.lng, 3);
    return {
      stations: nearest,
      landmarks: [],
      isLocationMatch: true,
      coords: parsedCoords
    };
  }

  // 1. Search stations with prefix priority
  const scoredStations = STATIONS.map(st => {
    let score = 999;
    const nameEn = st.nameEn.toLowerCase();
    const nameAr = st.nameAr;
    const normAr = normalizeArabic(nameAr);

    // Exact matches
    if (nameEn === q || normAr === qNormAr) score = 1;
    // Prefix match in English name or words
    else if (nameEn.startsWith(q)) score = 2;
    else if (nameEn.split(' ').some(w => w.startsWith(q))) score = 3;
    // Prefix match in Arabic name or words
    else if (normAr.startsWith(qNormAr)) score = 2;
    else if (normAr.split(' ').some(w => w.startsWith(qNormAr))) score = 3;
    // Aliases prefix match (e.g. Urabi, Ramses, Tahrir)
    else if (st.aliasesEn?.some(a => a.toLowerCase().startsWith(q))) score = 4;
    else if (st.aliasesAr?.some(a => normalizeArabic(a).startsWith(qNormAr))) score = 4;
    // Substring match
    else if (nameEn.includes(q)) score = 10;
    else if (normAr.includes(qNormAr)) score = 10;
    else if (st.aliasesEn?.some(a => a.toLowerCase().includes(q))) score = 12;
    else if (st.aliasesAr?.some(a => normalizeArabic(a).includes(qNormAr))) score = 12;
    // Landmark association match
    else if (st.landmarks?.some(l => l.toLowerCase().includes(q)) || st.landmarksAr?.some(l => normalizeArabic(l).includes(qNormAr))) score = 20;

    return { station: st, score };
  }).filter(item => item.score < 999);

  scoredStations.sort((a, b) => a.score - b.score);

  // 2. Search Top 1,000 Egypt Places & Landmarks
  const matchedLandmarks = ALL_EGYPT_PLACES.map(lm => {
    if (isFilterActive && lm.category !== categoryFilter) {
      return { place: lm, score: 999 };
    }

    let score = 999;
    const nameEn = lm.nameEn.toLowerCase();
    const normAr = normalizeArabic(lm.nameAr);

    // Exact matches
    if (nameEn === q || normAr === qNormAr) score = 1;
    // Prefix match in English or Arabic
    else if (nameEn.startsWith(q) || normAr.startsWith(qNormAr)) score = 2;
    // Word start prefix match
    else if (nameEn.split(' ').some(w => w.startsWith(q)) || normAr.split(' ').some(w => w.startsWith(qNormAr))) score = 3;
    // Aliases prefix match (AUC, GUC, CU, Kasr Al Ainy, etc.)
    else if (lm.aliases?.some(a => a.toLowerCase().startsWith(q) || normalizeArabic(a).startsWith(qNormAr))) score = 4;
    // Substring in name
    else if (nameEn.includes(q) || normAr.includes(qNormAr)) score = 10;
    // Substring in aliases
    else if (lm.aliases?.some(a => a.toLowerCase().includes(q) || normalizeArabic(a).includes(qNormAr))) score = 12;
    // Category match
    else if ((lm.categoryAr && normalizeArabic(lm.categoryAr).includes(qNormAr)) || (lm.categoryEn && lm.categoryEn.toLowerCase().includes(q))) score = 15;

    return { place: lm, score };
  })
  .filter(item => item.score < 999)
  .sort((a, b) => a.score - b.score)
  .slice(0, 25)
  .map(item => {
    const lm = item.place;
    const station = STATIONS.find(s => s.id === lm.nearestStationId) || findNearestStations(lm.lat, lm.lng, 1)[0];
    return {
      ...lm,
      station
    };
  });

  return {
    stations: scoredStations.map(s => s.station),
    landmarks: matchedLandmarks
  };
}
