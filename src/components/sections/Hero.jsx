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
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 sm:px-8 text-center z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Availability Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-[11px] tracking-widest text-cyan-400 bg-black/70 border border-cyan-500/30 px-4 py-1.5 backdrop-blur-md"
        >
          [ {personalData.availability} ]
        </motion.div>

        {/* Primary Role Stamp */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 font-mono text-xs sm:text-sm tracking-widest text-slate-300 uppercase"
        >
          {personalData.role}
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08] max-w-4xl"
        >
          High-Throughput Backends & Autonomous AI Agents.
        </motion.h1>

        {/* Bio / Summary Pitch from Resume */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light mb-10 leading-relaxed font-sans"
        >
          Hi, I am <span className="text-white font-medium">{personalData.name}</span> ({personalData.handle}). Backend Python Developer at Adama Science &amp; Technology University. Engineering resilient API architectures, multi-agent LangGraph workflows, and scalable databases.
        </motion.p>

        {/* Telemetry Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/15 mb-10 text-left font-mono"
        >
          {personalData.metrics.map((item, idx) => (
            <div key={idx} className="p-4 bg-[#050816]/90 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                {item.value}
              </div>
              <div className="text-[10px] text-cyan-400 uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-[9px] text-slate-500 mt-0.5">
                {item.detail}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Architectural CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs tracking-wider mb-14"
        >
          <button
            onClick={() => scrollTo('works')}
            className="px-6 py-3.5 bg-white text-black font-semibold hover:bg-slate-200 transition-all cursor-pointer"
          >
            [ EXPLORE PROJECTS ]
          </button>

          <button
            onClick={() => scrollTo('credentials')}
            className="px-6 py-3.5 bg-black/60 text-slate-200 border border-white/20 hover:border-purple-400 hover:text-white transition-all backdrop-blur-md cursor-pointer"
          >
            [ CERTIFICATES & SEALS ]
          </button>

          <button
            onClick={() => scrollTo('dispatch')}
            className="px-6 py-3.5 bg-black/60 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all backdrop-blur-md cursor-pointer"
          >
            [ INITIATE DISPATCH ]
          </button>
        </motion.div>

        {/* Scroll down prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-slate-400"
        >
          <span>[ SCROLL DOWN // ENTER WORKSPACE PORTAL ]</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
