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

const post = getBlogPost("how-to-answer-history-questions")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function HistoryQuestionsPage() {
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
            How to Answer{" "}
            <span className="text-blue-400">History Questions</span> on the
            Citizenship Test
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

        {/* Introduction */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The History Section at a Glance
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The American History section contains 46 questions spanning
                more than 400 years of events, from the colonial period through
                modern times. These questions test your knowledge of key people,
                dates, wars, and movements that shaped the United States.
              </p>
              <p>
                While 46 questions may sound like a lot, the history section
                becomes manageable when you organize it chronologically. Most
                questions cluster around a few major eras, and understanding the
                story of each era helps you remember individual facts naturally.
              </p>
              <p>
                Browse the complete list of history questions on our{" "}
                <Link
                  href="/questions"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  all 128 questions page
                </Link>{" "}
                to see exactly what USCIS asks.
              </p>
            </div>
          </div>
        </section>

        {/* Colonial Period */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Colonial Period and the American Revolution
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                This is the starting point of American history on the test. You
                need to know why colonists came to America, who the key figures
                were, and what led to independence.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Key Facts to Remember
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Colonists came for religious freedom, political liberty, and
                    economic opportunity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    There were 13 original colonies along the eastern coast
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    The{" "}
                    <Link
                      href="/questions/what-did-the-declaration-of-independence-do"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      Declaration of Independence
                    </Link>{" "}
                    was adopted on July 4, 1776 — it declared freedom from
                    Britain
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Thomas Jefferson wrote the Declaration of Independence
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    Benjamin Franklin is known as a diplomat, inventor, and
                    Founding Father
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    George Washington was both the first President and the
                    &quot;Father of Our Country&quot;
                  </span>
                </li>
              </ul>

              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 mt-4">
                <p className="text-amber-300 text-sm font-medium">
                  Memory tip: Think of the colonial era as a story — people came
                  seeking freedom, built colonies, disagreed with British
                  taxation, declared independence, fought a war, and created a
                  new nation. Each question fits into a chapter of this story.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1800s and Civil War */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The 1800s and the Civil War
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The 19th century questions focus heavily on the Civil War, which
                is one of the most tested topics in the history section. You
                should understand why the war happened, who the key leaders
                were, and what changed as a result.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Civil War Essentials
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    The war was fought over slavery and states&apos; rights
                    (1861-1865)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Abraham Lincoln was President during the Civil War
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    The Emancipation Proclamation freed enslaved people in
                    Confederate states
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    The 13th Amendment abolished slavery permanently
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Other 1800s Topics
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Westward expansion and the Louisiana Purchase (1803) —
                    doubled the size of the U.S.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    The{" "}
                    <Link
                      href="/questions/what-territory-did-the-united-states-buy-from-france-in-1803"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      Louisiana Territory question
                    </Link>{" "}
                    appears regularly on the test
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Susan B. Anthony fought for women&apos;s rights, especially
                    the right to vote
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 20th Century and Modern History */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              20th Century and Modern History
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The 20th century section covers major wars, social movements,
                and events that shaped modern America. The 2025 test update
                added several new questions about recent history, making this
                era more important than ever.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                World Wars and the Cold War
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    World War I (1914-1918) — the U.S. entered in 1917
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    World War II (1939-1945) — the U.S. fought against Germany,
                    Italy, and Japan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Eisenhower was a WWII general who later became President
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    The Cold War was a conflict between the U.S. and the Soviet
                    Union (communism vs. democracy)
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Civil Rights and Modern Events
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Martin Luther King Jr. fought for civil rights and equality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    The September 11, 2001 attacks led to the War on Terror
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    The 2025 test added questions about recent events and
                    movements — check our{" "}
                    <Link
                      href="/2025-test-changes"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      2025 test changes page
                    </Link>{" "}
                    for details
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Memory Tips */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Memory Tips for History Questions
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                History is easier to remember when you create connections
                between facts. Here are proven techniques:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Build a Mental Timeline
              </h3>
              <p>
                Arrange events in chronological order in your mind. Colonial era
                (1600s-1700s), Revolution (1770s), Constitution (1787), Civil
                War (1860s), World Wars (1914-1945), Civil Rights (1950s-60s),
                Modern era (2000s). When a question asks about an event, place
                it on your timeline first.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Group Related Facts Together
              </h3>
              <p>
                Instead of memorizing isolated facts, group them. All Founding
                Fathers together. All wars together. All amendments together.
                When you study one item in a group, quickly review the others.
                Our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  study flashcards
                </Link>{" "}
                are already organized by category to help with this approach.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Create Simple Associations
              </h3>
              <p>
                Link a person to their most famous action. Jefferson wrote the
                Declaration. Lincoln freed the enslaved. Martin Luther King Jr.
                led civil rights. Washington was first. These one-line
                associations are often enough to answer the question correctly.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Practice with the Real Format
              </h3>
              <p>
                Remember that the test is oral. Practice saying answers out
                loud, not just reading them. Take{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  practice tests
                </Link>{" "}
                to simulate the experience of hearing a question and producing
                an answer from memory.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Study the history section with confidence
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our free tools to master all 46 American History questions
              through flashcards and realistic practice tests.
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
                href="/blog/how-to-answer-government-questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Government Questions Guide
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
