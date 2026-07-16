import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

export function AboutHobbies() {
  const { hobbies } = ABOUT_DATA;

  return (
    <AboutBlock title={hobbies.title} headingId="about-hobbies-heading">
      <ul className="flex flex-wrap gap-3">
        {hobbies.items.map((item) => (
          <li
            key={item.title}
            className="min-w-40 flex-1 rounded-xl border border-white/10 bg-white/2 p-4"
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
