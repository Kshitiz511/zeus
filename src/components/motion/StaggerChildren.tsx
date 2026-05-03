"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/constants";
import { useReducedMotion } from "@/hooks";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  /** Delay before the group starts animating */
  delay?: number;
}

/**
 * Container that staggers the entrance of its children.
 * Each direct child should be wrapped in a motion element or use FadeIn.
 */
export function StaggerChildren({
  children,
  className,
  stagger = MOTION.stagger.normal,
  delay = 0,
}: StaggerChildrenProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: delay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item to use inside StaggerChildren.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={
        reduced
          ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
          : {
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: MOTION.duration.normal, ease: MOTION.ease.premium } },
            }
      }
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
