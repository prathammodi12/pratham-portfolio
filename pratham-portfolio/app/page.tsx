import React from "react";
import Navbar from "@/features/navbar/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import Experience from "@/features/experience/Experience";
import Projects from "@/features/projects/Projects";
import Skills from "@/features/skills/Skills";
import Contact from "@/features/contact/Contact";
import Footer from "@/features/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
