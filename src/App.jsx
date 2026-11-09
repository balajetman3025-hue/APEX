import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Apex3DCorridor from './components/Apex3DCorridor';
import CyberCanvas from './components/CyberCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import MeetTheFive from './components/MeetTheFive';
import Achievements from './components/Achievements';
import Creations from './components/Creations';
import TechUniverse from './components/TechUniverse';
import Journey from './components/Journey';
import TheFuture from './components/TheFuture';
import ContactFooter from './components/ContactFooter';
import AudioHUD from './components/AudioHUD';
import { Compass, Layers } from 'lucide-react';
import { soundManager } from './utils/audioSynth';

export default function App() {
  const [viewMode, setViewMode] = useState('corridor'); // 'corridor' or 'overview'

  const toggleViewMode = () => {
    soundManager.playChime(700, 0.25);
    setViewMode((prev) => (prev === 'corridor' ? 'overview' : 'corridor'));
  };

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-100 font-space selection:bg-cyan-400 selection:text-slate-950 overflow-x-hidden">
      {/* Custom Animated Glowing Cursor */}
      <CustomCursor />

      {/* Floating Mode Switcher Button (Top Right Floating Pill) */}
      <div className="fixed top-20 sm:top-24 right-4 sm:right-6 z-50 flex items-center gap-2">
        <button
          onClick={toggleViewMode}
          data-cursor="pointer"
          className="group flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full bg-slate-900/95 hover:bg-slate-800 border border-amber-500/50 text-amber-300 font-mono text-[11px] sm:text-xs tracking-wider backdrop-blur-xl shadow-[0_0_20px_rgba(255,152,0,0.3)] transition-all hover:scale-105 active:scale-95"
        >
          {viewMode === 'corridor' ? (
            <>
              <Layers size={14} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>SWITCH TO OVERVIEW FEED</span>
            </>
          ) : (
            <>
              <Compass size={14} className="text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>ENTER 3D CORRIDOR EXPERIENCE</span>
            </>
          )}
        </button>
      </div>

      {viewMode === 'corridor' ? (
        /* 3D Walkthrough Corridor Mode (Exact Experience from Video) */
        <div className="relative w-full">
          <Apex3DCorridor />

          {/* Quick Section to Jump Down into Deep Dossiers */}
          <section className="relative z-10 bg-[#030612] py-20 px-6 border-t border-slate-800 text-center flex flex-col items-center">
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
              // ARCHIVAL RECORD SYSTEM
            </span>
            <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white mb-6">
              EXPLORE FULL DOSSIERS & DOCUMENTATION
            </h2>
            <button
              onClick={() => setViewMode('overview')}
              data-cursor="pointer"
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-slate-950 font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 transition-all"
            >
              BROWSE TEAM & PROJECT ARCHIVES
            </button>
          </section>

          {/* Deep Exploration Sections */}
          <MeetTheFive />
          <Achievements />
          <Creations />
          <TechUniverse />
          <Journey />
          <TheFuture />
          <ContactFooter />
        </div>
      ) : (
        /* Classic Continuous Overview Feed */
        <div className="relative">
          <CyberCanvas />
          <Navbar />
          <main className="relative z-10 flex flex-col">
            <Hero />
            <WhoWeAre />
            <MeetTheFive />
            <Achievements />
            <Creations />
            <TechUniverse />
            <Journey />
            <TheFuture />
            <ContactFooter />
          </main>
        </div>
      )}

      {/* Floating Audio Controller */}
      <AudioHUD />
    </div>
  );
}
