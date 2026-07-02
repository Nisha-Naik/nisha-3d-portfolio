import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Hackathon Achievements",
    description: [
      "Top #6 Winner – EKAIVA National Hackathon 2025 (130+ teams)",
      "Top 5 Finalist – CUK-CS Hackathon 2026 (439+ teams)",
      "Best GitHub Repository Award – Build for Bengaluru Hackathon (National Level, 100+ teams)"
    ],
    tags: ["Hackathon", "Competition"]
  },
  {
    id: 2,
    title: "Coding & Problem Solving",
    description: [
      "Solved 180+ LeetCode problems (Easy: 60, Medium: 100, Hard: 20)",
      "Earned LeetCode 100 Days Badge (Jan 2025)",
      "2-star CodeChef with 170+ DSA problems solved"
    ],
    tags: ["DSA", "LeetCode", "CodeChef"]
  },
  {
    id: 3,
    title: "Community & Leadership",
    description: [
      "Organized XYPHERIA National Level 24 Hour Hackathon as Organizer, Core Team Member, and Volunteer Lead",
      "Hosted XYPHERIA National Level 24 Hour Hackathon as MC, showcasing leadership and communication skills",
      "Conducted cybersecurity workshops for 120+ college students",
      "Facilitated digital safety sessions for 150+ school students across 2 institutions (Mar 2025)"
    ],
    tags: ["Teaching", "Cybersecurity", "Event Management", "Leadership"]
  }
];

const AchievementsSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Achievements"
          desc="My accomplishments & milestones."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          {/* Connector Line - simplified to a subtle border */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

          {ACHIEVEMENTS.map((achievement, index) => (
            <div key={achievement.id} className="relative">
              <AchievementCard achievement={achievement} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: (typeof ACHIEVEMENTS)[0];
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
                {achievement.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {achievement.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {achievement.tags.map((tag) => (
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

export default AchievementsSection;
