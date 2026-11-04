import {
  STATIONS,
  NETWORK_EDGES,
  METRO_LINES,
  TICKET_TIERS,
  MONORAIL_TIERS,
  LRT_TIERS,
  BRT_TIERS
} from '../data/metroData.js';
import { getDistanceKm } from './geo.js';

export const stationMap = new Map();
STATIONS.forEach(st => stationMap.set(st.id, st));

// Build graph helper based on mode inclusion
export function buildGraph(includeOtherModes = true) {
  const graph = new Map();
  STATIONS.forEach(st => graph.set(st.id, []));

  NETWORK_EDGES.forEach(([u, v, line, minutes]) => {
    const lineMode = METRO_LINES[line]?.mode || 'metro';
    if (!includeOtherModes && lineMode !== 'metro') {
      return;
    }
    const stU = stationMap.get(u);
    const stV = stationMap.get(v);
    // Exclude any station marked as underConstruction from active routing unless simulation is allowed
    if ((stU?.underConstruction && !stU?.allowSimulation) || (stV?.underConstruction && !stV?.allowSimulation)) {
      return;
    }
    if (graph.has(u) && graph.has(v)) {
      graph.get(u).push({ to: v, line, minutes, mode: lineMode });
      graph.get(v).push({ to: u, line, minutes, mode: lineMode });
    }
  });

  return graph;
}

// Line terminal sequences to accurately identify train directions
const LINE_SEQUENCES = {
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
  monorail_east: [
    'stadium',
    'monorail_hesham_barakat',
    'monorail_nouri_khattab',
    'monorail_seventh_district',
    'monorail_zaker_hussein',
    'monorail_free_zone',
    'monorail_moshir',
    'monorail_cfc',
    'monorail_choueifat',
    'monorail_air_hospital',
    'monorail_narges',
    'monorail_mohamed_naguib',
    'monorail_auc',
    'monorail_emaar',
    'monorail_fountain_sq',
    'monorail_barwa',
    'monorail_middle_ring',
    'monorail_bin_zayed',
    'monorail_regional_ring',
    'monorail_massa',
    'monorail_ministries',
    'city_of_arts'
  ],
  monorail_west: [
    'monorail_wadi_el_nile',
    'monorail_bashtil',
    'monorail_ring_road_west',
    'monorail_marioutia',
    'monorail_mansouria',
    'monorail_alex_desert_road',
    'monorail_sheikh_zayed',
    'monorail_mall_of_egypt',
    'monorail_engineers_club',
    'monorail_october_univ',
    'monorail_sadat_oct',
    'monorail_acu',
    'monorail_new_october'
  ],
  lrt: [
    'adly_mansour', 'lrt_obour', 'lrt_mostakbal', 'lrt_shorouk', 'lrt_badr', 'lrt_capital_gardens', 'city_of_arts'
  ]
};

