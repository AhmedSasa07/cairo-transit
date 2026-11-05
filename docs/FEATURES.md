# Egy Metro Guide — Features & Screens Specification (Complete Audit)

Comprehensive functional and state audit of all screens, tabs, modals, embedded tools, settings, persistence keys, and accessibility features in Egy Metro Guide (v12.0.0).

---

## 1. Onboarding & First-Launch Flow Assessment

- **Onboarding Wizard / Welcome Flow:** **CONFIRMED NONE.**
  * *Codebase Verification Evidence:* An exhaustive scan across all components and entrypoints (`src/App.jsx`, `index.html`) reveals **zero** welcome carousels, zero introductory walkthrough wizards, zero tutorial overlays, and zero first-launch state keys (e.g. `has_seen_intro` or `is_first_launch`).
  * *Boot Behavior:* The application immediately and synchronously mounts `App.jsx`, initializes state from `localStorage`, and displays the primary **Routes** tab (`activeTab === 'route'`).

---

## 2. Global Application Shell, Settings & Storage

### 2.1 Theme & Dark/Light Mode Manager
- **File Paths:** `src/App.jsx:20-25`, `src/components/Header.jsx:75-92`, `index.html:12-16`
- **State & LocalStorage Key:** `egymetro_theme` (`'dark' | 'light'`)
- **Default Value:** Read from `localStorage.getItem('egymetro_theme')`. If unset, falls back to hardware OS preference via `window.matchMedia('(prefers-color-scheme: dark)').matches`.
- **How Triggered:** Sun/Moon icon toggle button in the top-right corner of `Header.jsx`.
- **Behavior:**
  - Toggles `darkMode` state in `App.jsx`.
  - Toggles CSS class `.dark` on `document.documentElement`.
  - Includes an inline boot script in `index.html` to prevent flash of incorrect theme before React hydration.
- **Status:** Complete.

### 2.2 Bilingual Language Engine (Arabic & English)
- **File Paths:** `src/App.jsx:16-18`, `src/components/Header.jsx:94-115`, `index.html:17-21`
- **State & LocalStorage Key:** `egymetro_lang` (`'ar' | 'en'`)
- **Default Value:** `localStorage.getItem('egymetro_lang') || 'en'`
- **How Triggered:** "عربي" / "EN" pill button in the top-right corner of `Header.jsx`.
- **Behavior:**
  - Toggles `lang` state in `App.jsx`.
  - Updates `document.documentElement.dir` (`'rtl'` for Arabic, `'ltr'` for English) and `document.documentElement.lang`.
  - Distributes translations dictionary `t = translations[lang]` to all views and modals.
- **Status:** Complete.

### 2.3 Universal Accessibility (A11y) Subsystem
- **File Paths:** `src/utils/a11y.js:4-100`, `src/components/StationDetailModal.jsx:240-270`, `src/components/NetworkGuide.jsx:45-55`
- **State & LocalStorage Key:** `egymetro_a11y` (`JSON object`)
- **Default Settings:**
  ```javascript
  {
    fontSize: 'normal',       // 'normal' (14px), 'large' (16px), 'xlarge' (18px)
    seniorMode: false,         // High-contrast enlarged touch targets
    colorBlindMode: false,     // High-contrast accessibility patterns
    voiceEnabled: true,        // Web Speech API Text-to-Speech announcements
    hapticEnabled: true,       // Hardware tactile feedback
    wheelchairOnly: false      // Filters accessible stations with elevators
  }
  ```
- **Capabilities & Assistive Tools:**
  - **Text-to-Speech (TTS):** `speakText(text, lang)` utilizes Web Speech API (`SpeechSynthesisUtterance`) with Egyptian Arabic dialect (`ar-EG`) and English (`en-US`) at 0.95x speed for elderly comprehension.
  - **Haptic Feedback:** `@capacitor/haptics` on native mobile with fallback to `navigator.vibrate([100, 60, 100])` for deaf/hard-of-hearing users.
  - **Non-Color Line Identifiers (`LINE_A11Y_BADGES`):** Unique symbols for every line (🔴 [1], 🔵 [2], 🟢 [3], ⚡ [L], 🚝 [M], 🚌 [B]) ensuring colorblind commuters never rely on color alone.
  - **Wheelchair & Elevator Verification:** `isStationAccessible(station)` scans facilities for physical elevator and escalator presence.
- **Status:** Complete.

### 2.4 Bottom Navigation Bar
- **File Path:** `src/components/BottomNavigation.jsx` (50 lines)
- **Status:** Complete.
- **Tabs Provided:**
  1. **Routes** (`route`): Optimal route planner and transfer navigator.
  2. **Network** (`network`): Line cards and network topology.
  3. **Map** (`map`): Fullscreen interactive SVG vector map.
  4. **Nearest** (`nearest`): GPS station finder and 1,000+ landmark directory.
  5. **Tickets** (`tickets`): Tariff guide, subscription calculator, and wallet tracker.

