"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const gapMap = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8 lg:gap-10",
};

/**
 * Responsive grid layout primitive.
 */
export function Grid({ cols = 3, gap = "md", className, children, ...props }: GridProps) {
  return (
    <div className={cn("grid", colsMap[cols], gapMap[gap], className)} {...props}>
      {children}
    </div>
  );
}
