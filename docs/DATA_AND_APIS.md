# Egy Metro Guide — Data Models, Dependencies & APIs (Audited)

Comprehensive technical specification of data structures, exact package dependency versions, offline persistence keys, and platform APIs for Egy Metro Guide (v12.0.0).

---

## 1. Executive Summary & Verification Declaration

- **Verification Status:** 100% verified against raw `package.json`, `package-lock.json`, and source code references.
- **Unverified Items:** **ZERO**.
- **Backend API Endpoints:** **NONE.** The app operates 100% offline-first. The only external connections are Google Fonts CDN (at compile/build time) and operating system deep-link intents (Google Maps navigation and WhatsApp sharing).

---

## 2. Exact Package Dependencies (`package.json` & `package-lock.json`)

All versions verified directly against the production lockfile:

### 2.1 Runtime Dependencies (`dependencies`)
| Package Name | Declared Range in `package.json` | Exact Resolved Version in `package-lock.json` | Runtime Purpose |
|---|---|---|---|
| `@capacitor/android` | `^6.0.0` | **`6.0.0`** | Android native runtime bridge |
| `@capacitor/cli` | `^6.0.0` | **`6.0.0`** | Capacitor CLI build tools |
| `@capacitor/core` | `^6.0.0` | **`6.0.0`** | Native Capacitor runtime bridge |
| `@capacitor/filesystem` | `^6.0.0` | **`6.0.0`** | Native device storage write for JPEG route card export |
| `@capacitor/haptics` | `^6.0.0` | **`6.0.0`** | Native mobile tactile vibration feedback |
| `@capacitor/ios` | `^6.0.0` | **`6.0.0`** | iOS native runtime bridge |
| `@capacitor/share` | `^6.0.0` | **`6.0.0`** | Native Android/iOS system share intent |
| `lucide-react` | `^0.363.0` | **`0.363.0`** | Feather/Lucide vector UI icon components |
| `react` | `^18.2.0` | **`18.3.1`** | Core React component engine |
| `react-dom` | `^18.2.0` | **`18.3.1`** | React DOM rendering engine |

### 2.2 Development Dependencies (`devDependencies`)
| Package Name | Declared Range in `package.json` | Exact Resolved Version in `package-lock.json` | Tooling Role |
|---|---|---|---|
| `@types/react` | `^18.2.66` | **`18.3.31`** | TypeScript definitions for React |
| `@types/react-dom` | `^18.2.22` | **`18.3.7`** | TypeScript definitions for React DOM |
| `@vitejs/plugin-react` | `^4.2.1` | **`4.7.0`** | Babel Fast-Refresh plugin for Vite |
| `autoprefixer` | `^10.4.19` | **`10.6.2`** | PostCSS CSS vendor prefixing |
| `postcss` | `^8.4.38` | **`8.5.32`** | CSS AST parsing and transformation |
| `tailwindcss` | `^3.4.3` | **`3.4.19`** | Utility-first CSS generation engine |
| `vite` | `^5.2.0` | **`5.4.21`** | Frontend compiler, bundler & HMR dev server |

---

## 3. Storage Key Architecture & Unified Prefix Proposal

### 3.1 The Current Problem: Fragmented Key Prefixes
The app currently persists 12 distinct state items using 3 conflicting prefix conventions:
1. `egymetro_*` (`egymetro_theme`, `egymetro_lang`, `egymetro_saved_trips`, `egymetro_wallet_balance`, `egymetro_a11y`)
2. `cairo_metro_*` (`cairo_metro_saved_from`, `cairo_metro_saved_to`, `cairo_metro_selected_route_idx`, `cairo_metro_edited_coords`)
3. `metro_map_*` (`metro_map_battery_saver`, `metro_map_fps_mode`, `metro_map_integrated_overlay`)

### 3.2 Proposed Unified, Versioned Storage Schema (`egymetro:v1:*`)
To prevent namespace collisions, facilitate data backup/export, and allow seamless future schema migrations, all storage keys should be unified under the `egymetro:v1:` namespace:

| Current Legacy Key | Proposed Unified Key | Data Type | Default Value | Role & Description |
|---|---|---|---|---|
| `egymetro_theme` | `egymetro:v1:theme` | `string` (`'dark' \| 'light'`) | System preference | Interface Dark or Light mode |
| `egymetro_lang` | `egymetro:v1:lang` | `string` (`'ar' \| 'en'`) | `'en'` | Active interface language |
| `cairo_metro_saved_from` | `egymetro:v1:route:from` | `string` (Station ID) | `'al_shohadaa'` | Last selected origin station |
| `cairo_metro_saved_to` | `egymetro:v1:route:to` | `string` (Station ID) | `'opera'` | Last selected destination station |
| `cairo_metro_selected_route_idx` | `egymetro:v1:route:idx` | `number` | `0` | Active alternative route index |
| `egymetro_saved_trips` | `egymetro:v1:route:saved` | `JSON array` | `[]` | User bookmarked favorite routes |
| `egymetro_wallet_balance` | `egymetro:v1:wallet:balance` | `number` | `35` | Contactless smart card balance (EGP) |
| `egymetro_a11y` | `egymetro:v1:a11y:settings` | `JSON object` | `DEFAULT_A11Y_SETTINGS` | Universal accessibility settings |
| `metro_map_fps_mode` | `egymetro:v1:map:fps` | `string` (`'60' \| '120'`) | `'120'` | Target rendering frame rate |
| `metro_map_battery_saver` | `egymetro:v1:map:battery` | `boolean` (`'true' \| 'false'`) | `false` | Disable map glow & aura effects |
| `metro_map_integrated_overlay` | `egymetro:v1:map:overlay` | `boolean` (`'true' \| 'false'`) | `false` | Regional transit layer toggle |
| `cairo_metro_edited_coords` | `egymetro:v1:map:coords` | `JSON object` | `null` | Calibration studio coordinate edits |

