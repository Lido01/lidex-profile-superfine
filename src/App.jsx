import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Scene3D from './components/canvas/Scene3D';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import BentoAbout from './components/sections/BentoAbout';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  const containerRef = useRef(null);

  // Scroll-linked camera zoom into the laptop screen
  const { scrollYProgress } = useScroll();

  // Background zooms in from 1.15x up to 1.95x as user scrolls through the initial 40% of the page
  const bgScale = useTransform(scrollYProgress, [0, 0.45], [1.15, 1.95]);
  const bgY = useTransform(scrollYProgress, [0, 0.45], ['0%', '-12%']);
  const overlayDarkness = useTransform(scrollYProgress, [0, 0.25], [0.35, 0.88]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#050816] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden"
    >
      {/* 1. Underlying WebGL Celestial Starfield */}
      <Scene3D />

      {/* 2. Fixed Spatial Laptop Background with Scroll-Driven Zoom */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          style={{
            scale: bgScale,
            y: bgY
          }}
          className="absolute inset-0 w-full h-full bg-cover bg-center origin-[50%_50%]"
        >
          <img
            src="/spatial-laptop.jpg"
            alt="Spatial Computing Workstation"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Dynamic Dark Scrim that intensifies as you enter the screen depth */}
        <motion.div
          style={{ opacity: overlayDarkness }}
          className="absolute inset-0 bg-[#050816] transition-opacity"
        />

        {/* Hairline Grid & Vignette for architectural senior developer mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/50 via-transparent to-[#050816]" />
        <div className="absolute inset-0 cyber-grid opacity-25" />
      </div>

      {/* 3. Minimalist Architectural Navigation */}
      <Navbar />

      {/* 4. Main Scrollable Content Layer (Appears scrolling out of the computer display) */}
      <main className="relative z-10">
        <Hero />
        <BentoAbout />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* 5. Minimalist Engineering Footer */}
      <Footer />
    </div>
  );
}

export default App;
