/**
 * Inline i18n string maps for nav and footer labels.
 * Keyed by language code → string key → translated label.
 * No i18n framework — just a flat record per locale.
 */

type LangCode = "en" | "es" | "tr";
type StringMap = Record<string, string>;

export const navStrings: Record<LangCode, StringMap> = {
  en: {
    study: "Study",
    practiceTest: "Practice Test",
    all128Questions: "All 128 Questions",
    dailyChallenge: "Daily Challenge",
    process: "Process",
    eligibilityChecker: "Eligibility Checker",
    n400Guide: "N-400 Guide",
    timeline: "Timeline",
    costs: "Costs",
    more: "More",
    readingWriting: "Reading & Writing",
    interviewGuide: "Interview Guide",
    testChanges2025: "2025 Test Changes",
    senior6520: "Senior 65/20",
    blog: "Blog",
    about: "About",
  },
  es: {
    study: "Estudiar",
    practiceTest: "Examen de Practica",
    all128Questions: "Las 128 Preguntas",
    dailyChallenge: "Reto Diario",
    process: "Proceso",
    eligibilityChecker: "Verificar Elegibilidad",
    n400Guide: "Guia N-400",
    timeline: "Cronologia",
    costs: "Costos",
    more: "Mas",
    readingWriting: "Lectura y Escritura",
    interviewGuide: "Guia de Entrevista",
    testChanges2025: "Cambios del Examen 2025",
    senior6520: "Exencion 65/20",
    blog: "Blog",
    about: "Acerca de",
  },
  tr: {
    study: "Calisma",
    practiceTest: "Deneme Sinavi",
    all128Questions: "128 Soru",
    dailyChallenge: "Gunluk Meydan Okuma",
    process: "Surec",
    eligibilityChecker: "Uygunluk Kontrolu",
    n400Guide: "N-400 Rehberi",
    timeline: "Zaman Cizelgesi",
    costs: "Ucretler",
    more: "Daha Fazla",
    readingWriting: "Okuma ve Yazma",
    interviewGuide: "Mulakat Rehberi",
    testChanges2025: "2025 Sinav Degisiklikleri",
    senior6520: "65/20 Muafiyeti",
    blog: "Blog",
    about: "Hakkinda",
  },
};

