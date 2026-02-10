export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  featured: boolean;
  completedAt: string;
};

export const projects: Project[] = [
  {
    id: 'portfolio-site',
    title: 'Developer Portfolio v2',
    description:
      'A performance-focused portfolio built with Next.js, featuring dynamic sections, CMS-ready data, and motion-driven UI interactions.',
    image: '/images/projects/portfolio-v2.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example/portfolio-v2',
      caseStudy: '/case-studies/portfolio-v2',
    },
    featured: true,
    completedAt: '2025-01-18',
  },
  {
    id: 'analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    description:
      'A multi-tenant analytics dashboard with role-based access controls, customizable widgets, and real-time chart updates.',
    image: '/images/projects/analytics-dashboard.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
    links: {
      live: 'https://dashboard.example.com',
      github: 'https://github.com/example/saas-dashboard',
    },
    featured: true,
    completedAt: '2024-11-04',
  },
  {
    id: 'commerce-ui-kit',
    title: 'Commerce UI Kit',
    description:
      'A reusable component library for ecommerce teams that sped up product page delivery and standardized checkout UX patterns.',
    image: '/images/projects/commerce-ui-kit.jpg',
    tags: ['Storybook', 'TypeScript', 'Design System'],
    links: {
      github: 'https://github.com/example/commerce-ui-kit',
      caseStudy: '/case-studies/commerce-ui-kit',
    },
    featured: false,
    completedAt: '2024-07-22',
  },
];
