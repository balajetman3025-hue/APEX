import React, { useState, useEffect } from 'react';
import ApexLogo from './ApexLogo';
import { Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/audioSynth';

const NAV_LINKS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#who-we-are' },
  { name: 'TEAM', href: '#team' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CREATIONS', href: '#creations' },
  { name: 'FRONTIERS', href: '#tech-universe' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'CONTACT', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'who-we-are', 'team', 'achievements', 'creations', 'tech-universe', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const state = soundManager.toggle();
    setAudioActive(state);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#02050e]/85 backdrop-blur-2xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            data-cursor="pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <ApexLogo size={36} />
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-xl tracking-[0.25em] text-white group-hover:text-cyan-400 group-hover:tracking-[0.3em] transition-all duration-300">
                APEX
              </span>
              <span className="font-mono text-[9px] text-cyan-400/80 tracking-widest hidden sm:block">
                INNOVATION COLLECTIVE
              </span>
            </div>
          </a>

          {/* Desktop Floating Navigation Pills with Animated Glowing Underline & Letter Spacing */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/70 border border-slate-800/90 backdrop-blur-2xl shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  data-cursor="pointer"
                  className={`group relative px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/60 shadow-[0_0_15px_rgba(0,240,255,0.25)] border border-cyan-500/30 tracking-[0.2em] font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent tracking-[0.14em] hover:tracking-[0.2em]'
                  }`}
                >
                  {/* Glowing Underline bar on hover & active */}
                  <span
                    className={`absolute bottom-1 left-3 right-3 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-400 shadow-[0_0_8px_#00f0ff] opacity-100'
                        : 'bg-purple-400 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#a855f7]'
                    }`}
                  />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Button & Audio Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleSound}
              data-cursor="pointer"
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300"
              title="Toggle Audio Atmosphere"
            >
              {audioActive ? <Volume2 size={16} className="text-cyan-400" /> : <VolumeX size={16} />}
            </button>

            <button
              onClick={() => handleNavClick('#contact')}
              data-cursor="pointer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden text-xs font-mono font-bold tracking-widest text-slate-950 transition-all duration-300 bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-105 active:scale-100"
            >
              <span>CONNECT</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400"
            >
              {audioActive ? <Volume2 size={18} className="text-cyan-400" /> : <VolumeX size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white border border-slate-800 rounded-lg bg-slate-900/60"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#02050e]/95 backdrop-blur-2xl lg:hidden pt-24 px-8 flex flex-col gap-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
              // Navigation Index
            </span>
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-orbitron text-xl font-bold tracking-wider text-slate-300 hover:text-cyan-400 transition-colors py-2 border-b border-slate-800/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={16} className="text-slate-600" />
              </button>
            ))}
          </div>

          <div className="mt-auto pb-10 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-mono font-bold text-sm tracking-widest text-center"
            >
              ENTER CONTACT PROTOCOL
            </button>
          </div>
        </div>
      )}
    </>
  );
}
