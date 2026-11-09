import React, { useState } from 'react';
import { ACHIEVEMENTS, FUTURE_ARCHIVE_PLACEHOLDERS } from '../data/achievements';
import TiltCard from './TiltCard';
import { Trophy, Award, Sparkles, CheckCircle2, ShieldCheck, FileCheck, Layers, ExternalLink, ChevronRight } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('confirmed');

  const sustainathon = ACHIEVEMENTS.find((a) => a.id === 'sustainathon-2-winner');
  const hackFront = ACHIEVEMENTS.find((a) => a.id === 'hackfront-national-finale');

  return (
    <section id="achievements" className="relative py-28 px-6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-amber-400"></span>
            <span>04 // RECOGNITIONS & ARENA MILESTONES</span>
            <span className="w-8 h-[1px] bg-amber-400"></span>
          </div>
          <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6">
            MILESTONES THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400">DEFINE US.</span>
          </h2>
          <p className="max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Where ideas transform into tested, jury-validated engineering triumphs. Hover across cards for interactive inspection.
          </p>

          {/* Toggle Tab */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-full bg-slate-900 border border-slate-800">
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('confirmed');
              }}
              data-cursor="pointer"
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                activeTab === 'confirmed'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)] font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              CONFIRMED VICTORIES (02)
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTab('archive');
              }}
              data-cursor="pointer"
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                activeTab === 'archive'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              RECOGNITION ARCHIVE & ROADMAP
            </button>
          </div>
        </div>

        {activeTab === 'confirmed' ? (
          <div className="space-y-16">
            {/* FEATURED ACHIEVEMENT 1: SUSTAINATHON 2.0 (THEME-WISE WINNER) */}
            {sustainathon && (
              <TiltCard
                cursorText="DISCOVER"
                maxTilt={6}
                className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-[#0a0f1d] to-[#040813] border-2 border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.15)] group"
              >
                {/* Glow & Badge Accent */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500"></div>

                {/* Top Victory Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform">
                      <Trophy size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-amber-400 tracking-widest uppercase font-bold px-2 py-0.5 rounded bg-amber-950 border border-amber-700">
                          ★ WINNER
                        </span>
                        <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
                          {sustainathon.badgeLabel}
                        </span>
                      </div>
                      <h3 className="font-orbitron font-black text-2xl sm:text-4xl text-white group-hover:text-amber-200 transition-colors mt-1">
                        {sustainathon.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <span className="font-orbitron font-bold text-lg text-slate-200">
                      {sustainathon.institution}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      ACADEMIC & INDUSTRY HACKATHON • 2026
                    </span>
                  </div>
                </div>

                {/* Project Association Headline */}
                <div className="my-8">
                  <div className="font-mono text-xs text-cyan-400 tracking-wider uppercase mb-1">
                    WINNING CREATION: GOVINNOVATE PLATFORM
                  </div>
                  <h4 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
                    {sustainathon.headline}
                  </h4>
                </div>

                {/* 6 Core Pillars Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2 font-mono text-xs text-rose-400 font-bold uppercase mb-2">
                      <ShieldCheck size={16} />
                      <span>01. The Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {sustainathon.breakdown.challenge}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold uppercase mb-2">
                      <Sparkles size={16} />
                      <span>02. Our Idea</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {sustainathon.breakdown.idea}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2 font-mono text-xs text-purple-400 font-bold uppercase mb-2">
                      <Layers size={16} />
                      <span>03. Our Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {sustainathon.breakdown.solution}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase mb-2">
                      <FileCheck size={16} />
                      <span>04. Technologies Explored</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sustainathon.breakdown.technologies.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold uppercase mb-2">
                      <CheckCircle2 size={16} />
                      <span>05. Team Contribution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {sustainathon.breakdown.teamContribution}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-amber-500/40 bg-amber-950/10 group-hover:border-amber-400/80 transition-colors">
                    <div className="flex items-center gap-2 font-mono text-xs text-yellow-300 font-bold uppercase mb-2">
                      <Trophy size={16} />
                      <span>06. Final Recognition</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-light">
                      {sustainathon.breakdown.finalRecognition}
                    </p>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
                  {sustainathon.keyMetrics.map((km, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/40 text-center border border-slate-800/60 group-hover:border-slate-700 transition-colors">
                      <div className="font-orbitron font-bold text-xl sm:text-2xl text-amber-400">{km.value}</div>
                      <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-1">{km.label}</div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            )}

            {/* CONFIRMED ACHIEVEMENT 2: HACKFRONT INDIA 2026 NATIONAL FINALE (GOLDEN TICKET) */}
            {hackFront && (
              <TiltCard
                cursorText="DISCOVER"
                maxTilt={6}
                className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-[#070d1d] to-[#040814] border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.15)] group"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:scale-110 transition-transform">
                      <Award size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-700">
                          ★ QUALIFIER
                        </span>
                        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                          {hackFront.badgeLabel}
                        </span>
                      </div>
                      <h3 className="font-orbitron font-black text-2xl sm:text-4xl text-white group-hover:text-cyan-200 transition-colors mt-1">
                        {hackFront.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <span className="font-orbitron font-bold text-lg text-slate-200">
                      {hackFront.institution}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      NATIONAL FINALE • 21–22 NOV 2026
                    </span>
                  </div>
                </div>

                {/* Golden Ticket Asset Presentation with Zoom on Hover */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8">
                  <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.3)] bg-slate-900 group">
                    <img
                      src={hackFront.image}
                      alt="hackFront INDIA National Finale Golden Ticket - Shashwat Dubey - Team Apex"
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">
                      ★ OFFICIAL QUALIFIER PASS
                    </div>
                    <h4 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
                      {hackFront.headline}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {hackFront.breakdown.challenge}
                    </p>
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono space-y-1.5 group-hover:border-cyan-500/40 transition-colors">
                      <div className="text-slate-400">BUILDER: <span className="text-cyan-300 font-bold">SHASHWAT DUBEY</span></div>
                      <div className="text-slate-400">TEAM: <span className="text-purple-300 font-bold">TEAM APEX</span></div>
                      <div className="text-slate-400">VENUE: <span className="text-slate-200">IIIT DELHI, OKHLA</span></div>
                      <div className="text-slate-400">DATE: <span className="text-amber-300 font-bold">21–22 NOV 2026</span></div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FUTURE_ARCHIVE_PLACEHOLDERS.map((item) => (
              <TiltCard
                key={item.id}
                cursorText="EXPLORE"
                maxTilt={6}
                className="p-8 rounded-3xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-300 font-bold">
                      {item.badgeLabel}
                    </span>
                    <span className="font-mono text-xs text-slate-500">{item.year}</span>
                  </div>
                  <h3 className="font-orbitron font-bold text-2xl text-white mb-2">{item.title}</h3>
                  <div className="font-mono text-xs text-slate-400 mb-4">{item.institution}</div>
                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">{item.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STATUS: {item.status}</span>
                  <span className="text-cyan-400">APEX R&D PIPELINE</span>
                </div>
              </TiltCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
