import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata } from "@/app/lib/metadata";
import { generateBreadcrumbSchema, generateSpeakableSchema } from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";
import AdUnit from "@/app/components/AdUnit";
import { blogPosts } from "@/app/data/blog-posts";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Citizenship Test Tips & Study Guides",
  description:
    "Expert tips, study strategies, and guides for the 2025 USCIS citizenship test. Learn how to prepare for your naturalization interview.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ]);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/blog`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
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
              <span className="text-slate-300">Blog</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Blog — Citizenship Test Tips{" "}
            <span className="text-blue-400">& Guides</span>
          </h1>
          <p
            data-speakable="true"
            className="mt-4 text-slate-400 text-lg leading-relaxed max-w-3xl"
          >
            Expert tips, study strategies, and in-depth guides to help you
            prepare for and pass the 2025 USCIS citizenship test. Whether you
            are just starting out or looking for last-minute advice, our
            articles cover everything you need to know.
          </p>
        </header>

        {/* Blog Post Grid */}
        <section className="max-w-4xl mx-auto px-4 mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">
                    {post.readingTime} min read
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors leading-snug mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <time
                    dateTime={post.publishedAt}
                    className="text-xs text-slate-500"
                  >
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-1">
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <AdUnit slot="auto" format="horizontal" className="max-w-4xl mx-auto px-4 my-8" />

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to start studying?
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
          </div>
        </section>
      </div>
    </>
  );
}
