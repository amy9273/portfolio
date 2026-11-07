'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  FolderGit2,
} from 'lucide-react';
import { FEATURED_PROJECTS, SECONDARY_PROJECTS, ProjectItem } from '@/data/projects';

type CategoryFilter = 'ALL' | 'Backend' | 'Queues' | 'Mobile & 3D' | 'Data & Web';

interface FilterOption {
  label: string;
  key: CategoryFilter;
  count: number;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');

  const allProjects = [...FEATURED_PROJECTS, ...SECONDARY_PROJECTS];

  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.category === activeFilter;
  });

  const filterOptions: FilterOption[] = [
    { label: 'All', key: 'ALL', count: allProjects.length },
    {
      label: 'Backend',
      key: 'Backend',
      count: allProjects.filter((p) => p.category === 'Backend').length,
    },
    {
      label: 'Queues',
      key: 'Queues',
      count: allProjects.filter((p) => p.category === 'Queues').length,
    },
    {
      label: 'Mobile & 3D',
      key: 'Mobile & 3D',
      count: allProjects.filter((p) => p.category === 'Mobile & 3D').length,
    },
    {
      label: 'Data & Web',
      key: 'Data & Web',
      count: allProjects.filter((p) => p.category === 'Data & Web').length,
    },
  ];

  return (
    <section
      id="work"
      className="bg-void text-cloud py-24 px-5 md:px-8 orbital-grid border-t border-royal-violet/20 relative z-20"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-violet/15 border border-royal-violet/30 text-electric-lavender font-mono text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 / PROJECTS</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                Things I&apos;ve built.
              </h2>
              <p className="text-cloud/75 text-sm sm:text-base font-sans mt-2 max-w-2xl leading-relaxed">
                A selection of academic and personal projects where I&apos;ve worked with backend development, databases, delayed queues, and full-stack applications.
              </p>
            </div>
          </div>

          {/* Clean Horizontal Filter Bar (No clumsy wrapping) */}
          <div className="pt-2">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-aubergine/60 border border-royal-violet/25 w-full sm:w-fit overflow-x-auto no-scrollbar">
              {filterOptions.map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-royal-violet text-white shadow-sm'
                        : 'text-muted-mauve hover:text-pale-lilac hover:bg-royal-violet/10'
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-void/60 text-muted-mauve'
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Projects (Tier 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects
            .filter((p) => p.tier === 1)
            .map((project) => (
              <div
                key={project.id}
                className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-aubergine/75 to-[#160E22]/90 border border-royal-violet/30 hover:border-electric-lavender/60 transition-all duration-300 group flex flex-col justify-between shadow-lg relative overflow-hidden"
              >
                <div>
                  {/* Card Header Meta */}
                  <div className="flex items-center justify-between text-xs font-mono text-muted-mauve mb-3">
                    <span className="text-electric-lavender font-semibold">
                      PROJECT / {project.id}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] bg-royal-violet/20 text-pale-lilac border border-royal-violet/30">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-electric-lavender transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cloud/80 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
                    {project.description}
                  </p>

                  {/* Implementation Details List */}
                  <div className="p-4 rounded-xl bg-void/60 border border-royal-violet/25 space-y-2 mb-5">
                    <div className="font-mono text-[11px] text-pale-lilac font-medium uppercase tracking-wider">
                      Technical Highlights:
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
                        className="px-2.5 py-1 rounded-md bg-aubergine/80 border border-royal-violet/35 text-pale-lilac/90"
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
                      className="text-electric-lavender hover:text-white flex items-center gap-1 transition-colors font-semibold py-1"
                    >
                      <span>Read Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-electric-lavender flex items-center gap-1 transition-colors py-1"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pale-lilac hover:text-white flex items-center gap-1 transition-colors py-1"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] text-muted-mauve font-mono">
                    {project.proofOfWork}
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Secondary Projects Section (Tier 2) */}
        {filteredProjects.some((p) => p.tier === 2) && (
          <div className="pt-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-pale-lilac tracking-widest uppercase">
                More Projects & Experiments
              </span>
              <div className="h-[1px] flex-1 bg-royal-violet/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredProjects
                .filter((p) => p.tier === 2)
                .map((project) => (
                  <div
                    key={project.id}
                    className="p-5 rounded-2xl bg-aubergine/50 border border-royal-violet/25 hover:border-royal-violet/60 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-muted-mauve mb-2">
                        <span className="text-electric-lavender font-semibold">
                          {project.statusBadge}
                        </span>
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
                      <div className="flex items-center gap-3">
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
                          <span>GitHub</span>
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
