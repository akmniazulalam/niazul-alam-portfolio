import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { Hobbies } from "./hobbies";

export function AboutHobbies() {
  const { hobbies } = ABOUT_DATA;

  return (
    <AboutBlock title={hobbies.title} headingId="about-hobbies-heading">
      <Hobbies items={hobbies.items} />
    </AboutBlock>
  );
}
