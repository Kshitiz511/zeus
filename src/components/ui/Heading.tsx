import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  /** Visual size override independent of semantic level */
  size?: "display" | "hero" | "section" | "subsection";
}

const sizeClasses = {
  display: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]",
  hero: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]",
  section: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]",
  subsection: "text-2xl md:text-3xl font-semibold leading-[1.2]",
};

/**
 * Typographically precise heading component.
 * Uses --font-heading (Poppins) via Tailwind's font-family cascade.
 */
export function Heading({
  as: Tag = "h2",
  size = "section",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn("font-[family-name:var(--font-heading)]", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
