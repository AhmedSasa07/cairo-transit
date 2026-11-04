import React from 'react';

/**
 * Official Cairo Transit Mode Logos & High-Resolution Vector/Raster Assets
 * 1. Cairo_metro_logo.svg -> Line 1, Line 2, Line 3, and general Metro
 * 2. Cairo_Light_Rail_Transit.png -> LRT (Light Rail Transit)
 * 3. Cairo_Bus_Rapid_Transit_logo.png -> BRT (Bus Rapid Transit)
 * 4. eastmonorail.png -> East Nile Monorail
 * 5. westmonorail.png -> West Nile Monorail
 */
const LOGO_ASSETS = {
  metro: '/assets/logos/Cairo_metro_logo.svg',
  line1: '/assets/logos/Cairo_metro_logo.svg',
  line2: '/assets/logos/Cairo_metro_logo.svg',
  line3: '/assets/logos/Cairo_metro_logo.svg',
  lrt: '/assets/logos/Cairo_Light_Rail_Transit.png',
  monorail: '/assets/logos/eastmonorail.png',
  monorail_east: '/assets/logos/eastmonorail.png',
  monorail_west: '/assets/logos/westmonorail.png',
  brt: '/assets/logos/Cairo_Bus_Rapid_Transit_logo.png'
};

const DEFAULT_LABELS = {
  metro: { ar: 'مترو القاهرة', en: 'Cairo Metro' },
  line1: { ar: 'الخط الأول', en: 'M1' },
  line2: { ar: 'الخط الثانى', en: 'M2' },
  line3: { ar: 'الخط الثالث', en: 'M3' },
  lrt: { ar: 'القطار الكهربائي الخفيف LRT', en: 'Cairo Light Rail Transit (LRT)' },
  monorail: { ar: 'مونوريل القاهرة', en: 'Cairo Monorail' },
  monorail_east: { ar: 'مونوريل شرق النيل', en: 'East Nile Monorail' },
  monorail_west: { ar: 'مونوريل غرب النيل', en: 'West Nile Monorail' },
  brt: { ar: 'الأتوبيس الترددي BRT', en: 'Bus Rapid Transit (BRT)' }
};

const SIZE_PRESETS = {
  xs: 'w-3.5 h-3.5',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
};

/**
 * TransitModeIcon component
 * @param {string} mode - Transit mode identifier ('metro', 'monorail', 'lrt', 'brt', or lineId)
 * @param {string} [lineId] - Optional specific line ID ('monorail_east', 'monorail_west', 'line1', etc.)
 * @param {string} [size='md'] - Preset size: 'xs', 'sm', 'md', 'lg', 'xl' (ignored if className specifies w-/h-)
 * @param {string} [className] - Additional Tailwind classes on the <img> element
 * @param {string} [containerClassName] - Additional classes for the backdrop/wrapper
 * @param {boolean} [withBackdrop=false] - Renders on a crisp white rounded badge (ideal for colored buttons)
 * @param {boolean} [contrastAssist=true] - Applies dark-mode halo for transparent dark elements (LRT/BRT/Monorail)
 * @param {string} [alt] - Accessible alt text
 * @param {boolean} [ariaHidden=true] - Sets aria-hidden="true" when accompanied by a text label
 * @param {string} [lang='ar'] - Language for default accessible alt text ('ar' | 'en')
 */
export default function TransitModeIcon({
  mode = 'metro',
  lineId,
  size = 'md',
  className = '',
  containerClassName = '',
  withBackdrop = false,
  contrastAssist = true,
  alt,
  ariaHidden = true,
  lang = 'ar'
}) {
  const key = (lineId || mode || 'metro').toLowerCase().trim();
  const src = LOGO_ASSETS[key] || (key.includes('mono') ? LOGO_ASSETS.monorail : LOGO_ASSETS.metro);

  const hasCustomSize = /\bw-\S+/.test(className);
  const sizeClass = hasCustomSize ? '' : (SIZE_PRESETS[size] || SIZE_PRESETS.md);

  const resolvedAlt = alt !== undefined
    ? alt
    : (!ariaHidden ? (DEFAULT_LABELS[key]?.[lang] || DEFAULT_LABELS[key]?.ar || 'شعار وسيلة النقل') : '');

  // Subtle contrast halo for transparent dark elements (LRT/BRT/Monorail) against black backgrounds in dark mode
  const darkFilterClass = contrastAssist && (key === 'lrt' || key === 'brt' || key.includes('monorail'))
    ? 'dark:drop-shadow-[0_0_1px_rgba(255,255,255,0.7)]'
    : '';

  const imgElement = (
    <img
      src={src}
      alt={resolvedAlt}
      aria-hidden={ariaHidden ? 'true' : undefined}
      className={`object-contain select-none pointer-events-none transition-transform ${sizeClass} ${darkFilterClass} ${className}`.trim()}
      loading="lazy"
      decoding="async"
    />
  );

  if (withBackdrop) {
    const isRound = key !== 'brt';
    return (
      <span
        className={`inline-flex items-center justify-center bg-white dark:bg-white/95 p-0.5 shadow-2xs flex-shrink-0 ${
          isRound ? 'rounded-full' : 'rounded-md'
        } ${containerClassName}`.trim()}
      >
        {imgElement}
      </span>
    );
  }

  if (containerClassName) {
    return (
      <span className={`inline-flex items-center justify-center flex-shrink-0 ${containerClassName}`.trim()}>
        {imgElement}
      </span>
    );
  }

  return imgElement;
}
