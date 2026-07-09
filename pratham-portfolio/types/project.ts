export interface MetricItem {
  val: string;
  label: string;
  iconName: "database" | "activity" | "server";
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  metrics: MetricItem[];
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
}
