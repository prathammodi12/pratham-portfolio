import { ProjectItem } from "@/types/project";

export const projects: ProjectItem[] = [
  {
    id: "zeveal",
    title: "Zeveal",
    subtitle: "Enterprise Workforce Tracking Platform",
    tagline: "Real-time Remote Work Monitoring System",
    description: "Built a centralized workforce tracking platform to replace fragmented third-party tools. Designed scalable backend architecture and integrated it with a modern React dashboard to deliver real-time visibility into remote employee productivity.",
    metrics: [
      {
        val: "10+",
        label: "APIs Built",
        iconName: "database",
      },
      {
        val: "6+",
        label: "Months Dev",
        iconName: "activity",
      },
      {
        val: "Live",
        label: "Enterprise Platform",
        iconName: "server",
      },
    ],
    problem: "Organizations relied on multiple third-party tools, resulting in poor visibility, communication gaps, and inefficient workforce tracking.",
    solution: "Developed a unified platform using Liferay Service Builder and REST APIs. Designed core entities like Work Logs, Departments, and Notifications, enabling secure, scalable, and real-time tracking.",
    impact: [
      "Replaced multiple tools with one system",
      "Improved real-time decision making",
      "Reduced administrative workload",
      "Enabled scalable workforce monitoring",
    ],
    techStack: [
      "Java",
      "Liferay",
      "React",
      "PostgreSQL",
      "OAuth2",
      "REST APIs",
    ],
  },
];
