# Cairo Multi-Modal Transit App - Features & Screen Catalog

This catalog documents every screen, modal, and major functional feature in the Cairo Transit application, including its technical file path, role, data model, state persistence, navigation flow, and implementation status.

---

## 1. Primary Top-Level Screens (Bottom Navigation)

### 1.1 Journey / Route Planner
- **Name**: Route Planner (`RoutePlanner`)
- **File Path**: `src/components/RoutePlanner.jsx`
- **Role / What it Does**: Multi-modal journey planner across 7 Cairo transit modes (M1, M2, M3, East Monorail, West Monorail, LRT, Ring Road BRT). Computes shortest, fastest, and fewest-transfer routes via Dijkstra graph traversal, computes fare tiers, line transfer instructions, Kit Kat fork branching alerts, and last-mile landmark connections.
- **Data Stored & Displayed**:
  - `fromStationId`, `toStationId` (origin/destination station identifiers)
  - `selectedRouteIndex` (active selected route alternative)
  - `transitMode` ('metro' vs 'mixed')
  - `userGpsCoords` (cached geolocation coords)
  - `savedTrips` (custom bookmarked routes)
  - **LocalStorage Keys**:
    - `cairo_metro_saved_from` (persists origin selection)
    - `cairo_metro_saved_to` (persists destination selection)
    - `cairo_metro_selected_route_idx` (persists active alternative index)
    - `egymetro_saved_trips` (persists bookmarked routes array)
- **Navigation Flow**:
  - **In**: Bottom navigation tab ("route" / "planner"), or deep-linked from Station Detail Modal / Map / GPS Finder via `onSetOrigin` / `onSetDestination`.
  - **Out**: Opens `StationDetailModal`, `PdfMapModal`, `ShareTripModal`, `SaveTripModal`, and `NearMeModeModal`.
- **Status**: COMPLETE

---

### 1.2 Interactive Vector Transit Map
- **Name**: Interactive Transit Map (`InteractiveMap`)
- **File Path**: `src/components/InteractiveMap.jsx`
- **Role / What it Does**: Interactive SVG vector canvas of the Greater Cairo multi-modal network. Supports smooth pan/zoom, dynamic line filtering (All, M1, M2, M3, Monorail East, Monorail West, LRT, BRT), Nile River path, station dot logos, interchange gold hubs, live station selection sheet, and drag-and-drop station coordinate calibration studio.
- **Data Stored & Displayed**:
  - `pan` ({ x, y }) & `zoomLevel` (1.0x to 4.5x)
  - `selectedStation` (selected station object)
  - `activeLineFilter` (line filter ID)
  - `stationCoords` (dynamic schematic coordinates dictionary)
  - `isCalibrating` (boolean toggle for drag-and-drop station editor)
  - `fpsMode` ('120' or '60')
  - `showIntegratedOverlay` (boolean toggle for high-res PDF background overlay)
  - **LocalStorage Keys**:
    - `cairo_metro_edited_coords` (persists live-dragged station coordinates)
    - `metro_map_fps_mode` (persists 120 FPS vs 60 FPS preference)
    - `metro_map_integrated_overlay` (persists background overlay toggle)
- **Navigation Flow**:
  - **In**: Bottom navigation tab ("map").
  - **Out**: Opens `StationDetailModal`, `PdfMapModal`, or routes directly to Route Planner.
- **Status**: COMPLETE

---

### 1.3 GPS Nearest Station Finder
- **Name**: Nearest Station Finder (`NearestStationFinder`)
- **File Path**: `src/components/NearestStationFinder.jsx`
- **Role / What it Does**: Uses device HTML5 Geolocation API (`navigator.geolocation`) to determine the user's live position and lists all Cairo transit stations sorted by exact distance (km/m) and estimated walking time, with mode filters for Metro, Monorail, LRT, and BRT.
- **Data Stored & Displayed**:
  - User coordinates (`lat`, `lng`, `accuracy`)
  - Distance sorted station list with line badges and interchange chips
  - Geolocation permission / error status
- **Navigation Flow**:
  - **In**: Bottom navigation tab ("nearest").
  - **Out**: "Route From Here" or "Route To Here" sets station in `RoutePlanner` and switches tab. Opens `StationDetailModal`.
- **Status**: COMPLETE

---

### 1.4 Transit Network Guide
- **Name**: Network Guide (`NetworkGuide`)
- **File Path**: `src/components/NetworkGuide.jsx`
- **Role / What it Does**: Comprehensive directory of all 7 transit lines. Displays line identity colors, terminal stations, station counts, fare structures, wheelchair accessibility, operating frequencies, and collapsible station sequence lists.
- **Data Stored & Displayed**:
  - `selectedLineId` (active line ID)
  - `isStationsExpanded` (collapsible stations drawer state)
