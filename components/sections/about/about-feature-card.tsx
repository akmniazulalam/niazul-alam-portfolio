import type { AboutPlaceholderItem } from "@/data/about";
import { cn } from "@/utils/cn";

import { AboutText } from "./about-text";

type AboutFeatureCardVariant = "default" | "highlight";

type AboutFeatureCardProps = {
  item: AboutPlaceholderItem;
  index?: number;
  variant?: AboutFeatureCardVariant;
  className?: string;
};

const cardStyles: Record<AboutFeatureCardVariant, string> = {
  default:
    "border-white/10 bg-white/[0.02] hover:border-[#8852F7]/40 hover:bg-white/[0.04] hover:shadow-[#8852F7]/10 focus-visible:border-[#8852F7]/40 focus-visible:bg-white/[0.04]",
  highlight:
    "border-[#FF014F]/25 bg-[#FF014F]/5 shadow-lg shadow-[#FF014F]/5 hover:border-[#ef9d7a]/50 hover:bg-[#FF014F]/10 hover:shadow-[#FF014F]/15 focus-visible:border-[#ef9d7a]/50 focus-visible:bg-[#FF014F]/10",
};

const iconStyles: Record<AboutFeatureCardVariant, string> = {
  default:
    "border-[#8852F7]/30 bg-[#8852F7]/10 text-[#ef9d7a] group-hover:border-[#ef9d7a]/50 group-focus-visible:border-[#ef9d7a]/50",
  highlight:
    "border-[#FF014F]/40 bg-[#FF014F]/15 text-[#ef9d7a] group-hover:border-[#ef9d7a]/60 group-focus-visible:border-[#ef9d7a]/60",
};

function getCardId(title: string) {
  return `about-feature-${title.toLowerCase().replace(/\s+/g, "-")}-heading`;
}

function getIconPlaceholder(title: string, index?: number) {
  if (typeof index === "number") {
    return String(index + 1).padStart(2, "0");
  }

  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function AboutFeatureCard({
  item,
  index,
  variant = "default",
  className,
}: AboutFeatureCardProps) {
  const headingId = getCardId(item.title);

  return (
    <article
      tabIndex={0}
      aria-labelledby={headingId}
      className={cn(
        "group h-full rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0909] sm:p-5",
        cardStyles[variant],
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "mb-4 flex size-11 items-center justify-center rounded-xl border transition-colors duration-300",
          iconStyles[variant],
        )}
      >
        <span className="font-rajdhani text-sm font-bold">
          {getIconPlaceholder(item.title, index)}
        </span>
      </div>

      <h4
        id={headingId}
        className="mb-2 font-rajdhani text-lg font-bold text-text sm:text-xl"
      >
        {item.title}
      </h4>
      <AboutText>{item.description}</AboutText>
    </article>
  );
}
