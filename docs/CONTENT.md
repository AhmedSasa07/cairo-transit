# Egy Metro Guide — User-Facing Content & Copy Catalog (Audited)

Exhaustive copy dictionary compiled from `src/utils/translations.js`, component templates, and hardcoded inline strings across the entire codebase.

---

## 1. Single-Language Discrepancy Flags

The following strings were detected in the codebase as existing in **ONLY ONE LANGUAGE** (either Arabic without an English translation, or English without an Arabic translation). These represent gaps in full bilingual coverage:

### 1.1 Arabic-Only Strings (Missing English Translation)

| Component / File Path | Line # | Verbatim Arabic String in Source Code | Context / Role | Recommended English Translation |
|---|---|---|---|---|
| `src/components/RoutePlanner.jsx` | 604 | `المحطة المحددة تقع على المونوريل/LRT/BRT - تم تفعيل شبكة الوسائط المتعددة تلقائياً` | Multi-modal auto-switch alert message | *Selected station is on Monorail / LRT / BRT - Multi-modal network enabled automatically* |
| `src/components/RoutePlanner.jsx` | 640 | `الانطلاق عبر محطة:` | Landmark boarding station indicator | *Boarding station:* |
| `src/components/RoutePlanner.jsx` | 846 | `تفاصيل مشوارك:` | Trip description header | *Trip Details:* |
| `src/components/RoutePlanner.jsx` | 1085 | `نصيحة للمشوار (ذهاب وعودة):` | Round-trip commuter advisory header | *Round-Trip Commuter Advice:* |
| `src/components/RoutePlanner.jsx` | 1088 | `لتوفير وقت الانتظار، اشترِ تذكرتين معاً الآن من شباك التذاكر (...) عشان متقفش في طابور محطة الرجوع.` | Round-trip commuter advisory copy | *To save queueing time, buy two tickets upfront (...) to skip lines on your return trip.* |
| `src/components/RoutePlanner.jsx` | 1839 | `محطة "${st.nameAr}" لسه تحت الإنشاء ومش شغالة في الخطوط حالياً.` | Under-construction warning toast | *Station is under construction and not operational yet.* |
| `src/utils/routing.js` | 538 | `تنبيه مهم في محطة الكيت كات: تأكد من ركوب القطار المتجه إلى [محور روض الفرج] (التفريعة الشمالية).` | Kit Kat Rod El-Farag fork advisory | *Important at Kit Kat: board train to [Rod El-Farag Corridor] (Northern Branch).* |
| `src/utils/routing.js` | 546 | `تنبيه مهم في محطة الكيت كات: تأكد من ركوب القطار المتجه إلى [جامعة القاهرة] (التفريعة الجنوبية).` | Kit Kat Cairo Univ fork advisory | *Important at Kit Kat: board train to [Cairo University] (Southern Branch).* |
| `src/components/StationDetailModal.jsx` | 46 | `مصاعد كهربائية وسلالم متحركة` | Station amenities badge | *Elevators & Escalators* |
| `src/components/StationDetailModal.jsx` | 47 | `موقف أتوبيسات ووسائل نقل` | Station amenities badge | *Bus & Microbus Terminal* |
| `src/components/StationDetailModal.jsx` | 48 | `منافذ بيع التذاكر والاشتراكات` | Station amenities badge | *Ticket & Pass Offices* |
| `src/components/StationDetailModal.jsx` | 49 | `دورات مياه` | Station amenities badge | *Public Restrooms* |
| `src/components/StationDetailModal.jsx` | 50 | `مسارات كراسي متحركة` | Station amenities badge | *Wheelchair Accessible Ramps* |
| `src/components/OperatingHoursModal.jsx` | 98 | `العد التنازلي لآخر قطارات الليلة:` | Night countdown header | *Last Trains Departure Countdown:* |

### 1.2 English-Only Strings (Missing Arabic Translation)

| Component / File Path | Line # | Verbatim English String in Source Code | Context / Role | Recommended Arabic Translation |
|---|---|---|---|---|
| `src/components/RoutePlanner.jsx` | 1047 | `PRICE` | Stat card uppercase eyebrow | `السعر` |
| `src/components/RoutePlanner.jsx` | 1056 | `LE` | Price card currency symbol | `ج.م` |
| `src/components/RoutePlanner.jsx` | 1050 | `TRANSFERS` | Stat card uppercase eyebrow | `التحويلات` |
| `src/components/RoutePlanner.jsx` | 1010 | `TIME` | Stat card uppercase eyebrow | `الوقت` |
| `src/components/RoutePlanner.jsx` | 1019 | `STATIONS` | Stat card uppercase eyebrow | `المحطات` |
| `src/components/ShareTripModal.jsx` | 259 | `ROUTE INSTRUCTIONS & TRANSFERS:` | Canvas image section title | `مسار الرحلة والتبديل:` |
| `src/components/ShareTripModal.jsx` | 308 | `Arrive at:` | Canvas destination node title | `الوصول إلى محطة:` |
| `src/components/OperatingHoursModal.jsx` | 138 | `LAST INTERCHANGE CONNECTIONS` | Schedule section title | `آخر مواعيد الالتقاء بالمحطات التبادلية` |
| `src/components/OperatingHoursModal.jsx` | 158 | `HEADWAY FREQUENCY PER LINE:` | Schedule headway title | `زمن التقاطر حسب الخط:` |

---

## 2. Complete Bilingual Content Dictionary

