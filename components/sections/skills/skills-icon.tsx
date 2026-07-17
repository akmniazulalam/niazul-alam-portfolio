import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiDaisyui,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiCursor,
} from "react-icons/si";
import {
  TbHierarchy,
  TbLock,
  TbApi,
  TbDeviceLaptop,
  TbSearch,
} from "react-icons/tb";
import { VscVscode, VscSparkle, VscRobot } from "react-icons/vsc";

const iconMap: Record<string, IconType> = {
  "html5": SiHtml5,
  "css3": SiCss,
  "javascript (es6+)": SiJavascript,
  "typescript": SiTypescript,
  "jquery": SiJquery,
  "react": SiReact,
  "next.js": SiNextdotjs,
  "tailwind css": SiTailwindcss,
  "bootstrap": SiBootstrap,
  "shadcn/ui": SiShadcnui,
  "daisyui": SiDaisyui,
  "redux toolkit": SiRedux,
  "zustand": TbHierarchy,
  "node.js": SiNodedotjs,
  "express.js": SiExpress,
  "mongodb": SiMongodb,
  "mongoose": SiMongoose,
  "jwt": SiJsonwebtokens,
  "express session": TbLock,
  "vercel": SiVercel,
  "render": SiRender,
  "git": SiGit,
  "github": SiGithub,
  "vs code": VscVscode,
  "postman": SiPostman,
  "figma": SiFigma,
  "cursor": SiCursor,
  "codex": VscSparkle,
  "antigravity": VscRobot,
  "rest api integration": TbApi,
  "responsive web design": TbDeviceLaptop,
  "basic seo": TbSearch,
};

type SkillsIconProps = {
  name: string;
  className?: string;
};

export function SkillsIcon({ name, className }: SkillsIconProps) {
  const Icon = iconMap[name.toLowerCase()];
  if (!Icon) return null;
  return <Icon className={className} />;
}
