import fs from 'fs';
import { MAP_STATION_COORDS } from '../src/data/mapCoordinates.js';

function transformCoord(x, y) {
  return {
    x: Math.round(x * 2.5 + 100),
    y: Math.round(y * 2.8 + 80)
  };
}

const stations = JSON.parse(fs.readFileSync('src/data/cairo-metro-stations.json', 'utf8'));

// Check if lrt_knowledge_city exists
let kc = stations.find(s => s.id === 'lrt_knowledge_city');
if (!kc) {
  kc = {
    id: 'lrt_knowledge_city',
    name_en: 'Knowledge City (LRT)',
    name_ar: 'مدينة المعرفة (القطار الخفيف)',
    line: 'LRT',
    x: 0,
    y: 0,
    is_interchange: false,
    connections: ['LRT'],
    zone: '10th of Ramadan Axis'
  };
  stations.push(kc);
}

// Update coordinates for all stations
for (const st of stations) {
  const coord = MAP_STATION_COORDS[st.id];
  if (coord) {
    const t = transformCoord(coord.x, coord.y);
    st.x = t.x;
    st.y = t.y;
  }
}

fs.writeFileSync('src/data/cairo-metro-stations.json', JSON.stringify(stations, null, 2), 'utf8');
console.log(`Synced ${stations.length} stations in cairo-metro-stations.json`);
