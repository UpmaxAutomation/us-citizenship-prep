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
    "Citizenship Interview Guide — What to Expect on Test Day (2025)",
  description:
    "Complete guide to the USCIS citizenship interview: what to bring, what happens during the test, passing requirements, and what to do if you fail. Updated for 2025.",
  path: "/interview-guide",
});

const faqs = [
  {
    question: "How long does the citizenship interview take?",
    answer:
      "Typically 15-30 minutes, but plan for 2-3 hours total including wait time and processing.",
  },
  {
    question: "What if I don't understand a civics question?",
    answer:
      "You can ask the officer to repeat the question. They cannot rephrase it or give hints, but repeating is allowed.",
  },
  {
    question: "Can I bring a lawyer to my interview?",
    answer:
      "Yes, you have the right to be represented by an attorney. Your lawyer can be present but cannot answer questions for you.",
  },
  {
    question:
      "What happens if I fail the English test but pass the civics test?",
    answer:
      "You only retake the English portion at your retest appointment in 60-90 days.",
  },
  {
    question: "Do I need to speak perfect English?",
    answer:
      "No. The officer evaluates your ability to understand and communicate in basic English. Perfect grammar is not required.",
  },
  {
    question: "What should I do the night before my interview?",
    answer:
      "Review your N-400 application, do a final practice test, prepare your documents, get a good night's sleep, and set multiple alarms.",
  },
];

const documentsChecklist = [
  "Appointment notice (Form N-445 or interview letter)",
  "Permanent Resident Card (Green Card)",
  "Valid passport and any travel documents",
  "State-issued photo ID (driver's license)",
  "Two passport-style photos (if not previously submitted)",
  "Any documents USCIS requested in your interview letter",
  "Copies of tax returns for the last 5 years (if applicable)",
  "Evidence of Selective Service registration (males 18-31)",
];

const timelineSteps = [
  { step: 1, label: "Check in at the USCIS office", time: "5 min" },
  { step: 2, label: "Wait in lobby until called", time: "varies" },
  { step: 3, label: "Oath to tell the truth", time: "1 min" },
  { step: 4, label: "English reading and writing test", time: "5 min" },
  {
    step: 5,
    label: "Civics test — up to 20 questions",
    time: "5-10 min",
  },
  { step: 6, label: "N-400 application review", time: "5-10 min" },
  { step: 7, label: "Officer decision and next steps", time: "2 min" },
];

const commonMistakes = [
  {
    title: "Not bringing required documents",
    description: "Double-check your interview letter",
  },
  {
    title: "Arriving late",
    description: "Arrive 15-30 minutes early",
  },
  {
    title: "Not studying enough",
    description: "Use flashcards and practice tests consistently",
  },
  {
    title: "Giving inconsistent answers",
    description: "Review your N-400 before the interview",
  },
  {
    title: "Panicking during the civics test",
    description: "Take a breath, you only need 12/20",
  },
  {
    title: "Not understanding the question",
    description: "Ask the officer to repeat it. It's allowed.",
  },
];

