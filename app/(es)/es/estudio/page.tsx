import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/app/components/AdUnit";
import { buildMetadata } from "@/app/lib/metadata";
import StudyClientEs from "./StudyClientEs";

export const metadata: Metadata = buildMetadata({
  title: "Estudiar con Tarjetas - 128 Preguntas Civicas USCIS",
  description:
    "Estudia las 128 preguntas civicas del USCIS con tarjetas interactivas y repeticion espaciada. Sigue tu progreso, toma examenes de practica y obtiene respuestas personalizadas por estado. Actualizado para 2025.",
  path: "/es/estudio",
  locale: "es",
});

export default function EstudioPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 pt-6">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link
              href="/es"
              className="hover:text-slate-300 transition-colors"
            >
              Inicio
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-slate-300">Estudiar</span>
          </li>
        </ol>
      </nav>

      {/* Server-rendered header for SEO */}
      <header className="max-w-3xl mx-auto px-4 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Estudiar con Tarjetas{" "}
          <span className="text-blue-400">— 128 Preguntas USCIS</span>
        </h1>
        <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl">
          Domina las 128 preguntas civicas del USCIS con tarjetas interactivas
          impulsadas por repeticion espaciada. Sigue tu progreso, toma examenes
          de practica y obtiene respuestas personalizadas para tu estado.
          Actualizado para el examen de naturalizacion 2025.
        </p>
      </header>

      {/* Interactive Client Component */}
      <div className="max-w-3xl mx-auto px-4 mt-8">
        <StudyClientEs />
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
            Explora mas recursos de estudio
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Toma un examen de practica realista o consulta las 128 preguntas
            organizadas por categoria.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/es/examen-de-practica"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
            >
              Tomar Examen de Practica
            </Link>
            <Link
              href="/es/preguntas"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
            >
              Ver las 128 Preguntas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
