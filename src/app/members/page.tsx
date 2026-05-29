"use client";

import ScrollReveal from "@/components/ScrollReveal";

const MEMBERS = [
  {
    name: "Miguel Zea",
    instrument: "Guitarra y Voz",
    initials: "MZ",
    bio: "12 años de experiencia. Ha integrado bandas como Ulfur, Crüel Acero y Diogenes Punk, forjando un estilo agresivo y técnico en las seis cuerdas y las voces.",
  },
  {
    name: "Nicolás Quintero",
    instrument: "Segunda Guitarra",
    initials: "NQ",
    bio: "10 años de experiencia. Aporta densidad armónica y riffs complementarios que refuerzan la muralla sonora característica de ULFUR.",
  },
  {
    name: 'Norman Avendaño "Ergoth"',
    instrument: "Bajo",
    initials: "NA",
    bio: "16 años de experiencia. Miembro de bandas previas como Evilucifer y The Lizard, su bajo aporta profundidad y peso a la base rítmica.",
  },
  {
    name: "Juan Fiquitiva",
    instrument: "Batería",
    initials: "JF",
    bio: "16 años de experiencia. Técnico laboral en música por la Secretaría de Cultura de Mosquera. Su percusión es el motor incansable de la banda.",
  },
];

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-void pt-16 md:pt-32">
      <section className="grain relative mx-auto max-w-7xl px-6 pt-4 pb-16 md:py-16">
        <div className="relative z-10">
          <ScrollReveal>
            <p className="section-subheading mb-2">Integrantes</p>
            <h1 className="section-heading mb-16">Ulfur</h1>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {MEMBERS.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="card-member bg-ash/10 border border-silver/5 p-8 transition-colors duration-300 hover:bg-ash/30">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div
                      className="member-image flex h-24 w-24 flex-shrink-0 items-center justify-center border border-silver/10 bg-void text-silver/30 select-none"
                      style={{ 
                        fontFamily: "var(--font-cinzel)", 
                        fontSize: "var(--text-h2)" 
                      }}
                    >
                      {member.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <span
                        className="inline-block border border-blood/40 px-3 py-1 uppercase tracking-widest text-blood"
                        style={{
                          fontFamily: "var(--font-barlow-condensed)",
                          fontSize: "var(--text-badge)",
                          fontWeight: 700
                        }}
                      >
                        {member.instrument}
                      </span>

                      <h3
                        className="mt-4 text-silver"
                        style={{
                          fontFamily: "var(--font-cinzel)",
                          fontSize: "var(--text-h3)",
                        }}
                      >
                        {member.name}
                      </h3>

                      <p
                        className="mt-3 leading-relaxed text-silver/60"
                        style={{ fontSize: "var(--text-body)" }}
                      >
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}