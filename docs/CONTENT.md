# Egy Metro Guide — User-Facing Content & Copy Catalog (Audited & Exhaustive)

This document is the authoritative, verified copy dictionary for Egy Metro Guide. It catalogs all user-facing copy across `src/utils/translations.js`, UI components, routing utilities, and data fixtures.

---

## 1. Single-Language Discrepancy Catalog

The following user-facing strings were detected as existing in **ONLY ONE LANGUAGE**. These represent gaps in full bilingual parity:

### 1.1 Arabic-Only Strings (Missing English Translation)

| Component / File Path | Line # | Verbatim Code / String in Codebase | Context / UI Role | Recommended English Translation |
|---|---|---|---|---|
| `src/data/metroData.js` | 314 | `textAr: 'صورة بطاقة الرقم القومي أو شهادة ميلاد كمبيوتر'` | BRT Student Pass Checklist Doc #1 | *Copy of National ID or computerized birth certificate* |
| `src/data/metroData.js` | 315 | `textAr: 'صورة شخصية حديثة مختومة بختم شعار الجمهورية على الظهر'` | BRT Student Pass Checklist Doc #2 | *Recent personal photo with official seal stamped on back* |
| `src/data/metroData.js` | 316 | `textAr: 'استمارة طلب اشتراك معتمدة ومختومة من الكلية أو المعهد أو المدرسة'` | BRT Student Pass Checklist Doc #3 | *Subscription application form certified by school or university* |
| `src/data/metroData.js` | 309 | `nameAr: 'سداد نقدي'`, `descAr: 'في شبابيك الحجز بالمحطات'` | BRT Payment Method 1 | *Cash payment (At station ticket counters)* |
| `src/data/metroData.js` | 310 | `nameAr: 'إنستاباي Instapay'`, `descAr: 'سداد فوري عبر تطبيق إنستاباي'` | BRT Payment Method 2 | *Instapay (Instant transfer via Instapay app)* |
| `src/data/metroData.js` | 311 | `nameAr: 'البنك الأهلي المصري NBE'`, `descAr: 'حساب رقم: 1003131857874101018'` | BRT Payment Method 3 | *National Bank of Egypt (Account: 1003131857874101018)* |
| `src/data/metroData.js` | 303 | `officialStartDate: '8 سبتمبر 2026'` | BRT Student pass start date | *September 8, 2026* |
| `src/data/metroData.js` | 305 | `locationAr: 'تقاطع الدائري مع طريق الإسكندرية الزراعي'` | BRT Office location description | *Ring Road intersection with Alexandria Agricultural Road* |
| `src/data/metroData.js` | 306 | `locationAr: 'التجمع الأول / الطريق الدائري'` | BRT Office location description | *First Settlement / Ring Road* |
| `src/data/metroData.js` | 320, 325 | `routeAr: 'المرحلة الأولى: الزراعي ➔ الجولف (تعمل بالكامل)'` | BRT Phase 1 route name | *Phase 1: Agricultural Road ➔ Golf (Fully Operational)* |
| `src/data/metroData.js` | 321 | `fromAgri: 'أول باص: 5:00 ص \| آخر باص: 11:00 م'` | BRT timetable string | *First bus: 5:00 AM \| Last bus: 11:00 PM* |
| `src/data/metroData.js` | 322 | `fromGolf: 'أول باص: 5:00 ص \| آخر باص: 12:00 منتصف الليل'` | BRT timetable string | *First bus: 5:00 AM \| Last bus: 12:00 Midnight* |
| `src/components/TransitModeIcon.jsx` | 76 | `alt="شعار وسيلة النقل"` | Image fallback alt tag | *Transit Mode Icon* |
| `src/components/RoutePlanner.jsx` | 580-584 | `title="مترو الأنفاق"`, `title="مونوريل"`, `title="قطار LRT"`, `title="أتوبيس ترددي BRT"`, `title="كل الوسائط"` | Transit Mode dropdown button titles | *Metro, Monorail, LRT Train, BRT Bus, All Modes* |
| `src/components/RoutePlanner.jsx` | 604 | `المحطة المحددة تقع على المونوريل/LRT/BRT - تم تفعيل شبكة الوسائط المتعددة تلقائياً` | Multi-modal auto-switch alert message | *Selected station is on Monorail / LRT / BRT - Multi-modal network enabled automatically* |
| `src/components/RoutePlanner.jsx` | 640 | `الانطلاق عبر محطة:` | Landmark boarding station indicator | *Boarding station:* |
| `src/components/RoutePlanner.jsx` | 846 | `تفاصيل مشوارك:` | Trip description header | *Trip Details:* |
| `src/components/RoutePlanner.jsx` | 1085 | `نصيحة للمشوار (ذهاب وعودة):` | Round-trip commuter advisory header | *Round-Trip Commuter Advice:* |
| `src/components/RoutePlanner.jsx` | 1088 | `لتوفير وقت الانتظار، اشترِ تذكرتين معاً الآن من شباك التذاكر (...) عشان متقفش في طابور محطة الرجوع.` | Round-trip commuter advisory copy | *To save queueing time, buy two tickets upfront (...) to skip lines on your return trip.* |
| `src/components/RoutePlanner.jsx` | 1839 | `محطة "${st.nameAr}" لسه تحت الإنشاء ومش شغالة في الخطوط حالياً.` | Under-construction warning toast | *Station is under construction and not operational yet.* |
| `src/utils/routing.js` | 538 | `تنبيه مهم في محطة الكيت كات: تأكد من ركوب القطار المتجه إلى [محور روض الفرج] (التفريعة الشمالية).` | Kit Kat Rod El-Farag fork advisory | *Important at Kit Kat: board train to [Rod El-Farag Corridor] (Northern Branch).* |
| `src/utils/routing.js` | 546 | `تنبيه مهم في محطة الكيت كات: تأكد من ركوب القطار المتجه إلى [جامعة القاهرة] (التفريعة الجنوبية).` | Kit Kat Cairo Univ fork advisory | *Important at Kit Kat: board train to [Cairo University] (Southern Branch).* |
| `src/utils/geo.js` | 139 | `descriptionAr: term.routesSummaryAr ? 'يخدم: ' + term.routesSummaryAr : ''` | Microbus terminal description prefix | *Serves:* |
| `src/components/StationDetailModal.jsx` | 46-50 | `مصاعد كهربائية وسلالم متحركة`, `موقف أتوبيسات ووسائل نقل`, `منافذ بيع التذاكر والاشتراكات`, `دورات مياه`, `مسارات كراسي متحركة` | Station amenities badge translations | *Elevators & Escalators, Bus & Microbus Terminal, Ticket & Pass Offices, Restrooms, Wheelchair Accessible* |
| `src/components/OperatingHoursModal.jsx` | 98 | `العد التنازلي لآخر قطارات الليلة:` | Night countdown header | *Last Trains Departure Countdown:* |

