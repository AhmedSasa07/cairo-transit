# Egy Metro Guide (دليل مترو ومونوريل القاهرة) 🚇🇪🇬

A modern, fast, mobile-first Progressive Web App (PWA) designed to help daily commuters and visitors navigate the entire Greater Cairo public transit network — **Cairo Metro Lines 1, 2, 3**, **East Nile Monorail**, **LRT Electric Train**, and **Ring Road BRT** with complete confidence.

**100% offline-ready**, fully bilingual in **Modern Standard Arabic & English**, completely **ad-free**, with complete dark mode support.

---

## 🎨 Official Line Color Palette
* 🔵 **Line 1 (Blue Line)**: Helwan ↔ New El-Marg (`#2563EB`)
* 🔴 **Line 2 (Red Line)**: Shubra El-Kheima ↔ El-Mounib (`#DC2626`)
* 🟢 **Line 3 (Green Line)**: Adly Mansour ↔ Rod El-Farag / Cairo University (`#10B981`)
* 🟣 **East Nile Monorail**: Cairo Stadium ↔ New Administrative Capital (`#8B5CF6`)
* 🌐 **LRT Electric Train**: Adly Mansour ↔ New Administrative Capital / Badr (`#06B6D4`)
* 🟡 **Ring Road BRT Express**: Rod El-Farag ↔ New Cairo / Ring Road (`#F59E0B`)

---

## ✨ Key Features

### 1. ⚡ Accurate Route Finder & Step-by-Step Navigation
* **Shortest Path & Real-time Fare Guarantee**: Eliminates previous transfer biases and off-by-one errors.
* **Alternative Route Cards**: Compares **"Shortest / Cheapest"** vs. **"Fewest Transfers"** routes.
* **Physical Ticket Colors Displayed**:
  * 🟡 **Zone 1 (1–9 Stations - 8 EGP)**: Yellow Ticket (صفراء)
  * 🟢 **Zone 2 (10–16 Stations - 10 EGP)**: Green Ticket (خضراء)
  * 🔴 **Zone 3 (17–23 Stations - 15 EGP)**: Pink / Rose Ticket (وردية)
  * 🔵 **Zone 4 (24+ Stations - 20 EGP)**: Light Blue Ticket (زرقاء فاتحة)
* **Kit Kat Branch Warning**: Visual alerts on which train to board (Rod El-Farag vs. Cairo University).
* **Multi-Modal Route Option**: Toggle to combine Metro with Monorail, LRT, and BRT.

### 2. 🗺️ Network Guide (دليل الشبكة والخطوط)
* Dedicated section to explore all transit lines in Greater Cairo.
* Full station lists, line lengths, opening years, and dedicated fare brackets for Metro, Monorail (10–25 EGP), and LRT (10–20 EGP).

### 3. 💰 Subscriptions & Smart Savings Calculator (حاسبة التوفير الذكية)
* **Pass vs. Single Tickets Comparison**: Enter days/week and trips/day to calculate exact 3-month savings (e.g. up to 98% savings for students).
* **Breakeven Trips**: Learn how quickly a subscription pays for itself (often in just 4–10 trips).
* **Subscription Guide**: Full requirements for Student, Public, Seniors (60+ / 70+), and Special Needs (22 EGP flat) passes.
* **Office Locations Directory**: Where to apply at stations.
* **Smart Wallet Card Balance Tracker**: Track remaining balance on your contactless smart card with low balance alerts.

### 4. 📍 Nearest Station & Cairo Landmarks Search
* **1-Tap GPS Detection**: Finds your closest station with walking time and direct "Set as Start (من)" button.
* **100+ Landmarks Directory**: Search Roxy, Ministry of Health, AUC, Citystars, Cairo Festival City, or paste Google Maps URLs directly.

### 5. 🛡️ 100% Ad-Free Experience
* Completely clean of all ads, banners, and interstitials.

---

## 🚀 Running the App Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

The app is live at:
* **Local**: `http://localhost:3000`
* **Mobile (Same Wi-Fi)**: `http://192.168.1.26:3000`
