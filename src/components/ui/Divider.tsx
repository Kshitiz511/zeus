"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  dark?: boolean;
}

/**
 * Styled divider line.
 */
export function Divider({ dark = false, className, ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 border-t",
        dark ? "border-white/10" : "border-[var(--zeus-line)]",
        className
      )}
      {...props}
    />
  );
}
