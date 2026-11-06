export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  tier: 1 | 2;
  category: 'Backend' | 'Distributed Systems' | 'Mobile & 3D' | 'Data & Full-Stack';
  primaryTech: string;
  technologies: string[];
  description: string;
  architectureHighlights: string[];
  proofOfWork: string;
  githubUrl: string;
  liveUrl?: string;
  statusBadge: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: '01',
    slug: 'b2b-saas-billing',
    title: 'B2B SaaS Billing Engine',
    tagline: 'Multi-tenant subscription backend with pessimistic locking and zero-drift prorated billing.',
    tier: 1,
    category: 'Backend',
    primaryTech: 'Java 21 · Spring Boot 3.3',
    technologies: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'Testcontainers', 'Stripe API'],
    description:
      'A multi-tenant billing and invoicing backend designed around strict tenant schema isolation, zero-drift prorated subscription calculations, and row-level pessimistic locking for invoice generation.',
    architectureHighlights: [
      'Tenant schema isolation preventing cross-organization data leakage',
      'Row-level PESSIMISTIC_WRITE locks for atomic, double-charge-proof invoice generation',
      'Flyway automated migration pipeline with zero-downtime evolution',
      'Idempotent webhook ingestion architecture with replay defense',
    ],
    proofOfWork: '40 Automated Tests · Testcontainers Integration Suite',
    githubUrl: 'https://github.com/amy9273/b2b-saas-billing',
    statusBadge: 'CORE PRODUCTION SPEC',
  },
  {
    id: '02',
    slug: 'incident-pulse',
    title: 'IncidentPulse',
    tagline: 'Real-time incident triage and on-call alerting with Redis BullMQ delay queues.',
    tier: 1,
    category: 'Distributed Systems',
    primaryTech: 'TypeScript · Redis · Next.js · Flutter',
    technologies: ['TypeScript', 'Express', 'Redis BullMQ', 'WebSockets', 'Next.js 15', 'Flutter'],
    description:
      'Full-stack incident response and on-call alerting platform running automated escalation state machines using Redis BullMQ delay queues and live bi-directional WebSocket triage synchronization.',
    architectureHighlights: [
      'BullMQ delayed job queue powering automated 3-tier escalation timeouts',
      'Bi-directional WebSocket broadcast syncing incident state across web and mobile clients',
      'Dead-letter queue (DLQ) mechanics ensuring zero dropped pager alerts',
      'Cross-platform Flutter mobile client for on-call responder acknowledged actions',
    ],
    proofOfWork: 'State Machine Escalation Engine · 0-Drop Alert Guarantee',
    githubUrl: 'https://github.com/amy9273/incident-pulse',
    statusBadge: 'DISTRIBUTED QUEUES',
  },
  {
    id: '03',
    slug: 'api-rate-limiter',
    title: 'High-Throughput API Rate Limiter',
    tagline: 'Virtual Threads reverse proxy utilizing lock-free atomic CAS token bucket.',
    tier: 1,
    category: 'Backend',
    primaryTech: 'Java 21 · Virtual Threads · Redis',
    technologies: ['Java 21', 'Project Loom', 'Atomic CAS', 'Redis', 'Prometheus', 'RFC 6585'],
    description:
      'High-throughput, low-latency reverse proxy and rate limiter leveraging Project Loom Virtual Threads for millions of concurrent connections, lock-free atomic CAS token bucket algorithm, and RFC 6585 compliance.',
    architectureHighlights: [
      'Project Loom Virtual Threads handling 10,000+ concurrent requests with minimal OS context switching',
      'Lock-free Atomic CAS token bucket algorithm achieving sub-3ms latency overhead',
      'Sliding Window Log fallback for burst mitigation and tenant quota tiers',
      'Prometheus telemetry endpoints exporting real-time p99 latency and drop metrics',
    ],
    proofOfWork: 'Lock-Free Token Bucket · RFC 6585 Compliant Headers',
    githubUrl: 'https://github.com/amy9273/api-rate-limiter',
    statusBadge: 'LOCK-FREE CAS',
  },
  {
    id: '04',
    slug: 'kamunica',
    title: 'Kamunica — Filipino Sign Language Platform',
    tagline: 'Interactive 3D sign language avatar guides with real-time gesture recognition.',
    tier: 1,
    category: 'Mobile & 3D',
    primaryTech: 'Flutter · Three.js · WebGL · Python',
    technologies: ['Flutter', 'Three.js', 'WebGL', 'Blender', 'Python FSL', 'Computer Vision'],
    description:
      'Interactive Filipino Sign Language (FSL) accessibility platform featuring 3D avatar guides, speech-to-sign semantic translation, and camera-based hand gesture recognition.',
    architectureHighlights: [
      'Procedural 3D WebGL skeletal bone rigging for accurate FSL hand gesture replication',
      'Speech-to-sign NLP translation mapping spoken Filipino into sign sequence tokens',
      'Cross-platform Flutter mobile deployment with local model caching',
    ],
    proofOfWork: 'Interactive 3D WebGL Avatar · Speech-to-Sign Translation',
    githubUrl: 'https://github.com/amy9273/fsl-handsign-recognition',
    liveUrl: 'https://kamunica-landing.onrender.com',
    statusBadge: '3D GRAPHICS & AI',
  },
];

