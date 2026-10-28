import React from 'react';
import { motion } from 'framer-motion';
import { personalData, architecturePillars } from '../../data/portfolioData';

export default function BentoAbout() {
  return (
    <section id="architecture" className="relative py-28 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-16 font-mono">
          <div>
            <div className="text-cyan-400 text-xs tracking-widest mb-1">
              [ 01 // ARCHITECTURAL PILLARS ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              System Foundations & Philosophy
            </h2>
          </div>
          <div className="text-slate-400 text-xs tracking-wider max-w-sm text-left md:text-right">
            ENGINEERING ROBUSTNESS OVER CONVENTIONAL SHORTCUTS. BUILT FOR SCALE, SPEED, AND LONGEVITY.
          </div>
        </div>

        {/* 2-Column Senior Engineer Bio & Architectural Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Architectural Statement & Identity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#050816]/90 border border-white/15 backdrop-blur-xl">
              <div className="font-mono text-xs text-cyan-400 tracking-widest mb-4">
                // SYSTEM ARCHITECT DOSSIER
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                Bridging Autonomous Machine Logic & Spatial Human Interfaces
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans mb-4">
                Modern software systems must not only handle high-throughput concurrent loads behind the scenes, but also present intuitive, spatial interfaces that empower end users.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                From autonomous Telegram broadcast daemons to distributed vector search engines and 60 FPS WebGL spatial scenes, my work focuses on crafting systems that remain resilient when traffic surges and complexity compounds.
              </p>

              <div className="pt-6 border-t border-white/10 font-mono text-xs text-slate-400 space-y-2">
                <div className="flex justify-between">
                  <span>SPECIALIZATION:</span>
                  <span className="text-white">DISTRIBUTED & AGENTIC ARCHITECTURE</span>
                </div>
                <div className="flex justify-between">
                  <span>DISPATCH CADENCE:</span>
                  <span className="text-white">WEEKLY DEEP TECHNICAL DIVES</span>
                </div>
                <div className="flex justify-between">
                  <span>DEPLOYMENT LOCATION:</span>
                  <span className="text-white">{personalData.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architecture Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {architecturePillars.map((pillar) => (
              <div
                key={pillar.index}
                className="p-6 bg-[#050816]/90 border border-white/10 hover:border-cyan-400/50 transition-colors backdrop-blur-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="font-mono text-xs text-slate-500 group-hover:text-cyan-400 transition-colors mb-3">
                    [ {pillar.index} ]
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 font-mono text-[10px] text-slate-500">
                  STATUS: VERIFIED PRODUCTION PATTERN
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
