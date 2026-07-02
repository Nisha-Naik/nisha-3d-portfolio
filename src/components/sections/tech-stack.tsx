import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const TechStackSection = () => {
  return (
    <SectionWrapper id="skills" className="w-full h-screen md:h-[150dvh] pointer-events-none relative z-10">
      <SectionHeader id="skills-header" title="Tech Stack" desc="Technologies I work with" />
    </SectionWrapper>
  );
};

export default TechStackSection;
