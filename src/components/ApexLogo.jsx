import React from 'react';

export default function ApexLogo({ size = 42, animated = true, className = "" }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${animated ? 'transition-transform duration-500 hover:scale-110' : ''}`}
      >
        <defs>
          <linearGradient id="apexGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="apexCore" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
          </linearGradient>
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Monolith Tetrahedron Geometry */}
        <polygon
          points="50,8 90,82 10,82"
          fill="none"
          stroke="url(#apexGrad1)"
          strokeWidth="3"
          strokeLinejoin="round"
          filter="url(#neonGlow)"
        />

        {/* Inner Converging 5 Facets (Five Minds) */}
        {/* Facet 1: Central Vertex to Apex */}
        <line x1="50" y1="8" x2="50" y2="54" stroke="#00F0FF" strokeWidth="2.5" strokeDasharray="3 2" />
        {/* Facet 2: Left base to center */}
        <line x1="10" y1="82" x2="50" y2="54" stroke="#A855F7" strokeWidth="2" />
        {/* Facet 3: Right base to center */}
        <line x1="90" y1="82" x2="50" y2="54" stroke="#00F0FF" strokeWidth="2" />
        {/* Facet 4 & 5: Horizontal Cross-Bracing Prism */}
        <line x1="30" y1="45" x2="70" y2="45" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <polygon points="50,22 66,54 34,54" fill="url(#apexCore)" />

        {/* 5 Singular Node Orbs representing the 5 Core Minds */}
        <circle cx="50" cy="8" r="4.5" fill="#00F0FF" filter="url(#neonGlow)" />
        <circle cx="10" cy="82" r="4" fill="#A855F7" />
        <circle cx="90" cy="82" r="4" fill="#EC4899" />
        <circle cx="34" cy="54" r="3.5" fill="#F59E0B" />
        <circle cx="66" cy="54" r="3.5" fill="#10B981" />
        
        {/* Apex Core Singularity */}
        <circle cx="50" cy="54" r="5" fill="#FFFFFF" filter="url(#neonGlow)" />
      </svg>
    </div>
  );
}
