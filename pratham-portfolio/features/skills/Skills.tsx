import React from "react";
import { Database, LayoutTemplate, Server, Sparkles, Wrench } from "lucide-react";
import { skillCategories } from "@/constants/skills";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const glowMap = {
  indigo: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
  cyan: "bg-cyan-500/10   group-hover:bg-cyan-500/20",
  purple: "bg-purple-500/10 group-hover:bg-purple-500/20",
  blue: "bg-blue-500/10   group-hover:bg-blue-500/20",
  amber: "bg-amber-500/10  group-hover:bg-amber-500/20",
};

const iconColorMap = {
  indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  amber: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
};

const iconMap = {
  server: Server,
  layout: LayoutTemplate,
  database: Database,
  sparkles: Sparkles,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="Capability Stack"
          subtitleColorClassName="text-indigo-500 dark:text-cyan-400"
          title={
            <>
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-cyan-400 dark:to-indigo-400">
                Toolkit.
              </span>
            </>
          }
        />

        {/* First two categories share the top row; the rest share the second row. */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon];

            return (
              <ScrollReveal
                key={category.title}
                direction="up"
                distance={30}
                duration={0.5}
                delay={idx * 0.08}
                className={`w-full flex ${idx < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <Card
                  variant="glass"
                  className="p-6 md:p-8 w-full hover:-translate-y-2 transition-transform duration-300 group"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] transition-colors ${glowMap[category.color]}`}
                  />

                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconColorMap[category.color]}`}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2.5 relative z-10">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-100/70 dark:bg-white/5 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 cursor-default"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