// Calculate direction for a given line and two consecutive station IDs (optionally aware of route destination)
export function getLineDirection(line, fromId, toId, targetStationId = null) {
  if (line === 'line1') {
    const seq = LINE_SEQUENCES.line1;
    const idxFrom = seq.indexOf(fromId);
    const idxTo = seq.indexOf(toId);
    if (idxFrom !== -1 && idxTo !== -1) {
      return idxTo > idxFrom
        ? { stationId: 'helwan', nameEn: 'Helwan', nameAr: 'حلوان' }
        : { stationId: 'new_el_marg', nameEn: 'New El-Marg', nameAr: 'المرج الجديدة' };
    }
    return { stationId: 'helwan', nameEn: 'Helwan', nameAr: 'حلوان' };
  }

  if (line === 'line2') {
    const seq = LINE_SEQUENCES.line2;
    const idxFrom = seq.indexOf(fromId);
    const idxTo = seq.indexOf(toId);
    if (idxFrom !== -1 && idxTo !== -1) {
      return idxTo > idxFrom
        ? { stationId: 'el_mounib', nameEn: 'El-Mounib', nameAr: 'المنيب' }
        : { stationId: 'shubra_el_kheima', nameEn: 'Shubra El-Kheima', nameAr: 'شبرا الخيمة' };
    }
    return { stationId: 'el_mounib', nameEn: 'El-Mounib', nameAr: 'المنيب' };
  }

  if (line === 'line3') {
    const trunk = LINE_SEQUENCES.line3_trunk;
    const rodBranch = LINE_SEQUENCES.line3_branch_rod;
    const cuBranch = LINE_SEQUENCES.line3_branch_cairo_univ;

    const idxTrunkFrom = trunk.indexOf(fromId);
    const idxTrunkTo = trunk.indexOf(toId);
    const idxRodFrom = rodBranch.indexOf(fromId);
    const idxRodTo = rodBranch.indexOf(toId);
    const idxCuFrom = cuBranch.indexOf(fromId);
    const idxCuTo = cuBranch.indexOf(toId);

    // Case 1: Moving on Rod branch away from Kit Kat towards terminus
    if (idxRodTo > idxRodFrom && idxRodTo !== -1) {
      return { stationId: 'rod_el_farag_corridor', nameEn: 'Rod El-Farag Corridor', nameAr: 'محور روض الفرج' };
    }

    // Case 2: Moving on Cairo Univ branch away from Kit Kat towards terminus
    if (idxCuTo > idxCuFrom && idxCuTo !== -1) {
      return { stationId: 'cairo_university', nameEn: 'Cairo University', nameAr: 'جامعة القاهرة' };
    }

    // Case 3: Moving on branches backwards towards Kit Kat / Adly Mansour
    if ((idxRodFrom > 0 && idxRodTo < idxRodFrom) || (idxCuFrom > 0 && idxCuTo < idxCuFrom)) {
      return { stationId: 'adly_mansour', nameEn: 'Adly Mansour', nameAr: 'عدلي منصور' };
    }

    // Case 4: Moving East on trunk towards Adly Mansour
    if (idxTrunkFrom !== -1 && idxTrunkTo !== -1 && idxTrunkTo < idxTrunkFrom) {
      return { stationId: 'adly_mansour', nameEn: 'Adly Mansour', nameAr: 'عدلي منصور' };
    }

    // Case 5: Moving West on trunk towards Kit Kat & Branches
    if (idxTrunkFrom !== -1 && idxTrunkTo !== -1 && idxTrunkTo > idxTrunkFrom) {
      if (targetStationId && rodBranch.includes(targetStationId)) {
        return { stationId: 'rod_el_farag_corridor', nameEn: 'Rod El-Farag Corridor', nameAr: 'محور روض الفرج' };
      }
      if (targetStationId && cuBranch.includes(targetStationId)) {
        return { stationId: 'cairo_university', nameEn: 'Cairo University', nameAr: 'جامعة القاهرة' };
      }
      return { stationId: 'kit_kat', nameEn: 'Kit Kat / Branches', nameAr: 'الكيت كات / التفريعات' };
    }

    // Fallback if destination matches a branch
    if (targetStationId && rodBranch.includes(targetStationId)) {
      return { stationId: 'rod_el_farag_corridor', nameEn: 'Rod El-Farag Corridor', nameAr: 'محور روض الفرج' };
    }
    if (targetStationId && cuBranch.includes(targetStationId)) {
      return { stationId: 'cairo_university', nameEn: 'Cairo University', nameAr: 'جامعة القاهرة' };
    }

    return { stationId: 'adly_mansour', nameEn: 'Adly Mansour', nameAr: 'عدلي منصور' };
  }

  if (line === 'monorail_east') {
    const seq = LINE_SEQUENCES.monorail_east;
    const i1 = seq.indexOf(fromId);
    const i2 = seq.indexOf(toId);
    return i2 > i1
      ? { stationId: 'city_of_arts', nameEn: 'City of Arts & Culture (New Capital)', nameAr: 'مدينة الفنون والثقافة (العاصمة الإدارية)' }
      : { stationId: 'stadium', nameEn: 'Stadium (Line 3)', nameAr: 'الاستاد (الخط الثالث)' };
  }

  if (line === 'monorail_west') {
    const seq = LINE_SEQUENCES.monorail_west;
    const i1 = seq.indexOf(fromId);
    const i2 = seq.indexOf(toId);
    return i2 > i1
      ? { stationId: 'monorail_new_october', nameEn: 'New October', nameAr: 'أكتوبر الجديدة' }
      : { stationId: 'monorail_wadi_el_nile', nameEn: 'Wadi El-Nile (Mohandessin - Line 3)', nameAr: 'وادي النيل (المهندسين - الخط الثالث)' };
  }

  if (line === 'lrt') {
    const seq = LINE_SEQUENCES.lrt;
    const i1 = seq.indexOf(fromId);
    const i2 = seq.indexOf(toId);
    return i2 > i1
      ? { stationId: 'city_of_arts', nameEn: 'New Administrative Capital', nameAr: 'العاصمة الإدارية الجديدة' }
      : { stationId: 'adly_mansour', nameEn: 'Adly Mansour', nameAr: 'عدلي منصور' };
  }

  if (line === 'brt') {
    const toSt = stationMap.get(toId);
    return {
      stationId: toId || 'brt',
      nameEn: toSt?.nameEn ? `${toSt.nameEn} (Ring Road)` : 'Ring Road BRT',
      nameAr: toSt?.nameAr ? `${toSt.nameAr} (الدائري)` : 'الطريق الدائري (الأتوبيس الترددي)'
    };
  }

  // Safe Universal Fallback (Never returns undefined or empty)
  const toSt = stationMap.get(toId);
  return {
    stationId: toId || '',
    nameEn: toSt?.nameEn || 'Direction',
    nameAr: toSt?.nameAr || 'المحطة الأخيرة'
  };
}

