import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutFeatureCard } from "./about-feature-card";

export function AboutFutureGoals() {
  const { futureGoals } = ABOUT_DATA;

  return (
    <AboutBlock
      title={futureGoals.title}
      headingId="about-goals-heading"
      className="lg:self-start"
    >
      <ul className="space-y-4">
        {futureGoals.items.map((item) => (
          <li key={item.title}>
            <AboutFeatureCard item={item} variant="highlight" className="sm:p-6" />
          </li>
        ))}
      </ul>
    </AboutBlock>
  );
}
