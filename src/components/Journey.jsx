import React, { useState } from 'react';
import { JOURNEY_MILESTONES } from '../data/journey';
import { Calendar, Compass, ArrowRight, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function Journey() {
  const [activePhase, setActivePhase] = useState(JOURNEY_MILESTONES[2]); // Default to Sustainathon milestone

  const handleMilestoneClick = (item) => {
    soundManager.playClick();
    setActivePhase(item);
  };

  return (
    <section id="journey" className="relative py-28 px-6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            <span>07 // THE EVOLUTION ODYSSEY</span>
            <span className="w-8 h-[1px] bg-cyan-400"></span>
          </div>
          <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6">
            EVERY GREAT JOURNEY STARTS WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">CURIOSITY.</span>
          </h2>
          <p className="max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            From late-night campus brainstorming to competitive national arenas—our trajectory in real-time.
          </p>
        </div>

        {/* Cinematic Vertical & Interactive Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Timeline Nodes */}
          <div className="lg:col-span-6 space-y-4">
            {JOURNEY_MILESTONES.map((m) => {
              const isSelected = activePhase.phase === m.phase;

              return (
                <div
                  key={m.phase}
                  onClick={() => handleMilestoneClick(m)}
                  className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.2)] translate-x-2'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-300">
                        PHASE {m.phase}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        {m.date}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest font-bold">
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {m.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2">
                    {m.description}
                  </p>

                  {/* Right Arrow indicator on active */}
                  {isSelected && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                      <ChevronRight size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Selected Phase Spotlight Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-2 text-cyan-400">
                <Compass size={16} />
                <span>MILESTONE SPOTLIGHT // PHASE {activePhase.phase}</span>
              </span>
              <span className="text-purple-400 font-bold">{activePhase.date}</span>
            </div>

            <div className="my-6">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-1">
                // {activePhase.tag}
              </span>
              <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white mb-4">
                {activePhase.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                {activePhase.description}
              </p>
            </div>

            {/* Strategic Highlight Box */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6">
              <div className="font-mono text-xs text-purple-300 font-bold uppercase mb-2 flex items-center gap-2">
                <Sparkles size={14} className="text-purple-400" />
                <span>Critical Turning Point</span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {activePhase.highlight}
              </p>
            </div>

            {/* Metric pill */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">KEY MILESTONE RESULT:</span>
              <span className="text-cyan-300 font-bold">{activePhase.metric}</span>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>CONTINUOUS EVOLUTION</span>
              <span className="text-slate-400">APEX CHRONICLES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
