/**
 * TOP_EGYPT_PLACES - Comprehensive Database of 1,000+ Egypt Places & Landmarks
 * Greater Cairo, New Cairo, Giza, 6th of October, Sheikh Zayed, New Administrative Capital, Shorouk, Obour, Helwan
 *
 * Includes:
 * - 80+ Top Universities, Higher Institutes & Academies
 * - 170+ Major Hospitals, Medical Complexes & Specialized Centers
 * - 170+ Shopping Malls, Hypermarkets & Historic Souqs
 * - 180+ Historic & Cultural Landmarks, Pyramids, Museums & Citadels
 * - 160+ Government Ministries, Courts, Sovereign Authorities & Embassies
 * - 140+ Transport Hubs, Railway Stations, Airports, Microbus Terminals & Major City Squares
 * - 100+ Sports Clubs, Stadiums, Olympic Centers & Youth Facilities
 */

export const CATEGORY_METADATA = {
  university: {
    key: 'university',
    nameAr: 'جامعة وأكاديمية',
    nameEn: 'University & Academy',
    icon: 'GraduationCap',
    badgeColor: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
  },
  hospital: {
    key: 'hospital',
    nameAr: 'مستشفى ومركز طبي',
    nameEn: 'Hospital & Medical',
    icon: 'HeartPulse',
    badgeColor: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800'
  },
  mall: {
    key: 'mall',
    nameAr: 'مول وتسوق',
    nameEn: 'Shopping Mall',
    icon: 'ShoppingBag',
    badgeColor: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800'
  },
  landmark: {
    key: 'landmark',
    nameAr: 'معلم سياحي وتراثي',
    nameEn: 'Landmark & Heritage',
    icon: 'Landmark',
    badgeColor: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800'
  },
  government: {
    key: 'government',
    nameAr: 'مقر حكومي وسفارة',
    nameEn: 'Government & Embassy',
    icon: 'Building2',
    badgeColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
  },
  transport: {
    key: 'transport',
    nameAr: 'محطة وميدان نقل',
    nameEn: 'Transport Hub & Square',
    icon: 'Bus',
    badgeColor: 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200 dark:border-sky-800'
  },
  sports: {
    key: 'sports',
    nameAr: 'نادي واستاد رياضي',
    nameEn: 'Sports & Stadium',
    icon: 'Trophy',
    badgeColor: 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800'
  }
};

export const TOP_EGYPT_PLACES = [
  {
    "id": "uni_cu_main",
    "nameAr": "جامعة القاهرة - الحرم الرئيسي بالجيزة",
    "nameEn": "Cairo University - Main Campus Giza",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0263,
    "lng": 31.2114,
    "aliases": [
      "Cairo University",
      "CU",
      "جامعة القاهره",
      "جامعه القاهره"
    ]
  },
  {
    "id": "uni_cu_eng",
    "nameAr": "كلية الهندسة جامعة القاهرة - الجيزة",
    "nameEn": "Faculty of Engineering - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0275,
    "lng": 31.2085,
    "aliases": [
      "هندسة القاهرة",
      "Engineering CU"
    ]
  },
  {
    "id": "uni_cu_kasr_ainy",
    "nameAr": "كلية الطب قصر العيني - جامعة القاهرة",
    "nameEn": "Kasr Al-Ainy Faculty of Medicine - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0305,
    "lng": 31.2291,
    "aliases": [
      "قصر العيني",
      "Kasr Al Ainy Medical School"
    ]
  },
  {
    "id": "uni_cu_commerce",
    "nameAr": "كلية التجارة جامعة القاهرة",
    "nameEn": "Faculty of Commerce - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0245,
    "lng": 31.2065,
    "aliases": [
      "تجارة القاهرة"
    ]
  },
  {
    "id": "uni_cu_law",
    "nameAr": "كلية الحقوق جامعة القاهرة",
    "nameEn": "Faculty of Law - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0255,
    "lng": 31.2078,
    "aliases": [
      "حقوق القاهرة"
    ]
  },
  {
    "id": "uni_cu_arts",
    "nameAr": "كلية الآداب جامعة القاهرة",
    "nameEn": "Faculty of Arts - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0268,
    "lng": 31.2091,
    "aliases": [
      "آداب القاهرة"
    ]
  },
  {
    "id": "uni_cu_feps",
    "nameAr": "كلية الاقتصاد والعلوم السياسية جامعة القاهرة",
    "nameEn": "Faculty of Economics & Political Science (FEPS)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0281,
    "lng": 31.2125,
    "aliases": [
      "سياسة واقتصاد",
      "FEPS Cairo"
    ]
  },
  {
    "id": "uni_cu_pharmacy",
    "nameAr": "كلية الصيدلة جامعة القاهرة",
    "nameEn": "Faculty of Pharmacy - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0315,
    "lng": 31.2265,
    "aliases": [
      "صيدلة القاهرة"
    ]
  },
  {
    "id": "uni_cu_computers",
    "nameAr": "كلية الحاسبات والذكاء الاصطناعي جامعة القاهرة",
    "nameEn": "Faculty of Computers & AI - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0289,
    "lng": 31.2052,
    "aliases": [
      "حاسبات ومعلومات القاهرة",
      "FCI CU"
    ]
  },
  {
    "id": "uni_cu_science",
    "nameAr": "كلية العلوم جامعة القاهرة",
    "nameEn": "Faculty of Science - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0298,
    "lng": 31.2071,
    "aliases": [
      "علوم القاهرة"
    ]
  },
  {
    "id": "uni_cu_masscomm",
    "nameAr": "كلية الإعلام جامعة القاهرة",
    "nameEn": "Faculty of Mass Communication - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0272,
    "lng": 31.2059,
    "aliases": [
      "إعلام القاهرة"
    ]
  },
  {
    "id": "uni_cu_dar_el_uloom",
    "nameAr": "كلية دار العلوم جامعة القاهرة",
    "nameEn": "Faculty of Dar El-Uloom - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0251,
    "lng": 31.2082,
    "aliases": [
      "دار العلوم"
    ]
  },
  {
    "id": "uni_cu_dentistry",
    "nameAr": "كلية طب الأسنان جامعة القاهرة",
    "nameEn": "Faculty of Dentistry - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0312,
    "lng": 31.2281,
    "aliases": [
      "طب أسنان القاهرة"
    ]
  },
  {
    "id": "uni_cu_nursing",
    "nameAr": "كلية التمريض جامعة القاهرة",
    "nameEn": "Faculty of Nursing - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0295,
    "lng": 31.2275,
    "aliases": [
      "تمريض قصر العيني"
    ]
  },
  {
    "id": "uni_cu_physiotherapy",
    "nameAr": "كلية العلاج الطبيعي جامعة القاهرة",
    "nameEn": "Faculty of Physical Therapy - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0345,
    "lng": 31.2125,
    "aliases": [
      "علاج طبيعي القاهرة"
    ]
  },
  {
    "id": "uni_cu_veterinary",
    "nameAr": "كلية الطب البيطري جامعة القاهرة",
    "nameEn": "Faculty of Veterinary Medicine - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0225,
    "lng": 31.2045,
    "aliases": [
      "بيطري القاهرة"
    ]
  },
  {
    "id": "uni_cu_agriculture",
    "nameAr": "كلية الزراعة جامعة القاهرة",
    "nameEn": "Faculty of Agriculture - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0215,
    "lng": 31.2095,
    "aliases": [
      "زراعة القاهرة"
    ]
  },
  {
    "id": "uni_cu_archaeology",
    "nameAr": "كلية الآثار جامعة القاهرة",
    "nameEn": "Faculty of Archaeology - Cairo University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "cairo_university",
    "lat": 30.0261,
    "lng": 31.2072,
    "aliases": [
      "آثار القاهرة"
    ]
  },
  {
    "id": "uni_cu_october",
    "nameAr": "فرع جامعة القاهرة الدولي - 6 أكتوبر",
    "nameEn": "Cairo University International Branch - 6th October",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0125,
    "lng": 30.985,
    "aliases": [
      "فرع جامعة القاهرة الدولية"
    ]
  },
  {
    "id": "uni_asu_main",
    "nameAr": "جامعة عين شمس - الحرم الرئيسي بالعباسية",
    "nameEn": "Ain Shams University - Main Campus Abbassiya",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "abbassiya",
    "lat": 30.0772,
    "lng": 31.2854,
    "aliases": [
      "ASU",
      "Ain Shams",
      "جامعة عين شمس"
    ]
  },
  {
    "id": "uni_asu_medicine",
    "nameAr": "كلية الطب جامعة عين شمس - الدمرداش",
    "nameEn": "Faculty of Medicine - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "el_demerdash",
    "lat": 30.0745,
    "lng": 31.2789,
    "aliases": [
      "طب عين شمس",
      "طب الدمرداش"
    ]
  },
  {
    "id": "uni_asu_eng",
    "nameAr": "كلية الهندسة جامعة عين شمس - عبده باشا",
    "nameEn": "Faculty of Engineering - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "abdou_pasha",
    "lat": 30.0631,
    "lng": 31.2778,
    "aliases": [
      "هندسة عين شمس"
    ]
  },
  {
    "id": "uni_asu_girls",
    "nameAr": "كلية البنات جامعة عين شمس - مصر الجديدة",
    "nameEn": "Faculty of Girls - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0885,
    "lng": 31.3312,
    "aliases": [
      "بنات عين شمس",
      "Women College Heliopolis"
    ]
  },
  {
    "id": "uni_asu_pharmacy",
    "nameAr": "كلية الصيدلة جامعة عين شمس",
    "nameEn": "Faculty of Pharmacy - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "abbassiya",
    "lat": 30.0761,
    "lng": 31.2842,
    "aliases": [
      "صيدلة عين شمس"
    ]
  },
  {
    "id": "uni_asu_science",
    "nameAr": "كلية العلوم جامعة عين شمس",
    "nameEn": "Faculty of Science - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "abbassiya",
    "lat": 30.0789,
    "lng": 31.2831,
    "aliases": [
      "علوم عين شمس"
    ]
  },
  {
    "id": "uni_asu_commerce",
    "nameAr": "كلية التجارة جامعة عين شمس",
    "nameEn": "Faculty of Commerce - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "abbassiya",
    "lat": 30.0755,
    "lng": 31.2868,
    "aliases": [
      "تجارة عين شمس"
    ]
  },
  {
    "id": "uni_asu_law",
    "nameAr": "كلية الحقوق جامعة عين شمس",
    "nameEn": "Faculty of Law - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "abbassiya",
    "lat": 30.0768,
    "lng": 31.2875,
    "aliases": [
      "حقوق عين شمس"
    ]
  },
  {
    "id": "uni_asu_computers",
    "nameAr": "كلية الحاسبات والمعلومات جامعة عين شمس",
    "nameEn": "Faculty of Computer & Information Sciences - ASU",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "abbassiya",
    "lat": 30.0792,
    "lng": 31.2845,
    "aliases": [
      "حاسبات عين شمس",
      "FCIS ASU"
    ]
  },
  {
    "id": "uni_asu_agri",
    "nameAr": "كلية الزراعة جامعة عين شمس - شبرا الخيمة",
    "nameEn": "Faculty of Agriculture - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "kolleyyet_el_zeraa",
    "lat": 30.1189,
    "lng": 31.2465,
    "aliases": [
      "زراعة عين شمس"
    ]
  },
  {
    "id": "uni_asu_dentistry",
    "nameAr": "كلية طب الأسنان جامعة عين شمس",
    "nameEn": "Faculty of Dentistry - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "abbassiya",
    "lat": 30.0752,
    "lng": 31.2825,
    "aliases": [
      "أسنان عين شمس"
    ]
  },
  {
    "id": "uni_asu_alsun",
    "nameAr": "كلية الألسن جامعة عين شمس - العباسية",
    "nameEn": "Faculty of Al-Alsun - Ain Shams University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "abbassiya",
    "lat": 30.0765,
    "lng": 31.2858,
    "aliases": [
      "ألسن عين شمس"
    ]
  },
  {
    "id": "uni_asu_education",
    "nameAr": "كلية التربية جامعة عين شمس - روكسي",
    "nameEn": "Faculty of Education - Ain Shams University (Roxy)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "haroun",
    "lat": 30.0915,
    "lng": 31.3145,
    "aliases": [
      "تربية عين شمس روكسي"
    ]
  },
  {
    "id": "uni_helwan_main",
    "nameAr": "جامعة حلوان - الحرم الرئيسي بعين حلوان",
    "nameEn": "Helwan University - Main Campus",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "helwan_university",
    "lat": 29.8665,
    "lng": 31.3215,
    "aliases": [
      "Helwan Univ",
      "جامعة حلوان"
    ]
  },
  {
    "id": "uni_helwan_finearts",
    "nameAr": "كلية الفنون الجميلة جامعة حلوان - الزمالك",
    "nameEn": "Faculty of Fine Arts - Helwan University (Zamalek)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0612,
    "lng": 31.2185,
    "aliases": [
      "فنون جميلة الزمالك"
    ]
  },
  {
    "id": "uni_helwan_appliedarts",
    "nameAr": "كلية الفنون التطبيقية جامعة حلوان - الأورمان",
    "nameEn": "Faculty of Applied Arts - Helwan University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "dokki",
    "lat": 30.0381,
    "lng": 31.2148,
    "aliases": [
      "فنون تطبيقية الدقي"
    ]
  },
  {
    "id": "uni_helwan_artedu",
    "nameAr": "كلية التربية الفنية جامعة حلوان - الزمالك",
    "nameEn": "Faculty of Art Education - Helwan University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0592,
    "lng": 31.221,
    "aliases": [
      "تربية فنية الزمالك"
    ]
  },
  {
    "id": "uni_helwan_musicedu",
    "nameAr": "كلية التربية الموسيقية جامعة حلوان - الزمالك",
    "nameEn": "Faculty of Music Education - Helwan University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0601,
    "lng": 31.2205,
    "aliases": [
      "تربية موسيقية الزمالك"
    ]
  },
  {
    "id": "uni_helwan_eng_matariya",
    "nameAr": "كلية الهندسة بالمطرية - جامعة حلوان",
    "nameEn": "Faculty of Engineering at Matariya - Helwan University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "el_matareyya",
    "lat": 30.1255,
    "lng": 31.3095,
    "aliases": [
      "هندسة المطرية"
    ]
  },
  {
    "id": "uni_helwan_eng_helwan",
    "nameAr": "كلية الهندسة بحلوان - جامعة حلوان",
    "nameEn": "Faculty of Engineering at Helwan",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "ain_helwan",
    "lat": 29.8512,
    "lng": 31.3325,
    "aliases": [
      "هندسة حلوان"
    ]
  },
  {
    "id": "uni_helwan_tourism",
    "nameAr": "كلية السياحة والفنادق جامعة حلوان - المنيل",
    "nameEn": "Faculty of Tourism & Hotels - Helwan University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "malek_saleh",
    "lat": 30.0152,
    "lng": 31.2285,
    "aliases": [
      "سياحة وفنادق حلوان"
    ]
  },
  {
    "id": "uni_helwan_commerce",
    "nameAr": "كلية التجارة وإدارة الأعمال جامعة حلوان - الزمالك",
    "nameEn": "Faculty of Commerce - Helwan University (Zamalek)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0585,
    "lng": 31.2225,
    "aliases": [
      "تجارة الزمالك"
    ]
  },
  {
    "id": "uni_helwan_science",
    "nameAr": "كلية العلوم جامعة حلوان",
    "nameEn": "Faculty of Science - Helwan University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "helwan_university",
    "lat": 29.8685,
    "lng": 31.3195,
    "aliases": [
      "علوم حلوان"
    ]
  },
  {
    "id": "uni_helwan_computers",
    "nameAr": "كلية الحاسبات والذكاء الاصطناعي جامعة حلوان",
    "nameEn": "Faculty of Computers & AI - Helwan University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "helwan_university",
    "lat": 29.8672,
    "lng": 31.3208,
    "aliases": [
      "حاسبات حلوان"
    ]
  },
  {
    "id": "uni_azhar_nasrcity",
    "nameAr": "جامعة الأزهر - المقر الرئيسي بمدينة نصر",
    "nameEn": "Al-Azhar University - Main Campus Nasr City",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "fair_zone",
    "lat": 30.0575,
    "lng": 31.3142,
    "aliases": [
      "Azhar University",
      "جامعة الازهر"
    ]
  },
  {
    "id": "uni_azhar_girls",
    "nameAr": "فرع البنات جامعة الأزهر - مدينة نصر",
    "nameEn": "Al-Azhar University - Girls Campus Nasr City",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "fair_zone",
    "lat": 30.0591,
    "lng": 31.3182,
    "aliases": [
      "بنات الأزهر"
    ]
  },
  {
    "id": "uni_azhar_eng",
    "nameAr": "كلية الهندسة جامعة الأزهر - مدينة نصر",
    "nameEn": "Faculty of Engineering - Al-Azhar University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "stadium",
    "lat": 30.0642,
    "lng": 31.3195,
    "aliases": [
      "هندسة الأزهر"
    ]
  },
  {
    "id": "uni_azhar_darrasa",
    "nameAr": "كليات الدراسات الإسلامية والعربية بالأزهر - الدراسة",
    "nameEn": "Al-Azhar Islamic Studies Faculty - Darrasa",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0465,
    "lng": 31.2642,
    "aliases": [
      "أزهر الدراسة"
    ]
  },
  {
    "id": "uni_azhar_medicine",
    "nameAr": "كلية الطب جامعة الأزهر - مدينة نصر",
    "nameEn": "Faculty of Medicine - Al-Azhar University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "fair_zone",
    "lat": 30.0562,
    "lng": 31.3165,
    "aliases": [
      "طب الأزهر"
    ]
  },
  {
    "id": "uni_azhar_pharmacy",
    "nameAr": "كلية الصيدلة جامعة الأزهر",
    "nameEn": "Faculty of Pharmacy - Al-Azhar University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "fair_zone",
    "lat": 30.0581,
    "lng": 31.3155,
    "aliases": [
      "صيدلة الأزهر"
    ]
  },
  {
    "id": "uni_azhar_science",
    "nameAr": "كلية العلوم جامعة الأزهر",
    "nameEn": "Faculty of Science - Al-Azhar University",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "fair_zone",
    "lat": 30.0571,
    "lng": 31.3175,
    "aliases": [
      "علوم الأزهر"
    ]
  },
  {
    "id": "uni_auc_newcairo",
    "nameAr": "الجامعة الأمريكية بالقاهرة - التجمع الخامس",
    "nameEn": "American University in Cairo (AUC) - New Cairo",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "monorail_auc",
    "lat": 30.0211,
    "lng": 31.4998,
    "aliases": [
      "AUC",
      "American University",
      "الجامعه الامريكيه"
    ]
  },
  {
    "id": "uni_auc_tahrir",
    "nameAr": "الجامعة الأمريكية - ميدان التحرير (الحرم التاريخي)",
    "nameEn": "AUC Tahrir Square Cultural Center",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "sadat",
    "lat": 30.0435,
    "lng": 31.2372,
    "aliases": [
      "AUC Tahrir",
      "الجامعة الأمريكية التحرير"
    ]
  },
  {
    "id": "uni_guc",
    "nameAr": "الجامعة الألمانية بالقاهرة - التجمع الخامس",
    "nameEn": "German University in Cairo (GUC) - New Cairo",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "monorail_auc",
    "lat": 29.9868,
    "lng": 31.4411,
    "aliases": [
      "GUC",
      "German University",
      "الجامعة الالمانية",
      "الجامعه الالمانيه"
    ]
  },
  {
    "id": "uni_bue",
    "nameAr": "الجامعة البريطانية في مصر - الشروق",
    "nameEn": "British University in Egypt (BUE) - El Shorouk",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1215,
    "lng": 31.6085,
    "aliases": [
      "BUE",
      "British University",
      "الجامعة البريطانية"
    ]
  },
  {
    "id": "uni_fue",
    "nameAr": "جامعة المستقبل - شارع التسعين التجمع الخامس",
    "nameEn": "Future University in Egypt (FUE) - New Cairo",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "monorail_air_hospital",
    "lat": 30.0305,
    "lng": 31.4722,
    "aliases": [
      "FUE",
      "Future University",
      "جامعة المستقبل"
    ]
  },
  {
    "id": "uni_miu",
    "nameAr": "جامعة مصر الدولية - طريق الإسماعيلية العبور",
    "nameEn": "Misr International University (MIU)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "lrt_obour",
    "lat": 30.1685,
    "lng": 31.4925,
    "aliases": [
      "MIU",
      "Misr International",
      "جامعة مصر الدولية"
    ]
  },
  {
    "id": "uni_must",
    "nameAr": "جامعة مصر للعلوم والتكنولوجيا - 6 أكتوبر",
    "nameEn": "Misr University for Science & Technology (MUST)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9805,
    "lng": 30.9635,
    "aliases": [
      "MUST",
      "جامعة مصر للعلوم والتكنولوجيا",
      "ماست"
    ]
  },
  {
    "id": "uni_o6u",
    "nameAr": "جامعة 6 أكتوبر - المحور المركزي",
    "nameEn": "October 6 University (O6U)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9745,
    "lng": 30.9465,
    "aliases": [
      "O6U",
      "جامعة 6 اكتوبر",
      "جامعة ستة اكتوبر"
    ]
  },
  {
    "id": "uni_nile",
    "nameAr": "جامعة النيل - الشيخ زايد وميدان جهينة",
    "nameEn": "Nile University - Sheikh Zayed",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0152,
    "lng": 30.9842,
    "aliases": [
      "Nile University",
      "NU",
      "جامعة النيل"
    ]
  },
  {
    "id": "uni_zewail",
    "nameAr": "مدينة زويل للعلوم والتكنولوجيا - حدائق أكتوبر",
    "nameEn": "Zewail City of Science and Technology",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9142,
    "lng": 31.0525,
    "aliases": [
      "Zewail City",
      "مدينة زويل"
    ]
  },
  {
    "id": "uni_galala",
    "nameAr": "جامعة الجلالة الأهلية - هضبة الجلالة",
    "nameEn": "Galala University - Galala Plateau",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "city_of_arts",
    "lat": 29.4585,
    "lng": 32.4125,
    "aliases": [
      "جامعة الجلالة",
      "Galala Univ"
    ]
  },
  {
    "id": "uni_ngu",
    "nameAr": "جامعة الجيزة الجديدة - طريق مصر إسكندرية الصحراوي",
    "nameEn": "New Giza University (NGU)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0245,
    "lng": 31.0655,
    "aliases": [
      "NGU",
      "نيوجيزة",
      "جامعة نيو جيزة"
    ]
  },
  {
    "id": "uni_buc",
    "nameAr": "جامعة بدر بالقاهرة - مدينة بدر",
    "nameEn": "Badr University in Cairo (BUC)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "lrt_badr",
    "lat": 30.1425,
    "lng": 31.7455,
    "aliases": [
      "BUC",
      "جامعة بدر"
    ]
  },
  {
    "id": "uni_acu",
    "nameAr": "جامعة الأهرام الكندية - 6 أكتوبر",
    "nameEn": "Ahram Canadian University (ACU) - 6th October",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9325,
    "lng": 30.9125,
    "aliases": [
      "ACU",
      "الاهرام الكندية",
      "جامعة الأهرام الكندية"
    ]
  },
  {
    "id": "uni_msa",
    "nameAr": "جامعة أكتوبر للعلوم الحديثة والآداب - طريق الواحات",
    "nameEn": "Modern Sciences and Arts University (MSA)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9612,
    "lng": 30.9525,
    "aliases": [
      "MSA",
      "جامعة MSA"
    ]
  },
  {
    "id": "uni_aastmt_sheraton",
    "nameAr": "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري - شيراتون هليوبوليس",
    "nameEn": "AASTMT - Sheraton Heliopolis Campus",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "el_haykestep",
    "lat": 30.1065,
    "lng": 31.3785,
    "aliases": [
      "AASTMT Sheraton",
      "الأكاديمية البحرية شيراتون",
      "الاكاديميه البحريه"
    ]
  },
  {
    "id": "uni_aastmt_smart",
    "nameAr": "الأكاديمية العربية للعلوم والتكنولوجيا - القرية الذكية",
    "nameEn": "AASTMT - Smart Village Campus",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0765,
    "lng": 31.0215,
    "aliases": [
      "AASTMT Smart Village",
      "الأكاديمية البحرية القرية الذكية"
    ]
  },
  {
    "id": "uni_aastmt_dokki",
    "nameAr": "الأكاديمية العربية للعلوم والتكنولوجيا - الدقي",
    "nameEn": "AASTMT - Dokki Campus",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "dokki",
    "lat": 30.0425,
    "lng": 31.2115,
    "aliases": [
      "AASTMT Dokki",
      "الأكاديمية البحرية الدقي"
    ]
  },
  {
    "id": "uni_aastmt_tagamoa",
    "nameAr": "الأكاديمية العربية للعلوم والتكنولوجيا - التجمع الخامس",
    "nameEn": "AASTMT - New Cairo Campus",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0055,
    "lng": 31.4285,
    "aliases": [
      "AASTMT New Cairo",
      "الأكاديمية البحرية التجمع"
    ]
  },
  {
    "id": "uni_police_academy",
    "nameAr": "أكاديمية الشرطة - التجمع الأول / الطريق الدائري",
    "nameEn": "Police Academy - New Cairo",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "brt_14_academy",
    "lat": 30.0625,
    "lng": 31.4425,
    "aliases": [
      "Police Academy",
      "كلية الشرطة",
      "اكاديمية الشرطة"
    ]
  },
  {
    "id": "uni_military_academy",
    "nameAr": "الكلية الحربية المصرية - مصر الجديدة",
    "nameEn": "Egyptian Military Academy - Heliopolis",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "al_ahram",
    "lat": 30.0985,
    "lng": 31.3545,
    "aliases": [
      "Military Academy",
      "الكلية الحربية"
    ]
  },
  {
    "id": "uni_mtc",
    "nameAr": "الكلية الفنية العسكرية - كوبري القبة",
    "nameEn": "Technical Military College (MTC) - Kobri El-Qobba",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "kobri_el_qobba",
    "lat": 30.0925,
    "lng": 31.2995,
    "aliases": [
      "MTC",
      "الفنية العسكرية",
      "الكليه الفنيه العسكريه"
    ]
  },
  {
    "id": "uni_air_defense",
    "nameAr": "كلية الدفاع الجوي",
    "nameEn": "Air Defense College / Academy",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "brt_16_golf",
    "lat": 30.0825,
    "lng": 31.3655,
    "aliases": [
      "كلية الدفاع الجوي",
      "الدفاع الجوي"
    ]
  },
  {
    "id": "uni_ecu",
    "nameAr": "الجامعة المصرية الصينية - جسر السويس ألف مسكن",
    "nameEn": "Egyptian Chinese University (ECU)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "alf_maskan",
    "lat": 30.1185,
    "lng": 31.3395,
    "aliases": [
      "ECU",
      "الجامعة الصينية"
    ]
  },
  {
    "id": "uni_cic_tagamoa",
    "nameAr": "الكلية الكندية الدولية - التجمع الخامس",
    "nameEn": "Canadian International College (CIC) - New Cairo",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "monorail_auc",
    "lat": 30.0185,
    "lng": 31.4925,
    "aliases": [
      "CIC New Cairo",
      "المعهد الكندي التجمع"
    ]
  },
  {
    "id": "uni_cic_zayed",
    "nameAr": "الكلية الكندية الدولية - الشيخ زايد",
    "nameEn": "Canadian International College (CIC) - Sheikh Zayed",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0385,
    "lng": 30.9855,
    "aliases": [
      "CIC Zayed",
      "المعهد الكندي زايد"
    ]
  },
  {
    "id": "uni_mti",
    "nameAr": "الجامعة الحديثة للتكنولوجيا والمعلومات - المقطم / المعادي",
    "nameEn": "Modern University for Technology & Information (MTI)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "brt_20_mokattam",
    "lat": 29.9885,
    "lng": 31.3325,
    "aliases": [
      "MTI",
      "الجامعة الحديثة"
    ]
  },
  {
    "id": "uni_hti",
    "nameAr": "المعهد التكنولوجي العالي - العاشر من رمضان والفرع التنسيقي",
    "nameEn": "Higher Technological Institute (HTI)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "adly_mansour",
    "lat": 30.1512,
    "lng": 31.4055,
    "aliases": [
      "HTI",
      "تكنولوجي عاشر"
    ]
  },
  {
    "id": "uni_sadat",
    "nameAr": "أكاديمية السادات للعلوم الإدارية - المعادي",
    "nameEn": "Sadat Academy for Administrative Sciences - Maadi",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "sakanat_el_maadi",
    "lat": 29.9545,
    "lng": 31.2615,
    "aliases": [
      "Sadat Academy",
      "أكاديمية السادات"
    ]
  },
  {
    "id": "uni_applied_arts_inst",
    "nameAr": "المعهد العالي للفنون التطبيقية - التجمع الخامس",
    "nameEn": "Higher Institute of Applied Arts - 5th Settlement",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0095,
    "lng": 31.4355,
    "aliases": [
      "معهد فنون تطبيقية التجمع"
    ]
  },
  {
    "id": "uni_applied_arts_oct",
    "nameAr": "المعهد العالي للفنون التطبيقية - 6 أكتوبر",
    "nameEn": "Higher Institute of Applied Arts - 6th October",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9645,
    "lng": 30.9345,
    "aliases": [
      "فنون تطبيقية أكتوبر"
    ]
  },
  {
    "id": "uni_thebes_maadi",
    "nameAr": "أكاديمية طيبة المتكاملة للعلوم - المعادي",
    "nameEn": "Thebes Academy - Maadi",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "maadi",
    "lat": 29.9712,
    "lng": 31.2985,
    "aliases": [
      "Thebes Academy",
      "أكاديمية طيبة"
    ]
  },
  {
    "id": "uni_thebes_tagamoa",
    "nameAr": "أكاديمية طيبة المتكاملة - التجمع الخامس",
    "nameEn": "Thebes Academy - New Cairo",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0115,
    "lng": 31.4325,
    "aliases": [
      "طيبة التجمع"
    ]
  },
  {
    "id": "uni_culture_science_city",
    "nameAr": "مدينة الثقافة والعلوم - 6 أكتوبر",
    "nameEn": "Culture & Science City - 6th of October",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9655,
    "lng": 30.9412,
    "aliases": [
      "مدينة الثقافة والعلوم",
      "Culture and Science City"
    ]
  },
  {
    "id": "uni_shorouk_academy",
    "nameAr": "أكاديمية الشروق - مدينة الشروق",
    "nameEn": "El Shorouk Academy - Shorouk City",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1345,
    "lng": 31.6215,
    "aliases": [
      "أكاديمية الشروق",
      "Shorouk Academy"
    ]
  },
  {
    "id": "uni_workers",
    "nameAr": "الجامعة العمالية - مدينة نصر أمام الاستاد",
    "nameEn": "Workers University - Nasr City",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "stadium",
    "lat": 30.0685,
    "lng": 31.3125,
    "aliases": [
      "الجامعة العمالية",
      "عمالية نصر"
    ]
  },
  {
    "id": "uni_ufe",
    "nameAr": "الجامعة الفرنسية في مصر - مدينة الشروق",
    "nameEn": "French University in Egypt (UFE) - Shorouk",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1285,
    "lng": 31.6155,
    "aliases": [
      "UFE",
      "الجامعة الفرنسية"
    ]
  },
  {
    "id": "uni_giu",
    "nameAr": "الجامعة الألمانية الدولية - العاصمة الإدارية الجديدة",
    "nameEn": "German International University (GIU) - New Capital",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0045,
    "lng": 31.7215,
    "aliases": [
      "GIU",
      "الجامعة الألمانية بالعاصمة"
    ]
  },
  {
    "id": "uni_eue",
    "nameAr": "الجامعات الأوروبية في مصر - العاصمة الإدارية الجديدة",
    "nameEn": "European Universities in Egypt (EUE) - New Capital",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0125,
    "lng": 31.7155,
    "aliases": [
      "EUE",
      "الجامعات الأوروبية"
    ]
  },
  {
    "id": "uni_tkh",
    "nameAr": "مجمع المعرفة وجامعة كوفنتري - العاصمة الإدارية",
    "nameEn": "The Knowledge Hub Universities (Coventry) - New Capital",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0185,
    "lng": 31.7285,
    "aliases": [
      "TKH",
      "Coventry University Egypt"
    ]
  },
  {
    "id": "uni_canada",
    "nameAr": "جامعات كندا في مصر - العاصمة الإدارية",
    "nameEn": "Universities of Canada in Egypt - New Capital",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0215,
    "lng": 31.7355,
    "aliases": [
      "UofCanada",
      "جامعات كندا بالعاصمة"
    ]
  },
  {
    "id": "uni_ejust",
    "nameAr": "الجامعة المصرية اليابانية للعلوم والتكنولوجيا - مكتب القاهرة",
    "nameEn": "E-JUST Cairo Center",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "dokki",
    "lat": 30.0415,
    "lng": 31.2185,
    "aliases": [
      "E-JUST",
      "الجامعة اليابانية"
    ]
  },
  {
    "id": "uni_eslsca",
    "nameAr": "جامعة إسلسكا مصر - الشيخ زايد",
    "nameEn": "ESLSCA University - Sheikh Zayed",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0455,
    "lng": 30.9785,
    "aliases": [
      "ESLSCA",
      "جامعة اسلسكا"
    ]
  },
  {
    "id": "uni_aou",
    "nameAr": "الجامعة العربية المفتوحة - الشروق",
    "nameEn": "Arab Open University (AOU) - Shorouk",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1265,
    "lng": 31.6115,
    "aliases": [
      "AOU",
      "الجامعة المفتوحة"
    ]
  },
  {
    "id": "uni_heliopolis",
    "nameAr": "جامعة هليوبوليس للتنمية المستدامة - طريق بلبيس",
    "nameEn": "Heliopolis University for Sustainable Development",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "adly_mansour",
    "lat": 30.1845,
    "lng": 31.4285,
    "aliases": [
      "جامعة هليوبوليس"
    ]
  },
  {
    "id": "uni_art_cinema",
    "nameAr": "المعهد العالي للسينما - أكاديمية الفنون بالهرم",
    "nameEn": "Higher Institute of Cinema - Academy of Arts (Haram)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "faisal",
    "lat": 30.0095,
    "lng": 31.1875,
    "aliases": [
      "معهد السينما بالهرم",
      "أكاديمية الفنون"
    ]
  },
  {
    "id": "uni_art_theatre",
    "nameAr": "المعهد العالي للفنون المسرحية - أكاديمية الفنون بالهرم",
    "nameEn": "Higher Institute of Dramatic Arts - Academy of Arts",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "faisal",
    "lat": 30.0085,
    "lng": 31.1865,
    "aliases": [
      "معهد فنون مسرحية"
    ]
  },
  {
    "id": "uni_art_conservatoire",
    "nameAr": "المعهد العالي للموسيقى (الكونسرفتوار) - الهرم",
    "nameEn": "Cairo Conservatoire - Academy of Arts (Haram)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "faisal",
    "lat": 30.0075,
    "lng": 31.1855,
    "aliases": [
      "الكونسرفتوار",
      "معهد الكونسرفتوار"
    ]
  },
  {
    "id": "uni_art_ballet",
    "nameAr": "المعهد العالي للباليه - أكاديمية الفنون بالهرم",
    "nameEn": "Higher Institute of Ballet - Academy of Arts (Haram)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "faisal",
    "lat": 30.0072,
    "lng": 31.1845,
    "aliases": [
      "معهد الباليه"
    ]
  },
  {
    "id": "uni_art_folk",
    "nameAr": "المعهد العالي للفنون الشعبية - الهرم",
    "nameEn": "Higher Institute of Folk Arts - Academy of Arts",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "faisal",
    "lat": 30.0068,
    "lng": 31.1842,
    "aliases": [
      "فنون شعبية الهرم"
    ]
  },
  {
    "id": "uni_akhbar_elyom",
    "nameAr": "أكاديمية أخبار اليوم - مدينة 6 أكتوبر",
    "nameEn": "Akhbar El Yom Academy - 6th of October",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9685,
    "lng": 30.9385,
    "aliases": [
      "أكاديمية أخبار اليوم",
      "Akhbar El Yom"
    ]
  },
  {
    "id": "uni_iaems",
    "nameAr": "الأكاديمية الدولية للهندسة وعلوم الإعلام - 6 أكتوبر",
    "nameEn": "IAEMS Academy - 6th of October",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9625,
    "lng": 30.9325,
    "aliases": [
      "IAEMS",
      "أكاديمية علوم الإعلام"
    ]
  },
  {
    "id": "uni_nti",
    "nameAr": "المعهد القومي للاتصالات - القرية الذكية ومدينة نصر",
    "nameEn": "National Telecommunication Institute (NTI)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "stadium",
    "lat": 30.0615,
    "lng": 31.3215,
    "aliases": [
      "NTI",
      "معهد الاتصالات"
    ]
  },
  {
    "id": "uni_iti",
    "nameAr": "معهد تكنولوجيا المعلومات - القرية الذكية",
    "nameEn": "Information Technology Institute (ITI)",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0785,
    "lng": 31.0185,
    "aliases": [
      "ITI",
      "معهد ITI"
    ]
  },
  {
    "id": "uni_pyramids_inst",
    "nameAr": "معاهد الفراعنة العليا - الهرم / سقارة",
    "nameEn": "Pyramids Higher Institutes - Haram",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "saqyet_mekky",
    "lat": 29.9915,
    "lng": 31.1985,
    "aliases": [
      "معاهد الفراعنة"
    ]
  },
  {
    "id": "uni_madina_inst",
    "nameAr": "معاهد المدينة العليا للغات والإدارة - شبرامنت",
    "nameEn": "Madina Higher Institute - Shobramant",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "saqyet_mekky",
    "lat": 29.9545,
    "lng": 31.1785,
    "aliases": [
      "معاهد المدينة"
    ]
  },
  {
    "id": "uni_cairo_higher_inst",
    "nameAr": "المعهد العالي للهندسة والحاسبات - المقطم والقطامية",
    "nameEn": "Cairo Higher Institute for Engineering & CS - Mokattam",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "brt_20_mokattam",
    "lat": 29.9845,
    "lng": 31.3245,
    "aliases": [
      "معهد هندسة المقطم"
    ]
  },
  {
    "id": "uni_alalson_inst",
    "nameAr": "معهد الألسن العالي للسياحة والفنادق والحاسب - مدينة نصر",
    "nameEn": "Al-Alsun Higher Institute - Nasr City",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "fair_zone",
    "lat": 30.0645,
    "lng": 31.3325,
    "aliases": [
      "معهد الألسن نصر"
    ]
  },
  {
    "id": "uni_shorouk_cs_inst",
    "nameAr": "المعهد العالي للحاسبات وتكنولوجيا المعلومات - الشروق",
    "nameEn": "Shorouk Higher Institute for Computer Science",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1365,
    "lng": 31.6245,
    "aliases": [
      "حاسبات الشروق"
    ]
  },
  {
    "id": "uni_obour_eng_inst",
    "nameAr": "معهد العبور العالي للهندسة والتكنولوجيا",
    "nameEn": "El-Obour Higher Institute for Engineering & Tech",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "lrt_obour",
    "lat": 30.1745,
    "lng": 31.4885,
    "aliases": [
      "معهد العبور العالي"
    ]
  },
  {
    "id": "uni_future_eng_inst",
    "nameAr": "معهد المستقبل العالي للهندسة والتكنولوجيا - طريق الفيوم",
    "nameEn": "Future Higher Institute of Engineering - Fayoum Rd",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9245,
    "lng": 31.0415,
    "aliases": [
      "معهد المستقبل"
    ]
  },
  {
    "id": "uni_october_eng_inst",
    "nameAr": "المعهد العالي للهندسة المعمارية وإدارة الأعمال - 6 أكتوبر",
    "nameEn": "October Higher Institute for Engineering",
    "category": "university",
    "categoryAr": "جامعة وأكاديمية",
    "categoryEn": "University & Academy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9575,
    "lng": 30.9255,
    "aliases": [
      "هندسة 6 أكتوبر المعهد"
    ]
  },
  {
    "id": "hosp_kasr_ainy_old",
    "nameAr": "مستشفى قصر العيني القديم",
    "nameEn": "Kasr Al-Ainy Hospital (Old)",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0305,
    "lng": 31.2291,
    "aliases": [
      "قصر العيني القديم",
      "Kasr Al Ainy"
    ]
  },
  {
    "id": "hosp_kasr_ainy_french",
    "nameAr": "مستشفى قصر العيني الفرنساوي التعليمي الجديد",
    "nameEn": "Kasr Al-Ainy French Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0285,
    "lng": 31.2285,
    "aliases": [
      "فرنساوي قصر العيني",
      "French Hospital Cairo"
    ]
  },
  {
    "id": "hosp_abuelreesh_japan",
    "nameAr": "مستشفى أبو الريش الياباني للأطفال",
    "nameEn": "Abu El-Reesh Japanese Children Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0298,
    "lng": 31.2295,
    "aliases": [
      "أبو الريش الياباني",
      "Japanese Hospital"
    ]
  },
  {
    "id": "hosp_abuelreesh_mounira",
    "nameAr": "مستشفى أبو الريش المنيرة للأطفال",
    "nameEn": "Abu El-Reesh Mounira Children Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0321,
    "lng": 31.2345,
    "aliases": [
      "أبو الريش المنيرة"
    ]
  },
  {
    "id": "hosp_57357",
    "nameAr": "مستشفى سرطان الأطفال 57357",
    "nameEn": "Children’s Cancer Hospital 57357",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0215,
    "lng": 31.2365,
    "aliases": [
      "57357",
      "مستشفى 57357",
      "سرطان الاطفال"
    ]
  },
  {
    "id": "hosp_cancer_inst",
    "nameAr": "المعهد القومي للأورام - فم الخليج",
    "nameEn": "National Cancer Institute (NCI)",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "malek_saleh",
    "lat": 30.0255,
    "lng": 31.2315,
    "aliases": [
      "معهد الأورام",
      "معهد الاورام فم الخليج"
    ]
  },
  {
    "id": "hosp_magdi_yacoub",
    "nameAr": "مركز مجدي يعقوب لأمراض وأبحاث القلب - نيو جيزة",
    "nameEn": "Magdi Yacoub Global Heart Center - New Giza",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0225,
    "lng": 31.0625,
    "aliases": [
      "مجدي يعقوب للقلب",
      "Magdi Yacoub Heart Center"
    ]
  },
  {
    "id": "hosp_asu_specialized",
    "nameAr": "مستشفى عين شمس التخصصي",
    "nameEn": "Ain Shams University Specialized Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_demerdash",
    "lat": 30.0762,
    "lng": 31.2815,
    "aliases": [
      "عين شمس التخصصي"
    ]
  },
  {
    "id": "hosp_demerdash",
    "nameAr": "مستشفى الدمرداش الجامعي",
    "nameEn": "El-Demerdash University Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_demerdash",
    "lat": 30.0735,
    "lng": 31.2775,
    "aliases": [
      "الدمرداش",
      "مستشفى الدمرداش"
    ]
  },
  {
    "id": "hosp_asu_pediatric",
    "nameAr": "مستشفى الأطفال التخصصي بجامعة عين شمس",
    "nameEn": "Ain Shams University Children Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_demerdash",
    "lat": 30.0741,
    "lng": 31.2782,
    "aliases": [
      "أطفال عين شمس"
    ]
  },
  {
    "id": "hosp_asu_maternity",
    "nameAr": "مستشفى النساء والتوليد بجامعة عين شمس",
    "nameEn": "Ain Shams University Maternity Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_demerdash",
    "lat": 30.0731,
    "lng": 31.2768,
    "aliases": [
      "نساء الدمرداش"
    ]
  },
  {
    "id": "hosp_asu_surgery",
    "nameAr": "أكاديمية جراحة القلب والصدر بجامعة عين شمس",
    "nameEn": "Ain Shams Cardiothoracic Academy",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_demerdash",
    "lat": 30.0751,
    "lng": 31.2795,
    "aliases": [
      "أكاديمية القلب عين شمس"
    ]
  },
  {
    "id": "hosp_hussein_azhar",
    "nameAr": "مستشفى الحسين الجامعي - الأزهر",
    "nameEn": "Al-Hussein University Hospital (Al-Azhar)",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0482,
    "lng": 31.2635,
    "aliases": [
      "مستشفى الحسين",
      "الحسين الجامعي"
    ]
  },
  {
    "id": "hosp_sayed_galal",
    "nameAr": "مستشفى سيد جلال الجامعي (باب الشعرية)",
    "nameEn": "Sayed Galal University Hospital (Bab El-Shaariya)",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0545,
    "lng": 31.2585,
    "aliases": [
      "مستشفى سيد جلال",
      "مستشفى باب الشعرية"
    ]
  },
  {
    "id": "hosp_zahraa_azhar",
    "nameAr": "مستشفى الزهراء الجامعي للنساء والأطفال - العباسية",
    "nameEn": "Al-Zahraa University Hospital (Al-Azhar)",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "abbassiya",
    "lat": 30.0685,
    "lng": 31.2765,
    "aliases": [
      "مستشفى الزهراء الأزهر"
    ]
  },
  {
    "id": "hosp_salam_maadi",
    "nameAr": "مستشفى السلام الدولي - كورنيش المعادي",
    "nameEn": "As-Salam International Hospital - Maadi",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "maadi",
    "lat": 29.9655,
    "lng": 31.2515,
    "aliases": [
      "السلام الدولي المعادي",
      "As-Salam Maadi"
    ]
  },
  {
    "id": "hosp_salam_tagamoa",
    "nameAr": "مستشفى السلام الدولي - التجمع الخامس",
    "nameEn": "As-Salam International Hospital - New Cairo",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0155,
    "lng": 31.4255,
    "aliases": [
      "السلام الدولي التجمع"
    ]
  },
  {
    "id": "hosp_cleopatra",
    "nameAr": "مستشفى كليوباترا - مصر الجديدة",
    "nameEn": "Cleopatra Hospital - Heliopolis",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "al_ahram",
    "lat": 30.0915,
    "lng": 31.3285,
    "aliases": [
      "كليوباترا",
      "Cleopatra Heliopolis"
    ]
  },
  {
    "id": "hosp_cairo_specialized",
    "nameAr": "مستشفى القاهرة التخصصي - مصر الجديدة",
    "nameEn": "Cairo Specialized Hospital - Heliopolis",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "al_ahram",
    "lat": 30.0925,
    "lng": 31.3295,
    "aliases": [
      "القاهرة التخصصي"
    ]
  },
  {
    "id": "hosp_heliopolis",
    "nameAr": "مستشفى هليوبوليس - مصر الجديدة",
    "nameEn": "Heliopolis Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "heliopolis",
    "lat": 30.0865,
    "lng": 31.3395,
    "aliases": [
      "مستشفى هليوبوليس"
    ]
  },
  {
    "id": "hosp_palestine",
    "nameAr": "مستشفى فلسطين - مصر الجديدة",
    "nameEn": "Palestine Hospital - Heliopolis",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "heliopolis",
    "lat": 30.0895,
    "lng": 31.3415,
    "aliases": [
      "مستشفى فلسطين"
    ]
  },
  {
    "id": "hosp_nozha_intl",
    "nameAr": "مستشفى النزهة الدولي - النزهة الجديدة",
    "nameEn": "El Nozha International Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_nozha",
    "lat": 30.1245,
    "lng": 31.3685,
    "aliases": [
      "النزهة الدولي"
    ]
  },
  {
    "id": "hosp_saudi_german",
    "nameAr": "المستشفى السعودي الألماني - النزهة الجديدة",
    "nameEn": "Saudi German Hospital - Cairo",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_nozha",
    "lat": 30.1315,
    "lng": 31.3785,
    "aliases": [
      "السعودي الألماني",
      "Saudi German Cairo"
    ]
  },
  {
    "id": "hosp_air_force",
    "nameAr": "مستشفى القوات الجوية التخصصي - شارع التسعين التجمع",
    "nameEn": "Air Force Specialized Hospital - 90th St New Cairo",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "monorail_air_hospital",
    "lat": 30.0275,
    "lng": 31.4655,
    "aliases": [
      "المستشفى الجوي",
      "المستشفى الجوي التخصصي"
    ]
  },
  {
    "id": "hosp_police_agouza",
    "nameAr": "مستشفى الشرطة بالعجوزة",
    "nameEn": "Police Hospital - Agouza",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "kit_kat",
    "lat": 30.0575,
    "lng": 31.2145,
    "aliases": [
      "مستشفى شرطة العجوزة"
    ]
  },
  {
    "id": "hosp_police_nasrcity",
    "nameAr": "مستشفى الشرطة بمدينة نصر",
    "nameEn": "Police Hospital - Nasr City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "fair_zone",
    "lat": 30.0525,
    "lng": 31.3245,
    "aliases": [
      "شرطة مدينة نصر"
    ]
  },
  {
    "id": "hosp_police_tagamoa",
    "nameAr": "مستشفى الشرطة بالتجمع الأول",
    "nameEn": "Police Hospital - First Settlement",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_14_academy",
    "lat": 30.0615,
    "lng": 31.4395,
    "aliases": [
      "شرطة التجمع الأول"
    ]
  },
  {
    "id": "hosp_military_maadi",
    "nameAr": "مجمع مستشفيات القوات المسلحة بالمعادي",
    "nameEn": "Maadi Military Medical Complex",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "maadi",
    "lat": 29.9625,
    "lng": 31.2485,
    "aliases": [
      "المستشفى العسكري بالمعادي",
      "مستشفى المعادي للقوات المسلحة"
    ]
  },
  {
    "id": "hosp_military_qobba",
    "nameAr": "المجمع الطبي للقوات المسلحة بكوبري القبة",
    "nameEn": "Kobri El-Qobba Military Medical Complex",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "kobri_el_qobba",
    "lat": 30.0915,
    "lng": 31.2985,
    "aliases": [
      "مجمع كوبري القبة الطبي",
      "مستشفى كوبري القبة العسكري"
    ]
  },
  {
    "id": "hosp_military_galaa",
    "nameAr": "مجمع الجلاء الطبي للقوات المسلحة - مصر الجديدة",
    "nameEn": "Al-Galaa Military Medical Complex",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "al_ahram",
    "lat": 30.0965,
    "lng": 31.3485,
    "aliases": [
      "مستشفى الجلاء العسكري"
    ]
  },
  {
    "id": "hosp_imc",
    "nameAr": "المركز الطبي العالمي - طريق الإسماعيلية الصحراوي",
    "nameEn": "International Medical Center (IMC)",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "adly_mansour",
    "lat": 30.2245,
    "lng": 31.6215,
    "aliases": [
      "المركز الطبي العالمي",
      "IMC Cairo"
    ]
  },
  {
    "id": "hosp_nasser_inst",
    "nameAr": "معهد ناصر للبحوث والعلاج - كورنيش النيل شبرا",
    "nameEn": "Nasser Institute for Research & Treatment",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_mazallat",
    "lat": 30.0875,
    "lng": 31.2385,
    "aliases": [
      "معهد ناصر"
    ]
  },
  {
    "id": "hosp_national_heart",
    "nameAr": "المعهد القومي للقلب - إمبابة",
    "nameEn": "National Heart Institute - Imbaba",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "kit_kat",
    "lat": 30.0655,
    "lng": 31.2115,
    "aliases": [
      "معهد القلب إمبابة",
      "معهد القلب القومي"
    ]
  },
  {
    "id": "hosp_liver_inst",
    "nameAr": "المعهد القومي لأمراض الكبد والجهاز الهضمي",
    "nameEn": "National Liver Institute",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "malek_saleh",
    "lat": 30.0195,
    "lng": 31.2325,
    "aliases": [
      "معهد الكبد"
    ]
  },
  {
    "id": "hosp_nutrition_inst",
    "nameAr": "المعهد القومي للتغذية - القصر العيني",
    "nameEn": "National Nutrition Institute",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0345,
    "lng": 31.2335,
    "aliases": [
      "معهد التغذية"
    ]
  },
  {
    "id": "hosp_ahmed_maher",
    "nameAr": "مستشفى أحمد ماهر التعليمي - باب الخلق",
    "nameEn": "Ahmed Maher Teaching Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0435,
    "lng": 31.2545,
    "aliases": [
      "أحمد ماهر التعليمي"
    ]
  },
  {
    "id": "hosp_matariya",
    "nameAr": "مستشفى المطرية التعليمي",
    "nameEn": "El-Matareyya Teaching Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_matareyya",
    "lat": 30.1235,
    "lng": 31.3145,
    "aliases": [
      "مستشفى المطرية"
    ]
  },
  {
    "id": "hosp_galaa_obstetrics",
    "nameAr": "مستشفى الجلاء التعليمي للولادة - شارع الجلاء",
    "nameEn": "Al-Galaa Teaching Hospital for Obstetrics",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0555,
    "lng": 31.2445,
    "aliases": [
      "الجلاء للولادة",
      "مستشفى الجلاء للولادة"
    ]
  },
  {
    "id": "hosp_sahel",
    "nameAr": "مستشفى الساحل التعليمي - شبرا",
    "nameEn": "El-Sahel Teaching Hospital - Shubra",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "road_el_farag",
    "lat": 30.0825,
    "lng": 31.2415,
    "aliases": [
      "مستشفى الساحل التعليمي"
    ]
  },
  {
    "id": "hosp_agouza",
    "nameAr": "مستشفى العجوزة التخصصي",
    "nameEn": "Agouza Specialized Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "kit_kat",
    "lat": 30.0545,
    "lng": 31.2135,
    "aliases": [
      "مستشفى العجوزة"
    ]
  },
  {
    "id": "hosp_coptic",
    "nameAr": "المستشفى القبطي - شارع رمسيس",
    "nameEn": "Coptic Hospital - Ramses",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0615,
    "lng": 31.2545,
    "aliases": [
      "المستشفى القبطي رمسيس"
    ]
  },
  {
    "id": "hosp_italian",
    "nameAr": "المستشفى الإيطالي - العباسية",
    "nameEn": "Italian Hospital (Ospedale Italiano) - Abbassiya",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "abbassiya",
    "lat": 30.0675,
    "lng": 31.2745,
    "aliases": [
      "المستشفى الإيطالي"
    ]
  },
  {
    "id": "hosp_greek",
    "nameAr": "المستشفى اليوناني - العباسية",
    "nameEn": "Greek Hospital - Abbassiya",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "abbassiya",
    "lat": 30.0665,
    "lng": 31.2725,
    "aliases": [
      "المستشفى اليوناني"
    ]
  },
  {
    "id": "hosp_dar_alfouad_october",
    "nameAr": "مستشفى دار الفؤاد - مدينة 6 أكتوبر",
    "nameEn": "Dar Al Fouad Hospital - 6th of October",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9865,
    "lng": 30.9655,
    "aliases": [
      "دار الفؤاد أكتوبر",
      "Dar Al Fouad October"
    ]
  },
  {
    "id": "hosp_dar_alfouad_nasrcity",
    "nameAr": "مستشفى دار الفؤاد - مدينة نصر",
    "nameEn": "Dar Al Fouad Hospital - Nasr City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "fair_zone",
    "lat": 30.0485,
    "lng": 31.3415,
    "aliases": [
      "دار الفؤاد مدينة نصر"
    ]
  },
  {
    "id": "hosp_souad_kafafi",
    "nameAr": "مستشفى سعاد كفافي الجامعي - جامعة MUST 6 أكتوبر",
    "nameEn": "Souad Kafafi University Hospital - 6th October",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9815,
    "lng": 30.9625,
    "aliases": [
      "مستشفى سعاد كفافي",
      "سعاد كفافي"
    ]
  },
  {
    "id": "hosp_o6u_univ",
    "nameAr": "مستشفى جامعة 6 أكتوبر الجامعي",
    "nameEn": "October 6 University Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9755,
    "lng": 30.9475,
    "aliases": [
      "مستشفى جامعة 6 أكتوبر"
    ]
  },
  {
    "id": "hosp_misr_univ",
    "nameAr": "مستشفى جامعة مصر للعلوم والتكنولوجيا",
    "nameEn": "Misr University Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9825,
    "lng": 30.9645,
    "aliases": [
      "مستشفى ماست"
    ]
  },
  {
    "id": "hosp_sheikh_zayed_spec",
    "nameAr": "مستشفى الشيخ زايد التخصصي",
    "nameEn": "Sheikh Zayed Specialized Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0415,
    "lng": 30.9985,
    "aliases": [
      "الشيخ زايد التخصصي"
    ]
  },
  {
    "id": "hosp_sheikh_zayed_central",
    "nameAr": "مستشفى الشيخ زايد المركزي",
    "nameEn": "Sheikh Zayed Central Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0345,
    "lng": 30.9915,
    "aliases": [
      "زايد المركزي"
    ]
  },
  {
    "id": "hosp_october_central",
    "nameAr": "مستشفى 6 أكتوبر المركزي",
    "nameEn": "6th of October Central Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9685,
    "lng": 30.9285,
    "aliases": [
      "مستشفى أكتوبر المركزي"
    ]
  },
  {
    "id": "hosp_badr_univ",
    "nameAr": "مستشفى جامعة بدر الجامعي",
    "nameEn": "Badr University Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "lrt_badr",
    "lat": 30.1415,
    "lng": 31.7425,
    "aliases": [
      "مستشفى جامعة بدر"
    ]
  },
  {
    "id": "hosp_badr_central",
    "nameAr": "مستشفى بدر المركزي",
    "nameEn": "Badr Central Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "lrt_badr",
    "lat": 30.1385,
    "lng": 31.7385,
    "aliases": [
      "مستشفى بدر المركزي"
    ]
  },
  {
    "id": "hosp_shorouk_gen",
    "nameAr": "مستشفى الشروق العام",
    "nameEn": "El-Shorouk General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1315,
    "lng": 31.6185,
    "aliases": [
      "مستشفى الشروق العام"
    ]
  },
  {
    "id": "hosp_newcairo_gen",
    "nameAr": "مستشفى القاهرة الجديدة العام - التجمع الثالث",
    "nameEn": "New Cairo General Hospital - 3rd Settlement",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "monorail_choueifat",
    "lat": 29.9925,
    "lng": 31.4215,
    "aliases": [
      "مستشفى القاهرة الجديدة",
      "مستشفى التجمع الثالث"
    ]
  },
  {
    "id": "hosp_katameya_clinic",
    "nameAr": "مستشفى قطامية كلينيك - التجمع الخامس",
    "nameEn": "Katameya Clinic Hospital - New Cairo",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0115,
    "lng": 31.4215,
    "aliases": [
      "قطامية كلينيك"
    ]
  },
  {
    "id": "hosp_andalusia_maadi",
    "nameAr": "مستشفيات أندلسية - المعادي (النخيل)",
    "nameEn": "Andalusia Hospital - Maadi",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2785,
    "aliases": [
      "أندلسية المعادي",
      "Andalusia Maadi"
    ]
  },
  {
    "id": "hosp_nile_badrawi",
    "nameAr": "مستشفى النيل بدراوي - كورنيش المعادي",
    "nameEn": "Nile Badrawi Hospital - Maadi",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "dar_el_salam",
    "lat": 29.9815,
    "lng": 31.2385,
    "aliases": [
      "النيل بدراوي",
      "Nile Badrawi"
    ]
  },
  {
    "id": "hosp_borg_dokki",
    "nameAr": "مستشفى البرج - الدقي",
    "nameEn": "Al Borg Hospital - Dokki",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "dokki",
    "lat": 30.0415,
    "lng": 31.2095,
    "aliases": [
      "مستشفى البرج الدقي"
    ]
  },
  {
    "id": "hosp_misr_intl_dokki",
    "nameAr": "مستشفى مصر الدولي - الدقي",
    "nameEn": "Misr International Hospital - Dokki",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "dokki",
    "lat": 30.0385,
    "lng": 31.2085,
    "aliases": [
      "مصر الدولي الدقي"
    ]
  },
  {
    "id": "hosp_elkatib",
    "nameAr": "مستشفى الكاتب - الدقي",
    "nameEn": "El Katib Hospital - Dokki",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "dokki",
    "lat": 30.0445,
    "lng": 31.2125,
    "aliases": [
      "مستشفى الكاتب"
    ]
  },
  {
    "id": "hosp_shorouk_mohandessin",
    "nameAr": "مستشفى الشروق - المهندسين",
    "nameEn": "El Shorouk Hospital - Mohandessin",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0525,
    "lng": 31.2015,
    "aliases": [
      "مستشفى الشروق المهندسين"
    ]
  },
  {
    "id": "hosp_intl_eye",
    "nameAr": "المستشفى الدولي للعيون - الدقي",
    "nameEn": "International Eye Hospital - Dokki",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "dokki",
    "lat": 30.0405,
    "lng": 31.2135,
    "aliases": [
      "الدولي للعيون"
    ]
  },
  {
    "id": "hosp_ophth_inst",
    "nameAr": "معهد بحوث أمراض العيون - الجيزة",
    "nameEn": "Research Institute of Ophthalmology - Giza",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "cairo_university",
    "lat": 30.0215,
    "lng": 31.2125,
    "aliases": [
      "معهد الرمد الجيزة"
    ]
  },
  {
    "id": "hosp_nour_elamal",
    "nameAr": "مستشفى النور والأمل لجراحة العيون - مدينة نصر",
    "nameEn": "Al Nour Wal Amal Eye Hospital - Nasr City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "fair_zone",
    "lat": 30.0515,
    "lng": 31.3315,
    "aliases": [
      "النور والأمل للعيون"
    ]
  },
  {
    "id": "hosp_baheya_haram",
    "nameAr": "مستشفى بهية للكشف المبكر وعلاج سرطان الثدي - الهرم",
    "nameEn": "Baheya Hospital - Haram",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "faisal",
    "lat": 30.0025,
    "lng": 31.1815,
    "aliases": [
      "بهية الهرم",
      "مستشفى بهية"
    ]
  },
  {
    "id": "hosp_baheya_zayed",
    "nameAr": "مستشفى بهية الجديد - الشيخ زايد",
    "nameEn": "Baheya Hospital - Sheikh Zayed",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0315,
    "lng": 30.9785,
    "aliases": [
      "بهية الشيخ زايد"
    ]
  },
  {
    "id": "hosp_ormon_oncology",
    "nameAr": "مستشفى شفاء الأورمان للأورام - فرع الجيزة",
    "nameEn": "Shifaa Al-Orman Oncology Hospital - Giza Branch",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "faisal",
    "lat": 30.0015,
    "lng": 31.1795,
    "aliases": [
      "شفاء الأورمان"
    ]
  },
  {
    "id": "hosp_abbassiya_chest",
    "nameAr": "مستشفى صدر العباسية",
    "nameEn": "Abbassiya Chest Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "abbassiya",
    "lat": 30.0715,
    "lng": 31.2825,
    "aliases": [
      "صدر العباسية"
    ]
  },
  {
    "id": "hosp_abbassiya_mental",
    "nameAr": "مستشفى العباسية للصحة النفسية",
    "nameEn": "Abbassiya Mental Health Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "abbassiya",
    "lat": 30.0735,
    "lng": 31.2845,
    "aliases": [
      "مستشفى العباسية النفسية",
      "مستشفى الصحة النفسية بالعباسية"
    ]
  },
  {
    "id": "hosp_abbassiya_fever",
    "nameAr": "مستشفى حميات العباسية",
    "nameEn": "Abbassiya Fever Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "abbassiya",
    "lat": 30.0705,
    "lng": 31.2815,
    "aliases": [
      "حميات العباسية"
    ]
  },
  {
    "id": "hosp_imbaba_fever",
    "nameAr": "مستشفى حميات إمبابة",
    "nameEn": "Imbaba Fever Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "imbaba",
    "lat": 30.0715,
    "lng": 31.2085,
    "aliases": [
      "حميات إمبابة"
    ]
  },
  {
    "id": "hosp_imbaba_general",
    "nameAr": "مستشفى إمبابة العام",
    "nameEn": "Imbaba General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "imbaba",
    "lat": 30.0695,
    "lng": 31.2095,
    "aliases": [
      "إمبابة العام"
    ]
  },
  {
    "id": "hosp_bulaq_dakrour",
    "nameAr": "مستشفى بولاق الدكرور العام",
    "nameEn": "Bulaq El-Dakrour General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "bulaq_el_dakrour",
    "lat": 30.0365,
    "lng": 31.1925,
    "aliases": [
      "بولاق الدكرور العام"
    ]
  },
  {
    "id": "hosp_om_elmasryeen",
    "nameAr": "مستشفى أم المصريين العام - الجيزة",
    "nameEn": "Omm El-Masryeen General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "omm_el_masryeen",
    "lat": 30.0065,
    "lng": 31.2085,
    "aliases": [
      "أم المصريين العام"
    ]
  },
  {
    "id": "hosp_giza_general",
    "nameAr": "مستشفى الجيزة العام (أم الأبطال)",
    "nameEn": "Giza General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "giza",
    "lat": 30.0025,
    "lng": 31.1985,
    "aliases": [
      "الجيزة العام"
    ]
  },
  {
    "id": "hosp_haram_spec",
    "nameAr": "مستشفى الهرم التخصصي",
    "nameEn": "Haram Specialized Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "faisal",
    "lat": 29.9985,
    "lng": 31.1685,
    "aliases": [
      "الهرم التخصصي"
    ]
  },
  {
    "id": "hosp_helwan_general",
    "nameAr": "مستشفى حلوان العام",
    "nameEn": "Helwan General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "helwan",
    "lat": 29.8485,
    "lng": 31.3315,
    "aliases": [
      "حلوان العام"
    ]
  },
  {
    "id": "hosp_helwan_fever",
    "nameAr": "مستشفى حميات حلوان",
    "nameEn": "Helwan Fever Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "ain_helwan",
    "lat": 29.8555,
    "lng": 31.3285,
    "aliases": [
      "حميات حلوان"
    ]
  },
  {
    "id": "hosp_tebbin_central",
    "nameAr": "مستشفى التبين المركزي",
    "nameEn": "El-Tebbin Central Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "helwan",
    "lat": 29.8145,
    "lng": 31.3125,
    "aliases": [
      "مستشفى التبين"
    ]
  },
  {
    "id": "hosp_mokattam_spec",
    "nameAr": "مستشفى المقطم التخصصي - التأمين الصحي",
    "nameEn": "Mokattam Specialized Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_20_mokattam",
    "lat": 30.0145,
    "lng": 31.3085,
    "aliases": [
      "المقطم التخصصي"
    ]
  },
  {
    "id": "hosp_mabaret_maadi",
    "nameAr": "مستشفى مبرة المعادي",
    "nameEn": "Mabaret El-Maadi Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "maadi",
    "lat": 29.9585,
    "lng": 31.2615,
    "aliases": [
      "مبرة المعادي"
    ]
  },
  {
    "id": "hosp_mabaret_masr_qadima",
    "nameAr": "مستشفى مبرة مصر القديمة",
    "nameEn": "Mabaret Masr El-Qadima Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "malek_saleh",
    "lat": 30.0115,
    "lng": 31.2315,
    "aliases": [
      "مبرة مصر القديمة"
    ]
  },
  {
    "id": "hosp_manshiet_bakry",
    "nameAr": "مستشفى منشية البكري العام - مصر الجديدة",
    "nameEn": "Manshiet El-Bakry Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "saray_el_qobba",
    "lat": 30.0915,
    "lng": 31.3085,
    "aliases": [
      "منشية البكري"
    ]
  },
  {
    "id": "hosp_ainshams_general",
    "nameAr": "مستشفى عين شمس العام",
    "nameEn": "Ain Shams General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "ain_shams",
    "lat": 30.1315,
    "lng": 31.3215,
    "aliases": [
      "عين شمس العام"
    ]
  },
  {
    "id": "hosp_heliopolis_oncology",
    "nameAr": "مركز أورام مصر الجديدة - التأمين الصحي",
    "nameEn": "Heliopolis Oncology Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "al_ahram",
    "lat": 30.0935,
    "lng": 31.3345,
    "aliases": [
      "أورام مصر الجديدة"
    ]
  },
  {
    "id": "hosp_nasrcity_insurance",
    "nameAr": "مستشفى مدينة نصر للتأمين الصحي - طريق النصر",
    "nameEn": "Nasr City Insurance Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "stadium",
    "lat": 30.0655,
    "lng": 31.3225,
    "aliases": [
      "تأمين صحي مدينة نصر"
    ]
  },
  {
    "id": "hosp_shubra_gen_kitchener",
    "nameAr": "مستشفى شبرا العام (كتشنر)",
    "nameEn": "Shubra General Hospital (Kitchener)",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "massara",
    "lat": 30.0685,
    "lng": 31.2485,
    "aliases": [
      "شبرا العام",
      "كتشنر"
    ]
  },
  {
    "id": "hosp_road_elfarag",
    "nameAr": "مستشفى روض الفرج العام",
    "nameEn": "Road El-Farag General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "road_el_farag",
    "lat": 30.0785,
    "lng": 31.2445,
    "aliases": [
      "روض الفرج العام"
    ]
  },
  {
    "id": "hosp_khanka_mental",
    "nameAr": "مستشفى الخانكة للصحة النفسية وعلاج الإدمان",
    "nameEn": "El-Khanka Mental Health Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "adly_mansour",
    "lat": 30.2185,
    "lng": 31.3785,
    "aliases": [
      "مستشفى الخانكة"
    ]
  },
  {
    "id": "hosp_alhayah_masr_gdeda",
    "nameAr": "مستشفى الحياة - مصر الجديدة",
    "nameEn": "Al-Hayah Hospital Heliopolis",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "al_ahram",
    "lat": 30.0895,
    "lng": 31.3345,
    "aliases": [
      "الحياة مصر الجديدة"
    ]
  },
  {
    "id": "hosp_almasry_nasrcity",
    "nameAr": "المستشفى المصري التخصصي - مدينة نصر",
    "nameEn": "Al-Masry Specialized Hospital - Nasr City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "fair_zone",
    "lat": 30.0625,
    "lng": 31.3385,
    "aliases": [
      "المصري التخصصي"
    ]
  },
  {
    "id": "hosp_alfath_maadi",
    "nameAr": "مستشفى الفتح التخصصي - المعادي",
    "nameEn": "Al-Fath Specialized Hospital - Maadi",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2615,
    "aliases": [
      "الفتح المعادي"
    ]
  },
  {
    "id": "hosp_alrowaad_eye",
    "nameAr": "مستشفى الرواد للعيون - مصر الجديدة",
    "nameEn": "Al-Rowaad Eye Hospital - Heliopolis",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "al_ahram",
    "lat": 30.0915,
    "lng": 31.3385,
    "aliases": [
      "الرواد للعيون"
    ]
  },
  {
    "id": "hosp_almaghraby_eye",
    "nameAr": "مستشفيات ومراكز مغربي للعيون - السيدة زينب",
    "nameEn": "Magrabi Eye Hospital - Sayyeda Zeinab",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0345,
    "lng": 31.2385,
    "aliases": [
      "مغربي للعيون",
      "Magrabi"
    ]
  },
  {
    "id": "hosp_almaghraby_october",
    "nameAr": "مستشفى مغربي للعيون - 6 أكتوبر",
    "nameEn": "Magrabi Eye Hospital - 6th October",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9785,
    "lng": 30.9525,
    "aliases": [
      "مغربي أكتوبر"
    ]
  },
  {
    "id": "hosp_almaghraby_tagamoa",
    "nameAr": "مستشفى مغربي للعيون - التجمع الخامس",
    "nameEn": "Magrabi Eye Hospital - New Cairo",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "monorail_air_hospital",
    "lat": 30.0265,
    "lng": 31.4685,
    "aliases": [
      "مغربي التجمع"
    ]
  },
  {
    "id": "hosp_dar_aloyoun_dokki",
    "nameAr": "مستشفى دار العيون - الدقي",
    "nameEn": "Dar Al Oyoun Hospital - Dokki",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "dokki",
    "lat": 30.0435,
    "lng": 31.2095,
    "aliases": [
      "دار العيون الدقي"
    ]
  },
  {
    "id": "hosp_dar_aloyoun_october",
    "nameAr": "مستشفى دار العيون - 6 أكتوبر",
    "nameEn": "Dar Al Oyoun Hospital - 6th October",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9725,
    "lng": 30.9415,
    "aliases": [
      "دار العيون أكتوبر"
    ]
  },
  {
    "id": "hosp_cairo_kidney_center",
    "nameAr": "مركز القاهرة لأمراض الكلى - المهندسين",
    "nameEn": "Cairo Kidney Center - Mohandessin",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0565,
    "lng": 31.2055,
    "aliases": [
      "مركز الكلى المهندسين"
    ]
  },
  {
    "id": "hosp_badrawi_faisal",
    "nameAr": "مستشفى بدراوي - فيصل",
    "nameEn": "Badrawi Hospital - Faisal",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "faisal",
    "lat": 30.0125,
    "lng": 31.1895,
    "aliases": [
      "بدراوي فيصل"
    ]
  },
  {
    "id": "hosp_alredwan_heliopolis",
    "nameAr": "مستشفى الرضوان التخصصي - مصر الجديدة",
    "nameEn": "Al-Redwan Hospital - Heliopolis",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0845,
    "lng": 31.3345,
    "aliases": [
      "الرضوان مصر الجديدة"
    ]
  },
  {
    "id": "hosp_tabarak_children_nasrcity",
    "nameAr": "مستشفى تبارك للأطفال - مدينة نصر",
    "nameEn": "Tabarak Children Hospital - Nasr City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "fair_zone",
    "lat": 30.0585,
    "lng": 31.3365,
    "aliases": [
      "تبارك مدينة نصر"
    ]
  },
  {
    "id": "hosp_tabarak_children_maadi",
    "nameAr": "مستشفى تبارك للأطفال - المعادي",
    "nameEn": "Tabarak Children Hospital - Maadi",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "maadi",
    "lat": 29.9645,
    "lng": 31.2685,
    "aliases": [
      "تبارك المعادي"
    ]
  },
  {
    "id": "hosp_elganzouri_specialized",
    "nameAr": "مستشفى الجنزوري التخصصي - مصر الجديدة",
    "nameEn": "El-Ganzouri Specialized Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0865,
    "lng": 31.3285,
    "aliases": [
      "الجنزوري التخصصي"
    ]
  },
  {
    "id": "hosp_alquds_nasrcity",
    "nameAr": "مستشفى القدس التخصصي - مدينة نصر",
    "nameEn": "Al-Quds Specialized Hospital - Nasr City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "fair_zone",
    "lat": 30.0615,
    "lng": 31.3415,
    "aliases": [
      "القدس مدينة نصر"
    ]
  },
  {
    "id": "hosp_hassabo_intl",
    "nameAr": "مستشفى حسبو الدولي - مصر الجديدة",
    "nameEn": "Hassabo International Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "al_ahram",
    "lat": 30.0925,
    "lng": 31.3365,
    "aliases": [
      "حسبو الدولي"
    ]
  },
  {
    "id": "hosp_alwaha_nasrcity",
    "nameAr": "مستشفى الواحة - مدينة نصر الحي العاشر",
    "nameEn": "Al-Waha Hospital - Nasr City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "fair_zone",
    "lat": 30.0385,
    "lng": 31.3655,
    "aliases": [
      "الواحة مدينة نصر"
    ]
  },
  {
    "id": "hosp_safwa_elgolf",
    "nameAr": "مستشفى الصفوة التخصصي - أرض الجولف",
    "nameEn": "Al-Safwa Specialized Hospital - Golf Area",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0875,
    "lng": 31.3385,
    "aliases": [
      "الصفوة التخصصي"
    ]
  },
  {
    "id": "hosp_alfath_dokki",
    "nameAr": "مستشفى الفتح للولادة - الدقي",
    "nameEn": "Al-Fath Maternity Hospital - Dokki",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "dokki",
    "lat": 30.0425,
    "lng": 31.2125,
    "aliases": [
      "الفتح للولادة الدقي"
    ]
  },
  {
    "id": "hosp_albadary_haram",
    "nameAr": "مستشفى البدري التخصصي - الهرم",
    "nameEn": "Al-Badary Hospital - Haram",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "faisal",
    "lat": 30.0085,
    "lng": 31.1765,
    "aliases": [
      "البدري الهرم"
    ]
  },
  {
    "id": "hosp_elmonira_general",
    "nameAr": "مستشفى المنيرة العام - السيدة زينب",
    "nameEn": "El-Mounira General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0335,
    "lng": 31.2365,
    "aliases": [
      "المنيرة العام"
    ]
  },
  {
    "id": "hosp_eldemerdash_geriatric",
    "nameAr": "مستشفى المسنين والطب النفسي بالدمرداش",
    "nameEn": "Demerdash Geriatric Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_demerdash",
    "lat": 30.0745,
    "lng": 31.2778,
    "aliases": [
      "مسنين الدمرداش"
    ]
  },
  {
    "id": "hosp_aleman_faisal",
    "nameAr": "مستشفى الإيمان التخصصي - فيصل",
    "nameEn": "Al-Eman Hospital - Faisal",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "faisal",
    "lat": 30.0145,
    "lng": 31.1825,
    "aliases": [
      "الإيمان فيصل"
    ]
  },
  {
    "id": "hosp_alzahraa_helwan",
    "nameAr": "مستشفى الزهراء التخصصي - حلوان",
    "nameEn": "Al-Zahraa Hospital - Helwan",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "helwan",
    "lat": 29.8455,
    "lng": 31.3345,
    "aliases": [
      "الزهراء حلوان"
    ]
  },
  {
    "id": "hosp_alnasr_helwan",
    "nameAr": "مستشفى النصر للسيارات بحلوان",
    "nameEn": "Al-Nasr Automotive Hospital - Helwan",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "wadi_hof",
    "lat": 29.8785,
    "lng": 31.3185,
    "aliases": [
      "النصر حلوان"
    ]
  },
  {
    "id": "hosp_alasher_obour",
    "nameAr": "مستشفى التأمين الصحي بالعبور",
    "nameEn": "El-Obour Health Insurance Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "lrt_obour",
    "lat": 30.1815,
    "lng": 31.4725,
    "aliases": [
      "تأمين صحي العبور"
    ]
  },
  {
    "id": "hosp_shubra_kheima_central",
    "nameAr": "مستشفى شبرا الخيمة المركزي (ناصر العام)",
    "nameEn": "Nasser General Hospital - Shubra El-Kheima",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "shubra_el_kheima",
    "lat": 30.1285,
    "lng": 31.2425,
    "aliases": [
      "ناصر العام شبرا"
    ]
  },
  {
    "id": "hosp_behouth_medical",
    "nameAr": "المركز الطبي القومي للبحوث - الدقي",
    "nameEn": "National Research Centre Medical Clinic - Dokki",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_bohoth",
    "lat": 30.0385,
    "lng": 31.2025,
    "aliases": [
      "عيادات البحوث"
    ]
  },
  {
    "id": "hosp_zayed_military",
    "nameAr": "المستشفى العسكري بالشيخ زايد",
    "nameEn": "Military Hospital - Sheikh Zayed",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0425,
    "lng": 30.9855,
    "aliases": [
      "المستشفى العسكري بزايد"
    ]
  },
  {
    "id": "hosp_alrehab_clinic",
    "nameAr": "مركز الرحاب الطبي المتخصص",
    "nameEn": "Al-Rehab Specialized Medical Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "monorail_auc",
    "lat": 30.0615,
    "lng": 31.4925,
    "aliases": [
      "طبي الرحاب"
    ]
  },
  {
    "id": "hosp_madinaty_medical",
    "nameAr": "المركز الطبي المتكامل بمدينتي",
    "nameEn": "Madinaty Integrated Medical Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1125,
    "lng": 31.6385,
    "aliases": [
      "طبي مدينتي"
    ]
  },
  {
    "id": "hosp_capital_medical_city",
    "nameAr": "مدينة العاصمة الإدارية الطبية الجديدة",
    "nameEn": "New Administrative Capital Medical City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "city_of_arts",
    "lat": 30.0245,
    "lng": 31.7415,
    "aliases": [
      "المدينة الطبية بالعاصمة"
    ]
  },
  {
    "id": "hosp_capital_general",
    "nameAr": "مستشفى العاصمة الإدارية الجديدة العام",
    "nameEn": "New Capital General Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "city_of_arts",
    "lat": 30.0215,
    "lng": 31.7385,
    "aliases": [
      "مستشفى العاصمة الإدارية"
    ]
  },
  {
    "id": "hosp_andalusia_smoha_cairo_office",
    "nameAr": "مركز أندلسية للخدمات الطبية - المهندسين",
    "nameEn": "Andalusia Medical Hub - Mohandessin",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0545,
    "lng": 31.2025,
    "aliases": [
      "أندلسية المهندسين"
    ]
  },
  {
    "id": "hosp_alkholafaa_shubra",
    "nameAr": "مستشفى الخلفاء الراشدين - شبرا",
    "nameEn": "Al-Kholafaa Al-Rashedeen Hospital - Shubra",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "khalafawy",
    "lat": 30.0985,
    "lng": 31.2465,
    "aliases": [
      "الخلفاء الراشدين شبرا"
    ]
  },
  {
    "id": "hosp_mari_girgis_shubra",
    "nameAr": "مستشفى مار جرجس - شبرا",
    "nameEn": "Mar Girgis Hospital - Shubra",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "st_teresa",
    "lat": 30.0895,
    "lng": 31.2475,
    "aliases": [
      "مار جرجس شبرا"
    ]
  },
  {
    "id": "hosp_st_teresa",
    "nameAr": "مستشفى سانت تريزا - شبرا",
    "nameEn": "St. Teresa Hospital - Shubra",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "st_teresa",
    "lat": 30.0885,
    "lng": 31.2468,
    "aliases": [
      "سانت تريزا"
    ]
  },
  {
    "id": "hosp_elraei_elsaleh",
    "nameAr": "مستشفى الراعي الصالح - شبرا",
    "nameEn": "The Good Shepherd Hospital - Shubra",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "road_el_farag",
    "lat": 30.0815,
    "lng": 31.2485,
    "aliases": [
      "الراعي الصالح شبرا"
    ]
  },
  {
    "id": "hosp_elkhazen_dara",
    "nameAr": "مستشفى الخازندارة العام - الساحل",
    "nameEn": "El-Khazendara General Hospital - Sahel",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "road_el_farag",
    "lat": 30.0845,
    "lng": 31.2425,
    "aliases": [
      "الخازندارة العام"
    ]
  },
  {
    "id": "hosp_elramad_giza",
    "nameAr": "مستشفى الرمد بالجيزة",
    "nameEn": "Giza Ophthalmic Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "giza",
    "lat": 30.0075,
    "lng": 31.2065,
    "aliases": [
      "رمد الجيزة"
    ]
  },
  {
    "id": "hosp_elsoodaan",
    "nameAr": "مستشفى السودان التخصصي - المهندسين",
    "nameEn": "Sudan Specialized Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sudan",
    "lat": 30.0645,
    "lng": 31.2015,
    "aliases": [
      "السودان التخصصي"
    ]
  },
  {
    "id": "hosp_elamal_mohandessin",
    "nameAr": "مستشفى الأمل - المهندسين",
    "nameEn": "Al-Amal Hospital - Mohandessin",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "wadi_el_nile",
    "lat": 30.0585,
    "lng": 31.2045,
    "aliases": [
      "الأمل المهندسين"
    ]
  },
  {
    "id": "hosp_alwessam_nasrcity",
    "nameAr": "مستشفى الوسام التخصصي - مدينة نصر",
    "nameEn": "Al-Wessam Specialized Hospital - Nasr City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "fair_zone",
    "lat": 30.0555,
    "lng": 31.3385,
    "aliases": [
      "الوسام مدينة نصر"
    ]
  },
  {
    "id": "hosp_dar_elhekma_nasrcity",
    "nameAr": "مستشفى دار الحكمة - مدينة نصر",
    "nameEn": "Dar El-Hekma Hospital - Nasr City",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "fair_zone",
    "lat": 30.0535,
    "lng": 31.3325,
    "aliases": [
      "دار الحكمة مدينة نصر"
    ]
  },
  {
    "id": "hosp_alshrooq_dokki",
    "nameAr": "مستشفى الشروق للجراحة - الدقي",
    "nameEn": "Al-Shorouk Surgical Hospital - Dokki",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "dokki",
    "lat": 30.0415,
    "lng": 31.2145,
    "aliases": [
      "الشروق الدقي"
    ]
  },
  {
    "id": "hosp_elhelal_red_crescent",
    "nameAr": "مستشفى الهلال للتأمين الصحي - شارع رمسيس",
    "nameEn": "Al-Helal Red Crescent Hospital - Ramses",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "orabi",
    "lat": 30.0585,
    "lng": 31.2485,
    "aliases": [
      "الهلال رمسيس",
      "مستشفى الهلال الأحمر"
    ]
  },
  {
    "id": "hosp_elgomhoria_educational",
    "nameAr": "مستشفى الجمهورية التعليمي - عابدين",
    "nameEn": "El-Gomhoreya Educational Hospital - Abdeen",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0475,
    "lng": 31.2465,
    "aliases": [
      "الجمهورية عابدين"
    ]
  },
  {
    "id": "hosp_sayyeda_zeinab_pediatric",
    "nameAr": "مستشفى أطفال السيدة زينب التخصصي",
    "nameEn": "Sayyeda Zeinab Children Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0295,
    "lng": 31.2385,
    "aliases": [
      "أطفال السيدة زينب"
    ]
  },
  {
    "id": "hosp_elmoallemin_gezira",
    "nameAr": "مستشفى المعلمين بالجزيرة - الزمالك",
    "nameEn": "Teachers Hospital - Gezira Island",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "opera",
    "lat": 30.0425,
    "lng": 31.2265,
    "aliases": [
      "المعلمين بالجزيرة"
    ]
  },
  {
    "id": "hosp_anglo_american",
    "nameAr": "المستشفى الأنجلو أمريكان بالجزيرة",
    "nameEn": "The Anglo-American Hospital - Gezira",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "opera",
    "lat": 30.0445,
    "lng": 31.2245,
    "aliases": [
      "الأنجلو أمريكان"
    ]
  },
  {
    "id": "hosp_police_darrasa",
    "nameAr": "مستشفى الشرطة بالدراسة",
    "nameEn": "Police Hospital - Darrasa",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0455,
    "lng": 31.2685,
    "aliases": [
      "شرطة الدراسة"
    ]
  },
  {
    "id": "hosp_dar_elshifaa_abbassiya",
    "nameAr": "مستشفى دار الشفاء - العباسية",
    "nameEn": "Dar El-Shifaa Hospital - Abbassiya",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "abbassiya",
    "lat": 30.0695,
    "lng": 31.2785,
    "aliases": [
      "دار الشفاء العباسية"
    ]
  },
  {
    "id": "hosp_elnour_elmohammadi",
    "nameAr": "مستشفى النور المحمدي - المطرية",
    "nameEn": "Al-Nour Al-Mohammadi Hospital - Matariya",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_matareyya",
    "lat": 30.1265,
    "lng": 31.3125,
    "aliases": [
      "النور المحمدي المطرية"
    ]
  },
  {
    "id": "hosp_elzaytoun_specialized",
    "nameAr": "مستشفى الزيتون التخصصي",
    "nameEn": "El-Zaytoun Specialized Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "helmeyat_el_zaytoun",
    "lat": 30.1085,
    "lng": 31.3165,
    "aliases": [
      "الزيتون التخصصي"
    ]
  },
  {
    "id": "hosp_hadayeq_elqobba_military",
    "nameAr": "مستشفى حدائق القبة العسكري",
    "nameEn": "Hadayeq El-Qobba Military Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "kobri_el_qobba",
    "lat": 30.0935,
    "lng": 31.2945,
    "aliases": [
      "القبة العسكري"
    ]
  },
  {
    "id": "hosp_saray_elqobba_specialized",
    "nameAr": "مستشفى سراي القبة التخصصي",
    "nameEn": "Saray El-Qobba Specialized Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "saray_el_qobba",
    "lat": 30.0965,
    "lng": 31.3045,
    "aliases": [
      "سراي القبة التخصصي"
    ]
  },
  {
    "id": "hosp_elhammamat_medical",
    "nameAr": "المركز الطبي بحمامات القبة",
    "nameEn": "Hammamat El-Qobba Medical Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "hammamat_el_qobba",
    "lat": 30.0985,
    "lng": 31.3015,
    "aliases": [
      "حمامات القبة الطبي"
    ]
  },
  {
    "id": "hosp_dr_soliman_fakeeh_cairo",
    "nameAr": "مستشفى الدكتور سليمان فقيه - القاهرة",
    "nameEn": "Dr. Soliman Fakeeh Hospital Cairo",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "monorail_air_hospital",
    "lat": 30.0245,
    "lng": 31.4725,
    "aliases": [
      "فقيه القاهرة"
    ]
  },
  {
    "id": "hosp_almana_cairo",
    "nameAr": "مجموعة المانع الطبية - فرع القاهرة",
    "nameEn": "Al-Mana Medical Center Cairo",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "monorail_auc",
    "lat": 30.0185,
    "lng": 31.4885,
    "aliases": [
      "المانع الطبي"
    ]
  },
  {
    "id": "hosp_tabarak_faisal",
    "nameAr": "مستشفى تبارك للأطفال والنساء - فيصل",
    "nameEn": "Tabarak Hospital - Faisal",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "faisal",
    "lat": 30.0095,
    "lng": 31.1845,
    "aliases": [
      "تبارك فيصل"
    ]
  },
  {
    "id": "hosp_alzahraa_faisal",
    "nameAr": "مستشفى الزهراء التخصصي - فيصل",
    "nameEn": "Al-Zahraa Hospital - Faisal",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "faisal",
    "lat": 30.0115,
    "lng": 31.1815,
    "aliases": [
      "الزهراء فيصل"
    ]
  },
  {
    "id": "hosp_dar_alhebaa_haram",
    "nameAr": "مستشفى دار الهبة التخصصي - الهرم",
    "nameEn": "Dar Al-Heba Hospital - Haram",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "faisal",
    "lat": 30.0065,
    "lng": 31.1785,
    "aliases": [
      "دار الهبة الهرم"
    ]
  },
  {
    "id": "hosp_tabarak_giza",
    "nameAr": "مستشفى تبارك - ميدان الجيزة",
    "nameEn": "Tabarak Hospital - Giza Square",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "giza",
    "lat": 30.0095,
    "lng": 31.2065,
    "aliases": [
      "تبارك ميدان الجيزة"
    ]
  },
  {
    "id": "hosp_omraniya_health",
    "nameAr": "مركز صحة العمرانية التخصصي",
    "nameEn": "El-Omraniya Specialized Health Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_26_omraniya",
    "lat": 30.0015,
    "lng": 31.1925,
    "aliases": [
      "صحة العمرانية"
    ]
  },
  {
    "id": "hosp_talbiya_central",
    "nameAr": "مركز صحة الطالبية التخصصي",
    "nameEn": "El-Talbiya Specialized Medical Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_27_talbiya",
    "lat": 29.9965,
    "lng": 31.1785,
    "aliases": [
      "صحة الطالبية"
    ]
  },
  {
    "id": "hosp_maryouteya_clinic",
    "nameAr": "مجمع عيادات المريوطية التخصصي",
    "nameEn": "El-Maryouteya Specialized Clinic Complex",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_28_maryouteya",
    "lat": 29.9915,
    "lng": 31.1645,
    "aliases": [
      "عيادات المريوطية"
    ]
  },
  {
    "id": "hosp_mansoureya_medical",
    "nameAr": "مركز المنصورية الطبي التخصصي",
    "nameEn": "El-Mansoureya Medical Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_29_mansoureya",
    "lat": 29.9865,
    "lng": 31.1525,
    "aliases": [
      "طبي المنصورية"
    ]
  },
  {
    "id": "hosp_sun_capital_medical",
    "nameAr": "مدينة صن كابيتال الطبية - حدائق الأهرام",
    "nameEn": "Sun Capital Medical City - Giza",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9725,
    "lng": 31.1145,
    "aliases": [
      "صن كابيتال الطبية"
    ]
  },
  {
    "id": "hosp_hadayeq_ahram_clinic",
    "nameAr": "مجمع حدائق الأهرام الطبي التخصصي",
    "nameEn": "Hadayeq Al-Ahram Medical Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9765,
    "lng": 31.1185,
    "aliases": [
      "طبي حدائق الأهرام"
    ]
  },
  {
    "id": "hosp_mostorod_insurance",
    "nameAr": "مستشفى مسطرد للتأمين الصحي",
    "nameEn": "Mostorod Health Insurance Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_5_mostorod",
    "lat": 30.1345,
    "lng": 31.2885,
    "aliases": [
      "تأمين صحي مسطرد"
    ]
  },
  {
    "id": "hosp_bahteem_specialized",
    "nameAr": "مستشفى بهتيم للجراحات التخصصية",
    "nameEn": "Bahteem Specialized Surgery Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_4_bahteem",
    "lat": 30.1385,
    "lng": 31.2745,
    "aliases": [
      "جراحات بهتيم"
    ]
  },
  {
    "id": "hosp_khosous_central",
    "nameAr": "مستشفى الخصوص المركزي",
    "nameEn": "Al-Khosous Central Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_6_khosous",
    "lat": 30.1425,
    "lng": 31.3125,
    "aliases": [
      "الخصوص المركزي"
    ]
  },
  {
    "id": "hosp_marg_central",
    "nameAr": "مستشفى المرج المركزي الجديد",
    "nameEn": "El-Marg Central Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "el_marg",
    "lat": 30.1545,
    "lng": 31.3385,
    "aliases": [
      "المرج المركزي"
    ]
  },
  {
    "id": "hosp_zakah_health",
    "nameAr": "مركز صحة مؤسسة الزكاة المركزي",
    "nameEn": "Moassaset El-Zakah Health Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_9_zakah",
    "lat": 30.1485,
    "lng": 31.3485,
    "aliases": [
      "صحة مؤسسة الزكاة"
    ]
  },
  {
    "id": "hosp_salam_central",
    "nameAr": "مستشفى السلام المركزي - مدينة السلام",
    "nameEn": "Al-Salam Central Hospital",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_11_salam",
    "lat": 30.1645,
    "lng": 31.3985,
    "aliases": [
      "السلام المركزي"
    ]
  },
  {
    "id": "hosp_adly_mansour_medical",
    "nameAr": "المركز الطبي التخصصي بمحطة عدلي منصور",
    "nameEn": "Adly Mansour Transport Medical Center",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "adly_mansour",
    "lat": 30.1465,
    "lng": 31.4015,
    "aliases": [
      "طبي عدلي منصور"
    ]
  },
  {
    "id": "hosp_mokattam_military",
    "nameAr": "المركز الطبي للقوات المسلحة بالمقطم",
    "nameEn": "Mokattam Military Medical Hub",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_20_mokattam",
    "lat": 30.0125,
    "lng": 31.3185,
    "aliases": [
      "طبي المقطم العسكري"
    ]
  },
  {
    "id": "hosp_zahraa_maadi_clinic",
    "nameAr": "مجمع عيادات زهراء المعادي التخصصي",
    "nameEn": "Zahraa El-Maadi Specialized Clinics",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "brt_19_zahraa_maadi",
    "lat": 29.9745,
    "lng": 31.2845,
    "aliases": [
      "عيادات زهراء المعادي"
    ]
  },
  {
    "id": "hosp_dar_elsalam_hermel",
    "nameAr": "مستشفى دار السلام العام (هرمل) للأورام",
    "nameEn": "Dar El-Salam General Hospital (Hermel Oncology)",
    "category": "hospital",
    "categoryAr": "مستشفى ومركز طبي",
    "categoryEn": "Hospital & Medical",
    "nearestStationId": "dar_el_salam",
    "lat": 29.9885,
    "lng": 31.2345,
    "aliases": [
      "هرمل دار السلام للأورام"
    ]
  },
  {
    "id": "mall_citystars",
    "nameAr": "سيتي ستارز مول - مدينة نصر",
    "nameEn": "Citystars Mall - Nasr City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "stadium",
    "lat": 30.0735,
    "lng": 31.3465,
    "aliases": [
      "Citystars",
      "سيتي ستارز",
      "سيتى ستارز"
    ]
  },
  {
    "id": "mall_cfc",
    "nameAr": "كايرو فستيفال سيتي مول - التجمع الخامس",
    "nameEn": "Cairo Festival City Mall (CFC)",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0315,
    "lng": 31.4085,
    "aliases": [
      "CFC",
      "كايرو فستيفال",
      "Cairo Festival City"
    ]
  },
  {
    "id": "mall_arabia",
    "nameAr": "مول العرب - ميدان جهينة 6 أكتوبر",
    "nameEn": "Mall of Arabia - 6th of October",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0075,
    "lng": 30.9735,
    "aliases": [
      "مول العرب",
      "Mall of Arabia"
    ]
  },
  {
    "id": "mall_egypt",
    "nameAr": "مول مصر - طريق الواحات 6 أكتوبر",
    "nameEn": "Mall of Egypt - 6th of October",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9725,
    "lng": 31.0185,
    "aliases": [
      "مول مصر",
      "Mall of Egypt",
      "سكي مصر"
    ]
  },
  {
    "id": "mall_citycentre_almaza",
    "nameAr": "سيتي سنتر ألماظة - شيراتون مصر الجديدة",
    "nameEn": "City Centre Almaza - Sheraton",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "el_haykestep",
    "lat": 30.0885,
    "lng": 31.3655,
    "aliases": [
      "سيتي سنتر ألماظة",
      "Almaza City Centre"
    ]
  },
  {
    "id": "mall_citycentre_maadi",
    "nameAr": "سيتي سنتر المعادي (كارفور المعادي)",
    "nameEn": "City Centre Maadi (Carrefour Maadi)",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_18_maadi",
    "lat": 29.9865,
    "lng": 31.3045,
    "aliases": [
      "كارفور المعادي",
      "Carrefour Maadi",
      "سيتي سنتر المعادي"
    ]
  },
  {
    "id": "mall_point90",
    "nameAr": "بوينت 90 مول - أمام الجامعة الأمريكية بالتجمع",
    "nameEn": "Point 90 Mall - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_auc",
    "lat": 30.0235,
    "lng": 31.4985,
    "aliases": [
      "بوينت 90",
      "Point 90"
    ]
  },
  {
    "id": "mall_downtown_katameya",
    "nameAr": "داون تاون قطامية مول - التجمع الخامس",
    "nameEn": "Downtown Katameya Mall - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0155,
    "lng": 31.4115,
    "aliases": [
      "داون تاون التجمع",
      "Downtown Katameya"
    ]
  },
  {
    "id": "mall_waterway",
    "nameAr": "ذا ووتر واي - التجمع الخامس",
    "nameEn": "The Waterway - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_auc",
    "lat": 30.0445,
    "lng": 31.4785,
    "aliases": [
      "ووتر واي",
      "The Waterway"
    ]
  },
  {
    "id": "mall_5a_waterway",
    "nameAr": "5A باي ذا ووتر واي - الطريق الدائري التجمع",
    "nameEn": "5A by The Waterway - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0185,
    "lng": 31.4155,
    "aliases": [
      "5A Waterway"
    ]
  },
  {
    "id": "mall_concord_plaza",
    "nameAr": "كونكورد بلازا مول - شارع التسعين التجمع",
    "nameEn": "Concord Plaza - 90th St New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_air_hospital",
    "lat": 30.0285,
    "lng": 31.4685,
    "aliases": [
      "كونكورد بلازا"
    ]
  },
  {
    "id": "mall_maxim",
    "nameAr": "مكسيم مول - التجمع الخامس",
    "nameEn": "Maxim Mall - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_air_hospital",
    "lat": 30.0355,
    "lng": 31.4815,
    "aliases": [
      "مكسيم مول"
    ]
  },
  {
    "id": "mall_garden8",
    "nameAr": "جاردن 8 مول - التجمع الأول",
    "nameEn": "Garden 8 Mall - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_14_academy",
    "lat": 30.0545,
    "lng": 31.4715,
    "aliases": [
      "Garden 8",
      "جاردن 8"
    ]
  },
  {
    "id": "mall_open_air_madinaty",
    "nameAr": "أوبن إير مول - مدينتي",
    "nameEn": "Open Air Mall - Madinaty",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1085,
    "lng": 31.6245,
    "aliases": [
      "اوبن اير مول مدينتي"
    ]
  },
  {
    "id": "mall_rehab_1",
    "nameAr": "مول الرحاب 1 - مدينة الرحاب",
    "nameEn": "Al-Rehab Mall 1",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_auc",
    "lat": 30.0625,
    "lng": 31.4945,
    "aliases": [
      "سوق الرحاب 1"
    ]
  },
  {
    "id": "mall_rehab_2",
    "nameAr": "مول الرحاب 2 - مدينة الرحاب",
    "nameEn": "Al-Rehab Mall 2",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_auc",
    "lat": 30.0655,
    "lng": 31.4985,
    "aliases": [
      "سوق الرحاب 2"
    ]
  },
  {
    "id": "mall_arkan_plaza",
    "nameAr": "أركان بلازا - الشيخ زايد",
    "nameEn": "Arkan Plaza - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0185,
    "lng": 31.0025,
    "aliases": [
      "أركان بلازا",
      "Arkan Zayed"
    ]
  },
  {
    "id": "mall_capital_business_park",
    "nameAr": "كابيتال بيزنس بارك - الشيخ زايد",
    "nameEn": "Capital Business Park - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0215,
    "lng": 31.0065,
    "aliases": [
      "كابيتال بيزنس بارك"
    ]
  },
  {
    "id": "mall_galleria40",
    "nameAr": "جاليريا 40 - الشيخ زايد",
    "nameEn": "Galleria 40 - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0265,
    "lng": 31.0015,
    "aliases": [
      "جاليريا 40",
      "Galleria 40"
    ]
  },
  {
    "id": "mall_americana_plaza",
    "nameAr": "أمريكانا بلازا - الشيخ زايد",
    "nameEn": "Americana Plaza - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0155,
    "lng": 31.0045,
    "aliases": [
      "امريكانا بلازا"
    ]
  },
  {
    "id": "mall_park_st",
    "nameAr": "بارك ستريت - الشيخ زايد",
    "nameEn": "Park St. - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0235,
    "lng": 31.0085,
    "aliases": [
      "بارك ستريت زايد"
    ]
  },
  {
    "id": "mall_woc",
    "nameAr": "ووك أوف كايرو - طريق مصر إسكندرية الشيخ زايد",
    "nameEn": "Walk of Cairo (WOC) - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0685,
    "lng": 30.9545,
    "aliases": [
      "Walk of Cairo"
    ]
  },
  {
    "id": "mall_dandy",
    "nameAr": "داندي ميجا مول - طريق مصر إسكندرية الصحراوي",
    "nameEn": "Dandy Mega Mall - Cairo Alex Desert Rd",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0615,
    "lng": 31.0285,
    "aliases": [
      "داندي ميجا مول",
      "Dandy Mall"
    ]
  },
  {
    "id": "mall_hyperone_zayed",
    "nameAr": "هايبر وان - مدخل الشيخ زايد 1",
    "nameEn": "Hyper One - Sheikh Zayed Entrance 1",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0285,
    "lng": 31.0315,
    "aliases": [
      "هايبر وان الشيخ زايد",
      "Hyper One Zayed"
    ]
  },
  {
    "id": "mall_hyperone_sphinx",
    "nameAr": "هايبر وان - طريق سفنكس ومصر إسكندرية",
    "nameEn": "Hyper One - Sphinx Desert Rd",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0785,
    "lng": 30.9855,
    "aliases": [
      "هايبر وان سفنكس"
    ]
  },
  {
    "id": "mall_cityscape",
    "nameAr": "سيتي سكيب مول - المحور المركزي 6 أكتوبر",
    "nameEn": "Cityscape Mall - 6th of October",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9685,
    "lng": 30.9415,
    "aliases": [
      "سيتي سكيب أكتوبر"
    ]
  },
  {
    "id": "mall_family_october",
    "nameAr": "فاميلي مول - 6 أكتوبر الحصري",
    "nameEn": "Family Mall - 6th of October",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9715,
    "lng": 30.9445,
    "aliases": [
      "فاميلي مول"
    ]
  },
  {
    "id": "mall_diamond_october",
    "nameAr": "دايموند مول - 6 أكتوبر ميدان الحصري",
    "nameEn": "Diamond Mall - 6th of October",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9725,
    "lng": 30.9465,
    "aliases": [
      "دايموند مول أكتوبر"
    ]
  },
  {
    "id": "mall_bashaer_october",
    "nameAr": "مول البشائر - 6 أكتوبر الحي الأول",
    "nameEn": "Al-Bashaer Mall - 6th of October",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9795,
    "lng": 30.9385,
    "aliases": [
      "مول البشائر"
    ]
  },
  {
    "id": "mall_suncity",
    "nameAr": "صن سيتي مول - شيراتون المطار",
    "nameEn": "Sun City Mall - Sheraton Airport",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "el_haykestep",
    "lat": 30.1085,
    "lng": 31.3725,
    "aliases": [
      "صن سيتي شيراتون"
    ]
  },
  {
    "id": "mall_genena",
    "nameAr": "جنينة مول - مدينة نصر",
    "nameEn": "Genena Mall - Nasr City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "fair_zone",
    "lat": 30.0545,
    "lng": 31.3325,
    "aliases": [
      "جنينة مول"
    ]
  },
  {
    "id": "mall_tiba_outlet",
    "nameAr": "طيبة أوتليت مول - مدينة نصر طريق النصر",
    "nameEn": "Tiba Outlet Mall - Nasr City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "fair_zone",
    "lat": 30.0615,
    "lng": 31.3285,
    "aliases": [
      "طيبة مول"
    ]
  },
  {
    "id": "mall_serag",
    "nameAr": "السراج مول - مدينة نصر مكرم عبيد",
    "nameEn": "Al Serag Mall - Nasr City (Makram Ebeid)",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "fair_zone",
    "lat": 30.0625,
    "lng": 31.3445,
    "aliases": [
      "سراج مول",
      "السراج سيتي"
    ]
  },
  {
    "id": "mall_city_light",
    "nameAr": "سيتي لايت مول - مدينة نصر الحي الثامن",
    "nameEn": "City Light Mall - Nasr City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "fair_zone",
    "lat": 30.0455,
    "lng": 31.3545,
    "aliases": [
      "سيتي لايت"
    ]
  },
  {
    "id": "mall_arkadia",
    "nameAr": "أركاديا مول - كورنيش النيل بولاق",
    "nameEn": "Arkadia Mall - Nile Corniche",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "maspero",
    "lat": 30.0625,
    "lng": 31.2315,
    "aliases": [
      "أركاديا مول"
    ]
  },
  {
    "id": "mall_nile_city",
    "nameAr": "أبراج النايل سيتي والمول التجاري - كورنيش النيل",
    "nameEn": "Nile City Towers Commercial Mall",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "maspero",
    "lat": 30.0655,
    "lng": 31.2295,
    "aliases": [
      "نايل سيتي"
    ]
  },
  {
    "id": "mall_ramses_hilton",
    "nameAr": "مول رمسيس هيلتون التجاري",
    "nameEn": "Ramses Hilton Commercial Center",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0545,
    "lng": 31.2345,
    "aliases": [
      "مول هيلتون رمسيس"
    ]
  },
  {
    "id": "mall_talaat_harb",
    "nameAr": "مول طلعت حرب التجاري - وسط البلد",
    "nameEn": "Talaat Harb Commercial Mall - Downtown",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "sadat",
    "lat": 30.0465,
    "lng": 31.2405,
    "aliases": [
      "مول طلعت حرب"
    ]
  },
  {
    "id": "mall_bustan_computer",
    "nameAr": "مول البستان للكمبيوتر والإلكترونيات - باب اللوق",
    "nameEn": "Al-Bustan Computer Mall - Bab El-Louk",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0445,
    "lng": 31.2415,
    "aliases": [
      "مول البستان للكمبيوتر"
    ]
  },
  {
    "id": "mall_souq_elasr_roxy",
    "nameAr": "مول سوق العصر للكمبيوتر - روكسي مصر الجديدة",
    "nameEn": "Souq El-Asr Computer Mall - Roxy",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "haroun",
    "lat": 30.0915,
    "lng": 31.3145,
    "aliases": [
      "سوق العصر روكسي"
    ]
  },
  {
    "id": "mall_korba_highstreet",
    "nameAr": "الممشى التجاري بالكوربة - مصر الجديدة",
    "nameEn": "Korba Commercial Promenade - Heliopolis",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_ahram",
    "lat": 30.0915,
    "lng": 31.3265,
    "aliases": [
      "الكوربة تسوق"
    ]
  },
  {
    "id": "mall_roxy_commercial",
    "nameAr": "المنطقة التجارية بميدان روكسي",
    "nameEn": "Roxy Commercial District",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "haroun",
    "lat": 30.0925,
    "lng": 31.3165,
    "aliases": [
      "محلات روكسي"
    ]
  },
  {
    "id": "mall_grand_mall_maadi",
    "nameAr": "جراند مول المعادي - ميدان الحرية",
    "nameEn": "Grand Mall Maadi",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2645,
    "aliases": [
      "جراند مول المعادي"
    ]
  },
  {
    "id": "mall_bandar_maadi",
    "nameAr": "مول البندر - المعادي الجديدة",
    "nameEn": "Bandar Mall - New Maadi",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "maadi",
    "lat": 29.9685,
    "lng": 31.2825,
    "aliases": [
      "البندر مول"
    ]
  },
  {
    "id": "mall_degla_center",
    "nameAr": "دجلة سنتر التجاري - المعادي ثكنات",
    "nameEn": "Degla Commercial Center - Maadi",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "sakanat_el_maadi",
    "lat": 29.9575,
    "lng": 31.2745,
    "aliases": [
      "دجلة سنتر"
    ]
  },
  {
    "id": "mall_yamama_zamalek",
    "nameAr": "يمامة سنتر - الزمالك",
    "nameEn": "Yamama Center - Zamalek",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0625,
    "lng": 31.2195,
    "aliases": [
      "يمامة سنتر الزمالك"
    ]
  },
  {
    "id": "mall_cairo_mall_haram",
    "nameAr": "كايرو مول - شارع الهرم",
    "nameEn": "Cairo Mall - Al-Haram St",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "faisal",
    "lat": 30.0055,
    "lng": 31.1825,
    "aliases": [
      "كايرو مول الهرم"
    ]
  },
  {
    "id": "mall_zizo_haram",
    "nameAr": "زيزو مول التجاري - الهرم",
    "nameEn": "Zizo Commercial Mall - Haram",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "faisal",
    "lat": 30.0075,
    "lng": 31.1785,
    "aliases": [
      "زيزو مول"
    ]
  },
  {
    "id": "mall_carrefour_obour",
    "nameAr": "كارفور سيتي سنتر العبور",
    "nameEn": "Carrefour El-Obour Mall",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_obour",
    "lat": 30.1685,
    "lng": 31.4785,
    "aliases": [
      "كارفور العبور"
    ]
  },
  {
    "id": "mall_carrefour_shorouk",
    "nameAr": "كارفور الشروق - طريق السويس والجامعة البريطانية",
    "nameEn": "Carrefour Shorouk",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1245,
    "lng": 31.6025,
    "aliases": [
      "كارفور الشروق"
    ]
  },
  {
    "id": "mall_carrefour_helwan",
    "nameAr": "كارفور حلوان - حلوان الجديدة",
    "nameEn": "Carrefour Helwan",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "helwan",
    "lat": 29.8465,
    "lng": 31.3385,
    "aliases": [
      "كارفور حلوان"
    ]
  },
  {
    "id": "mall_carrefour_dandy",
    "nameAr": "كارفور داندي ميجا مول - صحراوي",
    "nameEn": "Carrefour Dandy Mall",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0615,
    "lng": 31.0285,
    "aliases": [
      "كارفور داندي"
    ]
  },
  {
    "id": "mall_carrefour_tanta_cairo_road",
    "nameAr": "كارفور طريق الإسكندرية الزراعي شبرا بنها",
    "nameEn": "Carrefour Agricultural Road Hub",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_3_shubra_banha",
    "lat": 30.1345,
    "lng": 31.2545,
    "aliases": [
      "كارفور الزراعي"
    ]
  },
  {
    "id": "mall_lulu_tagamoa",
    "nameAr": "لولو هايبر ماركت - التجمع الأول",
    "nameEn": "Lulu Hypermarket - First Settlement",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_14_academy",
    "lat": 30.0585,
    "lng": 31.4465,
    "aliases": [
      "لولو هايبر التجمع"
    ]
  },
  {
    "id": "mall_lulu_helwan",
    "nameAr": "لولو هايبر ماركت - حلوان المعصرة",
    "nameEn": "Lulu Hypermarket - Helwan Branch",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "el_maasara",
    "lat": 29.8925,
    "lng": 31.3045,
    "aliases": [
      "لولو المعصرة"
    ]
  },
  {
    "id": "mall_spinneys_silverstar",
    "nameAr": "سبينيس هايبر ماركت - سيلفر ستار التجمع الخامس",
    "nameEn": "Spinneys - Silver Star Mall New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0125,
    "lng": 31.4285,
    "aliases": [
      "سبينيس التجمع"
    ]
  },
  {
    "id": "mall_spinneys_arabia",
    "nameAr": "سبينيس هايبر ماركت - مول العرب",
    "nameEn": "Spinneys - Mall of Arabia",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0075,
    "lng": 30.9735,
    "aliases": [
      "سبينيس مول العرب"
    ]
  },
  {
    "id": "mall_spinneys_mokattam",
    "nameAr": "سبينيس هايبر ماركت - المقطم شارع 9",
    "nameEn": "Spinneys - Mokattam 9th St",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_20_mokattam",
    "lat": 30.0085,
    "lng": 31.3125,
    "aliases": [
      "سبينيس المقطم"
    ]
  },
  {
    "id": "mall_seoudi_korba",
    "nameAr": "سعودي ماركت - الكوربة مصر الجديدة",
    "nameEn": "Seoudi Supermarket - Korba",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_ahram",
    "lat": 30.0915,
    "lng": 31.3275,
    "aliases": [
      "سعودي الكوربة"
    ]
  },
  {
    "id": "mall_seoudi_mohandessin",
    "nameAr": "سعودي ماركت - المهندسين شارع مصدق وشهاب",
    "nameEn": "Seoudi Supermarket - Mohandessin",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0485,
    "lng": 31.2065,
    "aliases": [
      "سعودي المهندسين"
    ]
  },
  {
    "id": "mall_seoudi_zayed",
    "nameAr": "سعودي ماركت - الشيخ زايد الحي الثامن",
    "nameEn": "Seoudi Supermarket - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0245,
    "lng": 30.9945,
    "aliases": [
      "سعودي زايد"
    ]
  },
  {
    "id": "mall_seoudi_maadi",
    "nameAr": "سعودي ماركت - المعادي دجلة شارع 206",
    "nameEn": "Seoudi Supermarket - Maadi Degla",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2725,
    "aliases": [
      "سعودي المعادي"
    ]
  },
  {
    "id": "mall_seoudi_tagamoa",
    "nameAr": "سعودي ماركت - التجمع الخامس وتر واي",
    "nameEn": "Seoudi Supermarket - Waterway New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_auc",
    "lat": 30.0445,
    "lng": 31.4785,
    "aliases": [
      "سعودي التجمع"
    ]
  },
  {
    "id": "mall_metro_zamalek",
    "nameAr": "مترو ماركت - الزمالك شارع البرازيل",
    "nameEn": "Metro Market - Zamalek",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0615,
    "lng": 31.2215,
    "aliases": [
      "مترو الزمالك"
    ]
  },
  {
    "id": "mall_metro_dokki",
    "nameAr": "مترو ماركت - الدقي شارع مصدق",
    "nameEn": "Metro Market - Dokki",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "dokki",
    "lat": 30.0395,
    "lng": 31.2085,
    "aliases": [
      "مترو الدقي"
    ]
  },
  {
    "id": "mall_metro_heliopolis",
    "nameAr": "مترو ماركت - مصر الجديدة شارع الأهرام",
    "nameEn": "Metro Market - Heliopolis Al-Ahram",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_ahram",
    "lat": 30.0935,
    "lng": 31.3285,
    "aliases": [
      "مترو مصر الجديدة"
    ]
  },
  {
    "id": "mall_kheir_zaman_shubra",
    "nameAr": "خير زمان ماركت - شبرا دوران شبرا",
    "nameEn": "Kheir Zaman - Shubra",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "road_el_farag",
    "lat": 30.0765,
    "lng": 31.2465,
    "aliases": [
      "خير زمان شبرا"
    ]
  },
  {
    "id": "mall_kheir_zaman_faisal",
    "nameAr": "خير زمان ماركت - شارع فيصل العشرين",
    "nameEn": "Kheir Zaman - Faisal 20th St",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "faisal",
    "lat": 30.0165,
    "lng": 31.1865,
    "aliases": [
      "خير زمان فيصل"
    ]
  },
  {
    "id": "mall_kheir_zaman_helwan",
    "nameAr": "خير زمان ماركت - حلوان شارع راغب",
    "nameEn": "Kheir Zaman - Helwan Ragheb St",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "helwan",
    "lat": 29.8445,
    "lng": 31.3325,
    "aliases": [
      "خير زمان حلوان"
    ]
  },
  {
    "id": "souq_khan_elkhalili",
    "nameAr": "سوق خان الخليلي وبازارات الصاغة - الجمالية",
    "nameEn": "Khan El-Khalili Bazaar & Gold Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0475,
    "lng": 31.2625,
    "aliases": [
      "خان الخليلي",
      "Khan El Khalili",
      "سوق الصاغة"
    ]
  },
  {
    "id": "souq_elmosky",
    "nameAr": "سوق الموسكي التجاري التاريخي - العتبة",
    "nameEn": "Al-Mosky Historic Wholesale Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "attaba",
    "lat": 30.0515,
    "lng": 31.2585,
    "aliases": [
      "الموسكي",
      "سوق الموسكي"
    ]
  },
  {
    "id": "souq_abdelaziz",
    "nameAr": "شارع عبد العزيز - السوق الأكبر للإلكترونيات والأجهزة",
    "nameEn": "Abdel Aziz Street Electronics Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "attaba",
    "lat": 30.0485,
    "lng": 31.2495,
    "aliases": [
      "شارع عبد العزيز للأجهزة",
      "شارع عبد العزيز"
    ]
  },
  {
    "id": "souq_elgomhoria",
    "nameAr": "شارع الجمهورية - سوق العدد والآلات والمعدات",
    "nameEn": "Al-Gomhoreya Street Hardware & Tools Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "attaba",
    "lat": 30.0525,
    "lng": 31.2475,
    "aliases": [
      "شارع الجمهورية"
    ]
  },
  {
    "id": "souq_wekalet_elbalah",
    "nameAr": "وكالة البلح - سوق الأقمشة والملابس المستوردة",
    "nameEn": "Wekalet El-Balah Textile & Vintage Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "maspero",
    "lat": 30.0585,
    "lng": 31.2335,
    "aliases": [
      "وكالة البلح"
    ]
  },
  {
    "id": "souq_rowai",
    "nameAr": "سوق الرويعي - العتبة للمعدات ومستلزمات الديكور",
    "nameEn": "El-Rowai Market - Attaba",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "attaba",
    "lat": 30.0535,
    "lng": 31.2515,
    "aliases": [
      "الرويعي"
    ]
  },
  {
    "id": "souq_sayyeda_zeinab",
    "nameAr": "سوق السيدة زينب الشعبي التراثي",
    "nameEn": "Sayyeda Zeinab Traditional Bazaar",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0315,
    "lng": 31.2395,
    "aliases": [
      "سوق السيدة زينب"
    ]
  },
  {
    "id": "souq_fagala",
    "nameAr": "سوق الفجالة - سوق الأدوات المدرسية والكتب والمكتبات",
    "nameEn": "Al-Faggala Books & Stationery Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0595,
    "lng": 31.2545,
    "aliases": [
      "الفجالة",
      "مكتبات الفجالة"
    ]
  },
  {
    "id": "souq_attaba_vegetables",
    "nameAr": "سوق خضار العتبة المركزي",
    "nameEn": "Attaba Central Fresh Produce Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "attaba",
    "lat": 30.0525,
    "lng": 31.2535,
    "aliases": [
      "سوق العتبة"
    ]
  },
  {
    "id": "souq_shubra_elhegaz",
    "nameAr": "شارع شبرا التجاري الرئيسي - تسوق الملابس والأحذية",
    "nameEn": "Shubra Commercial High Street",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "massara",
    "lat": 30.0715,
    "lng": 31.2475,
    "aliases": [
      "شارع شبرا للملابس"
    ]
  },
  {
    "id": "souq_faisal_commercial",
    "nameAr": "شارع فيصل التجاري الرئيسي - الجيزة",
    "nameEn": "Faisal Commercial High Street - Giza",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "faisal",
    "lat": 30.0125,
    "lng": 31.1895,
    "aliases": [
      "شارع فيصل تسوق"
    ]
  },
  {
    "id": "souq_haram_commercial",
    "nameAr": "شارع الهرم التجاري - الجيزة",
    "nameEn": "Al-Haram Commercial High Street",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "faisal",
    "lat": 30.0085,
    "lng": 31.1865,
    "aliases": [
      "شارع الهرم تسوق"
    ]
  },
  {
    "id": "souq_abbas_elakkad",
    "nameAr": "شارع عباس العقاد التجاري - مدينة نصر",
    "nameEn": "Abbas El-Akkad Commercial Street - Nasr City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "fair_zone",
    "lat": 30.0625,
    "lng": 31.3395,
    "aliases": [
      "عباس العقاد تسوق"
    ]
  },
  {
    "id": "souq_makram_ebeid",
    "nameAr": "شارع مكرم عبيد التجاري - مدينة نصر",
    "nameEn": "Makram Ebeid Commercial Street - Nasr City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "fair_zone",
    "lat": 30.0655,
    "lng": 31.3445,
    "aliases": [
      "مكرم عبيد تسوق"
    ]
  },
  {
    "id": "souq_ahmed_orabi",
    "nameAr": "شارع أحمد عرابي التجاري - المهندسين",
    "nameEn": "Ahmed Orabi Commercial Street - Mohandessin",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "el_tawfikeya",
    "lat": 30.0625,
    "lng": 31.2065,
    "aliases": [
      "أحمد عرابي المهندسين"
    ]
  },
  {
    "id": "souq_shehab",
    "nameAr": "شارع شهاب التجاري للملابس والأحذية - المهندسين",
    "nameEn": "Shehab Street Fashion Hub - Mohandessin",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0515,
    "lng": 31.2025,
    "aliases": [
      "شارع شهاب"
    ]
  },
  {
    "id": "souq_mossadek",
    "nameAr": "شارع مصدق التجاري - الدقي",
    "nameEn": "Mossadek Commercial Street - Dokki",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "dokki",
    "lat": 30.0385,
    "lng": 31.2065,
    "aliases": [
      "شارع مصدق"
    ]
  },
  {
    "id": "souq_tahrir_dokki",
    "nameAr": "شارع التحرير التجاري - الدقي",
    "nameEn": "Tahrir Street Commercial Hub - Dokki",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "dokki",
    "lat": 30.0375,
    "lng": 31.2115,
    "aliases": [
      "شارع التحرير الدقي"
    ]
  },
  {
    "id": "souq_maadi_street_9",
    "nameAr": "شارع 9 التجاري والمطاعم - المعادي",
    "nameEn": "Street 9 Lifestyle & Dining Hub - Maadi",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "maadi",
    "lat": 29.9585,
    "lng": 31.2585,
    "aliases": [
      "شارع 9 المعادي"
    ]
  },
  {
    "id": "souq_talaat_harb_st",
    "nameAr": "شارع طلعت حرب - وسط البلد للملابس والأحذية",
    "nameEn": "Talaat Harb High Street - Downtown",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "sadat",
    "lat": 30.0455,
    "lng": 31.2395,
    "aliases": [
      "شارع طلعت حرب"
    ]
  },
  {
    "id": "souq_qasr_elnil_st",
    "nameAr": "شارع قصر النيل التجاري - وسط البلد",
    "nameEn": "Qasr El-Nil Commercial Street - Downtown",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "sadat",
    "lat": 30.0445,
    "lng": 31.2385,
    "aliases": [
      "شارع قصر النيل"
    ]
  },
  {
    "id": "souq_sherif_st",
    "nameAr": "شارع شريف التجاري - وسط البلد",
    "nameEn": "Sherif Commercial Street - Downtown",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0485,
    "lng": 31.2425,
    "aliases": [
      "شارع شريف"
    ]
  },
  {
    "id": "souq_26_july_zamalek",
    "nameAr": "شارع 26 يوليو التجاري - الزمالك",
    "nameEn": "26th of July Commercial Hub - Zamalek",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0595,
    "lng": 31.2185,
    "aliases": [
      "26 يوليو الزمالك"
    ]
  },
  {
    "id": "souq_damascus_st_roxy",
    "nameAr": "شارع دمشق لقطع غيار وإكسسوارات السيارات - روكسي",
    "nameEn": "Damascus Street Auto Parts Souq - Roxy",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "haroun",
    "lat": 30.0935,
    "lng": 31.3175,
    "aliases": [
      "شارع دمشق روكسي"
    ]
  },
  {
    "id": "souq_gesr_elsuez",
    "nameAr": "شارع جسر السويس التجاري - عين شمس والألف مسكن",
    "nameEn": "Gesr El-Suez Commercial Strip",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "alf_maskan",
    "lat": 30.1165,
    "lng": 31.3365,
    "aliases": [
      "جسر السويس تسوق"
    ]
  },
  {
    "id": "souq_obour_wholesale",
    "nameAr": "سوق العبور المركزي لتجارة الجملة والخضار والفاكهة والأسماك",
    "nameEn": "El-Obour Central Wholesale Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "adly_mansour",
    "lat": 30.2015,
    "lng": 31.4645,
    "aliases": [
      "سوق العبور للجملة",
      "سوق العبور"
    ]
  },
  {
    "id": "souq_sixth_october_wholesale",
    "nameAr": "سوق الجملة المركزي بمدينة 6 أكتوبر",
    "nameEn": "6th of October Central Wholesale Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9485,
    "lng": 31.0245,
    "aliases": [
      "سوق جملة أكتوبر"
    ]
  },
  {
    "id": "mall_iconic_tower_podium",
    "nameAr": "المول التجاري ببرج الأيقوني - العاصمة الإدارية",
    "nameEn": "Iconic Tower Commercial Podium - New Capital",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "city_of_arts",
    "lat": 30.0165,
    "lng": 31.7345,
    "aliases": [
      "مول البرج الأيقوني"
    ]
  },
  {
    "id": "mall_capital_prime",
    "nameAr": "كابيتال برايم مول - العاصمة الإدارية",
    "nameEn": "Capital Prime Mall - New Capital",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "city_of_arts",
    "lat": 30.0125,
    "lng": 31.7245,
    "aliases": [
      "كابيتال برايم"
    ]
  },
  {
    "id": "mall_audaz",
    "nameAr": "أوداز مول التجاري - الحي المالي بالعاصمة الإدارية",
    "nameEn": "Audaz Mall - Financial District New Capital",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "city_of_arts",
    "lat": 30.0145,
    "lng": 31.7285,
    "aliases": [
      "أوداز مول"
    ]
  },
  {
    "id": "mall_paris_new_capital",
    "nameAr": "باريس مول - منطقة MU23 العاصمة الإدارية",
    "nameEn": "Paris Mall - New Capital",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "city_of_arts",
    "lat": 30.0215,
    "lng": 31.7215,
    "aliases": [
      "باريس مول العاصمة"
    ]
  },
  {
    "id": "mall_silver_star_tagamoa",
    "nameAr": "سيلفر ستار مول - التجمع الخامس",
    "nameEn": "Silver Star Mall - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0115,
    "lng": 31.4275,
    "aliases": [
      "سيلفر ستار"
    ]
  },
  {
    "id": "mall_seven_stars_tagamoa",
    "nameAr": "سفن ستارز مول - الحي الأول التجمع الخامس",
    "nameEn": "Seven Stars Mall - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0095,
    "lng": 31.4255,
    "aliases": [
      "سفن ستارز"
    ]
  },
  {
    "id": "mall_spot_tagamoa",
    "nameAr": "ذا سبوت مول - أمام الجامعة الأمريكية بالتجمع",
    "nameEn": "The Spot Mall - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_auc",
    "lat": 30.0225,
    "lng": 31.4965,
    "aliases": [
      "ذا سبوت"
    ]
  },
  {
    "id": "mall_meeting_point",
    "nameAr": "ميتنج بوينت مول - التجمع الخامس",
    "nameEn": "Meeting Point Mall - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_auc",
    "lat": 30.0215,
    "lng": 31.4925,
    "aliases": [
      "ميتنج بوينت"
    ]
  },
  {
    "id": "mall_midtown_newcairo",
    "nameAr": "ميدتاون مول - التجمع الخامس",
    "nameEn": "Midtown Mall - New Cairo",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "monorail_auc",
    "lat": 30.0245,
    "lng": 31.4915,
    "aliases": [
      "ميدتاون التجمع"
    ]
  },
  {
    "id": "mall_riviera_zayed",
    "nameAr": "ريفييرا مول - الشيخ زايد",
    "nameEn": "Riviera Mall - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0255,
    "lng": 30.9985,
    "aliases": [
      "ريفييرا زايد"
    ]
  },
  {
    "id": "mall_plaza_españa_zayed",
    "nameAr": "بلازا إسبانيا مول - الشيخ زايد",
    "nameEn": "Plaza España - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0345,
    "lng": 30.9825,
    "aliases": [
      "بلازا إسبانيا"
    ]
  },
  {
    "id": "mall_tivoli_dome_heliopolis",
    "nameAr": "تيفولي دوم - مصر الجديدة كليوباترا",
    "nameEn": "Tivoli Dome - Heliopolis",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_ahram",
    "lat": 30.0935,
    "lng": 31.3325,
    "aliases": [
      "تيفولي هليوبوليس"
    ]
  },
  {
    "id": "mall_tivoli_dome_zayed",
    "nameAr": "تيفولي دوم - الشيخ زايد",
    "nameEn": "Tivoli Dome - Sheikh Zayed",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0215,
    "lng": 31.0015,
    "aliases": [
      "تيفولي زايد"
    ]
  },
  {
    "id": "mall_the_district_sheraton",
    "nameAr": "ذا ديستريكت مول - شيراتون نادي وادي دجلة",
    "nameEn": "The District Mall - Sheraton",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "el_haykestep",
    "lat": 30.1045,
    "lng": 31.3785,
    "aliases": [
      "ذا ديستريكت شيراتون"
    ]
  },
  {
    "id": "mall_merghany_shopping",
    "nameAr": "ممشى الميرغني التجاري - مصر الجديدة",
    "nameEn": "Merghany Commercial Promenade - Heliopolis",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0895,
    "lng": 31.3285,
    "aliases": [
      "الميرغني مصر الجديدة"
    ]
  },
  {
    "id": "mall_baghdad_st_korba",
    "nameAr": "شارع بغداد التجاري - الكوربة مصر الجديدة",
    "nameEn": "Baghdad Commercial Street - Korba",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_ahram",
    "lat": 30.0915,
    "lng": 31.3255,
    "aliases": [
      "شارع بغداد الكوربة"
    ]
  },
  {
    "id": "mall_ahram_st_heliopolis",
    "nameAr": "شارع الأهرام التجاري - مصر الجديدة",
    "nameEn": "Al-Ahram Commercial Street - Heliopolis",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_ahram",
    "lat": 30.0925,
    "lng": 31.3275,
    "aliases": [
      "شارع الأهرام روكسي"
    ]
  },
  {
    "id": "mall_damascus_gate",
    "nameAr": "بوابة دمشق التجارية - مصر الجديدة",
    "nameEn": "Damascus Gate Commercial Center",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "haroun",
    "lat": 30.0945,
    "lng": 31.3195,
    "aliases": [
      "بوابة دمشق"
    ]
  },
  {
    "id": "mall_cleopatra_square",
    "nameAr": "ميدان كليوباترا التجاري - مصر الجديدة",
    "nameEn": "Cleopatra Square Commercial Hub",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0915,
    "lng": 31.3315,
    "aliases": [
      "كليوباترا تسوق"
    ]
  },
  {
    "id": "mall_triumph_shopping",
    "nameAr": "المنطقة التجارية بميدان تريومف - مصر الجديدة",
    "nameEn": "Triumph Square Commercial Strip",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "haroun",
    "lat": 30.0975,
    "lng": 31.3345,
    "aliases": [
      "تريومف تسوق"
    ]
  },
  {
    "id": "mall_hegaz_shopping",
    "nameAr": "المنطقة التجارية بميدان الحجاز - مصر الجديدة",
    "nameEn": "Hegaz Square Commercial Hub",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "heliopolis",
    "lat": 30.1045,
    "lng": 31.3415,
    "aliases": [
      "الحجاز تسوق"
    ]
  },
  {
    "id": "mall_alalfy_downtown",
    "nameAr": "شارع الألفي للمطاعم والمقاهي والتسوق - وسط البلد",
    "nameEn": "Al-Alfy Pedestrian Shopping Street",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0545,
    "lng": 31.2465,
    "aliases": [
      "شارع الألفي"
    ]
  },
  {
    "id": "mall_emad_eldeen",
    "nameAr": "شارع عماد الدين التجاري ومسارح الفنون",
    "nameEn": "Emad El-Deen Commercial & Theaters Street",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0565,
    "lng": 31.2485,
    "aliases": [
      "عماد الدين"
    ]
  },
  {
    "id": "mall_champollion",
    "nameAr": "شارع شامبليون التجاري ومحلات التجزئة",
    "nameEn": "Champollion Street Commercial Strip",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "sadat",
    "lat": 30.0485,
    "lng": 31.2385,
    "aliases": [
      "شامبليون"
    ]
  },
  {
    "id": "mall_bab_ellouk_market",
    "nameAr": "سوق باب اللوق التجاري التراثي",
    "nameEn": "Bab El-Louk Historic Covered Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0435,
    "lng": 31.2425,
    "aliases": [
      "سوق باب اللوق"
    ]
  },
  {
    "id": "mall_souq_elkhayameya",
    "nameAr": "سوق الخيامية للأقمشة التراثية والفنون اليدوية - باب زويلة",
    "nameEn": "El-Khayameya Tentmakers Historic Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0425,
    "lng": 31.2585,
    "aliases": [
      "الخيامية",
      "سوق الخيامية"
    ]
  },
  {
    "id": "mall_souq_elselah",
    "nameAr": "سوق السلاح التراثي - الدرب الأحمر",
    "nameEn": "Souq El-Selah Historic Quarter",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0405,
    "lng": 31.2615,
    "aliases": [
      "سوق السلاح"
    ]
  },
  {
    "id": "mall_souq_enaba_zamalek",
    "nameAr": "سوق عنبة التخصصي للتسوق - الزمالك",
    "nameEn": "Enaba Gourmet Market - Zamalek",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0585,
    "lng": 31.2195,
    "aliases": [
      "سوق عنبة الزمالك"
    ]
  },
  {
    "id": "mall_gamal_abdel_nasser_shubra",
    "nameAr": "شارع جمال عبد الناصر التجاري - شبرا الخيمة",
    "nameEn": "Gamal Abdel Nasser Commercial St - Shubra Kheima",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "shubra_el_kheima",
    "lat": 30.1245,
    "lng": 31.2465,
    "aliases": [
      "عبد الناصر شبرا الخيمة"
    ]
  },
  {
    "id": "mall_terat_elboulaqia",
    "nameAr": "شارع ترعة البولاقية التجاري - شبرا مصر",
    "nameEn": "Terat El-Boulaqiya Commercial Street - Shubra",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "massara",
    "lat": 30.0735,
    "lng": 31.2445,
    "aliases": [
      "ترعة البولاقية"
    ]
  },
  {
    "id": "mall_ahmed_helmy_auto",
    "nameAr": "سوق أحمد حلمي لمستلزمات السيارات",
    "nameEn": "Ahmed Helmy Auto Accessories Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0635,
    "lng": 31.2465,
    "aliases": [
      "أحمد حلمي"
    ]
  },
  {
    "id": "mall_gesr_elsuez_alfmaskan",
    "nameAr": "المنطقة التجارية بميدان الألف مسكن",
    "nameEn": "Alf Maskan Commercial District",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "alf_maskan",
    "lat": 30.1195,
    "lng": 31.3385,
    "aliases": [
      "الألف مسكن تسوق"
    ]
  },
  {
    "id": "mall_nozha_commercial",
    "nameAr": "محلات النزهة وشارع جوزيف تيتو",
    "nameEn": "El-Nozha Joseph Tito Commercial Strip",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "el_nozha",
    "lat": 30.1215,
    "lng": 31.3625,
    "aliases": [
      "جوزيف تيتو النزهة"
    ]
  },
  {
    "id": "mall_qobaa_commercial",
    "nameAr": "المنطقة التجارية بقباء وجسر السويس",
    "nameEn": "Qobaa Commercial Strip",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "qobaa",
    "lat": 30.1345,
    "lng": 31.3815,
    "aliases": [
      "قباء تسوق"
    ]
  },
  {
    "id": "mall_omar_ibn_elkhattab_hub",
    "nameAr": "المنطقة التجارية بعمر بن الخطاب الحرفيين",
    "nameEn": "Omar Ibn El-Khattab Commercial District",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "omar_ibn_el_khattab",
    "lat": 30.1415,
    "lng": 31.3915,
    "aliases": [
      "عمر بن الخطاب تسوق"
    ]
  },
  {
    "id": "mall_alharfeyeen_auto_souq",
    "nameAr": "مدينة الحرفيين لسوق قطع غيار وصيانة السيارات",
    "nameEn": "Al-Herfeyeen Auto Parts & Repair City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "omar_ibn_el_khattab",
    "lat": 30.1465,
    "lng": 31.3985,
    "aliases": [
      "مدينة الحرفيين"
    ]
  },
  {
    "id": "mall_adly_mansour_mall",
    "nameAr": "المنطقة التجارية والمول الاستثماري بعدلي منصور",
    "nameEn": "Adly Mansour Transport Hub Commercial Mall",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "adly_mansour",
    "lat": 30.1475,
    "lng": 31.4025,
    "aliases": [
      "مول عدلي منصور"
    ]
  },
  {
    "id": "mall_obour_city_center",
    "nameAr": "سيتي سنتر العبور التجاري - الحي الأول",
    "nameEn": "El-Obour City Center Mall",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_obour",
    "lat": 30.1715,
    "lng": 31.4745,
    "aliases": [
      "سيتي سنتر العبور"
    ]
  },
  {
    "id": "mall_avenue_obour",
    "nameAr": "ذا أفينيو مول - مدينة العبور",
    "nameEn": "The Avenue Mall - El-Obour",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_obour",
    "lat": 30.1765,
    "lng": 31.4825,
    "aliases": [
      "أفينيو العبور"
    ]
  },
  {
    "id": "mall_shorouk_paradise",
    "nameAr": "بارادايس مول - مدينة الشروق",
    "nameEn": "Paradise Mall - El-Shorouk",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1315,
    "lng": 31.6145,
    "aliases": [
      "بارادايس الشروق"
    ]
  },
  {
    "id": "mall_shorouk_galaxy",
    "nameAr": "جالاكسي مول - مدينة الشروق",
    "nameEn": "Galaxy Mall - El-Shorouk",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1355,
    "lng": 31.6185,
    "aliases": [
      "جالاكسي الشروق"
    ]
  },
  {
    "id": "mall_shorouk_mega",
    "nameAr": "ميجا مول - مدينة الشروق",
    "nameEn": "Mega Mall - El-Shorouk City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1385,
    "lng": 31.6215,
    "aliases": [
      "ميجا مول الشروق"
    ]
  },
  {
    "id": "mall_badr_midan",
    "nameAr": "ميدان مول التجاري - مدينة بدر",
    "nameEn": "Midan Mall - Badr City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_badr",
    "lat": 30.1435,
    "lng": 31.7395,
    "aliases": [
      "ميدان مول بدر"
    ]
  },
  {
    "id": "mall_badr_down_town",
    "nameAr": "داون تاون مول - مدينة بدر",
    "nameEn": "Downtown Mall - Badr City",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_badr",
    "lat": 30.1465,
    "lng": 31.7425,
    "aliases": [
      "داون تاون بدر"
    ]
  },
  {
    "id": "mall_capital_gardens_hub",
    "nameAr": "المركز التجاري بحدائق العاصمة",
    "nameEn": "Capital Gardens Commercial Hub",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "lrt_capital_gardens",
    "lat": 30.1145,
    "lng": 31.7645,
    "aliases": [
      "تجاري حدائق العاصمة"
    ]
  },
  {
    "id": "mall_giza_square_shops",
    "nameAr": "المنطقة التجارية بميدان الجيزة ومحطة قطارات الجيزة",
    "nameEn": "Giza Square Commercial Strip",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "giza",
    "lat": 30.0085,
    "lng": 31.2075,
    "aliases": [
      "ميدان الجيزة تسوق"
    ]
  },
  {
    "id": "mall_faisal_ishreen",
    "nameAr": "شارع العشرين التجاري المتفرع من فيصل",
    "nameEn": "El-Eshreen Commercial St - Faisal",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "faisal",
    "lat": 30.0155,
    "lng": 31.1875,
    "aliases": [
      "شارع العشرين فيصل"
    ]
  },
  {
    "id": "mall_diya_faisal",
    "nameAr": "شارع ضياء التجاري - الهرم وفيصل",
    "nameEn": "Diya Commercial Street - Haram",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "faisal",
    "lat": 30.0095,
    "lng": 31.1815,
    "aliases": [
      "شارع ضياء الهرم"
    ]
  },
  {
    "id": "mall_arish_haram",
    "nameAr": "شارع العريش التجاري الأشهر للأزياء والملابس - الهرم",
    "nameEn": "Al-Arish Street Fashion Hub - Haram",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "faisal",
    "lat": 30.0065,
    "lng": 31.1765,
    "aliases": [
      "شارع العريش الهرم",
      "العريش"
    ]
  },
  {
    "id": "mall_talebaya_commercial",
    "nameAr": "سوق الطالبية التجاري - شارع الهرم وفيصل",
    "nameEn": "Al-Talbiya Commercial Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_27_talbiya",
    "lat": 29.9985,
    "lng": 31.1765,
    "aliases": [
      "الطالبية تسوق"
    ]
  },
  {
    "id": "mall_maryouteya_bazaar",
    "nameAr": "سوق وممشى المريوطية السياحي والتجاري",
    "nameEn": "Al-Maryouteya Tourist Walk & Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_28_maryouteya",
    "lat": 29.9925,
    "lng": 31.1625,
    "aliases": [
      "ممشى المريوطية"
    ]
  },
  {
    "id": "mall_mansoureya_country_strip",
    "nameAr": "المنطقة التجارية والمطاعف بالمنصورية",
    "nameEn": "Al-Mansoureya Commercial Strip",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_29_mansoureya",
    "lat": 29.9875,
    "lng": 31.1515,
    "aliases": [
      "المنصورية"
    ]
  },
  {
    "id": "mall_sun_capital_strip",
    "nameAr": "المول التجاري المفتوح بصن كابيتال - حدائق الأهرام",
    "nameEn": "Sun Capital Commercial Strip",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9715,
    "lng": 31.1125,
    "aliases": [
      "صن كابيتال مول"
    ]
  },
  {
    "id": "mall_gate_4_ahram_gardens",
    "nameAr": "المنطقة التجارية بالبوابة الرابعة - حدائق الأهرام",
    "nameEn": "Gate 4 Commercial Strip - Hadayeq Al-Ahram",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9745,
    "lng": 31.1165,
    "aliases": [
      "بوابة 4 حدائق الأهرام"
    ]
  },
  {
    "id": "mall_gate_1_ahram_khufu",
    "nameAr": "المنطقة التجارية ببوابة خفرع وخوفو - حدائق الأهرام",
    "nameEn": "Gate 1 Commercial Zone - Hadayeq Al-Ahram",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9785,
    "lng": 31.1215,
    "aliases": [
      "بوابة 1 حدائق الأهرام"
    ]
  },
  {
    "id": "mall_mounib_regional_market",
    "nameAr": "سوق المنيب الإقليمي للتجارة والملابس",
    "nameEn": "El-Mounib Regional Commercial Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "el_mounib",
    "lat": 29.9815,
    "lng": 31.2115,
    "aliases": [
      "سوق المنيب"
    ]
  },
  {
    "id": "mall_saqyet_mekky_commercial",
    "nameAr": "سوق ساقية مكي للمستلزمات الشعبية",
    "nameEn": "Saqyet Mekky Local Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "saqyet_mekky",
    "lat": 29.9945,
    "lng": 31.2095,
    "aliases": [
      "ساقية مكي تسوق"
    ]
  },
  {
    "id": "mall_dar_elsalam_souq",
    "nameAr": "سوق شارع الفيوم - دار السلام الشعبي",
    "nameEn": "Fayoum Street Souq - Dar El-Salam",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "dar_el_salam",
    "lat": 29.9865,
    "lng": 31.2325,
    "aliases": [
      "سوق دار السلام"
    ]
  },
  {
    "id": "mall_hadayeq_maadi_market",
    "nameAr": "سوق حدائق المعادي التجاري شارع فرج يوسف",
    "nameEn": "Hadayeq El-Maadi Commercial Street",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "hadayeq_el_maadi",
    "lat": 29.9715,
    "lng": 31.2465,
    "aliases": [
      "سوق حدائق المعادي"
    ]
  },
  {
    "id": "mall_zahraa_maadi_hub",
    "nameAr": "المنطقة التجارية بزهراء المعادي وكارفور",
    "nameEn": "Zahraa El-Maadi Commercial District",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_19_zahraa_maadi",
    "lat": 29.9785,
    "lng": 31.2885,
    "aliases": [
      "زهراء المعادي تسوق"
    ]
  },
  {
    "id": "mall_mokattam_street_9",
    "nameAr": "شارع 9 الرئيسي - المقطم للتسوق والمطاعم والكافيهات",
    "nameEn": "9th Street Commercial Strip - Mokattam",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "brt_20_mokattam",
    "lat": 30.0095,
    "lng": 31.3145,
    "aliases": [
      "شارع 9 المقطم"
    ]
  },
  {
    "id": "mall_helwan_souq_elgomhoria",
    "nameAr": "شارع الجمهورية وحيدر التجاري - حلوان",
    "nameEn": "Gomhoreya & Haydar Commercial Street - Helwan",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "helwan",
    "lat": 29.8455,
    "lng": 31.3335,
    "aliases": [
      "شارع حيدر حلوان",
      "شارع الجمهورية حلوان"
    ]
  },
  {
    "id": "mall_ain_helwan_commercial",
    "nameAr": "المنطقة التجارية بعين حلوان ومحطة المترو",
    "nameEn": "Ain Helwan Commercial Area",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "ain_helwan",
    "lat": 29.8565,
    "lng": 31.3295,
    "aliases": [
      "عين حلوان تسوق"
    ]
  },
  {
    "id": "mall_wadi_hof_shopping",
    "nameAr": "المنطقة التجارية بوادي حوف وسوق سيارات النصر",
    "nameEn": "Wadi Hof Commercial District",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "wadi_hof",
    "lat": 29.8795,
    "lng": 31.3195,
    "aliases": [
      "وادي حوف تسوق"
    ]
  },
  {
    "id": "mall_hadayeq_helwan_market",
    "nameAr": "المنطقة التجارية بحدائق حلوان وشارع الترعة",
    "nameEn": "Hadayeq Helwan Commercial Street",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "hadayeq_helwan",
    "lat": 29.9015,
    "lng": 31.3095,
    "aliases": [
      "حدائق حلوان تسوق"
    ]
  },
  {
    "id": "mall_maasara_commercial",
    "nameAr": "سوق المعصرة التجاري ومحطة القطار",
    "nameEn": "El-Maasara Commercial Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "el_maasara",
    "lat": 29.8965,
    "lng": 31.3065,
    "aliases": [
      "المعصرة تسوق"
    ]
  },
  {
    "id": "mall_tora_cement_strip",
    "nameAr": "المنطقة التجارية بطرة الأسمنت وكورنيش المعادي الجنوبي",
    "nameEn": "Tora El-Asmant Commercial Zone",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "tora_el_asmant",
    "lat": 29.9245,
    "lng": 31.2865,
    "aliases": [
      "طرة الأسمنت تسوق"
    ]
  },
  {
    "id": "mall_tora_balad_market",
    "nameAr": "سوق طرة البلد التجاري ومحيط المحطة",
    "nameEn": "Tora El-Balad Local Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "tora_el_balad",
    "lat": 29.9415,
    "lng": 31.2725,
    "aliases": [
      "طرة البلد تسوق"
    ]
  },
  {
    "id": "mall_matariya_souq_khamis",
    "nameAr": "سوق المطرية التراثي وميدان المسلة",
    "nameEn": "Matariya Historic Obelisk Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "el_matareyya",
    "lat": 30.1285,
    "lng": 31.3145,
    "aliases": [
      "سوق المطرية"
    ]
  },
  {
    "id": "mall_helmeyat_zaytoun_hub",
    "nameAr": "المنطقة التجارية بميدان حلمية الزيتون وشارع ابن سندر",
    "nameEn": "Helmeyat El-Zaytoun Commercial Center",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "helmeyat_el_zaytoun",
    "lat": 30.1115,
    "lng": 31.3185,
    "aliases": [
      "حلمية الزيتون تسوق"
    ]
  },
  {
    "id": "mall_saray_qobba_strip",
    "nameAr": "المنطقة التجارية بسراي القبة وشارع مصر والسودان",
    "nameEn": "Saray El-Qobba Commercial Hub",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "saray_el_qobba",
    "lat": 30.0985,
    "lng": 31.3045,
    "aliases": [
      "سراي القبة تسوق"
    ]
  },
  {
    "id": "mall_manshiet_sadr_shops",
    "nameAr": "المنطقة التجارية بمنشية الصدر وجامعة عين شمس",
    "nameEn": "Manshiet El-Sadr Commercial Zone",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "manshiet_el_sadr",
    "lat": 30.0825,
    "lng": 31.2885,
    "aliases": [
      "منشية الصدر تسوق"
    ]
  },
  {
    "id": "mall_ghamra_auto_market",
    "nameAr": "سوق غمرة لمستلزمات وكماليات السيارات",
    "nameEn": "Ghamra Auto Accessories Market",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "ghamra",
    "lat": 30.0685,
    "lng": 31.2715,
    "aliases": [
      "غمرة تسوق"
    ]
  },
  {
    "id": "mall_bab_shaariya_cloth",
    "nameAr": "سوق باب الشعرية للأقمشة والجلود والأحذية",
    "nameEn": "Bab El-Shaariya Leather & Footwear Souq",
    "category": "mall",
    "categoryAr": "مول وتسوق",
    "categoryEn": "Shopping Mall",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0545,
    "lng": 31.2595,
    "aliases": [
      "باب الشعرية تسوق"
    ]
  },
  {
    "id": "lm_pyramid_khufu",
    "nameAr": "هرم خوفو الأكبر - هضبة الجيزة",
    "nameEn": "The Great Pyramid of Giza (Khufu)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "giza",
    "lat": 29.9792,
    "lng": 31.1342,
    "aliases": [
      "الهرم الأكبر",
      "Khufu Pyramid",
      "هرم خوفو"
    ]
  },
  {
    "id": "lm_pyramid_khafre",
    "nameAr": "هرم خفرع - هضبة الجيزة",
    "nameEn": "Pyramid of Khafre - Giza Plateau",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "giza",
    "lat": 29.9761,
    "lng": 31.1308,
    "aliases": [
      "هرم خفرع",
      "Khafre Pyramid"
    ]
  },
  {
    "id": "lm_pyramid_menkaure",
    "nameAr": "هرم منكاورع - هضبة الجيزة",
    "nameEn": "Pyramid of Menkaure - Giza Plateau",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "giza",
    "lat": 29.9725,
    "lng": 31.1283,
    "aliases": [
      "هرم منقرع",
      "Menkaure Pyramid"
    ]
  },
  {
    "id": "lm_sphinx",
    "nameAr": "تمثال أبو الهول - هضبة الجيزة",
    "nameEn": "Great Sphinx of Giza",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "giza",
    "lat": 29.9753,
    "lng": 31.1376,
    "aliases": [
      "أبو الهول",
      "Sphinx",
      "ابو الهول"
    ]
  },
  {
    "id": "lm_solar_boat",
    "nameAr": "متحف مركب خوفو الشمسي - الجيزة",
    "nameEn": "Solar Boat Museum - Giza",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "giza",
    "lat": 29.9785,
    "lng": 31.1355,
    "aliases": [
      "مركب الشمس"
    ]
  },
  {
    "id": "lm_gem",
    "nameAr": "المتحف المصري الكبير (GEM) - ميدان الرماية",
    "nameEn": "Grand Egyptian Museum (GEM)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 29.9953,
    "lng": 31.1195,
    "aliases": [
      "GEM",
      "المتحف الكبير",
      "Grand Egyptian Museum"
    ]
  },
  {
    "id": "lm_nmec",
    "nameAr": "المتحف القومي للحضارة المصرية (NMEC) - الفسطاط",
    "nameEn": "National Museum of Egyptian Civilization (NMEC)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0078,
    "lng": 31.2486,
    "aliases": [
      "NMEC",
      "متحف الحضارة",
      "متحف المومياوات"
    ]
  },
  {
    "id": "lm_egyptian_museum_tahrir",
    "nameAr": "المتحف المصري بميدان التحرير",
    "nameEn": "The Egyptian Museum in Tahrir",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sadat",
    "lat": 30.0478,
    "lng": 31.2336,
    "aliases": [
      "متحف التحرير",
      "Egyptian Museum Tahrir"
    ]
  },
  {
    "id": "lm_cairo_tower",
    "nameAr": "برج القاهرة - الجزيرة الزمالك",
    "nameEn": "Cairo Tower (Burj El-Qahira)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "opera",
    "lat": 30.0459,
    "lng": 31.2243,
    "aliases": [
      "برج القاهرة",
      "Cairo Tower"
    ]
  },
  {
    "id": "lm_saladin_citadel",
    "nameAr": "قلعة صلاح الدين الأيوبي - جبل المقطم",
    "nameEn": "Saladin Citadel of Cairo",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0299,
    "lng": 31.2612,
    "aliases": [
      "قلعة صلاح الدين",
      "Citadel of Cairo"
    ]
  },
  {
    "id": "lm_mohamed_ali_mosque",
    "nameAr": "مسجد محمد علي باشا (جامع القلعة)",
    "nameEn": "Mosque of Muhammad Ali - Citadel",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0287,
    "lng": 31.2599,
    "aliases": [
      "جامع محمد علي",
      "Alabaster Mosque"
    ]
  },
  {
    "id": "lm_al_nasser_mohamed_mosque",
    "nameAr": "مسجد الناصر محمد بن قلاوون بالقلعة",
    "nameEn": "Al-Nasir Muhammad Mosque - Citadel",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0295,
    "lng": 31.2608,
    "aliases": [
      "جامع الناصر قلاوون"
    ]
  },
  {
    "id": "lm_sultan_hassan_mosque",
    "nameAr": "مسجد ومدرسة السلطان حسن - ميدان القلعة",
    "nameEn": "Mosque-Madrasa of Sultan Hassan",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0322,
    "lng": 31.2575,
    "aliases": [
      "السلطان حسن",
      "جامع السلطان حسن"
    ]
  },
  {
    "id": "lm_rifai_mosque",
    "nameAr": "مسجد الرفاعي (مدفن ملوك مصر وشاه إيران) - القلعة",
    "nameEn": "Al-Rifa'i Mosque - Citadel",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0324,
    "lng": 31.2583,
    "aliases": [
      "جامع الرفاعي"
    ]
  },
  {
    "id": "lm_ibn_tulun_mosque",
    "nameAr": "مسجد أحمد بن طولون - السيدة زينب",
    "nameEn": "Mosque of Ibn Tulun",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0287,
    "lng": 31.2494,
    "aliases": [
      "ابن طولون",
      "Ibn Tulun Mosque"
    ]
  },
  {
    "id": "lm_gayer_anderson",
    "nameAr": "متحف بيت الكريتلية (جاير أندرسون) - السيدة زينب",
    "nameEn": "Gayer-Anderson Museum (Beit El-Kretlea)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0285,
    "lng": 31.2498,
    "aliases": [
      "جاير أندرسون",
      "بيت الكريتلية"
    ]
  },
  {
    "id": "lm_hanging_church",
    "nameAr": "الكنيسة المعلقة (السيدة العذراء) - مجمع الأديان مصر القديمة",
    "nameEn": "The Hanging Church (Al-Muallaqa)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0053,
    "lng": 31.2301,
    "aliases": [
      "الكنيسة المعلقة",
      "Hanging Church"
    ]
  },
  {
    "id": "lm_church_abu_serga",
    "nameAr": "كنيسة أبي سرجة (مغارة العائلة المقدسة) - مصر القديمة",
    "nameEn": "Church of St. Sergius and Bacchus (Abu Serga)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0058,
    "lng": 31.2308,
    "aliases": [
      "أبي سرجة",
      "مغارة العائلة المقدسة"
    ]
  },
  {
    "id": "lm_church_st_george",
    "nameAr": "كنيسة ودير القديس مار جرجس للروم الأرثوذكس - مصر القديمة",
    "nameEn": "Church of St. George (Greek Orthodox)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0065,
    "lng": 31.2305,
    "aliases": [
      "كنيسة مار جرجس الروم"
    ]
  },
  {
    "id": "lm_coptic_museum",
    "nameAr": "المتحف القبطي - مجمع الأديان بمصر القديمة",
    "nameEn": "The Coptic Museum - Coptic Cairo",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0061,
    "lng": 31.2302,
    "aliases": [
      "المتحف القبطي"
    ]
  },
  {
    "id": "lm_ben_ezra_synagogue",
    "nameAr": "معبد بن عزرا اليهودي - مصر القديمة",
    "nameEn": "Ben Ezra Synagogue - Coptic Cairo",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0055,
    "lng": 31.2312,
    "aliases": [
      "معبد بن عزرا"
    ]
  },
  {
    "id": "lm_babylon_fortress",
    "nameAr": "حصن بابليون الروماني التاريخي - مصر القديمة",
    "nameEn": "Babylon Fortress - Old Cairo",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0059,
    "lng": 31.2303,
    "aliases": [
      "حصن بابليون"
    ]
  },
  {
    "id": "lm_amr_ibn_alas_mosque",
    "nameAr": "جامع عمرو بن العاص (تاج الجوامع) - الفسطاط",
    "nameEn": "Amr Ibn Al-Aas Mosque - Fustat",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0105,
    "lng": 31.2335,
    "aliases": [
      "جامع عمرو بن العاص",
      "عمرو بن العاص"
    ]
  },
  {
    "id": "lm_al_azhar_mosque",
    "nameAr": "الجامع الأزهر الشريف - القاهرة التاريخية",
    "nameEn": "Al-Azhar Historic Mosque",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0457,
    "lng": 31.2627,
    "aliases": [
      "الجامع الأزهر",
      "جامع الازهر"
    ]
  },
  {
    "id": "lm_al_hussein_mosque",
    "nameAr": "مسجد الإمام الحسين - المشهد الحسيني",
    "nameEn": "Al-Hussein Mosque - Khan El-Khalili",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0483,
    "lng": 31.2638,
    "aliases": [
      "جامع الحسين",
      "مسجد الحسين"
    ]
  },
  {
    "id": "lm_moez_street",
    "nameAr": "شارع المعز لدين الله الفاطمي - أكبر متحف مفتوح للآثار الإسلامية",
    "nameEn": "Al-Moez Lidinillah Al-Fatimi Street",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0525,
    "lng": 31.2612,
    "aliases": [
      "شارع المعز",
      "Al Moez Street"
    ]
  },
  {
    "id": "lm_bab_el_fotouh",
    "nameAr": "باب الفتوح - أسوار القاهرة الفاطمية",
    "nameEn": "Bab El-Fotouh Historic Gate",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0545,
    "lng": 31.2632,
    "aliases": [
      "باب الفتوح"
    ]
  },
  {
    "id": "lm_bab_el_nasr",
    "nameAr": "باب النصر - أسوار القاهرة الفاطمية",
    "nameEn": "Bab El-Nasr Historic Gate",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0542,
    "lng": 31.2652,
    "aliases": [
      "باب النصر"
    ]
  },
  {
    "id": "lm_bab_zuweila",
    "nameAr": "باب زويلة (بوابة المتولي) - الدرب الأحمر",
    "nameEn": "Bab Zuweila (Al-Mitwalli Gate)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0428,
    "lng": 31.2595,
    "aliases": [
      "باب زويلة",
      "بوابة المتولي"
    ]
  },
  {
    "id": "lm_hakim_mosque",
    "nameAr": "جامع الحاكم بأمر الله - نهاية شارع المعز",
    "nameEn": "Al-Hakim Bi-Amr Allah Mosque",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0538,
    "lng": 31.2635,
    "aliases": [
      "جامع الحاكم بأمر الله"
    ]
  },
  {
    "id": "lm_aqmar_mosque",
    "nameAr": "مسجد الأقمر - شارع المعز",
    "nameEn": "Al-Aqmar Historic Mosque",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0518,
    "lng": 31.2615,
    "aliases": [
      "جامع الأقمر"
    ]
  },
  {
    "id": "lm_qalawun_complex",
    "nameAr": "مجمع ومارستان وقبة المنصور قلاوون - بين القصرين",
    "nameEn": "Qalawun Complex - Bein Al-Qasreen",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0498,
    "lng": 31.2608,
    "aliases": [
      "مجمع قلاوون",
      "بين القصرين"
    ]
  },
  {
    "id": "lm_barquq_madrasa",
    "nameAr": "مدرسة وخانقاه السلطان الظاهر برقوق - المعز",
    "nameEn": "Madrasa of Sultan Barquq - Al-Moez",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0505,
    "lng": 31.2611,
    "aliases": [
      "مدرسة برقوق"
    ]
  },
  {
    "id": "lm_beit_el_suhaymi",
    "nameAr": "بيت السحيمي التراثي - حارة الدرب الأصفر",
    "nameEn": "Beit El-Suhaymi Historic House",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0515,
    "lng": 31.2625,
    "aliases": [
      "بيت السحيمي"
    ]
  },
  {
    "id": "lm_beshtak_palace",
    "nameAr": "قصر الأمير بشتاك - شارع المعز",
    "nameEn": "Beshtak Palace - Al-Moez Street",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0508,
    "lng": 31.2615,
    "aliases": [
      "قصر بشتاك"
    ]
  },
  {
    "id": "lm_prince_taz_palace",
    "nameAr": "قصر الأمير طاز - السيوفية الخليفة",
    "nameEn": "Prince Taz Historic Palace",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0325,
    "lng": 31.2525,
    "aliases": [
      "قصر الأمير طاز"
    ]
  },
  {
    "id": "lm_sinnari_house",
    "nameAr": "بيت السناري التراثي - السيدة زينب",
    "nameEn": "Beit El-Sinnari Cultural Center",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0315,
    "lng": 31.2425,
    "aliases": [
      "بيت السناري"
    ]
  },
  {
    "id": "lm_museum_islamic_art",
    "nameAr": "متحف الفن الإسلامي - ميدان باب الخلق",
    "nameEn": "Museum of Islamic Art (MIA) - Bab El-Khalq",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0445,
    "lng": 31.2535,
    "aliases": [
      "متحف الفن الإسلامي",
      "MIA"
    ]
  },
  {
    "id": "lm_abdeen_palace",
    "nameAr": "متحف وقصر عابدين التاريخي - ميدان عابدين",
    "nameEn": "Abdeen Palace Museum",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0428,
    "lng": 31.2482,
    "aliases": [
      "قصر عابدين",
      "Abdeen Palace"
    ]
  },
  {
    "id": "lm_manial_palace",
    "nameAr": "متحف قصر المنيل للأمير محمد علي توفيق - جزيرة الروضة",
    "nameEn": "Manial Palace & Museum (Prince Mohamed Ali)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0275,
    "lng": 31.2295,
    "aliases": [
      "قصر المنيل",
      "Manial Palace"
    ]
  },
  {
    "id": "lm_baron_palace",
    "nameAr": "قصر البارون إمبان الأثري - مصر الجديدة",
    "nameEn": "Baron Empain Palace - Heliopolis",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "al_ahram",
    "lat": 30.0868,
    "lng": 31.3303,
    "aliases": [
      "قصر البارون",
      "Baron Palace"
    ]
  },
  {
    "id": "lm_nilometer_rhoda",
    "nameAr": "مقياس النيل الأثري بالروضة وقصر المانسترلي",
    "nameEn": "Nilometer of Rhoda Island & Manasterly Palace",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "malek_saleh",
    "lat": 30.0071,
    "lng": 31.2255,
    "aliases": [
      "مقياس النيل بالمنيل",
      "قصر المانسترلي"
    ]
  },
  {
    "id": "lm_sakakini_palace",
    "nameAr": "قصر السكاكيني باشا - حي الظاهر",
    "nameEn": "Sakakini Palace - El-Zaher",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "el_geish",
    "lat": 30.0665,
    "lng": 31.2705,
    "aliases": [
      "قصر السكاكيني"
    ]
  },
  {
    "id": "lm_aisha_fahmy_palace",
    "nameAr": "مجمع الفنون وقصر عائشة فهمي - الزمالك",
    "nameEn": "Aisha Fahmy Palace (Arts Center) - Zamalek",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0615,
    "lng": 31.2235,
    "aliases": [
      "قصر عائشة فهمي"
    ]
  },
  {
    "id": "lm_tahra_palace",
    "nameAr": "قصر الطاهرة التاريخي - الزيتون",
    "nameEn": "Al-Tahra Royal Palace - El-Zaytoun",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "saray_el_qobba",
    "lat": 30.0985,
    "lng": 31.3095,
    "aliases": [
      "قصر الطاهرة"
    ]
  },
  {
    "id": "lm_qobba_palace",
    "nameAr": "قصر القبة الرئاسي التاريخي",
    "nameEn": "Qobba Presidential Palace",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "saray_el_qobba",
    "lat": 30.0985,
    "lng": 31.3015,
    "aliases": [
      "قصر القبة"
    ]
  },
  {
    "id": "lm_ittihadiya_palace",
    "nameAr": "قصر الاتحادية الرئاسي - مصر الجديدة",
    "nameEn": "Al-Ittihadiya Presidential Palace - Heliopolis",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "al_ahram",
    "lat": 30.0895,
    "lng": 31.3215,
    "aliases": [
      "قصر الاتحادية"
    ]
  },
  {
    "id": "lm_cairo_opera",
    "nameAr": "دار الأوبرا المصرية - الجزيرة",
    "nameEn": "Cairo Opera House - Gezira",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "opera",
    "lat": 30.0425,
    "lng": 31.2245,
    "aliases": [
      "الأوبرا المصرية",
      "دار الأوبرا"
    ]
  },
  {
    "id": "lm_mokhtar_museum",
    "nameAr": "متحف النحات محمود مختار - الجزيرة",
    "nameEn": "Mahmoud Mokhtar Museum - Gezira",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "opera",
    "lat": 30.0415,
    "lng": 31.2225,
    "aliases": [
      "متحف محمود مختار"
    ]
  },
  {
    "id": "lm_modern_art_museum",
    "nameAr": "متحف الفن المصري الحديث - أرض الأوبرا",
    "nameEn": "Museum of Modern Egyptian Art - Opera",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "opera",
    "lat": 30.0435,
    "lng": 31.2235,
    "aliases": [
      "متحف الفن الحديث"
    ]
  },
  {
    "id": "lm_mahmoud_khalil_museum",
    "nameAr": "متحف محمد محمود خليل وحرمه - الدقي",
    "nameEn": "Mohamed Mahmoud Khalil Museum - Dokki",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "dokki",
    "lat": 30.0365,
    "lng": 31.2185,
    "aliases": [
      "متحف محمود خليل"
    ]
  },
  {
    "id": "lm_umm_kulthum_museum",
    "nameAr": "متحف كوكب الشرق أم كلثوم - قصر المانسترلي المنيل",
    "nameEn": "Umm Kulthum Museum - Rhoda Island",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "malek_saleh",
    "lat": 30.0075,
    "lng": 31.2252,
    "aliases": [
      "متحف أم كلثوم"
    ]
  },
  {
    "id": "lm_naguib_mahfouz_museum",
    "nameAr": "متحف ومركز إبداع نجيب محفوظ - تكية أبو الدهب الأزهر",
    "nameEn": "Naguib Mahfouz Museum - Al-Azhar",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0465,
    "lng": 31.2635,
    "aliases": [
      "متحف نجيب محفوظ"
    ]
  },
  {
    "id": "lm_taha_hussein_museum",
    "nameAr": "متحف طه حسين (متحف رامتان) - الهرم",
    "nameEn": "Taha Hussein Museum (Ramatan) - Haram",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "faisal",
    "lat": 30.0045,
    "lng": 31.1715,
    "aliases": [
      "متحف طه حسين",
      "رامتان"
    ]
  },
  {
    "id": "lm_ahmed_shawki_museum",
    "nameAr": "متحف أمير الشعراء أحمد شوقي (كرمة ابن هانئ) - كورنيش النيل الجيزة",
    "nameEn": "Ahmed Shawki Museum (Karmat Ibn Hani)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "opera",
    "lat": 30.0315,
    "lng": 31.2195,
    "aliases": [
      "متحف أحمد شوقي",
      "كرمة ابن هانئ"
    ]
  },
  {
    "id": "lm_railway_museum",
    "nameAr": "متحف السكك الحديدية المصري - محطة مصر رمسيس",
    "nameEn": "Egyptian Railway Museum - Ramses Station",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0635,
    "lng": 31.2495,
    "aliases": [
      "متحف السكة الحديد"
    ]
  },
  {
    "id": "lm_postal_museum",
    "nameAr": "متحف البريد المصري التاريخي - ميدان العتبة",
    "nameEn": "Egyptian Postal Museum - Attaba Square",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "attaba",
    "lat": 30.0525,
    "lng": 31.2475,
    "aliases": [
      "متحف البريد"
    ]
  },
  {
    "id": "lm_royal_carriages_museum",
    "nameAr": "متحف المركبات الملكية - بولاق أبو العلا",
    "nameEn": "Royal Carriages Museum - Bulaq",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "maspero",
    "lat": 30.0575,
    "lng": 31.2335,
    "aliases": [
      "متحف المركبات الملكية"
    ]
  },
  {
    "id": "lm_ceramic_museum",
    "nameAr": "متحف الخزف الإسلامي - قصر الأمير عمرو إبراهيم بالزمالك",
    "nameEn": "Museum of Islamic Ceramics - Zamalek",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0595,
    "lng": 31.2215,
    "aliases": [
      "متحف الخزف الإسلامي"
    ]
  },
  {
    "id": "lm_geological_museum",
    "nameAr": "متحف المساحة والجيولوجيا المصري - كورنيش المعادي",
    "nameEn": "Egyptian Geological Museum - Maadi",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "el_zahraa",
    "lat": 29.9885,
    "lng": 31.2315,
    "aliases": [
      "المتحف الجيولوجي"
    ]
  },
  {
    "id": "lm_agricultural_museum",
    "nameAr": "المتحف الزراعي المصري - الدقي",
    "nameEn": "Egyptian Agricultural Museum - Dokki",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "dokki",
    "lat": 30.0475,
    "lng": 31.2065,
    "aliases": [
      "المتحف الزراعي"
    ]
  },
  {
    "id": "lm_police_museum_citadel",
    "nameAr": "متحف الشرطة القومي - قلعة صلاح الدين",
    "nameEn": "National Police Museum - Citadel",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0305,
    "lng": 31.2618,
    "aliases": [
      "متحف الشرطة بالقلعة"
    ]
  },
  {
    "id": "lm_military_museum_citadel",
    "nameAr": "المتحف الحربي القومي - قلعة صلاح الدين",
    "nameEn": "National Military Museum - Citadel",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0292,
    "lng": 31.2625,
    "aliases": [
      "المتحف الحربي"
    ]
  },
  {
    "id": "lm_saqqara_djoser",
    "nameAr": "هرم زوسر المدرج ومقابر سقارة الأثرية",
    "nameEn": "Step Pyramid of Djoser & Saqqara Necropolis",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "el_mounib",
    "lat": 29.8715,
    "lng": 31.2165,
    "aliases": [
      "هرم زوسر",
      "هرم سقارة المدرج",
      "سقارة"
    ]
  },
  {
    "id": "lm_serapeum_saqqara",
    "nameAr": "السرابيوم ومدافن العجول أبيس - سقارة",
    "nameEn": "Serapeum of Saqqara",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "el_mounib",
    "lat": 29.8745,
    "lng": 31.2135,
    "aliases": [
      "السرابيوم"
    ]
  },
  {
    "id": "lm_dahshur_bent_pyramid",
    "nameAr": "الهرم المنحني لسنفرو - دهشور",
    "nameEn": "The Bent Pyramid of Sneferu - Dahshur",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "el_mounib",
    "lat": 29.7905,
    "lng": 31.2095,
    "aliases": [
      "الهرم المنحني",
      "دهشور"
    ]
  },
  {
    "id": "lm_dahshur_red_pyramid",
    "nameAr": "الهرم الأحمر (الهرم الشمالي) لسنفرو - دهشور",
    "nameEn": "The Red Pyramid of Sneferu - Dahshur",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "el_mounib",
    "lat": 29.8085,
    "lng": 31.2065,
    "aliases": [
      "الهرم الأحمر"
    ]
  },
  {
    "id": "lm_mit_rahina_memphis",
    "nameAr": "متحف ميت رهينة المفتوح وعاصمة مصر القديمة (منف)",
    "nameEn": "Mit Rahina Open Air Museum (Ancient Memphis)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "el_mounib",
    "lat": 29.8495,
    "lng": 31.2545,
    "aliases": [
      "ميت رهينة",
      "ممفيس",
      "تمثال رمسيس ميت رهينة"
    ]
  },
  {
    "id": "lm_pharaonic_village",
    "nameAr": "القرية الفرعونية السياحية - جزيرة يعقوب ساقية مكي",
    "nameEn": "The Pharaonic Village - Giza",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "saqyet_mekky",
    "lat": 29.9965,
    "lng": 31.2195,
    "aliases": [
      "القرية الفرعونية",
      "Pharaonic Village"
    ]
  },
  {
    "id": "lm_sayyeda_zeinab_mosque",
    "nameAr": "مسجد ومقام السيدة زينب (أم العواجز)",
    "nameEn": "Sayyeda Zeinab Mosque & Shrine",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0305,
    "lng": 31.2385,
    "aliases": [
      "مسجد السيدة زينب",
      "جامع السيدة"
    ]
  },
  {
    "id": "lm_sayyeda_nafisa_mosque",
    "nameAr": "مسجد ومقام السيدة نفيسة (نفيسة العلم)",
    "nameEn": "Sayyeda Nafisa Mosque & Shrine",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0215,
    "lng": 31.2515,
    "aliases": [
      "السيدة نفيسة",
      "جامع السيدة نفيسة"
    ]
  },
  {
    "id": "lm_sayyeda_aisha_mosque",
    "nameAr": "مسجد ومقام السيدة عائشة - ميدان القلعة",
    "nameEn": "Sayyeda Aisha Mosque - Citadel",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0255,
    "lng": 31.2565,
    "aliases": [
      "السيدة عائشة",
      "جامع السيدة عائشة"
    ]
  },
  {
    "id": "lm_st_mark_cathedral_abbassiya",
    "nameAr": "الكاتدرائية المرقسية الكبرى بالعباسية - المقر البابوي",
    "nameEn": "St. Mark's Coptic Orthodox Cathedral - Abbassiya",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "abbassiya",
    "lat": 30.0715,
    "lng": 31.2755,
    "aliases": [
      "الكاتدرائية المرقسية بالعباسية",
      "المقر البابوي"
    ]
  },
  {
    "id": "lm_virgin_mary_zeitoun",
    "nameAr": "كنيسة السيدة العذراء مريم بالزيتون (موقع التجلي)",
    "nameEn": "Virgin Mary Church - Zeitoun (Apparition Site)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "helmeyat_el_zaytoun",
    "lat": 30.1035,
    "lng": 31.3125,
    "aliases": [
      "عذراء الزيتون",
      "كنيسة الزيتون"
    ]
  },
  {
    "id": "lm_virgin_mary_maadi",
    "nameAr": "كنيسة السيدة العذراء بالمعادي (شاطئ النيل ومسار العائلة المقدسة)",
    "nameEn": "Virgin Mary Church - Maadi Nile Corniche",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2465,
    "aliases": [
      "عذراء المعادي"
    ]
  },
  {
    "id": "lm_cave_church_mokattam",
    "nameAr": "دير القديس سمعان الخراز (كنيسة الكهف) - جبل المقطم",
    "nameEn": "Monastery of St. Simon the Tanner (Cave Church)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0315,
    "lng": 31.2785,
    "aliases": [
      "كنيسة الكهف",
      "دير سمعان الخراز"
    ]
  },
  {
    "id": "lm_basilica_heliopolis",
    "nameAr": "كنيسة البازيليك (مدفن البارون إمبان) - مصر الجديدة",
    "nameEn": "Basilica of Notre Dame - Heliopolis",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "al_ahram",
    "lat": 30.0905,
    "lng": 31.3285,
    "aliases": [
      "البازيليك",
      "كنيسة البازيليك"
    ]
  },
  {
    "id": "lm_st_mark_church_heliopolis",
    "nameAr": "كنيسة مار مرقس القبطية - كليوباترا مصر الجديدة",
    "nameEn": "St. Mark's Church - Cleopatra Heliopolis",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0915,
    "lng": 31.3325,
    "aliases": [
      "كنيسة كليوباترا"
    ]
  },
  {
    "id": "lm_grand_mosque_egypt",
    "nameAr": "مسجد مصر الكبير (مركز مصر الثقافي الإسلامي) - العاصمة الإدارية",
    "nameEn": "Grand Mosque of Egypt - New Administrative Capital",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "city_of_arts",
    "lat": 30.0095,
    "lng": 31.7455,
    "aliases": [
      "مسجد مصر الكبير",
      "مركز مصر الإسلامي"
    ]
  },
  {
    "id": "lm_nativity_cathedral",
    "nameAr": "كاتدرائية ميلاد المسيح الكبرى - العاصمة الإدارية",
    "nameEn": "Nativity of Christ Cathedral - New Capital",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "city_of_arts",
    "lat": 30.0145,
    "lng": 31.7515,
    "aliases": [
      "كاتدرائية ميلاد المسيح"
    ]
  },
  {
    "id": "lm_fattah_aleem_mosque",
    "nameAr": "مسجد الفتاح العليم - مدخل العاصمة الإدارية الجديدة",
    "nameEn": "Al-Fattah Al-Aleem Mosque - New Capital",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "city_of_arts",
    "lat": 30.0125,
    "lng": 31.6785,
    "aliases": [
      "الفتاح العليم"
    ]
  },
  {
    "id": "lm_moshir_tantawi_mosque",
    "nameAr": "مسجد المشير طنطاوي - التجمع الخامس محور المشير",
    "nameEn": "Al-Moshir Tantawi Mosque - New Cairo",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "monorail_moshir",
    "lat": 30.0245,
    "lng": 31.3855,
    "aliases": [
      "مسجد المشير",
      "مسجد المشير طنطاوي"
    ]
  },
  {
    "id": "lm_mostafa_mahmoud_mosque",
    "nameAr": "مسجد الدكتور مصطفى محمود والجمعية الفلكية - المهندسين",
    "nameEn": "Dr. Mostafa Mahmoud Mosque - Mohandessin",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0525,
    "lng": 31.2025,
    "aliases": [
      "مسجد مصطفى محمود"
    ]
  },
  {
    "id": "lm_rabaa_mosque",
    "nameAr": "مسجد الشهيد هشام بركات (رابعة العدوية سابقاً) - مدينة نصر",
    "nameEn": "Hesham Barakat Mosque (Ex-Rabaa) - Nasr City",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "stadium",
    "lat": 30.0665,
    "lng": 31.3255,
    "aliases": [
      "مسجد رابعة",
      "رابعة العدوية"
    ]
  },
  {
    "id": "lm_fath_mosque_ramses",
    "nameAr": "مسجد الفتح التاريخي - ميدان رمسيس",
    "nameEn": "Al-Fateh Mosque - Ramses Square",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0615,
    "lng": 31.2485,
    "aliases": [
      "جامع الفتح رمسيس"
    ]
  },
  {
    "id": "lm_nour_mosque_abbassiya",
    "nameAr": "مسجد النور - ميدان العباسية",
    "nameEn": "Al-Nour Historic Mosque - Abbassiya",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "abbassiya",
    "lat": 30.0705,
    "lng": 31.2805,
    "aliases": [
      "مسجد النور بالعباسية"
    ]
  },
  {
    "id": "lm_azhar_park",
    "nameAr": "حديقة الأزهر البانورامية - طريق صلاح سالم والدراسة",
    "nameEn": "Al-Azhar Park - Salah Salem",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0405,
    "lng": 31.2645,
    "aliases": [
      "حديقة الأزهر",
      "Azhar Park"
    ]
  },
  {
    "id": "lm_orman_garden",
    "nameAr": "حديقة الأورمان النباتية التراثية - الجيزة أمام جامعة القاهرة",
    "nameEn": "Orman Botanical Garden - Giza",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "cairo_university",
    "lat": 30.0295,
    "lng": 31.2135,
    "aliases": [
      "حديقة الأورمان"
    ]
  },
  {
    "id": "lm_giza_zoo",
    "nameAr": "حديقة الحيوان بالجيزة - أقدم حديقة حيوان بأفريقيا",
    "nameEn": "Giza Zoological Garden",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "cairo_university",
    "lat": 30.0255,
    "lng": 31.2135,
    "aliases": [
      "حديقة الحيوان بالجيزة",
      "جنينة الحيوانات"
    ]
  },
  {
    "id": "lm_aquarium_grotto",
    "nameAr": "حديقة الأسماك الأثرية (حديقة الجبلاية) - الزمالك",
    "nameEn": "Aquarium Grotto Garden - Zamalek",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0565,
    "lng": 31.2195,
    "aliases": [
      "حديقة الأسماك",
      "الجبلاية بالزمالك"
    ]
  },
  {
    "id": "lm_horreya_garden",
    "nameAr": "حديقة الحرية وتماثيل الأدباء والمفكرين - الجزيرة",
    "nameEn": "Al-Horreya Garden - Gezira",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "opera",
    "lat": 30.0435,
    "lng": 31.2265,
    "aliases": [
      "حديقة الحرية"
    ]
  },
  {
    "id": "lm_andalus_garden",
    "nameAr": "حديقة الأندلس التراثية على النيل - الجزيرة",
    "nameEn": "Al-Andalus Historic Garden - Gezira",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "opera",
    "lat": 30.0445,
    "lng": 31.2285,
    "aliases": [
      "حديقة الأندلس"
    ]
  },
  {
    "id": "lm_family_park",
    "nameAr": "حديقة الأسرة الترفيهية (فاميلي بارك) - طريق السويس التجمع",
    "nameEn": "Family Park - New Cairo (Suez Road)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "brt_13_suez_road",
    "lat": 30.0915,
    "lng": 31.5215,
    "aliases": [
      "فاميلي بارك",
      "حديقة الأسرة"
    ]
  },
  {
    "id": "lm_international_park",
    "nameAr": "الحديقة الدولية - مدينة نصر الحي السابع",
    "nameEn": "International Park - Nasr City",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "fair_zone",
    "lat": 30.0485,
    "lng": 31.3415,
    "aliases": [
      "الحديقة الدولية"
    ]
  },
  {
    "id": "lm_child_park_nasrcity",
    "nameAr": "حديقة الطفل - مدينة نصر شارع مكرم عبيد",
    "nameEn": "Child Park - Nasr City (Makram Ebeid)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "fair_zone",
    "lat": 30.0615,
    "lng": 31.3425,
    "aliases": [
      "حديقة الطفل مدينة نصر"
    ]
  },
  {
    "id": "lm_merryland_park",
    "nameAr": "حديقة الميريلاند التراثية والبحيرة المائية - مصر الجديدة",
    "nameEn": "Merryland Park & Lake - Heliopolis",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "haroun",
    "lat": 30.0955,
    "lng": 31.3215,
    "aliases": [
      "حديقة الميريلاند",
      "الميريلاند"
    ]
  },
  {
    "id": "lm_fustat_park",
    "nameAr": "حديقة تلال الفسطاط الكبرى ومجمع الحرف التراثية",
    "nameEn": "Fustat Hills Grand Park & Pottery Village",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0065,
    "lng": 31.2425,
    "aliases": [
      "تلال الفسطاط",
      "حديقة الفسطاط"
    ]
  },
  {
    "id": "lm_japanese_garden_helwan",
    "nameAr": "الحديقة اليابانية التراثية وتماثيل بوذا - حلوان",
    "nameEn": "Japanese Garden - Helwan",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "helwan",
    "lat": 29.8485,
    "lng": 31.3355,
    "aliases": [
      "الحديقة اليابانية بحلوان"
    ]
  },
  {
    "id": "lm_wax_museum_helwan",
    "nameAr": "متحف الشمع التاريخي بحلوان",
    "nameEn": "Wax Museum - Helwan",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "ain_helwan",
    "lat": 29.8545,
    "lng": 31.3275,
    "aliases": [
      "متحف الشمع حلوان"
    ]
  },
  {
    "id": "lm_helwan_sulfur_springs",
    "nameAr": "حمامات كابريتاج حلوان الكبريتية وعيون حلوان الشافية",
    "nameEn": "Helwan Sulfur Springs & Capritage Resort",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "ain_helwan",
    "lat": 29.8515,
    "lng": 31.3285,
    "aliases": [
      "كابريتاج حلوان",
      "عيون حلوان"
    ]
  },
  {
    "id": "lm_mamsha_ahl_misr",
    "nameAr": "ممشى أهل مصر السياحي والترفيهي على كورنيش النيل",
    "nameEn": "Mamsha Ahl Misr Nile Promenade",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "maspero",
    "lat": 30.0585,
    "lng": 31.2295,
    "aliases": [
      "ممشى أهل مصر"
    ]
  },
  {
    "id": "lm_gezira_promenade",
    "nameAr": "كورنيش وممشى جزيرة الزمالك النيلي",
    "nameEn": "Zamalek Nile Promenade",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0645,
    "lng": 31.2245,
    "aliases": [
      "ممشى الزمالك"
    ]
  },
  {
    "id": "lm_zed_park_zayed",
    "nameAr": "زد بارك (ZED Park) الترفيهية ومهرجان الشتاء - الشيخ زايد",
    "nameEn": "ZED Park - Sheikh Zayed",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0285,
    "lng": 30.9885,
    "aliases": [
      "زد بارك",
      "ZED Park"
    ]
  },
  {
    "id": "lm_dream_park",
    "nameAr": "دريم بارك - أكبر مدينة ملاهي في مصر (6 أكتوبر)",
    "nameEn": "Dream Park Theme Park - 6th of October",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9645,
    "lng": 31.0545,
    "aliases": [
      "دريم بارك",
      "Dream Park"
    ]
  },
  {
    "id": "lm_magic_land",
    "nameAr": "ماجيك لاند - مدينة الإنتاج الإعلامي 6 أكتوبر",
    "nameEn": "Magic Land - Media Production City 6th Oct",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9585,
    "lng": 30.9815,
    "aliases": [
      "ماجيك لاند"
    ]
  },
  {
    "id": "lm_crazy_water",
    "nameAr": "ملاهي كريزي ووتر المائية - مدخل الشيخ زايد",
    "nameEn": "Crazy Water Aqua Park - Sheikh Zayed",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0385,
    "lng": 31.0285,
    "aliases": [
      "كريزي ووتر"
    ]
  },
  {
    "id": "lm_aqua_park",
    "nameAr": "أكوا بارك الترفيهية المائية - طريق مصر إسماعيلية",
    "nameEn": "Aqua Park - Cairo Ismailia Desert Road",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "adly_mansour",
    "lat": 30.1985,
    "lng": 31.5425,
    "aliases": [
      "أكوا بارك"
    ]
  },
  {
    "id": "lm_green_river_capital",
    "nameAr": "النهر الأخضر والحديقة المركزية الكبرى - العاصمة الإدارية",
    "nameEn": "The Green River Central Park - New Capital",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "city_of_arts",
    "lat": 30.0115,
    "lng": 31.7315,
    "aliases": [
      "النهر الأخضر بالعاصمة",
      "الحديقة المركزية"
    ]
  },
  {
    "id": "lm_city_of_arts_capital",
    "nameAr": "مدينة الفنون والثقافة ودار الأوبرا الجديدة - العاصمة الإدارية",
    "nameEn": "City of Arts & Culture - New Capital",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "city_of_arts",
    "lat": 30.0155,
    "lng": 31.7385,
    "aliases": [
      "مدينة الفنون والثقافة",
      "أوبرا العاصمة"
    ]
  },
  {
    "id": "lm_bab_el_khalq_square",
    "nameAr": "ميدان باب الخلق التاريخي ومتحف الشرطة والكتبخانه",
    "nameEn": "Bab El-Khalq Historic Square",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0442,
    "lng": 31.2538,
    "aliases": [
      "باب الخلق"
    ]
  },
  {
    "id": "lm_dar_el_kotob",
    "nameAr": "دار الكتب والوثائق القومية - رملة بولاق كورنيش النيل",
    "nameEn": "National Library and Archives of Egypt (Dar El-Kotob)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "maspero",
    "lat": 30.0615,
    "lng": 31.2315,
    "aliases": [
      "دار الكتب والوثائق القومية",
      "دار الكتب"
    ]
  },
  {
    "id": "lm_dar_el_kotob_bab_elkhalq",
    "nameAr": "دار الكتب المصرية التاريخية - باب الخلق",
    "nameEn": "Historic National Library - Bab El-Khalq",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0438,
    "lng": 31.2542,
    "aliases": [
      "دار الكتب باب الخلق"
    ]
  },
  {
    "id": "lm_cairo_geniza_site",
    "nameAr": "موقع جنيزة القاهرة التاريخية - معبد بن عزرا",
    "nameEn": "Cairo Genizah Historic Site - Old Cairo",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0055,
    "lng": 31.2312,
    "aliases": [
      "جنيزة القاهرة"
    ]
  },
  {
    "id": "lm_monastery_st_george",
    "nameAr": "دير القديس جاورجيوس الأثري - مصر القديمة",
    "nameEn": "Monastery of St. George - Old Cairo",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0068,
    "lng": 31.2309,
    "aliases": [
      "دير مار جرجس"
    ]
  },
  {
    "id": "lm_monastery_st_mercurius",
    "nameAr": "دير الشهيد العظيم أبي سيفين - مصر القديمة",
    "nameEn": "Monastery of St. Mercurius (Abu Seifein)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0115,
    "lng": 31.2295,
    "aliases": [
      "دير أبو سيفين"
    ]
  },
  {
    "id": "lm_church_barbara",
    "nameAr": "كنيسة القديسة بربارة الأثرية - مصر القديمة",
    "nameEn": "Church of St. Barbara - Coptic Cairo",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0051,
    "lng": 31.2315,
    "aliases": [
      "كنيسة القديسة بربارة"
    ]
  },
  {
    "id": "lm_church_mari_mina_fom_elkhalig",
    "nameAr": "كنيسة مار مينا العجائبي الأثرية - فم الخليج",
    "nameEn": "Church of St. Mina - Fom El-Khalig",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "malek_saleh",
    "lat": 30.0215,
    "lng": 31.2345,
    "aliases": [
      "مار مينا فم الخليج"
    ]
  },
  {
    "id": "lm_church_eladra_haret_zoweila",
    "nameAr": "كنيسة العذراء مريم المغيثة بحارة زويلة (أقدم كنائس الفاطمية)",
    "nameEn": "Virgin Mary Church - Haret Zuweila",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0495,
    "lng": 31.2585,
    "aliases": [
      "عذراء حارة زويلة"
    ]
  },
  {
    "id": "lm_church_eladra_haret_elroum",
    "nameAr": "كنيسة السيدة العذراء بحارة الروم - الغورية",
    "nameEn": "Virgin Mary Church - Haret El-Roum",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0455,
    "lng": 31.2575,
    "aliases": [
      "عذراء حارة الروم"
    ]
  },
  {
    "id": "lm_masjid_alazhar_library",
    "nameAr": "مكتبة الأزهر الشريف ومخطوطات التراث",
    "nameEn": "Al-Azhar Grand Library & Manuscripts",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0461,
    "lng": 31.2631,
    "aliases": [
      "مكتبة الأزهر"
    ]
  },
  {
    "id": "lm_sultan_alghuri_complex",
    "nameAr": "مجموعة ومجمع السلطان قنصوة الغوري - الغورية",
    "nameEn": "Sultan Al-Ghuri Historic Complex",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0455,
    "lng": 31.2605,
    "aliases": [
      "وكالة الغوري",
      "مجموعة الغوري",
      "قبة الغوري"
    ]
  },
  {
    "id": "lm_wekalet_alghuri",
    "nameAr": "مركز إبداع وكالة الغوري للتراث وفنون التنورة",
    "nameEn": "Wekalet El-Ghouri Tanoura Arts Center",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0458,
    "lng": 31.2608,
    "aliases": [
      "وكالة الغوري للتنورة"
    ]
  },
  {
    "id": "lm_wekalet_bazaraa",
    "nameAr": "وكالة بازرعة الأثرية لتجارة الأخشاب والبهارات - الجمالية",
    "nameEn": "Wekalet Bazaraa Historic Caravanserai",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0515,
    "lng": 31.2635,
    "aliases": [
      "وكالة بازرعة"
    ]
  },
  {
    "id": "lm_hammam_inshousi",
    "nameAr": "حمام إينال والمسافر خانة الأثري - الجمالية",
    "nameEn": "Inal Historic Bathhouse - Gamaleya",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0505,
    "lng": 31.2625,
    "aliases": [
      "حمام إينال"
    ]
  },
  {
    "id": "lm_sebil_katkhuda",
    "nameAr": "سبيل وكتاب عبد الرحمن كتخدا - تقاطع المعز والدرب الأصفر",
    "nameEn": "Sabil-Kuttab of Abd al-Rahman Katkhuda",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0511,
    "lng": 31.2618,
    "aliases": [
      "سبيل كتخدا"
    ]
  },
  {
    "id": "lm_sebil_om_abbas",
    "nameAr": "سبيل أم عباس الأثري - الصليبية السيدة زينب",
    "nameEn": "Sabil Umm Abbas - Saliba Street",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0305,
    "lng": 31.2525,
    "aliases": [
      "سبيل أم عباس"
    ]
  },
  {
    "id": "lm_khanqah_baybars_gashankir",
    "nameAr": "خانقاه بيبرس الجاشنكير - الجمالية",
    "nameEn": "Khanqah of Baybars al-Jashankir",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0528,
    "lng": 31.2638,
    "aliases": [
      "خانقاه بيبرس"
    ]
  },
  {
    "id": "lm_madrasa_sarghatmish",
    "nameAr": "مسجد ومدرسة الأمير صرغتمش - بجوار جامع ابن طولون",
    "nameEn": "Sarghatmish Mosque & Madrasa - Saliba",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0295,
    "lng": 31.2505,
    "aliases": [
      "مسجد صرغتمش"
    ]
  },
  {
    "id": "lm_madrasa_salih_najm_eldin",
    "nameAr": "مدرسة وقبة الصالح نجم الدين أيوب - بين القصرين",
    "nameEn": "Complex of Sultan As-Salih Ayyub",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0488,
    "lng": 31.2605,
    "aliases": [
      "الصالح نجم الدين"
    ]
  },
  {
    "id": "lm_mosque_almaridani",
    "nameAr": "مسجد الطنبغا المارداني - الدرب الأحمر التبانة",
    "nameEn": "Al-Maridani Historic Mosque - Darb El-Ahmar",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0385,
    "lng": 31.2595,
    "aliases": [
      "جامع المارداني"
    ]
  },
  {
    "id": "lm_mosque_blue_aqsunqur",
    "nameAr": "الجامع الأزرق (مسجد الأمير آق سنقر) - باب الوزير",
    "nameEn": "The Blue Mosque (Aqsunqur Mosque) - Bab El-Wazir",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0355,
    "lng": 31.2605,
    "aliases": [
      "الجامع الأزرق"
    ]
  },
  {
    "id": "lm_bab_elwazir_cemetery",
    "nameAr": "منطقة باب الوزير التاريخية ومقابر المماليك",
    "nameEn": "Bab El-Wazir Historic Heritage Street",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0345,
    "lng": 31.2615,
    "aliases": [
      "باب الوزير"
    ]
  },
  {
    "id": "lm_city_of_the_dead",
    "nameAr": "صحراء المماليك ومقابر قايتباي (قرافة المماليك التاريخية)",
    "nameEn": "City of the Dead (Mamluk Sultan Qaytbay Complex)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "fair_zone",
    "lat": 30.0465,
    "lng": 31.2785,
    "aliases": [
      "صحراء المماليك",
      "مدينة الموتى"
    ]
  },
  {
    "id": "lm_qaytbay_complex_desert",
    "nameAr": "مجمع ومسجد السلطان الأشرف قايتباي بالصحراء",
    "nameEn": "Sultan Qaytbay Funerary Complex",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "fair_zone",
    "lat": 30.0455,
    "lng": 31.2795,
    "aliases": [
      "مسجد قايتباي"
    ]
  },
  {
    "id": "lm_farag_ibn_barquq",
    "nameAr": "خانقاه ومسجد السلطان فرج بن برقوق - قرافة المماليك",
    "nameEn": "Khanqah of Sultan Faraj Ibn Barquq",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "fair_zone",
    "lat": 30.0485,
    "lng": 31.2795,
    "aliases": [
      "فرج بن برقوق"
    ]
  },
  {
    "id": "lm_imam_elshafie_mosque",
    "nameAr": "مسجد ومقام الإمام الشافعي - القرافة الصغرى",
    "nameEn": "Imam Al-Shafi'i Historic Mosque & Dome",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0155,
    "lng": 31.2545,
    "aliases": [
      "جامع الإمام الشافعي",
      "مقام الشافعي"
    ]
  },
  {
    "id": "lm_imam_ellayth_mosque",
    "nameAr": "مسجد ومقام الإمام الليث بن سعد - مصر القديمة",
    "nameEn": "Imam Al-Layth Ibn Saad Mosque",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0125,
    "lng": 31.2565,
    "aliases": [
      "الليث بن سعد"
    ]
  },
  {
    "id": "lm_aqueduct_magra_eloyoun",
    "nameAr": "سور مجرى العيون التاريخي - فم الخليج ومصر القديمة",
    "nameEn": "Magra El-Oyoun Historic Aqueduct",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "malek_saleh",
    "lat": 30.0195,
    "lng": 31.2345,
    "aliases": [
      "سور مجرى العيون"
    ]
  },
  {
    "id": "lm_fustat_pottery_village",
    "nameAr": "قرية الفخار التراثية بالفسطاط - القاهرة",
    "nameEn": "Al-Fustat Traditional Pottery Village",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0045,
    "lng": 31.2395,
    "aliases": [
      "قرية الفخار"
    ]
  },
  {
    "id": "lm_gezirah_centre_arts",
    "nameAr": "مركز الجزيرة للفنون - قصر الأمير عمرو إبراهيم بالزمالك",
    "nameEn": "Gezira Center for Art - Zamalek",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0598,
    "lng": 31.2212,
    "aliases": [
      "مركز الجزيرة للفنون"
    ]
  },
  {
    "id": "lm_sawy_culturewheel",
    "nameAr": "ساقية الصاوي للثقافة والفنون - تحت كوبري 15 مايو الزمالك",
    "nameEn": "El Sawy Culturewheel - Zamalek",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0655,
    "lng": 31.2215,
    "aliases": [
      "ساقية الصاوي",
      "Culturewheel"
    ]
  },
  {
    "id": "lm_cairo_atelier",
    "nameAr": "أتيليه القاهرة للفنانين والكتاب - وسط البلد",
    "nameEn": "Cairo Atelier for Artists & Writers - Downtown",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sadat",
    "lat": 30.0452,
    "lng": 31.2408,
    "aliases": [
      "أتيليه القاهرة"
    ]
  },
  {
    "id": "lm_rawabet_theatre",
    "nameAr": "مسرح روابط للفنون المعاصرة - وسط البلد",
    "nameEn": "Rawabet Art Space - Downtown",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sadat",
    "lat": 30.0475,
    "lng": 31.2415,
    "aliases": [
      "مسرح روابط"
    ]
  },
  {
    "id": "lm_falaki_theatre",
    "nameAr": "مسرح الفلكي التابع للجامعة الأمريكية - وسط البلد",
    "nameEn": "Falaki Theatre (AUC) - Downtown",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sadat",
    "lat": 30.0425,
    "lng": 31.2395,
    "aliases": [
      "مسرح الفلكي"
    ]
  },
  {
    "id": "lm_national_theatre_attaba",
    "nameAr": "المسرح القومي المصري - ميدان العتبة",
    "nameEn": "National Theatre of Egypt - Attaba Square",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "attaba",
    "lat": 30.0525,
    "lng": 31.2485,
    "aliases": [
      "المسرح القومي"
    ]
  },
  {
    "id": "lm_al_talia_theatre",
    "nameAr": "مسرح الطليعة - ميدان العتبة",
    "nameEn": "Al-Talia Theatre - Attaba",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "attaba",
    "lat": 30.0528,
    "lng": 31.2488,
    "aliases": [
      "مسرح الطليعة"
    ]
  },
  {
    "id": "lm_cairo_puppet_theatre",
    "nameAr": "مسرح القاهرة للعرائس - حديقة الأزبكية العتبة",
    "nameEn": "Cairo Puppet Theatre - Azbakeya",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "attaba",
    "lat": 30.0535,
    "lng": 31.2482,
    "aliases": [
      "مسرح العرائس"
    ]
  },
  {
    "id": "lm_azbakeya_gardens",
    "nameAr": "حديقة وسور الأزبكية التاريخي لبيع الكتب القديمة",
    "nameEn": "Azbakeya Historic Gardens & Book Market",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "attaba",
    "lat": 30.0545,
    "lng": 31.2495,
    "aliases": [
      "سور الأزبكية",
      "حديقة الأزبكية"
    ]
  },
  {
    "id": "lm_al_gomhouria_theatre",
    "nameAr": "مسرح الجمهورية - عابدين",
    "nameEn": "Al-Gomhouria Theatre - Abdeen",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0465,
    "lng": 31.2455,
    "aliases": [
      "مسرح الجمهورية"
    ]
  },
  {
    "id": "lm_miami_cinema",
    "nameAr": "سينما ميامي التاريخية - شارع طلعت حرب وسط البلد",
    "nameEn": "Cinema Miami - Talaat Harb St",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sadat",
    "lat": 30.0468,
    "lng": 31.2402,
    "aliases": [
      "سينما ميامي"
    ]
  },
  {
    "id": "lm_metro_cinema",
    "nameAr": "سينما مترو التاريخية - شارع طلعت حرب",
    "nameEn": "Cinema Metro - Downtown",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sadat",
    "lat": 30.0472,
    "lng": 31.2405,
    "aliases": [
      "سينما مترو"
    ]
  },
  {
    "id": "lm_zawya_cinema",
    "nameAr": "سينما زاوية للسينما المستقلة والأفلام العالمية",
    "nameEn": "Zawya Independent Cinema - Emad El-Deen",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0555,
    "lng": 31.2475,
    "aliases": [
      "سينما زاوية"
    ]
  },
  {
    "id": "lm_groppi_talaat_harb",
    "nameAr": "مقهى ومطعم جروبي التاريخي - ميدان طلعت حرب",
    "nameEn": "Groppi Tearoom & Café - Talaat Harb Square",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sadat",
    "lat": 30.0475,
    "lng": 31.2398,
    "aliases": [
      "جروبي"
    ]
  },
  {
    "id": "lm_cafe_richey",
    "nameAr": "مقهى ريش الثقافي التاريخي (1908) - شارع طلعت حرب",
    "nameEn": "Café Riche Historic Cultural Hub",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sadat",
    "lat": 30.0462,
    "lng": 31.2395,
    "aliases": [
      "مقهى ريش"
    ]
  },
  {
    "id": "lm_el_fishawy_cafe",
    "nameAr": "مقهى الفيشاوي التاريخي (منذ 1797) - خان الخليلي",
    "nameEn": "El-Fishawy Historic Café - Khan El-Khalili",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0478,
    "lng": 31.2628,
    "aliases": [
      "مقهى الفيشاوي",
      "قهوة الفيشاوي"
    ]
  },
  {
    "id": "lm_naguib_mahfouz_cafe",
    "nameAr": "مقهى ومطعم نجيب محفوظ - خان الخليلي خان الدرب",
    "nameEn": "Naguib Mahfouz Café - Khan El-Khalili",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0475,
    "lng": 31.2632,
    "aliases": [
      "مطعم نجيب محفوظ"
    ]
  },
  {
    "id": "lm_sinan_pasha_mosque",
    "nameAr": "مسجد سنان باشا العثماني - بولاق أبو العلا",
    "nameEn": "Sinan Pasha Mosque - Bulaq",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "maspero",
    "lat": 30.0595,
    "lng": 31.2325,
    "aliases": [
      "مسجد سنان باشا"
    ]
  },
  {
    "id": "lm_mirza_mosque",
    "nameAr": "مسجد ميرزا الأثري - بولاق أبو العلا",
    "nameEn": "Mirza Historic Mosque - Bulaq",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "maspero",
    "lat": 30.0585,
    "lng": 31.2315,
    "aliases": [
      "مسجد ميرزا"
    ]
  },
  {
    "id": "lm_abu_el_ela_mosque",
    "nameAr": "مسجد السلطان أبو العلا التاريخي - بولاق على كورنيش النيل",
    "nameEn": "Sultan Abu El-Ela Mosque - Bulaq",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "maspero",
    "lat": 30.0575,
    "lng": 31.2305,
    "aliases": [
      "جامع أبو العلا"
    ]
  },
  {
    "id": "lm_mustafa_kamel_museum",
    "nameAr": "متحف الزعيم مصطفى كامل - ميدان القلعة",
    "nameEn": "Mustafa Kamel Museum - Citadel Square",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0315,
    "lng": 31.2568,
    "aliases": [
      "متحف مصطفى كامل"
    ]
  },
  {
    "id": "lm_beit_el_umma",
    "nameAr": "متحف بيت الأمة (ضريح ومتحف سعد زغلول) - المنيرة",
    "nameEn": "Beit El-Umma Museum (Saad Zaghloul Mausoleum)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0375,
    "lng": 31.2385,
    "aliases": [
      "بيت الأمة",
      "ضريح سعد زغلول"
    ]
  },
  {
    "id": "lm_kasr_el_shamea",
    "nameAr": "منطقة قصر الشمع الرومانية الأثرية - مجمع الأديان",
    "nameEn": "Kasr El-Shamea Historic Site - Old Cairo",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "mar_girgis",
    "lat": 30.0055,
    "lng": 31.2305,
    "aliases": [
      "قصر الشمع"
    ]
  },
  {
    "id": "lm_syrian_monastery_hq",
    "nameAr": "مقر دير السريان - الفجالة رمسيس",
    "nameEn": "Syrian Monastery Residence - Fagala",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0585,
    "lng": 31.2525,
    "aliases": [
      "دير السريان"
    ]
  },
  {
    "id": "lm_saint_mark_fagala",
    "nameAr": "كنيسة مار مرقس التاريخية - الفجالة",
    "nameEn": "St. Mark Historic Church - Fagala",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0592,
    "lng": 31.2535,
    "aliases": [
      "مار مرقس الفجالة"
    ]
  },
  {
    "id": "lm_st_teresa_basilica",
    "nameAr": "بازيليك القديسة تريزا الطفل يسوع ومزارها - شبرا",
    "nameEn": "Basilica of St. Therese of the Child Jesus - Shubra",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "st_teresa",
    "lat": 30.0885,
    "lng": 31.2465,
    "aliases": [
      "بازيليك سانت تريزا شبرا"
    ]
  },
  {
    "id": "lm_church_st_george_giza",
    "nameAr": "كنيسة الشهيد العظيم مار جرجس - ميدان الجيزة",
    "nameEn": "St. George Church - Giza Square",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "giza",
    "lat": 30.0095,
    "lng": 31.2085,
    "aliases": [
      "مار جرجس الجيزة"
    ]
  },
  {
    "id": "lm_church_st_damiana_giza",
    "nameAr": "كنيسة الشهيدة دميانة - الهرم والجيزة",
    "nameEn": "St. Damiana Church - Haram",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "faisal",
    "lat": 30.0085,
    "lng": 31.1895,
    "aliases": [
      "دميانة الهرم"
    ]
  },
  {
    "id": "lm_virgin_mary_imbaba",
    "nameAr": "كنيسة السيدة العذراء والشهيد أبانوب - إمبابة",
    "nameEn": "Virgin Mary & St. Abanoub Church - Imbaba",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "imbaba",
    "lat": 30.0685,
    "lng": 31.2125,
    "aliases": [
      "عذراء إمبابة"
    ]
  },
  {
    "id": "lm_masjid_mostorod",
    "nameAr": "مجمع ومسجد سيدي عبد الرحمن المسطردي وشجرة مريم",
    "nameEn": "Mostorod Historic Sanctuary & Virgin Mary Tree",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "brt_5_mostorod",
    "lat": 30.1315,
    "lng": 31.2895,
    "aliases": [
      "شجرة مريم مسطرد"
    ]
  },
  {
    "id": "lm_virgin_mary_tree_matariya",
    "nameAr": "شجرة مريم الأثرية ومغارة البلسان - المطرية",
    "nameEn": "Virgin Mary Tree (Holy Family Site) - Matariya",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "el_matareyya",
    "lat": 30.1295,
    "lng": 31.3095,
    "aliases": [
      "شجرة مريم بالمطرية",
      "شجرة مريم"
    ]
  },
  {
    "id": "lm_senusret_obelisk",
    "nameAr": "مسلة الملك سنوسرت الأول - أقدم مسلة قائمة في مصر (المطرية)",
    "nameEn": "Obelisk of Senusret I - Heliopolis Matariya",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "el_matareyya",
    "lat": 30.1305,
    "lng": 31.3125,
    "aliases": [
      "مسلة المطرية",
      "مسلة سنوسرت"
    ]
  },
  {
    "id": "lm_ain_shams_ancient_city",
    "nameAr": "أطلال مدينة أون الشمس القديمة (هليوبوليس القديمة) - المطرية",
    "nameEn": "Ancient City of On (Ancient Heliopolis)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "ain_shams",
    "lat": 30.1285,
    "lng": 31.3185,
    "aliases": [
      "مدينة أون الشمس",
      "هليوبوليس القديمة"
    ]
  },
  {
    "id": "lm_tomb_of_unknown_soldier",
    "nameAr": "النصب التذكاري للجندي المجهول وقبر السادات - طريق النصر",
    "nameEn": "Tomb of the Unknown Soldier & Sadat Memorial",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "fair_zone",
    "lat": 30.0655,
    "lng": 31.3185,
    "aliases": [
      "النصب التذكاري",
      "قبر السادات"
    ]
  },
  {
    "id": "lm_panorama_6_october",
    "nameAr": "بانوراما حرب 6 أكتوبر المجيدة - طريق صلاح سالم مصر الجديدة",
    "nameEn": "6th of October War Panorama",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0825,
    "lng": 31.3265,
    "aliases": [
      "بانوراما 6 أكتوبر",
      "بانوراما حرب اكتوبر"
    ]
  },
  {
    "id": "lm_cairo_fair_grounds",
    "nameAr": "أرض المعارض الدولية بمدينة نصر",
    "nameEn": "Cairo International Fairground - Ard El-Maared",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "fair_zone",
    "lat": 30.0685,
    "lng": 31.3085,
    "aliases": [
      "أرض المعارض"
    ]
  },
  {
    "id": "lm_eiec_newcairo",
    "nameAr": "مركز مصر للمعارض والمؤتمرات الدولية (EIEC) - محور المشير",
    "nameEn": "Egypt International Exhibition Center (EIEC)",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "monorail_moshir",
    "lat": 30.0215,
    "lng": 31.3785,
    "aliases": [
      "مركز المعارض محور المشير",
      "EIEC"
    ]
  },
  {
    "id": "lm_al_manara_center",
    "nameAr": "مركز المنارة للمؤتمرات والمعارض الدولية - محور المشير",
    "nameEn": "Al-Manara International Conference Center",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "monorail_moshir",
    "lat": 30.0225,
    "lng": 31.3795,
    "aliases": [
      "مركز المنارة"
    ]
  },
  {
    "id": "lm_iconic_tower_new_capital",
    "nameAr": "البرج الأيقوني - أطول برج في إفريقيا (العاصمة الإدارية)",
    "nameEn": "The Iconic Tower - Tallest Building in Africa",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "city_of_arts",
    "lat": 30.0165,
    "lng": 31.7345,
    "aliases": [
      "البرج الأيقوني",
      "Iconic Tower"
    ]
  },
  {
    "id": "lm_peoples_square_capital",
    "nameAr": "ساحة الشعب وسارية العلم الأطول في العالم - العاصمة الإدارية",
    "nameEn": "People’s Square & Flagpole - New Capital",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "city_of_arts",
    "lat": 30.0125,
    "lng": 31.7485,
    "aliases": [
      "ساحة الشعب",
      "سارية العاصمة"
    ]
  },
  {
    "id": "lm_monument_new_capital",
    "nameAr": "النصب التذكاري لشهداء مصر - ساحة الشعب بالعاصمة الإدارية",
    "nameEn": "Egypt Memorial of Martyrs - New Capital",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "city_of_arts",
    "lat": 30.0135,
    "lng": 31.7495,
    "aliases": [
      "نصب شهداء مصر"
    ]
  },
  {
    "id": "lm_sphinx_palace_alex_road",
    "nameAr": "قصر وحدائق سفنكس الملكية - طريق الإسكندرية الصحراوي",
    "nameEn": "Sphinx Royal Gardens - Desert Road",
    "category": "landmark",
    "categoryAr": "معلم سياحي وتراثي",
    "categoryEn": "Landmark & Heritage",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0645,
    "lng": 31.0215,
    "aliases": [
      "حدائق سفنكس"
    ]
  },
  {
    "id": "gov_cabinet_capital",
    "nameAr": "مجلس الوزراء المصري - المقر الحكومي بالعاصمة الإدارية",
    "nameEn": "Cabinet of Ministers - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0125,
    "lng": 31.7425,
    "aliases": [
      "مجلس الوزراء بالعاصمة",
      "رئاسة الوزراء"
    ]
  },
  {
    "id": "gov_cabinet_downtown",
    "nameAr": "مجلس الوزراء المصري - شارع القصر العيني",
    "nameEn": "Cabinet of Ministers - Downtown Cairo",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0385,
    "lng": 31.2375,
    "aliases": [
      "مجلس الوزراء قصر العيني"
    ]
  },
  {
    "id": "gov_parliament_capital",
    "nameAr": "مجلس النواب المصري (البرلمان) - العاصمة الإدارية",
    "nameEn": "House of Representatives - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0135,
    "lng": 31.7455,
    "aliases": [
      "مجلس النواب الجديد",
      "برلمان العاصمة"
    ]
  },
  {
    "id": "gov_parliament_downtown",
    "nameAr": "مجلس النواب التاريخي - شارع القصر العيني",
    "nameEn": "House of Representatives - Kasr Al-Ainy",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0395,
    "lng": 31.2365,
    "aliases": [
      "مجلس النواب التحرير"
    ]
  },
  {
    "id": "gov_senate_downtown",
    "nameAr": "مجلس الشيوخ المصري - شارع القصر العيني",
    "nameEn": "The Senate of Egypt - Downtown Cairo",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0405,
    "lng": 31.2371,
    "aliases": [
      "مجلس الشيوخ"
    ]
  },
  {
    "id": "gov_defense_octagon",
    "nameAr": "وزارة الدفاع والقيادة الاستراتيجية (الأوكتاجون) - العاصمة الإدارية",
    "nameEn": "Ministry of Defense - Octagon Strategic Command",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 29.9885,
    "lng": 31.7315,
    "aliases": [
      "الأوكتاجون",
      "وزارة الدفاع بالعاصمة",
      "الاوكتاجون"
    ]
  },
  {
    "id": "gov_foreign_affairs_maspero",
    "nameAr": "وزارة الخارجية المصرية - مبنى كورنيش النيل ماسبيرو",
    "nameEn": "Ministry of Foreign Affairs - Maspero Corniche",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "maspero",
    "lat": 30.0555,
    "lng": 31.2315,
    "aliases": [
      "وزارة الخارجية ماسبيرو"
    ]
  },
  {
    "id": "gov_foreign_affairs_capital",
    "nameAr": "وزارة الخارجية - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Foreign Affairs - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0115,
    "lng": 31.7415,
    "aliases": [
      "الخارجية بالعاصمة"
    ]
  },
  {
    "id": "gov_interior_newcairo",
    "nameAr": "وزارة الداخلية المصرية - مجمع التجمع الأول / أكاديمية الشرطة",
    "nameEn": "Ministry of Interior HQ - New Cairo",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "brt_14_academy",
    "lat": 30.0615,
    "lng": 31.4415,
    "aliases": [
      "وزارة الداخلية بالتجمع"
    ]
  },
  {
    "id": "gov_interior_lazoghly",
    "nameAr": "مقر وزارة الداخلية التاريخي - ميدان لاظوغلي",
    "nameEn": "Historic Ministry of Interior - Lazoghly Square",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0415,
    "lng": 31.2415,
    "aliases": [
      "داخلية لاظوغلي"
    ]
  },
  {
    "id": "gov_justice_lazoghly",
    "nameAr": "وزارة العدل المصرية - ميدان لاظوغلي",
    "nameEn": "Ministry of Justice - Lazoghly Square",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0425,
    "lng": 31.2425,
    "aliases": [
      "وزارة العدل لاظوغلي"
    ]
  },
  {
    "id": "gov_justice_capital",
    "nameAr": "وزارة العدل - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Justice - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0125,
    "lng": 31.7435,
    "aliases": [
      "العدل بالعاصمة"
    ]
  },
  {
    "id": "gov_finance_nasrcity",
    "nameAr": "وزارة المالية المصرية - امتداد رمسيس مدينة نصر",
    "nameEn": "Ministry of Finance - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "stadium",
    "lat": 30.0625,
    "lng": 31.3145,
    "aliases": [
      "وزارة المالية مدينة نصر"
    ]
  },
  {
    "id": "gov_finance_capital",
    "nameAr": "وزارة المالية - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Finance - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0115,
    "lng": 31.7445,
    "aliases": [
      "المالية بالعاصمة"
    ]
  },
  {
    "id": "gov_education_downtown",
    "nameAr": "وزارة التربية والتعليم والتعليم الفني - شارع الفلكي",
    "nameEn": "Ministry of Education - Downtown Falaki St",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0415,
    "lng": 31.2395,
    "aliases": [
      "وزارة التربية والتعليم"
    ]
  },
  {
    "id": "gov_education_capital",
    "nameAr": "وزارة التربية والتعليم - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Education - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0128,
    "lng": 31.7428,
    "aliases": [
      "التربية والتعليم بالعاصمة"
    ]
  },
  {
    "id": "gov_higher_education_nasrcity",
    "nameAr": "وزارة التعليم العالي والبحث العلمي - مدينة نصر",
    "nameEn": "Ministry of Higher Education - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0545,
    "lng": 31.3285,
    "aliases": [
      "وزارة التعليم العالي"
    ]
  },
  {
    "id": "gov_higher_education_capital",
    "nameAr": "وزارة التعليم العالي - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Higher Education - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0131,
    "lng": 31.7431,
    "aliases": [
      "التعليم العالي بالعاصمة"
    ]
  },
  {
    "id": "gov_health_falaki",
    "nameAr": "وزارة الصحة والسكان - شارع الفلكي ومجلس الشعب",
    "nameEn": "Ministry of Health & Population - Downtown",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0408,
    "lng": 31.2388,
    "aliases": [
      "وزارة الصحة"
    ]
  },
  {
    "id": "gov_health_capital",
    "nameAr": "وزارة الصحة والسكان - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Health - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0122,
    "lng": 31.7438,
    "aliases": [
      "الصحة بالعاصمة"
    ]
  },
  {
    "id": "gov_transport_nasrcity",
    "nameAr": "وزارة النقل المصرية - مدينة نصر",
    "nameEn": "Ministry of Transport - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0565,
    "lng": 31.3215,
    "aliases": [
      "وزارة النقل"
    ]
  },
  {
    "id": "gov_transport_capital",
    "nameAr": "وزارة النقل - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Transport - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0118,
    "lng": 31.7448,
    "aliases": [
      "النقل بالعاصمة"
    ]
  },
  {
    "id": "gov_housing_dokki",
    "nameAr": "وزارة الإسكان والمرافق والمجتمعات العمرانية - الدقي",
    "nameEn": "Ministry of Housing - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "el_bohoth",
    "lat": 30.0385,
    "lng": 31.2045,
    "aliases": [
      "وزارة الإسكان الدقي"
    ]
  },
  {
    "id": "gov_housing_capital",
    "nameAr": "وزارة الإسكان - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Housing - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0135,
    "lng": 31.7418,
    "aliases": [
      "الإسكان بالعاصمة"
    ]
  },
  {
    "id": "gov_tourism_zamalek",
    "nameAr": "وزارة السياحة والآثار - الزمالك",
    "nameEn": "Ministry of Tourism & Antiquities - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0585,
    "lng": 31.2195,
    "aliases": [
      "وزارة السياحة والآثار"
    ]
  },
  {
    "id": "gov_tourism_capital",
    "nameAr": "وزارة السياحة والآثار - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Tourism - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0141,
    "lng": 31.7422,
    "aliases": [
      "السياحة بالعاصمة"
    ]
  },
  {
    "id": "gov_electricity_abbassiya",
    "nameAr": "وزارة الكهرباء والطاقة المتجددة - امتداد رمسيس العباسية",
    "nameEn": "Ministry of Electricity & Renewable Energy - Abbassiya",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "abbassiya",
    "lat": 30.0715,
    "lng": 31.2845,
    "aliases": [
      "وزارة الكهرباء"
    ]
  },
  {
    "id": "gov_electricity_capital",
    "nameAr": "وزارة الكهرباء - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Electricity - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0129,
    "lng": 31.7451,
    "aliases": [
      "الكهرباء بالعاصمة"
    ]
  },
  {
    "id": "gov_petroleum_nasrcity",
    "nameAr": "وزارة البترول والثروة المعدنية - مدينة نصر",
    "nameEn": "Ministry of Petroleum & Mineral Resources - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0525,
    "lng": 31.3315,
    "aliases": [
      "وزارة البترول"
    ]
  },
  {
    "id": "gov_petroleum_capital",
    "nameAr": "وزارة البترول - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Petroleum - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0138,
    "lng": 31.7435,
    "aliases": [
      "البترول بالعاصمة"
    ]
  },
  {
    "id": "gov_communications_smart",
    "nameAr": "وزارة الاتصالات وتكنولوجيا المعلومات - القرية الذكية",
    "nameEn": "Ministry of Communications (MCIT) - Smart Village",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0785,
    "lng": 31.0195,
    "aliases": [
      "وزارة الاتصالات القرية الذكية",
      "MCIT"
    ]
  },
  {
    "id": "gov_communications_capital",
    "nameAr": "وزارة الاتصالات - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Communications - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0145,
    "lng": 31.7441,
    "aliases": [
      "الاتصالات بالعاصمة"
    ]
  },
  {
    "id": "gov_social_solidarity_agouza",
    "nameAr": "وزارة التضامن الاجتماعي - العجوزة",
    "nameEn": "Ministry of Social Solidarity - Agouza",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "kit_kat",
    "lat": 30.0585,
    "lng": 31.2125,
    "aliases": [
      "وزارة التضامن الاجتماعي"
    ]
  },
  {
    "id": "gov_social_solidarity_capital",
    "nameAr": "وزارة التضامن الاجتماعي - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Social Solidarity - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0119,
    "lng": 31.7429,
    "aliases": [
      "التضامن بالعاصمة"
    ]
  },
  {
    "id": "gov_environment_maadi",
    "nameAr": "وزارة البيئة وجهاز شؤون البيئة - المعادي",
    "nameEn": "Ministry of Environment - Maadi",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "maadi",
    "lat": 29.9685,
    "lng": 31.2615,
    "aliases": [
      "وزارة البيئة"
    ]
  },
  {
    "id": "gov_environment_capital",
    "nameAr": "وزارة البيئة - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Environment - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0132,
    "lng": 31.7449,
    "aliases": [
      "البيئة بالعاصمة"
    ]
  },
  {
    "id": "gov_awqaf_downtown",
    "nameAr": "وزارة الأوقاف المصرية - باب اللوق وسط البلد",
    "nameEn": "Ministry of Awqaf - Downtown Cairo",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0445,
    "lng": 31.2435,
    "aliases": [
      "وزارة الأوقاف"
    ]
  },
  {
    "id": "gov_awqaf_capital",
    "nameAr": "وزارة الأوقاف - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Awqaf - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0121,
    "lng": 31.7419,
    "aliases": [
      "الأوقاف بالعاصمة"
    ]
  },
  {
    "id": "gov_culture_zamalek",
    "nameAr": "وزارة الثقافة المصرية - الزمالك شارع شجرة الدر",
    "nameEn": "Ministry of Culture - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0595,
    "lng": 31.2215,
    "aliases": [
      "وزارة الثقافة الزمالك"
    ]
  },
  {
    "id": "gov_culture_capital",
    "nameAr": "وزارة الثقافة - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Culture - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0148,
    "lng": 31.7432,
    "aliases": [
      "الثقافة بالعاصمة"
    ]
  },
  {
    "id": "gov_military_production_downtown",
    "nameAr": "وزارة الإنتاج الحربي - التحرير ووسط البلد",
    "nameEn": "Ministry of Military Production - Downtown",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "nasser",
    "lat": 30.0515,
    "lng": 31.2385,
    "aliases": [
      "وزارة الإنتاج الحربي"
    ]
  },
  {
    "id": "gov_trade_industry_dokki",
    "nameAr": "وزارة التجارة والصناعة - الدقي",
    "nameEn": "Ministry of Trade & Industry - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0415,
    "lng": 31.2115,
    "aliases": [
      "وزارة التجارة والصناعة"
    ]
  },
  {
    "id": "gov_trade_industry_capital",
    "nameAr": "وزارة التجارة والصناعة - الحي الحكومي بالعاصمة الإدارية",
    "nameEn": "Ministry of Trade & Industry - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0124,
    "lng": 31.7454,
    "aliases": [
      "التجارة والصناعة بالعاصمة"
    ]
  },
  {
    "id": "gov_manpower_nasrcity",
    "nameAr": "وزارة العمل (القوى العاملة سابقاً) - مدينة نصر",
    "nameEn": "Ministry of Labour (Manpower) - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0555,
    "lng": 31.3255,
    "aliases": [
      "وزارة العمل",
      "وزارة القوى العاملة"
    ]
  },
  {
    "id": "gov_irrigation_kitkat",
    "nameAr": "وزارة الموارد المائية والري - كورنيش إمبابة والكيت كات",
    "nameEn": "Ministry of Water Resources & Irrigation",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "kit_kat",
    "lat": 30.0625,
    "lng": 31.2135,
    "aliases": [
      "وزارة الري والموارد المائية"
    ]
  },
  {
    "id": "gov_agriculture_dokki",
    "nameAr": "وزارة الزراعة واستصلاح الأراضي - الدقي شارع نادي الصيد",
    "nameEn": "Ministry of Agriculture - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "el_bohoth",
    "lat": 30.0425,
    "lng": 31.2065,
    "aliases": [
      "وزارة الزراعة بالدقي"
    ]
  },
  {
    "id": "gov_aviation_nasrcity",
    "nameAr": "وزارة الطيران المدني المصرية - طريق المطار",
    "nameEn": "Ministry of Civil Aviation - Airport Road",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "el_haykestep",
    "lat": 30.1085,
    "lng": 31.3815,
    "aliases": [
      "وزارة الطيران المدني"
    ]
  },
  {
    "id": "gov_youth_sports_mohandessin",
    "nameAr": "وزارة الشباب والرياضة - ميت عقبة المهندسين",
    "nameEn": "Ministry of Youth & Sports - Mohandessin",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0545,
    "lng": 31.2045,
    "aliases": [
      "وزارة الشباب والرياضة"
    ]
  },
  {
    "id": "gov_planning_nasrcity",
    "nameAr": "وزارة التخطيط والتنمية الاقتصادية - طريق صلاح سالم",
    "nameEn": "Ministry of Planning & Economic Development",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0615,
    "lng": 31.3185,
    "aliases": [
      "وزارة التخطيط"
    ]
  },
  {
    "id": "gov_local_development_dokki",
    "nameAr": "وزارة التنمية المحلية - الدقي",
    "nameEn": "Ministry of Local Development - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0435,
    "lng": 31.2135,
    "aliases": [
      "وزارة التنمية المحلية"
    ]
  },
  {
    "id": "gov_high_court_justice",
    "nameAr": "دار القضاء العالي (محكمة النقض ومحكمة استئناف القاهرة)",
    "nameEn": "High Court of Justice (Dar El-Qadaa El-Aaly)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "nasser",
    "lat": 30.0525,
    "lng": 31.2425,
    "aliases": [
      "دار القضاء العالي",
      "محكمة النقض"
    ]
  },
  {
    "id": "gov_council_of_state",
    "nameAr": "مجلس الدولة المصري والمحكمة الإدارية العليا - الدقي",
    "nameEn": "Council of State & Supreme Administrative Court",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "opera",
    "lat": 30.0385,
    "lng": 31.2165,
    "aliases": [
      "مجلس الدولة الدقي"
    ]
  },
  {
    "id": "gov_supreme_constitutional_court",
    "nameAr": "المحكمة الدستورية العليا - كورنيش النيل المعادي",
    "nameEn": "Supreme Constitutional Court of Egypt - Maadi",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "hadayeq_el_maadi",
    "lat": 29.9815,
    "lng": 31.2365,
    "aliases": [
      "المحكمة الدستورية العليا"
    ]
  },
  {
    "id": "gov_public_prosecution_rehab",
    "nameAr": "مكتب النائب العام ومقر النيابة العامة الرئيسي - الرحاب",
    "nameEn": "Public Prosecution General Headquarters - Al-Rehab",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "monorail_auc",
    "lat": 30.0685,
    "lng": 31.4985,
    "aliases": [
      "مكتب النائب العام",
      "النيابة العامة"
    ]
  },
  {
    "id": "gov_administrative_prosecution",
    "nameAr": "هيئة النيابة الإدارية - مدينة 6 أكتوبر",
    "nameEn": "Administrative Prosecution Authority - 6th October",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9655,
    "lng": 30.9385,
    "aliases": [
      "النيابة الإدارية"
    ]
  },
  {
    "id": "gov_state_lawsuits_authority",
    "nameAr": "هيئة قضايا الدولة - المهندسين",
    "nameEn": "State Lawsuits Authority - Mohandessin",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0555,
    "lng": 31.2055,
    "aliases": [
      "هيئة قضايا الدولة"
    ]
  },
  {
    "id": "gov_cairo_court_abbassiya",
    "nameAr": "مجمع محاكم شمال القاهرة بالعباسية",
    "nameEn": "North Cairo Courts Complex - Abbassiya",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "abbassiya",
    "lat": 30.0695,
    "lng": 31.2775,
    "aliases": [
      "محكمة شمال القاهرة بالعباسية"
    ]
  },
  {
    "id": "gov_giza_court_faisal",
    "nameAr": "مجمع محاكم الجيزة وتاج الدول - شارع فيصل",
    "nameEn": "Giza Courts Complex - Faisal",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "faisal",
    "lat": 30.0105,
    "lng": 31.1915,
    "aliases": [
      "محكمة الجيزة"
    ]
  },
  {
    "id": "gov_south_cairo_court_zeinab",
    "nameAr": "مجمع محاكم جنوب القاهرة - باب الخلق والسيدة زينب",
    "nameEn": "South Cairo Courts Complex",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0355,
    "lng": 31.2445,
    "aliases": [
      "محكمة جنوب القاهرة"
    ]
  },
  {
    "id": "gov_central_bank_downtown",
    "nameAr": "البنك المركزي المصري - شارع قصر النيل وشارع الجمهورية",
    "nameEn": "Central Bank of Egypt (CBE) - Downtown",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0485,
    "lng": 31.2435,
    "aliases": [
      "البنك المركزي المصري",
      "CBE"
    ]
  },
  {
    "id": "gov_central_bank_capital",
    "nameAr": "البنك المركزي المصري - الحي المالي بالعاصمة الإدارية",
    "nameEn": "Central Bank of Egypt - New Capital Financial Dist",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0155,
    "lng": 31.7315,
    "aliases": [
      "البنك المركزي بالعاصمة"
    ]
  },
  {
    "id": "gov_egx_downtown",
    "nameAr": "البورصة المصرية (EGX) - شارع الشريفين وسط البلد",
    "nameEn": "The Egyptian Exchange (EGX) - Downtown",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "sadat",
    "lat": 30.0475,
    "lng": 31.2415,
    "aliases": [
      "البورصة المصرية"
    ]
  },
  {
    "id": "gov_egx_smart_village",
    "nameAr": "البورصة المصرية - المقر الذكي بالقرية الذكية",
    "nameEn": "The Egyptian Exchange (EGX) - Smart Village",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0765,
    "lng": 31.0185,
    "aliases": [
      "البورصة القرية الذكية"
    ]
  },
  {
    "id": "gov_fra_smart_village",
    "nameAr": "الهيئة العامة للرقابة المالية (FRA) - القرية الذكية",
    "nameEn": "Financial Regulatory Authority (FRA) - Smart Village",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0775,
    "lng": 31.0195,
    "aliases": [
      "الرقابة المالية",
      "FRA"
    ]
  },
  {
    "id": "gov_gafi_nasrcity",
    "nameAr": "الهيئة العامة للاستثمار والمناطق الحرة (GAFI) - صلاح سالم",
    "nameEn": "General Authority for Investment (GAFI)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0645,
    "lng": 31.3125,
    "aliases": [
      "هيئة الاستثمار",
      "GAFI"
    ]
  },
  {
    "id": "gov_aca_nasrcity",
    "nameAr": "هيئة الرقابة الإدارية (ACA) - مدينة نصر",
    "nameEn": "Administrative Control Authority (ACA) - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "stadium",
    "lat": 30.0685,
    "lng": 31.3185,
    "aliases": [
      "الرقابة الإدارية"
    ]
  },
  {
    "id": "gov_capmas_nasrcity",
    "nameAr": "الجهاز المركزي للتعبئة العامة والإحصاء (CAPMAS)",
    "nameEn": "CAPMAS Statistics Agency - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "stadium",
    "lat": 30.0655,
    "lng": 31.3115,
    "aliases": [
      "الجهاز المركزي للإحصاء",
      "CAPMAS"
    ]
  },
  {
    "id": "gov_cao_nasrcity",
    "nameAr": "الجهاز المركزي للمحاسبات - مدينة نصر",
    "nameEn": "Central Auditing Organization (CAO) - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0585,
    "lng": 31.3195,
    "aliases": [
      "الجهاز المركزي للمحاسبات"
    ]
  },
  {
    "id": "gov_tax_authority_ramses",
    "nameAr": "مصلحة الضرائب المصرية - شارع رمسيس وأغاخان",
    "nameEn": "Egyptian Tax Authority - Ramses",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0595,
    "lng": 31.2485,
    "aliases": [
      "مصلحة الضرائب المصرية"
    ]
  },
  {
    "id": "gov_customs_authority",
    "nameAr": "مصلحة الجمارك المصرية - مدينة نصر وزارة المالية",
    "nameEn": "Egyptian Customs Authority - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "stadium",
    "lat": 30.0625,
    "lng": 31.3155,
    "aliases": [
      "مصلحة الجمارك المصرية"
    ]
  },
  {
    "id": "gov_post_authority_attaba",
    "nameAr": "الهيئة القومية للبريد المصري - ميدان العتبة",
    "nameEn": "National Postal Authority HQ - Attaba",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "attaba",
    "lat": 30.0525,
    "lng": 31.2475,
    "aliases": [
      "البريد المصري العتبة",
      "هيئة البريد"
    ]
  },
  {
    "id": "gov_mogamma_tahrir",
    "nameAr": "مجمع التحرير الحكومي التاريخي - ميدان التحرير",
    "nameEn": "Mogamma El-Tahrir Historic Complex",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "sadat",
    "lat": 30.0435,
    "lng": 31.2345,
    "aliases": [
      "مجمع التحرير"
    ]
  },
  {
    "id": "gov_cairo_governorate_abdeen",
    "nameAr": "ديوان عام محافظة القاهرة - ميدان عابدين",
    "nameEn": "Cairo Governorate Headquarters - Abdeen",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0445,
    "lng": 31.2475,
    "aliases": [
      "محافظة القاهرة عابدين"
    ]
  },
  {
    "id": "gov_giza_governorate",
    "nameAr": "ديوان عام محافظة الجيزة - شارع الأهرام",
    "nameEn": "Giza Governorate Headquarters - Al-Haram",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "giza",
    "lat": 30.0075,
    "lng": 31.2015,
    "aliases": [
      "محافظة الجيزة"
    ]
  },
  {
    "id": "gov_qalyubia_governorate",
    "nameAr": "مبنى محافظة القليوبية وخدمات المواطنين - شبرا",
    "nameEn": "Qalyubia Public Services Center - Shubra",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "shubra_el_kheima",
    "lat": 30.1265,
    "lng": 31.2455,
    "aliases": [
      "خدمات محافظة القليوبية"
    ]
  },
  {
    "id": "emb_usa_cairo",
    "nameAr": "سفارة الولايات المتحدة الأمريكية بالقاهرة - جاردن سيتي",
    "nameEn": "Embassy of the United States - Garden City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "sadat",
    "lat": 30.0385,
    "lng": 31.2335,
    "aliases": [
      "السفارة الأمريكية",
      "US Embassy Cairo"
    ]
  },
  {
    "id": "emb_uk_cairo",
    "nameAr": "سفارة المملكة المتحدة (بريطانيا) - جاردن سيتي",
    "nameEn": "British Embassy in Cairo - Garden City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "sadat",
    "lat": 30.0395,
    "lng": 31.2325,
    "aliases": [
      "السفارة البريطانية",
      "UK Embassy"
    ]
  },
  {
    "id": "emb_france_cairo",
    "nameAr": "سفارة جمهورية فرنسا - كورنيش النيل الجيزة",
    "nameEn": "Embassy of France - Giza Nile Corniche",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0345,
    "lng": 31.2185,
    "aliases": [
      "السفارة الفرنسية"
    ]
  },
  {
    "id": "emb_germany_cairo",
    "nameAr": "سفارة جمهورية ألمانيا الاتحادية - الزمالك شارع حسن صبري",
    "nameEn": "Embassy of Germany - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0615,
    "lng": 31.2195,
    "aliases": [
      "السفارة الألمانية",
      "German Embassy"
    ]
  },
  {
    "id": "emb_italy_cairo",
    "nameAr": "سفارة جمهورية إيطاليا - شارع الجلاء بولاق",
    "nameEn": "Embassy of Italy - Galaa Street",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "maspero",
    "lat": 30.0545,
    "lng": 31.2365,
    "aliases": [
      "السفارة الإيطالية"
    ]
  },
  {
    "id": "emb_canada_cairo",
    "nameAr": "سفارة كندا في مصر - جاردن سيتي كورنيش النيل",
    "nameEn": "Embassy of Canada - Garden City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "sadat",
    "lat": 30.0375,
    "lng": 31.2315,
    "aliases": [
      "السفارة الكندية"
    ]
  },
  {
    "id": "emb_russia_cairo",
    "nameAr": "سفارة روسيا الاتحادية - الدقي شارع المساحة",
    "nameEn": "Embassy of the Russian Federation - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0365,
    "lng": 31.2095,
    "aliases": [
      "السفارة الروسية"
    ]
  },
  {
    "id": "emb_china_cairo",
    "nameAr": "سفارة جمهورية الصين الشعبية - الزمالك شارع بهجت علي",
    "nameEn": "Embassy of the People’s Republic of China - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0625,
    "lng": 31.2175,
    "aliases": [
      "السفارة الصينية"
    ]
  },
  {
    "id": "emb_saudi_cairo",
    "nameAr": "سفارة المملكة العربية السعودية - كورنيش النيل الجيزة",
    "nameEn": "Royal Embassy of Saudi Arabia - Giza Corniche",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0325,
    "lng": 31.2175,
    "aliases": [
      "السفارة السعودية"
    ]
  },
  {
    "id": "emb_uae_cairo",
    "nameAr": "سفارة دولة الإمارات العربية المتحدة - كورنيش الجيزة",
    "nameEn": "Embassy of the United Arab Emirates - Giza",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0315,
    "lng": 31.2185,
    "aliases": [
      "السفارة الإماراتية",
      "سفارة الإمارات"
    ]
  },
  {
    "id": "emb_kuwait_cairo",
    "nameAr": "سفارة دولة الكويت - الدقي شارع النيل",
    "nameEn": "Embassy of the State of Kuwait - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0355,
    "lng": 31.2165,
    "aliases": [
      "السفارة الكويتية"
    ]
  },
  {
    "id": "emb_qatar_cairo",
    "nameAr": "سفارة دولة قطر - المهندسين",
    "nameEn": "Embassy of the State of Qatar - Mohandessin",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0515,
    "lng": 31.2055,
    "aliases": [
      "السفارة القطرية"
    ]
  },
  {
    "id": "emb_japan_cairo",
    "nameAr": "سفارة دولة اليابان - المعادي شارع 103",
    "nameEn": "Embassy of Japan in Egypt - Maadi",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2615,
    "aliases": [
      "السفارة اليابانية"
    ]
  },
  {
    "id": "emb_south_korea_cairo",
    "nameAr": "سفارة جمهورية كوريا الجنوبية - المعادي",
    "nameEn": "Embassy of the Republic of Korea - Maadi",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "maadi",
    "lat": 29.9625,
    "lng": 31.2635,
    "aliases": [
      "سفارة كوريا الجنوبية"
    ]
  },
  {
    "id": "emb_australia_cairo",
    "nameAr": "سفارة دولة أستراليا - كورنيش النيل وسط البلد",
    "nameEn": "Australian Embassy in Cairo - Corniche",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "sadat",
    "lat": 30.0415,
    "lng": 31.2315,
    "aliases": [
      "السفارة الأسترالية"
    ]
  },
  {
    "id": "emb_spain_cairo",
    "nameAr": "سفارة مملكة إسبانيا - الزمالك شارع إسماعيل محمد",
    "nameEn": "Embassy of Spain - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0605,
    "lng": 31.2185,
    "aliases": [
      "السفارة الإسبانية"
    ]
  },
  {
    "id": "emb_netherlands_cairo",
    "nameAr": "سفارة مملكة هولندا - الزمالك شارع حسن صبري",
    "nameEn": "Embassy of the Netherlands - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0618,
    "lng": 31.2198,
    "aliases": [
      "السفارة الهولندية"
    ]
  },
  {
    "id": "emb_switzerland_cairo",
    "nameAr": "سفارة الاتحاد السويسري - جاردن سيتي",
    "nameEn": "Embassy of Switzerland - Garden City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "sadat",
    "lat": 30.0365,
    "lng": 31.2325,
    "aliases": [
      "السفارة السويسرية"
    ]
  },
  {
    "id": "emb_turkey_cairo",
    "nameAr": "سفارة جمهورية تركيا - الجيزة شارع النيل",
    "nameEn": "Embassy of the Republic of Turkey - Giza",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0305,
    "lng": 31.2195,
    "aliases": [
      "السفارة التركية"
    ]
  },
  {
    "id": "emb_greece_cairo",
    "nameAr": "سفارة جمهورية اليونان - جاردن سيتي ووسط البلد",
    "nameEn": "Embassy of Greece - Downtown Cairo",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "sadat",
    "lat": 30.0425,
    "lng": 31.2355,
    "aliases": [
      "السفارة اليونانية"
    ]
  },
  {
    "id": "emb_india_cairo",
    "nameAr": "سفارة جمهورية الهند - الزمالك شارع طلعت حرب فرع الزمالك",
    "nameEn": "Embassy of India - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0591,
    "lng": 31.2225,
    "aliases": [
      "السفارة الهندية"
    ]
  },
  {
    "id": "emb_brazil_cairo",
    "nameAr": "سفارة جمهورية البرازيل الاتحادية - الشيخ زايد والدقي",
    "nameEn": "Embassy of Brazil - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0385,
    "lng": 31.2145,
    "aliases": [
      "السفارة البرازيلية"
    ]
  },
  {
    "id": "emb_diplomatic_quarter_capital",
    "nameAr": "الحي الدبلوماسي الجديد وسفارات العالم - العاصمة الإدارية",
    "nameEn": "Diplomatic Quarter - New Capital",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "city_of_arts",
    "lat": 30.0085,
    "lng": 31.7585,
    "aliases": [
      "الحي الدبلوماسي بالعاصمة"
    ]
  },
  {
    "id": "gov_passports_abbassiya",
    "nameAr": "الإدارة العامة للجوازات والهجرة والجنسية - العباسية (المقر الرئيسي الجديد)",
    "nameEn": "General Administration for Passports & Immigration - Abbassiya",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "abbassiya",
    "lat": 30.0685,
    "lng": 31.2785,
    "aliases": [
      "مجمع جوازات العباسية",
      "جوازات العباسية",
      "الهجرة والجنسية"
    ]
  },
  {
    "id": "gov_civil_registration_abbassiya",
    "nameAr": "قطاع مصلحة الأحوال المدنية بالعباسية (الرقم القومي وشهادات الميلاد)",
    "nameEn": "Civil Registration Authority - Abbassiya",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "abbassiya",
    "lat": 30.0705,
    "lng": 31.2765,
    "aliases": [
      "أحوال مدنية العباسية",
      "سجل مدني العباسية"
    ]
  },
  {
    "id": "gov_traffic_cairo_hq",
    "nameAr": "الإدارة العامة لمرور القاهرة - الدراسة وصلاح سالم",
    "nameEn": "Cairo Traffic Police Headquarters - Darrasa",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0475,
    "lng": 31.2695,
    "aliases": [
      "مرور القاهرة"
    ]
  },
  {
    "id": "gov_traffic_giza_hq",
    "nameAr": "الإدارة العامة لمرور الجيزة - بين السرايات",
    "nameEn": "Giza Traffic Police Headquarters - Bein El-Sarayat",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "cairo_university",
    "lat": 30.0345,
    "lng": 31.2055,
    "aliases": [
      "مرور الجيزة بين السرايات"
    ]
  },
  {
    "id": "gov_civil_protection_hq",
    "nameAr": "الإدارة العامة للحماية المدنية والمطافئ - العتبة",
    "nameEn": "Civil Protection & Fire Dept HQ - Attaba",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "attaba",
    "lat": 30.0515,
    "lng": 31.2495,
    "aliases": [
      "المطافئ العتبة",
      "الحماية المدنية"
    ]
  },
  {
    "id": "gov_eda_dokki",
    "nameAr": "هيئة الدواء المصرية (EDA) - الدقي وميدان المساحة",
    "nameEn": "Egyptian Drug Authority (EDA) - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0385,
    "lng": 31.2115,
    "aliases": [
      "هيئة الدواء المصرية",
      "EDA"
    ]
  },
  {
    "id": "gov_ntra_smart",
    "nameAr": "الجهاز القومي لتنظيم الاتصالات (NTRA) - القرية الذكية",
    "nameEn": "National Telecom Regulatory Authority (NTRA)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0775,
    "lng": 31.0185,
    "aliases": [
      "تنظيم الاتصالات",
      "NTRA"
    ]
  },
  {
    "id": "gov_itida_smart",
    "nameAr": "هيئة تنمية صناعة تكنولوجيا المعلومات (إيتيدا) - القرية الذكية",
    "nameEn": "Information Technology Industry Development Agency (ITIDA)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0765,
    "lng": 31.0195,
    "aliases": [
      "إيتيدا",
      "ITIDA"
    ]
  },
  {
    "id": "gov_egpc_nasrcity",
    "nameAr": "الهيئة المصرية العامة للبترول (EGPC) - مدينة نصر",
    "nameEn": "Egyptian General Petroleum Corporation (EGPC)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0535,
    "lng": 31.3285,
    "aliases": [
      "هيئة البترول",
      "EGPC"
    ]
  },
  {
    "id": "gov_egas_newcairo",
    "nameAr": "الشركة المصرية القابضة للغازات الطبيعية (إيجاس) - التجمع",
    "nameEn": "Egyptian Natural Gas Holding Company (EGAS)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "monorail_air_hospital",
    "lat": 30.0295,
    "lng": 31.4645,
    "aliases": [
      "إيجاس",
      "EGAS"
    ]
  },
  {
    "id": "gov_nuca_zayed",
    "nameAr": "هيئة المجتمعات العمرانية الجديدة - الشيخ زايد",
    "nameEn": "New Urban Communities Authority (NUCA)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0315,
    "lng": 31.0045,
    "aliases": [
      "المجتمعات العمرانية الجديدة",
      "NUCA"
    ]
  },
  {
    "id": "gov_ida_newcairo",
    "nameAr": "الهيئة العامة للتنمية الصناعية (IDA) - التجمع الخامس",
    "nameEn": "Industrial Development Authority (IDA) - New Cairo",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0125,
    "lng": 31.4315,
    "aliases": [
      "التنمية الصناعية",
      "IDA"
    ]
  },
  {
    "id": "gov_mineral_resources",
    "nameAr": "الهيئة المصرية العامة للثروة المعدنية - الدقي شارع صلاح جاهين",
    "nameEn": "Egyptian Mineral Resources Authority - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0445,
    "lng": 31.2085,
    "aliases": [
      "الثروة المعدنية"
    ]
  },
  {
    "id": "gov_gasc_downtown",
    "nameAr": "الهيئة العامة للسلع التموينية - وسط البلد",
    "nameEn": "General Authority for Supply Commodities (GASC)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0395,
    "lng": 31.2385,
    "aliases": [
      "السلع التموينية"
    ]
  },
  {
    "id": "gov_nchr_cairo",
    "nameAr": "المجلس القومي لحقوق الإنسان - الدقي والتجمع",
    "nameEn": "National Council for Human Rights (NCHR)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0365,
    "lng": 31.2125,
    "aliases": [
      "حقوق الإنسان"
    ]
  },
  {
    "id": "gov_ncw_nasrcity",
    "nameAr": "المجلس القومي للمرأة - مدينة نصر",
    "nameEn": "National Council for Women (NCW)",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "stadium",
    "lat": 30.0655,
    "lng": 31.3195,
    "aliases": [
      "المجلس القومي للمرأة"
    ]
  },
  {
    "id": "gov_red_crescent_cairo",
    "nameAr": "جمعية الهلال الأحمر المصري - مدينة نصر مكرم عبيد",
    "nameEn": "Egyptian Red Crescent HQ - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0635,
    "lng": 31.3415,
    "aliases": [
      "الهلال الأحمر"
    ]
  },
  {
    "id": "gov_ambulance_hq_october",
    "nameAr": "هيئة الإسعاف المصرية - المقر الرئيسي 6 أكتوبر",
    "nameEn": "Egyptian Ambulance Authority HQ - 6th October",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9675,
    "lng": 30.9345,
    "aliases": [
      "هيئة الإسعاف المصرية"
    ]
  },
  {
    "id": "gov_military_justice_nasrcity",
    "nameAr": "مقر هيئة القضاء العسكري - مدينة نصر",
    "nameEn": "Military Judicial Authority - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "stadium",
    "lat": 30.0695,
    "lng": 31.3215,
    "aliases": [
      "القضاء العسكري"
    ]
  },
  {
    "id": "gov_military_records_heliopolis",
    "nameAr": "إدارة السجلات العسكرية للقوات المسلحة - مصر الجديدة",
    "nameEn": "Military Records Department - Heliopolis",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "al_ahram",
    "lat": 30.0945,
    "lng": 31.3485,
    "aliases": [
      "السجلات العسكرية"
    ]
  },
  {
    "id": "gov_military_morale_heliopolis",
    "nameAr": "إدارة الشؤون المعنوية للقوات المسلحة - مصر الجديدة",
    "nameEn": "Armed Forces Morale Affairs Department",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "al_ahram",
    "lat": 30.0965,
    "lng": 31.3455,
    "aliases": [
      "الشؤون المعنوية"
    ]
  },
  {
    "id": "gov_military_survey_qobba",
    "nameAr": "إدارة المساحة العسكرية - كوبري القبة",
    "nameEn": "Military Survey Department - Kobri El-Qobba",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "kobri_el_qobba",
    "lat": 30.0935,
    "lng": 31.2985,
    "aliases": [
      "المساحة العسكرية"
    ]
  },
  {
    "id": "gov_officers_police_abbassiya",
    "nameAr": "معهد تدريب ضباط الشرطة - العباسية",
    "nameEn": "Police Officers Training Institute - Abbassiya",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "abbassiya",
    "lat": 30.0715,
    "lng": 31.2785,
    "aliases": [
      "معهد ضباط الشرطة بالعباسية"
    ]
  },
  {
    "id": "gov_family_court_tagamoa",
    "nameAr": "مجمع محاكم الأسرة بالقاهرة الجديدة - التجمع الخامس",
    "nameEn": "New Cairo Family Court Complex",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0085,
    "lng": 31.4285,
    "aliases": [
      "محكمة أسرة التجمع"
    ]
  },
  {
    "id": "gov_family_court_heliopolis",
    "nameAr": "محكمة أسرة مصر الجديدة والنزهة - شيراتون",
    "nameEn": "Heliopolis & Nozha Family Court",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "el_haykestep",
    "lat": 30.1045,
    "lng": 31.3745,
    "aliases": [
      "محكمة أسرة مصر الجديدة"
    ]
  },
  {
    "id": "gov_family_court_maadi",
    "nameAr": "محكمة أسرة المعادي ودار السلام",
    "nameEn": "Maadi Family Court",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "maadi",
    "lat": 29.9655,
    "lng": 31.2645,
    "aliases": [
      "محكمة أسرة المعادي"
    ]
  },
  {
    "id": "gov_family_court_dokki",
    "nameAr": "محكمة أسرة الدقي والعجوزة - شارع السودان",
    "nameEn": "Dokki & Agouza Family Court",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "kit_kat",
    "lat": 30.0615,
    "lng": 31.2085,
    "aliases": [
      "محكمة أسرة الدقي"
    ]
  },
  {
    "id": "gov_family_court_giza",
    "nameAr": "محكمة أسرة الجيزة - العمرانية وساقية مكي",
    "nameEn": "Giza Family Court Complex",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "omm_el_masryeen",
    "lat": 30.0045,
    "lng": 31.2025,
    "aliases": [
      "محكمة أسرة الجيزة"
    ]
  },
  {
    "id": "gov_traffic_dokki",
    "nameAr": "وحدة تراخيص مرور الدقي - بين السرايات",
    "nameEn": "Dokki Traffic Licensing Unit",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "cairo_university",
    "lat": 30.0335,
    "lng": 31.2065,
    "aliases": [
      "مرور الدقي"
    ]
  },
  {
    "id": "gov_traffic_faisal",
    "nameAr": "وحدة تراخيص مرور فيصل والهرم",
    "nameEn": "Faisal & Haram Traffic Licensing Unit",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "faisal",
    "lat": 30.0095,
    "lng": 31.1875,
    "aliases": [
      "مرور فيصل"
    ]
  },
  {
    "id": "gov_traffic_nasrcity",
    "nameAr": "وحدة تراخيص مرور مدينة نصر - الحي السابع",
    "nameEn": "Nasr City Traffic Licensing Unit",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0455,
    "lng": 31.3445,
    "aliases": [
      "مرور مدينة نصر"
    ]
  },
  {
    "id": "gov_traffic_heliopolis",
    "nameAr": "وحدة تراخيص مرور مصر الجديدة - الحجاز",
    "nameEn": "Heliopolis Traffic Licensing Unit",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "heliopolis",
    "lat": 30.1065,
    "lng": 31.3455,
    "aliases": [
      "مرور مصر الجديدة"
    ]
  },
  {
    "id": "gov_traffic_maadi",
    "nameAr": "وحدة تراخيص مرور المعادي وطرة",
    "nameEn": "Maadi Traffic Licensing Unit",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "maadi",
    "lat": 29.9545,
    "lng": 31.2665,
    "aliases": [
      "مرور المعادي"
    ]
  },
  {
    "id": "gov_traffic_tagamoa",
    "nameAr": "وحدة تراخيص مرور القاهرة الجديدة - التجمع الثالث",
    "nameEn": "New Cairo Traffic Licensing Unit",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "monorail_choueifat",
    "lat": 29.9945,
    "lng": 31.4245,
    "aliases": [
      "مرور التجمع"
    ]
  },
  {
    "id": "gov_traffic_october",
    "nameAr": "وحدة تراخيص مرور 6 أكتوبر والشيخ زايد",
    "nameEn": "6th of October Traffic Licensing Unit",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9625,
    "lng": 30.9325,
    "aliases": [
      "مرور 6 أكتوبر"
    ]
  },
  {
    "id": "gov_traffic_shubra",
    "nameAr": "وحدة تراخيص مرور شبرا - عبود",
    "nameEn": "Shubra Traffic Licensing Unit - Aboud",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "kolleyyet_el_zeraa",
    "lat": 30.1145,
    "lng": 31.2465,
    "aliases": [
      "مرور شبرا"
    ]
  },
  {
    "id": "gov_shahr_aqari_downtown",
    "nameAr": "مصلحة الشهر العقاري والتوثيق الرئيسية - وسط البلد شارع رمسيس",
    "nameEn": "Real Estate Registration Authority HQ - Downtown",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "nasser",
    "lat": 30.0535,
    "lng": 31.2415,
    "aliases": [
      "الشهر العقاري الرئيسي"
    ]
  },
  {
    "id": "gov_shahr_aqari_tagamoa",
    "nameAr": "مكتب الشهر العقاري المطور - التجمع الخامس",
    "nameEn": "Modernized Real Estate Registry - New Cairo",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0145,
    "lng": 31.4255,
    "aliases": [
      "شهر عقاري التجمع"
    ]
  },
  {
    "id": "gov_shahr_aqari_dokki",
    "nameAr": "مكتب الشهر العقاري والتوثيق - الدقي",
    "nameEn": "Real Estate Registry Office - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0415,
    "lng": 31.2125,
    "aliases": [
      "شهر عقاري الدقي"
    ]
  },
  {
    "id": "gov_shahr_aqari_nasrcity",
    "nameAr": "مكتب الشهر العقاري النموذجي - مدينة نصر",
    "nameEn": "Model Real Estate Registry - Nasr City",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "fair_zone",
    "lat": 30.0585,
    "lng": 31.3345,
    "aliases": [
      "شهر عقاري مدينة نصر"
    ]
  },
  {
    "id": "gov_shahr_aqari_heliopolis",
    "nameAr": "مكتب الشهر العقاري والتوثيق - مصر الجديدة روكسي",
    "nameEn": "Real Estate Registry - Heliopolis Roxy",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "al_ahram",
    "lat": 30.0915,
    "lng": 31.3215,
    "aliases": [
      "شهر عقاري مصر الجديدة"
    ]
  },
  {
    "id": "gov_shahr_aqari_maadi",
    "nameAr": "مكتب الشهر العقاري والتوثيق - المعادي",
    "nameEn": "Real Estate Registry - Maadi",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "maadi",
    "lat": 29.9595,
    "lng": 31.2615,
    "aliases": [
      "شهر عقاري المعادي"
    ]
  },
  {
    "id": "gov_shahr_aqari_october",
    "nameAr": "مكتب الشهر العقاري المطور - 6 أكتوبر الحصري",
    "nameEn": "Real Estate Registry - 6th of October",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9725,
    "lng": 30.9455,
    "aliases": [
      "شهر عقاري أكتوبر"
    ]
  },
  {
    "id": "emb_belgium_cairo",
    "nameAr": "سفارة مملكة بلجيكا - الدقي شارع قصر العالي",
    "nameEn": "Embassy of Belgium - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0385,
    "lng": 31.2135,
    "aliases": [
      "السفارة البلجيكية"
    ]
  },
  {
    "id": "emb_sweden_cairo",
    "nameAr": "سفارة مملكة السويد - الزمالك شارع أبو الفدا",
    "nameEn": "Embassy of Sweden - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0645,
    "lng": 31.2185,
    "aliases": [
      "السفارة السويدية"
    ]
  },
  {
    "id": "emb_norway_cairo",
    "nameAr": "سفارة مملكة النرويج - الزمالك شارع الجزيرة",
    "nameEn": "Royal Norwegian Embassy - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0635,
    "lng": 31.2215,
    "aliases": [
      "السفارة النرويجية"
    ]
  },
  {
    "id": "emb_denmark_cairo",
    "nameAr": "سفارة مملكة الدنمارك - الزمالك شارع كمال الطويل",
    "nameEn": "Royal Danish Embassy - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0628,
    "lng": 31.2208,
    "aliases": [
      "السفارة الدنماركية"
    ]
  },
  {
    "id": "emb_poland_cairo",
    "nameAr": "سفارة جمهورية بولندا - الدقي شارع شريف والأنصار",
    "nameEn": "Embassy of Poland - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0395,
    "lng": 31.2095,
    "aliases": [
      "السفارة البولندية"
    ]
  },
  {
    "id": "emb_czech_cairo",
    "nameAr": "سفارة جمهورية التشيك - الدقي شارع الجيزة",
    "nameEn": "Embassy of the Czech Republic - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0355,
    "lng": 31.2145,
    "aliases": [
      "السفارة التشيكية"
    ]
  },
  {
    "id": "emb_hungary_cairo",
    "nameAr": "سفارة دولة المجر (هنغاريا) - الزمالك شارع محمد مظهر",
    "nameEn": "Embassy of Hungary - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0655,
    "lng": 31.2195,
    "aliases": [
      "السفارة المجرية"
    ]
  },
  {
    "id": "emb_austria_cairo",
    "nameAr": "سفارة جمهورية النمسا - الزمالك شارع النيل وحسن عاصم",
    "nameEn": "Embassy of Austria - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0612,
    "lng": 31.2188,
    "aliases": [
      "السفارة النمساوية"
    ]
  },
  {
    "id": "emb_portugal_cairo",
    "nameAr": "سفارة جمهورية البرتغال - الزمالك شارع الصالح أيوب",
    "nameEn": "Embassy of Portugal - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0592,
    "lng": 31.2218,
    "aliases": [
      "السفارة البرتغالية"
    ]
  },
  {
    "id": "emb_ireland_cairo",
    "nameAr": "سفارة جمهورية أيرلندا - الزمالك شارع حسن صبري",
    "nameEn": "Embassy of Ireland - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0608,
    "lng": 31.2192,
    "aliases": [
      "السفارة الأيرلندية"
    ]
  },
  {
    "id": "emb_jordan_cairo",
    "nameAr": "سفارة المملكة الأردنية الهاشمية - الدقي شارع المساحة",
    "nameEn": "Embassy of the Hashemite Kingdom of Jordan - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0375,
    "lng": 31.2085,
    "aliases": [
      "السفارة الأردنية"
    ]
  },
  {
    "id": "emb_lebanon_cairo",
    "nameAr": "سفارة الجمهورية اللبنانية - الزمالك شارع المنصور محمد",
    "nameEn": "Embassy of Lebanon - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0615,
    "lng": 31.2225,
    "aliases": [
      "السفارة اللبنانية"
    ]
  },
  {
    "id": "emb_iraq_cairo",
    "nameAr": "سفارة جمهورية العراق - الدقي شارع الجيزة والنيل",
    "nameEn": "Embassy of the Republic of Iraq - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0335,
    "lng": 31.2165,
    "aliases": [
      "السفارة العراقية"
    ]
  },
  {
    "id": "emb_oman_cairo",
    "nameAr": "سفارة سلطنة عمان - الزمالك شارع شجرة الدر",
    "nameEn": "Embassy of the Sultanate of Oman - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0588,
    "lng": 31.2208,
    "aliases": [
      "السفارة العمانية"
    ]
  },
  {
    "id": "emb_bahrain_cairo",
    "nameAr": "سفارة مملكة البحرين - الزمالك شارع البرازيل",
    "nameEn": "Embassy of the Kingdom of Bahrain - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0622,
    "lng": 31.2212,
    "aliases": [
      "السفارة البحرينية"
    ]
  },
  {
    "id": "emb_tunisia_cairo",
    "nameAr": "سفارة الجمهورية التونسية - الزمالك شارع السعادة",
    "nameEn": "Embassy of Tunisia - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0598,
    "lng": 31.2215,
    "aliases": [
      "السفارة التونسية"
    ]
  },
  {
    "id": "emb_morocco_cairo",
    "nameAr": "سفارة المملكة المغربية - الزمالك شارع صلاح الدين",
    "nameEn": "Embassy of the Kingdom of Morocco - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0602,
    "lng": 31.2185,
    "aliases": [
      "السفارة المغربية"
    ]
  },
  {
    "id": "emb_algeria_cairo",
    "nameAr": "سفارة الجمهورية الجزائرية الديمقراطية الشعبية - الزمالك",
    "nameEn": "Embassy of Algeria - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0619,
    "lng": 31.2222,
    "aliases": [
      "السفارة الجزائرية"
    ]
  },
  {
    "id": "emb_libya_cairo",
    "nameAr": "سفارة دولة ليبيا - الزمالك شارع الإسماعيلية ومظهر",
    "nameEn": "Embassy of Libya - Zamalek",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "safaa_hegazy",
    "lat": 30.0632,
    "lng": 31.2205,
    "aliases": [
      "السفارة الليبية"
    ]
  },
  {
    "id": "emb_sudan_cairo",
    "nameAr": "سفارة جمهورية السودان - الدقي شارع الدقي الرئيسي",
    "nameEn": "Embassy of Sudan - Dokki",
    "category": "government",
    "categoryAr": "مقر حكومي وسفارة",
    "categoryEn": "Government & Embassy",
    "nearestStationId": "dokki",
    "lat": 30.0398,
    "lng": 31.2122,
    "aliases": [
      "السفارة السودانية"
    ]
  },
  {
    "id": "tr_ramses_station",
    "nameAr": "محطة مصر للقطارات - ميدان رمسيس",
    "nameEn": "Ramses Central Railway Station (Mahattat Misr)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0628,
    "lng": 31.2498,
    "aliases": [
      "محطة مصر",
      "محطة رمسيس",
      "قطارات رمسيس",
      "Ramses Station"
    ]
  },
  {
    "id": "tr_giza_railway_station",
    "nameAr": "محطة قطارات الجيزة - ميدان الجيزة",
    "nameEn": "Giza Railway Station",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "giza",
    "lat": 30.0098,
    "lng": 31.2078,
    "aliases": [
      "محطة الجيزة",
      "قطار الجيزة"
    ]
  },
  {
    "id": "tr_bashtil_station",
    "nameAr": "محطة قطارات صعيد مصر المركزية - بشتيل",
    "nameEn": "Bashtil Upper Egypt Central Station",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0715,
    "lng": 31.2055,
    "aliases": [
      "محطة بشتيل",
      "قطارات بشتيل",
      "محطة بشتيل الجديدة"
    ]
  },
  {
    "id": "tr_adly_mansour_hub",
    "nameAr": "مجمع ومحطة عدلي منصور التبادلية المركزية الكبرى",
    "nameEn": "Adly Mansour Central Interchange Transport Hub",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "adly_mansour",
    "lat": 30.1472,
    "lng": 31.4018,
    "aliases": [
      "محطة عدلي منصور التبادلية",
      "موقف عدلي منصور"
    ]
  },
  {
    "id": "tr_shubra_kheima_station",
    "nameAr": "محطة قطارات شبرا الخيمة",
    "nameEn": "Shubra El-Kheima Railway Station",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "shubra_el_kheima",
    "lat": 30.1225,
    "lng": 31.2445,
    "aliases": [
      "قطار شبرا الخيمة"
    ]
  },
  {
    "id": "tr_helwan_train_station",
    "nameAr": "محطة قطارات حلوان المركزية",
    "nameEn": "Helwan Railway Station",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "helwan",
    "lat": 29.8455,
    "lng": 31.3325,
    "aliases": [
      "محطة حلوان"
    ]
  },
  {
    "id": "tr_ain_shams_station",
    "nameAr": "محطة قطارات عين شمس - خط السويس",
    "nameEn": "Ain Shams Railway Station",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "ain_shams",
    "lat": 30.1315,
    "lng": 31.3245,
    "aliases": [
      "محطة عين شمس"
    ]
  },
  {
    "id": "tr_matariya_train_station",
    "nameAr": "محطة قطارات المطرية التاريخية",
    "nameEn": "El-Matareyya Train Station",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_matareyya",
    "lat": 30.1265,
    "lng": 31.3115,
    "aliases": [
      "محطة المطرية"
    ]
  },
  {
    "id": "tr_pont_limoun_station",
    "nameAr": "محطة بونت ليمون للقطارات التبادلية - رمسيس",
    "nameEn": "Pont Limoun Railway Station - Ramses",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0615,
    "lng": 31.2515,
    "aliases": [
      "بونت ليمون"
    ]
  },
  {
    "id": "tr_cairo_airport_t1",
    "nameAr": "مطار القاهرة الدولي - مبنى الركاب 1 (المطار القديم)",
    "nameEn": "Cairo International Airport - Terminal 1",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_haykestep",
    "lat": 30.1115,
    "lng": 31.4015,
    "aliases": [
      "مطار القاهرة مبنى 1",
      "مطار القاهرة القديم"
    ]
  },
  {
    "id": "tr_cairo_airport_t2",
    "nameAr": "مطار القاهرة الدولي - مبنى الركاب 2 (الرحلات الدولية)",
    "nameEn": "Cairo International Airport - Terminal 2",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_haykestep",
    "lat": 30.1145,
    "lng": 31.4055,
    "aliases": [
      "مطار القاهرة مبنى 2"
    ]
  },
  {
    "id": "tr_cairo_airport_t3",
    "nameAr": "مطار القاهرة الدولي - مبنى الركاب 3 (مصر للطيران وتحالف ستار)",
    "nameEn": "Cairo International Airport - Terminal 3",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_haykestep",
    "lat": 30.1185,
    "lng": 31.4085,
    "aliases": [
      "مطار القاهرة مبنى 3",
      "مبنى 3 مصر للطيران"
    ]
  },
  {
    "id": "tr_sphinx_airport",
    "nameAr": "مطار سفنكس الدولي - طريق القاهرة الإسكندرية الصحراوي",
    "nameEn": "Sphinx International Airport (SPX)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.1145,
    "lng": 30.8985,
    "aliases": [
      "مطار سفنكس",
      "Sphinx Airport"
    ]
  },
  {
    "id": "tr_capital_airport",
    "nameAr": "مطار العاصمة الإدارية الدولي (CCE)",
    "nameEn": "Capital International Airport (CCE)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "city_of_arts",
    "lat": 30.0545,
    "lng": 31.8485,
    "aliases": [
      "مطار العاصمة الإدارية",
      "Capital Airport"
    ]
  },
  {
    "id": "tr_almaza_airport",
    "nameAr": "مطار ألماظة الجوي - مصر الجديدة",
    "nameEn": "Almaza Airfield - Heliopolis",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_haykestep",
    "lat": 30.0925,
    "lng": 31.3655,
    "aliases": [
      "مطار ألماظة"
    ]
  },
  {
    "id": "tr_torgoman_bus_terminal",
    "nameAr": "ميناء القاهرة البري - محطة الترجمان الدولية للحافلات",
    "nameEn": "Torgoman International Bus Terminal (Cairo Port)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0575,
    "lng": 31.2425,
    "aliases": [
      "موقف الترجمان",
      "محطة الترجمان"
    ]
  },
  {
    "id": "tr_abdelmoneim_riad_bus",
    "nameAr": "موقف ومحطة حافلات عبد المنعم رياض - ميدان التحرير",
    "nameEn": "Abdel Moneim Riad Bus Terminal - Tahrir",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sadat",
    "lat": 30.0495,
    "lng": 31.2335,
    "aliases": [
      "موقف عبد المنعم رياض"
    ]
  },
  {
    "id": "tr_ahmed_helmy_bus",
    "nameAr": "موقف أحمد حلمي الإقليمي للحافلات والميكروباص - رمسيس",
    "nameEn": "Ahmed Helmy Regional Bus & Microbus Station",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0645,
    "lng": 31.2475,
    "aliases": [
      "موقف أحمد حلمي"
    ]
  },
  {
    "id": "tr_abbassiya_bus_terminal",
    "nameAr": "موقف حافلات ونقل عام العباسية",
    "nameEn": "Abbassiya Public Transport Terminal",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "abbassiya",
    "lat": 30.0695,
    "lng": 31.2795,
    "aliases": [
      "موقف العباسية"
    ]
  },
  {
    "id": "tr_kolleyyet_zeraa_terminal",
    "nameAr": "موقف كلية الزراعة الإقليمي والميكروباص - المؤسسة شبرا",
    "nameEn": "Kolleyyet El-Zeraa (Moassasa) Regional Terminal",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "kolleyyet_el_zeraa",
    "lat": 30.1175,
    "lng": 31.2475,
    "aliases": [
      "موقف المؤسسة",
      "موقف كلية الزراعة"
    ]
  },
  {
    "id": "tr_mounib_bus_terminal",
    "nameAr": "موقف المنيب الإقليمي لأقاليم الصعيد ومحافظات مصر",
    "nameEn": "El-Mounib Regional Transport Station (Upper Egypt)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_mounib",
    "lat": 29.9825,
    "lng": 31.2125,
    "aliases": [
      "موقف المنيب"
    ]
  },
  {
    "id": "tr_marg_microbus_terminal",
    "nameAr": "موقف المرج الجديد الإقليمي - محافظات الدلتا والقناة",
    "nameEn": "El-Marg Regional Microbus Terminal",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_marg",
    "lat": 30.1535,
    "lng": 31.3365,
    "aliases": [
      "موقف المرج"
    ]
  },
  {
    "id": "tr_helwan_microbus_terminal",
    "nameAr": "موقف حلوان الإقليمي لحلوان والتبين ومحافظات الصعيد",
    "nameEn": "Helwan Regional Microbus Terminal",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "helwan",
    "lat": 29.8465,
    "lng": 31.3345,
    "aliases": [
      "موقف حلوان"
    ]
  },
  {
    "id": "tr_salam_bus_terminal",
    "nameAr": "موقف السلام النموذجي - بلبيس والإسماعيلية والشرقية",
    "nameEn": "Al-Salam Regional Transport Terminal",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_11_salam",
    "lat": 30.1655,
    "lng": 31.3995,
    "aliases": [
      "موقف السلام"
    ]
  },
  {
    "id": "tr_giza_square_terminal",
    "nameAr": "موقف ميكروباص ميدان الجيزة (شارع مراد وربيع الجيزي)",
    "nameEn": "Giza Square Microbus Hub",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "giza",
    "lat": 30.0085,
    "lng": 31.2065,
    "aliases": [
      "موقف ميدان الجيزة"
    ]
  },
  {
    "id": "tr_sayyeda_aisha_terminal",
    "nameAr": "موقف السيدة عائشة الإقليمي لسيارات الأقاليم والضواحي",
    "nameEn": "Sayyeda Aisha Regional Microbus Hub",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0245,
    "lng": 31.2585,
    "aliases": [
      "موقف السيدة عائشة"
    ]
  },
  {
    "id": "tr_rod_elfarag_hub",
    "nameAr": "محطة وموقف محور روض الفرج التبادلي",
    "nameEn": "Rod El-Farag Corridor Transport Hub",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0885,
    "lng": 31.1895,
    "aliases": [
      "محطة محور روض الفرج"
    ]
  },
  {
    "id": "tr_october_hosary_terminal",
    "nameAr": "موقف الحصري المركزي لسيارات السرفيس والميكروباص - 6 أكتوبر",
    "nameEn": "El-Hosary Central Transport Terminal - 6th October",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9725,
    "lng": 30.9485,
    "aliases": [
      "موقف الحصري"
    ]
  },
  {
    "id": "tr_sheikh_zayed_terminal",
    "nameAr": "موقف هايبر وان وسرفيس الشيخ زايد",
    "nameEn": "Sheikh Zayed Transport Terminal - Hyper One",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0275,
    "lng": 31.0295,
    "aliases": [
      "موقف الشيخ زايد"
    ]
  },
  {
    "id": "tr_tagamoa_rawda_terminal",
    "nameAr": "موقف سرفيس التجمع الخامس - ميدان الغاز وشارع التسعين",
    "nameEn": "New Cairo 5th Settlement Service Hub",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0125,
    "lng": 31.4245,
    "aliases": [
      "موقف التجمع الخامس"
    ]
  },
  {
    "id": "tr_rehab_bus_gate",
    "nameAr": "محطة حافلات النقل العام وسرفيس مدينة الرحاب",
    "nameEn": "Al-Rehab City Central Bus Terminal",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "monorail_auc",
    "lat": 30.0615,
    "lng": 31.4915,
    "aliases": [
      "موقف الرحاب"
    ]
  },
  {
    "id": "tr_madinaty_bus_gate",
    "nameAr": "محطة حافلات النقل الداخلي والخارجي بمدينتي",
    "nameEn": "Madinaty Central Bus Terminal",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1155,
    "lng": 31.6325,
    "aliases": [
      "موقف مدينتي"
    ]
  },
  {
    "id": "sq_tahrir",
    "nameAr": "ميدان التحرير - قلب القاهرة ومجمع التحرير",
    "nameEn": "Tahrir Square (Midan El-Tahrir)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sadat",
    "lat": 30.0444,
    "lng": 31.2356,
    "aliases": [
      "ميدان التحرير",
      "Tahrir Square"
    ]
  },
  {
    "id": "sq_ramses",
    "nameAr": "ميدان رمسيس ومحطة مصر ومسجد الفتح",
    "nameEn": "Ramses Square (Midan Ramses)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_shohadaa",
    "lat": 30.0615,
    "lng": 31.2485,
    "aliases": [
      "ميدان رمسيس"
    ]
  },
  {
    "id": "sq_talaat_harb",
    "nameAr": "ميدان طلعت حرب وتمثال طلعت حرب - وسط البلد",
    "nameEn": "Talaat Harb Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sadat",
    "lat": 30.0475,
    "lng": 31.2395,
    "aliases": [
      "ميدان طلعت حرب"
    ]
  },
  {
    "id": "sq_mostafa_kamel",
    "nameAr": "ميدان مصطفى كامل - وسط البلد",
    "nameEn": "Mostafa Kamel Square - Downtown",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0485,
    "lng": 31.2435,
    "aliases": [
      "ميدان مصطفى كامل"
    ]
  },
  {
    "id": "sq_attaba",
    "nameAr": "ميدان العتبة الخضراء - ملتقى الأسواق ووسط القاهرة",
    "nameEn": "Attaba Square (Midan El-Ataba)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "attaba",
    "lat": 30.0525,
    "lng": 31.2475,
    "aliases": [
      "ميدان العتبة"
    ]
  },
  {
    "id": "sq_opera_attaba",
    "nameAr": "ميدان الأوبرا التاريخي وتمثال إبراهيم باشا - العتبة",
    "nameEn": "Opera Square (Ibrahim Pasha Statue) - Attaba",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "attaba",
    "lat": 30.0515,
    "lng": 31.2465,
    "aliases": [
      "ميدان الأوبرا"
    ]
  },
  {
    "id": "sq_bab_ellouk",
    "nameAr": "ميدان باب اللوق ومحطة المترو والأسواق",
    "nameEn": "Bab El-Louk Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0435,
    "lng": 31.2415,
    "aliases": [
      "ميدان باب اللوق"
    ]
  },
  {
    "id": "sq_falaki",
    "nameAr": "ميدان الفلكي - وسط البلد وعابدين",
    "nameEn": "Falaki Square - Downtown",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0415,
    "lng": 31.2395,
    "aliases": [
      "ميدان الفلكي"
    ]
  },
  {
    "id": "sq_lazoghly",
    "nameAr": "ميدان لاظوغلي ووزارتي العدل والداخلية",
    "nameEn": "Lazoghly Square - Ministries Hub",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "saad_zaghloul",
    "lat": 30.0425,
    "lng": 31.2415,
    "aliases": [
      "ميدان لاظوغلي"
    ]
  },
  {
    "id": "sq_simon_bolivar",
    "nameAr": "ميدان سيمون بوليفار - جاردن سيتي والنيل",
    "nameEn": "Simon Bolivar Square - Garden City",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sadat",
    "lat": 30.0425,
    "lng": 31.2325,
    "aliases": [
      "سيمون بوليفار"
    ]
  },
  {
    "id": "sq_abdeen",
    "nameAr": "ميدان عابدين وقصر عابدين الرئاسي",
    "nameEn": "Abdeen Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "mohamed_naguib",
    "lat": 30.0435,
    "lng": 31.2475,
    "aliases": [
      "ميدان عابدين"
    ]
  },
  {
    "id": "sq_roxy",
    "nameAr": "ميدان روكسي - قلب مصر الجديدة وسينما روكسي",
    "nameEn": "Roxy Square - Heliopolis",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "haroun",
    "lat": 30.0915,
    "lng": 31.3145,
    "aliases": [
      "ميدان روكسي",
      "روكسي"
    ]
  },
  {
    "id": "sq_korba",
    "nameAr": "ميدان الكوربة التاريخي ومباني التراث البلجيكي",
    "nameEn": "Korba Square - Heliopolis Historic Quarter",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_ahram",
    "lat": 30.0915,
    "lng": 31.3265,
    "aliases": [
      "ميدان الكوربة",
      "الكوربة"
    ]
  },
  {
    "id": "sq_triumph",
    "nameAr": "ميدان تريومف - مصر الجديدة",
    "nameEn": "Triumph Square - Heliopolis",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "haroun",
    "lat": 30.0975,
    "lng": 31.3345,
    "aliases": [
      "ميدان تريومف"
    ]
  },
  {
    "id": "sq_hegaz",
    "nameAr": "ميدان الحجاز ومسجد الحجاز - مصر الجديدة",
    "nameEn": "Hegaz Square - Heliopolis",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "heliopolis",
    "lat": 30.1045,
    "lng": 31.3415,
    "aliases": [
      "ميدان الحجاز"
    ]
  },
  {
    "id": "sq_ismailia_heliopolis",
    "nameAr": "ميدان الإسماعيلية - مصر الجديدة",
    "nameEn": "Ismailia Square - Heliopolis",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_ahram",
    "lat": 30.0925,
    "lng": 31.3235,
    "aliases": [
      "ميدان الإسماعيلية مصر الجديدة"
    ]
  },
  {
    "id": "sq_salah_eldin_heliopolis",
    "nameAr": "ميدان صلاح الدين - مصر الجديدة",
    "nameEn": "Salah El-Din Square - Heliopolis",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_ahram",
    "lat": 30.0935,
    "lng": 31.3295,
    "aliases": [
      "ميدان صلاح الدين مصر الجديدة"
    ]
  },
  {
    "id": "sq_mahkama_heliopolis",
    "nameAr": "ميدان المحكمة - مصر الجديدة",
    "nameEn": "El-Mahkama Square (Court Square) - Heliopolis",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "haroun",
    "lat": 30.0965,
    "lng": 31.3245,
    "aliases": [
      "ميدان المحكمة مصر الجديدة"
    ]
  },
  {
    "id": "sq_gamea_heliopolis",
    "nameAr": "ميدان الجامع - مصر الجديدة للتسوق الشعبي",
    "nameEn": "El-Gamea Square - Heliopolis",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "haroun",
    "lat": 30.0945,
    "lng": 31.3215,
    "aliases": [
      "ميدان الجامع"
    ]
  },
  {
    "id": "sq_alf_maskan",
    "nameAr": "ميدان الألف مسكن - جسر السويس ومحطة المترو",
    "nameEn": "Alf Maskan Square - Gesr El-Suez",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "alf_maskan",
    "lat": 30.1195,
    "lng": 31.3385,
    "aliases": [
      "ميدان الألف مسكن"
    ]
  },
  {
    "id": "sq_matariya_obelisk",
    "nameAr": "ميدان المطرية ومسلة سنوسرت",
    "nameEn": "El-Matareyya Square & Obelisk",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_matareyya",
    "lat": 30.1285,
    "lng": 31.3145,
    "aliases": [
      "ميدان المطرية"
    ]
  },
  {
    "id": "sq_ibn_sendel",
    "nameAr": "ميدان ابن سندر - حلمية الزيتون وحمام القبة",
    "nameEn": "Ibn Sendel Square - Helmeyat El-Zaytoun",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "helmeyat_el_zaytoun",
    "lat": 30.1055,
    "lng": 31.3125,
    "aliases": [
      "ميدان ابن سندر"
    ]
  },
  {
    "id": "sq_saray_qobba",
    "nameAr": "ميدان سراي القبة ومصر والسودان",
    "nameEn": "Saray El-Qobba Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "saray_el_qobba",
    "lat": 30.0985,
    "lng": 31.3045,
    "aliases": [
      "ميدان سراي القبة"
    ]
  },
  {
    "id": "sq_kobri_qobba",
    "nameAr": "ميدان كوبري القبة وإدارة التجنيد والمساحة",
    "nameEn": "Kobri El-Qobba Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "kobri_el_qobba",
    "lat": 30.0915,
    "lng": 31.2985,
    "aliases": [
      "ميدان كوبري القبة"
    ]
  },
  {
    "id": "sq_el_saa_nasrcity",
    "nameAr": "ميدان الساعة - مدينة نصر أول عباس العقاد",
    "nameEn": "El-Saa Square (Clock Square) - Nasr City",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "fair_zone",
    "lat": 30.0655,
    "lng": 31.3315,
    "aliases": [
      "ميدان الساعة مدينة نصر"
    ]
  },
  {
    "id": "sq_hay_sabea_nasrcity",
    "nameAr": "ميدان الحي السابع - مدينة نصر",
    "nameEn": "Seventh District Square - Nasr City",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "fair_zone",
    "lat": 30.0485,
    "lng": 31.3415,
    "aliases": [
      "ميدان الحي السابع"
    ]
  },
  {
    "id": "sq_hay_asher_nasrcity",
    "nameAr": "ميدان وموقف الحي العاشر - مدينة نصر",
    "nameEn": "Tenth District Square - Nasr City",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "fair_zone",
    "lat": 30.0385,
    "lng": 31.3655,
    "aliases": [
      "ميدان الحي العاشر"
    ]
  },
  {
    "id": "sq_tayaran_nasrcity",
    "nameAr": "ميدان الطيران - مدينة نصر وشارع الطيران",
    "nameEn": "Al-Tayaran Square - Nasr City",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "fair_zone",
    "lat": 30.0625,
    "lng": 31.3285,
    "aliases": [
      "ميدان الطيران"
    ]
  },
  {
    "id": "sq_rabaa_nasrcity",
    "nameAr": "ميدان الشهيد هشام بركات (رابعة العدوية سابقاً)",
    "nameEn": "Hesham Barakat Square (Ex-Rabaa) - Nasr City",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "stadium",
    "lat": 30.0665,
    "lng": 31.3245,
    "aliases": [
      "ميدان رابعة"
    ]
  },
  {
    "id": "sq_abbas_nahas_intersection",
    "nameAr": "تقاطع شارع عباس العقاد مع مصطفى النحاس - مدينة نصر",
    "nameEn": "Abbas El-Akkad & Mostafa El-Nahas Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "fair_zone",
    "lat": 30.0615,
    "lng": 31.3385,
    "aliases": [
      "تقاطع عباس العقاد مع مصطفى النحاس"
    ]
  },
  {
    "id": "sq_makram_nahas_intersection",
    "nameAr": "تقاطع شارع مكرم عبيد مع مصطفى النحاس - مدينة نصر",
    "nameEn": "Makram Ebeid & Mostafa El-Nahas Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "fair_zone",
    "lat": 30.0645,
    "lng": 31.3445,
    "aliases": [
      "تقاطع مكرم عبيد مع مصطفى النحاس"
    ]
  },
  {
    "id": "sq_giza_midan",
    "nameAr": "ميدان الجيزة الرئيسي - مدخل الجيزة والأهرام",
    "nameEn": "Giza Main Square (Midan El-Giza)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "giza",
    "lat": 30.0085,
    "lng": 31.2075,
    "aliases": [
      "ميدان الجيزة"
    ]
  },
  {
    "id": "sq_nahda_giza",
    "nameAr": "ميدان النهضة وتمثال نهضة مصر - أمام جامعة القاهرة",
    "nameEn": "Al-Nahda Square (Egypt Renaissance Statue)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "cairo_university",
    "lat": 30.0275,
    "lng": 31.2135,
    "aliases": [
      "ميدان النهضة",
      "نهضة مصر"
    ]
  },
  {
    "id": "sq_galaa_dokki",
    "nameAr": "ميدان الجلاء وكوبري الجلاء وفندق شيراتون - الدقي",
    "nameEn": "Al-Galaa Square - Dokki & Nile",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "opera",
    "lat": 30.0385,
    "lng": 31.2185,
    "aliases": [
      "ميدان الجلاء الدقي"
    ]
  },
  {
    "id": "sq_dokki_midan",
    "nameAr": "ميدان الدقي وكوبري الدقي وشارع التحرير",
    "nameEn": "Dokki Square (Midan El-Dokki)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "dokki",
    "lat": 30.0385,
    "lng": 31.2115,
    "aliases": [
      "ميدان الدقي"
    ]
  },
  {
    "id": "sq_mesaha_dokki",
    "nameAr": "ميدان المساحة ومطاعم الدقي",
    "nameEn": "Al-Mesaha Square - Dokki",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "dokki",
    "lat": 30.0365,
    "lng": 31.2095,
    "aliases": [
      "ميدان المساحة الدقي"
    ]
  },
  {
    "id": "sq_mostafa_mahmoud_midan",
    "nameAr": "ميدان مصطفى محمود وشارع جامعة الدول العربية - المهندسين",
    "nameEn": "Mostafa Mahmoud Square - Mohandessin",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0525,
    "lng": 31.2025,
    "aliases": [
      "ميدان مصطفى محمود المهندسين"
    ]
  },
  {
    "id": "sq_sphinx_mohandessin",
    "nameAr": "ميدان سفنكس وشارع أحمد عرابي - المهندسين",
    "nameEn": "Sphinx Square - Mohandessin",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "wadi_el_nile",
    "lat": 30.0585,
    "lng": 31.2085,
    "aliases": [
      "ميدان سفنكس المهندسين"
    ]
  },
  {
    "id": "sq_lebanon_midan",
    "nameAr": "ميدان لبنان ومحور 26 يوليو - المهندسين",
    "nameEn": "Lebanon Square (Midan Lobnan) - Mohandessin",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "wadi_el_nile",
    "lat": 30.0625,
    "lng": 31.1985,
    "aliases": [
      "ميدان لبنان",
      "Lebanon Square"
    ]
  },
  {
    "id": "sq_kitkat_midan",
    "nameAr": "ميدان الكيت كات وكورنيش النيل ومحطة المترو",
    "nameEn": "Kit Kat Square (Midan El-Kit Kat)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "kit_kat",
    "lat": 30.0625,
    "lng": 31.2135,
    "aliases": [
      "ميدان الكيت كات"
    ]
  },
  {
    "id": "sq_remaya_giza",
    "nameAr": "ميدان الرماية ومدخل طريق الإسكندرية الصحراوي والفيوم",
    "nameEn": "Al-Remaya Square - Giza (Desert Road Entrance)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9885,
    "lng": 31.1145,
    "aliases": [
      "ميدان الرماية"
    ]
  },
  {
    "id": "sq_juhayna_october",
    "nameAr": "ميدان جهينة ومول العرب ومحور 26 يوليو - 6 أكتوبر",
    "nameEn": "Juhayna Square - 6th of October",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0075,
    "lng": 30.9735,
    "aliases": [
      "ميدان جهينة"
    ]
  },
  {
    "id": "sq_hosary_october",
    "nameAr": "ميدان الحصري وجامع الحصري والمحور المركزي - 6 أكتوبر",
    "nameEn": "El-Hosary Square - 6th of October",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9725,
    "lng": 30.9475,
    "aliases": [
      "ميدان الحصري 6 أكتوبر"
    ]
  },
  {
    "id": "sq_nagda_october",
    "nameAr": "ميدان النجدة - 6 أكتوبر",
    "nameEn": "Al-Nagda Square - 6th of October",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9685,
    "lng": 30.9385,
    "aliases": [
      "ميدان النجدة"
    ]
  },
  {
    "id": "sq_victoria_maadi",
    "nameAr": "ميدان فيكتوريا - المعادي شارع 9",
    "nameEn": "Victoria Square - Maadi",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2585,
    "aliases": [
      "ميدان فيكتوريا"
    ]
  },
  {
    "id": "sq_horreya_maadi",
    "nameAr": "ميدان الحرية وجراند مول - المعادي",
    "nameEn": "Al-Horreya Square - Maadi Grand Mall",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2645,
    "aliases": [
      "ميدان الحرية المعادي"
    ]
  },
  {
    "id": "sq_degla_maadi",
    "nameAr": "ميدان دجلة والنوادي الرياضية - المعادي",
    "nameEn": "Degla Square - Maadi",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sakanat_el_maadi",
    "lat": 29.9575,
    "lng": 31.2745,
    "aliases": [
      "ميدان دجلة المعادي"
    ]
  },
  {
    "id": "sq_laselky_maadi",
    "nameAr": "ميدان اللاسلكي والقرية التكنولوجية - المعادي الجديدة",
    "nameEn": "Al-Laselky Square - New Maadi",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "maadi",
    "lat": 29.9745,
    "lng": 31.2825,
    "aliases": [
      "ميدان اللاسلكي"
    ]
  },
  {
    "id": "sq_helwan_station",
    "nameAr": "ميدان محطة حلوان والشارع التجاري",
    "nameEn": "Helwan Station Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "helwan",
    "lat": 29.8455,
    "lng": 31.3335,
    "aliases": [
      "ميدان حلوان"
    ]
  },
  {
    "id": "sq_shohadaa_helwan",
    "nameAr": "ميدان الشهداء بحلوان",
    "nameEn": "Al-Shohadaa Square - Helwan",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "helwan",
    "lat": 29.8475,
    "lng": 31.3365,
    "aliases": [
      "ميدان الشهداء حلوان"
    ]
  },
  {
    "id": "sq_fustat_midan",
    "nameAr": "ميدان الفسطاط وجامع عمرو بن العاص - مصر القديمة",
    "nameEn": "Al-Fustat Square - Old Cairo",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "mar_girgis",
    "lat": 30.0105,
    "lng": 31.2335,
    "aliases": [
      "ميدان الفسطاط"
    ]
  },
  {
    "id": "sq_sayyeda_zeinab_midan",
    "nameAr": "ميدان السيدة زينب ومسجد أم العواجز",
    "nameEn": "Sayyeda Zeinab Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0305,
    "lng": 31.2385,
    "aliases": [
      "ميدان السيدة زينب"
    ]
  },
  {
    "id": "sq_sayyeda_aisha_midan",
    "nameAr": "ميدان السيدة عائشة والقلعة",
    "nameEn": "Sayyeda Aisha Square - Citadel",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0245,
    "lng": 31.2575,
    "aliases": [
      "ميدان السيدة عائشة"
    ]
  },
  {
    "id": "sq_qalaa_midan",
    "nameAr": "ميدان القلعة (ميدان صلاح الدين ومسجدي السلطان حسن والرفاعي)",
    "nameEn": "Citadel Square (Salah El-Din Square)",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sayyeda_zeinab",
    "lat": 30.0315,
    "lng": 31.2575,
    "aliases": [
      "ميدان القلعة"
    ]
  },
  {
    "id": "sq_douran_shubra",
    "nameAr": "دوران شبرا ومحطة روض الفرج وسينما شبرا",
    "nameEn": "Douran Shubra Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "road_el_farag",
    "lat": 30.0765,
    "lng": 31.2465,
    "aliases": [
      "دوران شبرا"
    ]
  },
  {
    "id": "sq_khalafawy_midan",
    "nameAr": "ميدان الخلفاوي ومعهد ناصر - شبرا",
    "nameEn": "Al-Khalafawy Square - Shubra",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "khalafawy",
    "lat": 30.0985,
    "lng": 31.2455,
    "aliases": [
      "ميدان الخلفاوي"
    ]
  },
  {
    "id": "sq_mazallat_midan",
    "nameAr": "ميدان المظلات ومعهد ناصر وكورنيش شبرا",
    "nameEn": "El-Mazallat Square - Shubra",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_mazallat",
    "lat": 30.1085,
    "lng": 31.2465,
    "aliases": [
      "ميدان المظلات"
    ]
  },
  {
    "id": "sq_massara_midan",
    "nameAr": "ميدان مسرة وترعة البولاقية - شبرا",
    "nameEn": "Massara Square - Shubra",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "massara",
    "lat": 30.0715,
    "lng": 31.2475,
    "aliases": [
      "ميدان مسرة"
    ]
  },
  {
    "id": "sq_abbassiya_midan",
    "nameAr": "ميدان العباسية ومسجد النور ومحطة المترو",
    "nameEn": "Abbassiya Main Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "abbassiya",
    "lat": 30.0705,
    "lng": 31.2805,
    "aliases": [
      "ميدان العباسية"
    ]
  },
  {
    "id": "sq_abdou_pasha_midan",
    "nameAr": "ميدان عبده باشا وهندسة عين شمس",
    "nameEn": "Abdou Pasha Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "abdou_pasha",
    "lat": 30.0635,
    "lng": 31.2775,
    "aliases": [
      "ميدان عبده باشا"
    ]
  },
  {
    "id": "sq_geish_midan",
    "nameAr": "ميدان الجيش وباب الشعرية والظاهر",
    "nameEn": "El-Geish Square - El-Zaher",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_geish",
    "lat": 30.0615,
    "lng": 31.2675,
    "aliases": [
      "ميدان الجيش"
    ]
  },
  {
    "id": "sq_bab_shaariya_midan",
    "nameAr": "ميدان باب الشعرية التاريخي",
    "nameEn": "Bab El-Shaariya Historic Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0545,
    "lng": 31.2585,
    "aliases": [
      "ميدان باب الشعرية"
    ]
  },
  {
    "id": "sq_choueifat_tagamoa",
    "nameAr": "ميدان الشويفات - مدخل التجمع الخامس ومحور المشير",
    "nameEn": "Choueifat Square - New Cairo Entrance",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0095,
    "lng": 31.4185,
    "aliases": [
      "ميدان الشويفات"
    ]
  },
  {
    "id": "sq_downtown_tagamoa",
    "nameAr": "ميدان الداون تاون وشارع التسعين الجنوبي - التجمع الخامس",
    "nameEn": "Downtown Square - 90th St New Cairo",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0155,
    "lng": 31.4125,
    "aliases": [
      "ميدان الداون تاون التجمع"
    ]
  },
  {
    "id": "sq_peoples_square_capital_hub",
    "nameAr": "ميدان ساحة الشعب ومجلس الوزراء - العاصمة الإدارية",
    "nameEn": "Peoples Square Transportation Hub - New Capital",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "city_of_arts",
    "lat": 30.0125,
    "lng": 31.7485,
    "aliases": [
      "ميدان ساحة الشعب بالعاصمة"
    ]
  },
  {
    "id": "sq_arts_city_capital_hub",
    "nameAr": "ميدان مدينة الفنون والثقافة ومحطة القطار الخفيف - العاصمة الإدارية",
    "nameEn": "City of Arts Transport Square - New Capital",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "city_of_arts",
    "lat": 30.0155,
    "lng": 31.7385,
    "aliases": [
      "ميدان مدينة الفنون بالعاصمة"
    ]
  },
  {
    "id": "sq_nasr_road_makram",
    "nameAr": "تقاطع طريق النصر مع مكرم عبيد - مدينة نصر",
    "nameEn": "Nasr Road & Makram Ebeid Intersection",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "fair_zone",
    "lat": 30.0655,
    "lng": 31.3345,
    "aliases": [
      "تقاطع طريق النصر مكرم"
    ]
  },
  {
    "id": "sq_nasr_road_abbas",
    "nameAr": "تقاطع طريق النصر مع عباس العقاد - مدينة نصر",
    "nameEn": "Nasr Road & Abbas El-Akkad Intersection",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "fair_zone",
    "lat": 30.0635,
    "lng": 31.3325,
    "aliases": [
      "تقاطع طريق النصر عباس"
    ]
  },
  {
    "id": "sq_tayaran_nasr_road",
    "nameAr": "تقاطع شارع الطيران مع طريق النصر - رابعة العدوية",
    "nameEn": "Al-Tayaran & Nasr Road Intersection",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "stadium",
    "lat": 30.0655,
    "lng": 31.3215,
    "aliases": [
      "تقاطع الطيران مع النصر"
    ]
  },
  {
    "id": "sq_salah_salem_estade",
    "nameAr": "تقاطع شارع صلاح سالم مع استاد القاهرة ومحطة الاستاد",
    "nameEn": "Salah Salem & Cairo Stadium Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "stadium",
    "lat": 30.0695,
    "lng": 31.3125,
    "aliases": [
      "صلاح سالم الاستاد"
    ]
  },
  {
    "id": "sq_salah_salem_ard_maared",
    "nameAr": "تقاطع شارع صلاح سالم مع أرض المعارض والفيرزون",
    "nameEn": "Salah Salem & Exhibition Ground Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "fair_zone",
    "lat": 30.0685,
    "lng": 31.3085,
    "aliases": [
      "صلاح سالم أرض المعارض"
    ]
  },
  {
    "id": "sq_salah_salem_uruba",
    "nameAr": "محور العروبة وطريق المطار - مصر الجديدة",
    "nameEn": "Al-Orouba Axis & Airport Road Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_ahram",
    "lat": 30.0915,
    "lng": 31.3355,
    "aliases": [
      "محور العروبة"
    ]
  },
  {
    "id": "sq_salah_salem_mirghani",
    "nameAr": "تقاطع صلاح سالم مع شارع الميرغني - كليوباترا",
    "nameEn": "Salah Salem & El-Mirghani Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0885,
    "lng": 31.3285,
    "aliases": [
      "صلاح سالم الميرغني"
    ]
  },
  {
    "id": "sq_gamaat_dowal_shehab",
    "nameAr": "تقاطع شارع جامعة الدول العربية مع شارع شهاب - المهندسين",
    "nameEn": "Gamaat El-Dowal & Shehab Crossing - Mohandessin",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0515,
    "lng": 31.2035,
    "aliases": [
      "جامعة الدول مع شهاب"
    ]
  },
  {
    "id": "sq_gamaat_dowal_batal",
    "nameAr": "تقاطع شارع جامعة الدول مع البطل أحمد عبد العزيز",
    "nameEn": "Gamaat El-Dowal & Batal Abdel Aziz Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0485,
    "lng": 31.2085,
    "aliases": [
      "جامعة الدول مع البطل"
    ]
  },
  {
    "id": "sq_batal_abdel_aziz",
    "nameAr": "شارع وميدان البطل أحمد عبد العزيز - المهندسين",
    "nameEn": "El-Batal Ahmed Abdel Aziz Square - Mohandessin",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "dokki",
    "lat": 30.0465,
    "lng": 31.2095,
    "aliases": [
      "البطل أحمد عبد العزيز"
    ]
  },
  {
    "id": "sq_morad_giza",
    "nameAr": "شارع مراد وميدان النهضة - الجيزة",
    "nameEn": "Mourad Street & Renaissance Hub - Giza",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "cairo_university",
    "lat": 30.0215,
    "lng": 31.2145,
    "aliases": [
      "شارع مراد الجيزة"
    ]
  },
  {
    "id": "sq_bahr_aazam_midan",
    "nameAr": "ميدان وممشى البحر الأعظم النيلي - الجيزة",
    "nameEn": "El-Bahr El-Aazam Nile Square - Giza",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_25_bahr_aazam",
    "lat": 30.0025,
    "lng": 31.2185,
    "aliases": [
      "البحر الأعظم الجيزة"
    ]
  },
  {
    "id": "sq_omraniya_midan",
    "nameAr": "ميدان العمرانية ومحور ترسا - الجيزة",
    "nameEn": "El-Omraniya Main Square & Tersa Axis",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_26_omraniya",
    "lat": 30.0015,
    "lng": 31.1945,
    "aliases": [
      "ميدان العمرانية"
    ]
  },
  {
    "id": "sq_talbiya_midan",
    "nameAr": "ميدان الطالبية وفيصل والهرم",
    "nameEn": "El-Talbiya Square - Faisal & Haram",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_27_talbiya",
    "lat": 29.9985,
    "lng": 31.1765,
    "aliases": [
      "ميدان الطالبية"
    ]
  },
  {
    "id": "sq_maryouteya_faisal",
    "nameAr": "تقاطع المريوطية مع شارع فيصل والهرم",
    "nameEn": "Maryouteya & Faisal St Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_28_maryouteya",
    "lat": 29.9925,
    "lng": 31.1625,
    "aliases": [
      "المريوطية فيصل"
    ]
  },
  {
    "id": "sq_mansoureya_crossing",
    "nameAr": "تقاطع محور المنصورية مع طريق سقارة السياحي",
    "nameEn": "Mansoureya & Saqqara Tourist Axis Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_29_mansoureya",
    "lat": 29.9865,
    "lng": 31.1525,
    "aliases": [
      "محور المنصورية"
    ]
  },
  {
    "id": "sq_sun_capital_crossing",
    "nameAr": "تقاطع طريق الفيوم مع مدخل حدائق الأهرام وصن كابيتال",
    "nameEn": "Fayoum Road & Sun Capital Gate Crossing",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9725,
    "lng": 31.1125,
    "aliases": [
      "مدخل حدائق الأهرام"
    ]
  },
  {
    "id": "sq_daery_autostrad_crossing",
    "nameAr": "تقاطع الطريق الدائري مع الأوتوستراد - المعادي",
    "nameEn": "Ring Road & Autostrad Highway Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_21_autostrad",
    "lat": 29.9825,
    "lng": 31.2985,
    "aliases": [
      "دائري الأوتوستراد"
    ]
  },
  {
    "id": "sq_daery_mokattam_crossing",
    "nameAr": "تقاطع الطريق الدائري مع المقطم والقطامية",
    "nameEn": "Ring Road & Mokattam Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_20_mokattam",
    "lat": 29.9985,
    "lng": 31.3185,
    "aliases": [
      "دائري المقطم"
    ]
  },
  {
    "id": "sq_daery_zahraa_maadi",
    "nameAr": "تقاطع الطريق الدائري مع مدخل زهراء المعادي",
    "nameEn": "Ring Road & Zahraa El-Maadi Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_19_zahraa_maadi",
    "lat": 29.9785,
    "lng": 31.2885,
    "aliases": [
      "دائري زهراء المعادي"
    ]
  },
  {
    "id": "sq_daery_sokhna_crossing",
    "nameAr": "تقاطع الطريق الدائري مع طريق العين السخنة",
    "nameEn": "Ring Road & Ain Sokhna Road Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_17_sokhna",
    "lat": 29.9925,
    "lng": 31.3485,
    "aliases": [
      "دائري طريق السخنة"
    ]
  },
  {
    "id": "sq_daery_moshir_crossing",
    "nameAr": "تقاطع الطريق الدائري مع محور المشير طنطاوي",
    "nameEn": "Ring Road & El-Moshir Axis Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_15_moshir",
    "lat": 30.0245,
    "lng": 31.3985,
    "aliases": [
      "دائري محور المشير"
    ]
  },
  {
    "id": "sq_daery_suez_crossing",
    "nameAr": "تقاطع الطريق الدائري مع طريق السويس الصحراوي",
    "nameEn": "Ring Road & Suez Road Highway Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_13_suez_road",
    "lat": 30.0825,
    "lng": 31.4285,
    "aliases": [
      "دائري طريق السويس"
    ]
  },
  {
    "id": "sq_daery_academy_crossing",
    "nameAr": "تقاطع الطريق الدائري مع أكاديمية الشرطة والتجمع الأول",
    "nameEn": "Ring Road & Police Academy Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_14_academy",
    "lat": 30.0625,
    "lng": 31.4425,
    "aliases": [
      "دائري أكاديمية الشرطة"
    ]
  },
  {
    "id": "sq_daery_golf_crossing",
    "nameAr": "تقاطع الطريق الدائري مع أرض الجولف ومصر الجديدة",
    "nameEn": "Ring Road & The Golf Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_16_golf",
    "lat": 30.0785,
    "lng": 31.3855,
    "aliases": [
      "دائري الجولف"
    ]
  },
  {
    "id": "sq_daery_salam_crossing",
    "nameAr": "تقاطع الطريق الدائري مع موقف السلام ومؤسسة الزكاة",
    "nameEn": "Ring Road & Al-Salam Terminal Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_11_salam",
    "lat": 30.1655,
    "lng": 31.3985,
    "aliases": [
      "دائري السلام"
    ]
  },
  {
    "id": "sq_daery_orabi_crossing",
    "nameAr": "تقاطع الطريق الدائري مع محور أحمد عرابي جسر السويس",
    "nameEn": "Ring Road & Orabi Axis Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_10_orabi",
    "lat": 30.1585,
    "lng": 31.3785,
    "aliases": [
      "دائري عرابي"
    ]
  },
  {
    "id": "sq_daery_marg_crossing",
    "nameAr": "تقاطع الطريق الدائري مع محطة مترو المرج الجديدة",
    "nameEn": "Ring Road & El-Marg Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_7_el_marg",
    "lat": 30.1545,
    "lng": 31.3385,
    "aliases": [
      "دائري المرج"
    ]
  },
  {
    "id": "sq_daery_khosous_crossing",
    "nameAr": "تقاطع الطريق الدائري مع الخصوص ومسطرد",
    "nameEn": "Ring Road & Al-Khosous Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_6_khosous",
    "lat": 30.1425,
    "lng": 31.3125,
    "aliases": [
      "دائري الخصوص"
    ]
  },
  {
    "id": "sq_daery_mostorod_crossing",
    "nameAr": "تقاطع الطريق الدائري مع ترعة الإسماعيلية ومسطرد",
    "nameEn": "Ring Road & Mostorod Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_5_mostorod",
    "lat": 30.1345,
    "lng": 31.2885,
    "aliases": [
      "دائري مسطرد"
    ]
  },
  {
    "id": "sq_daery_bahteem_crossing",
    "nameAr": "تقاطع الطريق الدائري مع بهتيم وشبرا الخيمة",
    "nameEn": "Ring Road & Bahteem Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_4_bahteem",
    "lat": 30.1385,
    "lng": 31.2745,
    "aliases": [
      "دائري بهتيم"
    ]
  },
  {
    "id": "sq_daery_alex_agri_crossing",
    "nameAr": "تقاطع الطريق الدائري مع طريق الإسكندرية الزراعي شبرا بنها",
    "nameEn": "Ring Road & Alexandria Agricultural Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_1_alex_agri",
    "lat": 30.1315,
    "lng": 31.2485,
    "aliases": [
      "دائري الإسكندرية الزراعي"
    ]
  },
  {
    "id": "sq_daery_shubra_banha_crossing",
    "nameAr": "تقاطع الطريق الدائري مع طريق شبرا بنها الحر",
    "nameEn": "Ring Road & Shubra-Banha Free Road Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "brt_3_shubra_banha",
    "lat": 30.1335,
    "lng": 31.2585,
    "aliases": [
      "دائري شبرا بنها"
    ]
  },
  {
    "id": "sq_daery_corridor_crossing",
    "nameAr": "تقاطع الطريق الدائري مع محور روض الفرج وإمبابة",
    "nameEn": "Ring Road & Rod El-Farag Corridor Interchange",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "ring_road",
    "lat": 30.0815,
    "lng": 31.1945,
    "aliases": [
      "دائري محور روض الفرج"
    ]
  },
  {
    "id": "sq_qawmeya_midan",
    "nameAr": "ميدان القومية العربية وإمبابة والبوهي",
    "nameEn": "Al-Qawmeya Main Square - Imbaba",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "al_qawmeya",
    "lat": 30.0785,
    "lng": 31.2015,
    "aliases": [
      "ميدان القومية"
    ]
  },
  {
    "id": "sq_bohy_midan",
    "nameAr": "ميدان البوهي - إمبابة",
    "nameEn": "El-Bohy Square - Imbaba",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_bohy",
    "lat": 30.0745,
    "lng": 31.2055,
    "aliases": [
      "ميدان البوهي"
    ]
  },
  {
    "id": "sq_sudan_street_midan",
    "nameAr": "شارع السودان ومحور 26 يوليو - المهندسين",
    "nameEn": "Sudan Street & 26th of July Hub",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "sudan",
    "lat": 30.0655,
    "lng": 31.2015,
    "aliases": [
      "شارع السودان"
    ]
  },
  {
    "id": "sq_tawfikeya_midan",
    "nameAr": "ميدان التوفيقية ونادي الترسانة - المهندسين",
    "nameEn": "El-Tawfikeya Square - Mohandessin",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "el_tawfikeya",
    "lat": 30.0615,
    "lng": 31.2045,
    "aliases": [
      "ميدان التوفيقية"
    ]
  },
  {
    "id": "sq_wadi_nile_midan",
    "nameAr": "ميدان وادي النيل ومسجد الحامدية الشاذلية - المهندسين",
    "nameEn": "Wadi El-Nile Square - Mohandessin",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "wadi_el_nile",
    "lat": 30.0575,
    "lng": 31.2065,
    "aliases": [
      "ميدان وادي النيل"
    ]
  },
  {
    "id": "sq_bulaq_dakrour_station",
    "nameAr": "ميدان محطة بولاق الدكرور وصفط اللبن",
    "nameEn": "Bulaq El-Dakrour Station Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "bulaq_el_dakrour",
    "lat": 30.0355,
    "lng": 31.1945,
    "aliases": [
      "ميدان بولاق الدكرور"
    ]
  },
  {
    "id": "sq_faisal_station_hub",
    "nameAr": "ميدان محطة مترو فيصل وكوبري فيصل والجيزة",
    "nameEn": "Faisal Metro Station Hub & Overpass",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "faisal",
    "lat": 30.0165,
    "lng": 31.1985,
    "aliases": [
      "ميدان مترو فيصل"
    ]
  },
  {
    "id": "sq_saqyet_mekky_hub",
    "nameAr": "ميدان ساقية مكي وترعة الزمر - الجيزة",
    "nameEn": "Saqyet Mekky Hub & Teret El-Zomor",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "saqyet_mekky",
    "lat": 29.9955,
    "lng": 31.2085,
    "aliases": [
      "ميدان ساقية مكي"
    ]
  },
  {
    "id": "sq_omm_masryeen_hub",
    "nameAr": "ميدان أم المصريين ومستشفى أم المصريين",
    "nameEn": "Omm El-Masryeen Station Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "omm_el_masryeen",
    "lat": 30.0055,
    "lng": 31.2075,
    "aliases": [
      "ميدان أم المصريين"
    ]
  },
  {
    "id": "sq_dar_elsalam_hub",
    "nameAr": "ميدان محطة مترو دار السلام وكوبري دار السلام",
    "nameEn": "Dar El-Salam Station Hub",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "dar_el_salam",
    "lat": 29.9875,
    "lng": 31.2335,
    "aliases": [
      "ميدان دار السلام"
    ]
  },
  {
    "id": "sq_hadayeq_maadi_hub",
    "nameAr": "ميدان محطة مترو حدائق المعادي وشارع حسنين دسوقي",
    "nameEn": "Hadayeq El-Maadi Station Square",
    "category": "transport",
    "categoryAr": "محطة وميدان نقل",
    "categoryEn": "Transport Hub & Square",
    "nearestStationId": "hadayeq_el_maadi",
    "lat": 29.9725,
    "lng": 31.2485,
    "aliases": [
      "حدائق المعادي محطة"
    ]
  },
  {
    "id": "sp_cairo_stadium_main",
    "nameAr": "استاد القاهرة الدولي الرئيسي - مدينة نصر",
    "nameEn": "Cairo International Stadium - Nasr City",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "stadium",
    "lat": 30.0695,
    "lng": 31.3125,
    "aliases": [
      "استاد القاهرة",
      "Cairo Stadium",
      "ستاد القاهرة"
    ]
  },
  {
    "id": "sp_cairo_stadium_halls",
    "nameAr": "مجمع الصالات المغطاة باستاد القاهرة (صالات 1 و2 و3 و4)",
    "nameEn": "Cairo Stadium Indoor Covered Halls Complex",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "stadium",
    "lat": 30.0685,
    "lng": 31.3145,
    "aliases": [
      "صالات استاد القاهرة",
      "الصالة المغطاة"
    ]
  },
  {
    "id": "sp_cairo_stadium_pool",
    "nameAr": "مجمع حمامات السباحة الأولمبي باستاد القاهرة",
    "nameEn": "Cairo Stadium Olympic Swimming Pool Complex",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "stadium",
    "lat": 30.0715,
    "lng": 31.3135,
    "aliases": [
      "مسبح استاد القاهرة"
    ]
  },
  {
    "id": "sp_cairo_stadium_velodrome",
    "nameAr": "مضمار الدراجات الدولي باستاد القاهرة",
    "nameEn": "Cairo Stadium International Velodrome",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "stadium",
    "lat": 30.0725,
    "lng": 31.3155,
    "aliases": [
      "مضمار الدراجات"
    ]
  },
  {
    "id": "sp_cairo_stadium_squash",
    "nameAr": "مجمع الإسكواش والتنس الدولي باستاد القاهرة",
    "nameEn": "Cairo Stadium Squash & Tennis Complex",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "stadium",
    "lat": 30.0705,
    "lng": 31.3165,
    "aliases": [
      "اسكواش استاد القاهرة"
    ]
  },
  {
    "id": "sp_ahly_gezira",
    "nameAr": "النادي الأهلي المصري - المقر التاريخي بالجزيرة",
    "nameEn": "Al Ahly SC - Gezira Historic Main Branch",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "opera",
    "lat": 30.0435,
    "lng": 31.2235,
    "aliases": [
      "الأهلي الجزيرة",
      "Al Ahly Gezira",
      "النادي الاهلي"
    ]
  },
  {
    "id": "sp_ahly_nasrcity",
    "nameAr": "النادي الأهلي - فرع مدينة نصر",
    "nameEn": "Al Ahly SC - Nasr City Branch",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "fair_zone",
    "lat": 30.0525,
    "lng": 31.3485,
    "aliases": [
      "الأهلي مدينة نصر",
      "Al Ahly Nasr City"
    ]
  },
  {
    "id": "sp_ahly_sheikh_zayed",
    "nameAr": "النادي الأهلي - فرع الشيخ زايد",
    "nameEn": "Al Ahly SC - Sheikh Zayed Branch",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0385,
    "lng": 30.9785,
    "aliases": [
      "الأهلي الشيخ زايد",
      "Al Ahly Zayed"
    ]
  },
  {
    "id": "sp_ahly_newcairo",
    "nameAr": "النادي الأهلي - فرع التجمع الخامس (القاهرة الجديدة)",
    "nameEn": "Al Ahly SC - New Cairo 5th Settlement Branch",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_auc",
    "lat": 30.0155,
    "lng": 31.5125,
    "aliases": [
      "الأهلي التجمع",
      "Al Ahly New Cairo"
    ]
  },
  {
    "id": "sp_zamalek_meet_okba",
    "nameAr": "نادي الزمالك للألعاب الرياضية - ميت عقبة المهندسين",
    "nameEn": "Zamalek Sporting Club - Meet Okba Main HQ",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0565,
    "lng": 31.2035,
    "aliases": [
      "نادي الزمالك",
      "Zamalek SC",
      "الزمالك ميت عقبة"
    ]
  },
  {
    "id": "sp_zamalek_october",
    "nameAr": "نادي الزمالك الجديد - مدينة 6 أكتوبر حدائق أكتوبر",
    "nameEn": "Zamalek SC - 6th of October Branch",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9325,
    "lng": 31.0625,
    "aliases": [
      "الزمالك 6 أكتوبر"
    ]
  },
  {
    "id": "sp_gezira_club_zamalek",
    "nameAr": "نادي الجزيرة الرياضي العريق - الزمالك (1882)",
    "nameEn": "Gezira Sporting Club - Zamalek (Est. 1882)",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "opera",
    "lat": 30.0485,
    "lng": 31.2215,
    "aliases": [
      "نادي الجزيرة",
      "Gezira Club"
    ]
  },
  {
    "id": "sp_gezira_club_october",
    "nameAr": "نادي الجزيرة الرياضي - فرع 6 أكتوبر",
    "nameEn": "Gezira Sporting Club - 6th of October Branch",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9885,
    "lng": 30.9585,
    "aliases": [
      "الجزيرة أكتوبر"
    ]
  },
  {
    "id": "sp_shooting_club_dokki",
    "nameAr": "نادي الصيد المصري - المقر الرئيسي بالدقي",
    "nameEn": "Shooting Club (Nadi El-Sayd) - Dokki Main HQ",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "el_bohoth",
    "lat": 30.0415,
    "lng": 31.2015,
    "aliases": [
      "نادي الصيد",
      "نادي الصيد الدقي"
    ]
  },
  {
    "id": "sp_shooting_club_october",
    "nameAr": "نادي الصيد المصري - فرع 6 أكتوبر",
    "nameEn": "Shooting Club - 6th of October Branch",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9655,
    "lng": 30.9325,
    "aliases": [
      "الصيد 6 أكتوبر"
    ]
  },
  {
    "id": "sp_shooting_club_katameya",
    "nameAr": "نادي الصيد المصري - فرع القطامية والتجمع",
    "nameEn": "Shooting Club - Katameya New Cairo Branch",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0085,
    "lng": 31.4125,
    "aliases": [
      "الصيد القطامية"
    ]
  },
  {
    "id": "sp_heliopolis_club_main",
    "nameAr": "نادي هليوبوليس الرياضي - مصر الجديدة (1910)",
    "nameEn": "Heliopolis Sporting Club - Main Heliopolis",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "al_ahram",
    "lat": 30.0935,
    "lng": 31.3285,
    "aliases": [
      "نادي هليوبوليس",
      "HSC"
    ]
  },
  {
    "id": "sp_heliopolis_club_shorouk",
    "nameAr": "نادي هليوبوليس الرياضي - فرع مدينة الشروق",
    "nameEn": "Heliopolis Sporting Club - El-Shorouk Branch",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1285,
    "lng": 31.6215,
    "aliases": [
      "هليوبوليس الشروق"
    ]
  },
  {
    "id": "sp_el_shams_club",
    "nameAr": "نادي الشمس الرياضي - مصر الجديدة وألف مسكن (أكبر أندية مصر)",
    "nameEn": "El-Shams Sporting Club - Alf Maskan",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "el_shams_club",
    "lat": 30.1145,
    "lng": 31.3415,
    "aliases": [
      "نادي الشمس"
    ]
  },
  {
    "id": "sp_maadi_sporting_club",
    "nameAr": "نادي المعادي الرياضي واليخت - المعادي شارع دمشق",
    "nameEn": "Maadi Sporting Club & Yacht - Maadi",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "maadi",
    "lat": 29.9625,
    "lng": 31.2685,
    "aliases": [
      "نادي المعادي"
    ]
  },
  {
    "id": "sp_maadi_yacht_nile",
    "nameAr": "نادي اليخت بالمعادي - كورنيش النيل المعادي",
    "nameEn": "Maadi Yacht Club - Nile Corniche",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2485,
    "aliases": [
      "يخت المعادي"
    ]
  },
  {
    "id": "sp_wadi_degla_maadi",
    "nameAr": "نادي وادي دجلة - زهراء المعادي المقر الأول",
    "nameEn": "Wadi Degla Club - Zahraa El-Maadi",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_19_zahraa_maadi",
    "lat": 29.9725,
    "lng": 31.2895,
    "aliases": [
      "وادي دجلة المعادي",
      "Wadi Degla"
    ]
  },
  {
    "id": "sp_wadi_degla_newcairo_lotus",
    "nameAr": "نادي وادي دجلة - التجمع الخامس اللوتس",
    "nameEn": "Wadi Degla Club - New Cairo Lotus",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_auc",
    "lat": 30.0385,
    "lng": 31.4985,
    "aliases": [
      "وادي دجلة التجمع اللوتس"
    ]
  },
  {
    "id": "sp_wadi_degla_newcairo_nakhil",
    "nameAr": "نادي وادي دجلة - التجمع الأول النخيل",
    "nameEn": "Wadi Degla Club - New Cairo Nakhil",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_14_academy",
    "lat": 30.0565,
    "lng": 31.4425,
    "aliases": [
      "وادي دجلة النخيل"
    ]
  },
  {
    "id": "sp_wadi_degla_october",
    "nameAr": "نادي وادي دجلة - 6 أكتوبر",
    "nameEn": "Wadi Degla Club - 6th of October",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9615,
    "lng": 30.9385,
    "aliases": [
      "وادي دجلة أكتوبر"
    ]
  },
  {
    "id": "sp_wadi_degla_sheraton",
    "nameAr": "نادي وادي دجلة - مساكن شيراتون مصر الجديدة",
    "nameEn": "Wadi Degla Club - Sheraton Heliopolis",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "el_haykestep",
    "lat": 30.1025,
    "lng": 31.3765,
    "aliases": [
      "وادي دجلة شيراتون"
    ]
  },
  {
    "id": "sp_egypt_stadium_capital",
    "nameAr": "استاد مصر بالعاصمة الإدارية (المدينة الأولمبية - 93 ألف متفرج)",
    "nameEn": "Egypt Stadium - New Capital Olympic City (93K)",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "city_of_arts",
    "lat": 29.9985,
    "lng": 31.7585,
    "aliases": [
      "استاد العاصمة الإدارية",
      "استاد مصر",
      "مدينة مصر الأولمبية"
    ]
  },
  {
    "id": "sp_capital_covered_halls",
    "nameAr": "مجمع الصالات المغطاة بالمدينة الأولمبية - العاصمة الإدارية",
    "nameEn": "New Capital Olympic City Indoor Covered Halls",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "city_of_arts",
    "lat": 29.9995,
    "lng": 31.7565,
    "aliases": [
      "صالات العاصمة الأولمبية"
    ]
  },
  {
    "id": "sp_capital_aquatic_center",
    "nameAr": "مجمع السباحة الأولمبي بالمدينة الأولمبية - العاصمة الإدارية",
    "nameEn": "New Capital Olympic Aquatic Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "city_of_arts",
    "lat": 29.9975,
    "lng": 31.7575,
    "aliases": [
      "مسبح العاصمة الأولمبي"
    ]
  },
  {
    "id": "sp_arab_contractors_stadium",
    "nameAr": "استاد المقاولون العرب (عثمان أحمد عثمان) - الجبل الأخضر",
    "nameEn": "Arab Contractors Stadium (Jabal Al-Akhdar)",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "stadium",
    "lat": 30.0525,
    "lng": 31.2985,
    "aliases": [
      "استاد المقاولون العرب",
      "الجبل الأخضر"
    ]
  },
  {
    "id": "sp_air_defense_stadium",
    "nameAr": "استاد 30 يونيو (استاد الدفاع الجوي) - محور المشير التجمع",
    "nameEn": "30 June Stadium (Air Defense Stadium) - New Cairo",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_moshir",
    "lat": 30.0185,
    "lng": 31.3885,
    "aliases": [
      "استاد الدفاع الجوي",
      "استاد 30 يونيو"
    ]
  },
  {
    "id": "sp_petrosport_stadium",
    "nameAr": "استاد بتروسبورت الرياضي - التجمع الخامس شارع التسعين",
    "nameEn": "Petro Sport Stadium - 90th St New Cairo",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_air_hospital",
    "lat": 30.0285,
    "lng": 31.4685,
    "aliases": [
      "استاد بتروسبورت"
    ]
  },
  {
    "id": "sp_salam_stadium",
    "nameAr": "استاد السلام الرياضي (استاد الإنتاج الحربي) - مدينة السلام",
    "nameEn": "Al-Salam Stadium (Military Production)",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "adly_mansour",
    "lat": 30.1745,
    "lng": 31.4325,
    "aliases": [
      "استاد السلام"
    ]
  },
  {
    "id": "sp_military_academy_stadium",
    "nameAr": "استاد الكلية الحربية - مصر الجديدة طريق صلاح سالم",
    "nameEn": "Military Academy Stadium - Heliopolis",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "al_ahram",
    "lat": 30.0965,
    "lng": 31.3515,
    "aliases": [
      "استاد الكلية الحربية"
    ]
  },
  {
    "id": "sp_police_stadium_abbassiya",
    "nameAr": "استاد اتحاد الشرطة الرياضي - العباسية وصلاح سالم",
    "nameEn": "Police Sports Association Stadium - Abbassiya",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "abbassiya",
    "lat": 30.0665,
    "lng": 31.2825,
    "aliases": [
      "استاد الشرطة بالعباسية"
    ]
  },
  {
    "id": "sp_olympic_center_maadi",
    "nameAr": "المركز الأولمبي لإعداد المنتخبات الوطنية بالمعادي",
    "nameEn": "Olympic Training Center for National Teams - Maadi",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2745,
    "aliases": [
      "المركز الأولمبي بالمعادي"
    ]
  },
  {
    "id": "sp_zohour_nasrcity",
    "nameAr": "نادي الزهور الرياضي - مدينة نصر شارع يوسف عباس",
    "nameEn": "Al-Zohour Sporting Club - Nasr City",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "fair_zone",
    "lat": 30.0585,
    "lng": 31.3285,
    "aliases": [
      "نادي الزهور مدينة نصر"
    ]
  },
  {
    "id": "sp_zohour_tagamoa",
    "nameAr": "نادي الزهور الرياضي - فرع التجمع الخامس شارع التسعين",
    "nameEn": "Al-Zohour Sporting Club - 5th Settlement New Cairo",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_auc",
    "lat": 30.0215,
    "lng": 31.5045,
    "aliases": [
      "نادي الزهور التجمع"
    ]
  },
  {
    "id": "sp_platinum_newcairo",
    "nameAr": "نادي بلاتينيوم الرياضي - التجمع الخامس اللوتس",
    "nameEn": "Platinum Sporting Club - New Cairo",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_auc",
    "lat": 30.0415,
    "lng": 31.5025,
    "aliases": [
      "نادي بلاتينيوم"
    ]
  },
  {
    "id": "sp_katameya_heights_golf",
    "nameAr": "منتجع قطامية هايتس للغولف والتنس - القاهرة الجديدة",
    "nameEn": "Katameya Heights Golf & Tennis Resort",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0055,
    "lng": 31.4085,
    "aliases": [
      "قطامية هايتس"
    ]
  },
  {
    "id": "sp_katameya_dunes_golf",
    "nameAr": "منتجع قطامية ديونز للغولف والفروسية - التجمع الخامس",
    "nameEn": "Katameya Dunes Golf & Equestrian Club",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_auc",
    "lat": 30.0085,
    "lng": 31.4885,
    "aliases": [
      "قطامية ديونز"
    ]
  },
  {
    "id": "sp_mirage_city_golf",
    "nameAr": "نادي ميراج سيتي للغولف (فندق جي دبليو ماريوت)",
    "nameEn": "Mirage City Golf Club (JW Marriott Cairo)",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_13_suez_road",
    "lat": 30.0785,
    "lng": 31.4585,
    "aliases": [
      "ميراج سيتي غولف"
    ]
  },
  {
    "id": "sp_palm_hills_golf",
    "nameAr": "نادي غولف بالم هيلز - 6 أكتوبر",
    "nameEn": "Palm Hills Golf Club - 6th of October",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0085,
    "lng": 30.9985,
    "aliases": [
      "بالم هيلز غولف"
    ]
  },
  {
    "id": "sp_allegria_golf",
    "nameAr": "نادي أليجريا للغولف الدولي (سوديك وست) - الشيخ زايد",
    "nameEn": "The Allegria Golf Club (Greg Norman Design) - Zayed",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0615,
    "lng": 30.9685,
    "aliases": [
      "أليجريا غولف زايد"
    ]
  },
  {
    "id": "sp_dreamland_golf",
    "nameAr": "نادي غولف دريم لاند وملاعب التنس - 6 أكتوبر",
    "nameEn": "Dreamland Golf & Tennis Resort - 6th of October",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9685,
    "lng": 31.0485,
    "aliases": [
      "دريم لاند غولف"
    ]
  },
  {
    "id": "sp_black_ball_tagamoa",
    "nameAr": "نادي بلاك بول الرياضي والإسكواش الدولي - التجمع الخامس",
    "nameEn": "Black Ball Sporting & Squash Club - New Cairo",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0185,
    "lng": 31.4385,
    "aliases": [
      "بلاك بول التجمع"
    ]
  },
  {
    "id": "sp_smash_sheraton",
    "nameAr": "نادي سماش للتنس والألعاب الرياضية - شيراتون المطار",
    "nameEn": "Smash Tennis Academy & Club - Sheraton",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "el_haykestep",
    "lat": 30.1085,
    "lng": 31.3785,
    "aliases": [
      "سماش شيراتون"
    ]
  },
  {
    "id": "sp_aero_sport_airport",
    "nameAr": "نادي إيرو سبورت (وزارة الطيران المدني) - مطار القاهرة",
    "nameEn": "Aero Sport Club - Cairo Airport",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "el_haykestep",
    "lat": 30.1095,
    "lng": 31.3915,
    "aliases": [
      "إيرو سبورت المطار"
    ]
  },
  {
    "id": "sp_tayaran_heliopolis",
    "nameAr": "نادي الطيران الرياضي - مصر الجديدة",
    "nameEn": "Al-Tayaran Sporting Club - Heliopolis",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "al_ahram",
    "lat": 30.0895,
    "lng": 31.3385,
    "aliases": [
      "نادي الطيران"
    ]
  },
  {
    "id": "sp_nasr_heliopolis",
    "nameAr": "نادي النصر الرياضي - مصر الجديدة وميدان المحكمة",
    "nameEn": "El-Nasr Sporting Club - Heliopolis",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "koleyet_el_banat",
    "lat": 30.0885,
    "lng": 31.3325,
    "aliases": [
      "نادي النصر"
    ]
  },
  {
    "id": "sp_sekka_hadid_nasrcity",
    "nameAr": "نادي السكة الحديد الرياضي - مدينة نصر طريق النصر",
    "nameEn": "El-Sekka El-Hadid Sporting Club - Nasr City",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "fair_zone",
    "lat": 30.0615,
    "lng": 31.3145,
    "aliases": [
      "نادي السكة الحديد"
    ]
  },
  {
    "id": "sp_tersana_meet_okba",
    "nameAr": "نادي الترسانة الرياضي (الشواكيش) - ميت عقبة المهندسين",
    "nameEn": "Tersana Sporting Club - Meet Okba",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0585,
    "lng": 31.2045,
    "aliases": [
      "نادي الترسانة",
      "الشواكيش"
    ]
  },
  {
    "id": "sp_gezira_youth_center",
    "nameAr": "مركز شباب الجزيرة المطور - الزمالك",
    "nameEn": "Gezira Youth Center - Zamalek",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "opera",
    "lat": 30.0445,
    "lng": 31.2225,
    "aliases": [
      "مركز شباب الجزيرة"
    ]
  },
  {
    "id": "sp_olympic_center_helwan",
    "nameAr": "المركز الرياضي لتدريب الفرق القومية - عين حلوان",
    "nameEn": "Helwan Olympic Sports Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "helwan_university",
    "lat": 29.8615,
    "lng": 31.3285,
    "aliases": [
      "مركز تدريب الفرق القومية حلوان"
    ]
  },
  {
    "id": "sp_helwan_sporting_club",
    "nameAr": "نادي حلوان الرياضي العام",
    "nameEn": "Helwan Sporting Club",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "helwan",
    "lat": 29.8445,
    "lng": 31.3365,
    "aliases": [
      "نادي حلوان"
    ]
  },
  {
    "id": "sp_shubra_kheima_club",
    "nameAr": "نادي المؤسسة العمالية الرياضي - شبرا الخيمة",
    "nameEn": "Workers Foundation Sporting Club - Shubra Kheima",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "kolleyyet_el_zeraa",
    "lat": 30.1195,
    "lng": 31.2465,
    "aliases": [
      "نادي المؤسسة العمالية"
    ]
  },
  {
    "id": "sp_6th_october_club",
    "nameAr": "نادي 6 أكتوبر الرياضي - المحور المركزي",
    "nameEn": "6th of October Sporting Club",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 29.9685,
    "lng": 30.9425,
    "aliases": [
      "نادي 6 أكتوبر"
    ]
  },
  {
    "id": "sp_sheikh_zayed_club",
    "nameAr": "نادي الشيخ زايد الرياضي - الحي الثالث",
    "nameEn": "Sheikh Zayed Sporting Club",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "rod_el_farag_corridor",
    "lat": 30.0345,
    "lng": 30.9945,
    "aliases": [
      "نادي الشيخ زايد"
    ]
  },
  {
    "id": "sp_enppi_club_suez_road",
    "nameAr": "نادي إنبي الرياضي - الكيلو 4.5 طريق السويس",
    "nameEn": "Enppi Sporting Club - Suez Road Hub",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_13_suez_road",
    "lat": 30.0825,
    "lng": 31.3855,
    "aliases": [
      "نادي إنبي"
    ]
  },
  {
    "id": "sp_talaea_elgaish_qobba",
    "nameAr": "مجمع طلائع الجيش الرياضي - كوبري القبة",
    "nameEn": "Tala'ea El-Gaish Sports Complex - Kobri El-Qobba",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "kobri_el_qobba",
    "lat": 30.0915,
    "lng": 31.2975,
    "aliases": [
      "طلائع الجيش"
    ]
  },
  {
    "id": "sp_dakhleya_sc_abbassiya",
    "nameAr": "نادي الداخلية الرياضي - العباسية",
    "nameEn": "El-Dakhleya Sporting Club - Abbassiya",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "abbassiya",
    "lat": 30.0675,
    "lng": 31.2815,
    "aliases": [
      "نادي الداخلية"
    ]
  },
  {
    "id": "sp_national_bank_agouza",
    "nameAr": "نادي البنك الأهلي المصري - العجوزة كورنيش النيل",
    "nameEn": "National Bank of Egypt Club - Agouza",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "kit_kat",
    "lat": 30.0575,
    "lng": 31.2155,
    "aliases": [
      "نادي البنك الأهلي"
    ]
  },
  {
    "id": "sp_banque_misr_tagamoa",
    "nameAr": "نادي بنك مصر الرياضي - التجمع الخامس",
    "nameEn": "Banque Misr Sporting Club - New Cairo",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_choueifat",
    "lat": 30.0125,
    "lng": 31.4285,
    "aliases": [
      "نادي بنك مصر"
    ]
  },
  {
    "id": "sp_telecom_egypt_maadi",
    "nameAr": "نادي المصرية للاتصالات - المعادي",
    "nameEn": "Telecom Egypt Sporting Club - Maadi",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "maadi",
    "lat": 29.9645,
    "lng": 31.2645,
    "aliases": [
      "نادي المصرية للاتصالات"
    ]
  },
  {
    "id": "sp_rowing_club_dokki",
    "nameAr": "نادي التجديف المصري ونادي تجديف الشرطة - الدقي على النيل",
    "nameEn": "Egyptian Rowing Club - Dokki Nile Bank",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "opera",
    "lat": 30.0385,
    "lng": 31.2215,
    "aliases": [
      "نادي التجديف الدقي"
    ]
  },
  {
    "id": "sp_cairo_yacht_club_nile",
    "nameAr": "نادي كايت كايرو لليخوت والرياضات المائية - المعادي",
    "nameEn": "Cairo Yacht Club - Maadi Nile",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "maadi",
    "lat": 29.9625,
    "lng": 31.2465,
    "aliases": [
      "يخت القاهرة"
    ]
  },
  {
    "id": "sp_shooting_range_haram",
    "nameAr": "ميدان الرماية الدولي للقوات المسلحة - الهرم والرماية",
    "nameEn": "International Armed Forces Shooting Range - Haram",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9865,
    "lng": 31.1125,
    "aliases": [
      "ميدان الرماية الهرم"
    ]
  },
  {
    "id": "sp_remaya_equestrian",
    "nameAr": "نادي الفروسية للقوات المسلحة - الرماية وحدائق الأهرام",
    "nameEn": "Armed Forces Equestrian Club - Remaya",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_30_sun_capital",
    "lat": 29.9845,
    "lng": 31.1145,
    "aliases": [
      "نادي فروسية القوات المسلحة"
    ]
  },
  {
    "id": "sp_equestrian_club_gezira",
    "nameAr": "نادي الفروسية بالجزيرة - الزمالك",
    "nameEn": "Gezira Equestrian Club - Zamalek",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "opera",
    "lat": 30.0475,
    "lng": 31.2235,
    "aliases": [
      "فروسية الجزيرة"
    ]
  },
  {
    "id": "sp_ferousiya_capital",
    "nameAr": "المدينة الأولمبية للفروسية ومضمار الخيل - العاصمة الإدارية",
    "nameEn": "New Capital Olympic Equestrian & Racecourse",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "city_of_arts",
    "lat": 29.9965,
    "lng": 31.7615,
    "aliases": [
      "فروسية العاصمة الإدارية"
    ]
  },
  {
    "id": "sp_smash_tagamoa",
    "nameAr": "نادي سماش الرياضي - التجمع الخامس اللوتس",
    "nameEn": "Smash Sporting Club - New Cairo",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_auc",
    "lat": 30.0345,
    "lng": 31.4985,
    "aliases": [
      "سماش التجمع"
    ]
  },
  {
    "id": "sp_royal_sporting_shorouk",
    "nameAr": "نادي رويال الرياضي - مدينة الشروق",
    "nameEn": "Royal Sporting Club - El-Shorouk City",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1325,
    "lng": 31.6245,
    "aliases": [
      "رويال الشروق"
    ]
  },
  {
    "id": "sp_green_hills_shorouk",
    "nameAr": "نادي جرين هيلز الرياضي - مدينة الشروق",
    "nameEn": "Green Hills Sporting Club - Shorouk",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1265,
    "lng": 31.6145,
    "aliases": [
      "جرين هيلز الشروق"
    ]
  },
  {
    "id": "sp_badr_sporting_club",
    "nameAr": "نادي مدينة بدر الرياضي الاجتماعي",
    "nameEn": "Badr City Sporting Club",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "lrt_badr",
    "lat": 30.1415,
    "lng": 31.7385,
    "aliases": [
      "نادي بدر"
    ]
  },
  {
    "id": "sp_obour_city_club",
    "nameAr": "نادي مدينة العبور الرياضي - الحي الثاني",
    "nameEn": "El-Obour City Sporting Club",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "lrt_obour",
    "lat": 30.1725,
    "lng": 31.4785,
    "aliases": [
      "نادي العبور"
    ]
  },
  {
    "id": "sp_madinaty_sports_club",
    "nameAr": "نادي مدينتي الرياضي المتكامل",
    "nameEn": "Madinaty Sports Club",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "lrt_shorouk",
    "lat": 30.1185,
    "lng": 31.6285,
    "aliases": [
      "نادي مدينتي"
    ]
  },
  {
    "id": "sp_rehab_sports_club",
    "nameAr": "نادي الرحاب الرياضي الاجتماعي",
    "nameEn": "Al-Rehab Sports Club",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "monorail_auc",
    "lat": 30.0645,
    "lng": 31.4955,
    "aliases": [
      "نادي الرحاب"
    ]
  },
  {
    "id": "sp_youth_city_shubra",
    "nameAr": "المدينة الشبابية والرياضية بحي شرق شبرا الخيمة",
    "nameEn": "Shubra El-Kheima Youth & Sports City",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "shubra_el_kheima",
    "lat": 30.1265,
    "lng": 31.2485,
    "aliases": [
      "المدينة الشبابية بشبرا"
    ]
  },
  {
    "id": "sp_youth_city_asmarat",
    "nameAr": "المدينة الشبابية والرياضية بالأسمرات - المقطم",
    "nameEn": "Al-Asmarat Youth & Sports City - Mokattam",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_20_mokattam",
    "lat": 30.0055,
    "lng": 31.3245,
    "aliases": [
      "مدينة الأسمرات الشبابية"
    ]
  },
  {
    "id": "sp_youth_center_sahel",
    "nameAr": "مركز شباب الساحل المطور - شبرا مصر",
    "nameEn": "Sahel Youth Center - Shubra",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "road_el_farag",
    "lat": 30.0815,
    "lng": 31.2435,
    "aliases": [
      "مركز شباب الساحل"
    ]
  },
  {
    "id": "sp_youth_center_road_elfarag",
    "nameAr": "مركز شباب روض الفرج - شبرا",
    "nameEn": "Road El-Farag Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "road_el_farag",
    "lat": 30.0785,
    "lng": 31.2445,
    "aliases": [
      "مركز شباب روض الفرج"
    ]
  },
  {
    "id": "sp_youth_center_matariya",
    "nameAr": "مركز شباب المطرية - عين شمس والمطرية",
    "nameEn": "El-Matareyya Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "el_matareyya",
    "lat": 30.1255,
    "lng": 31.3125,
    "aliases": [
      "مركز شباب المطرية"
    ]
  },
  {
    "id": "sp_youth_center_ainshams",
    "nameAr": "مركز شباب عين شمس - شارع أحمد عصمت",
    "nameEn": "Ain Shams Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "ain_shams",
    "lat": 30.1295,
    "lng": 31.3265,
    "aliases": [
      "مركز شباب عين شمس"
    ]
  },
  {
    "id": "sp_youth_center_zeitoun",
    "nameAr": "مركز شباب حلمية الزيتون المطور",
    "nameEn": "Helmeyat El-Zaytoun Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "helmeyat_el_zaytoun",
    "lat": 30.1085,
    "lng": 31.3165,
    "aliases": [
      "مركز شباب الزيتون"
    ]
  },
  {
    "id": "sp_youth_center_saray_qobba",
    "nameAr": "مركز شباب سراي القبة والوايلي",
    "nameEn": "Saray El-Qobba Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "saray_el_qobba",
    "lat": 30.0965,
    "lng": 31.3025,
    "aliases": [
      "مركز شباب سراي القبة"
    ]
  },
  {
    "id": "sp_youth_center_abbassiya",
    "nameAr": "مركز شباب العباسية والوايلي الكبير",
    "nameEn": "Abbassiya & Wayli Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "abbassiya",
    "lat": 30.0725,
    "lng": 31.2785,
    "aliases": [
      "مركز شباب العباسية"
    ]
  },
  {
    "id": "sp_youth_center_bab_shaariya",
    "nameAr": "مركز شباب باب الشعرية - ميدان الجيش",
    "nameEn": "Bab El-Shaariya Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0555,
    "lng": 31.2615,
    "aliases": [
      "مركز شباب باب الشعرية"
    ]
  },
  {
    "id": "sp_youth_center_darrasa",
    "nameAr": "مركز شباب الدراسة والأزهر",
    "nameEn": "Darrasa Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "bab_el_shaariya",
    "lat": 30.0465,
    "lng": 31.2685,
    "aliases": [
      "مركز شباب الدراسة"
    ]
  },
  {
    "id": "sp_youth_center_maadi",
    "nameAr": "مركز شباب المعادي وشارع النادي",
    "nameEn": "Maadi Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "maadi",
    "lat": 29.9615,
    "lng": 31.2655,
    "aliases": [
      "مركز شباب المعادي"
    ]
  },
  {
    "id": "sp_youth_center_dar_elsalam",
    "nameAr": "مركز شباب دار السلام والجزيرة الوسطى",
    "nameEn": "Dar El-Salam Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "dar_el_salam",
    "lat": 29.9865,
    "lng": 31.2355,
    "aliases": [
      "مركز شباب دار السلام"
    ]
  },
  {
    "id": "sp_youth_center_helwan",
    "nameAr": "مركز شباب حلوان النموذجي (مركز شباب 15 مايو)",
    "nameEn": "Helwan Model Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "helwan",
    "lat": 29.8425,
    "lng": 31.3385,
    "aliases": [
      "مركز شباب حلوان"
    ]
  },
  {
    "id": "sp_youth_center_ain_helwan",
    "nameAr": "مركز شباب عين حلوان الرياضي",
    "nameEn": "Ain Helwan Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "ain_helwan",
    "lat": 29.8545,
    "lng": 31.3265,
    "aliases": [
      "مركز شباب عين حلوان"
    ]
  },
  {
    "id": "sp_youth_center_hadayeq_helwan",
    "nameAr": "مركز شباب حدائق حلوان",
    "nameEn": "Hadayeq Helwan Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "hadayeq_helwan",
    "lat": 29.8985,
    "lng": 31.3115,
    "aliases": [
      "مركز شباب حدائق حلوان"
    ]
  },
  {
    "id": "sp_youth_center_wadi_hof",
    "nameAr": "مركز شباب وادي حوف والسيارات",
    "nameEn": "Wadi Hof Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "wadi_hof",
    "lat": 29.8765,
    "lng": 31.3185,
    "aliases": [
      "مركز شباب وادي حوف"
    ]
  },
  {
    "id": "sp_youth_center_tora",
    "nameAr": "مركز شباب طرة البلد الرياضي",
    "nameEn": "Tora El-Balad Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "tora_el_balad",
    "lat": 29.9425,
    "lng": 31.2745,
    "aliases": [
      "مركز شباب طرة"
    ]
  },
  {
    "id": "sp_youth_center_giza",
    "nameAr": "مركز شباب الجيزة - ساقية مكي وميدان الجيزة",
    "nameEn": "Giza Youth Center - Saqyet Mekky",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "saqyet_mekky",
    "lat": 29.9965,
    "lng": 31.2085,
    "aliases": [
      "مركز شباب الجيزة"
    ]
  },
  {
    "id": "sp_youth_center_omraniya",
    "nameAr": "مركز شباب العمرانية - شارع الدكتور لاشين",
    "nameEn": "El-Omraniya Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_26_omraniya",
    "lat": 30.0025,
    "lng": 31.1925,
    "aliases": [
      "مركز شباب العمرانية"
    ]
  },
  {
    "id": "sp_youth_center_faisal",
    "nameAr": "مركز شباب فيصل والعشرين",
    "nameEn": "Faisal Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "faisal",
    "lat": 30.0145,
    "lng": 31.1845,
    "aliases": [
      "مركز شباب فيصل"
    ]
  },
  {
    "id": "sp_youth_center_haram",
    "nameAr": "مركز شباب الهرم والمريوطية",
    "nameEn": "Al-Haram Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "brt_28_maryouteya",
    "lat": 29.9945,
    "lng": 31.1645,
    "aliases": [
      "مركز شباب الهرم"
    ]
  },
  {
    "id": "sp_youth_center_imbaba",
    "nameAr": "مركز شباب إمبابة ومطار إمبابة المطور",
    "nameEn": "Imbaba Youth Center - Ex-Airport",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "imbaba",
    "lat": 30.0685,
    "lng": 31.2085,
    "aliases": [
      "مركز شباب إمبابة"
    ]
  },
  {
    "id": "sp_youth_center_kitkat",
    "nameAr": "مركز شباب الكيت كات والعجوزة",
    "nameEn": "Kit Kat Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "kit_kat",
    "lat": 30.0635,
    "lng": 31.2125,
    "aliases": [
      "مركز شباب الكيت كات"
    ]
  },
  {
    "id": "sp_youth_center_bulaq_dakrour",
    "nameAr": "مركز شباب بولاق الدكرور وصفط اللبن",
    "nameEn": "Bulaq El-Dakrour Youth Center",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "bulaq_el_dakrour",
    "lat": 30.0365,
    "lng": 31.1915,
    "aliases": [
      "مركز شباب بولاق الدكرور"
    ]
  },
  {
    "id": "sp_youth_center_mit_okba",
    "nameAr": "مركز شباب ميت عقبة - المهندسين",
    "nameEn": "Mit Okba Youth Center - Mohandessin",
    "category": "sports",
    "categoryAr": "نادي واستاد رياضي",
    "categoryEn": "Sports & Stadium",
    "nearestStationId": "gamaat_el_dowal",
    "lat": 30.0575,
    "lng": 31.2055,
    "aliases": [
      "مركز شباب ميت عقبة"
    ]
  }
];

export function getPlaceById(id) {
  return TOP_EGYPT_PLACES.find(p => p.id === id) || null;
}

export function getPlacesByCategory(category) {
  return TOP_EGYPT_PLACES.filter(p => p.category === category);
}

export default TOP_EGYPT_PLACES;
