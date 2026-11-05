# Cairo Multi-Modal Transit App - Code Health & Refactor Proposal

## 1. Codebase Inventory: Files Exceeding 200 Lines

| File Path | Line Count | Primary Concern |
| :--- | :--- | :--- |
| `src/data/egyptPlaces.js` | 15050 lines |
| `src/data/metroData.js` | 3632 lines |
| `src/components/InteractiveMap.jsx` | 2329 lines |
| `src/components/RoutePlanner.jsx` | 2246 lines |
| `src/components/OldRoutes.jsx` | 1747 lines |
| `src/utils/routing.js` | 817 lines |
| `src/components/TicketGuide.jsx` | 750 lines |
| `src/components/NearestStationFinder.jsx` | 647 lines |
| `src/components/StationDetailModal.jsx` | 628 lines |
| `src/components/ShareTripModal.jsx` | 562 lines |
| `src/components/PdfMapModal.jsx` | 545 lines |
| `src/index.css` | 545 lines |
| `src/components/SubscriptionCalculator.jsx` | 543 lines |
| `src/data/breakUiFixtures.js` | 455 lines |
| `src/utils/translations.js` | 412 lines |
| `src/components/NetworkGuide.jsx` | 394 lines |
| `src/components/SmartSavingsCalculator.jsx` | 311 lines |
| `src/components/map/MapViewport.tsx` | 288 lines |
| `src/utils/mapCoordsSerializer.js` | 285 lines |
| `src/utils/motion.js` | 266 lines |
| `src/utils/geo.js` | 258 lines |
| `src/data/mapCoordinates.js` | 256 lines |
| `src/components/SubscriptionInfoModal.jsx` | 235 lines |
| `src/data/microbusTerminals.js` | 218 lines |
| `src/components/NearMeModeModal.jsx` | 209 lines |

---

## 2. Identified Codebase Bloat & Duplication

### 2.1 Dead Code: `src/components/OldRoutes.jsx` (1,747 lines)
- **Status**: Never imported or rendered anywhere in the application.
- **Impact**: Bloats codebase size and confuses maintenance.
- **Action**: Safe to delete entirely.
- **Estimated Line Savings**: **1,747 lines (100% reduction)**.

### 2.2 Unused Component: `src/components/StationExplorer.jsx` (196 lines)
- **Status**: Imported in `App.jsx` line 8, but never used in JSX.
- **Action**: Remove import and delete file.
- **Estimated Line Savings**: **196 lines**.

### 2.3 Unused Map Prototype Subcomponents: `src/components/map/*` (780 lines total)
- **Files**: `MapViewport.tsx`, `StationLabelsLayer.tsx`, `VectorTransitMap.tsx`, `MapFloatingControls.tsx`, `ui/StationDetailCard.tsx`.
- **Status**: Never imported by `App.jsx` or `InteractiveMap.jsx`.
- **Action**: Archive or remove.
- **Estimated Line Savings**: **780 lines**.

### 2.4 Monolithic File Splitting: `InteractiveMap.jsx` (2,329 lines)
- **Problem**: Holds map canvas, SVG rendering, touch/gesture handling, station calibration studio, bottom sheet detail drawer, and performance settings in one huge file.
- **Proposal**:
  1. Extract Calibration Studio toolbar & modal into `MapCalibrationToolbar.jsx` (~220 lines).
  2. Extract SVG Station Nodes into `MapStationNodes.jsx` (~250 lines).
  3. Extract Map Floating Controls into `MapControls.jsx` (~140 lines).
- **Estimated Modularity Gain**: Reduces `InteractiveMap.jsx` from 2,329 lines to ~1,200 lines.

### 2.5 Monolithic File Splitting: `RoutePlanner.jsx` (2,246 lines)
- **Problem**: Combines journey inputs, station/landmark search picker, multi-mode selector, route alternative cards, step-by-step timeline, and saved routes pill scroller.
- **Proposal**:
  1. Extract Station/Landmark Picker into `StationSearchSheet.jsx` (~400 lines).
  2. Extract Route Results Card & Timeline into `RouteResultsView.jsx` (~450 lines).
- **Estimated Modularity Gain**: Reduces `RoutePlanner.jsx` from 2,246 lines to ~1,200 lines.

---

## 3. Prioritized Refactor Roadmap & Line Savings Summary

| Step | Target Action | Estimated Line Reduction | Risk Level |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Delete dead file `OldRoutes.jsx` | **-1,747 lines** | **Zero Risk** (Not imported) |
| **Phase 2** | Remove unused `StationExplorer.jsx` & remove unused import in `App.jsx` | **-196 lines** | **Zero Risk** (Never rendered) |
| **Phase 3** | Archive unused prototype `src/components/map/*` & `types/map.ts` | **-780 lines** | **Zero Risk** (Orphan prototype) |
| **Phase 4** | Modularize `InteractiveMap.jsx` into 3 focused subcomponents | Net modularization | Low Risk (Step-by-step verification) |
| **Phase 5** | Modularize `RoutePlanner.jsx` search picker & timeline | Net modularization | Low Risk (Step-by-step verification) |

**Total Immediate Codebase Bloat Elimination**: **~2,723 lines deleted** with zero user-facing regressions.
