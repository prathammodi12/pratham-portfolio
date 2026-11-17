import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { MotionProvider } from "@/providers/MotionProvider";
import { inter } from "@/lib/fonts";
import { siteMetadata, siteViewport } from "@/lib/metadata";
import "./globals.css";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pratham Modi",
    jobTitle: "Java Full Stack Developer",
    url: "https://pratham-portfolio-gamma.vercel.app",
    sameAs: [
      "https://linkedin.com/in/prathammodi-",
      "https://github.com/prathammodi12",
    ],
    worksFor: { "@type": "Organization", name: "Topia Life Science" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "LDRP Institute of Technology and Research",
    },
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Microservices Architecture",
      "React.js",
      "Next.js",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "AWS S3",
      "Quality Management Systems",
      "Document Management Systems",
    ],
  };

  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
