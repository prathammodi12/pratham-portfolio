export interface TimelineItem {
  title: string;
  desc: string;
}

export interface ExperienceItem {
  role: string;
  type: string;
  company: string;
  duration: string;
  details: TimelineItem[];
}
