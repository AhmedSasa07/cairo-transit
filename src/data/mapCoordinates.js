// Clean schematic coordinates for interactive SVG Cairo Metro Map (1200 x 950 viewBox)

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

  // ================= Line 2 (Orange: Shubra to El-Mounib) =================
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
  adly_mansour: { x: 1130, y: 340, labelPos: 'top' },
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
  stadium: { x: 675, y: 480, labelPos: 'top' },
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
  wadi_el_nile: { x: 315, y: 535, labelPos: 'right' },
  gamaat_el_dowal: { x: 295, y: 565, labelPos: 'right' },
  bulaq_el_dakrour: { x: 285, y: 595, labelPos: 'right' }
  // cairo_university terminal at (280, 620)
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
  ]
};
