import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import LeadCapture from "@/app/components/LeadCapture";
import { buildMetadata } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateLearningResourceSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";
import { questions, categories, subcategories } from "@/app/data/questions";

export const metadata: Metadata = buildMetadata({
  title: "US Citizenship Test Study Guide — All 128 USCIS Questions by Topic",
  description:
    "Study all 128 USCIS citizenship test questions organized by category: American Government, American History, and Symbols & Holidays. Free study guide for 2025.",
  path: "/study-guide",
});

const categoryColors: Record<
  string,
  { border: string; bg: string; text: string; badge: string }
> = {
  "American Government": {
    border: "border-l-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  "American History": {
    border: "border-l-orange-500",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  "Symbols and Holidays": {
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const totalQuestions = questions.length;
const totalSubcategories = Object.values(subcategories).reduce(
  (sum, subs) => sum + subs.length,
  0
);

export default function StudyGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Study Guide", url: `${siteConfig.url}/study-guide` },
  ]);

  const learningResourceSchema = generateLearningResourceSchema({
    name: "US Citizenship Test Study Guide — All 128 USCIS Questions by Topic",
    description:
      "Comprehensive study guide covering all 128 official USCIS civics test questions organized by category and subcategory for the 2025 naturalization interview.",
    url: `${siteConfig.url}/study-guide`,
  });

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/study-guide`,
    ["h1", "header p", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={learningResourceSchema} />
      <JsonLd data={speakableSchema} />

      <div className="min-h-screen pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-6">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link
                href="/"
                className="hover:text-slate-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-slate-300">Study Guide</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            US Citizenship Test Study Guide
          </h1>
          <p
            className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl"
            data-speakable="true"
          >
            This study guide covers all {totalQuestions} official USCIS civics
            questions for the 2025 naturalization interview, organized into three
            main categories. Each category is broken down into subcategories so
            you can focus on specific topics. Use this guide to study
            systematically and track your progress through every section of the
            test.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium">
              <span className="text-white">{totalQuestions}</span>
              <span className="text-slate-400">Total Questions</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium">
              <span className="text-white">{categories.length}</span>
              <span className="text-slate-400">Categories</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium">
              <span className="text-white">{totalSubcategories}</span>
              <span className="text-slate-400">Subcategories</span>
            </span>
          </div>
        </header>

        {/* Category Cards */}
        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-6">
          {categories.map((cat) => {
            const colors = categoryColors[cat];
            const catQuestions = questions.filter((q) => q.category === cat);
            const catSubcategories = subcategories[cat];
            const categorySlug = slugify(cat);

            return (
              <Link
                key={cat}
                href={`/study-guide/${categorySlug}`}
                className={`block bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors border-l-4 ${colors.border}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {cat}
                    </h2>
                    <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                      {catQuestions.length} questions across{" "}
                      {catSubcategories.length} subcategories
                    </p>
                  </div>
                  <span
                    className={`flex-shrink-0 inline-flex items-center px-3 py-1.5 rounded-xl text-sm font-semibold border ${colors.badge}`}
                  >
                    {catQuestions.length} Qs
                  </span>
                </div>

                {/* Subcategory List */}
                <div className="mt-5 space-y-2">
                  {catSubcategories.map((sub) => {
                    const subCount = catQuestions.filter(
                      (q) => q.subcategory === sub
                    ).length;

                    return (
                      <div
                        key={sub}
                        className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/30"
                      >
                        <span className="text-sm text-slate-300">{sub}</span>
                        <span className="text-xs text-slate-500 font-medium">
                          {subCount} questions
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium">
                  <span className={colors.text}>Study this category</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={colors.text}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to start studying?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our interactive flashcards with spaced repetition to memorize
              all {totalQuestions} questions, or take a full practice test to
              check your readiness.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Start Studying Now
              </Link>
              <Link
                href="/practice-test"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Take Practice Test
              </Link>
            </div>
          </div>
        </div>

        {/* Lead Capture */}
        <div className="max-w-4xl mx-auto px-4 mt-12">
          <LeadCapture variant="inline" />
        </div>
      </div>
    </>
  );
}