export const footerStrings: Record<LangCode, StringMap> = {
  en: {
    studyTools: "Study Tools",
    studyFlashcards: "Study Flashcards",
    practiceTest: "Practice Test",
    all128Questions: "All 128 Questions",
    readingWriting: "Reading & Writing",
    studyGuide: "Study Guide",
    americanGovernment: "American Government",
    americanHistory: "American History",
    symbolsHolidays: "Symbols & Holidays",
    naturalizationProcess: "Naturalization Process",
    eligibilityChecker: "Eligibility Checker",
    n400Guide: "N-400 Guide",
    timeline: "Timeline",
    costsAndFees: "Costs & Fees",
    interviewChecklist: "Interview Checklist",
    oathOfAllegiance: "Oath of Allegiance",
    faq: "FAQ",
    resources: "Resources",
    interviewGuide: "Interview Guide",
    testChanges2025: "2025 Test Changes",
    senior6520: "Senior 65/20",
    stateSpecificPrep: "State-Specific Prep",
    blog: "Blog",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    about: "About",
    aboutUs: "About Us",
    footerDescription:
      "Free study tools for the 2025 USCIS citizenship test. All 128 official civics questions with flashcards, practice tests, and more.",
    footerDisclaimer:
      "Not affiliated with or endorsed by USCIS or the U.S. government.",
    copyright: "US Citizenship Test Prep. All rights reserved.",
    questionsSourced:
      "Questions sourced from official USCIS civics test materials.",
  },
  es: {
    studyTools: "Herramientas de Estudio",
    studyFlashcards: "Tarjetas de Estudio",
    practiceTest: "Examen de Practica",
    all128Questions: "Las 128 Preguntas",
    readingWriting: "Lectura y Escritura",
    studyGuide: "Guia de Estudio",
    americanGovernment: "Gobierno Americano",
    americanHistory: "Historia Americana",
    symbolsHolidays: "Simbolos y Dias Festivos",
    naturalizationProcess: "Proceso de Naturalizacion",
    eligibilityChecker: "Verificar Elegibilidad",
    n400Guide: "Guia N-400",
    timeline: "Cronologia",
    costsAndFees: "Costos y Tarifas",
    interviewChecklist: "Lista de Verificacion",
    oathOfAllegiance: "Juramento de Lealtad",
    faq: "Preguntas Frecuentes",
    resources: "Recursos",
    interviewGuide: "Guia de Entrevista",
    testChanges2025: "Cambios del Examen 2025",
    senior6520: "Exencion 65/20",
    stateSpecificPrep: "Preparacion por Estado",
    blog: "Blog",
    legal: "Legal",
    privacyPolicy: "Politica de Privacidad",
    termsOfService: "Terminos de Servicio",
    about: "Acerca de",
    aboutUs: "Sobre Nosotros",
    footerDescription:
      "Herramientas de estudio gratuitas para el examen de ciudadania USCIS 2025. Las 128 preguntas civicas oficiales con tarjetas, examenes y mas.",
    footerDisclaimer:
      "No afiliado ni respaldado por USCIS o el gobierno de EE.UU.",
    copyright: "US Citizenship Test Prep. Todos los derechos reservados.",
    questionsSourced:
      "Preguntas basadas en los materiales oficiales del examen civico del USCIS.",
  },
  tr: {
    studyTools: "Calisma Araclari",
    studyFlashcards: "Calisma Kartlari",
    practiceTest: "Deneme Sinavi",
    all128Questions: "128 Soru",
    readingWriting: "Okuma ve Yazma",
    studyGuide: "Calisma Rehberi",
    americanGovernment: "Amerikan Hukumeti",
    americanHistory: "Amerikan Tarihi",
    symbolsHolidays: "Semboller ve Tatiller",
    naturalizationProcess: "Vatandaslik Sureci",
    eligibilityChecker: "Uygunluk Kontrolu",
    n400Guide: "N-400 Rehberi",
    timeline: "Zaman Cizelgesi",
    costsAndFees: "Ucretler",
    interviewChecklist: "Mulakat Kontrol Listesi",
    oathOfAllegiance: "Baglilik Yemini",
    faq: "SSS",
    resources: "Kaynaklar",
    interviewGuide: "Mulakat Rehberi",
    testChanges2025: "2025 Sinav Degisiklikleri",
    senior6520: "65/20 Muafiyeti",
    stateSpecificPrep: "Eyalet Bazli Hazirlik",
    blog: "Blog",
    legal: "Yasal",
    privacyPolicy: "Gizlilik Politikasi",
    termsOfService: "Kullanim Sartlari",
    about: "Hakkinda",
    aboutUs: "Hakkimizda",
    footerDescription:
      "2025 USCIS vatandaslik sinavi icin ucretsiz calisma araclari. 128 resmi sivil bilgiler sorusu, kartlar, denemeler ve daha fazlasi.",
    footerDisclaimer:
      "USCIS veya ABD hukumeti ile bagli veya onaylanmis degildir.",
    copyright: "US Citizenship Test Prep. Tum haklari saklidir.",
    questionsSourced:
      "Sorular resmi USCIS sivil bilgiler sinav materyallerinden alinmistir.",
  },
};

/**
 * Get nav strings for a language code. Falls back to English.
 */
export function getNavStrings(code: string): StringMap {
  return navStrings[code as LangCode] ?? navStrings.en;
}

/**
 * Get footer strings for a language code. Falls back to English.
 */
export function getFooterStrings(code: string): StringMap {
  return footerStrings[code as LangCode] ?? footerStrings.en;
}
