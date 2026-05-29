const SOCIALS = [
  {
    href: "https://www.facebook.com/share/18mKdQoAUV/",
    label: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/ulfur.band?igsh=MW5qM3FiOGg0cHlr",
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://tiktok.com/@ulfur.band",
    label: "TikTok",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  }
];

export default function Footer() {
  return (
    <footer className="bg-black relative border-t border-silver/10 py-12">
      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-center gap-8">
        <div className="flex gap-8">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver/40 transition-colors duration-200 hover:text-white"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-center text-silver/60 text-base md:text-lg tracking-wide max-w-2xl select-text">
          <p>
            © {new Date().getFullYear()} ULFUR — Mosquera, Cundinamarca — Warframe Records
          </p>
          <p
            className="italic text-silver/40 font-medium tracking-widest uppercase text-xs md:text-sm mt-1"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
            }}
          >
            Black · Death · Thrash Metal Underground
          </p>
        </div>
      </div>
    </footer>
  );
}