import { ABOUT_DATA } from "@/data/about";

import { AboutBlock } from "./about-block";
import { WorkingProcess } from "./working-process";

export function AboutWorkingProcess() {
  const { workingProcess } = ABOUT_DATA;

  return (
    <AboutBlock title={workingProcess.title} headingId="about-process-heading">
      <WorkingProcess steps={workingProcess.steps} />
    </AboutBlock>
  );
}
