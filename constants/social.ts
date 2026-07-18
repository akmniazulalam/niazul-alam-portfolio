export const SOCIAL_LINKS = [
  { id: "github", label: "GitHub", href: "https://www.github.com/akmniazulalam" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/akmniazulalam" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/akmniazulalam" },
  { id: "email", label: "Email", href: "mailto:niazulalam097@gmail.com" },
] as const;

export type SocialLinkId = (typeof SOCIAL_LINKS)[number]["id"];
