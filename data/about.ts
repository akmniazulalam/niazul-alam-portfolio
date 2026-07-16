export type AboutPlaceholderItem = {
  title: string;
  description: string;
};

export type AboutExperienceItem = {
  role: string;
  company: string;
  period: string;
  team: string;
  employmentType?: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  logoSrc?: string;
};

export type AboutEducationItem = {
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

export type AboutProcessStep = {
  title: string;
  description: string;
};

export const ABOUT_DATA = {
  section: {
    eyebrow: "Get To Know Me",
    title: "About",
    description:
      "MERN Stack Developer with a focus on building clean, modern, and user-centered web applications.",
  },
  introduction: {
    title: "Introduction",
    paragraphs: [
      "I'm Niazul Alam, a MERN Stack Developer passionate about building modern web applications that are practical, responsive, and easy to use. I enjoy turning ideas into products that feel polished on the frontend and reliable on the backend.",
      "My journey into web development started with self-learning and has grown through structured training, consistent practice, and real project work. I stay curious, keep building, and focus on improving with every project I take on.",
      "Today, my work centers on the MERN stack — React, Node.js, Express.js, and MongoDB — with a strong interest in creating interfaces that balance performance, clarity, and a smooth user experience.",
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Frontend Developer",
        company: "Softvence Agency",
        team: "CMS & Shopify Team",
        period: "September 2025 – December 2025",
        employmentType: "Internship",
        responsibilities: [
          "Developed and maintained frontend interfaces for CMS and Shopify-based client projects.",
          "Implemented responsive layouts and translated requirements into clean, functional UI.",
          "Collaborated with the team on updates, refinements, and day-to-day project workflows.",
          "Supported consistent delivery across assigned client project workflows.",
        ],
        technologies: [
          "CMS",
          "Shopify",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        logoSrc: "/softvence_agency.webp",
      },
    ] satisfies AboutExperienceItem[],
  },
  education: {
    title: "Education Timeline",
    items: [
      {
        degree: "B.Sc. Engineering in CSE",
        institution: "The Institution of Engineers, Bangladesh",
        period: "2025 – Present",
      },
      {
        degree: "Diploma in Computer Science & Engineering",
        institution: "Munshiganj Polytechnic Institute",
        period: "2020 – 2024",
      },
      {
        degree: "SSC",
        institution: "City Corporation Adarsha High School",
        period: "2020",
      },
    ] satisfies AboutEducationItem[],
  },
  whyWebDev: {
    title: "Why I Love Web Development",
    paragraphs: [
      "Web development gives me the chance to combine logic and creativity in one place. I enjoy solving problems, structuring clean code, and seeing an idea become something people can actually use in the browser.",
      "What keeps me motivated is the impact — building interfaces and applications that feel smooth, thoughtful, and useful. Every project is a chance to learn, improve, and create something meaningful on the web.",
    ],
  },
  workingProcess: {
    title: "Working Process",
    steps: [
      {
        title: "Understand the Problem First",
        description:
          "I start by breaking down the task, understanding the goal, and identifying what the user or project actually needs before writing code.",
      },
      {
        title: "Research & Think Independently",
        description:
          "I explore documentation, study similar solutions, and work through problems step by step. I try to understand the why behind an approach, not just the implementation.",
      },
      {
        title: "Build with Responsibility",
        description:
          "I use AI tools as a support resource for learning, debugging, and productivity — not as a replacement for understanding. My goal is always to write code I can explain, maintain, and improve.",
      },
    ] satisfies AboutProcessStep[],
  },
  strengths: {
    title: "Strengths",
    items: [
      {
        title: "Patience",
        description:
          "I stay calm with complex problems and give myself the time needed to understand issues properly before moving forward.",
      },
      {
        title: "Consistency",
        description:
          "I believe steady, regular effort leads to real progress. I show up, practice often, and keep improving through routine work.",
      },
      {
        title: "Dedication",
        description:
          "When I commit to learning or building something, I follow through with focus and discipline until the work is done well.",
      },
      {
        title: "Attention to Detail",
        description:
          "I care about clean UI, organized code, and the small details that make an application feel more polished and professional.",
      },
      {
        title: "Continuous Learning",
        description:
          "I actively keep learning through projects, research, and new tools because web development is always evolving.",
      },
    ] satisfies AboutPlaceholderItem[],
  },
  futureGoals: {
    title: "Future Goals",
    items: [
      {
        title: "Build Impactful Products",
        description:
          "I want to create digital products that solve real problems and deliver genuine value to users, not just features for the sake of features.",
      },
      {
        title: "Grow as a Developer & Builder",
        description:
          "Alongside strengthening my MERN stack skills, I aim to develop an entrepreneurial mindset — learning how to plan, build, and ship products that can make a meaningful impact.",
      },
    ] satisfies AboutPlaceholderItem[],
  },
  hobbies: {
    title: "Hobbies",
    items: [
      {
        title: "Music",
        description:
          "Listening to music is one of my favorite ways to relax and recharge outside of coding.",
      },
      {
        title: "Singing",
        description:
          "I enjoy singing as a creative outlet and a way to unwind from daily work.",
      },
      {
        title: "Watching Movies",
        description:
          "I appreciate good storytelling through films and often watch movies to relax and get inspired.",
      },
    ] satisfies AboutPlaceholderItem[],
  },
  resumeCta: {
    title: "Resume",
    description:
      "Want a quick overview of my background, skills, and experience? Download my resume for a concise summary.",
    buttonLabel: "Download Resume",
  },
} as const;
