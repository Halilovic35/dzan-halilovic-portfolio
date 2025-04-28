'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imagePath: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, technologies, imagePath, githubUrl, liveUrl, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative bg-black/20 rounded-xl overflow-hidden backdrop-blur-sm
                 border border-white/10 shadow-lg hover:shadow-accent/20 transition-all duration-300
                 flex flex-col h-full"
    >
      {/* Project Image */}
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="relative h-48 md:h-56 overflow-hidden cursor-pointer">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      )}
      {!liveUrl && (
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gradient">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-3 md:line-clamp-none">{description}</p>
        
        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent transition-colors"
            >
              <FaGithub className="text-lg" />
              <span>View Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent transition-colors md:ml-auto"
            >
              <span>{title === "PodoMed Excellence" ? "Live" : "Live Demo"}</span>
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    title: "PodoMed Excellence",
    description: "A professional medical podiatry practice website built with modern web technologies. Features include appointment booking, service information, and team profiles. The site showcases the practice's expertise in medical foot care and podology services. (Client Project - Actively Maintained)",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Font Awesome", "AOS Library", "Google Fonts"],
    imagePath: "/images/podomed-excellence.png",
    liveUrl: "https://podomed-excellence.de/"
  },
  {
    title: "NeuraFit",
    description: "A comprehensive fitness platform with a robust backend system. Leverages AI to provide personalized workout plans and training guidance. Features include user authentication, AI-powered chat assistance, detailed progress tracking, and secure data management.",
    technologies: [
      "Next.js (Frontend & Backend)",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "OpenAI API",
      "JWT Authentication",
      "Radix UI",
      "Framer Motion",
      "Jest",
      "bcrypt",
      "Node.js",
      "Express"
    ],
    imagePath: "/images/NeuraFit1.png",
    githubUrl: "https://github.com/Halilovic35/neurafit",
    liveUrl: "https://neurafit-production.up.railway.app/"
  },
  {
    title: "Lumare Restaurant",
    description: "A modern Italian restaurant website featuring an elegant design with interactive menu, gallery, and contact sections. Built with React, TypeScript, and Tailwind CSS.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "EmailJS",
      "Lucide React Icons"
    ],
    imagePath: "/images/lumare-restaurant.png",
    liveUrl: "https://lumare-restaurant.vercel.app/",
    githubUrl: "https://github.com/Halilovic35/lumare-restaurant"
  },
  {
    title: "AI News Summarizer",
    description: "An AI-powered web application that generates concise summaries of news articles using OpenAI's GPT-3.5 API. Users simply input any article URL, choose a language and summary length, and receive an AI-generated result instantly. Frontend is deployed via Vercel, backend via Railway.",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "OpenAI API"],
    imagePath: "/images/ai-news-summarizer.png",
    githubUrl: "https://github.com/Halilovic35/ai-news-summarizer",
    liveUrl: "https://ai-news-summarizer-client.vercel.app/"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-4" data-section="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
        >
          Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-16"
        >
          Here are some of my recent projects that showcase my skills and experience in web development.
          Each project represents a unique challenge and demonstrates different aspects of my technical expertise.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 