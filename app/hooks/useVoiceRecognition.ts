"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface UseVoiceRecognitionOptions {
  lang?: string;
  continuous?: boolean;
  interimResults?: boolean;
}

interface UseVoiceRecognitionReturn {
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  isSupported: boolean;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export function useVoiceRecognition(
  options: UseVoiceRecognitionOptions = {}
): UseVoiceRecognitionReturn {
  const { lang = "en-US", continuous = false, interimResults = true } = options;

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const w = typeof window !== "undefined" ? (window as any) : null;
    const SpeechRecognitionAPI = w
      ? w.SpeechRecognition || w.webkitSpeechRecognition
      : null;

    setIsSupported(!!SpeechRecognitionAPI);

    if (SpeechRecognitionAPI) {
      const recognition = new SpeechRecognitionAPI();
      recognition.lang = lang;
      recognition.continuous = continuous;
      recognition.interimResults = interimResults;
      recognition.maxAlternatives = 3;

      recognition.onresult = (event: any) => {
        let final = "";
        let interim = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            final += result[0].transcript;
          } else {
            interim += result[0].transcript;
          }
        }

        if (final) {
          setTranscript((prev) => (prev ? prev + " " + final : final));
          setInterimTranscript("");
        } else {
          setInterimTranscript(interim);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        setInterimTranscript("");
      };

      recognition.onerror = (event: any) => {
        if (event.error !== "aborted" && event.error !== "no-speech") {
          console.warn("Speech recognition error:", event.error);
        }
        setIsListening(false);
        setInterimTranscript("");
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
    };
  }, [lang, continuous, interimResults]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) return;
    setTranscript("");
    setInterimTranscript("");
    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch {
      // Already started
    }
  }, []);

  const stopListening = useCallback(() => {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.stop();
    } catch {
      // Already stopped
    }
    setIsListening(false);
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript("");
    setInterimTranscript("");
  }, []);

  return {
    isListening,
    transcript,
    interimTranscript,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
  };
}

/**
 * Fuzzy match a spoken answer against a list of correct answers.
 * Returns the matched answer string or null.
 */
export function matchAnswer(
  spoken: string,
  correctAnswers: string[]
): { matched: boolean; bestMatch: string | null; confidence: number } {
  if (!spoken.trim()) return { matched: false, bestMatch: null, confidence: 0 };

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\b(the|a|an|of|and|or|is|are|was|were|to|in|for|it|its)\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const spokenNorm = normalize(spoken);
  const spokenWords = new Set(spokenNorm.split(" ").filter((w) => w.length > 1));

  let bestScore = 0;
  let bestMatch: string | null = null;

  for (const answer of correctAnswers) {
    const answerNorm = normalize(answer);
    const answerWords = answerNorm.split(" ").filter((w) => w.length > 1);

    if (!answerWords.length) continue;

    // Exact match after normalization
    if (spokenNorm === answerNorm || spokenNorm.includes(answerNorm) || answerNorm.includes(spokenNorm)) {
      return { matched: true, bestMatch: answer, confidence: 1 };
    }

    // Word overlap score
    let matchCount = 0;
    for (const word of answerWords) {
      if (spokenWords.has(word)) {
        matchCount++;
      } else {
        // Check partial match for longer words (e.g., "constitution" vs "constitutional")
        for (const sw of spokenWords) {
          if (
            (sw.length > 4 && word.startsWith(sw.slice(0, -1))) ||
            (word.length > 4 && sw.startsWith(word.slice(0, -1)))
          ) {
            matchCount += 0.8;
            break;
          }
        }
      }
    }

    const score = matchCount / answerWords.length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = answer;
    }
  }

  // Threshold: at least 60% of answer words must match
  return {
    matched: bestScore >= 0.6,
    bestMatch,
    confidence: bestScore,
  };
}
