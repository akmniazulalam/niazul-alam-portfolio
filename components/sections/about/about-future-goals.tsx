import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

export function AboutFutureGoals() {
  const { futureGoals } = ABOUT_DATA;

  return (
    <AboutBlock title={futureGoals.title} headingId="about-goals-heading">
      <ul className="space-y-4">
        {futureGoals.items.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5"
          >
            <h4 className="mb-2 font-rajdhani text-base font-bold text-text sm:text-lg">
              {item.title}
            </h4>
            <AboutText>{item.description}</AboutText>
          </li>
        ))}
      </ul>
    </AboutBlock>
  );
}