// Calculate Metro ticket price strictly by number of stations traversed
export function calculateTicketPrice(stationCount) {
  const count = Math.max(1, stationCount);
  const tier = TICKET_TIERS.find(t => count >= t.minStations && count <= t.maxStations) || TICKET_TIERS[TICKET_TIERS.length - 1];
  return tier;
}

// Multi-modal Fare Calculator (handles Metro + Monorail + LRT + BRT in combined journeys)
export function calculateCombinedFare(legs) {
  let metroHops = 0;
  let monorailHops = 0;
  let lrtHops = 0;
  let brtHops = 0;

  legs.forEach(leg => {
    const mode = leg.lineInfo.mode || 'metro';
    const hops = Math.max(1, leg.stations.length - 1);
    if (mode === 'metro') metroHops += hops;
    else if (mode === 'monorail') monorailHops += hops;
    else if (mode === 'lrt') lrtHops += hops;
    else if (mode === 'brt') brtHops += hops;
  });

  const metroTier = metroHops > 0 ? calculateTicketPrice(metroHops) : null;

  let monorailPrice = 0;
  if (monorailHops > 0) {
    const tier = MONORAIL_TIERS.find(t => monorailHops >= t.minStations && monorailHops <= t.maxStations) || MONORAIL_TIERS[MONORAIL_TIERS.length - 1];
    monorailPrice = tier.price;
  }

  let lrtPrice = 0;
  if (lrtHops > 0) {
    const tier = LRT_TIERS.find(t => lrtHops >= t.minStations && lrtHops <= t.maxStations) || LRT_TIERS[LRT_TIERS.length - 1];
    lrtPrice = tier.price;
  }

  let brtPrice = 0;
  if (brtHops > 0) {
    const tier = BRT_TIERS.find(t => brtHops >= t.minStations && brtHops <= t.maxStations) || BRT_TIERS[BRT_TIERS.length - 1];
    brtPrice = tier.price;
  }

  const totalCost = (metroTier ? metroTier.price : 0) + monorailPrice + lrtPrice + brtPrice;

  return {
    totalCost,
    metroTier,
    metroHops,
    monorailPrice,
    monorailHops,
    lrtPrice,
    lrtHops,
    brtPrice,
    brtHops,
    isMultiModal: (monorailHops > 0 || lrtHops > 0 || brtHops > 0) && metroHops > 0
  };
}

