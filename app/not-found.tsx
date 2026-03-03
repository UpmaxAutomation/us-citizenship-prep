import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Browse all 128 USCIS citizenship test questions, study with flashcards, or find your state-specific answers.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-7xl font-bold text-slate-700">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">Page Not Found</h1>
        <p className="mt-3 text-slate-400 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
          Use the links below to continue studying for your citizenship test.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
          >
            Go Home
          </Link>
          <Link
            href="/study"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
          >
            Start Studying
          </Link>
          <Link
            href="/questions"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
          >
            All 128 Questions
          </Link>
        </div>
      </div>
    </div>
  );
}
