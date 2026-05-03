"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface IconBoxProps extends HTMLAttributes<HTMLSpanElement> {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "sky" | "gold" | "mint" | "dark";
}

const sizeMap = {
  sm: "h-8 w-8 [&>svg]:h-4 [&>svg]:w-4",
  md: "h-10 w-10 [&>svg]:h-5 [&>svg]:w-5",
  lg: "h-14 w-14 [&>svg]:h-6 [&>svg]:w-6",
};

const variantMap = {
  sky: "bg-[var(--zeus-sky)] text-[var(--zeus-blue)]",
  gold: "bg-[var(--zeus-gold-light)]/20 text-[var(--zeus-gold)]",
  mint: "bg-[var(--zeus-mint)] text-[var(--zeus-green)]",
  dark: "bg-[var(--zeus-navy)] text-white",
};

/**
 * Icon container with consistent sizing and background.
 */
export function IconBox({
  icon: Icon,
  size = "md",
  variant = "sky",
  className,
  ...props
}: IconBoxProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg",
        sizeMap[size],
        variantMap[variant],
        className
      )}
      {...props}
    >
      <Icon strokeWidth={1.8} />
    </span>
  );
}
