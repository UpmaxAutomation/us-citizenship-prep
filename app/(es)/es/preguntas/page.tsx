import type { Metadata } from "next";
import Link from "next/link";
import {
  questionsEs as questions,
  categoriesEs as categories,
  subcategoriesEs as subcategories,
} from "@/app/data/questions-es";
import AdUnit from "@/app/components/AdUnit";
import { buildMetadata } from "@/app/lib/metadata";
import Capitol from "@/app/components/illustrations/Capitol";
import Constitution from "@/app/components/illustrations/Constitution";
import LibertyBell from "@/app/components/illustrations/LibertyBell";

export const metadata: Metadata = buildMetadata({
  title: "Las 128 Preguntas del Examen de Ciudadania USCIS (2025)",
  description:
    "Lista completa de las 128 preguntas civicas oficiales del USCIS y sus respuestas para la entrevista de naturalizacion 2025. Organizadas por categoria con preguntas de exencion 65/20 marcadas.",
  path: "/es/preguntas",
  locale: "es",
});

const categoryColors: Record<
  string,
  { border: string; bg: string; text: string; badge: string }
> = {
  "Gobierno Americano": {
    border: "border-l-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  "Historia Americana": {
    border: "border-l-orange-500",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  "Simbolos y Dias Festivos": {
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

export default function PreguntasPage() {
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
            <span className="text-slate-300">Todas las 128 Preguntas</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Las 128 Preguntas del Examen de Ciudadania USCIS{" "}
          <span className="text-blue-400">(2025)</span>
        </h1>
        <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl">
          Estas son las 128 preguntas civicas oficiales de la actualizacion de
          octubre 2025 del USCIS para la entrevista de naturalizacion. Durante
          el examen, un oficial del USCIS hace hasta 20 preguntas y necesitas al
          menos 12 respuestas correctas para pasar.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium">
            <span className="text-white">128</span>
            <span className="text-slate-400">Preguntas Totales</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm font-medium">
            <span className="text-blue-300">
              {categoryCounts["Gobierno Americano"]}
            </span>
            <span className="text-blue-400/70">Gobierno</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-sm font-medium">
            <span className="text-orange-300">
              {categoryCounts["Historia Americana"]}
            </span>
            <span className="text-orange-400/70">Historia</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium">
            <span className="text-emerald-300">
              {categoryCounts["Simbolos y Dias Festivos"]}
            </span>
            <span className="text-emerald-400/70">Simbolos y Dias Festivos</span>
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
                Preguntas de Exencion 65/20
              </h2>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                Las preguntas marcadas con la insignia{" "}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  65/20
                </span>{" "}
                son parte del examen simplificado para solicitantes de 65 anos o
                mas que han sido residentes permanentes legales por al menos 20
                anos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Tabla de Contenidos</h2>
          <nav aria-label="Tabla de contenidos">
            <ul className="space-y-3">
              {categories.map((cat) => {
                const colors = categoryColors[cat];
                return (
                  <li key={cat}>
                    <a
                      href={`#${slugify(cat)}`}
                      className={`font-medium hover:underline ${colors.text}`}
                    >
                      {cat}
                      <span className="text-slate-500 text-sm ml-2">
                        ({categoryCounts[cat]} preguntas)
                      </span>
                    </a>
                    <ul className="ml-5 mt-1.5 space-y-1">
                      {subcategories[cat].map((sub) => (
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
          const catQuestions = questions.filter((q) => q.category === cat);

          const CategoryIcon =
            cat === "Gobierno Americano"
              ? Capitol
              : cat === "Historia Americana"
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
                    {catQuestions.length} preguntas
                  </span>
                </h2>
              </div>

              <div className="space-y-8">
                {subcategories[cat].map((sub) => {
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
                                <div className="mt-2">
                                  {q.answers.length === 1 ? (
                                    <p className="text-slate-400 text-sm">
                                      {q.answers[0]}
                                    </p>
                                  ) : (
                                    <ul className="list-disc list-inside text-slate-400 text-sm space-y-0.5">
                                      {q.answers.map((answer, i) => (
                                        <li key={i}>{answer}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                                <Link
                                  href={`/questions/${q.slug}`}
                                  className="inline-flex items-center gap-1 mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                  Ver explicacion
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
            Listo para estudiar estas preguntas?
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Usa nuestras tarjetas interactivas, examenes y repeticion espaciada
            para dominar las 128 preguntas antes de tu entrevista de
            naturalizacion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/es/estudio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
            >
              Comenzar a Estudiar
            </Link>
            <Link
              href="/es/examen-de-practica"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
            >
              Tomar Examen de Practica
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
