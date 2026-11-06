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

export function GitHubHeatmap({ theme = 'emerald' }: GitHubHeatmapProps) {
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

  // Color mappings
  const colorMap = {
    emerald: [
      'bg-[#161B22] border-[#21262D]', // Level 0 (Empty)
      'bg-[#0E4429] border-[#0E4429]', // Level 1
      'bg-[#006D32] border-[#006D32]', // Level 2
      'bg-[#26A641] border-[#26A641]', // Level 3
      'bg-[#39D353] border-[#39D353] shadow-[0_0_8px_rgba(57,211,83,0.4)]'  // Level 4
    ],
    violet: [
      'bg-[#191326] border-[#261B3B]', // Level 0
      'bg-[#402068] border-[#402068]', // Level 1
      'bg-[#7041A6] border-[#7041A6]', // Level 2
      'bg-[#A77BEB] border-[#A77BEB]', // Level 3
      'bg-[#D8C5FF] border-[#D8C5FF] shadow-[0_0_8px_rgba(216,197,255,0.4)]'  // Level 4
    ]
  };

  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

  return (
    <div className="w-full bg-[#0D1117] border border-slate-800 rounded-2xl p-6 font-mono text-xs text-slate-300">
      
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
          <div>
            <h3 className="text-white text-sm font-bold flex items-center gap-2">
              <span>amy9273 / Activity Radar</span>
              <span className="px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Verified GitHub Graph
              </span>
            </h3>
            <p className="text-slate-400 text-xs">
              <span className="text-emerald-400 font-bold">{totalCount.toLocaleString()} contributions</span> in the last year
            </p>
          </div>
        </div>

        {/* Theme Palette Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-[11px]">
          <button
            onClick={() => setActiveTheme('emerald')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTheme === 'emerald'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Classic Green
          </button>
          <button
            onClick={() => setActiveTheme('violet')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTheme === 'violet'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            NEBULA Violet
          </button>
        </div>
      </div>

      {/* Contribution Calendar Scroll Container */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[760px]">
          
          {/* Months Header */}
          <div className="flex text-[11px] text-slate-500 mb-2 pl-8 justify-between pr-4">
            {months.map((m, idx) => (
              <span key={idx} className="w-12 text-left">{m}</span>
            ))}
          </div>

          {/* Grid with Day Labels */}
          <div className="flex gap-1.5 items-start">
            
            {/* Weekday Labels */}
            <div className="flex flex-col justify-between h-[96px] text-[10px] text-slate-500 pr-2 pt-1 font-sans">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Columns of Weeks */}
            <div className="flex gap-[3px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={(e) => {
                        setHoveredDay(day);
                        setMousePos({ x: e.clientX, y: e.clientY });
                      }}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-[11px] h-[11px] rounded-[2.5px] border transition-all duration-150 cursor-pointer hover:scale-125 hover:z-20 ${
                        colorMap[activeTheme][day.level] || colorMap[activeTheme][0]
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Footer & Legend */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 mt-4 pt-3 border-t border-slate-900">
            <a
              href="https://github.com/amy9273"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <span>View live on GitHub (@amy9273)</span>
              <span>↗</span>
            </a>

            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="flex gap-1">
                {colorMap[activeTheme].map((cls, idx) => (
                  <div key={idx} className={`w-[10px] h-[10px] rounded-[2px] border ${cls}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>

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
