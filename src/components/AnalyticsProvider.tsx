"use client";

import { useEffect } from "react";

export function AnalyticsProvider() {
  useEffect(() => {
    // Track page view on load
    const trackPageView = async () => {
      try {
        await fetch("/api/analytics/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "pageview",
            page: window.location.pathname,
            referrer: document.referrer || null,
            userAgent: navigator.userAgent,
          }),
        });
      } catch {
        // silently fail
      }
    };

    trackPageView();

    // Track clicks
    const handleClick = async (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      const button = target.closest("button");
      const clickTarget = anchor || button;
      if (!clickTarget) return;

      try {
        await fetch("/api/analytics/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "click",
            page: window.location.pathname,
            element: clickTarget.tagName,
            text: clickTarget.textContent?.slice(0, 100) || "",
            href: anchor?.getAttribute("href") || null,
          }),
        });
      } catch {
        // silently fail
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
