import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Database, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const bundles = [
  {
    label: 'Core Engineering',
    icon: <Cpu size={20} />,
    color: 'text-blue-600',
    bg: 'bg-blue-500',
    badgeVariant: 'blue',
    skills: ['Java SE / EE', 'Spring Boot', 'Liferay Service Builder', 'Microservices Architecture'],
  },
  {
    label: 'Frontend Systems',
    icon: <Layout size={20} />,
    color: 'text-indigo-600',
    bg: 'bg-slate-900',
    badgeVariant: 'indigo',
    skills: ['React.js', 'Modern JavaScript (ES6+)', 'Tailwind CSS', 'Enterprise UI Design'],
  },
  {
    label: 'Data Architecture',
    icon: <Database size={20} />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-500',
    badgeVariant: 'emerald',
    skills: ['PostgreSQL', 'MySQL Administration', 'MongoDB NoSQL', 'Relational Mapping'],
  },
  {
    label: 'Developer Toolchain',
    icon: <Terminal size={20} />,
    color: 'text-amber-600',
    bg: 'bg-amber-400',
    badgeVariant: 'amber',
    skills: ['Git / GitHub', 'Postman API Testing', 'IntelliJ / VS Code', 'CI/CD Foundations'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white border-b border-border">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <span className="section-label">Capability Stack</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Tools of the trade.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My technical focus is built on scalability, reliability, and performance — 
              choosing technologies that empower enterprise growth.
            </p>
          </div>

          {/* Summary card */}
          <Card className="p-6 flex-shrink-0 w-full lg:w-64 hover:shadow-lg hover:border-primary/30 transition-all">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Current Focus</p>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              Architecting modular Liferay services with modern React frontends and clean data layers.
            </p>
            <div className="mt-4 w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            </div>
          </Card>
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bundles.map((bundle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-6 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${bundle.bg} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {bundle.icon}
                </div>

                <h3 className="text-base font-bold uppercase tracking-wide mb-5 text-slate-800">
                  {bundle.label}
                </h3>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {bundle.skills.map((skill) => (
                    <Badge key={skill} variant={bundle.badgeVariant} className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
