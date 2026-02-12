export type Testimonial = {
  jobTitle: string;
  rating: number;
  dueDate: string;
  body: string;
};

export const testimonials: Testimonial[] = [
  {
    jobTitle: "Backend engineer for AI customer support automation",
    rating: 5,
    dueDate: "Jun 4, 2025 - Aug 28, 2025",
    body: "Abishek delivered a production-ready API stack with excellent reliability and clear architecture decisions.",
  },
  {
    jobTitle: "Full stack developer for SaaS analytics platform",
    rating: 5,
    dueDate: "Feb 10, 2025 - Apr 22, 2025",
    body: "Strong backend ownership, clean integrations, and very responsive communication throughout the project.",
  },
  {
    jobTitle: "API specialist for payment and invoicing workflows",
    rating: 5,
    dueDate: "Nov 14, 2024 - Jan 30, 2025",
    body: "Abishek designed dependable API contracts and handled complex edge cases without slowing delivery.",
  },
  {
    jobTitle: "Realtime backend development for logistics operations",
    rating: 5,
    dueDate: "Sep 2, 2024 - Oct 27, 2024",
    body: "Delivered fast, wrote maintainable code, and improved system observability significantly.",
  },
  {
    jobTitle: "AI API integration and inference orchestration",
    rating: 5,
    dueDate: "Jul 1, 2024 - Aug 16, 2024",
    body: "Excellent implementation quality with practical AI integration that worked reliably in production.",
  },
];

export const testimonialTop = testimonials.slice(0, Math.ceil(testimonials.length / 2));
export const testimonialBottom = testimonials.slice(Math.ceil(testimonials.length / 2));
