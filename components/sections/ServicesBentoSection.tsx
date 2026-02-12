"use client";

import * as React from "react";

import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { AnimatedList } from "@/components/magicui/animated-list";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { CssLogo, FigmaLogo, GithubLogo, HtmlLogo, JavascriptLogo, UserIconLogo } from "@/components/icons";
import { cleanCodeTips, serviceTickerItems } from "@/data/services";
import { cn } from "@/lib/utils";

function NotificationCard({ name, description }: { name: string; description: string }) {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
}

function ServicesBackground({ className }: { className?: string }) {
  const items = Array.from({ length: 25 }, () => serviceTickerItems).flat();

  return (
    <div className={cn("relative flex h-[500px] w-full flex-col overflow-hidden p-2", className)}>
      <AnimatedList delay={2500}>
        {items.map((item, index) => (
          <NotificationCard key={`${item.name}-${index}`} {...item} />
        ))}
      </AnimatedList>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
    </div>
  );
}

function Circle({ className, children, refProp }: { className?: string; children: React.ReactNode; refProp?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={refProp}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ConvertingBackground({ className }: { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const htmlRef = React.useRef<HTMLDivElement>(null);
  const cssRef = React.useRef<HTMLDivElement>(null);
  const jsRef = React.useRef<HTMLDivElement>(null);
  const githubRef = React.useRef<HTMLDivElement>(null);
  const figmaRef = React.useRef<HTMLDivElement>(null);
  const userRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle refProp={userRef}>
            <UserIconLogo />
          </Circle>
        </div>

        <div className="flex flex-col justify-center">
          <Circle refProp={figmaRef} className="size-14 bg-transparent">
            <FigmaLogo />
          </Circle>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <Circle refProp={htmlRef}>
            <HtmlLogo />
          </Circle>
          <Circle refProp={cssRef}>
            <CssLogo />
          </Circle>
          <Circle refProp={jsRef}>
            <JavascriptLogo />
          </Circle>
          <Circle refProp={githubRef}>
            <GithubLogo />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={htmlRef} toRef={figmaRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={cssRef} toRef={figmaRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={jsRef} toRef={figmaRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={githubRef} toRef={figmaRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={figmaRef} toRef={userRef} duration={3} />
    </div>
  );
}

function CleanCodeBackground({ className }: { className?: string }) {
  return (
    <Marquee
      vertical
      pauseOnHover={false}
      className={cn(
        "absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]",
        className,
      )}
    >
      {cleanCodeTips.map((tip, index) => (
        <figure
          key={`${tip.name}-${index}`}
          className={cn(
            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">{tip.name}</figcaption>
            </div>
          </div>
          <blockquote className="mt-2 text-xs">{tip.body}</blockquote>
        </figure>
      ))}
    </Marquee>
  );
}

const bentoItems = [
  {
    name: "Services",
    description: "developing professional responsive websites, Landing pages, and web applications.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <ServicesBackground className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    name: "Converting",
    description: "Converting design files (Figma, XD, Sketch, and PSD) into pixel-perfect.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <ConvertingBackground className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    name: "Clean Code",
    description: "Writing maintainable, efficient, and scalable code following best practices.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <CleanCodeBackground />,
  },
];

export function ServicesBentoSection() {
  return (
    <section className="container pb-24">
      <BentoGrid>
        {bentoItems.map((item, index) => (
          <BentoCard key={`${item.name}-${index}`} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}
