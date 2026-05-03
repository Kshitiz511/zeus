"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Track scroll progress (0–1) for a given element or the viewport.
 */
export function useScrollProgress(elementRef?: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const total = elementRef.current.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0);
      } else {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? window.scrollY / total : 0);
      }
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, [elementRef]);

  return progress;
}
