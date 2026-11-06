'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Download,
  Terminal,
  Activity,
  Cpu,
  Layers,
  ChevronDown,
  RotateCcw,
} from 'lucide-react';
import { OrbitalCore } from '@/components/visuals/OrbitalCore';

interface HeroProps {
  onReplayPreloader?: () => void;
}

const TECH_PILLS = [
  'Java 21',
  'Spring Boot 3',
  'PostgreSQL',
  'Redis BullMQ',
  'TypeScript',
  'Next.js 15',
  'Virtual Threads',
  'Flutter',
  'Three.js',
];

export function Hero({ onReplayPreloader }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] bg-void orbital-grid flex flex-col justify-between pt-28 pb-12 px-5 md:px-8 overflow-hidden"
    >
      {/* Ambient Radial Violet Glow Accents */}
      <div className="absolute top-1/4 -right-24 w-[550px] h-[550px] bg-royal-violet/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-[450px] h-[450px] bg-electric-lavender/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto">
        {/* Left Column: Bio & Core Narrative */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-royal-violet/40 bg-royal-violet/10 text-electric-lavender font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">ANGEL AMAYA BALION</span>
            <span className="text-muted-mauve">•</span>
            <span className="text-pale-lilac">BSIT @ DE LA SALLE LIPA</span>
          </div>

          {/* Master Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.06]">
            Build with curiosity.{' '}
            <span className="bg-gradient-to-r from-pale-lilac via-electric-lavender to-royal-violet bg-clip-text text-transparent block mt-1">
              Engineer with purpose.
            </span>
          </h1>

          {/* Subtitle / Engineering Value Statement */}
          <p className="text-cloud/85 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
            Software developer specialized in backend architecture, distributed queues, and resilient web & mobile systems. 
            Focused on database multi-tenancy, asynchronous pipelines, and high-throughput APIs.
          </p>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#work"
              className="px-6 py-3.5 rounded-xl bg-royal-violet hover:bg-electric-lavender text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-royal-violet/30 hover:shadow-electric-lavender/30 active:scale-95 flex items-center gap-2 group"
            >
              <span>EXPLORE WORK</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-aubergine/80 hover:bg-aubergine border border-royal-violet/40 hover:border-electric-lavender text-pale-lilac hover:text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              <span>VIEW RÉSUMÉ</span>
              <Download className="w-4 h-4" />
            </a>

            <Link
              href="#contact"
              className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-royal-violet/10 border border-royal-violet/30 hover:border-royal-violet/60 text-muted-mauve hover:text-pale-lilac font-mono text-xs font-semibold tracking-wider transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-electric-lavender" />
              <span>TERMINAL</span>
            </Link>
          </div>

          {/* Verified Engineering Telemetry Ribbon */}
          <div className="pt-6 border-t border-royal-violet/20 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted-mauve">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>1,010+ COMMITS (LAST YEAR)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-pale-lilac" />
              <span>LATENCY: &lt; 24ms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-electric-lavender" />
              <span>SYSTEMS: DISTRIBUTED / ACID</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Orbital Canvas Target & Telemetry Deck */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-gradient-to-b from-aubergine/80 to-[#120B1C]/90 border border-royal-violet/40 p-7 flex flex-col justify-between overflow-hidden shadow-2xl shadow-royal-violet/20 group">
            
            {/* Top Telemetry Header */}
            <div className="flex items-center justify-between font-mono text-[11px] text-muted-mauve">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-lavender animate-pulse" />
                <span className="text-electric-lavender font-bold">NEBULA_ORBIT // 001</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-royal-violet/20 text-pale-lilac border border-royal-violet/30 text-[10px]">
                WebGL CORE
              </span>
            </div>

            {/* Orbital Stage Anchor */}
            <div className="my-auto flex flex-col items-center justify-center text-center relative w-full h-[320px] sm:h-[360px]">
              <OrbitalCore />
            </div>

            {/* Bottom Meta & Replay Trigger */}
            <div className="flex items-center justify-between font-mono text-[11px] text-muted-mauve pt-4 border-t border-royal-violet/20">
              <span>ASIA-SOUTHEAST (MNL)</span>
              {onReplayPreloader && (
                <button
                  onClick={onReplayPreloader}
                  className="hover:text-pale-lilac flex items-center gap-1.5 transition-colors cursor-pointer text-[10px]"
                  title="Replay boot preloader"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>REPLAY BOOT</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Stack Pill Badges */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-5 max-w-[440px]">
            {TECH_PILLS.map((pill) => (
              <span
                key={pill}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-aubergine/60 border border-royal-violet/30 text-pale-lilac/90 hover:border-electric-lavender/60 transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 flex items-center justify-between font-mono text-[11px] text-muted-mauve border-t border-royal-violet/15">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-lavender" />
          <span>SCROLL DOWN TO EXPLORE ARCHITECTURE & CODE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>PORTFOLIO v2.6.2</span>
          <span>EST. 2026</span>
        </div>
      </div>
    </section>
  );
}
