'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monogram } from './Monogram';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';

interface PreloaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

const BOOT_LOGS = [
  { progress: 0, text: 'KERNEL_INIT: Booting virtual thread execution harness...' },
  { progress: 24, text: 'SPRING_CORE: Multi-tenant PostgreSQL schemas mounted [OK]' },
  { progress: 52, text: 'REDIS_BULLMQ: Escalation delay queues initialized [OK]' },
  { progress: 78, text: 'TELEMETRY: Verified 1,010+ GitHub annual commits synced [OK]' },
  { progress: 95, text: 'ORBITAL_CORE: NEBULA procedural WebGL pipeline ready [OK]' },
  { progress: 100, text: 'SYSTEMS_ONLINE: Launching Angel Amaya Balion Portfolio...' },
];

export function Preloader({ onComplete, forceShow = false }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentLog, setCurrentLog] = useState<string>(BOOT_LOGS[0]?.text ?? 'KERNEL_INIT: Booting...');
  const [isClient, setIsClient] = useState<boolean>(false);

  const completePreloader = useCallback(() => {
    setIsVisible(false);
    try {
      sessionStorage.setItem('ab_portfolio_booted', 'true');
    } catch {
      // ignore storage errors
    }
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    setIsClient(true);
    // If not forcing show, check if already booted in this session
    if (!forceShow) {
      try {
        const alreadyBooted = sessionStorage.getItem('ab_portfolio_booted');
        if (alreadyBooted === 'true') {
          setIsVisible(false);
          onComplete?.();
          return;
        }
      } catch {
        // ignore
      }
    }

    // Keyboard ESC listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        completePreloader();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Fast-boot interval (0 to 100 in ~1.6s)
    const startTime = Date.now();
    const duration = 1650; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      // Find matching log
      for (let i = BOOT_LOGS.length - 1; i >= 0; i--) {
        const item = BOOT_LOGS[i];
        if (item && rawProgress >= item.progress) {
          setCurrentLog(item.text);
          break;
        }
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          completePreloader();
        }, 150);
      }
    }, 28);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [completePreloader, forceShow, onComplete]);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="startup-preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.85, 0, 0.15, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#120B1C] flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
          style={{ willChange: 'transform' }}
        >
          {/* Subtle Ambient Background Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-violet/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#7041A6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          {/* Top Bar: Telemetry Header & Skip Button */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-muted-mauve">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-pale-lilac font-semibold">KERNEL_INIT</span>
              <span className="text-royal-violet">//</span>
              <span className="hidden sm:inline">ANGEL_AMAYA_BALION_SYS_v2.6</span>
            </div>

            <button
              onClick={completePreloader}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-royal-violet/40 bg-royal-violet/10 hover:bg-royal-violet/25 hover:border-electric-lavender text-pale-lilac hover:text-white transition-all text-xs font-mono group active:scale-95"
            >
              <span>SKIP</span>
              <span className="px-1.5 py-0.5 rounded bg-aubergine text-[10px] text-electric-lavender border border-royal-violet/50 group-hover:border-electric-lavender">
                ESC
              </span>
            </button>
          </div>

          {/* Center Stage: Monogram, Counter & System Logs */}
          <div className="relative z-10 max-w-xl mx-auto w-full flex flex-col items-center text-center my-auto space-y-6">
            {/* Glowing Logo */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-electric-lavender/30 blur-2xl animate-pulse" />
              <Monogram size={68} className="relative z-10" />
            </div>

            {/* Numeric Big Counter */}
            <div className="space-y-1">
              <div className="text-6xl sm:text-7xl font-display font-extrabold tracking-tight text-white flex items-baseline justify-center">
                <span className="font-mono tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-white via-pale-lilac to-electric-lavender">
                  {progress < 10 ? `0${progress}` : progress}
                </span>
                <span className="text-2xl sm:text-3xl font-mono text-royal-violet ml-1">%</span>
              </div>
              <div className="text-xs font-mono text-muted-mauve tracking-widest uppercase">
                System Initializing
              </div>
            </div>

            {/* High-tech Progress Track */}
            <div className="w-full bg-aubergine/80 border border-royal-violet/40 rounded-full h-2 overflow-hidden p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-royal-violet via-electric-lavender to-pale-lilac transition-all duration-75 shadow-[0_0_12px_rgba(167,123,235,0.7)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Terminal Boot Log Output */}
            <div className="w-full bg-[#171021]/90 border border-royal-violet/30 rounded-xl px-4 py-2.5 font-mono text-[11px] sm:text-xs text-left flex items-center gap-2.5 shadow-inner">
              <Terminal className="w-3.5 h-3.5 text-electric-lavender shrink-0 animate-pulse" />
              <span className="text-muted-mauve truncate">{currentLog}</span>
            </div>
          </div>

          {/* Bottom Bar: Architecture Pillars */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-muted-mauve border-t border-royal-violet/20 pt-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-pale-lilac" />
                JAVA 21 · SPRING BOOT 3
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-electric-lavender" />
                REDIS · VIRTUAL THREADS
              </span>
            </div>
            <div className="text-pale-lilac/70">
              DE LA SALLE LIPA · BSIT 2027
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
