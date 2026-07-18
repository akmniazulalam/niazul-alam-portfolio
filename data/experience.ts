export type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  location: string;
  employmentType: string;
  technologies: readonly string[];
  responsibilities: readonly string[];
};

export const EXPERIENCE_DATA = {
  section: {
    eyebrow: "My Journey",
    title: "Professional Experience",
    description:
      "A summary of my professional path, demonstrating my experience with modern front-end platforms, CMS integration, and responsive web design.",
  },
  experience: {
    company: "Softvence Agency",
    position: "Front-End Developer (CMS & Shopify)",
    duration: "September 2025 – December 2025",
    location: "Dhaka, Bangladesh",
    employmentType: "Full-time",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Shopify",
      "Liquid",
      "Git",
      "GitHub",
    ],
    responsibilities: [
      "Developed responsive CMS and Shopify pages.",
      "Customized Shopify themes.",
      "Built reusable UI components.",
      "Fixed frontend bugs and improved UI consistency.",
      "Collaborated with the development team.",
      "Optimized layouts for multiple screen sizes.",
    ],
  } satisfies ExperienceItem,
} as const;
