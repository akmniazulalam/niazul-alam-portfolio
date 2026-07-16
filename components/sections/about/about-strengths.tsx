import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutFeatureCard } from "./about-feature-card";

export function AboutStrengths() {
  const { strengths } = ABOUT_DATA;

  return (
    <AboutBlock title={strengths.title} headingId="about-strengths-heading">
      <ul className="grid gap-4 sm:grid-cols-2">
        {strengths.items.map((item, index) => (
          <li key={item.title}>
            <AboutFeatureCard item={item} index={index} />
          </li>
        ))}
      </ul>
    </AboutBlock>
  );
}
