import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";
import { getBlogPost } from "@/app/data/blog-posts";

const post = getBlogPost("citizenship-test-study-plan")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function StudyPlanPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
  });

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/blog/${post.slug}`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={speakableSchema} />

      <div className="min-h-screen pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 pt-6">
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
                href="/blog"
                className="hover:text-slate-300 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-slate-300 line-clamp-1">{post.title}</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
              {post.category}
            </span>
            <span className="text-xs text-slate-500">
              {post.readingTime} min read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            4-Week Citizenship Test Study Plan{" "}
            <span className="text-blue-400">That Actually Works</span>
          </h1>
          <p
            data-speakable="true"
            className="mt-4 text-slate-400 text-lg leading-relaxed"
          >
            {post.description}
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
            <time dateTime={post.publishedAt}>
              Published{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">|</span>
            <time dateTime={post.updatedAt}>
              Updated{" "}
              {new Date(post.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Studying for the US citizenship test can feel overwhelming. With
                128 civics questions, English reading and writing requirements,
                and the naturalization interview, there is a lot to prepare for.
              </p>
              <p>
                This 4-week study plan breaks everything into manageable daily
                tasks. It is designed for someone studying 30 to 60 minutes per
                day. If you have more time, you can move faster. If you have
                less, extend the plan to 6 or 8 weeks — the important thing is
                consistency.
              </p>
              <p>
                The plan assumes you are starting from scratch. If you have
                already studied some material, adjust the schedule to focus on
                what you have not yet covered.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Week 1: American Government                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 font-bold">
                W1
              </span>
              <h2 className="text-2xl font-bold">
                Week 1: American Government (Questions 1-72)
              </h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The first week focuses on the largest category: American
                Government. This category covers the Constitution, the three
                branches of government, the legislative process, and rights and
                responsibilities. It makes up more than half of all test
                questions, so it deserves the most study time.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Days 1-2: The Constitution and Founding Principles
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Study questions about the Constitution, what it does, and
                    its key principles (self-governance, rule of law, separation
                    of powers)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Learn the Bill of Rights and key amendments (1st, 2nd,
                    13th, 14th, 15th, 19th)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Use{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      flashcards
                    </Link>{" "}
                    to practice these questions with spaced repetition
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Days 3-4: The Three Branches of Government
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Legislative branch: Congress, Senate, House of
                    Representatives, how laws are made
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Executive branch: the President, Vice President, Cabinet,
                    presidential powers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Judicial branch: the Supreme Court, what it does, how
                    justices are appointed
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Days 5-6: Rights, Responsibilities, and State Government
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Citizen rights and responsibilities (voting, jury duty,
                    taxes)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    State and local government: governor, state legislature,
                    state-specific answers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Look up your{" "}
                    <Link
                      href="/#states"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      state-specific answers
                    </Link>{" "}
                    (senators, governor, capital)
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Day 7: Review and First Practice Test
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Review all questions from the week using flashcards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Take your first{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice test
                    </Link>{" "}
                    to see where you stand (do not worry about the score yet)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Note which questions you missed for extra review next week
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Week 2: History, Symbols, and Geography       */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 font-bold">
                W2
              </span>
              <h2 className="text-2xl font-bold">
                Week 2: American History and Symbols (Questions 73-128)
              </h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                This week covers the remaining two categories: American History
                and Symbols, Geography, and Holidays. These categories are
                smaller but include some questions that require specific
                memorization of names, dates, and facts.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Days 1-2: Colonial Period and American Revolution
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Why colonists came to America, the 13 colonies, the
                    Declaration of Independence
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    The Founding Fathers: Washington, Jefferson, Franklin,
                    Adams, Hamilton, Madison
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    The Constitutional Convention and ratification
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Days 3-4: 1800s Through Modern History
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    The Civil War, Abraham Lincoln, and the abolition of
                    slavery
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    World Wars I and II, the Cold War, and the civil rights
                    movement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Recent American history (new topics added in 2025)
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Days 5-6: Symbols, Geography, and Holidays
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    The American flag (stripes, stars, colors, and their
                    meanings)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    The Statue of Liberty, the national anthem, and other
                    national symbols
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    National holidays and their significance (Independence Day,
                    Thanksgiving, Memorial Day, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    U.S. geography: borders, longest rivers, major landmarks
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Day 7: Full Review and Practice Test
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Review all 128 questions using{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      flashcards
                    </Link>{" "}
                    — focus on questions you marked as difficult
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Take a full{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice test
                    </Link>{" "}
                    and aim for 12/20 or higher
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Week 3: Practice and Review                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 font-bold">
                W3
              </span>
              <h2 className="text-2xl font-bold">
                Week 3: Practice and Review
              </h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                You have now seen all 128 questions at least once. Week 3 is
                about reinforcement. The goal is to move questions from
                short-term memory into long-term memory through active recall
                and repeated practice testing.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Daily Routine (Days 1-6)
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">20 minutes:</strong>{" "}
                    Flashcard review with spaced repetition (focus on questions
                    marked as difficult)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">15 minutes:</strong>{" "}
                    Practice test — take one every other day, aiming for
                    progressively higher scores
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">10 minutes:</strong>{" "}
                    Reading and writing vocabulary practice using the{" "}
                    <Link
                      href="/reading-writing"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      reading and writing tool
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">5 minutes:</strong> Say 10
                    answers out loud as if you were in the interview
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Day 7: Full-Length Simulation
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Take a{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice test
                    </Link>{" "}
                    and answer every question out loud
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    If possible, have a friend or family member ask you the
                    questions to simulate the interview environment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Target score: 16/20 or higher. If you are consistently
                    below 14, spend more time on flashcard review next week
                  </span>
                </li>
              </ul>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 mt-4">
                <p className="text-emerald-300 text-sm font-medium">
                  Tip: By the end of Week 3, you should be scoring at least
                  14/20 consistently on practice tests. If you are not there
                  yet, extend this week by a few days before moving to Week 4.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Week 4: Final Review and Interview Prep       */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold">
                W4
              </span>
              <h2 className="text-2xl font-bold">
                Week 4: Final Review + Interview Prep
              </h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The final week shifts from learning new material to polishing
                what you already know and preparing for the interview as a
                whole — not just the test, but the entire naturalization
                interview experience.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Days 1-3: Targeted Review
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>
                    Review only the questions you have been getting wrong or
                    marking as difficult in flashcards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>
                    Verify your state-specific answers are current (senators,
                    governor, capital)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>
                    Take a practice test each day. You should be scoring
                    16/20 or higher consistently
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Days 4-5: Interview Preparation
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>
                    Read through our{" "}
                    <Link
                      href="/interview-guide"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      interview guide
                    </Link>{" "}
                    to understand what happens during the interview
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>
                    Re-read your N-400 application thoroughly. The officer will
                    review it with you and ask questions about your history,
                    travel, and background
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>
                    Prepare all required documents: appointment notice, Green
                    Card, passport, photo ID, and any documents specifically
                    requested
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Days 6-7: Final Polish
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>
                    Do one final pass through all 128 questions with{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      flashcards
                    </Link>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>
                    Take one final practice test and aim for 18/20 or higher
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>
                    The night before: light review only, prepare documents, get
                    a good night&apos;s sleep
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Daily Schedule Template                       */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Daily Study Schedule Template
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Here is a suggested 45-minute daily schedule you can adapt to
                your own routine. The key is consistency: studying every day
                for a shorter period is far more effective than long cramming
                sessions.
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-mono text-blue-300 w-16">
                    0-20 min
                  </span>
                  <span>
                    <strong className="text-white">Flashcard review</strong> —
                    spaced repetition through{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      study mode
                    </Link>
                  </span>
                </div>
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-mono text-blue-300 w-16">
                    20-35 min
                  </span>
                  <span>
                    <strong className="text-white">Practice test</strong> — take
                    one every other day via our{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice test tool
                    </Link>
                    . On off days, review missed questions from the last test
                  </span>
                </div>
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-mono text-blue-300 w-16">
                    35-45 min
                  </span>
                  <span>
                    <strong className="text-white">
                      Reading &amp; writing
                    </strong>{" "}
                    — practice vocabulary with the{" "}
                    <Link
                      href="/reading-writing"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      reading and writing tool
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Tips for Non-Native English Speakers          */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Tips for Non-Native English Speakers
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                If English is not your first language, give yourself extra time
                and focus on these areas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Practice speaking answers out loud every day.
                    </strong>{" "}
                    The civics test is oral, so you need to be comfortable
                    saying the answers, not just knowing them.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Spend extra time on reading and writing vocabulary.
                    </strong>{" "}
                    The reading and writing test uses specific USCIS vocabulary
                    lists. Practice reading these words aloud and writing them
                    from dictation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Do not worry about perfect pronunciation.
                    </strong>{" "}
                    USCIS officers are trained to understand accented English.
                    The requirement is basic English communication, not
                    fluency.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Consider extending to a 6 or 8 week plan.
                    </strong>{" "}
                    There is no penalty for studying longer. Give yourself the
                    time you need to feel confident.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Listen to the questions, not just read them.
                    </strong>{" "}
                    During the real interview, questions are spoken to you. If
                    possible, have someone read the questions to you while you
                    practice.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 65/20 Exemption Adjustments                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Adjustments for 65/20 Exemption Applicants
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                If you qualify for the{" "}
                <Link
                  href="/senior-exemption"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  65/20 exemption
                </Link>{" "}
                (aged 65+ with 20+ years as a permanent resident), your study
                plan is significantly shorter:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Only 20 questions to study
                    </strong>{" "}
                    instead of 128. You can learn all 20 in 1 to 2 weeks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Skip the reading and writing sections
                    </strong>{" "}
                    of this study plan. You are exempt from the English test.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      You may study in your native language.
                    </strong>{" "}
                    Find translated versions of the 20 questions and bring an
                    interpreter to the interview.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Recommended timeline: 2 weeks.
                    </strong>{" "}
                    Week 1 for learning, Week 2 for review and practice.
                  </span>
                </li>
              </ul>
              <p>
                See all 20 designated questions on our{" "}
                <Link
                  href="/senior-exemption"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  65/20 senior exemption guide
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* CTA Section                                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Start your 4-week study plan today
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Everything you need is free. Begin with flashcards, test yourself
              with practice tests, and build confidence for your naturalization
              interview.
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
                Take a Practice Test
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
              <Link
                href="/questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                All 128 Questions
              </Link>
              <Link
                href="/reading-writing"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Reading &amp; Writing Practice
              </Link>
              <Link
                href="/interview-guide"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Interview Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
