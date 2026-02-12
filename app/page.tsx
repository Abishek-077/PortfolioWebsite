import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Particles } from "@/components/magicui/particles";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { RecentBlogSection } from "@/components/sections/RecentBlogSection";
import { ServicesBentoSection } from "@/components/sections/ServicesBentoSection";
import { TechnologyStackSection } from "@/components/sections/TechnologyStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="relative z-10">
      <Particles className="pointer-events-none fixed inset-0 z-0" quantity={150} ease={80} refresh color="#ffffff" />
      <HeroSection />
      <ServicesBentoSection />
      <TechnologyStackSection />

      <section className="container py-12 md:py-24">
        <div className="mb-12 flex justify-between">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latset Projects</h2>
          <Link href="/projects" aria-label="See all projects">
            <Button variant="outline" className="ml-0.5">
              All Projects
              <ExternalLink className="size-4" />
            </Button>
          </Link>
        </div>
        <ProjectShowcase projects={featuredProjects} />
      </section>

      <TestimonialsSection />
      <RecentBlogSection />
    </main>
  );
}
