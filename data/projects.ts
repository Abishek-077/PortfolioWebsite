export type Project = {
  title: string;
  description: string;
  short: string;
  features: string[];
  technologies: string[];
  link: string;
  sourceCode: string;
};

export const allProjects: Project[] = [
  {
    title: "Kachra Alert (Cross-Platform)",
    description:
      "A cross-platform smart waste management app where one MongoDB-backed API powers both Flutter mobile and web experiences.",
    short: "/kachraalert-preview.png",
    features: [
      "Single API contract shared across mobile and web for consistent product behavior",
      "Photo-based reporting, schedule tracking, alerts, payments, and admin messaging workflows",
      "Role-based resident/admin experiences with real-time updates for operational visibility",
      "Backend services built with Node.js, Express, and MongoDB for scalable civic workflows",
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "Hive", "Node.js", "Express", "MongoDB", "Socket.IO"],
    link: "https://kachra-alert-web-swms.vercel.app/",
    sourceCode: "https://github.com/Abishek-077/KachraAlert-Mobile",
  },
  {
    title: "ABI's AI Insights Platform",
    description:
      "A backend-focused AI publishing SaaS with multi-tenant workspaces, RBAC, and production-style API architecture.",
    short: "/backend-ai-cover.svg",
    features: [
      "Secure organization/workspace scoping with auth and role-based access control",
      "Draft-review-publish editorial workflow with audit logs and analytics endpoints",
      "Billing and webhook flows for SaaS-grade account lifecycle management",
      "Containerized deployment setup with environment validation, health checks, and migration automation",
    ],
    technologies: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "MongoDB", "Docker", "Python"],
    link: "https://ai-blog-newa.vercel.app/",
    sourceCode: "https://github.com/Abishek-077/BlogWebsite",
  },
  {
    title: "Kachra Alert Mobile + Web",
    description:
      "A cross-platform smart waste app for Android and web, built on a shared API-first backend with MongoDB for synced operations.",
    short: "/kachraalert-mobile-preview.png",
    features: [
      "One backend API powers both mobile and web clients for consistent features and data",
      "Residents can submit reports, track statuses, view schedules, and receive service alerts",
      "Admin workflows for moderation, assignments, and user management in real time",
      "MongoDB-backed service architecture optimized for cross-platform delivery",
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "Node.js", "Express", "MongoDB", "Socket.IO"],
    link: "https://github.com/Abishek-077/KachraAlert-Mobile.git",
    sourceCode: "https://github.com/Abishek-077/KachraAlert-Mobile.git",
  },
  {
    title: "Lost & Found Service App",
    description:
      "A cross-platform lost-and-found solution with Flutter Android UI and an API-first Node.js + TypeScript backend using MongoDB.",
    short: "/image.png",
    features: [
      "Clean architecture backend with clear domain, service, and infrastructure separation",
      "Flutter Android experience for posting lost/found items, claim requests, and status tracking",
      "Node.js + TypeScript API layer with auth-ready workflows and modular endpoint design",
      "MongoDB data model for items, claim history, and synchronized updates across clients",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "TypeScript", "Express", "MongoDB", "JWT"],
    link: "",
    sourceCode: "https://github.com/Abishek-077",
  },
  {
    title: "Realtime Fleet Backend",
    description:
      "A geo-aware backend platform for live shipment tracking, route monitoring, and SLA alerting.",
    short: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    features: [
      "WebSocket streams for vehicle location updates",
      "Event-driven architecture for dispatch and ETA events",
      "Rate-limited public APIs for partner integrations",
      "Observability with traces, logs, and custom metrics",
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    link: "https://example.com/projects/realtime-fleet-backend",
    sourceCode: "https://github.com/Abishek-077/realtime-fleet-backend",
  },
  {
    title: "DevOps Command Center",
    description:
      "A full-stack operations portal that unifies deployment status, incident timelines, and runbook automation.",
    short: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    features: [
      "Deployment health board with environment rollup views",
      "Automated incident timelines from service logs",
      "Workflow actions to restart services and run standard playbooks",
      "Secure admin controls with least-privilege policies",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "GitHub Actions", "Nginx", "AWS"],
    link: "https://example.com/projects/devops-command-center",
    sourceCode: "https://github.com/Abishek-077/devops-command-center",
  },
];

export const featuredProjects = allProjects.slice(0, 3);
