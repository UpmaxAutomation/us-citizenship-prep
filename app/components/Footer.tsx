import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Study Tools */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Study Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/study" className="text-sm text-slate-400 hover:text-white transition-colors">Study Flashcards</Link></li>
              <li><Link href="/practice-test" className="text-sm text-slate-400 hover:text-white transition-colors">Practice Test</Link></li>
              <li><Link href="/questions" className="text-sm text-slate-400 hover:text-white transition-colors">All 128 Questions</Link></li>
              <li><Link href="/reading-writing" className="text-sm text-slate-400 hover:text-white transition-colors">Reading & Writing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/interview-guide" className="text-sm text-slate-400 hover:text-white transition-colors">Interview Guide</Link></li>
              <li><Link href="/2025-test-changes" className="text-sm text-slate-400 hover:text-white transition-colors">2025 Test Changes</Link></li>
              <li><Link href="/senior-exemption" className="text-sm text-slate-400 hover:text-white transition-colors">Senior 65/20</Link></li>
              <li><Link href="/#states" className="text-sm text-slate-400 hover:text-white transition-colors">State-Specific Prep</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">About</h4>
            <ul className="space-y-2 mb-3">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
            <p className="text-sm text-slate-400 mb-3">
              Free study tools for the 2025 USCIS citizenship test. All 128 official civics questions with flashcards, practice tests, and more.
            </p>
            <p className="text-xs text-slate-500">
              Not affiliated with or endorsed by USCIS or the U.S. government.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/50 mt-8 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} US Citizenship Test Prep. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Questions sourced from official USCIS civics test materials.
          </p>
        </div>
      </div>
    </footer>
  );
}
