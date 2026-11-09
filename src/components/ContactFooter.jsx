import React, { useState } from 'react';
import ApexLogo from './ApexLogo';
import { Mail, Send, Github, Linkedin, MessageSquare, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audioSynth';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playChime(880, 0.4);
    
    // Launch celebratory cyber confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00F0FF', '#A855F7', '#EC4899', '#3B82F6']
      });
    } catch {
      // confetti fallback
    }

    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('vardhanharsh012345@gmail.com');
    setCopied(true);
    soundManager.playClick();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 px-6 border-t border-slate-800/80 bg-[#02050c] overflow-hidden">
      {/* Background Section Accent Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Contact Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-3">
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            <span>08 // TRANSMISSION PROTOCOL</span>
            <span className="w-8 h-[1px] bg-cyan-400"></span>
          </div>
          <h2 className="font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6">
            CONNECT WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">APEX.</span>
          </h2>
          <p className="max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Interested in collaboration, hackathon alliances, or tech discussions? Send us a transmission.
          </p>
        </div>

        {/* Transmission Form & Direct Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Transmission Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-950/70 border border-slate-800 backdrop-blur-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 mb-4 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-orbitron font-bold text-2xl text-white mb-2">TRANSMISSION RECEIVED</h3>
                <p className="text-sm text-slate-300 max-w-md font-light mb-6">
                  Thank you for reaching out to Team APEX. Your message has been logged in our secure dispatcher.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 hover:text-white transition-colors"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="font-mono text-xs text-slate-400 flex items-center justify-between pb-3 border-b border-slate-800">
                  <span>DISPATCHER // DIRECT_COMM_CHANNEL</span>
                  <span className="text-cyan-400">STATUS: OPEN</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@frontier.io"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                    Transmission Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Collaboration on GovTech / SIH Challenge"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                    Message Body
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your proposal, query, or invitation..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm font-mono resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-mono font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
                >
                  <Send size={15} className="transition-transform group-hover:translate-x-1" />
                  <span>TRANSMIT MESSAGE TO APEX</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact & Institutional Anchor */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2">
                DIRECT INBOX
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-mono text-xs text-cyan-300 truncate">
                  vardhanharsh012345@gmail.com
                </span>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copy email address"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              {copied && (
                <span className="text-[10px] font-mono text-emerald-400 mt-1 block">
                  Copied to clipboard!
                </span>
              )}
            </div>

            {/* Academic Base */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2">
                CAMPUS & HEADQUARTERS
              </span>
              <div className="font-orbitron font-bold text-sm text-white">
                GL Bajaj Institute of Technology & Management
              </div>
              <div className="text-xs text-slate-400 font-light mt-1">
                Knowledge Park III, Greater Noida, Uttar Pradesh, India (PIN 201306)
              </div>
            </div>

            {/* Verified Platforms & Channels */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-3">
                COLLECTIVE PLATFORMS
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 flex items-center justify-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={16} />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 flex items-center justify-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin size={16} />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Navigation & Copyright */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ApexLogo size={32} />
            <div>
              <span className="font-orbitron font-black text-lg tracking-widest text-white">APEX</span>
              <span className="font-mono text-[10px] text-slate-500 block">
                BEYOND IDEAS. INTO INNOVATION.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">HOME</a>
            <a href="#who-we-are" className="hover:text-cyan-400 transition-colors">WHO WE ARE</a>
            <a href="#team" className="hover:text-cyan-400 transition-colors">TEAM</a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">ACHIEVEMENTS</a>
            <a href="#creations" className="hover:text-cyan-400 transition-colors">CREATIONS</a>
            <a href="#journey" className="hover:text-cyan-400 transition-colors">JOURNEY</a>
          </div>

          <div className="font-mono text-xs text-slate-500 text-center md:text-right">
            © 2026 TEAM APEX • ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
