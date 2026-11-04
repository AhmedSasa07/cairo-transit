/**
 * Dev Worst-Case Break-UI Fixtures & Stress-Test Data
 * Modeled according to .agent/rules/break-ui/SKILL.md and .agent/rules/emil-design-eng/SKILL.md
 * 
 * Realistic worst-case data from Cairo Transit Expansion (Bashteel, New Capital, Monorail, LRT, BRT):
 * - Longest station names (50-65 chars in Arabic and English)
 * - Multi-line interchange hubs (up to 4 transit modes on one station)
 * - 3 transfers multi-modal journey (Line 3 -> Monorail East -> LRT -> BRT)
 * - 0 items empty state fixture
 * - 20 items huge favorites feed fixture
 */

import { METRO_LINES, TICKET_TIERS } from './metroData.js';

export const WORST_CASE_FROM_STATION = {
  id: 'bashteel_interchange',
  nameAr: 'محطة قطارات صعيد مصر المركزية - بشتيل الجديدة التبادلية',
  nameEn: 'Rod El-Farag Corridor Northern Interchange Station (Bashteel Central)',
  lines: ['line1', 'line3', 'monorail_east', 'brt'],
  isInterchange: true,
  lat: 30.0712,
  lng: 31.1925,
  landmarksAr: ['مجمع محطات سكك حديد صعيد مصر المركزي ببشتيل', 'محور الفريق كمال عامر والمحور الدائري'],
  landmarks: ['Upper Egypt Central Railway Terminal Bashteel', 'Lt. Gen. Kamal Amer Axis Corridor']
};

export const WORST_CASE_TO_STATION = {
  id: 'arts_culture_interchange',
  nameAr: 'العاصمة الإدارية المركزية - مدينة الفنون والثقافة التبادلية',
  nameEn: 'New Administrative Capital Central - Arts & Culture Interchange',
  lines: ['line3', 'monorail_east', 'lrt'],
  isInterchange: true,
  lat: 30.0125,
  lng: 31.7214,
  landmarksAr: ['دار الأوبرا الجديدة ومدينة الفنون والثقافة', 'حي المال والأعمال والبرج الأيقوني بالعاصمة'],
  landmarks: ['New Opera House & City of Arts and Culture', 'Central Business District & Iconic Tower']
};

export const WORST_CASE_XFER_STATION_1 = {
  id: 'tantawy_conference',
  nameAr: 'محطة المشير طنطاوي الدولية للمؤتمرات والمعارض (محور المشير)',
  nameEn: 'Field Marshal Tantawy International Conference & Exhibition Center Interchange',
  lines: ['line3', 'monorail_east'],
  isInterchange: true,
  lat: 30.0381,
  lng: 31.3789
};

export const WORST_CASE_XFER_STATION_2 = {
  id: 'investment_zone',
  nameAr: 'المنطقة الاستثمارية الحرة بمدينة نصر والتجمع الخامس',
  nameEn: 'Free Investment Zone & Fifth Settlement Commercial Hub',
  lines: ['monorail_east', 'lrt'],
  isInterchange: true,
  lat: 30.0215,
  lng: 31.4582
};

export const WORST_CASE_XFER_STATION_3 = {
  id: 'dahshour_interchange',
  nameAr: 'محطة الطريق الدائري الأوسطي ووصلة دهشور التبادلية',
  nameEn: 'Middle Ring Road & Dahshour Interchange Junction',
  lines: ['lrt', 'brt'],
  isInterchange: true,
  lat: 30.0054,
  lng: 31.6210
};