---

### 1.2 English-Only Strings (Missing Arabic Translation)

| Component / File Path | Line # | Verbatim English String in Codebase | Context / UI Role | Recommended Arabic Translation |
|---|---|---|---|---|
| `src/components/Header.jsx` | 67 | `aria-label="Official Metro & Transit Maps Gallery"` | Map gallery icon button accessibility label | `معرض خرائط المترو ووسائل النقل الرسمية` |
| `src/components/Header.jsx` | 86 | `aria-label="Operating Hours"` | Timetable icon button accessibility label | `مواعيد العمل وآخر القطارات` |
| `src/components/Header.jsx` | 105 | `aria-label="Toggle Dark Mode"` | Dark mode switch accessibility label | `تفعيل الوضع الليلي / النهاري` |
| `src/components/Header.jsx` | 125 | `aria-label="Switch Language"` | Language switch button accessibility label | `تغيير اللغة` |
| `src/components/AppleSegmentedControl.jsx` | 49 | `aria-label="View Switcher"` | Segmented control wrapper accessibility label | `مبدل العرض` |
| `src/components/NearestStationFinder.jsx` | 340, 568 | `aria-label="Station info"` | Station details info icon accessibility label | `تفاصيل المحطة` |
| `src/components/NearestStationFinder.jsx` | 398 | `aria-label="Clear search"` | Clear search input icon accessibility label | `مسح البحث` |
| `src/components/PdfMapModal.jsx` | 320 | `aria-label="Open Full Vector PDF"` | Full PDF viewer accessibility label | `فتح ملف الخريطة بصيغة PDF` |
| `src/components/PdfMapModal.jsx` | 333 | `aria-label="Close"` | Modal close button accessibility label | `إغلاق` |
| `src/components/StationDetailModal.jsx` | 598 | `aria-label="Close"` | Modal close button accessibility label | `إغلاق` |
| `src/components/RoutePlanner.jsx` | 568 | `aria-label="Transit Mode"` | Mode picker select accessibility label | `وسيلة النقل` |
| `src/components/RoutePlanner.jsx` | 759, 833 | `aria-label="Station info"` | Station detail button accessibility label | `تفاصيل المحطة` |
| `src/components/RoutePlanner.jsx` | 1010 | `TIME` | Route summary uppercase eyebrow | `الوقت` |
| `src/components/RoutePlanner.jsx` | 1019 | `STATIONS` | Route summary uppercase eyebrow | `المحطات` |
| `src/components/RoutePlanner.jsx` | 1047 | `PRICE` | Route summary uppercase eyebrow | `السعر` |
| `src/components/RoutePlanner.jsx` | 1050 | `TRANSFERS` | Route summary uppercase eyebrow | `التحويلات` |
| `src/components/RoutePlanner.jsx` | 1056 | `LE` | Price card currency symbol | `ج.م` |
| `src/components/RoutePlanner.jsx` | 2147 | `aria-label="Scroll Back"` | Horizontal scroll button accessibility label | `التمرير للخلف` |
| `src/components/RoutePlanner.jsx` | 2154 | `aria-label="Scroll Forward"` | Horizontal scroll button accessibility label | `التمرير للأمام` |
| `src/components/RoutePlanner.jsx` | 2235 | `aria-label="Clear search"` | Picker modal search clear accessibility label | `مسح البحث` |
| `src/components/RoutePlanner.jsx` | 2244 | `aria-label="Close"` | Picker modal close accessibility label | `إغلاق` |
| `src/components/ShareTripModal.jsx` | 259 | `ROUTE INSTRUCTIONS & TRANSFERS:` | Canvas image export section header | `مسار الرحلة والتبديل:` |
| `src/components/ShareTripModal.jsx` | 308 | `Arrive at:` | Canvas image destination node title | `الوصول إلى محطة:` |
| `src/components/OperatingHoursModal.jsx` | 138 | `LAST INTERCHANGE CONNECTIONS` | Operating hours section header | `آخر مواعيد الالتقاء بالمحطات التبادلية` |
| `src/components/OperatingHoursModal.jsx` | 158 | `HEADWAY FREQUENCY PER LINE:` | Timetable headway section header | `زمن التقاطر حسب الخط:` |

