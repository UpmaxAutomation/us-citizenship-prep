"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ENABLED_LANGUAGES,
  getLanguageFromPath,
  toCanonicalPath,
  toLocalizedPath,
} from "@/app/lib/languages";

/**
 * Iterates the language registry rather than hardcoding pairwise `.replace()` rules.
 * Falls back to the target language's landing page when the current route isn't
 * translated — avoids 404s and dead-ends for partially localized site sections.
 */
export default function LanguageSwitcher() {
  const pathname = usePathname();
  const active = getLanguageFromPath(pathname);
  const canonical = toCanonicalPath(pathname, active);

  return (
    <div
      className="flex items-center gap-1 text-xs"
      role="navigation"
      aria-label="Language switcher"
    >
      {ENABLED_LANGUAGES.map((lang) => {
        const isActive = lang.code === active.code;
        const href = isActive
          ? pathname
          : toLocalizedPath(canonical, lang);
        return (
          <Link
            key={lang.code}
            href={href}
            className={`px-2 py-1 rounded transition-colors ${
              isActive
                ? "bg-slate-800 text-white"
                : "text-slate-400 hover:text-white"
            }`}
            lang={lang.code}
            aria-current={isActive ? "true" : undefined}
            aria-label={lang.englishLabel}
          >
            {lang.label}
          </Link>
        );
      })}
    </div>
  );
}
