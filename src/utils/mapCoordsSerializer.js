/**
 * Serializer & Clipboard utility for MAP_STATION_COORDS
 * Preserves exact comments, line groupings, and indentation of src/data/mapCoordinates.js
 */

// Ordered schema matching exact layout of src/data/mapCoordinates.js
const COORDS_SCHEMA = [
  // ================= Line 1 =================
  { type: 'comment', text: '  // ================= Line 1 (Red: Helwan to New El-Marg) =================' },
  { id: 'new_el_marg', labelPos: 'right' },
  { id: 'el_marg', labelPos: 'right' },
  { id: 'ezbet_el_nakhl', labelPos: 'right' },
  { id: 'ain_shams', labelPos: 'right' },
  { id: 'el_matareyya', labelPos: 'right' },
  { id: 'helmeyat_el_zaytoun', labelPos: 'right' },
  { id: 'hadayeq_el_zaytoun', labelPos: 'right' },
  { id: 'saray_el_qobba', labelPos: 'right' },
  { id: 'hammamat_el_qobba', labelPos: 'right' },
  { id: 'kobri_el_qobba', labelPos: 'right' },
  { id: 'manshiet_el_sadr', labelPos: 'right' },
  { id: 'el_demerdash', labelPos: 'right' },
  { id: 'ghamra', labelPos: 'right' },
  { id: 'al_shohadaa', labelPos: 'top', comment: '// INTERCHANGE L1 + L2' },
  { id: 'orabi', labelPos: 'right' },
  { id: 'nasser', labelPos: 'top', comment: '// INTERCHANGE L1 + L3' },
  { id: 'sadat', labelPos: 'left', comment: '// INTERCHANGE L1 + L2' },
  { id: 'saad_zaghloul', labelPos: 'right' },
  { id: 'sayyeda_zeinab', labelPos: 'right' },
  { id: 'malek_saleh', labelPos: 'right' },
  { id: 'mar_girgis', labelPos: 'right' },
  { id: 'el_zahraa', labelPos: 'right' },
  { id: 'dar_el_salam', labelPos: 'right' },
  { id: 'hadayeq_el_maadi', labelPos: 'right' },
  { id: 'maadi', labelPos: 'right' },
  { id: 'sakanat_el_maadi', labelPos: 'right' },
  { id: 'tora_el_balad', labelPos: 'right' },
  { id: 'kozzika', labelPos: 'right' },
  { id: 'tora_el_asmant', labelPos: 'right' },
  { id: 'el_maasara', labelPos: 'right' },
  { id: 'hadayeq_helwan', labelPos: 'right' },
  { id: 'wadi_hof', labelPos: 'right' },
  { id: 'helwan_university', labelPos: 'right' },
  { id: 'ain_helwan', labelPos: 'right' },
  { id: 'helwan', labelPos: 'right' },
  { type: 'empty' },

  // ================= Line 2 =================
  { type: 'comment', text: '  // ================= Line 2 (Orange/Red: Shubra to El-Mounib) =================' },
  { id: 'shubra_el_kheima', labelPos: 'left' },
  { id: 'kolleyyet_el_zeraa', labelPos: 'left' },
  { id: 'el_mazallat', labelPos: 'left' },
  { id: 'khalafawy', labelPos: 'left' },
  { id: 'st_teresa', labelPos: 'left' },
  { id: 'road_el_farag', labelPos: 'left' },
  { id: 'massara', labelPos: 'left' },
  { type: 'comment', text: '  // al_shohadaa is at (570, 420)' },
  { id: 'attaba', labelPos: 'bottom', comment: '// INTERCHANGE L2 + L3' },
  { id: 'mohamed_naguib', labelPos: 'bottom' },
  { type: 'comment', text: '  // sadat is at (505, 515)' },
  { id: 'opera', labelPos: 'top' },
  { id: 'dokki', labelPos: 'top' },
  { id: 'el_bohoth', labelPos: 'top' },
  { id: 'cairo_university', labelPos: 'left', comment: '// INTERCHANGE L2 + L3' },
  { id: 'faisal', labelPos: 'left' },
  { id: 'giza', labelPos: 'left' },
  { id: 'omm_el_masryeen', labelPos: 'left' },
  { id: 'saqyet_mekky', labelPos: 'left' },
  { id: 'el_mounib', labelPos: 'left' },
  { type: 'empty' },

  // ================= Line 3 Trunk =================
  { type: 'comment', text: '  // ================= Line 3 Trunk (Green: Adly Mansour to Kit Kat) =================' },
  { id: 'adly_mansour', labelPos: 'top', comment: '// INTERCHANGE L3 + LRT + BRT' },
  { id: 'el_haykestep', labelPos: 'top' },
  { id: 'omar_ibn_el_khattab', labelPos: 'top' },
  { id: 'qobaa', labelPos: 'top' },
  { id: 'hesham_barakat', labelPos: 'top' },
  { id: 'el_nozha', labelPos: 'top' },
  { id: 'el_shams_club', labelPos: 'right' },
  { id: 'alf_maskan', labelPos: 'right' },
  { id: 'heliopolis', labelPos: 'right' },
  { id: 'haroun', labelPos: 'bottom' },
  { id: 'al_ahram', labelPos: 'top' },
  { id: 'koleyet_el_banat', labelPos: 'bottom' },
  { id: 'stadium', labelPos: 'top', comment: '// INTERCHANGE L3 + Monorail East' },
  { id: 'fair_zone', labelPos: 'top' },
  { id: 'abbassiya', labelPos: 'top' },
  { id: 'abdou_pasha', labelPos: 'top' },
  { id: 'el_geish', labelPos: 'top' },
  { id: 'bab_el_shaariya', labelPos: 'top' },
  { type: 'comment', text: '  // attaba is at (590, 470)' },
  { type: 'comment', text: '  // nasser is at (530, 470)' },
  { id: 'maspero', labelPos: 'bottom' },
  { id: 'safaa_hegazy', labelPos: 'top' },
  { id: 'kit_kat', labelPos: 'top' },
  { type: 'empty' },

  // ================= Line 3 Northern Branch =================
  { type: 'comment', text: '  // ================= Line 3 Northern Branch (to Rod El-Farag) =================' },
  { id: 'sudan', labelPos: 'left' },
  { id: 'imbaba', labelPos: 'left' },
  { id: 'el_bohy', labelPos: 'left' },
  { id: 'al_qawmeya', labelPos: 'left' },
  { id: 'ring_road', labelPos: 'left' },
  { id: 'rod_el_farag_corridor', labelPos: 'left' },
  { type: 'empty' },

  // ================= Line 3 Southern Branch =================
  { type: 'comment', text: '  // ================= Line 3 Southern Branch (to Cairo University) =================' },
  { id: 'el_tawfikeya', labelPos: 'right' },
  { id: 'wadi_el_nile', labelPos: 'right', comment: '// INTERCHANGE L3 + Monorail West' },
  { id: 'gamaat_el_dowal', labelPos: 'right' },
  { id: 'bulaq_el_dakrour', labelPos: 'right' },
  { type: 'comment', text: '  // cairo_university terminal at (280, 620)' },
  { type: 'empty' },

  // ================= LRT =================
  { type: 'comment', text: '  // ================= LRT (Capital Train - Cyan #06B6D4) =================' },
  { type: 'comment', text: '  // adly_mansour starts at (1130, 340)' },
  { id: 'lrt_obour', labelPos: 'top' },
  { id: 'lrt_mostakbal', labelPos: 'top' },
  { id: 'lrt_shorouk', labelPos: 'top' },
  { id: 'lrt_new_heliopolis', labelPos: 'top' },
  { id: 'lrt_badr', labelPos: 'top' },
  { type: 'comment', text: '  // LRT Fork 2 (Southern Branch - to New Capital)' },
  { id: 'lrt_al_roubaiki', labelPos: 'right' },
  { id: 'lrt_capital_gardens', labelPos: 'right' },
  { id: 'lrt_capital_airport', labelPos: 'right' },
  { id: 'city_of_arts', labelPos: 'right', comment: '// INTERCHANGE LRT + Monorail East' },
  { type: 'comment', text: '  // LRT Fork 1 (Northern Branch - to 10th of Ramadan / Knowledge City)' },
  { id: 'lrt_industrial_zone', labelPos: 'right' },
  { id: 'lrt_knowledge_city', labelPos: 'right' },
  { type: 'empty' },

  // ================= Monorail East =================
  { type: 'comment', text: '  // ================= Monorail East (Teal #009ca6: Stadium to Justice City) =================' },
  { type: 'comment', text: '  // stadium starts at (746, 494)' },
  { id: 'monorail_hesham_barakat', labelPos: 'bottom' },
  { id: 'monorail_nouri_khattab', labelPos: 'bottom' },
  { id: 'monorail_seventh_district', labelPos: 'bottom' },
  { id: 'monorail_zaker_hussein', labelPos: 'bottom' },
  { id: 'monorail_free_zone', labelPos: 'bottom' },
  { id: 'monorail_moshir', labelPos: 'bottom', comment: '// INTERCHANGE Monorail East + BRT' },
  { id: 'monorail_cfc', labelPos: 'bottom' },
  { id: 'monorail_choueifat', labelPos: 'bottom' },
  { id: 'monorail_air_hospital', labelPos: 'bottom' },
  { id: 'monorail_narges', labelPos: 'bottom' },
  { id: 'monorail_mohamed_naguib', labelPos: 'bottom' },
  { id: 'monorail_auc', labelPos: 'bottom' },
  { id: 'monorail_emaar', labelPos: 'bottom' },
  { id: 'monorail_fountain_sq', labelPos: 'bottom' },
  { id: 'monorail_barwa', labelPos: 'bottom' },
  { id: 'monorail_middle_ring', labelPos: 'bottom' },
  { id: 'monorail_bin_zayed', labelPos: 'right' },
  { id: 'monorail_regional_ring', labelPos: 'right' },
  { id: 'monorail_massa', labelPos: 'right' },
  { id: 'monorail_ministries', labelPos: 'top' },
  { id: 'justice_city', labelPos: 'right', comment: '// Eastern Terminus Monorail East' },
  { type: 'empty' },

  // ================= Monorail West =================
  { type: 'comment', text: '  // ================= Monorail West (Amber #D97706) =================' },
  { id: 'monorail_wadi_el_nile', labelPos: 'top', comment: '// INTERCHANGE L3 wadi_el_nile' },
  { id: 'monorail_bashtil', labelPos: 'top' },
  { id: 'monorail_ring_road_west', labelPos: 'top' },
  { id: 'monorail_marioutia', labelPos: 'top' },
  { id: 'monorail_mansouria', labelPos: 'top' },
  { id: 'monorail_alex_desert_road', labelPos: 'left' },
  { id: 'monorail_sheikh_zayed', labelPos: 'left' },
  { id: 'monorail_mall_of_egypt', labelPos: 'left' },
  { id: 'monorail_engineers_club', labelPos: 'left' },
  { id: 'monorail_october_univ', labelPos: 'left' },
  { id: 'monorail_sadat_oct', labelPos: 'left' },
  { id: 'monorail_acu', labelPos: 'left' },
  { id: 'monorail_new_october', labelPos: 'left' },
  { type: 'empty' },

  // ================= BRT Phase 1 =================
  { type: 'comment', text: '  // ================= BRT Phase 1 (Purple #8B5CF6) =================' },
  { id: 'brt_1_alex_agri', labelPos: 'top' },
  { id: 'brt_2_ahmed_abdelrahim', labelPos: 'top' },
  { id: 'brt_3_shubra_banha', labelPos: 'top' },
  { id: 'brt_4_bahteem', labelPos: 'top' },
  { id: 'brt_5_mostorod', labelPos: 'top' },
  { id: 'brt_6_khosous', labelPos: 'top' },
  { id: 'brt_7_el_marg', labelPos: 'top', comment: '// INTERCHANGE L1 el_marg' },
  { id: 'brt_8_mohamed_naguib', labelPos: 'right' },
  { id: 'brt_9_zakah', labelPos: 'right' },
  { id: 'brt_10_orabi', labelPos: 'right' },
  { id: 'brt_11_salam', labelPos: 'right' },
  { id: 'brt_12_adly_mansour', labelPos: 'top', comment: '// INTERCHANGE L3 + LRT adly_mansour' },
  { id: 'brt_13_suez_road', labelPos: 'right' },
  { id: 'brt_14_academy', labelPos: 'right' },
  { id: 'brt_15_moshir', labelPos: 'top', comment: '// INTERCHANGE Monorail East monorail_moshir' },
  { id: 'brt_16_golf', labelPos: 'bottom' }
];