---

## 2. Complete Bilingual Copy Directory

### 2.1 App Shell, Header & Bottom Navigation

| UI Key / Element | Arabic (`ar`) | English (`en`) | Notes / Location |
|---|---|---|---|
| `appName` | مترو مصر | Egy Metro Guide | Header brand title |
| `appSubtitle` | دليلك السريع لمترو القاهرة والمونوريل والقطار الخفيف والأتوبيس الترددي | Navigate Cairo’s Metro, Monorail & LRT With Confidence | Header subtitle |
| `offlineBadge` | 100% شغال بدون نت | 100% Offline Ready | Offline ready pill |
| Tab: Routes | المشاوير / الرحلات | Routes | `translations.js:10` vs `BottomNavigation.jsx:32` |
| Tab: Network | الشبكة | Network | `translations.js:11` |
| Tab: Map | الخريطة | Map | `translations.js:12` |
| Tab: Nearest | أقرب محطة / الأقرب | Nearest | `translations.js:13` vs `BottomNavigation.jsx:38` |
| Tab: Tickets | التذاكر والاشتراكات / التذاكر | Tickets | `translations.js:15` vs `BottomNavigation.jsx:44` |
| Header Action: Timetable | مواعيد العمل | Operating Hours | `Header.jsx:86` |
| Header Action: Maps Gallery | معرض الخرائط | Maps Gallery | `Header.jsx:67` |
| Header Action: Theme Toggle | الوضع الليلي / النهاري | Dark / Light Mode | `Header.jsx:105` |
| Header Action: Language Switch | English / عربي | عربي / English | `Header.jsx:125` |

