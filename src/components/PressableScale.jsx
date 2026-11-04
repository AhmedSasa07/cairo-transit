import React, { useState, useRef, useCallback } from 'react';
import { haptics } from '../utils/haptics.js';
import { APPLE_CURVES, APPLE_TIMINGS } from '../utils/motion.js';

/**
 * Apple Fluid Pressable Container (WWDC Fluid Interfaces & Emil Kowalski Design Eng)
 * - Press down: instant 120ms mechanical scale down to 0.97 with zero lag
 * - Release: 200ms snappy spring rebound (cubic-bezier(0.16, 1, 0.3, 1))
 * - Causal Haptics: triggers light haptic on pointer-down frame
 * - Hardware acceleration: transform-gpu & will-change: transform
 */
export default function PressableScale({
  children,
  onClick,
  activeScale = 0.97,
  disabled = false,
  hapticStyle = 'light',
  className = '',
  style = {},
  ...props
}) {
  const [isPressed, setIsPressed] = useState(false);
  const pointerId = useRef(null);

  const handlePointerDown = useCallback((e) => {
    if (disabled || (e.button !== undefined && e.button !== 0)) return;
    pointerId.current = e.pointerId;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
    setIsPressed(true);

    if (hapticStyle && haptics[hapticStyle]) {
      haptics[hapticStyle]();
    }
  }, [disabled, hapticStyle]);

  const handlePointerUp = useCallback((e) => {
    if (pointerId.current === e.pointerId || pointerId.current !== null) {
      setIsPressed(false);
      pointerId.current = null;
    }
  }, []);

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={disabled ? undefined : onClick}
      style={{
        transform: isPressed ? `scale(${activeScale}) translateZ(0)` : 'scale(1) translateZ(0)',
        transition: isPressed
          ? `transform ${APPLE_TIMINGS.pressDown}ms ${APPLE_CURVES.pressDown}`
          : `transform ${APPLE_TIMINGS.pressRelease}ms ${APPLE_CURVES.pressRelease}`,
        willChange: 'transform',
        touchAction: 'manipulation',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        ...style,
      }}
      className={`cursor-pointer ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
