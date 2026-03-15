import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";
import { getBlogPost } from "@/app/data/blog-posts";

const post = getBlogPost("complete-guide-2025-citizenship-test")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

const faqs = [
  {
    question: "How many questions are on the 2025 USCIS citizenship test?",
    answer:
      "The 2025 USCIS civics test has a total pool of 128 questions. During your interview, the officer will ask up to 20 questions randomly selected from this pool. You need to answer at least 12 correctly (60%) to pass.",
  },
  {
    question: "Can I take the citizenship test in my native language?",
    answer:
      "Only if you qualify for the 65/20 exemption (aged 65+ with 20+ years as a permanent resident). All other applicants must take the civics test in English and must also pass a separate English reading and writing test.",
  },
  {
    question: "How long should I study for the citizenship test?",
    answer:
      "Most applicants need 4 to 8 weeks of consistent study to feel confident. A structured study plan with 30 to 60 minutes of daily practice is more effective than cramming. Use flashcards, practice tests, and spaced repetition for the best results.",
  },
  {
    question: "What happens if I fail the citizenship test?",
    answer:
      "You will be scheduled for a retest within 60 to 90 days. You only retake the portion you failed (civics, English, or both). If you fail the retest, your application is denied, but you may reapply by filing a new N-400.",
  },
  {
    question:
      "Are the citizenship test questions multiple choice or open-ended?",
    answer:
      "The civics test questions are open-ended and oral. The USCIS officer asks each question verbally and you answer verbally. There are no multiple choice options. Some questions accept multiple correct answers.",
  },
];