---

### 2.2 Route Planner & Search Hubs

| Element | Arabic (`ar`) | English (`en`) | Notes |
|---|---|---|---|
| Origin Field Label | هتركب منين؟ (محطة البداية) | From (Origin) | `translations.js:22` |
| Destination Field Label | رايح فين؟ (محطة النزول) | To (Destination) | `translations.js:23` |
| Search Input Placeholder | ابحث باسم المحطة أو المعلم أو الصق رابط خرائط جوجل... | Search station, landmark or paste Google Maps link... | `translations.js:24-25` |
| Near Me Quick Button | أقرب محطة ليا | Near Me | `RoutePlanner.jsx:657` |
| Swap Stations Button | تبديل المحطتين (عكس الاتجاه) | Swap / Reverse Trip | `translations.js:26` |
| Calculate Trip Button | ابحث عن أسرع مسار | Find Routes | `translations.js:27` |
| Clear Field | مسح | Clear | `translations.js:34` |
| AC Trains Only Filter | قطارات مكيفة فقط | AC Trains Only | `RoutePlanner.jsx:610` |
| AC Mode Tooltip | قطارات مكيفة فقط (خط 3، مونوريل، LRT، BRT) | Air-Conditioned Trains Only (M3, Monorail, LRT, BRT) | `RoutePlanner.jsx:612` |
| Multi-Modal Switch Notice | رحلة مشتركة بوسائط متعددة (مترو + مونوريل/قطار خفيف) | Combined multi-modal journey (Metro + Monorail/LRT) | `translations.js:61` |
| Same Station Warning | أنت مختار نفس المحطة في البداية والنهاية! | Origin and destination are the exact same station! | `translations.js:54` |
| No Route Found Warning | مش لاقيين مسار بين المحطتين دول. | Could not find a valid route between these stations. | `translations.js:55` |
| Under Construction Station | محطة "${name}" لسه تحت الإنشاء ومش شغالة في الخطوط حالياً. | Station "${name}" is under construction and not operational yet. | Toast alert |
| GPS Permission Denied Toast | تم رفض إذن الوصول للموقع الجغرافي. | Location access permission was denied. | GPS error |
| GPS Timeout Toast | تعذر تحديد موقعك الحالي بالـ GPS، حاول مرة أخرى. | Could not acquire GPS location. Please try again. | GPS error |

#### Quick Hub Picker Chips
- **Ramses Central:** رمسيس (الشهداء) / Ramses (Shohadaa)
- **Tahrir Square:** التحرير (السادات) / Tahrir (Sadat)
- **Attaba:** العتبة / Attaba
- **Cairo University:** جامعة القاهرة / Cairo University
- **Cairo Airport:** مطار القاهرة / Cairo Airport
- **New Capital:** العاصمة الإدارية / New Capital
- **Heliopolis:** مصر الجديدة / Heliopolis
- **Giza Railway:** محطة الجيزة / Giza Station

#### Route Option Badges
- `fastest`: أسرع مسار / Fastest Route
- `shortest_metro`: أقصر وأرخص مسار بالمترو / Shortest Metro Route
- `fewest_transfers`: أقل تحويلات / Fewest Transfers
- `shortest_distance`: أقصر مسافة / Shortest Distance
- `best_fare`: أوفر تذكرة / Lowest Fare
- `pure_metro`: مترو فقط (تذكرة موحدة) / Pure Metro (Standard Fare)

---

### 2.3 Transit Modes, Canonical Lines & Directions

