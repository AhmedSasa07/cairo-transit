// Clean schematic coordinates for interactive SVG Cairo Metro & Multi-Modal Transit Map (1560 x 1040 viewBox)

export const MAP_STATION_COORDS = {
  // ================= Line 1 (M1 #00518e: Helwan to New El-Marg) =================
  new_el_marg: { x: 747, y: 229, labelPos: 'right' },
  el_marg: { x: 747, y: 286, labelPos: 'right' },
  ezbet_el_nakhl: { x: 747, y: 306, labelPos: 'right' },
  ain_shams: { x: 747, y: 324, labelPos: 'right' },
  el_matareyya: { x: 747, y: 349, labelPos: 'right' },
  helmeyat_el_zaytoun: { x: 749, y: 373, labelPos: 'right' },
  hadayeq_el_zaytoun: { x: 736, y: 402, labelPos: 'right' },
  saray_el_qobba: { x: 716, y: 417, labelPos: 'right' },
  hammamat_el_qobba: { x: 696, y: 432, labelPos: 'right' },
  kobri_el_qobba: { x: 676, y: 447, labelPos: 'right' },
  manshiet_el_sadr: { x: 655, y: 463, labelPos: 'right' },
  el_demerdash: { x: 634, y: 477, labelPos: 'right' },
  ghamra: { x: 615, y: 495, labelPos: 'right' },
  al_shohadaa: { x: 602, y: 504, labelPos: 'top' }, // INTERCHANGE L1 + L2
  orabi: { x: 580, y: 520, labelPos: 'right' },
  nasser: { x: 575, y: 555, labelPos: 'top' }, // INTERCHANGE L1 + L3
  sadat: { x: 574, y: 589, labelPos: 'left' }, // INTERCHANGE L1 + L2
  saad_zaghloul: { x: 573, y: 619, labelPos: 'right' },
  sayyeda_zeinab: { x: 572, y: 641, labelPos: 'right' },
  malek_saleh: { x: 574, y: 663, labelPos: 'right' },
  mar_girgis: { x: 579, y: 683, labelPos: 'right' },
  el_zahraa: { x: 595, y: 703, labelPos: 'right' },
  dar_el_salam: { x: 627, y: 742, labelPos: 'right' },
  hadayeq_el_maadi: { x: 643, y: 762, labelPos: 'right' },
  maadi: { x: 656, y: 777, labelPos: 'right' },
  sakanat_el_maadi: { x: 667, y: 793, labelPos: 'right' },
  tora_el_balad: { x: 674, y: 810, labelPos: 'right' },
  kozzika: { x: 674, y: 831, labelPos: 'right' },
  tora_el_asmant: { x: 673, y: 852, labelPos: 'right' },
  el_maasara: { x: 675, y: 872, labelPos: 'right' },
  hadayeq_helwan: { x: 675, y: 894, labelPos: 'right' },
  wadi_hof: { x: 674, y: 915, labelPos: 'right' },
  helwan_university: { x: 673, y: 936, labelPos: 'right' },
  ain_helwan: { x: 672, y: 955, labelPos: 'right' },
  helwan: { x: 674, y: 979, labelPos: 'right' },

  // ================= Line 2 (M2 #c13038: Shubra to El-Mounib) =================
  shubra_el_kheima: { x: 603, y: 349, labelPos: 'left' },
  kolleyyet_el_zeraa: { x: 603, y: 381, labelPos: 'left' },
  el_mazallat: { x: 603, y: 401, labelPos: 'left' },
  khalafawy: { x: 603, y: 422, labelPos: 'left' },
  st_teresa: { x: 603, y: 442, labelPos: 'left' },
  road_el_farag: { x: 603, y: 462, labelPos: 'left' },
  massara: { x: 603, y: 481, labelPos: 'left' },
  // al_shohadaa is at (602, 504)
  attaba: { x: 604, y: 554, labelPos: 'bottom' }, // INTERCHANGE L2 + L3
  mohamed_naguib: { x: 602, y: 579, labelPos: 'bottom' },
  // sadat is at (574, 589)
  opera: { x: 530, y: 588, labelPos: 'top' },
  dokki: { x: 503, y: 586, labelPos: 'top' },
  el_bohoth: { x: 475, y: 586, labelPos: 'top' },
  cairo_university: { x: 454, y: 611, labelPos: 'left' }, // INTERCHANGE L2 + L3
  faisal: { x: 454, y: 631, labelPos: 'left' },
  giza: { x: 455, y: 653, labelPos: 'left' },
  omm_el_masryeen: { x: 455, y: 681, labelPos: 'left' },
  saqyet_mekky: { x: 457, y: 700, labelPos: 'left' },
  el_mounib: { x: 455, y: 735, labelPos: 'left' },

  // ================= Line 3 Trunk (M3 #009f87: Adly Mansour to Kit Kat) =================
  adly_mansour: { x: 971, y: 238, labelPos: 'top' }, // INTERCHANGE L3 + LRT + BRT
  el_haykestep: { x: 941, y: 258, labelPos: 'top' },
  omar_ibn_el_khattab: { x: 916, y: 277, labelPos: 'top' },
  qobaa: { x: 891, y: 297, labelPos: 'top' },
  hesham_barakat: { x: 864, y: 318, labelPos: 'top' },
  el_nozha: { x: 837, y: 337, labelPos: 'top' },
  el_shams_club: { x: 813, y: 357, labelPos: 'right' },
  alf_maskan: { x: 794, y: 383, labelPos: 'right' },
  heliopolis: { x: 795, y: 405, labelPos: 'right' },
  haroun: { x: 795, y: 429, labelPos: 'bottom' },
  al_ahram: { x: 792, y: 450, labelPos: 'top' },
  koleyet_el_banat: { x: 780, y: 466, labelPos: 'bottom' },
  stadium: { x: 746, y: 494, labelPos: 'top' }, // INTERCHANGE L3 + Monorail East
  fair_zone: { x: 722, y: 509, labelPos: 'top' },
  abbassiya: { x: 706, y: 521, labelPos: 'top' },
  abdou_pasha: { x: 683, y: 539, labelPos: 'top' },
  el_geish: { x: 660, y: 554, labelPos: 'top' },
  bab_el_shaariya: { x: 636, y: 553, labelPos: 'top' },
  // attaba is at (604, 554)
  // nasser is at (575, 555)
  maspero: { x: 554, y: 548, labelPos: 'bottom' },
  safaa_hegazy: { x: 537, y: 531, labelPos: 'top' },
  kit_kat: { x: 509, y: 498, labelPos: 'top' },

  // ================= Line 3 Northern Branch (to Rod El-Farag) =================
  sudan: { x: 478, y: 459, labelPos: 'left' },
  imbaba: { x: 459, y: 440, labelPos: 'left' },
  el_bohy: { x: 445, y: 423, labelPos: 'left' },
  al_qawmeya: { x: 429, y: 404, labelPos: 'left' },
  ring_road: { x: 411, y: 382, labelPos: 'left' },
  rod_el_farag_corridor: { x: 387, y: 356, labelPos: 'left' },

  // ================= Line 3 Southern Branch (to Cairo University) =================
  el_tawfikeya: { x: 470, y: 511, labelPos: 'right' },
  wadi_el_nile: { x: 456, y: 545, labelPos: 'right' }, // INTERCHANGE L3 + Monorail West
  gamaat_el_dowal: { x: 455, y: 566, labelPos: 'right' },
  bulaq_el_dakrour: { x: 454, y: 586, labelPos: 'right' },
  // cairo_university terminal at (454, 611)

  // ================= LRT (Capital Train - Crimson #9e1b33) =================
  // adly_mansour starts at (971, 238)
  lrt_obour: { x: 1080, y: 238, labelPos: 'top' },
  lrt_mostakbal: { x: 1173, y: 238, labelPos: 'top' },
  lrt_shorouk: { x: 1267, y: 237, labelPos: 'top' },
  lrt_new_heliopolis: { x: 1335, y: 238, labelPos: 'top' },
  lrt_badr: { x: 1402, y: 240, labelPos: 'top' },
  // LRT Fork 2 (Southern Branch - to New Capital)
  lrt_al_roubaiki: { x: 1469, y: 239, labelPos: 'right' },
  lrt_capital_gardens: { x: 1504, y: 391, labelPos: 'right' },
  lrt_capital_airport: { x: 1463, y: 519, labelPos: 'right' },
  city_of_arts: { x: 1463, y: 615, labelPos: 'top' }, // INTERCHANGE LRT + Monorail East HUB (#ecc15f)
  // LRT Fork 1 (Northern Branch - to 10th of Ramadan / Knowledge City)
  lrt_industrial_zone: { x: 1423, y: 180, labelPos: 'right' },
  lrt_knowledge_city: { x: 1422, y: 135, labelPos: 'right' },

  // ================= Monorail East (Teal #009ca6: Stadium to Justice City) =================
  // stadium starts at (746, 494)
  monorail_hesham_barakat: { x: 768, y: 527, labelPos: 'bottom' },
  monorail_nouri_khattab: { x: 786, y: 547, labelPos: 'bottom' },
  monorail_seventh_district: { x: 803, y: 568, labelPos: 'bottom' },
  monorail_zaker_hussein: { x: 822, y: 588, labelPos: 'bottom' },
  monorail_free_zone: { x: 839, y: 609, labelPos: 'bottom' },
  monorail_moshir: { x: 900, y: 616, labelPos: 'bottom' }, // INTERCHANGE Monorail East + BRT
  monorail_cfc: { x: 984, y: 615, labelPos: 'bottom' },
  monorail_choueifat: { x: 1016, y: 615, labelPos: 'bottom' },
  monorail_air_hospital: { x: 1050, y: 615, labelPos: 'bottom' },
  monorail_narges: { x: 1083, y: 614, labelPos: 'bottom' },
  monorail_mohamed_naguib: { x: 1131, y: 635, labelPos: 'bottom' },
  monorail_auc: { x: 1189, y: 614, labelPos: 'bottom' },
  monorail_emaar: { x: 1227, y: 614, labelPos: 'bottom' },
  monorail_fountain_sq: { x: 1260, y: 614, labelPos: 'bottom' },
  monorail_barwa: { x: 1294, y: 615, labelPos: 'bottom' },
  monorail_middle_ring: { x: 1330, y: 615, labelPos: 'bottom' },
  monorail_bin_zayed: { x: 1364, y: 614, labelPos: 'right' },
  monorail_regional_ring: { x: 1407, y: 615, labelPos: 'right' },
  monorail_massa: { x: 1435, y: 615, labelPos: 'right' },
  // city_of_arts Hub connects here at (1463, 615)
  monorail_ministries: { x: 1490, y: 615, labelPos: 'top' },
  justice_city: { x: 1518, y: 616, labelPos: 'right' }, // Eastern Terminus Monorail East

  // ================= Monorail West (Dark Crimson #9b2521: Wadi El-Nile to New October) =================
  monorail_wadi_el_nile: { x: 456, y: 545, labelPos: 'top' }, // INTERCHANGE L3 wadi_el_nile
  monorail_bashtil: { x: 438, y: 527, labelPos: 'top' },
  monorail_ring_road_west: { x: 414, y: 520, labelPos: 'top' },
  monorail_marioutia: { x: 383, y: 519, labelPos: 'top' },
  monorail_mansouria: { x: 352, y: 517, labelPos: 'top' },
  monorail_alex_desert_road: { x: 287, y: 479, labelPos: 'left' },
  monorail_sheikh_zayed: { x: 258, y: 480, labelPos: 'left' },
  monorail_mall_of_egypt: { x: 232, y: 480, labelPos: 'left' },
  monorail_engineers_club: { x: 206, y: 482, labelPos: 'left' },
  monorail_october_univ: { x: 146, y: 503, labelPos: 'left' },
  monorail_sadat_oct: { x: 117, y: 503, labelPos: 'left' },
  monorail_acu: { x: 90, y: 505, labelPos: 'left' },
  monorail_new_october: { x: 59, y: 503, labelPos: 'left' },

  // ================= BRT Ring Road (Purple #8B5CF6) =================
  brt_1_alex_agri: { x: 542, y: 238, labelPos: 'top' },
  brt_2_ahmed_abdelrahim: { x: 599, y: 238, labelPos: 'top' },
  brt_3_shubra_banha: { x: 639, y: 238, labelPos: 'top' },
  brt_4_bahteem: { x: 661, y: 239, labelPos: 'top' },
  brt_5_mostorod: { x: 688, y: 239, labelPos: 'top' },
  brt_6_khosous: { x: 723, y: 239, labelPos: 'top' },
  brt_7_el_marg: { x: 747, y: 227, labelPos: 'top' }, // INTERCHANGE L1 el_marg
  brt_8_mohamed_naguib: { x: 819, y: 239, labelPos: 'right' },
  brt_9_zakah: { x: 854, y: 239, labelPos: 'right' },
  brt_10_orabi: { x: 890, y: 238, labelPos: 'right' },
  brt_11_salam: { x: 920, y: 237, labelPos: 'right' },
  brt_12_adly_mansour: { x: 971, y: 237, labelPos: 'top' }, // INTERCHANGE L3 + LRT adly_mansour
  brt_13_suez_road: { x: 972, y: 436, labelPos: 'right' },
  brt_14_academy: { x: 972, y: 468, labelPos: 'right' },
  brt_15_moshir: { x: 972, y: 498, labelPos: 'top' }, // INTERCHANGE Monorail East monorail_moshir
  brt_16_golf: { x: 972, y: 525, labelPos: 'bottom' },
  brt_17_sokhna: { x: 920, y: 669, labelPos: 'bottom' },
  brt_18_maadi: { x: 860, y: 680, labelPos: 'bottom' },
  brt_19_zahraa_maadi: { x: 800, y: 690, labelPos: 'bottom' },
  brt_20_mokattam: { x: 740, y: 700, labelPos: 'bottom' },
  brt_21_autostrad: { x: 680, y: 710, labelPos: 'bottom' },
  brt_22_gazaer: { x: 620, y: 720, labelPos: 'bottom' },
  brt_23_emameen: { x: 560, y: 730, labelPos: 'bottom' },
  brt_24_zahraa: { x: 500, y: 730, labelPos: 'bottom' },
  brt_25_bahr_aazam: { x: 455, y: 735, labelPos: 'bottom' },
  brt_26_omraniya: { x: 400, y: 735, labelPos: 'bottom' },
  brt_27_talbiya: { x: 340, y: 735, labelPos: 'bottom' },
  brt_28_maryouteya: { x: 280, y: 735, labelPos: 'bottom' },
  brt_29_mansoureya: { x: 220, y: 735, labelPos: 'bottom' },
  brt_30_sun_capital: { x: 160, y: 735, labelPos: 'bottom' },
  brt_31_zewail: { x: 110, y: 735, labelPos: 'bottom' },
  brt_32_gem: { x: 146, y: 621, labelPos: 'left' }
};

