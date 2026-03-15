import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  questions,
  getQuestionBySlug,
  categories,
  subcategories,
} from "@/app/data/questions";
import { explanations } from "@/app/data/explanations";
import { buildMetadata } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLearningResourceSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";
import JsonLd from "@/app/components/JsonLd";
import LeadCapture from "@/app/components/LeadCapture";
import AuthorAttribution from "@/app/components/AuthorAttribution";

// ---------------------------------------------------------------------------
// Category colors — must match the listing page
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Truncate text to a maximum character length on a word boundary. */
function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const trimmed = text.slice(0, maxLen);
  const lastSpace = trimmed.lastIndexOf(" ");
  return (lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed) + "...";
}

/** Split an explanation string into 2-4 readable paragraphs. */
function splitIntoParagraphs(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  if (sentences.length <= 3) return [text];

  const chunkSize = Math.ceil(sentences.length / 3);
  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += chunkSize) {
    paragraphs.push(sentences.slice(i, i + chunkSize).join(" ").trim());
  }
  return paragraphs;
}

/** Build contextual FAQ items for a given question. */
function buildFaqItems(
  question: (typeof questions)[number],
  explanation: string
) {
  const faqs: { question: string; answer: string }[] = [];

  // FAQ 1 — What is the answer?
  const answerText =
    question.answers.length === 1
      ? question.answers[0]
      : question.answers.join("; ");
  faqs.push({
    question: `What is the answer to USCIS civics question ${question.id}?`,
    answer: `The answer to question ${question.id} ("${question.question}") is: ${answerText}.`,
  });

  // FAQ 2 — 65/20 eligibility
  faqs.push({
    question: `Is question ${question.id} on the 65/20 simplified test?`,
    answer: question.is6520
      ? `Yes. Question ${question.id} is included in the simplified 65/20 test for applicants who are 65 years or older and have been a lawful permanent resident for at least 20 years.`
      : `No. Question ${question.id} is not part of the simplified 65/20 test. It appears on the standard 128-question civics test for all other applicants.`,
  });

  // FAQ 3 — Category
  faqs.push({
    question: `What category is USCIS question ${question.id} in?`,
    answer: `Question ${question.id} falls under the "${question.category}" category, specifically in the "${question.subcategory}" subcategory. ${truncate(explanation, 120)}`,
  });

  return faqs;
}

