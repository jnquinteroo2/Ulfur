"use client";

import { useEffect, useState, useMemo } from "react";

const PARTICLE_COUNT = 50;

export default function AshParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    if (!mounted) return [];
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return [];

    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const size = `${1 + Math.random() * 2}px`;
      return {
        id: i,
        fallDuration: `${6 + Math.random() * 6}s`,
        fallDelay: `${Math.random() * 8}s`,
        startX: `${Math.random() * 100}%`,
        width: size,
        height: size,
      };
    });
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="ash-particle"
          style={
            {
              "--fall-duration": p.fallDuration,
              "--fall-delay": p.fallDelay,
              "--start-x": p.startX,
              width: p.width,
              height: p.height,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}