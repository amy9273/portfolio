import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Download, Terminal, Database, Server, Cpu, ShieldCheck } from 'lucide-react';
import { GitHubHeatmap } from '@/components/visuals/GitHubHeatmap';
import { CERTIFICATES_DATA } from '@/data/certificates';
import { CONTACT_INFO } from '@/data/contact';
import { GITHUB_ACTIVITY } from '@/data/github';

export default function Home() {
  return (
    <div className="w-full">
      
      {/* ============================================================ */}
      {/* 01. HERO SECTION (Dark Violet #171021)                       */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="relative min-h-[100svh] bg-void orbital-grid flex items-center pt-24 pb-16 px-5 md:px-8 overflow-hidden"
      >
        {/* Ambient Radial Violet Glow */}
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-royal-violet/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-electric-lavender/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-royal-violet/40 bg-royal-violet/10 text-electric-lavender font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-electric-lavender animate-pulse" />
              <span>HELLO, I&apos;M ANGEL AMAYA BALION</span>
              <span className="text-muted-mauve">•</span>
              <span className="text-pale-lilac">EST. 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
              Build with curiosity.{' '}
              <span className="bg-gradient-to-r from-pale-lilac via-electric-lavender to-royal-violet bg-clip-text text-transparent">
                Engineer with purpose.
              </span>
            </h1>

            <p className="text-cloud/80 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
              An aspiring software developer focused on backend engineering, distributed workflows, and the systems that power modern applications. Currently studying Information Technology at De La Salle Lipa.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#work"
                className="px-6 py-3.5 rounded-xl bg-royal-violet hover:bg-electric-lavender text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-royal-violet/30 hover:shadow-electric-lavender/30 active:scale-95 flex items-center gap-2"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-aubergine/80 hover:bg-aubergine border border-royal-violet/40 hover:border-electric-lavender text-pale-lilac hover:text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 active:scale-95 flex items-center gap-2"
              >
                <span>VIEW RÉSUMÉ</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Metadata */}
            <div className="pt-6 border-t border-royal-violet/20 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted-mauve">
              <span>01 / DIGITAL WORKSPACE</span>
              <span>SYS.STATUS: OPERATIONAL</span>
              <span>LATENCY: &lt; 25ms</span>
            </div>
          </div>

          {/* Right Hero Placeholder / 3D Canvas Box (Target for Unit 03 Three.js Orb) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-b from-aubergine/80 to-[#120B1C]/90 border border-royal-violet/40 p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-royal-violet/20">
              <div className="flex items-center justify-between font-mono text-[11px] text-muted-mauve">
                <span className="text-electric-lavender font-bold">ORBITAL_CORE // 001</span>
                <span>THREE.JS ENGINE</span>
              </div>

              {/* Orbital Graphic Anchor */}
              <div className="my-auto flex flex-col items-center justify-center text-center relative py-12">
                <div className="w-32 h-32 rounded-full border-2 border-electric-lavender/40 border-dashed animate-[spin_20s_linear_infinite] flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-royal-violet via-electric-lavender to-pale-lilac p-[2px] shadow-[0_0_40px_rgba(167,123,235,0.6)]">
                    <div className="w-full h-full rounded-full bg-[#1A1226] flex items-center justify-center text-electric-lavender font-display font-bold text-xl">
                      A/B
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs text-pale-lilac mt-6 font-medium">
                  Procedural 3D Orb Scene
                </span>
                <span className="font-mono text-[11px] text-muted-mauve mt-1">
                  Three.js Integration in Unit 03
                </span>
              </div>

              <div className="flex items-center justify-between font-mono text-[11px] text-muted-mauve pt-4 border-t border-royal-violet/20">
                <span>JAVA · TYPESCRIPT · PYTHON</span>
                <span className="text-electric-lavender">60 FPS TARGET</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 02. ABOUT SECTION (Light Cloud #F6F3FA)                      */}
      {/* ============================================================ */}
      <section id="about" className="bg-cloud text-graphite py-24 px-5 md:px-8 light-grid border-t border-mist">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-mist pb-6">
            <div>
              <span className="font-mono text-xs text-royal-violet font-bold tracking-widest uppercase">
                02 / A LITTLE ABOUT ME
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-graphite tracking-tight mt-1">
                Curious by nature. Developer by practice.
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-mauve">
              DE LA SALLE LIPA • CLASS OF 2027
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Biography */}
            <div className="lg:col-span-7 space-y-5 text-base md:text-lg leading-relaxed text-graphite/90 font-sans">
              <p>
                I&apos;m Angel Amaya Balion, a fourth-year Information Technology student at De La Salle Lipa. I enjoy building applications, debugging problems, and figuring out how different components of a software system talk to each other behind the interface.
              </p>
              <p>
                My focus centers on backend engineering: multi-tenant architecture, concurrency handling, database schema migrations, and event queues. When I construct an application, I focus on the structural integrity of the data layer, predictable transaction boundaries, and resilient API contracts.
              </p>
              <p className="text-muted-mauve text-sm md:text-base">
                Outside of software development, I immerse myself in reading manga and manhwa, watching dramas, and exploring creative technology. I love discovering how complex things are engineered and finding ways to build something distinctive of my own.
              </p>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-5 bg-mist/60 border border-mist rounded-2xl p-6 space-y-4 font-mono text-xs">
              <div className="text-royal-violet font-bold uppercase tracking-wider pb-2 border-b border-mist">
                EDUCATION & INTERESTS
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-muted-mauve block text-[11px]">DEGREE PROGRAM</span>
                  <span className="font-bold text-graphite text-sm">BS Information Technology</span>
                  <span className="text-muted-mauve block text-[11px]">De La Salle Lipa (DLSL)</span>
                </div>
                <div>
                  <span className="text-muted-mauve block text-[11px]">SPECIALIZATION</span>
                  <span className="font-bold text-graphite">Software Engineering & Backend Systems</span>
                </div>
                <div>
                  <span className="text-muted-mauve block text-[11px]">PRIMARY INTERESTS</span>
                  <span className="text-graphite">APIs · Relational Schemas · Microservices · 3D</span>
                </div>
                <div>
                  <span className="text-muted-mauve block text-[11px]">LOCATION</span>
                  <span className="text-graphite">Lipa / Cabuyao, Philippines</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 03. SELECTED WORK (Dark Void #171021)                        */}
      {/* ============================================================ */}
      <section id="work" className="bg-void text-cloud py-24 px-5 md:px-8 orbital-grid border-t border-royal-violet/20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-royal-violet/20 pb-6">
            <div>
              <span className="font-mono text-xs text-electric-lavender font-bold tracking-widest uppercase">
                03 / SELECTED WORK
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mt-1">
                Engineering Projects with Real Architecture.
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-mauve">
              VERIFIED GITHUB REPOSITORIES
            </span>
          </div>

          {/* Project Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="p-7 rounded-2xl bg-aubergine/70 border border-royal-violet/30 hover:border-electric-lavender transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-muted-mauve mb-3">
                  <span className="text-electric-lavender font-bold">FEATURED / 001</span>
                  <span>Java 21 · Spring Boot</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-electric-lavender transition-colors">
                  B2B SaaS Billing Engine
                </h3>
                <p className="text-cloud/80 text-xs leading-relaxed mb-6 font-sans">
                  A multi-tenant billing and invoicing backend designed around secure organization access, zero-drift prorated subscription calculations, and row-level pessimistic locking.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-pale-lilac mb-6">
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Spring Boot 3</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">PostgreSQL</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Flyway</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Testcontainers</span>
                </div>
              </div>
              <div className="pt-4 border-t border-royal-violet/20 flex items-center justify-between text-xs font-mono">
                <a
                  href="https://github.com/amy9273/b2b-saas-billing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-electric-lavender hover:underline flex items-center gap-1"
                >
                  <span>Inspect on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-muted-mauve">40 Automated Tests</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-7 rounded-2xl bg-aubergine/70 border border-royal-violet/30 hover:border-electric-lavender transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-muted-mauve mb-3">
                  <span className="text-electric-lavender font-bold">FEATURED / 002</span>
                  <span>TypeScript · Redis · Next.js</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-electric-lavender transition-colors">
                  IncidentPulse
                </h3>
                <p className="text-cloud/80 text-xs leading-relaxed mb-6 font-sans">
                  Full-stack incident response and on-call alerting platform running automated escalation state machines using Redis BullMQ delay queues and live WebSocket triage.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-pale-lilac mb-6">
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Node.js / Express</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Redis BullMQ</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">WebSockets</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Flutter App</span>
                </div>
              </div>
              <div className="pt-4 border-t border-royal-violet/20 flex items-center justify-between text-xs font-mono">
                <a
                  href="https://github.com/amy9273/incident-pulse"
                  target="_blank"
                  rel="noreferrer"
                  className="text-electric-lavender hover:underline flex items-center gap-1"
                >
                  <span>Inspect on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-muted-mauve">Real-Time Triage</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-7 rounded-2xl bg-aubergine/70 border border-royal-violet/30 hover:border-electric-lavender transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-muted-mauve mb-3">
                  <span className="text-electric-lavender font-bold">FEATURED / 003</span>
                  <span>Java 21 · Virtual Threads</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-electric-lavender transition-colors">
                  API Rate Limiter
                </h3>
                <p className="text-cloud/80 text-xs leading-relaxed mb-6 font-sans">
                  High-throughput, low-latency reverse proxy and rate limiter utilizing Project Loom Virtual Threads, lock-free atomic CAS token bucket, and RFC 6585 compliance.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-pale-lilac mb-6">
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Token Bucket CAS</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Sliding Window Log</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Virtual Threads</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Prometheus</span>
                </div>
              </div>
              <div className="pt-4 border-t border-royal-violet/20 flex items-center justify-between text-xs font-mono">
                <a
                  href="https://github.com/amy9273/api-rate-limiter"
                  target="_blank"
                  rel="noreferrer"
                  className="text-electric-lavender hover:underline flex items-center gap-1"
                >
                  <span>Inspect on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-muted-mauve">&lt; 2ms P99 Routing</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="p-7 rounded-2xl bg-aubergine/70 border border-royal-violet/30 hover:border-electric-lavender transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-muted-mauve mb-3">
                  <span className="text-electric-lavender font-bold">FEATURED / 004</span>
                  <span>Flutter · Three.js · Blender</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-electric-lavender transition-colors">
                  Kamunica
                </h3>
                <p className="text-cloud/80 text-xs leading-relaxed mb-6 font-sans">
                  Interactive Filipino Sign Language (FSL) mobile learning platform featuring 3D avatar lesson guides, speech-to-sign translation, and real-time computer vision recognition.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-pale-lilac mb-6">
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Flutter Mobile</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">3D Avatar Guide</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Firebase Firestore</span>
                  <span className="px-2.5 py-1 rounded bg-void/80 border border-royal-violet/40">Python FSL Model</span>
                </div>
              </div>
              <div className="pt-4 border-t border-royal-violet/20 flex items-center justify-between text-xs font-mono">
                <a
                  href="https://kamunica-landing.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-electric-lavender hover:underline flex items-center gap-1"
                >
                  <span>Live App Landing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-muted-mauve">Capstone Capstone</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 04. BEHIND THE SYSTEMS & ACTIVITY (Light Mist #E9E3F0)       */}
      {/* ============================================================ */}
      <section id="systems" className="bg-mist text-graphite py-24 px-5 md:px-8 border-t border-cloud">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-graphite/10 pb-6">
            <div>
              <span className="font-mono text-xs text-royal-violet font-bold tracking-widest uppercase">
                04 / BEHIND THE SYSTEMS
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-graphite tracking-tight mt-1">
                More Than the Interface.
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-mauve">
              ARCHITECTURAL PILLARS & TELEMETRY
            </span>
          </div>

          {/* Three Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 border border-graphite/10 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-royal-violet/15 text-royal-violet flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-graphite">Architecture</h4>
              <p className="text-xs text-graphite/80 leading-relaxed font-sans">
                Clean separation of concerns with schema-per-tenant isolation, stateless JWT authentication, and idempotent event ingestion.
              </p>
            </div>

            <div className="bg-white/90 border border-graphite/10 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-royal-violet/15 text-royal-violet flex items-center justify-center font-bold">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-graphite">Data & Concurrency</h4>
              <p className="text-xs text-graphite/80 leading-relaxed font-sans">
                Pessimistic row-level locking for checkout concurrency, automated Flyway migrations, and Redis caching layers.
              </p>
            </div>

            <div className="bg-white/90 border border-graphite/10 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-royal-violet/15 text-royal-violet flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-graphite">Reliability & Testing</h4>
              <p className="text-xs text-graphite/80 leading-relaxed font-sans">
                Integration testing with Testcontainers, automated CI workflows, and traffic shaping under burst overloads.
              </p>
            </div>
          </div>

          {/* Live GitHub Heatmap Component */}
          <div className="pt-6">
            <GitHubHeatmap theme="violet" />
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 05. EXPERIENCE & CERTIFICATIONS (Dark Aubergine #29183B)     */}
      {/* ============================================================ */}
      <section id="certifications" className="bg-aubergine text-cloud py-24 px-5 md:px-8 orbital-grid border-t border-royal-violet/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-royal-violet/30 pb-6">
            <div>
              <span className="font-mono text-xs text-electric-lavender font-bold tracking-widest uppercase">
                05 / VERIFIED CERTIFICATIONS
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mt-1">
                9 Individual Credentials.
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-mauve">
              CISCO · DATACAMP · COURSERA
            </span>
          </div>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CERTIFICATES_DATA.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-void/70 border border-royal-violet/30 hover:border-electric-lavender transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-mauve mb-2">
                    <span className="text-electric-lavender font-semibold">{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-electric-lavender transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-cloud/70 text-xs leading-relaxed mb-4 font-sans">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded text-[10px] font-mono bg-aubergine text-pale-lilac border border-royal-violet/30">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-royal-violet/20 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-mauve text-[11px]">{cert.issuerCategory}</span>
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-electric-lavender hover:underline flex items-center gap-1 font-semibold"
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

      {/* ============================================================ */}
      {/* 06. CONTACT TERMINAL (Dark Void #171021)                     */}
      {/* ============================================================ */}
      <section id="contact" className="bg-void text-cloud py-24 px-5 md:px-8 orbital-grid border-t border-royal-violet/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-royal-violet/40 bg-royal-violet/10 text-electric-lavender font-mono text-xs">
            <span>ENDPOINT: POST /api/v1/contact</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight">
            Have an idea? Let&apos;s make it work.
          </h2>

          <p className="text-cloud/80 text-base max-w-xl mx-auto font-sans leading-relaxed">
            I&apos;m actively seeking Software Developer and Backend Engineering internship opportunities for 2025/2026. Let&apos;s talk about systems, code, and building something impactful.
          </p>

          {/* Action Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 text-left font-mono text-xs">
            {CONTACT_INFO.channels.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target={c.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="p-4 rounded-xl bg-aubergine/60 border border-royal-violet/30 hover:border-electric-lavender transition-all hover:bg-aubergine block group"
              >
                <div className="text-muted-mauve text-[11px]">{c.name}</div>
                <div className="text-white font-bold text-sm group-hover:text-electric-lavender transition-colors truncate mt-1">
                  {c.displayValue}
                </div>
                <div className="text-electric-lavender text-[10px] mt-2 flex items-center gap-1">
                  <span>Connect</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-12 text-xs font-mono text-muted-mauve border-t border-royal-violet/20">
            <span>© 2026 Angel Amaya Balion • Built with Next.js 15, TypeScript & Tailwind CSS</span>
          </div>

        </div>
      </section>

    </div>
  );
}