// Core Dijkstra Search function parameterized by criteria
// criteria: 'cheapest' (station count prioritized), 'fewest_transfers', 'fastest'
function searchDijkstra(originId, destinationId, graph, criteria = 'cheapest') {
  const distances = new Map();
  const pq = [];

  const startKey = `${originId}_null`;
  distances.set(startKey, 0);

  pq.push({
    stationId: originId,
    currentLine: null,
    cost: 0,
    time: 0,
    hops: 0,
    transfers: 0,
    path: [{ stationId: originId, line: null, time: 0 }]
  });

  let bestResult = null;

  while (pq.length > 0) {
    pq.sort((a, b) => a.cost - b.cost);
    const current = pq.shift();

    const currentKey = `${current.stationId}_${current.currentLine}`;
    if (distances.get(currentKey) < current.cost) continue;

    if (current.stationId === destinationId) {
      bestResult = current;
      break;
    }

    const neighbors = graph.get(current.stationId) || [];

    for (const edge of neighbors) {
      const isTransfer = current.currentLine !== null && current.currentLine !== edge.line;
      const prevMode = current.currentLine ? (METRO_LINES[current.currentLine]?.mode || 'metro') : null;
      const nextMode = edge.mode || METRO_LINES[edge.line]?.mode || 'metro';
      const isInterModal = isTransfer && (prevMode !== nextMode);

      const stCurr = stationMap.get(current.stationId);
      const stNext = stationMap.get(edge.to);
      const edgeDistKm = (stCurr?.lat && stCurr?.lng && stNext?.lat && stNext?.lng)
        ? getDistanceKm(stCurr.lat, stCurr.lng, stNext.lat, stNext.lng)
        : 1.2;

      let addedCost = 0;
      let addedTime = edge.minutes;
      let newTransfers = current.transfers;

      if (isTransfer) {
        newTransfers += 1;
        // Inter-modal transfer requires exiting fare gates, buying a separate ticket, and terminal transit
        addedTime += isInterModal ? 12.0 : 4.0;
      }

      if (criteria === 'cheapest') {
        // Minimum stations & direct geodesic path, with heavy penalty for inter-modal ticket transfers
        const transferCost = isInterModal ? 15.0 : (isTransfer ? 1.5 : 0);
        // Priority for continuous operational heavy rail (Metro/LRT) over unbuilt or bus transit
        const modePriorityCost = (nextMode === 'metro' || nextMode === 'lrt') ? 0 : 2.0;
        addedCost = 1 + (0.15 * edgeDistKm) + transferCost + modePriorityCost;
      } else if (criteria === 'fewest_transfers') {
        // Heavily penalize transfers (especially across different transit networks)
        const transferCost = isInterModal ? 80.0 : (isTransfer ? 30.0 : 0);
        addedCost = transferCost + (0.15 * edgeDistKm) + edge.minutes;
      } else {
        // 'fastest': travel time + realistic 12 min inter-modal / 4 min metro transfer buffer + distance factor
        const transferCost = isInterModal ? 12.0 : (isTransfer ? 4.0 : 0);
        addedCost = edge.minutes + transferCost + (0.05 * edgeDistKm);
      }

      const nextCost = current.cost + addedCost;
      const nextTime = current.time + addedTime;
      const nextKey = `${edge.to}_${edge.line}`;

      if (!distances.has(nextKey) || nextCost < distances.get(nextKey)) {
        distances.set(nextKey, nextCost);
        pq.push({
          stationId: edge.to,
          currentLine: edge.line,
          cost: nextCost,
          time: nextTime,
          hops: current.hops + 1,
          transfers: newTransfers,
          path: [...current.path, { stationId: edge.to, line: edge.line, time: addedTime }]
        });
      }
    }
  }

  if (!bestResult) return null;

  return processPath(bestResult, originId, destinationId, criteria);
}

