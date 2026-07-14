"use client";

import { useEffect, useRef } from "react";

import { NAV_LINKS } from "@/constants/navigation";
import type { NavLink } from "@/types";
import { cn } from "@/utils/cn";

import { NavLinkItem } from "./nav-link";
import { ResumeButton } from "./resume-button";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  menuButtonId: string;
};

export function MobileMenu({
  isOpen,
  onClose,
  activeSection,
  menuButtonId,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const focusable = panelRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled])',
    );

    focusable?.focus();
  }, [isOpen]);

  const isLinkActive = (link: NavLink) => activeSection === link.sectionId;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!isOpen}
        onClick={onClose}
      />

      <nav
        ref={panelRef}
        id="mobile-menu"
        aria-labelledby={menuButtonId}
        aria-hidden={!isOpen}
        className={cn(
          "fixed top-0 right-0 z-50 flex h-full w-full max-w-xs flex-col border-l border-white/10 bg-background shadow-2xl transition-transform duration-300 ease-in-out sm:max-w-sm lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
          <h2 className="font-rajdhani text-sm font-semibold text-text">Menu</h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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

        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6 sm:px-6">
          {NAV_LINKS.map((link) => (
            <NavLinkItem
              key={link.sectionId}
              link={link}
              isActive={isLinkActive(link)}
              onNavigate={onClose}
              className="w-full justify-start px-4 text-base"
            />
          ))}
        </ul>

        <div className="border-t border-white/10 px-4 py-6 sm:px-6">
          <ResumeButton className="w-full" />
        </div>
      </nav>
    </>
  );
}
