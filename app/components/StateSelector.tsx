"use client";

import { useState, useMemo } from "react";
import { states, getStateByAbbreviation } from "../data/states";

interface StateSelectorProps {
  mode: "onboarding" | "settings";
  selectedState: string | null;
  onSelectState: (abbreviation: string) => void;
  onComplete?: () => void;
}

export default function StateSelector({
  mode,
  selectedState,
  onSelectState,
  onComplete,
}: StateSelectorProps) {
  const [search, setSearch] = useState("");

  const filteredStates = useMemo(() => {
    if (!search.trim()) return states;
    const lower = search.toLowerCase();
    return states.filter(
      (s) =>
        s.name.toLowerCase().includes(lower) ||
        s.abbreviation.toLowerCase().includes(lower)
    );
  }, [search]);

  const selectedInfo = selectedState
    ? getStateByAbbreviation(selectedState)
    : null;

  // Settings mode: compact inline dropdown
  if (mode === "settings") {
    return (
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-sm font-medium text-slate-300 mb-1">
          Your State
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          State-specific questions (senators, governor, capital) will be
          personalized to your selection.
        </p>

        <div className="relative">
          <select
            value={selectedState ?? ""}
            onChange={(e) => onSelectState(e.target.value)}
            aria-label="Select your state"
            className="w-full appearance-none bg-slate-800/80 border border-slate-700/50 rounded-xl px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all cursor-pointer"
          >
            <option value="" disabled>
              Select a state...
            </option>
            {states.map((s) => (
              <option key={s.abbreviation} value={s.abbreviation}>
                {s.name} ({s.abbreviation})
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-4 w-4 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {selectedInfo && (
          <div className="mt-4 bg-slate-800/40 border border-slate-700/30 rounded-xl p-4 space-y-2 fade-in">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Capital</span>
              <span className="text-white">{selectedInfo.capital}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Governor</span>
              <span className="text-white">{selectedInfo.governor}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Senators</span>
              <span className="text-white text-right">
                {selectedInfo.senators[0]}
                <br />
                {selectedInfo.senators[1]}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Onboarding mode: full-screen overlay
  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Welcome - Select your state"
    >
      <div className="w-full max-w-lg max-h-[100dvh] overflow-y-auto fade-in py-4">
        {/* Welcome header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-5">
            <span className="text-3xl" role="img" aria-label="US flag">
              🇺🇸
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome to{" "}
            <span className="text-blue-400">US</span> Citizenship Prep
          </h1>
          <p className="text-slate-400 mt-3 text-sm leading-relaxed max-w-md mx-auto">
            Master all 128 USCIS civics questions for your naturalization
            interview. Some answers depend on where you live — select your state
            to personalize your study experience.
          </p>
        </div>

        {/* State selection card */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <label
            htmlFor="state-search"
            className="block text-sm font-medium text-slate-300 mb-3"
          >
            Where do you live?
          </label>

          {/* Search input */}
          <div className="relative mb-3">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              id="state-search"
              type="text"
              placeholder="Search states..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-800/80 border border-slate-700/50 rounded-xl pl-10 pr-4 py-3 min-h-[44px] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all"
              autoComplete="off"
            />
          </div>

          {/* State list */}
          <div
            className="max-h-48 sm:max-h-56 overflow-y-auto rounded-xl border border-slate-800/50 bg-slate-800/30 divide-y divide-slate-800/50"
            role="listbox"
            aria-label="State list"
          >
            {filteredStates.length === 0 ? (
              <div className="px-4 py-6 text-center text-sm text-slate-500">
                No states match your search.
              </div>
            ) : (
              filteredStates.map((s) => {
                const isSelected = selectedState === s.abbreviation;
                return (
                  <button
                    key={s.abbreviation}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => onSelectState(s.abbreviation)}
                    className={`w-full text-left px-4 py-3 text-sm transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-blue-600/15 text-blue-300"
                        : "text-slate-300 hover:bg-slate-700/40 hover:text-white"
                    }`}
                  >
                    <span>
                      {s.name}{" "}
                      <span className="text-slate-500">
                        ({s.abbreviation})
                      </span>
                    </span>
                    {isSelected && (
                      <svg
                        className="h-4 w-4 text-blue-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Selected state preview */}
          {selectedInfo && (
            <div className="mt-4 bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 space-y-2 fade-in">
              <h4 className="text-xs uppercase tracking-wider text-blue-400 mb-2">
                {selectedInfo.name} — Your Answers
              </h4>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Capital</span>
                <span className="text-white">{selectedInfo.capital}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Governor</span>
                <span className="text-white">{selectedInfo.governor}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Senators</span>
                <span className="text-white text-right">
                  {selectedInfo.senators[0]}
                  <br />
                  {selectedInfo.senators[1]}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Start button */}
        <button
          type="button"
          onClick={onComplete}
          disabled={!selectedState}
          className={`w-full mt-6 py-4 rounded-xl text-base font-medium transition-all ${
            selectedState
              ? "bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30 active:scale-[0.98]"
              : "bg-slate-800/30 border border-slate-700/30 text-slate-600 cursor-not-allowed"
          }`}
        >
          {selectedState ? "Start Studying" : "Select your state to continue"}
        </button>

        {/* Skip option */}
        <button
          type="button"
          onClick={onComplete}
          className="w-full mt-3 py-2 text-xs text-slate-600 hover:text-slate-400 transition-colors"
        >
          Skip for now (defaults to California)
        </button>
      </div>
    </div>
  );
}
