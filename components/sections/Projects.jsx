'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import Image from 'next/image';

const allProjects = [
  {
    title: 'Vibers AI',
    description: 'An intelligent AI-powered website editor. Generate, stylize, and deploy entire digital experiences entirely through natural language orchestration.',
    tech: ['React', 'AI Integration', 'Tailwind'],
    gradient: 'from-purple-500 to-indigo-600',
    year: '2025',
    imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    url: 'https://vibersai.lovable.app/'
  },
  {
    title: 'Netflix Clone',
    description: 'A pixel-perfect replica of Netflix featuring dynamic movie fetching via an external Movie API, seamless UI recreation, and smooth transitions.',
    tech: ['React JS', 'Movie API', 'CSS'],
    gradient: 'from-red-600 to-zinc-900',
    year: '2024',
    imageSrc: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    url: 'https://bibonet.netlify.app/'
  },
  {
    title: 'AI Chat Bot',
    description: 'A conversational AI interface powered by the Gemini API. Features contextual responses, and a sleek, fast UI built with Tailwind CSS.',
    tech: ['React', 'Tailwind', 'Gemini API'],
    gradient: 'from-blue-600 to-cyan-500',
    year: '2024',
    imageSrc: 'https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1000&auto=format&fit=crop',
    url: 'https://biboai.netlify.app'
  },
  {
    title: 'Boom AI',
    description: 'An advanced AI tool that intelligently extracts objects from images and allows seamless AI-driven edits and background replacement.',
    tech: ['React', 'Vision AI', 'Tailwind'],
    gradient: 'from-orange-500 to-pink-600',
    year: '2025',
    imageSrc: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000&auto=format&fit=crop',
    url: 'https://boomai-two.vercel.app/'
  },
  {
    title: 'FocusON',
    description: 'A productivity Chrome extension engineered for extreme hyper-focus. Block distractions, track workflow momentum, and lock into the zone.',
    tech: ['JavaScript', 'Browser API', 'CSS'],
    gradient: 'from-blue-500 to-teal-400',
    year: '2024',
    imageSrc: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'AI Translator',
    description: 'A powerful Chrome extension enabling instant, context-aware translations of words and sentences across any web page using AI.',
    tech: ['JavaScript', 'Chrome Extension API', 'AI API'],
    gradient: 'from-emerald-500 to-teal-700',
    year: '2024',
    imageSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    url: '#'
  }
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(2);

  const toggleProjects = () => {
    if (visibleCount < allProjects.length) {
      setVisibleCount(allProjects.length);
    } else {
      // scroll back up a bit before collapsing
      const element = document.getElementById('projects');
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
        setTimeout(() => setVisibleCount(2), 500);
      } else {
        setVisibleCount(2);
      }
    }
  };

  const visibleProjects = allProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="relative py-32 bg-[#030305] overflow-hidden border-t border-white/5">
      {/* Background glow lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="text-purple-400 font-mono text-xs tracking-[0.2em] uppercase mb-4">02 // Architectures</div>
          <h2 className="font-space font-bold text-4xl md:text-6xl text-white">
            Selected Works
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-32">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 flex justify-center">
          <button 
            onClick={toggleProjects}
            className="flex items-center gap-3 px-8 py-4 border border-white/20 glass text-white font-space font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors hover-target group"
          >
            {visibleCount < allProjects.length ? (
              <>
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                Initialize More Instances
              </>
            ) : (
              <>
                <Minus className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-300" />
                Collapse Instances
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center group`}
    >
      {/* Visual Placeholder */}
      <div className="w-full md:w-3/5 aspect-video relative overflow-hidden bg-[#0a0a0f] border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500 rounded-lg">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105"
        />
        
        <div className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 bg-gradient-to-br ${project.gradient} mix-blend-overlay`} />
        
        <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-space font-bold text-5xl md:text-7xl text-white/10 uppercase tracking-tighter mix-blend-overlay whitespace-nowrap z-10 pointer-events-none">
          {project.title}
        </div>
        
        {/* Abstract 3D shape simulation via CSS */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rotate-45 group-hover:rotate-90 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] z-20 pointer-events-none" />
      </div>

      {/* Info */}
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-sm text-purple-400">{project.year}</span>
          <div className="h-px w-12 bg-white/20" />
        </div>
        
        <h3 className="font-space font-bold text-3xl md:text-4xl text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-white/80 glass rounded-full">
              {t}
            </span>
          ))}
        </div>

        <a href={project.url} target={project.url !== '#' ? "_blank" : "_self"} rel={project.url !== '#' ? "noopener noreferrer" : ""} className="inline-flex items-center gap-2 text-white font-space font-bold uppercase tracking-wider text-sm hover:text-purple-400 transition-colors w-max hover-target outline-none">
          View Protocol <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
}
