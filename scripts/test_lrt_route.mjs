import { findRoute } from '../src/utils/routing.js';

console.log('=== TEST 1: Adly Mansour -> Capital Gardens (Fork 2) ===');
const r1 = findRoute('adly_mansour', 'lrt_capital_gardens', { includeOtherModes: true, transitMode: 'lrt' });
console.log('stationCount:', r1?.stationCount);
console.log('travelTimeMins:', r1?.travelTimeMins);
console.log('totalCost:', r1?.fareDetails?.totalCost);
console.log('stationsList:', r1?.stationsList?.map(s => s.nameEn).join(' -> '));

console.log('\n=== TEST 2: Adly Mansour -> Knowledge City (Fork 1) ===');
const r2 = findRoute('adly_mansour', 'lrt_knowledge_city', { includeOtherModes: true, transitMode: 'lrt' });
console.log('stationCount:', r2?.stationCount);
console.log('travelTimeMins:', r2?.travelTimeMins);
console.log('totalCost:', r2?.fareDetails?.totalCost);
console.log('stationsList:', r2?.stationsList?.map(s => s.nameEn).join(' -> '));

console.log('\n=== TEST 3: Adly Mansour -> City of Arts (Fork 2 Terminal) ===');
const r3 = findRoute('adly_mansour', 'city_of_arts', { includeOtherModes: true, transitMode: 'lrt' });
console.log('stationCount:', r3?.stationCount);
console.log('travelTimeMins:', r3?.travelTimeMins);
console.log('totalCost:', r3?.fareDetails?.totalCost);
console.log('stationsList:', r3?.stationsList?.map(s => s.nameEn).join(' -> '));

console.log('\n=== TEST 4: Knowledge City -> City of Arts (Cross-Fork Transfer via Badr) ===');
const r4 = findRoute('lrt_knowledge_city', 'city_of_arts', { includeOtherModes: true, transitMode: 'lrt' });
console.log('stationCount:', r4?.stationCount);
console.log('travelTimeMins:', r4?.travelTimeMins);
console.log('totalCost:', r4?.fareDetails?.totalCost);
console.log('stationsList:', r4?.stationsList?.map(s => s.nameEn).join(' -> '));
