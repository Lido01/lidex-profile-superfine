import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { certificationsData, experienceData, testimonialsData, personalData } from '../../data/portfolioData';
import CvViewer from '../ui/CvViewer';

export default function Experience() {
  const [activeCert, setActiveCert] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveCert(null);
      if (e.key === 'Escape') setIsCvOpen(false);
    };
    if (activeCert || isCvOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCert, isCvOpen]);

  return (
    <>
      {/* 1. PROFESSIONAL CERTIFICATES & ACCREDITATIONS (Image-First, Click to view full details) */}
      <section id="credentials" className="relative py-16 sm:py-20 px-4 sm:px-8 z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 font-mono">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-xs tracking-widest">
                Certifications & Seals
              </h2>
            </div>
          </div>

          {/* Certificate Cards Grid (Clean, visual, not text-crowded) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {certificationsData.map((cert) => (
              <div
                key={cert.index}
                onClick={() => setActiveCert(cert)}
                className="group bg-[#050816]/95 border border-white/15 hover:border-purple-400/60 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Visual Certificate Artwork */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-white/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                </div>

                {/* Concise Card Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2 leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  <div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-center font-mono text-[11px]">
                      <span className="group-hover:underline">
                        [ VIEW FULL CERTIFICATE → ]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CERTIFICATE DEEP DIVE MODAL */}
          {createPortal(
            <AnimatePresence>
            {activeCert && (
              <div className="modal-overlay">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveCert(null)}
                  className="modal-backdrop bg-black/85 backdrop-blur-xl"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="modal-panel modal-content-with-close max-w-2xl bg-[#050816] border border-white/20 p-4 sm:p-8 font-mono text-xs text-slate-300 shadow-2xl"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="certificate-title"
                >
                  <button
                    type="button"
                    onClick={() => setActiveCert(null)}
                    className="modal-close border border-white/15 bg-[#111a35] px-2.5 py-1.5 text-slate-300 shadow-lg shadow-black/30 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-white"
                    aria-label="Close certificate"
                  >
                    [ CLOSE X ]
                  </button>

                  <div className="mb-6 aspect-[16/10] w-full overflow-hidden border border-white/10 bg-slate-950">
                    <img
                      src={activeCert.image}
                      alt={activeCert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-3 mb-6">
                    <h3 id="certificate-title" className="text-white font-bold text-xl sm:text-2xl font-sans">
                      {activeCert.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed">
                      {activeCert.fullDescription}
                    </p>
                  </div>

                  {activeCert.skillsCovered && (
                    <div className="mb-6 p-4 bg-white/[0.02] border border-white/10">
                      <div className="text-slate-400 uppercase tracking-wider mb-2 text-[10px] font-bold">
                        // Verified Skills Validated:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeCert.skillsCovered.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-200 text-xs"
                          >
                            + {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">
                      ISSUED BY: <span className="text-white font-bold">{activeCert.issuer}</span>
                    </span>
                    <span className="">
                      VERIFIED STATUS
                    </span>
                  </div>
                </motion.div>
              </div>
            )}
            </AnimatePresence>,
            document.body
          )}
        </div>
      </section>

      {/* 2. REAL RESUME WORK EXPERIENCE & EDUCATION */}
      <section id="experience" className="relative py-16 sm:py-20 px-4 sm:px-8 z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 font-mono">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-xs tracking-widest">
                Career Trajectory
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="w-full md:w-auto border border-[white]/10 px-4 py-3 text-left text-[11px] tracking-wider  transition-colors hover:border-[white] hover:bg-[red]/5 hover:text-[red] hover:font-bold"
            >
              [ VIEW CV]
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Professional Timeline */}
            <div className="lg:col-span-8 space-y-6">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-[#050816]/95 border border-white/15 backdrop-blur-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs mb-2">
                    <span className="font-bold tracking-wider">{exp.period}</span>
                    <span className="text-slate-400">{exp.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-sans mb-1">
                    {exp.role}
                  </h3>

                  <div className="font-mono text-xs text-slate-400 mb-4">
                    // {exp.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-5">
                    {exp.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10 font-mono text-xs text-slate-300">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="font-bold">+</span>
                        <span className="font-sans text-xs">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Education & Core Strengths */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 sm:p-7 bg-[#050816]/95 border border-white/15 backdrop-blur-xl font-mono text-xs">
                <div className="tracking-widest uppercase mb-3 text-cyan-200">
                  // DOCUMENT ACCESS
                </div>
                <p className="font-sans text-sm leading-relaxed text-slate-300 mb-5">
                  Read the complete career profile in a focused, responsive document viewer.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCvOpen(true)}
                  className="w-full border border-white/20 px-3 py-2 text-left text-[11px] tracking-wider text-white transition-colors hover:border-cyan-200 hover:text-cyan-200"
                >
                  OPEN FULL CV →
                </button>
              </div>

              {/* Education Box */}
              <div className="p-6 sm:p-7 bg-[#050816]/95 border border-white/15 backdrop-blur-xl font-mono text-xs">
                <div className="tracking-widest uppercase mb-3">
                  // FORMAL EDUCATION
                </div>
                <h4 className="text-white font-bold text-base font-sans mb-1">
                  {personalData.education.degree}
                </h4>
                <div className="text-xs mb-2">
                  {personalData.education.institution}
                </div>
                <div className="text-slate-400 text-[11px] mb-4">
                  {personalData.education.period} · {personalData.education.location}
                </div>
                <div className="pt-3 border-t border-white/10 text-slate-300 font-sans text-xs leading-relaxed">
                  Focusing on Advanced Software Engineering, Distributed Systems, Relational/NoSQL Database Design, and Cloud Architecture.
                </div>
              </div>

              {/* Core Strengths Box */}
              <div className="p-6 sm:p-7 bg-[#050816]/95 border border-white/15 backdrop-blur-xl font-mono text-xs">
                <div className="tracking-widest uppercase mb-3">
                  // CORE STRENGTHS
                </div>
                <div className="space-y-4 font-sans text-xs text-slate-300">
                  <div>
                    <div className="font-bold text-white font-mono text-[11px] mb-1">
                      + PROBLEM SOLVING
                    </div>
                    <p className="leading-relaxed">
                      Successfully resolving complex backend performance bottlenecks, optimizing query transaction cases, and improving server availability.
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-white font-mono text-[11px] mb-1">
                      + AGILE COLLABORATION
                    </div>
                    <p className="leading-relaxed">
                      Collaborating with agile teams to develop and deploy high-performance backend systems across integrated university platforms.
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-white font-mono text-[11px] mb-1">
                      + ENGINEERING LEADERSHIP
                    </div>
                    <p className="leading-relaxed">
                      Led teams of engineering students to deliver critical projects on schedule, enhancing product functionality and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CvViewer isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />

      {/* 3. PEER & COMMUNITY ENDORSEMENTS */}
      {/* <section id="endorsements" className="relative py-16 sm:py-20 px-4 sm:px-8 z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 font-mono">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-xs tracking-widest">
                What Client Said?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.index}
                className="p-6 sm:p-8 bg-[#050816]/95 border border-white/15 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <blockquote className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans mb-6">
                    "{item.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-white/10 font-mono">
                  <div className="text-white font-bold text-xs tracking-wider">
                    {item.author.toUpperCase()}
                  </div>
                  <div className="text-[11px] mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {item.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
