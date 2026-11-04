import { STATIONS } from '../../src/data/metroData.js';

const validStationIds = new Set(STATIONS.map(s => s.id));

function p(id, nameAr, nameEn, station, lat, lng, aliases = []) {
  if (!validStationIds.has(station)) {
    throw new Error(`Invalid station ID '${station}' for '${id}' (${nameEn})`);
  }
  return {
    id,
    nameAr,
    nameEn,
    category: 'transport',
    categoryAr: 'محطة وميدان نقل',
    categoryEn: 'Transport Hub & Square',
    nearestStationId: station,
    lat: Number(lat.toFixed(4)),
    lng: Number(lng.toFixed(4)),
    aliases
  };
}

export const transport = [
  // Major Railway Stations & Central Hubs
  p('tr_ramses_station', 'محطة مصر للقطارات - ميدان رمسيس', 'Ramses Central Railway Station (Mahattat Misr)', 'al_shohadaa', 30.0628, 31.2498, ['محطة مصر', 'محطة رمسيس', 'قطارات رمسيس', 'Ramses Station']),
  p('tr_giza_railway_station', 'محطة قطارات الجيزة - ميدان الجيزة', 'Giza Railway Station', 'giza', 30.0098, 31.2078, ['محطة الجيزة', 'قطار الجيزة']),
  p('tr_bashtil_station', 'محطة قطارات صعيد مصر المركزية - بشتيل', 'Bashtil Upper Egypt Central Station', 'rod_el_farag_corridor', 30.0715, 31.2055, ['محطة بشتيل', 'قطارات بشتيل', 'محطة بشتيل الجديدة']),
  p('tr_adly_mansour_hub', 'مجمع ومحطة عدلي منصور التبادلية المركزية الكبرى', 'Adly Mansour Central Interchange Transport Hub', 'adly_mansour', 30.1472, 31.4018, ['محطة عدلي منصور التبادلية', 'موقف عدلي منصور']),
  p('tr_shubra_kheima_station', 'محطة قطارات شبرا الخيمة', 'Shubra El-Kheima Railway Station', 'shubra_el_kheima', 30.1225, 31.2445, ['قطار شبرا الخيمة']),
  p('tr_helwan_train_station', 'محطة قطارات حلوان المركزية', 'Helwan Railway Station', 'helwan', 29.8455, 31.3325, ['محطة حلوان']),
  p('tr_ain_shams_station', 'محطة قطارات عين شمس - خط السويس', 'Ain Shams Railway Station', 'ain_shams', 30.1315, 31.3245, ['محطة عين شمس']),
  p('tr_matariya_train_station', 'محطة قطارات المطرية التاريخية', 'El-Matareyya Train Station', 'el_matareyya', 30.1265, 31.3115, ['محطة المطرية']),
  p('tr_pont_limoun_station', 'محطة بونت ليمون للقطارات التبادلية - رمسيس', 'Pont Limoun Railway Station - Ramses', 'al_shohadaa', 30.0615, 31.2515, ['بونت ليمون']),

  // Airports & Aviation Terminals
  p('tr_cairo_airport_t1', 'مطار القاهرة الدولي - مبنى الركاب 1 (المطار القديم)', 'Cairo International Airport - Terminal 1', 'el_haykestep', 30.1115, 31.4015, ['مطار القاهرة مبنى 1', 'مطار القاهرة القديم']),
  p('tr_cairo_airport_t2', 'مطار القاهرة الدولي - مبنى الركاب 2 (الرحلات الدولية)', 'Cairo International Airport - Terminal 2', 'el_haykestep', 30.1145, 31.4055, ['مطار القاهرة مبنى 2']),
  p('tr_cairo_airport_t3', 'مطار القاهرة الدولي - مبنى الركاب 3 (مصر للطيران وتحالف ستار)', 'Cairo International Airport - Terminal 3', 'el_haykestep', 30.1185, 31.4085, ['مطار القاهرة مبنى 3', 'مبنى 3 مصر للطيران']),
  p('tr_sphinx_airport', 'مطار سفنكس الدولي - طريق القاهرة الإسكندرية الصحراوي', 'Sphinx International Airport (SPX)', 'rod_el_farag_corridor', 30.1145, 30.8985, ['مطار سفنكس', 'Sphinx Airport']),
  p('tr_capital_airport', 'مطار العاصمة الإدارية الدولي (CCE)', 'Capital International Airport (CCE)', 'city_of_arts', 30.0545, 31.8485, ['مطار العاصمة الإدارية', 'Capital Airport']),
  p('tr_almaza_airport', 'مطار ألماظة الجوي - مصر الجديدة', 'Almaza Airfield - Heliopolis', 'el_haykestep', 30.0925, 31.3655, ['مطار ألماظة']),

  // Central Bus & Microbus Terminals
  p('tr_torgoman_bus_terminal', 'ميناء القاهرة البري - محطة الترجمان الدولية للحافلات', 'Torgoman International Bus Terminal (Cairo Port)', 'al_shohadaa', 30.0575, 31.2425, ['موقف الترجمان', 'محطة الترجمان']),
  p('tr_abdelmoneim_riad_bus', 'موقف ومحطة حافلات عبد المنعم رياض - ميدان التحرير', 'Abdel Moneim Riad Bus Terminal - Tahrir', 'sadat', 30.0495, 31.2335, ['موقف عبد المنعم رياض']),
  p('tr_ahmed_helmy_bus', 'موقف أحمد حلمي الإقليمي للحافلات والميكروباص - رمسيس', 'Ahmed Helmy Regional Bus & Microbus Station', 'al_shohadaa', 30.0645, 31.2475, ['موقف أحمد حلمي']),
  p('tr_abbassiya_bus_terminal', 'موقف حافلات ونقل عام العباسية', 'Abbassiya Public Transport Terminal', 'abbassiya', 30.0695, 31.2795, ['موقف العباسية']),
  p('tr_kolleyyet_zeraa_terminal', 'موقف كلية الزراعة الإقليمي والميكروباص - المؤسسة شبرا', 'Kolleyyet El-Zeraa (Moassasa) Regional Terminal', 'kolleyyet_el_zeraa', 30.1175, 31.2475, ['موقف المؤسسة', 'موقف كلية الزراعة']),
  p('tr_mounib_bus_terminal', 'موقف المنيب الإقليمي لأقاليم الصعيد ومحافظات مصر', 'El-Mounib Regional Transport Station (Upper Egypt)', 'el_mounib', 29.9825, 31.2125, ['موقف المنيب']),
  p('tr_marg_microbus_terminal', 'موقف المرج الجديد الإقليمي - محافظات الدلتا والقناة', 'El-Marg Regional Microbus Terminal', 'el_marg', 30.1535, 31.3365, ['موقف المرج']),
  p('tr_helwan_microbus_terminal', 'موقف حلوان الإقليمي لحلوان والتبين ومحافظات الصعيد', 'Helwan Regional Microbus Terminal', 'helwan', 29.8465, 31.3345, ['موقف حلوان']),
  p('tr_salam_bus_terminal', 'موقف السلام النموذجي - بلبيس والإسماعيلية والشرقية', 'Al-Salam Regional Transport Terminal', 'brt_11_salam', 30.1655, 31.3995, ['موقف السلام']),
  p('tr_giza_square_terminal', 'موقف ميكروباص ميدان الجيزة (شارع مراد وربيع الجيزي)', 'Giza Square Microbus Hub', 'giza', 30.0085, 31.2065, ['موقف ميدان الجيزة']),
  p('tr_sayyeda_aisha_terminal', 'موقف السيدة عائشة الإقليمي لسيارات الأقاليم والضواحي', 'Sayyeda Aisha Regional Microbus Hub', 'sayyeda_zeinab', 30.0245, 31.2585, ['موقف السيدة عائشة']),
  p('tr_rod_elfarag_hub', 'محطة وموقف محور روض الفرج التبادلي', 'Rod El-Farag Corridor Transport Hub', 'rod_el_farag_corridor', 30.0885, 31.1895, ['محطة محور روض الفرج']),
  p('tr_october_hosary_terminal', 'موقف الحصري المركزي لسيارات السرفيس والميكروباص - 6 أكتوبر', 'El-Hosary Central Transport Terminal - 6th October', 'gamaat_el_dowal', 29.9725, 30.9485, ['موقف الحصري']),
  p('tr_sheikh_zayed_terminal', 'موقف هايبر وان وسرفيس الشيخ زايد', 'Sheikh Zayed Transport Terminal - Hyper One', 'rod_el_farag_corridor', 30.0275, 31.0295, ['موقف الشيخ زايد']),
  p('tr_tagamoa_rawda_terminal', 'موقف سرفيس التجمع الخامس - ميدان الغاز وشارع التسعين', 'New Cairo 5th Settlement Service Hub', 'monorail_choueifat', 30.0125, 31.4245, ['موقف التجمع الخامس']),
  p('tr_rehab_bus_gate', 'محطة حافلات النقل العام وسرفيس مدينة الرحاب', 'Al-Rehab City Central Bus Terminal', 'monorail_auc', 30.0615, 31.4915, ['موقف الرحاب']),
  p('tr_madinaty_bus_gate', 'محطة حافلات النقل الداخلي والخارجي بمدينتي', 'Madinaty Central Bus Terminal', 'lrt_shorouk', 30.1155, 31.6325, ['موقف مدينتي']),

  // Major Cairo Squares & Intersections (Downtown & Historic)
  p('sq_tahrir', 'ميدان التحرير - قلب القاهرة ومجمع التحرير', 'Tahrir Square (Midan El-Tahrir)', 'sadat', 30.0444, 31.2356, ['ميدان التحرير', 'Tahrir Square']),
  p('sq_ramses', 'ميدان رمسيس ومحطة مصر ومسجد الفتح', 'Ramses Square (Midan Ramses)', 'al_shohadaa', 30.0615, 31.2485, ['ميدان رمسيس']),
  p('sq_talaat_harb', 'ميدان طلعت حرب وتمثال طلعت حرب - وسط البلد', 'Talaat Harb Square', 'sadat', 30.0475, 31.2395, ['ميدان طلعت حرب']),
  p('sq_mostafa_kamel', 'ميدان مصطفى كامل - وسط البلد', 'Mostafa Kamel Square - Downtown', 'mohamed_naguib', 30.0485, 31.2435, ['ميدان مصطفى كامل']),
  p('sq_attaba', 'ميدان العتبة الخضراء - ملتقى الأسواق ووسط القاهرة', 'Attaba Square (Midan El-Ataba)', 'attaba', 30.0525, 31.2475, ['ميدان العتبة']),
  p('sq_opera_attaba', 'ميدان الأوبرا التاريخي وتمثال إبراهيم باشا - العتبة', 'Opera Square (Ibrahim Pasha Statue) - Attaba', 'attaba', 30.0515, 31.2465, ['ميدان الأوبرا']),
  p('sq_bab_ellouk', 'ميدان باب اللوق ومحطة المترو والأسواق', 'Bab El-Louk Square', 'mohamed_naguib', 30.0435, 31.2415, ['ميدان باب اللوق']),
  p('sq_falaki', 'ميدان الفلكي - وسط البلد وعابدين', 'Falaki Square - Downtown', 'saad_zaghloul', 30.0415, 31.2395, ['ميدان الفلكي']),
  p('sq_lazoghly', 'ميدان لاظوغلي ووزارتي العدل والداخلية', 'Lazoghly Square - Ministries Hub', 'saad_zaghloul', 30.0425, 31.2415, ['ميدان لاظوغلي']),
  p('sq_simon_bolivar', 'ميدان سيمون بوليفار - جاردن سيتي والنيل', 'Simon Bolivar Square - Garden City', 'sadat', 30.0425, 31.2325, ['سيمون بوليفار']),
  p('sq_abdeen', 'ميدان عابدين وقصر عابدين الرئاسي', 'Abdeen Square', 'mohamed_naguib', 30.0435, 31.2475, ['ميدان عابدين']),

  // Heliopolis & East Cairo Squares
  p('sq_roxy', 'ميدان روكسي - قلب مصر الجديدة وسينما روكسي', 'Roxy Square - Heliopolis', 'haroun', 30.0915, 31.3145, ['ميدان روكسي', 'روكسي']),
  p('sq_korba', 'ميدان الكوربة التاريخي ومباني التراث البلجيكي', 'Korba Square - Heliopolis Historic Quarter', 'al_ahram', 30.0915, 31.3265, ['ميدان الكوربة', 'الكوربة']),
  p('sq_triumph', 'ميدان تريومف - مصر الجديدة', 'Triumph Square - Heliopolis', 'haroun', 30.0975, 31.3345, ['ميدان تريومف']),
  p('sq_hegaz', 'ميدان الحجاز ومسجد الحجاز - مصر الجديدة', 'Hegaz Square - Heliopolis', 'heliopolis', 30.1045, 31.3415, ['ميدان الحجاز']),
  p('sq_ismailia_heliopolis', 'ميدان الإسماعيلية - مصر الجديدة', 'Ismailia Square - Heliopolis', 'al_ahram', 30.0925, 31.3235, ['ميدان الإسماعيلية مصر الجديدة']),
  p('sq_salah_eldin_heliopolis', 'ميدان صلاح الدين - مصر الجديدة', 'Salah El-Din Square - Heliopolis', 'al_ahram', 30.0935, 31.3295, ['ميدان صلاح الدين مصر الجديدة']),
  p('sq_mahkama_heliopolis', 'ميدان المحكمة - مصر الجديدة', 'El-Mahkama Square (Court Square) - Heliopolis', 'haroun', 30.0965, 31.3245, ['ميدان المحكمة مصر الجديدة']),
  p('sq_gamea_heliopolis', 'ميدان الجامع - مصر الجديدة للتسوق الشعبي', 'El-Gamea Square - Heliopolis', 'haroun', 30.0945, 31.3215, ['ميدان الجامع']),
  p('sq_alf_maskan', 'ميدان الألف مسكن - جسر السويس ومحطة المترو', 'Alf Maskan Square - Gesr El-Suez', 'alf_maskan', 30.1195, 31.3385, ['ميدان الألف مسكن']),
  p('sq_matariya_obelisk', 'ميدان المطرية ومسلة سنوسرت', 'El-Matareyya Square & Obelisk', 'el_matareyya', 30.1285, 31.3145, ['ميدان المطرية']),
  p('sq_ibn_sendel', 'ميدان ابن سندر - حلمية الزيتون وحمام القبة', 'Ibn Sendel Square - Helmeyat El-Zaytoun', 'helmeyat_el_zaytoun', 30.1055, 31.3125, ['ميدان ابن سندر']),
  p('sq_saray_qobba', 'ميدان سراي القبة ومصر والسودان', 'Saray El-Qobba Square', 'saray_el_qobba', 30.0985, 31.3045, ['ميدان سراي القبة']),
  p('sq_kobri_qobba', 'ميدان كوبري القبة وإدارة التجنيد والمساحة', 'Kobri El-Qobba Square', 'kobri_el_qobba', 30.0915, 31.2985, ['ميدان كوبري القبة']),

  // Nasr City Squares & Crossings
  p('sq_el_saa_nasrcity', 'ميدان الساعة - مدينة نصر أول عباس العقاد', 'El-Saa Square (Clock Square) - Nasr City', 'fair_zone', 30.0655, 31.3315, ['ميدان الساعة مدينة نصر']),
  p('sq_hay_sabea_nasrcity', 'ميدان الحي السابع - مدينة نصر', 'Seventh District Square - Nasr City', 'fair_zone', 30.0485, 31.3415, ['ميدان الحي السابع']),
  p('sq_hay_asher_nasrcity', 'ميدان وموقف الحي العاشر - مدينة نصر', 'Tenth District Square - Nasr City', 'fair_zone', 30.0385, 31.3655, ['ميدان الحي العاشر']),
  p('sq_tayaran_nasrcity', 'ميدان الطيران - مدينة نصر وشارع الطيران', 'Al-Tayaran Square - Nasr City', 'fair_zone', 30.0625, 31.3285, ['ميدان الطيران']),
  p('sq_rabaa_nasrcity', 'ميدان الشهيد هشام بركات (رابعة العدوية سابقاً)', 'Hesham Barakat Square (Ex-Rabaa) - Nasr City', 'stadium', 30.0665, 31.3245, ['ميدان رابعة']),
  p('sq_abbas_nahas_intersection', 'تقاطع شارع عباس العقاد مع مصطفى النحاس - مدينة نصر', 'Abbas El-Akkad & Mostafa El-Nahas Crossing', 'fair_zone', 30.0615, 31.3385, ['تقاطع عباس العقاد مع مصطفى النحاس']),
  p('sq_makram_nahas_intersection', 'تقاطع شارع مكرم عبيد مع مصطفى النحاس - مدينة نصر', 'Makram Ebeid & Mostafa El-Nahas Crossing', 'fair_zone', 30.0645, 31.3445, ['تقاطع مكرم عبيد مع مصطفى النحاس']),

  // Giza, Dokki & Mohandessin Squares
  p('sq_giza_midan', 'ميدان الجيزة الرئيسي - مدخل الجيزة والأهرام', 'Giza Main Square (Midan El-Giza)', 'giza', 30.0085, 31.2075, ['ميدان الجيزة']),
  p('sq_nahda_giza', 'ميدان النهضة وتمثال نهضة مصر - أمام جامعة القاهرة', 'Al-Nahda Square (Egypt Renaissance Statue)', 'cairo_university', 30.0275, 31.2135, ['ميدان النهضة', 'نهضة مصر']),
  p('sq_galaa_dokki', 'ميدان الجلاء وكوبري الجلاء وفندق شيراتون - الدقي', 'Al-Galaa Square - Dokki & Nile', 'opera', 30.0385, 31.2185, ['ميدان الجلاء الدقي']),
  p('sq_dokki_midan', 'ميدان الدقي وكوبري الدقي وشارع التحرير', 'Dokki Square (Midan El-Dokki)', 'dokki', 30.0385, 31.2115, ['ميدان الدقي']),
  p('sq_mesaha_dokki', 'ميدان المساحة ومطاعم الدقي', 'Al-Mesaha Square - Dokki', 'dokki', 30.0365, 31.2095, ['ميدان المساحة الدقي']),
  p('sq_mostafa_mahmoud_midan', 'ميدان مصطفى محمود وشارع جامعة الدول العربية - المهندسين', 'Mostafa Mahmoud Square - Mohandessin', 'gamaat_el_dowal', 30.0525, 31.2025, ['ميدان مصطفى محمود المهندسين']),
  p('sq_sphinx_mohandessin', 'ميدان سفنكس وشارع أحمد عرابي - المهندسين', 'Sphinx Square - Mohandessin', 'wadi_el_nile', 30.0585, 31.2085, ['ميدان سفنكس المهندسين']),
  p('sq_lebanon_midan', 'ميدان لبنان ومحور 26 يوليو - المهندسين', 'Lebanon Square (Midan Lobnan) - Mohandessin', 'wadi_el_nile', 30.0625, 31.1985, ['ميدان لبنان', 'Lebanon Square']),
  p('sq_kitkat_midan', 'ميدان الكيت كات وكورنيش النيل ومحطة المترو', 'Kit Kat Square (Midan El-Kit Kat)', 'kit_kat', 30.0625, 31.2135, ['ميدان الكيت كات']),
  p('sq_remaya_giza', 'ميدان الرماية ومدخل طريق الإسكندرية الصحراوي والفيوم', 'Al-Remaya Square - Giza (Desert Road Entrance)', 'brt_30_sun_capital', 29.9885, 31.1145, ['ميدان الرماية']),
  p('sq_juhayna_october', 'ميدان جهينة ومول العرب ومحور 26 يوليو - 6 أكتوبر', 'Juhayna Square - 6th of October', 'gamaat_el_dowal', 30.0075, 30.9735, ['ميدان جهينة']),
  p('sq_hosary_october', 'ميدان الحصري وجامع الحصري والمحور المركزي - 6 أكتوبر', 'El-Hosary Square - 6th of October', 'gamaat_el_dowal', 29.9725, 30.9475, ['ميدان الحصري 6 أكتوبر']),
  p('sq_nagda_october', 'ميدان النجدة - 6 أكتوبر', 'Al-Nagda Square - 6th of October', 'gamaat_el_dowal', 29.9685, 30.9385, ['ميدان النجدة']),

  // Maadi, Helwan & South Cairo Squares
  p('sq_victoria_maadi', 'ميدان فيكتوريا - المعادي شارع 9', 'Victoria Square - Maadi', 'maadi', 29.9615, 31.2585, ['ميدان فيكتوريا']),
  p('sq_horreya_maadi', 'ميدان الحرية وجراند مول - المعادي', 'Al-Horreya Square - Maadi Grand Mall', 'maadi', 29.9615, 31.2645, ['ميدان الحرية المعادي']),
  p('sq_degla_maadi', 'ميدان دجلة والنوادي الرياضية - المعادي', 'Degla Square - Maadi', 'sakanat_el_maadi', 29.9575, 31.2745, ['ميدان دجلة المعادي']),
  p('sq_laselky_maadi', 'ميدان اللاسلكي والقرية التكنولوجية - المعادي الجديدة', 'Al-Laselky Square - New Maadi', 'maadi', 29.9745, 31.2825, ['ميدان اللاسلكي']),
  p('sq_helwan_station', 'ميدان محطة حلوان والشارع التجاري', 'Helwan Station Square', 'helwan', 29.8455, 31.3335, ['ميدان حلوان']),
  p('sq_shohadaa_helwan', 'ميدان الشهداء بحلوان', 'Al-Shohadaa Square - Helwan', 'helwan', 29.8475, 31.3365, ['ميدان الشهداء حلوان']),
  p('sq_fustat_midan', 'ميدان الفسطاط وجامع عمرو بن العاص - مصر القديمة', 'Al-Fustat Square - Old Cairo', 'mar_girgis', 30.0105, 31.2335, ['ميدان الفسطاط']),
  p('sq_sayyeda_zeinab_midan', 'ميدان السيدة زينب ومسجد أم العواجز', 'Sayyeda Zeinab Square', 'sayyeda_zeinab', 30.0305, 31.2385, ['ميدان السيدة زينب']),
  p('sq_sayyeda_aisha_midan', 'ميدان السيدة عائشة والقلعة', 'Sayyeda Aisha Square - Citadel', 'sayyeda_zeinab', 30.0245, 31.2575, ['ميدان السيدة عائشة']),
  p('sq_qalaa_midan', 'ميدان القلعة (ميدان صلاح الدين ومسجدي السلطان حسن والرفاعي)', 'Citadel Square (Salah El-Din Square)', 'sayyeda_zeinab', 30.0315, 31.2575, ['ميدان القلعة']),

  // Northern Cairo & Shubra Squares
  p('sq_douran_shubra', 'دوران شبرا ومحطة روض الفرج وسينما شبرا', 'Douran Shubra Square', 'road_el_farag', 30.0765, 31.2465, ['دوران شبرا']),
  p('sq_khalafawy_midan', 'ميدان الخلفاوي ومعهد ناصر - شبرا', 'Al-Khalafawy Square - Shubra', 'khalafawy', 30.0985, 31.2455, ['ميدان الخلفاوي']),
  p('sq_mazallat_midan', 'ميدان المظلات ومعهد ناصر وكورنيش شبرا', 'El-Mazallat Square - Shubra', 'el_mazallat', 30.1085, 31.2465, ['ميدان المظلات']),
  p('sq_massara_midan', 'ميدان مسرة وترعة البولاقية - شبرا', 'Massara Square - Shubra', 'massara', 30.0715, 31.2475, ['ميدان مسرة']),
  p('sq_abbassiya_midan', 'ميدان العباسية ومسجد النور ومحطة المترو', 'Abbassiya Main Square', 'abbassiya', 30.0705, 31.2805, ['ميدان العباسية']),
  p('sq_abdou_pasha_midan', 'ميدان عبده باشا وهندسة عين شمس', 'Abdou Pasha Square', 'abdou_pasha', 30.0635, 31.2775, ['ميدان عبده باشا']),
  p('sq_geish_midan', 'ميدان الجيش وباب الشعرية والظاهر', 'El-Geish Square - El-Zaher', 'el_geish', 30.0615, 31.2675, ['ميدان الجيش']),
  p('sq_bab_shaariya_midan', 'ميدان باب الشعرية التاريخي', 'Bab El-Shaariya Historic Square', 'bab_el_shaariya', 30.0545, 31.2585, ['ميدان باب الشعرية']),

  // New Cairo & New Capital Squares
  p('sq_choueifat_tagamoa', 'ميدان الشويفات - مدخل التجمع الخامس ومحور المشير', 'Choueifat Square - New Cairo Entrance', 'monorail_choueifat', 30.0095, 31.4185, ['ميدان الشويفات']),
  p('sq_downtown_tagamoa', 'ميدان الداون تاون وشارع التسعين الجنوبي - التجمع الخامس', 'Downtown Square - 90th St New Cairo', 'monorail_choueifat', 30.0155, 31.4125, ['ميدان الداون تاون التجمع']),
  p('sq_peoples_square_capital_hub', 'ميدان ساحة الشعب ومجلس الوزراء - العاصمة الإدارية', 'Peoples Square Transportation Hub - New Capital', 'city_of_arts', 30.0125, 31.7485, ['ميدان ساحة الشعب بالعاصمة']),
  p('sq_arts_city_capital_hub', 'ميدان مدينة الفنون والثقافة ومحطة القطار الخفيف - العاصمة الإدارية', 'City of Arts Transport Square - New Capital', 'city_of_arts', 30.0155, 31.7385, ['ميدان مدينة الفنون بالعاصمة'])
];

