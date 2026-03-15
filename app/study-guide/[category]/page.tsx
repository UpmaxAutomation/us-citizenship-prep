import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/app/components/JsonLd";
import LeadCapture from "@/app/components/LeadCapture";
import { buildMetadata } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLearningResourceSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";
import { questions, categories, subcategories } from "@/app/data/questions";

const categoryColors: Record<
  string,
  { border: string; bg: string; text: string; badge: string }
> = {
  "American Government": {
    border: "border-l-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  "American History": {
    border: "border-l-orange-500",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  },
  "Symbols and Holidays": {
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

const categoryIntros: Record<string, string> = {
  "American Government":
    "This section covers the three branches of government, the Constitution, the Bill of Rights, checks and balances, and the rights and responsibilities of citizens. It is the largest section on the USCIS civics test with 72 questions spanning the principles of American democracy, how the federal government is structured and operates, and what your rights and responsibilities are as a U.S. citizen. Mastering these questions is essential because they make up more than half of the entire test.",
  "American History":
    "This section covers American history from the Colonial Period through modern times. Questions span the founding of the nation, the Declaration of Independence, the American Revolution, the Civil War, Abraham Lincoln and the abolition of slavery, both World Wars, the Cold War, the civil rights movement, and important events in recent American history. With 46 questions, this is the second-largest section on the test and covers the historical events and figures that shaped the United States.",
  "Symbols and Holidays":
    "This section covers national symbols like the American flag, the Statue of Liberty, and the national anthem, along with major national holidays and their significance to American culture and history. Although it is the smallest section with just 10 questions, these topics are frequently asked during the naturalization interview. Many applicants find this the easiest section to master, making it a great place to build confidence before tackling the larger categories.",
};

const categoryFAQs: Record<string, { question: string; answer: string }[]> = {
  "American Government": [
    {
      question:
        "How many American Government questions are on the citizenship test?",
      answer:
        "There are 72 American Government questions on the USCIS civics test, making it the largest of the three categories. These questions cover principles of American democracy, the system of government, and rights and responsibilities of citizens.",
    },
    {
      question:
        "What subcategories are in the American Government section?",
      answer:
        "The American Government section is divided into three subcategories: Principles of American Government (covering the Constitution, democracy, and rule of law), System of Government (covering the three branches and how laws are made), and Rights and Responsibilities (covering citizen rights and civic duties).",
    },
    {
      question:
        "What percentage of the citizenship test covers American Government?",
      answer:
        "American Government makes up approximately 56% of the USCIS civics test (72 out of 128 total questions). It is by far the largest section, so dedicating extra study time to this category is highly recommended.",
    },
    {
      question:
        "Which American Government questions are most commonly asked?",
      answer:
        "Common American Government questions include: What is the supreme law of the land? (the Constitution), How many amendments does the Constitution have? (27), What are the three branches of government? (legislative, executive, judicial), and Who is the current President?",
    },
  ],
  "American History": [
    {
      question:
        "How many American History questions are on the citizenship test?",
      answer:
        "There are 46 American History questions on the USCIS civics test. These cover the Colonial Period and Independence, the 1800s, and recent American history including the World Wars, the civil rights movement, and September 11.",
    },
    {
      question:
        "What subcategories are in the American History section?",
      answer:
        "The American History section has three subcategories: Colonial Period and Independence (covering the founding of America and the Revolution), 1800s (covering the Civil War, Lincoln, and westward expansion), and Recent American History and Other Important Historical Information (covering the 20th and 21st centuries).",
    },
    {
      question:
        "What percentage of the citizenship test covers American History?",
      answer:
        "American History makes up approximately 36% of the USCIS civics test (46 out of 128 total questions). It is the second-largest section after American Government.",
    },
    {
      question:
        "What historical events should I study for the citizenship test?",
      answer:
        "Key events include the American Revolution, the Constitutional Convention, the Civil War, the abolition of slavery, World War I and II, the Great Depression, the Cold War, the civil rights movement, and September 11, 2001.",
    },
  ],
  "Symbols and Holidays": [
    {
      question:
        "How many Symbols and Holidays questions are on the citizenship test?",
      answer:
        "There are 10 Symbols and Holidays questions on the USCIS civics test. Despite being the smallest section, these questions are frequently asked during the naturalization interview.",
    },
    {
      question:
        "What subcategories are in the Symbols and Holidays section?",
      answer:
        "The Symbols and Holidays section has two subcategories: Symbols (covering the American flag, the Statue of Liberty, and the national anthem) and Holidays (covering national holidays like Independence Day, Thanksgiving, and Memorial Day).",
    },
    {
      question:
        "What percentage of the citizenship test covers Symbols and Holidays?",
      answer:
        "Symbols and Holidays makes up approximately 8% of the USCIS civics test (10 out of 128 total questions). It is the smallest section but still important to study since these questions come up frequently in interviews.",
    },
  ],
};

function getCategoryFromSlug(slug: string): string | undefined {
  return categories.find((cat) => slugify(cat) === slug);
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    category: slugify(cat),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const categoryName = getCategoryFromSlug(categorySlug);
  if (!categoryName) return {};

  const catQuestions = questions.filter((q) => q.category === categoryName);

  return buildMetadata({
    title: `${categoryName} — US Citizenship Test Study Guide`,
    description: `Study all ${catQuestions.length} ${categoryName} questions for the USCIS citizenship test. Covers ${subcategories[categoryName].join(", ")}. Free study guide with answers.`,
    path: `/study-guide/${categorySlug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const categoryName = getCategoryFromSlug(categorySlug);

  if (!categoryName) {
    notFound();
  }

  const colors = categoryColors[categoryName];
  const catQuestions = questions.filter((q) => q.category === categoryName);
  const catSubcategories = subcategories[categoryName];
  const introText = categoryIntros[categoryName];
  const faqs = categoryFAQs[categoryName];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Study Guide", url: `${siteConfig.url}/study-guide` },
    {
      name: categoryName,
      url: `${siteConfig.url}/study-guide/${categorySlug}`,
    },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const learningResourceSchema = generateLearningResourceSchema({
    name: `${categoryName} — US Citizenship Test Study Guide`,
    description: `Study guide covering all ${catQuestions.length} ${categoryName} questions for the USCIS naturalization civics test.`,
    url: `${siteConfig.url}/study-guide/${categorySlug}`,
  });

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/study-guide/${categorySlug}`,
    ["h1", "header p", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={learningResourceSchema} />
      <JsonLd data={speakableSchema} />

      <div className="min-h-screen pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-6">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link
                href="/"
                className="hover:text-slate-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/study-guide"
                className="hover:text-slate-300 transition-colors"
              >
                Study Guide
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-slate-300">{categoryName}</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 mt-8">
          <h1
            className={`text-3xl sm:text-4xl font-bold tracking-tight border-l-4 ${colors.border} pl-4`}
          >
            {categoryName}{" "}
            <span className="text-slate-400 text-2xl sm:text-3xl font-normal">
              — US Citizenship Test Questions
            </span>
          </h1>
          <p
            className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl"
            data-speakable="true"
          >
            {introText}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium ${colors.badge}`}
            >
              <span className="font-semibold">{catQuestions.length}</span>
              <span className="opacity-80">Questions</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium">
              <span className="text-white">{catSubcategories.length}</span>
              <span className="text-slate-400">Subcategories</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium">
              <span className="text-emerald-300">
                {catQuestions.filter((q) => q.is6520).length}
              </span>
              <span className="text-emerald-400/70">65/20 Questions</span>
            </span>
          </div>
        </header>

        {/* Subcategory Cards */}
        <div className="max-w-4xl mx-auto px-4 mt-10">
          <h2 className="text-xl font-semibold mb-4">Subcategories</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {catSubcategories.map((sub) => {
              const subCount = catQuestions.filter(
                (q) => q.subcategory === sub
              ).length;
              const subcategorySlug = slugify(sub);

              return (
                <Link
                  key={sub}
                  href={`/study-guide/${categorySlug}/${subcategorySlug}`}
                  className={`block bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors`}
                >
                  <h3 className="font-semibold text-white text-sm leading-snug">
                    {sub}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    {subCount} questions
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium">
                    <span className={colors.text}>Study topic</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={colors.text}
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Questions Grouped by Subcategory */}
        <div className="max-w-4xl mx-auto px-4 mt-12 space-y-10">
          {catSubcategories.map((sub) => {
            const subQuestions = catQuestions.filter(
              (q) => q.subcategory === sub
            );
            const subcategorySlug = slugify(sub);

            return (
              <section
                key={sub}
                id={subcategorySlug}
                aria-labelledby={`heading-${subcategorySlug}`}
              >
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800/50">
                  <h3
                    id={`heading-${subcategorySlug}`}
                    className="text-lg font-semibold text-slate-200"
                  >
                    {sub}
                  </h3>
                  <Link
                    href={`/study-guide/${categorySlug}/${subcategorySlug}`}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    View all {subQuestions.length} questions
                  </Link>
                </div>

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
                          <div className="mt-3">
                            <Link
                              href={`/questions/${q.slug}`}
                              className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                            >
                              View explanation →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-white text-sm">
                    {faq.question}
                  </h3>
                  <p className="mt-1.5 text-slate-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to study {categoryName}?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our interactive flashcards and spaced repetition to memorize
              all {catQuestions.length} {categoryName.toLowerCase()} questions
              before your naturalization interview.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Start Studying Now
              </Link>
              <Link
                href="/practice-test"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Take Practice Test
              </Link>
            </div>
          </div>
        </div>

        {/* Lead Capture */}
        <div className="max-w-4xl mx-auto px-4 mt-12">
          <LeadCapture variant="inline" />
        </div>
      </div>
    </>
  );
}
