import { useState, useRef, useEffect, useCallback } from 'react';
import { haptics } from './haptics.js';

/**
 * Apple Design System & Emil Kowalski Fluid Physics Constants
 * WWDC 2018 Fluid Interfaces & WWDC 2026 Principles of Great Design
 */
export const APPLE_CURVES = {
  /** Critically damped spring equivalent - snappy and natural, zero sluggishness */
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  /** Instant mechanical press-down curve */
  pressDown: 'cubic-bezier(0.2, 0, 0, 1)',
  /** Snappy release curve with minimal overshoot */
  pressRelease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  /** Under-damped spring rebound with subtle 4.6% bounce */
  springRebound: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  /** iOS native modal sheet presentation curve */
  drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
};

export const APPLE_TIMINGS = {
  pressDown: 120, // ms - instant feedback on touch down
  pressRelease: 200, // ms - snappy release
  modal: 240, // ms - sub-260ms presentation
  accordion: 220, // ms - sub-260ms expand/collapse
  fade: 180, // ms - snappy opacity crossfade
  tabSwitch: 160, // ms - quick segment transition
};

/**
 * Apple Rubber-banding formula (Designing Fluid Interfaces WWDC 2018)
 * Progressive resistance beyond boundaries: f(x) = (x * dim * c) / (dim + c * |x|)
 */
export function appleRubberband(overshoot, dimension = 300, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

/**
 * Detect prefers-reduced-motion media query
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduced(e.matches);
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, []);

  return reduced;
}

/**
 * usePressAnimation Hook
 * - Instant scale(0.97) pointer-down response (kills latency)
 * - Fires causal haptic feedback on the exact frame of touch-down
 * - Captures pointer for uninterrupted tracking
 * - Snappy release under 200ms
 * - Returns props to spread onto any button or card element
 */
export function usePressAnimation({
  activeScale = 0.97,
  hapticStyle = 'light',
  disabled = false,
  onClick,
  className = '',
  style = {},
} = {}) {
  const [isPressed, setIsPressed] = useState(false);
  const pointerIdRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const handlePointerDown = useCallback((e) => {
    if (disabled || (e.button !== undefined && e.button !== 0)) return;
    pointerIdRef.current = e.pointerId;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}

    setIsPressed(true);

    // Causal Multimodal Feedback: fire haptic on touch-down frame
    if (hapticStyle && haptics[hapticStyle]) {
      haptics[hapticStyle]();
    }
  }, [disabled, hapticStyle]);

  const handlePointerUp = useCallback((e) => {
    if (pointerIdRef.current === e.pointerId || pointerIdRef.current !== null) {
      setIsPressed(false);
      pointerIdRef.current = null;
    }
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      setIsPressed(true);
      if (hapticStyle && haptics[hapticStyle]) {
        haptics[hapticStyle]();
      }
    }
  }, [disabled, hapticStyle]);

  const handleKeyUp = useCallback((e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      setIsPressed(false);
    }
  }, []);

  const transitionStyle = reducedMotion
    ? 'opacity 120ms ease-out'
    : isPressed
    ? `transform ${APPLE_TIMINGS.pressDown}ms ${APPLE_CURVES.pressDown}, opacity 100ms ease-out`
    : `transform ${APPLE_TIMINGS.pressRelease}ms ${APPLE_CURVES.pressRelease}, opacity 150ms ease-out`;

  const transformStyle = reducedMotion
    ? 'none'
    : isPressed
    ? `scale(${activeScale}) translateZ(0)`
    : 'scale(1) translateZ(0)';

  return {
    isPressed,
    props: {
      role: 'button',
      tabIndex: disabled ? -1 : 0,
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: disabled ? undefined : onClick,
      style: {
        transform: transformStyle,
        WebkitTransform: transformStyle,
        transition: transitionStyle,
        WebkitTransition: transitionStyle,
        willChange: reducedMotion ? 'auto' : 'transform',
        touchAction: 'manipulation',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        ...style,
      },
      className: `${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} ${className}`,
    },
  };
}

/**
 * useAccordionMotion Hook
 * GPU-composited expand/collapse under 220ms using CSS Grid 0fr -> 1fr
 */
export function useAccordionMotion(isOpen) {
  const reducedMotion = useReducedMotion();

  const containerStyle = {
    display: 'grid',
    gridTemplateRows: isOpen ? '1fr' : '0fr',
    transition: reducedMotion
      ? 'none'
      : `grid-template-rows ${APPLE_TIMINGS.accordion}ms ${APPLE_CURVES.easeOut}`,
    willChange: 'grid-template-rows',
  };

  const innerStyle = {
    overflow: 'hidden',
    opacity: isOpen ? 1 : 0,
    transform: reducedMotion ? 'none' : isOpen ? 'translateY(0)' : 'translateY(-4px)',
    transition: reducedMotion
      ? `opacity ${APPLE_TIMINGS.fade}ms ease-out`
      : `opacity ${APPLE_TIMINGS.fade}ms ${APPLE_CURVES.easeOut}, transform ${APPLE_TIMINGS.accordion}ms ${APPLE_CURVES.easeOut}`,
    willChange: reducedMotion ? 'auto' : 'transform, opacity',
  };

  return {
    containerStyle,
    innerStyle,
    isOpen,
  };
}

/**
 * useSheetDragToDismiss Hook
 * Tracks pointer velocity and displacement for Apple-style sheet flick dismissal
 */
export function useSheetDragToDismiss({ onClose, isEnabled = true }) {
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ y: 0, time: 0 });
  const lastPointsRef = useRef([]);

  const onPointerDown = useCallback((e) => {
    if (!isEnabled) return;
    setIsDragging(true);
    dragStartRef.current = { y: e.clientY, time: performance.now() };
    lastPointsRef.current = [{ y: e.clientY, time: performance.now() }];
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  }, [isEnabled]);

  const onPointerMove = useCallback((e) => {
    if (!isDragging) return;
    const now = performance.now();
    const deltaY = e.clientY - dragStartRef.current.y;
    lastPointsRef.current.push({ y: e.clientY, time: now });
    if (lastPointsRef.current.length > 5) {
      lastPointsRef.current.shift();
    }

    if (deltaY < 0) {
      // Rubber-band resistance if dragged upwards past boundary
      setDragY(appleRubberband(deltaY, 200, 0.4));
    } else {
      setDragY(deltaY);
    }
  }, [isDragging]);

  const onPointerUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    // Calculate release velocity
    const pts = lastPointsRef.current;
    let velocity = 0;
    if (pts.length >= 2) {
      const first = pts[0];
      const last = pts[pts.length - 1];
      const dt = last.time - first.time;
      if (dt > 0) {
        velocity = (last.y - first.y) / dt; // px/ms
      }
    }

    // Dismiss if dragged down > 90px OR flicked down with velocity > 0.15 px/ms
    if (dragY > 90 || velocity > 0.15) {
      haptics.light();
      onClose?.();
    } else {
      setDragY(0);
    }
  }, [isDragging, dragY, onClose]);

  return {
    isDragging,
    dragY,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
    sheetStyle: {
      transform: dragY !== 0 ? `translateY(${Math.max(0, dragY)}px)` : undefined,
      transition: isDragging ? 'none' : `transform ${APPLE_TIMINGS.modal}ms ${APPLE_CURVES.easeOut}`,
      willChange: isDragging ? 'transform' : 'auto',
    },
  };
}
