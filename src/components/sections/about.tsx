import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { config } from "@/data/config";
import { TypographyP } from "../ui/typography";

const AboutSection = () => {
  return (
    <SectionWrapper
      id="about"
      className="flex items-center justify-center min-h-screen w-full px-6"
    >
      <div className="max-w-2xl text-center">
        <SectionHeader
          id="about-header"
          title="About Me"
          desc="Who I am."
          className="mb-8 mt-0 w-full"
        />
        <TypographyP className="text-lg text-muted-foreground font-mono leading-relaxed whitespace-pre-wrap">
          {config.description.long}
        </TypographyP>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;


