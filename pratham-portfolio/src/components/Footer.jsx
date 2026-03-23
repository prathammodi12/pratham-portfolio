import React from 'react';
import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: <Github size={18} />, href: 'https://github.com/prathammodi12', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/prathammodi-', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:prathammodi17@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Code2 size={16} />
              </div>
              <span className="text-xl font-black tracking-tight">Pratham Modi</span>
            </div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
              Java Full Stack Developer · Ahmedabad
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors font-medium"
          >
            <ArrowUp size={14} />
            Back to top
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
            © {new Date().getFullYear()} Designed & Developed by Pratham Modi · Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
