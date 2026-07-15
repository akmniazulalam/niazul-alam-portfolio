"use client";

import { usePathname } from "next/navigation";

import { Container } from "@/components/ui";
import { NAV_LINKS, NAV_SCROLL_THRESHOLD } from "@/constants/navigation";
import { useActiveSection, useMobileMenu, useScrollPosition } from "@/hooks";
import type { NavLink } from "@/types";
import { cn } from "@/utils/cn";
import { FaBarsStaggered } from "react-icons/fa6";
import { Brand } from "./brand";
import { MobileMenu } from "./mobile-menu";
import { NavLinkItem } from "./nav-link";
import { ResumeButton } from "./resume-button";

const MENU_BUTTON_ID = "mobile-menu-button";

export function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScrollPosition(NAV_SCROLL_THRESHOLD);
  const { isOpen, toggle, close } = useMobileMenu();

  const activeSection = useActiveSection();

  const isLinkActive = (link: NavLink) => {
    if (pathname !== "/") {
      return link.href === pathname;
    }

    return activeSection === link.sectionId;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,color,box-shadow,border-color] duration-300 ease-in-out",
        isScrolled
          ? "border-b border-white/10 bg-background/95 text-text shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-background",
      )}>
      <Container
        as="div"
        className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Brand />

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <NavLinkItem
                key={link.sectionId}
                link={link}
                isActive={isLinkActive(link)}
              />
            ))}
          </ul>
        </nav>

        <div className="hidden items-center lg:flex">
          <ResumeButton />
        </div>

        <button
          id={MENU_BUTTON_ID}
          type="button"
          onClick={toggle}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-inherit transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }>
          <span className="relative size-6">
            <FaBarsStaggered />
          </span>
        </button>
      </Container>

      <MobileMenu
        isOpen={isOpen}
        onClose={close}
        activeSection={activeSection}
        menuButtonId={MENU_BUTTON_ID}
      />
    </header>
  );
}
