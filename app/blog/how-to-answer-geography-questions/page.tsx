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

const post = getBlogPost("how-to-answer-geography-questions")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function GeographyQuestionsPage() {
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
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
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
            <span className="text-xs text-slate-500">{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How to Answer{" "}
            <span className="text-blue-400">Geography Questions</span> on the
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

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Geography on the Citizenship Test
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Geography questions appear primarily in the Symbols, Geography,
                and Holidays section of the test (questions 110-128), but
                geographic knowledge also helps with history and government
                questions. The 2025 test update expanded this area, adding new
                questions about U.S. borders, territories, and landmarks.
              </p>
              <p>
                The good news is that geography questions tend to have
                straightforward, factual answers. There is no interpretation
                needed — you either know the answer or you do not. This makes
                them ideal for flashcard study. Review these topics using our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  study flashcards
                </Link>{" "}
                to lock them into memory.
              </p>
            </div>
          </div>
        </section>

        {/* Borders and Territories */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              U.S. Borders and Territories
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Several questions ask about the physical boundaries of the
                United States. Here are the facts you need:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Northern border:</strong>{" "}
                    Canada borders the U.S. to the north
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Southern border:</strong>{" "}
                    Mexico borders the U.S. to the south
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Oceans:</strong> The Atlantic
                    Ocean is on the east coast, the Pacific Ocean is on the west
                    coast
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">50 states:</strong> There are
                    50 states in the United States (Hawaii and Alaska are the
                    newest, both admitted in 1959)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">U.S. territories:</strong>{" "}
                    Puerto Rico, U.S. Virgin Islands, American Samoa, Guam, and
                    Northern Mariana Islands
                  </span>
                </li>
              </ul>

              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 mt-4">
                <p className="text-blue-300 text-sm font-medium">
                  Memory tip: Think of the U.S. as a sandwich — Canada on top,
                  Mexico on the bottom, Atlantic on the right (east), Pacific on
                  the left (west). If you face north on a map, this layout
                  becomes intuitive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rivers and Landmarks */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Rivers, Mountains, and Landmarks
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The test asks about major physical features of the United
                States. These are factual questions with specific answers:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">Longest river:</strong> The
                    Missouri River is the longest in the U.S. (the Mississippi
                    is the most well-known, and is also an accepted answer for
                    important rivers)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">Important rivers:</strong>{" "}
                    Mississippi, Missouri, Ohio, Colorado, and Rio Grande
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">Major mountain ranges:</strong>{" "}
                    Rocky Mountains (west), Appalachian Mountains (east), Sierra
                    Nevada (California)
                  </span>
                </li>
              </ul>
              <p>
                When studying rivers, remember you only need to name one. Do
                not stress about knowing all of them. Pick the ones easiest for
                you to remember and practice saying them aloud.
              </p>
            </div>
          </div>
        </section>

        {/* State-Specific Geography */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              State-Specific Geography
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Some geography-related questions require you to know facts
                about your specific state. The test may ask about your{" "}
                <Link
                  href="/questions/what-is-the-capital-of-your-state"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  state capital
                </Link>
                , which is a geography question that varies for every applicant.
              </p>
              <p>
                A common mistake is confusing the state capital with the largest
                city. For example, the capital of New York is Albany, not New
                York City. The capital of California is Sacramento, not Los
                Angeles. The capital of Illinois is Springfield, not Chicago.
              </p>
              <p>
                Use our{" "}
                <Link
                  href="/#states"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  state-specific information tool
                </Link>{" "}
                to look up the correct capital and other details for your
                state. You can also browse{" "}
                <Link
                  href="/questions"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  all 128 questions
                </Link>{" "}
                to see exactly which geography questions might appear.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Memory Tricks */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Quick Memory Tricks for Geography
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      &quot;A-P&quot; for oceans:
                    </strong>{" "}
                    Atlantic on the right side of the alphabet (east), Pacific
                    further along (west). Or: Atlantic starts with A, which
                    comes first — and the east coast was settled first.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      &quot;CaM&quot; for borders:
                    </strong>{" "}
                    Canada (top), Mexico (bottom). Canada is Cold (north),
                    Mexico is warm (south).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Rivers flow with the letters:
                    </strong>{" "}
                    Mississippi has many letters (it is a big, famous river).
                    Missouri is the longest (M for Most length).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Rocky = west, Appalachian = east:
                    </strong>{" "}
                    Rocky Mountains are rugged and tall (like the western
                    frontier). Appalachians are older and rounder (like the
                    long-established east coast).
                  </span>
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
                to see if these tricks help you recall answers quickly under
                test conditions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Learn U.S. geography the easy way
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use flashcards and practice tests to memorize borders, rivers,
              landmarks, and territories for the citizenship test.
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
                href="/blog/how-to-answer-symbols-holidays-questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Symbols &amp; Holidays Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
