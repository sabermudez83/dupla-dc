import type { Metadata } from "next";
import { Inter, Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bermúdez & Montefusco — Directores Creativos Freelance",
  description: "Directores Creativos Freelance. Rescate de cuentas, sprints de pitch y fortalecimiento creativo para agencias de publicidad.",
  keywords: [
    "Bermúdez & Montefusco",
    "Santiago Bermúdez",
    "Adrián Montefusco",
    "Dupla DC",
    "Director Creativo Freelance",
    "Dirección Creativa",
    "Publicidad Buenos Aires",
    "Pitch Creative Squad",
  ],
  openGraph: {
    title: "Bermúdez & Montefusco — Directores Creativos Freelance",
    description: "Ideas de alto voltaje para agencias de publicidad.",
    url: "https://dupla-dc.vercel.app",
    siteName: "Bermúdez & Montefusco",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bermúdez & Montefusco — Directores Creativos Freelance",
    description: "Directores Creativos Freelance.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${instrumentSerif.variable} ${spaceMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F7F6F4] text-[#111111] selection:bg-[#111111] selection:text-[#F7F6F4] antialiased">
        {children}
      </body>
    </html>
  );
}
