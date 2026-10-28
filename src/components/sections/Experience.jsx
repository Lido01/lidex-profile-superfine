import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData, certificationsData } from '../../data/portfolioData';

export default function Experience() {
  return (
    <>
      {/* 1. TESTIMONIALS & PEER ENDORSEMENTS */}
      <section id="endorsements" className="relative py-28 px-4 sm:px-8 z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-16 font-mono">
            <div>
              <div className="text-cyan-400 text-xs tracking-widest mb-1">
                [ 03 // PEER TESTIMONIALS & FEEDBACK ]
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                Verified Architectural Endorsements
              </h2>
            </div>
            <div className="text-slate-400 text-xs tracking-wider max-w-sm text-left md:text-right">
              FEEDBACK FROM PRINCIPAL ARCHITECTS, ENGINEERING LEADERS, AND COMMUNITY COLLABORATORS.
            </div>
          </div>

          {/* Testimonials 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.index}
                className="p-8 bg-[#050816]/90 border border-white/15 hover:border-cyan-400/50 transition-colors backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-slate-500 mb-6 flex items-center justify-between">
                    <span>INDEX [ {item.index} ]</span>
                    <span className="text-cyan-400 text-[10px] tracking-widest">
                      {item.verification}
                    </span>
                  </div>

                  {/* Clean Typographic Quote (Strictly no emoji/icon quotation marks) */}
                  <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans mb-8">
                    "{item.quote}"
                  </blockquote>
                </div>

                {/* Author Metadata */}
                <div className="pt-6 border-t border-white/10 font-mono">
                  <div className="text-white font-bold text-sm tracking-wider">
                    {item.author.toUpperCase()}
                  </div>
                  <div className="text-xs text-cyan-300 mt-0.5">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {item.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ACHIEVED CERTIFICATES & SYSTEM CREDENTIALS */}
      <section id="credentials" className="relative py-28 px-4 sm:px-8 z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-16 font-mono">
            <div>
              <div className="text-purple-400 text-xs tracking-widest mb-1">
                [ 04 // SYSTEM ACCREDITATIONS & CERTIFICATES ]
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                Professional Certifications
              </h2>
            </div>
            <div className="text-slate-400 text-xs tracking-wider max-w-sm text-left md:text-right">
              FORMAL VALIDATIONS ACROSS DISTRIBUTED ARCHITECTURE, AGENTIC SYSTEMS, AND HIGH-CONCURRENCY ENGINEERING.
            </div>
          </div>

          {/* Certifications List View */}
          <div className="space-y-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.index}
                className="p-6 sm:p-8 bg-[#050816]/90 border border-white/15 hover:border-purple-400/50 transition-colors backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="font-mono text-xs text-purple-400 tracking-widest flex items-center gap-3">
                    <span>CERTIFICATE {cert.index}</span>
                    <span className="text-slate-500">|</span>
                    <span>ISSUED: {cert.date}</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-400">ID: {cert.credentialId}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="font-mono text-xs text-slate-400 pt-1">
                    ISSUING ENTITY: <span className="text-white">{cert.issuer}</span>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="shrink-0 font-mono text-right">
                  <span className="inline-block px-4 py-2 border border-emerald-500/30 text-emerald-300 bg-emerald-500/10 text-xs tracking-widest">
                    [ VERIFIED ACCREDITED ]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