- **Navigation Flow**:
  - **In**: Bottom navigation tab ("network").
  - **Out**: Can select station as origin/destination in `RoutePlanner` or open `PdfMapModal`.
- **Status**: COMPLETE

---

### 1.5 Fares & Subscription Guide
- **Name**: Ticket Guide (`TicketGuide`)
- **File Path**: `src/components/TicketGuide.jsx`
- **Role / What it Does**: Detailed guide to Cairo Metro physical ticket tiers (Yellow 8 EGP, Green 10 EGP, Blue 15 EGP, Pink 20 EGP), LRT fares, Monorail & BRT pricing, smart savings calculator, and subscription discount guide (students, elderly, special needs).
- **Data Stored & Displayed**:
  - Active sub-tab ('tiers', 'passes', 'offices')
  - Selected transit mode
- **Navigation Flow**:
  - **In**: Bottom navigation tab ("tickets").
  - **Out**: Opens `SubscriptionCalculator` and `SubscriptionInfoModal`.
- **Status**: COMPLETE

---

## 2. Modal Sheets & Auxiliary Features

### 2.1 Station Detail Modal Sheet
- **Name**: Station Detail Sheet (`StationDetailModal`)
- **File Path**: `src/components/StationDetailModal.jsx`
- **Role / What it Does**: Bottom sheet presenting complete station profile: line badges, interchange status, wheelchair/elevator accessibility, first/last train timetables, nearby major landmarks with Google Maps navigation links, and 500m local area schematic maps.
- **Data Stored & Displayed**: Station metadata, landmark list, operating hours.
- **Status**: COMPLETE

### 2.2 Share Trip Modal & Canvas Generator
- **Name**: Share Trip Modal (`ShareTripModal`)
- **File Path**: `src/components/ShareTripModal.jsx`
- **Role / What it Does**: Exports journey details via native Capacitor Share sheet, Web Share API, or clipboard. Renders an HTML5 Canvas summary image with QR code and route timeline.
- **Status**: COMPLETE

### 2.3 Save Trip Bookmark Modal
- **Name**: Save Trip Modal (`SaveTripModal`)
- **File Path**: `src/components/SaveTripModal.jsx`
- **Role / What it Does**: Prompts user for a custom nickname to bookmark frequent routes into `localStorage.egymetro_saved_trips`.
- **Status**: COMPLETE

### 2.4 Near Me Mode Selector
- **Name**: Near Me Mode Modal (`NearMeModeModal`)
- **File Path**: `src/components/NearMeModeModal.jsx`
- **Role / What it Does**: Bottom sheet enabling one-tap selection of transit mode (Metro, Monorail, LRT, BRT, or Any) when triggering GPS-based route planning.
- **Status**: COMPLETE

### 2.5 Operating Hours Timetable Modal
- **Name**: Operating Hours Modal (`OperatingHoursModal`)
- **File Path**: `src/components/OperatingHoursModal.jsx`
- **Role / What it Does**: Displays regular vs Ramadan/Eid holiday timetables, first train departure times, last train terminal departures, and transfer hub final connection times.
- **Status**: COMPLETE

### 2.6 Official Schematic PDF Map Modal
- **Name**: PDF Map Modal (`PdfMapModal`)
- **File Path**: `src/components/PdfMapModal.jsx`
- **Role / What it Does**: Fullscreen interactive viewer for high-resolution Cairo Network schematic PDF with pinch-to-zoom and pan.
- **Status**: COMPLETE

### 2.7 Subscription Savings Calculator
- **Name**: Subscription Calculator (`SubscriptionCalculator`)
- **File Path**: `src/components/SubscriptionCalculator.jsx`
- **Role / What it Does**: Compares single-ticket commuting costs against monthly, quarterly, and annual passes across transit modes, highlighting student/senior discounts.
- **Status**: COMPLETE

---

## 3. Legacy / Stub / Unused Components

### 3.1 OldRoutes (Archived Route Planner)
- **File Path**: `src/components/OldRoutes.jsx`
- **Lines**: 1,747 lines
- **Status**: DEAD CODE / UNUSED (not imported in `App.jsx`, completely superseded by `RoutePlanner.jsx`).

### 3.2 StationExplorer
- **File Path**: `src/components/StationExplorer.jsx`
- **Lines**: 196 lines
- **Status**: UNUSED (imported in `App.jsx` line 8, but never rendered in any tab).

### 3.3 VectorTransitMap & Map Subcomponents
- **File Path**: `src/components/map/VectorTransitMap.tsx`, `MapViewport.tsx`, `StationLabelsLayer.tsx`, `StationDetailCard.tsx`
- **Status**: EXPERIMENTAL / UNUSED (modular TypeScript map prototype, not imported into the production runtime).
