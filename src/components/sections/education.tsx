import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EDUCATION = [
  {
    id: 1,
    title: "B.E. in Computer Science and Engineering",
    company: "Alva’s Institute of Engineering & Technology, Moodbidri",
    startDate: "Aug 2023",
    endDate: "May 2027",
    description: [
      "CGPA: 8.9 / 10"
    ],
    tags: ["Computer Science", "Engineering"]
  },
  {
    id: 2,
    title: "Pre-University Course (PUC)",
    company: "Gokhale Centenary PU College, Ankola (Karwar)",
    startDate: "Aug 2021",
    endDate: "Jul 2023",
    description: [
      "Stream: PCMB",
      "Percentage: 84.5%"
    ],
    tags: []
  },
  {
    id: 3,
    title: "Secondary School Leaving Certificate (SSLC)",
    company: "Peoples Multi-Purpose High School, Ankola (Karwar)",
    startDate: "Aug 2018",
    endDate: "Jul 2021",
    description: [
      "Percentage: 93.73%"
    ],
    tags: []
  }
];

const EducationSection = () => {
  return (
    <SectionWrapper
      id="education"
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="education-header"
          title="Education"
          desc="My academic background."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className="relative">
              <EducationCard education={edu} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: (typeof EDUCATION)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {education.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                {education.company}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {education.startDate} - {education.endDate}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {education.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {education.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationSection;
