import Image from "next/image";

import { Marquee } from "@/components/magicui/marquee";
import { primaryTechStack, secondaryTechStack, type TechStackItem } from "@/data/techStack";

function StackRow({ items }: { items: TechStackItem[] }) {
  return (
    <>
      <Marquee className="py-6" pauseOnHover={false}>
        <div className="flex gap-8">
          {items.map((item) => (
            <div key={item.slug} className="group relative text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border bg-gradient-to-b p-6 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <Image src={item.icon} alt={`${item.name} logo`} width={55} height={55} sizes="55px" loading="lazy" />
              </div>
              <span className="whitespace-nowrap text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </>
  );
}

export function TechnologyStackSection() {
  return (
    <section className="container" id="technology-stack">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl">Technology Stack</h2>
      <div className="relative">
        <StackRow items={primaryTechStack} />
        <StackRow items={secondaryTechStack} />
      </div>
    </section>
  );
}
