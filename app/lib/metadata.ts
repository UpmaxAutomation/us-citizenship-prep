import type { Metadata } from "next";

export const siteConfig = {
  name: "US Citizenship Test Prep",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.uscitizenshiptestprep.com",
  description:
    "Master all 128 USCIS civics questions for your naturalization interview. Free flashcards, quizzes, and spaced repetition. Updated for the 2025 test.",
};

export function buildMetadata({
  title,
  description,
  path = "/",
  ogType,
  locale,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogType?: string;
  locale?: "en" | "es";
}): Metadata {
  // For <title> tag: just pass the raw title — layout.tsx template adds "| US Citizenship Test Prep"
  // For OG/Twitter: use full title with site name (social cards don't use the template)
  const ogTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | All 128 USCIS Civics Questions (2025)`;
  const pageDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  const ogImageUrl = title
    ? `${siteConfig.url}/api/og?title=${encodeURIComponent(title)}${ogType ? `&type=${encodeURIComponent(ogType)}` : ""}`
    : `${siteConfig.url}/og-image.png`;

  const meta: Metadata = {
    description: pageDescription,
    openGraph: {
      title: ogTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "US Citizenship Test Prep - All 128 USCIS Questions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: pageDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: url,
      languages: {
        "en": locale === "es" ? `${siteConfig.url}${path.replace(/^\/es/, "").replace(/\/estudio/, "/study").replace(/\/preguntas/, "/questions").replace(/\/examen-de-practica/, "/practice-test") || "/"}` : `${siteConfig.url}${path}`,
        "es": locale === "es" ? url : `${siteConfig.url}/es${path === "/" ? "" : path.replace(/^\/study/, "/estudio").replace(/^\/questions$/, "/preguntas").replace(/^\/practice-test/, "/examen-de-practica")}`,
      },
    },
  };

  if (title) {
    meta.title = title;
  }

  return meta;
}
