import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/team';
import MemberModal from './MemberModal';
import TiltCard from './TiltCard';
import Member3DCanvas from './Member3DCanvas';
import { ArrowUpRight, BookOpen, Award, Sparkles, Terminal, Box } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function MeetTheFive() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  const handleCardClick = (member) => {
    soundManager.playChime(650, 0.2);
    setSelectedMember(member);
  };

  return (
    <section id="team" className="relative py-28 px-6 overflow-hidden">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-purple-400 tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-purple-400"></span>
            <span>03 // THE FIVE ARCHITECTS</span>
            <span className="w-8 h-[1px] bg-purple-400"></span>
          </div>
          <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">FIVE.</span>
          </h2>
          <p className="max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Hover over any team member to activate their individual interactive 3D holographic structure and spatial depth.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 font-mono text-xs tracking-wider mt-3 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <Box size={14} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>INTERACTIVE REAL-TIME 3D ARCHETYPE FOR EACH MEMBER</span>
          </div>
        </div>

        {/* Member Grid - 3D Tilt Cards with Dedicated 3D Model Viewport */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, index) => {
            const isHovered = hoveredMemberId === member.id;

            return (
              <TiltCard
                key={member.id}
                onClick={() => handleCardClick(member)}
                cursorText="VIEW PROFILE"
                maxTilt={10}
                className="group rounded-3xl p-6 sm:p-8 bg-slate-950/75 border border-slate-800/80 hover:border-cyan-400/80 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xl relative"
                style={{
                  boxShadow: isHovered
                    ? `0 20px 45px rgba(0,0,0,0.8), 0 0 35px ${member.glowColor}`
                    : `0 10px 30px rgba(0,0,0,0.6)`
                }}
              >
                {/* Data attribute for 3D canvas mouse tracking */}
                <div
                  data-member-card
                  className="w-full h-full flex flex-col justify-between"
                  onMouseEnter={() => {
                    setHoveredMemberId(member.id);
                    soundManager.playClick();
                  }}
                  onMouseLeave={() => setHoveredMemberId(null)}
                >
                  {/* Background Radial Glow */}
                  <div
                    className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                    style={{ backgroundColor: member.color }}
                  ></div>

                  {/* Top Bar with 3D Depth */}
                  <div style={{ transform: 'translateZ(30px)' }} className="transition-transform duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border transition-all duration-300 font-bold"
                        style={{
                          borderColor: `${member.color}60`,
                          color: member.color,
                          backgroundColor: `${member.color}15`,
                          boxShadow: isHovered ? `0 0 12px ${member.color}40` : 'none'
                        }}
                      >
                        {member.badge}
                      </span>
                      <span className="font-mono text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">
                        // 0{index + 1}
                      </span>
                    </div>

                    {/* Interactive 3D Holographic Artifact Viewport */}
                    <div className="relative w-full h-56 rounded-2xl bg-gradient-to-b from-[#080d1e] to-[#040713] border border-slate-800/90 mb-6 overflow-hidden group-hover:border-slate-700 transition-colors shadow-inner flex items-center justify-center">
                      {/* Real-time Three.js 3D Holographic Artifact */}
                      <Member3DCanvas member={member} isHovered={isHovered} />

                      {/* Photo overlay if user uploads photograph */}
                      {member.photo && (
                        <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-30">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Sci-Fi Grid lines & Coordinates Overlay */}
                      <div className="absolute top-2.5 left-3 font-mono text-[9px] text-slate-500 tracking-wider pointer-events-none z-10 flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: member.color,
                            boxShadow: isHovered ? `0 0 8px ${member.color}` : 'none'
                          }}
                        ></span>
                        <span className="opacity-75 group-hover:opacity-100 group-hover:text-slate-300 transition-colors">
                          3D_NODE: {member.badge}
                        </span>
                      </div>

                      {/* 3D Kinetic Prompt Pill on Hover */}
                      <div className="absolute bottom-2.5 right-3 font-mono text-[9px] text-cyan-400 tracking-wider pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        <Sparkles size={10} />
                        <span>INTERACTIVE 3D PARALLAX</span>
                      </div>

                      {/* Scanline overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none opacity-40"></div>
                    </div>

                    {/* Member Name with 3D Pop-out Depth */}
                    <div style={{ transform: 'translateZ(40px)' }} className="transition-transform duration-300">
                      <h3 className="font-orbitron font-black text-xl sm:text-2xl text-white tracking-wide group-hover:text-cyan-300 transition-colors mb-1.5">
                        {member.name}
                      </h3>

                      {/* Role */}
                      <div className="font-mono text-xs tracking-wider mb-3.5" style={{ color: member.color }}>
                        {member.role}
                      </div>

                      {/* College */}
                      <div className="flex items-start gap-2 text-xs text-slate-400 mb-3.5 font-light">
                        <BookOpen size={14} className="text-slate-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{member.college}</span>
                      </div>

                      {/* Intro snippet */}
                      <p className="text-xs text-slate-400 font-light leading-relaxed mb-4 line-clamp-2">
                        {member.intro}
                      </p>

                      {/* Floating Key Interests on Hover */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {member.interests.slice(0, 2).map((interest, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Meta & Action Pill with 3D Depth */}
                  <div
                    style={{ transform: 'translateZ(35px)' }}
                    className="pt-4 border-t border-slate-800/80 flex items-center justify-between transition-transform duration-300"
                  >
                    <div className="flex items-center gap-2">
                      {member.projects && member.projects.length > 0 && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 font-medium">
                          {member.projects.length} Projects
                        </span>
                      )}
                      {member.achievements && member.achievements.length > 0 && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/60 text-amber-300 flex items-center gap-1 font-medium">
                          <Award size={10} />
                          Winner
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span>VIEW PROFILE</span>
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Member Deep-Dive Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}
