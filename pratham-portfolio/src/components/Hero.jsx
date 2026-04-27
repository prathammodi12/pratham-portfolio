import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-0">
      {/* Animated Background Blobs — will-change keeps them off the main layer */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none"
        style={{ willChange: "transform" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Photo Card — critical, no initial delay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-2 lg:order-1 relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-[32px] blur-2xl opacity-30 dark:opacity-20 animate-pulse pointer-events-none" />
            <div className="relative glass-panel p-2 rounded-[32px] border-slate-200 dark:border-slate-700/50">
              <div className="rounded-[24px] overflow-hidden bg-slate-200 dark:bg-slate-900 aspect-[3/4] relative">
                {/* fetchpriority=high + no lazy loading for LCP image */}
                <img
                  src="/pratham portfolio.webp"
                  alt="Pratham Modi — Java Full Stack Developer"
                  width={480}
                  height={640}
                  fetchpriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-2xl border-white/20">
                  <p className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-1 opacity-70">
                    Focus Areas
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    Full Stack Engineering • Architecture • Modern UI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & CTAs */}
          <div className="order-1 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-slate-200 dark:border-indigo-500/30"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                Available for hire
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-slate-900 dark:text-white"
            >
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400">
                scalable and reliable
              </span>{" "}
              systems.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl mb-10 leading-relaxed"
            >
              I'm{" "}
              <span className="text-slate-900 dark:text-white font-semibold">
                Pratham Modi
              </span>
              , a Java Full Stack Developer dedicated to crafting resilient
              backend architectures and integrating them into modern,
              data-driven web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold transition-all hover:-translate-y-1 shadow-lg shadow-indigo-500/25"
              >
                View Projects <ArrowRight size={20} />
              </a>
              <a
                href="/Pratham_Modi_Resume.pdf"
                download="Pratham_Modi_Resume.pdf"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold transition-all hover:-translate-y-1"
              >
                Resume <Download size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
