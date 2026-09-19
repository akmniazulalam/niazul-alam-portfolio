export type ProjectLink = {
  readonly label: string;
  readonly href: string;
  readonly icon?: string;
  readonly isPrivate?: boolean;
};

export type FeaturedProject = {
  readonly title: string;
  readonly subtitle: string;
  readonly image: string;
  readonly description: string;
  readonly techStack: readonly string[];
  readonly features: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly gallery: readonly string[];
  readonly galleryAltTexts?: readonly string[];
};

export type SecondaryProject = {
  readonly title: string;
  readonly badge?: string;
  readonly image: string;
  readonly description: string;
  readonly techStack: readonly string[];
  readonly links: {
    readonly live: string;
    readonly github?: string;
    readonly isPrivate?: boolean;
  };
};

export type ProjectsSectionData = {
  readonly section: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
  };
  readonly featured: readonly FeaturedProject[];
  readonly secondary: readonly SecondaryProject[];
};

export const PROJECTS_DATA: ProjectsSectionData = {
  section: {
    eyebrow: "Featured Projects",
    title: "Innovative Solutions Built with Modern Tech",
    description:
      "A collection of professional projects showcasing modern frontend development, full-stack architecture, and real client work.",
  },
  featured: [
    {
      title: "MERN E-Commerce Platform",
      subtitle: "Complete Full-Stack E-Commerce Solution",
      image: "/projects/admin-dashboard/cover/orebi-home.png",
      description:
        "A comprehensive, production-ready e-commerce ecosystem consisting of a highly responsive Customer Storefront (Orebi), a feature-rich Admin Dashboard, and a secure Express backend. This platform models end-to-end business operations rather than isolated CRUD pages, featuring advanced state synchronization, secure transaction flows, and dynamic catalog rendering.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "Shadcn/UI",
        "Zustand",
        "Context API",
        "JWT",
        "Express Session",
        "Multer",
        "Cloudinary",
        "Axios",
        "REST API",
      ],
      features: [
        "Product Management",
        "Category Management",
        "Product Variants",
        "Order Management",
        "Coupon System",
        "User Authentication",
        "Dark Mode",
        "Responsive Dashboard",
        "REST API Integration",
        "Cloudinary Upload",
      ],
      links: [
        {
          label: "Customer Store",
          href: "https://orebi-sigma.vercel.app/",
          icon: "external",
        },
        {
          label: "Admin Dashboard",
          href: "https://mern-ecommerce-sigma-nine.vercel.app/",
          icon: "external",
        },
        {
          label: "GitHub",
          href: "https://github.com/akmniazulalam/mern-ecommerce",
          icon: "github",
        },
      ],
      gallery: [
        "/projects/admin-dashboard/gallery/dashboard-home (1).png",
        "/projects/admin-dashboard/gallery/dashboard-home (2).png",
        "/projects/admin-dashboard/gallery/product-list.png",
        "/projects/admin-dashboard/gallery/orders.png",
        "/projects/admin-dashboard/gallery/add-product (1).png",
        "/projects/admin-dashboard/gallery/add-product (2).png",
      ],
      galleryAltTexts: [
        "Orebi e-commerce admin dashboard overview",
        "Orebi admin analytics and revenue statistics",
        "Orebi admin product management catalog",
        "Orebi admin order processing and status management",
        "Orebi product creation form with image upload",
        "Orebi product variant and inventory configuration",
      ],
    },
    {
      title: "SupportAI",
      subtitle: "AI-Powered Customer Support SaaS",
      image: "/projects/saas/dashboard_SupportAI.png",
      description:
        "A production-grade, multi-tenant AI customer support SaaS that enables businesses to create and configure AI support agents, ground them with custom knowledge, manage customer conversations, and deploy customer-facing support through a public chat experience and embeddable widget.",
      techStack: [
        "Next.js",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "OpenAI",
        "Docker",
        "Tailwind CSS",
      ],
      features: [
        "Multi-Tenant Workspaces",
        "AI Support Agents",
        "Knowledge Base & RAG",
        "Private Agent Testing",
        "Conversation Management",
        "Public Customer Chat",
        "Embeddable Support Widget",
        "JWT Authentication",
        "Admin Dashboard",
        "Usage & Subscription Management",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/akmniazulalam/support-ai",
          icon: "github",
        },
      ],
      gallery: [
        "/projects/saas/dashboard_SupportAI.png",
        "/projects/saas/agent_details_SupportAI.png",
        "/projects/saas/knowledge_base_SupportAI.png",
        "/projects/saas/conversations_SupportAI.png",
        "/projects/saas/customer_chat_SupportAI.png",
        "/projects/saas/admin_dashboard_SupportAI.png",
      ],
      galleryAltTexts: [
        "SupportAI dashboard showing workspace metrics and agent management overview",
        "SupportAI agent configuration and prompt customization interface",
        "SupportAI knowledge base document management and RAG data sources",
        "SupportAI inbox showing live customer support conversations",
        "SupportAI public customer chat widget experience",
        "SupportAI system administration and workspace settings",
      ],
    },
  ],
  secondary: [
    {
      title: "Developer Portfolio",
      image: "/projects/portfolio/Niazul Alam MERN Stack Developer.png",
      description:
        "A modern developer portfolio built with Next.js 16, showcasing my skills, experience, projects, and contact information with premium UI, responsive layouts, accessibility, and smooth animations.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: {
        live: "https://niazul-alam-portfolio.vercel.app/",
        github: "https://github.com/akmniazulalam/niazul-alam-portfolio",
      },
    },
    {
      title: "GoTrip",
      image: "/projects/react-frontend/GoTrip.png",
      description:
        "A modern travel website built with Next.js featuring responsive layouts, reusable UI components, destination browsing, and an engaging user experience.",
      techStack: ["Next.js", "React", "Tailwind CSS"],
      links: {
        live: "https://go-trip-pi.vercel.app/",
        github: "https://github.com/akmniazulalam/GoTrip",
      },
    },
    {
      title: "Fitness Gear US",
      badge: "Client Project",
      image: "/projects/client-projects/Fitness Gear Us.png",
      description:
        "Developed for an Australian fitness brand during my time at Softvence Agency using Shopify. Focused on responsive storefront development, UI implementation, and production-ready client delivery.",
      techStack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
      links: {
        live: "https://www.fitnessgearus.com/",
        isPrivate: true,
      },
    },
  ],
} as const;
