"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delay?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delay = 0,
  once = true,
  amount = 0.5,
  className,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  duration?: number;
  offset?: number;
  className?: string;
}

export function StaggerItem({
  children,
  duration = 0.5,
  offset = 15,
  className,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : offset,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
