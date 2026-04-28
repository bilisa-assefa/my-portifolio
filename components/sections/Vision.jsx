'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const visionLogs = [
  {
    phase: "PHASE 01",
    title: "AI Ecosystems",
    desc: "Developing autonomous, AI-driven applications that augment human creativity rather than replacing it."
  },
  {
    phase: "PHASE 02",
    title: "Venture Genesis",
    desc: "Scaling software solutions into full-fledged tech ventures, starting with zero budget and compounding execution."
  },
  {
    phase: "PHASE 03",
    title: "Global Impact",
    desc: "Deploying platforms that solve tangible, real-world problems for users across the globe, originating from Ethiopia."
  }
];

export default function Vision() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineScale = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section id="vision" className="relative py-32 bg-[#050505] border-t border-white/5" style={{ position: 'relative' }} ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3 md:sticky top-32 h-fit">
          <div className="text-purple-400 font-mono text-xs tracking-[0.2em] uppercase mb-4">04 // Mission Log</div>
          <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-6">
            Future <br className="hidden md:block" /> Roadmap.
          </h2>
          <p className="text-white/60 leading-relaxed">
            The objective isn&apos;t just to write code. It&apos;s to build systems that scale, companies that last, and tools that elevate the human experience.
          </p>
        </div>

        <div className="md:w-2/3 relative pl-8 md:pl-16">
          {/* Animated vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-blue-500 origin-top"
            style={{ scaleY: lineScale }}
          />

          <div className="flex flex-col gap-16">
            {visionLogs.map((log, idx) => (
              <motion.div
                key={log.phase}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="relative"
              >
                {/* Node on the line */}
                <div className="absolute -left-8 md:-left-16 w-3 h-3 rounded-full bg-[#030305] border-2 border-purple-500 top-1.5 -ml-[1.5px]" />
                
                <div className="font-mono text-sm text-purple-400 mb-2">{log.phase}</div>
                <h3 className="font-space font-bold text-2xl text-white mb-4">{log.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  {log.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
