# Project Overview — A/B Portfolio (Angel Amaya Balion)

**A/B Portfolio** is the official personal digital identity and high-performance software engineering portfolio for **Angel Amaya Balion**. Designed under the conceptual theme **NEBULA** (_"A space for ideas to become systems"_), it delivers an immersive, editorial developer showcase highlighting backend architecture, distributed systems, mobile development, and creative technology.

---

## 1. Brand Identity & Creative Thesis

- **Brand Mark**: `A/B` (Geometric monogram representing the intersection of Engineering & Creativity, Logic & Exploration, Interface & Infrastructure).
- **Personal Name**: Angel Amaya Balion.
- **Brand Descriptor**: Software Developer · Backend Engineering · Creative Technology.
- **Tagline**: _"Build with curiosity. Engineer with purpose."_
- **Secondary Descriptor**: _"Exploring ideas. Building systems."_
- **Theme Composition**: **Mixed Contrast Environment**
  - **Dark Violet Deep Space** (`#171021`, `#29183B`): Hero, Selected Projects, and Contact Terminal.
  - **Clear Light Lavender & Cloud** (`#F6F3FA`, `#E9E3F0`): Editorial About, Behind the Systems (Architecture), and Education Timeline.
- **Signature Visual**: Layered 3D Violet Orbital Core (glass hemisphere/sphere with rotating metallic orbital rings and glowing lavender core).

---

## 2. Target Audience & Recruiter Personas

1. **The Backend Engineering Lead / Hiring Manager**:
   - Skims in 30 seconds for deep technical understanding: multi-tenancy schemas, concurrency handling, database ACID guarantees, and queue mechanics.
   - Values clear architecture diagrams, request flows, and test coverage evidence over generic skill percentage bars.
2. **The Tech Recruiter / University Talent Scout**:
   - Searches for clear role alignment: Software Developer / Backend Developer internships (Summer 2025/2026 and new-grad 2027).
   - Demands instant access to:
     - Email: `angelamaya.balion@gmail.com`
     - Phone: `09764567794` / `+63 976 456 7794`
     - LinkedIn: `linkedin.com/in/angel-amayabalion`
     - GitHub: `github.com/amy9273`
     - Facebook: `facebook.com/AngelAmaya.Balion`
     - 1-click résumé PDF download.
3. **The Design-Conscious Senior Technologist**:
   - Evaluates creative polish, responsive typography (`clamp()`), micro-interactions, accessibility (WCAG AA contrast), and performance (smooth 60fps animations with graceful mobile fallbacks).

---

## 3. Project Showcase Hierarchy (Mapped from GitHub Scan)

| Tier | Project | Core Technologies | Primary Technical Narrative |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Featured)** | **B2B SaaS Billing Engine** | Java 21, Spring Boot 3, PostgreSQL, Flyway | Multi-tenant schema isolation, zero-drift prorated billing, row-level pessimistic locking, and idempotent Stripe webhook listeners. |
| **Tier 1 (Featured)** | **IncidentPulse** | TypeScript, Node.js, Express, Redis, Next.js, Flutter | Real-time incident triage and on-call alerting, Redis BullMQ delay queues for escalation state machines, and cross-platform WebSocket sync. |
| **Tier 1 (Featured)** | **API Rate Limiter** | Java 21 Virtual Threads, Redis, Prometheus | High-throughput, low-latency reverse proxy and rate limiter using lock-free atomic CAS token bucket, sliding window logs, and RFC 6585 compliance. |
| **Tier 1 (Featured)** | **Kamunica** | Flutter, Three.js, WebGL, Blender, Python FSL | Interactive Filipino Sign Language (FSL) mobile learning platform featuring 3D avatar guides, speech-to-sign translation, and real-time hand recognition. |
| **Tier 2 (Experiments)** | **Malaya** | Next.js 15 PWA, Supabase, MangaDex API | Mobile-first webtoon/manhwa reading progressive web application with zero-gap vertical strip, SSRF-hardened image proxy, and offline persistence. |
| **Tier 2 (Experiments)** | **Gala PH** | React Native / TypeScript | Philippine barkada travel OS & itemized KKB expense ledger featuring dual-RFID toll calculators (Autosweep/Easytrip) and debt graph simplification. |
| **Tier 2 (Experiments)** | **VetCare** | React, TypeScript, Vite, Tailwind, REST API | Full-stack veterinary clinic management with appointment scheduling, pet records, and AI-powered reviews. |
| **Tier 2 (Experiments)** | **Fleet Management DW** | SQLite, Star Schema, SQL | Analytical data warehouse featuring a central fact table and 6 dimension tables demonstrating relational schema design and complex analytical queries. |
| **Tier 2 (Experiments)** | **Power BI Expense Analytics**| Power BI, DAX, Excel | Interactive business intelligence dashboard analyzing expense trends, supplier concentration, and budget variance. |

---

## 4. Key Functional Sections

1. **Section 01 — Hero (Dark Violet)**: Full-viewport introduction (`100svh`), custom `A/B` monogram, interactive 3D orbital core, responsive typography, and primary actions.
2. **Section 02 — About (Light Lavender Editorial)**: Personal narrative ("Curious by nature. Developer by practice"), BSIT background at De La Salle Lipa, manga/manhwa/tech interests, and engineering philosophy.
3. **Section 03 — Selected Work (Dark Immersive Gallery)**: Featured case studies with architecture schematics, key implementation decisions, and GitHub repository links.
4. **Section 04 — Behind the Systems (Light Technical Deep-Dive)**: The three architectural pillars (Architecture, Data, Reliability) highlighting tenant isolation, concurrency, and automated testing.
5. **Section 05 — Experience, Education & Certifications (Dark Timeline & Credential Cards)**:
   - Factual chronological milestones (De La Salle Lipa BSIT 2027, Univ of Cabuyao Immersion 2022-2023).
   - **Individual Verified Certifications Showcase**: 9 standalone credential cards with category filters (All, Networking, Databases & SQL, Python & Data, Computer Science), competency tags, verification badges, and 1-click verified PDF preview/download links.
6. **Section 06 — Connect (Full-Screen Violet)**: Direct contact channels, dual-mode developer console, résumé download, and professional profiles.
7. **Dedicated Project Detail Routes (`/projects/[slug]`)**: In-depth architectural case studies for B2B SaaS Billing, IncidentPulse, and API Rate Limiter.

---

## 5. Success Criteria & Quality Metrics

1. **Performance**: Lighthouse score $\ge 90$ across Desktop and Mobile.
2. **Smooth 60 FPS Orbit**: Procedural Three.js canvas under 40KB gzipped; automatic fallback to high-resolution WebP/SVG on mobile or when WebGL is unsupported.
3. **Accessibility**: Strict WCAG AA contrast ratios, full keyboard accessibility, visible focus rings, and `prefers-reduced-motion` compliance.
4. **Zero Layout Shifts**: Pre-calculated aspect ratios and font fallback sizing (`next/font`).
5. **SEO & Metadata**: Complete Open Graph, Twitter cards, JSON-LD developer schema, and sitemap.
