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
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  // For <title> tag: just pass the raw title — layout.tsx template adds "| US Citizenship Test Prep"
  // For OG/Twitter: use full title with site name (social cards don't use the template)
  const ogTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | All 128 USCIS Civics Questions (2025)`;
  const pageDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

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
          url: `${siteConfig.url}/og-image.png`,
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
      images: [`${siteConfig.url}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };

  if (title) {
    meta.title = title;
  }

  return meta;
}
