"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { questions, type Question } from "@/app/data/questions";
import { getStateByAbbreviation } from "@/app/data/states";
import { useSettings } from "@/app/hooks/useSettings";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TOTAL_QUESTIONS = 20;
const PASSING_SCORE = 12;
const STATE_QUESTION_IDS = new Set([23, 29, 61, 62]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateOptions(
  correctAnswers: string[],
  allQuestions: Question[],
  currentId: number
): string[] {
  const mainAnswer = correctAnswers[0];
  const otherAnswers = allQuestions
    .filter((q) => q.id !== currentId && !STATE_QUESTION_IDS.has(q.id))
    .flatMap((q) => q.answers)
    .filter((a) => !correctAnswers.includes(a) && !a.startsWith("Answers will vary"));

  const wrongOptions = shuffleArray(otherAnswers).slice(0, 3);
  return shuffleArray([mainAnswer, ...wrongOptions]);
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type TestPhase = "idle" | "active" | "passed" | "completed";

interface QuestionResult {
  questionId: number;
  question: string;
  selectedAnswer: string;
  correctAnswers: string[];
  isCorrect: boolean;
  category: string;
}

// ---------------------------------------------------------------------------
// Category badge colours (matches codebase patterns)
// ---------------------------------------------------------------------------

const categoryBadge: Record<string, string> = {
  "American Government": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "American History": "bg-orange-500/15 text-orange-300 border-orange-500/30",
  "Symbols and Holidays": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PracticeTest() {
  const { state: userState, isLoaded: settingsLoaded } = useSettings();

  // ---- State personalisation ------------------------------------------------

  const stateInfo = useMemo(
    () => (userState ? getStateByAbbreviation(userState) : null),
    [userState]
  );

  const personalizedQuestions = useMemo(() => {
    if (!stateInfo) return questions;
    return questions.map((q) => {
      switch (q.id) {
        case 23:
          return { ...q, answers: [stateInfo.senators[0], stateInfo.senators[1]] };
        case 29:
          return q; // representative varies by district — keep generic
        case 61:
          return { ...q, answers: [stateInfo.governor] };
        case 62:
          return { ...q, answers: [stateInfo.capital] };
        default:
          return q;
      }
    });
  }, [stateInfo]);

  // ---- Test state -----------------------------------------------------------

  const [phase, setPhase] = useState<TestPhase>("idle");
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ---- Timer ----------------------------------------------------------------

  useEffect(() => {
    if (phase === "active") {
      timerRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  // ---- Actions --------------------------------------------------------------

  const startTest = useCallback(() => {
    // Filter out Q29 (representative — varies by district, no good answer)
    const eligible = personalizedQuestions.filter((q) => q.id !== 29);
    const selected = shuffleArray(eligible).slice(0, TOTAL_QUESTIONS);
    setTestQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsRevealed(false);
    setCorrectCount(0);
    setResults([]);
    setElapsedSeconds(0);
    setCopied(false);
    setPhase("active");
  }, [personalizedQuestions]);

  const currentQuestion = testQuestions[currentIndex] as Question | undefined;

  const options = useMemo(
    () =>
      currentQuestion
        ? generateOptions(currentQuestion.answers, personalizedQuestions, currentQuestion.id)
        : [],
    [currentQuestion, personalizedQuestions]
  );

  const handleSelect = useCallback(
    (answer: string) => {
      if (isRevealed || !currentQuestion) return;
      setSelectedAnswer(answer);
      setIsRevealed(true);

      const isCorrect = currentQuestion.answers.some(
        (a) => a.toLowerCase() === answer.toLowerCase()
      );

      const newCorrectCount = isCorrect ? correctCount + 1 : correctCount;
      if (isCorrect) setCorrectCount(newCorrectCount);

      setResults((prev) => [
        ...prev,
        {
          questionId: currentQuestion.id,
          question: currentQuestion.question,
          selectedAnswer: answer,
          correctAnswers: currentQuestion.answers,
          isCorrect,
          category: currentQuestion.category,
        },
      ]);

      // Auto-advance to results if just reached passing score
      if (newCorrectCount >= PASSING_SCORE) {
        // Let the user see the feedback before we transition
        setTimeout(() => {
          if (timerRef.current) clearInterval(timerRef.current);
          setPhase("passed");
        }, 1200);
      }
    },
    [isRevealed, currentQuestion, correctCount]
  );

  const handleNext = useCallback(() => {
    if (phase !== "active") return;

    // Already passed — phase transition already scheduled
    if (correctCount >= PASSING_SCORE) return;

    if (currentIndex + 1 >= testQuestions.length) {
      // All 20 questions answered
      if (timerRef.current) clearInterval(timerRef.current);
      setPhase("completed");
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setIsRevealed(false);
  }, [phase, currentIndex, testQuestions.length, correctCount]);

  const handleShare = useCallback(async () => {
    const text = `I scored ${correctCount}/${results.length} on the US citizenship practice test! Try it: https://uscitizenshiptestprep.com/practice-test`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing if clipboard fails
    }
  }, [correctCount, results.length]);

  // ---- Derived values -------------------------------------------------------

  const isCorrectAnswer = useCallback(
    (answer: string) =>
      currentQuestion?.answers.some(
        (a) => a.toLowerCase() === answer.toLowerCase()
      ) ?? false,
    [currentQuestion]
  );

  const missedQuestions = results.filter((r) => !r.isCorrect);
  const passed = correctCount >= PASSING_SCORE;
  const totalAnswered = results.length;
  const percent = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // ---- Loading state --------------------------------------------------------

  if (!settingsLoaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-slate-500 animate-pulse">Loading...</div>
      </div>
    );
  }

  // =========================================================================
  // IDLE SCREEN
  // =========================================================================

  if (phase === "idle") {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Practice Test</h2>
          <div className="space-y-3 text-slate-400 leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-300">
                20
              </span>
              <p>
                Random questions from the official 128-question USCIS civics
                pool, just like the real naturalization interview.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-300">
                12
              </span>
              <p>
                Correct answers needed to pass. The test stops as soon as you
                reach 12 correct — the same way a real USCIS officer stops
                asking once you pass.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-300"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <p>
                {stateInfo
                  ? `State-specific questions personalized for ${stateInfo.name}.`
                  : "Set your state in settings to personalize state-specific questions (senators, governor, capital)."}
              </p>
            </div>
          </div>

          <button
            onClick={startTest}
            className="mt-8 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            Start Practice Test
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // ACTIVE SCREEN
  // =========================================================================

  if (phase === "active" && currentQuestion) {
    const progress = ((currentIndex + 1) / testQuestions.length) * 100;
    const badgeClass =
      categoryBadge[currentQuestion.category] ??
      "bg-slate-500/15 text-slate-300 border-slate-500/30";

    return (
      <div className="w-full max-w-2xl mx-auto">
        {/* Top bar: progress, score, timer */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">
              Question {currentIndex + 1} of {testQuestions.length}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-emerald-400 font-mono">
                {correctCount} correct
              </span>
              <span className="text-sm text-slate-500 font-mono tabular-nums">
                {formatTime(elapsedSeconds)}
              </span>
            </div>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-6">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeClass}`}
          >
            {currentQuestion.category}
          </span>
          <h2 className="text-xl sm:text-2xl font-medium mt-3 leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Multiple choice options */}
        <div className="space-y-3 mb-6">
          {options.map((option, i) => {
            let classes =
              "w-full text-left p-5 rounded-xl border transition-all ";
            if (!isRevealed) {
              classes +=
                selectedAnswer === option
                  ? "bg-slate-700/50 border-slate-500 text-white"
                  : "bg-slate-900/30 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600";
            } else if (isCorrectAnswer(option)) {
              classes +=
                "bg-emerald-500/10 border-emerald-500/30 text-emerald-300";
            } else if (selectedAnswer === option) {
              classes += "bg-red-500/10 border-red-500/30 text-red-300";
            } else {
              classes += "bg-slate-900/20 border-slate-800/50 text-slate-500";
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(option)}
                disabled={isRevealed}
                className={classes}
              >
                <span className="text-sm font-mono text-slate-500 mr-3">
                  {String.fromCharCode(65 + i)}.
                </span>
                {option}
                {isRevealed && isCorrectAnswer(option) && (
                  <span className="float-right text-emerald-400">&#10003;</span>
                )}
                {isRevealed &&
                  selectedAnswer === option &&
                  !isCorrectAnswer(option) && (
                    <span className="float-right text-red-400">&#10007;</span>
                  )}
              </button>
            );
          })}
        </div>

        {/* Correct answer detail when wrong */}
        {isRevealed &&
          selectedAnswer &&
          !isCorrectAnswer(selectedAnswer) && (
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 mb-6">
              <p className="text-sm text-emerald-400">
                Correct answer
                {currentQuestion.answers.length > 1 ? "s" : ""}:{" "}
                <span className="font-medium">
                  {currentQuestion.answers.join(" / ")}
                </span>
              </p>
            </div>
          )}

        {/* Next button */}
        {isRevealed && correctCount < PASSING_SCORE && (
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium hover:bg-blue-600/30 transition-all"
          >
            {currentIndex + 1 >= testQuestions.length
              ? "See Results"
              : "Next Question"}
          </button>
        )}
      </div>
    );
  }

  // =========================================================================
  // RESULTS SCREEN (passed or completed)
  // =========================================================================

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Score card */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-10 text-center">
        {/* Pass / Fail indicator */}
        <div
          className={`w-32 h-32 rounded-full mx-auto flex flex-col items-center justify-center border-4 ${
            passed
              ? "border-emerald-500/50 bg-emerald-500/10"
              : "border-orange-500/50 bg-orange-500/10"
          }`}
        >
          <span
            className={`text-4xl font-bold ${
              passed ? "text-emerald-400" : "text-orange-400"
            }`}
          >
            {percent}%
          </span>
          <span className="text-xs text-slate-400 mt-1">
            {correctCount}/{totalAnswered}
          </span>
        </div>

        <h2 className="text-2xl font-bold mt-6">
          {passed ? "You Passed!" : "Keep Practicing!"}
        </h2>

        {passed ? (
          <p className="text-slate-400 mt-2 text-sm leading-relaxed max-w-md mx-auto">
            You answered {correctCount} out of {totalAnswered} questions
            correctly in {formatTime(elapsedSeconds)}. You met the 12/20
            passing threshold — great work!
          </p>
        ) : (
          <p className="text-slate-400 mt-2 text-sm leading-relaxed max-w-md mx-auto">
            You answered {correctCount} out of {totalAnswered} questions
            correctly in {formatTime(elapsedSeconds)}. You need 12 correct to
            pass. Don&apos;t worry — retake and try again!
          </p>
        )}

        {/* Time taken */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-500"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-slate-300 font-mono">
            {formatTime(elapsedSeconds)}
          </span>
          <span className="text-slate-500">elapsed</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            onClick={startTest}
            className={`flex-1 py-3.5 rounded-xl font-medium transition-all ${
              passed
                ? "bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30"
                : "bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30"
            }`}
          >
            Try Again
          </button>
          <button
            onClick={handleShare}
            className="flex-1 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 font-medium hover:bg-slate-800 transition-all"
          >
            {copied ? "Copied!" : "Share Result"}
          </button>
        </div>
      </div>

      {/* Review missed questions */}
      {missedQuestions.length > 0 && (
        <details className="group rounded-xl bg-slate-900/50 border border-slate-800/50 overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:bg-slate-800/30 transition-colors list-none [&::-webkit-details-marker]:hidden">
            <span className="pr-4">
              Review Missed Questions ({missedQuestions.length})
            </span>
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
          <div className="px-6 pb-4 space-y-4">
            {missedQuestions.map((r) => (
              <div
                key={r.questionId}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4"
              >
                <p className="text-white font-medium text-sm">
                  Q{r.questionId}. {r.question}
                </p>
                <div className="mt-2 space-y-1">
                  <p className="text-red-400 text-sm">
                    Your answer: {r.selectedAnswer}
                  </p>
                  <p className="text-emerald-400 text-sm">
                    Correct: {r.correctAnswers.join(" / ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </details>
      )}

      {/* Navigation links */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/study"
          className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
        >
          Study with Flashcards
        </Link>
        <Link
          href="/questions"
          className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors"
        >
          Browse All 128 Questions
        </Link>
      </div>
    </div>
  );
}
