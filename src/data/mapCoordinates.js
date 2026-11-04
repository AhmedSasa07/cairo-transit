// Clean schematic coordinates for interactive SVG Cairo Metro & Multi-Modal Transit Map (1560 x 1040 viewBox)

export const MAP_STATION_COORDS = {
  // ================= Line 1 (Red: Helwan to New El-Marg) =================
  new_el_marg: { x: 880, y: 70, labelPos: 'right' },
  el_marg: { x: 860, y: 95, labelPos: 'right' },
  ezbet_el_nakhl: { x: 840, y: 120, labelPos: 'right' },
  ain_shams: { x: 820, y: 145, labelPos: 'right' },
  el_matareyya: { x: 800, y: 170, labelPos: 'right' },
  helmeyat_el_zaytoun: { x: 780, y: 195, labelPos: 'right' },
  hadayeq_el_zaytoun: { x: 760, y: 220, labelPos: 'right' },
  saray_el_qobba: { x: 740, y: 245, labelPos: 'right' },
  hammamat_el_qobba: { x: 720, y: 270, labelPos: 'right' },
  kobri_el_qobba: { x: 700, y: 295, labelPos: 'right' },
  manshiet_el_sadr: { x: 675, y: 325, labelPos: 'right' },
  el_demerdash: { x: 645, y: 355, labelPos: 'right' },
  ghamra: { x: 615, y: 385, labelPos: 'right' },
  al_shohadaa: { x: 570, y: 420, labelPos: 'top' }, // INTERCHANGE L1 + L2
  orabi: { x: 550, y: 445, labelPos: 'right' },
  nasser: { x: 530, y: 470, labelPos: 'top' }, // INTERCHANGE L1 + L3
  sadat: { x: 505, y: 515, labelPos: 'left' }, // INTERCHANGE L1 + L2
  saad_zaghloul: { x: 505, y: 555, labelPos: 'right' },
  sayyeda_zeinab: { x: 505, y: 585, labelPos: 'right' },
  malek_saleh: { x: 505, y: 615, labelPos: 'right' },
  mar_girgis: { x: 505, y: 645, labelPos: 'right' },
  el_zahraa: { x: 505, y: 675, labelPos: 'right' },
  dar_el_salam: { x: 505, y: 705, labelPos: 'right' },
  hadayeq_el_maadi: { x: 505, y: 735, labelPos: 'right' },
  maadi: { x: 505, y: 765, labelPos: 'right' },
  sakanat_el_maadi: { x: 505, y: 790, labelPos: 'right' },
  tora_el_balad: { x: 505, y: 815, labelPos: 'right' },
  kozzika: { x: 505, y: 835, labelPos: 'right' },
  tora_el_asmant: { x: 505, y: 855, labelPos: 'right' },
  el_maasara: { x: 505, y: 875, labelPos: 'right' },
  hadayeq_helwan: { x: 505, y: 895, labelPos: 'right' },
  wadi_hof: { x: 505, y: 915, labelPos: 'right' },
  helwan_university: { x: 505, y: 935, labelPos: 'right' },
  ain_helwan: { x: 505, y: 955, labelPos: 'right' },
  helwan: { x: 505, y: 975, labelPos: 'right' },

  // ================= Line 2 (Orange/Red: Shubra to El-Mounib) =================
  shubra_el_kheima: { x: 440, y: 110, labelPos: 'left' },
  kolleyyet_el_zeraa: { x: 450, y: 155, labelPos: 'left' },
  el_mazallat: { x: 460, y: 200, labelPos: 'left' },
  khalafawy: { x: 470, y: 245, labelPos: 'left' },
  st_teresa: { x: 480, y: 290, labelPos: 'left' },
  road_el_farag: { x: 495, y: 335, labelPos: 'left' },
  massara: { x: 520, y: 375, labelPos: 'left' },
  // al_shohadaa is at (570, 420)
  attaba: { x: 590, y: 470, labelPos: 'bottom' }, // INTERCHANGE L2 + L3
  mohamed_naguib: { x: 550, y: 505, labelPos: 'bottom' },
  // sadat is at (505, 515)
  opera: { x: 430, y: 535, labelPos: 'top' },
  dokki: { x: 380, y: 560, labelPos: 'top' },
  el_bohoth: { x: 330, y: 585, labelPos: 'top' },
  cairo_university: { x: 280, y: 620, labelPos: 'left' }, // INTERCHANGE L2 + L3
  faisal: { x: 280, y: 670, labelPos: 'left' },
  giza: { x: 280, y: 720, labelPos: 'left' },
  omm_el_masryeen: { x: 280, y: 765, labelPos: 'left' },
  saqyet_mekky: { x: 280, y: 810, labelPos: 'left' },
  el_mounib: { x: 280, y: 855, labelPos: 'left' },

  // ================= Line 3 Trunk (Green: Adly Mansour to Kit Kat) =================
  adly_mansour: { x: 1130, y: 340, labelPos: 'top' }, // INTERCHANGE L3 + LRT + BRT
  el_haykestep: { x: 1080, y: 340, labelPos: 'top' },
  omar_ibn_el_khattab: { x: 1030, y: 340, labelPos: 'top' },
  qobaa: { x: 980, y: 340, labelPos: 'top' },
  hesham_barakat: { x: 935, y: 340, labelPos: 'top' },
  el_nozha: { x: 890, y: 340, labelPos: 'top' },
  el_shams_club: { x: 855, y: 360, labelPos: 'right' },
  alf_maskan: { x: 825, y: 380, labelPos: 'right' },
  heliopolis: { x: 795, y: 400, labelPos: 'right' },
  haroun: { x: 765, y: 420, labelPos: 'bottom' },
  al_ahram: { x: 735, y: 440, labelPos: 'top' },
  koleyet_el_banat: { x: 705, y: 460, labelPos: 'bottom' },
  stadium: { x: 675, y: 480, labelPos: 'top' }, // INTERCHANGE L3 + Monorail East
  fair_zone: { x: 650, y: 470, labelPos: 'top' },
  abbassiya: { x: 635, y: 445, labelPos: 'top' },
  abdou_pasha: { x: 620, y: 450, labelPos: 'top' },
  el_geish: { x: 605, y: 455, labelPos: 'top' },
  bab_el_shaariya: { x: 600, y: 465, labelPos: 'top' },
  // attaba is at (590, 470)
  // nasser is at (530, 470)
  maspero: { x: 475, y: 470, labelPos: 'bottom' },
  safaa_hegazy: { x: 420, y: 470, labelPos: 'top' },
  kit_kat: { x: 360, y: 470, labelPos: 'top' },

  // ================= Line 3 Northern Branch (to Rod El-Farag) =================
  sudan: { x: 335, y: 425, labelPos: 'left' },
  imbaba: { x: 310, y: 380, labelPos: 'left' },
  el_bohy: { x: 285, y: 335, labelPos: 'left' },
  al_qawmeya: { x: 260, y: 290, labelPos: 'left' },
  ring_road: { x: 235, y: 245, labelPos: 'left' },
  rod_el_farag_corridor: { x: 210, y: 200, labelPos: 'left' },

  // ================= Line 3 Southern Branch (to Cairo University) =================
  el_tawfikeya: { x: 335, y: 505, labelPos: 'right' },
  wadi_el_nile: { x: 315, y: 535, labelPos: 'right' }, // INTERCHANGE L3 + Monorail West
  gamaat_el_dowal: { x: 295, y: 565, labelPos: 'right' },
  bulaq_el_dakrour: { x: 285, y: 595, labelPos: 'right' },
  // cairo_university terminal at (280, 620)

  // ================= LRT (Capital Train - Cyan #06B6D4) =================
  // adly_mansour starts at (1130, 340)
  lrt_obour: { x: 1190, y: 315, labelPos: 'top' },
  lrt_mostakbal: { x: 1245, y: 290, labelPos: 'top' },
  lrt_shorouk: { x: 1300, y: 265, labelPos: 'top' },
  lrt_new_heliopolis: { x: 1355, y: 240, labelPos: 'top' },
  lrt_badr: { x: 1410, y: 220, labelPos: 'top' },
  // LRT Capital Branch
  lrt_capital_gardens: { x: 1420, y: 300, labelPos: 'right' },
  lrt_capital_airport: { x: 1420, y: 380, labelPos: 'right' },
  city_of_arts: { x: 1415, y: 465, labelPos: 'right' }, // INTERCHANGE LRT + Monorail East
  // LRT 10th of Ramadan Branch
  lrt_al_roubaiki: { x: 1445, y: 170, labelPos: 'right' },
  lrt_industrial_zone: { x: 1475, y: 125, labelPos: 'right' },
  lrt_10th_of_ramadan: { x: 1500, y: 80, labelPos: 'right' },

  // ================= Monorail East (Orange #EA580C) =================
  // stadium starts at (675, 480)
  monorail_hesham_barakat: { x: 715, y: 515, labelPos: 'bottom' },
  monorail_nouri_khattab: { x: 755, y: 540, labelPos: 'bottom' },
  monorail_seventh_district: { x: 795, y: 565, labelPos: 'bottom' },
  monorail_zaker_hussein: { x: 835, y: 590, labelPos: 'bottom' },
  monorail_free_zone: { x: 875, y: 615, labelPos: 'bottom' },
  monorail_moshir: { x: 920, y: 640, labelPos: 'bottom' }, // INTERCHANGE Monorail East + BRT
  monorail_cfc: { x: 965, y: 652, labelPos: 'bottom' },
  monorail_choueifat: { x: 1010, y: 660, labelPos: 'bottom' },
  monorail_air_hospital: { x: 1055, y: 665, labelPos: 'bottom' },
  monorail_narges: { x: 1100, y: 670, labelPos: 'bottom' },
  monorail_mohamed_naguib: { x: 1145, y: 670, labelPos: 'bottom' },
  monorail_auc: { x: 1190, y: 665, labelPos: 'bottom' },
  monorail_emaar: { x: 1230, y: 655, labelPos: 'bottom' },
  monorail_fountain_sq: { x: 1270, y: 640, labelPos: 'bottom' },
  monorail_barwa: { x: 1305, y: 620, labelPos: 'bottom' },
  monorail_middle_ring: { x: 1340, y: 595, labelPos: 'bottom' },
  monorail_bin_zayed: { x: 1370, y: 565, labelPos: 'right' },
  monorail_regional_ring: { x: 1390, y: 535, labelPos: 'right' },
  monorail_massa: { x: 1405, y: 510, labelPos: 'right' },
  monorail_ministries: { x: 1412, y: 488, labelPos: 'right' },
  // terminates at city_of_arts (1415, 465)

  // ================= Monorail West (Amber #D97706) =================
  monorail_wadi_el_nile: { x: 315, y: 515, labelPos: 'top' }, // INTERCHANGE L3 wadi_el_nile
  monorail_bashtil: { x: 270, y: 505, labelPos: 'top' },
  monorail_ring_road_west: { x: 230, y: 480, labelPos: 'top' },
  monorail_marioutia: { x: 190, y: 470, labelPos: 'top' },
  monorail_mansouria: { x: 150, y: 470, labelPos: 'top' },
  monorail_alex_desert_road: { x: 115, y: 495, labelPos: 'left' },
  monorail_sheikh_zayed: { x: 90, y: 540, labelPos: 'left' },
  monorail_mall_of_egypt: { x: 80, y: 590, labelPos: 'left' },
  monorail_engineers_club: { x: 80, y: 640, labelPos: 'left' },
  monorail_october_univ: { x: 80, y: 690, labelPos: 'left' },
  monorail_sadat_oct: { x: 80, y: 740, labelPos: 'left' },
  monorail_acu: { x: 80, y: 790, labelPos: 'left' },
  monorail_new_october: { x: 80, y: 840, labelPos: 'left' },

  // ================= BRT Phase 1 (Purple #8B5CF6) =================
  brt_1_alex_agri: { x: 410, y: 50, labelPos: 'top' },
  brt_2_ahmed_abdelrahim: { x: 480, y: 40, labelPos: 'top' },
  brt_3_shubra_banha: { x: 550, y: 35, labelPos: 'top' },
  brt_4_bahteem: { x: 630, y: 35, labelPos: 'top' },
  brt_5_mostorod: { x: 710, y: 38, labelPos: 'top' },
  brt_6_khosous: { x: 790, y: 45, labelPos: 'top' },
  brt_7_el_marg: { x: 860, y: 75, labelPos: 'top' }, // INTERCHANGE L1 el_marg
  brt_8_mohamed_naguib: { x: 915, y: 140, labelPos: 'right' },
  brt_9_zakah: { x: 965, y: 185, labelPos: 'right' },
  brt_10_orabi: { x: 1015, y: 230, labelPos: 'right' },
  brt_11_salam: { x: 1065, y: 280, labelPos: 'right' },
  brt_12_adly_mansour: { x: 1145, y: 325, labelPos: 'top' }, // INTERCHANGE L3 + LRT adly_mansour
  brt_13_suez_road: { x: 1100, y: 430, labelPos: 'right' },
  brt_14_academy: { x: 1025, y: 530, labelPos: 'right' },
  brt_15_moshir: { x: 920, y: 615, labelPos: 'top' }, // INTERCHANGE Monorail East monorail_moshir
  brt_16_golf: { x: 860, y: 720, labelPos: 'bottom' }
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
    'lrt_badr', 'lrt_capital_gardens', 'lrt_capital_airport', 'city_of_arts'
  ],
  lrt_branch_ramadan: [
    'lrt_badr', 'lrt_al_roubaiki', 'lrt_industrial_zone', 'lrt_10th_of_ramadan'
  ],
  monorail_east: [
    'stadium', 'monorail_hesham_barakat', 'monorail_nouri_khattab', 'monorail_seventh_district',
    'monorail_zaker_hussein', 'monorail_free_zone', 'monorail_moshir', 'monorail_cfc',
    'monorail_choueifat', 'monorail_air_hospital', 'monorail_narges', 'monorail_mohamed_naguib',
    'monorail_auc', 'monorail_emaar', 'monorail_fountain_sq', 'monorail_barwa',
    'monorail_middle_ring', 'monorail_bin_zayed', 'monorail_regional_ring', 'monorail_massa',
    'monorail_ministries', 'city_of_arts'
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
    'brt_13_suez_road', 'brt_14_academy', 'brt_15_moshir', 'brt_16_golf'
  ]
};
