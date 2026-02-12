import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="container py-16">
      <h1 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">All My Projects</h1>
      <ProjectShowcase projects={allProjects} />
    </section>
  );
}
