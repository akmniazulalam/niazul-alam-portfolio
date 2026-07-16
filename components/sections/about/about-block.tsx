import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type AboutBlockProps = {
  title: string;
  children: ReactNode;
  className?: string;
  headingId?: string;
  variant?: "card" | "ghost";
};

export function AboutBlock({
  title,
  children,
  className,
  headingId,
  variant = "card",
}: AboutBlockProps) {
  if (variant === "ghost") {
    return (
      <article className={cn("w-full", className)}>
        <h3
          id={headingId}
          className="mb-5 font-rajdhani text-xl font-bold leading-tight text-text sm:mb-6 sm:text-2xl"
        >
          {title}
        </h3>
        {children}
      </article>
    );
  }

  return (
    <article
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8",
        className,
      )}
    >
      <h3
        id={headingId}
        className="mb-4 font-rajdhani text-xl font-bold leading-tight text-text sm:mb-5 sm:text-2xl"
      >
        {title}
      </h3>
      {children}
    </article>
  );
}
