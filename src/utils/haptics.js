import { safeHaptics } from './native.js';

/**
 * Ischys Causal Haptic Engine (Apple HIG §13)
 * Asynchronous, un-awaited, fire-and-forget haptic triggers.
 * Delegated to safe native bridge helper with automatic web fallback.
 */
export const haptics = {
  commit: () => safeHaptics.commit(),
  impact: (style = 'LIGHT') => safeHaptics.impact(style),
  light: () => safeHaptics.light(),
  medium: () => safeHaptics.medium(),
  heavy: () => safeHaptics.heavy(),
  select: () => safeHaptics.selection(),
  selection: () => safeHaptics.selection(),
  success: () => safeHaptics.success(),
  warning: () => safeHaptics.warning(),
  error: () => safeHaptics.error()
};
