"use client";

import ScrollReveal from "@/components/ScrollReveal";

const SHARED_STAGES = [
  { band: "Masacre", country: "Colombia" },
  { band: "Necronomicon", country: "Canadá" },
  { band: "Rey Toro", country: "Uruguay" },
  { band: "Clitgore", country: "Rumania" },
  { band: "Necrovile", country: "Rumania" },
  { band: "Genocide", country: "Rep. Dominicana" },
  { band: "Grindano", country: "México" },
  { band: "The Unholy", country: "México" },
  { band: "Anal Arcade", country: "Ecuador" },
  { band: "Devoured Soul", country: "México" },
  { band: "Cries of Blood", country: "Canadá" },
  { band: "Encarnalium Nosferatum", country: "México" },
  { band: "Vitam et Mortem", country: "Colombia" },
];

const CITIES = [
  "Bogotá",
  "Medellín",
  "Bucaramanga",
  "Pereira",
  "Manizales",
  "Tunja",
  "Bojacá",
  "San Joaquín",
  "Funza",
  "Madrid",
  "Facatativá",
  "Mosquera",
];

const FLAGS: Record<string, string> = {
  Colombia: "🇨🇴",
  Canadá: "🇨🇦",
  Uruguay: "🇺🇾",
  Rumania: "🇷🇴",
  "Rep. Dominicana": "🇩🇴",
  México: "🇲🇽",
  Ecuador: "🇪🇨",
};

export default function ShowsPage() {
  return (
    <div className="min-h-screen bg-void pt-16 md:pt-24 relative">
      <section className="grain relative mx-auto max-w-7xl px-6 pt-4 pb-32 md:pb-40">
        <div className="relative z-10">
          <ScrollReveal>
            <p className="section-subheading mb-2">Shows</p>
            <h1 className="section-heading mb-12">En Vivo</h1>
          </ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="border border-silver/10 bg-ash/10 p-8 text-center">
                  <h3
                    className="uppercase tracking-[0.2em] text-silver/60"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "var(--text-h3)",
                    }}
                  >
                    Próximas Fechas
                  </h3>
                  <p
                    className="mt-4 text-silver/30"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    Próximamente. Síguenos en redes sociales para conocer las fechas.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h3
                  className="mb-4 uppercase tracking-[0.2em] text-silver/40"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontSize: "var(--text-small)",
                  }}
                >
                  Ciudades Recorridas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {CITIES.map((city) => (
                    <span
                      key={city}
                      className="inline-block border border-silver/10 px-3 py-1 text-silver/40"
                      style={{ fontSize: "var(--text-badge)" }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.3}>
              <h3
                className="mb-4 uppercase tracking-[0.2em] text-silver/40"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontSize: "var(--text-small)",
                }}
              >
                Bandas con las que Hemos Compartido Tarima
              </h3>
              <div className="space-y-1">
                {Object.entries(
                  SHARED_STAGES.reduce<
                    Record<string, typeof SHARED_STAGES>
                  >((acc, item) => {
                    if (!acc[item.country]) acc[item.country] = [];
                    acc[item.country].push(item);
                    return acc;
                  }, {})
                ).map(([country, bands]) => (
                  <div key={country} className="mb-4">
                    <span
                      className="inline-block border-b border-silver/10 pb-1 uppercase tracking-wider text-silver/50"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: "var(--text-badge)",
                      }}
                    >
                      {FLAGS[country] || ""} {country}
                    </span>
                    <ul className="mt-2 space-y-1">
                      {bands.map((b) => (
                        <li
                          key={b.band}
                          className="text-silver/30"
                          style={{ fontSize: "var(--text-small)" }}
                        >
                          {b.band}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}