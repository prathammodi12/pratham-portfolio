"use client";

import { motion } from "framer-motion";
import { Code2, Target, Zap, Server } from "lucide-react";

interface StatItem {
  val: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    val: "6+",
    label: "Months Exp",
    icon: <Target size={18} className="text-indigo-400" />,
  },
  {
    val: "10+",
    label: "APIs Built",
    icon: <Zap size={18} className="text-cyan-400" />,
  },
  {
    val: "01",
    label: "Live Project",
    icon: <Server size={18} className="text-purple-400" />,
  },
  {
    val: "100%",
    label: "Delivery",
    icon: <Code2 size={18} className="text-blue-400" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-cyan-400" /> Profile
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                Engineering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
                  Excellence
                </span>
                .
              </h2>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              I am a results-driven Java Full Stack Developer with a specialized
              focus on enterprise-grade software development and system
              integration. My core philosophy revolves around creating backend
              architectures that are as reliable as they are scalable.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel p-5 rounded-2xl flex flex-col gap-2 hover:bg-slate-800/80 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">
                      {stat.val}
                    </span>
                    {stat.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid gap-6"
          >
            {/* Education Card */}
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  📚
                </div>
                Academic Background
              </h3>
              <div className="pl-14">
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  LDRP Institute of Technology and Research
                </h4>
                <p className="text-slate-500 dark:text-slate-400 mb-2">
                  B.E. in Computer Engineering
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-300">
                  CGPA: 8.5
                </div>
              </div>
            </div>

            {/* Core Domain Card */}
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  ⚙️
                </div>
                Core Domain
              </h3>
              <ul className="pl-14 space-y-3">
                {[
                  "System Architecture & API Engineering",
                  "Monolithic & Microservices Conversion",
                  "Frontend System Integration (React)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