| Canonical Line ID | Official Arabic Name | Short AR | Official English Name | Short EN | Brand Hex | Terminals (AR) | Terminals (EN) |
|---|---|---|---|---|---|---|---|
| `line1` | الخط الأول | الخط 1 | Line 1 (Blue Line) | M1 | `#00518E` | حلوان ➔ المرج الجديدة | Helwan ➔ New El-Marg |
| `line2` | الخط الثاني | الخط 2 | Line 2 (Red Line) | M2 | `#C13038` | شبرا الخيمة ➔ المنيب | Shubra El-Kheima ➔ El-Mounib |
| `line3` | الخط الثالث | الخط 3 | Line 3 (Green Line) | M3 | `#009F87` | عدلي منصور ➔ محور روض الفرج / جامعة القاهرة | Adly Mansour ➔ Rod El-Farag Corridor / Cairo University |
| `monorail_east` | مونوريل شرق النيل | مونوريل شرق | East Nile Monorail | Monorail E | `#009CA6` | الاستاد ➔ مدينة الفنون بالعاصمة | Stadium ➔ Arts & Culture City |
| `monorail_west` | مونوريل غرب النيل | مونوريل غرب | West Nile Monorail | Monorail W | `#9B2521` | وادي النيل ➔ 6 أكتوبر | Nile Valley ➔ 6th of October |
| `lrt` | القطار الكهربائي الخفيف (LRT) | قطار LRT | Light Rail Transit (LRT) | LRT | `#9E1B33` | عدلي منصور ➔ مدينة المعرفة / الفنون والثقافة | Adly Mansour ➔ Knowledge City / Arts City |
| `brt` | أتوبيس الترددي (BRT) | ترددّي BRT | Bus Rapid Transit (BRT) | BRT | `#8B5CF6` | الإسكندرية الزراعي ➔ أكاديمية الشرطة / الجولف | Alexandria Agri ➔ Police Academy / Golf |

#### Fork Advisory Microcopy (`Kit Kat` Station on Line 3)
- **Northern Branch Fork (محور روض الفرج):**
  * `ar`: `تنبيه مهم في محطة الكيت كات: تأكد من ركوب القطار المتجه إلى [محور روض الفرج] (التفريعة الشمالية).`
  * `en`: `Important alert at Kit Kat station: make sure to board the train heading towards [Rod El-Farag Corridor] (Northern Branch).`
- **Southern Branch Fork (جامعة القاهرة):**
  * `ar`: `تنبيه مهم في محطة الكيت كات: تأكد من ركوب القطار المتجه إلى [جامعة القاهرة] (التفريعة الجنوبية).`
  * `en`: `Important alert at Kit Kat station: make sure to board the train heading towards [Cairo University] (Southern Branch).`

---

### 2.4 Natural Language Trip Descriptions (`src/utils/routing.js`)

#### Direct Trip (0 Transfers)
- `ar`: `هتركب ${lineName} اتجاه ${direction} لحد وجهتك مباشرةً بدون أي تبديل.`
- `en`: `Take ${lineName} towards ${direction} directly to your destination without transfers.`

#### Two Legs (1 Transfer)
- `ar`: `هتركب ${line0} اتجاه ${direction0} وهتحوّل من ${transferStation} ${line1Target} اتجاه ${direction1}.`
- `en`: `Take ${line0} towards ${direction0} and change at ${transferStation} to ${line1} towards ${direction1}.`

#### Three+ Legs (2+ Transfers)
- `ar`: `هتركب ${line0} اتجاه ${direction0}، وهتحوّل في: ${transferParts.join(' ثم ')}، وصولاً إلى محطتك اتجاه ${lastDirection}.`
- `en`: `Take ${line0} towards ${direction0}, then transfer at: ${transferParts.join(', then ')}, reaching your destination towards ${lastDirection}.`

#### Interchange Walk Guidance Microcopy
- **Sadat Interchange (الخط 1 ↔ الخط 2):**
  * `ar`: `تحويل مباشر عبر نفق الربط بين رصيف الخط الأول ورصيف الخط الثاني (دقيقة ونصف مشياً).`
  * `en`: `Direct transfer tunnel connecting Line 1 and Line 2 platforms (~1.5 min walk).`
