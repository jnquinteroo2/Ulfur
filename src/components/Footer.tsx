import { SOCIALS } from "@/constants/socials";

const getSocialHoverClass = (label: string) => {
  const lower = label.toLowerCase();
  
  if (lower.includes("instagram")) return "hover:text-[#E1306C]";
  if (lower.includes("facebook")) return "hover:text-[#1877F2]";
  if (lower.includes("youtube")) return "hover:text-[#FF0000]";
  if (lower.includes("spotify")) return "hover:text-[#1DB954]";
  if (lower.includes("apple")) return "hover:text-[#FA243C]";
  if (lower.includes("bandcamp")) return "hover:text-[#629AA9]";
  if (lower.includes("tiktok") || lower.includes("tik tok")) return "hover:text-[#FF0050]";

  return "hover:text-white";
};

export default function Footer() {
  const footerSocials = SOCIALS.filter((s) => s.icon);

  return (
    <footer className="relative border-t border-silver/10 bg-black pt-20">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 px-6">
        <div className="flex items-center justify-center gap-8">
          {footerSocials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-silver/40 transition-colors duration-300 ${getSocialHoverClass(social.label)}`}
              aria-label={`Ir a ${social.label}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex max-w-2xl flex-col items-center gap-1.5 text-center text-base tracking-wide text-silver/60 select-text md:text-lg">
          <p>
            ULFUR &mdash; Mosquera, Cundinamarca &mdash; Warframe Records
          </p>
          <p
            className="text-xs font-medium uppercase italic tracking-widest text-silver/40 md:text-sm"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
            }}
          >
            Thrash · Black · Death · Metal Underground
          </p>
          <p>
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}