export default function CompleteGuide2025Page() {
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

  const faqSchema = generateFAQSchema(faqs);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/blog/${post.slug}`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
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
            The Complete Guide to the{" "}
            <span className="text-blue-400">2025 US Citizenship Test</span>
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

        {/* ============================================= */}
        {/* Section 1: Overview                           */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Overview of the 2025 USCIS Citizenship Test
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The United States citizenship test is a requirement for anyone
                seeking naturalization. Administered by U.S. Citizenship and
                Immigration Services (USCIS), the test evaluates your knowledge
                of American government, history, and civics, as well as your
                ability to read, write, and speak basic English.
              </p>
              <p>
                In October 2025, USCIS introduced a significantly updated
                version of the civics test. The question pool expanded from 100
                to 128 questions, the number of questions asked during the
                interview doubled from 10 to 20, and new topic areas were added
                including U.S. geography and recent American history.
              </p>
              <p>
                Despite these changes, the passing threshold remains at 60%.
                This means you now need 12 correct answers out of 20 questions,
                compared to 6 out of 10 under the old format. The relative
                difficulty is similar, but you need to study more material and
                prepare for a longer interview session.
              </p>
              <p>
                This guide covers everything you need to know about the 2025
                test: the format, the categories, the English requirement,
                available exemptions, how to study effectively, and what to
                expect on interview day. For a detailed comparison of old vs.
                new test formats, see our{" "}
                <Link
                  href="/2025-test-changes"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  2025 test changes
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 2: Test Format                        */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Test Format: 128 Questions, 20 Asked, 12 to Pass
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The civics portion of the citizenship test is an oral exam. A
                USCIS officer asks you questions verbally, and you respond out
                loud. There are no multiple-choice options and nothing is
                written down during this portion.
              </p>
              <p>
                Here is exactly how the format works:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">128 total questions</strong>{" "}
                    in the official USCIS question pool. You must study all of
                    them because you cannot predict which ones will be selected.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Up to 20 questions asked
                    </strong>{" "}
                    during your interview. The officer randomly selects from the
                    128-question pool.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      12 correct answers needed
                    </strong>{" "}
                    to pass (60%). The officer stops asking questions once you
                    reach 12 correct.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Multiple acceptable answers
                    </strong>{" "}
                    exist for many questions. You only need to provide one
                    correct answer.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">You can ask to repeat</strong>{" "}
                    a question. The officer can say it again but cannot rephrase
                    it or give hints.
                  </span>
                </li>
              </ul>
              <p>
                You can browse the full list of questions and their accepted
                answers on our{" "}
                <Link
                  href="/questions"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  all 128 questions
                </Link>{" "}
                page, or jump straight into a{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  simulated practice test
                </Link>{" "}
                to experience the format firsthand.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 3: Three Categories                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The Three Test Categories Explained
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                All 128 civics questions fall into three broad categories. Each
                category covers a distinct area of American civics, and
                questions from all three will appear on your test.
              </p>
            </div>

            {/* Category 1 */}
            <div className="mt-6 bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">
                1. American Government (Questions 1-72)
              </h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                The largest category, covering the structure and function of the
                U.S. government. This includes:
              </p>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>The Constitution, Bill of Rights, and amendments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>The three branches of government and their roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>The legislative process and how laws are made</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Federal, state, and local government responsibilities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Rights and responsibilities of citizens</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-3">
                This category makes up more than half of the test. Invest the
                most study time here.
              </p>
            </div>

            {/* Category 2 */}
            <div className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-300 mb-2">
                2. American History (Questions 73-109)
              </h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                Covers key events and figures in American history from the
                colonial period to the present:
              </p>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Colonial period and the American Revolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>The Civil War, World Wars, and the Cold War</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>The civil rights movement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Important historical figures (Founding Fathers, presidents,
                    leaders)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Recent American history (new in 2025)</span>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="mt-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                3. Symbols, Geography & Holidays (Questions 110-128)
              </h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                The smallest category, covering national symbols and civic
                traditions:
              </p>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>The American flag and its significance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>The national anthem and the Statue of Liberty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    National holidays (Independence Day, Thanksgiving, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>U.S. geography (borders, states, landmarks)</span>
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-3">
                This is the smallest category and often the easiest to learn.
                Do not neglect it though, as questions from all categories
                appear on every test.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 4: English Test Requirements          */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              English Test Requirements
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                In addition to the civics test, you must demonstrate basic
                English proficiency through a separate reading and writing test.
                This is administered during the same interview as the civics
                test.
              </p>
              <p>
                <strong className="text-white">Reading test:</strong> The
                officer shows you 1 to 3 sentences on a card or screen. You
                must correctly read aloud at least 1 sentence. The sentences use
                vocabulary from the official USCIS reading vocabulary list,
                which includes words related to civics and everyday life.
              </p>
              <p>
                <strong className="text-white">Writing test:</strong> The
                officer dictates 1 to 3 sentences and you write them down. You
                must correctly write at least 1 sentence. Spelling, capitalization,
                and basic grammar are evaluated, but minor errors are acceptable
                as long as the meaning is clear.
              </p>
              <p>
                <strong className="text-white">Speaking:</strong> Your English
                speaking ability is evaluated throughout the entire interview as
                you answer questions and discuss your N-400 application. There
                is no separate speaking test.
              </p>
              <p>
                You can practice the reading and writing vocabulary on our
                dedicated{" "}
                <Link
                  href="/reading-writing"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  reading and writing practice
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 5: 65/20 Exemption                    */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The 65/20 Exemption Explained
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The 65/20 exemption is designed for older long-term permanent
                residents. If you are 65 years old or older and have been a
                lawful permanent resident for at least 20 years, you qualify for
                significant accommodations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">Reduced question pool:</strong>{" "}
                    You only study 20 designated questions instead of the full
                    128.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Native language allowed:
                    </strong>{" "}
                    You may take the civics test in your native language and
                    bring an interpreter.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">No English test:</strong> You
                    are exempt from the reading and writing test.
                  </span>
                </li>
              </ul>
              <p>
                Learn more about eligibility requirements and see all 20
                designated questions on our{" "}
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
        {/* Section 6: What Changed from the Old Test     */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              What Changed from the Old Test
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                If you studied using materials from before October 2025, here
                are the key differences you need to know:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    Question Pool
                  </p>
                  <p className="text-slate-400 text-sm">100 &rarr; 128 questions</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    Questions Asked
                  </p>
                  <p className="text-slate-400 text-sm">10 &rarr; 20 per interview</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    Passing Score
                  </p>
                  <p className="text-slate-400 text-sm">
                    6/10 &rarr; 12/20 (still 60%)
                  </p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    New Topics
                  </p>
                  <p className="text-slate-400 text-sm">
                    Geography, recent events added
                  </p>
                </div>
              </div>
              <p>
                The English reading and writing test format is unchanged. The
                65/20 exemption still exists with 20 designated questions. For
                a full side-by-side comparison, see our{" "}
                <Link
                  href="/2025-test-changes"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  2025 test changes breakdown
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 7: How to Study Effectively           */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              How to Study Effectively
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                With 128 questions to learn, having a strategy matters more
                than studying longer. Here are the most effective approaches:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Use Spaced Repetition
              </h3>
              <p>
                Spaced repetition is a scientifically proven learning technique
                that shows you questions at increasing intervals based on how
                well you know them. Questions you struggle with appear more
                frequently, while mastered ones space out over days. This is
                the most efficient way to memorize all 128 questions. Our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  flashcard study tool
                </Link>{" "}
                uses this method automatically.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Take Practice Tests Regularly
              </h3>
              <p>
                Practice tests simulate the real interview experience with 20
                randomly selected questions. They help you build confidence,
                identify weak areas, and get comfortable with the oral format.
                We recommend taking at least 2 to 3 practice tests per week
                during your study period. Try our{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  free practice test
                </Link>{" "}
                to see how you would perform today.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Study in Categories
              </h3>
              <p>
                Rather than trying to learn all 128 questions at once, break
                them down by category. Start with American Government (the
                largest section), then move to American History, and finish
                with Symbols and Holidays. This creates natural checkpoints
                and makes the material feel more manageable.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Practice Saying Answers Out Loud
              </h3>
              <p>
                The civics test is oral, not written. Many people can recognize
                the correct answer when they see it but struggle to recall it
                from memory. Practice saying your answers out loud as if you
                were in the interview. This builds both recall and speaking
                confidence.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Know Your State-Specific Answers
              </h3>
              <p>
                Several questions require answers specific to your state of
                residence: your U.S. senators, your governor, and your state
                capital. Make sure you know these before your interview. You
                can look up your state-specific answers on our{" "}
                <Link
                  href="/#states"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  state-specific prep section
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 8: Interview Day Preparation          */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Interview Day Preparation
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Your naturalization interview is where everything comes
                together. Being well-prepared reduces stress and increases your
                chances of passing on the first try. Here is what to do.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                The Night Before
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Do a final review of questions you find most difficult
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Re-read your N-400 application to refresh your memory on
                    dates, addresses, and travel history
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Prepare all your documents (appointment notice, Green Card,
                    passport, photo ID)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Get a good night&apos;s sleep and set multiple alarms
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Day Of
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Arrive 15 to 30 minutes early at the USCIS office
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Dress in business casual attire (no strict dress code, but
                    professional appearance is advised)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Bring study materials to review while waiting in the lobby
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Stay calm and remember: you can miss up to 8 questions and
                    still pass
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                For a complete walkthrough of the entire interview process,
                read our{" "}
                <Link
                  href="/interview-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  interview day guide
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 9: FAQ                                */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl bg-slate-900/50 border border-slate-800/50 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:bg-slate-800/30 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-slate-400 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ============================================= */}
        {/* CTA Section                                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Start preparing for your citizenship test today
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our free study tools to master all 128 USCIS civics questions
              with flashcards, practice tests, and spaced repetition.
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
