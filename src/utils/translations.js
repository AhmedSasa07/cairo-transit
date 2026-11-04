// Bilingual Translations Dictionary (Modern Standard Arabic & English)

export const translations = {
  en: {
    // App Branding & Navigation
    appName: 'Egy Metro Guide',
    appSubtitle: 'Navigate Cairo’s Metro, Monorail & LRT With Confidence',
    offlineBadge: '100% Offline Ready',
    tabs: {
      route: 'Routes',
      network: 'Network',
      map: 'Map',
      nearest: 'Nearest',
      stations: 'Stations',
      tickets: 'Tickets',
      schedule: 'Timetable'
    },

    // Route Planner Tab
    routePlanner: {
      title: 'Plan Your Journey',
      fromLabel: 'From (Origin)',
      toLabel: 'To (Destination)',
      fromPlaceholder: 'Select origin station or type place / Google Maps link...',
      toPlaceholder: 'Select destination station or type place / Google Maps link...',
      swapStations: 'Swap / Reverse Trip (عكس الرحلة)',
      calculateButton: 'Find Routes',
      popularRoutes: 'Popular Daily Routes',
      savedRoutes: 'Saved / Favorite Routes',
      saveTripTooltip: 'Save this route to favorites',
      tripSaved: 'Route saved to favorites!',
      selectStation: 'Select a station...',
      searchStationPlaceholder: 'Search station or landmark...',
      clear: 'Clear',
      routeSummary: 'Route Details',
      stationsPassed: 'Stations',
      approxTime: 'Approx. Time',
      mins: 'mins',
      ticketCost: 'Ticket Price',
      ticketColorLabel: 'Physical Ticket Color',
      transfers: 'Transfers',
      noTransfer: 'Direct Line (0 Transfers)',
      oneTransfer: '1 Line Transfer',
      twoTransfers: '2 Line Transfers',
      stepByStep: 'Route Steps',
      boardTrain: 'Board Train at',
      takeLine: 'Take',
      towardsDirection: 'towards',
      rideFor: 'Ride for',
      changeAt: 'Transfer / Change Trains at',
      changeToLine: 'Switch to',
      alightAt: 'Arrive at Destination',
      passThrough: 'Passing through',
      sameStationAlert: 'Origin and destination are the exact same station!',
      routeNotFound: 'Could not find a valid route between these stations.',
      shareRoute: 'Share Journey',
      startLiveTrip: 'Start Live Trip & Audio Guidance',
      stopLiveTrip: 'End Trip',
      lineBreakdownTitle: 'Stations Per Line',
      multiModalToggle: 'Include Monorail, LRT & BRT',
      multiModalFareNotice: 'Combined multi-modal journey (Metro + Monorail/LRT)',
      tipRushHour: 'Tip: Peak morning hours (07:30 - 09:30 AM) and evening rush (02:30 - 05:00 PM) run trains every 3 minutes.',
      kitKatAlertTitle: 'Line 3 Fork Alert (Kit Kat Station)',
      pasteLinkHint: 'Tip: You can paste a Google Maps link or coordinates directly into the search bar!'
    },

    // Live Trip Guidance & Voice Announcements
    liveTracker: {
      title: 'Live Commute Tracker',
      currentStation: 'Current Station',
      nextStation: 'Next Station',
      remainingStations: 'Stations Remaining',
      transferNextAlert: 'Get ready: Next station is your transfer hub!',
      arrivingDestination: 'Arriving at your destination station shortly!',
      enableVoice: 'Voice Announcements (TTS)',
      voiceActive: 'Audio Voice Enabled',
      stepAdvance: 'Next Station (Advance)',
      stepRewind: 'Previous Station'
    },

    // Ticket & Subscriptions Tab
    ticketGuide: {
      title: 'Cairo Transit Fares & Subscriptions',
      subtitle: 'Official updated tariffs for Metro, Monorail & LRT (Nov 2026)',
      tariffVerifiedBanner: 'Official Tariff • November 2026 Verified',
      fareCalculator: 'Quick Fare Calculator',
      calculatorPrompt: 'Select number of stations to preview ticket color and official price:',
      stationsCount: 'Stations',
      zoneDetails: 'Metro Fare Zones & Ticket Colors',
      singleTrip: 'Single Journey Ticket',
      elderlyDiscount: 'Seniors (60+)',
      specialNeedsDiscount: 'People of Determination (Qaderoon)',
      militaryDiscount: 'Police & Armed Forces (Conscripts)',
      subscriptionCalcTitle: 'Subscription Passes Calculator',
      selectCategory: 'Category',
      studentPass: 'Student Pass (3 Months)',
      publicPass: 'Public Quarterly (3 Months)',
      publicAnnualPass: 'Public Annual (1 Year)',
      seniorsPass: 'Senior Citizens (60+)',
      specialNeedsPass: 'People of Determination (22 EGP)',
      subscriptionOfficesTitle: 'Official Subscription Office Locations',
      walletCardTitle: 'Smart Wallet Card & Balance Tracker',
      walletBalance: 'My Card Balance',
      cardRecharge: 'Add Balance',
      logTrip: 'Deduct Trip Fare',
      lowBalanceWarning: 'Warning: Card balance is below 15 EGP. Please recharge before your trip.',
      fineWarning: 'Turnstile Notice: Riding with an incorrect ticket tier results in an immediate 50 EGP penalty at exit turnstiles.',
      rulesTitle: 'Etiquette & Penalties',
      rules: [
        'Smoking inside stations or on train platforms is strictly prohibited (Fine: 200 EGP).',
        'Middle cars marked with green and red signs are reserved exclusively for women.',
        'Boarding without a ticket or with an insufficient zone ticket incurs a 50 - 100 EGP fine.',
        'Contactless Smart Wallet cards can be recharged with up to 400 EGP and used for up to 5 years.'
      ]
    },

    // Operating Hours & Timetable
    timetable: {
      title: 'Operating Hours & Last Train Schedule',
      subtitle: 'First and last train departures per line, interchange timings, and Ramadan hours',
      regularSchedule: 'Daily Timetable',
      ramadanSchedule: 'Ramadan & Eid Timetable (Extended)',
      firstTrain: 'First Train',
      lastTrain: 'Last Train',
      lastInterchangeAttaba: 'Attaba Interchange Last Train',
      lastInterchangeSadat: 'Sadat (Tahrir) Interchange Last Train',
      lastInterchangeRamses: 'Ramses (Shohadaa) Interchange Last Train',
      headwayTitle: 'Train Frequency (Headway)'
    },

    // Station Explorer
    stationExplorer: {
      title: 'Stations Directory',
      subtitle: 'Comprehensive guide to all 80+ stations across Lines 1, 2, 3, Monorail & LRT',
      searchPlaceholder: 'Search by station, alias (e.g. Urabi, Tahrir), or landmark...',
      allLines: 'All Lines',
      line1: 'Line 1 (Red)',
      line2: 'Line 2 (Orange)',
      line3: 'Line 3 (Green)',
      monorail: 'Monorail',
      lrt: 'LRT Train',
      interchangeOnly: 'Interchange Hubs Only',
      stationsFound: 'stations found',
      stationDetails: 'Station Details',
      operatingHours: 'Operating Hours',
      firstTrain: 'First Train',
      lastTrain: 'Last Train',
      landmarksNear: 'Nearby Areas & Landmarks',
      facilities: 'Station Accessibility & Amenities',
      setAsStart: 'Set as Start (From)',
      setAsEnd: 'Set as End (To)'
    },

    // Nearest Station & Landmarks
    nearestTab: {
      title: 'Find Nearest Station',
      subtitle: 'Use GPS or search 1,000+ Cairo & Egypt places, universities, hospitals, and malls',
      useGpsButton: 'Detect My Location via GPS',
      gpsLocating: 'Detecting GPS location...',
      gpsError: 'Could not access location. Please enable location permissions or choose a destination below.',
      gpsSuccess: 'Closest station to your current location:',
      setAsStartImmediate: 'Start from here',
      searchPlacePlaceholder: 'Search 1,000+ places (e.g. Cairo Univ, Roxy, AUC, Kasr Al Ainy, Citystars)...',
      filterAll: 'All Places',
      filterMuseums: 'Landmarks',
      filterUnis: 'Universities',
      filterGov: 'Gov & Embassies',
      filterTransport: 'Transport Hubs',
      filterShopping: 'Shopping Malls',
      filterHospitals: 'Hospitals',
      popularPlacesTitle: 'Cairo & Egypt Places & Nearest Stations',
      recommendedStation: 'Nearest Station:',
      planTripToHere: 'Plan Route Here'
    },

    // Interactive Map
    mapTab: {
      title: 'Interactive Network Map',
      subtitle: 'Schematic map of Cairo Metro with full zoom, pan, and station inspection',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      resetView: 'Reset View',
      tapToSelect: 'Tap any station dot to view facilities or plan a trip',
      legend: 'Line Legend',
      interchangeBadge: 'Interchange Station'
    },

    // Ad Settings & Monetization
    adSettings: {
      title: 'Ad-Free Experience',
      removeAdsButton: 'Remove Ads Forever ($0.99 / 49.99 EGP)',
      lifetimeLabel: 'One-Time Lifetime Purchase',
      noSubscriptionNeeded: 'No recurring monthly subscriptions. One tap removes all banner ads permanently.',
      adPolicyNotice: 'Ad Safety Policy: Sensitive categories (adult/dating, gambling, loud audio/video) are strictly filtered out per family public transit guidelines.',
      alreadyAdFree: 'Lifetime Ad-Free Status: ACTIVE'
    },

    // Common
    settings: {
      language: 'Language',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      checkUpdates: 'Check Database Updates',
      databaseUpToDate: 'Fare Database: Up to date (November 2026)'
    }
  },

  ar: {
    // App Branding & Navigation
    appName: 'مترو مصر',
    appSubtitle: 'دليلك السريع لمترو القاهرة والمونوريل والقطار الخفيف والأتوبيس الترددي',
    offlineBadge: 'شغال بدون نت 100%',
    tabs: {
      route: 'المشاوير',
      network: 'الشبكة',
      map: 'الخريطة',
      nearest: 'أقرب محطة',
      stations: 'المحطات',
      tickets: 'التذاكر والاشتراكات',
      schedule: 'المواعيد'
    },

    // Route Planner Tab
    routePlanner: {
      title: 'خطط مشوارك',
      fromLabel: 'هتركب منين؟ (محطة البداية)',
      toLabel: 'رايح فين؟ (محطة النزول)',
      fromPlaceholder: 'اكتب اسم المحطة أو المعلم أو الصق لوكيشن...',
      toPlaceholder: 'اكتب محطة الوصول أو المعلم اللي رايحه...',
      swapStations: 'بدّل المحطات (عكس المشوار)',
      calculateButton: 'احسب المشوار',
      popularRoutes: 'مشاوير سريعة',
      savedRoutes: 'مشاويرك المفضلة',
      saveTripTooltip: 'احفظ المشوار ده في المفضلة',
      tripSaved: 'المشوار اتحفظ في مشاويرك المفضلة ⭐',
      selectStation: 'اختار المحطة...',
      searchStationPlaceholder: 'ابحث عن اسم محطة، شارع، أو معلم...',
      clear: 'مسح',
      routeSummary: 'تفاصيل المشوار',
      stationsPassed: 'محطة',
      approxTime: 'الوقت المتوقع',
      mins: 'دقيقة',
      ticketCost: 'سعر التذكرة',
      ticketColorLabel: 'لون التذكرة الورقية',
      transfers: 'التحويلات',
      noTransfer: 'خط مباشر (من غير تحويل)',
      oneTransfer: 'تحويلة واحدة',
      twoTransfers: 'تحويلتين',
      stepByStep: 'مسار الرحلة',
      boardTrain: 'اركب القطر من محطة',
      takeLine: 'خد',
      towardsDirection: 'في اتجاه',
      rideFor: 'كمّل لمدة',
      changeAt: 'انزل وبدّل في محطة',
      changeToLine: 'واركب',
      alightAt: 'انزل في محطة الوصول',
      passThrough: 'المحطات اللي هتعدي عليها',
      sameStationAlert: 'أنت مختار نفس المحطة في البداية والنهاية!',
      routeNotFound: 'مش لاقيين مسار بين المحطتين دول.',
      shareRoute: 'شير المشوار',
      startLiveTrip: 'ابدأ المشوار والتوجيه الصوتي',
      stopLiveTrip: 'إنهاء المشوار',
      lineBreakdownTitle: 'تفاصيل المحطات بالخطوط',
      multiModalToggle: 'شغل المونوريل والقطار الخفيف والأتوبيس الترددي BRT',
      multiModalFareNotice: 'مشوار وسائط مشتركة (مترو + مواصلات تانية)',
      tipRushHour: 'ساعات الذروة (7:30 - 9:30 ص) و(2:30 - 5:00 م) القطر بييجي كل 3 دقائق.',
      kitKatAlertTitle: 'خلي بالك من تفرع محطة الكيت كات (الخط التالت)',
      pasteLinkHint: 'ممكن تلصق لينك جوجل مابس أو إحداثيات وهنجيبلك أقرب محطة فوراً!'
    },

    // Live Trip Guidance & Voice Announcements
    liveTracker: {
      title: 'متابع المشوار والتوجيه المباشر',
      currentStation: 'أنت دلوقتي عند',
      nextStation: 'المحطة اللي جاية',
      remainingStations: 'باقي محطات',
      transferNextAlert: 'استعد.. المحطة اللي جاية محطة تبديل خطوط!',
      arrivingDestination: 'قربت توصل.. المحطة اللي جاية هي وجهتك النهائية!',
      enableVoice: 'التنبيه الصوتي',
      voiceActive: 'الصوت شغال',
      stepAdvance: 'المحطة اللي بعدها',
      stepRewind: 'المحطة اللي فاتت'
    },

    // Ticket & Subscriptions Tab
    ticketGuide: {
      title: 'أسعار التذاكر والاشتراكات الرسمية',
      subtitle: 'التعريفة المعتمدة لمترو الأنفاق والمونوريل والقطار الخفيف والأتوبيس الترددي (2026)',
      tariffVerifiedBanner: 'التعريفة الرسمية المعتمدة • 2026',
      fareCalculator: 'حاسبة التذكرة السريعة ولونها',
      calculatorPrompt: 'حدد عدد المحطات عشان تعرف لون التذكرة وسعرها الرسمي:',
      stationsCount: 'محطة',
      zoneDetails: 'مناطق المترو وألوان التذاكر الورقية',
      singleTrip: 'تذكرة الرحلة الواحدة',
      elderlyDiscount: 'كبار السن (فوق 60 سنة)',
      specialNeedsDiscount: 'ذوو الهمم والقدرات الخاصة (قادرون باختلاف)',
      militaryDiscount: 'المجندون بالقوات المسلحة والشرطة',
      subscriptionCalcTitle: 'حاسبة الاشتراكات المدعومة للطلاب والجمهور',
      selectCategory: 'الفئة',
      studentPass: 'اشتراك الطلاب (3 شهور)',
      publicPass: 'اشتراك الجمهور الربع سنوي (3 شهور)',
      publicAnnualPass: 'اشتراك الجمهور السنوي (سنة كاملة)',
      seniorsPass: 'اشتراك كبار السن (فوق 60 سنة)',
      specialNeedsPass: 'اشتراك ذوي الهمم (22 جنيه بس)',
      subscriptionOfficesTitle: 'مكاتب الاشتراكات المعتمدة بالمحطات',
      walletCardTitle: 'محفظة التذاكر الذكية ومتابعة الرصيد',
      walletBalance: 'رصيد كارت المحفظة الحالي',
      cardRecharge: 'شحن رصيد',
      logTrip: 'خصم مشوار',
      lowBalanceWarning: 'تنبيه: رصيد الكارت أقل من 15 جنيه، اشحنه قبل ما تبدأ مشوارك.',
      fineWarning: 'تنبيه بوابات الخروج: الركوب بتذكرة أقل من عدد المحطات بيعرضك لدفع فرق التذكرة وغرامة فورية 50 جنيه.',
      rulesTitle: 'تعليمات ركوب المترو والغرامات',
      rules: [
        'التدخين ممنوع نهائياً داخل المحطات وعلى أرصفة القطارات (غرامة فورية: 200 جنيه).',
        'العربيات الوسطى اللي عليها علامات خضراء وحمراء مخصصة للسيدات فقط.',
        'الركوب بدون تذكرة أو بتذكرة غير مطابقة بيعرضك لغرامة فورية من 50 إلى 100 جنيه.',
        'تقدر تشحن كارت المحفظة الذكية بأي رصيد لحد 400 جنيه وصلاحيته 5 سنين.'
      ]
    },

    // Operating Hours & Timetable
    timetable: {
      title: 'مواعيد التشغيل وآخر القطارات',
      subtitle: 'مواعيد أول وآخر قطر في كل الخطوط، ومحطات التبديل، ومواعيد رمضان والعيد',
      regularSchedule: 'جدول التشغيل اليومي المعتاد',
      ramadanSchedule: 'جدول تشغيل شهر رمضان وعيدي الفطر والأضحى',
      firstTrain: 'أول قطر بيتحرك',
      lastTrain: 'آخر قطر بيتحرك',
      lastInterchangeAttaba: 'آخر موعد للالتقاء في محطة العتبة التبادلية',
      lastInterchangeSadat: 'آخر موعد للالتقاء في محطة السادات التبادلية',
      lastInterchangeRamses: 'آخر موعد للالتقاء في محطة الشهداء (رمسيس)',
      headwayTitle: 'الوقت بين كل قطر والتاني'
    },

    // Station Explorer
    stationExplorer: {
      title: 'دليل محطات الشبكة',
      subtitle: 'دليل شامل لأكتر من 80 محطة بالمترو والمونوريل والقطار الخفيف والأتوبيس الترددي',
      searchPlaceholder: 'ابحث باسم المحطة أو الاسم الشائع (زي عرابي، التحرير، روكسي)...',
      allLines: 'كل الخطوط',
      line1: 'الخط الأول (الأزرق)',
      line2: 'الخط الثاني (الأحمر)',
      line3: 'الخط الثالث (الأخضر)',
      monorail: 'المونوريل',
      lrt: 'القطار الخفيف LRT',
      interchangeOnly: 'المحطات التبادلية بس',
      stationsFound: 'محطة مطابقة',
      stationDetails: 'بيانات المحطة',
      operatingHours: 'مواعيد التشغيل اليومية',
      firstTrain: 'أول قطر',
      lastTrain: 'آخر قطر',
      landmarksNear: 'المعالم والمناطق القريبة',
      facilities: 'المرافق والتسهيلات وذوي الهمم',
      setAsStart: 'ابدأ المشوار من هنا (من)',
      setAsEnd: 'انزل هنا (إلى)'
    },

    // Nearest Station & Landmarks
    nearestTab: {
      title: 'أقرب محطة ليك',
      subtitle: 'حدد مكانك بالـ GPS أو دور في أكتر من 1000 معلم ووزارة وجامعة ومول في مصر',
      useGpsButton: 'حدد مكاني دلوقتي بالـ GPS',
      gpsLocating: 'بنحدد مكانك بالـ GPS...',
      gpsError: 'مش عارفين نوصل لموقعك، اتأكد من تشغيل الـ GPS وإعطاء الإذن للتطبيق.',
      gpsSuccess: 'أقرب محطة لمكانك دلوقتي هي:',
      setAsStartImmediate: 'ابدأ مشواري من هنا',
      searchPlacePlaceholder: 'ابحث في أكثر من 1000 مكان (مثل: جامعة القاهرة، قصر العيني، سيتي ستارز، الأهرامات)...',
      filterAll: 'كل الأماكن',
      filterMuseums: 'معالم سياحية',
      filterUnis: 'جامعات وأكاديميات',
      filterGov: 'جهات وهيئات',
      filterTransport: 'مواصلات ومحطات',
      filterShopping: 'مولات وتسوّق',
      filterHospitals: 'مستشفيات',
      popularPlacesTitle: 'أماكن ومعالم مصر وأقرب محطات ليها',
      recommendedStation: 'أقرب محطة:',
      planTripToHere: 'خطط مشوار لهنا'
    },

    // Interactive Map
    mapTab: {
      title: 'خريطة المترو التفاعلية',
      subtitle: 'خريطة كاملة للخطوط والمونوريل تقدر تكبرها وتتحرك فيها وتدوس على أي محطة',
      zoomIn: 'تكبير (+)',
      zoomOut: 'تصغير (-)',
      resetView: 'ضبط الخريطة',
      tapToSelect: 'دوس على أي محطة في الخريطة عشان تشوف بياناتها أو تخطط مشوار ليها',
      legend: 'ألوان الخطوط',
      interchangeBadge: 'محطة تبديل بين الخطوط'
    },

    // Ad Settings & Monetization
    adSettings: {
      title: 'نسخة بدون إعلانات',
      removeAdsButton: 'إزالة الإعلانات نهائياً (49.99 جنيه مدى الحياة)',
      lifetimeLabel: 'شراء مرة واحدة مدى الحياة',
      noSubscriptionNeeded: 'من غير اشتراكات شهرية، دفعة واحدة بسيطة بتشيل كل الإعلانات.',
      adPolicyNotice: 'سياسة الأمان: التطبيق خالي من أي إعلانات مزعجة أو غير مناسبة لوسائل النقل العامة.',
      alreadyAdFree: 'النسخة الحالية: بدون إعلانات مدى الحياة'
    },

    // Common
    settings: {
      language: 'اللغة',
      darkMode: 'الوضع الليلي',
      lightMode: 'الوضع النهاري',
      checkUpdates: 'فحص تحديثات الأسعار والمحطات',
      databaseUpToDate: 'قاعدة البيانات: محدثة 2026'
    }
  }
};
