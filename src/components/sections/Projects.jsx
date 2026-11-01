import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const categories = ['ALL', 'Agentic AI & Automation', 'Backend Python & REST API', 'Institutional Full-Stack', 'Open Source AI & Accessibility'];

  const filteredProjects = selectedFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(selectedFilter.toLowerCase()) || p.category === selectedFilter);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="works" className="relative py-16 sm:py-20 px-4 sm:px-8 z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 font-mono">
          <div>
            <h2 className="text-xs tracking-widest mb-1 text-3xl sm:text-5xl font-bold tracking-tight text-white">
              VERIFIED PRODUCTION & OPEN SOURCE PROJECTS
            </h2>
            {/* <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Selected Systems
            </h2> */}
          </div>
        </div>

        {/* Image-First Project Cards Grid (Clean visual layout, NOT text-crowded) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-[#050816]/95 border border-white/15 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Visual Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
              </div>

              {/* Concise Card Body: Clean title + 1-sentence hook + tags */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                    {project.tagline}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[10px]">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-slate-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Clean Click Prompt */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-center font-mono text-[11px]">
                    <span className="group-hover:underline">
                      [ VIEW FULL SPECIFICATIONS → ]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FULL PROJECT BLUEPRINT MODAL (Opens on click for complete deep dive) */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-[200] flex items-start sm:items-center justify-center p-2 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.25 }}
                className="relative z-[201] max-w-3xl w-full max-h-[calc(100dvh-1rem)] sm:max-h-[90vh] overflow-y-auto bg-[#050816] border border-white/20 p-4 pt-16 sm:p-8 font-mono text-xs text-slate-300 shadow-2xl"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-blueprint-title"
              >
                {/* Modal Header */}
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute right-4 top-4 z-[220] border border-white/15 bg-[#111a35] px-2.5 py-1.5 text-slate-300 shadow-lg shadow-black/30 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-white sm:right-6 sm:top-6"
                  aria-label="Close project blueprint"
                >
                  [ CLOSE X ]
                </button>

                {/* Modal Visual Banner */}
                <div className="mb-6 aspect-video w-full overflow-hidden border border-white/10 bg-slate-950">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title & Full Description */}
                <div className="space-y-3 mb-6">
                  <h3 id="project-blueprint-title" className="text-white font-bold text-xl sm:text-2xl font-sans">
                    {activeProject.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {activeProject.fullDescription}
                  </p>
                </div>

                {/* Architecture Highlights */}
                {activeProject.architecture && (
                  <div className="space-y-2 mb-6 p-4 sm:p-5 bg-white/[0.02] border border-white/10">
                    <div className="text-slate-400 uppercase tracking-wider mb-2 text-[11px] font-bold">
                      // Architectural Specifications:
                    </div>
                    {activeProject.architecture.map((arch, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-slate-200">
                        <span className="font-bold">+</span>
                        <span className="font-sans text-xs sm:text-sm">{arch}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Complete Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-200 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs">
                    SLA: {activeProject.metric}
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {activeProject.repoUrl && (
                      <a
                        href={activeProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial px-4 py-2 bg-black border border-white/20 text-slate-200 hover:text-white hover:border-white text-center cursor-pointer"
                      >
                        [ VIEW GITHUB REPO ]
                      </a>
                    )}
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial px-4 py-2 bg-white text-black font-bold transition-colors text-center cursor-pointer"
                      >
                        [ ONLINE ]
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
