import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="works" className="relative py-28 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-16 font-mono">
          <div>
            <div className="text-cyan-400 text-xs tracking-widest mb-1">
              [ 02 // ARCHITECTURAL WORKS & DEPLOYMENTS ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Image-Based System Showcases
            </h2>
          </div>
          <div className="text-slate-400 text-xs tracking-wider max-w-sm text-left md:text-right">
            CURATED DEPLOYMENTS ACROSS AUTONOMOUS AGENTS, DISTRIBUTED BACKENDS, AND SPATIAL COMPUTE.
          </div>
        </div>

        {/* Cinematic Image-First Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-[#050816]/95 border border-white/15 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Cinematic Project Image Showcase */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />

                {/* Top Image Badges (Pure typography, no icons) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[11px]">
                  <span className="px-3 py-1 bg-black/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    [ {project.category.toUpperCase()} ]
                  </span>
                  <span className="px-2.5 py-1 bg-black/80 text-slate-300 border border-white/20 backdrop-blur-md">
                    INDEX {project.index}
                  </span>
                </div>

                {/* Bottom Image Metric Bar */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-slate-300">
                  <span className="text-emerald-400 bg-black/80 px-2 py-0.5 border border-emerald-500/30">
                    SLA: {project.metric}
                  </span>
                  <span className="text-slate-400">
                    STATUS: ACTIVE REPO
                  </span>
                </div>
              </div>

              {/* Project Details Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {project.summary}
                  </p>

                  {/* Architecture Checklist (No icons, pure monospace markers) */}
                  <div className="space-y-2 mb-6 p-4 bg-white/[0.02] border border-white/5 font-mono text-xs text-slate-300">
                    <div className="text-[10px] text-slate-400 tracking-wider uppercase mb-2">
                      // ENGINEERING SPECIFICATIONS:
                    </div>
                    {project.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">+</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-8 font-mono text-[11px]">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons (Strictly no icons, clean text actions) */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 font-mono text-xs">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 bg-white text-black font-semibold hover:bg-cyan-400 hover:text-black transition-colors"
                  >
                    [ LAUNCH LIVE SYSTEM ]
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-black/60 text-slate-300 border border-white/20 hover:border-white/50 hover:text-white transition-colors"
                  >
                    [ SOURCE REPO ]
                  </a>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-4 py-2.5 bg-black/60 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors cursor-pointer"
                  >
                    [ BLUEPRINT ]
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blueprint Modal (Strictly no icons, pure clean architectural window) */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <div
                onClick={() => setActiveProject(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="relative z-10 max-w-3xl w-full bg-[#050816] border border-white/20 p-6 sm:p-8 font-mono text-xs text-slate-300 shadow-2xl"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-cyan-400 font-bold tracking-widest">
                    [ BLUEPRINT // {activeProject.index} - {activeProject.title.toUpperCase()} ]
                  </span>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="text-slate-400 hover:text-white cursor-pointer px-2 py-1 border border-white/10"
                  >
                    [ CLOSE X ]
                  </button>
                </div>

                {/* Modal Visual Banner */}
                <div className="mb-6 aspect-video w-full overflow-hidden border border-white/10 bg-slate-900">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 mb-6">
                  <div className="text-white font-bold text-base font-sans">
                    {activeProject.title}
                  </div>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6 p-4 bg-white/[0.03] border border-white/10">
                  <div className="text-slate-400 uppercase tracking-wider mb-2 text-[11px]">
                    Detailed Architectural Specs:
                  </div>
                  {activeProject.specifications.map((s, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-200">
                      <span className="text-cyan-400 font-bold">»</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-emerald-400">
                    VERIFIED PRODUCTION READY: {activeProject.metric}
                  </span>
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-white text-black font-bold hover:bg-cyan-400 transition-colors"
                  >
                    [ OPEN LIVE ]
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
