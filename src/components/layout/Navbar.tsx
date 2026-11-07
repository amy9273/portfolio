'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Monogram } from '@/components/ui/Monogram';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#work' },
  { label: 'SYSTEMS', href: '#systems' },
  { label: 'EDUCATION', href: '#experience' },
  { label: 'CERTIFICATES', href: '#certifications' },
  { label: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section spy
      const sections = ['hero', 'about', 'work', 'systems', 'experience', 'certifications', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#171021]/80 backdrop-blur-md border-b border-royal-violet/20 py-3.5 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <Link href="#hero" className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-lavender rounded-xl group" aria-label="Amaya Home">
            <Monogram size={38} showText={false} />
            <span className="font-display font-bold text-sm text-white group-hover:text-electric-lavender transition-colors tracking-tight hidden sm:inline-block">
              Amaya
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1F162D]/60 border border-royal-violet/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-electric-lavender/20 text-electric-lavender font-bold'
                      : 'text-muted-mauve hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Resume & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-violet/20 hover:bg-royal-violet/35 border border-royal-violet/40 hover:border-electric-lavender text-pale-lilac hover:text-white text-xs font-mono transition-all duration-200 active:scale-95"
            >
              <span>RÉSUMÉ</span>
              <Download className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-aubergine/80 border border-royal-violet/30 text-white hover:text-electric-lavender transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#171021]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-8 pt-28 font-mono animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-[11px] text-muted-mauve tracking-widest uppercase mb-4 pb-2 border-b border-royal-violet/20">
              NAVIGATION // DIRECTORY
            </div>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-display font-bold text-white hover:text-electric-lavender transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-royal-violet/20">
            <a
              href="/resume.pdf"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-royal-violet/30 border border-electric-lavender text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <span>DOWNLOAD RÉSUMÉ</span>
              <Download className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-between text-xs text-muted-mauve">
              <span>angelamaya.balion@gmail.com</span>
              <span>0976 456 7794</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
