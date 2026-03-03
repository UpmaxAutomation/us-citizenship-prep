import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { states, getStateBySlug, stateNameToSlug } from "@/app/data/states";
import { questions } from "@/app/data/questions";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata } from "@/app/lib/metadata";
import { generateBreadcrumbSchema, generateFAQSchema, generateSpeakableSchema } from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";

export function generateStaticParams() {
  return states.map((state) => ({
    state: stateNameToSlug(state.name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateInfo = getStateBySlug(stateSlug);
  if (!stateInfo) return {};

  return buildMetadata({
    title: `US Citizenship Test Prep for ${stateInfo.name} - Personalized Answers`,
    description: `Prepare for your USCIS citizenship test in ${stateInfo.name}. Get personalized answers including your state's senators (${stateInfo.senators[0]}, ${stateInfo.senators[1]}), governor (${stateInfo.governor}), and capital (${stateInfo.capital}).`,
    path: `/state/${stateSlug}`,
  });
}

const STATE_QUESTION_IDS = [23, 61, 62] as const;

function getStateSpecificQuestions(stateInfo: {
  name: string;
  capital: string;
  governor: string;
  senators: [string, string];
}) {
  return STATE_QUESTION_IDS.map((qId) => {
    const baseQuestion = questions.find((q) => q.id === qId);
    if (!baseQuestion) return null;

    switch (qId) {
      case 23:
        return {
          ...baseQuestion,
          answers: [stateInfo.senators[0], stateInfo.senators[1]],
        };
      case 61:
        return {
          ...baseQuestion,
          answers: [stateInfo.governor],
        };
      case 62:
        return {
          ...baseQuestion,
          answers: [stateInfo.capital],
        };
      default:
        return baseQuestion;
    }
  }).filter(Boolean);
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const stateInfo = getStateBySlug(stateSlug);
  if (!stateInfo) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "States", url: `${siteConfig.url}/#states` },
    { name: stateInfo.name, url: `${siteConfig.url}/state/${stateSlug}` },
  ]);

  const stateQuestions = getStateSpecificQuestions(stateInfo);
  const isDC = stateInfo.abbreviation === "DC";

  const stateFaqs = [
    {
      question: `Who are the current U.S. senators from ${stateInfo.name}?`,
      answer: isDC
        ? "Washington, D.C. does not have voting U.S. senators. DC residents are represented by a non-voting delegate in the House of Representatives."
        : `The current U.S. senators from ${stateInfo.name} are ${stateInfo.senators[0]} and ${stateInfo.senators[1]}.`,
    },
    {
      question: `What is the capital of ${stateInfo.name}?`,
      answer: `The capital of ${stateInfo.name} is ${stateInfo.capital}.`,
    },
    {
      question: `How do I prepare for the citizenship test in ${stateInfo.name}?`,
      answer: `To prepare for the USCIS citizenship test in ${stateInfo.name}, study all 128 civics questions with state-specific answers for your senators (${isDC ? "DC has no voting senators" : `${stateInfo.senators[0]} and ${stateInfo.senators[1]}`}), governor (${isDC ? "Mayor Muriel Bowser" : stateInfo.governor}), and capital (${stateInfo.capital}). Use flashcards with spaced repetition and take practice quizzes to build confidence before your naturalization interview.`,
    },
  ];

  const faqSchema = generateFAQSchema(stateFaqs);
  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/state/${stateSlug}`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={speakableSchema} />

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
              <span className="text-slate-400">States</span>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-slate-300">{stateInfo.name}</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            US Citizenship Test Prep for{" "}
            <span className="text-blue-400">{stateInfo.name}</span>
          </h1>
          <p className="mt-3 text-slate-400 text-lg" data-speakable="true">
            Personalized answers for {stateInfo.name} residents. Study all 128 USCIS civics questions with your state&apos;s senators, governor, and capital included.
          </p>
        </header>

        {/* State Info Card */}
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 text-sm font-bold">
                {stateInfo.abbreviation}
              </span>
              {stateInfo.name} at a Glance
            </h2>

            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-800/50">
                <dt className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Capital
                </dt>
                <dd className="mt-1 text-white font-medium">
                  {stateInfo.capital}
                </dd>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-800/50">
                <dt className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {isDC ? "Mayor" : "Governor"}
                </dt>
                <dd className="mt-1 text-white font-medium">
                  {isDC
                    ? "Muriel Bowser"
                    : stateInfo.governor}
                </dd>
              </div>

              <div className="sm:col-span-2 bg-slate-800/30 rounded-xl p-4 border border-slate-800/50">
                <dt className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  U.S. Senators
                </dt>
                <dd className="mt-1 text-white font-medium">
                  {isDC ? (
                    <span className="text-slate-400">
                      DC does not have voting U.S. senators
                    </span>
                  ) : (
                    <>
                      {stateInfo.senators[0]} &amp; {stateInfo.senators[1]}
                    </>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* State-Specific Questions */}
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <h2 className="text-xl font-bold mb-2">
            State-Specific Test Questions
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            These 3 questions have answers that change based on where you live.
            Here are the correct answers for {stateInfo.name} residents.
          </p>

          <div className="space-y-4">
            {stateQuestions.map((q) => {
              if (!q) return null;
              return (
                <article
                  key={q.id}
                  className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-5 hover:border-slate-700/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 font-mono text-sm font-bold text-slate-500 bg-slate-800/50 rounded-lg w-10 h-10 flex items-center justify-center">
                      {q.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white leading-relaxed">
                        {q.question}
                      </p>
                      <div className="mt-2">
                        {q.answers.length === 1 ? (
                          <p className="text-blue-300 text-sm font-medium">
                            {q.answers[0]}
                          </p>
                        ) : (
                          <ul className="text-blue-300 text-sm font-medium space-y-0.5">
                            {q.answers.map((answer, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 flex-shrink-0" />
                                {answer}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3">
              Start studying with {stateInfo.name} answers
            </h2>
            <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm">
              Practice all 128 questions with interactive flashcards and quizzes.
              Your state-specific answers will be personalized automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Start Studying Now
              </Link>
              <Link
                href="/questions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                View All 128 Questions
              </Link>
              <Link
                href="/reading-writing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Reading & Writing
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm">
            <Link href="/interview-guide" className="text-slate-400 hover:text-white transition-colors underline underline-offset-2">Interview Day Guide</Link>
            <span className="text-slate-700">|</span>
            <Link href="/2025-test-changes" className="text-slate-400 hover:text-white transition-colors underline underline-offset-2">2025 Test Changes</Link>
            <span className="text-slate-700">|</span>
            <Link href="/senior-exemption" className="text-slate-400 hover:text-white transition-colors underline underline-offset-2">Senior 65/20 Guide</Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-lg font-semibold mb-4">
            Frequently Asked Questions about {stateInfo.name}
          </h2>
          <div className="space-y-3">
            {stateFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-slate-900/50 border border-slate-800/50 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 text-white font-medium hover:bg-slate-800/30 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4 text-sm">{faq.question}</span>
                  <svg
                    width="16"
                    height="16"
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
                <div className="px-5 pb-3 text-slate-400 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Other States — Internal Linking */}
        <div className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-lg font-semibold mb-4 text-slate-300">
            Citizenship Test Prep by State
          </h2>
          <div className="flex flex-wrap gap-2">
            {states.map((s) => {
              const slug = stateNameToSlug(s.name);
              const isCurrent = s.name === stateInfo.name;

              return (
                <Link
                  key={s.abbreviation}
                  href={`/state/${slug}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isCurrent
                      ? "bg-blue-600/20 text-blue-300 border border-blue-500/30 cursor-default"
                      : "bg-slate-800/50 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-600"
                  }`}
                  {...(isCurrent ? { "aria-current": "page" } : {})}
                >
                  {s.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
