"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "success" | "outline";
}

const variants = {
  default: "bg-[var(--zeus-sky)] text-[var(--zeus-blue)] border-transparent",
  gold: "bg-[var(--zeus-gold-light)]/20 text-[var(--zeus-gold)] border-transparent",
  success: "bg-[var(--zeus-mint)] text-[var(--zeus-green)] border-transparent",
  outline: "bg-transparent border-[var(--zeus-line)] text-[var(--zeus-slate)]",
};

/**
 * Small inline badge / tag.
 */
export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
