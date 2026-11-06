# Unit 02 Specification — Startup Preloader & Hero Section

## 1. Goal
Implement the high-performance Awwwards-style startup boot sequence (`Preloader.tsx`) and refine the 100svh Dark Violet Hero section with responsive typography, microservice telemetry pills, interactive CTAs, and graceful motion choreography.

---

## 2. Requirements & Deliverables

1. **Engineering Startup Preloader (`src/components/ui/Preloader.tsx`)**:
   - High-speed kernel boot and microservice telemetry log stream:
     - `KERNEL_INIT: [OK] VIRTUAL_THREADS_ACTIVE`
     - `SPRING_CORE: [OK] MULTI_TENANT_POSTGRES_READY`
     - `REDIS_CLUSTER: [OK] BULLMQ_QUEUES_CONNECTED`
     - `TELEMETRY_SYNC: [OK] 1,010 CONTRIBUTIONS VERIFIED`
     - `NEBULA_CORE: [OK] HANDSHAKE COMPLETE`
   - Numeric counter from `00%` to `100%` within ~1.8 seconds.
   - Geometric `A/B` vector monogram glowing at the center with electric lavender aura.
   - Smooth curtain shutter upward exit using `framer-motion` (`cubic-bezier(0.85, 0, 0.15, 1)`).
   - Recruiter-friendly: `[ESC]` keydown listener and top-right "SKIP [ESC]" pill button for instantaneous dismissal.
   - Session persistence via `sessionStorage` so returning internal views skip automatically while preserving manual re-play capability.

2. **Refined Hero Component (`src/components/sections/Hero.tsx`)**:
   - Full-viewport (`100svh`) layout on dark void `#171021`.
   - Ambient layered violet radial glows (`#7041A6` and `#A77BEB`).
   - Status badge: `HELLO, I'M ANGEL AMAYA BALION` · `DE LA SALLE LIPA '27` · `STATUS: OPEN FOR ROLES`.
   - Responsive typography with gradient headline: *"Build with curiosity. Engineer with purpose."*
   - Clear value proposition highlighting distributed systems, backend concurrency, and creative interfaces.
   - CTAs: Primary "EXPLORE WORK ↓", Secondary "VIEW RÉSUMÉ ↗", and "COPY CONTACT / QUICK CONNECT".
   - Telemetry status ribbon: System status, low-latency indicator, verified contributions badge, and stack pill array.
   - Dedicated orbital anchor container with sleek glassmorphism backdrop ready for Unit 03 Three.js WebGL canvas integration.

3. **Motion & Accessibility**:
   - Staggered entrance animations for hero elements once preloader completes.
   - Respects `prefers-reduced-motion` by reducing transitions to crisp, instant opacity fades.

---

## 3. Verification Criteria
- Preloader completes under 1.8s, can be skipped with `[ESC]`, and stores state in `sessionStorage`.
- Hero renders with zero layout shifts and WCAG AA contrast.
- `npm run typecheck` and `npm run build` pass with zero errors.
