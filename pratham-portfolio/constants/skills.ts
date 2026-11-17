import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engine",
    color: "indigo",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security & JWT",
      "Spring Cloud (Eureka)",
      "REST APIs & Swagger",
      "JasperReports",
      "Liferay Portal",
    ],
  },
  {
    title: "Frontend UI",
    color: "cyan",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Javascript (ES6+)",
      "React Query",
      "JSP",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI (MUI)",
    ],
  },
  {
    title: "Data & Cloud",
    color: "purple",
    skills: ["MySQL", "PostgreSQL", "Flyway", "AWS S3"],
  },
  {
    title: "Developer Toolchain",
    color: "blue",
    skills: [
      "Git & GitHub",
      "Postman API Design",
      "Maven",
      "IntelliJ IDEA",
      "MCP & AI Coding Agents",
    ],
  },
];
