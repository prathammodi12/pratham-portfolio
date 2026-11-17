import { ProjectItem } from "@/types/project";

export const projects: ProjectItem[] = [
  {
    id: "qms",
    featured: true,
    title: "QMS",
    subtitle: "Pharma Quality Management System",
    tagline: "GxP Quality Workflows, End to End",
    context: "Topia Life Science",
    period: "May 2026 – Present",
    description:
      "Core contributor to a multi-tenant Quality Management System used by pharmaceutical companies to run their regulated quality processes, from CAPA and audits to deviations, change control, complaints and employee training. Now in production, where I handle its ongoing maintenance and support.",
    metrics: [
      { val: "150+", label: "Commits Shipped", iconName: "activity" },
      { val: "8", label: "Modules Worked On", iconName: "database" },
      { val: "Multi", label: "Tenant Platform", iconName: "server" },
    ],
    problem:
      "Quality teams tracked CAPAs, audits, deviations and training on paper and spreadsheets, so deadlines slipped and inspection-ready reports took days to assemble.",
    solution:
      "Built and extended modules across the Spring Boot backend and JSP frontend: a quality calendar with recurring events and reminders, dynamic PDF reports with JasperReports, scheduled weekly, monthly and quarterly task summaries with Excel exports, tenant-aware training allocation and permission-based impact assessment.",
    impact: [
      "Ongoing maintenance & support: production bug fixes, user issues and enhancements",
      "Dynamic PDF reports for CAPA, Audit, Deviation, Change Control and Complaint records",
      "Quality calendar with recurrence logic that surfaces every open event and action",
      "Automated weekly, monthly and quarterly email schedulers with Excel summaries",
      "Company profiles and tenant isolation in the Training module",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JSP",
      "MySQL",
      "JasperReports",
      "Apache POI",
      "AWS S3",
    ],
  },
  {
    id: "dms",
    featured: true,
    title: "DMS",
    subtitle: "Controlled Document Management",
    tagline: "Document Lifecycle, Print Control & Audit Trail",
    context: "Topia Life Science",
    period: "Sep 2026 – Present",
    description:
      "Full-stack developer on a regulated Document Management System for SOPs and controlled masters. I work on both the Spring Boot microservice and the Next.js frontend, covering the full lifecycle from authoring to QA approval, release, printing, return and archival. I also handle its ongoing maintenance and support in production.",
    metrics: [
      { val: "140+", label: "Commits Shipped", iconName: "activity" },
      { val: "200+", label: "Service Endpoints", iconName: "database" },
      { val: "2", label: "Layers: API + UI", iconName: "server" },
    ],
    problem:
      "Regulated companies must prove which version of an SOP was in force, who approved it, and where every printed copy went. Manual registers made that slow and error-prone.",
    solution:
      "Implemented authoring, initiation, QA approval, next-version, archival and discontinuation flows, plus print-job tracking with batch document returns. Added stage-wise email notifications, report schedulers and a uniform paginated request/response structure. On the frontend I built permission-gated screens with React Query and TanStack Table.",
    impact: [
      "Ongoing maintenance & support: production fixes, user requests and enhancements",
      "Print tracking and return flow for every controlled copy",
      "Email notifications at every approval stage",
      "Security hardening: signed file links, module permissions and an SQL injection fix",
      "Fine-grained UI permissions and data-grid exports across the app",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Cloud Eureka",
      "MySQL",
      "Flyway",
      "AWS S3",
      "JWT",
      "Next.js",
      "TypeScript",
      "React Query",
    ],
  },
  {
    id: "molecular-platform",
    featured: true,
    title: "Drug Discovery",
    subtitle: "Molecular Modelling Platform",
    tagline: "QSAR, ADMET & Molecule Drawing for Drug Discovery",
    context: "Topia Life Science",
    period: "Jul 2026 – Nov 2026",
    description:
      "Worked across the API and web layers of a drug-discovery platform where scientists draw molecules, run QSAR and ADMET models and review evaluation results.",
    metrics: [
      { val: "130+", label: "Commits Shipped", iconName: "activity" },
      { val: "160+", label: "Service Endpoints", iconName: "database" },
      { val: "RBAC", label: "Access Control", iconName: "server" },
    ],
    problem:
      "The platform had no structured roles or permissions, and sessions expired abruptly in the middle of long scientific workflows.",
    solution:
      "Built the role and permission management module (APIs and UI), role-based authentication, and JWT refresh tokens with dynamic cookie security. Integrated the Ketcher molecule editor and delivered the TCP profiling, QSAR, ADMET and MPO evaluation screens.",
    impact: [
      "Role management with per-page permission checks",
      "Seamless sessions through JWT auto-refresh",
      "Ketcher molecule editor integrated into scientific workflows",
      "Sortable summary tables and a cleaner, consistent UI",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JSP",
      "MySQL",
      "AWS S3",
      "Ketcher",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    subtitle: "Admin & Storefront APIs",
    tagline: "Orders, Payments & Customer Accounts",
    context: "Topia Life Science",
    period: "Aug 2026 – Sep 2026",
    description:
      "Built REST APIs for both sides of an e-commerce platform: an admin service for operations and a customer service for the storefront.",
    metrics: [
      { val: "45+", label: "Commits Shipped", iconName: "activity" },
      { val: "2", label: "Spring Services", iconName: "server" },
      { val: "S3", label: "Media Storage", iconName: "database" },
    ],
    problem:
      "The business needed an admin back office and a customer storefront backend with secure accounts, clear order states and reliable invoicing.",
    solution:
      "On the admin side I built dashboard analytics, product APIs, refactored order, payment and refund status handling, and added invoice and role-based emails. On the customer side I built JWT authentication, forgot-password, address management, product listing and chatbot APIs, with S3 presigned URLs for media.",
    impact: [
      "Admin dashboard APIs for sales and order insights",
      "Consistent order, payment and refund state handling",
      "Secure customer authentication and account flows",
      "Direct-to-S3 media uploads through presigned URLs",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Flyway",
      "AWS S3",
      "Swagger / OpenAPI",
    ],
  },
  {
    id: "mysql-schema-lens",
    title: "mysql-schema-lens",
    subtitle: "MySQL Schema MCP Server",
    tagline: "Open-Source npm Package for AI Coding Agents",
    context: "Open Source",
    period: "Oct 2026",
    description:
      "A published npm package that gives AI coding agents fast, offline access to a MySQL schema. It snapshots information_schema once, caches it on disk, and answers schema questions over MCP or the command line.",
    metrics: [
      { val: "17", label: "MCP Tools", iconName: "server" },
      { val: "npm", label: "Published Package", iconName: "activity" },
      { val: "Read", label: "Only, Never Data", iconName: "database" },
    ],
    problem:
      "Coding agents waste time and tokens querying live databases for table structures, and break when the database is down.",
    solution:
      "Built a TypeScript MCP server with a TTL cache and fingerprint-based refresh. It infers relationships that were never declared (from column comments and naming conventions) and provides tools for join paths, orphan detection, index checks and schema search.",
    impact: [
      "Serves the cached schema even when the database is offline",
      "Re-extracts only when a fingerprint query detects a schema change",
      "Finds implicit relationships and clearly marks them as inferred",
      "Usable from the CLI or any MCP-compatible agent",
    ],
    techStack: ["TypeScript", "Node.js", "MCP SDK", "MySQL", "Zod", "Vitest"],
    link: {
      href: "https://www.npmjs.com/package/mysql-schema-lens",
      label: "View on npm",
    },
  },
  {
    id: "zeveal",
    title: "Zeveal",
    subtitle: "Enterprise Workforce Tracking Platform",
    tagline: "Real-time Remote Work Monitoring System",
    context: "7Span Pvt. Ltd",
    period: "Oct 2025 – Mar 2026",
    description:
      "Built a centralized workforce tracking platform to replace fragmented third-party tools. Designed scalable backend architecture and integrated it with a modern React dashboard to deliver real-time visibility into remote employee productivity.",
    metrics: [
      { val: "10+", label: "APIs Built", iconName: "database" },
      { val: "6+", label: "Months Dev", iconName: "activity" },
      { val: "Live", label: "Enterprise Platform", iconName: "server" },
    ],
    problem:
      "Organizations relied on multiple third-party tools, resulting in poor visibility, communication gaps, and inefficient workforce tracking.",
    solution:
      "Developed a unified platform using Liferay Service Builder and REST APIs. Designed core entities like Work Logs, Departments, and Notifications, enabling secure, scalable, and real-time tracking.",
    impact: [
      "Replaced multiple tools with one system",
      "Improved real-time decision making",
      "Reduced administrative workload",
      "Enabled scalable workforce monitoring",
    ],
    techStack: ["Java", "Liferay", "React", "PostgreSQL", "OAuth2", "REST APIs"],
  },
];
