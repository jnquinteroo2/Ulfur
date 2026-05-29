"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, AlertCircle, Loader2 } from "lucide-react";

const TRACKS = [
  { title: "Rencor", url: "/audio/rencor.mp3" },
  { title: "Condenados", url: "/audio/condenados.mp3" },
  { title: "Cacería", url: "/audio/caceria.mp3" },
  { title: "La Gaitana", url: "/audio/gaitana.mp3" },
  { title: "Círculo de Fuego", url: "/audio/circulo.mp3" }
];

export default function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false); 
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsPlaying(true);
    setHasError(false);
    setIsBuffering(true); 
  }, [currentTrack]);

  useEffect(() => {
    const startStreaming = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.play()
          .then(() => {
            setHasError(false);
            document.removeEventListener("click", startStreaming);
            document.removeEventListener("touchstart", startStreaming);
          })
          .catch(() => {
          });
      }
    };

    if (isPlaying) {
      startStreaming();
      document.addEventListener("click", startStreaming);
      document.addEventListener("touchstart", startStreaming);
    } else if (audioRef.current) {
      audioRef.current.pause();
      setIsBuffering(false);
    }

    return () => {
      document.removeEventListener("click", startStreaming);
      document.removeEventListener("touchstart", startStreaming);
    };
  }, [isPlaying, currentTrack]);

  const togglePlay = () => {
    if (hasError) return;
    setIsPlaying(!isPlaying);
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-silver/10 backdrop-blur-md p-4 flex flex-col items-center justify-center">
      <audio 
        ref={audioRef} 
        src={TRACKS[currentTrack].url} 
        preload="metadata" 
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextTrack}
        onError={handleAudioError}
        onWaiting={() => setIsBuffering(true)} 
        onPlaying={() => setIsBuffering(false)} 
        onCanPlay={() => setIsBuffering(false)} 
      />
      
      <div className="w-full max-w-xl bg-ash/40 border border-silver/10 rounded-none p-3 flex items-center justify-between gap-4 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
        <div className="flex h-11 bg-black/40 border border-silver/5 rounded-none relative overflow-hidden items-center px-4 flex-1 min-w-0">
          {hasError ? (
            <AlertCircle size={13} className="text-silver/30 mr-3 shrink-0" />
          ) : isBuffering ? (
            <Loader2 size={13} className="text-silver/60 mr-3 shrink-0 animate-spin" />
          ) : (
            <Volume2 size={13} className={`mr-3 shrink-0 ${isPlaying ? 'text-silver/80 animate-pulse' : 'text-silver/15'}`} />
          )}
          
          <div className="flex flex-col items-start min-w-0 flex-1">
            <div className="flex items-center justify-between w-full">
              <span className="text-silver/60 font-medium tracking-[0.15em] truncate uppercase select-none" style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "var(--text-badge)" }}>
                {hasError 
                  ? `${TRACKS[currentTrack].title} (Falta archivo MP3 local)` 
                  : isBuffering 
                  ? `${TRACKS[currentTrack].title} (Cargando...)` 
                  : TRACKS[currentTrack].title}
              </span>
            </div>
            <div className="w-full bg-void h-[1px] mt-1.5 rounded-none overflow-hidden">
              <div className="bg-silver/40 h-full transition-all duration-100" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-silver/30 flex-shrink-0">
          <button onClick={prevTrack} className="hover:text-silver/80 transition-colors p-1" aria-label="Anterior">
            <SkipBack size={16} />
          </button>
          <button 
            onClick={togglePlay} 
            disabled={hasError}
            className={`w-9 h-9 border border-silver/10 rounded-none flex items-center justify-center transition-colors bg-ash/80 ${hasError ? 'opacity-20 cursor-not-allowed' : 'hover:border-silver/60 hover:text-white'}`}
          >
            {isPlaying ? <Pause size={12} className="text-silver/80" /> : <Play size={12} className="text-silver/50" />}
          </button>
          <button onClick={nextTrack} className="hover:text-silver/80 transition-colors p-1" aria-label="Siguiente">
            <SkipForward size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}