import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

// Send icon was imported but never used — removed
const socials = [
  {
    href: "https://linkedin.com/in/prathammodi-",
    label: "LinkedIn",
    icon: <Linkedin size={24} />,
  },
  {
    href: "https://github.com/prathammodi12",
    label: "GitHub",
    icon: <Github size={24} />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-12 md:p-20 rounded-[48px] border-indigo-500/20 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)] relative"
        >
          <span className="text-indigo-400 font-bold tracking-widest text-sm uppercase mb-6 block">
            Ready for the Next Challenge
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
            Let's build something <span className="gradient-text">amazing</span>{" "}
            together.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Currently exploring full-stack engineering opportunities. If you are
            building high-performance systems and need a dedicated architect,
            let's connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-sm font-semibold text-slate-500 uppercase">
                Email
              </span>
              <a
                href="mailto:prathammodi17@gmail.com"
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 hover:opacity-80 transition-opacity"
              >
                prathammodi17@gmail.com
              </a>
            </div>

            <div className="hidden sm:block w-px h-12 bg-slate-300 dark:bg-slate-800" />

            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-sm font-semibold text-slate-500 uppercase">
                Phone
              </span>
              <a
                href="tel:+917043822868"
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 hover:opacity-80 transition-opacity"
              >
                7043822868
              </a>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
