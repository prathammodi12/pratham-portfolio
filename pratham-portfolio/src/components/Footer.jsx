// No external imports needed

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-300 dark:border-slate-800/50 bg-slate-200 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm flex items-center justify-center shrink-0 border border-slate-300 dark:border-slate-800">
            <img
              src="/pratham%20style.webp"
              alt="PM"
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover scale-[1.15]"
            />
          </div>
          <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            PRATHAM MODI
          </span>
        </div>

        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest text-center">
          © {new Date().getFullYear()} Pratham Modi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
