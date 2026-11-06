'use client';

import React, { useState } from 'react';
import {
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  GitBranch,
  Activity,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { GitHubHeatmap } from '@/components/visuals/GitHubHeatmap';
import { GITHUB_ACTIVITY } from '@/data/github';

interface PillarTab {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  headline: string;
  architectureDetails: string[];
  codeSnippet: string;
  metrics: string;
}

const PILLARS: PillarTab[] = [
  {
    id: 'tenancy',
    title: 'Tenant Isolation',
    category: 'PostgreSQL & Spring Boot',
    icon: Database,
    headline: 'Strict Schema-per-Tenant Isolation with Zero-Drift Migrations',
    architectureDetails: [
      'Hibernate MultiTenantConnectionProvider intercepts requests via tenant header and sets search_path dynamically.',
      'Row-level PESSIMISTIC_WRITE locking on invoices during subscription renewals to eliminate double charges.',
      'Automated Flyway migrations migrate shared core schemas and dynamically execute DDL updates across tenant schemas.',
      'Testcontainers automated test harness verifies isolated tenant boundaries against actual PostgreSQL containers.',
    ],
    codeSnippet: `// Dynamic Tenant Schema Connection Routing
@Component
public class TenantConnectionProvider implements MultiTenantConnectionProvider {
  @Override
  public Connection getConnection(String tenantIdentifier) throws SQLException {
    final Connection connection = dataSource.getConnection();
    connection.createStatement().execute("SET search_path TO " + tenantIdentifier + ", public");
    return connection;
  }
}`,
    metrics: 'Zero cross-tenant leakage · ACID guarantees',
  },
  {
    id: 'concurrency',
    title: 'Concurrency & Concurrency Control',
    category: 'Java 21 Loom & Atomic CAS',
    icon: Cpu,
    headline: 'Lock-Free Token Bucket Concurrency with Project Loom Virtual Threads',
    architectureDetails: [
      'Project Loom Virtual Threads dispatch thousands of concurrent requests with lightweight stack allocations (~few KB).',
      'AtomicLong and CAS (Compare-And-Swap) loop enforces token bucket rate limiting with zero kernel lock contention.',
      'Sliding Window Log algorithm acts as a deterministic fallback during spike traffic bursts.',
      'Full RFC 6585 compliance with standard RateLimit-Limit, RateLimit-Remaining, and Retry-After HTTP response headers.',
    ],
    codeSnippet: `// Lock-Free Atomic CAS Token Bucket Refill
public boolean tryConsume(int tokens) {
  while (true) {
    long current = availableTokens.get();
    long updated = Math.min(capacity, current + calculateRefill());
    if (updated < tokens) return false;
    if (availableTokens.compareAndSet(current, updated - tokens)) {
      return true; // Token acquired with zero mutex lock
    }
  }
}`,
    metrics: '< 3ms p99 overhead · 25,000+ RPS tested',
  },
  {
    id: 'queues',
    title: 'Queues & State Machines',
    category: 'Redis BullMQ & WebSockets',
    icon: Server,
    headline: 'Asynchronous Alert Escalation Engine with BullMQ Delay Queues',
    architectureDetails: [
      'Redis BullMQ delay queues implement multi-tier on-call escalation timeouts (Tier 1 -> Tier 2 -> Lead).',
      'Dead Letter Queue (DLQ) automatic retry and poison message isolation guarantees zero dropped emergency alerts.',
      'Bi-directional WebSocket protocol broadcasts live acknowledged incident states to web and Flutter mobile responders.',
      'Automated state transition validation ensures idempotent incident progression (TRIGGERED -> ACKNOWLEDGED -> RESOLVED).',
    ],
    codeSnippet: `// Escalation State Machine Delayed Job
await escalationQueue.add('escalate-incident', { incidentId, tier: 2 }, {
  delay: 300000, // 5 minute response window before auto-escalation
  jobId: \`escalate-\${incidentId}-tier-2\`,
  removeOnComplete: true,
  attempts: 3
});`,
    metrics: '0 alert drops · 100% resilient failover',
  },
];

export function Systems() {
  const [activeTab, setActiveTab] = useState<string>(PILLARS[0]?.id ?? 'tenancy');

  const currentPillar = PILLARS.find((p) => p.id === activeTab) ?? PILLARS[0]!;
  const IconComponent = currentPillar.icon;

  return (
    <section
      id="systems"
      className="bg-mist text-graphite py-24 px-5 md:px-8 border-t border-cloud relative z-20"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-graphite/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-violet/10 border border-royal-violet/20 text-royal-violet font-mono text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>04 / BEHIND THE SYSTEMS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-graphite tracking-tight">
              Architectural Decisions Over Buzzwords.
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-mauve flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>PRODUCTION ACID & CONCURRENCY GUARANTEES</span>
          </div>
        </div>

        {/* Pillar Tabs Navigation */}
        <div className="flex flex-wrap gap-3">
          {PILLARS.map((pillar) => {
            const TabIcon = pillar.icon;
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl font-mono text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-royal-violet text-white shadow-md shadow-royal-violet/20 scale-[1.02]'
                    : 'bg-white/80 hover:bg-white text-graphite border border-graphite/10 hover:border-royal-violet/30'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Display Card */}
        <div className="bg-white border border-graphite/10 rounded-3xl p-7 sm:p-9 shadow-sm space-y-8">
          {/* Header of Active Pillar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-graphite/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-royal-violet/10 text-royal-violet flex items-center justify-center shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-royal-violet font-bold uppercase tracking-wider block">
                  {currentPillar.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-graphite mt-0.5">
                  {currentPillar.headline}
                </h3>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-lg bg-mist/60 border border-mist font-mono text-xs text-graphite font-semibold shrink-0">
              {currentPillar.metrics}
            </div>
          </div>

          {/* Architecture Highlights & Code View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Highlights */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-mono text-xs font-bold text-royal-violet uppercase tracking-wider">
                Engineering Blueprint & Guarantees
              </h4>
              <ul className="space-y-3 font-sans text-sm text-graphite/85">
                {currentPillar.architectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Monospace Code Snapshot */}
            <div className="lg:col-span-6 rounded-2xl bg-[#171021] text-cloud border border-royal-violet/30 p-5 font-mono text-xs overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-royal-violet/30 text-muted-mauve text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-pale-lilac ml-2">{currentPillar.title}.ts/.java</span>
                </div>
                <span className="text-[10px] text-electric-lavender">PRODUCTION SNIPPET</span>
              </div>
              <pre className="text-pale-lilac/95 leading-relaxed overflow-x-auto text-[11px]">
                <code>{currentPillar.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Live GitHub Telemetry & Heatmap */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-graphite/10 pb-4">
            <div>
              <span className="font-mono text-xs text-royal-violet font-bold uppercase tracking-wider block">
                Proof of Work Telemetry
              </span>
              <h3 className="text-2xl font-display font-extrabold text-graphite">
                Daily Engineering Cadence & Activity
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-muted-mauve">
              <span>{GITHUB_ACTIVITY.totalContributionsLastYear} Contributions (Last Year)</span>
              <span>•</span>
              <span>{GITHUB_ACTIVITY.publicReposCount} Public Repos</span>
            </div>
          </div>

          {/* GitHub Heatmap Component */}
          <GitHubHeatmap theme="violet" />

          {/* Language Telemetry Bar */}
          <div className="bg-white border border-graphite/10 rounded-2xl p-5 shadow-sm space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-muted-mauve text-[11px]">
              <span className="font-bold text-graphite">VERIFIED LANGUAGE DISTRIBUTION</span>
              <span>100% CODEBASE SCAN</span>
            </div>

            {/* Visual Multi-Color Bar */}
            <div className="w-full h-3 rounded-full overflow-hidden flex bg-mist">
              {GITHUB_ACTIVITY.topLanguages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Language Breakdown Pills */}
            <div className="flex flex-wrap gap-4 pt-1">
              {GITHUB_ACTIVITY.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5 text-xs text-graphite">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-muted-mauve text-[11px]">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
