"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type AutoPlayVideoProps = Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "autoPlay"> & {
  intersectionThreshold?: number;
};

export function AutoPlayVideo({
  className,
  intersectionThreshold = 0.35,
  preload = "metadata",
  ...props
}: AutoPlayVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: intersectionThreshold, rootMargin: "160px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [intersectionThreshold]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
      return;
    }

    video.pause();
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload={preload}
      className={cn("w-full rounded-3xl", className)}
      {...props}
    />
  );
}
