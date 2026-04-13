import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/app/components/AdUnit";
import { buildMetadata } from "@/app/lib/metadata";
import PracticeTestEs from "./PracticeTestEs";

export const metadata: Metadata = buildMetadata({
  title: "Examen de Practica - Ciudadania de EE.UU.",
  description:
    "Toma un examen de practica gratis con 20 preguntas civicas al azar del USCIS. Simula la entrevista real de naturalizacion con puntuacion de 12/20 para pasar. Actualizado para 2025.",
  path: "/es/examen-de-practica",
  locale: "es",
});

export default function ExamenDePracticaPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-6">
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
            <span className="text-slate-300">Examen de Practica</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Examen de Practica de Ciudadania{" "}
          <span className="text-blue-400">
            — Formato 2025 (20 Preguntas)
          </span>
        </h1>
        <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl">
          Toma un examen de practica realista con 20 preguntas al azar del banco
          oficial de preguntas civicas del USCIS. Igual que en la entrevista
          real de naturalizacion, necesitas responder al menos 12 de 20
          preguntas correctamente (60%) para pasar.
        </p>
      </header>

      {/* Practice Test Client Component */}
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <PracticeTestEs />
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
            Quieres seguir estudiando?
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Usa tarjetas con repeticion espaciada para dominar las 128 preguntas
            civicas, o consulta la lista completa de preguntas organizada por
            categoria.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/es/estudio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
            >
              Estudiar con Tarjetas
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
