import { ABOUT_DATA } from "@/data/about";
import { FadeRight } from "@/components/ui";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

export function AboutFutureGoals() {
  const { futureGoals } = ABOUT_DATA;
  const item = futureGoals.items[0];

  return (
    <FadeRight className="h-full">
      <AboutBlock
        title={futureGoals.title}
        headingId="about-goals-heading"
        className="border-[#FF014F]/20 bg-gradient-to-br from-[#FF014F]/5 to-transparent h-full flex flex-col"
      >
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex gap-4 items-start">
            <div
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#FF014F]/30 bg-[#FF014F]/10 text-xl"
            >
              🎯
            </div>
            <div>
              <h4 className="mb-2 font-rajdhani text-lg font-bold text-text sm:text-xl">
                {item.title}
              </h4>
              <AboutText className="text-text/80">{item.description}</AboutText>
            </div>
          </div>
        </div>
      </AboutBlock>
    </FadeRight>
  );
}