/**
 * Serializes station coordinates dictionary into cleanly formatted JS ES-module code.
 * @param {Record<string, {x: number, y: number, labelPos?: string}>} coords
 * @returns {string} Formatted code snippet
 */
export function serializeMapStationCoords(coords = {}) {
  const lines = [
    '// Clean schematic coordinates for interactive SVG Cairo Metro & Multi-Modal Transit Map (1560 x 1040 viewBox)',
    '',
    'export const MAP_STATION_COORDS = {'
  ];

  const processed = new Set();

  for (const item of COORDS_SCHEMA) {
    if (item.type === 'empty') {
      lines.push('');
      continue;
    }
    if (item.type === 'comment') {
      lines.push(item.text);
      continue;
    }

    const c = coords[item.id] || { x: 0, y: 0, labelPos: item.labelPos };
    processed.add(item.id);

    const x = Math.round(Number(c.x) || 0);
    const y = Math.round(Number(c.y) || 0);
    const labelPos = c.labelPos || item.labelPos || 'right';
    const commentPart = item.comment ? ` ${item.comment}` : '';

    lines.push(`  ${item.id}: { x: ${x}, y: ${y}, labelPos: '${labelPos}' },${commentPart}`);
  }

  // Preserve any extra custom stations
  const extraKeys = Object.keys(coords).filter((k) => !processed.has(k));
  if (extraKeys.length > 0) {
    lines.push('');
    lines.push('  // ================= Additional Custom Stations =================');
    for (const key of extraKeys) {
      const c = coords[key];
      lines.push(`  ${key}: { x: ${Math.round(c.x)}, y: ${Math.round(c.y)}, labelPos: '${c.labelPos || 'right'}' },`);
    }
  }

  lines.push('};');
  lines.push('');
  return lines.join('\n');
}

/**
 * Copies serialized MAP_STATION_COORDS directly to the system clipboard.
 * Works across both modern async clipboard API and legacy document.execCommand fallback.
 * @param {Record<string, {x: number, y: number, labelPos?: string}>} coords
 * @returns {Promise<boolean>} Success status
 */
export async function copyMapCoordsToClipboard(coords) {
  const code = serializeMapStationCoords(coords);

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(code);
      return true;
    }
  } catch (err) {
    console.warn('navigator.clipboard failed, attempting textarea fallback:', err);
  }

  // Fallback for non-HTTPS or permission-restricted environments
  try {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    textarea.setAttribute('readonly', '');
    document.body.appendChild(textarea);
    textarea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    return successful;
  } catch (fallbackErr) {
    console.error('All clipboard copy attempts failed:', fallbackErr);
    return false;
  }
}