export const SECONDARY_PROJECTS: ProjectItem[] = [
  {
    id: '05',
    slug: 'malaya',
    title: 'Malaya — Continuous Webtoon PWA Reader',
    tagline: 'Mobile-first manhwa progressive web app with SSRF-hardened image proxy.',
    tier: 2,
    category: 'Data & Full-Stack',
    primaryTech: 'Next.js 15 · Supabase · MangaDex API',
    technologies: ['Next.js 15 PWA', 'TypeScript', 'Supabase RLS', 'MangaDex API', 'Tailwind CSS'],
    description:
      'Mobile-first webtoon/manhwa reading PWA with zero-gap vertical continuous reading strip, private IP blocking SSRF proxy, and Supabase offline reading progress persistence.',
    architectureHighlights: [
      'SSRF-hardened `/api/proxy-image` route blocking private IP ranges and enforcing strict content types',
      'Zero-gap continuous vertical layout engine optimized for mobile touch scrolling',
      'Supabase Row Level Security protecting bookmarks and reading history',
    ],
    proofOfWork: '134 Automated Tests · 100% CI Quality Gates Pass',
    githubUrl: 'https://github.com/amy9273/malaya',
    liveUrl: 'https://malaya-brown.vercel.app',
    statusBadge: 'PWA & CLOUD',
  },
  {
    id: '06',
    slug: 'gala-ph',
    title: 'Gala PH — Travel OS & Barkada Toll Ledger',
    tagline: 'Philippine road-trip planner with dual-RFID toll calculation & KKB expense splitting.',
    tier: 2,
    category: 'Mobile & 3D',
    primaryTech: 'React Native · TypeScript',
    technologies: ['React Native', 'TypeScript', 'Tailwind', 'Graph Simplification'],
    description:
      'Philippine road-trip operating system calculating exact Autosweep & Easytrip dual-RFID toll fees across Luzon expressways with an itemized KKB expense splitter simplifying group debt graphs.',
    architectureHighlights: [
      'Dual-RFID toll calculator mapping exact segment costs for SLEX, NLEX, SCTEX, and TPLEX',
      'Debt simplification algorithm reducing N-person group transfers to minimal transactions',
    ],
    proofOfWork: 'Dual-RFID Toll Engine · Debt Graph Simplification',
    githubUrl: 'https://github.com/amy9273/gala-ph',
    statusBadge: 'MOBILE APP',
  },
  {
    id: '07',
    slug: 'vetcare',
    title: 'VetCare Clinic Management',
    tagline: 'Veterinary clinic operations platform with appointment and medical record workflows.',
    tier: 2,
    category: 'Data & Full-Stack',
    primaryTech: 'React · TypeScript · Vite · REST API',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'RESTful API'],
    description:
      'Full-stack veterinary clinic management platform facilitating patient health records, appointment scheduling, and veterinarian treatment notes.',
    architectureHighlights: [
      'Relational pet medical records linked to client profiles',
      'Interactive appointment reservation calendar with schedule conflict detection',
    ],
    proofOfWork: 'Clinical Workflow · Patient Record Management',
    githubUrl: 'https://github.com/amy9273/itelect4-project',
    statusBadge: 'FULL-STACK WEB',
  },
  {
    id: '08',
    slug: 'fleet-dw',
    title: 'Fleet Management Data Warehouse',
    tagline: 'Star schema relational data warehouse for commercial vehicle operations.',
    tier: 2,
    category: 'Data & Full-Stack',
    primaryTech: 'SQLite · Star Schema · Analytical SQL',
    technologies: ['SQL', 'Star Schema', 'ETL', 'Analytics', 'SQLite'],
    description:
      'Analytical data warehouse featuring a central telemetry fact table and 6 dimension tables demonstrating relational schema design and complex analytical queries for vehicle utilization and fuel efficiency.',
    architectureHighlights: [
      'Central fact table capturing fuel, trips, and maintenance incidents',
      '6 dimension tables optimized for slicing, dicing, and aggregation without joins table locks',
    ],
    proofOfWork: 'Star Schema Architecture · Optimized Analytical Queries',
    githubUrl: 'https://github.com/amy9273/fleet-dw-portfolio',
    statusBadge: 'DATA WAREHOUSE',
  },
];
