import { Code2 } from "lucide-react";
import { getTechIcon } from "@/data/skills";

type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className = "h-4 w-4" }: TechIconProps) {
  const Icon = getTechIcon(name);

  if (!Icon) {
    return <Code2 className={className} aria-hidden="true" />;
  }

  return <Icon className={className} aria-hidden="true" />;
}
