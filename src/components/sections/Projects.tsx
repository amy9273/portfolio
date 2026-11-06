'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FolderGit2,
} from 'lucide-react';
import { FEATURED_PROJECTS, SECONDARY_PROJECTS, ProjectItem } from '@/data/projects';

type CategoryFilter = 'ALL' | 'BACKEND' | 'DISTRIBUTED' | 'MOBILE' | 'DATA';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');

  const allProjects = [...FEATURED_PROJECTS, ...SECONDARY_PROJECTS];

  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'BACKEND') return project.category === 'Backend';
    if (activeFilter === 'DISTRIBUTED') return project.category === 'Distributed Systems';
    if (activeFilter === 'MOBILE') return project.category === 'Mobile & 3D';
    if (activeFilter === 'DATA') return project.category === 'Data & Full-Stack';
    return true;
  });

  return (
    <section
      id="work"
      className="bg-void text-cloud py-24 px-5 md:px-8 orbital-grid border-t border-royal-violet/20 relative z-20"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-royal-violet/20 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-violet/15 border border-royal-violet/30 text-electric-lavender font-mono text-xs font-semibold mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 / SELECTED WORK</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Engineering Projects with Real Architecture.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {(
              [
                { label: 'ALL (8)', key: 'ALL' },
                { label: 'BACKEND', key: 'BACKEND' },
                { label: 'QUEUES', key: 'DISTRIBUTED' },
                { label: 'MOBILE & 3D', key: 'MOBILE' },
                { label: 'DATA & WEB', key: 'DATA' },
              ] as const
            ).map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  activeFilter === filter.key
                    ? 'bg-royal-violet border-electric-lavender text-white shadow-[0_0_12px_rgba(167,123,235,0.4)]'
                    : 'bg-aubergine/60 border-royal-violet/30 text-muted-mauve hover:text-pale-lilac hover:border-royal-violet/60'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects (Tier 1 Showcase) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects
            .filter((p) => p.tier === 1)
            .map((project) => (
              <div
                key={project.id}
                className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-aubergine/80 to-[#181124]/90 border border-royal-violet/35 hover:border-electric-lavender/80 transition-all duration-300 group flex flex-col justify-between shadow-xl shadow-royal-violet/10 relative overflow-hidden"
              >
                {/* Ambient Top Glow on Hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-royal-violet/15 rounded-full blur-3xl pointer-events-none group-hover:bg-electric-lavender/20 transition-all" />

                <div>
                  {/* Card Header Meta */}
                  <div className="flex items-center justify-between text-xs font-mono text-muted-mauve mb-3">
                    <span className="text-electric-lavender font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-lavender" />
                      FEATURED / {project.id}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-royal-violet/20 text-pale-lilac border border-royal-violet/40">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 group-hover:text-electric-lavender transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cloud/85 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  {/* Architecture Pillars List */}
                  <div className="p-4 rounded-xl bg-void/70 border border-royal-violet/25 space-y-2 mb-6">
                    <div className="font-mono text-[11px] text-pale-lilac font-semibold uppercase tracking-wider">
                      Architectural Highlights:
                    </div>
                    <ul className="space-y-1.5 text-xs text-cloud/75 font-sans">
                      {project.architectureHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-electric-lavender shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-pale-lilac mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-aubergine/90 border border-royal-violet/40 text-pale-lilac/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-royal-violet/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-electric-lavender hover:text-white flex items-center gap-1.5 transition-colors font-semibold py-1"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-electric-lavender flex items-center gap-1.5 transition-colors font-semibold py-1"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pale-lilac hover:text-white flex items-center gap-1.5 transition-colors py-1"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] text-muted-mauve flex items-center gap-1 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.proofOfWork}</span>
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Secondary Projects Section (Tier 2 Bento Grid) */}
        {filteredProjects.some((p) => p.tier === 2) && (
          <div className="pt-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-pale-lilac tracking-widest uppercase">
                Additional Projects & Systems Exploration
              </span>
              <div className="h-[1px] flex-1 bg-royal-violet/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredProjects
                .filter((p) => p.tier === 2)
                .map((project) => (
                  <div
                    key={project.id}
                    className="p-5 rounded-2xl bg-aubergine/50 border border-royal-violet/25 hover:border-royal-violet/70 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-muted-mauve mb-2">
                        <span className="text-electric-lavender font-semibold">
                          SYS / {project.id}
                        </span>
                        <span>{project.statusBadge}</span>
                      </div>

                      <h4 className="text-lg font-display font-bold text-white mb-1.5 group-hover:text-electric-lavender transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-cloud/75 text-xs leading-relaxed mb-4 font-sans line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 text-[10px] font-mono text-pale-lilac/80 mb-4">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-void/60 border border-royal-violet/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-royal-violet/20 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2.5">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-pale-lilac hover:text-white flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-electric-lavender hover:underline flex items-center gap-1"
                        >
                          <span>Code</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-mauve hover:text-white flex items-center gap-1"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
