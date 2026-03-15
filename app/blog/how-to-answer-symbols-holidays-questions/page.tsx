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

const post = getBlogPost("how-to-answer-symbols-holidays-questions")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function SymbolsHolidaysPage() {
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
            How to Answer{" "}
            <span className="text-blue-400">Symbols &amp; Holidays</span>{" "}
            Questions on the Test
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
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The Smallest Section With Easy Points
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The Symbols, Geography, and Holidays section is the smallest
                category on the citizenship test, covering questions 110 through
                128. While there are fewer questions here, they still appear on
                the test and represent some of the easiest points you can earn.
              </p>
              <p>
                Most of these questions have short, factual answers that are
                easy to memorize once you learn them. Spending a few study
                sessions on this section can give you a reliable boost to your
                score. Review them with our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  flashcard tool
                </Link>{" "}
                to commit them to memory.
              </p>
            </div>
          </div>
        </section>

        {/* The American Flag */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The American Flag
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The flag is one of the most commonly tested symbols. You should
                know these key facts:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">13 stripes</strong> —
                    represent the 13 original colonies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">50 stars</strong> —
                    represent the 50 states today
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Colors:</strong> Red, white,
                    and blue
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Red stripes</strong>{" "}
                    represent hardiness and valor;{" "}
                    <strong className="text-white">white</strong> represents
                    purity and innocence;{" "}
                    <strong className="text-white">blue</strong> represents
                    vigilance, perseverance, and justice
                  </span>
                </li>
              </ul>

              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 mt-4">
                <p className="text-blue-300 text-sm font-medium">
                  Memory tip: 13 stripes for 13 colonies. 50 stars for 50
                  states. The stripes never change (history is fixed), but the
                  stars grew as new states joined (the country expanded).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* National Symbols */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              National Symbols and the Anthem
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Beyond the flag, the test asks about other national symbols that
                represent America:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                The Statue of Liberty
              </h3>
              <p>
                Located in New York Harbor, the Statue of Liberty represents
                freedom. It was a gift from France in 1886. The test may ask
                where it is located or what it represents. Answer:{" "}
                <Link
                  href="/questions/where-is-the-statue-of-liberty"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  New York Harbor (Liberty Island)
                </Link>
                .
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                The National Anthem
              </h3>
              <p>
                &quot;The Star-Spangled Banner&quot; is the national anthem.
                Written by Francis Scott Key during the War of 1812, it was
                inspired by the American flag still flying after a British
                bombardment at Fort McHenry in Baltimore.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                The Bald Eagle
              </h3>
              <p>
                The bald eagle is the national bird of the United States. It
                appears on the Great Seal, on currency, and on many government
                documents. It symbolizes strength and freedom.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Other Symbols to Know
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    The motto of the United States is &quot;In God We Trust&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    The Pledge of Allegiance shows loyalty to the flag and the
                    nation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* National Holidays */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              National Holidays and Their Meanings
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The test asks about national holidays, either by date or by
                meaning. Here are the holidays you should know:
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-medium text-blue-300 w-32">January (3rd Mon)</span>
                  <span><strong className="text-white">Martin Luther King Jr. Day</strong> — honors the civil rights leader</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-medium text-blue-300 w-32">February (3rd Mon)</span>
                  <span><strong className="text-white">Presidents&apos; Day</strong> — honors U.S. presidents, especially Washington and Lincoln</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-medium text-blue-300 w-32">Last Mon in May</span>
                  <span><strong className="text-white">Memorial Day</strong> — honors those who died in military service</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-medium text-blue-300 w-32">July 4</span>
                  <span><strong className="text-white">Independence Day</strong> — celebrates the Declaration of Independence (1776)</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-medium text-blue-300 w-32">1st Mon in Sept</span>
                  <span><strong className="text-white">Labor Day</strong> — honors American workers</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-medium text-blue-300 w-32">November 11</span>
                  <span><strong className="text-white">Veterans Day</strong> — honors all military veterans</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-medium text-blue-300 w-32">4th Thu in Nov</span>
                  <span><strong className="text-white">Thanksgiving</strong> — giving thanks, historically tied to the Pilgrims</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-800/30 rounded-xl p-4">
                  <span className="flex-shrink-0 text-sm font-medium text-blue-300 w-32">December 25</span>
                  <span><strong className="text-white">Christmas</strong> — federal holiday observed nationwide</span>
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 mt-4">
                <p className="text-emerald-300 text-sm font-medium">
                  Common confusion: Memorial Day honors those who died in
                  service. Veterans Day honors all who served (living and
                  deceased). This distinction appears on the test.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Quick Study Checklist
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Before your test, make sure you can answer these from memory:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>How many stripes on the flag? What do they represent?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>How many stars on the flag? What do they represent?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>What is the name of the national anthem?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Where is the Statue of Liberty?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>When do we celebrate Independence Day?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Name two national holidays.</span>
                </li>
              </ul>
              <p>
                Test yourself with a{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  practice test
                </Link>{" "}
                or browse{" "}
                <Link
                  href="/questions"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  all 128 questions
                </Link>{" "}
                to see the exact wording USCIS uses.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Lock in the easy points
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Symbols and holidays questions are among the easiest to memorize.
              Study them with flashcards and secure these points for your test.
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
                href="/blog/how-to-answer-geography-questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Geography Questions Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
