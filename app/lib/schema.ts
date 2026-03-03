import { siteConfig } from "./metadata";

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/state/{state}`,
      },
      "query-input": "required name=state",
    },
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
    sameAs: [],
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

export function generateLearningResourceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "All 128 USCIS Citizenship Test Questions and Answers (2025)",
    description:
      "Complete reference of all 128 official USCIS civics test questions and answers for the 2025 naturalization interview, organized by category.",
    url: `${siteConfig.url}/questions`,
    educationalLevel: "beginner",
    learningResourceType: "reference",
    interactivityType: "expositive",
    isAccessibleForFree: true,
    inLanguage: "en",
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
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
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
    inLanguage: "en",
  };
}

export function generateQuizSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Free U.S. Citizenship Practice Test — 2025 Format",
    description:
      "Interactive 20-question practice test simulating the real USCIS citizenship interview with 12/20 passing score.",
    url: `${siteConfig.url}/practice-test`,
    educationalLevel: "beginner",
    learningResourceType: "quiz",
    interactivityType: "active",
    isAccessibleForFree: true,
    inLanguage: "en",
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
