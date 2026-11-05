# Cairo Multi-Modal Transit App - Data Models & Storage Architecture

Technical documentation of all client data structures, persistence keys, platform APIs, and third-party dependencies.

---

## 1. Core Data Models

### 1.1 Station Node (`STATIONS` in `src/data/metroData.js`)
```typescript
interface Station {
  id: string;               // Unique slug (e.g. 'adly_mansour', 'al_shohadaa')
  nameEn: string;           // English Latin name
  nameAr: string;           // Arabic localization
  lines: string[];          // Line IDs (e.g. ['line1', 'line2'])
  isInterchange: boolean;   // Hub interchange flag
  lat: number;              // WGS84 Latitude
  lng: number;              // WGS84 Longitude
  branch?: '3A' | '3B';     // Line 3 branch flag (3A Rod El Farag, 3B Cairo Univ)
  underConstruction?: boolean; // Operational status
  facilities?: {
    elevator: boolean;
    escalator: boolean;
    parking: boolean;
  };
}
```

### 1.2 Transit Line (`METRO_LINES` in `src/data/metroData.js`)
```typescript
interface MetroLine {
  id: string;               // 'line1', 'line2', 'line3', 'monorail_east', 'monorail_west', 'lrt', 'brt'
  nameEn: string;
  nameAr: string;
  shortNameEn: string;
  shortNameAr: string;
  mode: 'metro' | 'monorail' | 'lrt' | 'brt';
  color: string;            // Hex code
  terminalsEn: string[];    // [Start Terminal, End Terminal]
  terminalsAr: string[];
  totalStations: number;
}
```

### 1.3 Map Station Coordinates (`MAP_STATION_COORDS` in `src/data/mapCoordinates.js`)
```typescript
interface MapStationCoord {
  x: number;                // SVG X coordinate (0 - 1560)
  y: number;                // SVG Y coordinate (0 - 1040)
  labelPos: 'top' | 'bottom' | 'left' | 'right';
}
```

---

## 2. LocalStorage Persistence Keys

| Key | Type | Usage |
| :--- | :--- | :--- |
| `egymetro_lang` | `string` ('ar' / 'en') | User interface language |
| `egymetro_theme` | `string` ('dark' / 'light') | Visual appearance mode |
| `cairo_metro_saved_from` | `string` (stationId) | Last selected origin station |
| `cairo_metro_saved_to` | `string` (stationId) | Last selected destination station |
| `cairo_metro_selected_route_idx` | `string` (number) | Active alternative route index |
| `egymetro_saved_trips` | `JSON array` | Array of bookmarked favorite trips |
| `cairo_metro_edited_coords` | `JSON object` | User live-calibrated schematic coordinates |
| `metro_map_fps_mode` | `string` ('120' / '60') | Refresh rate cap for interactive canvas |
| `metro_map_integrated_overlay` | `string` ('true' / 'false') | Official high-res PDF map underlay toggle |
| `egymetro_wallet_balance` | `number` | Virtual stored-value wallet balance |
| `egymetro_a11y` | `JSON object` | Accessibility preferences (high contrast, vibrations) |

---

## 3. Platform APIs & Hardware Integration

- **HTML5 Geolocation API**: `navigator.geolocation.getCurrentPosition()` for live station distance sorting and auto-selecting origin.
- **Web Share API**: `navigator.share()` & `navigator.canShare()` to share journey summaries.
- **HTML5 Canvas 2D Context**: Dynamic rendering of shareable itinerary cards with QR code.
- **Capacitor Mobile Plugins**:
  - `@capacitor/share`: Native Android/iOS system share sheet.
  - `@capacitor/haptics`: Tactile micro-vibrations for taps, swaps, and modal dismissals.
  - `@capacitor/filesystem`: Saving rendered journey images to device cache.

---

## 4. Dependencies (`package.json`)

- `react` (`^18.2.0`): UI rendering engine.
- `lucide-react` (`^0.363.0`): Consistent icon system.
- `@capacitor/core` & plugins: Native Android bridge for APK compilation.
- `tailwindcss` (`^3.4.3`): Utility-first responsive CSS styling.
- `vite` (`^5.2.0`): High-speed bundler and dev server.
