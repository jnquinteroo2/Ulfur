"use client";

import { useState } from "react";

type YouTubeFacadeProps = {
  videoId: string;
  title: string;
  className?: string;
};

export default function YouTubeFacade({ videoId, title, className = "" }: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={`${className} relative block cursor-pointer border-0 bg-black p-0`}
      onClick={() => setLoaded(true)}
      aria-label={`Reproducir ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff0000] shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-transform hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-white" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
