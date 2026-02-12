"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GithubLogo, LinkedinLogo, YouTubeLogo } from "@/components/icons";
import { useContactModal } from "@/components/providers/ContactModalProvider";
import { profile } from "@/data/profile";

export default function Footer() {
  const { openModal } = useContactModal();

  return (
    <footer className="border-t">
      <div className="container flex w-full shrink-0 flex-col items-center justify-between gap-2 px-4 py-3.5 md:px-6 sm:flex-row">
        <button
          className="group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center text-sm font-semibold"
          onClick={openModal}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]" />
            <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
              Get In Touch
            </span>
          </div>

          <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-0.5 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
            <span>Get In Touch</span>
            <ArrowRight className="mt-0.5" size={16} />
          </div>
        </button>

        <nav className="flex gap-4 sm:ml-auto">
          <Link target="_blank" rel="noreferrer" aria-label="GitHub" href={profile.social.github}>
            <GithubLogo className="size-4" />
          </Link>
          <Link target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" href={profile.social.linkedin}>
            <LinkedinLogo className="size-4" />
          </Link>
          <Link target="_blank" rel="noreferrer" aria-label="YouTube Channel" href={profile.social.youtube}>
            <YouTubeLogo className="size-4 fill-current" />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
