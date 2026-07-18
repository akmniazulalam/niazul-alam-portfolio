"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TbArrowUp } from "react-icons/tb";
import { cn } from "@/utils/cn";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: shouldReduceMotion ? 0 : 10 }}
          transition={{
            duration: shouldReduceMotion ? 0.15 : 0.35,
            ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          }}
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
          className={cn(
            "fixed bottom-6 right-6 z-50 flex size-12 cursor-pointer items-center justify-center rounded-full bg-[#8852F7] text-white shadow-[0_0_20px_rgba(136,82,247,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8852F7]/95 hover:shadow-[0_0_30px_rgba(136,82,247,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8852F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0715] sm:bottom-8 sm:right-8"
          )}
        >
          <TbArrowUp className="size-6" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
