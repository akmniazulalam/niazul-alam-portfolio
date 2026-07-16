import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";

export function AboutWhyWebDev() {
  const { whyWebDev } = ABOUT_DATA;

  return (
    <AboutBlock title={whyWebDev.title} headingId="about-why-web-dev-heading">
      <div className="space-y-4">
        {whyWebDev.paragraphs.map((paragraph) => (
          <AboutText key={paragraph}>{paragraph}</AboutText>
        ))}
      </div>
    </AboutBlock>
  );
}
