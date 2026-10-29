import React from 'react';
import { personalData, skillsCategorized } from '../../data/portfolioData';

export default function BentoAbout() {
  return (
    <section id="architecture" className="relative py-28 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-14 font-mono">
          <div>
            <div className="text-cyan-400 text-xs tracking-widest mb-1">
              [ 02 // TECHNICAL FOUNDATIONS & SKILLS MATRIX ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Capabilities & Methodologies
            </h2>
          </div>
          <div className="text-slate-400 text-xs tracking-wider max-w-sm text-left md:text-right">
            ZERO TECH STACK LIMITS. RESILIENT BACKENDS, AGENTIC LLM LOOPS, AND HIGH-AVAILABILITY APIS.
          </div>
        </div>

        {/* 2-Column Senior Engineer Summary & Categorized Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Dossier & Real Resume Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 bg-[#050816]/95 border border-white/15 backdrop-blur-xl">
              <div className="font-mono text-xs text-cyan-400 tracking-widest mb-3">
                // SYSTEM ARCHITECT SUMMARY
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                Backend Reliability Meets Agentic Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                {personalData.summary}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                Currently operating as Backend Python Developer at Adama Science and Technology University (ASTU), translating mission-critical academic requirements into scalable, containerized software systems.
              </p>

              <div className="pt-5 border-t border-white/10 font-mono text-[11px] text-slate-400 space-y-2">
                <div className="flex justify-between">
                  <span>UNIVERSITY:</span>
                  <span className="text-white">ADAMA SCIENCE & TECH UNIVERSITY</span>
                </div>
                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-white">NAZRĒT, ETHIOPIA</span>
                </div>
                <div className="flex justify-between">
                  <span>TECH ACCREDITATION:</span>
                  <span className="text-emerald-400">ALX AFRICA BACKEND CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Block Skills Categorization Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsCategorized.map((group, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#050816]/95 border border-white/10 hover:border-cyan-400/50 transition-colors backdrop-blur-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="font-mono text-xs text-cyan-400 mb-2 font-bold tracking-widest uppercase">
                    [ 0{idx + 1} // {group.category} ]
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {group.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-200 text-xs font-mono group-hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 font-mono text-[10px] text-slate-500">
                  VERIFIED STRENGTH // PRODUCTION PROVEN
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
