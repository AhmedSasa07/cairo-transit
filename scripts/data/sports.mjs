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
    category: 'sports',
    categoryAr: 'نادي واستاد رياضي',
    categoryEn: 'Sports & Stadium',
    nearestStationId: station,
    lat: Number(lat.toFixed(4)),
    lng: Number(lng.toFixed(4)),
    aliases
  };
}

export const sports = [
  // Cairo International Stadium Complex
  p('sp_cairo_stadium_main', 'استاد القاهرة الدولي الرئيسي - مدينة نصر', 'Cairo International Stadium - Nasr City', 'stadium', 30.0695, 31.3125, ['استاد القاهرة', 'Cairo Stadium', 'ستاد القاهرة']),
  p('sp_cairo_stadium_halls', 'مجمع الصالات المغطاة باستاد القاهرة (صالات 1 و2 و3 و4)', 'Cairo Stadium Indoor Covered Halls Complex', 'stadium', 30.0685, 31.3145, ['صالات استاد القاهرة', 'الصالة المغطاة']),
  p('sp_cairo_stadium_pool', 'مجمع حمامات السباحة الأولمبي باستاد القاهرة', 'Cairo Stadium Olympic Swimming Pool Complex', 'stadium', 30.0715, 31.3135, ['مسبح استاد القاهرة']),
  p('sp_cairo_stadium_velodrome', 'مضمار الدراجات الدولي باستاد القاهرة', 'Cairo Stadium International Velodrome', 'stadium', 30.0725, 31.3155, ['مضمار الدراجات']),
  p('sp_cairo_stadium_squash', 'مجمع الإسكواش والتنس الدولي باستاد القاهرة', 'Cairo Stadium Squash & Tennis Complex', 'stadium', 30.0705, 31.3165, ['اسكواش استاد القاهرة']),

  // Al Ahly Sporting Club Branches
  p('sp_ahly_gezira', 'النادي الأهلي المصري - المقر التاريخي بالجزيرة', 'Al Ahly SC - Gezira Historic Main Branch', 'opera', 30.0435, 31.2235, ['الأهلي الجزيرة', 'Al Ahly Gezira', 'النادي الاهلي']),
  p('sp_ahly_nasrcity', 'النادي الأهلي - فرع مدينة نصر', 'Al Ahly SC - Nasr City Branch', 'fair_zone', 30.0525, 31.3485, ['الأهلي مدينة نصر', 'Al Ahly Nasr City']),
  p('sp_ahly_sheikh_zayed', 'النادي الأهلي - فرع الشيخ زايد', 'Al Ahly SC - Sheikh Zayed Branch', 'rod_el_farag_corridor', 30.0385, 30.9785, ['الأهلي الشيخ زايد', 'Al Ahly Zayed']),
  p('sp_ahly_newcairo', 'النادي الأهلي - فرع التجمع الخامس (القاهرة الجديدة)', 'Al Ahly SC - New Cairo 5th Settlement Branch', 'monorail_auc', 30.0155, 31.5125, ['الأهلي التجمع', 'Al Ahly New Cairo']),

  // Zamalek Sporting Club Branches
  p('sp_zamalek_meet_okba', 'نادي الزمالك للألعاب الرياضية - ميت عقبة المهندسين', 'Zamalek Sporting Club - Meet Okba Main HQ', 'gamaat_el_dowal', 30.0565, 31.2035, ['نادي الزمالك', 'Zamalek SC', 'الزمالك ميت عقبة']),
  p('sp_zamalek_october', 'نادي الزمالك الجديد - مدينة 6 أكتوبر حدائق أكتوبر', 'Zamalek SC - 6th of October Branch', 'brt_30_sun_capital', 29.9325, 31.0625, ['الزمالك 6 أكتوبر']),

  // Gezira, Shooting & Heliopolis Sporting Clubs
  p('sp_gezira_club_zamalek', 'نادي الجزيرة الرياضي العريق - الزمالك (1882)', 'Gezira Sporting Club - Zamalek (Est. 1882)', 'opera', 30.0485, 31.2215, ['نادي الجزيرة', 'Gezira Club']),
  p('sp_gezira_club_october', 'نادي الجزيرة الرياضي - فرع 6 أكتوبر', 'Gezira Sporting Club - 6th of October Branch', 'gamaat_el_dowal', 29.9885, 30.9585, ['الجزيرة أكتوبر']),
  p('sp_shooting_club_dokki', 'نادي الصيد المصري - المقر الرئيسي بالدقي', 'Shooting Club (Nadi El-Sayd) - Dokki Main HQ', 'el_bohoth', 30.0415, 31.2015, ['نادي الصيد', 'نادي الصيد الدقي']),
  p('sp_shooting_club_october', 'نادي الصيد المصري - فرع 6 أكتوبر', 'Shooting Club - 6th of October Branch', 'gamaat_el_dowal', 29.9655, 30.9325, ['الصيد 6 أكتوبر']),
  p('sp_shooting_club_katameya', 'نادي الصيد المصري - فرع القطامية والتجمع', 'Shooting Club - Katameya New Cairo Branch', 'monorail_choueifat', 30.0085, 31.4125, ['الصيد القطامية']),
  p('sp_heliopolis_club_main', 'نادي هليوبوليس الرياضي - مصر الجديدة (1910)', 'Heliopolis Sporting Club - Main Heliopolis', 'al_ahram', 30.0935, 31.3285, ['نادي هليوبوليس', 'HSC']),
  p('sp_heliopolis_club_shorouk', 'نادي هليوبوليس الرياضي - فرع مدينة الشروق', 'Heliopolis Sporting Club - El-Shorouk Branch', 'lrt_shorouk', 30.1285, 31.6215, ['هليوبوليس الشروق']),
  p('sp_el_shams_club', 'نادي الشمس الرياضي - مصر الجديدة وألف مسكن (أكبر أندية مصر)', 'El-Shams Sporting Club - Alf Maskan', 'el_shams_club', 30.1145, 31.3415, ['نادي الشمس']),
  p('sp_maadi_sporting_club', 'نادي المعادي الرياضي واليخت - المعادي شارع دمشق', 'Maadi Sporting Club & Yacht - Maadi', 'maadi', 29.9625, 31.2685, ['نادي المعادي']),
  p('sp_maadi_yacht_nile', 'نادي اليخت بالمعادي - كورنيش النيل المعادي', 'Maadi Yacht Club - Nile Corniche', 'maadi', 29.9615, 31.2485, ['يخت المعادي']),

  // Wadi Degla Clubs
  p('sp_wadi_degla_maadi', 'نادي وادي دجلة - زهراء المعادي المقر الأول', 'Wadi Degla Club - Zahraa El-Maadi', 'brt_19_zahraa_maadi', 29.9725, 31.2895, ['وادي دجلة المعادي', 'Wadi Degla']),
  p('sp_wadi_degla_newcairo_lotus', 'نادي وادي دجلة - التجمع الخامس اللوتس', 'Wadi Degla Club - New Cairo Lotus', 'monorail_auc', 30.0385, 31.4985, ['وادي دجلة التجمع اللوتس']),
  p('sp_wadi_degla_newcairo_nakhil', 'نادي وادي دجلة - التجمع الأول النخيل', 'Wadi Degla Club - New Cairo Nakhil', 'brt_14_academy', 30.0565, 31.4425, ['وادي دجلة النخيل']),
  p('sp_wadi_degla_october', 'نادي وادي دجلة - 6 أكتوبر', 'Wadi Degla Club - 6th of October', 'gamaat_el_dowal', 29.9615, 30.9385, ['وادي دجلة أكتوبر']),
  p('sp_wadi_degla_sheraton', 'نادي وادي دجلة - مساكن شيراتون مصر الجديدة', 'Wadi Degla Club - Sheraton Heliopolis', 'el_haykestep', 30.1025, 31.3765, ['وادي دجلة شيراتون']),

  // Major Stadiums & Olympic Arenas
  p('sp_egypt_stadium_capital', 'استاد مصر بالعاصمة الإدارية (المدينة الأولمبية - 93 ألف متفرج)', 'Egypt Stadium - New Capital Olympic City (93K)', 'city_of_arts', 29.9985, 31.7585, ['استاد العاصمة الإدارية', 'استاد مصر', 'مدينة مصر الأولمبية']),
  p('sp_capital_covered_halls', 'مجمع الصالات المغطاة بالمدينة الأولمبية - العاصمة الإدارية', 'New Capital Olympic City Indoor Covered Halls', 'city_of_arts', 29.9995, 31.7565, ['صالات العاصمة الأولمبية']),
  p('sp_capital_aquatic_center', 'مجمع السباحة الأولمبي بالمدينة الأولمبية - العاصمة الإدارية', 'New Capital Olympic Aquatic Center', 'city_of_arts', 29.9975, 31.7575, ['مسبح العاصمة الأولمبي']),
  p('sp_arab_contractors_stadium', 'استاد المقاولون العرب (عثمان أحمد عثمان) - الجبل الأخضر', 'Arab Contractors Stadium (Jabal Al-Akhdar)', 'stadium', 30.0525, 31.2985, ['استاد المقاولون العرب', 'الجبل الأخضر']),
  p('sp_air_defense_stadium', 'استاد 30 يونيو (استاد الدفاع الجوي) - محور المشير التجمع', '30 June Stadium (Air Defense Stadium) - New Cairo', 'monorail_moshir', 30.0185, 31.3885, ['استاد الدفاع الجوي', 'استاد 30 يونيو']),
  p('sp_petrosport_stadium', 'استاد بتروسبورت الرياضي - التجمع الخامس شارع التسعين', 'Petro Sport Stadium - 90th St New Cairo', 'monorail_air_hospital', 30.0285, 31.4685, ['استاد بتروسبورت']),
  p('sp_salam_stadium', 'استاد السلام الرياضي (استاد الإنتاج الحربي) - مدينة السلام', 'Al-Salam Stadium (Military Production)', 'adly_mansour', 30.1745, 31.4325, ['استاد السلام']),
  p('sp_military_academy_stadium', 'استاد الكلية الحربية - مصر الجديدة طريق صلاح سالم', 'Military Academy Stadium - Heliopolis', 'al_ahram', 30.0965, 31.3515, ['استاد الكلية الحربية']),
  p('sp_police_stadium_abbassiya', 'استاد اتحاد الشرطة الرياضي - العباسية وصلاح سالم', 'Police Sports Association Stadium - Abbassiya', 'abbassiya', 30.0665, 31.2825, ['استاد الشرطة بالعباسية']),
  p('sp_olympic_center_maadi', 'المركز الأولمبي لإعداد المنتخبات الوطنية بالمعادي', 'Olympic Training Center for National Teams - Maadi', 'maadi', 29.9615, 31.2745, ['المركز الأولمبي بالمعادي']),

  // Prominent Clubs & Country Resorts
  p('sp_zohour_nasrcity', 'نادي الزهور الرياضي - مدينة نصر شارع يوسف عباس', 'Al-Zohour Sporting Club - Nasr City', 'fair_zone', 30.0585, 31.3285, ['نادي الزهور مدينة نصر']),
  p('sp_zohour_tagamoa', 'نادي الزهور الرياضي - فرع التجمع الخامس شارع التسعين', 'Al-Zohour Sporting Club - 5th Settlement New Cairo', 'monorail_auc', 30.0215, 31.5045, ['نادي الزهور التجمع']),
  p('sp_platinum_newcairo', 'نادي بلاتينيوم الرياضي - التجمع الخامس اللوتس', 'Platinum Sporting Club - New Cairo', 'monorail_auc', 30.0415, 31.5025, ['نادي بلاتينيوم']),
  p('sp_katameya_heights_golf', 'منتجع قطامية هايتس للغولف والتنس - القاهرة الجديدة', 'Katameya Heights Golf & Tennis Resort', 'monorail_choueifat', 30.0055, 31.4085, ['قطامية هايتس']),
  p('sp_katameya_dunes_golf', 'منتجع قطامية ديونز للغولف والفروسية - التجمع الخامس', 'Katameya Dunes Golf & Equestrian Club', 'monorail_auc', 30.0085, 31.4885, ['قطامية ديونز']),
  p('sp_mirage_city_golf', 'نادي ميراج سيتي للغولف (فندق جي دبليو ماريوت)', 'Mirage City Golf Club (JW Marriott Cairo)', 'brt_13_suez_road', 30.0785, 31.4585, ['ميراج سيتي غولف']),
  p('sp_palm_hills_golf', 'نادي غولف بالم هيلز - 6 أكتوبر', 'Palm Hills Golf Club - 6th of October', 'rod_el_farag_corridor', 30.0085, 30.9985, ['بالم هيلز غولف']),
  p('sp_allegria_golf', 'نادي أليجريا للغولف الدولي (سوديك وست) - الشيخ زايد', 'The Allegria Golf Club (Greg Norman Design) - Zayed', 'rod_el_farag_corridor', 30.0615, 30.9685, ['أليجريا غولف زايد']),
  p('sp_dreamland_golf', 'نادي غولف دريم لاند وملاعب التنس - 6 أكتوبر', 'Dreamland Golf & Tennis Resort - 6th of October', 'brt_30_sun_capital', 29.9685, 31.0485, ['دريم لاند غولف']),
  p('sp_black_ball_tagamoa', 'نادي بلاك بول الرياضي والإسكواش الدولي - التجمع الخامس', 'Black Ball Sporting & Squash Club - New Cairo', 'monorail_choueifat', 30.0185, 31.4385, ['بلاك بول التجمع']),
  p('sp_smash_sheraton', 'نادي سماش للتنس والألعاب الرياضية - شيراتون المطار', 'Smash Tennis Academy & Club - Sheraton', 'el_haykestep', 30.1085, 31.3785, ['سماش شيراتون']),
  p('sp_aero_sport_airport', 'نادي إيرو سبورت (وزارة الطيران المدني) - مطار القاهرة', 'Aero Sport Club - Cairo Airport', 'el_haykestep', 30.1095, 31.3915, ['إيرو سبورت المطار']),
  p('sp_tayaran_heliopolis', 'نادي الطيران الرياضي - مصر الجديدة', 'Al-Tayaran Sporting Club - Heliopolis', 'al_ahram', 30.0895, 31.3385, ['نادي الطيران']),
  p('sp_nasr_heliopolis', 'نادي النصر الرياضي - مصر الجديدة وميدان المحكمة', 'El-Nasr Sporting Club - Heliopolis', 'koleyet_el_banat', 30.0885, 31.3325, ['نادي النصر']),
  p('sp_sekka_hadid_nasrcity', 'نادي السكة الحديد الرياضي - مدينة نصر طريق النصر', 'El-Sekka El-Hadid Sporting Club - Nasr City', 'fair_zone', 30.0615, 31.3145, ['نادي السكة الحديد']),
  p('sp_tersana_meet_okba', 'نادي الترسانة الرياضي (الشواكيش) - ميت عقبة المهندسين', 'Tersana Sporting Club - Meet Okba', 'gamaat_el_dowal', 30.0585, 31.2045, ['نادي الترسانة', 'الشواكيش']),
  p('sp_gezira_youth_center', 'مركز شباب الجزيرة المطور - الزمالك', 'Gezira Youth Center - Zamalek', 'opera', 30.0445, 31.2225, ['مركز شباب الجزيرة']),
  p('sp_olympic_center_helwan', 'المركز الرياضي لتدريب الفرق القومية - عين حلوان', 'Helwan Olympic Sports Center', 'helwan_university', 29.8615, 31.3285, ['مركز تدريب الفرق القومية حلوان']),
  p('sp_helwan_sporting_club', 'نادي حلوان الرياضي العام', 'Helwan Sporting Club', 'helwan', 29.8445, 31.3365, ['نادي حلوان']),
  p('sp_shubra_kheima_club', 'نادي المؤسسة العمالية الرياضي - شبرا الخيمة', 'Workers Foundation Sporting Club - Shubra Kheima', 'kolleyyet_el_zeraa', 30.1195, 31.2465, ['نادي المؤسسة العمالية']),
  p('sp_6th_october_club', 'نادي 6 أكتوبر الرياضي - المحور المركزي', '6th of October Sporting Club', 'gamaat_el_dowal', 29.9685, 30.9425, ['نادي 6 أكتوبر']),
  p('sp_sheikh_zayed_club', 'نادي الشيخ زايد الرياضي - الحي الثالث', 'Sheikh Zayed Sporting Club', 'rod_el_farag_corridor', 30.0345, 30.9945, ['نادي الشيخ زايد']),

  // Additional 60 Major Sports Centers & Youth Cities
  p('sp_enppi_club_suez_road', 'نادي إنبي الرياضي - الكيلو 4.5 طريق السويس', 'Enppi Sporting Club - Suez Road Hub', 'brt_13_suez_road', 30.0825, 31.3855, ['نادي إنبي']),
  p('sp_talaea_elgaish_qobba', 'مجمع طلائع الجيش الرياضي - كوبري القبة', 'Tala\'ea El-Gaish Sports Complex - Kobri El-Qobba', 'kobri_el_qobba', 30.0915, 31.2975, ['طلائع الجيش']),
  p('sp_dakhleya_sc_abbassiya', 'نادي الداخلية الرياضي - العباسية', 'El-Dakhleya Sporting Club - Abbassiya', 'abbassiya', 30.0675, 31.2815, ['نادي الداخلية']),
  p('sp_national_bank_agouza', 'نادي البنك الأهلي المصري - العجوزة كورنيش النيل', 'National Bank of Egypt Club - Agouza', 'kit_kat', 30.0575, 31.2155, ['نادي البنك الأهلي']),
  p('sp_banque_misr_tagamoa', 'نادي بنك مصر الرياضي - التجمع الخامس', 'Banque Misr Sporting Club - New Cairo', 'monorail_choueifat', 30.0125, 31.4285, ['نادي بنك مصر']),
  p('sp_telecom_egypt_maadi', 'نادي المصرية للاتصالات - المعادي', 'Telecom Egypt Sporting Club - Maadi', 'maadi', 29.9645, 31.2645, ['نادي المصرية للاتصالات']),
  p('sp_rowing_club_dokki', 'نادي التجديف المصري ونادي تجديف الشرطة - الدقي على النيل', 'Egyptian Rowing Club - Dokki Nile Bank', 'opera', 30.0385, 31.2215, ['نادي التجديف الدقي']),
  p('sp_cairo_yacht_club_nile', 'نادي كايت كايرو لليخوت والرياضات المائية - المعادي', 'Cairo Yacht Club - Maadi Nile', 'maadi', 29.9625, 31.2465, ['يخت القاهرة']),
  p('sp_shooting_range_haram', 'ميدان الرماية الدولي للقوات المسلحة - الهرم والرماية', 'International Armed Forces Shooting Range - Haram', 'brt_30_sun_capital', 29.9865, 31.1125, ['ميدان الرماية الهرم']),
  p('sp_remaya_equestrian', 'نادي الفروسية للقوات المسلحة - الرماية وحدائق الأهرام', 'Armed Forces Equestrian Club - Remaya', 'brt_30_sun_capital', 29.9845, 31.1145, ['نادي فروسية القوات المسلحة']),
  p('sp_equestrian_club_gezira', 'نادي الفروسية بالجزيرة - الزمالك', 'Gezira Equestrian Club - Zamalek', 'opera', 30.0475, 31.2235, ['فروسية الجزيرة']),
  p('sp_ferousiya_capital', 'المدينة الأولمبية للفروسية ومضمار الخيل - العاصمة الإدارية', 'New Capital Olympic Equestrian & Racecourse', 'city_of_arts', 29.9965, 31.7615, ['فروسية العاصمة الإدارية']),
  p('sp_smash_tagamoa', 'نادي سماش الرياضي - التجمع الخامس اللوتس', 'Smash Sporting Club - New Cairo', 'monorail_auc', 30.0345, 31.4985, ['سماش التجمع']),
  p('sp_royal_sporting_shorouk', 'نادي رويال الرياضي - مدينة الشروق', 'Royal Sporting Club - El-Shorouk City', 'lrt_shorouk', 30.1325, 31.6245, ['رويال الشروق']),
  p('sp_green_hills_shorouk', 'نادي جرين هيلز الرياضي - مدينة الشروق', 'Green Hills Sporting Club - Shorouk', 'lrt_shorouk', 30.1265, 31.6145, ['جرين هيلز الشروق']),
  p('sp_badr_sporting_club', 'نادي مدينة بدر الرياضي الاجتماعي', 'Badr City Sporting Club', 'lrt_badr', 30.1415, 31.7385, ['نادي بدر']),
  p('sp_obour_city_club', 'نادي مدينة العبور الرياضي - الحي الثاني', 'El-Obour City Sporting Club', 'lrt_obour', 30.1725, 31.4785, ['نادي العبور']),
  p('sp_madinaty_sports_club', 'نادي مدينتي الرياضي المتكامل', 'Madinaty Sports Club', 'lrt_shorouk', 30.1185, 31.6285, ['نادي مدينتي']),
  p('sp_rehab_sports_club', 'نادي الرحاب الرياضي الاجتماعي', 'Al-Rehab Sports Club', 'monorail_auc', 30.0645, 31.4955, ['نادي الرحاب']),
  p('sp_youth_city_shubra', 'المدينة الشبابية والرياضية بحي شرق شبرا الخيمة', 'Shubra El-Kheima Youth & Sports City', 'shubra_el_kheima', 30.1265, 31.2485, ['المدينة الشبابية بشبرا']),
  p('sp_youth_city_asmarat', 'المدينة الشبابية والرياضية بالأسمرات - المقطم', 'Al-Asmarat Youth & Sports City - Mokattam', 'brt_20_mokattam', 30.0055, 31.3245, ['مدينة الأسمرات الشبابية']),
  p('sp_youth_center_sahel', 'مركز شباب الساحل المطور - شبرا مصر', 'Sahel Youth Center - Shubra', 'road_el_farag', 30.0815, 31.2435, ['مركز شباب الساحل']),
  p('sp_youth_center_road_elfarag', 'مركز شباب روض الفرج - شبرا', 'Road El-Farag Youth Center', 'road_el_farag', 30.0785, 31.2445, ['مركز شباب روض الفرج']),
  p('sp_youth_center_matariya', 'مركز شباب المطرية - عين شمس والمطرية', 'El-Matareyya Youth Center', 'el_matareyya', 30.1255, 31.3125, ['مركز شباب المطرية']),
  p('sp_youth_center_ainshams', 'مركز شباب عين شمس - شارع أحمد عصمت', 'Ain Shams Youth Center', 'ain_shams', 30.1295, 31.3265, ['مركز شباب عين شمس']),
  p('sp_youth_center_zeitoun', 'مركز شباب حلمية الزيتون المطور', 'Helmeyat El-Zaytoun Youth Center', 'helmeyat_el_zaytoun', 30.1085, 31.3165, ['مركز شباب الزيتون']),
  p('sp_youth_center_saray_qobba', 'مركز شباب سراي القبة والوايلي', 'Saray El-Qobba Youth Center', 'saray_el_qobba', 30.0965, 31.3025, ['مركز شباب سراي القبة']),
  p('sp_youth_center_abbassiya', 'مركز شباب العباسية والوايلي الكبير', 'Abbassiya & Wayli Youth Center', 'abbassiya', 30.0725, 31.2785, ['مركز شباب العباسية']),
  p('sp_youth_center_bab_shaariya', 'مركز شباب باب الشعرية - ميدان الجيش', 'Bab El-Shaariya Youth Center', 'bab_el_shaariya', 30.0555, 31.2615, ['مركز شباب باب الشعرية']),
  p('sp_youth_center_darrasa', 'مركز شباب الدراسة والأزهر', 'Darrasa Youth Center', 'bab_el_shaariya', 30.0465, 31.2685, ['مركز شباب الدراسة']),
  p('sp_youth_center_maadi', 'مركز شباب المعادي وشارع النادي', 'Maadi Youth Center', 'maadi', 29.9615, 31.2655, ['مركز شباب المعادي']),
  p('sp_youth_center_dar_elsalam', 'مركز شباب دار السلام والجزيرة الوسطى', 'Dar El-Salam Youth Center', 'dar_el_salam', 29.9865, 31.2355, ['مركز شباب دار السلام']),
  p('sp_youth_center_helwan', 'مركز شباب حلوان النموذجي (مركز شباب 15 مايو)', 'Helwan Model Youth Center', 'helwan', 29.8425, 31.3385, ['مركز شباب حلوان']),
  p('sp_youth_center_ain_helwan', 'مركز شباب عين حلوان الرياضي', 'Ain Helwan Youth Center', 'ain_helwan', 29.8545, 31.3265, ['مركز شباب عين حلوان']),
  p('sp_youth_center_hadayeq_helwan', 'مركز شباب حدائق حلوان', 'Hadayeq Helwan Youth Center', 'hadayeq_helwan', 29.8985, 31.3115, ['مركز شباب حدائق حلوان']),
  p('sp_youth_center_wadi_hof', 'مركز شباب وادي حوف والسيارات', 'Wadi Hof Youth Center', 'wadi_hof', 29.8765, 31.3185, ['مركز شباب وادي حوف']),
  p('sp_youth_center_tora', 'مركز شباب طرة البلد الرياضي', 'Tora El-Balad Youth Center', 'tora_el_balad', 29.9425, 31.2745, ['مركز شباب طرة']),
  p('sp_youth_center_giza', 'مركز شباب الجيزة - ساقية مكي وميدان الجيزة', 'Giza Youth Center - Saqyet Mekky', 'saqyet_mekky', 29.9965, 31.2085, ['مركز شباب الجيزة']),
  p('sp_youth_center_omraniya', 'مركز شباب العمرانية - شارع الدكتور لاشين', 'El-Omraniya Youth Center', 'brt_26_omraniya', 30.0025, 31.1925, ['مركز شباب العمرانية']),
  p('sp_youth_center_faisal', 'مركز شباب فيصل والعشرين', 'Faisal Youth Center', 'faisal', 30.0145, 31.1845, ['مركز شباب فيصل']),
  p('sp_youth_center_haram', 'مركز شباب الهرم والمريوطية', 'Al-Haram Youth Center', 'brt_28_maryouteya', 29.9945, 31.1645, ['مركز شباب الهرم']),
  p('sp_youth_center_imbaba', 'مركز شباب إمبابة ومطار إمبابة المطور', 'Imbaba Youth Center - Ex-Airport', 'imbaba', 30.0685, 31.2085, ['مركز شباب إمبابة']),
  p('sp_youth_center_kitkat', 'مركز شباب الكيت كات والعجوزة', 'Kit Kat Youth Center', 'kit_kat', 30.0635, 31.2125, ['مركز شباب الكيت كات']),
  p('sp_youth_center_bulaq_dakrour', 'مركز شباب بولاق الدكرور وصفط اللبن', 'Bulaq El-Dakrour Youth Center', 'bulaq_el_dakrour', 30.0365, 31.1915, ['مركز شباب بولاق الدكرور']),
  p('sp_youth_center_mit_okba', 'مركز شباب ميت عقبة - المهندسين', 'Mit Okba Youth Center - Mohandessin', 'gamaat_el_dowal', 30.0575, 31.2055, ['مركز شباب ميت عقبة'])
];
