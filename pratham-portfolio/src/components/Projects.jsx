import React from 'react';
import { motion } from 'framer-motion';
import { Target, Activity, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';

const caseStudyCards = [
  {
    icon: <Target size={22} />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    title: 'The Challenge',
    desc: 'Companies lacked real-time visibility into remote employee productivity, causing reporting delays and administrative overhead.',
    variant: 'blue',
  },
  {
    icon: <Activity size={22} />,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    title: 'Core Actions',
    desc: 'Developed backend entities using Liferay Service Builder and engineered RESTful APIs bridging data to React dashboards.',
    variant: 'amber',
  },
  {
    icon: <CheckCircle2 size={22} />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'The Result',
    desc: 'Shipped a live, scalable platform with role-based monitoring for thousands of employees across departments.',
    variant: 'emerald',
  },
];

const techStack = [
  { l: 'Platform', v: 'Liferay Portal' },
  { l: 'Backend', v: 'Java / Spring' },
  { l: 'Frontend', v: 'React.js' },
  { l: 'Database', v: 'PostgreSQL' },
  { l: 'Auth', v: 'RBAC / LDAP' },
  { l: 'DevOps', v: 'Git / Gradle' },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white border-b border-border">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="section-label">Featured Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5">
            Case Study:{' '}
            <span className="text-primary">Zeveal</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Architecting a high-concurrency remote workforce tracking platform for enterprise-scale
            employee monitoring and productivity management.
          </p>
        </div>

        {/* STAR cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudyCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Card className="h-full p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center ${card.color} mb-5`}>
                  {card.icon}
                </div>
                <h3 className="text-base font-bold uppercase tracking-wide mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Deep dive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: description */}
              <div className="p-8 lg:p-12">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
                  Full Stack Implementation
                </h4>

                <div className="space-y-8">
                  <div>
                    <h5 className="text-lg font-bold mb-2 text-slate-900">Backend Engineering</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Complex business logic via Liferay Service Builder. Designed relational schemas
                      for Work Logs, Notifications, and Employee Departments.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold mb-2 text-slate-900">API Architecture</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Secure, versioned endpoints using Liferay REST Builder ensuring optimised
                      data transfer between the portal and modern React UI components.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold mb-2 text-slate-900">Frontend Integration</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Rich React dashboards with role-based views, real-time status updates, and
                      accessible notification management interfaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: tech stack */}
              <div className="bg-slate-900 p-8 lg:p-12">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-8">
                  Technical Stack
                </h4>
                <div className="grid grid-cols-2 gap-5">
                  {techStack.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.l}</p>
                      <p className="text-sm font-semibold text-white">{item.v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">Outcomes</p>
                  <div className="flex flex-wrap gap-2">
                    {['Live Platform', '6+ Months', 'Enterprise Scale', 'RBAC Security'].map((t) => (
                      <Badge key={t} className="bg-white/10 border-white/20 text-white/80 hover:bg-white/20 border text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
