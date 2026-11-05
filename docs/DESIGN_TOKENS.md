# Cairo Multi-Modal Transit App - Design Tokens & Visual Specs

This specification catalogues all design tokens utilized across the application, extracted directly from code files.

---

## 1. Official Transit Line Color Palette (Verified 2026)

| Mode / Line | Canonical Hex | Official Token Name | Usage Count | Near-Duplicates Flagged in Code |
| :--- | :--- | :--- | :--- | :--- |
| **Line 1 (M1)** | `#00518E` | `metro.line1` (Royal Blue) | 24 | `#055191`, `#2563EB` |
| **Line 2 (M2)** | `#C13038` | `metro.line2` (Crimson Red) | 19 | `#C23238`, `#DC2626`, `#991B1B` |
| **Line 3 (M3)** | `#009F87` | `metro.line3` (Emerald Green) | 23 | `#00B192`, `#10B981` |
| **East Monorail** | `#009CA6` | `metro.monorail_east` (Cyan) | 25 | `#059DA8` |
| **West Monorail** | `#9B2521` | `metro.monorail_west` (Dark Crimson) | 23 | `#B52A34` |
| **LRT Electric Train** | `#9E1B33` | `metro.lrt` (Burgundy) | 25 | `#06B6D4` (legacy cyan) |
| **Ring Road BRT** | `#8B5CF6` | `metro.brt` (Purple) | 30 | `#F59E0B` (legacy amber) |
| **Interchange Hub** | `#ECC15F` | `metro.hub` (Gold) | 13 | `#EAB308` |
| **App Accent** | `#FF4A1C` | `ischys.accent` (Warm Orange) | 119 | - |

> [!WARNING]
> Legacy Tailwind defaults (`#2563EB` blue, `#DC2626` red, `#10B981` green) in `tailwind.config.js` should be unified with canonical hex codes (`#00518E`, `#C13038`, `#009F87`).

---

## 2. Dark & Light Mode Theme Tokens

### Dark Mode Baseline (Ischys Theme)
- **Background Baseline**: `#0A0A0B` (Used 11+ times)
- **Surface 1 (Cards, Modals)**: `#111113` (Used 93 times)
- **Surface 2 (Stat Tiles, Inputs)**: `#17171A` (Used 103 times)
- **Surface 3 (Elevated Containers)**: `#212127` (Used 38 times)
- **Border Default**: `#26262C` (Used 195 times)
- **Border Hairline**: `#1D1D22` (Used 12 times)
- **Text Primary**: `#F4F4F5` (High-contrast off-white, used 42 times)
- **Text Secondary**: `#97979E` (Used 19 times)
- **Text Muted**: `#5B5B63` (Used 10 times)

### Light Mode Baseline
- **Background**: `#F4F4F5`
- **Surface 1**: `#FFFFFF`
- **Border**: `#E4E4E7`
- **Text Primary**: `#0A0A0B`
- **Text Secondary**: `#52525B`

---

## 3. Typography Stack

- **Arabic Typography**: `font-cairo` -> `'Cairo', 'Segoe UI', Tahoma, sans-serif` (Weights: 500, 600, 700, 800)
- **English / Numeric Typography**: `font-sans` / `font-space` -> `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", system-ui, sans-serif`
- **Monospace (Timers, Coordinates, Fare Numbers)**: `font-mono` -> `"JetBrains Mono", ui-monospace, monospace`

---

## 4. Animation & Physics Timings (Apple Fluid Mechanical Standards)

- **Touch Press-Down**: `120ms` via `cubic-bezier(0.2, 0, 0, 1)` (`scale(0.97)`)
- **Press Release**: `200ms` via `cubic-bezier(0.16, 1, 0.3, 1)`
- **Bottom Sheet Presentation**: `240ms` via `cubic-bezier(0.32, 0.72, 0, 1)`
- **Accordion Expand / Collapse**: `220ms` via CSS Grid `grid-template-rows: 0fr -> 1fr`
