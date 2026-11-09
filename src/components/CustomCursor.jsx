import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Inspect target element for custom cursor attributes
      const target = e.target.closest('[data-cursor]');
      const clickable = e.target.closest('button, a, input, textarea, [role="button"]');

      if (target) {
        const text = target.getAttribute('data-cursor');
        if (text && text !== 'pointer') {
          setCursorText(text);
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(true);
        }
      } else if (clickable) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth Lerp Animation Loop
    const render = () => {
      // Faster, snappy dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Smooth trailing ring (lerp factor 0.16 for responsive fluid movement)
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Central Sharp Glowing Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff] transition-transform duration-75 ${
          cursorText ? 'opacity-0' : 'opacity-100'
        } ${isClicking ? 'scale-50' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer Dynamic Trailing Ring / Contextual Badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-200 backdrop-blur-sm ${
          cursorText
            ? 'px-4 py-2 w-auto h-auto min-w-[85px] rounded-full bg-cyan-950/80 border border-cyan-400 text-cyan-300 font-mono text-[10px] tracking-widest font-bold uppercase shadow-[0_0_25px_rgba(0,240,255,0.4)]'
            : isHovered
            ? 'w-12 h-12 border border-cyan-400/80 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,240,255,0.25)]'
            : 'w-8 h-8 border border-slate-500/50 bg-transparent'
        } ${isClicking ? 'scale-90' : 'scale-100'}`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="whitespace-nowrap animate-fadeIn">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
