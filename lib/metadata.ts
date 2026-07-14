import type { Metadata } from "next";

import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};
