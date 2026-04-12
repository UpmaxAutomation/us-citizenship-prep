import type { Metadata } from "next";
import {
  ENABLED_LANGUAGES,
  LANGUAGES,
  getLanguageByCode,
  toCanonicalPath,
  toLocalizedPath,
  type LanguageConfig,
} from "./languages";

export const siteConfig = {
  name: "US Citizenship Test Prep",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.uscitizenshiptestprep.com",
  description:
    "Master all 128 USCIS civics questions for your naturalization interview. Free flashcards, quizzes, and spaced repetition. Updated for the 2025 test.",
};

/**
 * Build `alternates.languages` from the registry rather than pairwise `.replace()`.
 * Given any `path` (which may already be localized) and the current `locale`, we
 * reverse-map to the canonical English path and forward-map to every enabled language.
 * Untranslated routes fall back to the target language's basePath (see
 * `toLocalizedPath`) — this prevents broken hreflang links into 404s.
 */
function buildHreflangLanguages(
  path: string,
  currentLocaleCode: LanguageConfig["code"]
): Record<string, string> {
  const currentLang =
    getLanguageByCode(currentLocaleCode) ?? LANGUAGES[0];
  const canonical = toCanonicalPath(path, currentLang);
  const map: Record<string, string> = {};
  for (const lang of ENABLED_LANGUAGES) {
    map[lang.bcp47] = `${siteConfig.url}${toLocalizedPath(canonical, lang)}`;
  }
  return map;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  ogType,
  locale = "en",
}: {
  title?: string;
  description?: string;
  path?: string;
  ogType?: string;
  locale?: LanguageConfig["code"];
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
      locale: (getLanguageByCode(locale) ?? LANGUAGES[0]).bcp47.replace("-", "_"),
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
      languages: buildHreflangLanguages(path, locale),
    },
  };

  if (title) {
    meta.title = title;
  }

  return meta;
}
