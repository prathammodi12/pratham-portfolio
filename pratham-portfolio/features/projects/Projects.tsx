"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const iconMap = {
  database: <Database size={24} className="text-blue-500" />,
  activity: <Activity size={24} className="text-indigo-500" />,
  server: <Server size={24} className="text-emerald-500" />,
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-indigo-600 dark:text-purple-400 font-bold tracking-widest text-sm uppercase mb-4 block">
            Featured Case Study
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white glow-text">
            Enterprise <span className="text-slate-500 italic">Workforce.</span>
          </h2>
        </div>

        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="group relative p-1 rounded-[32px] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900 hover:from-indigo-400 hover:to-purple-400 dark:hover:from-indigo-500 dark:hover:to-purple-500 transition-all duration-500 shadow-2xl overflow-hidden"
          >
            <div className="bg-white dark:bg-slate-950 rounded-[30px] p-8 md:p-14 h-full w-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700" />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 xl:grid-cols-12 gap-16 relative z-10"
              >
                {/* Left Column */}
                <div className="xl:col-span-7 flex flex-col gap-10">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                      {project.title}{" "}
                      <span className="text-slate-400 dark:text-slate-600 font-light hidden sm:inline">
                        &mdash;
                      </span>{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 block sm:inline mt-2 sm:mt-0">
                        {project.subtitle}
                      </span>
                    </h3>
                    <p className="text-indigo-500 dark:text-indigo-400 font-semibold tracking-widest uppercase text-sm">
                      {project.tagline}
                    </p>
                  </motion.div>

                  <motion.p
                    variants={itemVariants}
                    className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Metrics */}
                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="glass-panel hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors p-5 md:p-6 rounded-2xl flex flex-col gap-3 group/stat border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md"
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
                      </div>
                    ))}
                  </motion.div>

                  {/* Problem & Solution */}
                  <div className="space-y-8 mt-2">
                    <motion.div variants={itemVariants} className="flex gap-5">
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
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-5">
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
                    </motion.div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="xl:col-span-5 flex flex-col gap-10">
                  {/* Impact */}
                  <motion.div
                    variants={itemVariants}
                    className="glass-panel bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-inner group/impact hover:shadow-lg transition-all"
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
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div variants={itemVariants}>
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
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-800"
                  >
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/25 hover:-translate-y-1 text-lg group/btn"
                    >
                      Contact Me{" "}
                      <ArrowRight
                        size={20}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
