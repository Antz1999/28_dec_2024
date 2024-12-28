import React from 'react';

const BackgroundLogo = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
      <div className="w-[800px] h-[400px] relative opacity-[0.15]">
        <svg viewBox="0 0 1000 300" className="w-full h-full">
          <g className="text-white mix-blend-overlay">
            <path d="M100 150 C80 150, 90 100, 120 150 L140 150" />
            <path d="M140 150 L200 150 L220 200" />
            <path d="M220 200 L240 150" />
            <path d="M240 150 L300 150" />
            <path d="M300 150 L320 200" />
            <path d="M320 200 L340 150" />
            <path d="M340 150 L400 150" />
            <path d="M400 150 C420 150, 440 200, 460 150" />
            <text x="480" y="160" className="text-sm font-thin">glimpse.london</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BackgroundLogo;