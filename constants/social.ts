export const SOCIAL_LINKS = [
  { id: "github", label: "GitHub" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "email", label: "Email" },
] as const;

export type SocialLinkId = (typeof SOCIAL_LINKS)[number]["id"];
