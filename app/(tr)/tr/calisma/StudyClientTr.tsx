"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import {
  questionsTr as questions,
  categoriesTr as categories,
} from "@/app/data/questions-tr";
import { getStateByAbbreviation } from "@/app/data/states";
import { useProgress } from "@/app/hooks/useProgress";
import { useSettings } from "@/app/hooks/useSettings";
import Flashcard from "@/app/components/Flashcard";
import Quiz from "@/app/components/Quiz";
import QuizResults from "@/app/components/QuizResults";
import Dashboard from "@/app/components/Dashboard";
import CategoryFilter from "@/app/components/CategoryFilter";
import VoiceMode from "@/app/components/VoiceMode";
import StateSelector from "@/app/components/StateSelector";

type Mode = "study" | "voice" | "quiz" | "quiz-results" | "dashboard";
type StudyFilter = "all" | "new" | "review" | "mastered" | "6520";

export default function StudyClientTr() {
  const [mode, setMode] = useState<Mode>("study");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [studyFilter, setStudyFilter] = useState<StudyFilter>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizResults, setQuizResults] = useState<{
    correct: number;
    incorrect: number;
    questionResults: { id: number; correct: boolean }[];
  } | null>(null);
  const [quizCount, setQuizCount] = useState(20);
  const [voiceAutoListen, setVoiceAutoListen] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const {
    progress,
    stats,
    isLoaded,
    markCorrect,
    markIncorrect,
    updateStats,
    getQuestionStatus,
    getDueForReview,
    resetProgress,
  } = useProgress();

  const {
    state: userState,
    setState: setUserState,
    isOnboarded,
    completeOnboarding,
    isLoaded: settingsLoaded,
  } = useSettings();

  // Get personalized answers based on user's state
  const stateInfo = useMemo(
    () => (userState ? getStateByAbbreviation(userState) : null),
    [userState]
  );

  // Personalize state-specific question answers
  const personalizedQuestions = useMemo(() => {
    if (!stateInfo) return questions;
    return questions.map((q) => {
      switch (q.id) {
        case 23: // senators
          return {
            ...q,
            answers: [stateInfo.senators[0], stateInfo.senators[1]],
          };
        case 29: // representative
          return q; // keep generic — varies by district
        case 61: // governor
          return { ...q, answers: [stateInfo.governor] };
        case 62: // state capital
          return { ...q, answers: [stateInfo.capital] };
        default:
          return q;
      }
    });
  }, [stateInfo]);

  // Update stats when progress changes
  useEffect(() => {
    if (isLoaded) updateStats();
  }, [progress, isLoaded, updateStats]);

  // Filtered questions for study mode
  const filteredQuestions = useMemo(() => {
    let filtered = [...personalizedQuestions];

    if (selectedCategory) {
      filtered = filtered.filter((q) => q.category === selectedCategory);
    }

    if (selectedSubcategory) {
      filtered = filtered.filter((q) => q.subcategory === selectedSubcategory);
    }

    if (studyFilter === "6520") {
      filtered = filtered.filter((q) => q.is6520);
    } else if (studyFilter === "new") {
      filtered = filtered.filter((q) => getQuestionStatus(q.id) === "new");
    } else if (studyFilter === "review") {
      const dueIds = new Set(getDueForReview());
      filtered = filtered.filter(
        (q) =>
          dueIds.has(q.id) ||
          getQuestionStatus(q.id) === "review" ||
          getQuestionStatus(q.id) === "learning"
      );
    } else if (studyFilter === "mastered") {
      filtered = filtered.filter(
        (q) => getQuestionStatus(q.id) === "mastered"
      );
    }

    return filtered;
  }, [
    selectedCategory,
    selectedSubcategory,
    studyFilter,
    personalizedQuestions,
    getQuestionStatus,
    getDueForReview,
  ]);

  // Category counts
  const questionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((cat) => {
      counts[cat] = questions.filter((q) => q.category === cat).length;
    });
    return counts;
  }, []);

  // Subcategory counts
  const subcategoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    questions.forEach((q) => {
      counts[q.subcategory] = (counts[q.subcategory] || 0) + 1;
    });
    return counts;
  }, []);

  // Question statuses for dashboard
  const questionStatuses = useMemo(
    () =>
      questions.map((q) => ({
        id: q.id,
        status: getQuestionStatus(q.id),
      })),
    [getQuestionStatus]
  );

  // Navigation
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + 1 >= filteredQuestions.length ? 0 : prev + 1
    );
  }, [filteredQuestions.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? filteredQuestions.length - 1 : prev - 1
    );
  }, [filteredQuestions.length]);

  // Reset index when filter changes
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setCurrentIndex(0); }, [selectedCategory, selectedSubcategory, studyFilter]);

  // Quiz handlers
  const handleQuizComplete = useCallback(
    (results: {
      correct: number;
      incorrect: number;
      questionResults: { id: number; correct: boolean }[];
    }) => {
      results.questionResults.forEach((r) => {
        if (r.correct) markCorrect(r.id);
        else markIncorrect(r.id);
      });
      setQuizResults(results);
      setMode("quiz-results");
    },
    [markCorrect, markIncorrect]
  );

  if (!isLoaded || !settingsLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-500 animate-pulse">Yukleniyor...</div>
      </div>
    );
  }

  // Show onboarding on first visit
  if (!isOnboarded) {
    return (
      <StateSelector
        mode="onboarding"
        selectedState={userState}
        onSelectState={setUserState}
        onComplete={completeOnboarding}
      />
    );
  }

  const currentQuestion = filteredQuestions[currentIndex];

  // Readiness indicator
  const readinessPercent = Math.round((stats.mastered / 128) * 100);
  const readinessLabel =
    readinessPercent >= 90
      ? "Sinava Hazir!"
      : readinessPercent >= 60
        ? "Neredeyse Hazir"
        : readinessPercent >= 30
          ? "Ilerleme Var"
          : "Baslangic";

  return (
    <div className="min-h-screen pb-24">
      {/* Settings Overlay */}
      {showSettings && (
        <div className="fixed inset-0 z-[90] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Ayarlar</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <StateSelector
              mode="settings"
              selectedState={userState}
              onSelectState={setUserState}
            />
            <button
              onClick={() => setShowSettings(false)}
              className="w-full py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-medium hover:bg-blue-600/30 transition-all"
            >
              Tamam
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold tracking-tight">
                <span className="text-blue-400">ABD</span> Vatandaslik Hazirlik
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                128 Sivil Bilgiler Sorusu &middot; Sinav 2025
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2.5 py-1 rounded-full border ${
                  readinessPercent >= 90
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : readinessPercent >= 60
                      ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                }`}
              >
                {stats.mastered}/128 &middot; {readinessLabel}
              </span>
              <button
                onClick={() => setShowSettings(true)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                title="Ayarlar"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-3xl mx-auto px-4 mt-4">
        <div className="flex gap-1 bg-slate-900/50 p-1 rounded-xl border border-slate-800/50">
          {(
            [
              { key: "study", label: "Calisma", icon: "📚" },
              { key: "voice", label: "Ses", icon: "🎤" },
              { key: "quiz", label: "Sinav", icon: "✍️" },
              { key: "dashboard", label: "Ilerleme", icon: "📊" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setMode(tab.key)}
              className={`flex-1 py-2.5 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                mode === tab.key ||
                (tab.key === "quiz" && mode === "quiz-results")
                  ? "bg-slate-800 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span className="mr-1.5">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 mt-6">
        {/* Study Mode */}
        {mode === "study" && (
          <div className="space-y-6">
            {/* Category Filter */}
            <CategoryFilter
              categories={[...categories]}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onSelect={setSelectedCategory}
              onSelectSubcategory={setSelectedSubcategory}
              questionCounts={questionCounts}
              subcategoryCounts={subcategoryCounts}
            />

            {/* Study Filter */}
            <div className="flex gap-2">
              {(
                [
                  { key: "all", label: "Tumu" },
                  { key: "6520", label: "65/20" },
                  { key: "new", label: "Yeni" },
                  { key: "review", label: "Tekrar" },
                  { key: "mastered", label: "Ogrenilmis" },
                ] as const
              ).map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setStudyFilter(filter.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    studyFilter === filter.key
                      ? "bg-white/10 text-white"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Flashcard or Empty State */}
            {filteredQuestions.length > 0 && currentQuestion ? (
              <Flashcard
                questionNumber={currentQuestion.id}
                question={currentQuestion.question}
                answers={currentQuestion.answers}
                category={currentQuestion.category}
                subcategory={currentQuestion.subcategory}
                status={getQuestionStatus(currentQuestion.id)}
                onCorrect={() => markCorrect(currentQuestion.id)}
                onIncorrect={() => markIncorrect(currentQuestion.id)}
                onNext={handleNext}
                onPrev={handlePrev}
                currentIndex={currentIndex}
                totalCards={filteredQuestions.length}
                phonetic={currentQuestion.phonetic}
                answerPhonetics={currentQuestion.answerPhonetics}
              />
            ) : (
              <div className="text-center py-16 text-slate-500">
                <p className="text-4xl mb-4">🎉</p>
                <p className="text-lg font-medium text-slate-300">
                  {studyFilter === "mastered"
                    ? "Henuz ogrenilmis soru yok"
                    : studyFilter === "review"
                      ? "Su an tekrar edilecek soru yok!"
                      : studyFilter === "new"
                        ? "Tum sorulari gordunuz!"
                        : "Soru bulunamadi"}
                </p>
                <p className="text-sm mt-2">
                  {studyFilter !== "all" &&
                    "Yukaridaki filtreyi degistirmeyi deneyin."}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Voice Mode */}
        {mode === "voice" && (
          <div className="space-y-6">
            {/* Category Filter */}
            <CategoryFilter
              categories={[...categories]}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onSelect={setSelectedCategory}
              onSelectSubcategory={setSelectedSubcategory}
              questionCounts={questionCounts}
              subcategoryCounts={subcategoryCounts}
            />

            {/* Auto-listen toggle */}
            <div className="flex items-center justify-between bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3">
              <div>
                <p className="text-sm font-medium text-white">Otomatik Mod</p>
                <p className="text-xs text-slate-500">
                  Soruyu okur, dinler ve otomatik olarak ilerler
                </p>
              </div>
              <button
                onClick={() => setVoiceAutoListen((prev) => !prev)}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  voiceAutoListen ? "bg-blue-600" : "bg-slate-700"
                }`}
                aria-label={
                  voiceAutoListen
                    ? "Otomatik modu kapat"
                    : "Otomatik modu ac"
                }
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                    voiceAutoListen ? "translate-x-5" : ""
                  }`}
                />
              </button>
            </div>

            {filteredQuestions.length > 0 && currentQuestion ? (
              <VoiceMode
                questionNumber={currentQuestion.id}
                question={currentQuestion.question}
                answers={currentQuestion.answers}
                category={currentQuestion.category}
                status={getQuestionStatus(currentQuestion.id)}
                onCorrect={() => markCorrect(currentQuestion.id)}
                onIncorrect={() => markIncorrect(currentQuestion.id)}
                onNext={handleNext}
                onPrev={handlePrev}
                currentIndex={currentIndex}
                totalCards={filteredQuestions.length}
                autoListen={voiceAutoListen}
                phonetic={currentQuestion.phonetic}
                answerPhonetics={currentQuestion.answerPhonetics}
              />
            ) : (
              <div className="text-center py-16 text-slate-500">
                <p className="text-4xl mb-4">🎤</p>
                <p className="text-lg font-medium text-slate-300">
                  Soru bulunamadi
                </p>
                <p className="text-sm mt-2">
                  Kategori filtresini degistirmeyi deneyin.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Quiz Mode */}
        {mode === "quiz" && (
          <div className="space-y-6">
            {/* Quiz Setup */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-4">
              <h2 className="text-lg font-medium mb-3">
                Sinav Ayarlari
              </h2>
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-400">Soru sayisi:</label>
                <div className="flex gap-2">
                  {[10, 20, 50, 128].map((n) => (
                    <button
                      key={n}
                      onClick={() => setQuizCount(n)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        quizCount === n
                          ? "bg-blue-600/20 border border-blue-500/30 text-blue-300"
                          : "bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Gercek 2025 USCIS sinavinda bir yetkili 20 soruya kadar sorar.
                Gecmek icin en az 12 dogru cevap (%60) gerekir.
              </p>
            </div>

            <Quiz
              questions={
                selectedCategory
                  ? personalizedQuestions.filter(
                      (q) => q.category === selectedCategory
                    )
                  : personalizedQuestions
              }
              onComplete={handleQuizComplete}
              onExit={() => setMode("study")}
              questionCount={quizCount}
            />
          </div>
        )}

        {/* Quiz Results */}
        {mode === "quiz-results" && quizResults && (
          <QuizResults
            correct={
              quizResults.questionResults.filter((r) => r.correct).length
            }
            total={quizResults.questionResults.length}
            onRetry={() => setMode("quiz")}
            onBackToStudy={() => setMode("study")}
          />
        )}

        {/* Dashboard */}
        {mode === "dashboard" && (
          <div className="space-y-6">
            <Dashboard stats={stats} questionStatuses={questionStatuses} />
            <div className="text-center">
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      "Tum ilerlemeyi sifirlamak istediginizden emin misiniz? Bu islem geri alinamaz."
                    )
                  ) {
                    resetProgress();
                  }
                }}
                className="text-xs text-slate-600 hover:text-red-400 transition-colors"
              >
                Tum Ilerlemeyi Sifirla
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
