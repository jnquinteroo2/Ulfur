"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/bio", label: "Bio" },
  { href: "/members", label: "Integrantes" },
  { href: "/discography", label: "Discografía" },
  { href: "/store", label: "Tienda" },
  { href: "/shows", label: "Shows" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-black/95 backdrop-blur-[20px] border-b border-silver/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between md:justify-center px-6 py-5 relative">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="md:hidden uppercase tracking-[0.25em] text-silver/90 font-bold text-base hover:text-red-600 transition-colors z-50"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          ULFUR
        </Link>

        <ul className="hidden gap-12 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="uppercase tracking-[0.25em] text-silver transition-colors duration-300 hover:text-red-600"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontSize: "var(--text-nav)",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-silver hover:text-red-600 transition-colors z-50 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ 
          backgroundColor: "#000000", 
          height: "100vh", 
          width: "100vw" 
        }}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 pb-32">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="uppercase tracking-[0.2em] text-silver/80 transition-colors duration-200 hover:text-red-600"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontSize: "var(--text-h3)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}