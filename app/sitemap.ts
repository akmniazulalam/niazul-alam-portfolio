import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://niazul-alam-portfolio.vercel.app",
      lastModified: new Date(),
    },
  ];
}
