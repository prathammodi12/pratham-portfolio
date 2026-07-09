import React from "react";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Database,
  Activity,
  Server,
  ArrowRight,
} from "lucide-react";
import { projects } from "@/constants/projects";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GradientText } from "@/components/ui/GradientText";

const iconMap = {
  database: <Database size={24} className="text-blue-500" />,
  activity: <Activity size={24} className="text-indigo-500" />,
  server: <Server size={24} className="text-emerald-500" />,
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="Featured Case Study"
          subtitleColorClassName="text-indigo-600 dark:text-purple-400"
          title={
            <>
              Enterprise <span className="text-slate-500 italic">Workforce.</span>
            </>
          }
        />

        {projects.map((project) => (
          <ScrollReveal
            key={project.id}
            direction="up"
            distance={40}
            duration={0.7}
            className="group relative p-1 rounded-[32px] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900 hover:from-indigo-400 hover:to-purple-400 dark:hover:from-indigo-500 dark:hover:to-purple-500 transition-all duration-500 shadow-2xl overflow-hidden"
          >
            <div className="bg-white dark:bg-slate-950 rounded-[30px] p-8 md:p-14 h-full w-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700" />

              <StaggerContainer className="grid grid-cols-1 xl:grid-cols-12 gap-16 relative z-10">
                {/* Left Column */}
                <div className="xl:col-span-7 flex flex-col gap-10">
                  <StaggerItem>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                      {project.title}{" "}
                      <span className="text-slate-400 dark:text-slate-600 font-light hidden sm:inline">
                        &mdash;
                      </span>{" "}
                      <GradientText className="block sm:inline mt-2 sm:mt-0">
                        {project.subtitle}
                      </GradientText>
                    </h3>
                    <p className="text-indigo-500 dark:text-indigo-400 font-semibold tracking-widest uppercase text-sm">
                      {project.tagline}
                    </p>
                  </StaggerItem>

                  <StaggerItem className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {project.description}
                  </StaggerItem>

                  {/* Metrics */}
                  <StaggerItem className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.metrics.map((m, i) => (
                      <GlassPanel
                        key={i}
                        hoverEffect
                        className="p-5 md:p-6 rounded-2xl flex flex-col gap-3 group/stat border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-black text-slate-900 dark:text-white group-hover/stat:scale-110 transition-transform origin-left">
                            {m.val}
                          </span>
                          {iconMap[m.iconName]}
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-tight">
                          {m.label}
                        </span>
                      </GlassPanel>
                    ))}
                  </StaggerItem>

                  {/* Problem & Solution */}
                  <div className="space-y-8 mt-2">
                    <StaggerItem className="flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center border border-red-200 dark:border-red-500/20 shadow-sm">
                        <ShieldAlert
                          size={20}
                          className="text-red-600 dark:text-red-400"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg text-slate-900 dark:text-white font-bold mb-2">
                          The Problem
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </StaggerItem>

                    <StaggerItem className="flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20 shadow-sm">
                        <ShieldCheck
                          size={20}
                          className="text-emerald-600 dark:text-emerald-400"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg text-slate-900 dark:text-white font-bold mb-2">
                          The Solution
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </StaggerItem>
                  </div>
                </div>

                {/* Right Column */}
                <div className="xl:col-span-5 flex flex-col gap-10">
                  {/* Impact */}
                  <StaggerItem>
                    <Card
                      variant="glass"
                      className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-inner group/impact hover:shadow-lg"
                    >
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                        Impact
                      </h4>
                      <ul className="space-y-4">
                        {project.impact.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 group/item">
                            <CheckCircle2
                              size={20}
                              className="text-indigo-500 shrink-0 mt-0.5 group-hover/item:text-indigo-400 transition-colors"
                            />
                            <span className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </StaggerItem>

                  {/* Tech Stack */}
                  <StaggerItem>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-5">
                      Core Technology
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.techStack.map((tech) => (
                        <div
                          key={tech}
                          className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm flex items-center justify-center hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all hover:-translate-y-1 cursor-default"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </StaggerItem>

                  <StaggerItem className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-800">
                    <Button
                      variant="primary"
                      size="lg"
                      asChild
                      className="w-full text-lg group/btn active:translate-y-0 active:scale-100"
                    >
                      <a href="#contact">
                        Contact Me{" "}
                        <ArrowRight
                          size={20}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </a>
                    </Button>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
