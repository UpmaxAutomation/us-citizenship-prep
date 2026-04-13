import type { Question } from "../data/questions";

/**
 * Single source of truth for supported languages.
 *
 * - `basePath` is the URL prefix: `""` for English (root), `"/es"`, `"/tr"`, etc.
 * - `routeMap` maps ENGLISH canonical paths → localized paths. Every entry represents
 *    a page that has been translated into this language. Pages NOT in the map are
 *    English-only — the `LanguageSwitcher` will fall back to `basePath` (landing page)
 *    when the user switches into a language that doesn't have that route yet.
 * - `enabled: false` registers a language for future rollout without shipping it.
 * - `dataLoader` is a dynamic import so each locale's question data is bundled only
 *    with its own route group (verified via bundle analyzer).
 */
export interface LanguageConfig {
  code: "en" | "es" | "tr" | "zh" | "tl" | "vi";
  /** Native label used in the language switcher (e.g. "Türkçe"). */
  label: string;
  /** English label, for accessibility and admin UI. */
  englishLabel: string;
  /** BCP-47 tag for `<html lang>`, Web Speech API, hreflang. */
  bcp47: string;
  /** URL prefix — `""` for English root, `/es`, `/tr`. */
  basePath: string;
  /** English canonical path → localized path. Pages absent here fall back to `basePath`. */
  routeMap: Record<string, string>;
  /** When false, the language is registered but not rendered in the switcher or sitemap. */
  enabled: boolean;
  /** Dynamic import — keeps each locale's data out of other locale bundles. */
  dataLoader: () => Promise<{ questions: Question[] }>;
}

export const LANGUAGES: LanguageConfig[] = [
  {
    code: "en",
    label: "EN",
    englishLabel: "English",
    bcp47: "en-US",
    basePath: "",
    routeMap: {},
    enabled: true,
    dataLoader: () =>
      import("../data/questions").then((m) => ({ questions: m.questions })),
  },
  {
    code: "es",
    label: "ES",
    englishLabel: "Spanish",
    bcp47: "es-US",
    basePath: "/es",
    routeMap: {
      "/": "/es",
      "/study": "/es/estudio",
      "/questions": "/es/preguntas",
      "/practice-test": "/es/examen-de-practica",
    },
    enabled: true,
    dataLoader: () =>
      import("../data/questions-es").then((m) => ({
        questions: m.questionsEs,
      })),
  },
  {
    code: "tr",
    label: "TR",
    englishLabel: "Turkish",
    bcp47: "tr-TR",
    basePath: "/tr",
    routeMap: {
      "/": "/tr",
      "/study": "/tr/calisma",
      "/questions": "/tr/sorular",
      "/practice-test": "/tr/deneme-sinavi",
    },
    enabled: true,
    dataLoader: () =>
      import("../data/questions-tr").then((m) => ({
        questions: m.questionsTr,
      })),
  },
  {
    code: "zh",
    label: "中文",
    englishLabel: "Chinese",
    bcp47: "zh-CN",
    basePath: "/zh",
    routeMap: {},
    enabled: false,
    dataLoader: () =>
      import("../data/questions").then((m) => ({ questions: m.questions })),
  },
  {
    code: "tl",
    label: "TL",
    englishLabel: "Tagalog",
    bcp47: "tl-PH",
    basePath: "/tl",
    routeMap: {},
    enabled: false,
    dataLoader: () =>
      import("../data/questions").then((m) => ({ questions: m.questions })),
  },
  {
    code: "vi",
    label: "VI",
    englishLabel: "Vietnamese",
    bcp47: "vi-VN",
    basePath: "/vi",
    routeMap: {},
    enabled: false,
    dataLoader: () =>
      import("../data/questions").then((m) => ({ questions: m.questions })),
  },
];

export const DEFAULT_LANGUAGE = LANGUAGES[0];
export const ENABLED_LANGUAGES = LANGUAGES.filter((l) => l.enabled);

export function getLanguageByCode(code: string): LanguageConfig | undefined {
  return LANGUAGES.find((l) => l.code === code);
}

/**
 * Infer the active language from a URL pathname.
 * Returns English for any path that doesn't match a localized basePath.
 */
export function getLanguageFromPath(pathname: string): LanguageConfig {
  const firstSegment = `/${pathname.split("/").filter(Boolean)[0] ?? ""}`;
  const match = LANGUAGES.find(
    (l) => l.basePath && firstSegment === l.basePath && l.enabled
  );
  return match ?? DEFAULT_LANGUAGE;
}

/**
 * Reverse a localized pathname back to its canonical English path.
 * For dynamic question slugs (/es/preguntas/some-slug), strips the basePath
 * and maps the first segment via the language's routeMap.
 */
export function toCanonicalPath(
  pathname: string,
  lang: LanguageConfig
): string {
  if (lang.code === "en") return pathname;
  if (pathname === lang.basePath) return "/";

  // Strip basePath prefix.
  const withoutBase = pathname.startsWith(`${lang.basePath}/`)
    ? pathname.slice(lang.basePath.length)
    : pathname;

  // Reverse-lookup the routeMap: find the English path whose localized value
  // matches the start of our pathname.
  for (const [enPath, locPath] of Object.entries(lang.routeMap)) {
    if (enPath === "/") continue;
    if (pathname === locPath) return enPath;
    if (pathname.startsWith(`${locPath}/`)) {
      return `${enPath}${pathname.slice(locPath.length)}`;
    }
  }

  return withoutBase || "/";
}

/**
 * Map an English canonical path to its localized equivalent.
 * Falls back to the language's basePath when the route isn't translated.
 */
export function toLocalizedPath(
  canonicalPath: string,
  lang: LanguageConfig
): string {
  if (lang.code === "en") return canonicalPath;

  // Exact mapping in the routeMap (covers /, /study, /questions, /practice-test).
  if (lang.routeMap[canonicalPath]) return lang.routeMap[canonicalPath];

  // Dynamic child path of a mapped route (e.g. /questions/some-slug).
  for (const [enPath, locPath] of Object.entries(lang.routeMap)) {
    if (enPath === "/") continue;
    if (canonicalPath.startsWith(`${enPath}/`)) {
      return `${locPath}${canonicalPath.slice(enPath.length)}`;
    }
  }

  // Untranslated page — fall back to the landing page of the target language.
  return lang.basePath || "/";
}

/**
 * Localize a nav/footer href for the given language.
 * Unlike `toLocalizedPath`, this does NOT fall back to basePath for untranslated
 * routes — it keeps the original English path so nav links don't redirect to the
 * landing page for pages that haven't been translated yet.
 */
export function localizeNavHref(href: string, lang: LanguageConfig): string {
  if (lang.code === "en") return href;

  // Exact match in routeMap.
  if (lang.routeMap[href]) return lang.routeMap[href];

  // Child path of a mapped route (e.g. /questions/some-slug).
  for (const [enPath, locPath] of Object.entries(lang.routeMap)) {
    if (enPath === "/") continue;
    if (href.startsWith(`${enPath}/`)) {
      return `${locPath}${href.slice(enPath.length)}`;
    }
  }

  // Not translated — keep original English path unchanged.
  return href;
}
