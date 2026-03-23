import React from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const contactLinks = [
  {
    label: 'Email',
    value: 'prathammodi17@gmail.com',
    href: 'mailto:prathammodi17@gmail.com',
    icon: <Mail size={16} />,
  },
  {
    label: 'LinkedIn',
    value: '/in/prathammodi-',
    href: 'https://linkedin.com/in/prathammodi-',
    icon: <Linkedin size={16} />,
  },
  {
    label: 'GitHub',
    value: '/prathammodi12',
    href: 'https://github.com/prathammodi12',
    icon: <Github size={16} />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-50/60 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left side */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
              Ready for the{' '}
              <span className="text-primary">next challenge.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Exploring full-stack engineering opportunities. Let's discuss how I can
              contribute to your engineering team.
            </p>

            <div className="space-y-3">
              {contactLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-800">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right side: form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Your Name
                      </label>
                      <Input placeholder="John Doe" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Email Address
                      </label>
                      <Input type="email" placeholder="john@company.com" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Subject
                    </label>
                    <Input placeholder="Let's work together" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about the opportunity or project..."
                      rows={5}
                    />
                  </div>

                  <Button disabled className="w-full h-12 font-bold gap-2">
                    <Send size={16} />
                    Send Message
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Available for remote and on-site collaborations worldwide.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
