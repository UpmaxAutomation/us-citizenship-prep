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

const post = getBlogPost("citizenship-test-passing-score")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function PassingScorePage() {
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
            <li><Link href="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li><span className="text-slate-300 line-clamp-1">{post.title}</span></li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
              {post.category}
            </span>
            <span className="text-xs text-slate-500">{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Citizenship Test Passing Score:{" "}
            <span className="text-blue-400">How Many Do You Need?</span>
          </h1>
          <p data-speakable="true" className="mt-4 text-slate-400 text-lg leading-relaxed">
            {post.description}
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
            <time dateTime={post.publishedAt}>
              Published{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <span aria-hidden="true">|</span>
            <time dateTime={post.updatedAt}>
              Updated{" "}
              {new Date(post.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </div>
        </header>

        {/* How Scoring Works */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              How the Scoring Works
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The USCIS civics test uses a simple pass/fail system. A USCIS
                officer asks you up to 20 questions from the 128-question pool.
                You need to answer at least 12 correctly. That is a 60% passing
                rate.
              </p>
              <p>
                Here is the important detail: the officer stops asking questions
                as soon as you reach 12 correct answers. If you get the first
                12 right, you pass immediately and do not answer the remaining
                8 questions. If you get some wrong along the way, the officer
                continues until you either hit 12 correct or exhaust all 20
                questions.
              </p>
              <p>
                This means you can get up to 8 questions wrong and still pass.
                That is a generous margin of error. With solid preparation, most
                applicants pass comfortably.
              </p>
            </div>
          </div>
        </section>

        {/* What Happens If You Fail */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              What Happens If You Fail
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Failing the civics test on your first attempt does not end your
                citizenship journey. USCIS gives every applicant one retake
                opportunity:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Automatic reschedule:</strong>{" "}
                    You will be scheduled for a second interview within 60 to 90
                    days
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Only retake what you failed:</strong>{" "}
                    If you passed the English test but failed civics, you only
                    retake the civics portion (and vice versa)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">New random questions:</strong>{" "}
                    The retake uses a different set of 20 randomly selected
                    questions, not the same ones from your first attempt
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Second failure:</strong> If
                    you fail the retake, your N-400 application is denied. You
                    can file a new N-400 and start the process again, but this
                    means additional fees and waiting time
                  </span>
                </li>
              </ul>
              <p>
                The best strategy is thorough preparation before your first
                attempt. Read our{" "}
                <Link
                  href="/blog/how-to-pass-citizenship-test-first-try"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  guide to passing on your first try
                </Link>{" "}
                for detailed strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Strategies */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Strategies to Maximize Your Score
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                While you only need 12 out of 20, aiming higher gives you a
                safety net. Here are proven strategies:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Study All 128 Questions
              </h3>
              <p>
                Do not try to gamble on which questions will appear. Study all
                128 questions using our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  flashcard study tool
                </Link>{" "}
                with spaced repetition. This ensures you are prepared for any
                combination of questions.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Take Practice Tests Until You Score 16+
              </h3>
              <p>
                Once you consistently score 16 out of 20 or higher on{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  practice tests
                </Link>
                , you have a comfortable buffer above the passing threshold.
                This accounts for the added nervousness you might feel during
                the real interview.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Practice the Oral Format
              </h3>
              <p>
                The test is spoken, not written. Practice saying your answers
                out loud. Many people know the answer when they see it written
                but struggle to recall it verbally under pressure.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Know Your State Answers
              </h3>
              <p>
                Questions about your senators, governor, and state capital are
                guaranteed correct if you prepare them. Look them up on our{" "}
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

        {/* Pass Rates */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Historical Pass Rates
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The overall pass rate for the USCIS citizenship test has
                historically been around 91%. This means the vast majority of
                applicants who take the test pass it. The 2025 test is newer,
                so comprehensive pass rate data is still being collected, but
                initial reports suggest similar pass rates.
              </p>
              <p>
                Applicants who used structured study plans and took practice
                tests reported the highest confidence levels and pass rates.
                The test is designed to be passable with reasonable preparation
                — it is not meant to trick you.
              </p>
            </div>
          </div>
        </section>

        {/* 65/20 Exemption Scoring */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              65/20 Exemption Scoring
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
                (aged 65 or older with 20+ years as a permanent resident), the
                test format is different:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Only 20 designated questions in the pool (instead of 128)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>The officer asks up to 10 questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>You need 6 correct answers (still 60%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>You may take the test in your native language with an interpreter</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Aim higher than the minimum
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Study all 128 questions and practice until you consistently score
              16 or higher. Give yourself a comfortable margin on test day.
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
                href="/blog/how-to-pass-citizenship-test-first-try"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                How to Pass First Try
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