- **Shohadaa Interchange (الخط 1 ↔ الخط 2):**
  * `ar`: `اتبع اللوحات الإرشادية وصعود السلالم للوصول لرصيف الخط المقابل (دقيقتان مشياً).`
  * `en`: `Follow signs and ascend escalators to reach the intersecting line platform (~2 min walk).`
- **Attaba Interchange (الخط 2 ↔ الخط 3):**
  * `ar`: `تحويل مكيف بالكامل يربط بين الخط الثاني والخط الثالث عبر السلالم الكهربائية (دقيقتان).`
  * `en`: `Air-conditioned transfer link between Line 2 and Line 3 via escalators (~2 min walk).`
- **Nasser Interchange (الخط 1 ↔ الخط 3):**
  * `ar`: `ممر تبادلي مباشر يربط بين محطة ناصر بالخط الأول والخط الثالث (دقيقتان مشياً).`
  * `en`: `Direct transfer corridor connecting Line 1 and Line 3 platforms (~2 min walk).`
- **Adly Mansour Central Hub (الخط 3 ↔ قطار LRT):**
  * `ar`: `الخروج من رصيف مترو الخط 3 والتوجه عبر الصالة الرئيسية المكيفة إلى رصيف قطار LRT (3 دقائق).`
  * `en`: `Exit Line 3 platform and cross the main central concourse to the LRT platforms (~3 min walk).`

---

### 2.5 First-Mile / Last-Mile Landmark Navigation

#### Walking & Driving Threshold Rules
- **Short Walk (≤ 1.5 km / ≤ 18 mins):**
  * `ar`: `~${walkMins} دقيقة مشياً (${distanceFormatted})`
  * `en`: `~${walkMins} mins walk (${distanceFormatted})`
- **Driving / Taxi (> 1.5 km):**
  * `ar`: `تبعد ${distanceFormatted} (يفضل استقلال تاكسي أو ميكروباص من مخرج المحطة ~${driveMins} دقيقة)`
  * `en`: `${distanceFormatted} away (recommended taxi / microbus from station exit ~${driveMins} mins)`

#### 8 Standard Places Categories
1. **Universities & Academies:** الجامعات والأكاديميات / Universities & Academies
2. **Hospitals & Medical:** مستشفيات ومراكز طبية / Hospitals & Healthcare
3. **Shopping Malls & Markets:** مولات وتسوّق / Malls & Markets
4. **Tourist Landmarks & Heritage:** معالم سياحية ومتاحف / Landmarks & Heritage
5. **Government & Embassies:** مصالح وهيئات حكومية / Government & Embassies
6. **Transit Hubs & Terminals:** مواصلات ومواقف / Transport & Stations
7. **Sports & Clubs:** أندية رياضية وملاعب / Sports & Clubs
8. **Parks & Leisure:** حدائق ومتنزهات / Parks & Leisure

---

### 2.6 Network Guide & Line Breakdowns

- **Section Title:** دليل شبكة النقل العام الكبرى / Greater Cairo Transit Network
- **Section Subtitle:** استكشف كافة خطوط المترو والمونوريل والقطار الخفيف / Explore Metro lines, Monorail, LRT & official fares
- **Station Count Label:** المحطات / STATIONS
- **Terminals Header:** البداية ➔ النهاية / START ➔ END
- **Interchange Badge:** تبادل / HUB
- **Accessibility Badge:** مصعد / LIFT
- **Under Construction Badge:** تحت الإنشاء / UNDER CONSTRUCTION
- **Collapsible Toggle:**
  * Expanded: `إخفاء قائمة المحطات ↑` / `Hide Stations List ↑`
  * Collapsed: `عرض قائمة المحطات (${count} محطة) ↓` / `Show Stations List (${count} Stations) ↓`

---

### 2.7 Operating Hours, Headways & Timetables

#### Regular Daily Timetable
- **First Train Departure:**
  * Line 1 & Line 2: 05:15 AM
  * Line 3: 05:15 AM
  * LRT: 06:00 AM
  * BRT: 05:00 AM / 06:00 AM
