import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina No Encontrada",
  description:
    "La pagina que buscas no existe. Explora las 128 preguntas del examen de ciudadania USCIS, estudia con tarjetas o encuentra respuestas especificas por estado.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-7xl font-bold text-slate-700">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">
          Pagina No Encontrada
        </h1>
        <p className="mt-3 text-slate-400 leading-relaxed">
          La pagina que buscas no existe o ha sido movida. Usa los enlaces a
          continuacion para seguir estudiando para tu examen de ciudadania.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/es"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
          >
            Ir al Inicio
          </Link>
          <Link
            href="/es/estudio"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
          >
            Comenzar a Estudiar
          </Link>
          <Link
            href="/es/preguntas"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
          >
            Las 128 Preguntas
          </Link>
        </div>
      </div>
    </div>
  );
}
