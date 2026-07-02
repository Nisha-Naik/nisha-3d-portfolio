import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "" && live !== "NONE" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Live Demo
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "" && repo !== "NONE" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            View Code
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "vatsalya",
    category: "AI / Healthcare / Full Stack",
    title: "VATSALYA – Smart Eldercare Platform",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://vatsalya-eldercare.vercel.app/",
    github: "https://github.com/Nisha-Naik/VATSALYA-Smart-Eldercare-System",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            VATSALYA – AI-Powered Smart Eldercare Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            A production-ready AI eldercare platform featuring real-time multi-channel
            SOS system, caregiver authentication, parent-device linking, and AI-driven
            health monitoring. Built with a premium glassmorphic UI for the NIRMITH Hackathon.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Multi-Channel SOS System</TypographyH3>
          <p className="font-mono mb-2">
            Mission-critical SOS system with Socket.io real-time alerts, Twilio SMS
            notifications, and email alerts with live GPS tracking for immediate
            emergency response.
          </p>
          <TypographyH3 className="my-4 mt-8">AI Health Monitoring</TypographyH3>
          <p className="font-mono mb-2">
            AI-driven anomaly detection for elder health metrics, providing
            caregivers with real-time insights and predictive alerts to enable
            proactive care.
          </p>
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Secure caregiver-only authentication with unique connect codes
            </li>
            <li className="font-mono">
              Premium glassmorphic UI with real-time dashboard
            </li>
            <li className="font-mono">
              Parent-device linking for seamless multi-device sync
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "trustlens-ai",
    category: "AI / Bias Detection",
    title: "TrustLens AI",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.express,
      ],
    },
    live: "https://trustlens-ai-chi.vercel.app/",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            TrustLens AI — Dataset Bias Detection Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            An AI-powered bias detection system that computes 8+ fairness
            metrics including demographic parity and equalized odds, with LLM-generated
            explainable audit reports. Built for the CUK-CS Hackathon 2026 where
            it achieved Top 5 Finalist status among 439+ teams.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Fairness Metrics Engine</TypographyH3>
          <p className="font-mono mb-2">
            Computes 8+ fairness metrics including demographic parity,
            equalized odds, and disparate impact analysis to detect hidden
            biases in datasets.
          </p>
          <TypographyH3 className="my-4 mt-8">LLM-Powered Reports</TypographyH3>
          <p className="font-mono mb-2">
            Generates explainable, human-readable audit reports using LLM
            integration, reducing manual bias review time by 60% for
            non-technical users.
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Top 5 Finalist at CUK-CS Hackathon 2026 (439+ teams)
            </li>
            <li className="font-mono">
              Reduced manual bias review time by 60% for non-technical users
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "smart-crop-detector",
    category: "AI / Agriculture",
    title: "Smart Crop Disease Detector",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "",
    github: "https://github.com/Nisha-Naik/Smart-Crop-Disease-Detector",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Smart Crop Disease Detector
          </TypographyP>
          <TypographyP className="font-mono ">
            A CNN-based crop disease detection system built for the IGNITRON
            Hackathon 2025. Achieves 92% classification accuracy across 15
            disease categories with OpenCV preprocessing that cuts inference
            latency by 40%.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">CNN Classification</TypographyH3>
          <p className="font-mono mb-2">
            Built a Convolutional Neural Network model achieving 92%
            classification accuracy across 15 disease categories, with OpenCV
            preprocessing for optimized image analysis.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Early Warning System
          </TypographyH3>
          <p className="font-mono mb-2">
            Designed an early-warning decision-support interface to assist 200+
            farmers with real-time crop disease alerts, enabling faster response
            to outbreaks.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Python, CNN, OpenCV</li>
            <li className="font-mono">
              40% reduction in inference latency through preprocessing pipeline
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "crypto-wallet",
    category: "Web3 / Fintech",
    title: "Crypto Wallet for Newbies",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
      ],
    },
    live: "",
    github: "https://github.com/Nisha-Naik/Crypto-Wallet-for-Newbies",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Crypto Wallet for Newbies
          </TypographyP>
          <TypographyP className="font-mono ">
            A secure Ethereum wallet designed for Web3 newcomers, featuring JWT
            authentication, AES-encrypted wallet creation, and real-time
            blockchain transactions supporting 5+ ERC-20 tokens. Top 6 Finalist
            at EKAIVA National Hackathon 2025 (130+ teams).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Secure Wallet Management
          </TypographyH3>
          <p className="font-mono mb-2">
            JWT authentication with AES-encrypted wallet creation ensures
            top-tier security while supporting real-time blockchain transactions
            for 5+ ERC-20 tokens.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Simplified UX
          </TypographyH3>
          <p className="font-mono mb-2">
            Streamlined the onboarding flow to reduce steps by 50%, making Web3
            accessible to non-technical users with an intuitive, guided
            experience.
          </p>
          <TypographyH3 className="my-4 mt-8">Achievement</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Top 6 Finalist at EKAIVA National Hackathon 2025 (130+ teams)
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "travel-management",
    category: "Travel",
    title: "Travel Management System",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "",
    github: "https://github.com/Nisha-Naik/TravelEase_Travel-Management-System",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A responsive travel management application with real-time location
            search and turn-by-turn navigation via Google Maps API, serving 100+
            test users. Features Firebase Auth and Firestore for secure,
            real-time cross-device data synchronization.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Real-Time Navigation
          </TypographyH3>
          <p className="font-mono mb-2">
            Integrated Google Maps API for real-time location search and
            turn-by-turn navigation, providing a seamless travel planning
            experience.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Firebase Integration
          </TypographyH3>
          <p className="font-mono mb-2">
            Implemented Firebase Auth and Firestore for secure user
            authentication and real-time cross-device data synchronization,
            ensuring data consistency across all platforms.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Next.js, Google Maps API, Firebase</li>
            <li className="font-mono">Serving 100+ test users</li>
          </ul>
        </div>
      );
    },
  },

  {
    id: "agrovision",
    category: "AI / Agriculture / Full Stack",
    title: "AgroVision – AI Smart Agriculture Platform",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://crop-disease-seven.vercel.app/",
    github: "https://github.com/Nisha-Naik/Crop-Disease-Detector",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AgroVision – AI Smart Agriculture Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            Built a full-stack AI-powered platform for real-time crop disease detection using CNN with Gemini Vision fallback.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">AI Integration</TypographyH3>
          <p className="font-mono mb-2">
            Integrated AI chatbot (Google Gemini) for farming guidance including pesticide, fertilizer, and crop advice. Designed smart crop recommendation and profit analysis system for farmers.
          </p>
          <TypographyH3 className="my-4 mt-8">Weather-Based Alerts</TypographyH3>
          <p className="font-mono mb-2">
            Implemented weather-based disease risk prediction using OpenWeather API with real-time alerts. Developed government scheme explorer and community innovation platform for farmers.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">React, Node.js, Express, MongoDB, TensorFlow, Gemini AI, OpenWeather API</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
