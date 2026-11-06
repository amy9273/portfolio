'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Facebook,
  Download,
  Copy,
  Check,
  Send,
  Terminal,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { CONTACT_INFO } from '@/data/contact';

export function Contact() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Internship Opportunity (2025/2026)');
  const [message, setMessage] = useState('');
  const [copiedPayload, setCopiedPayload] = useState(false);

  const payload = {
    recipient: CONTACT_INFO.email,
    sender: senderName || 'Anonymous Visitor',
    replyTo: senderEmail || 'not-provided@domain.com',
    type: inquiryType,
    message: message || 'Hello Angel, I reviewed your portfolio and would like to discuss an engineering opportunity...',
    timestamp: new Date().toISOString(),
  };

  const jsonString = JSON.stringify(payload, null, 2);

  const handleCopyJSON = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Contact] ${inquiryType} from ${senderName || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hi Angel,\n\n${message || 'I came across your portfolio and wanted to get in touch.'}\n\nBest regards,\n${senderName || 'Anonymous'}\nEmail: ${senderEmail || 'N/A'}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-void text-cloud py-24 px-5 md:px-8 orbital-grid border-t border-royal-violet/20 relative z-20"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-royal-violet/40 bg-royal-violet/10 text-electric-lavender font-mono text-xs">
            <Terminal className="w-3.5 h-3.5 text-electric-lavender" />
            <span>ENDPOINT: POST /api/v1/contact</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
            Have an idea? Let&apos;s build it.
          </h2>

          <p className="text-cloud/80 text-base sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            I&apos;m actively seeking Software Developer and Backend Engineering internship opportunities for 2025/2026. Let&apos;s talk about systems, code, and building something reliable.
          </p>
        </div>

        {/* Dual-Pane Developer Console & Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Verified Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-mono text-xs font-bold text-pale-lilac uppercase tracking-wider mb-2">
              Direct Verified Communications
            </h3>

            {CONTACT_INFO.channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target={channel.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="p-4 rounded-2xl bg-aubergine/60 border border-royal-violet/30 hover:border-electric-lavender hover:bg-aubergine transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono text-muted-mauve uppercase block">
                    {channel.name}
                  </span>
                  <span className="font-mono text-sm font-bold text-white group-hover:text-electric-lavender transition-colors">
                    {channel.displayValue}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-mauve group-hover:text-electric-lavender group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}

            {/* Quick Résumé Card */}
            <div className="p-5 rounded-2xl bg-royal-violet/15 border border-royal-violet/40 space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-electric-lavender uppercase">
                  Recruiter Fast Track
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-royal-violet/30 text-pale-lilac">
                  PDF · 2026
                </span>
              </div>
              <p className="text-xs text-cloud/80 font-sans">
                Review complete academic background, technical skills, and verified projects in a single printable PDF document.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-royal-violet hover:bg-electric-lavender text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-md active:scale-95"
              >
                <span>DOWNLOAD RÉSUMÉ</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Console */}
          <div className="lg:col-span-7 bg-[#130C1E] border border-royal-violet/35 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-royal-violet/25 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-mauve">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-white font-semibold">contact_terminal.sh</span>
                <span>—</span>
                <span>Interactive Payload Composer</span>
              </div>
              <button
                onClick={handleCopyJSON}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-aubergine border border-royal-violet/40 hover:border-electric-lavender text-pale-lilac text-xs font-mono transition-colors"
                title="Copy JSON Payload"
              >
                {copiedPayload ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY JSON</span>
                  </>
                )}
              </button>
            </div>

            <form onSubmit={handleSendMail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-muted-mauve uppercase mb-1">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Hiring Manager at Tech Corp"
                    className="w-full px-4 py-2.5 rounded-xl bg-aubergine/70 border border-royal-violet/40 focus:border-electric-lavender focus:outline-none text-white font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-muted-mauve uppercase mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-aubergine/70 border border-royal-violet/40 focus:border-electric-lavender focus:outline-none text-white font-sans text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-muted-mauve uppercase mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-aubergine/70 border border-royal-violet/40 focus:border-electric-lavender focus:outline-none text-white font-sans text-sm transition-colors"
                >
                  <option value="Internship Opportunity (2025/2026)">
                    Software Developer / Backend Internship (2025/2026)
                  </option>
                  <option value="Full-Time / New Grad Discussion">
                    Full-Time / New Grad 2027 Engineering
                  </option>
                  <option value="Technical Collaboration">
                    Open Source & Systems Collaboration
                  </option>
                  <option value="General Conversation">General Developer Chat</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-muted-mauve uppercase mb-1">
                  Message Payload
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about the role, project, or question..."
                  className="w-full px-4 py-2.5 rounded-xl bg-aubergine/70 border border-royal-violet/40 focus:border-electric-lavender focus:outline-none text-white font-sans text-sm transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-royal-violet hover:bg-electric-lavender text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-royal-violet/30 active:scale-95 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE (MAILTO)</span>
                </button>

                <span className="text-[11px] font-mono text-muted-mauve">
                  Direct Inbox: angelamaya.balion@gmail.com
                </span>
              </div>
            </form>

            {/* Live JSON Preview */}
            <div className="pt-4 border-t border-royal-violet/20">
              <div className="font-mono text-[10px] text-muted-mauve uppercase mb-1.5 flex items-center justify-between">
                <span>LIVE GENERATED JSON PAYLOAD</span>
                <span className="text-electric-lavender">application/json</span>
              </div>
              <pre className="p-3.5 rounded-xl bg-[#0F0818] border border-royal-violet/20 font-mono text-[11px] text-pale-lilac/90 overflow-x-auto">
                <code>{jsonString}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <footer className="pt-16 border-t border-royal-violet/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-mauve">
          <div>
            © 2026 Angel Amaya Balion. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>TIMEZONE: GMT+8 (MANILA)</span>
            </span>
            <span>•</span>
            <span>NEXT.js 15 · THREE.JS · TAILWIND</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
