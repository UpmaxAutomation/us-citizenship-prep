"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { getLanguageFromPath, localizeNavHref } from "@/app/lib/languages";
import { getNavStrings } from "@/app/lib/i18n-strings";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const pathname = usePathname();
  const lang = getLanguageFromPath(pathname);
  const t = getNavStrings(lang.code);
  const h = (href: string) => localizeNavHref(href, lang);

  return (
    <nav className="border-b border-slate-800/50 bg-slate-950" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link
          href={lang.basePath || "/"}
          className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
        >
          <span className="text-blue-400">US</span> Citizenship Prep
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href={h("/study")}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            {t.study}
          </Link>
          <Link
            href={h("/practice-test")}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            {t.practiceTest}
          </Link>
          <Link
            href={h("/questions")}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            {t.all128Questions}
          </Link>
          <Link
            href={h("/daily-challenge")}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            {t.dailyChallenge}
          </Link>
          {/* Process dropdown */}
          <div className="relative">
            <button
              type="button"
              className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => setProcessOpen((prev) => !prev)}
              onBlur={() => setTimeout(() => setProcessOpen(false), 150)}
              aria-expanded={processOpen}
              aria-haspopup="true"
            >
              {t.process}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${processOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className={`absolute right-0 top-full mt-2 w-48 rounded-xl bg-slate-900 border border-slate-800 shadow-xl shadow-black/20 py-1 z-50 ${processOpen ? "block" : "hidden"}`}>
                <Link
                  href={h("/eligibility-checker")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.eligibilityChecker}
                </Link>
                <Link
                  href={h("/n400-guide")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.n400Guide}
                </Link>
                <Link
                  href={h("/citizenship-timeline")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.timeline}
                </Link>
                <Link
                  href={h("/citizenship-costs")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.costs}
                </Link>
              </div>
          </div>
          {/* More dropdown */}
          <div className="relative">
            <button
              type="button"
              className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              onClick={() => setMoreOpen((prev) => !prev)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              {t.more}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className={`absolute right-0 top-full mt-2 w-48 rounded-xl bg-slate-900 border border-slate-800 shadow-xl shadow-black/20 py-1 z-50 ${moreOpen ? "block" : "hidden"}`}>
                <Link
                  href={h("/reading-writing")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.readingWriting}
                </Link>
                <Link
                  href={h("/interview-guide")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.interviewGuide}
                </Link>
                <Link
                  href={h("/2025-test-changes")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.testChanges2025}
                </Link>
                <Link
                  href={h("/senior-exemption")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.senior6520}
                </Link>
                <Link
                  href={h("/blog")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.blog}
                </Link>
                <Link
                  href={h("/about")}
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {t.about}
                </Link>
              </div>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`sm:hidden border-t border-slate-800/50 bg-slate-950 ${menuOpen ? "block" : "hidden"}`}>
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            <Link
              href={h("/study")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.study}
            </Link>
            <Link
              href={h("/practice-test")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.practiceTest}
            </Link>
            <Link
              href={h("/questions")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.all128Questions}
            </Link>
            <Link
              href={h("/daily-challenge")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.dailyChallenge}
            </Link>
            <Link
              href={h("/eligibility-checker")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.eligibilityChecker}
            </Link>
            <Link
              href={h("/n400-guide")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.n400Guide}
            </Link>
            <Link
              href={h("/citizenship-timeline")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.timeline}
            </Link>
            <Link
              href={h("/citizenship-costs")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.costs}
            </Link>
            <Link
              href={h("/reading-writing")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.readingWriting}
            </Link>
            <Link
              href={h("/interview-guide")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.interviewGuide}
            </Link>
            <Link
              href={h("/2025-test-changes")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.testChanges2025}
            </Link>
            <Link
              href={h("/senior-exemption")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.senior6520}
            </Link>
            <Link
              href={h("/blog")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.blog}
            </Link>
            <Link
              href={h("/about")}
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.about}
            </Link>
            <div className="border-t border-slate-800/50 mt-2 pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
    </nav>
  );
}
