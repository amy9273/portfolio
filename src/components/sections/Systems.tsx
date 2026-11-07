'use client';

import React, { useState } from 'react';
import {
  Server,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  Box,
  Sparkles,
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
  takeaway: string;
}

const PILLARS: PillarTab[] = [
  {
    id: '3d-animation',
    title: '3D Modeling & Animation',
    category: 'Blender, Three.js & Flutter',
    icon: Box,
    headline: 'Custom 3D sign language gestures and mobile WebGL integration',
    architectureDetails: [
      'Modeled, rigged, and animated custom Filipino Sign Language gestures in Blender.',
      'Wrote a custom Blender Python addon to batch sample, optimize keyframes, and export actions to GLB.',
      'Embedded a WebGL Three.js viewer in Flutter using InAppWebView for smooth 60fps avatar playback.',
      'Established a two-way JavaScript bridge between Flutter state and WebGL animation triggers.',
    ],
    codeSnippet: `# Custom Blender Python Batch glTF Export Addon
class EXPORT_OT_batch_animations(bpy.types.Operator):
    bl_idname = "anim.batch_export_gltf"
    bl_label = "Batch Export Actions to glTF"

    def execute(self, context):
        armature = get_selected_armature(context)
        for action in context.scene.selected_animations:
            armature.animation_data.action = action
            out_file = os.path.join(self.export_path, f"{action.name}.glb")
            bpy.ops.export_scene.gltf(
                filepath=out_file,
                export_format='GLB',
                export_animations=True,
                export_optimize_animation_size=True
            )
        return {'FINISHED'}`,
    takeaway: 'Learned: How 3D skeletal rigging, keyframe optimization, and WebGL bridges work on mobile.',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Schemas',
    category: 'Gemini Flash, Zod & Node.js',
    icon: Sparkles,
    headline: 'Structured LLM outputs with JSON schemas and runtime validation',
    architectureDetails: [
      'Integrated Google Gemini Flash (@google/genai) to review pet symptom descriptions and appointment requests.',
      'Engineered few-shot prompt isolation using <submission> delimiters to prevent prompt injection.',
      'Configured responseJsonSchema directly in the Gemini call so replies strictly follow JSON.',
      'Validated incoming model responses at runtime using Zod (safeParse) to guarantee type safety.',
    ],
    codeSnippet: `// Gemini Structured Output with Runtime Zod Validation
export async function reviewProject(description: string): Promise<Review> {
  const response = await getClient().models.generateContent({
    model: 'gemini-flash-latest',
    contents: buildContents(description),
    config: {
      systemInstruction: SYSTEM_PROMPT,
      responseMimeType: 'application/json',
      responseJsonSchema: reviewJsonSchema,
    },
  });

  const raw = JSON.parse(response.text!);
  const result = reviewSchema.safeParse(raw);
  if (!result.success) throw new AiReplyError('Invalid schema');
  return result.data;
}`,
    takeaway: 'Learned: How strict JSON schemas and runtime validation prevent unpredictable LLM outputs.',
  },
  {
    id: 'tenancy',
    title: 'Multi-Tenant Database',
    category: 'PostgreSQL & Spring Boot',
    icon: Database,
    headline: 'Separating organization data using PostgreSQL schemas',
    architectureDetails: [
      'Configured Hibernate MultiTenantConnectionProvider to dynamically set the search_path based on tenant identity.',
      'Applied row-level pessimistic locking (PESSIMISTIC_WRITE) on invoice records to prevent race conditions during renewals.',
      'Structured Flyway migration scripts to handle both public shared tables and isolated tenant schemas.',
      'Verified schema separation using JUnit and Testcontainers against real PostgreSQL instances.',
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
    takeaway: 'Learned: How database schema isolation protects customer data privacy.',
  },
  {
    id: 'concurrency',
    title: 'Concurrency & Rate Limiting',
    category: 'Java 21 & Project Loom',
    icon: Cpu,
    headline: 'Exploring lightweight concurrent request handling with Virtual Threads',
    architectureDetails: [
      'Used Java 21 Virtual Threads to handle multiple concurrent tasks without heavy OS thread overhead.',
      'Implemented a token bucket algorithm using AtomicLong to track request allowances without mutex locks.',
      'Added a sliding window log approach as a fallback to handle sudden traffic spikes.',
      'Returned standard HTTP 429 response headers including RateLimit-Limit and Retry-After.',
    ],
    codeSnippet: `// Lock-Free Atomic CAS Token Bucket Refill
public boolean tryConsume(int tokens) {
  while (true) {
    long current = availableTokens.get();
    long updated = Math.min(capacity, current + calculateRefill());
    if (updated < tokens) return false;
    if (availableTokens.compareAndSet(current, updated - tokens)) {
      return true; // Token acquired safely
    }
  }
}`,
    takeaway: 'Learned: How atomic operations and virtual threads make concurrency manageable.',
  },
  {
    id: 'queues',
    title: 'Queues & State Machines',
    category: 'Redis BullMQ & WebSockets',
    icon: Server,
    headline: 'Managing incident alerts and delayed escalation timers',
    architectureDetails: [
      'Used Redis BullMQ delayed jobs to implement timed alert escalation if an incident goes unacknowledged.',
      'Configured dead-letter queue handling so failed alerts can be inspected and retried without data loss.',
      'Broadcast real-time incident state changes to web and mobile clients using WebSockets.',
      'Kept incident state transitions predictable (Triggered → Acknowledged → Resolved).',
    ],
    codeSnippet: `// Escalation State Machine Delayed Job
await escalationQueue.add('escalate-incident', { incidentId, tier: 2 }, {
  delay: 300000, // 5 minute response window before auto-escalation
  jobId: \`escalate-\${incidentId}-tier-2\`,
  removeOnComplete: true,
  attempts: 3
});`,
    takeaway: 'Learned: How async delayed queues prevent dropped notifications in distributed apps.',
  },
];

export function Systems() {
  const [activeTab, setActiveTab] = useState<string>(PILLARS[0]?.id ?? '3d-animation');

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
              <span>04 / BEHIND THE CODE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-graphite tracking-tight">
              Concepts I&apos;ve Explored.
            </h2>
            <p className="text-graphite/75 text-sm sm:text-base font-sans mt-2 max-w-2xl leading-relaxed">
              A closer look at implementation details and patterns I&apos;ve explored through my projects—including 3D animation pipelines, structured AI integration, database schema isolation, and concurrency handling.
            </p>
          </div>
          <div className="font-mono text-xs text-muted-mauve flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>ACADEMIC & PERSONAL PROJECTS</span>
          </div>
        </div>

        {/* Pillar Tabs Navigation */}
        <div className="flex flex-wrap gap-2.5">
          {PILLARS.map((pillar) => {
            const TabIcon = pillar.icon;
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-royal-violet text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-graphite border border-graphite/10 hover:border-royal-violet/30'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="bg-white border border-graphite/10 rounded-3xl p-7 sm:p-9 shadow-sm space-y-8">
          {/* Header of Active Pillar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-graphite/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-royal-violet/10 text-royal-violet flex items-center justify-center shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-royal-violet font-semibold uppercase tracking-wider block">
                  {currentPillar.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-graphite mt-0.5">
                  {currentPillar.headline}
                </h3>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-lg bg-mist/60 border border-mist font-mono text-xs text-graphite font-medium shrink-0">
              {currentPillar.takeaway}
            </div>
          </div>

          {/* Architecture Highlights & Code View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Highlights */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="font-mono text-xs font-bold text-royal-violet uppercase tracking-wider">
                What I Implemented
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
                  <span className="text-pale-lilac ml-2">{currentPillar.title} snippet</span>
                </div>
                <span className="text-[10px] text-electric-lavender">Code Example</span>
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
              <span className="font-mono text-xs text-royal-violet font-semibold uppercase tracking-wider block">
                Daily Coding Activity
              </span>
              <h3 className="text-2xl font-display font-extrabold text-graphite">
                GitHub Activity (@amy9273)
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-muted-mauve">
              <span>{GITHUB_ACTIVITY.totalContributionsLastYear} Contributions in the Past Year</span>
              <span>•</span>
              <span>{GITHUB_ACTIVITY.publicReposCount} Public Repositories</span>
            </div>
          </div>

          {/* GitHub Heatmap Component */}
          <GitHubHeatmap theme="violet" />

          {/* Language Breakdown Bar */}
          <div className="bg-white border border-graphite/10 rounded-2xl p-5 shadow-sm space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-muted-mauve text-[11px]">
              <span className="font-semibold text-graphite">LANGUAGES ACROSS PROJECTS</span>
              <span>GitHub Repositories Scan</span>
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
