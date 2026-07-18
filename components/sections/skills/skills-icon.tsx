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
  SiShopify,
} from "react-icons/si";
import {
  TbHierarchy,
  TbLock,
  TbApi,
  TbDeviceLaptop,
  TbSearch,
  TbDroplet,
} from "react-icons/tb";
import { VscVscode, VscSparkle, VscRobot } from "react-icons/vsc";

const iconMap: Record<string, IconType> = {
  "html": SiHtml5,
  "html5": SiHtml5,
  "css": SiCss,
  "css3": SiCss,
  "javascript (es6+)": SiJavascript,
  "javascript": SiJavascript,
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
  "shopify": SiShopify,
  "liquid": TbDroplet,
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
