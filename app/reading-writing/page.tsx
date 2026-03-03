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
import {
  readingVocabulary,
  writingVocabulary,
  readingSentences,
  writingSentences,
} from "@/app/data/vocabulary";
import type { VocabWord } from "@/app/data/vocabulary";
import VocabPractice from "./VocabPractice";

export const metadata: Metadata = buildMetadata({
  title: "USCIS Citizenship Reading & Writing Test Practice (2025)",
  description:
    "Practice the USCIS English reading and writing test with all 58 reading vocabulary words and 75 writing vocabulary words. Includes sample sentences and interactive practice.",
  path: "/reading-writing",
});

const categoryColorMap: Record<
  VocabWord["category"],
  { bg: string; border: string; text: string }
> = {
  people: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-300",
  },
  civics: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-300",
  },
  places: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-300",
  },
  holidays: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    text: "text-rose-300",
  },
  "question-words": {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-300",
  },
  verbs: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-300",
  },
  "function-words": {
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    text: "text-slate-300",
  },
  "content-words": {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-300",
  },
  months: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    text: "text-teal-300",
  },
};

const categoryLabels: Record<VocabWord["category"], string> = {
  people: "People",
  civics: "Civics",
  places: "Places",
  holidays: "Holidays",
  "question-words": "Question Words",
  verbs: "Verbs",
  "function-words": "Function Words",
  "content-words": "Content Words",
  months: "Months",
};

function groupByCategory(words: VocabWord[]) {
  const groups: Record<string, VocabWord[]> = {};
  for (const word of words) {
    if (!groups[word.category]) {
      groups[word.category] = [];
    }
    groups[word.category].push(word);
  }
  return groups;
}

const faqSchemaQuestions = [
  {
    question: "What is on the USCIS English reading test?",
    answer:
      "During the reading portion of the USCIS English test, a USCIS officer will ask you to read one out of three sentences correctly. The sentences are created using the official USCIS reading vocabulary list of 58 words covering civics, people, places, holidays, and everyday English words.",
  },
  {
    question: "What is on the USCIS English writing test?",
    answer:
      "During the writing portion of the USCIS English test, a USCIS officer will read a sentence aloud and ask you to write it. You must write one out of three sentences correctly. The sentences use vocabulary from the official USCIS writing vocabulary list of 75 words.",
  },
  {
    question: "How many vocabulary words do I need to learn for the English test?",
    answer:
      "You need to learn 58 reading vocabulary words and 75 writing vocabulary words. Many words overlap between the two lists. The words cover categories including people (historical figures), civics terms, places, holidays, verbs, and common English words.",
  },
  {
    question: "What if I fail the English test?",
    answer:
      "If you do not pass the English reading and writing test, you will have a second opportunity to retake it, typically within 60 to 90 days of your initial interview. You only need to retake the portion you did not pass.",
  },
  {
    question: "Is the 65/20 exemption available for the English test?",
    answer:
      "Yes. If you are 65 years or older and have been a lawful permanent resident for at least 20 years, you are exempt from the English reading and writing test entirely. You may take the civics test in your native language instead.",
  },
];

