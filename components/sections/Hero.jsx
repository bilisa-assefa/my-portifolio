'use client';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-start md:items-center text-left md:text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-1 space-y-1"
        >
          <span className="text-purple-400 font-mono text-sm tracking-tighter block uppercase">[System.v01] Initiating creative portal...</span>
        </motion.div>

        <motion.h1 
          className="font-space font-black text-6xl md:text-[110px] leading-[0.85] tracking-tight text-white uppercase mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          BILISA <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            ASSEFA
          </span>
        </motion.h1>

        <motion.p 
          className="text-white/60 md:text-xl text-lg max-w-2xl font-normal leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Student, Entrepreneur & Web Developer. <br className="hidden md:block"/>
          Building futuristic digital experiences and <span className="text-purple-300">AI-powered</span> tools.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-10"
        >
          <a href="#projects" className="px-8 py-4 bg-white text-black font-space font-bold uppercase tracking-widest text-xs hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center hover-target">
            Enter Experience
          </a>
          <div className="flex flex-col items-start md:items-center text-left md:text-center mt-4 sm:mt-0">
            <span className="text-[10px] uppercase text-white/40 tracking-tighter">Current Location</span>
            <span className="text-sm font-mono tracking-widest text-white/80">Addis Ababa, Ethiopia</span>
          </div>
        </motion.div>

      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </section>
  );
}
