import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  
  // Mobile bottom bar scroll visibility
  const [showMobileNav, setShowMobileNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { label: 'OVERVIEW', href: '#hero', id: 'hero', index: '01' },
    { label: 'ARCHITECTURE', href: '#architecture', id: 'architecture', index: '02' },
    { label: 'PROJECTS', href: '#works', id: 'works', index: '03' },
    { label: 'CERTS', href: '#credentials', id: 'credentials', index: '04' },
    { label: 'REVIEWS', href: '#endorsements', id: 'endorsements', index: '05' },
    { label: 'DISPATCH', href: '#dispatch', id: 'dispatch', index: '06' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Desktop top navbar background toggle
      setScrolled(currentScrollY > 30);

      // Mobile Bottom Bar scroll detection:
      // Hide when scrolling DOWN, show when scrolling UP
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowMobileNav(false);
      } else {
        setShowMobileNav(true);
      }
      setLastScrollY(currentScrollY);

      // Active section spy
      const sectionIds = ['hero', 'architecture', 'works', 'credentials', 'endorsements', 'dispatch'];
      const scrollPos = currentScrollY + 250;
      for (const sId of sectionIds) {
        const el = document.getElementById(sId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. DESKTOP / TOP HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-5">
          <nav
            className={`pointer-events-auto flex items-center justify-between px-5 sm:px-7 py-3 rounded-none border transition-all duration-300 ${
              scrolled
                ? 'bg-[#050816]/95 backdrop-blur-xl border-white/20 shadow-2xl'
                : 'bg-[#050816]/75 backdrop-blur-md border-white/10'
            }`}
          >
            {/* Brand Signature */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <span className="font-mono text-xs tracking-widest font-bold">
                [ {personalData.name.toUpperCase()} ]
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 font-mono text-xs">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`transition-all tracking-widest py-1 border-b cursor-pointer ${
                      isActive
                        ? 'border-[red] font-bold'
                        : 'text-slate-400 hover:text-white border-transparent hover:border-white/30'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Status Pill */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 font-mono text-[11px]">
                <span className="text-slate-300 tracking-wider text-[10px] sm:text-[11px]">
                  AVAILABLE
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* 2. MOBILE BOTTOM FLOATING NAVIGATION BAR */}
      {/* Appears on small devices (< lg). Automatically hides on scroll DOWN, shows on scroll UP */}
      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed bottom-4 left-3 right-3 z-50 lg:hidden flex justify-center pointer-events-none"
          >
            <nav className="pointer-events-auto max-w-md w-full bg-[#050816]/95 border border-white/20 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.85)] p-1.5 flex items-center justify-between font-mono text-[10px]">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex-1 py-2 px-1 text-center transition-all cursor-pointer relative ${
                      isActive
                        ? 'font-bold bg-white/10 border-t border-[red]'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="block text-[8px] text-slate-500 font-mono leading-none mb-0.5">
                      {item.index}
                    </span>
                    <span className="block truncate tracking-wider">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
