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
import { questions } from "@/app/data/questions";

export const metadata: Metadata = buildMetadata({
  title:
    "65/20 Citizenship Test Exemption — Study Guide for Seniors (2025)",
  description:
    "Complete study guide for the 65/20 citizenship test exemption. All 20 simplified questions for applicants aged 65+ with 20+ years as permanent resident. Study in your language.",
  path: "/senior-exemption",
});

const seniorQuestions = questions.filter((q) => q.is6520);

const faqItems = [
  {
    question: "How do I know if I qualify for the 65/20 exemption?",
    answer:
      "You qualify if you are 65 or older AND have been a lawful permanent resident for at least 20 years at the time you file your N-400 application.",
  },
  {
    question:
      "Do I still need to take the civics test with the exemption?",
    answer:
      "Yes, you still take a civics test, but it covers only 20 designated questions instead of the full 128. The officer asks questions from this reduced set.",
  },
  {
    question: "Can my family member interpret for me?",
    answer:
      "Yes, your interpreter can be a family member or friend, as long as they are fluent in both English and your language and can accurately translate questions and answers.",
  },
  {
    question: "What if I fail the 65/20 civics test?",
    answer:
      "You will be scheduled for a retest in 60-90 days, just like the standard test. You only retake the portion you failed.",
  },
  {
    question:
      "Are the 65/20 questions easier than the regular questions?",
    answer:
      "The 65/20 questions are drawn from the same pool but focus on the most fundamental civics concepts. Many applicants find them more straightforward than the full 128-question set.",
  },
];

export default function SeniorExemptionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Senior 65/20 Exemption",
      url: `${siteConfig.url}/senior-exemption`,
    },
  ]);

  const faqSchema = generateFAQSchema(faqItems);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/senior-exemption`,
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
          "@type": "LearningResource",
          name: "65/20 Citizenship Test Exemption Study Guide",
          description:
            "All 20 designated civics questions for the 65/20 exemption.",
          url: `${siteConfig.url}/senior-exemption`,
          educationalLevel: "beginner",
          learningResourceType: "reference",
          interactivityType: "expositive",
          isAccessibleForFree: true,
          inLanguage: "en",
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />

      <div className="min-h-screen pb-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-4xl mx-auto px-4 pt-6"
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
              <span className="text-slate-300">
                Senior 65/20 Exemption
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            65/20 Citizenship Test Exemption — Study Guide for Seniors{" "}
            <span className="text-emerald-400">(2025)</span>
          </h1>
          <p
            className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl"
            data-speakable="true"
          >
            If you are 65 years or older and have been a lawful permanent
            resident of the United States for at least 20 years, you
            qualify for the 65/20 exemption. This means you only need to
            study 20 simplified civics questions instead of the full 128,
            and you may take the civics test in your native language. You
            are also exempt from the English reading and writing test.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium">
              <span className="text-emerald-300">20</span>
              <span className="text-emerald-400/70">Questions Only</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm font-medium">
              <span className="text-blue-300">Native Language</span>
              <span className="text-blue-400/70">OK</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium">
              <span className="text-indigo-300">No English Test</span>
            </span>
          </div>
        </header>

        {/* Eligibility Section */}
        <section className="max-w-4xl mx-auto px-4 mt-16">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Who Qualifies for the 65/20 Exemption?
          </h2>
          <div className="bg-slate-900/50 border-2 border-emerald-500/30 rounded-2xl p-6">
            <p className="text-white font-medium mb-4">
              You qualify if you meet BOTH of these requirements:
            </p>
            <ol className="space-y-3 text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-sm flex items-center justify-center mt-0.5">
                  1
                </span>
                <span>
                  You are{" "}
                  <strong className="text-white">
                    65 years of age or older
                  </strong>{" "}
                  at the time of filing your N-400
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-sm flex items-center justify-center mt-0.5">
                  2
                </span>
                <span>
                  You have been a{" "}
                  <strong className="text-white">
                    lawful permanent resident for at least 20 years
                  </strong>
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Benefits of the 65/20 Exemption
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">
                Only 20 Questions to Study
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instead of 128, you only need to learn 20 designated
                questions. All 20 are listed below.
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">
                Test in Your Native Language
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                You may take the civics test in your language. You can
                bring an interpreter to the interview.
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-400"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">
                Exempt from English Test
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                You do not need to take the English reading or writing
                test.
              </p>
            </div>
          </div>
        </section>

        {/* All 20 Questions */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            All 20 Questions for the 65/20 Exemption
          </h2>
          <div className="space-y-3">
            {seniorQuestions.map((q) => (
              <article
                key={q.id}
                className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-4 sm:p-5 hover:border-slate-700/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 font-mono text-sm font-bold text-slate-500 bg-slate-800/50 rounded-lg w-10 h-10 flex items-center justify-center mt-0.5">
                    {q.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 flex-wrap">
                      <p className="font-medium text-white leading-relaxed">
                        {q.question}
                      </p>
                      <span className="inline-flex items-center flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        65/20
                      </span>
                    </div>
                    <div className="mt-2">
                      {q.answers.length === 1 ? (
                        <p className="text-slate-400 text-sm">
                          {q.answers[0]}
                        </p>
                      ) : (
                        <ul className="list-disc list-inside text-slate-400 text-sm space-y-0.5">
                          {q.answers.map((answer, i) => (
                            <li key={i}>{answer}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Study CTA */}
        <section className="max-w-4xl mx-auto px-4 mt-12">
          <div className="bg-emerald-500/5 border-2 border-emerald-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Start studying only the 20 questions you need
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our interactive study tools to master the 20 designated
              65/20 questions and feel confident for your naturalization
              interview.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Study 65/20 Questions
              </Link>
              <Link
                href="/practice-test"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Take a Practice Test
              </Link>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            How to Apply for the Exemption
          </h2>
          <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
            <ul className="space-y-3 text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>
                  The exemption is part of the N-400 application
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>
                  Check the appropriate box on the N-400 form indicating
                  you qualify
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>
                  Bring proof of your age (birth certificate, passport)
                  and your Green Card showing 20+ years of permanent
                  residence
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>
                  You do not need to apply separately — USCIS will verify
                  your eligibility
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Language Section */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Can I Take the Test in My Language?
          </h2>
          <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-6">
            <ul className="space-y-3 text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  Yes, 65/20 applicants may take the civics test in their
                  native language
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  You may bring your own interpreter to the interview
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  The interpreter must be fluent in both English and your
                  language
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>USCIS does not provide interpreters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  The interpreter will translate the civics questions for
                  you and translate your answers for the officer
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details
                key={i}
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

        {/* Bottom CTA */}
        <section className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              More ways to prepare for your citizenship test
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Explore all our free study tools and resources to help you
              pass your naturalization interview.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Study Flashcards
              </Link>
              <Link
                href="/practice-test"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Practice Test
              </Link>
              <Link
                href="/questions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                All 128 Questions
              </Link>
              <Link
                href="/reading-writing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Reading & Writing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