export default function ReadingWritingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Reading & Writing", url: `${siteConfig.url}/reading-writing` },
  ]);

  const faqSchema = generateFAQSchema(faqSchemaQuestions);
  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/reading-writing`,
    ["h1", "header p", "[data-speakable]"]
  );

  const learningResourceSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "USCIS Citizenship Reading & Writing Test Practice (2025)",
    description:
      "Practice the USCIS English reading and writing test with all 58 reading vocabulary words and 75 writing vocabulary words.",
    url: `${siteConfig.url}/reading-writing`,
    educationalLevel: "beginner",
    learningResourceType: "practice",
    interactivityType: "active",
    isAccessibleForFree: true,
    inLanguage: "en",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "US citizenship applicants",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const readingGroups = groupByCategory(readingVocabulary);
  const writingGroups = groupByCategory(writingVocabulary);

  const readingCategoryOrder: VocabWord["category"][] = [
    "people",
    "civics",
    "places",
    "holidays",
    "question-words",
    "verbs",
    "function-words",
    "content-words",
  ];

  const writingCategoryOrder: VocabWord["category"][] = [
    "people",
    "civics",
    "places",
    "months",
    "holidays",
    "verbs",
    "function-words",
    "content-words",
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={speakableSchema} />
      <JsonLd data={learningResourceSchema} />

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
              <span className="text-slate-300">Reading & Writing</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            USCIS Citizenship Reading & Writing Test Practice{" "}
            <span className="text-blue-400">(2025)</span>
          </h1>
          <p
            data-speakable="true"
            className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl"
          >
            The USCIS English test has two parts: a reading test and a writing
            test. You must read one out of three sentences correctly and write
            one out of three sentences correctly to pass. This page covers all
            the vocabulary words and provides practice sentences to help you
            prepare.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium">
              <span className="text-white">
                {readingVocabulary.length}
              </span>
              <span className="text-slate-400">Reading Words</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm font-medium">
              <span className="text-blue-300">
                {writingVocabulary.length}
              </span>
              <span className="text-blue-400/70">Writing Words</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium">
              <span className="text-emerald-300">
                {readingSentences.length + writingSentences.length}
              </span>
              <span className="text-emerald-400/70">Practice Sentences</span>
            </span>
          </div>
        </header>

        {/* Reading Vocabulary Section */}
        <section
          className="max-w-4xl mx-auto px-4 mt-12"
          aria-labelledby="reading-vocab-heading"
        >
          <h2
            id="reading-vocab-heading"
            className="text-2xl font-bold border-l-4 border-l-blue-500 pl-4 mb-8"
          >
            Reading Vocabulary — {readingVocabulary.length} Official USCIS Words
          </h2>

          <div className="space-y-6">
            {readingCategoryOrder.map((cat) => {
              const words = readingGroups[cat];
              if (!words || words.length === 0) return null;
              const colors = categoryColorMap[cat];
              return (
                <div key={cat}>
                  <h3 className="text-lg font-semibold text-slate-200 mb-3">
                    {categoryLabels[cat]}
                    <span className="text-sm font-normal text-slate-500 ml-2">
                      ({words.length}{" "}
                      {words.length === 1 ? "word" : "words"})
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {words.map((w) => (
                      <span
                        key={w.word}
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg ${colors.bg} border ${colors.border} ${colors.text} text-sm font-medium`}
                      >
                        {w.word}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Writing Vocabulary Section */}
        <section
          className="max-w-4xl mx-auto px-4 mt-12"
          aria-labelledby="writing-vocab-heading"
        >
          <h2
            id="writing-vocab-heading"
            className="text-2xl font-bold border-l-4 border-l-orange-500 pl-4 mb-8"
          >
            Writing Vocabulary — {writingVocabulary.length} Official USCIS Words
          </h2>

          <div className="space-y-6">
            {writingCategoryOrder.map((cat) => {
              const words = writingGroups[cat];
              if (!words || words.length === 0) return null;
              const colors = categoryColorMap[cat];
              return (
                <div key={cat}>
                  <h3 className="text-lg font-semibold text-slate-200 mb-3">
                    {categoryLabels[cat]}
                    <span className="text-sm font-normal text-slate-500 ml-2">
                      ({words.length}{" "}
                      {words.length === 1 ? "word" : "words"})
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {words.map((w) => (
                      <span
                        key={w.word}
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg ${colors.bg} border ${colors.border} ${colors.text} text-sm font-medium`}
                      >
                        {w.word}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sample Sentences Section */}
        <section
          className="max-w-4xl mx-auto px-4 mt-12"
          aria-labelledby="sentences-heading"
        >
          <h2
            id="sentences-heading"
            className="text-2xl font-bold border-l-4 border-l-emerald-500 pl-4 mb-8"
          >
            Practice Sentences
          </h2>

          {/* Reading Sentences */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-200 mb-4">
              Reading Sentences
              <span className="text-sm font-normal text-slate-500 ml-2">
                ({readingSentences.length} sentences)
              </span>
            </h3>
            <div className="space-y-3">
              {readingSentences.map((sentence, i) => (
                <div
                  key={i}
                  className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-4 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 font-mono text-sm font-bold text-slate-500 bg-slate-800/50 rounded-lg w-8 h-8 flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-white text-lg leading-relaxed">
                      {sentence.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Writing Sentences */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">
              Writing Sentences
              <span className="text-sm font-normal text-slate-500 ml-2">
                ({writingSentences.length} sentences)
              </span>
            </h3>
            <div className="space-y-3">
              {writingSentences.map((sentence, i) => (
                <div
                  key={i}
                  className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-4 sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 font-mono text-sm font-bold text-slate-500 bg-slate-800/50 rounded-lg w-8 h-8 flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-white text-lg leading-relaxed">
                      {sentence.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Practice */}
        <section
          className="max-w-4xl mx-auto px-4 mt-12"
          aria-labelledby="practice-heading"
        >
          <h2
            id="practice-heading"
            className="text-2xl font-bold border-l-4 border-l-violet-500 pl-4 mb-8"
          >
            Interactive Practice
          </h2>
          <VocabPractice />
        </section>

        {/* What to Expect on the English Test */}
        <section
          className="max-w-4xl mx-auto px-4 mt-16"
          aria-labelledby="expect-heading"
        >
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2
              id="expect-heading"
              className="text-2xl font-bold mb-4"
            >
              What to Expect on the English Test
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The USCIS English test is administered during your naturalization
                interview. It has two components: a reading test and a writing
                test. Both are designed to evaluate your basic ability to read
                and write in English.
              </p>
              <p>
                <strong className="text-slate-200">Reading test:</strong> A
                USCIS officer will ask you to read one of three sentences out
                loud. The sentences use vocabulary from the official USCIS
                reading vocabulary list. You must read at least one sentence
                correctly to pass.
              </p>
              <p>
                <strong className="text-slate-200">Writing test:</strong> The
                officer will read a sentence to you, and you must write it down.
                You will have three attempts and must write at least one sentence
                correctly to pass. The sentences use vocabulary from the official
                USCIS writing vocabulary list.
              </p>
              <p>
                <strong className="text-slate-200">If you do not pass:</strong>{" "}
                You will be scheduled for a second interview, typically within 60
                to 90 days. You only need to retake the component you did not
                pass.
              </p>
              <p>
                <strong className="text-slate-200">65/20 exemption:</strong> If
                you are 65 years of age or older and have been a lawful permanent
                resident for at least 20 years, you are exempt from the English
                reading and writing test entirely. You may take the civics test
                in your native language.
              </p>
            </div>
          </div>
        </section>

        {/* Study Tips */}
        <section
          className="max-w-4xl mx-auto px-4 mt-10"
          aria-labelledby="tips-heading"
        >
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2
              id="tips-heading"
              className="text-2xl font-bold mb-4"
            >
              Study Tips for Non-Native English Speakers
            </h2>
            <ol className="space-y-4 text-slate-400 leading-relaxed list-decimal list-inside">
              <li>
                <strong className="text-slate-200">
                  Start with the vocabulary lists.
                </strong>{" "}
                Learn to recognize and spell each word before practicing full
                sentences. Focus on one category at a time.
              </li>
              <li>
                <strong className="text-slate-200">
                  Practice reading out loud every day.
                </strong>{" "}
                Use the text-to-speech button to hear correct pronunciation,
                then repeat each sentence several times until it feels natural.
              </li>
              <li>
                <strong className="text-slate-200">
                  Write each sentence by hand.
                </strong>{" "}
                During the real test, you write on paper. Practice writing the
                sample sentences by hand, not just typing them.
              </li>
              <li>
                <strong className="text-slate-200">
                  Study with a partner or tutor.
                </strong>{" "}
                Have someone read sentences to you while you practice writing
                them down. This simulates the actual test experience.
              </li>
              <li>
                <strong className="text-slate-200">
                  Focus on commonly confused words.
                </strong>{" "}
                Pay special attention to words like &quot;President&quot; vs.
                &quot;Presidents&apos; Day,&quot; &quot;state&quot; vs.
                &quot;states,&quot; and &quot;right&quot; vs. &quot;write.&quot;
                Spelling counts on the writing test.
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="max-w-4xl mx-auto px-4 mt-10"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="text-2xl font-bold mb-6"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqSchemaQuestions.map((faq, index) => (
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
              Ready to study for the full citizenship test?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Master all 128 civics questions, practice with interactive
              flashcards and quizzes, and track your progress to your
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
              <Link
                href="/questions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                View All 128 Questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
