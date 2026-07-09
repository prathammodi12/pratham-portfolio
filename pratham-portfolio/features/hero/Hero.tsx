import React from "react";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GradientText } from "@/components/ui/GradientText";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-0">
      {/* Animated Background Blobs — will-change keeps them off the main layer */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none"
        style={{ willChange: "transform" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Photo Card — critical, no initial delay */}
          <ScrollReveal
            viewportTrigger={false}
            scale={0.95}
            duration={0.5}
            className="order-2 lg:order-1 relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-[32px] blur-2xl opacity-30 dark:opacity-20 animate-pulse pointer-events-none" />
            <GlassPanel className="p-2 rounded-[32px] border-slate-200 dark:border-slate-700/50">
              <div className="rounded-[24px] overflow-hidden bg-slate-200 dark:bg-slate-900 aspect-[3/4] relative">
                <Image
                  src="/pratham portfolio.webp"
                  alt="Pratham Modi — Java Full Stack Developer"
                  width={480}
                  height={640}
                  priority
                  className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                <GlassPanel className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl border-white/20">
                  <p className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-1 opacity-70">
                    Focus Areas
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    Full Stack Engineering • Architecture • Modern UI
                  </p>
                </GlassPanel>
              </div>
            </GlassPanel>
          </ScrollReveal>

          {/* Right Column: Text & CTAs */}
          <div className="order-1 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Top Badge */}
            <ScrollReveal
              viewportTrigger={false}
              direction="down"
              distance={12}
              duration={0.4}
              className="inline-flex"
            >
              <Badge variant="default" className="inline-flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                  Java Full Stack Developer
                </span>
              </Badge>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal
              viewportTrigger={false}
              direction="up"
              distance={16}
              duration={0.45}
              delay={0.08}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-slate-900 dark:text-white">
                Building{" "}
                <GradientText>
                  scalable and reliable
                </GradientText>{" "}
                systems.
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal
              viewportTrigger={false}
              direction="up"
              distance={16}
              duration={0.45}
              delay={0.16}
            >
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl mb-10 leading-relaxed">
                I'm{" "}
                <span className="text-slate-900 dark:text-white font-semibold">
                  Pratham Modi
                </span>
                , a Java Full Stack Developer dedicated to crafting resilient
                backend architectures and integrating them into modern,
                data-driven web applications.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal
              viewportTrigger={false}
              direction="up"
              distance={16}
              duration={0.45}
              delay={0.24}
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button variant="primary" asChild>
                  <a href="#projects">
                    View Projects <ArrowRight size={20} />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/Pratham_Modi_Resume.pdf" download="Pratham_Modi_Resume.pdf">
                    Resume <Download size={20} />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