// 4-Leg Multi-Modal Route with 3 Transfers & Ultra-long Labels
export const WORST_CASE_ROUTES = [
  {
    type: 'fastest',
    labelAr: 'الأسرع (متعدد الوسائط)',
    labelEn: 'Fastest (Multi-Modal)',
    stationCount: 28,
    travelTimeMins: 84,
    transfersCount: 3,
    origin: WORST_CASE_FROM_STATION,
    destination: WORST_CASE_TO_STATION,
    ticketTier: TICKET_TIERS[3],
    fareDetails: {
      totalCost: 55,
      metroTier: TICKET_TIERS[2],
      metroHops: 8,
      monorailPrice: 20,
      monorailHops: 9,
      lrtPrice: 15,
      lrtHops: 7,
      brtPrice: 5,
      brtHops: 4,
      isMultiModal: true
    },
    lineBreakdown: [
      { lineInfo: METRO_LINES.line3, stationCount: 8 },
      { lineInfo: METRO_LINES.monorail_east, stationCount: 9 },
      { lineInfo: METRO_LINES.lrt, stationCount: 7 },
      { lineInfo: METRO_LINES.brt, stationCount: 4 }
    ],
    kitKatAlert: {
      textAr: 'انتبه: المحطة تقع على مسار التفرع الشمالي لمحور روض الفرج، تأكد من استقلال القطار المتجه إلى روض الفرج وليس جامعة القاهرة عند محطة الكيت كات التبادلية.',
      textEn: 'Notice: Station is on the northern branch of Line 3. Ensure you board the train heading towards Rod El-Farag Corridor, not Cairo University, when transferring at Kit Kat Hub.'
    },
    legs: [
      {
        line: 'line3',
        lineInfo: METRO_LINES.line3,
        fromStation: WORST_CASE_FROM_STATION,
        toStation: WORST_CASE_XFER_STATION_1,
        durationMins: 22,
        direction: {
          stationId: 'adly_mansour',
          nameAr: 'عدلي منصور المركزية التبادلية الكبرى',
          nameEn: 'Adly Mansour Grand Central Transportation Hub'
        },
        stations: [
          WORST_CASE_FROM_STATION,
          { id: 'st_int_1', nameAr: 'الكيت كات وشارع السودان التبادلي', nameEn: 'Kit Kat & Sudan Street Interchange', lines: ['line3'] },
          { id: 'st_int_2', nameAr: 'التوفيقية والميدان الجديد المكيف', nameEn: 'Tawfikiya & New Air-Conditioned Square', lines: ['line3'] },
          { id: 'st_int_3', nameAr: 'وادي النيل وجامعة الدول العربية بالمهندسين', nameEn: 'Wadi El-Nil & Arab League Boulevard', lines: ['line3'] },
          { id: 'st_int_4', nameAr: 'جمال عبد الناصر (الإسعاف ووسط البلد)', nameEn: 'Gamal Abdel Nasser (Downtown Ambulance Hub)', lines: ['line1', 'line3'], isInterchange: true },
          { id: 'st_int_5', nameAr: 'العتبة والجمهورية والموسكي التبادلية', nameEn: 'Attaba & Gomhoureya Commercial Hub', lines: ['line2', 'line3'], isInterchange: true },
          { id: 'st_int_6', nameAr: 'العباسية وكلية الهندسة جامعة عين شمس', nameEn: 'Abbassiya & Faculty of Engineering Univ.', lines: ['line3'] },
          WORST_CASE_XFER_STATION_1
        ]
      },
      {
        line: 'monorail_east',
        lineInfo: METRO_LINES.monorail_east,
        fromStation: WORST_CASE_XFER_STATION_1,
        toStation: WORST_CASE_XFER_STATION_2,
        durationMins: 28,
        direction: {
          stationId: 'arts_culture_monorail',
          nameAr: 'مدينة الفنون والثقافة بالعاصمة الإدارية',
          nameEn: 'City of Arts & Culture New Capital'
        },
        stations: [
          WORST_CASE_XFER_STATION_1,
          { id: 'st_mono_1', nameAr: 'الجامعة الأمريكية بالتجمع الخامس (بوابة ٤)', nameEn: 'American University in Cairo (Gate 4 AUC)', lines: ['monorail_east'] },
          { id: 'st_mono_2', nameAr: 'المستشفى الجوي التخصصي وشارع التسعين الشمالي', nameEn: 'Air Force Specialized Hospital North 90th', lines: ['monorail_east'] },
          { id: 'st_mono_3', nameAr: 'محور محمد بن زايد الشمالي التبادلي', nameEn: 'Mohamed Bin Zayed Northern Axis Corridor', lines: ['monorail_east'] },
          WORST_CASE_XFER_STATION_2
        ]
      },
      {
        line: 'lrt',
        lineInfo: METRO_LINES.lrt,
        fromStation: WORST_CASE_XFER_STATION_2,
        toStation: WORST_CASE_XFER_STATION_3,
        durationMins: 20,
        direction: {
          stationId: 'knowledge_city',
          nameAr: 'مدينة المعرفة والابتكار التكنولوجي',
          nameEn: 'Knowledge City & Innovation Center Hub'
        },
        stations: [
          WORST_CASE_XFER_STATION_2,
          { id: 'st_lrt_1', nameAr: 'حدائق العاصمة والمنطقة السكنية المركزية', nameEn: 'Capital Gardens & Central Residential Zone', lines: ['lrt'] },
          { id: 'st_lrt_2', nameAr: 'مدينة بدر المركزية ومحطة قطارات المستقبل', nameEn: 'Badr City Central & Future Railway Station', lines: ['lrt'] },
          WORST_CASE_XFER_STATION_3
        ]
      },
      {
        line: 'brt',
        lineInfo: METRO_LINES.brt,
        fromStation: WORST_CASE_XFER_STATION_3,
        toStation: WORST_CASE_TO_STATION,
        durationMins: 14,
        direction: {
          stationId: 'arts_culture_brt',
          nameAr: 'العاصمة الإدارية المركزية - البرج الأيقوني',
          nameEn: 'Central Administrative Capital - Iconic Tower'
        },
        stations: [
          WORST_CASE_XFER_STATION_3,
          { id: 'st_brt_1', nameAr: 'حي الوزارات والحي الدبلوماسي الجديد', nameEn: 'Ministries District & New Diplomatic Quarter', lines: ['brt'] },
          WORST_CASE_TO_STATION
        ]
      }
    ]
  },
  {
    type: 'fewest_transfers',
    labelAr: 'أقل تحويلات (تحويلان)',
    labelEn: 'Fewest Transfers (2 Transfers)',
    stationCount: 32,
    travelTimeMins: 96,
    transfersCount: 2,
    origin: WORST_CASE_FROM_STATION,
    destination: WORST_CASE_TO_STATION,
    ticketTier: TICKET_TIERS[3],
    fareDetails: {
      totalCost: 45,
      metroTier: TICKET_TIERS[3],
      metroHops: 18,
      monorailPrice: 25,
      monorailHops: 14,
      isMultiModal: true
    },
    lineBreakdown: [
      { lineInfo: METRO_LINES.line3, stationCount: 18 },
      { lineInfo: METRO_LINES.monorail_east, stationCount: 14 }
    ],
    legs: [
      {
        line: 'line3',
        lineInfo: METRO_LINES.line3,
        fromStation: WORST_CASE_FROM_STATION,
        toStation: WORST_CASE_XFER_STATION_1,
        durationMins: 42,
        direction: {
          stationId: 'adly_mansour',
          nameAr: 'عدلي منصور المركزية التبادلية',
          nameEn: 'Adly Mansour Central Hub'
        },
        stations: [WORST_CASE_FROM_STATION, WORST_CASE_XFER_STATION_1]
      },
      {
        line: 'monorail_east',
        lineInfo: METRO_LINES.monorail_east,
        fromStation: WORST_CASE_XFER_STATION_1,
        toStation: WORST_CASE_TO_STATION,
        durationMins: 54,
        direction: {
          stationId: 'arts_culture_monorail',
          nameAr: 'مدينة الفنون والثقافة بالعاصمة الإدارية',
          nameEn: 'City of Arts & Culture New Capital'
        },
        stations: [WORST_CASE_XFER_STATION_1, WORST_CASE_TO_STATION]
      }
    ]
  },
  {
    type: 'cheapest',
    labelAr: 'أوفر سعر (مترو فقط 20 ج.م)',
    labelEn: 'Cheapest (Pure Metro 20 EGP)',
    stationCount: 34,
    travelTimeMins: 112,
    transfersCount: 1,
    origin: WORST_CASE_FROM_STATION,
    destination: WORST_CASE_TO_STATION,
    ticketTier: TICKET_TIERS[3],
    fareDetails: {
      totalCost: 20,
      metroTier: TICKET_TIERS[3],
      metroHops: 34,
      isMultiModal: false
    },
    lineBreakdown: [
      { lineInfo: METRO_LINES.line3, stationCount: 34 }
    ],
    legs: [
      {
        line: 'line3',
        lineInfo: METRO_LINES.line3,
        fromStation: WORST_CASE_FROM_STATION,
        toStation: WORST_CASE_TO_STATION,
        durationMins: 112,
        direction: {
          stationId: 'adly_mansour',
          nameAr: 'عدلي منصور المركزية الكبرى',
          nameEn: 'Adly Mansour Grand Central'
        },
        stations: [WORST_CASE_FROM_STATION, WORST_CASE_TO_STATION]
      }
    ]
  }
];

