'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative py-32 border-t border-white/10 bg-[#030305]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block text-purple-400 font-mono text-xs tracking-[0.2em] uppercase">01 // Identity</div>
            <h2 className="font-space font-bold leading-tight text-4xl md:text-6xl text-white">
              Shaping the <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Digital Frontier.
              </span>
            </h2>
            <div className="h-px w-full max-w-sm bg-gradient-to-r from-white/20 to-transparent my-4" />
            <p className="text-white/60 text-lg leading-relaxed">
              I am a driven student and entrepreneur based in Ethiopia, passionately exploring the intersection of modern web development and artificial intelligence. 
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Operating with zero budget but infinite ambition, I build scalable tools and immersive platforms designed to solve real-world problems. My vision transcends code—I aim to craft digital ecosystems that empower users globally.
            </p>
            
            <div className="flex gap-4 mt-4">
              <div className="glass p-4 border-l-2 border-purple-500">
                <div className="font-space font-bold text-2xl text-white">100%</div>
                <div className="text-xs text-white/40 font-mono uppercase mt-1">Self-Taught</div>
              </div>
              <div className="glass p-4 border-l-2 border-blue-500">
                <div className="font-space font-bold text-2xl text-white">Infinite</div>
                <div className="text-xs text-white/40 font-mono uppercase mt-1">Ambition</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-sm mx-auto aspect-square md:aspect-[4/5] group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full scale-90 group-hover:bg-blue-600/30 transition-colors duration-700" />
            
            {/* Surrounding Geometric Accents */}
            <div className="absolute -inset-4 border border-white/10 rounded-3xl z-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute -inset-8 border border-white/5 rounded-3xl z-0 transition-transform duration-700 delay-75 group-hover:scale-110" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden glass z-10 p-2 border-white/10 shadow-2xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                {/* 
                  NOTE: Image Generation quota was exceeded, so a high-quality stylized placeholder matching the dark sleek aesthetic is used. 
                  To use your photo: add it to the 'public' folder and name it 'profile.png'.
                  If it's a .jpg, rename it or update the src below to '/profile.jpg' 
                */}
                <Image 
                  src="/profile.png" 
                  alt="Bilisa Assefa"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                  priority
                  unoptimized
                />
                
                {/* Tech Overlay lines */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-transparent to-transparent pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 bg-purple-900/10 pointer-events-none mix-blend-color" />
                <div className="absolute inset-0 bg-transparent border-[0.5px] border-white/20 rounded-xl pointer-events-none" />
                <div className="absolute top-4 left-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]" />
                
                {/* Subtitle/Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-lg p-4 flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-purple-400 font-mono tracking-widest">Identity Confirmed</span>
                    <span className="text-xs text-white font-bold tracking-widest mt-1 uppercase">BILISA_ASSEFA</span>
                  </div>
                  <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center bg-white/5 relative overflow-hidden">
                     <div className="absolute inset-0 bg-blue-500/20"></div>
                     <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] relative z-10"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass px-6 py-4 z-20 backdrop-blur-md hidden md:block border border-purple-500/20 shadow-xl">
              <div className="text-xs font-mono text-purple-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> LOC: ETH
              </div>
              <div className="text-sm font-space font-bold text-white mt-1 uppercase tracking-wider">Mission Control</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
