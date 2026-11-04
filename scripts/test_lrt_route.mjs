import { findRoute } from '../src/utils/routing.js';

const route = findRoute('adly_mansour', 'lrt_capital_gardens', { includeOtherModes: true, transitMode: 'lrt' });
console.log('Result for adly_mansour -> lrt_capital_gardens:');
console.log('stationCount:', route?.stationCount);
console.log('travelTimeMins:', route?.travelTimeMins);
console.log('totalCost:', route?.fareDetails?.totalCost);
console.log('stationsList:', route?.stationsList?.map(s => s.nameEn).join(' -> '));
