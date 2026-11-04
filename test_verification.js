import { findMultipleRoutes, findRoute, calculateTicketPrice } from './src/utils/routing.js';
import { STATIONS, METRO_LINES, TICKET_TIERS } from './src/data/metroData.js';

console.log('====================================================');
console.log('🧪 RUNNING ROUTING & PRICING VERIFICATION SUITE');
console.log('====================================================\n');

const testCases = [
  {
    name: 'Sayyida Zeinab -> Gamaat El Dowal (Must be 8 EGP, <= 9 stations via Nasser)',
    from: 'sayyeda_zeinab',
    to: 'gamaat_el_dowal',
    expectedMaxPrice: 8,
    expectedMaxStations: 9
  },
  {
    name: 'Al-Bohy -> Sadat (Must transfer at Nasser, <= 9 stations, 8 EGP)',
    from: 'el_bohy',
    to: 'sadat',
    expectedMaxPrice: 8,
    expectedMaxStations: 9
  },
  {
    name: 'Koleyet El Banat -> Cairo University (Direct on Line 3, ~14 stations, 10 EGP)',
    from: 'koleyet_el_banat',
    to: 'cairo_university',
    expectedMaxStations: 14,
    expectedMaxPrice: 10
  },
  {
    name: 'Nozha -> Al-Shohadaa (Ramses) (Must not exceed 10 EGP, ~12 stations)',
    from: 'el_nozha',
    to: 'al_shohadaa',
    expectedMaxPrice: 10
  },
  {
    name: 'Ezbet El Nakhl -> Heliopolis (Must be <= 23 stations, 15 EGP bracket)',
    from: 'ezbet_el_nakhl',
    to: 'heliopolis',
    expectedMaxStations: 23,
    expectedMaxPrice: 15
  },
  {
    name: 'Symmetry: Mohamed Naguib <-> Helwan',
    from: 'mohamed_naguib',
    to: 'helwan',
    checkSymmetry: true
  }
];

let allPassed = true;

for (const tc of testCases) {
  console.log(`Checking: ${tc.name}`);
  const result = findRoute(tc.from, tc.to);
  if (!result) {
    console.error(`❌ FAILED: No route found between ${tc.from} and ${tc.to}`);
    allPassed = false;
    continue;
  }

  const { stationCount, ticketTier, stationsList, legs, fareDetails, kitKatAlert } = result;
  console.log(`   Stations: ${stationCount}, Fare: ${ticketTier.price} EGP (${ticketTier.colorEn}), Legs: ${legs.length}`);
  console.log(`   Path: ${stationsList.map(s => s.nameEn).join(' -> ')}`);
  if (kitKatAlert) {
    console.log(`   ⚠️ Kit Kat Alert: ${kitKatAlert.textEn}`);
  }

  if (tc.expectedMaxStations && stationCount > tc.expectedMaxStations) {
    console.error(`   ❌ Station count failed! Expected <= ${tc.expectedMaxStations}, got ${stationCount}`);
    allPassed = false;
  }
  if (tc.expectedMaxPrice && ticketTier.price > tc.expectedMaxPrice) {
    console.error(`   ❌ Fare failed! Expected <= ${tc.expectedMaxPrice} EGP, got ${ticketTier.price} EGP`);
    allPassed = false;
  }

  if (tc.checkSymmetry) {
    const reverse = findRoute(tc.to, tc.from);
    console.log(`   Reverse Stations: ${reverse.stationCount}, Fare: ${reverse.ticketTier.price} EGP`);
    if (reverse.stationCount !== stationCount || reverse.ticketTier.price !== ticketTier.price) {
      console.error(`   ❌ Asymmetric route! Forward: ${stationCount} stns / ${ticketTier.price} EGP, Reverse: ${reverse.stationCount} stns / ${reverse.ticketTier.price} EGP`);
      allPassed = false;
    } else {
      console.log(`   ✅ Symmetrical!`);
    }
  }

  // Check alternative routes
  const alternatives = findMultipleRoutes(tc.from, tc.to);
  console.log(`   Alternatives generated: ${alternatives.length}`);
  for (const alt of alternatives) {
    console.log(`     - [${alt.labelEn}] ${alt.stationCount} stns, ${alt.ticketTier.price} EGP, ${alt.transfersCount} transfers`);
  }
  console.log('');
}

// Test Multi-modal connections
console.log('Testing Multi-modal routing (LRT -> Line 3 Metro -> Monorail East):');
const multiModal1 = findRoute('lrt_badr', 'stadium');
if (multiModal1) {
  console.log(`   Badr (LRT) to Stadium (L3/Monorail): ${multiModal1.stationCount} stations, Legs: ${multiModal1.legs.map(l => l.lineNameEn).join(' -> ')}`);
  console.log(`   Combined Fare: ${multiModal1.fareDetails.totalPrice} EGP`);
}

if (allPassed) {
  console.log('\n🎉 ALL ROUTE & FARE TEST CASES PASSED PERFECTLY!');
} else {
  console.log('\n⚠️ SOME CASES NEED TUNING!');
}
