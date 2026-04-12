import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/app/components/AdUnit";
import { buildMetadata } from "@/app/lib/metadata";
import PracticeTestTr from "./PracticeTestTr";

export const metadata: Metadata = buildMetadata({
  title: "Deneme Sinavi - ABD Vatandaslik Sinavi",
  description:
    "20 rastgele USCIS sivil bilgiler sorusuyla ucretsiz deneme sinavi yapin. Gercek naturalizasyon mulakatini simule eder, gecmek icin 12/20 puan gerekir. 2025 icin guncellendi.",
  path: "/tr/deneme-sinavi",
  locale: "tr",
});

export default function DenemeSinaviPage() {
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
            <span className="text-slate-300">Deneme Sinavi</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Vatandaslik Deneme Sinavi{" "}
          <span className="text-blue-400">
            — 2025 Formati (20 Soru)
          </span>
        </h1>
        <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl">
          Resmi USCIS sivil bilgiler soru banksindan 20 rastgele soruyla gercekci
          bir deneme sinavi yapin. Gercek naturalizasyon mulakatinda oldugu gibi,
          gecmek icin en az 20 sorudan 12 tanesini dogru cevaplamaniz (%60)
          gerekir.
        </p>
      </header>

      {/* Practice Test Client Component */}
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <PracticeTestTr />
      </div>

      <AdUnit
        slot="auto"
        format="horizontal"
        className="max-w-4xl mx-auto px-4 my-8"
      />

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Calismaya devam etmek ister misiniz?
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            128 sivil bilgiler sorusunu ogrenmeniz icin aralikli tekrar kartlari
            kullanin veya kategoriye gore duzenlenmis soru listesine goz atin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/tr/calisma"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
            >
              Kartlarla Calis
            </Link>
            <Link
              href="/tr/sorular"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
            >
              128 Soruyu Gor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
