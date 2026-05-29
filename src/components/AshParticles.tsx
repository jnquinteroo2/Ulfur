"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 50;

export default function AshParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const fragments: HTMLDivElement[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement("div");
      particle.className = "ash-particle";
      particle.style.setProperty("--fall-duration", `${6 + Math.random() * 6}s`);
      particle.style.setProperty("--fall-delay", `${Math.random() * 8}s`);
      particle.style.setProperty("--start-x", `${Math.random() * 100}%`);
      particle.style.width = `${1 + Math.random() * 2}px`;
      particle.style.height = particle.style.width;
      container.appendChild(particle);
      fragments.push(particle);
    }

    return () => {
      fragments.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
