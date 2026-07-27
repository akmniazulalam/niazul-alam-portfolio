"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NAV_LINKS } from "@/constants/navigation";
import type { NavLink } from "@/types";
import { cn } from "@/utils/cn";
import { NavLinkItem } from "./nav-link";
import { ResumeButton } from "./resume-button";

type MobileMenuProps = {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly activeSection: string;
  readonly menuButtonId: string;
};

export function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  menuButtonId,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Prevent background scrolling and manage key listeners when menu is open
  useEffect(() => {
    if (!isOpen) return;

    // Scroll Lock
    document.body.style.overflow = "hidden";

    // Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Auto-focus first focusable element for keyboard accessibility
    const focusable = panelRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusable?.focus();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const isLinkActive = (link: NavLink) => activeSection === link.sectionId;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer Menu Panel */}
          <motion.nav
            ref={panelRef}
            id="mobile-menu"
            aria-labelledby={menuButtonId}
            role="dialog"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
              duration: shouldReduceMotion ? 0.05 : 0.35,
            }}
            className="fixed top-0 right-0 z-50 flex h-full w-full max-w-xs flex-col border-l border-white/10 bg-background/95 backdrop-blur-md shadow-2xl sm:max-w-sm lg:hidden"
          >
            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
              <h2 className="font-rajdhani text-xl font-semibold text-text">Menu</h2>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Close navigation menu"
              >
                <svg
                  aria-hidden="true"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items List */}
            <ul className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6 sm:px-6">
              {NAV_LINKS.map((link) => (
                <NavLinkItem
                  key={link.sectionId}
                  link={link}
                  isActive={isLinkActive(link)}
                  onNavigate={onClose}
                  className={cn(
                    "w-full justify-start px-4 py-3 text-base rounded-xl transition-all [&_span]:hidden",
                    isLinkActive(link)
                      ? "bg-[#FF014F]/10 text-[#FF014F] font-bold"
                      : "text-muted hover:text-text hover:bg-white/[0.02]"
                  )}
                />
              ))}
            </ul>

            {/* Bottom Actions: Resume Button */}
            <div className="border-t border-white/10 px-4 py-6 sm:px-6">
              <ResumeButton className="w-full" />
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
