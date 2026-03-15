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

const post = getBlogPost("2008-vs-2025-citizenship-test")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function Test2008vs2025Page() {
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
            2008 vs 2025 Citizenship Test:{" "}
            <span className="text-blue-400">Complete Comparison</span>
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

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The 2008 version of the USCIS citizenship test was used for 17
                years before being replaced in October 2025. During that time,
                millions of immigrants studied the same 100 questions to become
                U.S. citizens. The 2025 update brought significant changes to
                the content, format, and scope of the test.
              </p>
              <p>
                This comparison explains exactly what changed, what stayed the
                same, and what you need to know if you are studying for the
                current test. If you studied using older materials, this article
                will help you identify the gaps you need to fill.
              </p>
            </div>
          </div>
        </section>

        {/* Format Comparison */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Format Comparison: Side by Side
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Feature</th>
                      <th className="text-left py-3 px-4 text-slate-400 font-semibold">2008 Test</th>
                      <th className="text-left py-3 pl-4 text-blue-300 font-semibold">2025 Test</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400">
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4 text-white">Total question pool</td>
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 pl-4 text-blue-300">128</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4 text-white">Questions asked</td>
                      <td className="py-3 px-4">Up to 10</td>
                      <td className="py-3 pl-4 text-blue-300">Up to 20</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4 text-white">Passing score</td>
                      <td className="py-3 px-4">6/10 (60%)</td>
                      <td className="py-3 pl-4 text-blue-300">12/20 (60%)</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4 text-white">Test format</td>
                      <td className="py-3 px-4">Oral</td>
                      <td className="py-3 pl-4 text-blue-300">Oral (unchanged)</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4 text-white">Geography questions</td>
                      <td className="py-3 px-4">Very few</td>
                      <td className="py-3 pl-4 text-blue-300">Expanded section</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4 text-white">Recent history</td>
                      <td className="py-3 px-4">Limited</td>
                      <td className="py-3 pl-4 text-blue-300">Expanded to post-2000</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4 text-white">English test</td>
                      <td className="py-3 px-4">Reading + Writing</td>
                      <td className="py-3 pl-4 text-blue-300">Reading + Writing (unchanged)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white">65/20 exemption</td>
                      <td className="py-3 px-4">20 designated questions</td>
                      <td className="py-3 pl-4 text-blue-300">20 designated questions (updated)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Content Differences */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Major Content Differences
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                While many questions from the 2008 test carried over, the 2025
                version introduced substantial new content:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Added in 2025
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Dedicated geography section with questions about borders, oceans, rivers, and mountain ranges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Questions about U.S. territories (Puerto Rico, Guam, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Recent history questions covering events after 2000</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Additional questions on civic participation and community involvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>More questions on the electoral process and how government functions</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Stayed the Same
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Core government questions (three branches, Constitution, Bill of Rights)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Foundational history (colonial period, Revolution, Civil War)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>National symbols (flag, anthem, Statue of Liberty)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>English reading and writing test format</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why USCIS Updated */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Why USCIS Updated the Test
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                USCIS stated several reasons for the update:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Modernization:</strong> The
                    2008 test was nearly two decades old and did not reflect
                    recent American history or current civic standards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Comprehensiveness:</strong>{" "}
                    The old test lacked geography and had limited coverage of
                    certain civics topics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Better assessment:</strong>{" "}
                    Asking 20 questions instead of 10 provides a more reliable
                    measure of an applicant&apos;s knowledge
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Alignment with standards:
                    </strong>{" "}
                    The update aligns the test with current educational
                    standards for civics knowledge
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Study */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              How to Study for the 2025 Test
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                If you previously studied the 2008 test, you already have a
                strong foundation. Focus your additional study time on the new
                content areas: geography, recent history, and expanded
                government topics.
              </p>
              <p>
                If you are starting fresh, use materials designed for the 2025
                test from the beginning. Our{" "}
                <Link
                  href="/study"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  flashcard study tool
                </Link>{" "}
                includes all 128 questions with spaced repetition. Our{" "}
                <Link
                  href="/practice-test"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  practice tests
                </Link>{" "}
                simulate the real 20-question format.
              </p>
              <p>
                For a complete breakdown of every change, visit our dedicated{" "}
                <Link
                  href="/2025-test-changes"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  2025 test changes page
                </Link>
                . For a structured study approach, follow our{" "}
                <Link
                  href="/blog/citizenship-test-study-plan"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  4-week study plan
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Prepare for the current test format
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              All our study tools are updated for the 2025 test. Study all 128
              questions with flashcards, practice tests, and spaced repetition.
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
              <Link
                href="/blog/100-vs-128-questions-citizenship-test"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                100 vs 128 Questions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