// ---------------------------------------------------------------------------
// Static params — generate all 128 pages at build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return questions.map((q) => ({
    slug: q.slug,
  }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const question = getQuestionBySlug(slug);
  if (!question) return {};

  const explanation = explanations[question.id];
  const descriptionText = explanation
    ? truncate(explanation.explanation, 155)
    : `Learn the official answer to USCIS civics question ${question.id}: "${truncate(question.question, 100)}"`;

  return buildMetadata({
    title: `Q${question.id}: ${question.question} \u2014 Answer & Explanation`,
    description: descriptionText,
    path: `/questions/${slug}`,
  });
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function QuestionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const question = getQuestionBySlug(slug);
  if (!question) notFound();

  const explanation = explanations[question.id];
  const colors = categoryColors[question.category] || categoryColors["American Government"];

  // Related questions
  const relatedIds = explanation?.relatedQuestionIds ?? [];
  const relatedQuestions = relatedIds
    .map((id) => questions.find((q) => q.id === id))
    .filter(Boolean)
    .slice(0, 5);

  // Prev / Next
  const currentIndex = questions.findIndex((q) => q.id === question.id);
  const prevQuestion = currentIndex > 0 ? questions[currentIndex - 1] : null;
  const nextQuestion =
    currentIndex < questions.length - 1 ? questions[currentIndex + 1] : null;

  // Explanation paragraphs
  const paragraphs = explanation
    ? splitIntoParagraphs(explanation.explanation)
    : [];

  // FAQ items
  const faqItems = buildFaqItems(
    question,
    explanation?.explanation ?? ""
  );

  // ---- Schemas ----
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "All 128 Questions", url: `${siteConfig.url}/questions` },
    {
      name: `Q${question.id}: ${truncate(question.question, 50)}`,
      url: `${siteConfig.url}/questions/${slug}`,
    },
  ]);

  const learningResourceSchema = generateLearningResourceSchema({
    name: question.question,
    description: explanation
      ? truncate(explanation.explanation, 200)
      : `Official answer and explanation for USCIS civics question ${question.id}.`,
    url: `${siteConfig.url}/questions/${slug}`,
  });

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/questions/${slug}`,
    ["h1", "[data-speakable]"]
  );

  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={learningResourceSchema} />
      <JsonLd data={speakableSchema} />
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
              <Link
                href="/questions"
                className="hover:text-slate-300 transition-colors"
              >
                All 128 Questions
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-slate-300">Q{question.id}</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}
            >
              {question.category}
            </span>
            <span className="text-slate-500 text-sm">{question.subcategory}</span>
            {question.is6520 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                65/20
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {question.question}
          </h1>

          <span className="inline-flex items-center mt-3 px-2.5 py-1 rounded-lg bg-slate-800/50 text-slate-500 text-xs font-mono font-medium">
            Question {question.id} of 128
          </span>
        </header>

        {/* Answer Section */}
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
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
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                Official Answer
              </span>
            </div>

            {question.answers.length === 1 ? (
              <p className="text-lg font-semibold text-white">
                {question.answers[0]}
              </p>
            ) : (
              <ul className="space-y-1.5">
                {question.answers.map((answer, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-lg font-semibold text-white"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 flex-shrink-0" />
                    {answer}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Explanation Section */}
        {explanation && (
          <div className="max-w-3xl mx-auto px-4 mt-8">
            <h2 className="text-xl font-bold mb-4">Why This Is the Answer</h2>
            <div
              className="space-y-4 text-slate-400 leading-relaxed"
              data-speakable="true"
            >
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* Key Terms */}
        {explanation && explanation.keyTerms.length > 0 && (
          <div className="max-w-3xl mx-auto px-4 mt-8">
            <h2 className="text-xl font-bold mb-4">Key Terms to Know</h2>
            <div className="flex flex-wrap gap-2">
              {explanation.keyTerms.map((term) => (
                <span
                  key={term}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-300"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Questions */}
        {relatedQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto px-4 mt-8">
            <h2 className="text-xl font-bold mb-4">Related Questions</h2>
            <div className="space-y-2">
              {relatedQuestions.map((rq) => {
                if (!rq) return null;
                const rqColors =
                  categoryColors[rq.category] ||
                  categoryColors["American Government"];
                return (
                  <Link
                    key={rq.id}
                    href={`/questions/${rq.slug}`}
                    className="flex items-center gap-3 bg-slate-900/30 border border-slate-800/50 rounded-xl p-4 hover:border-slate-700/50 transition-colors group"
                  >
                    <span className="flex-shrink-0 font-mono text-sm font-bold text-slate-500 bg-slate-800/50 rounded-lg w-10 h-10 flex items-center justify-center">
                      {rq.id}
                    </span>
                    <span className="flex-1 min-w-0 text-sm font-medium text-slate-300 group-hover:text-white transition-colors truncate">
                      {rq.question}
                    </span>
                    {rq.is6520 && (
                      <span className="hidden sm:inline-flex items-center flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        65/20
                      </span>
                    )}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 text-slate-600 group-hover:text-blue-400 transition-colors"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Prev / Next Navigation */}
        <div className="max-w-3xl mx-auto px-4 mt-10">
          <div className="flex flex-col sm:flex-row gap-3">
            {prevQuestion ? (
              <Link
                href={`/questions/${prevQuestion.slug}`}
                className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors group"
              >
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Previous
                </span>
                <span className="mt-1 flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-slate-600 group-hover:text-blue-400 transition-colors"
                  >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors line-clamp-1">
                    Q{prevQuestion.id}: {prevQuestion.question}
                  </span>
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextQuestion ? (
              <Link
                href={`/questions/${nextQuestion.slug}`}
                className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors group text-right"
              >
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Next
                </span>
                <span className="mt-1 flex items-center justify-end gap-2">
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors line-clamp-1">
                    Q{nextQuestion.id}: {nextQuestion.question}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-slate-600 group-hover:text-blue-400 transition-colors"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-4 mt-10">
          <h2 className="text-lg font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq) => (
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

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold mb-3">Ready to study?</h2>
            <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm">
              Master all 128 USCIS civics questions with interactive flashcards,
              quizzes, and spaced repetition before your naturalization
              interview.
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
          </div>
        </div>

        {/* Author Attribution */}
        <div className="max-w-3xl mx-auto px-4">
          <AuthorAttribution />
        </div>

        {/* Lead Capture */}
        <div className="max-w-3xl mx-auto px-4 mt-8">
          <LeadCapture variant="inline" />
        </div>
      </div>
    </>
  );
}
