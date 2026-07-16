"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
  offset?: number;
  className?: string;
  id?: string;
}

export function SectionReveal({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.15,
  offset = 30,
  className,
  id,
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : offset,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.section
      id={id}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
}
