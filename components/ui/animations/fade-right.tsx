"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeRightProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
  offset?: number;
  className?: string;
}

function subscribeMobile(callback: () => void) {
  const media = window.matchMedia("(max-width: 767px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getMobileSnapshot() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function getMobileServerSnapshot() {
  return false;
}

export function FadeRight({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.5,
  offset = 20,
  className,
}: FadeRightProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    getMobileServerSnapshot,
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}>
      {children}
    </motion.div>
  );
}
