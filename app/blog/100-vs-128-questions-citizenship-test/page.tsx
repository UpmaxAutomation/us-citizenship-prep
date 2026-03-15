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

const post = getBlogPost("100-vs-128-questions-citizenship-test")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function HundredVs128Page() {
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
            100 vs 128 Questions:{" "}
            <span className="text-blue-400">What Changed</span> on the
            Citizenship Test
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

        {/* Overview */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              What Changed in October 2025
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                In October 2025, USCIS rolled out a major update to the
                naturalization civics test. The total question pool grew from
                100 to 128 questions, the number of questions asked during the
                interview doubled, and several new topic areas were added.
              </p>
              <p>
                If you are studying for the citizenship test today, you must
                use the new 128-question format. Any study materials based on
                the old 100-question test are incomplete and could leave you
                unprepared for 28 questions that might appear on your interview.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">Question Pool</p>
                  <p className="text-slate-400 text-sm">100 &rarr; 128 questions</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">Questions Per Interview</p>
                  <p className="text-slate-400 text-sm">10 &rarr; 20 questions</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">Passing Score</p>
                  <p className="text-slate-400 text-sm">6/10 &rarr; 12/20 (still 60%)</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">65/20 Exemption</p>
                  <p className="text-slate-400 text-sm">Still available with 20 designated questions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Questions Added */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              28 New Questions: What Topics Were Added
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The 28 new questions expand the test into areas that were
                previously not covered or only lightly touched. Here are the
                main topics that were added:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">U.S. Geography:</strong>{" "}
                    Questions about borders, oceans, rivers, mountain ranges,
                    and territories. These were not on the old test at all.
                    Read our{" "}
                    <Link
                      href="/blog/how-to-answer-geography-questions"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      geography guide
                    </Link>{" "}
                    for study tips.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Recent American History:</strong>{" "}
                    New questions about events in the late 20th and early 21st
                    century, including September 11 and its aftermath.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Expanded Government Questions:
                    </strong>{" "}
                    Additional questions about the electoral process, checks and
                    balances, and the role of different government bodies.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Civic Participation:</strong>{" "}
                    New questions about how citizens can participate in democracy
                    beyond just voting.
                  </span>
                </li>
              </ul>
              <p>
                See the complete list of all questions, including every new
                addition, on our{" "}
                <Link
                  href="/questions"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  all 128 questions page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Questions Modified or Removed */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Questions That Were Modified
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Not all original questions remained exactly the same. Some were
                reworded for clarity, some had their accepted answers updated,
                and a few were restructured. For example:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Some questions that previously asked for multiple answers
                    now accept a single answer (and vice versa)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Questions about current officeholders were updated to
                    reflect the latest leaders
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Some historical questions were clarified with more precise
                    wording
                  </span>
                </li>
              </ul>
              <p>
                This is why using up-to-date study materials is essential. Our
                site reflects the current 2025 test format. For a detailed
                breakdown of every change, see our{" "}
                <Link
                  href="/2025-test-changes"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  2025 test changes page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* How This Affects Preparation */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              How This Affects Your Preparation
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The expanded test means you need to study more material, but the
                passing percentage stays the same. Here is what this means
                practically:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">More questions to learn:</strong>{" "}
                    You need to study 128 questions instead of 100. Plan for
                    an extra week of study time compared to the old test.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">Longer interview:</strong>{" "}
                    With 20 questions instead of 10, the civics portion takes
                    longer. Practice building stamina with full-length{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice tests
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">More room for error:</strong>{" "}
                    You can now miss up to 8 questions instead of 4. This
                    actually gives you a larger margin of error per question.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">Same difficulty level:</strong>{" "}
                    The individual questions are not harder. There are just
                    more of them.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Passing Score */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Does the Passing Score Change?
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                No. The passing threshold is still 60%. Under the old test, you
                needed 6 out of 10 correct. Under the new test, you need 12
                out of 20. The percentage is identical.
              </p>
              <p>
                The officer will stop asking questions as soon as you reach 12
                correct answers. This means if you answer the first 12
                questions correctly, you will not need to answer the remaining
                8. Learn more about scoring in our{" "}
                <Link
                  href="/blog/citizenship-test-passing-score"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  passing score guide
                </Link>
                .
              </p>
              <p>
                For 65/20 exemption applicants, the format also stays the same:
                20 designated questions with a reduced question pool. See our{" "}
                <Link
                  href="/senior-exemption"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  senior exemption guide
                </Link>{" "}
                for details.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Study the updated 128-question test
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Our study tools are fully updated for the 2025 test format. Start
              studying all 128 questions with free flashcards and practice tests.
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
                href="/2025-test-changes"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                2025 Test Changes
              </Link>
              <Link
                href="/questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                All 128 Questions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
