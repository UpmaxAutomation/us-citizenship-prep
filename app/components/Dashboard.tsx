"use client";

import { useMemo } from "react";

interface DashboardProps {
  stats: {
    totalStudied: number;
    mastered: number;
    needsReview: number;
    notStarted: number;
    streakDays: number;
    totalSessions: number;
  };
  questionStatuses: { id: number; status: "new" | "learning" | "review" | "mastered" }[];
}

function ProgressRing({ percent, size = 120, strokeWidth = 8, color = "#10b981" }: {
  percent: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} className="progress-ring">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#1e293b"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
}

export default function Dashboard({ stats, questionStatuses }: DashboardProps) {
  const masteryPercent = Math.round((stats.mastered / 128) * 100);

  const categoryBreakdown = useMemo(() => {
    const cats: Record<string, { total: number; mastered: number }> = {
      "American Government": { total: 72, mastered: 0 },
      "American History": { total: 46, mastered: 0 },
      "Symbols and Holidays": { total: 10, mastered: 0 },
    };

    questionStatuses.forEach((qs) => {
      if (qs.status === "mastered") {
        if (qs.id <= 72) cats["American Government"].mastered++;
        else if (qs.id <= 118) cats["American History"].mastered++;
        else cats["Symbols and Holidays"].mastered++;
      }
    });

    return cats;
  }, [questionStatuses]);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Main Progress */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex items-center gap-8">
        <div className="relative">
          <ProgressRing percent={masteryPercent} size={140} strokeWidth={10} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">{masteryPercent}%</span>
            <span className="text-xs text-slate-400">Mastered</span>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="text-lg font-medium text-white">Your Progress</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-emerald-500/10 rounded-lg p-3">
              <p className="text-2xl font-bold text-emerald-400">{stats.mastered}</p>
              <p className="text-xs text-emerald-400/70">Mastered</p>
            </div>
            <div className="bg-amber-500/10 rounded-lg p-3">
              <p className="text-2xl font-bold text-amber-400">{stats.totalStudied - stats.mastered}</p>
              <p className="text-xs text-amber-400/70">Learning</p>
            </div>
            <div className="bg-blue-500/10 rounded-lg p-3">
              <p className="text-2xl font-bold text-blue-400">{stats.notStarted}</p>
              <p className="text-xs text-blue-400/70">Not Started</p>
            </div>
            <div className="bg-orange-500/10 rounded-lg p-3">
              <p className="text-2xl font-bold text-orange-400">{stats.needsReview}</p>
              <p className="text-xs text-orange-400/70">Need Review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Streak */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm text-slate-400">Study Streak</h3>
          <p className="text-3xl font-bold mt-1">
            {stats.streakDays} <span className="text-lg text-slate-500">days</span>
          </p>
        </div>
        <div className="text-right">
          <h3 className="text-sm text-slate-400">Total Sessions</h3>
          <p className="text-3xl font-bold mt-1 text-slate-300">{stats.totalSessions}</p>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-sm text-slate-400 mb-4">Category Progress</h3>
        <div className="space-y-4">
          {Object.entries(categoryBreakdown).map(([cat, data]) => {
            const pct = Math.round((data.mastered / data.total) * 100);
            const colors: Record<string, string> = {
              "American Government": "bg-blue-500",
              "American History": "bg-red-500",
              "Symbols and Holidays": "bg-emerald-500",
            };
            return (
              <div key={cat}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-300">{cat}</span>
                  <span className="text-slate-500">
                    {data.mastered}/{data.total} ({pct}%)
                  </span>
                </div>
                <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${colors[cat]} rounded-full transition-all duration-1000`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question Grid */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-sm text-slate-400 mb-4">All 128 Questions</h3>
        <div className="grid grid-cols-10 gap-1.5">
          {questionStatuses.map((qs) => {
            const colors = {
              new: "bg-slate-800",
              learning: "bg-amber-500/40",
              review: "bg-orange-500/40",
              mastered: "bg-emerald-500/60",
            };
            return (
              <div
                key={qs.id}
                className={`aspect-square rounded-md ${colors[qs.status]} flex items-center justify-center text-[10px] text-slate-400 hover:scale-110 transition-transform cursor-default`}
                title={`#${qs.id} - ${qs.status}`}
              >
                {qs.id}
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 mt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-slate-800" /> New
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-500/40" /> Learning
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-orange-500/40" /> Review
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-500/60" /> Mastered
          </span>
        </div>
      </div>
    </div>
  );
}
