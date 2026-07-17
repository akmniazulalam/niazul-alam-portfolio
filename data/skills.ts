// ── Types ──────────────────────────────────────────────────────────────────

export type SkillItem = {
  name: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: readonly SkillItem[];
};

export type WorkingStyleItem = {
  label: string;
};

// ── Data ───────────────────────────────────────────────────────────────────

export const SKILLS_DATA = {
  section: {
    eyebrow: "What I Work With",
    title: "Skills & Technologies",
    description:
      "A curated overview of the technologies, tools, and practices I use to build modern, production-ready web applications.",
  },

  categories: [
    {
      id: "frontend",
      title: "Frontend",
      items: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "jQuery" },
        { name: "React" },
        { name: "Next.js" },
      ],
    },
    {
      id: "styling",
      title: "Styling",
      items: [
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "shadcn/ui" },
        { name: "DaisyUI" },
      ],
    },
    {
      id: "state-management",
      title: "State Management",
      items: [{ name: "Redux Toolkit" }, { name: "Zustand" }],
    },
    {
      id: "backend",
      title: "Backend",
      items: [{ name: "Node.js" }, { name: "Express.js" }],
    },
    {
      id: "database",
      title: "Database",
      items: [{ name: "MongoDB" }, { name: "Mongoose" }],
    },
    {
      id: "authentication",
      title: "Authentication",
      items: [{ name: "JWT" }, { name: "Express Session" }],
    },
    {
      id: "deployment",
      title: "Deployment",
      items: [{ name: "Vercel" }, { name: "Render" }],
    },
    {
      id: "tools",
      title: "Tools",
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Postman" },
        { name: "Figma" },
        { name: "Cursor" },
        { name: "Codex" },
        { name: "AntiGravity" },
      ],
    },
    {
      id: "other",
      title: "Other Skills",
      items: [
        { name: "REST API Integration" },
        { name: "Responsive Web Design" },
        { name: "Basic SEO" },
      ],
    },
  ] satisfies SkillCategory[],

  philosophy: {
    title: "Development Philosophy",
    quote:
      "I enjoy building clean, responsive, and user-friendly web applications using modern technologies. Before seeking help, I prefer exploring solutions independently, then leverage AI tools to validate ideas, improve implementation quality, and continuously expand my knowledge. I focus on writing reusable, maintainable, and production-ready code while always striving to improve my development skills.",
  },

  workingStyle: {
    title: "Working Style",
    items: [
      { label: "Mobile-First Responsive Development" },
      { label: "Reusable Component Architecture" },
      { label: "Clean & Maintainable Code" },
      { label: "Accessibility-Focused UI" },
      { label: "Performance-Conscious Development" },
      { label: "Problem-Solving First Approach" },
      { label: "AI-Assisted Continuous Learning" },
      { label: "Production-Ready Mindset" },
    ] satisfies WorkingStyleItem[],
  },

  favoriteStack: {
    title: "Favorite Stack",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
  },
} as const;
