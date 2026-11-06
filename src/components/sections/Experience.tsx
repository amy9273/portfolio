'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { CERTIFICATES_DATA, CertificateItem } from '@/data/certificates';

type CertCategory = 'ALL' | 'DATABASES' | 'NETWORKING' | 'PYTHON' | 'CS';

interface TimelineEvent {
  year: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2023 — 2027 (Expected)',
    role: 'Bachelor of Science in Information Technology (BSIT)',
    institution: 'De La Salle Lipa (DLSL)',
    location: 'Lipa City, Batangas, Philippines',
    description:
      'Pursuing an IT degree with specialized focus on software architecture, database management, and distributed systems. Leading backend development for capstone and collaborative systems projects.',
    highlights: [
      'Advanced Database Management Systems (PostgreSQL, ACID transactions)',
      'Systems Analysis & Software Engineering Architecture',
      'Data Structures, Algorithms, and Object-Oriented Concurrency',
      'Capstone Project Lead: Kamunica (Filipino Sign Language 3D Platform)',
    ],
  },
  {
    year: '2021 — 2023',
    role: 'Information & Communications Technology Immersion',
    institution: 'University of Cabuyao (PNC)',
    location: 'Cabuyao, Laguna, Philippines',
    description:
      'Foundational programming training covering algorithms, object-oriented concepts, web fundamentals, and systems logic.',
    highlights: [
      'Graduated with academic honors in STEM/ICT track',
      'Hands-on technical immersion in systems logic and algorithm design',
    ],
  },
];

export function Experience() {
  const [activeFilter, setActiveFilter] = useState<CertCategory>('ALL');

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'DATABASES') return cert.issuerCategory === 'Databases & SQL';
    if (activeFilter === 'NETWORKING') return cert.issuerCategory === 'Networking';
    if (activeFilter === 'PYTHON') return cert.issuerCategory === 'Python & Data';
    if (activeFilter === 'CS') return cert.issuerCategory === 'Computer Science';
    return true;
  });

  return (
    <section
      id="experience"
      className="bg-aubergine text-cloud py-24 px-5 md:px-8 orbital-grid border-t border-royal-violet/30 relative z-20"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* ========================================================== */}
        {/* PART 1: CHRONOLOGICAL EDUCATION & IMMERSION TIMELINE       */}
        {/* ========================================================== */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-royal-violet/30 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-violet/20 border border-royal-violet/40 text-electric-lavender font-mono text-xs font-semibold mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>05 / ACADEMIC FOUNDATION & TIMELINE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                Education & Technical Milestones.
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-mauve">
              DE LA SALLE LIPA • CLASS OF 2027
            </span>
          </div>

          <div className="relative border-l-2 border-royal-violet/40 ml-4 md:ml-6 space-y-10 py-2">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#1F162D] border-2 border-electric-lavender group-hover:scale-125 transition-transform" />

                <div className="bg-void/70 border border-royal-violet/30 rounded-2xl p-6 sm:p-7 hover:border-electric-lavender transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-electric-lavender font-bold">
                      {event.year}
                    </span>
                    <span className="font-mono text-[11px] text-muted-mauve">
                      {event.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                    {event.role}
                  </h3>
                  <div className="text-sm font-sans font-medium text-pale-lilac mb-4 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-electric-lavender" />
                    <span>{event.institution}</span>
                  </div>

                  <p className="text-cloud/80 text-sm leading-relaxed mb-5 font-sans">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-sans text-cloud/75 pt-3 border-t border-royal-violet/20">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-lavender shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================== */}
        {/* PART 2: 9 INDIVIDUAL VERIFIED CREDENTIALS                   */}
        {/* ========================================================== */}
        <div id="certifications" className="space-y-10 pt-8 border-t border-royal-violet/30 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-royal-violet/30 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-violet/20 border border-royal-violet/40 text-electric-lavender font-mono text-xs font-semibold mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>VERIFIED CREDENTIALS</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white tracking-tight">
                9 Individual Verified Certifications.
              </h3>
              <p className="text-cloud/70 text-xs sm:text-sm font-sans mt-1">
                Issued by Cisco Networking Academy, DataCamp, and Coursera / University of Michigan.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {(
                [
                  { label: 'ALL (9)', key: 'ALL' },
                  { label: 'DATABASES & SQL (3)', key: 'DATABASES' },
                  { label: 'NETWORKING (1)', key: 'NETWORKING' },
                  { label: 'PYTHON & DATA (4)', key: 'PYTHON' },
                  { label: 'CS (1)', key: 'CS' },
                ] as const
              ).map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    activeFilter === f.key
                      ? 'bg-royal-violet border-electric-lavender text-white shadow-[0_0_12px_rgba(167,123,235,0.4)]'
                      : 'bg-void/70 border-royal-violet/30 text-muted-mauve hover:text-pale-lilac hover:border-royal-violet/60'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-void/80 border border-royal-violet/30 hover:border-electric-lavender/80 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-mauve mb-2">
                    <span className="text-electric-lavender font-semibold truncate max-w-[180px]">
                      {cert.issuer}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-aubergine text-pale-lilac border border-royal-violet/40">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-electric-lavender transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-cloud/70 text-xs leading-relaxed mb-4 font-sans line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-aubergine/80 text-pale-lilac border border-royal-violet/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-royal-violet/20 flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] text-muted-mauve flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{cert.verificationBadge}</span>
                  </span>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-electric-lavender hover:text-white flex items-center gap-1 font-semibold group-hover:underline"
                  >
                    <span>View PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
