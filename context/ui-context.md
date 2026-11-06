# UI & Design System Context — A/B Portfolio

## 1. Color System & Semantic Tokens

```
55% Deep Violet & Dark Backgrounds
25% Light Lavender & Cloud Surfaces
15% Neutral Graphites & Muted Tones
 5% High-Energy Electric Lavender Accents
```

| Token Name | Hex Code | Semantic Role | Usage Guidance |
| :--- | :--- | :--- | :--- |
| **Void** | `#171021` | Primary Dark Background | Hero, Selected Work background, Contact section. |
| **Aubergine** | `#29183B` | Dark Card / Panel Surface | Project cards, dark navigation dock, preloader. |
| **Royal Violet** | `#7041A6` | Primary Brand Accent | Key brand lines, secondary buttons, subtle borders. |
| **Electric Lavender** | `#A77BEB` | Interactive Glow & Focus | Active tabs, hover states, link hover, focus rings. |
| **Pale Lilac** | `#D8C5FF` | Subtle Highlight & Accents | Micro badges, status tags, ambient radial glows. |
| **Cloud** | `#F6F3FA` | Light Section Background | About section, Systems architecture background. |
| **Mist** | `#E9E3F0` | Light Card Surface | About biography cards, technical pillar containers. |
| **Graphite** | `#22202A` | Primary Light-Theme Text | Main body text and headlines on light surfaces. |
| **Muted Mauve** | `#9D8AAE` | Secondary Subtext | Subtitles, timestamps, metadata labels. |

---

## 2. Typography Hierarchy

### Typefaces
- **Display Headings**: `Space Grotesk` (weights 600, 700).
- **Body & Paragraphs**: `Inter` (weights 400, 500, 600).
- **Technical Labels & Metadata**: `JetBrains Mono` (weights 400, 500).
- **Brand Monogram**: Custom vector geometric `A/B`.

### Scale & Rules
- **Hero Title**: `clamp(2.75rem, 6vw, 5.5rem)` with tracking `-0.03em` and leading `1.05`.
- **Section Headings**: `clamp(2rem, 4vw, 3.5rem)` with tracking `-0.02em`.
- **Body Large**: `1.125rem` (18px) with leading `1.65` and max reading measure of `65ch`.
- **Technical Badges**: `0.75rem` (12px) in uppercase with tracking `0.05em`.

---

## 3. Section-by-Section Visual Rhythm

```
┌────────────────────────────────────────────────────────┐
│  01. HERO SECTION (Dark Violet #171021)                 │
│      100svh • 3D Orbital Core • A/B Mark • Headline     │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│  02. ABOUT SECTION (Light Cloud #F6F3FA)                │
│      Editorial Bio • De La Salle Lipa • Manga/Tech     │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│  03. SELECTED WORK (Dark Void #171021)                  │
│      Featured Billing Engine • IncidentPulse • Cards    │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│  04. BEHIND THE SYSTEMS (Light Mist #E9E3F0)            │
│      Architecture Schematics • Concurrency • Postgres   │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│  05. EXPERIENCE & CERTIFICATIONS (Dark Aubergine #29183B)
│      Timeline (DLSL 2027, Univ of Cabuyao Immersion)    │
│      Individual Verified Credential Cards (9 Total)     │
│      Category Filter Tabs & 1-Click PDF Viewers         │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│  06. CONNECT & TERMINAL (Dark Void #171021)             │
│      Dual-Pane Console • GitHub • LinkedIn • Resume     │
└────────────────────────────────────────────────────────┘
```

---

## 4. Motion & Transition Choreography

- **Preloader / Startup**: Quick 1.8-second handshake sequence counting to 100% with live microservice boot logs, then sliding up with `cubic-bezier(0.85, 0, 0.15, 1)`. Includes `[ESC]` bypass.
- **Orb Movement**: Continuous passive rotation at 0.003 rad/s; gentle tilt towards cursor ($\le 8^\circ$); scales down and drifts smoothly on downward scroll.
- **Card Hover Physics**: Slight vertical translation (`translateY(-4px)`), fine 1px border illumination with `Electric Lavender` (`#A77BEB`), and 400ms ease-out transitions.
- **Accessibility**: When `prefers-reduced-motion` is active:
  - All parallax and continuous rotations are disabled.
  - Page transitions become simple 200ms opacity fades.
