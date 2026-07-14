import Link from "next/link";

import { SITE_CONFIG } from "@/constants/site";
import type { BrandProps } from "@/types";
import { cn } from "@/utils/cn";

export function Brand({ logo, className }: BrandProps) {
  return (
    <Link
      href="/#home"
      className={cn(
        "group inline-flex min-h-11 min-w-11 shrink-0 items-center rounded-md transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label={`${SITE_CONFIG.name} — go to home`}
    >
      <span className="inline-flex items-center">
        {logo ?? (
          <span className="font-newRocker text-lg tracking-wide text-inherit transition-colors group-hover:text-primary sm:text-xl lg:text-2xl">
            {SITE_CONFIG.name}
          </span>
        )}
      </span>
    </Link>
  );
}
