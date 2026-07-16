import type { AboutEducationItem } from "@/data/about";
import { cn } from "@/utils/cn";

import { AboutText } from "./about-text";

type EducationTimelineProps = {
  items: readonly AboutEducationItem[];
  className?: string;
};

type EducationTimelineItemProps = {
  item: AboutEducationItem;
  isLast: boolean;
};

function EducationTimelineItem({ item, isLast }: EducationTimelineItemProps) {
  return (
    <li className="group relative pb-7 last:pb-0">
      <div
        aria-hidden="true"
        className={cn(
          "absolute left-[0.9375rem] top-6 z-10 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#8852F7] bg-[#0a0909] transition-colors duration-300",
          "group-hover:border-[#ef9d7a]",
        )}
      />

      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-[0.9375rem] top-6 bottom-0 w-px -translate-x-1/2 bg-white/10"
        />
      )}

      <article
        className={cn(
          "relative ml-8 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 sm:p-5",
          "hover:border-[#8852F7]/40 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8852F7]/5",
        )}
      >
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h4 className="font-rajdhani text-lg font-bold text-text sm:text-xl">
            {item.degree}
          </h4>
          <time className="inline-flex shrink-0 self-start items-center rounded-full bg-[#ef9d7a]/10 border border-[#ef9d7a]/25 px-2.5 py-0.5 font-poppins text-xs font-semibold text-[#ef9d7a] sm:px-3 sm:py-0.5">
            {item.period}
          </time>
        </div>

        <p className="font-poppins text-sm font-medium text-text/80">
          {item.institution}
        </p>

        {item.description ? (
          <AboutText className="mt-2">{item.description}</AboutText>
        ) : null}
      </article>
    </li>
  );
}

export function EducationTimeline({ items, className }: EducationTimelineProps) {
  return (
    <ol
      className={cn("relative list-none", className)}
      aria-label="Education history"
    >
      {items.map((item, index) => (
        <EducationTimelineItem
          key={`${item.degree}-${item.institution}`}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </ol>
  );
}
