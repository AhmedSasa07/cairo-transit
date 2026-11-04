# Greater Cairo Multi-Mode Rapid Transit Network Overview

> **Version:** 2026 Integrated Network Specification  
> **Coordinate System:** Fixed `viewBox="0 0 4000 3000"` aligned to `public/assets/cairo-transit-base.svg`  
> **Modes Covered:** Metro Lines 1, 2, 3, Capital LRT, East Nile Monorail, West Nile Monorail.

---

## 1. Line Summaries & Exact Color Codes

| Line / Network | Code | Hex Color | Terminals | Total Stops | Tech & Operations |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **Line 1 (M1)** | `M1` | `#00518e` | Helwan ⇄ New El-Marg | 35 | North-South Spine, Heavy Metro, 1.8M daily riders |
| **Line 2 (M2)** | `M2` | `#c13038` | Shubra El-Kheima ⇄ El-Mounib | 20 | Dual Nile Tunnel crossing, Heavy Metro, 1.2M daily riders |
| **Line 3 (M3)** | `M3` | `#009f87` | Adly Mansour ⇄ Rod El-Farag / Cairo Univ | 34 | Fully air-conditioned, Kit Kat branch junction |
| **Electric Train (LRT)** | `LRT` | `#9e1b33` | Adly Mansour ⇄ New Capital / 10th of Ramadan | 12 | 120 km/h Commuter rail, Badr branch junction |
| **East Nile Monorail** | `MONORAIL_E` | `#009ca6` | Stadium (M3) ⇄ City of Arts / Justice City | 22 | 56.5 km Straddle Monorail, Driverless GoA4 |
| **West Nile Monorail** | `MONORAIL_W` | `#9b2521` | Wadi El-Nile (M3) ⇄ New October | 13 | 43.8 km Straddle Monorail, Bashtil & Sheikh Zayed |
| **Interchange Hub Nodes** | `HUB` | `#ecc15f` | Strategic Transfer Points | 8 Hubs | Bi-directional multi-line connections |

---

## 2. Major Transfer Hubs (Interchange Matrix)

1. **Adly Mansour (`adly_mansour`)**
   - **Connected Lines:** `M3`, `LRT`, SuperJet Regional Bus, BRT
   - **Coordinates in Canvas:** `(2925, 1032)`
   - **Notes:** Largest intermodal mega-terminal in the Middle East.

2. **Cairo Stadium (`stadium`)**
   - **Connected Lines:** `M3`, `MONORAIL_E`
   - **Coordinates in Canvas:** `(1788, 1424)`
   - **Notes:** Gateway to Nasr City, 5th Settlement (New Cairo), and the New Capital.

3. **Al-Shohadaa / Ramses (`al_shohadaa`)**
   - **Connected Lines:** `M1`, `M2`, Egyptian National Railways (ENR Main Terminal)
   - **Coordinates in Canvas:** `(1525, 1256)`
   - **Notes:** Cairo's busiest transit hub connecting northern and southern Egypt trains.

4. **Sadat / Tahrir (`sadat`)**
   - **Connected Lines:** `M1`, `M2`
   - **Coordinates in Canvas:** `(1363, 1522)`
   - **Notes:** Heart of Downtown Cairo, Egyptian Museum, American University Downtown.

5. **Attaba (`attaba`)**
   - **Connected Lines:** `M2`, `M3`
   - **Coordinates in Canvas:** `(1575, 1396)`
   - **Notes:** Central marketplace and historic downtown commercial junction.

6. **Gamal Abdel Nasser (`nasser`)**
   - **Connected Lines:** `M1`, `M3`
   - **Coordinates in Canvas:** `(1425, 1396)`
   - **Notes:** Direct access to High Court, 26th of July Corridor, and Ramses Street.

7. **Cairo University (`cairo_university`)**
   - **Connected Lines:** `M2`, `M3` (Southern Branch)
   - **Coordinates in Canvas:** `(800, 1816)`
   - **Notes:** Major academic hub connecting Giza with Mohandessin, Zamalek, and East Cairo.

8. **Wadi El-Nile (`wadi_el_nile`)**
   - **Connected Lines:** `M3`, `MONORAIL_W`
   - **Coordinates in Canvas:** `(888, 1578)`
   - **Notes:** Mohandessin interchange connecting to 6th of October and Sheikh Zayed.

9. **City of Arts and Culture (`city_of_arts`)**
   - **Connected Lines:** `LRT`, `MONORAIL_E`
   - **Coordinates in Canvas:** `(3638, 1382)`
   - **Notes:** New Administrative Capital central intermodal transit plaza.

---

## 3. Station Sequential Route Order

