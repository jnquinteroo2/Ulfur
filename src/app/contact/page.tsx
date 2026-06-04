"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { FiMail, FiPhone, FiMapPin, FiMusic } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify, FaApple, FaBandcamp, FaTiktok } from "react-icons/fa";
import { SOCIALS } from "@/constants/socials";

const getSocialIcon = (label: string) => {
  const lower = label.toLowerCase();
  
  if (lower.includes("instagram")) return <FaInstagram size={14} className="flex-shrink-0" />;
  if (lower.includes("facebook")) return <FaFacebook size={14} className="flex-shrink-0" />;
  if (lower.includes("youtube")) return <FaYoutube size={14} className="flex-shrink-0" />;
  if (lower.includes("spotify")) return <FaSpotify size={14} className="flex-shrink-0" />;
  if (lower.includes("apple")) return <FaApple size={14} className="flex-shrink-0" />;
  if (lower.includes("bandcamp")) return <FaBandcamp size={14} className="flex-shrink-0" />;
  if (lower.includes("tiktok") || lower.includes("tik tok")) return <FaTiktok size={14} className="flex-shrink-0" />;

  return <FiMusic size={14} className="flex-shrink-0" />;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formsubmit.co/ajax/svarturulfur5@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-void pt-16 md:pt-24 relative">
      <section className="grain relative mx-auto max-w-7xl px-6 pt-4 pb-32 md:pb-40">
        <div className="relative z-10">
          <ScrollReveal>
            <p className="section-subheading mb-2">Contacto</p>
            <h1 className="section-heading mb-12">
              Contacto
            </h1>
          </ScrollReveal>
          
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            
            <ScrollReveal delay={0.1} className="h-full">
              {submitted ? (
                <div className="border border-silver/10 bg-ash/10 p-8 text-center h-full flex flex-col justify-center">
                  <p
                    className="text-silver/80"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    Mensaje enviado.
                  </p>
                  <p
                    className="mt-2 text-silver/40"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    Te responderemos pronto.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-dark mt-6"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex h-full flex-col gap-6">
                  <input type="hidden" name="_subject" value="Nuevo mensaje desde la Web Oficial de ULFUR" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block uppercase tracking-[0.15em] text-silver/50"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: "var(--text-badge)",
                      }}
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-silver/10 bg-white text-black px-4 py-3 outline-none transition-colors focus:border-red-600 placeholder-neutral-500"
                      style={{ fontSize: "var(--text-small)" }}
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block uppercase tracking-[0.15em] text-silver/50"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: "var(--text-badge)",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-silver/10 bg-white text-black px-4 py-3 outline-none transition-colors focus:border-red-600 placeholder-neutral-500"
                      style={{ fontSize: "var(--text-small)" }}
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div className="flex flex-1 flex-col">
                    <label
                      htmlFor="message"
                      className="mb-1 block uppercase tracking-[0.15em] text-silver/50"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontSize: "var(--text-badge)",
                      }}
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full flex-1 resize-none border border-silver/10 bg-white text-black px-4 py-3 outline-none transition-colors focus:border-red-600 placeholder-neutral-500"
                      style={{ fontSize: "var(--text-small)" }}
                      placeholder="Escribe tu mensaje..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn-dark w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Enviar mensaje de contacto"
                  >
                    {isSending ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="h-full">
              <div className="flex flex-col h-full gap-6">
                <div>
                  <div
                    className="mb-1 block uppercase tracking-[0.15em] invisible select-none pointer-events-none"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "var(--text-badge)",
                    }}
                    aria-hidden="true"
                  >
                    Espaciador
                  </div>
                  
                  <div className="border border-silver/10 bg-ash/10 p-6">
                    <div
                      className="space-y-4"
                      style={{ fontSize: "var(--text-small)" }}
                    >
                      <div className="flex items-center gap-3">
                        <FiMapPin size={16} className="flex-shrink-0 text-silver/40" />
                        <span className="text-silver/50">
                          Mosquera, Cundinamarca, Colombia
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FiMail size={16} className="flex-shrink-0 text-silver/40" />
                        <a
                          href="mailto:svarturulfur5@gmail.com"
                          className="text-silver/50 transition-colors hover:text-white"
                          aria-label="Enviar email a svarturulfur5@gmail.com"
                        >
                          svarturulfur5@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <FiPhone size={16} className="flex-shrink-0 text-silver/40" />
                        <span className="text-silver/50">
                          3046297470 / 3163048406
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-silver/10 bg-ash/10 p-6">
                  <h3
                    className="mb-4 uppercase tracking-[0.15em] text-silver/50"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "var(--text-small)",
                    }}
                  >
                    Redes Sociales
                  </h3>
                  <div
                    className="space-y-3"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {SOCIALS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-silver/40 transition-colors hover:text-white"
                        aria-label={`Ir a ${social.label}`}
                      >
                        {getSocialIcon(social.label)}
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="border border-silver/10 bg-ash/10 p-6 flex-1 flex flex-col">
                  <h3
                    className="mb-4 uppercase tracking-[0.15em] text-silver/50"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontSize: "var(--text-small)",
                    }}
                  >
                    Sello Discográfico
                  </h3>
                  <p
                    className="text-silver/50"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    Warframe Records
                  </p>
                  <p
                    className="text-silver/30"
                    style={{ fontSize: "var(--text-badge)" }}
                  >
                    New York, USA
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}