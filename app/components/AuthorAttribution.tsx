import Link from "next/link";

export default function AuthorAttribution({
  reviewDate = "March 2026",
  showCredentials = false,
}: {
  reviewDate?: string;
  showCredentials?: boolean;
} = {}) {
  return (
    <div className="flex items-center gap-3 py-4 border-t border-slate-800/50 mt-8">
      <div className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <div>
        <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
          US Citizenship Test Prep Team
        </Link>
        <p className="text-xs text-slate-500">
          Reviewed {reviewDate}
          {showCredentials && <span> · USCIS civics test preparation experts</span>}
        </p>
      </div>
    </div>
  );
}
