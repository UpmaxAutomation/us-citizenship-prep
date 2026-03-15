'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';

interface ChecklistSection {
  title: string;
  icon: string;
  items: string[];
}

const sections: ChecklistSection[] = [
  {
    title: "Documents to Bring",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    items: [
      "Appointment notice (Form I-797C)",
      "Green Card (Permanent Resident Card)",
      "Valid passport (current and expired)",
      "State-issued photo ID or driver's license",
      "Two passport-style photographs",
      "Tax returns for the last 5 years",
      "Selective Service registration proof (if applicable, males 18-31)",
    ],
  },
  {
    title: "Preparation",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    items: [
      "Reviewed N-400 application thoroughly",
      "Practiced all 128 civics questions",
      "Practiced English reading and writing",
      "Know state-specific answers (governor, senators, capital)",
      "Planned route to USCIS office",
    ],
  },
  {
    title: "Day Of",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    items: [
      "Dressed in business casual attire",
      "Arrived 15-30 minutes early",
      "Brought all required documents",
      "Phone silenced or turned off",
    ],
  },
];

const STORAGE_KEY = "interview-checklist";

function getAllItems(): string[] {
  return sections.flatMap((s) => s.items);
}

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function InteractiveChecklist() {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
      } catch {
        // localStorage unavailable
      }
    }
  }, [checked, mounted]);

  const toggleItem = (item: string) => {
    setChecked((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const resetAll = () => {
    setChecked({});
  };

  const allItems = getAllItems();
  const completedCount = allItems.filter((item) => checked[item]).length;
  const totalCount = allItems.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="mt-8 print:hidden">
      {/* Progress Bar */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Your Progress</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400">
              {completedCount} of {totalCount} items
            </span>
            {completedCount > 0 && (
              <button
                onClick={resetAll}
                className="text-xs text-slate-500 hover:text-slate-300 underline underline-offset-2 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${percentage}%`,
              backgroundColor:
                percentage === 100
                  ? "#22c55e"
                  : percentage >= 50
                  ? "#3b82f6"
                  : "#6366f1",
            }}
          />
        </div>
        <p className="text-sm text-slate-500 mt-2">
          {percentage === 100
            ? "All done! You are fully prepared for your interview."
            : percentage >= 50
            ? `${percentage}% complete. You are making great progress.`
            : `${percentage}% complete. Keep checking items as you prepare.`}
        </p>
      </div>

      {/* Checklist Sections */}
      <div className="space-y-6">
        {sections.map((section) => {
          const sectionComplete = section.items.every(
            (item) => checked[item]
          );
          return (
            <div
              key={section.title}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    sectionComplete
                      ? "bg-emerald-500/15"
                      : "bg-blue-500/15"
                  }`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={sectionComplete ? "#22c55e" : "#60a5fa"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={section.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
                {sectionComplete && (
                  <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Complete
                  </span>
                )}
              </div>
              <div className="space-y-2">
                {section.items.map((item) => {
                  const isChecked = !!checked[item];
                  return (
                    <label
                      key={item}
                      className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                        isChecked
                          ? "bg-emerald-500/5 border border-emerald-500/20"
                          : "bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50"
                      }`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleItem(item)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-emerald-500 border-emerald-500"
                              : "border-slate-600 bg-transparent"
                          }`}
                        >
                          {isChecked && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span
                        className={`text-sm leading-relaxed transition-colors ${
                          isChecked
                            ? "text-emerald-300 line-through opacity-75"
                            : "text-slate-300"
                        }`}
                      >
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
