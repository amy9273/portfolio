import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ExternalLink, ShieldCheck, CheckCircle2, Code2, Server, Terminal } from 'lucide-react';
import { FEATURED_PROJECTS, SECONDARY_PROJECTS, ProjectItem } from '@/data/projects';
import { Metadata } from 'next';

const ALL_PROJECTS = [...FEATURED_PROJECTS, ...SECONDARY_PROJECTS];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Angel Amaya Balion',
    };
  }

  return {
    title: `${project.title} — Case Study | Angel Amaya Balion`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-void text-cloud orbital-grid pt-28 pb-20 px-5 md:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Navigation Back Link */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-aubergine/70 border border-royal-violet/30 hover:border-electric-lavender text-pale-lilac hover:text-white font-mono text-xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 border-b border-royal-violet/30 pb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-royal-violet/20 border border-royal-violet/40 text-electric-lavender font-mono text-xs font-semibold">
              CASE STUDY // {project.id}
            </span>
            <span className="px-3 py-1 rounded-full bg-aubergine border border-royal-violet/30 text-pale-lilac font-mono text-xs">
              {project.statusBadge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-pale-lilac font-sans leading-relaxed">
            {project.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-royal-violet hover:bg-electric-lavender text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-royal-violet/30 flex items-center gap-2"
            >
              <span>INSPECT ON GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-aubergine border border-royal-violet/40 hover:border-electric-lavender text-pale-lilac hover:text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                <span>OPEN LIVE DEMO</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Main Case Study Overview */}
        <div className="space-y-8 font-sans">
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-electric-lavender" />
              <span>System Purpose & Technical Overview</span>
            </h2>
            <p className="text-cloud/85 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights Card */}
          <div className="p-7 rounded-3xl bg-aubergine/60 border border-royal-violet/35 space-y-4">
            <h3 className="font-mono text-xs font-bold text-electric-lavender uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Core Architectural Guarantees</span>
            </h3>
            <ul className="space-y-3 font-sans text-sm text-cloud/85">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Breakdown */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold text-pale-lilac uppercase tracking-wider">
              Technology Stack & Dependencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-xl bg-aubergine border border-royal-violet/40 text-pale-lilac font-mono text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Telemetry & Quality Bar */}
          <div className="p-6 rounded-2xl bg-void/80 border border-royal-violet/30 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-muted-mauve">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-semibold">{project.proofOfWork}</span>
            </div>
            <div className="text-pale-lilac/70">
              ANGEL AMAYA BALION · VERIFIED SYSTEM
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-10 border-t border-royal-violet/20 flex items-center justify-between font-mono text-xs text-muted-mauve">
          <Link href="/#work" className="hover:text-white transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
          <span>A/B · NEBULA</span>
        </div>
      </div>
    </div>
  );
}
