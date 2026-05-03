"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks";

/**
 * Initializes Lenis smooth scrolling globally.
 * Automatically disables for reduced motion preference.
 */
export function SmoothScroll() {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<unknown>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;

    async function init() {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      const instance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
      });
      lenisRef.current = instance;

      function update(time: number) {
        instance.raf(time);
        rafRef.current = requestAnimationFrame(update);
      }
      rafRef.current = requestAnimationFrame(update);
    }

    init();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) {
        (lenisRef.current as { destroy: () => void }).destroy();
      }
    };
  }, [reducedMotion]);

  return null;
}
