import React, { useState } from 'react';
import ApexLogo from './ApexLogo';
import { ArrowDown, Sparkles, ChevronRight, Terminal } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function Hero() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const handleEnterExperience = () => {
    soundManager.playChime(600, 0.3);
    const target = document.getElementById('who-we-are');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverStory = () => {
    soundManager.playClick();
    const target = document.getElementById('team');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Cinematic Ambient Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow"></div>

      {/* Decorative HUD Corner Coordinate Marks */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-slate-600 hidden lg:block tracking-widest">
        SYS_STATUS: ONLINE<br />
        LAT: 28.4744° N // LON: 77.5040° E<br />
        CORE_INSTITUTE: GL BAJAJ
      </div>
      <div className="absolute top-24 right-8 font-mono text-[10px] text-slate-600 text-right hidden lg:block tracking-widest">
        SPEC: APEX-V2.7-DEPLOY<br />
        ACTIVE_MINDS: 05<br />
        PROTOCOL: ZERO_LEGACY
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Animated Status Pill */}
        <div
          data-cursor="explore"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-float"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="uppercase text-[11px]">SUSTAINATHON 2.0 THEME WINNER • 5 MINDS AS ONE</span>
        </div>

        {/* Large Central Abstract 3D APEX Symbol */}
        <div
          className="mb-6 relative group cursor-pointer"
          data-cursor="explore"
          onClick={() => soundManager.playChime(700, 0.25)}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <ApexLogo size={110} animated={true} />
        </div>

        {/* Brand Name with Atmospheric Lighting */}
        <h1 className="font-orbitron font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] mb-4">
          APEX
        </h1>

        {/* Main Tagline */}
        <div className="font-orbitron font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 uppercase mb-4">
          BEYOND IDEAS. INTO INNOVATION.
        </div>

        {/* Secondary Tagline */}
        <div className="font-mono text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase mb-8">
          FIVE MINDS • ONE VISION • INFINITE POSSIBILITIES
        </div>

        {/* Supporting Narrative Text */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-12">
          "We are five curious minds exploring technology, building intelligent solutions, and transforming ambitious ideas into meaningful creations."
        </p>

        {/* Primary & Secondary Interactions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={handleEnterExperience}
            data-cursor="pointer"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-mono font-bold tracking-widest text-slate-950 uppercase bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles size={16} className="text-slate-950" />
            <span>ENTER THE APEX EXPERIENCE</span>
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={handleDiscoverStory}
            data-cursor="pointer"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-mono tracking-widest text-slate-300 hover:text-white uppercase bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Terminal size={16} className="text-purple-400" />
            <span>DISCOVER OUR STORY</span>
          </button>
        </div>

        {/* Quick Highlights Telemetry Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 pt-10 border-t border-slate-800/70 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <span className="font-orbitron font-bold text-2xl sm:text-3xl text-cyan-400">05</span>
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-1">Core Builders</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-orbitron font-bold text-2xl sm:text-3xl text-purple-400">WINNER</span>
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-1">Sustainathon 2.0</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-orbitron font-bold text-2xl sm:text-3xl text-amber-400">FINALE</span>
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-1">hackFront 2026</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-orbitron font-bold text-2xl sm:text-3xl text-emerald-400">03+</span>
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-1">Deep Platforms</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        onClick={handleEnterExperience}
        data-cursor="pointer"
        aria-label="Scroll to Who We Are"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer group"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase opacity-75 group-hover:opacity-100">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown size={16} className="animate-bounce text-cyan-400/70 group-hover:text-cyan-300" />
      </button>
    </section>
  );
}
