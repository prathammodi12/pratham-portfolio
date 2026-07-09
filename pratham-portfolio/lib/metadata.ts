import { Metadata, Viewport } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pratham-portfolio-gamma.vercel.app";

export const siteMetadata: Metadata = {
  title: "Pratham Modi - Java Full Stack Developer",
  description:
    "Portfolio of Pratham Modi, a Java Full Stack Developer specializing in Liferay, Spring Boot, and React.",
  keywords: [
    "Pratham Modi",
    "Java Full Stack Developer",
    "Java Developer",
    "Liferay Portal",
    "Spring Boot",
    "React Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Pratham Modi" }],
  creator: "Pratham Modi",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicon.webp",
        type: "image/webp",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Pratham Modi - Java Full Stack Developer",
    description:
      "Portfolio of Pratham Modi, a Java Full Stack Developer specializing in Liferay, Spring Boot, and React.",
    siteName: "Pratham Modi Portfolio",
    images: [
      {
        url: "/pratham portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Pratham Modi Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Modi - Java Full Stack Developer",
    description:
      "Portfolio of Pratham Modi, a Java Full Stack Developer specializing in Liferay, Spring Boot, and React.",
    images: ["/pratham portfolio.webp"],
  },
};

export const siteViewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};
