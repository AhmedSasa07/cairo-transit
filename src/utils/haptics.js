import { Capacitor } from '@capacitor/core';

let capHaptics = null;
if (Capacitor.isNativePlatform()) {
  import('@capacitor/haptics').then((mod) => {
    capHaptics = mod.Haptics;
  }).catch(() => {});
}

/**
 * Ischys Causal Haptic Engine (Apple HIG §13)
 * Asynchronous, un-awaited, fire-and-forget haptic triggers.
 */
export const haptics = {
  /** Commit: Action confirmed (ticking station, booking route, completing set) */
  commit: () => {
    try {
      if (capHaptics) {
        capHaptics.impact({ style: 'MEDIUM' }).catch(() => {});
      } else if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(18);
      }
    } catch (_) {}
  },

  /** Impact: Discrete physical tactile tap (LIGHT, MEDIUM, HEAVY) */
  impact: (style = 'LIGHT') => {
    try {
      const normalizedStyle = typeof style === 'string' ? style.toUpperCase() : 'LIGHT';
      if (capHaptics) {
        capHaptics.impact({
          style: normalizedStyle === 'HEAVY' ? 'HEAVY' : normalizedStyle === 'MEDIUM' ? 'MEDIUM' : 'LIGHT'
        }).catch(() => {});
      } else if (typeof navigator !== 'undefined' && navigator.vibrate) {
        const ms = normalizedStyle === 'HEAVY' ? 22 : normalizedStyle === 'MEDIUM' ? 14 : 8;
        navigator.vibrate(ms);
      }
    } catch (_) {}
  },

  /** Light: Crossing drag threshold, pill toggle, tab switch, sheet flick */
  light: () => {
    try {
      if (capHaptics) {
        capHaptics.impact({ style: 'LIGHT' }).catch(() => {});
      } else if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(8);
      }
    } catch (_) {}
  },

  /** Select / Selection: Wheel scrubber, slider tick, discrete step */
  select: () => {
    try {
      if (capHaptics) {
        capHaptics.selectionChanged().catch(() => {});
      } else if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(5);
      }
    } catch (_) {}
  },
  selection: () => {
    try {
      if (capHaptics) {
        capHaptics.selectionChanged().catch(() => {});
      } else if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(5);
      }
    } catch (_) {}
  },

  /** Success: Trip completed, optimal route calculated, saved successfully */
  success: () => {
    try {
      if (capHaptics) {
        capHaptics.notification({ type: 'SUCCESS' }).catch(() => {});
      } else if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([20, 50, 30]);
      }
    } catch (_) {}
  },

  /** Warning: Route reset, deload, caution notice */
  warning: () => {
    try {
      if (capHaptics) {
        capHaptics.notification({ type: 'WARNING' }).catch(() => {});
      } else if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([35, 45, 35]);
      }
    } catch (_) {}
  },

  /** Error: Destination same as origin, closed station */
  error: () => {
    try {
      if (capHaptics) {
        capHaptics.notification({ type: 'ERROR' }).catch(() => {});
      } else if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([30, 40, 30, 40, 30]);
      }
    } catch (_) {}
  },
};
