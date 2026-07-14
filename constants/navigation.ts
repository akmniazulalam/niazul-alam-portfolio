export const NAV_LINKS = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
] as const;

export const SECTION_IDS = [
  ...new Set(NAV_LINKS.map((link) => link.sectionId)),
] as const;

export const DEFAULT_SECTION_ID = SECTION_IDS[0];

/** Placeholder path — add resume.pdf to /public when available. */
export const RESUME_PATH = "/resume.pdf";

export const NAV_SCROLL_THRESHOLD = 10;
