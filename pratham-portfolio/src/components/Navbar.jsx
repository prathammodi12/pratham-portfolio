import React, { useState, useEffect } from "react";
import { Menu, X, Code2, FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav
          className={cn(
              "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
              isScrolled
                  ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-border py-3"
                  : "bg-transparent py-5",
          )}
      >
        {/* ✅ ADD THIS DIV */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

          <a href="/" className="flex items-center gap-2.5 group">
            <div
                className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden",
                    isScrolled
                        ? "bg-primary text-white"
                        : "bg-white/20 text-white backdrop-blur-sm"
                )}
            >
              <img
                  src="/20230110_060330970_iOS.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
              />
            </div>

            <span
                className={cn(
                    "text-lg font-extrabold tracking-tight transition-colors duration-300",
                    isScrolled ? "text-slate-900" : "text-white"
                )}
            >
        Pratham Modi
      </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                        "text-sm font-medium transition-all duration-200 hover:text-primary relative group",
                        isScrolled
                            ? "text-slate-600"
                            : "text-white/80 hover:text-white",
                    )}
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
            ))}

            <Button asChild variant={isScrolled ? "default" : "white"} size="sm" className="ml-2">
              <a href="#contact">Hire Me</a>
            </Button>

            <Button asChild variant={isScrolled ? "outline" : "outline-white"} size="sm">
              <a
                  href="/resume.pdf"
                  download="Pratham_Modi_Resume.pdf"
                  className="flex items-center gap-1.5"
              >
                <FileDown size={14} /> Resume
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
              className={cn(
                  "md:hidden p-2 rounded-xl transition-colors",
                  isScrolled
                      ? "text-slate-700 hover:bg-slate-100"
                      : "text-white hover:bg-white/10",
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div> {/* ✅ THIS MATCHES NOW */}

        {/* Mobile Menu */}
        <div
            className={cn(
                "md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl overflow-hidden transition-all duration-300",
                isMenuOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none",
            )}
        >
          ...
        </div>
      </nav>
  );
};

export default Navbar;
