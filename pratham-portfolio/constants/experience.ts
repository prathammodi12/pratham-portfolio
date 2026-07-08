import { ExperienceItem } from "@/types/experience";

export const experiences: ExperienceItem[] = [
  {
    role: "Java Full Stack Developer",
    type: "Full-time",
    company: "Topia Life Science",
    duration: "May 2026 – Present",
    details: [
      {
        title: "Microservices & API Engineering",
        desc: "Designed and implemented robust REST APIs using Spring Boot and Java to streamline health-science data exchange and workflow management.",
      },
      {
        title: "System Integration & Performance",
        desc: "Integrated responsive React frontend clients with secure backend endpoints while optimizing SQL relational database query latency.",
      },
    ],
  },
  {
    role: "Java Full Stack Developer",
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
