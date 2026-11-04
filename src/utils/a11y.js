// Universal Accessibility (A11y) System for Cairo Metro Guide
// Designed for Blind, Deaf, Colorblind, Seniors, and Mobility-impaired commuters

export const DEFAULT_A11Y_SETTINGS = {
  fontSize: 'normal', // 'normal', 'large', 'xlarge'
  seniorMode: false,
  colorBlindMode: false,
  voiceEnabled: true,
  hapticEnabled: true,
  wheelchairOnly: false
};

// Get stored a11y settings
export function getA11ySettings() {
  try {
    const saved = localStorage.getItem('egymetro_a11y');
    return saved ? { ...DEFAULT_A11Y_SETTINGS, ...JSON.parse(saved) } : DEFAULT_A11Y_SETTINGS;
  } catch {
    return DEFAULT_A11Y_SETTINGS;
  }
}

// Save a11y settings
export function saveA11ySettings(settings) {
  try {
    localStorage.setItem('egymetro_a11y', JSON.stringify(settings));
    applyA11yToDocument(settings);
  } catch (err) {
    console.error('Failed to save a11y settings:', err);
  }
}

// Apply font scaling and classes to root HTML element
export function applyA11yToDocument(settings) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  // Font size scale
  if (settings.fontSize === 'xlarge') {
    root.style.fontSize = '18px';
  } else if (settings.fontSize === 'large') {
    root.style.fontSize = '16px';
  } else {
    root.style.fontSize = '14px';
  }

  // Senior mode class
  if (settings.seniorMode) {
    root.classList.add('a11y-senior-mode');
  } else {
    root.classList.remove('a11y-senior-mode');
  }

  // Colorblind mode class
  if (settings.colorBlindMode) {
    root.classList.add('a11y-colorblind-mode');
  } else {
    root.classList.remove('a11y-colorblind-mode');
  }
}

// Text-to-Speech (TTS) Voice Assistant for Blind and Low-Vision Commuters
export function speakText(text, lang = 'ar') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  try {
    window.speechSynthesis.cancel(); // Stop any pending audio

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'ar' ? 'ar-EG' : 'en-US';
    utterance.rate = 0.95; // Slightly slower for maximum elderly and assistive comprehension
    utterance.pitch = 1.0;

    // Search for best matching regional voice
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const match = voices.find(v => lang === 'ar' ? v.lang.startsWith('ar') : v.lang.startsWith('en'));
      if (match) utterance.voice = match;
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('SpeechSynthesis error:', err);
  }
}

export function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// Haptic Vibration for Deaf and Hard of Hearing Commuters
export function triggerHaptic(pattern = [100, 60, 100]) {
  if (typeof window === 'undefined' || !('vibrate' in navigator)) return;
  try {
    navigator.vibrate(pattern);
  } catch {
    // Unsupported or blocked by browser policy
  }
}

// High-Contrast Distinct Badges for Colorblind Users (Never relying on color alone!)
export const LINE_A11Y_BADGES = {
  line1: {
    number: '1',
    symbol: '①',
    shape: 'square',
    badgeTextEn: 'Line 1 [1]',
    badgeTextAr: 'الخط 1 [①]',
    shapeIcon: '■',
    highContrastBorder: 'border-blue-600 dark:border-blue-400'
  },
  line2: {
    number: '2',
    symbol: '②',
    shape: 'circle',
    badgeTextEn: 'Line 2 [2]',
    badgeTextAr: 'الخط 2 [②]',
    shapeIcon: '●',
    highContrastBorder: 'border-red-600 dark:border-red-400'
  },
  line3: {
    number: '3',
    symbol: '③',
    shape: 'triangle',
    badgeTextEn: 'Line 3 [3]',
    badgeTextAr: 'الخط 3 [③]',
    shapeIcon: '▲',
    highContrastBorder: 'border-emerald-600 dark:border-emerald-400'
  },
  monorail_east: {
    number: 'ME',
    symbol: 'Ⓜ',
    shape: 'diamond',
    badgeTextEn: 'East Monorail [ME]',
    badgeTextAr: 'مونوريل شرق [Ⓜ]',
    shapeIcon: '◆',
    highContrastBorder: 'border-orange-600 dark:border-orange-400'
  },
  monorail_west: {
    number: 'MW',
    symbol: 'Ⓜ',
    shape: 'diamond',
    badgeTextEn: 'West Monorail [MW]',
    badgeTextAr: 'مونوريل غرب [Ⓜ]',
    shapeIcon: '◆',
    highContrastBorder: 'border-amber-600 dark:border-amber-400'
  },
  lrt: {
    number: 'L',
    symbol: '🚄',
    shape: 'hexagon',
    badgeTextEn: 'LRT Train [L]',
    badgeTextAr: 'القطار الخفيف LRT',
    shapeIcon: '⬡',
    highContrastBorder: 'border-cyan-600 dark:border-cyan-400'
  },
  brt: {
    number: 'B',
    symbol: '🚌',
    shape: 'rounded-square',
    badgeTextEn: 'BRT Bus [B]',
    badgeTextAr: 'الترددي BRT',
    shapeIcon: '⬢',
    highContrastBorder: 'border-amber-600 dark:border-amber-400'
  }
};

// Check if a station is wheelchair / elevator accessible
export function isStationAccessible(station) {
  if (!station) return false;

  // All Line 3, Monorail, and LRT stations are modern & equipped with elevators, ramps and tactile paving
  if (station.lines.some(l => ['line3', 'monorail_east', 'monorail_west', 'lrt'].includes(l))) {
    return true;
  }

  // Major modern interchange hubs
  if (['al_shohadaa', 'sadat', 'attaba', 'nasser', 'cairo_university', 'adly_mansour', 'kit_kat'].includes(station.id)) {
    return true;
  }

  if (station.facilities && Array.isArray(station.facilities)) {
    const facilitiesLower = station.facilities.map(f => String(f).toLowerCase());
    return facilitiesLower.some(f =>
      f.includes('elevator') ||
      f.includes('disabled') ||
      f.includes('escalator') ||
      f.includes('accessible')
    );
  }

  return false;
}
