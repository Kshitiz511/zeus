"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * GraphSVG — Realistic upward-trending line chart with natural curves.
 * Animated via stroke-dasharray on mount.
 */
export function GraphSVG({ animate = true }: { animate?: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!animate || !pathRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(path, { strokeDashoffset: 0, duration: 2.2, ease: "power2.out", delay: 0.3 });

    if (areaRef.current) {
      gsap.fromTo(areaRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.8, ease: "power2.out" });
    }
  }, [animate]);

  // Realistic curve with dips, recoveries, and overall upward trend
  const linePath =
    "M 5 72 C 12 70, 18 68, 25 65 C 32 62, 38 67, 45 64 C 52 61, 58 58, 65 55 C 72 52, 78 57, 85 54 C 92 51, 98 48, 105 44 C 112 40, 118 46, 125 42 C 132 38, 138 35, 145 32 C 152 29, 158 34, 165 30 C 172 26, 178 22, 185 19 C 192 16, 198 20, 205 17 C 212 14, 218 11, 225 9 C 232 7, 240 6, 250 5";
  const areaPath = linePath + " L 250 80 L 5 80 Z";

  return (
    <svg viewBox="0 0 260 85" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
      <defs>
        <linearGradient id="heroGraphFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D2BFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1D2BFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroGraphStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D2BFF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#1D2BFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1D2BFF" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Grid lines (subtle) */}
      {[20, 40, 60].map((y) => (
        <line key={y} x1="5" y1={y} x2="250" y2={y} stroke="#E2E4EB" strokeWidth="0.5" strokeDasharray="3 3" />
      ))}

      {/* Area fill */}
      <path ref={areaRef} d={areaPath} fill="url(#heroGraphFill)" opacity={0} />

      {/* Main line */}
      <path ref={pathRef} d={linePath} fill="none" stroke="url(#heroGraphStroke)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Data points at key positions */}
      {[
        [25, 65], [65, 55], [105, 44], [145, 32], [185, 19], [225, 9], [250, 5],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="#FFFFFF" stroke="#1D2BFF" strokeWidth="1.5" opacity="0.8" />
      ))}

      {/* End dot - larger */}
      <circle cx="250" cy="5" r="4" fill="#1D2BFF" opacity="0.9" />
      <circle cx="250" cy="5" r="7" fill="#1D2BFF" opacity="0.15" />
    </svg>
  );
}
