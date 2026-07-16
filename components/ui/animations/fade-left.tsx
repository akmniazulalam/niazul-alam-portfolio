"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeLeftProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
  offset?: number;
  className?: string;
}

export function FadeLeft({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.1,
  offset = -20,
  className,
}: FadeLeftProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : offset,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
