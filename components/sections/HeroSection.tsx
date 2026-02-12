import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import { GithubLogo, LinkedinLogo, YouTubeLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="about" className="container py-24 lg:py-40">
      <div className="mx-auto flex max-w-5xl flex-col items-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">{profile.title}</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{profile.summary}</p>
        </div>

        <div className="relative isolate mt-2 flex justify-center pb-8">
          <div className="pointer-events-none absolute -z-30 h-[21rem] w-[21rem] rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.42),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.3),transparent_45%)] blur-3xl animate-glow-pulse sm:h-[26rem] sm:w-[26rem] md:h-[30rem] md:w-[30rem]" />
          <div className="pointer-events-none absolute -z-20 h-[18.5rem] w-[18.5rem] rounded-full bg-[conic-gradient(from_0deg,rgba(34,211,238,0.28),rgba(168,85,247,0.32),rgba(251,146,60,0.3),rgba(34,211,238,0.28))] blur-2xl animate-[spin_18s_linear_infinite] sm:h-[22rem] sm:w-[22rem] md:h-[26rem] md:w-[26rem]" />

          <div className="relative grid h-[18rem] w-[18rem] place-items-center sm:h-[22rem] sm:w-[22rem] md:h-[26rem] md:w-[26rem]">
            <div className="pointer-events-none absolute h-[56%] w-[56%] rounded-full border border-white/12" />
            <div className="pointer-events-none absolute h-[66%] w-[66%] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute h-[76%] w-[76%] rounded-full border border-cyan-200/15" />
            <div className="pointer-events-none absolute h-[86%] w-[86%] rounded-full border border-violet-200/15" />
            <div className="pointer-events-none absolute h-[96%] w-[96%] rounded-full border border-amber-200/15" />
            <div className="pointer-events-none absolute h-[100%] w-[100%] rounded-full border border-dashed border-cyan-100/20 animate-[spin_65s_linear_infinite]" />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[spin_6.5s_linear_infinite]">
              <div className="relative h-[56%] w-[56%]">
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-300 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[spin_9s_linear_infinite_reverse]">
              <div className="relative h-[66%] w-[66%]">
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[spin_11s_linear_infinite]">
              <div className="relative h-[76%] w-[76%]">
                <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.9)]">
                  <span className="absolute -inset-2.5 animate-[spin_2.7s_linear_infinite]">
                    <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100/95 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  </span>
                  <span className="absolute -inset-4 animate-[spin_4.5s_linear_infinite_reverse]">
                    <span className="absolute left-1/2 top-0 h-[2px] w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-200 shadow-[0_0_8px_rgba(255,255,255,0.65)]" />
                  </span>
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[spin_14s_linear_infinite]">
              <div className="relative h-[86%] w-[86%]">
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[spin_18s_linear_infinite_reverse]">
              <div className="relative h-[96%] w-[96%]">
                <span className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/90 shadow-[0_0_18px_rgba(251,146,60,0.9)]" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[spin_23s_linear_infinite]">
              <div className="relative h-[100%] w-[100%]">
                <span className="absolute left-1/2 top-0 h-[1.125rem] w-[1.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/90 shadow-[0_0_14px_rgba(253,224,71,0.88)]">
                  <span className="absolute inset-[-2px] rounded-full border border-amber-100/70" />
                  <span className="absolute inset-[-6px] rounded-full border border-amber-200/45" />
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[spin_27s_linear_infinite_reverse]">
              <div className="relative h-[90%] w-[90%]">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/90 shadow-[0_0_12px_rgba(125,211,252,0.9)]" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[spin_31s_linear_infinite]">
              <div className="relative h-[94%] w-[94%]">
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/90 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[spin_37s_linear_infinite_reverse]">
              <div className="relative h-[102%] w-[102%]">
                <span className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-[0_0_26px_rgba(250,204,21,0.95)]" />
              </div>
            </div>

            <div className="relative rounded-full bg-gradient-to-tr from-cyan-400/85 via-violet-300/55 to-amber-300/80 p-[3px] [--bg-size:320%] animate-gradient shadow-[0_0_65px_-28px_rgba(34,211,238,0.95)]">
              <div className="rounded-full bg-background/80 p-2 backdrop-blur-xl">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} profile photo`}
                  width={900}
                  height={900}
                  priority
                  sizes="(max-width: 768px) 50vw, 250px"
                  className="aspect-square w-40 rounded-full object-cover object-top animate-avatar-float sm:w-48 md:w-56"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0)_56%,rgba(56,189,248,0.2)_72%,rgba(0,0,0,0)_78%)] animate-[spin_14s_linear_infinite]" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 -bottom-1 mx-auto w-fit rounded-full border border-cyan-200/25 bg-background/75 px-4 py-1 text-sm font-medium text-cyan-200 backdrop-blur-md">
            <span className="bg-[linear-gradient(110deg,#67e8f9_20%,#e9d5ff_50%,#fdba74_80%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
              {profile.name}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href={`mailto:${profile.email}`} target="_blank" rel="noreferrer">
            <Button
              aria-label="Hire me via email"
              className="relative overflow-hidden border border-transparent bg-white/95 text-black transition-transform duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.7)_50%,transparent_65%)] bg-[length:220%_100%] animate-shimmer" />
              <Mail />
              Hire me
            </Button>
          </Link>

          <div className="flex gap-2">
            <Link href={profile.social.github} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="icon"
                aria-label="GitHub Profile"
                className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_22px_-8px_rgba(34,211,238,0.8)]"
              >
                <GithubLogo className="size-4" />
              </Button>
            </Link>

            <Link href={profile.social.linkedin} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="icon"
                aria-label="LinkedIn Profile"
                className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_22px_-8px_rgba(196,181,253,0.9)]"
              >
                <LinkedinLogo className="size-4" />
              </Button>
            </Link>

            <Link href={profile.social.youtube} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="icon"
                aria-label="YouTube Channel"
                className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_22px_-8px_rgba(251,146,60,0.9)]"
              >
                <YouTubeLogo className="size-4 fill-current" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
