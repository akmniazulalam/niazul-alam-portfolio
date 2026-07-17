"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
  initialScale?: number;
  className?: string;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.5,
  initialScale = 0.95,
  className,
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : initialScale,
    },
    animate: {
      opacity: 1,
      scale: 1,
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
