import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type AboutBlockProps = {
  title: string;
  children: ReactNode;
  className?: string;
  headingId?: string;
};

export function AboutBlock({
  title,
  children,
  className,
  headingId,
}: AboutBlockProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8",
        className,
      )}
    >
      <h3
        id={headingId}
        className="mb-4 font-rajdhani text-xl font-bold text-text sm:mb-5 sm:text-2xl"
      >
        {title}
      </h3>
      {children}
    </article>
  );
}
