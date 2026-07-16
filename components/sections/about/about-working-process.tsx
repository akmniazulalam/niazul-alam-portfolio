import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

export function AboutWorkingProcess() {
  const { workingProcess } = ABOUT_DATA;

  return (
    <AboutBlock title={workingProcess.title} headingId="about-process-heading">
      <ol className="space-y-4">
        {workingProcess.steps.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5"
          >
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#8852F7]/20 font-rajdhani text-sm font-bold text-[#8852F7]"
            >
              {index + 1}
            </span>
            <div className="space-y-2">
              <h4 className="font-rajdhani text-base font-bold text-text sm:text-lg">
                {step.title}
              </h4>
              <AboutText>{step.description}</AboutText>
            </div>
          </li>
        ))}
      </ol>
    </AboutBlock>
  );
}
