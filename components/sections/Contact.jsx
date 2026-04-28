'use client';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const handleSendTransmission = (e) => {
    e.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=bilisaassefa@gmail.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative pt-32 pb-16 bg-[#030305] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="font-space font-bold text-5xl md:text-7xl text-white mb-6">
            Initiate Contact.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Currently open for freelance opportunities, collaborations, and conversations about the future of web tech and AI.
          </p>
          
          <button onClick={handleSendTransmission} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-space font-bold uppercase tracking-wider text-sm rounded-none hover:bg-purple-100 transition-colors hover-target group outline-none">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Send Transmission
          </button>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="flex gap-6 items-center">
            <a href="https://github.com/bilisa-assefa" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-purple-400 transition-colors hover-target">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/bilisa-assefa-74aa88333/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-purple-400 transition-colors hover-target">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/biboboss_ethio" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-purple-400 transition-colors hover-target flex items-center justify-center">
              <span className="font-bold text-xl leading-none" style={{ fontFamily: 'sans-serif' }}>X</span>
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="font-space font-bold text-white/80 text-lg mb-1">Bilisa Assefa <span className="text-purple-500">.</span></div>
            <div className="font-mono text-xs text-white/40 tracking-widest uppercase">Building the Future &copy; {new Date().getFullYear()}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
