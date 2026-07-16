import type { AboutEducationItem } from "@/data/about";
import { cn } from "@/utils/cn";

import { AboutText } from "./about-text";

type EducationTimelineProps = {
  items: readonly AboutEducationItem[];
  className?: string;
};

type EducationTimelineItemProps = {
  item: AboutEducationItem;
  index: number;
  isLast: boolean;
};

function EducationTimelineItem({
  item,
  index,
  isLast,
}: EducationTimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <li
      className={cn(
        "group relative pb-10 last:pb-0",
        "lg:grid lg:grid-cols-2 lg:gap-x-10 xl:gap-x-16",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute left-[0.9375rem] z-10 size-3.5 -translate-x-1/2 rounded-full border-2 border-[#8852F7] bg-[#0a0909] transition-colors duration-300",
          "lg:left-1/2 lg:size-4",
          "group-hover:border-[#ef9d7a]",
        )}
      />

      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-[0.9375rem] top-3.5 bottom-0 w-px -translate-x-1/2 bg-white/10 lg:left-1/2"
        />
      )}

      <article
        className={cn(
          "group relative ml-8 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 sm:p-5",
          "hover:border-[#8852F7]/40 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8852F7]/5",
          "lg:ml-0 lg:max-w-lg",
          isEven
            ? "lg:col-start-1 lg:justify-self-end lg:text-right"
            : "lg:col-start-2 lg:justify-self-start lg:text-left",
        )}
      >
        <div
          className={cn(
            "mb-2 flex flex-col gap-1",
            isEven
              ? "lg:items-end"
              : "sm:flex-row sm:items-center sm:justify-between lg:items-start",
            !isEven && "sm:justify-between",
          )}
        >
          <h4 className="font-rajdhani text-lg font-bold text-text sm:text-xl">
            {item.degree}
          </h4>
          <time className="shrink-0 font-poppins text-xs font-medium text-[#ef9d7a] sm:text-sm">
            {item.period}
          </time>
        </div>

        <p className="font-poppins text-sm font-medium text-text/80">
          {item.institution}
        </p>

        {item.description ? (
          <AboutText className={cn("mt-2", isEven && "lg:text-right")}>
            {item.description}
          </AboutText>
        ) : null}
      </article>

      {isEven ? (
        <div aria-hidden="true" className="hidden lg:block lg:col-start-2" />
      ) : (
        <div aria-hidden="true" className="hidden lg:block lg:col-start-1" />
      )}
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
          index={index}
          isLast={index === items.length - 1}
        />
      ))}
    </ol>
  );
}
