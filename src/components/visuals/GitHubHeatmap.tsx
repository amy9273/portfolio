'use client';

import React, { useState } from 'react';
import rawData from '@/data/github-contributions.json';

interface DayContribution {
  date: string;
  count: number;
  level: number;
}

interface GitHubHeatmapProps {
  theme?: 'emerald' | 'violet';
}

interface Palette {
  fill: string;
  stroke: string;
}

const PALETTES: Record<'emerald' | 'violet', Palette[]> = {
  emerald: [
    { fill: '#161B22', stroke: '#21262D' },
    { fill: '#0E4429', stroke: '#1B5E38' },
    { fill: '#006D32', stroke: '#00853D' },
    { fill: '#26A641', stroke: '#2EC44D' },
    { fill: '#39D353', stroke: '#5FF075' },
  ],
  violet: [
    { fill: '#191326', stroke: '#2D1F42' },
    { fill: '#402068', stroke: '#542B8A' },
    { fill: '#7041A6', stroke: '#8F53D3' },
    { fill: '#A77BEB', stroke: '#C29DFA' },
    { fill: '#D8C5FF', stroke: '#EDE4FF' },
  ],
};

const MONTH_MARKERS = [
  { label: 'Nov', week: 0 },
  { label: 'Dec', week: 4 },
  { label: 'Jan', week: 8 },
  { label: 'Feb', week: 13 },
  { label: 'Mar', week: 17 },
  { label: 'Apr', week: 21 },
  { label: 'May', week: 25 },
  { label: 'Jun', week: 30 },
  { label: 'Jul', week: 34 },
  { label: 'Aug', week: 38 },
  { label: 'Sep', week: 43 },
  { label: 'Oct', week: 47 },
];

export function GitHubHeatmap({ theme = 'violet' }: GitHubHeatmapProps) {
  const [activeTheme, setActiveTheme] = useState<'emerald' | 'violet'>(theme);
  const [hoveredDay, setHoveredDay] = useState<DayContribution | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const contributions: DayContribution[] = rawData.contributions || [];
  const totalCount = rawData.total?.lastYear || 1010;

  // Organize contributions into weeks (columns of 7 days)
  const weeks: DayContribution[][] = [];
  let currentWeek: DayContribution[] = [];

  contributions.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7 || index === contributions.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  const palette = PALETTES[activeTheme];

  return (
    <div className="w-full bg-[#0D1117] border border-slate-800 rounded-3xl p-5 sm:p-7 font-mono text-xs text-slate-300 shadow-xl">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <h3 className="text-white text-sm font-bold flex items-center gap-2">
              <span>amy9273 / Activity Radar</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Verified GitHub Graph
              </span>
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">
              <span className="text-emerald-400 font-bold">{totalCount.toLocaleString()} contributions</span> in the last year
            </p>
          </div>
        </div>

        {/* Theme Palette Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-[11px]">
          <button
            onClick={() => setActiveTheme('emerald')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              activeTheme === 'emerald'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Classic Green
          </button>
          <button
            onClick={() => setActiveTheme('violet')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              activeTheme === 'violet'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            NEBULA Violet
          </button>
        </div>
      </div>

      {/* Responsive SVG Contribution Heatmap Container */}
      <div className="overflow-x-auto pb-2 no-scrollbar">
        <div className="min-w-[720px] w-full">
          <svg
            viewBox="0 0 780 128"
            className="w-full h-auto block"
            preserveAspectRatio="xMinYMin meet"
            aria-label="GitHub contribution heatmap graph"
          >
            {/* Month Labels positioned exactly above their start weeks */}
            {MONTH_MARKERS.map((m, idx) => (
              <text
                key={idx}
                x={32 + m.week * 14}
                y="12"
                fill="#818CF8"
                className="fill-slate-400"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
              >
                {m.label}
              </text>
            ))}

            {/* Weekday Labels */}
            <text x="6" y="38" fill="#64748B" fontSize="9" fontFamily="sans-serif">
              Mon
            </text>
            <text x="6" y="66" fill="#64748B" fontSize="9" fontFamily="sans-serif">
              Wed
            </text>
            <text x="6" y="94" fill="#64748B" fontSize="9" fontFamily="sans-serif">
              Fri
            </text>

            {/* Contribution Cells */}
            {weeks.map((week, wIdx) => {
              const xPos = 32 + wIdx * 14;
              return week.map((day, dIdx) => {
                const yPos = 20 + dIdx * 14;
                const cellColors = palette[day.level] || palette[0]!;
                return (
                  <rect
                    key={`${wIdx}-${dIdx}`}
                    x={xPos}
                    y={yPos}
                    width="11"
                    height="11"
                    rx="2.5"
                    fill={cellColors.fill}
                    stroke={cellColors.stroke}
                    strokeWidth="1"
                    className="cursor-pointer transition-all duration-100 hover:opacity-80"
                    onMouseEnter={(e) => {
                      setHoveredDay(day);
                      setMousePos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseLeave={() => setHoveredDay(null)}
                  />
                );
              });
            })}
          </svg>
        </div>
      </div>

      {/* Bottom Footer & Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 mt-4 pt-3 border-t border-slate-900">
        <a
          href="https://github.com/amy9273"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>View live on GitHub (@amy9273)</span>
          <span>↗</span>
        </a>

        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex gap-1 items-center">
            {palette.map((p, idx) => (
              <div
                key={idx}
                className="w-2.5 h-2.5 rounded-[2px]"
                style={{ backgroundColor: p.fill, border: `1px solid ${p.stroke}` }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredDay && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-1.5 rounded-lg bg-black/95 border border-slate-700 text-[11px] text-white shadow-xl -translate-x-1/2 -translate-y-12"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          <span className="font-bold text-emerald-400">
            {hoveredDay.count} {hoveredDay.count === 1 ? 'contribution' : 'contributions'}
          </span>{' '}
          on {hoveredDay.date}
        </div>
      )}
    </div>
  );
}
