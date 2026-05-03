"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Container wrapper with max-width and responsive padding.
 * Equivalent to .z-container in globals.css but as a React component.
 */
export function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-[var(--container-pad)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