### 3.3 Automated Backward-Compatible Migration Utility
```javascript
// src/utils/storageMigration.js (Proposed)
export function migrateStorageKeys() {
  const MIGRATIONS = [
    { oldKey: 'egymetro_theme', newKey: 'egymetro:v1:theme' },
    { oldKey: 'egymetro_lang', newKey: 'egymetro:v1:lang' },
    { oldKey: 'cairo_metro_saved_from', newKey: 'egymetro:v1:route:from' },
    { oldKey: 'cairo_metro_saved_to', newKey: 'egymetro:v1:route:to' },
    { oldKey: 'cairo_metro_selected_route_idx', newKey: 'egymetro:v1:route:idx' },
    { oldKey: 'egymetro_saved_trips', newKey: 'egymetro:v1:route:saved' },
    { oldKey: 'egymetro_wallet_balance', newKey: 'egymetro:v1:wallet:balance' },
    { oldKey: 'egymetro_a11y', newKey: 'egymetro:v1:a11y:settings' },
    { oldKey: 'metro_map_fps_mode', newKey: 'egymetro:v1:map:fps' },
    { oldKey: 'metro_map_battery_saver', newKey: 'egymetro:v1:map:battery' },
    { oldKey: 'metro_map_integrated_overlay', newKey: 'egymetro:v1:map:overlay' },
    { oldKey: 'cairo_metro_edited_coords', newKey: 'egymetro:v1:map:coords' },
  ];

  try {
    MIGRATIONS.forEach(({ oldKey, newKey }) => {
      const val = localStorage.getItem(oldKey);
      if (val !== null && localStorage.getItem(newKey) === null) {
        localStorage.setItem(newKey, val);
        localStorage.removeItem(oldKey);
      }
    });
  } catch (err) {
    console.warn('Storage migration skipped:', err);
  }
}
```

---

## 4. Core Transit Data Models

### 4.1 Station Model (`STATIONS` in `src/data/metroData.js`)
```typescript
interface Station {
  id: string;                      // Unique slug (e.g., 'al_shohadaa', 'sadat', 'adly_mansour')
  nameAr: string;                  // Official Arabic station title (e.g., 'الشهداء')
  nameEn: string;                  // Official English latinized title (e.g., 'Al-Shohadaa')
  line: 'line1' | 'line2' | 'line3' | 'monorail_east' | 'monorail_west' | 'lrt' | 'brt';
  order: number;                   // 1-based sequential stop order along the primary line
  lat: number;                     // Real WGS-84 decimal latitude (e.g., 30.0617)
  lng: number;                     // Real WGS-84 decimal longitude (e.g., 31.2464)
  isInterchange: boolean;          // True if passenger can transfer between transit lines
  transferLines?: string[];        // Array of intersecting line IDs (e.g., ['line1', 'line2'])
  interchangeHub?: string;         // Shared complex identifier (e.g., 'hub_ramses')
  branch?: 'main' | '3a' | '3b';   // Branch identifier for branching corridors (Line 3, LRT)
  accessibility: string[];         // Amenities list (['Elevator', 'Escalator', 'Disabled Access'])
  landmarks: string[];             // Prominent nearby destinations
  underConstruction?: boolean;     // True if station is not yet open to passengers
  allowSimulation?: boolean;       // Allows test pathfinding on under-construction lines
}
```

### 4.2 Network Edge Model (`NETWORK_EDGES` in `src/data/metroData.js`)
```typescript
// Directed/Undirected track connections between stations
type NetworkEdge = [
  stationA: string,    // Origin station ID
  stationB: string,    // Destination station ID
  lineId: string,      // Line code ('line1', 'line2', 'line3', 'lrt', 'monorail_east', 'brt')
  val1?: number,       // Travel minutes (or distanceKm for LRT)
  val2?: number        // Distance in km (or travel minutes for LRT)
];
```

### 4.3 Ticket Tariff Model (`TICKET_TIERS` in `src/data/metroData.js`)
```typescript
interface TicketTier {
  tier: number;            // Zone index (1, 2, 3, 4)
  minStations: number;     // Zone lower station boundary
  maxStations: number;     // Zone upper station boundary
  price: number;           // Standard single-journey fare in EGP (8, 10, 15, 20)
  seniorPrice: number;     // Concessionary fare for Seniors 60+ (4, 5, 8, 10 EGP)
  specialNeedsPrice: number; // Concessionary flat rate for People of Determination (5 EGP)
  ticketColorAr: string;   // 'صفراء', 'خضراء', 'وردية', 'حمراء'
  ticketColorEn: string;   // 'Yellow', 'Green', 'Pink', 'Red'
  ticketColorHex: string;  // Hex code for ticket paper UI representation
  ticketImage: string;     // Path to physical ticket thumbnail PNG in public/assets/tickets/
}
```

---

## 5. Platform Hardware & OS Integrations

1. **Geolocation API (`navigator.geolocation`)**:
   - High-accuracy GPS positioning used in `NearestStationFinder.jsx` and `RoutePlanner.jsx` to resolve the closest stations within Greater Cairo.
2. **Web Speech API (`window.speechSynthesis`)**:
   - Natural language voice announcements for route legs, transfer advisories, and fork warnings in `src/utils/a11y.js`.
3. **Capacitor Filesystem & Share Plugins**:
   - Saves generated JPEG cards to mobile camera roll and triggers native Android / iOS share intents in `ShareTripModal.jsx`.
4. **Capacitor Haptics Plugin**:
   - Delivers instant tactile feedback on touch-down, tab switching, and route calculation.
