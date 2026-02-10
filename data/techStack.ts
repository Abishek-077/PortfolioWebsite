export type TechStackItem = {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Infrastructure' | 'Design' | 'Tooling';
  icon: string;
  proficiency: 'Advanced' | 'Intermediate' | 'Working Knowledge';
  years: number;
  website: string;
};

export const techStack: TechStackItem[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    icon: '/images/tech/typescript.svg',
    proficiency: 'Advanced',
    years: 5,
    website: 'https://www.typescriptlang.org/',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    icon: '/images/tech/nextjs.svg',
    proficiency: 'Advanced',
    years: 4,
    website: 'https://nextjs.org/',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    icon: '/images/tech/nodejs.svg',
    proficiency: 'Advanced',
    years: 5,
    website: 'https://nodejs.org/',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Backend',
    icon: '/images/tech/postgresql.svg',
    proficiency: 'Intermediate',
    years: 3,
    website: 'https://www.postgresql.org/',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    icon: '/images/tech/figma.svg',
    proficiency: 'Advanced',
    years: 4,
    website: 'https://www.figma.com/',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Infrastructure',
    icon: '/images/tech/docker.svg',
    proficiency: 'Intermediate',
    years: 3,
    website: 'https://www.docker.com/',
  },
];
