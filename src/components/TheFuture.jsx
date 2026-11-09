import React from 'react';
import ApexLogo from './ApexLogo';
import { Sparkles, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function TheFuture() {
  const handleCtaClick = () => {
    soundManager.playChime(750, 0.3);
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Intense Ambient Glow Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/20 via-purple-600/20 to-pink-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Animated Apex Monogram */}
        <div className="mb-8 relative group cursor-pointer" onClick={() => soundManager.playChime(800, 0.3)}>
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity"></div>
          <ApexLogo size={90} animated={true} />
        </div>

        <div className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase mb-4">
          // BEYOND THE HORIZON
        </div>

        {/* Main Headline */}
        <h2 className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl tracking-wider text-white mb-6">
          WE ARE JUST <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">GETTING STARTED.</span>
        </h2>

        {/* Supporting Message */}
        <div className="max-w-2xl text-slate-300 text-base sm:text-lg font-light leading-relaxed space-y-4 mb-10">
          <p>
            "The next generation of innovation belongs to those who dare to explore, experiment, collaborate, and create."
          </p>
          <p className="font-orbitron font-bold text-xl sm:text-2xl text-white tracking-widest uppercase">
            WE ARE APEX.
          </p>
          <p className="font-mono text-xs sm:text-sm text-cyan-300 tracking-[0.2em] uppercase">
            FIVE MINDS. ONE VISION. INFINITE POSSIBILITIES.
          </p>
        </div>

        {/* Final CTA Button */}
        <button
          onClick={handleCtaClick}
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-sm sm:text-base font-mono font-bold tracking-widest text-slate-950 uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
        >
          <Sparkles size={18} className="text-slate-950" />
          <span>LET'S BUILD SOMETHING EXTRAORDINARY</span>
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
        </button>
      </div>
    </section>
  );
}
