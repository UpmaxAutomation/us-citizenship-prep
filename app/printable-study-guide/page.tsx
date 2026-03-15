import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import AuthorAttribution from "@/app/components/AuthorAttribution";
import { buildMetadata, siteConfig } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateLearningResourceSchema,
} from "@/app/lib/schema";
import {
  questions,
  categories,
  subcategories,
} from "@/app/data/questions";
import PrintButton from "./PrintButton";

export const metadata: Metadata = buildMetadata({
  title:
    "Printable Citizenship Test Study Guide — All 128 Questions (PDF)",
  description:
    "Print-friendly study guide with all 128 USCIS civics questions and accepted answers organized by category. Perfect for offline study and quick reference.",
  path: "/printable-study-guide",
});

export default function PrintableStudyGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Printable Study Guide",
      url: `${siteConfig.url}/printable-study-guide`,
    },
  ]);

  const learningResourceSchema = generateLearningResourceSchema({
    name: "Printable US Citizenship Test Study Guide — All 128 Questions",
    description:
      "A comprehensive print-friendly reference guide containing all 128 official USCIS civics questions and their accepted answers, organized by category and subcategory.",
    url: `${siteConfig.url}/printable-study-guide`,
    resourceType: "reference",
    interactivityType: "expositive",
  });

  // Group questions by category, then subcategory
  const grouped: Record<string, Record<string, typeof questions>> = {};
  for (const cat of categories) {
    grouped[cat] = {};
    for (const sub of subcategories[cat]) {
      grouped[cat][sub] = questions.filter(
        (q) => q.category === cat && q.subcategory === sub
      );
    }
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={learningResourceSchema} />

      {/* Print-specific styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              body { background: white !important; color: black !important; }
              nav, footer, .print\\:hidden { display: none !important; }
              .print-section { break-inside: avoid; }
              .print-question { break-inside: avoid; margin-bottom: 0.5rem; }
              h1 { font-size: 1.5rem !important; color: black !important; }
              h2 { font-size: 1.25rem !important; color: black !important; border-bottom: 2px solid #333; padding-bottom: 0.25rem; margin-top: 1.5rem !important; }
              h3 { font-size: 1rem !important; color: #333 !important; margin-top: 1rem !important; }
              p, li, span { color: #333 !important; }
              .bg-slate-900\\/50, .bg-blue-500\\/5, .bg-amber-500\\/5, .bg-emerald-500\\/5 {
                background: transparent !important;
                border: 1px solid #ccc !important;
              }
              a { color: black !important; text-decoration: none !important; }
            }
          `,
        }}
      />

      <div className="min-h-screen pb-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-3xl mx-auto px-4 pt-6 print:hidden"
        >
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
              <span className="text-slate-300">Printable Study Guide</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Printable US Citizenship Test{" "}
            <span className="text-blue-400">Study Guide</span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            All 128 official USCIS civics questions and their accepted answers,
            organized by category and subcategory. Print this page or save it
            as a PDF for offline study. Each question includes every accepted
            answer so you know all the correct responses the USCIS officer will
            accept.
          </p>

          {/* Print Button + Stats */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <PrintButton />
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>{questions.length} questions</span>
              <span aria-hidden="true">|</span>
              <span>{categories.length} categories</span>
              <span aria-hidden="true">|</span>
              <span>Updated March 2026</span>
            </div>
          </div>
        </header>

        {/* Quick Tips */}
        <section className="max-w-3xl mx-auto px-4 mt-10 print:hidden">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-blue-300 mb-3">
              How to Use This Guide
            </h2>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">Print or save as PDF</strong>{" "}
                  — Click the Print button above. In the print dialog, select
                  &quot;Save as PDF&quot; to create a downloadable file.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">
                    Cover the answers to self-test
                  </strong>{" "}
                  — Use a piece of paper to cover the answers and quiz yourself
                  on each question.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">
                    Mark difficult questions
                  </strong>{" "}
                  — Highlight or circle questions you struggle with and review
                  them more frequently.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">
                    Practice saying answers aloud
                  </strong>{" "}
                  — The real test is oral. Reading silently is not enough.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-3xl mx-auto px-4 mt-10 print:hidden">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <ol className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    {cat}
                  </a>
                  <ul className="mt-1 ml-4 space-y-1">
                    {subcategories[cat].map((sub) => (
                      <li key={sub}>
                        <a
                          href={`#${sub.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm text-slate-400 hover:text-slate-300 transition-colors"
                        >
                          {sub} ({grouped[cat][sub].length} questions)
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* All Questions by Category */}
        {categories.map((cat) => (
          <section
            key={cat}
            id={cat.toLowerCase().replace(/\s+/g, "-")}
            className="max-w-3xl mx-auto px-4 mt-12 print-section"
          >
            <h2 className="text-2xl font-bold mb-2">{cat}</h2>
            <p className="text-slate-500 text-sm mb-6">
              {cat === "American Government" &&
                "Questions about the Constitution, branches of government, rights, and responsibilities."}
              {cat === "American History" &&
                "Questions about the colonial period, the 1800s, and recent American history."}
              {cat === "Symbols and Holidays" &&
                "Questions about national symbols, geography, and federal holidays."}
            </p>

            {subcategories[cat].map((sub) => (
              <div
                key={sub}
                id={sub.toLowerCase().replace(/\s+/g, "-")}
                className="mb-10"
              >
                <h3 className="text-lg font-semibold text-blue-300 mb-4 border-b border-slate-800 pb-2">
                  {sub}
                </h3>
                <div className="space-y-4">
                  {grouped[cat][sub].map((q) => (
                    <div
                      key={q.id}
                      className="print-question bg-slate-900/30 border border-slate-800/50 rounded-xl p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-bold flex items-center justify-center">
                          {q.id}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-white leading-snug">
                            {q.question}
                          </p>
                          <div className="mt-2">
                            {q.answers.length === 1 ? (
                              <p className="text-slate-400 text-sm">
                                <span className="text-emerald-400 font-medium">
                                  Answer:
                                </span>{" "}
                                {q.answers[0]}
                              </p>
                            ) : (
                              <div>
                                <p className="text-emerald-400 font-medium text-sm mb-1">
                                  Accepted answers:
                                </p>
                                <ul className="space-y-0.5">
                                  {q.answers.map((answer, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-slate-400 text-sm"
                                    >
                                      <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-slate-600" />
                                      <span>{answer}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          {q.is6520 && (
                            <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              65/20 Designated Question
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}

        {/* Disclaimer */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-3">Source & Disclaimer</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              All 128 questions and accepted answers are sourced from the
              official USCIS civics test materials, updated for the 2025 test
              version. Some questions require answers specific to your state of
              residence (such as your governor and US senators). Make sure you
              know your{" "}
              <Link
                href="/#states"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                state-specific answers
              </Link>{" "}
              before your interview. This study guide is provided for
              educational purposes and is not affiliated with or endorsed by
              USCIS.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 mt-12 print:hidden">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to test your knowledge?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              After reviewing all 128 questions, put your knowledge to the test
              with our free practice exam that simulates the real interview.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/practice-test"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Take a Practice Test
              </Link>
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Study with Flashcards
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
              <Link
                href="/questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Browse All Questions
              </Link>
              <Link
                href="/interview-checklist"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Interview Checklist
              </Link>
              <Link
                href="/faq"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </section>

        {/* Author Attribution */}
        <div className="max-w-3xl mx-auto px-4 print:hidden">
          <AuthorAttribution />
        </div>
      </div>
    </>
  );
}
