const config = {
  title: "Nisha Naik | Backend & Full-Stack Developer",
  description: {
    long: `Backend & Full-Stack Developer passionate about building scalable, high-performance applications and solving real-world problems.

I specialize in REST APIs, cloud deployments, and AI-powered systems using React, Node.js, and machine learning.

I have deployed production applications, built real-time systems, and achieved top rankings in national-level hackathons.

I aim to create impactful, user-focused solutions that combine technology with real-world needs.`,
    short:
      "Discover the portfolio of Nisha Naik, a full-stack developer creating innovative web apps and AI-powered solutions.",
  },
  keywords: [
    "Nisha Naik",
    "portfolio",
    "full-stack developer",
    "backend developer",
    "web development",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "Machine Learning",
    "AWS",
    "REST APIs",
    "TrustLens AI",
    "hackathon finalist",
  ],
  author: "Nisha Naik",
  email: "nishanaik471@gmail.com",
  site: "https://nishanaik.dev",

  // for github stars button
  githubUsername: "nishanaik",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://leetcode.com/nishanaik",
    linkedin: "https://www.linkedin.com/in/nisha-naik04/",
    phone: "tel:+919632265604",
    facebook: "https://leetcode.com/nishanaik",
    github: "https://github.com/Nisha-Naik",
  },
};
export { config };
