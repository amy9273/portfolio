# Code Standards & Quality Guidelines — A/B Portfolio

## 1. TypeScript Standards

- **Strict Type Checking**: `strict: true` in `tsconfig.json`. No usage of `any`. Use discriminated unions for polymorphic components.
- **Component Props**: Define dedicated interfaces for all component props using `PascalCaseProps` (e.g., `ProjectCardProps`).
- **Data Schemas**: All project, experience, and technology items must be strictly typed in `src/data/`.

```typescript
// Example: Strongly-typed project entity
export interface ProjectEntity {
  slug: string;
  title: string;
  tagline: string;
  category: 'Backend Engineering' | 'Distributed Systems' | 'Mobile & 3D' | 'Full-Stack';
  featured: boolean;
  order: number;
  stack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
  overview: string;
  architectureHighlights: string[];
}
```

---

## 2. Next.js 15 & React Rules

- **Default to Server Components**: Keep components as Server Components unless interactivity (`useState`, `useEffect`, event handlers, browser APIs) requires `"use client"`.
- **Image Optimization**: Always use `next/image` with explicit `width`, `height`, and `priority` for above-the-fold assets.
- **Font Optimization**: Use `next/font/google` with `display: 'swap'` and `variable` declarations to prevent layout shift.

---

## 3. Three.js & WebGL Memory Lifecycle

To prevent GPU memory leaks and mobile browser crashes:
1. Always clean up geometries, materials, textures, and renderer contexts on component unmount inside `useEffect` cleanup.
2. Cancel the `requestAnimationFrame` handle on unmount.
3. Automatically suspend rendering when the canvas is scrolled out of the viewport (using `IntersectionObserver`).

```typescript
// Memory cleanup pattern for Three.js in React
useEffect(() => {
  // initialization ...
  return () => {
    cancelAnimationFrame(animationFrameId);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}, []);
```

---

## 4. Tailwind CSS Conventions

- Use design token utility classes defined in `globals.css` or Tailwind theme extensions (`bg-void`, `bg-aubergine`, `text-graphite`, `border-royal-violet/30`).
- Combine classes using `cn()` helper (`clsx` + `tailwind-merge`).
- Respect mobile-first responsive prefixes: `base -> sm -> md -> lg -> xl`.
