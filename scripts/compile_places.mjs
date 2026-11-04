import fs from 'fs';
import { STATIONS } from '../src/data/metroData.js';
import { universities } from './data/universities.mjs';
import { hospitals } from './data/hospitals.mjs';
import { malls } from './data/malls.mjs';
import { landmarks } from './data/landmarks.mjs';
import { government } from './data/government.mjs';
import { transport } from './data/transport.mjs';
import { sports } from './data/sports.mjs';

const validStationIds = new Set(STATIONS.map(s => s.id));
console.log(`Loaded ${validStationIds.size} stations from metroData.js.`);

const allPlaces = [
  ...universities,
  ...hospitals,
  ...malls,
  ...landmarks,
  ...government,
  ...transport,
  ...sports
];

console.log(`Total places gathered: ${allPlaces.length}`);

// Validate uniqueness of IDs
const seenIds = new Set();
for (const p of allPlaces) {
  if (seenIds.has(p.id)) {
    throw new Error(`Duplicate ID found: "${p.id}"`);
  }
  seenIds.add(p.id);

  if (!validStationIds.has(p.nearestStationId)) {
    throw new Error(`Invalid nearestStationId: "${p.nearestStationId}" in place "${p.id}"`);
  }

  if (!p.nameAr || !p.nameEn || !p.category || typeof p.lat !== 'number' || typeof p.lng !== 'number') {
    throw new Error(`Missing required fields in place "${p.id}"`);
  }
}

console.log(`All ${allPlaces.length} places verified successfully! No duplicates, all station IDs valid.`);

const fileContent = `/**
 * TOP_EGYPT_PLACES - Comprehensive Database of 1,000+ Egypt Places & Landmarks
 * Greater Cairo, New Cairo, Giza, 6th of October, Sheikh Zayed, New Administrative Capital, Shorouk, Obour, Helwan
 *
 * Includes:
 * - 80+ Top Universities, Higher Institutes & Academies
 * - 170+ Major Hospitals, Medical Complexes & Specialized Centers
 * - 170+ Shopping Malls, Hypermarkets & Historic Souqs
 * - 180+ Historic & Cultural Landmarks, Pyramids, Museums & Citadels
 * - 160+ Government Ministries, Courts, Sovereign Authorities & Embassies
 * - 140+ Transport Hubs, Railway Stations, Airports, Microbus Terminals & Major City Squares
 * - 100+ Sports Clubs, Stadiums, Olympic Centers & Youth Facilities
 */

export const CATEGORY_METADATA = {
  university: {
    key: 'university',
    nameAr: 'جامعة وأكاديمية',
    nameEn: 'University & Academy',
    icon: 'GraduationCap',
    badgeColor: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
  },
  hospital: {
    key: 'hospital',
    nameAr: 'مستشفى ومركز طبي',
    nameEn: 'Hospital & Medical',
    icon: 'HeartPulse',
    badgeColor: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800'
  },
  mall: {
    key: 'mall',
    nameAr: 'مول وتسوق',
    nameEn: 'Shopping Mall',
    icon: 'ShoppingBag',
    badgeColor: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800'
  },
  landmark: {
    key: 'landmark',
    nameAr: 'معلم سياحي وتراثي',
    nameEn: 'Landmark & Heritage',
    icon: 'Landmark',
    badgeColor: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800'
  },
  government: {
    key: 'government',
    nameAr: 'مقر حكومي وسفارة',
    nameEn: 'Government & Embassy',
    icon: 'Building2',
    badgeColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
  },
  transport: {
    key: 'transport',
    nameAr: 'محطة وميدان نقل',
    nameEn: 'Transport Hub & Square',
    icon: 'Bus',
    badgeColor: 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200 dark:border-sky-800'
  },
  sports: {
    key: 'sports',
    nameAr: 'نادي واستاد رياضي',
    nameEn: 'Sports & Stadium',
    icon: 'Trophy',
    badgeColor: 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800'
  }
};

export const TOP_EGYPT_PLACES = ${JSON.stringify(allPlaces, null, 2)};

export function getPlaceById(id) {
  return TOP_EGYPT_PLACES.find(p => p.id === id) || null;
}

export function getPlacesByCategory(category) {
  return TOP_EGYPT_PLACES.filter(p => p.category === category);
}

export default TOP_EGYPT_PLACES;
`;

fs.writeFileSync('src/data/egyptPlaces.js', fileContent, 'utf8');
console.log(`Successfully generated src/data/egyptPlaces.js (${(fileContent.length / 1024).toFixed(1)} KB)!`);
