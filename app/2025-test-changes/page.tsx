import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title:
    "2025 USCIS Citizenship Test Changes — Everything You Need to Know",
  description:
    "Complete guide to the 2025 USCIS citizenship test changes: 128 questions, new passing score of 12/20, updated topics, and 65/20 exemption details. Old test vs new test comparison.",
  path: "/2025-test-changes",
});

const faqs = [
  {
    question: "When did the new citizenship test take effect?",
    answer:
      "The updated 128-question civics test took effect in October 2025 for all naturalization interviews.",
  },
  {
    question: "Do I need to study all 128 questions?",
    answer:
      "Yes. During your interview, the USCIS officer will ask up to 20 questions randomly selected from the full pool of 128. You cannot predict which questions will be asked.",
  },
  {
    question: "Is the passing score still 60%?",
    answer:
      "Yes. The passing score remains 60%. Under the new format, you need 12 correct out of 20 questions, compared to 6 out of 10 under the old format.",
  },
  {
    question: "Are the old 100 questions still on the test?",
    answer:
      "Most of the original 100 questions are included in the new 128-question pool, some with updated wording. Twenty-eight new questions were added.",
  },
  {
    question: "Can I still take the old version of the test?",
    answer:
      "No. All naturalization interviews after October 2025 use the new 128-question format exclusively.",
  },
  {
    question: "Is the new test harder than the old one?",
    answer:
      "The relative difficulty is similar since the passing percentage is still 60%. However, you need to study more questions (128 vs 100) and the interview is longer (20 questions vs 10). With proper preparation using all 128 questions, most applicants pass.",
  },
];

const newTopics = [
  {
    title: "U.S. Geography",
    description:
      "More questions about states, borders, and geographic features of the United States.",
  },
  {
    title: "Recent American History",
    description:
      "Events from the late 20th and early 21st century, expanding the historical scope of the test.",
  },
  {
    title: "Government Structure",
    description:
      "Expanded coverage of federal, state, and local government roles and how they interact.",
  },
  {
    title: "Rights and Responsibilities",
    description:
      "Additional questions about civic duties and constitutional rights of citizens and residents.",
  },
  {
    title: "Symbols and Holidays",
    description:
      "Some new questions about American symbols, national landmarks, and their significance.",
  },
];

const comparisonRows = [
  {
    feature: "Total study questions",
    old: "100",
    current: "128",
  },
  {
    feature: "Questions asked at interview",
    old: "Up to 10",
    current: "Up to 20",
  },
  {
    feature: "Correct answers to pass",
    old: "6 out of 10",
    current: "12 out of 20",
  },
  {
    feature: "Passing percentage",
    old: "60%",
    current: "60% (unchanged)",
  },
  {
    feature: "65/20 exemption questions",
    old: "20",
    current: "20",
  },
  {
    feature: "Categories",
    old: "3 (same)",
    current: "3 (same)",
  },
  {
    feature: "English test format",
    old: "Reading + Writing",
    current: "Reading + Writing (unchanged)",
  },
  {
    feature: "Interview language",
    old: "English required*",
    current: "English required*",
  },
  {
    feature: "Test format",
    old: "Oral (officer asks)",
    current: "Oral (officer asks, unchanged)",
  },
  {
    feature: "Officer stops asking at",
    old: "6 correct",
    current: "12 correct",
  },
];

