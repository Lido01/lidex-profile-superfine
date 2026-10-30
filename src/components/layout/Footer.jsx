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
            <div className="text-slate-400 text-[11px] tracking-wider">
              {personalData.role.toUpperCase()}
            </div>
          </div>

          {/* Direct Text Channels & Top Action */}
          <div className="flex flex-wrap items-center gap-5 text-[11px] tracking-wider">
            <a
              href={personalData.channels.telegram}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              [ TELEGRAM ]
            </a>
            <a
              href={personalData.channels.buildr}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
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
                        <a
              href={personalData.channels.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              [ LINKEDIN ]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
