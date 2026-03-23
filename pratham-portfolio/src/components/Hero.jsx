import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FileDown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Hero = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-24 pb-20 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]"
        />
        <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[140px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/90 tracking-wide">
                Available for opportunities
              </span>
              <Sparkles size={12} className="text-white/60" />
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-7">
              Building{' '}
              <span className="relative inline-block">
                Scalable
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-white/30 rounded-full origin-left"
                />
              </span>
              <br />
              <span className="text-white/50">Digital Products.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/75 mb-10 leading-relaxed max-w-2xl">
              I'm{' '}
              <span className="text-white font-bold">Pratham Modi</span>, a{' '}
              <span className="text-blue-200 font-semibold">Java Full Stack Developer</span> specialising
              in enterprise backend architecture and elegant React frontends.
            </p>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Java', 'Spring Boot', 'React', 'Liferay', 'PostgreSQL', 'REST APIs'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="white" size="xl" className="font-bold">
                <a href="#projects">
                  View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline-white" size="xl" className="font-bold">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline-white" size="xl" className="font-bold">
                <a href="/resume.pdf" download="Pratham_Modi_Resume.pdf">
                  <FileDown size={18} /> Download Résumé
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
