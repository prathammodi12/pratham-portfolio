import React from "react";
import { Code2, Target, Zap, Server } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

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
          <ScrollReveal
            direction="right"
            distance={30}
            duration={0.6}
            className="lg:col-span-5 space-y-8"
          >
            <SectionTitle
              center={false}
              className="mb-0"
              subtitleColorClassName="text-cyan-400"
              subtitle={
                <span className="flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-cyan-400" /> Profile
                </span>
              }
              title={
                <>
                  Engineering{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
                    Excellence
                  </span>
                  .
                </>
              }
            />

            <p className="text-slate-400 text-lg leading-relaxed">
              I am a results-driven Java Full Stack Developer with a specialized
              focus on enterprise-grade software development and system
              integration. My core philosophy revolves around creating backend
              architectures that are as reliable as they are scalable.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <GlassPanel
                  key={i}
                  hoverEffect
                  className="p-5 flex flex-col gap-2 rounded-2xl"
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
                </GlassPanel>
              ))}
            </div>
          </ScrollReveal>

          {/* Cards Layout */}
          <ScrollReveal
            direction="left"
            distance={30}
            duration={0.6}
            className="lg:col-span-7 grid gap-6"
          >
            {/* Education Card */}
            <Card variant="glass" className="p-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                <Badge variant="secondary" className="px-3 py-1 font-semibold text-slate-800 dark:text-slate-300">
                  CGPA: 8.5
                </Badge>
              </div>
            </Card>

            {/* Core Domain Card */}
            <Card variant="glass" className="p-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