### Line M1 (35 Stations)
`new_el_marg` ➔ `el_marg` ➔ `ezbet_el_nakhl` ➔ `ain_shams` ➔ `el_matareyya` ➔ `helmeyat_el_zaytoun` ➔ `hadayeq_el_zaytoun` ➔ `saray_el_qobba` ➔ `hammamat_el_qobba` ➔ `kobri_el_qobba` ➔ `manshiet_el_sadr` ➔ `el_demerdash` ➔ `ghamra` ➔ **`al_shohadaa`** ➔ `orabi` ➔ **`nasser`** ➔ **`sadat`** ➔ `saad_zaghloul` ➔ `sayyeda_zeinab` ➔ `malek_saleh` ➔ `mar_girgis` ➔ `el_zahraa` ➔ `dar_el_salam` ➔ `hadayeq_el_maadi` ➔ `maadi` ➔ `sakanat_el_maadi` ➔ `tora_el_balad` ➔ `kozzika` ➔ `tora_el_asmant` ➔ `el_maasara` ➔ `hadayeq_helwan` ➔ `wadi_hof` ➔ `helwan_university` ➔ `ain_helwan` ➔ `helwan`

### Line M2 (20 Stations)
`shubra_el_kheima` ➔ `kolleyyet_el_zeraa` ➔ `el_mazallat` ➔ `khalafawy` ➔ `st_teresa` ➔ `road_el_farag` ➔ `massara` ➔ **`al_shohadaa`** ➔ **`attaba`** ➔ `mohamed_naguib` ➔ **`sadat`** ➔ `opera` ➔ `dokki` ➔ `el_bohoth` ➔ **`cairo_university`** ➔ `faisal` ➔ `giza` ➔ `omm_el_masryeen` ➔ `saqyet_mekky` ➔ `el_mounib`

### Line M3 Trunk & Branches (34 Stations)
- **Trunk:** `adly_mansour` ➔ `el_haykestep` ➔ `omar_ibn_el_khattab` ➔ `qobaa` ➔ `hesham_barakat` ➔ `el_nozha` ➔ `el_shams_club` ➔ `alf_maskan` ➔ `heliopolis` ➔ `haroun` ➔ `al_ahram` ➔ `koleyet_el_banat` ➔ **`stadium`** ➔ `fair_zone` ➔ `abbassiya` ➔ `abdou_pasha` ➔ `el_geish` ➔ `bab_el_shaariya` ➔ **`attaba`** ➔ **`nasser`** ➔ `maspero` ➔ `safaa_hegazy` ➔ `kit_kat`
- **Northern Branch (to Rod El-Farag):** `kit_kat` ➔ `sudan` ➔ `imbaba` ➔ `el_bohy` ➔ `al_qawmeya` ➔ `ring_road` ➔ `rod_el_farag_corridor`
- **Southern Branch (to Cairo University):** `kit_kat` ➔ `el_tawfikeya` ➔ **`wadi_el_nile`** ➔ `gamaat_el_dowal` ➔ `bulaq_el_dakrour` ➔ **`cairo_university`**

### Capital Electric Train LRT (12 Stations)
- **Main Trunk:** **`adly_mansour`** ➔ `lrt_obour` ➔ `lrt_mostakbal` ➔ `lrt_shorouk` ➔ `lrt_new_heliopolis` ➔ `lrt_badr`
- **New Capital Branch:** `lrt_badr` ➔ `lrt_capital_gardens` ➔ `lrt_capital_airport` ➔ **`city_of_arts`**
- **10th of Ramadan Branch:** `lrt_badr` ➔ `lrt_al_roubaiki` ➔ `lrt_industrial_zone` ➔ `lrt_10th_of_ramadan`

### East Nile Monorail (22 Stations)
**`stadium`** ➔ `monorail_hesham_barakat` ➔ `monorail_nouri_khattab` ➔ `monorail_seventh_district` ➔ `monorail_zaker_hussein` ➔ `monorail_free_zone` ➔ `monorail_moshir` ➔ `monorail_cfc` ➔ `monorail_choueifat` ➔ `monorail_air_hospital` ➔ `monorail_narges` ➔ `monorail_mohamed_naguib` ➔ `monorail_auc` ➔ `monorail_emaar` ➔ `monorail_fountain_sq` ➔ `monorail_barwa` ➔ `monorail_middle_ring` ➔ `monorail_bin_zayed` ➔ `monorail_regional_ring` ➔ `monorail_massa` ➔ `monorail_ministries` ➔ **`city_of_arts`**

### West Nile Monorail (13 Stations)
**`monorail_wadi_el_nile`** ➔ `monorail_bashtil` ➔ `monorail_ring_road_west` ➔ `monorail_marioutia` ➔ `monorail_mansouria` ➔ `monorail_alex_desert_road` ➔ `monorail_sheikh_zayed` ➔ `monorail_mall_of_egypt` ➔ `monorail_engineers_club` ➔ `monorail_october_univ` ➔ `monorail_sadat_oct` ➔ `monorail_acu` ➔ `monorail_new_october`
