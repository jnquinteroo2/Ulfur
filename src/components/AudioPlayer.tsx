"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, AlertCircle, Loader2 } from "lucide-react";

const TRACKS = [
  { title: "Rencor", url: "https://res.cloudinary.com/dfkd8tzhs/video/upload/q_auto/f_auto/v1780507778/rencor_tmnujy.mp3" },
  { title: "Condenados", url: "https://res.cloudinary.com/dfkd8tzhs/video/upload/q_auto/f_auto/v1780507775/condenados_folzko.mp3" },
  { title: "Cacería", url: "https://res.cloudinary.com/dfkd8tzhs/video/upload/q_auto/f_auto/v1780507773/caceria_zxng6k.mp3" },
  { title: "La Gaitana", url: "https://res.cloudinary.com/dfkd8tzhs/video/upload/q_auto/f_auto/v1780507776/gaitana_bjllek.mp3" },
  { title: "Círculo de Fuego", url: "https://res.cloudinary.com/dfkd8tzhs/video/upload/q_auto/f_auto/v1780507774/circulo_plavze.mp3" }
];

export default function AudioPlayer() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const randomTrack = Math.floor(Math.random() * TRACKS.length);
    setCurrentTrack(randomTrack);
    setIsMounted(true);
  }, []);

  const attemptPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || hasError) return;
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setIsPlaying(false);
      });
    }
  }, [hasError]);

  useEffect(() => {
    if (!isMounted) return;
    setHasError(false);
    setIsBuffering(true);
    setIsPlaying(true);
  }, [currentTrack, isMounted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      attemptPlay();
    } else {
      audio.pause();
      setIsBuffering(false);
    }
  }, [isPlaying, currentTrack, attemptPlay]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onUserInteraction = () => {
      if (audio.paused && !hasError) {
        setIsPlaying(true);
        attemptPlay();
      }
    };

    document.addEventListener("click", onUserInteraction, { once: true });
    document.addEventListener("touchstart", onUserInteraction, { once: true });
    document.addEventListener("keydown", onUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", onUserInteraction);
      document.removeEventListener("touchstart", onUserInteraction);
      document.removeEventListener("keydown", onUserInteraction);
    };
  }, [hasError, attemptPlay]);

  const togglePlay = () => {
    if (hasError) return;
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      attemptPlay();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleAudioError = () => {
    setHasError(true);
    setIsPlaying(false);
    setIsBuffering(false);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % TRACKS.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center border-t border-silver/10 bg-black/95 p-4 backdrop-blur-md">
      <audio
        ref={audioRef}
        src={TRACKS[currentTrack].url}
        preload="auto" 
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextTrack}
        onError={handleAudioError}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        onCanPlay={() => setIsBuffering(false)}
      />

      <div className="flex w-full max-w-xl items-center justify-between gap-4 rounded-none border border-silver/10 bg-ash/40 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
        <div className="relative flex h-11 min-w-0 flex-1 items-center overflow-hidden rounded-none border border-silver/5 bg-black/40 px-4">
          {hasError ? (
            <AlertCircle size={13} className="mr-3 shrink-0 text-silver/30" />
          ) : isBuffering || !isMounted ? (
            <Loader2 size={13} className="mr-3 shrink-0 animate-spin text-silver/60" />
          ) : (
            <Volume2 size={13} className={`mr-3 shrink-0 ${isPlaying ? "animate-pulse text-silver/80" : "text-silver/15"}`} />
          )}

          <div className="flex min-w-0 flex-1 flex-col items-start">
            <div className="flex w-full items-center justify-between">
              <span
                className="select-none truncate font-medium uppercase tracking-[0.15em] text-silver/60"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "var(--text-badge)" }}
              >
                {!isMounted || isBuffering
                  ? "Preparando asedio..."
                  : hasError
                  ? `${TRACKS[currentTrack].title} (Error de red)`
                  : TRACKS[currentTrack].title}
              </span>
            </div>
            <div className="bg-void mt-1.5 h-[1px] w-full overflow-hidden rounded-none">
              <div className="h-full bg-silver/40 transition-all duration-100" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="flex flex-shrink-0 items-center gap-2 text-silver/30">
          <button onClick={prevTrack} className="p-1 transition-colors hover:text-silver/80" aria-label="Canción anterior">
            <SkipBack size={16} />
          </button>
          <button
            onClick={togglePlay}
            disabled={hasError || !isMounted}
            className={`flex h-9 w-9 items-center justify-center rounded-none border border-silver/10 bg-ash/80 transition-colors ${hasError || !isMounted ? "cursor-not-allowed opacity-20" : "hover:border-silver/60 hover:text-white"}`}
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? <Pause size={12} className="text-silver/80" /> : <Play size={12} className="text-silver/50" />}
          </button>
          <button onClick={nextTrack} className="p-1 transition-colors hover:text-silver/80" aria-label="Canción siguiente">
            <SkipForward size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}