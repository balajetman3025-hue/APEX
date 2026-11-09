import React, { useState } from 'react';
import Apex3DEnvironment from './Apex3DEnvironment';
import { Network, Zap, Binary, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

const NODES = [
  {
    id: 1,
    title: "System Architecture",
    owner: "Harsh Vardhan Singh",
    color: "#a855f7",
    desc: "Robust full-stack frameworks, cryptography & blockchain auditability.",
    icon: Network,
    badge: "ARCHITECT"
  },
  {
    id: 2,
    title: "Strategic Execution",
    owner: "Shashwat Dubey",
    color: "#00f0ff",
    desc: "Problem decomposition, national arena leadership & sprint focus.",
    icon: Zap,
    badge: "STRATEGIST"
  },
  {
    id: 3,
    title: "Algorithmic Precision",
    owner: "Shreyansh Baranwal",
    color: "#f59e0b",
    desc: "Computational integrity, database pipelines & logic optimization.",
    icon: Binary,
    badge: "ALGORITHMIC"
  },
  {
    id: 4,
    title: "Interactive Craft",
    owner: "Ayush Patel",
    color: "#10b981",
    desc: "Next-gen frontend flows, sensory polish & rapid product design.",
    icon: Sparkles,
    badge: "DEVELOPER"
  },
  {
    id: 5,
    title: "Research & Rigor",
    owner: "Aditya Shukla",
    color: "#f43f5e",
    desc: "Emerging tech exploration, model validation & deep testing.",
    icon: Shield,
    badge: "RESEARCHER"
  }
];

export default function WhoWeAre() {
  const [activeNode, setActiveNode] = useState(NODES[0]);

  const handleNodeHover = (node) => {
    setActiveNode(node);
    soundManager.playClick();
  };

  return (
    <section id="who-we-are" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header Marker */}
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-4 justify-center sm:justify-start">
          <span className="w-8 h-[1px] bg-cyan-400"></span>
          <span>02 // THE IDENTITY & CONVERGENCE</span>
        </div>

        {/* Cinematic Split-Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Interactive 3D Three.js Environment */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl bg-slate-950/70 border border-slate-800/80 shadow-[0_0_50px_rgba(0,240,255,0.12)] overflow-hidden backdrop-blur-xl">
              {/* Top HUD Telemetry Coordinates */}
              <div className="absolute top-4 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-slate-500 z-10 pointer-events-none">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  3D_SPACE: LIVE
                </span>
                <span>MESH: APEX_TETRAHEDRON</span>
              </div>

              {/* Real-time Interactive Three.js Canvas */}
              <Apex3DEnvironment />

              {/* Bottom Interactive Prompt Pill */}
              <div className="absolute bottom-4 right-6 font-mono text-[10px] text-slate-400 z-10 pointer-events-none hidden sm:block">
                MOVE CURSOR TO PARALLAX 3D SCENE
              </div>
            </div>
          </div>

          {/* Right Side: Large Animated Typography & Storytelling Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mb-6">
              WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">APEX.</span>
            </h2>

            <div className="space-y-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed mb-8">
              <p className="border-l-2 border-cyan-400 pl-4 bg-slate-900/30 py-2 rounded-r">
                "APEX is a team of five technology enthusiasts brought together by curiosity, creativity, and the desire to build something meaningful."
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                We explore emerging technologies, experiment with ideas, participate in innovation challenges, and transform concepts into practical solutions. We believe great innovation happens when different perspectives work together.
              </p>
            </div>

            {/* Five Animated Mind Elements List / Selector */}
            <div className="space-y-2.5">
              <span className="font-mono text-xs text-slate-400 tracking-widest uppercase block mb-3">
                // FIVE MINDS CONVERGING AS ONE
              </span>

              {NODES.map((node) => {
                const Icon = node.icon;
                const isSelected = activeNode.id === node.id;

                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => handleNodeHover(node)}
                    data-cursor="explore"
                    className={`group p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)] translate-x-2'
                        : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                    }`}
                    style={{
                      borderColor: isSelected ? node.color : undefined
                    }}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="p-2.5 rounded-xl transition-colors"
                        style={{
                          backgroundColor: `${node.color}20`,
                          color: node.color
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="font-orbitron font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors">
                          {node.title}
                        </div>
                        <div className="font-mono text-[11px] text-slate-400">
                          {node.owner}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full border hidden sm:inline-block"
                        style={{
                          borderColor: `${node.color}40`,
                          color: node.color,
                          backgroundColor: `${node.color}10`
                        }}
                      >
                        {node.badge}
                      </span>
                      <ArrowRight
                        size={16}
                        className={`transition-transform ${
                          isSelected ? 'translate-x-1 text-cyan-400' : 'text-slate-600'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
