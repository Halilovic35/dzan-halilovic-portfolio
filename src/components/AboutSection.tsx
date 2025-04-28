'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

interface PanelProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
}

const panelVariants = {
  hidden: (custom: { x: number; y: number }) => ({
    opacity: 0,
    x: custom.x * 1.5,
    y: custom.y * 1.5,
    scale: 0.95
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.5
    }
  }
};

const DraggablePanel = ({ title, children, className = "", initialX = 0, initialY = 0 }: PanelProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      drag={!isMobile}
      dragMomentum={false}
      variants={panelVariants}
      custom={{ x: initialX, y: initialY }}
      whileHover={!isMobile ? { 
        scale: 1.02,
        boxShadow: "0 8px 32px rgba(var(--current-accent), 0.15)",
        transition: { duration: 0.2 }
      } : {}}
      whileDrag={{ scale: 1.02, cursor: "grabbing" }}
      className={`glass ${isMobile ? 'relative mb-6 mx-auto' : 'absolute'} 
        ${!isMobile && 'cursor-grab active:cursor-grabbing'}
        p-4 sm:p-6 rounded-xl backdrop-blur-md 
        border border-white/10 shadow-lg
        w-[90%] sm:w-[400px] h-auto sm:h-[200px] ${className}`}
      style={!isMobile ? {
        left: `calc(50% + ${initialX}px - 200px)`,
        top: `calc(50% + ${initialY}px - 100px)`
      } : undefined}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gradient">{title}</h3>
      <div className="overflow-y-auto max-h-[calc(100%-2rem)] pr-2 custom-scrollbar">
        {children}
      </div>
    </motion.div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen py-20 px-4" data-section="about">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-24 text-center text-gradient"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="relative h-auto sm:h-[800px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Who I Am panel */}
          <DraggablePanel 
            title="Who I Am" 
            initialX={-300}
            initialY={-100}
            className="z-20"
          >
            <p className="text-gray-300/90 text-sm leading-relaxed">
              I&apos;m a Frontend Developer specializing in building responsive, modern websites and scalable web applications. I work primarily with React, Next.js, TypeScript, Tailwind CSS, and JavaScript. Through my role at Finanz Informatik and my independent development work, I have gained strong experience in creating production-ready digital solutions.<br /><br />
              My focus is on writing clean, maintainable code, ensuring performance, accessibility, and delivering seamless user experiences. I am passionate about continuous learning, keeping up with the latest technologies, and contributing to impactful web projects.
            </p>
          </DraggablePanel>

          {/* Skills & Technologies panel */}
          <DraggablePanel 
            title="Skills & Technologies"
            initialX={300}
            initialY={-100}
            className="z-10"
          >
            <div className="space-y-3 sm:space-y-4 text-gray-200 text-xs sm:text-sm">
              <div>
                <h4 className="font-semibold text-accent mb-1">Frontend</h4>
                <p className="leading-relaxed">
                  <span className="font-medium">React.js</span>, 
                  <span className="font-medium"> TypeScript</span>, 
                  JavaScript, HTML5, CSS (Cascading Style Sheets), Tailwind CSS, User Interface Design, Responsive Web Design
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-1">Backend & Others</h4>
                <p className="leading-relaxed">
                  <span className="font-medium">Node.js</span>, 
                  <span className="font-medium"> Java</span>, 
                  <span className="font-medium"> Git</span>, 
                  Shopify, OpenAI API
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-1">Languages</h4>
                <p className="leading-relaxed">
                  Bosnian, English, German
                </p>
              </div>
            </div>
          </DraggablePanel>

          {/* Me Online panel */}
          <DraggablePanel 
            title="Me Online"
            initialX={-300}
            initialY={100}
            className="z-30"
            data-panel="me-online"
          >
            <ul className="space-y-2 sm:space-y-3 text-gray-200 text-xs sm:text-sm">
              <li className="flex items-center gap-2 sm:gap-3">
                <FaGithub className="text-lg sm:text-xl text-accent" />
                <a href="https://github.com/Halilovic35" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-accent transition-colors truncate"
                >
                  github.com/Halilovic35
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <FaLinkedin className="text-lg sm:text-xl text-accent" />
                <a href="https://linkedin.com/in/dzan-halilovic-b944b2255" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-accent transition-colors truncate"
                >
                  linkedin.com/in/dzan-halilovic-b944b2255
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <FaEnvelope className="text-lg sm:text-xl text-accent" />
                <a href="mailto:haallilovic@gmail.com"
                   className="hover:text-accent transition-colors truncate"
                >
                  haallilovic@gmail.com
                </a>
              </li>
            </ul>
          </DraggablePanel>

          {/* Where I Work panel */}
          <DraggablePanel 
            title="Where I Work"
            initialX={300}
            initialY={100}
            className="z-40"
          >
            <div className="space-y-3 sm:space-y-4 text-gray-200 text-xs sm:text-sm">
              <div className="flex items-start gap-2 sm:gap-3">
                <FaMapMarkerAlt className="text-lg sm:text-xl text-accent flex-shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Currently based in Frankfurt, Germany 🇩🇪
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <FaGlobe className="text-lg sm:text-xl text-accent flex-shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Available for remote jobs across Europe &amp; worldwide 🌍
                </p>
              </div>
            </div>
          </DraggablePanel>
        </motion.div>
      </div>
    </section>
  );
} 