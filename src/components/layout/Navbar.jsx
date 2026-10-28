import React, { useState, useEffect } from 'react';
import { personalData } from '../../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ARCHITECTURE', href: '#architecture', index: '01' },
    { label: 'WORKS', href: '#works', index: '02' },
    { label: 'ENDORSEMENTS', href: '#endorsements', index: '03' },
    { label: 'CREDENTIALS', href: '#credentials', index: '04' },
    { label: 'DISPATCH', href: '#dispatch', index: '05' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <nav
          className={`pointer-events-auto flex items-center justify-between px-5 sm:px-8 py-3.5 rounded-none border transition-all duration-300 ${
            scrolled
              ? 'bg-[#050816]/90 backdrop-blur-xl border-white/15 shadow-2xl'
              : 'bg-[#050816]/60 backdrop-blur-md border-white/10'
          }`}
        >
          {/* Brand Identity / Architecture Signature */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group text-left"
          >
            <span className="font-mono text-xs tracking-widest text-cyan-400 font-bold">
              [ LIDETU ]
            </span>
            <span className="hidden md:inline font-mono text-[11px] text-slate-400 tracking-wider">
              // SYSTEM ARCHITECT
            </span>
          </a>

          {/* Desktop Navigation Links (No Icons, Pure Typographic Precision) */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-xs">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-slate-400 hover:text-white transition-colors tracking-widest py-1 border-b border-transparent hover:border-cyan-400"
              >
                <span className="text-[10px] text-slate-500 mr-1.5">{item.index}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Right Status Pill */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span className="text-slate-300 tracking-wider">STATUS: AVAILABLE</span>
            </div>

            {/* Mobile Menu Button (Minimalist Text Button) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden font-mono text-xs text-slate-300 hover:text-white px-3 py-1 border border-white/15"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto mt-2 p-5 bg-[#050816]/95 border border-white/15 backdrop-blur-2xl flex flex-col gap-3 font-mono text-xs lg:hidden">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="flex items-center justify-between py-2 border-b border-white/5 text-slate-300 hover:text-cyan-400 tracking-widest"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-slate-500">{item.index}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
