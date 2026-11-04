import fs from 'fs';
import { MAP_STATION_COORDS } from '../src/data/mapCoordinates.js';

function transformCoord(x, y) {
  return {
    x: Math.round(x * 2.5 + 100),
    y: Math.round(y * 2.8 + 80)
  };
}

const stations = JSON.parse(fs.readFileSync('src/data/cairo-metro-stations.json', 'utf8'));

let updated = 0;
for (const st of stations) {
  const coord = MAP_STATION_COORDS[st.id];
  if (coord) {
    const t = transformCoord(coord.x, coord.y);
    st.x = t.x;
    st.y = t.y;
    updated++;
  }
}

fs.writeFileSync('src/data/cairo-metro-stations.json', JSON.stringify(stations, null, 2), 'utf8');
console.log(`Updated ${updated} stations in src/data/cairo-metro-stations.json`);
