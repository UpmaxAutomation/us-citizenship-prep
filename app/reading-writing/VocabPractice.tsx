"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { readingSentences, writingSentences } from "@/app/data/vocabulary";
import type { VocabSentence } from "@/app/data/vocabulary";

type PracticeMode = "reading" | "writing";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function VocabPractice() {
  const [mode, setMode] = useState<PracticeMode>("reading");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Writing mode state
  const [userInput, setUserInput] = useState("");
  const [writingResult, setWritingResult] = useState<
    "correct" | "incorrect" | null
  >(null);

  const sentences = useMemo(() => {
    return mode === "reading"
      ? shuffleArray(readingSentences)
      : shuffleArray(writingSentences);
  }, [mode]);

  const currentSentence: VocabSentence | undefined = sentences[currentIndex];

  // ── TTS ───────────────────────────────────────────────────────────────────

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

  // Cancel speech and reset state when navigating between sentences
  useEffect(() => {
    stopSpeaking();
  }, [currentIndex, stopSpeaking]);

  // Auto-play TTS in writing mode when a new sentence loads
  useEffect(() => {
    if (mode === "writing" && currentSentence && !answered) {
      // Small delay to let the component render before speaking
      const timer = setTimeout(() => {
        speak(currentSentence.text);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [mode, currentIndex, currentSentence, answered, speak]);

  // ── Mode Switch ───────────────────────────────────────────────────────────

  const switchMode = useCallback(
    (newMode: PracticeMode) => {
      if (newMode === mode) return;
      stopSpeaking();
      setMode(newMode);
      setCurrentIndex(0);
      setCorrect(0);
      setAttempted(0);
      setAnswered(false);
      setUserInput("");
      setWritingResult(null);
    },
    [mode, stopSpeaking]
  );

  // ── Next Sentence ─────────────────────────────────────────────────────────

  const nextSentence = useCallback(() => {
    setAnswered(false);
    setUserInput("");
    setWritingResult(null);
    setCurrentIndex((prev) =>
      prev + 1 >= sentences.length ? 0 : prev + 1
    );
  }, [sentences.length]);

  // ── Reading Mode Handlers ─────────────────────────────────────────────────

  const handleReadingResult = useCallback(
    (canRead: boolean) => {
      if (answered) return;
      setAnswered(true);
      setAttempted((prev) => prev + 1);
      if (canRead) {
        setCorrect((prev) => prev + 1);
      }
    },
    [answered]
  );

  // ── Writing Mode Handlers ─────────────────────────────────────────────────

  const checkWriting = useCallback(() => {
    if (!currentSentence || answered) return;
    setAnswered(true);
    setAttempted((prev) => prev + 1);

    const normalizedInput = userInput.trim().toLowerCase().replace(/\s+/g, " ");
    const normalizedCorrect = currentSentence.text
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

    if (normalizedInput === normalizedCorrect) {
      setWritingResult("correct");
      setCorrect((prev) => prev + 1);
    } else {
      setWritingResult("incorrect");
    }
  }, [currentSentence, answered, userInput]);

  // ── Progress ──────────────────────────────────────────────────────────────

  const progressPercent =
    sentences.length > 0
      ? Math.round(((currentIndex + 1) / sentences.length) * 100)
      : 0;

  if (!currentSentence) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p>No sentences available for practice.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Mode Toggle */}
      <div className="flex gap-1 bg-slate-900/50 p-1 rounded-xl border border-slate-800/50 mb-6">
        <button
          onClick={() => switchMode("reading")}
          className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
            mode === "reading"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          Reading Practice
        </button>
        <button
          onClick={() => switchMode("writing")}
          className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
            mode === "writing"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          Writing Practice
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-400">
            Sentence {currentIndex + 1} of {sentences.length}
          </span>
          <span className="text-sm text-emerald-400 font-mono">
            {correct} / {attempted} correct
          </span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Reading Practice Mode */}
      {mode === "reading" && (
        <>
          {/* Sentence Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-6 relative">
            <span className="text-xs text-slate-500 uppercase tracking-wider">
              Read this sentence aloud
            </span>
            <p className="text-xl sm:text-2xl font-medium mt-3 leading-relaxed pr-10 text-white">
              {currentSentence.text}
            </p>

            {/* TTS Button */}
            <button
              onClick={() => {
                if (isSpeaking) {
                  stopSpeaking();
                } else {
                  speak(currentSentence.text);
                }
              }}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                isSpeaking
                  ? "bg-blue-500/30 text-blue-300 animate-pulse"
                  : "bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white"
              }`}
              title="Read aloud"
              aria-label="Read sentence aloud"
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

          {/* Self-report Buttons */}
          {!answered ? (
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => handleReadingResult(true)}
                className="flex-1 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium hover:bg-emerald-500/20 transition-all"
              >
                I Can Read This
              </button>
              <button
                onClick={() => handleReadingResult(false)}
                className="flex-1 py-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-300 font-medium hover:bg-orange-500/20 transition-all"
              >
                Need Practice
              </button>
            </div>
          ) : (
            <div className="mb-6">
              <button
                onClick={nextSentence}
                className="w-full py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium hover:bg-blue-600/30 transition-all"
              >
                Next Sentence
              </button>
            </div>
          )}
        </>
      )}

      {/* Writing Practice Mode */}
      {mode === "writing" && (
        <>
          {/* Listen Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-6">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => speak(currentSentence.text)}
                  className={`p-4 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                    isSpeaking
                      ? "bg-blue-500/30 text-blue-300 animate-pulse"
                      : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300"
                  }`}
                  title="Play sentence"
                  aria-label="Play sentence audio"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
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
              <p className="text-slate-400 text-sm">
                Listen and write the sentence below
              </p>
              {!answered && (
                <button
                  onClick={() => speak(currentSentence.text)}
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Play Again
                </button>
              )}
            </div>
          </div>

          {/* Text Input */}
          <div className="mb-4">
            <label htmlFor="writing-input" className="sr-only">
              Write the sentence you heard
            </label>
            <input
              id="writing-input"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !answered && userInput.trim()) {
                  checkWriting();
                }
              }}
              disabled={answered}
              placeholder="Type the sentence here..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 disabled:opacity-60 transition-all"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </div>

          {/* Check / Feedback */}
          {!answered ? (
            <button
              onClick={checkWriting}
              disabled={!userInput.trim()}
              className="w-full py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium hover:bg-blue-600/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed mb-6"
            >
              Check Spelling
            </button>
          ) : (
            <div className="space-y-3 mb-6">
              {/* Feedback */}
              {writingResult === "correct" ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-emerald-300 font-medium">
                      Correct!
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f87171"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span className="text-red-300 font-medium">
                      Not quite
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">
                    Correct answer:{" "}
                    <span className="text-white font-medium">
                      {currentSentence.text}
                    </span>
                  </p>
                </div>
              )}

              {/* Next Button */}
              <button
                onClick={nextSentence}
                className="w-full py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium hover:bg-blue-600/30 transition-all"
              >
                Next Sentence
              </button>
            </div>
          )}
        </>
      )}

      {/* Score Summary */}
      {attempted > 0 && (
        <div className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-4 text-center">
          <p className="text-sm text-slate-400">
            Session score:{" "}
            <span className="text-white font-semibold">
              {correct}
            </span>{" "}
            correct out of{" "}
            <span className="text-white font-semibold">
              {attempted}
            </span>{" "}
            attempted
            {attempted > 0 && (
              <span className="text-slate-500 ml-1">
                ({Math.round((correct / attempted) * 100)}%)
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
