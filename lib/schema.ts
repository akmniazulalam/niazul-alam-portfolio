import { SITE_CONFIG } from "@/constants/site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: SITE_CONFIG.name,

  url: SITE_CONFIG.url,

  image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,

  jobTitle: "MERN Stack Developer",

  description: SITE_CONFIG.description,

  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
  ],
};