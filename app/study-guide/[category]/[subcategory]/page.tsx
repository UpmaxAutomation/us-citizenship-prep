import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/app/components/JsonLd";
import LeadCapture from "@/app/components/LeadCapture";
import { buildMetadata } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
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

const subcategoryIntros: Record<string, string> = {
  "Principles of American Government":
    "This subcategory covers the fundamental concepts behind American government, including the Constitution as the supreme law of the land, the rule of law, self-governance, and the rights protected by the Bill of Rights and subsequent amendments. You will study what makes the United States a republic and a representative democracy, the purpose of the Constitution, and how the founding principles continue to shape American governance today. These questions test your understanding of the core ideas that the nation was built upon.",
  "System of Government":
    "This subcategory covers how the federal government works at every level. You will study the three branches of government — legislative (Congress), executive (the President), and judicial (the Supreme Court) — along with separation of powers, checks and balances, and how laws are made at the federal level. Questions also cover state and local government, the roles of senators and representatives, the Electoral College, and the structure of the Cabinet. This is the largest subcategory with questions about the practical mechanics of American governance.",
  "Rights and Responsibilities":
    "This subcategory covers the rights guaranteed to citizens and residents of the United States, as well as the civic responsibilities that come with citizenship. You will study the freedoms protected by the First Amendment, the right to vote, the right to bear arms, and other constitutional protections. Questions also cover civic duties including voting in elections, serving on a jury, paying federal taxes, registering for Selective Service, and obeying the law. Understanding both your rights and responsibilities is essential for the citizenship test.",
  "Colonial Period and Independence":
    "This subcategory covers the earliest period of American history, from the arrival of European colonists through the founding of the nation. You will study why colonists came to America, the establishment of the 13 original colonies, the causes of the American Revolution, the Declaration of Independence and its significance, and the roles of key founding fathers like George Washington, Benjamin Franklin, and Thomas Jefferson. These questions test your knowledge of how and why the United States came into existence.",
  "1800s":
    "This subcategory covers the major events and developments of 19th-century America. You will study the causes and consequences of the Civil War, Abraham Lincoln's leadership and the Emancipation Proclamation, the abolition of slavery through the 13th Amendment, westward expansion, and the acquisition of new territories. Questions focus on the critical period when the nation was tested by internal conflict and ultimately transformed through the end of slavery and the preservation of the Union.",
  "Recent American History and Other Important Historical Information":
    "This subcategory covers major events from the 20th and 21st centuries that shaped modern America. You will study the causes and outcomes of World War I and World War II, the Cold War and the threat of communism, the civil rights movement led by figures like Martin Luther King Jr., the September 11 attacks, and other significant events in recent history. These questions connect historical events to the rights and freedoms that define the United States today.",
  Symbols:
    "This subcategory covers the national symbols that represent the United States and its values. You will study the American flag, including the meaning of its stars and stripes, the Statue of Liberty and what it represents, the national anthem (The Star-Spangled Banner), and other important symbols of American identity. Although there are only a handful of symbol questions, they appear frequently in naturalization interviews and are among the easiest questions to learn.",
  Holidays:
    "This subcategory covers the major national holidays celebrated in the United States and their significance to American culture and history. You will study holidays including Independence Day (July 4th), Thanksgiving, Memorial Day, Veterans Day, Labor Day, Presidents' Day, Martin Luther King Jr. Day, and Columbus Day. Understanding why Americans celebrate these holidays connects you to the shared traditions and values of your future country.",
};

function getCategoryFromSlug(slug: string): string | undefined {
  return categories.find((cat) => slugify(cat) === slug);
}

function getSubcategoryFromSlug(
  categoryName: string,
  slug: string
): string | undefined {
  return subcategories[categoryName]?.find((sub) => slugify(sub) === slug);
}

