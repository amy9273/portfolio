export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  tier: 1 | 2;
  category: 'Backend' | 'Queues' | 'Mobile & 3D' | 'Data & Web';
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
    tagline: 'A multi-tenant billing backend built with Java and Spring Boot.',
    tier: 1,
    category: 'Backend',
    technologies: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'Testcontainers', 'JUnit 5'],
    description:
      'I built this project to learn how multi-tenant databases and subscription lifecycles work in practice. It routes database connections based on organization schemas, uses pessimistic locking to prevent race conditions during invoice generation, and manages database updates automatically with Flyway.',
    architectureHighlights: [
      'Schema-per-tenant isolation using Spring Boot and Hibernate connection routing',
      'Pessimistic database locking to prevent duplicate invoices during concurrent renewals',
      'Flyway migration scripts for automated database schema updates',
      '40 unit and integration tests written with JUnit and Testcontainers',
    ],
    proofOfWork: '40 automated tests · Testcontainers integration',
    githubUrl: 'https://github.com/amy9273/b2b-saas-billing',
    statusBadge: 'Java / Spring Boot',
  },
  {
    id: '02',
    slug: 'incident-pulse',
    title: 'IncidentPulse',
    tagline: 'An on-call alerting service with Redis delayed queues and real-time updates.',
    tier: 1,
    category: 'Queues',
    technologies: ['TypeScript', 'Express', 'Redis BullMQ', 'WebSockets', 'Next.js 15', 'Flutter'],
    description:
      'An incident alerting application built to notify team members when system issues happen. I used Redis BullMQ delayed queues to handle alert escalations—if an alert is not acknowledged within a given time, it automatically moves to the next tier of responders.',
    architectureHighlights: [
      'Redis BullMQ delayed jobs to automate multi-tier alert escalation',
      'WebSocket connection to broadcast incident status updates to connected clients',
      'Dead-letter queue handling for failed jobs and retries',
      'Companion Flutter mobile app to acknowledge alerts on the go',
    ],
    proofOfWork: 'Delayed queues · WebSocket updates',
    githubUrl: 'https://github.com/amy9273/incident-pulse',
    statusBadge: 'Node.js / Redis',
  },
  {
    id: '03',
    slug: 'api-rate-limiter',
    title: 'API Rate Limiter',
    tagline: 'A reverse proxy and rate limiter exploring Java 21 Virtual Threads.',
    tier: 1,
    category: 'Backend',
    technologies: ['Java 21', 'Virtual Threads', 'AtomicLong', 'Redis', 'Prometheus', 'RFC 6585'],
    description:
      'An experiment testing how Java 21 Virtual Threads (Project Loom) handle concurrent requests compared to traditional platform threads. It implements a token bucket algorithm to limit incoming requests and returns standard rate-limiting HTTP headers.',
    architectureHighlights: [
      'Built with Java 21 Virtual Threads for lightweight concurrent request handling',
      'Token bucket rate limiting using AtomicLong to track request counts without heavy locking',
      'Sliding window log fallback for managing burst traffic',
      'Standard HTTP 429 responses with RateLimit and Retry-After headers',
    ],
    proofOfWork: 'Token bucket algorithm · Standard 429 headers',
    githubUrl: 'https://github.com/amy9273/api-rate-limiter',
    statusBadge: 'Java 21 / Concurrency',
  },
  {
    id: '04',
    slug: 'kamunica',
    title: 'Kamunica — Filipino Sign Language Platform',
    tagline: 'A sign language learning app featuring a 3D animated avatar and gesture recognition.',
    tier: 1,
    category: 'Mobile & 3D',
    technologies: ['Flutter', 'Three.js', 'WebGL', 'Blender', 'Python', 'Computer Vision'],
    description:
      'A collaborative capstone project aimed at making Filipino Sign Language (FSL) more accessible. I worked on integrating a 3D avatar that demonstrates sign gestures in WebGL and Flutter, paired with speech-to-text input and computer vision gesture detection.',
    architectureHighlights: [
      '3D animated avatar rendering sign language gestures in WebGL and Flutter',
      'Speech-to-text input paired with sign vocabulary lookup',
      'Python hand-sign recognition model integration for practice feedback',
      'Mobile-first layout designed for student accessibility',
    ],
    proofOfWork: 'Capstone project · 3D WebGL avatar integration',
    githubUrl: 'https://github.com/amy9273/fsl-handsign-recognition',
    liveUrl: 'https://kamunica-landing.onrender.com',
    statusBadge: 'Flutter / 3D WebGL',
  },
];

