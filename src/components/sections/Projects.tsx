'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  CheckCircle2,
  Github,
} from 'lucide-react';
import { FEATURED_PROJECTS, SECONDARY_PROJECTS } from '@/data/projects';

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeProject = FEATURED_PROJECTS[currentIndex] || FEATURED_PROJECTS[0]!;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? FEATURED_PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === FEATURED_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="work"
      className="bg-void text-cloud py-24 px-5 md:px-8 orbital-grid border-t border-royal-violet/20 relative z-20"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-royal-violet/20 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-violet/15 border border-royal-violet/30 text-electric-lavender font-mono text-xs font-semibold mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 / SELECTED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Featured Projects.
            </h2>
          </div>
          <p className="text-muted-mauve font-mono text-xs">
            Viewing 1 project at a time • Click next or choose a tab
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-royal-violet text-white shadow-md shadow-royal-violet/30 scale-[1.02]'
                    : 'bg-aubergine/60 text-muted-mauve hover:text-pale-lilac hover:bg-aubergine border border-royal-violet/25'
                }`}
              >
                <span>0{idx + 1}. </span>
                <span>{project.title.split('—')[0]?.trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Showcase Card (One at a time, concise & clean) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-aubergine/80 to-[#140D20]/95 border border-royal-violet/40 p-7 sm:p-10 shadow-2xl space-y-7 transition-all duration-300">
          {/* Card Top Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-mauve pb-4 border-b border-royal-violet/25">
            <div className="flex items-center gap-3">
              <span className="text-electric-lavender font-bold">
                PROJECT {activeProject.id} / 04
              </span>
              <span>•</span>
              <span className="text-pale-lilac">{activeProject.category}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-royal-violet/20 text-pale-lilac border border-royal-violet/40 text-[11px]">
                {activeProject.statusBadge}
              </span>
            </div>
          </div>

          {/* Title & Concise Summary */}
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              {activeProject.title}
            </h3>
            <p className="text-cloud/85 text-base sm:text-lg leading-relaxed font-sans max-w-3xl">
              {activeProject.description}
            </p>
          </div>

          {/* Quick Implementation Bullets (Only 3 concise points) */}
          <div className="p-5 rounded-2xl bg-void/60 border border-royal-violet/25 space-y-2.5">
            <div className="font-mono text-xs text-pale-lilac font-semibold uppercase tracking-wider">
              Key Implementation Notes:
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-cloud/80 font-sans">
              {activeProject.architectureHighlights.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-electric-lavender shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Chips */}
          <div className="space-y-2">
            <div className="font-mono text-[11px] text-muted-mauve uppercase">
              Technologies Used:
            </div>
            <div className="flex flex-wrap gap-2">
              {activeProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-aubergine/90 border border-royal-violet/40 text-pale-lilac"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card Footer: Action Links & Next/Prev Controls */}
          <div className="pt-6 border-t border-royal-violet/25 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-royal-violet hover:bg-electric-lavender text-white font-semibold transition-all shadow-md flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href={`/projects/${activeProject.slug}`}
                className="px-4 py-2.5 rounded-xl bg-aubergine hover:bg-aubergine/80 border border-royal-violet/40 text-pale-lilac hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Read Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-transparent hover:bg-royal-violet/20 border border-royal-violet/30 text-muted-mauve hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                className="px-3.5 py-2 rounded-xl bg-aubergine hover:bg-royal-violet/30 border border-royal-violet/40 text-pale-lilac hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors active:scale-95"
                title="Previous Project"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              <span className="font-mono text-xs text-muted-mauve px-1">
                {currentIndex + 1} / {FEATURED_PROJECTS.length}
              </span>

              <button
                onClick={handleNext}
                className="px-3.5 py-2 rounded-xl bg-aubergine hover:bg-royal-violet/30 border border-royal-violet/40 text-pale-lilac hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors active:scale-95"
                title="Next Project"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Projects: Simple & Minimalist (No Text Clutter) */}
        <div className="pt-6 space-y-4">
          <div className="flex items-center justify-between border-b border-royal-violet/20 pb-3">
            <span className="font-mono text-xs font-bold text-pale-lilac uppercase tracking-wider">
              Other Coursework & Side Projects
            </span>
            <span className="text-muted-mauve font-mono text-[11px]">
              {SECONDARY_PROJECTS.length} smaller projects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECONDARY_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-2xl bg-aubergine/45 border border-royal-violet/25 hover:border-royal-violet/60 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-electric-lavender block">
                    {project.statusBadge}
                  </span>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-electric-lavender transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-cloud/70 text-xs font-sans line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-royal-violet/15 flex items-center justify-between text-xs font-mono">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-pale-lilac hover:text-white flex items-center gap-1 text-[11px]"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-mauve hover:text-white flex items-center gap-1 text-[11px]"
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
      </div>
    </section>
  );
}
