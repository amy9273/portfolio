'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { CERTIFICATES_DATA, CertificateItem } from '@/data/certificates';

type CertCategory = 'ALL' | 'Databases & SQL' | 'Networking' | 'Python & Data' | 'Computer Science';

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
    year: 'Expected Graduation: June 2027',
    role: 'Bachelor of Science in Information Technology (BSIT)',
    institution: 'De La Salle Lipa (DLSL)',
    location: 'Lipa City, Batangas, Philippines',
    description:
      'Fourth-year BS Information Technology student. Coursework focuses on software engineering, database systems, and application development across web and mobile.',
    highlights: [
      'Data Structures & Algorithms and Database Systems',
      'Object-Oriented Programming and Software Development',
      'Web & Mobile Application Development',
      'Capstone Project: Kamunica (Filipino Sign Language learning application)',
    ],
  },
  {
    year: '2021 — 2023',
    role: 'Science, Technology, Engineering, and Mathematics (STEM)',
    institution: 'University of Cabuyao (PNC)',
    location: 'Cabuyao, Laguna, Philippines',
    description:
      'Completed senior high school in the Science, Technology, Engineering, and Mathematics (STEM) strand with a strong foundation in mathematics, science, and computing fundamentals.',
    highlights: [
      'Graduated with academic honors in the STEM strand',
      'Hands-on exposure to programming fundamentals and algorithmic problem solving',
    ],
  },
];

export function Experience() {
  const [activeFilter, setActiveFilter] = useState<CertCategory>('ALL');

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    if (activeFilter === 'ALL') return true;
    return cert.issuerCategory === activeFilter;
  });

  const filterOptions: { label: string; key: CertCategory; count: number }[] = [
    { label: 'All', key: 'ALL', count: CERTIFICATES_DATA.length },
    {
      label: 'Databases & SQL',
      key: 'Databases & SQL',
      count: CERTIFICATES_DATA.filter((c) => c.issuerCategory === 'Databases & SQL').length,
    },
    {
      label: 'Python & Data',
      key: 'Python & Data',
      count: CERTIFICATES_DATA.filter((c) => c.issuerCategory === 'Python & Data').length,
    },
    {
      label: 'Networking',
      key: 'Networking',
      count: CERTIFICATES_DATA.filter((c) => c.issuerCategory === 'Networking').length,
    },
    {
      label: 'Computer Science',
      key: 'Computer Science',
      count: CERTIFICATES_DATA.filter((c) => c.issuerCategory === 'Computer Science').length,
    },
  ];

  return (
    <>
      {/* ========================================================== */}
      {/* PART 1: CHRONOLOGICAL EDUCATION TIMELINE                   */}
      {/* ========================================================== */}
      <section
        id="experience"
        className="bg-aubergine text-cloud pt-24 pb-12 px-5 md:px-8 orbital-grid border-t border-royal-violet/30 relative z-20"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-royal-violet/30 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-violet/20 border border-royal-violet/40 text-electric-lavender font-mono text-xs font-semibold mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>05 / EDUCATION</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                Education & Background.
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-mauve">
              DE LA SALLE LIPA • CLASS OF 2027
            </span>
          </div>

          <div className="relative border-l-2 border-royal-violet/40 ml-4 md:ml-6 space-y-10 py-2">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#1F162D] border-2 border-electric-lavender group-hover:scale-125 transition-transform" />

                <div className="bg-void/70 border border-royal-violet/30 rounded-2xl p-6 sm:p-7 hover:border-electric-lavender/60 transition-all">
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
      </section>

      {/* ========================================================== */}
      {/* PART 2: 9 COURSE CERTIFICATES                               */}
      {/* ========================================================== */}
      <section
        id="certifications"
        className="bg-aubergine text-cloud pt-12 pb-24 px-5 md:px-8 orbital-grid border-t border-royal-violet/20 relative z-20 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-violet/20 border border-royal-violet/40 text-electric-lavender font-mono text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>CERTIFICATES</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white tracking-tight">
                  Course Certificates.
                </h3>
                <p className="text-cloud/70 text-xs sm:text-sm font-sans mt-1">
                  Certificates completed through Cisco Networking Academy, DataCamp, and Coursera.
                </p>
              </div>
            </div>

            {/* Clean Horizontal Filter Bar (No clumsy wrapping) */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-void/60 border border-royal-violet/25 w-full sm:w-fit overflow-x-auto no-scrollbar">
                {filterOptions.map((f) => {
                  const isActive = activeFilter === f.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setActiveFilter(f.key)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? 'bg-royal-violet text-white shadow-sm'
                          : 'text-muted-mauve hover:text-pale-lilac hover:bg-royal-violet/10'
                      }`}
                    >
                      <span>{f.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-aubergine text-muted-mauve'
                        }`}
                      >
                        {f.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-void/80 border border-royal-violet/30 hover:border-electric-lavender/60 transition-all flex flex-col justify-between group shadow-lg"
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
                    <span>{cert.issuerCategory}</span>
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
      </section>
    </>
  );
}
