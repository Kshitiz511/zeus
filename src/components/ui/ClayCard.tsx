"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Claymorphism card — soft-shadow raised container with pillow feel.
 */
export const ClayCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl bg-zeus-paper p-6",
          "shadow-[8px_8px_16px_rgba(15,23,42,0.07),-8px_-8px_16px_rgba(255,255,255,0.7)]",
          "border border-zeus-line/30",
          "transition-shadow duration-300 hover:shadow-elevated",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ClayCard.displayName = "ClayCard";
