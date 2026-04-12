import type { MetadataRoute } from "next";
import { states, stateNameToSlug } from "./data/states";
import { blogPosts } from "./data/blog-posts";
import { categories, subcategories, questions } from "./data/questions";
import { ENABLED_LANGUAGES, toLocalizedPath } from "./lib/languages";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.uscitizenshiptestprep.com";

const LAST_MODIFIED = new Date("2026-03-14");

/**
 * For a canonical English path, return the localized URL (absolute) for each
 * enabled language. Languages that don't have a `routeMap` entry for this path
 * fall back to their landing page via `toLocalizedPath`.
 *
 * Consumed as the `alternates.languages` field on a sitemap entry — Next.js
 * emits one `<xhtml:link rel="alternate" hreflang="...">` per entry.
 */
function hreflangFor(canonicalPath: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const lang of ENABLED_LANGUAGES) {
    map[lang.bcp47] = `${BASE_URL}${toLocalizedPath(canonicalPath, lang)}`;
  }
  return map;
}

/**
 * Path is considered translated into `lang` when `routeMap[canonicalPath]`
 * exists — otherwise `toLocalizedPath` falls back to `basePath` and we'd emit
 * a redundant landing-page URL from every untranslated route.
 */
function emitLocalizedClones(
  canonicalPath: string,
  lastModified: Date,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap {
  return ENABLED_LANGUAGES.filter(
    (lang) => lang.code !== "en" && lang.routeMap[canonicalPath]
  ).map((lang) => ({
    url: `${BASE_URL}${lang.routeMap[canonicalPath]}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: hreflangFor(canonicalPath) },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/study`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/practice-test`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/questions`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reading-writing`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/interview-guide`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/2025-test-changes`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/senior-exemption`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/eligibility-checker`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/n400-guide`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/citizenship-timeline`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/citizenship-costs`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/daily-challenge`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/printable-study-guide`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/interview-checklist`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/oath-of-allegiance`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${BASE_URL}/state/${stateNameToSlug(state.name)}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const questionPages: MetadataRoute.Sitemap = questions.map((q) => ({
    url: `${BASE_URL}/questions/${q.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const studyGuidePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/study-guide`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...categories.map((cat) => ({
      url: `${BASE_URL}/study-guide/${slugify(cat)}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...categories.flatMap((cat) =>
      (subcategories[cat] || []).map((sub) => ({
        url: `${BASE_URL}/study-guide/${slugify(cat)}/${slugify(sub)}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    ),
  ];

  // Localized landing/study/questions/practice-test for every enabled language
  // (excluding English; that's already in `staticPages`). Driven by `routeMap`
  // so adding Turkish/Chinese/etc is zero-code — just flip `enabled: true` in
  // `app/lib/languages.ts` and list the localized paths.
  const localizedPages: MetadataRoute.Sitemap = [
    ...emitLocalizedClones("/", LAST_MODIFIED, "weekly", 0.8),
    ...emitLocalizedClones("/study", LAST_MODIFIED, "monthly", 0.7),
    ...emitLocalizedClones("/questions", LAST_MODIFIED, "monthly", 0.7),
    ...emitLocalizedClones(
      "/practice-test",
      LAST_MODIFIED,
      "monthly",
      0.7
    ),
  ];

  // Decorate the English canonical entries with hreflang siblings for the
  // routes that exist in other languages. Static non-translated pages
  // (about, blog, state pages) stay single-language and get no alternates.
  const TRANSLATED_CANONICAL_PATHS = new Set([
    "/",
    "/study",
    "/questions",
    "/practice-test",
  ]);

  const decoratedStatic = staticPages.map((entry) => {
    const canonicalPath =
      entry.url === BASE_URL ? "/" : entry.url.replace(BASE_URL, "");
    if (!TRANSLATED_CANONICAL_PATHS.has(canonicalPath)) return entry;
    return {
      ...entry,
      alternates: { languages: hreflangFor(canonicalPath) },
    };
  });

  return [
    ...decoratedStatic,
    ...localizedPages,
    ...statePages,
    ...questionPages,
    ...studyGuidePages,
    ...blogPages,
  ];
}
