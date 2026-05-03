"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Full-bleed background with contained content */
  contained?: boolean;
  /** Dark executive theme */
  dark?: boolean;
  /** Remove vertical padding */
  flush?: boolean;
}

/**
 * Reusable page section wrapper.
 * Enforces consistent spacing, max-width, and theming.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, contained = true, dark = false, flush = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full",
          dark && "bg-zeus-black text-zeus-white",
          !flush && "py-[var(--space-section)]",
          className
        )}
        {...props}
      >
        {contained ? (
          <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--container-pad)]">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";
