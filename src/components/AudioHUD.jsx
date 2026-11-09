import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function AudioHUD() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    const state = soundManager.toggle();
    setIsPlaying(state);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      <button
        onClick={toggleSound}
        data-cursor="pointer"
        className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full border backdrop-blur-xl transition-all duration-300 shadow-2xl ${
          isPlaying
            ? 'bg-cyan-950/70 border-cyan-500/60 text-cyan-300 shadow-cyan-500/25 ring-1 ring-cyan-500/30'
            : 'bg-slate-900/80 border-slate-700/70 text-slate-400 hover:text-slate-200 hover:border-slate-500'
        }`}
        title={isPlaying ? "Mute Cyber Atmosphere" : "Enable Cyber Atmosphere"}
      >
        <span className="relative flex h-2 w-2">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-cyan-400' : 'bg-slate-500'}`}></span>
        </span>

        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}

        <div className="hidden sm:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          <span>{isPlaying ? 'ATMOSPHERE: LIVE' : 'AUDIO: MUTED'}</span>
        </div>

        {/* Dynamic visualizer bars when active */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-full bg-cyan-400 animate-pulse"></span>
            <span className="w-0.5 h-2 bg-purple-400 animate-pulse delay-75"></span>
            <span className="w-0.5 h-3 bg-cyan-300 animate-pulse delay-150"></span>
            <span className="w-0.5 h-1.5 bg-purple-300 animate-pulse delay-200"></span>
          </div>
        )}
      </button>
    </div>
  );
}
