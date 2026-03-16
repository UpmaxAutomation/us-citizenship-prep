"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { questions } from "@/app/data/questions";
import ShareButton from "@/app/components/ShareButton";

function getDailyQuestion() {
  const today = new Date();
  const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  const index = daysSinceEpoch % questions.length;
  return questions[index];
}

function getStreak(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem("daily-streak") || "0", 10);
}

function getLastCompleted(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("daily-last-completed");
}

function getTodayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function DailyChallenge() {
  const question = useMemo(() => getDailyQuestion(), []);
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);

  useEffect(() => {
    const todayKey = getTodayKey();
    const lastCompleted = getLastCompleted();
    if (lastCompleted === todayKey) {
      setAlreadyCompleted(true);
      setRevealed(true);
    }
    setStreak(getStreak());
  }, []);

  function handleReveal() {
    setRevealed(true);
    const todayKey = getTodayKey();
    const lastCompleted = getLastCompleted();

    if (lastCompleted !== todayKey) {
      // Check if yesterday was completed for streak
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;

      let newStreak: number;
      if (lastCompleted === yesterdayKey) {
        newStreak = getStreak() + 1;
      } else {
        newStreak = 1;
      }

      localStorage.setItem("daily-streak", String(newStreak));
      localStorage.setItem("daily-last-completed", todayKey);
      setStreak(newStreak);
      setAlreadyCompleted(true);
    }
  }

  const categoryColors: Record<string, string> = {
    "American Government": "bg-blue-500/15 text-blue-300 border-blue-500/30",
    "American History": "bg-orange-500/15 text-orange-300 border-orange-500/30",
    "Symbols and Holidays": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  };

  return (
    <div className="space-y-8">
      {/* Streak */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <span className="text-2xl">🔥</span>
          <div>
            <p className="text-amber-300 font-bold text-lg">{streak}</p>
            <p className="text-amber-400/60 text-xs">day streak</p>
          </div>
        </div>
        {alreadyCompleted && (
          <p className="text-emerald-400 text-sm font-medium">Today&apos;s challenge complete!</p>
        )}
      </div>

      {/* Question Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[question.category] || ""}`}>
            {question.category}
          </span>
          <span className="text-slate-500 text-sm">Question #{question.id}</span>
        </div>

        <h2 className="text-2xl font-bold text-white leading-relaxed">
          {question.question}
        </h2>

        {!revealed ? (
          <button
            type="button"
            onClick={handleReveal}
            className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-400 hover:to-indigo-500 transition-all"
          >
            Reveal Answer
          </button>
        ) : (
          <div className="mt-8 space-y-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <p className="text-emerald-400 text-sm font-medium mb-2">Answer{question.answers.length > 1 ? "s" : ""}:</p>
              <ul className="space-y-1">
                {question.answers.map((answer) => (
                  <li key={answer} className="text-white font-medium">{answer}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <ShareButton
                title="Daily Citizenship Challenge"
                text={`Today's US citizenship question: "${question.question}" — I got it right!`}
                url="https://www.uscitizenshiptestprep.com/daily-challenge"
              />
              <Link
                href="/study"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm font-medium transition-colors"
              >
                Study All Questions
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <p className="text-slate-500 text-sm text-center">
        A new question appears every day at midnight. Come back tomorrow for question #{(getDailyQuestion().id % questions.length) + 1}!
      </p>
    </div>
  );
}
