import type { AboutProcessStep } from "@/data/about";
import { cn } from "@/utils/cn";

import { AboutText } from "./about-text";

type WorkingProcessProps = {
  steps: readonly AboutProcessStep[];
  className?: string;
};

type WorkingProcessCardProps = {
  step: AboutProcessStep;
  index: number;
};

function WorkingProcessCard({ step, index }: WorkingProcessCardProps) {
  const headingId = `working-process-${step.title.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <article
      tabIndex={0}
      aria-labelledby={headingId}
      className={cn(
        "group h-full rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 sm:p-5",
        "hover:-translate-y-1 hover:border-[#8852F7]/40 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#8852F7]/10",
        "focus-visible:-translate-y-1 focus-visible:border-[#8852F7]/40 focus-visible:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF014F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0909]",
      )}
    >
      <div
        aria-hidden="true"
        className="mb-4 flex size-11 items-center justify-center rounded-xl border border-[#8852F7]/30 bg-[#8852F7]/10 transition-colors duration-300 group-hover:border-[#ef9d7a]/50 group-focus-visible:border-[#ef9d7a]/50"
      >
        <span className="font-rajdhani text-sm font-bold text-[#ef9d7a]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h4
        id={headingId}
        className="mb-2 font-rajdhani text-lg font-bold text-text sm:text-xl"
      >
        {step.title}
      </h4>
      <AboutText>{step.description}</AboutText>
    </article>
  );
}

export function WorkingProcess({ steps, className }: WorkingProcessProps) {
  return (
    <ol className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="h-full">
          <WorkingProcessCard step={step} index={index} />
        </li>
      ))}
    </ol>
  );
}
