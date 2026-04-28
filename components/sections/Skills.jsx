'use client';
import { motion } from 'motion/react';

const skills = [
  "React Engine", "JavaScript", "Tailwind CSS", "Node Environments", 
  "Firebase Data", "AI Integration", "Prompt Eng.", "UI/UX Architecture"
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-[#030305] border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center">
        <div className="text-center mb-16">
          <div className="text-purple-400 font-mono text-xs tracking-[0.2em] uppercase mb-4">03 // Technical Arsenal</div>
          <h2 className="font-space font-bold text-4xl md:text-5xl text-white">
            Core Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 text-center border border-white/5 hover:border-purple-500/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="font-mono text-xs text-white/40 mb-2">MOD_0{idx + 1}</div>
              <div className="font-space font-bold text-lg text-white group-hover:text-purple-300 transition-colors relative z-10">
                {skill}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Abstract orbital visual */}
        <div className="mt-32 relative w-64 h-64 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-white/20"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-purple-500/30"
          >
            <div className="absolute top-0 left-1/2 -ml-2 -mt-2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          </motion.div>
          <div className="absolute inset-16 rounded-full glass flex items-center justify-center font-space font-bold text-white text-xl">
            BA
          </div>
        </div>

      </div>
    </section>
  );
}
