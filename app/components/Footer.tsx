"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLanguageFromPath, localizeNavHref } from "@/app/lib/languages";
import { getFooterStrings } from "@/app/lib/i18n-strings";

export default function Footer() {
  const pathname = usePathname();
  const lang = getLanguageFromPath(pathname);
  const t = getFooterStrings(lang.code);
  const h = (href: string) => localizeNavHref(href, lang);

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-8">
          {/* Study Tools */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.studyTools}</h4>
            <ul className="space-y-2">
              <li><Link href={h("/study")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.studyFlashcards}</Link></li>
              <li><Link href={h("/practice-test")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.practiceTest}</Link></li>
              <li><Link href={h("/questions")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.all128Questions}</Link></li>
              <li><Link href={h("/reading-writing")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.readingWriting}</Link></li>
            </ul>
          </div>

          {/* Study Guide */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.studyGuide}</h4>
            <ul className="space-y-2">
              <li><Link href={h("/study-guide")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.studyGuide}</Link></li>
              <li><Link href={h("/study-guide/american-government")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.americanGovernment}</Link></li>
              <li><Link href={h("/study-guide/american-history")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.americanHistory}</Link></li>
              <li><Link href={h("/study-guide/symbols-and-holidays")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.symbolsHolidays}</Link></li>
            </ul>
          </div>

          {/* Naturalization Process */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.naturalizationProcess}</h4>
            <ul className="space-y-2">
              <li><Link href={h("/eligibility-checker")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.eligibilityChecker}</Link></li>
              <li><Link href={h("/n400-guide")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.n400Guide}</Link></li>
              <li><Link href={h("/citizenship-timeline")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.timeline}</Link></li>
              <li><Link href={h("/citizenship-costs")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.costsAndFees}</Link></li>
              <li><Link href={h("/interview-checklist")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.interviewChecklist}</Link></li>
              <li><Link href={h("/oath-of-allegiance")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.oathOfAllegiance}</Link></li>
              <li><Link href={h("/faq")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.faq}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.resources}</h4>
            <ul className="space-y-2">
              <li><Link href={h("/interview-guide")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.interviewGuide}</Link></li>
              <li><Link href={h("/2025-test-changes")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.testChanges2025}</Link></li>
              <li><Link href={h("/senior-exemption")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.senior6520}</Link></li>
              <li><Link href={`${lang.basePath || "/"}#states`} className="text-sm text-slate-400 hover:text-white transition-colors">{t.stateSpecificPrep}</Link></li>
              <li><Link href={h("/blog")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.blog}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              <li><Link href={h("/privacy-policy")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.privacyPolicy}</Link></li>
              <li><Link href={h("/terms")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.termsOfService}</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.about}</h4>
            <ul className="space-y-2 mb-3">
              <li><Link href={h("/about")} className="text-sm text-slate-400 hover:text-white transition-colors">{t.aboutUs}</Link></li>
            </ul>
            <p className="text-sm text-slate-400 mb-3">
              {t.footerDescription}
            </p>
            <p className="text-xs text-slate-500">
              {t.footerDisclaimer}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/50 mt-8 pt-6 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {t.questionsSourced}
          </p>
        </div>
      </div>
    </footer>
  );
}
