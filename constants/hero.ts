import { SITE_CONFIG } from "@/constants/site";

export const HERO_CONTENT = {
  greeting: "Hello, I'm",
  name: SITE_CONFIG.name,
  role: "MERN Stack Developer",
  intro:
    "Passionate MERN Stack Developer building scalable, high-performance web applications. I specialize in crafting pixel-perfect interfaces and robust full-stack solutions with React, Node.js, and MongoDB.",
} as const;

export const HERO_PROJECTS_HREF = "/#projects";
