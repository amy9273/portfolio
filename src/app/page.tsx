'use client';

import React, { useState } from 'react';
import { Preloader } from '@/components/ui/Preloader';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Systems } from '@/components/sections/Systems';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const [forcePreloader, setForcePreloader] = useState<boolean>(false);

  const handleReplayPreloader = () => {
    try {
      sessionStorage.removeItem('ab_portfolio_booted');
    } catch {
      // ignore
    }
    setForcePreloader(true);
  };

  return (
    <div className="w-full">
      {/* ============================================================ */}
      {/* 00. STARTUP BOOT PRELOADER (<1.8s Kernel Handshake)           */}
      {/* ============================================================ */}
      <Preloader
        forceShow={forcePreloader}
        onComplete={() => setForcePreloader(false)}
      />

      {/* ============================================================ */}
      {/* 01. HERO SECTION (Dark Void #171021)                         */}
      {/* ============================================================ */}
      <Hero onReplayPreloader={handleReplayPreloader} />

      {/* ============================================================ */}
      {/* 02. ABOUT SECTION (Light Cloud #F6F3FA)                      */}
      {/* ============================================================ */}
      <About />

      {/* ============================================================ */}
      {/* 03. SELECTED WORK (Dark Void #171021)                        */}
      {/* ============================================================ */}
      <Projects />

      {/* ============================================================ */}
      {/* 04. BEHIND THE SYSTEMS & ACTIVITY (Light Mist #E9E3F0)       */}
      {/* ============================================================ */}
      <Systems />

      {/* ============================================================ */}
      {/* 05. EXPERIENCE & CERTIFICATIONS (Dark Aubergine #29183B)     */}
      {/* ============================================================ */}
      <Experience />

      {/* ============================================================ */}
      {/* 06. CONTACT TERMINAL (Dark Void #171021)                     */}
      {/* ============================================================ */}
      <Contact />
    </div>
  );
}