// Additional Transport Hubs, Squares & Major Intersections
transport.push(
  p('sq_nasr_road_makram', 'تقاطع طريق النصر مع مكرم عبيد - مدينة نصر', 'Nasr Road & Makram Ebeid Intersection', 'fair_zone', 30.0655, 31.3345, ['تقاطع طريق النصر مكرم']),
  p('sq_nasr_road_abbas', 'تقاطع طريق النصر مع عباس العقاد - مدينة نصر', 'Nasr Road & Abbas El-Akkad Intersection', 'fair_zone', 30.0635, 31.3325, ['تقاطع طريق النصر عباس']),
  p('sq_tayaran_nasr_road', 'تقاطع شارع الطيران مع طريق النصر - رابعة العدوية', 'Al-Tayaran & Nasr Road Intersection', 'stadium', 30.0655, 31.3215, ['تقاطع الطيران مع النصر']),
  p('sq_salah_salem_estade', 'تقاطع شارع صلاح سالم مع استاد القاهرة ومحطة الاستاد', 'Salah Salem & Cairo Stadium Crossing', 'stadium', 30.0695, 31.3125, ['صلاح سالم الاستاد']),
  p('sq_salah_salem_ard_maared', 'تقاطع شارع صلاح سالم مع أرض المعارض والفيرزون', 'Salah Salem & Exhibition Ground Crossing', 'fair_zone', 30.0685, 31.3085, ['صلاح سالم أرض المعارض']),
  p('sq_salah_salem_uruba', 'محور العروبة وطريق المطار - مصر الجديدة', 'Al-Orouba Axis & Airport Road Crossing', 'al_ahram', 30.0915, 31.3355, ['محور العروبة']),
  p('sq_salah_salem_mirghani', 'تقاطع صلاح سالم مع شارع الميرغني - كليوباترا', 'Salah Salem & El-Mirghani Crossing', 'koleyet_el_banat', 30.0885, 31.3285, ['صلاح سالم الميرغني']),
  p('sq_gamaat_dowal_shehab', 'تقاطع شارع جامعة الدول العربية مع شارع شهاب - المهندسين', 'Gamaat El-Dowal & Shehab Crossing - Mohandessin', 'gamaat_el_dowal', 30.0515, 31.2035, ['جامعة الدول مع شهاب']),
  p('sq_gamaat_dowal_batal', 'تقاطع شارع جامعة الدول مع البطل أحمد عبد العزيز', 'Gamaat El-Dowal & Batal Abdel Aziz Crossing', 'gamaat_el_dowal', 30.0485, 31.2085, ['جامعة الدول مع البطل']),
  p('sq_batal_abdel_aziz', 'شارع وميدان البطل أحمد عبد العزيز - المهندسين', 'El-Batal Ahmed Abdel Aziz Square - Mohandessin', 'dokki', 30.0465, 31.2095, ['البطل أحمد عبد العزيز']),
  p('sq_morad_giza', 'شارع مراد وميدان النهضة - الجيزة', 'Mourad Street & Renaissance Hub - Giza', 'cairo_university', 30.0215, 31.2145, ['شارع مراد الجيزة']),
  p('sq_bahr_aazam_midan', 'ميدان وممشى البحر الأعظم النيلي - الجيزة', 'El-Bahr El-Aazam Nile Square - Giza', 'brt_25_bahr_aazam', 30.0025, 31.2185, ['البحر الأعظم الجيزة']),
  p('sq_omraniya_midan', 'ميدان العمرانية ومحور ترسا - الجيزة', 'El-Omraniya Main Square & Tersa Axis', 'brt_26_omraniya', 30.0015, 31.1945, ['ميدان العمرانية']),
  p('sq_talbiya_midan', 'ميدان الطالبية وفيصل والهرم', 'El-Talbiya Square - Faisal & Haram', 'brt_27_talbiya', 29.9985, 31.1765, ['ميدان الطالبية']),
  p('sq_maryouteya_faisal', 'تقاطع المريوطية مع شارع فيصل والهرم', 'Maryouteya & Faisal St Crossing', 'brt_28_maryouteya', 29.9925, 31.1625, ['المريوطية فيصل']),
  p('sq_mansoureya_crossing', 'تقاطع محور المنصورية مع طريق سقارة السياحي', 'Mansoureya & Saqqara Tourist Axis Crossing', 'brt_29_mansoureya', 29.9865, 31.1525, ['محور المنصورية']),
  p('sq_sun_capital_crossing', 'تقاطع طريق الفيوم مع مدخل حدائق الأهرام وصن كابيتال', 'Fayoum Road & Sun Capital Gate Crossing', 'brt_30_sun_capital', 29.9725, 31.1125, ['مدخل حدائق الأهرام']),
  p('sq_daery_autostrad_crossing', 'تقاطع الطريق الدائري مع الأوتوستراد - المعادي', 'Ring Road & Autostrad Highway Interchange', 'brt_21_autostrad', 29.9825, 31.2985, ['دائري الأوتوستراد']),
  p('sq_daery_mokattam_crossing', 'تقاطع الطريق الدائري مع المقطم والقطامية', 'Ring Road & Mokattam Interchange', 'brt_20_mokattam', 29.9985, 31.3185, ['دائري المقطم']),
  p('sq_daery_zahraa_maadi', 'تقاطع الطريق الدائري مع مدخل زهراء المعادي', 'Ring Road & Zahraa El-Maadi Interchange', 'brt_19_zahraa_maadi', 29.9785, 31.2885, ['دائري زهراء المعادي']),
  p('sq_daery_sokhna_crossing', 'تقاطع الطريق الدائري مع طريق العين السخنة', 'Ring Road & Ain Sokhna Road Interchange', 'brt_17_sokhna', 29.9925, 31.3485, ['دائري طريق السخنة']),
  p('sq_daery_moshir_crossing', 'تقاطع الطريق الدائري مع محور المشير طنطاوي', 'Ring Road & El-Moshir Axis Interchange', 'brt_15_moshir', 30.0245, 31.3985, ['دائري محور المشير']),
  p('sq_daery_suez_crossing', 'تقاطع الطريق الدائري مع طريق السويس الصحراوي', 'Ring Road & Suez Road Highway Interchange', 'brt_13_suez_road', 30.0825, 31.4285, ['دائري طريق السويس']),
  p('sq_daery_academy_crossing', 'تقاطع الطريق الدائري مع أكاديمية الشرطة والتجمع الأول', 'Ring Road & Police Academy Interchange', 'brt_14_academy', 30.0625, 31.4425, ['دائري أكاديمية الشرطة']),
  p('sq_daery_golf_crossing', 'تقاطع الطريق الدائري مع أرض الجولف ومصر الجديدة', 'Ring Road & The Golf Interchange', 'brt_16_golf', 30.0785, 31.3855, ['دائري الجولف']),
  p('sq_daery_salam_crossing', 'تقاطع الطريق الدائري مع موقف السلام ومؤسسة الزكاة', 'Ring Road & Al-Salam Terminal Interchange', 'brt_11_salam', 30.1655, 31.3985, ['دائري السلام']),
  p('sq_daery_orabi_crossing', 'تقاطع الطريق الدائري مع محور أحمد عرابي جسر السويس', 'Ring Road & Orabi Axis Interchange', 'brt_10_orabi', 30.1585, 31.3785, ['دائري عرابي']),
  p('sq_daery_marg_crossing', 'تقاطع الطريق الدائري مع محطة مترو المرج الجديدة', 'Ring Road & El-Marg Interchange', 'brt_7_el_marg', 30.1545, 31.3385, ['دائري المرج']),
  p('sq_daery_khosous_crossing', 'تقاطع الطريق الدائري مع الخصوص ومسطرد', 'Ring Road & Al-Khosous Interchange', 'brt_6_khosous', 30.1425, 31.3125, ['دائري الخصوص']),
  p('sq_daery_mostorod_crossing', 'تقاطع الطريق الدائري مع ترعة الإسماعيلية ومسطرد', 'Ring Road & Mostorod Interchange', 'brt_5_mostorod', 30.1345, 31.2885, ['دائري مسطرد']),
  p('sq_daery_bahteem_crossing', 'تقاطع الطريق الدائري مع بهتيم وشبرا الخيمة', 'Ring Road & Bahteem Interchange', 'brt_4_bahteem', 30.1385, 31.2745, ['دائري بهتيم']),
  p('sq_daery_alex_agri_crossing', 'تقاطع الطريق الدائري مع طريق الإسكندرية الزراعي شبرا بنها', 'Ring Road & Alexandria Agricultural Interchange', 'brt_1_alex_agri', 30.1315, 31.2485, ['دائري الإسكندرية الزراعي']),
  p('sq_daery_shubra_banha_crossing', 'تقاطع الطريق الدائري مع طريق شبرا بنها الحر', 'Ring Road & Shubra-Banha Free Road Interchange', 'brt_3_shubra_banha', 30.1335, 31.2585, ['دائري شبرا بنها']),
  p('sq_daery_corridor_crossing', 'تقاطع الطريق الدائري مع محور روض الفرج وإمبابة', 'Ring Road & Rod El-Farag Corridor Interchange', 'ring_road', 30.0815, 31.1945, ['دائري محور روض الفرج']),
  p('sq_qawmeya_midan', 'ميدان القومية العربية وإمبابة والبوهي', 'Al-Qawmeya Main Square - Imbaba', 'al_qawmeya', 30.0785, 31.2015, ['ميدان القومية']),
  p('sq_bohy_midan', 'ميدان البوهي - إمبابة', 'El-Bohy Square - Imbaba', 'el_bohy', 30.0745, 31.2055, ['ميدان البوهي']),
  p('sq_sudan_street_midan', 'شارع السودان ومحور 26 يوليو - المهندسين', 'Sudan Street & 26th of July Hub', 'sudan', 30.0655, 31.2015, ['شارع السودان']),
  p('sq_tawfikeya_midan', 'ميدان التوفيقية ونادي الترسانة - المهندسين', 'El-Tawfikeya Square - Mohandessin', 'el_tawfikeya', 30.0615, 31.2045, ['ميدان التوفيقية']),
  p('sq_wadi_nile_midan', 'ميدان وادي النيل ومسجد الحامدية الشاذلية - المهندسين', 'Wadi El-Nile Square - Mohandessin', 'wadi_el_nile', 30.0575, 31.2065, ['ميدان وادي النيل']),
  p('sq_bulaq_dakrour_station', 'ميدان محطة بولاق الدكرور وصفط اللبن', 'Bulaq El-Dakrour Station Square', 'bulaq_el_dakrour', 30.0355, 31.1945, ['ميدان بولاق الدكرور']),
  p('sq_faisal_station_hub', 'ميدان محطة مترو فيصل وكوبري فيصل والجيزة', 'Faisal Metro Station Hub & Overpass', 'faisal', 30.0165, 31.1985, ['ميدان مترو فيصل']),
  p('sq_saqyet_mekky_hub', 'ميدان ساقية مكي وترعة الزمر - الجيزة', 'Saqyet Mekky Hub & Teret El-Zomor', 'saqyet_mekky', 29.9955, 31.2085, ['ميدان ساقية مكي']),
  p('sq_omm_masryeen_hub', 'ميدان أم المصريين ومستشفى أم المصريين', 'Omm El-Masryeen Station Square', 'omm_el_masryeen', 30.0055, 31.2075, ['ميدان أم المصريين']),
  p('sq_dar_elsalam_hub', 'ميدان محطة مترو دار السلام وكوبري دار السلام', 'Dar El-Salam Station Hub', 'dar_el_salam', 29.9875, 31.2335, ['ميدان دار السلام']),
  p('sq_hadayeq_maadi_hub', 'ميدان محطة مترو حدائق المعادي وشارع حسنين دسوقي', 'Hadayeq El-Maadi Station Square', 'hadayeq_el_maadi', 29.9725, 31.2485, ['حدائق المعادي محطة'])
);