// Convert raw path into structured route object
function processPath(result, originId, destinationId, type) {
  const path = result.path;
  const stationsList = path.map(p => stationMap.get(p.stationId)).filter(Boolean);
  const stationCount = path.length - 1; // Exact hops passed (no double counting!)

  let totalKm = 0;
  const legs = [];
  let currentLeg = null;
  let currentLegKm = 0;

  for (let i = 1; i < path.length; i++) {
    const prevPoint = path[i - 1];
    const currPoint = path[i];
    const lineId = currPoint.line;

    const prevSt = stationMap.get(prevPoint.stationId);
    const currSt = stationMap.get(currPoint.stationId);
    const hopKm = (prevSt?.lat && prevSt?.lng && currSt?.lat && currSt?.lng)
      ? getDistanceKm(prevSt.lat, prevSt.lng, currSt.lat, currSt.lng)
      : 1.2;

    totalKm += hopKm;

    if (!currentLeg || currentLeg.lineId !== lineId) {
      if (currentLeg) {
        currentLeg.distanceKm = Number(currentLegKm.toFixed(1));
        legs.push(currentLeg);
      }

      currentLegKm = hopKm;
      const direction = getLineDirection(lineId, prevPoint.stationId, currPoint.stationId, destinationId);
      const lineInfo = METRO_LINES[lineId] || { nameEn: lineId, nameAr: lineId, color: '#2563EB', shortNameEn: lineId, shortNameAr: lineId };
      currentLeg = {
        lineId,
        lineInfo,
        fromStation: prevSt,
        toStation: currSt,
        direction,
        directionAr: direction.nameAr,
        directionEn: direction.nameEn,
        lineNameAr: lineInfo.nameAr || lineInfo.shortNameAr || '',
        lineNameEn: lineInfo.nameEn || lineInfo.shortNameEn || '',
        stations: [prevSt, currSt],
        durationMins: currPoint.time
      };
    } else {
      currentLegKm += hopKm;
      currentLeg.stations.push(currSt);
      currentLeg.toStation = currSt;
      currentLeg.durationMins += currPoint.time;
    }
  }

  if (currentLeg) {
    currentLeg.distanceKm = Number(currentLegKm.toFixed(1));
    legs.push(currentLeg);
  }

  // Refine leg direction, stationCount, and distanceKm
  legs.forEach(leg => {
    leg.stationCount = Math.max(1, leg.stations.length - 1);
    const firstStId = leg.stations[0]?.id;
    const lastStId = leg.stations[leg.stations.length - 1]?.id;
    const refinedDir = getLineDirection(leg.lineId, firstStId, lastStId, destinationId);
    if (refinedDir && refinedDir.nameAr) {
      leg.direction = refinedDir;
      leg.directionAr = refinedDir.nameAr;
      leg.directionEn = refinedDir.nameEn;
    }
  });

  // Station counts per line breakdown (e.g. 8 on Line 3 + 6 on Line 2)
  const lineBreakdown = legs.map(l => ({
    lineId: l.lineId,
    lineInfo: l.lineInfo,
    stationCount: l.stationCount,
    distanceKm: l.distanceKm
  }));

  // Detect Kit Kat branch transition for advisory banner
  let kitKatAlert = null;
  legs.forEach(leg => {
    if (leg.lineId === 'line3') {
      const hasRod = leg.stations.some(s => s.branch === '3A');
      const hasCU = leg.stations.some(s => s.branch === '3B');
      const hasKitKat = leg.stations.some(s => s.id === 'kit_kat');

      if (hasKitKat && hasRod) {
        kitKatAlert = {
          branch: '3A',
          branchNameEn: 'Rod El-Farag Corridor Branch',
          branchNameAr: 'تفريعة محور روض الفرج',
          textEn: 'Important at Kit Kat: Make sure to board the train heading to [Rod El-Farag Corridor] (Northern Branch).',
          textAr: 'تنبيه مهم في محطة الكيت كات: تأكد من ركوب القطار المتجه إلى [محور روض الفرج] (التفريعة الشمالية).'
        };
      } else if (hasKitKat && hasCU) {
        kitKatAlert = {
          branch: '3B',
          branchNameEn: 'Cairo University Branch',
          branchNameAr: 'تفريعة جامعة القاهرة',
          textEn: 'Important at Kit Kat: Make sure to board the train heading to [Cairo University] (Southern Branch).',
          textAr: 'تنبيه مهم في محطة الكيت كات: تأكد من ركوب القطار المتجه إلى [جامعة القاهرة] (التفريعة الجنوبية).'
        };
      }
    }
  });

  const transfersCount = Math.max(0, legs.length - 1);
  const totalTravelTimeMins = Math.round(result.time);
  const fareDetails = calculateCombinedFare(legs);

  return {
    type, // 'cheapest', 'fewest_transfers', 'fastest'
    origin: stationMap.get(originId),
    destination: stationMap.get(destinationId),
    stationCount,
    distanceKm: Number(totalKm.toFixed(1)),
    travelTimeMins: totalTravelTimeMins,
    transfersCount,
    legs,
    stationsList,
    lineBreakdown,
    ticketTier: fareDetails.metroTier || calculateTicketPrice(stationCount),
    fareDetails,
    kitKatAlert
  };
}