export function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];

  for (const cat of categories) {
    const categorySlug = slugify(cat);
    for (const sub of subcategories[cat]) {
      params.push({
        category: categorySlug,
        subcategory: slugify(sub),
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const categoryName = getCategoryFromSlug(categorySlug);
  if (!categoryName) return {};

  const subcategoryName = getSubcategoryFromSlug(categoryName, subcategorySlug);
  if (!subcategoryName) return {};

  const subQuestions = questions.filter(
    (q) => q.category === categoryName && q.subcategory === subcategoryName
  );

  return buildMetadata({
    title: `${subcategoryName} Questions — US Citizenship Test`,
    description: `Study all ${subQuestions.length} ${subcategoryName} questions for the USCIS citizenship test. Part of the ${categoryName} section. Free study guide with answers and explanations.`,
    path: `/study-guide/${categorySlug}/${subcategorySlug}`,
  });
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const categoryName = getCategoryFromSlug(categorySlug);

  if (!categoryName) {
    notFound();
  }

  const subcategoryName = getSubcategoryFromSlug(categoryName, subcategorySlug);

  if (!subcategoryName) {
    notFound();
  }

  const colors = categoryColors[categoryName];
  const catSubcategories = subcategories[categoryName];
  const subQuestions = questions.filter(
    (q) => q.category === categoryName && q.subcategory === subcategoryName
  );
  const introText = subcategoryIntros[subcategoryName];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Study Guide", url: `${siteConfig.url}/study-guide` },
    {
      name: categoryName,
      url: `${siteConfig.url}/study-guide/${categorySlug}`,
    },
    {
      name: subcategoryName,
      url: `${siteConfig.url}/study-guide/${categorySlug}/${subcategorySlug}`,
    },
  ]);

  const learningResourceSchema = generateLearningResourceSchema({
    name: `${subcategoryName} — US Citizenship Test Questions`,
    description: `Study guide for all ${subQuestions.length} ${subcategoryName} questions on the USCIS naturalization civics test.`,
    url: `${siteConfig.url}/study-guide/${categorySlug}/${subcategorySlug}`,
  });

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/study-guide/${categorySlug}/${subcategorySlug}`,
    ["h1", "header p", "[data-speakable]"]
  );

  // Sibling subcategories (excluding current)
  const siblingSubcategories = catSubcategories.filter(
    (sub) => sub !== subcategoryName
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={learningResourceSchema} />
      <JsonLd data={speakableSchema} />

      <div className="min-h-screen pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-6">
          <ol className="flex items-center gap-2 text-sm text-slate-500 flex-wrap">
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
              <Link
                href={`/study-guide/${categorySlug}`}
                className="hover:text-slate-300 transition-colors"
              >
                {categoryName}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-slate-300">{subcategoryName}</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 mt-8">
          {/* Category Badge */}
          <Link
            href={`/study-guide/${categorySlug}`}
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mb-4 transition-colors hover:opacity-80 ${colors.badge}`}
          >
            {categoryName}
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {subcategoryName}{" "}
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
              <span className="font-semibold">{subQuestions.length}</span>
              <span className="opacity-80">Questions</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium">
              <span className="text-emerald-300">
                {subQuestions.filter((q) => q.is6520).length}
              </span>
              <span className="text-emerald-400/70">65/20 Questions</span>
            </span>
          </div>
        </header>

        {/* Questions List */}
        <div className="max-w-4xl mx-auto px-4 mt-10">
          <h2 className="text-xl font-semibold mb-4">
            All {subQuestions.length} Questions
          </h2>

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
        </div>

        {/* Sibling Subcategories */}
        {siblingSubcategories.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 mt-16">
            <h2 className="text-xl font-semibold mb-4">
              Other {categoryName} Topics
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {siblingSubcategories.map((sub) => {
                const siblingSlug = slugify(sub);
                const siblingCount = questions.filter(
                  (q) =>
                    q.category === categoryName && q.subcategory === sub
                ).length;

                return (
                  <Link
                    key={sub}
                    href={`/study-guide/${categorySlug}/${siblingSlug}`}
                    className="block bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
                  >
                    <h3 className="font-semibold text-white text-sm leading-snug">
                      {sub}
                    </h3>
                    <p className="text-slate-500 text-xs mt-1">
                      {siblingCount} questions
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
        )}

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to study these questions?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our interactive flashcards and spaced repetition to master
              all {subQuestions.length} {subcategoryName.toLowerCase()} questions
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
