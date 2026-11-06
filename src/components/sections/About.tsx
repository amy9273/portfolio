'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Code2,
  Database,
  ArrowUpRight,
  Sparkles,
  Heart,
  CheckCircle2,
} from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="bg-cloud text-graphite py-24 px-5 md:px-8 light-grid border-t border-mist relative z-20"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-mist pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-violet/10 border border-royal-violet/20 text-royal-violet font-mono text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 / EDITORIAL BIOGRAPHY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-graphite tracking-tight">
              Curious by nature. Developer by practice.
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-mauve flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>DE LA SALLE LIPA • CLASS OF 2027</span>
          </div>
        </div>

        {/* Narrative & Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-graphite/90 font-sans">
            <p className="font-medium text-lg md:text-xl text-graphite">
              I&apos;m <strong className="text-royal-violet">Angel Amaya Balion</strong>, an Information Technology student at De La Salle Lipa with an appetite for understanding how software components orchestrate behind modern interfaces.
            </p>

            <p>
              My engineering approach is driven by the backend layer: database schema isolation, concurrency control, transaction boundaries, and distributed event queues. I believe robust software begins with predictable data guarantees and observable telemetry—whether that involves designing multi-tenant PostgreSQL schemas with Flyway or synchronizing async worker queues with Redis.
            </p>

            <p>
              I take pride in building full-stack products where heavy infrastructure is paired with refined, responsive user interfaces. I love writing clean, typed code in <strong className="text-graphite font-semibold">Java (Spring Boot 3)</strong>, <strong className="text-graphite font-semibold">TypeScript (Next.js & Node)</strong>, and <strong className="text-graphite font-semibold">Python</strong>.
            </p>

            <div className="p-5 rounded-2xl bg-mist/60 border border-mist/80 space-y-3">
              <div className="font-mono text-xs text-royal-violet font-bold uppercase tracking-wider flex items-center gap-2">
                <Heart className="w-4 h-4 text-electric-lavender fill-electric-lavender/30" />
                <span>Interests & Creative Ventures</span>
              </div>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Outside of backend engineering, I am an avid reader of manga and manhwa—an interest that directly inspired me to architect <strong className="text-royal-violet font-semibold">Malaya</strong>, a Next.js 15 PWA webtoon engine. I also experiment with 3D avatars, sign language accessibility algorithms (<strong className="text-royal-violet font-semibold">Kamunica</strong>), and interactive WebGL experiences.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-royal-violet hover:bg-[#5C328E] text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-md shadow-royal-violet/20"
              >
                <span>DOWNLOAD RÉSUMÉ (PDF)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-mist border border-mist text-graphite font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm"
              >
                <span>OPEN CONTACT TERMINAL</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Bento Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Academic Card */}
            <div className="bg-white border border-mist rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-mist">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-royal-violet/10 flex items-center justify-center text-royal-violet">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-graphite">
                      De La Salle Lipa
                    </h3>
                    <p className="text-[11px] font-mono text-muted-mauve">
                      Lipa City, Batangas, Philippines
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Senior
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div>
                  <span className="text-muted-mauve block text-[10px] uppercase">Degree Program</span>
                  <span className="text-graphite font-bold">BS in Information Technology</span>
                </div>
                <div>
                  <span className="text-muted-mauve block text-[10px] uppercase">Expected Completion</span>
                  <span className="text-graphite">2027</span>
                </div>
                <div>
                  <span className="text-muted-mauve block text-[10px] uppercase">Core Competencies</span>
                  <span className="text-graphite">Software Architecture, Database Systems, Network Principles</span>
                </div>
              </div>
            </div>

            {/* Core Engineering Principles */}
            <div className="bg-white border border-mist rounded-2xl p-6 shadow-sm space-y-3.5">
              <div className="font-mono text-xs font-bold text-royal-violet uppercase tracking-wider flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </div>

              <ul className="space-y-2.5 text-xs text-graphite/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Data Integrity First:</strong> Strict ACID boundaries, schema validations, and zero-drift database migrations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Concurrency Resilient:</strong> Virtual Threads, lock-free CAS token buckets, and isolated Redis worker state machines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Verifiable Proof:</strong> 1,010+ annual commits and 100% automated test coverage over unsubstantiated claims.</span>
                </li>
              </ul>
            </div>

            {/* Verified Quick Stats Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white border border-mist rounded-xl p-3.5 text-center shadow-sm">
                <div className="font-display font-extrabold text-2xl text-royal-violet">1,010+</div>
                <div className="font-mono text-[10px] text-muted-mauve uppercase mt-0.5">Commits/Yr</div>
              </div>
              <div className="bg-white border border-mist rounded-xl p-3.5 text-center shadow-sm">
                <div className="font-display font-extrabold text-2xl text-royal-violet">16</div>
                <div className="font-mono text-[10px] text-muted-mauve uppercase mt-0.5">Git Repos</div>
              </div>
              <div className="bg-white border border-mist rounded-xl p-3.5 text-center shadow-sm">
                <div className="font-display font-extrabold text-2xl text-royal-violet">9</div>
                <div className="font-mono text-[10px] text-muted-mauve uppercase mt-0.5">Certificates</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
