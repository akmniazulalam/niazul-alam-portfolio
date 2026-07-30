import type { Metadata } from "next";

import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  applicationName: SITE_CONFIG.name,

  keywords: [
    "Niazul Alam",
    "MERN Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Portfolio",
  ],

  authors: [
    {
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  ],

  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,

    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Niazul Alam - MERN Stack Developer Portfolio",
      },
    ],

    locale: SITE_CONFIG.locale,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },

  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},
};