export default function InterviewGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Interview Guide",
      url: `${siteConfig.url}/interview-guide`,
    },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/interview-guide`,
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
            "Citizenship Interview Guide — What to Expect on Test Day (2025)",
          description:
            "Complete guide to the USCIS citizenship interview process.",
          url: `${siteConfig.url}/interview-guide`,
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
              <span className="text-slate-300">Interview Guide</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Citizenship Interview Guide — What to Expect on Test Day{" "}
            <span className="text-blue-400">(2025)</span>
          </h1>
          <p
            data-speakable="true"
            className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl"
          >
            Your USCIS naturalization interview is the final step before
            becoming a U.S. citizen. This comprehensive guide walks you
            through everything you need to know — from what documents to
            bring, to what happens during the interview, to what comes
            after. The typical interview takes 15 to 30 minutes.
          </p>
        </header>

        {/* ============================================= */}
        {/* Section 1: Before Your Interview              */}
        {/* ============================================= */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Before Your Interview
          </h2>

          {/* Documents to Bring */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            Documents to Bring
          </h3>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <ul className="space-y-3">
              {documentsChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 border-slate-600 bg-slate-800/50 flex items-center justify-center">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-600"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Wear */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            What to Wear
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Business casual. No specific dress code, but neat, professional
            appearance shows respect for the process. Avoid hats or
            sunglasses during the interview.
          </p>

          {/* How Early to Arrive */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            How Early to Arrive
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Arrive 15-30 minutes before your scheduled time. You&apos;ll go
            through security screening. Bring a book or study materials —
            there may be a wait in the lobby.
          </p>
        </section>

        {/* ============================================= */}
        {/* Section 2: During the Interview               */}
        {/* ============================================= */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            During the Interview
          </h2>

          {/* The English Test */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            The English Test (Reading &amp; Writing)
          </h3>
          <p className="text-slate-400 leading-relaxed mb-3">
            The USCIS officer tests your English ability:
          </p>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                <strong className="text-slate-200">Reading test:</strong>{" "}
                You must read 1 out of 3 sentences correctly
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                <strong className="text-slate-200">Writing test:</strong>{" "}
                You must write 1 out of 3 sentences correctly
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                Sentences use vocabulary from the official USCIS reading and
                writing vocabulary lists
              </span>
            </li>
          </ul>
          <p className="mt-3">
            <Link
              href="/reading-writing"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Practice reading and writing &rarr;
            </Link>
          </p>

          {/* The Civics Test */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            The Civics Test (20 Questions)
          </h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                Officer asks up to 20 civics questions from the
                128-question pool
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                You must answer at least 12 correctly (60%) to pass
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                Officer stops asking once you reach 12 correct
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                Questions are asked orally — you answer verbally
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                Some questions have multiple acceptable answers
              </span>
            </li>
          </ul>
          <p className="mt-3">
            <Link
              href="/practice-test"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Take a practice test &rarr;
            </Link>
          </p>

          {/* N-400 Review */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            N-400 Review
          </h3>
          <p className="text-slate-400 leading-relaxed mb-3">
            The officer reviews your N-400 application:
          </p>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>Confirms your biographical information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>Asks about your travel history</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>Asks about your moral character</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                Confirms your willingness to take the Oath of Allegiance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                May ask follow-up questions about anything on your
                application
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                <strong className="text-slate-200">
                  Answer honestly
                </strong>{" "}
                — lying can result in denial
              </span>
            </li>
          </ul>

          {/* Interview Timeline */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            Interview Timeline
          </h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            A typical interview flows like this:
          </p>
          <div className="space-y-0">
            {timelineSteps.map((item, index) => (
              <div key={item.step} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-blue-500/50 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-medium text-white leading-relaxed">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 3: After the Interview                */}
        {/* ============================================= */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            After the Interview
          </h2>

          {/* Possible Outcomes */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            Possible Outcomes
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Approved */}
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h4 className="font-semibold text-emerald-300">
                  Approved
                </h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                You passed! You&apos;ll receive information about your Oath
                Ceremony. Some offices offer same-day ceremonies.
              </p>
            </div>

            {/* Continued */}
            <div className="bg-slate-900/50 border border-amber-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <h4 className="font-semibold text-amber-300">
                  Continued
                </h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The officer needs more information or documentation.
                You&apos;ll receive a letter explaining what&apos;s needed
                and a new interview date.
              </p>
            </div>

            {/* Denied */}
            <div className="bg-slate-900/50 border border-red-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f87171"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6" />
                    <path d="M9 9l6 6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-red-300">Denied</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                If denied, you&apos;ll receive Form N-14 explaining the
                reasons. You have the right to appeal or reapply.
              </p>
            </div>
          </div>

          {/* Oath Ceremony Timeline */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            Oath Ceremony Timeline
          </h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
              <span>
                <strong className="text-slate-200">Same-day oath:</strong>{" "}
                Some USCIS offices offer this
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
              <span>
                <strong className="text-slate-200">
                  Scheduled ceremony:
                </strong>{" "}
                Usually 2-6 weeks after approval
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
              <span>
                You&apos;ll receive Form N-445 (Notice of Naturalization
                Oath Ceremony)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
              <span>
                At the ceremony: surrender your Green Card, take the Oath,
                receive Certificate of Naturalization
              </span>
            </li>
          </ul>

          {/* What to Do If You Fail */}
          <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">
            What to Do If You Fail
          </h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                Don&apos;t panic — you can retake the failed portion
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                Retest is scheduled 60-90 days after your initial interview
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                You only retake the part you failed (civics, English, or
                both)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                If you fail the retest, your application is denied
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
              <span>
                You can reapply (file a new N-400) after a denial
              </span>
            </li>
          </ul>
        </section>

        {/* ============================================= */}
        {/* Section 4: Common Mistakes to Avoid           */}
        {/* ============================================= */}
        <section className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mt-16 mb-6">
            Common Mistakes to Avoid
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake.title}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f87171"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {mistake.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {mistake.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 5: Frequently Asked Questions         */}
        {/* ============================================= */}
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

        {/* ============================================= */}
        {/* CTA Section                                   */}
        {/* ============================================= */}
        <section className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to prepare for your interview?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our free study tools to master the civics questions,
              practice reading and writing, and build confidence before your
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
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
              <Link
                href="/reading-writing"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Reading &amp; Writing Practice
              </Link>
              <Link
                href="/questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                All 128 Questions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
