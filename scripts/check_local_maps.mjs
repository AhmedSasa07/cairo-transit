import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { STATIONS } from '../src/data/metroData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const pngDir = path.join(rootDir, 'public', 'assets', 'local_maps');
const pdfDir = path.join(rootDir, 'public', 'assets', 'local_maps_pdf');

const pngFiles = fs.readdirSync(pngDir)
  .filter(f => f.endsWith('.png'))
  .map(f => f.replace('.png', ''));

const pdfFiles = fs.readdirSync(pdfDir)
  .filter(f => f.endsWith('.pdf'))
  .map(f => f.replace('.pdf', ''));

const stationSlugs = new Set(STATIONS.map(s => s.id));
const stationMap = new Map(STATIONS.map(s => [s.id, s]));

console.log('======================================================');
console.log('       METRO LOCAL MAPS VERIFICATION AUDIT            ');
console.log('======================================================\n');
console.log(`Total stations defined in metroData.js: ${stationSlugs.size}`);
console.log(`Total local_maps/*.png files found:    ${pngFiles.length}`);
console.log(`Total local_maps_pdf/*.pdf files found: ${pdfFiles.length}\n`);

// 1. Check for PNGs/PDFs with no matching station in metroData.js
const orphanedPngs = pngFiles.filter(slug => !stationSlugs.has(slug));
const orphanedPdfs = pdfFiles.filter(slug => !stationSlugs.has(slug));

// 2. Check for PNG/PDF asymmetries
const pngWithoutPdf = pngFiles.filter(slug => !pdfFiles.includes(slug));
const pdfWithoutPng = pdfFiles.filter(slug => !pngFiles.includes(slug));

// 3. Known / detected aliases and spelling variants
const KNOWN_MISMATCHES = [
  {
    assetSlug: 'ard_el_maared',
    metroDataSlug: 'fair_zone',
    stationNameEn: 'Exhibition Fair (Ard El-Maared)',
    stationNameAr: 'أرض المعارض',
    reason: 'Asset uses phonetic Arabic transliteration (ard_el_maared), while metroData.js uses English concept slug (fair_zone).'
  },
  {
    assetSlug: 'qubaa',
    metroDataSlug: 'qobaa',
    stationNameEn: 'Qobaa',
    stationNameAr: 'قباء',
    reason: 'Spelling variance: asset uses "qubaa" (u) while metroData.js uses "qobaa" (o).'
  }
];

console.log('--- 1. File Pair Parity (PNG vs PDF) ---');
if (pngWithoutPdf.length === 0 && pdfWithoutPng.length === 0) {
  console.log('✅ Exact 1:1 match between PNG and PDF sets. Every PNG has a corresponding PDF.');
} else {
  if (pngWithoutPdf.length > 0) {
    console.log(`⚠️  PNGs missing corresponding PDF (${pngWithoutPdf.length}):`, pngWithoutPdf);
  }
  if (pdfWithoutPng.length > 0) {
    console.log(`⚠️  PDFs missing corresponding PNG (${pdfWithoutPng.length}):`, pdfWithoutPng);
  }
}

console.log('\n--- 2. Unmatched Asset Files (Files with no exact slug in metroData.js) ---');
if (orphanedPngs.length > 0 || orphanedPdfs.length > 0) {
  console.log(`⚠️  Found ${orphanedPngs.length} asset slug(s) that do not directly match STATIONS in metroData.js:`);
  const allOrphans = Array.from(new Set([...orphanedPngs, ...orphanedPdfs]));
  allOrphans.forEach(slug => {
    console.log(`    - public/assets/local_maps/${slug}.png`);
    console.log(`    - public/assets/local_maps_pdf/${slug}.pdf`);
  });
} else {
  console.log('✅ All map assets match station slugs in metroData.js.');
}

console.log('\n--- 3. Detailed Mismatch Diagnostics ---');
KNOWN_MISMATCHES.forEach(m => {
  const pngExists = pngFiles.includes(m.assetSlug);
  const pdfExists = pdfFiles.includes(m.assetSlug);
  const stationInMetroData = stationMap.get(m.metroDataSlug);
  
  console.log(`• Mismatch: [${m.assetSlug}] (Asset) vs [${m.metroDataSlug}] (metroData.js)`);
  console.log(`    - Station: "${m.stationNameEn}" / "${m.stationNameAr}"`);
  console.log(`    - Assets on disk: PNG=${pngExists ? 'YES' : 'NO'}, PDF=${pdfExists ? 'YES' : 'NO'}`);
  console.log(`    - Station in metroData.js: ${stationInMetroData ? 'EXISTS (id: ' + stationInMetroData.id + ')' : 'MISSING'}`);
  console.log(`    - Explanation: ${m.reason}`);
  console.log('');
});

// 4. Line 3 Map Coverage Analysis
const line3Stations = STATIONS.filter(s => s.lines && s.lines.includes('line3'));
const line3WithMaps = line3Stations.filter(s => {
  return (pngFiles.includes(s.id) && pdfFiles.includes(s.id)) ||
         (s.id === 'fair_zone' && pngFiles.includes('ard_el_maared')) ||
         (s.id === 'qobaa' && pngFiles.includes('qubaa'));
});
const line3MissingMaps = line3Stations.filter(s => !line3WithMaps.includes(s));

console.log('--- 4. Line 3 Map Coverage ---');
console.log(`Line 3 Stations Total: ${line3Stations.length}`);
console.log(`Line 3 Stations with Local Maps: ${line3WithMaps.length} (including alias-mapped)`);
console.log(`Line 3 Stations without Local Maps: ${line3MissingMaps.length}`);
line3MissingMaps.forEach(s => {
  console.log(`    - ${s.id} (${s.nameEn} / ${s.nameAr})`);
});

console.log('\n======================================================');
