# Unit 04 Specification — Editorial About & Personal Journey

## 1. Goal
Implement the high-contrast editorial Light Cloud section (`src/components/sections/About.tsx`) showcasing Angel Amaya Balion's background as an Information Technology student at De La Salle Lipa, engineering philosophy, academic credentials, and personal creative interests.

---

## 2. Requirements & Deliverables

1. **Section Component (`src/components/sections/About.tsx`)**:
   - Surface: Light Cloud (`#F6F3FA`) with subtle coordinate grid pattern (`light-grid`).
   - Text & Accents: Deep Graphite (`#22202A`), Royal Violet (`#7041A6`), Mist borders (`#E9E3F0`).
   - Editorial Narrative:
     - Clear focus on backend engineering, distributed pipelines, and database architecture.
     - University affiliation: De La Salle Lipa (BSIT, Expected 2027).
     - Creative dimension: Reading manga/manhwa (which inspired the `Malaya` PWA project) and 3D avatar tech (`Kamunica`).
2. **Interactive Bento Cards**:
   - **Academic Credentials**: DLSL IT department, Senior standing, coursework highlights (Advanced Database Systems, Systems Architecture, Distributed Computing).
   - **Engineering Principles**:
     - *Data Integrity*: Strict ACID boundaries and Flyway migration controls.
     - *Concurrency & Throughput*: Virtual Threads, atomic CAS token buckets, and Redis BullMQ queues.
     - *User Empathy*: Fast, zero-lag interfaces with offline persistence.
   - **Quick Stats & Metrics**:
     - 1,010+ Annual GitHub Contributions
     - 16 Public Codebases
     - 9 Professional Certifications (Cisco, Oracle, Python Institute, FreeCodeCamp)
3. **Motion & Polish**:
   - Subtle card hover elevation (`translate-y-[-2px]`), border illumination, and smooth scroll anchor target (`#about`).

---

## 3. Verification Criteria
- WCAG AA compliant contrast ratio on all text over light surfaces.
- Fully responsive on mobile, tablet, and desktop viewports.
- `npm run typecheck` and `npm run build` pass with 0 errors.
