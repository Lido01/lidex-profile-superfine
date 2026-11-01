import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-start sm:items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-all"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[201] w-full max-w-3xl max-h-[calc(100dvh-1rem)] sm:max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0b1022]/95 p-4 pt-16 sm:p-8 shadow-2xl shadow-cyan-500/10 text-slate-100"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-[220] rounded-full border border-white/15 bg-[#111a35] p-2 text-slate-300 shadow-lg shadow-black/30 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-white sm:right-6 sm:top-6"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header Banner & Visual */}
          <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 aspect-video max-h-64 sm:max-h-80 w-full bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1022] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                {project.category}
              </span>
              {project.metrics && (
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black/60 text-slate-300 border border-white/10 backdrop-blur-md">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  {project.metrics}
                </span>
              )}
            </div>
          </div>

          {/* Titles & Summary */}
          <div className="mb-6">
            <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {project.title}
            </h2>
            <p className="text-base  font-mono mb-4">
              {project.subtitle}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.summary}
            </p>
          </div>

          {/* Architecture & Engineering Highlights */}
          {project.architecture && (
            <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-white tracking-wide uppercase font-mono">
                <Cpu className="w-4 h-4" />
                <span>Architecture & Engineering Highlights</span>
              </div>
              <ul className="space-y-2.5">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm hover:from-[white] hover:to-[red] transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium text-sm transition-all active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
