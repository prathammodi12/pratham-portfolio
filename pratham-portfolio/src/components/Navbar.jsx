import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 px-4 w-full pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`pointer-events-auto transition-all duration-300 w-full max-w-7xl rounded-full ${
          isScrolled
            ? "py-3 px-6 glass-panel border border-slate-200 dark:border-slate-800 shadow-lg"
            : "py-5 px-6 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-white dark:bg-slate-900 group-hover:border-indigo-500/50 transition-colors shrink-0 translate-y-[-2px]">
              <img
                src="/pratham%20style.webp"
                alt="PM"
                width={44}
                height={44}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover scale-[1.15]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-800 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                PRATHAM MODI
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full rounded-full" />
              </a>
            ))}

            <div className="flex items-center gap-4 border-l border-slate-300 dark:border-slate-700 pl-6">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
              >
                Hire Me <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            aria-label="Toggle mobile menu"
            className="md:hidden text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 glass-panel rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-base font-semibold"
                  >
                    {isDarkMode ? (
                      <>
                        <Sun size={18} /> Light Mode
                      </>
                    ) : (
                      <>
                        <Moon size={18} /> Dark Mode
                      </>
                    )}
                  </button>
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white text-base font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hire Me <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
