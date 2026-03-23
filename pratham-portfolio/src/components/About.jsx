import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Lightbulb, MapPin } from 'lucide-react';

const stats = [
  { value: '1', label: 'Live Platform' },
  { value: '6+', label: 'Months Exp.' },
  { value: '10+', label: 'APIs Built' },
];

const About = () => {
  return (
    <section id="about" className="bg-white border-b border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Me</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Engineering{' '}
              <span className="text-primary">excellence</span>{' '}
              through technical depth.
            </h2>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mt-8">
              {stats.map((s) => (
                <Card key={s.label} className="flex-1 min-w-[100px] text-center py-5 px-4 hover:border-primary/40 hover:shadow-lg transition-all">
                  <p className="text-3xl font-black text-primary leading-none mb-1">{s.value}</p>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{s.label}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a results-driven{' '}
              <span className="font-bold text-slate-900">Java Full Stack Developer</span>{' '}
              focused on enterprise-grade software development and seamless system integration.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              At <span className="font-bold text-primary">7Span</span>, I played a pivotal role in
              engineering <strong>Zeveal</strong> — a mission-critical workforce tracking platform —
              spanning backend entities, REST APIs, and polished React dashboards.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              I specialise in bridging complex backend logic with seamless user workflows,
              ensuring every line of code contributes to a scalable enterprise ecosystem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border">
              <Card className="p-5 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap size={18} className="text-primary" />
                  <h4 className="text-sm font-bold uppercase tracking-wide">Education</h4>
                </div>
                <p className="text-sm font-semibold text-slate-700">LDRP Institute of Technology</p>
                <p className="text-xs text-muted-foreground mt-1">Computer Engineering</p>
              </Card>

              <Card className="p-5 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb size={18} className="text-primary" />
                  <h4 className="text-sm font-bold uppercase tracking-wide">Key Expertise</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['System Architecture', 'API Engineering', 'React UI'].map((t) => (
                    <Badge key={t} variant="blue">{t}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