// 20 Realistic Egyptian Saved / Favorite Trips Stress Test Feed
export const HUGE_SAVED_TRIPS = [
  {
    id: 'trip_worst_1',
    name: 'محطة قطارات صعيد مصر المركزية - بشتيل الجديدة ➔ العاصمة الإدارية المركزية - مدينة الفنون والثقافة التبادلية',
    fromId: 'bashteel_interchange',
    toId: 'arts_culture_interchange',
    titleAr: 'بشتيل الجديدة ➔ مدينة الفنون بالعاصمة',
    titleEn: 'Bashteel Central ➔ Arts & Culture New Capital',
    timestamp: 1711200000000
  },
  {
    id: 'trip_short_2',
    name: 'Sadat ➔ Attaba',
    fromId: 'sadat',
    toId: 'attaba',
    titleAr: 'السادات ➔ العتبة',
    titleEn: 'Sadat ➔ Attaba',
    timestamp: 1711201000000
  },
  {
    id: 'trip_work_3',
    name: 'مشوار الشغل اليومي: من حلوان إلى الهيئة العامة للاستثمار والمناطق الحرة بمدينة نصر',
    fromId: 'helwan',
    toId: 'stadium',
    titleAr: 'حلوان ➔ الاستاد',
    titleEn: 'Helwan ➔ Cairo Stadium',
    timestamp: 1711202000000
  },
  {
    id: 'trip_uni_4',
    name: 'جامعة القاهرة ➔ الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري',
    fromId: 'cairo_university',
    toId: 'koleyet_el_banat',
    titleAr: 'جامعة القاهرة ➔ كلية البنات',
    titleEn: 'Cairo Univ ➔ Koleyet El-Banat',
    timestamp: 1711203000000
  },
  {
    id: 'trip_monorail_5',
    name: 'محطة الاستاد (مدينة نصر) ➔ مسجد الفتاح العليم التبادلي بالمونوريل الشرقي',
    fromId: 'stadium',
    toId: 'arts_culture_interchange',
    titleAr: 'الاستاد ➔ الفتاح العليم (المونوريل)',
    titleEn: 'Stadium ➔ Al-Fattah Al-Aleem (Monorail)',
    timestamp: 1711204000000
  },
  {
    id: 'trip_lrt_6',
    name: 'عدلي منصور المركزية ➔ محطة قطار العاصمة الإدارية الخفيف LRT',
    fromId: 'adly_mansour',
    toId: 'arts_culture_interchange',
    titleAr: 'عدلي منصور ➔ العاصمة LRT',
    titleEn: 'Adly Mansour ➔ Capital LRT',
    timestamp: 1711205000000
  },
  {
    id: 'trip_7',
    name: 'شبرا الخيمة ➔ المنيب (الخط الثاني بالكامل من البداية للنهاية)',
    fromId: 'shubra_el_kheima',
    toId: 'el_mounib',
    titleAr: 'شبرا الخيمة ➔ المنيب',
    titleEn: 'Shubra El-Kheima ➔ El-Mounib',
    timestamp: 1711206000000
  },
  {
    id: 'trip_8',
    name: 'المرج الجديدة ➔ حلوان (شريان الخط الأول بالكامل - 35 محطة)',
    fromId: 'new_el_marg',
    toId: 'helwan',
    titleAr: 'المرج الجديدة ➔ حلوان',
    titleEn: 'New El-Marg ➔ Helwan',
    timestamp: 1711207000000
  },
  {
    id: 'trip_9',
    name: 'مطار القاهرة الدولي (مبنى الركاب ٣) ➔ ميدان التحرير ومتحف الحضارة',
    fromId: 'airport',
    toId: 'sadat',
    titleAr: 'المطار ➔ السادات (التحرير)',
    titleEn: 'Cairo Airport ➔ Sadat (Tahrir)',
    timestamp: 1711208000000
  },
  {
    id: 'trip_10',
    name: 'الزمالك (صفاء حجازي) ➔ الكيت كات وشارع مراد بالجيزة',
    fromId: 'safaa_hegazy',
    toId: 'kit_kat',
    titleAr: 'صفاء حجازي ➔ الكيت كات',
    titleEn: 'Safaa Hegazy ➔ Kit Kat',
    timestamp: 1711209000000
  },
  {
    id: 'trip_11',
    name: 'جامعة الدول العربية ➔ روض الفرج التبادلي',
    fromId: 'gamaat_el_dowal',
    toId: 'rod_el_farag_corridor',
    titleAr: 'جامعة الدول ➔ محور روض الفرج',
    titleEn: 'Gamaat El Dowal ➔ Rod El-Farag Corridor',
    timestamp: 1711210000000
  },
  {
    id: 'trip_12',
    name: 'المعادي ➔ رمسيس (محطة الشهداء المركزية)',
    fromId: 'maadi',
    toId: 'al_shohadaa',
    titleAr: 'المعادي ➔ رمسيس (الشهداء)',
    titleEn: 'Maadi ➔ Ramses (Shohadaa)',
    timestamp: 1711211000000
  },
  {
    id: 'trip_13',
    name: 'مصر الجديدة (الأهرام) ➔ الدقي ومجلس الدولة',
    fromId: 'el_ahram',
    toId: 'dokki',
    titleAr: 'الأهرام ➔ الدقي',
    titleEn: 'El-Ahram ➔ Dokki',
    timestamp: 1711212000000
  },
  {
    id: 'trip_14',
    name: 'عين شمس ➔ السيدة زينب ومستشفى أبو الريش للأطفال',
    fromId: 'ain_shams',
    toId: 'sayyeda_zeinab',
    titleAr: 'عين شمس ➔ السيدة زينب',
    titleEn: 'Ain Shams ➔ Sayyeda Zeinab',
    timestamp: 1711213000000
  },
  {
    id: 'trip_15',
    name: 'محطة هليوبوليس التبادلية ➔ ساقية مكي وموقف الأقاليم',
    fromId: 'heliopolis',
    toId: 'sakiat_mekky',
    titleAr: 'هليوبوليس ➔ ساقية مكي',
    titleEn: 'Heliopolis ➔ Sakiat Mekky',
    timestamp: 1711214000000
  },
  {
    id: 'trip_16',
    name: 'دار السلام ➔ باب الشعرية وخان الخليلي التراثي',
    fromId: 'dar_el_salam',
    toId: 'bab_el_shaariya',
    titleAr: 'دار السلام ➔ باب الشعرية',
    titleEn: 'Dar El-Salam ➔ Bab El-Shaariya',
    timestamp: 1711215000000
  },
  {
    id: 'trip_17',
    name: 'سراي القبة ➔ جامعة حلوان بالحرم الجامعي الرئيسي',
    fromId: 'saray_el_qobba',
    toId: 'helwan_university',
    titleAr: 'سراي القبة ➔ جامعة حلوان',
    titleEn: 'Saray El-Qobba ➔ Helwan Univ',
    timestamp: 1711216000000
  },
  {
    id: 'trip_18',
    name: 'حدائق المعادي ➔ ماسبيرو وكورنيش النيل ووسط القاهرة',
    fromId: 'hadayeq_el_maadi',
    toId: 'maspero',
    titleAr: 'حدائق المعادي ➔ ماسبيرو',
    titleEn: 'Hadayeq El-Maadi ➔ Maspero',
    timestamp: 1711217000000
  },
  {
    id: 'trip_19',
    name: 'المطرية ومسلة سنوسرت ➔ المعصرة وكورنيش حلوان',
    fromId: 'el_matareya',
    toId: 'el_maasara',
    titleAr: 'المطرية ➔ المعصرة',
    titleEn: 'El-Matareya ➔ El-Maasara',
    timestamp: 1711218000000
  },
  {
    id: 'trip_20',
    name: 'العاصمة الإدارية ➔ مدينة 6 أكتوبر عبر شبكة المونوريل والـ BRT',
    fromId: 'arts_culture_interchange',
    toId: 'bashteel_interchange',
    titleAr: 'العاصمة ➔ 6 أكتوبر (شبكة سريعة)',
    titleEn: 'New Capital ➔ 6th October Network',
    timestamp: 1711219000000
  }
];

export const EMPTY_SAVED_TRIPS = [];
