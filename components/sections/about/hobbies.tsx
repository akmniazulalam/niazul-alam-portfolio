import type { AboutPlaceholderItem } from "@/data/about";
import { cn } from "@/utils/cn";

import { AboutFeatureCard } from "./about-feature-card";

type HobbiesProps = {
  items: readonly AboutPlaceholderItem[];
  className?: string;
};

export function Hobbies({ items, className }: HobbiesProps) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item.title} className="h-full">
          <AboutFeatureCard item={item} />
        </li>
      ))}
    </ul>
  );
}
