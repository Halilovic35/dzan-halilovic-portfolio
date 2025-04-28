'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Navbar from "@/components/Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.setAttribute('data-section', 'home');
  }, []);

  const scrollToMeOnline = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentSection(section);
            document.documentElement.setAttribute('data-section', section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute text-[15rem] sm:text-[20rem] text-current/10 font-mono top-20 -left-20 hidden md:block"
        >
          {'{'}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute text-[15rem] sm:text-[20rem] text-current/10 font-mono bottom-20 -right-20 hidden md:block"
        >
          {'}'}
        </motion.span>
        <div className="absolute top-1/4 left-1/4 text-4xl sm:text-6xl text-current/10 floating hidden md:block">#</div>
        <div className="absolute bottom-1/4 right-1/4 text-4xl sm:text-6xl text-current/10 floating hidden md:block">&lt;/&gt;</div>
      </div>

      <Navbar currentSection={currentSection} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen w-full flex items-center justify-center px-4 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 sm:px-6"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 glow tracking-tight leading-tight"
          >
            Hi, I&apos;m Džan,{' '}
            <div className="mt-2 sm:mt-3">
              a <span className="text-gradient">frontend</span> developer
            </div>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/90 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed"
          >
            I build high-quality websites and web applications with a focus on clean code, performance, and smooth user experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* Fixed Button */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        onClick={scrollToMeOnline}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 btn-accent font-medium 
                 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full
                 hover:scale-105 active:scale-95 transition-all duration-300
                 shadow-lg hover:shadow-accent/20 backdrop-blur-sm"
      >
        Let&apos;s work together
      </motion.button>

      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
