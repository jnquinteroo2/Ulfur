"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AshParticles from "@/components/AshParticles";

const PLATFORMS = [
  {
    name: "Bandcamp",
    href: "https://ulfur66.bandcamp.com/album/circulo-de-fuego",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-silver/60 group-hover:text-white transition-colors" fill="currentColor">
        <path d="M0 21l7.6-14h16.4l-7.6 14z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/intl-es/album/18q5grZ4siUIUVNvoaNJi2?si=bqhGaWsxS72XzxP9xJeQOg",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-silver/60 group-hover:text-white transition-colors" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.503 17.306c-.215.353-.678.463-1.03.249-2.856-1.744-6.452-2.134-10.683-1.17-.407.092-.816-.164-.908-.571-.092-.408.164-.817.572-.91 4.63-1.054 8.59-.6 11.78 1.345.353.214.464.678.249 1.031zm1.467-3.262c-.272.443-.85.59-1.294.318-3.268-2.01-8.254-2.592-12.12-1.42-.497.15-1.022-.13-1.172-.627-.15-.497.13-1.023.627-1.173 4.415-1.34 9.91-.694 13.643 1.6.444.273.59.852.317 1.296l-.001.006zm.126-3.393C15.424 8.314 9.364 8.113 5.86 9.176c-.563.17-1.157-.147-1.328-.712-.17-.563.147-1.156.712-1.328 4.026-1.222 10.722-1.002 14.94 1.505.507.301.673.957.372 1.464-.301.507-.957.673-1.464.372z" />
      </svg>
    ),
  },
{
    name: "Apple Music",
    href: "https://music.apple.com/us/album/circulo-de-fuego-ep/1655670769",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-silver/60 group-hover:text-white transition-colors" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
      </svg>
    ),
  },
];

export default function Home() {
  const yearsActive = new Date().getFullYear() - 2015;

  return (
    <div className="flex flex-col items-center w-full">
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 select-none border-b border-silver/5">
        <AshParticles />

        <div className="absolute left-6 top-1/2 -translate-y-1/2 uppercase text-[9px] tracking-[0.6em] text-silver/10 write-vertical hidden lg:block select-none" style={{ writingMode: "vertical-rl" }}>
          M Z · J F · N Q · N A · V D // U L F U R
        </div>
        
        <div className="absolute right-6 top-1/2 -translate-y-1/2 uppercase text-[9px] tracking-[0.6em] text-silver/10 write-vertical hidden lg:block select-none" style={{ writingMode: "vertical-rl" }}>
          4.7046° N, 74.2274° W // COLOMBIA
        </div>

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)", scale: 0.92 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex-shrink-0 mb-10"
          >
            <motion.div
              animate={{ 
                y: [0, -6, 0],
                filter: [
                  "drop-shadow(0 0 10px rgba(255, 255, 255, 0.01))", 
                  "drop-shadow(0 0 30px rgba(255, 255, 255, 0.12))", 
                  "drop-shadow(0 0 10px rgba(255, 255, 255, 0.01))"
                ]
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                filter: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Image
                src="/logo.png"
                alt="Ulfur"
                width={390}
                height={390}
                className="h-auto w-56 md:w-72 lg:w-[410px]"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="space-y-4"
          >
            <p className="section-subheading tracking-[0.45em] text-xs md:text-sm">
              {yearsActive} Años de Este Carnaval de Sangre
            </p>

            <h1 
              className="text-silver/90 font-medium tracking-[0.2em] text-3xl md:text-4xl lg:text-5xl uppercase select-text"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              THRASH BLACK DEATH METAL
            </h1>

            <p
              className="italic text-silver/40 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed px-4"
              style={{ fontFamily: "var(--font-crimson-text)" }}
            >
              &ldquo;Sonido visceral de la vieja escuela del metal extremo, impregnado de sangre y muerte.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-5xl px-6 py-24 border-b border-silver/5">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs block mb-2" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              Lanzamiento Oficial
            </span>
            <h2 className="text-silver tracking-[0.1em] uppercase text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-cinzel)" }}>
              CÍRCULO DE FUEGO
            </h2>
            <p className="text-silver/50 leading-relaxed text-sm md:text-base max-w-md mb-6" style={{ fontFamily: "var(--font-crimson-text)" }}>
              Grabado y producido bajo la alianza infernal con el sello norteamericano <b>Warframe Records</b> de Nueva York. Disponible en formatos físicos de culto y distribución global.
            </p>
            
            <div className="border-t border-b border-silver/10 py-3 mb-6 space-y-2 text-xs uppercase tracking-wider text-silver/40" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              <div className="flex justify-between"><span className="text-silver/20">Código:</span> <span>WFR-002</span></div>
              <div className="flex justify-between"><span className="text-silver/20">Origen:</span> <span>Colombia / USA</span></div>
              <div className="flex justify-between"><span className="text-silver/20">Sello:</span> <span>Warframe Recs</span></div>
              <div className="flex justify-between"><span className="text-silver/20">Formatos:</span> <span>Cassette / CD / Digital</span></div>
            </div>
          </div>

          <div className="border border-silver/10 bg-zinc-950/40 p-6 md:p-8 flex flex-col gap-6">
            <span className="uppercase tracking-[0.25em] text-silver/40 font-bold text-xs" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              Escuchar o Adquirir Copia Digital:
            </span>
            <div className="grid gap-3">
              {PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-silver/5 bg-black/60 px-4 py-3 text-silver/60 transition-all duration-200 hover:border-silver/30 hover:text-white group"
                >
                  <div className="flex items-center gap-4">
                    {platform.icon}
                    <span className="text-xs uppercase tracking-widest font-semibold" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                      {platform.name}
                    </span>
                  </div>
                  <ExternalLink size={14} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl px-6 py-24 relative z-10 flex flex-col items-center">
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.25em] text-silver/30 font-bold text-xs" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
          </span>
          <h2 className="text-silver tracking-[0.1em] uppercase text-2xl md:text-3xl mt-2" style={{ fontFamily: "var(--font-cinzel)" }}>
            Videos Oficiales
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 w-full">
          <div className="w-full aspect-video border border-silver/10 bg-black shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2chNMmb9Oww?si=xu_7xKz66YVA8E-g"
              title="ULFUR - Video Oficial 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="w-full aspect-video border border-silver/10 bg-black shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kT_Nc2XzLaA?si=6EgeLVgwLF8VoDYw"
              title="ULFUR - Video Oficial 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="w-full aspect-video border border-silver/10 bg-black shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/b-uhEJ7j2ic?si=BaV6dQbdHnosXFD3"
              title="ULFUR - Video Oficial 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}