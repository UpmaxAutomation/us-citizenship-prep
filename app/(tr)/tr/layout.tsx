import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ServiceWorkerRegistrar from "@/app/components/ServiceWorkerRegistrar";
import SiteNav from "@/app/components/SiteNav";
import Footer from "@/app/components/Footer";
import GoogleTagManager from "@/app/components/GoogleTagManager";
import CookieConsent from "@/app/components/CookieConsent";
import JsonLd from "@/app/components/JsonLd";
import { LocaleProvider } from "@/app/lib/LocaleContext";

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
      "ABD Vatandaslik Sinavi Hazirlik | 128 USCIS Sivil Bilgiler Sorusu (2025)",
    template: "%s | ABD Vatandaslik Hazirlik",
  },
  description:
    "Vatandaslik mulakati icin 128 USCIS sivil bilgiler sorusunu ogrenin. Ucretsiz calisma kartlari, deneme sinavlari ve aralikli tekrar. 2025 sinavi icin guncellendi.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Vatandaslik Hazirlik",
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon-192.png",
  },
  keywords: [
    "ABD vatandaslik sinavi",
    "USCIS sivil bilgiler sorulari",
    "vatandaslik sinavi 2025",
    "128 sivil bilgiler sorusu",
    "naturalizasyon sinavi",
    "vatandaslik sinavi hazirligi",
    "USCIS Turkce",
    "sivil bilgiler pratik",
    "naturalizasyon mulakati",
    "Amerikan vatandasligi",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function TurkishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${inter.className} bg-slate-950 text-white min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
        >
          Ana iceriye atla
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ABD Vatandaslik Sinavi Hazirlik",
            url: "https://www.uscitizenshiptestprep.com/tr",
            inLanguage: "tr",
          }}
        />
        <GoogleTagManager />
        <ServiceWorkerRegistrar />
        <SiteNav />
        <LocaleProvider code="tr">
          <main id="main-content">{children}</main>
        </LocaleProvider>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
