import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { AboutText } from "./about-text";
import { FadeLeft } from "@/components/ui";

export function AboutWhyWebDev() {
  const { whyWebDev } = ABOUT_DATA;

  return (
    <FadeLeft className="h-full">

    <AboutBlock title={whyWebDev.title} headingId="about-why-web-dev-heading">
      <div className="space-y-4">
        {whyWebDev.paragraphs.map((paragraph) => (
          <AboutText key={paragraph}>{paragraph}</AboutText>
        ))}
      </div>
    </AboutBlock>
    </FadeLeft>
  );
}
