"use client";

import ScrollReveal from "@/components/ScrollReveal";

type TrackData = {
  name: string;
  url?: string;
};

type ReleaseData = {
  year: string;
  title: string;
  studio: string;
  tracks: TrackData[];
  label: string | null;
  format: string;
  featured: boolean;
  image: string;
  releaseDate?: string;
};

const DISCOGRAPHY: ReleaseData[] = [
  {
    year: "2015",
    title: "Rencor Demo",
    studio: "Mad House Studio",
    tracks: [
      { name: "Cacería" },
      { name: "Rencor" }
    ],
    label: null,
    format: "Digital",
    featured: false,
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780509736/223533150_467091304488042_626095670244153850_n_rx3wu1.jpg",
  },
  {
    year: "2017",
    title: "Ulfur Demo",
    studio: "Área 51 Studio",
    tracks: [
      { name: "La Gaitana" },
      { name: "Rencor" },
      { name: "Cacería" }
    ],
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
      { name: "Rencor", url: "https://open.spotify.com/intl-es/track/451wicKI4M8E63ASSV3HmM?si=245d1bce842d4764" },
      { name: "Condenados", url: "https://open.spotify.com/intl-es/track/08XWlCv8mJdvgmRHx25kBh?si=6b9c799f971c49c8" },
      { name: "Cacería", url: "https://open.spotify.com/intl-es/track/35UWBMIIza3Oqp0s49yPUi?si=11eb84e3a0534d87" },
      { name: "La Gaitana", url: "https://open.spotify.com/intl-es/track/0D5RW9yEdajMuVnP99Rsjm?si=c662f5f24c6246bd" },
      { name: "Círculo de Fuego", url: "https://open.spotify.com/intl-es/track/7nQn0z4XpW2ty4U9DtZLmt?si=a1e69fe7f0fd4580" },
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
                          key={track.name}
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
                            {track.name}
                          </span>
                          
                          {track.url && (
                            <a
                              href={track.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-silver/30 hover:text-[#1DB954] transition-colors flex items-center"
                              title={`Escuchar ${track.name} en Spotify`}
                            >
                              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.503 17.306c-.215.353-.678.463-1.03.249-2.856-1.744-6.452-2.134-10.683-1.17-.407.092-.816-.164-.908-.571-.092-.408.164-.817.572-.91 4.63-1.054 8.59-.6 11.78 1.345.353.214.464.678.249 1.031zm1.467-3.262c-.272.443-.85.59-1.294.318-3.268-2.01-8.254-2.592-12.12-1.42-.497.15-1.022-.13-1.172-.627-.15-.497.13-1.023.627-1.173 4.415-1.34 9.91-.694 13.643 1.6.444.273.59.852.317 1.296l-.001.006zm.126-3.393C15.424 8.314 9.364 8.113 5.86 9.176c-.563.17-1.157-.147-1.328-.712-.17-.563.147-1.156.712-1.328 4.026-1.222 10.722-1.002 14.94 1.505.507.301.673.957.372 1.464-.301.507-.957.673-1.464.372z" />
                              </svg>
                            </a>
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