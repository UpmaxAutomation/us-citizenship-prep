import { siteConfig } from "./metadata";
import { getLanguageByCode, type LanguageConfig } from "./languages";

function resolveLocale(
  locale?: LanguageConfig["code"]
): { code: LanguageConfig["code"]; bcp47: string } {
  const lang = locale ? getLanguageByCode(locale) : undefined;
  return {
    code: lang?.code ?? "en",
    bcp47: lang?.bcp47 ?? "en-US",
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "US Citizenship Test Prep — 128 USCIS Civics Questions",
    description:
      "Free study guide for the 2025 USCIS naturalization civics test with all 128 questions, flashcards, quizzes, and spaced repetition.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function generateWebApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.name,
    url: siteConfig.url,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icons/icon-512.png`,
    description: siteConfig.description,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateEducationalProgramSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "US Citizenship Naturalization Test Preparation",
    description:
      "Free self-paced online preparation program for the 2025 USCIS naturalization civics test covering all 128 official questions.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    educationalProgramMode: "online",
    timeToComplete: "P4W",
    numberOfCredits: 0,
    educationalCredentialAwarded: "None (test preparation)",
    programType: "Non-credit",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function generateLearningResourceSchema({
  name,
  description,
  url,
  resourceType = "reference",
  interactivityType = "expositive",
  locale,
}: {
  name: string;
  description: string;
  url: string;
  resourceType?: string;
  interactivityType?: string;
  locale?: LanguageConfig["code"];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name,
    description,
    url,
    educationalLevel: "beginner",
    learningResourceType: resourceType,
    interactivityType,
    isAccessibleForFree: true,
    inLanguage: resolveLocale(locale).bcp47,
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "US citizenship applicants",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  path,
  datePublished = "2025-10-01",
  dateModified = "2026-03-02",
  locale,
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  locale?: LanguageConfig["code"];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteConfig.url}${path}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: resolveLocale(locale).bcp47,
  };
}

export function generateHowToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateSpeakableSchema(
  url: string,
  cssSelectors: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}
