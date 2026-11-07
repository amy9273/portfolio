export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  tier: 1 | 2;
  category: 'Backend' | 'Queues' | 'Mobile & 3D' | 'Data & Web' | 'Full-Stack';
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
    slug: 'malaya',
    title: 'Malaya — Manga & Manhwa Reader',
    tagline: 'A personal reading web application connecting to external comic APIs.',
    tier: 1,
    category: 'Data & Web',
    technologies: ['Next.js 15 PWA', 'TypeScript', 'Supabase', 'Tailwind CSS', 'External APIs'],
    description:
      'Malaya is a personal manga and manhwa reading web application. It fetches available titles and chapter content from external APIs (including Asura and MangaBuddy) and presents them through a clean, continuous-scroll reading interface. It is a personal project—I do not host or store the manga chapters myself.',
    architectureHighlights: [
      'Continuous vertical scroll reading layout designed for comfortable reading on desktop and mobile',
      'Image proxy route handler to fetch chapter panels cleanly while preventing cross-origin issues',
      'Supabase PostgreSQL database and authentication for bookmarking and reading progress syncing',
      'Mobile-first PWA with offline caching and clean navigation',
    ],
    proofOfWork: 'Personal reading PWA · External API integration',
    githubUrl: 'https://github.com/amy9273/malaya',
    liveUrl: 'https://malaya-brown.vercel.app',
    statusBadge: 'Featured · Next.js 15 PWA',
  },
  {
    id: '02',
    slug: 'b2b-saas-billing',
    title: 'Enterprise B2B SaaS Billing & Invoicing Engine',
    tagline: 'A multi-tenant billing backend built with Java, Spring Boot, and PostgreSQL.',
    tier: 1,
    category: 'Backend',
    technologies: ['Java 21', 'Spring Boot 3.3', 'PostgreSQL', 'Flyway', 'Testcontainers', 'JUnit 5'],
    description:
      'A backend project built with Java and Spring Boot. It handles tenant-based access, subscription management, invoice generation, and billing-related operations using PostgreSQL. It routes connections dynamically per tenant schema and uses pessimistic locking to prevent race conditions during invoice renewals.',
    architectureHighlights: [
      'Schema-per-tenant isolation using Spring Boot and Hibernate connection routing',
      'Pessimistic database locking (PESSIMISTIC_WRITE) to prevent race conditions during concurrent renewals',
      'Flyway migration scripts for automated shared and tenant database schema updates',
      '40 unit and integration tests written with JUnit 5 and Testcontainers',
    ],
    proofOfWork: '40 automated tests · Testcontainers integration',
    githubUrl: 'https://github.com/amy9273/b2b-saas-billing',
    statusBadge: 'Java 21 / Spring Boot',
  },
  {
    id: '03',
    slug: 'incident-pulse',
    title: 'IncidentPulse — Incident Management Service',
    tagline: 'An incident management application with delayed queues and real-time alerts.',
    tier: 1,
    category: 'Queues',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Redis BullMQ', 'WebSockets', 'Next.js 15', 'Flutter'],
    description:
      'An incident management application built with TypeScript and Node.js. It includes backend services, a web dashboard, and mobile application features. It uses Redis BullMQ delayed queues to manage alert escalation if an incident goes unacknowledged, and broadcasts status updates via WebSockets.',
    architectureHighlights: [
      'Redis BullMQ delayed jobs to automate multi-tier alert escalation',
      'WebSocket connection to broadcast incident status updates to connected clients',
      'Dead-letter queue handling for failed jobs and retries',
      'Companion Flutter mobile app to view and acknowledge alerts on the go',
    ],
    proofOfWork: 'Delayed queues · WebSocket updates',
    githubUrl: 'https://github.com/amy9273/incident-pulse',
    statusBadge: 'Node.js / Redis',
  },
  {
    id: '04',
    slug: 'api-rate-limiter',
    title: 'API Rate Limiter & Reverse Proxy',
    tagline: 'A Java-based reverse proxy focused on controlling request rates and concurrency.',
    tier: 1,
    category: 'Backend',
    technologies: ['Java 21', 'Virtual Threads', 'Token Bucket', 'AtomicLong', 'Redis', 'RFC 6585'],
    description:
      'A Java-based project focused on controlling API request rates and handling concurrent requests. Built with Java 21 Virtual Threads (Project Loom) and a lock-free token bucket algorithm to enforce per-client quotas and return standard HTTP 429 headers.',
    architectureHighlights: [
      'Built with Java 21 Virtual Threads for lightweight concurrent request handling',
      'Token bucket rate limiting using AtomicLong to track request counts without mutex locks',
      'Sliding window log fallback for managing burst traffic',
      'Standard HTTP 429 responses with RateLimit and Retry-After headers',
    ],
    proofOfWork: 'Token bucket algorithm · Standard 429 headers',
    githubUrl: 'https://github.com/amy9273/api-rate-limiter',
    statusBadge: 'Java 21 / Concurrency',
  },
  {
    id: '05',
    slug: 'kamunica',
    title: 'Kamunica — Filipino Sign Language Platform',
    tagline: 'A mobile learning app for Filipino Sign Language with a 3D animated avatar.',
    tier: 1,
    category: 'Mobile & 3D',
    technologies: ['Flutter', 'Firebase Firestore', 'Three.js', 'WebGL', 'Blender', 'Python', 'Computer Vision'],
    description:
      'A mobile learning application for Filipino Sign Language developed as an academic capstone. It uses Flutter and a 3D animated avatar to help learners study and practice FSL, paired with vocabulary lookup and Python computer vision gesture detection.',
    architectureHighlights: [
      '3D animated avatar rendering sign language gestures in WebGL and Flutter',
      'Speech-to-text input paired with sign vocabulary lookup',
      'Python hand-sign recognition model integration for practice feedback',
      'Mobile-first layout designed for student accessibility with Firebase Firestore storage',
    ],
    proofOfWork: 'Capstone project · 3D WebGL avatar integration',
    githubUrl: 'https://github.com/amy9273/fsl-handsign-recognition',
    liveUrl: 'https://kamunica-landing.onrender.com',
    statusBadge: 'Flutter / 3D Avatar',
  },
  {
    id: '06',
    slug: 'vetcare',
    title: 'VetCare — Clinic Management System',
    tagline: 'A full-stack veterinary clinic management application with MongoDB and authentication.',
    tier: 1,
    category: 'Full-Stack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    description:
      'A full-stack veterinary clinic management application built with React, TypeScript, Node.js, Express, and MongoDB. It includes authentication, pet patient record management, appointment scheduling, and treatment note logging for clinic staff.',
    architectureHighlights: [
      'Pet medical history and owner profiles stored in MongoDB with Mongoose schemas',
      'JWT-based authentication and role-based route protection for clinic staff',
      'Appointment booking calendar with automated conflict prevention',
      'RESTful API endpoints for managing patient records and treatment notes',
    ],
    proofOfWork: 'Full-stack CRUD · MongoDB & JWT Auth',
    githubUrl: 'https://github.com/amy9273/itelect4-project',
    statusBadge: 'React / Node.js / MongoDB',
  },
];

