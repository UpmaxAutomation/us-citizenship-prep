"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="border-b border-slate-800/50 bg-slate-950" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
        >
          <span className="text-blue-400">US</span> Citizenship Prep
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/study"
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Study
          </Link>
          <Link
            href="/practice-test"
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Practice Test
          </Link>
          <Link
            href="/questions"
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            All 128 Questions
          </Link>
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
              More
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
            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-slate-900 border border-slate-800 shadow-xl shadow-black/20 py-1 z-50">
                <Link
                  href="/reading-writing"
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  Reading & Writing
                </Link>
                <Link
                  href="/interview-guide"
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  Interview Guide
                </Link>
                <Link
                  href="/2025-test-changes"
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  2025 Test Changes
                </Link>
                <Link
                  href="/senior-exemption"
                  className="block px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  Senior 65/20
                </Link>
              </div>
            )}
          </div>
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
      {menuOpen && (
        <div className="sm:hidden border-t border-slate-800/50 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            <Link
              href="/study"
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Study
            </Link>
            <Link
              href="/practice-test"
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Practice Test
            </Link>
            <Link
              href="/questions"
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              All 128 Questions
            </Link>
            <Link
              href="/reading-writing"
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Reading & Writing
            </Link>
            <Link
              href="/interview-guide"
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Interview Guide
            </Link>
            <Link
              href="/2025-test-changes"
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              2025 Test Changes
            </Link>
            <Link
              href="/senior-exemption"
              className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Senior 65/20
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
