import type { Metadata } from "next";
import Link from "next/link";
import {
  questionsTr as questions,
  categoriesTr as categories,
  subcategoriesTr as subcategories,
} from "@/app/data/questions-tr";
import AdUnit from "@/app/components/AdUnit";
import { buildMetadata } from "@/app/lib/metadata";
import Capitol from "@/app/components/illustrations/Capitol";
import Constitution from "@/app/components/illustrations/Constitution";
import LibertyBell from "@/app/components/illustrations/LibertyBell";

export const metadata: Metadata = buildMetadata({
  title: "128 USCIS Vatandaslik Sinavi Sorusu (2025)",
  description:
    "2025 naturalizasyon mulakati icin 128 resmi USCIS sivil bilgiler sorusunun ve cevaplarinin tam listesi. Kategoriye gore duzenlenmis, 65/20 muafiyet sorulari isaretli.",
  path: "/tr/sorular",
  locale: "tr",
});

const categoryColors: Record<
  string,
  { border: string; bg: string; text: string; badge: string }
> = {
  "Amerikan Hukumeti": {
    border: "border-l-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  "Amerikan Tarihi": {
    border: "border-l-orange-500",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  "Semboller ve Tatiller": {
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const categoryCounts: Record<string, number> = {};
for (const cat of categories) {
  categoryCounts[cat] = questions.filter((q) => q.category === cat).length;
}

export default function SorularPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-6">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link
              href="/tr"
              className="hover:text-slate-300 transition-colors"
            >
              Ana Sayfa
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-slate-300">128 Soru</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          128 USCIS Vatandaslik Sinavi Sorusu{" "}
          <span className="text-blue-400">(2025)</span>
        </h1>
        <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl">
          Bunlar, USCIS&apos;in Ekim 2025 guncellemesindeki naturalizasyon
          mulakati icin resmi 128 sivil bilgiler sorusudur. Sinav sirasinda bir
          USCIS yetkilisi 20 soruya kadar sorar ve gecmek icin en az 12 dogru
          cevap vermeniz gerekir.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium">
            <span className="text-white">128</span>
            <span className="text-slate-400">Toplam Soru</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm font-medium">
            <span className="text-blue-300">
              {categoryCounts["Amerikan Hukumeti"] ?? 0}
            </span>
            <span className="text-blue-400/70">Hukumet</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-sm font-medium">
            <span className="text-orange-300">
              {categoryCounts["Amerikan Tarihi"] ?? 0}
            </span>
            <span className="text-orange-400/70">Tarih</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium">
            <span className="text-emerald-300">
              {categoryCounts["Semboller ve Tatiller"] ?? 0}
            </span>
            <span className="text-emerald-400/70">Semboller ve Tatiller</span>
          </span>
        </div>
      </header>

      {/* 65/20 Exemption Callout */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mt-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-emerald-300">
                65/20 Muafiyet Sorulari
              </h2>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                {" "}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  65/20
                </span>{" "}
                rozeti ile isaretlenen sorular, 65 yas ve uzerinde olup en az 20
                yildir yasal daimi ikamet sahibi olan basvuru sahipleri icin
                basitlestirilmis sinavin bir parcasidir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Icerik Tablosu</h2>
          <nav aria-label="Icerik tablosu">
            <ul className="space-y-3">
              {categories.map((cat) => {
                const colors = categoryColors[cat];
                if (!colors) return null;
                return (
                  <li key={cat}>
                    <a
                      href={`#${slugify(cat)}`}
                      className={`font-medium hover:underline ${colors.text}`}
                    >
                      {cat}
                      <span className="text-slate-500 text-sm ml-2">
                        ({categoryCounts[cat] ?? 0} soru)
                      </span>
                    </a>
                    <ul className="ml-5 mt-1.5 space-y-1">
                      {(subcategories[cat] ?? []).map((sub) => (
                        <li key={sub}>
                          <a
                            href={`#${slugify(sub)}`}
                            className="text-sm text-slate-400 hover:text-slate-200 hover:underline transition-colors"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <AdUnit
        slot="auto"
        format="horizontal"
        className="max-w-4xl mx-auto px-4 my-8"
      />

      {/* Questions by Category */}
      <div className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
        {categories.map((cat) => {
          const colors = categoryColors[cat];
          if (!colors) return null;
          const catQuestions = questions.filter((q) => q.category === cat);

          const CategoryIcon =
            cat === "Amerikan Hukumeti"
              ? Capitol
              : cat === "Amerikan Tarihi"
                ? Constitution
                : LibertyBell;

          return (
            <section
              key={cat}
              id={slugify(cat)}
              aria-labelledby={`heading-${slugify(cat)}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <CategoryIcon className="hidden sm:block w-16 h-16 opacity-30 flex-shrink-0" />
                <h2
                  id={`heading-${slugify(cat)}`}
                  className={`text-2xl font-bold border-l-4 ${colors.border} pl-4`}
                >
                  {cat}
                  <span className="text-base font-normal text-slate-500 ml-3">
                    {catQuestions.length} soru
                  </span>
                </h2>
              </div>

              <div className="space-y-8">
                {(subcategories[cat] ?? []).map((sub) => {
                  const subQuestions = catQuestions.filter(
                    (q) => q.subcategory === sub
                  );

                  return (
                    <section
                      key={sub}
                      id={slugify(sub)}
                      aria-labelledby={`heading-${slugify(sub)}`}
                    >
                      <h3
                        id={`heading-${slugify(sub)}`}
                        className="text-lg font-semibold text-slate-200 mb-4 pb-2 border-b border-slate-800/50"
                      >
                        {sub}
                      </h3>

                      <div className="space-y-3">
                        {subQuestions.map((q) => (
                          <article
                            key={q.id}
                            className="bg-slate-900/30 border border-slate-800/50 rounded-xl p-4 sm:p-5 hover:border-slate-700/50 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 font-mono text-sm font-bold text-slate-500 bg-slate-800/50 rounded-lg w-10 h-10 flex items-center justify-center mt-0.5">
                                {q.id}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start gap-2 flex-wrap">
                                  <p className="font-medium text-white leading-relaxed">
                                    {q.question}
                                  </p>
                                  {q.is6520 && (
                                    <span className="inline-flex items-center flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                                      65/20
                                    </span>
                                  )}
                                </div>
                                {q.phonetic && (
                                  <div lang="tr" className="mt-1">
                                    <span aria-hidden="true" className="text-xs italic text-blue-300/60">
                                      Okunus: {q.phonetic}
                                    </span>
                                    <span className="sr-only">
                                      Pronunciation guide for: {q.question}
                                    </span>
                                  </div>
                                )}
                                <div className="mt-2">
                                  {q.answers.length === 1 ? (
                                    <div>
                                      <p className="text-slate-400 text-sm">
                                        {q.answers[0]}
                                      </p>
                                      {q.answerPhonetics?.[0] && (
                                        <p aria-hidden="true" className="text-xs italic text-emerald-400/40 mt-0.5">
                                          {q.answerPhonetics[0]}
                                        </p>
                                      )}
                                    </div>
                                  ) : (
                                    <ul className="list-disc list-inside text-slate-400 text-sm space-y-0.5">
                                      {q.answers.map((answer, i) => (
                                        <li key={i}>
                                          {answer}
                                          {q.answerPhonetics?.[i] && (
                                            <span aria-hidden="true" className="text-xs italic text-emerald-400/40 ml-2">
                                              ({q.answerPhonetics[i]})
                                            </span>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                                <Link
                                  href={`/questions/${q.slug}`}
                                  className="inline-flex items-center gap-1 mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                  Aciklamayi gor
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Bu sorulari calismaya hazir misiniz?
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Naturalizasyon mulakatinizdan once 128 soruyu ogrenmeniz icin
            interaktif kartlari, sinavlari ve aralikli tekrari kullanin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/tr/calisma"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
            >
              Calismaya Basla
            </Link>
            <Link
              href="/tr/deneme-sinavi"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
            >
              Deneme Sinavi Yap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