export const SECONDARY_PROJECTS: ProjectItem[] = [
  {
    id: '07',
    slug: 'gala-ph',
    title: 'Gala PH — Road Trip Toll & Expense Splitter',
    tagline: 'A mobile utility to estimate Philippine expressway tolls and split group expenses.',
    tier: 2,
    category: 'Mobile & 3D',
    technologies: ['React Native', 'TypeScript', 'Tailwind CSS'],
    description:
      'A React Native app built to solve a practical problem on road trips with friends: calculating toll fees across Philippine expressways (SLEX, NLEX, SCTEX, TPLEX) and simplifying who owes whom at the end of the trip.',
    architectureHighlights: [
      'Toll fee calculator for SLEX, NLEX, SCTEX, and TPLEX routes',
      'Simple debt settlement calculation to minimize the number of repayments',
    ],
    proofOfWork: 'Toll fee calculation · Debt simplification',
    githubUrl: 'https://github.com/amy9273/gala-ph',
    statusBadge: 'React Native',
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
      'An academic database project using a star schema. Designed a central fact table for vehicle trips and linked dimension tables to query fuel consumption, mileage, and maintenance records.',
    architectureHighlights: [
      'Star schema design with fact and dimension tables',
      'SQL analytical queries for vehicle utilization and cost tracking',
    ],
    proofOfWork: 'Star schema design · SQL queries',
    githubUrl: 'https://github.com/amy9273/fleet-dw-portfolio',
    statusBadge: 'SQL / Star Schema',
  },
];
