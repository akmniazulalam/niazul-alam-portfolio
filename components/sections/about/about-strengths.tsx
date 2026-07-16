import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

export function AboutStrengths() {
  const { strengths } = ABOUT_DATA;

  return (
    <AboutBlock title={strengths.title} headingId="about-strengths-heading">
      <ul className="grid gap-4 sm:grid-cols-2">
        {strengths.items.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-white/10 bg-white/2 p-4"
          >
            <h4 className="mb-2 font-rajdhani text-base font-bold text-text">
              {item.title}
            </h4>
            <AboutText>{item.description}</AboutText>
          </li>
        ))}
      </ul>
    </AboutBlock>
  );
}
