"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface MetricTileProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

/**
 * KPI metric display tile with large number and label.
 */
export function MetricTile({ value, label, prefix, suffix, className, ...props }: MetricTileProps) {
  return (
    <div className={cn("metric-tile min-w-0", className)} {...props}>
      <div className="number">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}
