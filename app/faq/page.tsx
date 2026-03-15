import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import AuthorAttribution from "@/app/components/AuthorAttribution";
import { buildMetadata, siteConfig } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/app/lib/schema";
import { allFaqs, faqCategories } from "@/app/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "US Citizenship Test FAQ — Your Questions Answered",
  description:
    "Answers to the most common questions about the US citizenship test, eligibility requirements, study strategies, interview preparation, fees, and what happens after naturalization.",
  path: "/faq",
});

// Map of keywords to internal links for enriching FAQ answers
function enrichAnswer(answer: string): React.ReactNode {
  // Define link mappings
  const linkMap: { pattern: RegExp; href: string; className: string }[] = [
    {
      pattern: /our questions page/g,
      href: "/questions",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /our study guide/g,
      href: "/study-guide",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /our practice test/g,
      href: "/practice-test",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /practice tests/g,
      href: "/practice-test",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /our free study tool/g,
      href: "/study",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /our flashcard study tool/g,
      href: "/study",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /flashcard study tool/g,
      href: "/study",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /our senior exemption page/g,
      href: "/senior-exemption",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /senior exemption page/g,
      href: "/senior-exemption",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /our interview checklist/g,
      href: "/interview-checklist",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /our printable study guide/g,
      href: "/printable-study-guide",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /our state information page/g,
      href: "/#states",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /our oath of allegiance page/g,
      href: "/oath-of-allegiance",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
    {
      pattern: /oath of allegiance page/g,
      href: "/oath-of-allegiance",
      className:
        "text-blue-400 hover:text-blue-300 underline underline-offset-2",
    },
  ];

  // For simplicity in a server component, we use string replacement
  // and render with dangerouslySetInnerHTML for the linked content
  let enriched = answer;
  for (const mapping of linkMap) {
    enriched = enriched.replace(
      mapping.pattern,
      `<a href="${mapping.href}" class="${mapping.className}">${mapping.pattern.source.replace(/\\/g, "")}</a>`
    );
  }

  // If no links were added, return plain text
  if (enriched === answer) {
    return answer;
  }

  return <span dangerouslySetInnerHTML={{ __html: enriched }} />;
}

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "FAQ", url: `${siteConfig.url}/faq` },
  ]);

  const faqSchema = generateFAQSchema(allFaqs);

  // Group FAQs by category
  const grouped: Record<string, typeof allFaqs> = {};
  for (const cat of faqCategories) {
    grouped[cat] = allFaqs.filter((faq) => faq.category === cat);
  }

  // Category icons and colors
  const categoryStyles: Record<
    string,
    { color: string; bgColor: string; borderColor: string }
  > = {
    "About the Test": {
      color: "text-blue-300",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    Eligibility: {
      color: "text-emerald-300",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    "Study Tips": {
      color: "text-amber-300",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    "Interview Day": {
      color: "text-indigo-300",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    "Fees & Filing": {
      color: "text-rose-300",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20",
    },
    "After Naturalization": {
      color: "text-cyan-300",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <div className="min-h-screen pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 pt-6">
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
              <span className="text-slate-300">FAQ</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently Asked Questions About{" "}
            <span className="text-blue-400">US Citizenship</span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Everything you need to know about the US citizenship test,
            eligibility requirements, how to study, what to expect on interview
            day, application fees, and life after naturalization. Select any
            question to see the answer.
          </p>
        </header>

        {/* Quick Navigation */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">
              Jump to Category
            </h2>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => {
                const style = categoryStyles[cat];
                return (
                  <a
                    key={cat}
                    href={`#${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${style.bgColor} ${style.color} border ${style.borderColor} hover:opacity-80 transition-opacity`}
                  >
                    {cat}
                    <span className="ml-1.5 text-xs opacity-60">
                      ({grouped[cat].length})
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        {faqCategories.map((cat) => {
          const style = categoryStyles[cat];
          return (
            <section
              key={cat}
              id={cat
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/&/g, "and")}
              className="max-w-3xl mx-auto px-4 mt-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-2 h-8 rounded-full ${style.bgColor}`}
                  style={{
                    backgroundColor:
                      cat === "About the Test"
                        ? "rgb(96, 165, 250)"
                        : cat === "Eligibility"
                        ? "rgb(52, 211, 153)"
                        : cat === "Study Tips"
                        ? "rgb(251, 191, 35)"
                        : cat === "Interview Day"
                        ? "rgb(129, 140, 248)"
                        : cat === "Fees & Filing"
                        ? "rgb(251, 113, 133)"
                        : "rgb(103, 232, 249)",
                  }}
                />
                <h2 className={`text-2xl font-bold ${style.color}`}>
                  {cat}
                </h2>
                <span className="text-sm text-slate-500">
                  {grouped[cat].length} questions
                </span>
              </div>

              <div className="space-y-3">
                {grouped[cat].map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-xl bg-slate-900/50 border border-slate-800/50 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:bg-slate-800/30 transition-colors list-none [&::-webkit-details-marker]:hidden">
                      <span className="pr-4">{faq.question}</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4 text-slate-400 leading-relaxed text-sm">
                      {enrichAnswer(faq.answer)}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          );
        })}

        {/* Additional Resources */}
        <section className="max-w-3xl mx-auto px-4 mt-14">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              If your question is not answered above, these resources may help.
              For official USCIS information, visit{" "}
              <a
                href="https://www.uscis.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                uscis.gov
              </a>
              .
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/blog/complete-guide-2025-citizenship-test"
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Complete 2025 Guide
                  </p>
                  <p className="text-xs text-slate-500">
                    Everything about the updated test
                  </p>
                </div>
              </Link>
              <Link
                href="/interview-checklist"
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Interview Checklist
                  </p>
                  <p className="text-xs text-slate-500">
                    What to bring and prepare
                  </p>
                </div>
              </Link>
              <Link
                href="/2025-test-changes"
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    2025 Test Changes
                  </p>
                  <p className="text-xs text-slate-500">
                    What changed and why it matters
                  </p>
                </div>
              </Link>
              <Link
                href="/oath-of-allegiance"
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Oath of Allegiance
                  </p>
                  <p className="text-xs text-slate-500">
                    Full text and what to expect
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Start preparing for your citizenship test
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our free tools to study all 128 USCIS civics questions with
              flashcards, practice tests, and spaced repetition.
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
                Take a Practice Test
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
              <Link
                href="/questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                All 128 Questions
              </Link>
              <Link
                href="/printable-study-guide"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Printable Study Guide
              </Link>
              <Link
                href="/interview-checklist"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Interview Checklist
              </Link>
            </div>
          </div>
        </section>

        {/* Author Attribution */}
        <div className="max-w-3xl mx-auto px-4">
          <AuthorAttribution />
        </div>
      </div>
    </>
  );
}
