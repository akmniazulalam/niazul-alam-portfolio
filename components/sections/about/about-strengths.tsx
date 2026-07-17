import { ABOUT_DATA } from "@/data/about";
import { cn } from "@/utils/cn";
import { ScaleIn } from "@/components/ui";

import { AboutBlock } from "./about-block";
import { AboutFeatureCard } from "./about-feature-card";

export function AboutStrengths() {
  const { strengths } = ABOUT_DATA;

  return (
    <AboutBlock
      title={strengths.title}
      headingId="about-strengths-heading"
      variant="ghost"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {strengths.items.map((item, index) => (
          <li
            key={item.title}
            className={cn(
              "h-full",
              index === strengths.items.length - 1 ? "sm:col-span-2" : "",
            )}
          >
            <ScaleIn className="h-full">
              <AboutFeatureCard item={item} index={index} />
            </ScaleIn>
          </li>
        ))}
      </ul>
    </AboutBlock>
  );
}
