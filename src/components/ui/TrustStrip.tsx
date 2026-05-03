"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TrustStripProps extends HTMLAttributes<HTMLDivElement> {
  items: readonly string[];
  dark?: boolean;
}

/**
 * Horizontal trust badge strip — "State of Florida Approved Vendor" etc.
 */
export function TrustStrip({ items, dark = false, className, ...props }: TrustStripProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 text-sm",
        dark ? "text-white/70" : "text-[var(--zeus-muted)]",
        className
      )}
      {...props}
    >
      {items.map((item, i) => (
        <span key={item} className="inline-flex items-center gap-2">
          {i > 0 && (
            <span
              className={cn(
                "h-1 w-1 rounded-full",
                dark ? "bg-[var(--zeus-gold-light)]" : "bg-[var(--zeus-gold)]"
              )}
            />
          )}
          {item}
        </span>
      ))}
    </div>
  );
}
