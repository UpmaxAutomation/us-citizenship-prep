import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ServiceWorkerRegistrar from "@/app/components/ServiceWorkerRegistrar";
import SiteNav from "@/app/components/SiteNav";
import Footer from "@/app/components/Footer";
import GoogleTagManager from "@/app/components/GoogleTagManager";
import CookieConsent from "@/app/components/CookieConsent";
import JsonLd from "@/app/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uscitizenshiptestprep.com"),
  title: {
    default:
      "Preparacion para el Examen de Ciudadania de EE.UU. | 128 Preguntas Civicas USCIS (2025)",
    template: "%s | Preparacion Ciudadania EE.UU.",
  },
  description:
    "Domina las 128 preguntas civicas del USCIS para tu entrevista de naturalizacion. Tarjetas de estudio, examenes de practica y repeticion espaciada gratis. Actualizado para el examen 2025.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ciudadania Prep",
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon-192.png",
  },
  keywords: [
    "examen de ciudadania americana",
    "preguntas civicas USCIS",
    "examen de ciudadania 2025",
    "128 preguntas civicas",
    "examen de naturalizacion",
    "preparacion examen ciudadania",
    "preguntas examen ciudadania",
    "USCIS en espanol",
    "examen civico practica",
    "entrevista naturalizacion",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-slate-950 text-white min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Preparacion Examen Ciudadania EE.UU.",
            url: "https://www.uscitizenshiptestprep.com/es",
            inLanguage: "es",
          }}
        />
        <GoogleTagManager />
        <ServiceWorkerRegistrar />
        <SiteNav />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
