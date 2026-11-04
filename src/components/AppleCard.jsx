import React from 'react';
import { usePressAnimation } from '../utils/motion.js';

/**
 * Apple Inset Grouped Card
 * iOS 17/18 Human Interface Guidelines:
 * - Primary Group Container: rounded-[24px], frosted glass, specular top reflection
 * - Secondary Inset Layer: rounded-[20px], nested row or interactive control
 * - Hairline borders: border-black/[0.05] dark:border-white/[0.08]
 * - Specular reflection simulates physical light catching the top bevel
 */
export default function AppleCard({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'tertiary'
  className = '',
  style = {},
  interactive = false,
  onClick,
  specular = true,
  role,
  accentColor,
  ...props
}) {
  const pressProps = usePressAnimation({
    activeScale: 0.985,
    disabled: !interactive,
    onClick
  });

  const baseVariants = {
    primary: `rounded-[24px] bg-white/85 dark:bg-[#161618]/85 backdrop-blur-md border border-black/[0.05] dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45)]`,
    secondary: `rounded-[20px] bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-sm border border-black/[0.04] dark:border-white/[0.06] hover:bg-black/[0.045] dark:hover:bg-white/[0.065] transition-colors`,
    tertiary: `rounded-[16px] bg-black/[0.02] dark:bg-white/[0.025] border border-black/[0.03] dark:border-white/[0.05]`
  };

  const specularStyle = specular
    ? variant === 'primary'
      ? {
          boxShadow:
            'inset 0 1px 0 0 rgba(255, 255, 255, 0.75), 0 8px 30px rgba(0, 0, 0, 0.04)',
          ...style
        }
      : {
          boxShadow:
            'inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
          ...style
        }
    : style;

  const appliedClass = `${baseVariants[variant] || baseVariants.primary} ${
    interactive ? 'cursor-pointer active:scale-[0.985] transition-all duration-150' : ''
  } ${className}`;

  if (interactive) {
    return (
      <div
        {...pressProps.props}
        className={appliedClass}
        style={{ ...pressProps.props.style, ...specularStyle }}
        role={role || 'button'}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={appliedClass}
      style={specularStyle}
      role={role}
      {...props}
    >
      {children}
    </div>
  );
}
