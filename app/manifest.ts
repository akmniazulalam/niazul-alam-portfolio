import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Niazul Alam Portfolio",
    short_name: "Niazul",
    description:
      "Portfolio of Niazul Alam, MERN Stack Developer specializing in Next.js, React, Node.js, Express.js, and MongoDB.",

    start_url: "/",

    display: "standalone",

    background_color: "#0B1120",

    theme_color: "#8852F7",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
