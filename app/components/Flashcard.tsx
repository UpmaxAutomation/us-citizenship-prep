"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface FlashcardProps {
  questionNumber: number;
  question: string;
  answers: string[];
  category: string;
  subcategory: string;
  status: "new" | "learning" | "review" | "mastered";
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCards: number;
  /** English question written in the learner's native orthography (e.g. Turkish "okunus"). */
  phonetic?: string;
  /** One phonetic entry per answer, same order as answers[]. */
  answerPhonetics?: string[];
}

const statusColors = {
  new: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  learning: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  review: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  mastered: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

const statusLabels = {
  new: "New",
  learning: "Learning",
  review: "Review",
  mastered: "Mastered",
};

const categoryColors: Record<string, string> = {
  "American Government": "from-blue-600/20 to-indigo-600/20 border-blue-500/20",
  "American History": "from-red-600/20 to-orange-600/20 border-red-500/20",
  "Symbols and Holidays": "from-emerald-600/20 to-teal-600/20 border-emerald-500/20",
};

type AutoPlaySpeed = "slow" | "medium" | "fast";

const speedDurations: Record<AutoPlaySpeed, number> = {
  slow: 8000,
  medium: 5000,
  fast: 3000,
};

const speedLabels: Record<AutoPlaySpeed, string> = {
  slow: "Slow",
  medium: "Med",
  fast: "Fast",
};

// Pause durations for voice auto-play (between speech segments)
const voicePauses: Record<AutoPlaySpeed, { afterQuestion: number; afterAnswer: number }> = {
  slow: { afterQuestion: 2500, afterAnswer: 3000 },
  medium: { afterQuestion: 1000, afterAnswer: 2000 },
  fast: { afterQuestion: 500, afterAnswer: 1000 },
};

export default function Flashcard({
  questionNumber,
  question,
  answers,
  category,
  subcategory,
  status,
  onCorrect,
  onIncorrect,
  onNext,
  onPrev,
  currentIndex,
  totalCards,
  phonetic,
  answerPhonetics,
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPhonetic, setShowPhonetic] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Auto-play state
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [autoPlaySpeed, setAutoPlaySpeed] = useState<AutoPlaySpeed>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("us-citizenship-autoplay-speed");
      if (saved === "slow" || saved === "medium" || saved === "fast") return saved;
    }
    return "medium";
  });
  const [autoPlayTTS, setAutoPlayTTS] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("us-citizenship-autoplay-tts") === "true";
    }
    return false;
  });

  // Progress bar key to force re-render on each cycle step
  const [progressKey, setProgressKey] = useState(0);

  const autoPlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAutoPlayingRef = useRef(false);
  const autoPlayTTSRef = useRef(autoPlayTTS);
  const isFlippedRef = useRef(isFlipped);

  // Keep refs in sync
  useEffect(() => {
    isAutoPlayingRef.current = isAutoPlaying;
  }, [isAutoPlaying]);

  useEffect(() => {
    autoPlayTTSRef.current = autoPlayTTS;
  }, [autoPlayTTS]);

  useEffect(() => {
    isFlippedRef.current = isFlipped;
  }, [isFlipped]);

  // Persist preferences
  useEffect(() => {
    localStorage.setItem("us-citizenship-autoplay-speed", autoPlaySpeed);
  }, [autoPlaySpeed]);

  useEffect(() => {
    localStorage.setItem("us-citizenship-autoplay-tts", String(autoPlayTTS));
  }, [autoPlayTTS]);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      // Null out handlers before cancel to prevent stale onEnd callbacks
      // from triggering card flips or advances after speech is interrupted
      if (utteranceRef.current) {
        utteranceRef.current.onend = null;
        utteranceRef.current.onerror = null;
        utteranceRef.current = null;
      }
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
      const usVoice = voices.find(
        (v) => v.lang === "en-US" && v.localService
      );
      if (usVoice) utterance.voice = usVoice;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        onEnd?.();
      };
      utterance.onerror = () => setIsSpeaking(false);
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [stopSpeaking]
  );

  // Clear auto-play timer helper
  const clearAutoPlayTimer = useCallback(() => {
    if (autoPlayTimerRef.current !== null) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  }, []);

  // Stop auto-play completely
  const pauseAutoPlay = useCallback(() => {
    clearAutoPlayTimer();
    stopSpeaking();
    setIsAutoPlaying(false);
  }, [clearAutoPlayTimer, stopSpeaking]);

  // Schedule the next auto-play step
  const scheduleNextStep = useCallback(
    (flipped: boolean) => {
      clearAutoPlayTimer();
      const duration = speedDurations[autoPlaySpeed];
      setProgressKey((k) => k + 1);

      autoPlayTimerRef.current = setTimeout(() => {
        if (!isAutoPlayingRef.current) return;

        if (!flipped) {
          // Currently showing question -> flip to answer
          setIsFlipped(true);
          setShowButtons(false);
          scheduleNextStep(true);
        } else {
          // Currently showing answer -> advance to next card
          setIsFlipped(false);
          setShowButtons(false);
          stopSpeaking();
          setTimeout(() => {
            onNext();
          }, 200);
          // The useEffect watching currentIndex will trigger the question-side TTS and schedule
        }
      }, duration);
    },
    [autoPlaySpeed, stopSpeaking, onNext, clearAutoPlayTimer]
  );

  // Start auto-play
  const startAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
    // If card is flipped, flip it back first and advance
    if (isFlippedRef.current) {
      setIsFlipped(false);
      setShowButtons(false);
      stopSpeaking();
    }
    // We'll let the effect that watches isAutoPlaying kick off the cycle
  }, [stopSpeaking]);

  // Toggle auto-play
  const toggleAutoPlay = useCallback(() => {
    if (isAutoPlaying) {
      pauseAutoPlay();
    } else {
      startAutoPlay();
    }
  }, [isAutoPlaying, pauseAutoPlay, startAutoPlay]);

  // When auto-play becomes active or card changes while auto-playing, schedule the question phase
  useEffect(() => {
    if (isAutoPlaying) {
      if (autoPlayTTSRef.current) {
        // TTS-driven: speech completion controls pacing (no fixed timer cutoff)
        const pauses = voicePauses[autoPlaySpeed];
        speak(question, () => {
          if (!isAutoPlayingRef.current) return;
          // Pause after question, then flip to answer
          autoPlayTimerRef.current = setTimeout(() => {
            if (!isAutoPlayingRef.current) return;
            setIsFlipped(true);
            setShowButtons(false);
            // Wait for flip animation, then read answer
            setTimeout(() => {
              if (!isAutoPlayingRef.current) return;
              const answerText = answers.slice(0, 5).join(". Or, ");
              speak(answerText, () => {
                if (!isAutoPlayingRef.current) return;
                // Pause after answer, then advance to next card
                autoPlayTimerRef.current = setTimeout(() => {
                  if (!isAutoPlayingRef.current) return;
                  setIsFlipped(false);
                  setShowButtons(false);
                  setTimeout(() => onNext(), 200);
                }, pauses.afterAnswer);
              });
            }, 500);
          }, pauses.afterQuestion);
        });
      } else {
        // Timer-driven (no TTS)
        scheduleNextStep(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, currentIndex]);

  // Pause on tab blur (visibilitychange)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isAutoPlayingRef.current) {
        pauseAutoPlay();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pauseAutoPlay]);

  // Cancel speech and timer on unmount
  useEffect(() => {
    return () => {
      clearAutoPlayTimer();
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [clearAutoPlayTimer]);

  // Cancel speech when navigating between cards (non-autoplay)
  useEffect(() => {
    if (!isAutoPlayingRef.current) {
      stopSpeaking();
    }
  }, [currentIndex, stopSpeaking]);

  const handleFlip = useCallback(() => {
    // Pause auto-play on manual interaction
    if (isAutoPlaying) {
      pauseAutoPlay();
    }
    stopSpeaking();
    setIsFlipped((prev) => {
      if (!prev) {
        setTimeout(() => setShowButtons(true), 300);
      } else {
        setShowButtons(false);
      }
      return !prev;
    });
  }, [stopSpeaking, isAutoPlaying, pauseAutoPlay]);

  const handleResponse = useCallback(
    (correct: boolean) => {
      if (correct) onCorrect();
      else onIncorrect();
      setIsFlipped(false);
      setShowButtons(false);
      setTimeout(onNext, 200);
    },
    [onCorrect, onIncorrect, onNext]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // P key toggles auto-play
      if (e.key === "p" || e.key === "P") {
        e.preventDefault();
        toggleAutoPlay();
        return;
      }

      // Any other key pauses auto-play (if active)
      if (isAutoPlaying) {
        pauseAutoPlay();
        return;
      }

      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!isFlipped) {
          handleFlip();
        }
      } else if (e.key === "ArrowRight" || e.key === "l") {
        if (isFlipped) handleResponse(true);
        else onNext();
      } else if (e.key === "ArrowLeft" || e.key === "h") {
        if (isFlipped) handleResponse(false);
        else onPrev();
      }
    },
    [isFlipped, isAutoPlaying, handleFlip, handleResponse, onNext, onPrev, toggleAutoPlay, pauseAutoPlay]
  );

  // Change speed while auto-playing (only affects timer-driven mode, not TTS-driven)
  const handleSpeedChange = useCallback(
    (speed: AutoPlaySpeed) => {
      setAutoPlaySpeed(speed);
      // If auto-playing with TTS, speech controls pacing — speed change only saves preference
      if (isAutoPlaying && !autoPlayTTSRef.current) {
        clearAutoPlayTimer();
        const duration = speedDurations[speed];
        setProgressKey((k) => k + 1);
        autoPlayTimerRef.current = setTimeout(() => {
          if (!isAutoPlayingRef.current) return;
          if (!isFlippedRef.current) {
            setIsFlipped(true);
            setShowButtons(false);
            scheduleNextStep(true);
          } else {
            setIsFlipped(false);
            setShowButtons(false);
            setTimeout(() => onNext(), 200);
          }
        }, duration);
      }
    },
    [isAutoPlaying, clearAutoPlayTimer, onNext, scheduleNextStep]
  );

  const cardBg = categoryColors[category] || "from-slate-600/20 to-slate-600/20 border-slate-500/20";

  // Determine whether to show response buttons:
  // Show them when flipped AND (not auto-playing OR auto-play is paused while flipped)
  const shouldShowResponseButtons = showButtons && isFlipped && !isAutoPlaying;

  const currentDuration = speedDurations[autoPlaySpeed];

  return (
    <div
      className="w-full max-w-2xl mx-auto focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-sm font-mono">
            #{questionNumber}
          </span>
          <span
            className={`text-xs px-2.5 py-1 rounded-full border ${statusColors[status]}`}
          >
            {statusLabels[status]}
          </span>
        </div>
        <span className="text-slate-500 text-sm">
          {currentIndex + 1} / {totalCards}
        </span>
      </div>

      {/* Card */}
      <div className="card-flip w-full" style={{ minHeight: answers.length > 6 ? "400px" : "320px" }}>
        <div
          className={`card-flip-inner w-full cursor-pointer ${
            isFlipped ? "flipped" : ""
          }`}
          onClick={handleFlip}
          style={{ minHeight: answers.length > 6 ? "400px" : "320px" }}
        >
          {/* Front - Question */}
          <div
            className={`card-front absolute inset-0 rounded-2xl border bg-gradient-to-br ${cardBg} p-6 sm:p-8 flex flex-col overflow-hidden`}
          >
            {/* Auto-play progress indicator */}
            {isAutoPlaying && !isFlipped && !autoPlayTTS && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-900/30 rounded-t-2xl overflow-hidden">
                <div
                  key={`q-${progressKey}`}
                  className="h-full bg-blue-400 countdown-bar rounded-t-2xl"
                  style={{ animationDuration: `${currentDuration}ms` }}
                />
              </div>
            )}
            {isAutoPlaying && !isFlipped && autoPlayTTS && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-400 rounded-t-2xl animate-pulse" />
            )}

            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs text-slate-400 uppercase tracking-wider">
                {category}
              </span>
              <span className="text-slate-600">&#8226;</span>
              <span className="text-xs text-slate-500">{subcategory}</span>
            </div>

            {/* TTS Speaker Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (isAutoPlaying) pauseAutoPlay();
                if (isSpeaking) {
                  stopSpeaking();
                } else {
                  speak(question, () => {
                    // Auto-flip to answer and read it
                    setIsFlipped(true);
                    setTimeout(() => setShowButtons(true), 300);
                    setTimeout(() => {
                      speak(answers.slice(0, 5).join(". Or, "));
                    }, 500);
                  });
                }
              }}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                isSpeaking && !isFlipped
                  ? "bg-blue-500/30 text-blue-300 animate-pulse"
                  : "bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white"
              }`}
              title="Read question &amp; answer"
              aria-label="Read question and answer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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

            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-medium leading-relaxed text-white/90">
                  {question}
                </h2>
                {phonetic && showPhonetic && (
                  <div lang="tr" className="mt-3">
                    <span aria-hidden="true" className="text-sm italic text-blue-300/70">
                      {phonetic}
                    </span>
                    <span className="sr-only">
                      Pronunciation guide for: {question}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center mt-6 flex items-center justify-center gap-3">
              <span className="text-sm text-slate-500">
                {isAutoPlaying ? "Auto-playing..." : "Tap to reveal answer"}
              </span>
              {phonetic && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPhonetic((prev) => !prev);
                  }}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                    showPhonetic
                      ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                      : "bg-slate-800/50 text-slate-500 border-slate-700/50 hover:text-slate-300"
                  }`}
                  title={showPhonetic ? "Hide pronunciation" : "Show pronunciation"}
                  aria-label={showPhonetic ? "Hide pronunciation guide" : "Show pronunciation guide"}
                >
                  {showPhonetic ? "Hide" : "Show"} pronunciation
                </button>
              )}
            </div>
          </div>

          {/* Back - Answer */}
          <div
            className={`card-back absolute inset-0 rounded-2xl border bg-gradient-to-br ${cardBg} p-6 sm:p-8 flex flex-col overflow-hidden`}
          >
            {/* Auto-play progress indicator */}
            {isAutoPlaying && isFlipped && !autoPlayTTS && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-emerald-900/30 rounded-t-2xl overflow-hidden">
                <div
                  key={`a-${progressKey}`}
                  className="h-full bg-emerald-400 countdown-bar rounded-t-2xl"
                  style={{ animationDuration: `${currentDuration}ms` }}
                />
              </div>
            )}
            {isAutoPlaying && isFlipped && autoPlayTTS && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-emerald-400 rounded-t-2xl animate-pulse" />
            )}

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-emerald-400 uppercase tracking-wider">
                Answer{answers.length > 1 ? "s" : ""}
              </span>
              {answers.length > 3 && (
                <span className="text-xs text-slate-500">
                  ({answers.length} accepted)
                </span>
              )}
            </div>

            {/* TTS Speaker Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (isSpeaking) {
                  stopSpeaking();
                } else {
                  speak(answers.slice(0, 5).join(". Or, "));
                }
              }}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/50 ${
                isSpeaking && isFlipped
                  ? "bg-emerald-500/30 text-emerald-300 animate-pulse"
                  : "bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white"
              }`}
              title="Read answer aloud"
              aria-label="Read answer aloud"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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

            <div className="flex-1 min-h-0 flex items-center justify-center overflow-y-auto">
              <div className={`text-center w-full ${answers.length > 6 ? "columns-2 gap-x-4 text-left" : "space-y-2"}`}>
                {answers.map((answer, i) => (
                  <div
                    key={i}
                    className={`leading-relaxed ${
                      answers.length > 6
                        ? "text-sm py-0.5 break-inside-avoid"
                        : answers.length > 3
                        ? "text-base"
                        : "text-lg sm:text-xl"
                    }`}
                  >
                    <p className="text-emerald-300/90">
                      {answers.length > 3 && (
                        <span className="text-emerald-500/50 mr-1.5">&#8226;</span>
                      )}
                      {answer}
                    </p>
                    {answerPhonetics?.[i] && showPhonetic && (
                      <p aria-hidden="true" className="text-xs italic text-emerald-400/50 mt-0.5 ml-3">
                        {answerPhonetics[i]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-3 shrink-0">
              <span className="text-sm text-slate-500">
                {isAutoPlaying ? "Auto-playing..." : "Did you know this?"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-Play Controls */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mt-5">
        {/* Play/Pause Button */}
        <button
          onClick={toggleAutoPlay}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-400/50 active:scale-95 ${
            isAutoPlaying
              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30"
              : "bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30"
          }`}
          title={isAutoPlaying ? "Pause auto-play (P)" : "Start auto-play (P)"}
          aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
        >
          {isAutoPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
          {isAutoPlaying ? "Pause" : "Play"}
        </button>

        {/* Normal / Voice Mode Toggle */}
        <div className="flex items-center gap-0.5 bg-slate-800/50 border border-slate-700/50 rounded-xl p-1">
          <button
            onClick={() => {
              if (autoPlayTTS) {
                if (isAutoPlaying) pauseAutoPlay();
                setAutoPlayTTS(false);
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none ${
              !autoPlayTTS
                ? "bg-slate-600/60 text-white"
                : "text-slate-500 hover:text-slate-300"
            }`}
            aria-label="Normal auto-play (silent)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M12 12h.01" />
            </svg>
            Normal
          </button>
          <button
            onClick={() => {
              if (!autoPlayTTS) {
                if (isAutoPlaying) pauseAutoPlay();
                setAutoPlayTTS(true);
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none ${
              autoPlayTTS
                ? "bg-blue-500/30 text-blue-300"
                : "text-slate-500 hover:text-slate-300"
            }`}
            aria-label="Voice auto-play (reads aloud)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            Voice
          </button>
        </div>

        {/* Speed Selector */}
        <div className="flex items-center gap-0.5 bg-slate-800/50 border border-slate-700/50 rounded-lg p-1">
          {(["slow", "medium", "fast"] as AutoPlaySpeed[]).map((speed) => (
            <button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all focus:outline-none ${
                autoPlaySpeed === speed
                  ? "bg-slate-600/60 text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
              title={
                autoPlayTTS
                  ? `${speedLabels[speed]} pauses between speech`
                  : `${speedLabels[speed]} speed (${speedDurations[speed] / 1000}s per side)`
              }
              aria-label={`Set speed to ${speedLabels[speed]}`}
            >
              {speedLabels[speed]}
            </button>
          ))}
        </div>
      </div>

      {/* Response Buttons -- hidden during auto-play */}
      {shouldShowResponseButtons && (
        <div className="flex gap-4 mt-6 bounce-in">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleResponse(false);
            }}
            className="flex-1 py-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-medium hover:bg-red-500/20 transition-all active:scale-95"
          >
            Still Learning
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleResponse(true);
            }}
            className="flex-1 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium hover:bg-emerald-500/20 transition-all active:scale-95"
          >
            Got It!
          </button>
        </div>
      )}

      {/* Navigation */}
      {!isFlipped && !isAutoPlaying && (
        <div className="flex justify-between mt-6">
          <button
            onClick={onPrev}
            className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            &larr; Previous
          </button>
          <button
            onClick={onNext}
            className="px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            Next &rarr;
          </button>
        </div>
      )}

      {/* Keyboard Hints */}
      <div className="hidden sm:flex justify-center gap-6 mt-4 text-xs text-slate-600">
        <span>Space: Flip</span>
        <span>&larr; &rarr;: Navigate</span>
        <span>P: Auto-play</span>
        {isFlipped && !isAutoPlaying && <span>L: Got it &bull; H: Still learning</span>}
      </div>
    </div>
  );
}
