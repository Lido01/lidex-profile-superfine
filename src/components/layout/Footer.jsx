import React, { useState, useEffect } from 'react';
import { personalData } from '../../data/portfolioData';

export default function Footer() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl py-12 px-4 sm:px-8 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Identity */}
          <div className="space-y-1">
            <div className="text-white font-bold tracking-widest text-sm">
              [ {personalData.name.toUpperCase()} ]
            </div>
            <div className="text-slate-400 text-[11px] tracking-wider">
              {personalData.role.toUpperCase()}
            </div>
            <div className="text-slate-500 text-[10px]">
              NODE: LUNAR-STATION // COORD: LAT 09.02 / LON 38.74
            </div>
          </div>

          {/* Telemetry Status & Clock */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span className="text-slate-300">SYSTEM SLA: 99.9% LOCKED</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="text-cyan-400">
              {timeString}
            </div>
          </div>

          {/* Direct Text Channels & Top Action */}
          <div className="flex flex-wrap items-center gap-5 text-[11px] tracking-wider">
            <a
              href={personalData.channels.telegram}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              [ TELEGRAM ]
            </a>
            <a
              href={personalData.channels.buildr}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors"
            >
              [ BUILDR ]
            </a>
            <a
              href={personalData.channels.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              [ GITHUB ]
            </a>
            <button
              onClick={scrollToTop}
              className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              [ TOP ^ ]
            </button>
          </div>
        </div>

        {/* Legal & System Architecture Stamp */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} {personalData.name.toUpperCase()} ({personalData.handle}). ALL RIGHTS RESERVED.
          </div>
          <div>
            ENGINEERED WITH REACT 19 / THREE.JS / TAILWIND CSS / FRAMER MOTION
          </div>
        </div>
      </div>
    </footer>
  );
}
