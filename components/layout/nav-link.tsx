import Link from "next/link";

import type { NavLink } from "@/types";
import { cn } from "@/utils/cn";

type NavLinkItemProps = {
  link: NavLink;
  isActive: boolean;
  onNavigate?: () => void;
  className?: string;
};

const linkBaseStyles =
  "relative inline-flex min-h-11 items-center rounded-md px-3 py-2 font-rajdhani text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function NavLinkItem({
  link,
  isActive,
  onNavigate,
  className,
}: NavLinkItemProps) {
  return (
    <li>
      <Link
        href={link.href}
        onClick={onNavigate}
        className={cn(
          linkBaseStyles,
          isActive ? "text-primary" : "text-muted hover:text-inherit",
          className,
        )}
        aria-current={isActive ? "true" : undefined}>
        {link.label}
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300",
            isActive ? "scale-x-100" : "scale-x-0",
          )}
        />
      </Link>
    </li>
  );
}
