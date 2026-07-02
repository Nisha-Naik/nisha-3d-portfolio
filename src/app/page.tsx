"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import ProjectsSection from "@/components/sections/projects";
import AchievementsSection from "@/components/sections/achievements";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import TechStackSection from "@/components/sections/tech-stack";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
