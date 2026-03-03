import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Study Flashcards & Take Quizzes",
  description:
    "Study all 128 USCIS citizenship test questions with smart flashcards, spaced repetition, and practice quizzes. Track your progress and get test-ready.",
  path: "/study",
});

export default function StudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* Fallback content for search engine crawlers and users without JavaScript */}
      <noscript>
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-white mb-4">
            US Citizenship Test Prep - Study Tools
          </h1>
          <p className="text-slate-400 mb-6 leading-relaxed">
            This interactive study tool requires JavaScript to function. It
            includes smart flashcards with spaced repetition, practice quizzes
            (10, 20, 50, or all 128 questions), progress tracking, and
            state-specific personalized answers for all 50 states plus
            Washington DC.
          </p>
          <h2 className="text-xl font-semibold text-white mb-3">
            Study Features
          </h2>
          <ul className="text-slate-400 space-y-2 list-disc list-inside mb-6">
            <li>
              All 128 official USCIS civics questions updated for the 2025 test
            </li>
            <li>
              Flashcards with spaced repetition — questions you struggle with
              appear more often
            </li>
            <li>
              Practice quizzes with multiple choice answers and instant scoring
            </li>
            <li>
              Filter by category: American Government, American History, Symbols
              and Holidays
            </li>
            <li>
              65/20 exemption filter for applicants aged 65+ with 20+ years as
              permanent resident
            </li>
            <li>
              State-specific answers for your senators, governor, and state
              capital
            </li>
            <li>Progress tracking saved locally in your browser</li>
            <li>Works offline once installed as a Progressive Web App</li>
          </ul>
          <h2 className="text-xl font-semibold text-white mb-3">
            2025 Test Format
          </h2>
          <p className="text-slate-400 mb-4 leading-relaxed">
            The 2025 USCIS naturalization civics test has 128 total questions. A
            USCIS officer asks up to 20 questions during the interview. You must
            answer at least 12 correctly (60%) to pass. The officer stops once
            you reach 12 correct answers.
          </p>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Please enable JavaScript in your browser to use the interactive
            study tools. Alternatively, you can view all 128 questions and
            answers on the questions page.
          </p>
          <a
            href="/questions"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium"
          >
            View All 128 Questions and Answers
          </a>
        </div>
      </noscript>
    </>
  );
}
