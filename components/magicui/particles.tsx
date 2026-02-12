"use client";

import * as React from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

type ParticlesProps = {
  className?: string;
  quantity?: number;
  color?: string;
  ease?: number;
  refresh?: boolean;
};

export function Particles({ className, quantity = 120, color = "#ffffff", ease = 80, refresh = false }: ParticlesProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const particlesRef = React.useRef<Particle[]>([]);
  const pointerRef = React.useRef({ x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY });
  const animationRef = React.useRef<number | null>(null);
  const visibleRef = React.useRef(true);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  const initParticles = React.useCallback((width: number, height: number) => {
    particlesRef.current = Array.from({ length: quantity }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.8 + 0.35,
    }));
  }, [quantity]);

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);

    return () => media.removeEventListener("change", updatePreference);
  }, []);

  React.useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let offsetLeft = 0;
    let offsetTop = 0;
    const easeSquared = ease * ease;

    const setSize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();

      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      offsetLeft = rect.left;
      offsetTop = rect.top;

      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      initParticles(width, height);
    };

    const render = () => {
      if (document.hidden || !visibleRef.current) {
        animationRef.current = window.requestAnimationFrame(render);
        return;
      }

      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      context.globalAlpha = 0.65;
      context.beginPath();

      for (const particle of particlesRef.current) {
        const dx = pointerRef.current.x - particle.x;
        const dy = pointerRef.current.y - particle.y;
        const distanceSquared = dx * dx + dy * dy;

        if (distanceSquared > 0 && distanceSquared < easeSquared) {
          const inverseDistance = 1 / Math.sqrt(distanceSquared);
          particle.vx -= dx * inverseDistance * 0.001;
          particle.vy -= dy * inverseDistance * 0.001;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.996;
        particle.vy *= 0.996;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        context.moveTo(particle.x + particle.size, particle.y);
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      }

      context.fill();
      context.globalAlpha = 1;

      animationRef.current = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: event.clientX - offsetLeft,
        y: event.clientY - offsetTop,
      };
    };

    const onPointerLeave = () => {
      pointerRef.current = { x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY };
    };

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(canvas);

    let intersectionObserver: IntersectionObserver | null = null;
    if (containerRef.current) {
      intersectionObserver = new IntersectionObserver(([entry]) => {
        visibleRef.current = entry.isIntersecting;
      });
      intersectionObserver.observe(containerRef.current);
    }

    setSize();
    animationRef.current = window.requestAnimationFrame(render);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerLeave, { passive: true });
    window.addEventListener("blur", onPointerLeave);

    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
    };
  }, [color, ease, initParticles, reducedMotion, refresh]);

  if (reducedMotion) {
    return null;
  }

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
