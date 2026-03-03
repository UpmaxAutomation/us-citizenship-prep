"use client";

import { useState, useEffect, useCallback } from "react";

export interface QuestionProgress {
  questionId: number;
  correctCount: number;
  incorrectCount: number;
  lastSeen: number;
  nextReview: number;
  mastered: boolean;
}

export interface StudyStats {
  totalStudied: number;
  mastered: number;
  needsReview: number;
  notStarted: number;
  streakDays: number;
  lastStudyDate: string;
  totalSessions: number;
}

const STORAGE_KEY = "us-citizenship-progress";
const STATS_KEY = "us-citizenship-stats";

function getSpacedInterval(correctCount: number): number {
  // Spaced repetition intervals in milliseconds
  const intervals = [
    1 * 60 * 60 * 1000,       // 1 hour
    4 * 60 * 60 * 1000,       // 4 hours
    24 * 60 * 60 * 1000,      // 1 day
    3 * 24 * 60 * 60 * 1000,  // 3 days
    7 * 24 * 60 * 60 * 1000,  // 1 week
    14 * 24 * 60 * 60 * 1000, // 2 weeks
    30 * 24 * 60 * 60 * 1000, // 1 month
  ];
  const index = Math.min(correctCount - 1, intervals.length - 1);
  return intervals[Math.max(0, index)];
}

export function useProgress() {
  const [progress, setProgress] = useState<Record<number, QuestionProgress>>({});
  const [stats, setStats] = useState<StudyStats>({
    totalStudied: 0,
    mastered: 0,
    needsReview: 0,
    notStarted: 128,
    streakDays: 0,
    lastStudyDate: "",
    totalSessions: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setProgress(JSON.parse(saved));
      }
      const savedStats = localStorage.getItem(STATS_KEY);
      if (savedStats) {
        setStats(JSON.parse(savedStats));
      }
    } catch (e) {
      console.error("Failed to load progress:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error("Failed to save progress:", e);
    }
  }, [progress, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error("Failed to save stats:", e);
    }
  }, [stats, isLoaded]);

  const markCorrect = useCallback((questionId: number) => {
    setProgress((prev) => {
      const existing = prev[questionId] || {
        questionId,
        correctCount: 0,
        incorrectCount: 0,
        lastSeen: 0,
        nextReview: 0,
        mastered: false,
      };
      const newCorrectCount = existing.correctCount + 1;
      const now = Date.now();
      return {
        ...prev,
        [questionId]: {
          ...existing,
          correctCount: newCorrectCount,
          lastSeen: now,
          nextReview: now + getSpacedInterval(newCorrectCount),
          mastered: newCorrectCount >= 3,
        },
      };
    });
  }, []);

  const markIncorrect = useCallback((questionId: number) => {
    setProgress((prev) => {
      const existing = prev[questionId] || {
        questionId,
        correctCount: 0,
        incorrectCount: 0,
        lastSeen: 0,
        nextReview: 0,
        mastered: false,
      };
      const now = Date.now();
      return {
        ...prev,
        [questionId]: {
          ...existing,
          correctCount: Math.max(0, existing.correctCount - 1),
          incorrectCount: existing.incorrectCount + 1,
          lastSeen: now,
          nextReview: now + 30 * 60 * 1000, // Review in 30 min
          mastered: false,
        },
      };
    });
  }, []);

  const updateStats = useCallback(() => {
    const today = new Date().toDateString();
    const values = Object.values(progress);
    const mastered = values.filter((p) => p.mastered).length;
    const now = Date.now();
    const needsReview = values.filter(
      (p) => !p.mastered && p.nextReview <= now
    ).length;

    setStats((prev) => {
      let streakDays = prev.streakDays;
      if (prev.lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (prev.lastStudyDate === yesterday.toDateString()) {
          streakDays += 1;
        } else if (prev.lastStudyDate !== today) {
          streakDays = 1;
        }
      }

      return {
        totalStudied: values.length,
        mastered,
        needsReview,
        notStarted: 128 - values.length,
        streakDays,
        lastStudyDate: today,
        totalSessions: prev.lastStudyDate !== today
          ? prev.totalSessions + 1
          : prev.totalSessions,
      };
    });
  }, [progress]);

  const getQuestionStatus = useCallback(
    (questionId: number): "new" | "learning" | "review" | "mastered" => {
      const p = progress[questionId];
      if (!p) return "new";
      if (p.mastered) return "mastered";
      if (p.nextReview <= Date.now()) return "review";
      return "learning";
    },
    [progress]
  );

  const getDueForReview = useCallback((): number[] => {
    const now = Date.now();
    return Object.values(progress)
      .filter((p) => !p.mastered && p.nextReview <= now)
      .sort((a, b) => a.nextReview - b.nextReview)
      .map((p) => p.questionId);
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress({});
    setStats({
      totalStudied: 0,
      mastered: 0,
      needsReview: 0,
      notStarted: 128,
      streakDays: 0,
      lastStudyDate: "",
      totalSessions: 0,
    });
  }, []);

  return {
    progress,
    stats,
    isLoaded,
    markCorrect,
    markIncorrect,
    updateStats,
    getQuestionStatus,
    getDueForReview,
    resetProgress,
  };
}
