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
  /** Where the work was done, e.g. "Topia Life Science" or "Open Source". */
  context: string;
  period: string;
  /** Featured projects get the full case-study card; others a compact card. */
  featured?: boolean;
  description: string;
  metrics: MetricItem[];
  problem: string;
  solution: string;
  impact: string[];
  techStack: string[];
  link?: { href: string; label: string };
}
