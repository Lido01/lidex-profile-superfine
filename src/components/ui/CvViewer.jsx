import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const cvDocumentUrl = 'https://docs.google.com/document/d/198p9pyqNCeu9md2G1XWOVw7krEQI9yBh/edit?usp=sharing&ouid=101420092608424989378&rtpof=true&sd=true';
const cvPreviewUrl = `${cvDocumentUrl}/preview`;

export default function CvViewer({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start sm:items-center justify-center p-2 sm:p-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.22 }}
            className="relative z-[201] flex h-[calc(100dvh-1rem)] sm:h-[min(94vh,1020px)] w-full max-w-6xl flex-col overflow-hidden border border-white/20 bg-[#050816] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-viewer-title"
          >
            <div className="relative z-[210] flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#050816] px-3 py-3 sm:px-6 font-mono">
              <div className="min-w-0">
                <h2 id="cv-viewer-title" className="text-sm font-bold tracking-wider text-white sm:text-base">
                  CURRICULUM VITAE
                </h2>
                <p className="mt-1 text-[10px] text-slate-400">Lidetu Te · ONLINE DOCUMENT READER</p>
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-2">
                <a
                  href={cvDocumentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden border border-white/15 px-3 py-2 text-[10px] text-slate-300 transition-colors hover:border-cyan-200 hover:text-cyan-200 sm:block"
                >
                  OPEN IN DOCS
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-white/15 px-3 py-2 text-[10px] text-slate-300 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-white"
                >
                  CLOSE X
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden bg-slate-900">
              <iframe
                src={cvPreviewUrl}
                title="Lidetu Te online curriculum vitae"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
