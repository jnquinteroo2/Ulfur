"use client";

import ScrollReveal from "@/components/ScrollReveal";

const MEMBERS = [
  {
    name: "Miguel Zea",
    instrument: "Voz y Guitarra Líder",
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508446/IMG_7056_ifa9ks.png",
    bio: "Vocalista, guitarrista líder, compositor y fundador de Ulfur. Más de 15 años descargando riffs, velocidad y agresión en la escena metal underground. También hace parte de Cruel Acero y Diógenes como guitarrista líder, aportando en composición y arreglos. Su sonido combina la fuerza del thrash metal con la oscuridad y crudeza del death metal. Actualmente adelanta estudios de música en la UNAD, manteniéndose fiel al metal pesado y la intensidad del underground.",
  },
  {
    name: "Nicolás Quintero",
    instrument: "Guitarra Rítmica",
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508447/IMG_7034_jpwyms.png",
    bio: "Guitarrista rítmico con una década de trayectoria forjando riffs en la escena del metal extremo. Su estilo aporta la densidad armónica y los arreglos complementarios que levantan la inquebrantable muralla sonora característica de ULFUR. Con una ejecución agresiva. Fiel exponente del underground, su visión musical encaja a la perfección con la oscuridad del death metal y la furia del thrash, asegurando una descarga sonora contundente en cada presentación.",
  },
  {
    name: 'Norman Avendaño "Ergoth"',
    instrument: "Bajo",
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508450/IMG_7050_wcedt5.png",
    bio: "Bajista con más de 16 años de firme recorrido en las trincheras del metal underground. Veterano de agrupaciones previas como Evilucifer y The Lizard, ha consolidado un sonido denso y oscuro que funciona como la espina dorsal de la banda. Su bajo no solo aporta profundidad y un peso demoledor a la base rítmica, sino que se acopla milimétricamente con la percusión para aplastar en cada nota. Su vasta experiencia garantiza la brutalidad implacable que define la identidad de ULFUR tanto en el estudio como en vivo.",
  },
  {
    name: "Juan Fiquitiva",
    instrument: "Batería",
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780508452/IMG_7030_c2s2x4.png",
    bio: "Baterista con más de 16 años de trayectoria en la escena independiente, formado como Técnico Laboral en Música y con experiencia en géneros como metal, punk, ska y rock. Ha participado en diversos proyectos musicales, destacándose su paso por la banda de ska punk The Beer Klub, donde fortaleció su experiencia en composición, presentaciones en vivo y trabajo de ensamble. Actualmente integra ULFUR, aportando potencia, precisión y versatilidad a la propuesta sonora de la banda, además de complementar su carrera artística con la enseñanza de la batería y la formación de nuevos músicos.",
  },
  {
    name: "Mateo González Ramírez",
    instrument: "Visual Dealer",
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/v1780508454/55aac0df-629d-49a8-9ff7-23a9b74f89c7_grqrzi.jpg",
    bio: "Comunicador Social y Periodista, encargado de la estrategia digital y la gestión de redes sociales de la banda. Como fotógrafo y filmmaker, documento y proyecto su esencia a través de contenidos visuales que reflejan su identidad y energía en cada presentación, producción y lanzamiento.",
  },
];

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-void pt-16 md:pt-24 relative">
      <section className="grain relative mx-auto max-w-7xl px-6 pt-4 pb-32 md:pb-40">
        <div className="relative z-10">
          <ScrollReveal>
            <p className="section-subheading mb-2">Integrantes</p>
            <h1 className="section-heading mb-16">Ulfur</h1>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            {MEMBERS.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="card-member bg-ash/10 border border-silver/5 p-8 transition-colors duration-300 hover:bg-ash/20 h-full flex flex-col">
                  <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-[340px] flex-shrink-0 overflow-hidden border border-silver/10 bg-void mb-6 mx-auto">
                    <img
                      src={member.image}
                      alt={`Fotografía de ${member.name}`}
                      className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center text-center sm:items-start sm:text-left">
                    <span
                      className="inline-block border border-blood/40 px-4 py-1.5 uppercase tracking-widest text-blood"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: "calc(var(--text-badge) * 1.1)",
                        fontWeight: 700
                      }}
                    >
                      {member.instrument}
                    </span>
                    <h3
                      className="mt-5 text-silver"
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontSize: "var(--text-h3)",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="mt-4 leading-relaxed text-silver/70"
                      style={{ fontSize: "calc(var(--text-body) * 1.05)" }}
                    >
                      {member.bio}
                    </p>
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