"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/constants";
import { useReducedMotion } from "@/hooks";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  /** Delay before animation starts */
  delay?: number;
  /** Split by word or character */
  by?: "word" | "char";
}

/**
 * Line-by-line / word-by-word text reveal animation.
 * Used for hero headlines and section titles.
 */
export function TextReveal({
  children,
  className,
  delay = 0,
  by = "word",
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const units = by === "word" ? children.split(" ") : children.split("");

  if (reduced) {
    return <span className={cn(className)}>{children}</span>;
  }

  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: MOTION.stagger.fast, delayChildren: delay } },
      }}
    >
      {units.map((unit, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: MOTION.duration.normal, ease: MOTION.ease.premium },
            },
          }}
        >
          {unit}
          {by === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
