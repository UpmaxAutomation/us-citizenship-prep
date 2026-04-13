import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadi",
  description:
    "Aradiginiz sayfa bulunamadi. 128 USCIS vatandaslik sinavi sorusunu inceleyin, kartlarla calisin veya eyaletinize ozel cevaplari bulun.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-7xl font-bold text-slate-700">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">
          Sayfa Bulunamadi
        </h1>
        <p className="mt-3 text-slate-400 leading-relaxed">
          Aradiginiz sayfa mevcut degil veya tasinmis olabilir. Vatandaslik
          sinavina calismaniza devam etmek icin asagidaki baglantilari kullanin.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/tr"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
          >
            Ana Sayfaya Git
          </Link>
          <Link
            href="/tr/calisma"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
          >
            Calismaya Basla
          </Link>
          <Link
            href="/tr/sorular"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
          >
            128 Soru
          </Link>
        </div>
      </div>
    </div>
  );
}
