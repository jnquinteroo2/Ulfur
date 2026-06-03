"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 1, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508901/Grupal_2_ytmm2g.jpg", alt: "ULFUR en vivo 1" },
  { id: 2, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780511801/Gemini_Generated_Image_ljnj9ljnj9ljnj9l_lygsom.jpg", alt: "ULFUR arte oficial" },
  { id: 3, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508446/IMG_7056_ifa9ks.png", alt: "Miguel Zea" },
  { id: 4, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508447/IMG_7034_jpwyms.png", alt: "Nicolás Quintero" },
  { id: 5, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508450/IMG_7050_wcedt5.png", alt: "Norman Avendaño" },
  { id: 6, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508452/IMG_7030_c2s2x4.png", alt: "Juan Fiquitiva" },
  { id: 7, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508901/Grupal_2_ytmm2g.jpg", alt: "ULFUR en vivo 2" },
  { id: 8, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780511801/Gemini_Generated_Image_ljnj9ljnj9ljnj9l_lygsom.jpg", alt: "ULFUR propaganda" },
  { id: 9, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508446/IMG_7056_ifa9ks.png", alt: "ULFUR sesión foto 1" },
  { id: 10, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508447/IMG_7034_jpwyms.png", alt: "ULFUR sesión foto 2" },
  { id: 11, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508450/IMG_7050_wcedt5.png", alt: "ULFUR sesión foto 3" },
  { id: 12, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508452/IMG_7030_c2s2x4.png", alt: "ULFUR sesión foto 4" },
  { id: 13, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508901/Grupal_2_ytmm2g.jpg", alt: "ULFUR en vivo 3" },
  { id: 14, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780511801/Gemini_Generated_Image_ljnj9ljnj9ljnj9l_lygsom.jpg", alt: "ULFUR tras bambalinas" },
  { id: 15, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/v1780508454/55aac0df-629d-49a8-9ff7-23a9b74f89c7_grqrzi.jpg", alt: "Mateo González" }
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const nextImage = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-void pt-16 md:pt-24 relative">
      <section className="grain relative mx-auto max-w-7xl px-6 pt-4 pb-32 md:pb-40">
        <div className="relative z-10 mb-16">
          <ScrollReveal>
            <p className="section-subheading mb-2">Archivo Visual</p>
            <h1 className="section-heading">Galería</h1>
          </ScrollReveal>
        </div>

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal key={img.id} delay={i * 0.05}>
              <div 
                onClick={() => openLightbox(i)}
                className="relative aspect-square w-full overflow-hidden border border-silver/10 bg-black cursor-pointer group"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-silver/40 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 px-3 py-1.5 border border-silver/10">
                    Expandir
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md select-none">
          <div className="absolute inset-0" onClick={closeLightbox} />
          
          <button 
            onClick={closeLightbox} 
            className="absolute top-6 right-6 text-silver/60 hover:text-white transition-colors bg-ash/40 p-2 border border-silver/10 z-[110]"
            aria-label="Cerrar galería"
          >
            <X size={24} />
          </button>

          <button 
            onClick={prevImage} 
            className="absolute left-4 md:left-8 text-silver/60 hover:text-white transition-colors bg-ash/40 p-3 border border-silver/10 z-[110]"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative max-w-4xl w-full max-h-[75vh] flex flex-col items-center justify-center px-4">
            <img 
              src={GALLERY_IMAGES[activeIndex].url} 
              alt={GALLERY_IMAGES[activeIndex].alt} 
              className="max-w-full max-h-[75vh] object-contain border border-silver/10 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
            />
            <p className="mt-4 text-xs tracking-widest text-silver/40 uppercase" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              {GALLERY_IMAGES[activeIndex].alt} — {activeIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>

          <button 
            onClick={nextImage} 
            className="absolute right-4 md:right-8 text-silver/60 hover:text-white transition-colors bg-ash/40 p-3 border border-silver/10 z-[110]"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}