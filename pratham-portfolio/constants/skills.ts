import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engine",
    color: "indigo",
    skills: [
      "Java SE/EE",
      "Spring Boot",
      "Liferay Portal OSGI modules",
      "Microservices Architecture",
    ],
  },
  {
    title: "Frontend UI",
    color: "cyan",
    skills: [
      "React.js",
      "Javascript (ES6+)",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI (MUI)",
    ],
  },
  {
    title: "Database Architecture",
    color: "purple",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Developer Toolchain",
    color: "blue",
    skills: [
      "Git/GitHub Ops",
      "Postman API Design",
      "Antigravity",
      "IntelliJ IDEA",
    ],
  },
];
