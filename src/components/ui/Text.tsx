import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  muted?: boolean;
  balance?: boolean;
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

/**
 * Body text primitive with consistent sizing and color.
 */
export function Text({
  as: Tag = "p",
  size = "base",
  muted = true,
  balance = false,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(
        sizeClasses[size],
        "leading-relaxed",
        muted ? "text-[var(--zeus-muted)]" : "text-[var(--zeus-ink)]",
        balance && "text-balance",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