- **Last Train Terminal Departures:**
  * Line 1 & Line 2: 11:45 PM – 12:05 AM
  * Line 3: 11:45 PM – 12:00 Midnight
  * LRT: 11:00 PM (Adly Mansour) / 11:30 PM (Arts City)
  * BRT: 11:00 PM (Phase 1) / 10:00 PM (Phase 2)
- **Last Interchange Meeting Timings (Crucial Commuter Window):**
  * Sadat Interchange: 12:25 AM
  * Attaba Interchange: 12:25 AM
  * Shohadaa (Ramses) Interchange: 12:30 AM

#### Ramadan & Eid Extended Timetable
- **First Train Departure:** 05:15 AM (Unchanged)
- **Last Train Terminal Departures:** 12:45 AM – 01:00 AM
- **Last Interchange Meeting Timings (Ramadan):**
  * Sadat Interchange: 01:25 AM
  * Attaba Interchange: 01:25 AM
  * Shohadaa (Ramses) Interchange: 01:30 AM

#### Realistic Headway Frequencies Per Line
- **Line 1 (Helwan - New El-Marg):** Daytime: 3.5 – 4.5 mins \| Night: 7.5 – 10 mins
- **Line 2 (Shubra - El-Mounib):** Daytime: 2.5 – 3.5 mins \| Night: 6.0 – 8.0 mins
- **Line 3 (Adly Mansour - Rod El-Farag / Cairo Univ):** Daytime: 4.5 – 6.0 mins \| Night: 8.0 – 11 mins
- **LRT Train:** Daytime: 10 – 15 mins \| Night: 20 – 30 mins
- **East Nile Monorail:** Daytime: 5 – 8 mins \| Night: 12 – 15 mins
- **BRT Bus:** Daytime: 5 – 10 mins \| Night: 15 – 20 mins

---

### 2.8 Fares, Single Tickets, Pass Subscriptions & Penalties

#### Official Cairo Metro Single Ticket Tariffs (Verified 2026 Tariff)
1. **Zone 1 (1 to 9 Stations):**
   * Public Price: **10 EGP** (Yellow Ticket / تذكرة صفراء)
   * Senior Citizens (60-70 yrs): 5 EGP
   * Special Needs: 5 EGP
   * Armed Forces / Police: 5 EGP
2. **Zone 2 (10 to 16 Stations):**
   * Public Price: **12 EGP** (Green Ticket / تذكرة خضراء)
   * Senior Citizens (60-70 yrs): 6 EGP
   * Special Needs: 5 EGP
   * Armed Forces / Police: 6 EGP
3. **Zone 3 (17 to 23 Stations):**
   * Public Price: **15 EGP** (Pink/Rose Ticket / تذكرة وردية)
   * Senior Citizens (60-70 yrs): 8 EGP
   * Special Needs: 5 EGP
   * Armed Forces / Police: 7.5 EGP
4. **Zone 4 (24+ Stations across full network):**
   * Public Price: **20 EGP** (Purple/Rose Ticket / تذكرة بنفسجية أو وردية)
   * Senior Citizens (60-70 yrs): 10 EGP
   * Special Needs: 5 EGP
   * Armed Forces / Police: 10 EGP

> **Special Concessions:**
> - Senior Citizens 70+ years ride **100% Free** upon presenting a valid Egyptian National ID at ticket windows.
> - Special Needs Companions travel with subsidized ticket (5 EGP flat).

#### LRT Capital Train Single Fares
- Zone 1 (1 to 3 stations): 10 EGP
- Zone 2 (4 to 7 stations): 15 EGP
- Zone 3 (8 to 10 stations): 20 EGP

#### East Nile Monorail Single Fares
- Zone 1 (1 to 4 stations): 10 EGP
- Zone 2 (5 to 9 stations): 15 EGP
- Zone 3 (10 to 15 stations): 20 EGP
- Zone 4 (16+ stations): 25 EGP

#### BRT Ring Road Single Fares (7 Official Tiers)
- Tier 1 (1 - 4 stations): 5 EGP
- Tier 2 (5 - 10 stations): 10 EGP
- Tier 3 (11 - 14 stations): 15 EGP
- Tier 4 (15 - 18 stations): 20 EGP
- Tier 5 (19 - 22 stations): 25 EGP
- Tier 6 (23 - 26 stations): 30 EGP
- Tier 7 (27+ stations): 35 EGP

