"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink } from "lucide-react";

const DISCOGRAPHY = [
  {
    year: "2015",
    title: "Rencor Demo",
    studio: "Mad House Studio",
    tracks: ["Cacería", "Rencor"],
    label: null,
    format: "Digital",
    featured: false,
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780509736/223533150_467091304488042_626095670244153850_n_rx3wu1.jpg",
  },
  {
    year: "2017",
    title: "Ulfur Demo",
    studio: "Área 51 Studio",
    tracks: ["La Gaitana", "Rencor", "Cacería"],
    label: null,
    format: "Digital",
    featured: false,
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780510213/3540516107_logo_rjsve8.jpg"
  },
  {
    year: "2022",
    title: "Círculo de Fuego EP",
    studio: "Warframe Records",
    tracks: [
      "Rencor",
      "Condenados",
      "Cacería",
      "La Gaitana",
      "Círculo de Fuego",
    ],
    label: "Warframe Records",
    format: "Cassette, CD y Digital",
    releaseDate: "19 Nov 2022",
    featured: true,
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780510024/632x632bb_d2cwbh.png"
  },
];

export default function DiscographyPage() {
  return (
    <div className="min-h-screen bg-void pt-16 md:pt-24 relative">
      <section className="grain relative mx-auto max-w-7xl px-6 pt-4 pb-32 md:pb-40">
        <div className="relative z-10">
          <ScrollReveal>
            <p className="section-subheading mb-2">Discografía</p>
            <h1 className="section-heading mb-12">Lanzamientos</h1>
          </ScrollReveal>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 relative z-10">
          {DISCOGRAPHY.map((release, i) => (
            <ScrollReveal
              key={release.year + release.title}
              delay={i * 0.15}
            >
              <div
                className={`group relative overflow-hidden bg-ash/10 border border-silver/10 transition-all duration-300 h-full flex flex-col ${
                  release.featured
                    ? "hover:border-silver"
                    : "hover:border-silver/20"
                }`}
              >
                {release.label && (
                  <div className="absolute right-0 top-0 z-10 border border-silver/10 bg-black px-3 py-1">
                    <span
                      className="font-bold uppercase tracking-wider text-silver/60"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: "var(--text-badge)",
                      }}
                    >
                      {release.label}
                    </span>
                  </div>
                )}
                <div className="relative flex aspect-square items-center justify-center bg-ash/20 overflow-hidden flex-shrink-0">
                  {release.image ? (
                    <img
                      src={release.image}
                      alt={`Portada de ${release.title}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <span
                        className="block text-silver/10"
                        style={{
                          fontFamily: "var(--font-cinzel)",
                          fontSize: "var(--text-h2)",
                        }}
                      >
                        {release.year}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div>
                    {release.releaseDate && (
                      <span
                        className="uppercase tracking-widest text-silver/50"
                        style={{
                          fontFamily: "var(--font-barlow-condensed)",
                          fontSize: "var(--text-badge)",
                        }}
                      >
                        {release.releaseDate}
                      </span>
                    )}
                    <h3
                      className="mt-1 text-silver/80"
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontSize: "var(--text-h3)",
                      }}
                    >
                      {release.title}
                    </h3>
                    <p
                      className="mt-1 text-silver/30"
                      style={{ fontSize: "var(--text-small)" }}
                    >
                      {release.studio}
                    </p>
                    <p
                      className="mt-1 uppercase tracking-wider text-silver/40"
                      style={{ fontSize: "var(--text-small)" }}
                    >
                      {release.format}
                    </p>
                  </div>
                  {release.tracks.length > 0 && (
                    <div className="mt-auto space-y-1 border-t border-silver/10 pt-4">
                      {release.tracks.map((track, j) => (
                        <div
                          key={track}
                          className="flex items-center justify-between"
                          style={{ fontSize: "var(--text-small)" }}
                        >
                          <span className="text-silver/40">
                            <span
                              className="mr-2 tabular-nums text-silver/15"
                              style={{ fontSize: "var(--text-badge)" }}
                            >
                              {String(j + 1).padStart(2, "0")}
                            </span>
                            {track}
                          </span>
                          {release.featured && (
                            <span className="flex gap-1">
                              <a
                                href="https://open.spotify.com/artist/ulfur-band"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-silver/20 transition-colors hover:text-white"
                                title="Escuchar en Spotify"
                              >
                                <ExternalLink size={12} />
                              </a>
                              <a
                                href="https://youtube.com/@ulfur.band"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-silver/20 transition-colors hover:text-white"
                                title="Ver en YouTube"
                              >
                                <ExternalLink size={12} />
                              </a>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}