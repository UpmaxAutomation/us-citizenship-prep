import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/app/components/AdUnit";
import { buildMetadata } from "@/app/lib/metadata";
import StudyClientTr from "./StudyClientTr";

export const metadata: Metadata = buildMetadata({
  title: "Kartlarla Calisma - 128 USCIS Sivil Bilgiler Sorusu",
  description:
    "128 USCIS sivil bilgiler sorusunu interaktif kartlar ve aralikli tekrar ile calisin. Ilerlemenizi takip edin, deneme sinavlari yapin ve eyalete gore kisisellestirilmis cevaplar alin. 2025 icin guncellendi.",
  path: "/tr/calisma",
  locale: "tr",
});

export default function CalismaPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 pt-6">
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
            <span className="text-slate-300">Calisma</span>
          </li>
        </ol>
      </nav>

      {/* Server-rendered header for SEO */}
      <header className="max-w-3xl mx-auto px-4 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Kartlarla Calisma{" "}
          <span className="text-blue-400">— 128 USCIS Sorusu</span>
        </h1>
        <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl">
          Aralikli tekrar ile desteklenen interaktif kartlarla 128 USCIS sivil
          bilgiler sorusunu ogrenin. Ilerlemenizi takip edin, deneme sinavlari
          yapin ve eyaletinize ozel kisisellestirilmis cevaplar alin. 2025
          naturalizasyon sinavi icin guncellendi.
        </p>
      </header>

      {/* Interactive Client Component */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <StudyClientTr />
      </div>

      <AdUnit
        slot="auto"
        format="horizontal"
        className="max-w-3xl mx-auto px-4 my-8"
      />

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4 mt-16">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Daha fazla calisma kaynagi kesfedin
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Gercekci bir deneme sinavi yapin veya kategoriye gore duzenlenmis 128
            soruya goz atin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/tr/deneme-sinavi"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
            >
              Deneme Sinavi Yap
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
