import React, { useState } from 'react';
import { Volume2, VolumeX, Radio } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

export default function AudioHUD() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    const state = soundManager.toggle();
    setIsPlaying(state);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
      <button
        onClick={toggleSound}
        className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-full border backdrop-blur-xl transition-all duration-300 shadow-2xl ${
          isPlaying
            ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-300 shadow-cyan-500/20'
            : 'bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-500'
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

        <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          <span>{isPlaying ? 'ATMOSPHERE: LIVE' : 'AUDIO: MUTED'}</span>
        </div>

        {/* Dynamic visualizer bars when active */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-full bg-cyan-400 animate-pulse"></span>
            <span className="w-0.5 h-2 bg-purple-400 animate-pulse delay-75"></span>
            <span className="w-0.5 h-3.5 bg-cyan-300 animate-pulse delay-150"></span>
            <span className="w-0.5 h-1.5 bg-purple-300 animate-pulse delay-200"></span>
          </div>
        )}
      </button>
    </div>
  );
}
