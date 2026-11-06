# Unit 01 Specification — Next.js 15 Scaffold, Theme & Monogram

## 1. Goal
Initialize the modern Next.js 15 project in `C:\Project\portfolio`, configure Tailwind CSS with NEBULA violet design tokens, wire the responsive typography (Space Grotesk, Inter, JetBrains Mono), build the custom vector `A/B` geometric monogram, and implement the transparent sticky navigation bar.

---

## 2. Requirements & Deliverables

1. **Next.js 15 App Router Project**:
   - TypeScript 5.7+ with strict typing.
   - Tailwind CSS with custom colors (`void`, `aubergine`, `royal-violet`, `electric-lavender`, `pale-lilac`, `cloud`, `mist`, `graphite`, `muted-mauve`).
   - Font loading via `next/font/google` for Space Grotesk, Inter, and JetBrains Mono.
2. **Design Tokens (`src/app/globals.css`)**:
   - Semantic CSS variables for surfaces, text, borders, and accents.
   - Keyframe utilities for subtle glow and beam effects.
3. **Custom `A/B` Monogram Component (`src/components/ui/Monogram.tsx`)**:
   - Razor-sharp SVG geometric monogram with the signature angled slash.
   - Scalable to favicon, navigation bar (32px), and hero display (64px).
4. **Sticky Navigation (`src/components/layout/Navbar.tsx`)**:
   - Transparent top bar blending over dark violet hero.
   - Backdrop blur (`backdrop-blur-md`) on scroll.
   - Desktop links: `ABOUT`, `WORK`, `SYSTEMS`, `EXPERIENCE`, `CONTACT`.
   - Action button: `RÉSUMÉ ↓`.
   - Mobile responsive menu with full-screen slide/fade overlay.

---

## 3. Verification Criteria
- `npm run build` compiles with 0 TypeScript or lint errors.
- Navigation remains sticky with seamless smooth-scroll anchor links.
- Monogram renders sharply across desktop and mobile screens.
