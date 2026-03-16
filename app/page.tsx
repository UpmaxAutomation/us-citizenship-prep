import Link from "next/link";
import { questions, categories, subcategories } from "./data/questions";
import { states, stateNameToSlug } from "./data/states";
import JsonLd from "./components/JsonLd";
import AdUnit from "./components/AdUnit";
import LeadCapture from "./components/LeadCapture";
import USFlag from "./components/illustrations/USFlag";
import {
  generateFAQSchema,
  generateCourseSchema,
  generateWebApplicationSchema,
} from "./lib/schema";
import { buildMetadata } from "./lib/metadata";

export const metadata = buildMetadata({
  title: "Free US Citizenship Test Prep — All 128 USCIS Questions (2025)",
  description:
    "Master all 128 USCIS civics questions for your 2025 naturalization interview. Free flashcards with spaced repetition, practice quizzes, a realistic 20-question practice test, reading and writing prep, and state-specific answers. No account required.",
  path: "/",
});

const faqs = [
  {
    question: "How many questions are on the 2025 USCIS citizenship test?",
    answer:
      "The 2025 USCIS civics test has 128 total questions in the study materials. During your naturalization interview, the USCIS officer will ask you up to 20 civics questions. You must answer at least 12 out of 20 correctly (60%) to pass the civics portion of the test.",
  },
  {
    question: "What score do I need to pass the civics test?",
    answer:
      "You need to answer at least 12 out of 20 questions correctly, which is a 60% passing score. The officer will stop asking questions once you get 12 correct. If you answer fewer than 12 correctly after all 20 questions, you will not pass the civics portion.",
  },
  {
    question: "What is the 65/20 exemption?",
    answer:
      "The 65/20 exemption is for applicants who are 65 years or older AND have been a lawful permanent resident for at least 20 years. These applicants only need to study 20 simplified questions (marked as 65/20 in our study guide) instead of the full 128 questions, and they may take the test in their native language.",
  },
  {
    question: "How long should I study for the citizenship test?",
    answer:
      "Most people need 2 to 4 weeks of daily study to feel confident about the civics test. If English is not your first language, you may want to allow 4 to 8 weeks. We recommend studying 20 to 30 minutes per day using our flashcards and taking a practice quiz every few days to track your progress.",
  },
  {
    question: "Is this study guide free?",
    answer:
      "Yes, this study guide is 100% free with no hidden costs and no account required. You get full access to all 128 official USCIS civics questions, smart flashcards with spaced repetition, practice quizzes, and progress tracking.",
  },
  {
    question: "Can I study offline?",
    answer:
      "Yes. You can install this app on your phone or tablet as a Progressive Web App (PWA). Once installed, all 128 questions and the study tools work completely offline without an internet connection. Just tap the install prompt or use your browser's 'Add to Home Screen' option.",
  },
  {
    question: "Are the questions updated for 2025?",
    answer:
      "Yes, all 128 civics questions in this study guide are from the latest USCIS update effective October 2025. This includes new questions about geography, recent American history, and updated government structure. We keep the questions and answers current as officials change.",
  },
  {
    question: "What categories are on the test?",
    answer:
      "The 128 civics questions are divided into three main categories: American Government (72 questions covering principles of government, the system of government, and rights and responsibilities), American History (46 questions covering the colonial period, the 1800s, and recent history), and Symbols and Holidays (10 questions covering national symbols and holidays).",
  },
];

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Compute category stats for the category overview section
const categoryStats = categories.map((cat) => {
  const catQuestions = questions.filter((q) => q.category === cat);
  return {
    name: cat,
    slug: slugify(cat),
    count: catQuestions.length,
    subcategories: subcategories[cat] || [],
  };
});

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={generateCourseSchema()} />
      <JsonLd data={generateWebApplicationSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: Text content */}
            <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
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
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                Updated for the 2025 USCIS Test
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                Pass Your U.S. Citizenship Test{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  on the First Try
                </span>
              </h1>
              <p data-speakable="true" className="mt-6 text-lg sm:text-xl lg:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Master all 128 USCIS civics questions with free flashcards,
                quizzes, and spaced repetition. Updated for the 2025 test.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                <Link
                  href="/study"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-400 hover:to-indigo-500 transition-all"
                >
                  Start Studying Free
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/questions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-200 font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
                >
                  View All 128 Questions
                </Link>
              </div>
            </div>

            {/* Right: Flashcard preview - desktop only */}
            <div className="hidden lg:block">
              <USFlag className="w-16 h-16 opacity-20 absolute -top-4 -right-4" />
              <div className="relative max-w-md mx-auto">
                {/* Background card (stacked effect) */}
                <div className="absolute top-4 left-4 right-0 bottom-0 rounded-2xl bg-slate-800/40 border border-slate-700/20" />
                <div className="absolute top-2 left-2 right-1 bottom-1 rounded-2xl bg-slate-800/60 border border-slate-700/30" />
                {/* Main card */}
                <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/50 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Question 1 of 128</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">65/20</span>
                  </div>
                  <p className="text-xl text-white font-medium leading-relaxed mb-6">
                    What is the supreme law of the land?
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-6" />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-emerald-400 font-semibold text-lg">The Constitution</p>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex-1 h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[68%]" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium">68%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdUnit slot="auto" format="horizontal" className="max-w-7xl mx-auto px-4 my-8" />

      {/* Trust Badges */}
      <section className="py-8 sm:py-12 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {/* 128 Official Questions */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">128 Official Questions</p>
                <p className="text-xs text-slate-500 hidden sm:block">USCIS verified</p>
              </div>
            </div>

            {/* 2025 Test Format */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">2025 Test Format</p>
                <p className="text-xs text-slate-500 hidden sm:block">Latest updates</p>
              </div>
            </div>

            {/* Free Forever */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fb7185"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">Free Forever</p>
                <p className="text-xs text-slate-500 hidden sm:block">No cost, no account needed</p>
              </div>
            </div>

            {/* Works Offline */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M16.72 11.06A10.94 10.94 0 0119 12.55" />
                  <path d="M5 12.55a10.94 10.94 0 015.17-2.39" />
                  <path d="M10.71 5.05A16 16 0 0122.56 9" />
                  <path d="M1.42 9a15.91 15.91 0 014.7-2.88" />
                  <path d="M8.53 16.11a6 6 0 016.95 0" />
                  <line x1="12" y1="20" x2="12.01" y2="20" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">Works Offline</p>
                <p className="text-xs text-slate-500 hidden sm:block">Install as app</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Everything You Need to Pass
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Smart study tools designed to help you learn efficiently and
              retain what you study.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Flashcards */}
            <div className="group p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Flashcards with Spaced Repetition
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Smart flashcards that schedule reviews based on how well you
                know each question. New questions appear more often, while
                mastered ones space out over time.
              </p>
            </div>

            {/* Quizzes */}
            <div className="group p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Practice Quizzes
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Test yourself with quizzes of 10, 20, 50, or all 128 questions.
                Multiple choice format mirrors the real test experience. See
                your score instantly and review mistakes.
              </p>
            </div>

            {/* State-Specific */}
            <div className="group p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                State-Specific Answers
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Select your state to get personalized answers for your
                senators, governor, and state capital. All 50 states plus DC
                are included with current officeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            How It Works
          </h2>
          {/* Mobile: vertical timeline. Desktop: horizontal 3-col */}
          <div className="max-w-3xl mx-auto lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-12 space-y-12 lg:space-y-0">
            {/* Step 1 */}
            <div className="flex gap-4 sm:gap-6 lg:flex-col lg:items-center lg:text-center lg:gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm lg:text-lg flex-shrink-0">
                  1
                </div>
                <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent mt-2 lg:hidden" />
              </div>
              <div className="pb-8 lg:pb-0">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Select Your State
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Choose your state to get personalized answers. Questions
                  about your senators, governor, and state capital will
                  automatically show the correct answers for your location.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 sm:gap-6 lg:flex-col lg:items-center lg:text-center lg:gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm lg:text-lg flex-shrink-0">
                  2
                </div>
                <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent mt-2 lg:hidden" />
              </div>
              <div className="pb-8 lg:pb-0">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Study with Smart Flashcards
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Flip through all 128 questions using our spaced repetition
                  system. Questions you struggle with appear more frequently,
                  while ones you know well are spaced out. Filter by category
                  or review status.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 sm:gap-6 lg:flex-col lg:items-center lg:text-center lg:gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm lg:text-lg flex-shrink-0">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Take Practice Quizzes
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  When you feel ready, test your knowledge with practice
                  quizzes. Choose 10, 20, 50, or all 128 questions. Track your
                  score over time and see which areas need more review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Test Changes */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6">
            What Changed on the 2025 USCIS Citizenship Test?
          </h2>
          <p className="text-slate-400 text-center mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
            The United States Citizenship and Immigration Services (USCIS)
            released a significantly updated civics test in October 2025.
            Whether you are preparing for your naturalization interview or
            helping someone study, here is what you need to know about the new
            format.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    More Questions: 100 to 128
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The study pool has expanded from 100 questions to 128
                    questions. New questions cover topics in geography, recent
                    American history, updated government structure, and
                    additional content about rights and civic responsibilities.
                    This broader pool ensures applicants have a more
                    comprehensive understanding of American civics.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    New Passing Standard: 12 out of 20
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Previously, an officer asked up to 10 civics questions and
                    applicants needed 6 correct to pass. Under the 2025
                    format, the officer asks up to 20 questions and applicants
                    must answer at least 12 correctly (a 60% passing rate).
                    The officer stops asking once you reach 12 correct answers.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mt-0.5">
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
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    New 65/20 Exemption
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Applicants aged 65 or older who have held lawful permanent
                    resident status for 20 or more years qualify for the 65/20
                    exemption. These applicants study only 20 simplified
                    questions instead of the full 128, and they may take the
                    civics test in their native language. Our study tool marks
                    these 65/20 questions so eligible applicants can focus
                    their preparation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mt-0.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    New Content Areas
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The updated test includes new questions about U.S.
                    geography, recent historical events, and expanded coverage
                    of the structure of the federal and state governments. Some
                    existing questions have been reworded for clarity, and new
                    answer options have been added. This study guide includes
                    every question and every accepted answer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Common questions about the USCIS citizenship test and how to
            prepare.
          </p>
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
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <LeadCapture variant="banner" />
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            What&apos;s on the Test
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            All {questions.length} questions organized into three main
            categories.
          </p>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {categoryStats.map((cat) => (
              <Link
                key={cat.name}
                href={`/questions#${cat.slug}`}
                className="group p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-2xl font-bold text-blue-400">
                    {cat.count}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-3">
                  {cat.count} questions
                </p>
                <ul className="space-y-1.5">
                  {cat.subcategories.map((sub) => (
                    <li
                      key={sub}
                      className="text-sm text-slate-400 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Study Resources */}
      <section className="py-16 sm:py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Study Resources
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Everything you need to prepare for your USCIS naturalization interview.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <Link
              href="/practice-test"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
                20-Question Practice Test
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Take a realistic practice test that mirrors the actual USCIS interview. Random questions, 12/20 to pass, just like the real thing.
              </p>
            </Link>
            <Link
              href="/reading-writing"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors mb-2">
                Reading & Writing Practice
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Practice with all 58 reading vocabulary words and 75 writing words from the official USCIS English test.
              </p>
            </Link>
            <Link
              href="/interview-guide"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors mb-2">
                Interview Day Guide
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                What to bring, what happens during the interview, possible outcomes, and what to do if you need to retake the test.
              </p>
            </Link>
            <Link
              href="/2025-test-changes"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-amber-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-amber-300 transition-colors mb-2">
                2025 Test Changes
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                What changed: 128 questions (up from 100), 20 asked (up from 10), 12/20 to pass (up from 6/10), and new topics.
              </p>
            </Link>
            <Link
              href="/senior-exemption"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-rose-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-rose-300 transition-colors mb-2">
                Senior 65/20 Exemption
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Study guide for applicants 65+ with 20+ years as permanent residents. Only 20 simplified questions in your native language.
              </p>
            </Link>
            <Link
              href="/questions"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                All 128 Questions & Answers
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Complete reference of every official USCIS civics question organized by category with 65/20 exemption questions marked.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* State Grid */}
      <section id="states" className="py-16 sm:py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Study for Your State
          </h2>
          <p className="text-slate-400 text-center mb-8 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
            Get personalized answers for your senators, governor, and state
            capital.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {states.map((state) => (
              <Link
                key={state.abbreviation}
                href={`/state/${stateNameToSlug(state.name)}`}
                className="px-3 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800/50 text-center text-sm text-slate-300 hover:text-white hover:border-blue-500/30 hover:bg-slate-800/50 transition-all truncate"
              >
                {state.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of people preparing for their citizenship test.
            Study at your own pace with tools that adapt to how you learn.
          </p>
          <Link
            href="/study"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-400 hover:to-indigo-500 transition-all"
          >
            Start Studying Now — It&apos;s Free
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

    </>
  );
}