---

## 3. Core Tabs & Screens

### 3.1 Route Planner Tab (Primary Journey Engine)
- **File Path:** `src/components/RoutePlanner.jsx` (2,307 lines)
- **Status:** Complete.
- **Features & Capabilities:**
  - **Multi-Modal Dijkstra Routing:** Computes optimal journeys across Metro Lines 1, 2, 3, Monorail East, Monorail West, Capital LRT, and Ring Road BRT.
  - **Top Action Bar in Journey Card:**
    * **Transit Mode Dropdown (Logos Only):** Compact dropdown showing official logos (Metro, Monorail, LRT, BRT, All Modes) without text clutter.
    * **AC-Only Route Filter (`❄️ AC`):** Toggles `acOnly` state to route exclusively via modern air-conditioned trains (`line3`, `monorail_east`, `monorail_west`, `lrt`, `brt`).
    * **Near Me GPS Button:** Resolves nearest transit station to user's real-time GPS coordinates.
    * **Favorites Button (⭐):** One-tap save of current route to `egymetro_saved_trips`.
    * **Share Button (➦):** Opens `ShareTripModal` with formatted clean text and visual card.
  - **Trip Description Card:** Natural language bilingual route instructions (e.g. *"هتركب الخط الثالث اتجاه عدلي منصور وهتحوّل من العتبة للخط الثانى اتجاه المنيب"*).
  - **4-Stat Tiles Row:** Exactly 4 metrics in one row (`grid-cols-4`):
    1. **Time:** Travel minutes.
    2. **Stations:** Stations count without text suffixes.
    3. **Transfers:** Transfer count (e.g. "مباشر" / "تحويلة واحدة").
    4. **Price:** Dynamic ticket fare with physical ticket color image.
  - **Round-Trip Commuter Advisory:** Recommends purchasing 2 tickets upfront with calculated round-trip fare to skip return queues.
  - **Kit Kat Fork Warning:** Advisory banner alerting passengers when trains branch to Rod El-Farag vs Cairo University.
- **State & Storage Keys:**
  - `cairo_metro_saved_from`: Origin station ID (default: `'al_shohadaa'`).
  - `cairo_metro_saved_to`: Destination station ID (default: `'opera'`).
  - `cairo_metro_selected_route_idx`: Selected route alternative index (default: `0`).
  - `egymetro_saved_trips`: JSON array of favorite routes.
  - `acOnly`: Boolean flag (default: `false`).
  - `transitMode`: `'metro' | 'mixed'` (default: `'metro'`).
- **Dev Resilience Modes:** URL parameter `?data=worst | empty | huge | xfer` triggers UI boundary stress tests.

### 3.2 Network Guide Tab
- **File Path:** `src/components/NetworkGuide.jsx` (392 lines)
- **Status:** Complete.
- **Features & Capabilities:**
  - **Line Selector Carousel:** Horizontally scrollable line pills with official colors and a11y symbols.
  - **Unified Station Count & Terminals Row:** Displays total station count alongside Start ➔ End terminal stations with directional arrow.
  - **Official Fares Matrix:** Tabular fare tiers per line.
  - **Expandable Stations List:** Full list of stations with interchange badges and direct "Set as Origin / Destination" buttons.

### 3.3 Interactive Map Tab
- **File Path:** `src/components/InteractiveMap.jsx` (2,175 lines)
- **Status:** Complete.
- **Features & Capabilities:**
  - **Vector SVG Transit Map:** Fully scalable schematic vector transit map (`viewBox="0 0 1560 1040"`).
  - **Official Station Badges:** Normal stations display official line logos (`M1.svg`, `M2.svg`, `M3.svg`, `LRT.svg`, `east_monorail.svg`, `westmonorail.png`, `Cairo_Bus_Rapid_Transit_logo.png`). Interchange hubs display `#ecc15f` gold double rings.
  - **Dynamic Inverse Zoom Scaling:** Station dots shrink smoothly as zoom increases (`scaleFactor = 1 / Math.pow(z, 0.65)`).
  - **Terminal Stadium Pills:** Rounded blue capsules (`M1 • Helwan`) beside terminal stations.
  - **Pinch-to-Zoom & Pan:** Hardware-accelerated touch gestures up to 4.5x zoom with momentum.
  - **Anti-Pixelation Engine:** Dynamic GPU transform rasterization (`willChange: isDragging ? 'transform' : 'auto'`) with `geometricPrecision` rendering.