### 2.1 Global App Shell & Navigation
| Element | Arabic (`ar`) | English (`en`) |
|---|---|---|
| App Name | مترو مصر | Egy Metro Guide |
| App Subtitle | دليلك السريع لمترو القاهرة والمونوريل والقطار الخفيف والأتوبيس الترددي | Navigate Cairo’s Metro, Monorail & LRT With Confidence |
| Offline Ready Pill | 100% شغال بدون نت | 100% Offline Ready |
| Offline Disconnected Pill | الوضع غير متصل | Offline Mode |
| Tab: Routes | المشاوير | Routes |
| Tab: Network | الشبكة | Network |
| Tab: Map | الخريطة | Map |
| Tab: Nearest | أقرب محطة | Nearest |
| Tab: Tickets | التذاكر | Tickets |

### 2.2 Route Planner & Journey Selector
| Element | Arabic (`ar`) | English (`en`) |
|---|---|---|
| Origin Label | هتركب منين؟ (محطة البداية) | From (Origin) |
| Destination Label | رايح فين؟ (محطة النزول) | To (Destination) |
| Search Placeholder | ابحث عن محطة أو معلم أو الصق لوكيشن... | Search station, landmark or paste Google Maps link... |
| Quick GPS Action | أقرب محطة ليا | Near Me |
| Locating GPS State | جاري التحديد... | Locating... |
| Save Favorites Tooltip | حفظ في المفضلة | Save to favorites |
| Share Route Tooltip | مشاركة تفاصيل الرحلة | Share route details |
| AC Mode Toggle | مكيف | AC |
| AC Mode Tooltip | قطارات مكيفة فقط (خط 3، مونوريل، LRT، BRT) | Air-Conditioned Trains Only (M3, Monorail, LRT, BRT) |
| Same Station Warning | أنت مختار نفس المحطة في البداية والنهاية! | Origin and destination are the exact same station! |
| No Route Found | مش لاقيين مسار بين المحطتين دول. | Could not find a valid route between these stations. |
| Stat: Travel Time | الوقت (دقيقة) | TIME (MIN) |
| Stat: Stations Count | المحطات | STATIONS |
| Stat: Transfers | التحويلات | TRANSFERS |
| Stat: Direct (0 Xfer) | مباشر بدون أي تبديل | Direct (No Transfers) |
| Stat: 1 Transfer | تحويلة واحدة | 1 Transfer |
| Stat: 2 Transfers | تحويلتين | 2 Transfers |
| Stat: Ticket Fare | السعر (جنيه) | PRICE (EGP / LE) |
| Round-Trip Commuter Tip | نصيحة للمشوار (ذهاب وعودة): لتوفير وقت الانتظار، اشترِ تذكرتين معاً الآن من شباك التذاكر (...) عشان متقفش في طابور محطة الرجوع. | Round-Trip Commuter Advice: Skip the return line: buy 2 tickets upfront (...) so you have your return ticket ready. |

### 2.3 Route Option Badges
| Badge Key | Arabic (`ar`) | English (`en`) |
|---|---|---|
| Fastest Route | أسرع مسار | Fastest Route |
| Shortest Metro | أقصر وأرخص مسار بالمترو | Shortest Metro Route |
| Fewest Transfers | أقل تحويلات | Fewest Transfers |
| Shortest Distance | أقصر مسافة | Shortest Distance |
| Best Fare | أوفر تذكرة | Lowest Fare |
| Pure Metro | مترو فقط (تذكرة موحدة) | Pure Metro (Standard Fare) |

### 2.4 Natural Language Trip Descriptions (`src/utils/routing.js:769-816`)
- **Single Leg (Direct Line):**
  * `ar`: `هتركب ${lineName} اتجاه ${dir} لحد وجهتك مباشرةً بدون أي تبديل.`
  * `en`: `Take ${lineName} towards ${dir} directly to your destination without transfers.`
- **Two Legs (1 Transfer):**
  * `ar`: `هتركب ${line0} اتجاه ${dir0} وهتحوّل من ${xfer} ${line1TargetAr} اتجاه ${dir1}.`
  * `en`: `Take ${line0} towards ${dir0} and change at ${xfer} to ${line1} towards ${dir1}.`
- **Three+ Legs (2+ Transfers):**
  * `ar`: `هتركب ${line0} اتجاه ${dir0}، وهتحوّل في: ${transferParts.join(' ثم ')}، وصولاً إلى محطتك اتجاه ${lastDir}.`
  * `en`: `Take ${line0} towards ${dir0}, then transfer at: ${transferParts.join(', then ')}, reaching your destination towards ${lastDir}.`

### 2.5 Authoritative Line & Terminal Naming
| Line ID | Official Arabic Name | Official English Name | Canonical Hex |
|---|---|---|---|
| `line1` | الخط الأول | M1 | `#00518E` |
| `line2` | الخط الثانى | M2 | `#C13038` |
| `line3` | الخط الثالث | M3 | `#009F87` |
| `monorail_east` | مونوريل شرق النيل | East Nile Monorail | `#009CA6` |
| `monorail_west` | مونوريل غرب النيل | West Nile Monorail | `#9B2521` |
| `lrt` | القطار الكهربائي الخفيف (LRT) | LRT | `#9E1B33` |
| `brt` | أتوبيس الترددي (BRT) | BRT | `#8B5CF6` |

### 2.6 Clean Share Trip Message Format (Zero Emojis, No Asterisks)
```text
خط سير الرحلة: من [Origin] إلى [Destination]

تفاصيل المشوار:
[Natural language trip description]

الوقت المتوقع: ~[X] دقيقة
عدد المحطات: [Y]
سعر التذكرة: [Z] جنيه ([Color])
التحويلات: [Direct / N transfers]

دليل مترو مصر (Egy Metro Guide)
```
