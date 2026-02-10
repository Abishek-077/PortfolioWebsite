export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  project: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'maria-chen',
    name: 'Maria Chen',
    role: 'Product Manager',
    company: 'Lumen Labs',
    avatar: '/images/testimonials/maria-chen.jpg',
    quote:
      'Our redesign launched two weeks early thanks to the thoughtful component architecture and proactive communication.',
    project: 'SaaS Analytics Dashboard',
    date: '2024-12-15',
  },
  {
    id: 'daniel-ramos',
    name: 'Daniel Ramos',
    role: 'Founder',
    company: 'Northline Studio',
    avatar: '/images/testimonials/daniel-ramos.jpg',
    quote:
      'The new portfolio experience instantly made our brand feel premium. We saw a major increase in qualified inquiries.',
    project: 'Developer Portfolio v2',
    date: '2025-01-30',
  },
  {
    id: 'aisha-khan',
    name: 'Aisha Khan',
    role: 'Engineering Lead',
    company: 'Cartcraft',
    avatar: '/images/testimonials/aisha-khan.jpg',
    quote:
      'The design system work was exceptional—clean APIs, strong documentation, and effortless onboarding for our team.',
    project: 'Commerce UI Kit',
    date: '2024-08-11',
  },
];
