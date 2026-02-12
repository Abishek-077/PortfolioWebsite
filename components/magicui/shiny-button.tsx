import * as React from "react";

import { cn } from "@/lib/utils";

type ShinyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ShinyButton({ children, className, ...props }: ShinyButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
        className,
      )}
      {...props}
    >
      <span
        className="relative z-10 block size-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage: "linear-gradient(-75deg,hsl(var(--primary)) 20%,transparent 30%,hsl(var(--primary)) 100%)",
        }}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_20%,hsl(var(--primary)/50%)_50%,hsl(var(--primary)/10%)_80%)] bg-[length:250%_100%] p-px animate-gradient"
      />
    </button>
  );
}
