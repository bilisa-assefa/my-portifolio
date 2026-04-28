'use client';
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Vision from '@/components/sections/Vision';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Avoid scrollbar issues during preloader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Navbar />
          <main className="bg-[#030305] min-h-screen text-slate-200">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Vision />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
