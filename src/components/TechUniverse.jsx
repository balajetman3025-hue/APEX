import React, { useState } from 'react';
import { TECH_DOMAINS } from '../data/techUniverse';
import { Brain, Sparkles, ShieldCheck, Globe, Cpu, Scan, Server, Cloud, Layers, Radio } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

const ICON_MAP = {
  Brain,
  Sparkles,
  ShieldCheck,
  Globe,
  Cpu,
  Scan,
  Server,
  Cloud,
  Layers
};

export default function TechUniverse() {
  const [activeDomain, setActiveDomain] = useState(TECH_DOMAINS[0]);

  const handleSelectDomain = (domain) => {
    soundManager.playClick();
    setActiveDomain(domain);
  };

  return (
    <section id="tech-universe" className="relative py-28 px-6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-purple-400"></span>
            <span>06 // THE EXPLORATION FRONTIER</span>
            <span className="w-8 h-[1px] bg-purple-400"></span>
          </div>
          <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6">
            EXPLORING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">FRONTIER OF TECHNOLOGY.</span>
          </h2>
          <p className="max-w-3xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            The domains we explore, dissect, and experiment with. These represent our collective intellectual playground and future innovation vectors.
          </p>
          <div className="font-mono text-xs text-slate-500 mt-2">
            * PRESENTED AS COLLECTIVE EXPLORATION & RESEARCH INTERESTS
          </div>
        </div>

        {/* Interactive Constellation Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 9 Domain Nodes Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {TECH_DOMAINS.map((domain) => {
              const Icon = ICON_MAP[domain.icon] || Cpu;
              const isSelected = activeDomain.id === domain.id;

              return (
                <button
                  key={domain.id}
                  onClick={() => handleSelectDomain(domain)}
                  className={`group p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-[1.02]'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                  style={{
                    borderColor: isSelected ? domain.color : undefined
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="p-2 rounded-xl transition-colors"
                      style={{
                        backgroundColor: `${domain.color}15`,
                        color: domain.color
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: isSelected ? domain.color : 'transparent',
                        boxShadow: isSelected ? `0 0 8px ${domain.color}` : 'none'
                      }}
                    ></span>
                  </div>

                  <div>
                    <h3 className="font-orbitron font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {domain.title}
                    </h3>
                    <div className="font-mono text-[9px] text-slate-400 mt-1 uppercase tracking-wider">
                      {domain.level}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Domain Radar Inspector */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Top Radar Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800 font-mono text-xs">
              <span className="flex items-center gap-2 text-cyan-400">
                <Radio size={14} className="animate-pulse" />
                <span>ACTIVE DOMAIN INSPECTOR</span>
              </span>
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold"
                style={{
                  backgroundColor: `${activeDomain.color}20`,
                  color: activeDomain.color,
                  border: `1px solid ${activeDomain.color}40`
                }}
              >
                {activeDomain.level}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="my-6">
              <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white mb-2">
                {activeDomain.title}
              </h3>
              <p className="font-mono text-xs" style={{ color: activeDomain.color }}>
                {activeDomain.tagline}
              </p>
            </div>

            {/* In-depth Narrative */}
            <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
              {activeDomain.description}
            </p>

            {/* Key Technologies & Tools */}
            <div className="mb-6">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-3">
                Key Tooling & Exploration Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDomain.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Signal Indicator */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-500">
              <span>EXPLORATION STATUS</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE PIPELINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
