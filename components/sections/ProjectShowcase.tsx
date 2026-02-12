import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";

import { GithubLogo } from "@/components/icons";
import { AutoPlayVideo } from "@/components/ui/auto-play-video";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-28">
      {projects.map((project) => {
        const isVideoPreview = /\.(mp4|webm|ogg)$/i.test(project.short);
        const normalizedLiveLink = project.link?.trim() || "";
        const normalizedSource = project.sourceCode?.trim() || "";
        const hasLiveDemo = Boolean(normalizedLiveLink) && normalizedLiveLink !== normalizedSource;
        const liveDemoLabel = project.link.includes("vercel.app") ? "Vercel Live Demo" : "Live Demo";
        const isAbiInsights = project.title === "ABI's AI Insights Platform";
        const isKachraProject = project.title.toLowerCase().includes("kachra alert");

        return (
          <div key={project.title} className="flex flex-col justify-center gap-10 lg:flex-row">
            <section className="lg:w-1/2">
              {isVideoPreview ? (
                <AutoPlayVideo src={project.short} />
              ) : (
                <div
                  className={cn(
                    "group relative isolate overflow-hidden rounded-3xl border p-2 shadow-xl",
                    isAbiInsights
                      ? "border-cyan-300/45 bg-gradient-to-br from-[#020814] via-[#041028] to-[#041631] shadow-[0_24px_90px_rgba(14,165,233,0.3)] motion-safe:animate-abi-float"
                      : isKachraProject
                        ? "border-cyan-300/50 bg-[radial-gradient(circle_at_18%_14%,rgba(20,184,166,0.38),rgba(3,14,30,0.95)_40%),radial-gradient(circle_at_82%_86%,rgba(56,189,248,0.26),rgba(3,13,28,0.95)_42%)] shadow-[0_25px_95px_rgba(6,182,212,0.32)] motion-safe:animate-kachra-float"
                        : "border-emerald-200/70 bg-gradient-to-br from-emerald-100/70 via-white to-cyan-100/70 shadow-emerald-100/50 motion-safe:animate-avatar-float",
                  )}
                >
                  {isAbiInsights ? (
                    <>
                      <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_22%_10%,rgba(56,189,248,0.45),transparent_44%),radial-gradient(circle_at_86%_88%,rgba(34,211,238,0.32),transparent_42%)] blur-3xl motion-safe:animate-abi-aura" />
                      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-200/25 motion-safe:animate-abi-aura" />
                    </>
                  ) : isKachraProject ? (
                    <>
                      <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.5),transparent_44%),radial-gradient(circle_at_85%_85%,rgba(56,189,248,0.38),transparent_42%)] blur-3xl motion-safe:animate-kachra-aura" />
                      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-200/35 motion-safe:animate-kachra-aura" />
                      <div className="pointer-events-none absolute -left-8 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border border-cyan-300/30 bg-cyan-400/15 blur-[1px] motion-safe:animate-kachra-orbit" />
                      <div className="pointer-events-none absolute -right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-teal-200/35 bg-teal-300/10 blur-[1px] motion-safe:animate-kachra-orbit-reverse" />
                    </>
                  ) : null}
                  <div
                    className={cn(
                      "relative aspect-[16/10] overflow-hidden rounded-[1.15rem]",
                      isAbiInsights && "border border-cyan-300/25 bg-[#020917]",
                      isKachraProject && "border border-cyan-200/35 bg-[#021529]",
                    )}
                  >
                    <Image
                      src={project.short}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={cn(
                        "object-cover object-top transition-transform duration-700",
                        isAbiInsights
                          ? "motion-safe:animate-abi-pan"
                          : isKachraProject
                            ? "motion-safe:animate-kachra-pan"
                            : "group-hover:scale-105",
                      )}
                    />
                    {isAbiInsights ? (
                      <>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#010611]/85 via-transparent to-[#031125]/40" />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.16)_1px,transparent_1px)] bg-[size:100%_7px] opacity-30" />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(56,189,248,0.18)_38%,rgba(103,232,249,0.28)_50%,rgba(56,189,248,0.16)_62%,transparent_100%)] bg-[length:230%_100%] mix-blend-screen motion-safe:animate-abi-sheen" />
                        <div className="pointer-events-none absolute inset-0 motion-safe:animate-abi-scan-vertical">
                          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-100/80 to-transparent blur-[1px]" />
                        </div>
                        <div className="pointer-events-none absolute inset-0 motion-safe:animate-abi-scan-vertical [animation-delay:2.2s]">
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent blur-[1px]" />
                        </div>
                      </>
                    ) : isKachraProject ? (
                      <>
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(45,212,191,0.16)_1px,transparent_1px)] bg-[size:100%_8px] opacity-25" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(45,212,191,0.24),transparent_38%),radial-gradient(circle_at_86%_22%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_50%_86%,rgba(99,102,241,0.2),transparent_36%)] motion-safe:animate-kachra-shift" />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(110,231,255,0.25)_45%,transparent_72%)] bg-[length:230%_100%] mix-blend-screen motion-safe:animate-kachra-sheen" />
                        <div className="pointer-events-none absolute inset-0 motion-safe:animate-kachra-scan">
                          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-100/85 to-transparent blur-[1px]" />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020716]/70 via-transparent to-[#0f172a]/20" />
                      </>
                    ) : (
                      <>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/25 via-transparent to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/30 blur-xl transition-all duration-1000 group-hover:left-[120%]" />
                      </>
                    )}
                  </div>
                  {isAbiInsights ? (
                    <>
                      <div className="pointer-events-none absolute -right-12 -top-10 h-36 w-36 rounded-full bg-cyan-400/34 blur-3xl motion-safe:animate-abi-aura" />
                      <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-sky-400/26 blur-3xl motion-safe:animate-abi-aura [animation-delay:1.2s]" />
                    </>
                  ) : isKachraProject ? (
                    <>
                      <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-cyan-300/35 blur-3xl motion-safe:animate-kachra-aura" />
                      <div className="pointer-events-none absolute -bottom-14 -left-14 h-48 w-48 rounded-full bg-teal-300/25 blur-3xl motion-safe:animate-kachra-aura [animation-delay:1.1s]" />
                    </>
                  ) : (
                    <>
                      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-300/55 blur-2xl motion-safe:animate-glow-pulse" />
                      <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-cyan-300/55 blur-2xl motion-safe:animate-glow-pulse [animation-delay:1.2s]" />
                    </>
                  )}
                </div>
              )}
            </section>

            <section className="flex gap-4 pt-3 lg:w-1/2">
              <div className="hidden md:block">
                <Sparkles className="mt-1 h-8 w-8 text-amber-400 lg:h-10 lg:w-10" />
              </div>

              <div className="space-y-4 lg:space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold lg:text-4xl">{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="space-y-4">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-1 text-sm text-muted-foreground">
                        <span className="text-amber-400">*</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="outline"
                        className="px-4 py-2 text-xs transition-opacity hover:opacity-90"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {hasLiveDemo && (
                    <Link href={project.link} target="_blank" rel="noreferrer" className="w-full lg:w-fit">
                      <Button className="w-full lg:w-fit">
                        <ExternalLink />
                        {liveDemoLabel}
                      </Button>
                    </Link>
                  )}

                  <Link href={project.sourceCode || "#"} target="_blank" rel="noreferrer" className="w-full lg:w-fit">
                    <Button variant="outline" className="w-full lg:w-fit">
                      <GithubLogo className="size-4" />
                      View Code
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
