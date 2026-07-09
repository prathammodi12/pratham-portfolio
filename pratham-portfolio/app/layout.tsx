import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/providers/ThemeProvider";
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
    knowsAbout: [
      "Java SE/EE",
      "Spring Boot",
      "Liferay Portal",
      "React.js",
      "PostgreSQL",
      "Microservices Architecture",
      "System Integration",
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
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
