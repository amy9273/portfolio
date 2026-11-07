'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  ArrowUpRight,
  Sparkles,
  Heart,
  MapPin,
  Calendar,
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
              <span>02 / ABOUT ME</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-graphite tracking-tight">
              A bit about me.
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-mauve flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>DE LA SALLE LIPA • CLASS OF 2027</span>
          </div>
        </div>

        {/* Narrative & Profile Portrait Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait Card & Academic Summary */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real User Photo */}
            <div className="relative group rounded-3xl overflow-hidden bg-white border border-mist shadow-md p-3">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-mist/50">
                <Image
                  src="/images/profile.png"
                  alt="Angel Amaya Balion"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>

              <div className="pt-4 px-2 pb-2 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-graphite">
                      Angel Amaya Balion
                    </h3>
                    <p className="text-xs font-mono text-muted-mauve">
                      BS Information Technology Student
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-royal-violet/10 text-royal-violet font-semibold">
                    4th Year
                  </span>
                </div>

                <div className="pt-2 border-t border-mist/80 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-muted-mauve">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-royal-violet" />
                    Batangas, Philippines
                  </span>
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-royal-violet" />
                    DLSL (2027)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Numbers Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white border border-mist rounded-2xl p-4 text-center shadow-sm">
                <div className="font-display font-extrabold text-2xl text-royal-violet">1,010</div>
                <div className="font-mono text-[10px] text-muted-mauve uppercase mt-0.5">
                  GitHub Commits
                </div>
              </div>
              <div className="bg-white border border-mist rounded-2xl p-4 text-center shadow-sm">
                <div className="font-display font-extrabold text-2xl text-royal-violet">16</div>
                <div className="font-mono text-[10px] text-muted-mauve uppercase mt-0.5">
                  Repositories
                </div>
              </div>
              <div className="bg-white border border-mist rounded-2xl p-4 text-center shadow-sm">
                <div className="font-display font-extrabold text-2xl text-royal-violet">9</div>
                <div className="font-mono text-[10px] text-muted-mauve uppercase mt-0.5">
                  Certificates
                </div>
              </div>
            </div>

            {/* Action Buttons under GitHub stats */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-royal-violet hover:bg-[#5C328E] text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm active:scale-95 text-center"
              >
                <span>DOWNLOAD RÉSUMÉ (PDF)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="#contact"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-mist border border-mist text-graphite font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-sm active:scale-95 text-center"
              >
                <span>SEND ME A MESSAGE</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Grounded, Honest Personal Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-graphite/90 font-sans">
            <p className="font-medium text-lg md:text-xl text-graphite">
              Hi, I&apos;m Amaya. I&apos;m a fourth-year Information Technology student at De La Salle Lipa who enjoys building applications and solving problems through code.
            </p>

            <p>
              I first explored programming during the pandemic, starting with Python tutorials on YouTube and later taking online coursework on Coursera. I found programming rewarding because I genuinely enjoyed the process of figuring things out, debugging issues, and seeing an idea turn into something that actually works.
            </p>

            <p>
              Most of my programming experience comes from academic and personal projects. I like building features, fixing problems, and seeing everything come together. Over the course of my studies, I&apos;ve worked on backend systems, REST APIs, full-stack web applications, and mobile apps—adapting to different technologies depending on what the project requires.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-mist space-y-2.5 shadow-sm">
              <div className="font-mono text-xs text-royal-violet font-bold uppercase tracking-wider flex items-center gap-2">
                <Heart className="w-4 h-4 text-electric-lavender fill-electric-lavender/30" />
                <span>Outside of Coding</span>
              </div>
              <p className="text-sm text-graphite/85 leading-relaxed font-sans">
                Outside of studying and programming, I enjoy reading manga and manhwa, watching shows, and working on personal side projects. My habit of reading manga was what led me to build <strong className="text-royal-violet font-semibold">Malaya</strong>—a reading web app that connects to external comic APIs. I also worked on <strong className="text-royal-violet font-semibold">Kamunica</strong>, our capstone mobile project featuring a 3D avatar for learning Filipino Sign Language.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-mist space-y-3 shadow-sm">
              <div className="font-mono text-xs text-royal-violet font-bold uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-royal-violet" />
                <span>Education: De La Salle Lipa</span>
              </div>
              <div className="text-xs font-mono space-y-1.5 text-graphite/85">
                <div>
                  <span className="text-muted-mauve">Degree: </span>
                  <span className="font-semibold text-graphite">BS in Information Technology (Expected Graduation: June 2027)</span>
                </div>
                <div>
                  <span className="text-muted-mauve">Level: </span>
                  <span className="font-semibold text-graphite">Fourth-Year Student</span>
                </div>
                <div>
                  <span className="text-muted-mauve">Relevant Coursework: </span>
                  <span>Data Structures & Algorithms, Database Systems, Object-Oriented Programming, Networking, Web & Mobile Development</span>
                </div>
                <div>
                  <span className="text-muted-mauve">Status: </span>
                  <span className="text-emerald-700 font-semibold">Open to software development opportunities and internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
