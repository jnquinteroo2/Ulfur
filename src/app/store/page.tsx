"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { ShoppingBag } from "lucide-react";

const MERCHANDISE = [
  {
    id: "camiseta-cf",
    name: "Camiseta Círculo de Fuego",
    type: "Prenda Oficial",
    price: "$55.000 COP",
    tag: "Ulfur",
  },
  {
    id: "gorra-ulfur",
    name: "Gorra Camionera Bordada",
    type: "Accesorios",
    price: "$35.000 COP",
    tag: "Stock Limitado",
  },
  {
    id: "pocillo-rencor",
    name: "Pocillo Cerámico Rencor",
    type: "Accesorios",
    price: "$25.000 COP",
    tag: "Negro Mate",
  },
  {
    id: "picks-pack",
    name: "Pack de Picks / Uñas x5",
    type: "Insumos",
    price: "$15.000 COP",
    tag: "Grosor 1 mm",
  },
];

export default function StorePage() {
  return (
    <div className="min-h-screen bg-void pt-16 md:pt-24">
      <section className="grain relative mx-auto max-w-7xl px-6 pt-4 pb-16 md:py-16">
        <div className="relative z-10">
          <ScrollReveal>
            <p className="section-subheading mb-2">Suministros</p>
            <h1 className="section-heading mb-16">Mercancía Oficial</h1>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MERCHANDISE.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <div className="border border-silver/10 bg-zinc-950/20 p-6 h-full flex flex-col justify-between transition-all duration-300 hover:border-red-600/30 group">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] uppercase tracking-widest text-silver/30 font-bold" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                        {product.type}
                      </span>
                      <span className="text-[9px] border border-silver/10 px-2 py-0.5 text-silver/40 uppercase tracking-wider">
                        {product.tag}
                      </span>
                    </div>

                    <div className="aspect-square w-full border border-silver/5 bg-black/40 flex items-center justify-center mb-6 relative overflow-hidden">
                      <ShoppingBag size={24} className="text-silver/5 opacity-40 group-hover:scale-110 group-hover:text-red-600/10 transition-all duration-300" />
                      <div className="absolute inset-x-0 bottom-0 py-1 bg-black/80 border-t border-silver/5 text-center">
                        <span className="text-[9px] tracking-widest uppercase text-silver/20 font-bold" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                          ULFUR OFFICIAL GEAR
                        </span>
                      </div>
                    </div>

                    <h3 className="text-silver/80 text-base font-medium uppercase tracking-wide group-hover:text-silver transition-colors" style={{ fontFamily: "var(--font-cinzel)" }}>
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-silver/5 flex items-center justify-between">
                    <span className="text-silver/50 font-bold text-sm" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                      {product.price}
                    </span>
                    <a 
                      href="mailto:svarturulfur5@gmail.com?subject=Pedido%20Mercancia"
                      className="text-[10px] uppercase tracking-wider font-bold text-silver/30 hover:text-red-600 transition-colors"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      Pedir →
                    </a>
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