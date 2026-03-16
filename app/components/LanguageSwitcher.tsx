"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");

  const getAlternatePath = () => {
    if (isSpanish) {
      const enPath = pathname
        .replace(/^\/es\/estudio/, "/study")
        .replace(/^\/es\/preguntas/, "/questions")
        .replace(/^\/es\/examen-de-practica/, "/practice-test")
        .replace(/^\/es$/, "/");
      return enPath || "/";
    } else {
      const esPath = pathname
        .replace(/^\/study/, "/es/estudio")
        .replace(/^\/questions$/, "/es/preguntas")
        .replace(/^\/practice-test/, "/es/examen-de-practica");
      if (esPath === pathname) return `/es${pathname}`;
      return esPath;
    }
  };

  return (
    <div className="flex items-center gap-1 text-xs" role="navigation" aria-label="Language switcher">
      <Link
        href={isSpanish ? getAlternatePath() : pathname}
        className={`px-2 py-1 rounded ${!isSpanish ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"} transition-colors`}
        lang="en"
        aria-current={!isSpanish ? "true" : undefined}
      >
        EN
      </Link>
      <Link
        href={isSpanish ? pathname : getAlternatePath()}
        className={`px-2 py-1 rounded ${isSpanish ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"} transition-colors`}
        lang="es"
        aria-current={isSpanish ? "true" : undefined}
      >
        ES
      </Link>
    </div>
  );
}
