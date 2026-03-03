"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";

interface Question {
  id: number;
  question: string;
  answers: string[];
  category: string;
}

interface QuizProps {
  questions: Question[];
  onComplete: (results: { correct: number; incorrect: number; questionResults: { id: number; correct: boolean }[] }) => void;
  onExit: () => void;
  questionCount?: number;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateOptions(correctAnswers: string[], allQuestions: Question[], currentId: number): string[] {
  const mainAnswer = correctAnswers[0];
  const otherAnswers = allQuestions
    .filter((q) => q.id !== currentId)
    .flatMap((q) => q.answers)
    .filter((a) => !correctAnswers.includes(a));

  const wrongOptions = shuffleArray(otherAnswers).slice(0, 3);
  return shuffleArray([mainAnswer, ...wrongOptions]);
}

export default function Quiz({ questions, onComplete, onExit, questionCount = 10 }: QuizProps) {
  const quizQuestions = useMemo(
    () => shuffleArray(questions).slice(0, Math.min(questionCount, questions.length)),
    [questions, questionCount]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [results, setResults] = useState<{ id: number; correct: boolean }[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      stopSpeaking();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      const voices = window.speechSynthesis.getVoices();
      const usVoice = voices.find(
        (v) => v.lang === "en-US" && v.localService
      );
      if (usVoice) utterance.voice = usVoice;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [stopSpeaking]
  );

  // Cancel speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Cancel speech when navigating between questions
  useEffect(() => {
    stopSpeaking();
  }, [currentIndex, stopSpeaking]);

  const currentQuestion = quizQuestions[currentIndex];
  const options = useMemo(
    () => currentQuestion ? generateOptions(currentQuestion.answers, questions, currentQuestion.id) : [],
    [currentQuestion, questions]
  );

  const handleSelect = useCallback(
    (answer: string) => {
      if (isRevealed) return;
      setSelectedAnswer(answer);
      setIsRevealed(true);
      const isCorrect = currentQuestion.answers.some(
        (a) => a.toLowerCase() === answer.toLowerCase()
      );
      if (isCorrect) setCorrectCount((prev) => prev + 1);
      setResults((prev) => [...prev, { id: currentQuestion.id, correct: isCorrect }]);
    },
    [isRevealed, currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= quizQuestions.length) {
      onComplete({
        correct: correctCount,
        incorrect: quizQuestions.length - correctCount,
        questionResults: results,
      });
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setIsRevealed(false);
  }, [currentIndex, quizQuestions.length, onComplete, correctCount, results]);

  if (!currentQuestion) return null;

  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;
  const isCorrectAnswer = (answer: string) =>
    currentQuestion.answers.some((a) => a.toLowerCase() === answer.toLowerCase());

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-400">
            Question {currentIndex + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm text-emerald-400 font-mono">
            {correctCount} correct
          </span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-6 relative">
        <span className="text-xs text-slate-500 uppercase tracking-wider">
          {currentQuestion.category}
        </span>
        <h2 className="text-xl sm:text-2xl font-medium mt-3 leading-relaxed pr-10">
          {currentQuestion.question}
        </h2>

        {/* TTS Speaker Button */}
        <button
          onClick={() => {
            if (isSpeaking) {
              stopSpeaking();
            } else {
              speak(currentQuestion.question);
            }
          }}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
            isSpeaking
              ? "bg-blue-500/30 text-blue-300 animate-pulse"
              : "bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white"
          }`}
          title="Read question aloud"
          aria-label="Read question aloud"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        </button>
      </div>

      {/* Options */}
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
              {isRevealed && selectedAnswer === option && !isCorrectAnswer(option) && (
                <span className="float-right text-red-400">&#10007;</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Correct answer detail when wrong */}
      {isRevealed && selectedAnswer && !isCorrectAnswer(selectedAnswer) && (
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 mb-6 fade-in">
          <p className="text-sm text-emerald-400">
            Correct answer{currentQuestion.answers.length > 1 ? "s" : ""}:{" "}
            <span className="font-medium">
              {currentQuestion.answers.join(" / ")}
            </span>
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={onExit}
          className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white transition-all"
        >
          Exit Quiz
        </button>
        {isRevealed && (
          <button
            onClick={handleNext}
            className="flex-1 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium hover:bg-blue-600/30 transition-all bounce-in"
          >
            {currentIndex + 1 >= quizQuestions.length
              ? "See Results"
              : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}
