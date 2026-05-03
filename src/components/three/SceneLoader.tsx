"use client";

import { Suspense, lazy, type ComponentType } from "react";
import { useMediaQuery, useReducedMotion } from "@/hooks";

interface SceneLoaderProps {
  /** Dynamic import function for the 3D scene component */
  loader: () => Promise<{ default: ComponentType }>;
  /** Fallback while loading / on mobile / reduced motion */
  fallback?: React.ReactNode;
  /** Force disable 3D (useful for below-fold scenes) */
  disabled?: boolean;
}

/**
 * Lazy-loads a React Three Fiber scene with:
 * - Dynamic import (code splitting)
 * - Mobile fallback (no 3D under 1024px)
 * - Reduced motion fallback
 * - Suspense boundary
 */
export function SceneLoader({ loader, fallback = null, disabled = false }: SceneLoaderProps) {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const reducedMotion = useReducedMotion();

  if (disabled || isMobile || reducedMotion) {
    return <>{fallback}</>;
  }

  const Scene = lazy(loader);

  return (
    <Suspense fallback={fallback}>
      <Scene />
    </Suspense>
  );
}
