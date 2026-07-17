import type { AboutPlaceholderItem } from "@/data/about";
import { cn } from "@/utils/cn";
import { StaggerContainer, StaggerItem } from "@/components/ui";

import { AboutFeatureCard } from "./about-feature-card";

type HobbiesProps = {
  items: readonly AboutPlaceholderItem[];
  className?: string;
};

export function Hobbies({ items, className }: HobbiesProps) {
  return (
    <StaggerContainer>
      <ul className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {items.map((item) => (
          <li key={item.title} className="h-full">
            <StaggerItem className="h-full">
              <AboutFeatureCard item={item} />
            </StaggerItem>
          </li>
        ))}
      </ul>
    </StaggerContainer>
  );
}
