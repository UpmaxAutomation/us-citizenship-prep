"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useVoiceRecognition, matchAnswer } from "@/app/hooks/useVoiceRecognition";

interface VoiceModeProps {
  questionNumber: number;
  question: string;
  answers: string[];
  category: string;
  status: "new" | "learning" | "review" | "mastered";
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCards: number;
  autoListen: boolean;
}

type Result = "correct" | "incorrect" | "skipped" | null;

const categoryColors: Record<string, string> = {
  "American Government": "from-blue-600/20 to-indigo-600/20 border-blue-500/20",
  "American History": "from-red-600/20 to-orange-600/20 border-red-500/20",
  "Symbols and Holidays": "from-emerald-600/20 to-teal-600/20 border-emerald-500/20",
};

export default function VoiceMode({
  questionNumber,
  question,
  answers,
  category,
  status,
  onCorrect,
  onIncorrect,
  onNext,
  onPrev,
  currentIndex,
  totalCards,
  autoListen,
}: VoiceModeProps) {
  const [result, setResult] = useState<Result>(null);
  const [matchedAnswer, setMatchedAnswer] = useState<string | null>(null);
  const [hasSpoken, setHasSpoken] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const questionReadRef = useRef(false);

  const {
    isListening,
    transcript,
    interimTranscript,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
  } = useVoiceRecognition({ continuous: false });

  // TTS helpers
  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string, onEnd?: () => void) => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      stopSpeaking();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.85;
      const voices = window.speechSynthesis.getVoices();
      const usVoice = voices.find((v) => v.lang === "en-US" && v.localService);
      if (usVoice) utterance.voice = usVoice;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        onEnd?.();
      };
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    },
    [stopSpeaking]
  );

  // Read question aloud when card changes, then auto-listen
  useEffect(() => {
    questionReadRef.current = false;
    setResult(null);
    setMatchedAnswer(null);
    setHasSpoken(false);
    resetTranscript();
    stopSpeaking();

    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }

    // Small delay to let state settle
    const timer = setTimeout(() => {
      if (!questionReadRef.current) {
        questionReadRef.current = true;
        speak(question, () => {
          // After question is read, auto-listen if enabled
          if (autoListen && isSupported) {
            setTimeout(() => startListening(), 400);
          }
        });
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Check answer when listening stops and we have a transcript
  useEffect(() => {
    if (!isListening && transcript && !hasSpoken) {
      setHasSpoken(true);
      const { matched, bestMatch } = matchAnswer(transcript, answers);
      setMatchedAnswer(bestMatch);

      if (matched) {
        setResult("correct");
        onCorrect();
        speak("Correct!");
        // Auto-advance after delay
        if (autoListen) {
          advanceTimerRef.current = setTimeout(() => {
            onNext();
          }, 2500);
        }
      } else {
        setResult("incorrect");
        onIncorrect();
        // Read correct answer
        const correctText = answers.length > 1
          ? `The answer is: ${answers.slice(0, 3).join(". Or, ")}`
          : `The answer is: ${answers[0]}`;
        speak(correctText, () => {
          if (autoListen) {
            advanceTimerRef.current = setTimeout(() => {
              onNext();
            }, 2000);
          }
        });
      }
    }
  }, [isListening, transcript, hasSpoken, answers, onCorrect, onIncorrect, onNext, speak, autoListen]);

  // Cleanup
  useEffect(() => {
    return () => {
      stopSpeaking();
      stopListening();
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, [stopSpeaking, stopListening]);

  const handleMicClick = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      resetTranscript();
      setResult(null);
      setMatchedAnswer(null);
      setHasSpoken(false);
      startListening();
    }
  }, [isListening, stopListening, startListening, resetTranscript]);

  const handleSkip = useCallback(() => {
    stopListening();
    stopSpeaking();
    setResult("skipped");
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    // Show answer briefly, then advance
    speak(answers.slice(0, 3).join(". Or, "), () => {
      if (autoListen) {
        advanceTimerRef.current = setTimeout(onNext, 1500);
      }
    });
  }, [stopListening, stopSpeaking, speak, answers, onNext, autoListen]);

  const handleRepeatQuestion = useCallback(() => {
    stopListening();
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    speak(question, () => {
      if (isSupported && !result) {
        setTimeout(() => startListening(), 400);
      }
    });
  }, [stopListening, speak, question, isSupported, result, startListening]);

  if (!isSupported) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center py-12">
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
          <p className="text-red-400 text-lg font-medium mb-2">
            Voice Not Supported
          </p>
          <p className="text-slate-400 text-sm">
            Your browser doesn&apos;t support speech recognition. Try Chrome or
            Safari on desktop or Android.
          </p>
        </div>
      </div>
    );
  }

  const cardBg =
    categoryColors[category] || "from-slate-600/20 to-slate-600/20 border-slate-500/20";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-sm font-mono">
            #{questionNumber}
          </span>
          <span className="text-xs text-slate-500 uppercase tracking-wider">
            {category}
          </span>
        </div>
        <span className="text-slate-500 text-sm">
          {currentIndex + 1} / {totalCards}
        </span>
      </div>

      {/* Question Card */}
      <div
        className={`rounded-2xl border bg-gradient-to-br ${cardBg} p-6 sm:p-8`}
      >
        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-medium leading-relaxed text-white/90">
            {question}
          </h2>
          <button
            onClick={handleRepeatQuestion}
            className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all ${
              isSpeaking
                ? "bg-blue-500/20 text-blue-300 animate-pulse"
                : "bg-white/5 text-slate-500 hover:text-slate-300"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            Repeat
          </button>
        </div>

        {/* Mic Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleMicClick}
            disabled={!!result}
            className={`relative w-20 h-20 rounded-full transition-all focus:outline-none focus:ring-4 ${
              isListening
                ? "bg-red-500 text-white shadow-lg shadow-red-500/30 focus:ring-red-400/50 scale-110"
                : result
                ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 focus:ring-blue-400/50 hover:scale-105"
            }`}
            aria-label={isListening ? "Stop listening" : "Start listening"}
          >
            {/* Pulse rings when listening */}
            {isListening && (
              <>
                <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20" />
                <span className="absolute -inset-2 rounded-full border-2 border-red-400/30 animate-pulse" />
              </>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 mx-auto"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          </button>

          <p className="text-sm text-slate-500">
            {isListening
              ? "Listening... speak your answer"
              : result
              ? ""
              : "Tap to answer"}
          </p>
        </div>

        {/* Live Transcript */}
        {(transcript || interimTranscript) && (
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 mb-1">You said:</p>
            <p className="text-lg text-white/80">
              {transcript}
              {interimTranscript && (
                <span className="text-slate-500 italic">
                  {" "}
                  {interimTranscript}
                </span>
              )}
            </p>
          </div>
        )}

        {/* Result Feedback */}
        {result && (
          <div
            className={`mt-6 rounded-xl p-5 text-center ${
              result === "correct"
                ? "bg-emerald-500/10 border border-emerald-500/20"
                : "bg-red-500/10 border border-red-500/20"
            }`}
          >
            {result === "correct" ? (
              <div>
                <p className="text-2xl mb-1">✓</p>
                <p className="text-emerald-400 font-semibold text-lg">
                  Correct!
                </p>
                {matchedAnswer && (
                  <p className="text-emerald-300/70 text-sm mt-1">
                    {matchedAnswer}
                  </p>
                )}
              </div>
            ) : (
              <div>
                <p className="text-2xl mb-1">{result === "skipped" ? "→" : "✗"}</p>
                <p className="text-red-400 font-semibold text-lg">
                  {result === "skipped" ? "Skipped" : "Not quite"}
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Correct answer{answers.length > 1 ? "s" : ""}:
                  </p>
                  {answers.slice(0, 5).map((a, i) => (
                    <p key={i} className="text-emerald-300/80 text-sm">
                      {a}
                    </p>
                  ))}
                  {answers.length > 5 && (
                    <p className="text-slate-500 text-xs">
                      +{answers.length - 5} more
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => {
            stopListening();
            stopSpeaking();
            if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
            onPrev();
          }}
          className="px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          ← Prev
        </button>

        {!result && (
          <button
            onClick={handleSkip}
            className="px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-amber-400/70 hover:text-amber-300 hover:bg-slate-800 transition-all"
          >
            Skip / Show Answer
          </button>
        )}

        <button
          onClick={() => {
            stopListening();
            stopSpeaking();
            if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
            onNext();
          }}
          className="px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          Next →
        </button>
      </div>

      {/* Try Again button after incorrect */}
      {result && result !== "correct" && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              setResult(null);
              setMatchedAnswer(null);
              setHasSpoken(false);
              resetTranscript();
              if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
              speak(question, () => {
                setTimeout(() => startListening(), 400);
              });
            }}
            className="px-6 py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium hover:bg-blue-600/30 transition-all"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Hints */}
      <div className="hidden sm:flex justify-center gap-6 mt-4 text-xs text-slate-600">
        <span>🎤 Tap mic to answer</span>
        <span>🔊 Questions read aloud</span>
        <span>← → Navigate</span>
      </div>
    </div>
  );
}
