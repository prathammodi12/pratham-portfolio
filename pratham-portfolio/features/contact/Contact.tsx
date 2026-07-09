import React from "react";
import { Linkedin, Github } from "lucide-react";
import { socialLinks } from "@/constants/socials";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IconButton } from "@/components/ui/IconButton";
import { GradientText } from "@/components/ui/GradientText";

const iconMap = {
  linkedin: <Linkedin size={24} />,
  github: <Github size={24} />,
};

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal
          scale={0.97}
          duration={0.6}
          className="w-full"
        >
          <Card
            variant="glass"
            className="p-12 md:p-20 border-indigo-500/20 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)]"
          >
            <SectionTitle
              subtitle="Get In Touch"
              subtitleColorClassName="text-indigo-400 dark:text-indigo-400"
              title={
                <>
                  Let's build something <GradientText>amazing</GradientText> together.
                </>
              }
              className="mb-8"
            />
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Java Full Stack Developer specializing in Spring Boot, Next.js, and relational
              database systems. Always open to collaborating on high-performance architectures.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-sm font-semibold text-slate-500 uppercase">
                  Email
                </span>
                <a
                  href="mailto:prathammodi17@gmail.com"
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 hover:opacity-80 transition-opacity"
                >
                  prathammodi17@gmail.com
                </a>
              </div>

              <div className="hidden sm:block w-px h-12 bg-slate-300 dark:bg-slate-800" />

              <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-sm font-semibold text-slate-500 uppercase">
                  Phone
                </span>
                <a
                  href="tel:+917043822868"
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 hover:opacity-80 transition-opacity"
                >
                  7043822868
                </a>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4">
              {socialLinks.map(({ href, label, iconName }) => (
                <IconButton
                  key={label}
                  asChild
                  aria-label={label}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {iconMap[iconName]}
                  </a>
                </IconButton>
              ))}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
