import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistrar from "./components/ServiceWorkerRegistrar";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import GoogleTagManager from "./components/GoogleTagManager";
import CookieConsent from "./components/CookieConsent";
import JsonLd from "./components/JsonLd";
import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateEducationalProgramSchema,
  generateSpeakableSchema,
} from "./lib/schema";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#020617",
};

/*
 * Structured Data Testing:
 * - Google Rich Results Test: https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.uscitizenshiptestprep.com
 * - Schema.org Validator: https://validator.schema.org/?url=https%3A%2F%2Fwww.uscitizenshiptestprep.com
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uscitizenshiptestprep.com"),
  title: {
    default: "US Citizenship Test Prep | All 128 USCIS Civics Questions (2025)",
    template: "%s | US Citizenship Test Prep",
  },
  description:
    "Master all 128 USCIS civics questions for your naturalization interview. Free flashcards, quizzes, and spaced repetition. Updated for the 2025 test.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Citizenship Prep",
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon-192.png",
  },
  keywords: [
    "US citizenship test",
    "USCIS civics test",
    "citizenship test questions",
    "128 civics questions",
    "2025 citizenship test",
    "naturalization test prep",
    "citizenship test study guide",
    "USCIS test prep free",
    "civics test practice",
    "citizenship interview questions",
    "USCIS naturalization test 2025",
    "free citizenship test prep",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-950 text-white min-h-screen`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <JsonLd data={generateWebSiteSchema()} />
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateEducationalProgramSchema()} />
        <JsonLd
          data={generateSpeakableSchema("https://www.uscitizenshiptestprep.com", [
            "h1",
            "[data-speakable]",
          ])}
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