export const SECONDARY_PROJECTS: ProjectItem[] = [
  {
    id: '05',
    slug: 'malaya',
    title: 'Malaya — Webtoon Reader',
    tagline: 'A simple continuous-scroll reader for manga and manhwa.',
    tier: 2,
    category: 'Data & Web',
    technologies: ['Next.js 15 PWA', 'TypeScript', 'Supabase', 'MangaDex API', 'Tailwind CSS'],
    description:
      'A personal project born from my habit of reading manhwa. I built a mobile-friendly web app with a continuous vertical reading strip, connecting to the MangaDex API and using Supabase to save reading history.',
    architectureHighlights: [
      'Continuous vertical scroll reader designed for comfortable reading on mobile',
      'Image proxy route handler to fetch chapter pages cleanly',
      'Supabase database and authentication to save bookmarks and reading history',
    ],
    proofOfWork: 'Automated test suite · Mobile PWA',
    githubUrl: 'https://github.com/amy9273/malaya',
    liveUrl: 'https://malaya-brown.vercel.app',
    statusBadge: 'Next.js 15 / PWA',
  },
  {
    id: '06',
    slug: 'gala-ph',
    title: 'Gala PH — Road Trip Toll & Expense Splitter',
    tagline: 'A mobile utility to estimate Philippine expressway tolls and split group expenses.',
    tier: 2,
    category: 'Mobile & 3D',
    technologies: ['React Native', 'TypeScript', 'Tailwind CSS'],
    description:
      'A React Native app built to solve a common problem on road trips with friends: calculating toll fees for both Autosweep and Easytrip expressways, and simplifying who owes whom at the end of the trip.',
    architectureHighlights: [
      'Toll fee calculator for SLEX, NLEX, SCTEX, and TPLEX routes',
      'Simple debt settlement calculation to minimize the number of repayments',
    ],
    proofOfWork: 'Toll fee calculation · Debt simplification',
    githubUrl: 'https://github.com/amy9273/gala-ph',
    statusBadge: 'React Native',
  },
  {
    id: '07',
    slug: 'vetcare',
    title: 'VetCare Clinic Management',
    tagline: 'A veterinary clinic management system built for a coursework project.',
    tier: 2,
    category: 'Data & Web',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'REST API'],
    description:
      'A full-stack web application designed for a veterinary clinic. Allows clinic staff to manage pet patient records, schedule appointments, and log treatment notes.',
    architectureHighlights: [
      'Pet medical history and owner profiles stored in a relational database',
      'Appointment booking calendar with basic conflict checks',
    ],
    proofOfWork: 'Clinic records · Appointment booking',
    githubUrl: 'https://github.com/amy9273/itelect4-project',
    statusBadge: 'React / REST API',
  },
  {
    id: '08',
    slug: 'fleet-dw',
    title: 'Fleet Analytics Database',
    tagline: 'A star-schema database project analyzing vehicle maintenance and trip data.',
    tier: 2,
    category: 'Data & Web',
    technologies: ['SQL', 'Star Schema', 'SQLite', 'Data Modeling'],
    description:
      'An academic database project using a star schema. Designed a central fact table for vehicle trips and linked dimension tables to query fuel consumption and maintenance records.',
    architectureHighlights: [
      'Star schema design with fact and dimension tables',
      'SQL analytical queries for vehicle utilization and cost tracking',
    ],
    proofOfWork: 'Star schema design · SQL queries',
    githubUrl: 'https://github.com/amy9273/fleet-dw-portfolio',
    statusBadge: 'SQL / Star Schema',
  },
];
