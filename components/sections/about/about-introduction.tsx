import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

export function AboutIntroduction() {
  const { introduction } = ABOUT_DATA;

  return (
    <AboutBlock title={introduction.title} headingId="about-introduction-heading">
      <div className="space-y-4">
        {introduction.paragraphs.map((paragraph) => (
          <AboutText key={paragraph}>{paragraph}</AboutText>
        ))}
      </div>
    </AboutBlock>
  );
}
