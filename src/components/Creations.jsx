import React, { useState } from 'react';
import { PROJECTS, FUTURE_PROJECT_SLOTS } from '../data/projects';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';
import { ArrowUpRight, Cpu, Layers, Github, ExternalLink, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function Creations() {
  const [selectedProject, setSelectedProject] = useState(null);

  const flagship = PROJECTS.find((p) => p.id === 'govinnovate');
  const otherProjects = PROJECTS.filter((p) => p.id !== 'govinnovate');

  const handleOpenProject = (proj) => {
    soundManager.playChime(620, 0.25);
    setSelectedProject(proj);
  };

  return (
    <section id="creations" className="relative py-28 px-6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            <span>05 // DIGITAL ARTIFACTS & PLATFORMS</span>
            <span className="w-8 h-[1px] bg-cyan-400"></span>
          </div>
          <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6">
            IDEAS ARE NOTHING WITHOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">EXECUTION.</span>
          </h2>
          <p className="max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Move cursor over project cards to experience interactive light reflections and deep architecture details.
          </p>
        </div>

        {/* FLAGSHIP PROJECT: GOVINNOVATE WITH 3D TILT & MOVING LIGHT REFLECTION */}
        {flagship && (
          <TiltCard
            onClick={() => handleOpenProject(flagship)}
            cursorText="VIEW PROJECT"
            maxTilt={5}
            className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-[#070e1c] to-[#040813] border-2 border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.15)] mb-16 cursor-pointer group"
          >
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-300 font-bold uppercase tracking-wider">
                  {flagship.badge}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  // {flagship.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {flagship.github && (
                  <a
                    href={flagship.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor="pointer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                )}
                {flagship.liveDemo && (
                  <a
                    href={flagship.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor="pointer"
                    className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Main Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8">
              <div className="lg:col-span-7">
                <h3 className="font-orbitron font-black text-3xl sm:text-5xl text-white group-hover:text-cyan-200 transition-colors mb-3">
                  {flagship.title}
                </h3>
                <div className="text-base sm:text-lg font-mono text-cyan-300 mb-6">
                  {flagship.tagline}
                </div>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                  {flagship.overview}
                </p>

                {/* 3 Key Capabilities Highlight Box */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>AI Problem Decomposition:</strong> Transforms unstructured notes into tenders with IS 10500 benchmarks.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>GFR 149/170 Exemption:</strong> Automatically relaxes prior turnover barriers for DPIIT startups.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Cryptographic Audit Ledger:</strong> Immutably logs evaluation scores, pilot telemetry & treasury releases.</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all">
                    <span>CLICK TO OPEN COMPLETE SPECIFICATION</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>

              {/* Architecture Schematic Box with Smooth Zoom */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                <div className="font-mono text-xs text-slate-400 border-b border-slate-800 pb-3 mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Terminal size={14} className="text-cyan-400" />
                    <span>ARCHITECTURE SCHEMATIC</span>
                  </span>
                  <span className="text-[10px] text-emerald-400">PROTOTYPE_ONLINE</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between group-hover:translate-x-1 transition-transform">
                    <div>
                      <div className="text-[10px] text-slate-400">STAKEHOLDER 01</div>
                      <div className="text-slate-200 font-bold">Gov Department Portal</div>
                    </div>
                    <span className="text-[10px] text-cyan-400">AI Challenge Gen</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-purple-500/30 flex items-center justify-between group-hover:translate-x-1 transition-transform delay-75">
                    <div>
                      <div className="text-[10px] text-slate-400">STAKEHOLDER 02</div>
                      <div className="text-slate-200 font-bold">DPIIT Startup Sandbox</div>
                    </div>
                    <span className="text-[10px] text-purple-400">1-Click Exemption</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-500/30 flex items-center justify-between group-hover:translate-x-1 transition-transform delay-150">
                    <div>
                      <div className="text-[10px] text-slate-400">STAKEHOLDER 03</div>
                      <div className="text-slate-200 font-bold">Technical Evaluators</div>
                    </div>
                    <span className="text-[10px] text-amber-400">6-Pillar Scorecard</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                    <span>90-DAY MUNICIPAL TELEMETRY</span>
                    <span className="text-emerald-400">BENCHMARK SURPASSED</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center font-mono">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-cyan-400 font-bold text-sm">2.8 MIN</div>
                      <div className="text-[9px] text-slate-500">Alert Latency</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-emerald-400 font-bold text-sm">99.8%</div>
                      <div className="text-[9px] text-slate-500">Sensor Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {flagship.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-center group-hover:border-slate-700 transition-colors">
                  <div className="font-orbitron font-bold text-lg sm:text-xl text-cyan-300">{m.value}</div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </TiltCard>
        )}

        {/* OTHER CREATIONS (AVASAR & AICTE PORTAL) WITH 3D TILT & CUSTOM CURSOR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {otherProjects.map((project) => (
            <TiltCard
              key={project.id}
              onClick={() => handleOpenProject(project)}
              cursorText="VIEW PROJECT"
              maxTilt={7}
              className="p-8 rounded-3xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 font-bold">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{project.badge}</span>
                </div>

                <h3 className="font-orbitron font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <div className="font-mono text-xs text-purple-400 mb-4">{project.tagline}</div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {project.overview}
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">CLICK TO VIEW DOSSIER</span>
                <div className="flex items-center gap-1 font-mono text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* REUSABLE FUTURE CREATIONS ARCHIVE SLOTS */}
        <div className="p-8 rounded-3xl bg-slate-950/40 border border-dashed border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Future Creations Pipeline & Active R&D Slots</span>
            </div>
            <span className="font-mono text-[10px] text-slate-500">REUSABLE ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FUTURE_PROJECT_SLOTS.map((slot) => (
              <div key={slot.id} className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-orbitron font-bold text-sm text-slate-200">{slot.title}</div>
                  <div className="font-mono text-[10px] text-purple-400 uppercase mt-0.5">{slot.category}</div>
                  <div className="text-xs text-slate-400 font-light mt-1">{slot.tagline}</div>
                </div>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap ml-4">
                  {slot.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
