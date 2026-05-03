import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  /** Whether to show the leading line */
  line?: boolean;
}

/**
 * Eyebrow label — small uppercase category marker.
 */
export function Eyebrow({ line = true, className, children, ...props }: EyebrowProps) {
  return (
    <span className={cn("eyebrow", !line && "before:hidden", className)} {...props}>
      {children}
    </span>
  );
}
