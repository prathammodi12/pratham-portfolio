export interface SkillCategory {
  title: string;
  color: "indigo" | "cyan" | "purple" | "blue" | "amber";
  icon: "server" | "layout" | "database" | "sparkles" | "wrench";
  skills: string[];
}
