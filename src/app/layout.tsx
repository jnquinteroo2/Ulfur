import type { Metadata } from "next";
import { Cinzel, Barlow_Condensed, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import { AudioPlayerProvider } from "@/context/AudioPlayerContext";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ULFUR — Black · Death · Thrash Metal",
  description:
    "Banda de Black / Death / Thrash Metal desde Mosquera, Cundinamarca, Colombia. Conoce nuestra música, historia y próximas fechas.",
  keywords: [
    "Ulfur",
    "Black Metal",
    "Death Metal",
    "Thrash Metal",
    "Colombia",
    "Mosquera",
    "Warframe Records",
    "Círculo de Fuego",
  ],
  openGraph: {
    title: "ULFUR — Black · Death · Thrash Metal",
    description:
      "Desde las entrañas de Cundinamarca. Black / Death / Thrash Metal.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cinzel.variable} ${barlowCondensed.variable} ${crimsonText.variable} bg-void font-body antialiased pb-52`}
      >
        <AudioPlayerProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <AudioPlayer />
        </AudioPlayerProvider>
      </body>
    </html>
  );
}