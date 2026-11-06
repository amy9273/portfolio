# Architecture Blueprint — A/B Portfolio

## 1. System Topology & Technology Stack

```
                                  [ User Client ]
                                         │
                                         ▼
                                 [ Next.js 15 App Router ]
                     ┌───────────────────┴───────────────────┐
                     ▼                                       ▼
             [ Server Components ]                   [ Client Components ]
       - Layout & Static Metadata              - 3D Orb Canvas (Three.js)
       - Project Case Studies Content          - Section Observer / Scroll Nav
       - SEO & JSON-LD Schemas                 - Interactive Contact Terminal
                                               - Architecture Diagram Tabs
```

### Core Technologies
- **Framework**: Next.js 15 (App Router with Turbopack).
- **Language**: TypeScript 5.7+ (strict mode enabled).
- **Styling**: Tailwind CSS with custom design tokens.
- **Motion & Transitions**: Framer Motion (spring physics, layout morphs, scroll triggers).
- **3D Graphics Engine**: Three.js (procedural geometry with PBR metallic/glass shaders) + WebP fallback.
- **Icons**: Lucide React.
- **Typography**: Space Grotesk (headings), Inter (body), JetBrains Mono (code/labels).

---

## 2. Directory Structure

```
src/
├── app/
│   ├── layout.tsx              # Root HTML, fonts, global metadata, theme provider
│   ├── page.tsx                # Main immersive single-page experience (6 sections)
│   ├── globals.css             # Design tokens, keyframe animations, utility overrides
│   ├── robots.ts               # Robots.txt crawler directives
│   ├── sitemap.ts              # Dynamic sitemap generation
│   └── projects/
│       └── [slug]/
│           ├── page.tsx        # In-depth architectural project case study route
│           └── not-found.tsx   # Custom 404 for nonexistent projects
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky/transparent header with A/B monogram
│   │   ├── Footer.tsx          # Copyright, A/B mark, live status
│   │   └── SectionIndicator.tsx# Vertical progress dots reflecting active section
│   ├── sections/
│   │   ├── Hero.tsx            # Section 01: 100svh dark violet intro + 3D orb
│   │   ├── About.tsx           # Section 02: Light lavender editorial biography
│   │   ├── Projects.tsx        # Section 03: Dark immersive project gallery
│   │   ├── Systems.tsx         # Section 04: Light technical architecture pillars
│   │   ├── Experience.tsx      # Section 05: Dark chronological education/immersion timeline
│   │   └── Contact.tsx         # Section 06: Full-screen closing + dual-mode console
│   ├── visuals/
│   │   ├── OrbitalCore.tsx     # Three.js 3D glass & metallic ring canvas
│   │   ├── OrbitalFallback.tsx # High-resolution WebP/SVG fallback for mobile/no-WebGL
│   │   └── ArchitectureDiagram.tsx # Interactive Spring Boot / Redis pipeline tabs
│   ├── ui/
│   │   ├── Button.tsx          # Primary, secondary, and terminal action triggers
│   │   ├── Monogram.tsx        # Geometric A/B vector mark
│   │   └── TechBadge.tsx       # Standardized technology pill
│   └── data/
│       ├── projects.ts         # Strongly-typed project catalog & case study data
│       ├── experience.ts       # Education, immersion, and certification milestones
│       └── technologies.ts     # Categorized skill taxonomy
└── lib/
    ├── utils.ts                # Class merging (clsx + twMerge)
    └── constants.ts            # Global navigation anchors and contact links
```

---

## 3. Signature 3D Visual Architecture

The **Orbital Core** represents the visual signature of `A/B`:

1. **Scene Composition**:
   - **Central Sphere**: Translucent glass shader (`roughness: 0.1`, `transmission: 0.9`, `ior: 1.5`) enclosing an inner glowing lavender core (`#A77BEB`).
   - **Outer Orbital Rings**: Two concentric metallic rings (`metalness: 0.9`, `roughness: 0.2`) rotated at offset 35° and -20° Euler angles.
   - **Lighting Rig**: Ambient light (`#29183B`), subtle directional key light (`#D8C5FF`), and point light emitting from the core center.
2. **Animation Loop**:
   - Base rotation: Smooth continuous yaw at `0.003 rad/frame`.
   - Cursor responsiveness: Gentle damping toward pointer coordinates ($\Delta \le 8^\circ$) using lerp.
   - Mobile bypass: On screens $< 768px$ or when `prefers-reduced-motion: reduce` is detected, the WebGL context is suspended and replaced with `OrbitalFallback.tsx`.

---

## 4. Component Boundaries & Rendering Strategy

- **Static Generation (SSG)**: Project detail pages and the landing page shell are statically pre-rendered at build time for optimal TTFB.
- **Client Boundaries (`"use client"`)**:
  - `Navbar.tsx` (scroll position listener, mobile menu toggle).
  - `OrbitalCore.tsx` (Three.js canvas and mouse drift).
  - `Contact.tsx` (live JSON payload generator and copy-to-clipboard actions).
  - `ArchitectureDiagram.tsx` (tab switching between Tenant Isolation, Concurrency, and Redis Queues).
- **Zero Layout Shift (CLS)**:
  - Font metrics mapped via `next/font/google` with fallback size adjustments.
  - 3D container allocated explicit aspect ratios (`aspect-square` or `min-h-[400px]`).

---

## 5. Architectural Invariants

1. **Mixed Theme Isolation**: Do not use global dark mode class toggles that invert the entire DOM uniformly. The alternating rhythm (Dark $\rightarrow$ Light $\rightarrow$ Dark $\rightarrow$ Light $\rightarrow$ Dark) is intrinsic to the section layout.
2. **Mobile Ergonomics**: All interactive click targets must be $\ge 44 \times 44$ px with no horizontal document overflow (`overflow-x: hidden`).
3. **No Fabricated Data**: Project statistics and technical claims must strictly reflect the verified GitHub codebases.
