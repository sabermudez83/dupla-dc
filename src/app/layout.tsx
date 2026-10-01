import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bermúdez & Montefusco — Directores Creativos Freelance",
  description: "10 años pensando juntos. Cero tiempo de adaptación. Rescate de cuentas, sprints de pitch y fortalecimiento creativo para agencias de publicidad.",
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
    description: "10 años pensando juntos. Cero tiempo de adaptación. Ideas de alto voltaje para agencias de publicidad.",
    url: "https://dupla-dc.vercel.app",
    siteName: "Bermúdez & Montefusco",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bermúdez & Montefusco — Directores Creativos Freelance",
    description: "10 años pensando juntos. Cero tiempo de adaptación.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#0B0B0D] text-gray-100 selection:bg-[#D4FF00] selection:text-black antialiased">
        {children}
      </body>
    </html>
  );
}
