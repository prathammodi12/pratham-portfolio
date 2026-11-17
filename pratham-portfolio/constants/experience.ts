import { ExperienceItem } from "@/types/experience";

export const experiences: ExperienceItem[] = [
  {
    role: "Java Full Stack Developer",
    type: "Full-time",
    company: "Topia Life Science",
    duration: "May 2026 – Present",
    details: [
      {
        title: "Pharma Quality & Document Systems",
        desc: "Build modules for a multi-tenant QMS (CAPA, Audit, Deviation, Change Control, Training) and a controlled Document Management System covering approval, release, print tracking and archival.",
      },
      {
        title: "Maintenance & Support (QMS and DMS)",
        desc: "Handle production maintenance and support for the QMS and DMS platforms: resolve user-reported issues, fix bugs, tune queries and ship enhancements to live client environments.",
      },
      {
        title: "Spring Boot Microservices & Security",
        desc: "Develop Spring Boot services with JWT refresh tokens, role and permission management, signed S3 links and Flyway migrations, and harden endpoints against SQL injection.",
      },
      {
        title: "Reporting & Automation",
        desc: "Generate dynamic PDF reports with JasperReports and run scheduled weekly, monthly and quarterly email summaries with Excel exports.",
      },
      {
        title: "Full Stack Delivery",
        desc: "Ship permission-gated Next.js and TypeScript screens backed by React Query, plus JSP interfaces for drug-discovery and quality platforms. 500+ commits across 10+ repositories.",
      },
    ],
  },
  {
    role: "Java Full Stack Intern",
    type: "Internship",
    company: "7Span Pvt. Ltd",
    duration: "Oct 2025 – March 2026",
    details: [
      {
        title: "Architected Backend Entities",
        desc: "Leveraged Liferay Service Builder to design and implement highly scalable relational data structures governing workflows.",
      },
      {
        title: "Engineered REST APIs",
        desc: "Directed the creation of robust, versioned endpoints using Liferay REST Builder for high-fidelity frontend communication.",
      },
      {
        title: "Frontend System Integration",
        desc: "Orchestrated the seamless integration of React.js components within the Liferay environment, prioritizing UX fluidity.",
      },
    ],
  },
];
