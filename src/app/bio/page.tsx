"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function BioPage() {
  return (
    <div className="min-h-screen bg-void pt-16 md:pt-24 relative">
      <section className="grain relative mx-auto max-w-7xl px-6 pt-4 pb-32 md:pb-40">
        <div className="relative z-10">
          <ScrollReveal>
            <p className="section-subheading mb-2">Biografía</p>
            <h1 className="section-heading mb-12">La Historia</h1>
          </ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="border border-silver/10 bg-ash/10 p-8">
                  <blockquote
                    className="mb-0 italic leading-relaxed text-silver/80"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    &ldquo;Con un sonido visceral entre el Thrash, Black y Death Metal&rdquo;
                  </blockquote>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div
                  className="space-y-4 leading-relaxed text-silver/60"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  <p>
                    ULFUR nace en 2015 en Mosquera, Cundinamarca, Colombia, como
                    una propuesta que fusiona la brutalidad del Death Metal, la
                    agresividad del Thrash y la oscuridad del Black Metal en un
                    sonido único y demoledor.
                  </p>
                  <p>
                    La banda se formó con la visión de crear música extrema que
                    explorara temáticas de violencia, salud mental, dolor y hechos
                    históricos, reflejando las realidades and el sufrimiento que marcan la
                    existencia humana.
                  </p>
                  <p>
                    Desde sus inicios, ULFUR ha mantenido una ética de trabajo
                    independiente y un compromiso absoluto con la autenticidad del
                    metal underground. Su sonido se nutre de las raíces más primigenias
                    del género, evitando las tendencias modernas y manteniéndose fiel
                    a la vieja escuela.
                  </p>
                  <p>
                    En 2022, la banda firmó con Warframe Records de New York,
                    lanzando su EP &ldquo;Círculo de Fuego&rdquo; en formato cassette, CD y
                    plataformas digitales, marcando un hito en su trayectoria y llevando
                    su música a una audiencia internacional.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.3}>
              <div className="space-y-8">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ash/10 border border-silver/10 grain">
                  <img
                    src="https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508901/Grupal_2_ytmm2g.jpg"
                    alt="ULFUR Banda"
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <div className="space-y-4">
                  <h3
                    className="uppercase tracking-[0.2em] text-silver/40"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "var(--text-small)",
                    }}
                  >
                    Línea de Tiempo
                  </h3>
                  <div className="relative border-l border-silver/10 pl-6 space-y-6">
                    {[
                      {
                        year: "2015",
                        title: "Fundación",
                        desc: "ULFUR se forma en Mosquera, Cundinamarca.",
                      },
                      {
                        year: "2015",
                        title: "Rencor Demo",
                        desc: "Primer demo grabado en Mad House Studio. Incluye Cacería y Rencor.",
                      },
                      {
                        year: "2017",
                        title: "Ulfur Demo",
                        desc: "Segundo demo en Área 51 Studio. Incluye La Gaitana, Rencor y Cacería.",
                      },
                      {
                        year: "2022",
                        title: "Círculo de Fuego EP",
                        desc: "Lanzamiento con Warframe Records (New York). Cassette, CD y digital.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[25px] top-1 h-3 w-3 rounded-full border-2 border-silver/10 bg-void" />
                        <span
                          className="font-bold uppercase tracking-widest text-silver/60"
                          style={{
                            fontFamily: "var(--font-barlow-condensed)",
                            fontSize: "var(--text-badge)",
                          }}
                        >
                          {item.year}
                        </span>
                        <h4
                          className="mt-1 text-silver/80"
                          style={{
                            fontFamily: "var(--font-cinzel)",
                            fontSize: "var(--text-h3)",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="mt-1 text-silver/40"
                          style={{ fontSize: "var(--text-small)" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}