'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-[#030305] text-white"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex flex-col items-start w-64">
        <motion.div 
          className="text-xs tracking-[0.3em] text-purple-400 mb-2 font-mono uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          System Initializing
        </motion.div>
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-purple-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
            layout
          />
        </div>
        <div className="flex justify-between w-full font-space text-4xl font-bold">
          <span>{Math.min(progress, 100)}</span>
          <span className="text-white/20">%</span>
        </div>
      </div>
      <div className="absolute bottom-10 left-10 font-mono text-xs text-white/30 truncate max-w-[80vw]">
        &gt; CONNECTING TO BILISA_ASSEFA_NODES... {progress > 50 ? 'OK' : 'WAIT'}
      </div>
    </motion.div>
  );
}
