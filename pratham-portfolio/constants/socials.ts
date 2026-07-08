export interface SocialLink {
  href: string;
  label: string;
  iconName: "linkedin" | "github";
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://linkedin.com/in/prathammodi-",
    label: "LinkedIn",
    iconName: "linkedin",
  },
  {
    href: "https://github.com/prathammodi12",
    label: "GitHub",
    iconName: "github",
  },
];
