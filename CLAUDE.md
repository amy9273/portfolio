# Application Building Context — A/B Portfolio (Angel Amaya Balion)

Read the following files in order before implementing or making any architectural decision:

1. `context/project-overview.md` — Brand identity (A/B · NEBULA), target recruiter personas, portfolio scope, and success criteria.
2. `context/architecture.md` — Next.js 15 App Router architecture, Three.js 3D orbital core integration, component boundaries, and performance invariants.
3. `context/ui-context.md` — Mixed violet color system (Void, Deep Iris, Royal Violet, Cloud, Mist), typography hierarchy (Space Grotesk, Inter, JetBrains Mono), orbital geometry, and animation rules.
4. `context/code-standards.md` — TypeScript 5.7+ strict typing, Tailwind CSS v4 design tokens, Framer Motion transition rules, and Next.js best practices.
5. `context/progress-tracker.md` — Phased implementation tracker (Units 00–08), completed milestones, and immediate next steps.

---

### Operating Rules

- Update `context/progress-tracker.md` after each meaningful implementation change.
- Work strictly against the current unit spec in `context/specs/`.
- Ensure mobile responsiveness, zero layout shift (CLS < 0.05), and lightweight WebGL/CSS fallbacks.
- Never commit broken TypeScript or failing lint rules into the repo.
- Never proceed to the next unit without explicit user verification.
