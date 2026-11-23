import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    color: "indigo",
    icon: "server",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Cloud (Eureka)",
      "REST APIs",
      "Swagger / OpenAPI",
      "JasperReports",
      "Liferay Portal",
    ],
  },
  {
    title: "Frontend",
    color: "cyan",
    icon: "layout",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "React Query",
      "JSP",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI (MUI)",
    ],
  },
  {
    title: "Data & Cloud",
    color: "purple",
    icon: "database",
    skills: ["MySQL", "PostgreSQL", "Flyway", "AWS S3"],
  },
  {
    title: "AI Tools",
    color: "amber",
    icon: "sparkles",
    skills: ["Claude Code", "MCP Servers", "AI Coding Agents"],
  },
  {
    title: "Developer Tools",
    color: "blue",
    icon: "wrench",
    skills: ["Git & GitHub", "Maven", "Postman", "IntelliJ IDEA", "VS Code"],
  },
];
