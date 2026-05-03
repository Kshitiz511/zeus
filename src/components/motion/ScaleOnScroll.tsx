"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks";

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Scale range: [start, end] — default scales from 0.9 to 1 */
  range?: [number, number];
}

/**
 * Scale-in element based on scroll progress through viewport.
 */
export function ScaleOnScroll({ children, className, range = [0.92, 1] }: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], range);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={cn(className)}>
      {children}
    </motion.div>
  );
}
