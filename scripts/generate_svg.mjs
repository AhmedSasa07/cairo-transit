import fs from 'fs';
import { MAP_STATION_COORDS, MAP_LINES_PATHS } from '../src/data/mapCoordinates.js';

function transformCoord(x, y) {
  return {
    x: Math.round(x * 2.5 + 100),
    y: Math.round(y * 2.8 + 80)
  };
}

function getPolylinePoints(ids) {
  return ids.map(id => {
    const c = MAP_STATION_COORDS[id];
    if (!c) return null;
    const t = transformCoord(c.x, c.y);
    return `${t.x},${t.y}`;
  }).filter(Boolean).join(' ');
}

const pM1 = getPolylinePoints(MAP_LINES_PATHS.line1);
const pM2 = getPolylinePoints(MAP_LINES_PATHS.line2);
const pM3Trunk = getPolylinePoints(MAP_LINES_PATHS.line3_trunk);
const pM3BranchRod = getPolylinePoints(MAP_LINES_PATHS.line3_branch_rod);
const pM3BranchCairoUniv = getPolylinePoints(MAP_LINES_PATHS.line3_branch_cairo_univ);
const pLrtTrunk = getPolylinePoints(MAP_LINES_PATHS.lrt_trunk);
const pLrtBranchRamadan = getPolylinePoints(MAP_LINES_PATHS.lrt_branch_ramadan);
const pMonoEast = getPolylinePoints(MAP_LINES_PATHS.monorail_east);
const pMonoWest = getPolylinePoints(MAP_LINES_PATHS.monorail_west);

const stationsJson = JSON.parse(fs.readFileSync('src/data/cairo-metro-stations.json', 'utf8'));

// River Nile path in 4000x3000
const nilePath = 'M 1075 304 C 1125 580, 1175 860, 1225 1140 C 1275 1420, 1200 1700, 1150 1980 C 1100 2260, 1075 2540, 1075 2820 L 1225 2820 C 1225 2540, 1250 2260, 1300 1980 C 1350 1700, 1425 1420, 1375 1140 C 1325 860, 1275 580, 1225 304 Z';

let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 3000" width="100%" height="100%" shape-rendering="geometricPrecision">
  <defs>
    <style>
      .rail-line { fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .hub-node { fill: #FFFFFF; stroke: #ecc15f; stroke-width: 9; }
      .hub-inner { fill: #ecc15f; }
    </style>
  </defs>

  <!-- Layer: River Nile -->
  <g id="river-nile" opacity="0.22">
    <path d="${nilePath}" fill="#38bdf8" stroke="#0284c7" stroke-width="4" />
  </g>

  <!-- Layer: Line M1 (#00518e Royal Blue) -->
  <g id="line-m1">
    <polyline class="rail-line" points="${pM1}" stroke="#00518e" stroke-width="22" />
  </g>

  <!-- Layer: Line M2 (#c13038 Red) -->
  <g id="line-m2">
    <polyline class="rail-line" points="${pM2}" stroke="#c13038" stroke-width="22" />
  </g>

  <!-- Layer: Line M3 (#009f87 Emerald Green) -->
  <g id="line-m3">
    <polyline class="rail-line" points="${pM3Trunk}" stroke="#009f87" stroke-width="22" />
    <polyline class="rail-line" points="${pM3BranchRod}" stroke="#009f87" stroke-width="22" />
    <polyline class="rail-line" points="${pM3BranchCairoUniv}" stroke="#009f87" stroke-width="22" />
  </g>

  <!-- Layer: Line LRT (#9e1b33 Crimson) -->
  <g id="line-lrt">
    <polyline class="rail-line" points="${pLrtTrunk}" stroke="#9e1b33" stroke-width="20" />
    <polyline class="rail-line" points="${pLrtBranchRamadan}" stroke="#9e1b33" stroke-width="20" />
  </g>

  <!-- Layer: Line Monorail East (#009ca6 Teal) -->
  <g id="line-monorail-east">
    <polyline class="rail-line" points="${pMonoEast}" stroke="#009ca6" stroke-width="20" />
  </g>

  <!-- Layer: Line Monorail West (#9b2521 Dark Crimson) -->
  <g id="line-monorail-west">
    <polyline class="rail-line" points="${pMonoWest}" stroke="#9b2521" stroke-width="20" />
  </g>

  <!-- Layer: Station Base Markers -->
  <g id="station-markers">
`;

for (const st of stationsJson) {
  if (st.is_interchange) continue;
  const color = st.line === 'M1' ? '#00518e' :
                st.line === 'M2' ? '#c13038' :
                st.line === 'M3' ? '#009f87' :
                st.line === 'LRT' ? '#9e1b33' :
                st.line === 'MONORAIL_E' ? '#009ca6' : '#9b2521';
  svg += `    <circle id="node-${st.id}" cx="${st.x}" cy="${st.y}" r="16" fill="#FFFFFF" stroke="${color}" stroke-width="8" />\n`;
}

svg += `  </g>

  <!-- Layer: Interchange Hubs (#ecc15f Gold) -->
  <g id="interchange-hubs">
`;

for (const st of stationsJson) {
  if (!st.is_interchange) continue;
  svg += `    <g id="hub-${st.id}">
      <circle cx="${st.x}" cy="${st.y}" r="28" class="hub-node" />
      <circle cx="${st.x}" cy="${st.y}" r="14" class="hub-inner" />
    </g>\n`;
}

svg += `  </g>
</svg>
`;

fs.mkdirSync('public/assets', { recursive: true });
fs.writeFileSync('public/assets/cairo-transit-base.svg', svg, 'utf8');
console.log('Saved public/assets/cairo-transit-base.svg! Size:', svg.length);
