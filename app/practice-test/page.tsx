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
import AdUnit from "@/app/components/AdUnit";
import PracticeTest from "./PracticeTest";

export const metadata: Metadata = buildMetadata({
  title: "Free U.S. Citizenship Practice Test — 2025 Format (20 Questions)",
  description:
    "Take a free practice test with 20 random USCIS civics questions. Simulates the real citizenship interview format with 12/20 passing score. Updated for 2025.",
  path: "/practice-test",
});

const faqs = [
  {
    question: "How many questions are on the citizenship practice test?",
    answer:
      "This practice test randomly selects 20 questions from the official pool of 128 USCIS civics questions. You need to answer at least 12 out of 20 correctly (60%) to pass, just like the real naturalization interview.",
  },
  {
    question: "Is this practice test the same as the real USCIS test?",
    answer:
      "This practice test uses the same official 128 civics questions and the same 12/20 passing threshold. The main difference is that the real test is conducted orally by a USCIS officer during your naturalization interview — you answer verbally, not by selecting multiple choice options.",
  },
  {
    question: "Can I retake the practice test?",
    answer:
      "Yes, you can retake the practice test as many times as you like. Each attempt randomly selects 20 new questions from the 128-question pool, so you get a different test every time.",
  },
  {
    question: "What happens if I fail the actual citizenship test?",
    answer:
      "If you fail the civics portion of your naturalization interview, you will be given one more opportunity to retake it, typically within 60 to 90 days. You only need to retake the portion you failed (civics, English reading, or English writing).",
  },
  {
    question: "How should I study for the citizenship test?",
    answer:
      "The most effective approach is to study with flashcards using spaced repetition, which helps you remember answers long-term. Focus on understanding concepts rather than memorizing word-for-word. Practice regularly and take practice tests to track your progress. Our study tools at /study include flashcards, quizzes, and progress tracking.",
  },
];

export default function PracticeTestPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Practice Test", url: `${siteConfig.url}/practice-test` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/practice-test`,
    ["h1", "header p", "[data-speakable]"]
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
          name: "Free U.S. Citizenship Practice Test — 2025 Format",
          description:
            "Interactive 20-question practice test simulating the real USCIS citizenship interview.",
          url: `${siteConfig.url}/practice-test`,
          educationalLevel: "beginner",
          learningResourceType: "quiz",
          interactivityType: "active",
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
              <span className="text-slate-300">Practice Test</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Free U.S. Citizenship Practice Test{" "}
            <span className="text-blue-400">
              — 2025 Format (20 Questions)
            </span>
          </h1>
          <p
            className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl"
            data-speakable="true"
          >
            Take a realistic practice test with 20 random questions from the
            official USCIS civics question pool. Just like the real
            naturalization interview, you need to answer at least 12 out of 20
            questions correctly (60%) to pass. Your state-specific answers are
            automatically personalized.
          </p>
        </header>

        {/* Practice Test Client Component */}
        <div className="max-w-4xl mx-auto px-4 mt-10">
          <PracticeTest />
        </div>

        <AdUnit slot="auto" format="horizontal" className="max-w-4xl mx-auto px-4 my-8" />

        {/* SEO Content: How the Real Test Works */}
        <section className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold">
              How the Real Citizenship Test Works
            </h2>
            <div className="mt-4 text-slate-400 text-lg leading-relaxed space-y-4">
              <p>
                During your naturalization interview, a USCIS officer will ask
                you up to 20 civics questions from the official pool of 128
                questions. You must answer the questions orally — there are no
                written multiple-choice options. The officer will stop asking
                questions once you have answered 12 correctly, meaning you pass
                immediately without needing to answer all 20.
              </p>
              <p>
                If you answer fewer than 12 correctly after all 20 questions,
                you fail the civics portion. However, the civics test is only
                one part of the naturalization interview. You will also be
                tested on your ability to read and write in English. For the
                reading test, you must read one out of three sentences correctly
                in English. For the writing test, you must write one out of
                three sentences correctly in English.
              </p>
              <p>
                Applicants who qualify for the 65/20 exemption (age 65 or older
                with 20+ years as a lawful permanent resident) are tested on a
                smaller subset of the 128 questions and may take the test in
                their native language.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content: Tips */}
        <section className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold">
              Tips for Passing the Citizenship Test
            </h2>
            <ul className="mt-4 text-slate-400 text-lg leading-relaxed space-y-3 list-disc list-inside">
              <li>
                <span className="text-slate-200 font-medium">
                  Study a little every day.
                </span>{" "}
                Consistent short sessions (15-20 minutes) are more effective
                than long cramming sessions. Spaced repetition helps move
                answers into long-term memory.
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Focus on understanding, not memorization.
                </span>{" "}
                Learn why the answer is correct. Understanding the concepts
                behind American government and history makes it easier to
                recall answers under pressure.
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Know your state-specific answers.
                </span>{" "}
                Questions about your state&apos;s senators, governor, and
                capital require answers specific to where you live. Make sure
                you know the current officeholders for your state.
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Practice answering out loud.
                </span>{" "}
                The real test is oral — the officer asks you questions and you
                answer verbally. Practice saying your answers out loud so you
                feel comfortable during the interview.
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Take practice tests regularly.
                </span>{" "}
                Simulate the test experience with timed practice tests. This
                builds confidence and helps identify which topics need more
                review.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 mt-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
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
              Ready to keep studying?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use flashcards with spaced repetition to master all 128 civics
              questions, or browse the complete question list organized by
              category.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Study with Flashcards
              </Link>
              <Link
                href="/questions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Browse All 128 Questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
