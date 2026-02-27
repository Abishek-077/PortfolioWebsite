"use client";

import Link from "next/link";
import { AlignLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { ShinyButton } from "@/components/magicui/shiny-button";
import { useContactModal } from "@/components/providers/ContactModalProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { name: "About", url: "/#about" },
  { name: "Certifications", url: "/#certifications" },
  { name: "Projects", url: "/projects" },
  { name: "Testimonials", url: "/#testimonials" },
  { name: "Blog", url: "/blog" },
];

function BrandBadge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
        className,
      )}
    >
      <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]" />
      {children}
    </div>
  );
}

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="rounded-full border">
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-transparent"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant="ghost"
        size="icon"
        className="mr-1 h-7 w-8 rounded-full hover:bg-transparent dark:bg-zinc-800"
      >
        <Moon />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { openModal } = useContactModal();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="mr-3 md:hidden">
        <AlignLeft size={25} />
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="text-left">
          <SheetTitle>{profile.name}</SheetTitle>
        </SheetHeader>

        <ShinyButton
          onClick={() => {
            openModal();
            setOpen(false);
          }}
          className="mb-5 mt-4 rounded-full border"
        >
          Contact
        </ShinyButton>

        <div className="flex flex-col gap-4 px-2 text-lg font-medium">
          {links.map((link) => (
            <SheetClose asChild key={link.name}>
              <Link href={link.url} className="transition-colors hover:text-foreground/80">
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function Navbar() {
  const { openModal } = useContactModal();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MobileNav />

        <div className="hidden gap-2 md:flex">
          <Link className="mr-6 flex items-center" href="/">
            <span className="font-bold">
              <BrandBadge>{profile.name}</BrandBadge>
            </span>
          </Link>

          <div className="flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link key={link.name} href={link.url} className="transition-colors hover:text-foreground/80" aria-label={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <ShinyButton onClick={openModal} className="ml-auto hidden rounded-full border md:block">
          Contact
        </ShinyButton>

        <div className="ml-auto md:ml-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
