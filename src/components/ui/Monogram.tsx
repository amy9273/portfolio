import React from 'react';

interface MonogramProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function Monogram({ size = 36, className = '', showText = false }: MonogramProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
        aria-label="A/B Monogram Logo"
      >
        {/* Background rounded polygon with subtle violet border */}
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="12"
          fill="#1F162D"
          stroke="#7041A6"
          strokeWidth="1.5"
          className="transition-colors duration-300 group-hover:stroke-[#A77BEB]"
        />

        {/* Letter 'A' Form */}
        <path
          d="M13 33L19.5 15H22.5L29 33H25.8L24.3 28.5H17.7L16.2 33H13ZM18.6 26H23.4L21 18.8L18.6 26Z"
          fill="#F6F3FA"
          className="transition-colors duration-300 group-hover:fill-white"
        />

        {/* The Signature Angled Slash */}
        <line
          x1="26"
          y1="34"
          x2="32"
          y2="14"
          stroke="#A77BEB"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="transition-all duration-300 group-hover:stroke-[#D8C5FF]"
        />

        {/* Letter 'B' Spine & Loops */}
        <path
          d="M31 15H36.5C38.4 15 39.8 16.2 39.8 18C39.8 19.3 39 20.3 37.8 20.8C39.4 21.3 40.5 22.5 40.5 24.2C40.5 26.2 38.8 27.5 36.6 27.5H31V15ZM33.8 20.2H36.2C37.1 20.2 37.7 19.5 37.7 18.7C37.7 17.9 37.1 17.2 36.2 17.2H33.8V20.2ZM33.8 25.3H36.4C37.4 25.3 38.1 24.5 38.1 23.6C38.1 22.7 37.4 22 36.4 22H33.8V25.3Z"
          fill="#A77BEB"
          className="transition-colors duration-300 group-hover:fill-[#D8C5FF]"
        />
      </svg>

      {showText && (
        <div className="flex flex-col text-left leading-none font-sans">
          <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-electric-lavender transition-colors">
            ANGEL AMAYA BALION
          </span>
          <span className="font-mono text-[10px] text-muted-mauve tracking-widest uppercase mt-0.5">
            Software Developer
          </span>
        </div>
      )}
    </div>
  );
}
