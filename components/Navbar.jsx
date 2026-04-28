'use client';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 backdrop-blur-xl bg-[#050505]/70 border-b border-white/5' : 'py-8 bg-transparent'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 border-2 border-purple-500 rotate-45 flex items-center justify-center">
            <span className="text-[10px] font-bold -rotate-45 text-white">BA</span>
          </div>
          <span className="tracking-[0.3em] text-[11px] font-bold uppercase text-white/80 hidden sm:block">Bilisa Assefa</span>
        </div>
        <div className="hidden md:flex space-x-8 text-[11px] font-medium uppercase tracking-widest text-white/50">
          {['About', 'Projects', 'Skills', 'Vision', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white/60 hover:text-purple-400 transition-colors uppercase text-xs tracking-[0.2em]"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="md:hidden text-white hover-target">
          <div className="w-6 h-px bg-white mb-2"></div>
          <div className="w-4 h-px bg-white ml-auto"></div>
        </button>
      </div>
    </motion.nav>
  );
}
