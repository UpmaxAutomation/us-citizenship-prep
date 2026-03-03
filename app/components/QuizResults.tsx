"use client";

interface QuizResultsProps {
  correct: number;
  total: number;
  onRetry: () => void;
  onBackToStudy: () => void;
}

export default function QuizResults({
  correct,
  total,
  onRetry,
  onBackToStudy,
}: QuizResultsProps) {
  const percent = Math.round((correct / total) * 100);
  const passed = percent >= 60; // USCIS requires 12/20 (60%)

  return (
    <div className="w-full max-w-lg mx-auto text-center fade-in">
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-10">
        {/* Score Circle */}
        <div
          className={`w-32 h-32 rounded-full mx-auto flex flex-col items-center justify-center border-4 ${
            passed
              ? "border-emerald-500/50 bg-emerald-500/10"
              : "border-red-500/50 bg-red-500/10"
          }`}
        >
          <span
            className={`text-4xl font-bold ${
              passed ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {percent}%
          </span>
          <span className="text-xs text-slate-400 mt-1">
            {correct}/{total}
          </span>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold mt-6">
          {passed ? "Great Job!" : "Keep Studying!"}
        </h2>
        <p className="text-slate-400 mt-2 text-sm leading-relaxed">
          {passed
            ? `You scored ${percent}%! On the 2025 USCIS test you need 12 out of 20 correct. You're on track!`
            : `You scored ${percent}%. The 2025 USCIS test requires at least 12 out of 20 correct (60%). Keep practicing — you'll get there!`}
        </p>

        {/* USCIS Passing Note */}
        <div className="mt-6 bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
          <p className="text-xs text-blue-300/80">
            During your interview, a USCIS officer will ask you up to 20
            questions from the 128 civics questions. You must answer 12 out of 20
            correctly to pass.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={onBackToStudy}
            className="flex-1 py-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 font-medium hover:bg-slate-800 transition-all"
          >
            Study Cards
          </button>
          <button
            onClick={onRetry}
            className={`flex-1 py-3.5 rounded-xl font-medium transition-all ${
              passed
                ? "bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30"
                : "bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30"
            }`}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
