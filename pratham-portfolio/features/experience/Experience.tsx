"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import { experiences } from "@/constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-indigo-400 font-bold tracking-widest text-sm uppercase mb-4 block">
            Professional Tenure
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white glow-text">
            Career <span className="text-slate-500 italic">Timeline</span>.
          </h2>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-4 md:ml-0 md:pl-10 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline node */}
              <div className="absolute -left-[54px] md:-left-[60px] top-6 w-5 h-5 rounded-full bg-slate-950 border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]" />

              <div className="glass-panel p-8 md:p-10 rounded-3xl group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
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
                    <div
                      key={title}
                      className="glass-panel bg-white/50 dark:bg-slate-800/20 p-5 rounded-2xl border-slate-200 dark:border-none"
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
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
