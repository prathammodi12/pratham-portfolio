import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

const Experience = () => {
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
          <motion.div
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
                    Java Full Stack Developer
                  </h3>
                  <p className="text-indigo-400 font-bold tracking-widest text-xs uppercase">
                    Internship
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-slate-800 dark:text-slate-100 font-bold text-lg">
                    7Span Pvt. Ltd
                  </p>
                  <p className="text-slate-500 text-sm font-semibold">
                    Oct 2025 – March 2026
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Architected Backend Entities",
                    desc: "Leveraged Liferay Service Builder to design and implement highly scalable relational data structures governing workflows.",
                  },
                  {
                    title: "Engineered REST APIs",
                    desc: "Directed the creation of robust, versioned endpoints using Liferay REST Builder for high-fidelity frontend communication.",
                  },
                  {
                    title: "Frontend System Integration",
                    desc: "Orchestrated the seamless integration of React.js components within the Liferay environment, prioritizing UX fluidity.",
                  },
                ].map(({ title, desc }) => (
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