// Polyline paths for SVG rendering
export const MAP_LINES_PATHS = {
  line1: [
    'new_el_marg', 'el_marg', 'ezbet_el_nakhl', 'ain_shams', 'el_matareyya',
    'helmeyat_el_zaytoun', 'hadayeq_el_zaytoun', 'saray_el_qobba', 'hammamat_el_qobba',
    'kobri_el_qobba', 'manshiet_el_sadr', 'el_demerdash', 'ghamra', 'al_shohadaa',
    'orabi', 'nasser', 'sadat', 'saad_zaghloul', 'sayyeda_zeinab', 'malek_saleh',
    'mar_girgis', 'el_zahraa', 'dar_el_salam', 'hadayeq_el_maadi', 'maadi',
    'sakanat_el_maadi', 'tora_el_balad', 'kozzika', 'tora_el_asmant', 'el_maasara',
    'hadayeq_helwan', 'wadi_hof', 'helwan_university', 'ain_helwan', 'helwan'
  ],
  line2: [
    'shubra_el_kheima', 'kolleyyet_el_zeraa', 'el_mazallat', 'khalafawy',
    'st_teresa', 'road_el_farag', 'massara', 'al_shohadaa', 'attaba',
    'mohamed_naguib', 'sadat', 'opera', 'dokki', 'el_bohoth', 'cairo_university',
    'faisal', 'giza', 'omm_el_masryeen', 'saqyet_mekky', 'el_mounib'
  ],
  line3_trunk: [
    'adly_mansour', 'el_haykestep', 'omar_ibn_el_khattab', 'qobaa',
    'hesham_barakat', 'el_nozha', 'el_shams_club', 'alf_maskan',
    'heliopolis', 'haroun', 'al_ahram', 'koleyet_el_banat', 'stadium',
    'fair_zone', 'abbassiya', 'abdou_pasha', 'el_geish', 'bab_el_shaariya',
    'attaba', 'nasser', 'maspero', 'safaa_hegazy', 'kit_kat'
  ],
  line3_branch_rod: [
    'kit_kat', 'sudan', 'imbaba', 'el_bohy', 'al_qawmeya', 'ring_road', 'rod_el_farag_corridor'
  ],
  line3_branch_cairo_univ: [
    'kit_kat', 'el_tawfikeya', 'wadi_el_nile', 'gamaat_el_dowal', 'bulaq_el_dakrour', 'cairo_university'
  ],
  lrt_trunk: [
    'adly_mansour', 'lrt_obour', 'lrt_mostakbal', 'lrt_shorouk', 'lrt_new_heliopolis',
    'lrt_badr', 'lrt_al_roubaiki', 'lrt_capital_gardens', 'lrt_capital_airport', 'city_of_arts'
  ],
  lrt_branch_ramadan: [
    'lrt_badr', 'lrt_industrial_zone', 'lrt_knowledge_city'
  ],
  monorail_east: [
    'stadium', 'monorail_hesham_barakat', 'monorail_nouri_khattab', 'monorail_seventh_district',
    'monorail_zaker_hussein', 'monorail_free_zone', 'monorail_moshir', 'monorail_cfc',
    'monorail_choueifat', 'monorail_air_hospital', 'monorail_narges', 'monorail_mohamed_naguib',
    'monorail_auc', 'monorail_emaar', 'monorail_fountain_sq', 'monorail_barwa',
    'monorail_middle_ring', 'monorail_bin_zayed', 'monorail_regional_ring', 'monorail_massa',
    'city_of_arts', 'monorail_ministries', 'justice_city'
  ],
  monorail_west: [
    'monorail_wadi_el_nile', 'monorail_bashtil', 'monorail_ring_road_west', 'monorail_marioutia',
    'monorail_mansouria', 'monorail_alex_desert_road', 'monorail_sheikh_zayed', 'monorail_mall_of_egypt',
    'monorail_engineers_club', 'monorail_october_univ', 'monorail_sadat_oct', 'monorail_acu',
    'monorail_new_october'
  ],
  brt: [
    'brt_1_alex_agri', 'brt_2_ahmed_abdelrahim', 'brt_3_shubra_banha', 'brt_4_bahteem',
    'brt_5_mostorod', 'brt_6_khosous', 'brt_7_el_marg', 'brt_8_mohamed_naguib',
    'brt_9_zakah', 'brt_10_orabi', 'brt_11_salam', 'brt_12_adly_mansour',
    'brt_13_suez_road', 'brt_14_academy', 'brt_15_moshir', 'brt_16_golf',
    'brt_17_sokhna', 'brt_18_maadi', 'brt_19_zahraa_maadi', 'brt_20_mokattam',
    'brt_21_autostrad', 'brt_22_gazaer', 'brt_23_emameen', 'brt_24_zahraa',
    'brt_25_bahr_aazam', 'brt_26_omraniya', 'brt_27_talbiya', 'brt_28_maryouteya',
    'brt_29_mansoureya', 'brt_30_sun_capital'
  ]
};
