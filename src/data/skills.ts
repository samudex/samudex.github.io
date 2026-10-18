import type { AriaAttributes, ComponentType } from "react";
import { Braces, Database } from "lucide-react";
import {
  SiAngular,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

type TechIcon = ComponentType<
  { className?: string } & Pick<AriaAttributes, "aria-hidden">
>;

export type Skill = {
  name: string;
  icon: TechIcon;
};

export type SkillGroup = {
  id: string;
  index: string;
  title: string;
  description: string;
  skills: Skill[];
  className: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend",
    description:
      "Interfaces rápidas, accesibles y con animación que tiene una razón de ser.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Angular", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    className: "lg:col-span-7",
  },
  {
    id: "backend",
    index: "02",
    title: "Backend",
    description:
      "APIs y lógica de servidor que sostienen el producto cuando crece.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: SiPython },
      { name: "REST APIs", icon: Braces as TechIcon },
    ],
    className: "lg:col-span-5",
  },
  {
    id: "data",
    index: "03",
    title: "Datos",
    description:
      "Modelado y consultas para que la información sea consistente y útil.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SQL Server", icon: Database as TechIcon },
      { name: "MongoDB", icon: SiMongodb },
    ],
    className: "lg:col-span-5",
  },
  {
    id: "cloud",
    index: "04",
    title: "Cloud & herramientas",
    description:
      "Del commit al deploy, con un flujo simple, reproducible y sin fricción.",
    skills: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite },
      { name: "Linux", icon: SiLinux },
    ],
    className: "lg:col-span-7",
  },
];

const techIconMap: Record<string, TechIcon> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Angular: SiAngular,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PHP: SiPhp,
  Python: SiPython,
  "REST APIs": Braces as TechIcon,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  "SQL Server": Database as TechIcon,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Git: SiGit,
  GitHub: SiGithub,
  Vite: SiVite,
  Linux: SiLinux,
  "Framer Motion": SiFramer,
};

export function getTechIcon(name: string): TechIcon | null {
  return techIconMap[name] ?? null;
}
