import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Linkedin, Mail, Award, BookOpen, Terminal, Sparkles, FolderGit2, Box } from 'lucide-react';
import Member3DCanvas from './Member3DCanvas';
import { soundManager } from '../utils/audioSynth';

export default function MemberModal({ member, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>

      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#080d1a] border border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-10 my-auto text-slate-200"
        style={{
          boxShadow: `0 0 50px ${member.glowColor}`
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          data-cursor="pointer"
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors z-20"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Top Header Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-start pb-8 border-b border-slate-800">
          {/* 3D Holographic Artifact / Portrait Viewport */}
          <div
            className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-b from-[#091124] to-[#040813] border-2 overflow-hidden flex-shrink-0 flex items-center justify-center shadow-2xl"
            style={{ borderColor: member.color }}
          >
            {/* Real-time 3D Three.js Structure */}
            <Member3DCanvas member={member} isHovered={true} />

            {/* Photo fallback if uploaded */}
            {member.photo && (
              <img src={member.photo} alt={member.name} className="absolute inset-0 w-full h-full object-cover opacity-80" />
            )}

            <div
              className="absolute top-2 right-2 px-2 py-0.5 rounded font-mono text-[9px] font-bold tracking-wider z-10"
              style={{ backgroundColor: `${member.color}25`, color: member.color, border: `1px solid ${member.color}60` }}
            >
              {member.badge}
            </div>

            <div className="absolute bottom-2 left-2 font-mono text-[8px] text-cyan-400 tracking-wider z-10 flex items-center gap-1">
              <Box size={9} />
              <span>INTERACTIVE 3D</span>
            </div>
          </div>

          {/* Member Name, Role, Education */}
          <div className="flex-1">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-1" style={{ color: member.color }}>
              <span>MEMBER DOSSIER</span>
              <span>//</span>
              <span>{member.badge}</span>
            </div>
            <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-white tracking-wide mb-2">
              {member.name}
            </h2>
            <div className="text-sm sm:text-base font-mono text-cyan-400 mb-3">
              {member.role}
            </div>

            {/* Education Box */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 mb-4">
              <BookOpen size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <div className="font-medium text-slate-200">{member.education}</div>
                <div className="text-slate-400 mt-0.5">{member.college}</div>
                {member.location && <div className="text-slate-500 font-mono mt-0.5">{member.location}</div>}
              </div>
            </div>

            {/* Personal Motto Quote */}
            <blockquote className="italic text-xs sm:text-sm text-slate-300 border-l-2 pl-3 py-1 bg-slate-900/30 rounded-r"
                        style={{ borderColor: member.color }}>
              "{member.motto}"
            </blockquote>
          </div>
        </div>

        {/* Introduction */}
        <div className="py-6 border-b border-slate-800">
          <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-2 flex items-center gap-2">
            <Sparkles size={14} style={{ color: member.color }} />
            <span>Profile Introduction</span>
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            {member.intro}
          </p>
        </div>

        {/* Interests & Domains */}
        <div className="py-6 border-b border-slate-800">
          <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3 flex items-center gap-2">
            <Terminal size={14} style={{ color: member.color }} />
            <span>Exploration Areas & Interests</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {member.interests.map((interest, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Spectrum */}
        <div className="py-6 border-b border-slate-800">
          <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3">
            Technical Skillset
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {member.skills.languages && (
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 block mb-1">LANGUAGES</span>
                <span className="text-cyan-300">{member.skills.languages.join(" • ")}</span>
              </div>
            )}
            {member.skills.frontend && (
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 block mb-1">FRONTEND & UI</span>
                <span className="text-purple-300">{member.skills.frontend.join(" • ")}</span>
              </div>
            )}
            {member.skills.backend && (
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 block mb-1">BACKEND & STORAGE</span>
                <span className="text-amber-300">{member.skills.backend.join(" • ")}</span>
              </div>
            )}
            {member.skills.specializations && (
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 block mb-1">SPECIALIZATIONS</span>
                <span className="text-emerald-300">{member.skills.specializations.join(" • ")}</span>
              </div>
            )}
          </div>
        </div>

        {/* Projects Showcase (Specifically for Harsh Vardhan Singh or supplied members) */}
        {member.projects && member.projects.length > 0 && (
          <div className="py-6 border-b border-slate-800">
            <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3 flex items-center gap-2">
              <FolderGit2 size={16} className="text-cyan-400" />
              <span>Project Portfolio ({member.projects.length})</span>
            </h3>
            <div className="space-y-4">
              {member.projects.map((proj, pIdx) => (
                <div key={pIdx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="font-orbitron font-bold text-base text-white">{proj.title}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-3">{proj.summary}</p>
                  
                  {proj.highlights && (
                    <ul className="text-[11px] text-slate-400 space-y-1 mb-3 list-disc pl-4">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {proj.stack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {member.achievements && member.achievements.length > 0 && (
          <div className="py-6 border-b border-slate-800">
            <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3 flex items-center gap-2">
              <Award size={16} className="text-amber-400" />
              <span>Confirmed Recognitions</span>
            </h3>
            <div className="space-y-2">
              {member.achievements.map((ach, aIdx) => (
                <div key={aIdx} className="flex items-center gap-3 p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs font-mono">
                  <Award size={16} className="text-amber-400 flex-shrink-0" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {member.social?.github && (
              <a href={member.social.github} target="_blank" rel="noreferrer" data-cursor="pointer"
                 className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors">
                <Github size={16} />
              </a>
            )}
            {member.social?.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noreferrer" data-cursor="pointer"
                 className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors">
                <Linkedin size={16} />
              </a>
            )}
            {member.social?.email && (
              <a href={member.social.email} data-cursor="pointer"
                 className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors">
                <Mail size={16} />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            data-cursor="pointer"
            className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono tracking-wider text-white transition-colors"
          >
            CLOSE DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
}
