'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Download,
  Terminal,
  Activity,
  ChevronDown,
  RotateCcw,
  MapPin,
  Calendar,
} from 'lucide-react';

interface HeroProps {
  onReplayPreloader?: () => void;
}

const TECH_PILLS = [
  'Java 21',
  'Spring Boot 3',
  'PostgreSQL',
  'TypeScript',
  'Node.js',
  'Next.js 15',
  'Redis BullMQ',
  'Python',
  'Flutter',
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
        {/* Left Column: Natural Bio & Introduction */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Capsule (Full Name Retained) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-royal-violet/40 bg-royal-violet/10 text-electric-lavender font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-pale-lilac">ANGEL AMAYA BALION</span>
            <span className="text-muted-mauve">•</span>
            <span>BSIT @ DE LA SALLE LIPA</span>
          </div>

          {/* Master Display Headline (Amaya used here) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
            Hi, I&apos;m Amaya.{' '}
            <span className="bg-gradient-to-r from-pale-lilac via-electric-lavender to-royal-violet bg-clip-text text-transparent block mt-1">
              I build web applications and backend systems.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-cloud/85 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
            I&apos;m a 4th-year Information Technology student at De La Salle Lipa. Most of my work involves backend development with Java and Spring Boot, web apps with TypeScript, and learning how databases and queues handle data behind the scenes.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#work"
              className="px-6 py-3.5 rounded-xl bg-royal-violet hover:bg-electric-lavender text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-md shadow-royal-violet/30 active:scale-95 flex items-center gap-2 group"
            >
              <span>SEE MY PROJECTS</span>
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
              <span>GET IN TOUCH</span>
            </Link>
          </div>

          {/* Telemetry Ribbon */}
          <div className="pt-6 border-t border-royal-violet/20 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted-mauve">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>1,010 GITHUB COMMITS (PAST YEAR)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-pale-lilac" />
              <span>BATANGAS, PHILIPPINES</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-electric-lavender" />
              <span>OPEN FOR 2025/2026 INTERNSHIPS</span>
            </div>
          </div>
        </div>

        {/* Right Column: Amaya's Orbital Portrait Card (100% Reliable, No Empty Black Box) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[420px] rounded-3xl bg-gradient-to-b from-aubergine/85 to-[#120B1C]/95 border border-royal-violet/40 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl shadow-royal-violet/25">
            {/* Top Card Header */}
            <div className="flex items-center justify-between font-mono text-xs text-muted-mauve pb-4 border-b border-royal-violet/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-pale-lilac font-semibold">Amaya Balion</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-royal-violet/20 text-electric-lavender border border-royal-violet/40 text-[10px] font-semibold">
                DLSL BSIT &apos;27
              </span>
            </div>

            {/* Center Stage: Orbital Rings with Amaya's Photo */}
            <div className="my-auto py-6 flex flex-col items-center justify-center text-center relative select-none">
              {/* Outer Spinning Orbital Ring */}
              <div className="relative w-52 h-52 sm:w-56 sm:h-56 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-electric-lavender/30 border-dashed animate-[spin_25s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full border border-royal-violet/50 border-dotted animate-[spin_18s_linear_infinite_reverse]" />
                
                {/* Real Photo Avatar */}
                <div className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-electric-lavender/60 shadow-[0_0_35px_rgba(167,123,235,0.4)] bg-[#181024]">
                  <Image
                    src="/images/profile.png"
                    alt="Angel Amaya Balion"
                    fill
                    sizes="160px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Orbiting Telemetry Dot */}
                <div className="absolute inset-0 animate-[spin_9s_linear_infinite] pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-pale-lilac shadow-[0_0_10px_#D8C5FF] absolute top-2 left-1/2 -translate-x-1/2" />
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <span className="font-display font-bold text-base text-white block">
                  Software & Backend Developer
                </span>
                <span className="font-mono text-xs text-muted-mauve block">
                  De La Salle Lipa • Batangas, Philippines
                </span>
              </div>
            </div>

            {/* Bottom Meta & Replay Trigger */}
            <div className="flex items-center justify-between font-mono text-[11px] text-muted-mauve pt-4 border-t border-royal-violet/20">
              <span className="text-pale-lilac/80">Student Developer</span>
              {onReplayPreloader && (
                <button
                  onClick={onReplayPreloader}
                  className="hover:text-pale-lilac flex items-center gap-1.5 transition-colors cursor-pointer text-[10px]"
                  title="Replay boot preloader"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>REPLAY PRELOADER</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Stack Pill Badges */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-5 max-w-[420px]">
            {TECH_PILLS.map((pill) => (
              <span
                key={pill}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-aubergine/60 border border-royal-violet/30 text-pale-lilac/90"
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
          <span>SCROLL DOWN TO EXPLORE PROJECTS & CODE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>DE LA SALLE LIPA</span>
          <span>BSIT 2027</span>
        </div>
      </div>
    </section>
  );
}
