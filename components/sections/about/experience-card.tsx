import Image from "next/image";

import type { AboutExperienceItem } from "@/data/about";
import { cn } from "@/utils/cn";

type ExperienceCardProps = {
  item: AboutExperienceItem;
  className?: string;
};

function getCompanyInitials(company: string): string {
  return company
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function ExperienceCard({ item, className }: ExperienceCardProps) {
  const initials = getCompanyInitials(item.company);

  return (
    <article
      className={cn(
        "group rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-sm shadow-black/10 transition-all duration-300 sm:p-6",
        "hover:-translate-y-0.5 hover:border-[#8852F7]/40 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8852F7]/10",
        className,
      )}
    >
      <div className="mb-5 flex items-start gap-4">
        <div
          className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#8852F7]/10 transition-colors duration-300 group-hover:border-[#8852F7]/40 sm:size-14"
          aria-hidden={item.logoSrc ? undefined : true}
        >
          {item.logoSrc ? (
            <Image
              src={item.logoSrc}
              alt={`${item.company} logo`}
              width={56}
              height={56}
              className="size-full object-cover"
            />
          ) : (
            <span className="font-rajdhani text-sm font-bold text-[#8852F7] sm:text-base">
              {initials}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <h4 className="font-rajdhani text-lg font-bold text-text sm:text-xl">
              {item.role}
            </h4>
            <time className="shrink-0 font-poppins text-xs font-medium text-[#ef9d7a] sm:text-sm">
              {item.period}
            </time>
          </div>

          <p className="font-poppins text-sm font-semibold text-text/90 sm:text-base">
            {item.company}
          </p>

          <p className="font-poppins text-xs text-muted sm:text-sm">
            {item.team}
            {item.employmentType ? (
              <span aria-label={`Employment type: ${item.employmentType}`}>
                {" "}
                · {item.employmentType}
              </span>
            ) : null}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h5 className="sr-only">Key responsibilities</h5>
          <ul className="space-y-2">
            {item.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex gap-2.5 font-poppins text-sm leading-relaxed text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-[#ef9d7a]"
                />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-2 font-rajdhani text-sm font-bold text-text">
            Technologies
          </h5>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {item.technologies.map((technology) => (
              <li key={technology}>
                <span className="inline-block rounded-full border border-[#8852F7]/30 bg-[#8852F7]/10 px-3 py-1 font-poppins text-xs font-medium text-text transition-colors duration-300 group-hover:border-[#8852F7]/50 sm:text-sm">
                  {technology}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
