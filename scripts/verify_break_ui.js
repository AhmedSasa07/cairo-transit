import { 
  WORST_CASE_FROM_STATION, 
  WORST_CASE_TO_STATION, 
  WORST_CASE_ROUTES, 
  HUGE_SAVED_TRIPS, 
  EMPTY_SAVED_TRIPS 
} from '../src/data/breakUiFixtures.js';

console.log('====================================================');
console.log('🛡️ BREAK-UI RESILIENCE & EDGE-CASE TEST SUITE');
console.log('====================================================\n');

// 1. Long Labels Verification
console.log('1. Long Labels Stress Test:');
console.log(`   - Origin Name AR: "${WORST_CASE_FROM_STATION.nameAr}" (${WORST_CASE_FROM_STATION.nameAr.length} chars)`);
console.log(`   - Origin Name EN: "${WORST_CASE_FROM_STATION.nameEn}" (${WORST_CASE_FROM_STATION.nameEn.length} chars)`);
console.log(`   - Destination Name AR: "${WORST_CASE_TO_STATION.nameAr}" (${WORST_CASE_TO_STATION.nameAr.length} chars)`);
console.log(`   - Destination Name EN: "${WORST_CASE_TO_STATION.nameEn}" (${WORST_CASE_TO_STATION.nameEn.length} chars)`);

if (WORST_CASE_FROM_STATION.nameAr.length < 50 || WORST_CASE_TO_STATION.nameAr.length < 50) {
  console.error('❌ Failed: Expected ultra-long station names >= 50 chars');
  process.exit(1);
}
console.log('   ✅ Ultra-long names loaded successfully.');

// 2. Multi-Transit Line Hubs
console.log('\n2. Multi-Transit Modes Hub Verification:');
console.log(`   - Bashteel Lines: [${WORST_CASE_FROM_STATION.lines.join(', ')}] (${WORST_CASE_FROM_STATION.lines.length} lines)`);
console.log(`   - New Capital Lines: [${WORST_CASE_TO_STATION.lines.join(', ')}] (${WORST_CASE_TO_STATION.lines.length} lines)`);
if (WORST_CASE_FROM_STATION.lines.length < 4) {
  console.error('❌ Failed: Expected 4 multi-modal lines on Bashteel Hub');
  process.exit(1);
}
console.log('   ✅ Multi-modal line badge sets verified.');

// 3. Huge Feeds & Empty States
console.log('\n3. Empty & Huge Feed Collections:');
console.log(`   - Empty Favorites count: ${EMPTY_SAVED_TRIPS.length}`);
console.log(`   - Huge Favorites count: ${HUGE_SAVED_TRIPS.length}`);
if (EMPTY_SAVED_TRIPS.length !== 0 || HUGE_SAVED_TRIPS.length !== 20) {
  console.error('❌ Failed: Expected 0 empty and 20 huge favorites');
  process.exit(1);
}
console.log('   ✅ Empty and huge feed fixtures verified.');

// 4. Multi-Transfer Complex Journey
console.log('\n4. Multi-Transfer Route Verification:');
const primaryRoute = WORST_CASE_ROUTES[0];
console.log(`   - Total Legs: ${primaryRoute.legs.length}`);
console.log(`   - Total Transfers: ${primaryRoute.transfersCount}`);
console.log(`   - Station Count: ${primaryRoute.stationCount}`);
console.log(`   - Travel Time: ${primaryRoute.travelTimeMins} mins`);
console.log(`   - Total Fare: ${primaryRoute.fareDetails.totalCost} EGP`);
console.log(`   - Kit Kat Alert text length: ${primaryRoute.kitKatAlert.textAr.length} chars`);

if (primaryRoute.transfersCount < 3 || primaryRoute.legs.length < 4) {
  console.error('❌ Failed: Expected at least 3 transfers and 4 legs');
  process.exit(1);
}
console.log('   ✅ Multi-transfer 4-leg journey verified.');

console.log('\n🎉 ALL BREAK-UI FIXTURES & RESILIENCE TESTS PASSED PERFECTLY!\n');
