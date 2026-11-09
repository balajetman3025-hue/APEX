import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, CheckCircle2, Shield, Cpu, Activity } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl animate-fadeIn">
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>

      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#070b16] border border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-10 my-auto text-slate-200"
        style={{ boxShadow: `0 0 50px rgba(0, 240, 255, 0.2)` }}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors z-20"
        >
          <X size={20} />
        </button>

        {/* Top Header */}
        <div className="pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400 uppercase mb-2">
            <span>PROJECT DOSSIER</span>
            <span>//</span>
            <span>{project.category}</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wide mb-3">
            {project.title}
          </h2>
          <div className="text-sm sm:text-base font-mono text-purple-300 mb-4">
            {project.tagline}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 border border-cyan-800 text-cyan-300">
              {project.badge}
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors"
              >
                <Github size={14} />
                <span>GITHUB REPOSITORY</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
              >
                <ExternalLink size={14} />
                <span>LIVE DEMO PREVIEW</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Overview */}
        <div className="py-8 border-b border-slate-800">
          <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3">
            Executive Overview
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {project.overview}
          </p>
        </div>

        {/* Problem Statement & Our Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 border-b border-slate-800">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h4 className="font-mono text-xs text-rose-400 uppercase tracking-widest font-bold mb-2">
              The Problem Statement
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold mb-2">
              Our Architectural Approach
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-8 border-b border-slate-800">
          <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-4">
            Key Architecture Modules
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="font-orbitron font-bold text-xs sm:text-sm text-white mb-1.5 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                  <span>{feat.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Detailed Table */}
        <div className="py-8 border-b border-slate-800">
          <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-4">
            Technology Stack Decomposition
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {project.techStack.map((tech, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="font-orbitron font-bold text-xs text-white">{tech.name}</div>
                <div className="font-mono text-[10px] text-cyan-400 uppercase my-0.5">{tech.category}</div>
                <div className="text-[11px] text-slate-400 font-light">{tech.purpose}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Contributions */}
        <div className="py-8 border-b border-slate-800">
          <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-2">
            Team APEX Engineering Contribution
          </h3>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            {project.teamContributions}
          </p>
        </div>

        {/* Modal Footer */}
        <div className="pt-6 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500">
            APEX CREATIONS ARCHIVE // SPECIFICATION COMPLETE
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white transition-colors"
          >
            DISMISS DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
}
