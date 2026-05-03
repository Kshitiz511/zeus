"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Intensity of blur backdrop */
  blur?: "sm" | "md" | "lg";
  /** Whether the card is on a dark background */
  dark?: boolean;
}

const blurMap = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-xl",
};

/**
 * Glassmorphism card — premium frosted-glass container.
 */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ blur = "md", dark = false, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border p-6",
          blurMap[blur],
          dark
            ? "border-white/10 bg-white/5 text-white"
            : "border-zeus-line/60 bg-white/60 text-zeus-ink shadow-card",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
