import { Capacitor } from '@capacitor/core';

/**
 * Native Bridge & Graceful Degradation Utilities
 * Ensures Capacitor native plugins (Haptics, Share, Filesystem) execute safely
 * with feature detection, try/catch isolation, and browser fallbacks.
 */

// Safe platform check
export const isNativePlatform = () => {
  try {
    return typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform();
  } catch {
    return false;
  }
};

export const getPlatform = () => {
  try {
    return typeof Capacitor !== 'undefined' ? Capacitor.getPlatform() : 'web';
  } catch {
    return 'web';
  }
};

// Lazy loaded plugin references for zero crash overhead
let hapticsModule = null;
let shareModule = null;
let filesystemModule = null;

const getHaptics = async () => {
  if (hapticsModule) return hapticsModule;
  try {
    if (isNativePlatform()) {
      const mod = await import('@capacitor/haptics');
      hapticsModule = mod.Haptics;
      return hapticsModule;
    }
  } catch (err) {
    console.warn('[Native] Haptics unavailable:', err);
  }
  return null;
};

const getShare = async () => {
  if (shareModule) return shareModule;
  try {
    if (isNativePlatform()) {
      const mod = await import('@capacitor/share');
      shareModule = mod.Share;
      return shareModule;
    }
  } catch (err) {
    console.warn('[Native] Share unavailable:', err);
  }
  return null;
};

const getFilesystem = async () => {
  if (filesystemModule) return filesystemModule;
  try {
    if (isNativePlatform()) {
      const mod = await import('@capacitor/filesystem');
      filesystemModule = mod;
      return filesystemModule;
    }
  } catch (err) {
    console.warn('[Native] Filesystem unavailable:', err);
  }
  return null;
};

/**
 * Safe Haptics Controller with Web Vibration Fallback
 */
export const safeHaptics = {
  impact: async (style = 'LIGHT') => {
    try {
      const normalized = typeof style === 'string' ? style.toUpperCase() : 'LIGHT';
      const cap = await getHaptics();
      if (cap) {
        await cap.impact({
          style: normalized === 'HEAVY' ? 'HEAVY' : normalized === 'MEDIUM' ? 'MEDIUM' : 'LIGHT'
        });
        return true;
      }
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        const ms = normalized === 'HEAVY' ? 24 : normalized === 'MEDIUM' ? 14 : 8;
        navigator.vibrate(ms);
        return true;
      }
    } catch (_) {}
    return false;
  },

  notification: async (type = 'SUCCESS') => {
    try {
      const normalized = typeof type === 'string' ? type.toUpperCase() : 'SUCCESS';
      const cap = await getHaptics();
      if (cap) {
        await cap.notification({
          type: normalized === 'ERROR' ? 'ERROR' : normalized === 'WARNING' ? 'WARNING' : 'SUCCESS'
        });
        return true;
      }
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        const pattern = normalized === 'ERROR' ? [30, 40, 30] : normalized === 'WARNING' ? [20, 30] : [12, 20];
        navigator.vibrate(pattern);
        return true;
      }
    } catch (_) {}
    return false;
  },

  selection: async () => {
    try {
      const cap = await getHaptics();
      if (cap) {
        await cap.selectionChanged();
        return true;
      }
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(6);
        return true;
      }
    } catch (_) {}
    return false;
  },

  light: () => safeHaptics.impact('LIGHT'),
  medium: () => safeHaptics.impact('MEDIUM'),
  heavy: () => safeHaptics.impact('HEAVY'),
  success: () => safeHaptics.notification('SUCCESS'),
  warning: () => safeHaptics.notification('WARNING'),
  error: () => safeHaptics.notification('ERROR'),
  commit: () => safeHaptics.impact('MEDIUM')
};

/**
 * Safe Share Controller: Native Share -> Web Share -> WhatsApp/Clipboard/Callback fallback
 */
export const safeShare = async ({
  title = '',
  text = '',
  url = '',
  files = [],
  dialogTitle = ''
} = {}) => {
  try {
    // 1. Native Capacitor Share (Android / iOS)
    if (isNativePlatform()) {
      const capShare = await getShare();
      if (capShare) {
        await capShare.share({
          title,
          text,
          url: url || undefined,
          dialogTitle: dialogTitle || title
        });
        return { success: true, method: 'native-capacitor' };
      }
    }

    // 2. Web Share API with Files
    if (
      files &&
      files.length > 0 &&
      typeof navigator !== 'undefined' &&
      navigator.canShare &&
      navigator.canShare({ files })
    ) {
      await navigator.share({
        title,
        text,
        files
      });
      return { success: true, method: 'web-share-files' };
    }

    // 3. Web Share API (Text/URL only)
    if (typeof navigator !== 'undefined' && navigator.share) {
      await navigator.share({
        title,
        text,
        url: url || undefined
      });
      return { success: true, method: 'web-share-text' };
    }

    // 4. Fallback to clipboard if available
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      const copyPayload = [title, text, url].filter(Boolean).join('\n\n');
      await navigator.clipboard.writeText(copyPayload);
      return { success: true, method: 'clipboard-fallback' };
    }

    return { success: false, method: 'unsupported' };
  } catch (err) {
    // User cancelled / dismissed share sheet
    if (err && (err.name === 'AbortError' || err.message?.includes('canceled') || err.message?.includes('cancelled'))) {
      return { success: false, cancelled: true };
    }
    console.warn('[Native] Share failed safely:', err);
    return { success: false, error: err };
  }
};

/**
 * Safe Filesystem Controller: Writes file locally or downloads in browser
 */
export const safeSaveFile = async ({
  fileName,
  base64Data,
  mimeType = 'image/jpeg',
  useCache = false
}) => {
  try {
    // 1. Native Capacitor Filesystem
    if (isNativePlatform()) {
      const fs = await getFilesystem();
      if (fs) {
        const { Filesystem, Directory } = fs;
        const dir = useCache ? Directory.Cache : Directory.Documents;
        const writeResult = await Filesystem.writeFile({
          path: fileName,
          data: base64Data,
          directory: dir,
          recursive: true
        });
        return { success: true, uri: writeResult.uri, native: true };
      }
    }

    // 2. Web Browser Anchor Download Fallback
    if (typeof document !== 'undefined') {
      const dataUrl = base64Data.startsWith('data:') ? base64Data : `data:${mimeType};base64,${base64Data}`;
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return { success: true, native: false };
    }

    return { success: false, error: 'Environment unsupported' };
  } catch (err) {
    console.warn('[Native] Save file failed safely:', err);
    return { success: false, error: err };
  }
};