export default function TestChangesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "2025 Test Changes", url: `${siteConfig.url}/2025-test-changes` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/2025-test-changes`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={speakableSchema} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "2025 USCIS Citizenship Test Changes — Everything You Need to Know",
          description:
            "Complete guide to the 2025 USCIS citizenship test changes.",
          url: `${siteConfig.url}/2025-test-changes`,
          datePublished: "2025-10-01",
          dateModified: "2026-03-02",
          author: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          inLanguage: "en",
        }}
      />

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
              <span className="text-slate-300">2025 Test Changes</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            2025 USCIS Citizenship Test Changes{" "}
            <span className="text-blue-400">
              — Everything You Need to Know
            </span>
          </h1>
          <p
            data-speakable="true"
            className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl"
          >
            In October 2025, USCIS rolled out a significantly updated
            citizenship civics test. The question pool expanded from 100 to 128
            questions, the interview format changed from 10 questions to 20, and
            the passing threshold increased from 6/10 to 12/20. This guide
            breaks down every change and what it means for your preparation.
          </p>
        </header>

        {/* Section 1: Summary of Changes */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Summary of Changes
          </h2>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <ul className="space-y-3 text-slate-400 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">Question pool:</strong> 100 →
                  128 questions (28 new questions)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">Questions asked:</strong> 10 →
                  20 per interview
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">Passing score:</strong> 6/10 →
                  12/20 (still 60%)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">
                    65/20 exemption questions:
                  </strong>{" "}
                  20 designated questions (similar concept)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">New topics added:</strong>{" "}
                  geography, recent events, expanded government structure
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                <span>
                  <strong className="text-white">English test:</strong> format
                  remains the same (reading + writing)
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Old Test vs New Test */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Old Test vs New Test — Side by Side
          </h2>
          <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-800/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
                      Old Test (Pre-2025)
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
                      New Test (2025+)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="px-4 py-3 text-sm text-white font-medium border-t border-slate-800/50">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-400 border-t border-slate-800/50">
                        {row.old}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-400 border-t border-slate-800/50">
                        {row.current}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="px-4 py-3 text-xs text-slate-500 border-t border-slate-800/50">
              *Except for 65/20 exemption applicants who may test in native
              language
            </p>
          </div>
        </section>

        {/* Section 3: Is the New Test Harder? */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Is the New Test Harder?
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              The passing percentage remains 60%, so the relative difficulty is
              similar to the old test. You still need to get the same proportion
              of questions right to pass.
            </p>
            <p>
              However, you now need to study 28 more questions than before (128
              vs 100). The interview itself is also longer — 20 questions
              instead of 10 — which can feel more stressful if you are not
              prepared for a longer session.
            </p>
            <p>
              On the positive side, with 20 questions asked, you have
              significantly more chances to recover from a wrong answer. Under
              the old format, missing just 5 out of 10 meant failure. Under the
              new format, you can miss up to 8 out of 20 and still pass.
            </p>
            <p>
              The new questions cover some topics that are more specific,
              including U.S. geography and recent events. These may require
              extra attention during your preparation.
            </p>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mt-6">
              <p className="text-white font-medium">
                Bottom line:{" "}
                <span className="text-slate-400 font-normal">
                  If you study all 128 questions thoroughly, the test is very
                  passable. The new format actually gives you more room for
                  error than the old 6/10 format. Preparation is what matters
                  most.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: New Question Topics */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            New Question Topics
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            The 2025 update added and expanded questions in several subject
            areas. Here is what was added or broadened:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newTopics.map((topic) => (
              <div
                key={topic.title}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">
                  {topic.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: How to Prepare */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            How to Prepare for the 2025 Format
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                1
              </span>
              <div>
                <h3 className="text-white font-medium">
                  Study all 128 questions
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-1">
                  Do not rely on old study materials with only 100 questions.
                  The 28 new questions can and will appear on your interview.
                  Use our{" "}
                  <Link
                    href="/questions"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    complete question list
                  </Link>{" "}
                  to make sure you cover everything.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                2
              </span>
              <div>
                <h3 className="text-white font-medium">
                  Take full 20-question practice tests
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-1">
                  Build stamina for the longer interview format. Our{" "}
                  <Link
                    href="/practice-test"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    practice test
                  </Link>{" "}
                  simulates the real experience with 20 randomly selected
                  questions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                3
              </span>
              <div>
                <h3 className="text-white font-medium">
                  Focus on the new questions
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-1">
                  The 28 new questions are what most older study guides miss.
                  Pay extra attention to geography, recent events, and expanded
                  government structure topics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                4
              </span>
              <div>
                <h3 className="text-white font-medium">
                  Practice answering orally
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-1">
                  The civics test is oral, not written. Practice saying your
                  answers out loud rather than just reading them silently. This
                  builds confidence for the real interview.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                5
              </span>
              <div>
                <h3 className="text-white font-medium">
                  Use spaced repetition
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-1">
                  Retain all 128 questions by using our{" "}
                  <Link
                    href="/study"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    flashcard system
                  </Link>{" "}
                  with built-in spaced repetition. Questions you struggle with
                  appear more often, while mastered ones space out.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                6
              </span>
              <div>
                <h3 className="text-white font-medium">
                  Study state-specific answers
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-1">
                  Some questions require answers specific to your state —
                  your senators, governor, and state capital. Make sure you
                  know the correct answers for where you live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: 65/20 Exemption Changes */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            65/20 Exemption Changes
          </h2>
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mt-0.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h3 className="text-emerald-300 font-semibold mt-1">
                What is the 65/20 Exemption?
              </h3>
            </div>
            <ul className="space-y-3 text-slate-400 leading-relaxed ml-11">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  The 65/20 exemption still exists: applicants aged 65+ with
                  20+ years as a permanent resident qualify
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  They study only 20 designated questions (marked with a{" "}
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    65/20
                  </span>{" "}
                  badge)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  They may take the civics test in their native language
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  They are exempt from the English reading/writing test
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  The designated 65/20 questions have been updated for the 2025
                  test
                </span>
              </li>
            </ul>
            <div className="mt-6 ml-11">
              <Link
                href="/senior-exemption"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
              >
                View the full 65/20 study guide
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
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
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-slate-400 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to study the 2025 test?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our free flashcards, practice tests, and full question
              reference to master all 128 USCIS civics questions before your
              naturalization interview.
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
              <Link
                href="/questions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                View All 128 Questions
              </Link>
              <Link
                href="/senior-exemption"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                65/20 Senior Exemption Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
