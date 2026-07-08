"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/constants/skills";

const glowMap = {
  indigo: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
  cyan: "bg-cyan-500/10   group-hover:bg-cyan-500/20",
  purple: "bg-purple-500/10 group-hover:bg-purple-500/20",
  blue: "bg-blue-500/10   group-hover:bg-blue-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-indigo-500 dark:text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4 block">
            Capability Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white glow-text">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-cyan-400 dark:to-indigo-400">
              Toolkit.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel p-8 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] transition-colors ${glowMap[category.color]}`}
              />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4 relative z-10">
                {category.title}
              </h3>

              <ul className="space-y-4 relative z-10">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex flex-col gap-2 group/skill cursor-default"
                  >
                    <div className="flex justify-between items-center text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-white transition-colors">
                      {skill}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