// Find multiple alternative routes between origin and destination
export function findMultipleRoutes(originId, destinationId, options = {}) {
  const normalizedOptions = typeof options === 'string' ? { transitMode: options } : options;
  const { includeOtherModes = false, transitMode = 'metro' } = normalizedOptions;
  const isMixedRequested = transitMode === 'mixed' || transitMode === 'all' || includeOtherModes === true;

  if (!originId || !destinationId) return [];
  if (originId === destinationId) {
    const st = stationMap.get(originId);
    return [{
      type: 'cheapest',
      origin: st,
      destination: st,
      stationCount: 0,
      distanceKm: 0,
      travelTimeMins: 0,
      transfersCount: 0,
      legs: [],
      stationsList: [st],
      lineBreakdown: [],
      ticketTier: calculateTicketPrice(1),
      fareDetails: calculateCombinedFare([])
    }];
  }

  const metroGraph = buildGraph(false);
  const multiModalGraph = buildGraph(true);

  let rawCandidates = [];
  let isAutoSwitched = false;

  if (!isMixedRequested) {
    // Pure Metro Only mode
    const rCheapest = searchDijkstra(originId, destinationId, metroGraph, 'cheapest');
    const rFewestTransfers = searchDijkstra(originId, destinationId, metroGraph, 'fewest_transfers');
    const rFastest = searchDijkstra(originId, destinationId, metroGraph, 'fastest');
    rawCandidates = [rCheapest, rFewestTransfers, rFastest].filter(Boolean);

    // If stations are not reachable on pure metro (e.g. user selected a station only on Monorail or LRT), fallback to multi-modal
    if (rawCandidates.length === 0) {
      const altCheapest = searchDijkstra(originId, destinationId, multiModalGraph, 'cheapest');
      const altTransfers = searchDijkstra(originId, destinationId, multiModalGraph, 'fewest_transfers');
      const altFastest = searchDijkstra(originId, destinationId, multiModalGraph, 'fastest');
      rawCandidates = [altCheapest, altTransfers, altFastest].filter(Boolean);
      isAutoSwitched = true;
    }
  } else {
    // Mixed Modes (Metro + Monorail + LRT + BRT)
    const rCheapest = searchDijkstra(originId, destinationId, multiModalGraph, 'cheapest');
    const rFewestTransfers = searchDijkstra(originId, destinationId, multiModalGraph, 'fewest_transfers');
    const rFastest = searchDijkstra(originId, destinationId, multiModalGraph, 'fastest');
    rawCandidates = [rCheapest, rFewestTransfers, rFastest].filter(Boolean);

    // Also include pure metro alternative if reachable
    const metroPure = searchDijkstra(originId, destinationId, metroGraph, 'cheapest');
    if (metroPure) {
      metroPure.isPureMetro = true;
      rawCandidates.push(metroPure);
    }
  }

  const candidates = rawCandidates.filter(Boolean);

  // De-duplicate routes that have the identical station path
  const uniqueRoutes = [];
  const seenPaths = new Set();

  candidates.forEach(r => {
    const pathKey = r.stationsList.map(s => s.id).join('->');
    if (!seenPaths.has(pathKey)) {
      seenPaths.add(pathKey);
      uniqueRoutes.push(r);
    }
  });

  // Assign user-facing labels
  return uniqueRoutes.map((route, idx) => {
    route.autoSwitched = isAutoSwitched;
    const isPureMetro = route.legs.every(l => (l.lineInfo?.mode || 'metro') === 'metro');

    if (idx === 0) {
      route.labelEn = isPureMetro ? 'Shortest Metro Route' : 'Fastest Route';
      route.labelAr = isPureMetro ? 'أقصر وأرخص مسار بالمترو' : 'أسرع مسار';
      route.badge = 'best_fare';
    } else if (isPureMetro && !uniqueRoutes[0].legs.every(l => (l.lineInfo?.mode || 'metro') === 'metro')) {
      route.labelEn = 'Pure Metro (Standard Fare)';
      route.labelAr = 'مترو فقط (تذكرة موحدة)';
      route.badge = 'metro_only';
    } else if (route.transfersCount < uniqueRoutes[0].transfersCount) {
      route.labelEn = 'Fewest Transfers';
      route.labelAr = 'أقل تحويلات';
      route.badge = 'least_transfers';
    } else {
      route.labelEn = `Route Option ${idx + 1}`;
      route.labelAr = `خيار مسار ${idx + 1}`;
      route.badge = 'alt';
    }
    return route;
  });
}

// Helper for backwards compatibility
export function findRoute(originId, destinationId, options = {}) {
  const routes = findMultipleRoutes(originId, destinationId, options);
  return routes[0] || null;
}
