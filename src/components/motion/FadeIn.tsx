"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { MOTION } from "@/lib/constants";
import { useReducedMotion } from "@/hooks";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
}

/**
 * Fade-in reveal wrapper with directional entry.
 * Respects reduced motion preference.
 */
export function FadeIn({
  direction = "up",
  delay = 0,
  duration = MOTION.duration.normal,
  distance = 30,
  className,
  children,
  ...props
}: FadeInProps) {
  const reduced = useReducedMotion();

  const offsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, ...offsets[direction] }}
      whileInView={reduced ? {} : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: MOTION.ease.premium }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
