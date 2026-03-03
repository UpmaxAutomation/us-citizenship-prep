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
import StudyClient from "./StudyClient";

export const metadata: Metadata = buildMetadata({
  title: "Study Flashcards & Quizzes — 128 USCIS Citizenship Questions (2025)",
  description:
    "Study all 128 USCIS civics questions with free flashcards, spaced repetition, and practice quizzes. Track your progress and get personalized state-specific answers. Updated for 2025.",
  path: "/study",
});

const faqs = [
  {
    question: "How does spaced repetition help me study for the citizenship test?",
    answer:
      "Spaced repetition is a scientifically proven study technique that schedules reviews at increasing intervals. When you answer a question correctly, it is shown less frequently. When you struggle, it appears more often. This moves information from short-term to long-term memory efficiently, so you remember answers during your naturalization interview.",
  },
  {
    question: "How many questions should I study per day?",
    answer:
      "We recommend studying 15 to 30 minutes per day, which typically covers 20 to 40 flashcards. Consistency matters more than volume. Most people feel confident after 2 to 4 weeks of daily study. Use the progress dashboard to track how many questions you have mastered.",
  },
  {
    question: "What are the study modes available?",
    answer:
      "There are three study modes: Flashcards with spaced repetition for learning and reviewing questions, Quiz mode for testing yourself with 10, 20, 50, or all 128 questions, and a Progress Dashboard to track your mastery level and see which questions need more review.",
  },
  {
    question: "How do state-specific answers work?",
    answer:
      "When you first visit, you select your state. The study tools then automatically show the correct answers for questions about your state's U.S. senators, governor, and state capital. You can change your state at any time in the settings.",
  },
  {
    question: "Can I study offline?",
    answer:
      "Yes. This app works as a Progressive Web App (PWA). Install it on your phone or tablet using your browser's 'Add to Home Screen' option, and all 128 questions and study tools work completely offline without an internet connection.",
  },
];

export default function StudyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Study Tools", url: `${siteConfig.url}/study` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/study`,
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
          name: "US Citizenship Test Study Tools — Flashcards & Quizzes",
          description:
            "Interactive study tools with flashcards, spaced repetition, and practice quizzes for all 128 USCIS civics questions.",
          url: `${siteConfig.url}/study`,
          educationalLevel: "beginner",
          learningResourceType: "interactive",
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
        <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 pt-6">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-slate-300">Study Tools</span>
            </li>
          </ol>
        </nav>

        {/* Server-rendered header for SEO */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Study Flashcards & Quizzes{" "}
            <span className="text-blue-400">— 128 USCIS Questions</span>
          </h1>
          <p
            className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl"
            data-speakable="true"
          >
            Master all 128 USCIS civics questions with interactive flashcards
            powered by spaced repetition. Track your progress, take practice
            quizzes, and get personalized answers for your state. Updated for the
            2025 naturalization test.
          </p>
        </header>

        {/* Interactive Client Component */}
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <StudyClient />
        </div>

        {/* SEO Content: How Spaced Repetition Works */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold">
              How Spaced Repetition Works
            </h2>
            <div className="mt-4 text-slate-400 text-lg leading-relaxed space-y-4">
              <p>
                Spaced repetition is a learning technique that schedules review
                sessions at increasing intervals. When you mark a flashcard as
                correct, the app waits longer before showing it again (1 hour, then
                4 hours, then 1 day, then 3 days, then 1 week, then 2 weeks, then
                1 month). Questions you struggle with are shown more frequently
                until you master them.
              </p>
              <p>
                This approach is backed by decades of cognitive science research.
                It works by reinforcing memories just as they start to fade,
                which strengthens the neural pathways for long-term retention.
                For citizenship test preparation, this means you spend more time
                on difficult questions and less time reviewing ones you already
                know.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content: Study Tips */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold">
              Study Tips for the 2025 Citizenship Test
            </h2>
            <ul className="mt-4 text-slate-400 text-lg leading-relaxed space-y-3 list-disc list-inside">
              <li>
                <span className="text-slate-200 font-medium">
                  Study 15 to 30 minutes daily.
                </span>{" "}
                Consistent short sessions are more effective than long cramming.
                Spaced repetition does the heavy lifting of scheduling reviews.
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Use the quiz mode to test yourself.
                </span>{" "}
                After studying with flashcards, switch to quiz mode with 20
                questions to simulate the real interview format (12/20 to pass).
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Focus on your weak areas.
                </span>{" "}
                Use the "Need Review" filter to focus on questions you have
                gotten wrong. The progress dashboard shows which categories need
                the most attention.
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Practice saying answers out loud.
                </span>{" "}
                The real test is oral. Practice verbalizing your answers so you
                feel comfortable during the naturalization interview.
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Set your state for personalized answers.
                </span>{" "}
                Questions about your senators, governor, and state capital need
                answers specific to where you live.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
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
        <div className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Explore more study resources
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Take a realistic practice test, browse all 128 questions, or
              practice your reading and writing skills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/practice-test"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Take a Practice Test
              </Link>
              <Link
                href="/questions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Browse All 128 Questions
              </Link>
              <Link
                href="/reading-writing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Reading & Writing Practice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
