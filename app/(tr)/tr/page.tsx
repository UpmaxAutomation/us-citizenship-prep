import Link from "next/link";
import AdUnit from "@/app/components/AdUnit";
import { buildMetadata } from "@/app/lib/metadata";

export const metadata = buildMetadata({
  title:
    "ABD Vatandaslik Sinavi Hazirlik | 128 USCIS Sorusu (2025)",
  description:
    "Vatandaslik mulakati icin 128 USCIS sivil bilgiler sorusunu ogrenin. Ucretsiz calisma kartlari, deneme sinavlari ve aralikli tekrar. 2025 sinavi icin guncellendi.",
  path: "/tr",
  locale: "tr",
});

export default function TurkishHomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              2025 USCIS Sinavi Icin Guncellendi
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              128 USCIS Sivil Bilgiler Sorusunu Ogrenin{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                ve Sinavinizi Gecin
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              128 USCIS sivil bilgiler sorusunu calisma kartlari, deneme
              sinavlari ve aralikli tekrar ile ogrenin. Ucretsiz ve 2025
              naturalizasyon sinavi icin guncellendi.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/tr/calisma"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-400 hover:to-indigo-500 transition-all"
              >
                Ucretsiz Calismaya Basla
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/tr/sorular"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-200 font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                128 Soruyu Gor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AdUnit
        slot="auto"
        format="horizontal"
        className="max-w-7xl mx-auto px-4 my-8"
      />

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Gecmek Icin Ihtiyaciniz Olan Her Sey
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Verimli ogrenmek ve ogrendiklerinizi akilda tutmak icin akilli
              calisma araclari.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Aralikli Tekrar Kartlari
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Hakimiyet seviyenize gore tekrarlari planlayan akilli kartlar.
                Yeni sorular daha sik gelir, ogrenilmis sorular aralikli olarak
                tekrarlanir.
              </p>
            </div>

            <div className="group p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Deneme Sinavlari
              </h3>
              <p className="text-slate-400 leading-relaxed">
                10, 20, 50 veya 128 soruluk sinavlarla bilginizi test edin.
                Coktan secmeli format gercek sinav deneyimini simule eder.
              </p>
            </div>

            <div className="group p-6 lg:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Eyalete Gore Cevaplar
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Senatorleriniz, valiniz ve eyalet baskentiniz hakkinda
                kisisellestirilmis cevaplar icin eyaletinizi secin. 50 eyalet ve
                DC dahil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Resources */}
      <section className="py-16 sm:py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Calisma Kaynaklari
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <Link
              href="/tr/deneme-sinavi"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
                20 Soruluk Deneme Sinavi
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                USCIS mulakatini simule eden gercekci bir deneme sinavi yapin.
                Rastgele sorular, gecmek icin 12/20, gercek sinav gibi.
              </p>
            </Link>
            <Link
              href="/tr/calisma"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors mb-2">
                Kartlarla Calisma
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                128 sivil bilgiler sorusunu interaktif kartlar ve aralikli tekrar
                ile calisin. Ilerlemenizi takip edin ve her soruyu ogrenin.
              </p>
            </Link>
            <Link
              href="/tr/sorular"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors mb-2">
                128 Soru ve Cevap
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Kategoriye gore duzenlenmis tum resmi USCIS sivil bilgiler
                sorularinin tam referansi. 65/20 muafiyet sorulari isaretli.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Language toggle */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-all"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            View in English
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Baslamaya Hazir Misiniz?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Vatandaslik sinavina hazirlanan binlerce kisiye katilin. Ogrenme
            tarziniza uyum saglayan araclarla kendi hizinizda calisin.
          </p>
          <Link
            href="/tr/calisma"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-400 hover:to-indigo-500 transition-all"
          >
            Calismaya Basla — Ucretsiz
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
