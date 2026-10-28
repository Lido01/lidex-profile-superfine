import React, { useState } from 'react';
import { personalData } from '../../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', type: 'System Architecture', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.channels.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', type: 'System Architecture', message: '' });
    }, 4000);
  };

  return (
    <section id="dispatch" className="relative py-28 px-4 sm:px-8 z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-16 font-mono">
          <div>
            <div className="text-cyan-400 text-xs tracking-widest mb-1">
              [ 05 // COMMUNICATIONS & DISPATCH ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Initialize Project Dispatch
            </h2>
          </div>
          <div className="text-slate-400 text-xs tracking-wider max-w-sm text-left md:text-right">
            ENGAGE FOR SYSTEM ARCHITECTURE, AUTONOMOUS WORKFLOW AUTOMATION, OR FULL-STACK PLATFORM ENGINEERING.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Inboxes & Telegram */}
          <div className="lg:col-span-5 space-y-6 font-mono">
            <div className="p-8 bg-[#050816]/90 border border-white/15 backdrop-blur-xl">
              <div className="text-xs text-cyan-400 tracking-widest mb-4">
                // DIRECT COMMUNICATIONS MATRIX
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-sans">
                Real-Time Telegram Engagement
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                For rapid turnaround architectural inquiries, contract engagements, or joining the developer community, Telegram offers immediate connectivity.
              </p>

              {/* Direct Telegram Action */}
              <a
                href={personalData.channels.telegram}
                target="_blank"
                rel="noreferrer"
                className="block p-4 mb-4 bg-white/[0.03] hover:bg-white/[0.08] border border-cyan-500/30 text-white transition-all text-xs"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-cyan-300 font-bold">[ TELEGRAM CHANNEL ]</span>
                  <span className="text-[10px] text-emerald-400">STATUS: ACTIVE</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  {personalData.handle}
                </div>
              </a>

              {/* Buildr Profile Action */}
              <a
                href={personalData.channels.buildr}
                target="_blank"
                rel="noreferrer"
                className="block p-4 mb-6 bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 text-white transition-all text-xs"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-purple-300 font-bold">[ BUILDR PROFILE ]</span>
                  <span className="text-[10px] text-slate-400">VERIFIED</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  buildr.mikaelen.site/z-break
                </div>
              </a>

              {/* One-Click Copy Email Micro-interaction */}
              <div className="p-4 bg-black/60 border border-white/10 text-xs">
                <div className="text-slate-400 text-[10px] mb-2 uppercase tracking-wider">
                  Direct Inbox Address:
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-cyan-300 select-all truncate">
                    {personalData.channels.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer text-[10px] shrink-0"
                  >
                    {copied ? '[ COPIED TO CLIPBOARD ]' : '[ COPY EMAIL ]'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Dispatch Console Form */}
          <div className="lg:col-span-7 font-mono">
            <div className="p-8 bg-[#050816]/90 border border-white/15 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs text-slate-400">
                <span className="text-white font-bold tracking-widest">
                  [ ARCHITECTURAL TRANSMISSION CONSOLE ]
                </span>
                <span>SECURE // TLS 1.3</span>
              </div>

              {submitted ? (
                <div className="p-8 text-center border border-emerald-500/30 bg-emerald-500/10">
                  <div className="text-emerald-400 text-sm font-bold tracking-wider mb-2">
                    [ TRANSMISSION CONFIRMED ]
                  </div>
                  <p className="text-xs text-slate-300 font-sans">
                    Your brief has been logged into the queue. Expect an architectural evaluation within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 mb-2 uppercase tracking-wider text-[10px]">
                        Identity / Organization:
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="ENTER NAME"
                        className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-cyan-400 focus:outline-none text-white font-mono placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-2 uppercase tracking-wider text-[10px]">
                        Electronic Mail:
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="user@domain.com"
                        className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-cyan-400 focus:outline-none text-white font-mono placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-2 uppercase tracking-wider text-[10px]">
                      Architectural Engagement Domain:
                    </label>
                    <select
                      value={formState.type}
                      onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                      className="w-full px-4 py-3 bg-black/80 border border-white/15 focus:border-cyan-400 focus:outline-none text-white font-mono cursor-pointer"
                    >
                      <option value="System Architecture">System Architecture & Distributed Backends</option>
                      <option value="AI Agent Workflow">Autonomous AI Agent Workflows & LLMs</option>
                      <option value="Automation Pipeline">Telegram Bot & High-Cadence Automation</option>
                      <option value="Full-Stack Application">Full-Stack Application Engineering</option>
                      <option value="Advisory Audit">Technical Advisory & System Health Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-2 uppercase tracking-wider text-[10px]">
                      Engineering Brief / Project Scope:
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Specify system constraints, timeline objectives, and architecture expectations..."
                      className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-cyan-400 focus:outline-none text-white font-mono placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-bold tracking-widest hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer text-xs"
                  >
                    [ DISPATCH BRIEF TO SYSTEM ARCHITECT ]
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
