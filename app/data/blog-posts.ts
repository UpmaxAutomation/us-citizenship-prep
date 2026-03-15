export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-2025-citizenship-test",
    title: "The Complete Guide to the 2025 US Citizenship Test",
    description:
      "Everything you need to know about the 2025 USCIS civics test: format changes, study strategies, what to expect, and how to pass on your first try.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-03-10",
    category: "Guide",
    readingTime: 12,
  },
  {
    slug: "how-to-pass-citizenship-test-first-try",
    title: "How to Pass the US Citizenship Test on Your First Try",
    description:
      "Proven study techniques and test-taking strategies from people who passed their USCIS naturalization interview. Practical tips for the civics, reading, and writing tests.",
    publishedAt: "2026-02-01",
    updatedAt: "2026-03-10",
    category: "Tips",
    readingTime: 8,
  },
  {
    slug: "citizenship-test-study-plan",
    title: "4-Week Citizenship Test Study Plan That Actually Works",
    description:
      "A week-by-week study plan for the USCIS citizenship test. Covers all 128 civics questions, reading and writing practice, and interview preparation in 4 weeks.",
    publishedAt: "2026-02-15",
    updatedAt: "2026-03-10",
    category: "Study Plan",
    readingTime: 10,
  },
  {
    slug: "how-to-answer-government-questions",
    title: "How to Answer Government Questions on the Citizenship Test",
    description:
      "Learn strategies for answering the 72 American Government questions on the USCIS citizenship test. Tips for remembering branches, amendments, and key principles.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-14",
    category: "Study Tips",
    readingTime: 8,
  },
  {
    slug: "how-to-answer-history-questions",
    title: "How to Answer History Questions on the Citizenship Test",
    description:
      "Strategies for mastering the 46 American History questions. Learn how to remember key dates, people, and events from Colonial times through modern history.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-14",
    category: "Study Tips",
    readingTime: 8,
  },
  {
    slug: "how-to-answer-geography-questions",
    title: "How to Answer Geography Questions on the Citizenship Test",
    description:
      "Tips for answering geography-related questions on the USCIS citizenship test. Covers borders, rivers, territories, and geographic features you need to know.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-14",
    category: "Study Tips",
    readingTime: 6,
  },
  {
    slug: "how-to-answer-rights-responsibilities-questions",
    title:
      "How to Answer Rights & Responsibilities Questions on the Citizenship Test",
    description:
      "Master the rights and responsibilities section of the USCIS citizenship test. Learn about voting rights, the Bill of Rights, and civic duties.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-14",
    category: "Study Tips",
    readingTime: 7,
  },
  {
    slug: "how-to-answer-symbols-holidays-questions",
    title:
      "How to Answer Symbols & Holidays Questions on the Citizenship Test",
    description:
      "Study guide for the symbols and holidays section. Learn about the American flag, Statue of Liberty, national anthem, and important national holidays.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-14",
    category: "Study Tips",
    readingTime: 6,
  },
  {
    slug: "100-vs-128-questions-citizenship-test",
    title: "100 vs 128 Questions: What Changed on the Citizenship Test",
    description:
      "The USCIS citizenship test expanded from 100 to 128 questions in 2025. Learn what changed, what was added, and how to prepare for the updated test.",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-14",
    category: "Test Changes",
    readingTime: 7,
  },
  {
    slug: "2008-vs-2025-citizenship-test",
    title: "2008 vs 2025 Citizenship Test: Complete Comparison",
    description:
      "Compare the old 2008 USCIS citizenship test with the new 2025 version. See what questions were added, removed, and changed in the latest update.",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-14",
    category: "Test Changes",
    readingTime: 9,
  },
  {
    slug: "citizenship-test-passing-score",
    title:
      "Citizenship Test Passing Score: How Many Questions Do You Need Right?",
    description:
      "You need 12 out of 20 correct answers (60%) to pass the USCIS citizenship civics test. Learn about scoring, retakes, and what happens if you fail.",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-14",
    category: "Guide",
    readingTime: 6,
  },
  {
    slug: "n400-application-guide",
    title: "N-400 Application Guide: How to Apply for US Citizenship",
    description:
      "Step-by-step guide to the N-400 naturalization application. Eligibility requirements, required documents, fees, and tips for a successful application.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-14",
    category: "Guide",
    readingTime: 10,
  },
  {
    slug: "citizenship-interview-what-to-expect",
    title: "Citizenship Interview: What to Expect on Interview Day",
    description:
      "A complete guide to the USCIS naturalization interview. What happens step by step, what documents to bring, common questions, and tips to calm your nerves.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-14",
    category: "Guide",
    readingTime: 9,
  },
  {
    slug: "citizenship-test-tips-non-english-speakers",
    title: "Citizenship Test Tips for Non-English Speakers",
    description:
      "Study strategies and test-taking tips specifically for ESL applicants preparing for the USCIS citizenship test. Includes language exemptions and accommodations.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-14",
    category: "Tips",
    readingTime: 8,
  },
  {
    slug: "how-long-citizenship-process",
    title: "How Long Does the Citizenship Process Take in 2025?",
    description:
      "Current USCIS processing times for naturalization in 2025. From N-400 filing to oath ceremony, learn how long each step takes and how to track your case.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-14",
    category: "Guide",
    readingTime: 7,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
