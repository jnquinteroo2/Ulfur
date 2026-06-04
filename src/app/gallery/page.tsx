"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 1, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537420/IMG_7060_u8kya2.png"},
  { id: 2, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536819/IMG_7051_apnf6e.png"},
  { id: 3, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536800/Grupal_w2gzgs.jpg"},
  { id: 4, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536742/WhatsApp_Image_2026-06-03_at_20.12.09_l7hoo5.jpg"},
  { id: 5, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537154/412324581_1023003722230128_4623510403147703758_n_xfkzjp.jpg"},
  { id: 6, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537178/433865174_1082106306319869_2603426318084516048_n_pumq4d.jpg"},
  { id: 7, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536781/IMG_7368_c50zng.jpg"},
  { id: 8, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536774/IMG_7399_1_nmrtfv.jpg"},
  { id: 9, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536736/485086414_1317761829420981_5209864013791898604_n_qs0lf1.jpg"},
  { id: 10, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536787/IMG_7065_inmhih.png"},
  { id: 11, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536761/IMG-20231220-WA0015_decopx.jpg"},
  { id: 12, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536767/FB_IMG_1706023134236_uulgws.jpg"},
  { id: 13, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536755/IMG-20231220-WA0020_wrrrd1.jpg"},
  { id: 14, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536806/20240414063828_IMG_1733_xv89ti.jpg"},
  { id: 15, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536813/20240414063315_IMG_1721_enugco.jpg"},
  { id: 16, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537092/IMG_7040_cxl53e.png"},
  { id: 17, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537112/IMG_3740_bjdkm3.jpg"},
  { id: 18, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537105/IMG_7061_zjgdza.png"},
  { id: 19, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537133/IMG_7053_bmpv5p.png"},
  { id: 20, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537119/20240414061838_IMG_1575_neqeur.jpg"},
  { id: 21, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537092/IMG_7040_cxl53e.png"},
  { id: 22, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536793/IMG_3833_qkhvhw.jpg"},
  { id: 23, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780536748/Screenshot_20231220_173748_Gallery_wrwm4x.jpg"},
  { id: 24, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537187/484351399_1317761809420983_4129130691409625882_n_khm6py.jpg"},
  { id: 25, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537236/484812953_1317646679432496_6656370805741560852_n_rirvnm.jpg"},
  { id: 26, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537140/72044113_135060104490495_5238529000560656384_n_d7hmps.jpg"},
  { id: 27, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537147/480668359_1302724644258033_6293099265512299235_n_ucagoy.jpg"},
  { id: 28, url: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780537098/IMG_3797_z3drhr.jpg"}
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

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal key={img.id} delay={i * 0.05}>
              <div 
                onClick={() => openLightbox(i)}
                className="relative aspect-square w-full overflow-hidden border border-silver/10 bg-black cursor-pointer group"
              >
                <img 
                  src={img.url} 
                  alt={`Fotografía ${i + 1} de la galería`} 
                  className="h-full w-full object-cover grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-silver font-bold bg-black/80 px-3 py-1.5 border border-silver/20">
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

          <div className="relative max-w-4xl w-full max-h-[75vh] flex flex-col items-center justify-center px-4 pointer-events-none">
            <img 
              src={GALLERY_IMAGES[activeIndex].url} 
              alt={`Fotografía ${activeIndex + 1}`} 
              className="max-w-full max-h-[75vh] object-contain border border-silver/10 shadow-[0_0_50px_rgba(0,0,0,0.9)] pointer-events-auto"
            />
            <p className="mt-4 text-xs tracking-widest text-silver/40 uppercase font-bold" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              {activeIndex + 1} / {GALLERY_IMAGES.length}
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