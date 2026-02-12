export type TechStackItem = {
  name: string;
  slug: string;
  icon: string;
};

export const primaryTechStack: TechStackItem[] = [
  { name: "HTML5", slug: "html5", icon: "/tech/html5.svg" },
  { name: "CSS", slug: "css", icon: "/tech/css.svg" },
  { name: "JavaScript", slug: "javascript", icon: "/tech/javascript.svg" },
  { name: "TypeScript", slug: "typescript", icon: "/tech/typescript.svg" },
  { name: "React", slug: "react", icon: "/tech/react.svg" },
  { name: "Next.js", slug: "nextjs", icon: "/tech/nextjs.svg" },
  { name: "Tailwind CSS", slug: "tailwindcss", icon: "/tech/tailwindcss.svg" },
  { name: "Node.js", slug: "nodejs", icon: "/tech/nodejs.svg" },
  { name: "Express", slug: "express", icon: "/tech/express.svg" },
  { name: "NestJS", slug: "nestjs", icon: "/tech/nestjs.svg" },
  { name: "Python", slug: "python", icon: "/tech/python.svg" },
  { name: "FastAPI", slug: "fastapi", icon: "/tech/fastapi.svg" },
];

export const secondaryTechStack: TechStackItem[] = [
  { name: "PostgreSQL", slug: "postgresql", icon: "/tech/postgresql.svg" },
  { name: "MongoDB", slug: "mongodb", icon: "/tech/mongodb.svg" },
  { name: "Redis", slug: "redis", icon: "/tech/redis.svg" },
  { name: "Prisma", slug: "prisma", icon: "/tech/prisma.svg" },
  { name: "Docker", slug: "docker", icon: "/tech/docker.svg" },
  { name: "Git", slug: "git", icon: "/tech/git.svg" },
  { name: "GitHub Actions", slug: "githubactions", icon: "/tech/githubactions.svg" },
  { name: "Nginx", slug: "nginx", icon: "/tech/nginx.svg" },
  { name: "AWS", slug: "aws", icon: "/tech/aws.svg" },
  { name: "OpenAI", slug: "openai", icon: "/tech/openai.svg" },
  { name: "Hugging Face", slug: "huggingface", icon: "/tech/huggingface.svg" },
  { name: "Postman", slug: "postman", icon: "/tech/postman.svg" },
];
