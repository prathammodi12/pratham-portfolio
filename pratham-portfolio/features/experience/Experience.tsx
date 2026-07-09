import React from "react";
import { Briefcase, ArrowRight } from "lucide-react";
import { experiences } from "@/constants/experience";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="Professional Tenure"
          title={
            <>
              Career <span className="text-slate-500 italic">Timeline</span>.
            </>
          }
        />

        {/* Vertical Timeline container */}
        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-4 md:ml-0 md:pl-10 space-y-16">
          {experiences.map((exp, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              distance={30}
              duration={0.6}
              className="relative"
            >
              {/* Timeline node */}
              <div className="absolute -left-[54px] md:-left-[60px] top-6 w-5 h-5 rounded-full bg-slate-950 border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]" />

              <Card
                variant="glass"
                className="p-8 md:p-10 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors" />

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                      <Briefcase
                        size={24}
                        className="text-indigo-600 dark:text-indigo-400"
                      />{" "}
                      {exp.role}
                    </h3>
                    <p className="text-indigo-400 font-bold tracking-widest text-xs uppercase">
                      {exp.type}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-slate-800 dark:text-slate-100 font-bold text-lg">
                      {exp.company}
                    </p>
                    <p className="text-slate-500 text-sm font-semibold">
                      {exp.duration}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {exp.details.map(({ title, desc }) => (
                    <GlassPanel
                      key={title}
                      className="bg-white/50 dark:bg-slate-800/20 p-5 rounded-2xl border-slate-200 dark:border-none"
                    >
                      <h4 className="text-slate-900 dark:text-white font-bold mb-2 flex items-center gap-2">
                        <ArrowRight
                          size={16}
                          className="text-indigo-500 dark:text-cyan-400"
                        />{" "}
                        {title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6">
                        {desc}
                      </p>
                    </GlassPanel>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
