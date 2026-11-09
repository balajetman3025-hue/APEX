// Ambient Cyber-Acoustic Audio Engine (Web Audio API)
// Generates subtle sci-fi atmospheric hum and micro-clicks without external audio assets.

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.droneGain = null;
    this.osc1 = null;
    this.osc2 = null;
    this.filter = null;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();

    // Master volume control (soft & cinematic)
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Atmospheric Low-Pass Drone
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(140, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(4, this.ctx.currentTime);
    this.filter.connect(this.masterGain);

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.droneGain.connect(this.filter);

    // Oscillator 1 - Deep sub base (55 Hz - A1)
    this.osc1 = this.ctx.createOscillator();
    this.osc1.type = 'sine';
    this.osc1.frequency.setValueAtTime(55, this.ctx.currentTime);
    this.osc1.connect(this.droneGain);
    this.osc1.start();

    // Oscillator 2 - Shimmer fifth (82.5 Hz - E2)
    this.osc2 = this.ctx.createOscillator();
    this.osc2.type = 'triangle';
    this.osc2.frequency.setValueAtTime(82.4, this.ctx.currentTime);
    this.osc2.connect(this.droneGain);
    this.osc2.start();
  }

  toggle() {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      // Fade out
      this.droneGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
      this.isPlaying = false;
    } else {
      // Fade in
      this.droneGain.gain.linearRampToValueAtTime(0.4, this.ctx.currentTime + 1.2);
      this.isPlaying = true;
      this.playChime(440, 0.05);
    }
    return this.isPlaying;
  }

  // Futuristic interface chirp/click sound
  playClick() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Audio safety catch
    }
  }

  playChime(freq = 520, duration = 0.2) {
    if (!this.isPlaying || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio safety catch
    }
  }
}

export const soundManager = new AudioEngine();
