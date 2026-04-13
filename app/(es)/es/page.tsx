import Link from "next/link";
import AdUnit from "@/app/components/AdUnit";
import { buildMetadata } from "@/app/lib/metadata";

export const metadata = buildMetadata({
  title:
    "Preparacion Examen Ciudadania EE.UU. Gratis | 128 Preguntas USCIS (2025)",
  description:
    "Domina las 128 preguntas civicas del USCIS para tu entrevista de naturalizacion 2025. Tarjetas de estudio, examenes de practica y repeticion espaciada gratis. Sin cuenta requerida.",
  path: "/es",
  locale: "es",
});

export default function SpanishHomePage() {
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
              Actualizado para el Examen USCIS 2025
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Domina las 128 Preguntas Civicas del USCIS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                y Pasa tu Examen
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Estudia todas las 128 preguntas civicas del USCIS con tarjetas de
              estudio, examenes de practica y repeticion espaciada. Gratis y
              actualizado para el examen de naturalizacion 2025.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/es/estudio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-400 hover:to-indigo-500 transition-all"
              >
                Comenzar a Estudiar Gratis
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
                href="/es/preguntas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-200 font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                Ver las 128 Preguntas
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
              Todo lo que Necesitas para Pasar
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
              Herramientas de estudio inteligentes para aprender de manera
              eficiente y retener lo que estudias.
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
                Tarjetas con Repeticion Espaciada
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Tarjetas inteligentes que programan repasos segun tu nivel de
                dominio. Las preguntas nuevas aparecen con mas frecuencia,
                mientras que las dominadas se espacian.
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
                Examenes de Practica
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Pon a prueba tus conocimientos con examenes de 10, 20, 50 o las
                128 preguntas. El formato de opcion multiple simula la
                experiencia real del examen.
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
                Respuestas por Estado
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Selecciona tu estado para obtener respuestas personalizadas sobre
                tus senadores, gobernador y capital del estado. Los 50 estados
                mas DC estan incluidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Resources */}
      <section className="py-16 sm:py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Recursos de Estudio
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <Link
              href="/es/examen-de-practica"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
                Examen de Practica de 20 Preguntas
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Toma un examen de practica realista que simula la entrevista del
                USCIS. Preguntas al azar, 12/20 para pasar, igual que el
                examen real.
              </p>
            </Link>
            <Link
              href="/es/estudio"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors mb-2">
                Estudiar con Tarjetas
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Estudia las 128 preguntas civicas con tarjetas interactivas y
                repeticion espaciada. Sigue tu progreso y domina cada pregunta.
              </p>
            </Link>
            <Link
              href="/es/preguntas"
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors mb-2">
                Las 128 Preguntas y Respuestas
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Referencia completa de todas las preguntas civicas oficiales del
                USCIS organizadas por categoria con preguntas de exencion 65/20
                marcadas.
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
            Listo para Comenzar?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Unete a miles de personas preparandose para su examen de ciudadania.
            Estudia a tu propio ritmo con herramientas que se adaptan a como
            aprendes.
          </p>
          <Link
            href="/es/estudio"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-400 hover:to-indigo-500 transition-all"
          >
            Comenzar a Estudiar — Es Gratis
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
