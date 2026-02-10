export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  slug: string;
  publishedAt: string;
  readTimeMinutes: number;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'designing-for-performance',
    title: 'Designing for Performance Without Sacrificing UX',
    excerpt:
      'A practical breakdown of how to keep interfaces expressive while preserving excellent Core Web Vitals.',
    coverImage: '/images/blog/designing-for-performance.jpg',
    tags: ['Performance', 'UX', 'Web Vitals'],
    slug: '/blog/designing-for-performance',
    publishedAt: '2025-01-12',
    readTimeMinutes: 7,
  },
  {
    id: 'scalable-component-architecture',
    title: 'Scalable Component Architecture in TypeScript',
    excerpt:
      'Patterns for building resilient UI components that remain flexible as product complexity grows.',
    coverImage: '/images/blog/scalable-component-architecture.jpg',
    tags: ['TypeScript', 'Architecture', 'React'],
    slug: '/blog/scalable-component-architecture',
    publishedAt: '2024-12-01',
    readTimeMinutes: 9,
  },
  {
    id: 'motion-system-primer',
    title: 'A Motion System Primer for Product Teams',
    excerpt:
      'How to introduce meaningful animations that improve clarity, delight users, and support brand identity.',
    coverImage: '/images/blog/motion-system-primer.jpg',
    tags: ['Motion', 'Design Systems', 'Front-end'],
    slug: '/blog/motion-system-primer',
    publishedAt: '2024-10-19',
    readTimeMinutes: 6,
  },
];
