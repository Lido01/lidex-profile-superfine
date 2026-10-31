import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[78vh] sm:min-h-[84vh] flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-8 text-center z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Primary Role Stamp */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 font-mono text-xs sm:text-sm tracking-widest text-slate-300 uppercase"
        >
          {personalData.role}
        </motion.div> */}

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.08] max-w-4xl"
        >
          {personalData.role}
        </motion.h1>

        {/* Bio / Summary Pitch from Resume */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light mb-10 leading-relaxed font-sans"
        >
          Hi, I am <span className="text-white font-medium">{personalData.name}</span>. I build scalable backend systems, AI-driven automation agents for company ERP systems and Company Branding, Fullstack Web app, and Telegram bots that turn complex operational bottlenecks into smooth, automated solutions.
        </motion.p>
      </div>
    </section>
  );
}