#### Quarterly Metro Passes (3 Months / 180 Trips)
- **Student Subsidized:**
  * Zone 1: 150 EGP
  * Zone 2: 200 EGP
  * Zone 3: 250 EGP
  * Zone 4: 300 EGP
- **Public Quarterly:**
  * Zone 1: 1,045 EGP
  * Zone 2: 1,190 EGP
  * Zone 3: 1,250 EGP
  * Zone 4: 1,670 EGP
- **Seniors (60-70 yrs):**
  * Zone 1: 825 EGP
  * Zone 2: 1,040 EGP
  * Zone 3: 1,125 EGP
  * Zone 4: 1,270 EGP
- **Special Needs (Qaderoon):**
  * Flat All Zones: 150 EGP

#### Contactless Stored-Value Wallet Card
- Issuance fee: 65 EGP (one-time purchase).
- Recharge brackets: 20 to 400 EGP.
- Validity: 5 years from issuance date.
- Transferable and non-personalized (usable by any bearer).

#### Official Etiquette & Transit Fines
1. **Smoking Fine:** 200 EGP immediate penalty for smoking inside stations, concourses, or on train platforms.
2. **Turnstile / Ticket Zone Discrepancy Fine:** 50 to 100 EGP penalty at exit turnstiles for riding beyond the purchased ticket tier.
3. **Women-Only Car Violation:** 200 EGP penalty for men boarding designated women-only cars (clearly marked with red/green decals).
4. **Crossing Tracks / Turnstile Jumping:** 200 EGP fine and referral to transit police.
5. **Unauthorized Hawking / Begging:** 300 EGP fine and immediate confiscation of merchandise.

---

### 2.9 Share Trip Text Message & Canvas Export Image

#### Clean Share Trip Text Template (Zero Emojis, No Asterisks)

**Arabic Version:**
```text
خط سير الرحلة: من [محطة البداية] إلى [محطة النزول]

تفاصيل المشوار:
[نص وصف المشوار الذكي]

الوقت المتوقع: ~[X] دقيقة
عدد المحطات: [Y] محطة
سعر التذكرة: [Z] جنيه ([لون التذكرة])
التحويلات: [مباشر بدون تبديل / X تحويلة]

دليل مترو مصر (Egy Metro Guide)
```

**English Version:**
```text
Transit Route: [Origin] to [Destination]

Trip Description:
[Natural language trip route description]

Estimated Time: ~[X] mins
Stations: [Y]
Ticket Price: [Z] EGP ([Ticket Color])
Transfers: [Direct (No Transfers) / X transfer(s)]

Egy Metro Guide
```

#### Canvas Trip Image Export Specifications
- **Dimensions:** 800 x 1000 pixels (crisp 2x DPR).
- **Background:** Charcoal graphite `#0A0A0B` to `#111113` with subtle brand glows.
- **Header:** `EGY METRO GUIDE • دليل مترو مصر` (26px Space Grotesk/Cairo).
- **Subheader:** `بطاقة مسار الرحلة الرسمية • مسار معتمد وموثوق` / `Official Transit Route • Verified Metro Navigation`.
- **Hero Box:** Origin Station (White), Transfer count pill, Destination Station (`#2DD881`).
- **3 Stat Badges:**
  * Est. Time: `~X mins` (`#FF4A1C`)
  * Stations: `Y stops` (`#FFFFFF`)
  * Fare: `Z EGP` (`#2DD881`)
- **Step-by-Step Box:** Colored transfer nodes, line names, and passing stations count.
- **Footer:** Watermark and offline verification notice.

---

## 3. Summary of Status & Unverified Flags

- **Tariff Rates:** Verified against Ministry of Transport 2024-2026 tariff implementations.
- **Ramadan Schedules:** Verified against standard Cairo Metro operating directives.
- **Monorail West Status:** Marked as `UNDER CONSTRUCTION` / `SIMULATION ONLY`.
- **BRT Student Checklist:** Arabic text verified; English translations flagged as currently missing in data fixtures.
