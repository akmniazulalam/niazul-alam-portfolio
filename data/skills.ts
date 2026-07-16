export type SkillItem = {
  name: string;
  description: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: SkillItem[];
};

export const SKILLS_DATA = {
  section: {
    eyebrow: "What I Work With",
    title: "Skills",
    description: "Placeholder for the Skills section overview.",
  },
  introduction: {
    title: "Overview",
    paragraphs: [
      "Placeholder for skills introduction and technical focus.",
      "Placeholder for how these skills are applied in projects.",
    ],
  },
  categories: [
    {
      id: "frontend",
      title: "Frontend",
      items: [
        { name: "Placeholder Skill", description: "Placeholder frontend skill detail." },
        { name: "Placeholder Skill", description: "Placeholder frontend skill detail." },
        { name: "Placeholder Skill", description: "Placeholder frontend skill detail." },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      items: [
        { name: "Placeholder Skill", description: "Placeholder backend skill detail." },
        { name: "Placeholder Skill", description: "Placeholder backend skill detail." },
        { name: "Placeholder Skill", description: "Placeholder backend skill detail." },
      ],
    },
    {
      id: "database",
      title: "Database",
      items: [
        { name: "Placeholder Skill", description: "Placeholder database skill detail." },
        { name: "Placeholder Skill", description: "Placeholder database skill detail." },
      ],
    },
    {
      id: "tools",
      title: "Tools & Workflow",
      items: [
        { name: "Placeholder Tool", description: "Placeholder tool detail." },
        { name: "Placeholder Tool", description: "Placeholder tool detail." },
        { name: "Placeholder Tool", description: "Placeholder tool detail." },
      ],
    },
  ] satisfies SkillCategory[],
  softSkills: {
    title: "Soft Skills",
    items: [
      { name: "Placeholder Soft Skill", description: "Placeholder soft skill detail." },
      { name: "Placeholder Soft Skill", description: "Placeholder soft skill detail." },
      { name: "Placeholder Soft Skill", description: "Placeholder soft skill detail." },
    ] satisfies SkillItem[],
  },
  currentlyLearning: {
    title: "Currently Learning",
    items: [
      { name: "Placeholder Topic", description: "Placeholder learning focus detail." },
      { name: "Placeholder Topic", description: "Placeholder learning focus detail." },
    ] satisfies SkillItem[],
  },
} as const;
