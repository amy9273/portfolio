'use client';

import React from 'react';

export function OrbitalFallback() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 select-none overflow-hidden">
      {/* Ambient Radial Backlight */}
      <div className="absolute inset-0 bg-radial-gradient from-royal-violet/30 via-aubergine/40 to-transparent blur-2xl pointer-events-none" />

      {/* SVG Orbital Rings */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
        {/* Outer Ring 1 */}
        <div className="absolute inset-0 rounded-full border border-electric-lavender/30 border-dashed animate-[spin_30s_linear_infinite]" />

        {/* Diagonal Ellipse Ring 2 */}
        <div
          className="absolute inset-2 rounded-full border border-royal-violet/60 border-dotted animate-[spin_20s_linear_infinite_reverse]"
          style={{ transform: 'rotateX(60deg) rotateY(20deg)' }}
        />

        {/* Diagonal Ellipse Ring 3 */}
        <div
          className="absolute inset-4 rounded-full border border-pale-lilac/40 animate-[spin_15s_linear_infinite]"
          style={{ transform: 'rotateX(-45deg) rotateY(35deg)' }}
        />

        {/* Central Luminous Core */}
        <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-royal-violet via-electric-lavender to-pale-lilac p-[2.5px] shadow-[0_0_50px_rgba(167,123,235,0.7)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#160E24] flex items-center justify-center">
            <span className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-white via-pale-lilac to-electric-lavender tracking-tighter">
              A/B
            </span>
          </div>
        </div>

        {/* Orbiting Satellite Dot */}
        <div className="absolute inset-0 animate-[spin_8s_linear_infinite] pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-pale-lilac shadow-[0_0_10px_#D8C5FF] absolute top-1 left-1/2 -translate-x-1/2" />
        </div>
      </div>

      <div className="relative z-10 mt-6 text-center space-y-1">
        <span className="font-mono text-xs font-semibold text-pale-lilac tracking-widest uppercase block">
          NEBULA Orbital Core
        </span>
        <span className="font-mono text-[11px] text-muted-mauve block">
          Lightweight SVG Engine Mode
        </span>
      </div>
    </div>
  );
}