- **State & Storage Keys:**
  - `metro_map_fps_mode`: `'60' | '120'` (default: `'120'`).
  - `metro_map_battery_saver`: `'true' | 'false'` (default: `false`).
  - `metro_map_integrated_overlay`: `'true' | 'false'` (default: `false`).
  - `cairo_metro_edited_coords`: Stored JSON coordinates modified in Calibration Studio.

### 3.4 Calibration Studio (Developer / Power-User Tool)
- **File Path:** `src/components/InteractiveMap.jsx:180-210, 1450-1550`
- **Status:** Complete.
- **Features & Capabilities:**
  - Triggered via query parameter `?mode=edit` or developer toggle.
  - Enables drag-and-drop movement of all station nodes on the live SVG map canvas.
  - Colored transit lines dynamically stretch and follow station positions in real time.
  - Toolbar features: "Copy Coordinates" (generates ready-to-paste JavaScript code for `mapCoordinates.js`) and "Reset to Defaults".

### 3.5 Nearest Station & Egypt Places Tab
- **File Path:** `src/components/NearestStationFinder.jsx` (598 lines)
- **Status:** Complete.
- **Features & Capabilities:**
  - **GPS Locator:** Calculates walking distance (meters/km) and walk time to nearby stations.
  - **1,000+ Egyptian Places Directory:** Search categorized landmarks from `src/data/egyptPlaces.js` (Universities, Hospitals, Malls, Gov, Tourism, Sports, Microbus Terminals).
  - **First-Mile / Last-Mile Guidance:** Step-by-step directions connecting the station to the destination landmark with Google Maps intent link.

### 3.6 Ticket Guide & Subscriptions Tab
- **File Path:** `src/components/TicketGuide.jsx` (712 lines)
- **Status:** Complete.
- **Features & Capabilities:**
  - **Quick Fare Calculator:** Interactive slider (1 to 40 stations) displaying official EGP fare, physical ticket color, and concessionary rates (Seniors 60+, People of Determination).
  - **Multi-Modal Rate Cards:** Tariff tables for Monorail, LRT, and BRT.
  - **Smart Savings Calculator (`SmartSavingsCalculator.jsx`):** Computes monthly cash vs subscription break-even points.
  - **Subscription Pass Manager (`SubscriptionCalculator.jsx`):** Official pass pricing for Students, Public, and Seniors.
  - **Smart Wallet Balance Tracker:** Contactless card tracker stored in `egymetro_wallet_balance`.
  - **Regulations & Penalties:** Official fine schedules (Smoking 200 EGP, Incorrect tier exit penalty 50 EGP).

---

## 4. Modal Sheets (All with Drag-to-Dismiss)

Every bottom sheet modal in the application is equipped with Apple-style gesture dismissal via [`useSheetDragToDismiss`](file:///d:/Ahmed/Antigravity/Metro%20app/src/utils/motion.js#L192):

| Modal Component | File Path | Lines | Key Features |
|---|---|---|---|
| `StationSearchPickerModal` | `src/components/RoutePlanner.jsx` | ~500 | Live search, line filter tabs, category filter tabs, popular hubs, drag-to-dismiss |
| `StationDetailModal` | `src/components/StationDetailModal.jsx` | 635 | Facilities, first/last trains, local 500m maps (PNG & PDF), drag-to-dismiss |
| `ShareTripModal` | `src/components/ShareTripModal.jsx` | 561 | Emoji-free text message, canvas graphic card export, drag-to-dismiss |
| `OperatingHoursModal` | `src/components/OperatingHoursModal.jsx` | 240 | Live countdown during morning/night, line-by-line headways, drag-to-dismiss |
| `PdfMapModal` | `src/components/PdfMapModal.jsx` | 508 | Canvas pan/zoom viewer for official high-res PDF schematic transit maps |
| `NearMeModeModal` | `src/components/NearMeModeModal.jsx` | 208 | Transit mode filter for GPS station detection, drag-to-dismiss |
| `SaveTripModal` | `src/components/SaveTripModal.jsx` | 152 | Nickname input dialog for saving favorite routes |
| `SubscriptionInfoModal` | `src/components/SubscriptionInfoModal.jsx` | 216 | Paperwork checklists and subscription office directory |

---

## 5. Decommissioned & Deleted Dead Code (Phases 1-3 Verified)

The following unreferenced files were safely removed from the repository after git commit on branch `pre-cleanup`:
- `src/components/OldRoutes.jsx` (-1,747 lines) — Deleted.
- `src/components/StationExplorer.jsx` (-196 lines) — Deleted.
- `src/components/map/` (4 files) & `src/components/ui/StationDetailCard.tsx` (-741 lines) — Deleted.
- `src/types/map.ts` (-41 lines) — Deleted.
- **Total Removed:** **2,725 dead lines**. Verified via clean `npm run build` in 4.55s.
