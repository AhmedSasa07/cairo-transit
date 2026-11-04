import fs from 'fs';
import path from 'path';

const srcDir = 'versions/line 3 pdf';
const destDir = 'public/assets/local_maps_pdf';

fs.mkdirSync(destDir, { recursive: true });

const PDF_MAP = {
  '20210415_Attaba.pdf': 'attaba',
  '20210418_Abdou Pasha.pdf': 'abdou_pasha',
  '20210418_Adly Mansour.pdf': 'adly_mansour',
  '20210418_El Nozha.pdf': 'el_nozha',
  '20210418_El Shams Club.pdf': 'el_shams_club',
  '20210418_Fair Zone.pdf': 'fair_zone',
  '20210418_Haroun.pdf': 'haroun',
  '20210418_Heliopolis.pdf': 'heliopolis',
  '20210418_Kolleyet el banat.pdf': 'koleyet_el_banat',
  '20210418_Qubaa.pdf': 'qubaa',
  '20210418_Stadium.pdf': 'stadium',
  '20220925_Kitkat.pdf': 'kit_kat',
  '20220925_Maspero.pdf': 'maspero',
  '20220925_Nasser.pdf': 'nasser',
  '20220925_SHegazy.pdf': 'safaa_hegazy',
  '20221005_Abbasia.pdf': 'abbassiya',
  '20221005_Alf Maskan.pdf': 'alf_maskan',
  '20221005_Bab Shaariya.pdf': 'bab_el_shaariya',
  '20221005_El Geish.pdf': 'el_geish',
  '20221005_El Haykestep.pdf': 'el_haykestep',
  '20221005_ElAhram.pdf': 'al_ahram',
  '20221005_Hesham Barakat.pdf': 'hesham_barakat',
  '20221005_Omar Ibn El Khattab.pdf': 'omar_ibn_el_khattab'
};

let count = 0;
for (const [filename, stationId] of Object.entries(PDF_MAP)) {
  const srcPath = path.join(srcDir, filename);
  if (fs.existsSync(srcPath)) {
    const destPath = path.join(destDir, `${stationId}.pdf`);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${filename} -> ${stationId}.pdf (${fs.statSync(destPath).size} bytes)`);
    count++;
  } else {
    console.warn(`File not found: ${srcPath}`);
  }
}

console.log(`Total copied: ${count} of ${Object.keys(PDF_MAP).length}`);
