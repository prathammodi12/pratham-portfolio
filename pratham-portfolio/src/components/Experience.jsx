import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';

const responsibilities = [
  {
    title: 'Architected Backend Entities',
    desc: 'Leveraged Liferay Service Builder to design scalable relational data structures for workforce management.',
  },
  {
    title: 'Engineered REST APIs',
    desc: 'Built robust, versioned endpoints via Liferay REST Builder for high-fidelity frontend data communication.',
  },
  {
    title: 'Frontend System Integration',
    desc: 'Seamlessly integrated React.js components within Liferay, prioritising UX fluidity and performance.',
  },
  {
    title: 'Security & RBAC',
    desc: 'Implemented permission-based access control across Departments, Work Logs, and Notifications.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-50/60 border-y border-border">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Professional Tenure.
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world experience building enterprise software at speed.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-border" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-16 md:pl-24"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 md:left-5.5 top-6 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md" />

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                {/* Card top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500" />

                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <CardTitle className="text-2xl font-black">7Span Pvt. Ltd.</CardTitle>
                      <CardDescription className="mt-1 flex flex-wrap items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin size={13} /> Ahmedabad, India
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} /> Oct 2025 – Mar 2026
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <Badge variant="blue" className="text-xs">Java Full Stack Developer</Badge>
                      <Badge variant="slate" className="text-xs">Internship</Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {responsibilities.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all duration-200"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-slate-800">{item.title}</p>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech stack row */}
                  <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border">
                    {['Java', 'Liferay', 'Spring Boot', 'React.js', 'PostgreSQL', 'REST Builder', 'Git'].map((t) => (
                      <Badge key={t} variant="outline">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
