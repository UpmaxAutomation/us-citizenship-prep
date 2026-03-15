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

const post = getBlogPost("how-to-answer-rights-responsibilities-questions")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function RightsResponsibilitiesPage() {
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
            <span className="text-blue-400">Rights &amp; Responsibilities</span>{" "}
            Questions
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
                Understanding your rights and responsibilities as a U.S. citizen
                is not just important for the test — it is the foundation of
                what citizenship means. The USCIS test includes questions about
                the Bill of Rights, voting, civic duties, and the differences
                between rights that belong to everyone and rights reserved for
                citizens.
              </p>
              <p>
                These questions appear in the American Government section
                (questions 1-72) and are among the most frequently tested topics.
                The key to answering them correctly is understanding the
                distinction between rights (what you are entitled to) and
                responsibilities (what you are expected to do).
              </p>
            </div>
          </div>
        </section>

        {/* Bill of Rights */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The Bill of Rights: Your Foundation
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The{" "}
                <Link
                  href="/questions/what-is-the-bill-of-rights"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  Bill of Rights
                </Link>{" "}
                is the first 10 amendments to the Constitution. It was added in
                1791 to protect individual freedoms that the original
                Constitution did not explicitly guarantee.
              </p>
              <p>
                You do not need to memorize all 10 amendments, but you should
                know the most commonly tested ones:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                First Amendment — Five Freedoms
              </h3>
              <p>
                The First Amendment is the most tested amendment on the entire
                exam. It protects five freedoms:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Freedom of speech</strong> — you can express your opinions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Freedom of religion</strong> — you can practice any religion or none</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Freedom of the press</strong> — the media can report freely</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Freedom of assembly</strong> — you can gather peacefully</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span><strong className="text-white">Right to petition</strong> — you can ask the government to make changes</span>
                </li>
              </ul>
              <p>
                The question only asks you to name one right, so pick the one
                easiest for you to remember. Most people find &quot;freedom of
                speech&quot; the simplest to recall.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Second Amendment — Right to Bear Arms
              </h3>
              <p>
                Protects the right to own firearms. This is a straightforward
                question when it appears.
              </p>
            </div>
          </div>
        </section>

        {/* Citizen vs. Resident Rights */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Citizen Rights vs. Rights for Everyone
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The test distinguishes between rights that belong to all people
                living in the U.S. and rights reserved for citizens only. This
                distinction is a common source of confusion.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-blue-300 mb-3">
                    Rights for Everyone in the U.S.
                  </h3>
                  <ul className="space-y-1.5 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Freedom of expression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Freedom of worship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Right to bear arms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Right to a fair trial</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-emerald-300 mb-3">
                    Rights Only for Citizens
                  </h3>
                  <ul className="space-y-1.5 text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Vote in federal elections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Run for federal office</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Carry a U.S. passport</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Petition to bring family to the U.S.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                The simplest way to remember: voting and running for office are
                the big citizen-only rights. Everything in the Bill of Rights
                applies to everyone living in the U.S., regardless of
                citizenship status.
              </p>
            </div>
          </div>
        </section>

        {/* Civic Responsibilities */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Civic Responsibilities of U.S. Citizens
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The test asks about both your rights and your responsibilities.
                Responsibilities are things citizens are expected or required to
                do. Some are legal requirements, while others are civic duties.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Required by Law
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Serve on a jury</strong> —
                    when called, you must participate in the legal process
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Pay federal and state taxes</strong>{" "}
                    — by April 15 each year
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Register for Selective Service</strong>{" "}
                    — required for men ages 18-25
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">Obey the law</strong> —
                    federal, state, and local laws
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Civic Duties (Not Legally Required but Expected)
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Vote in elections</strong> —
                    while not legally required, voting is considered one of the
                    most important civic responsibilities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Stay informed</strong> —
                    follow community issues and government actions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Participate in your community</strong>{" "}
                    — volunteer, help neighbors, be engaged
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Respect others&apos; rights</strong>{" "}
                    — tolerance and respect for all people
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Confusing rights with responsibilities:
                    </strong>{" "}
                    Voting is a right (you can do it) and also a responsibility
                    (you should do it). The test may ask about either. Listen
                    carefully to whether the question says &quot;right&quot; or
                    &quot;responsibility.&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Mixing up who has which rights:
                    </strong>{" "}
                    Remember that First Amendment rights apply to everyone, but
                    voting in federal elections is for citizens only.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Overthinking the answers:
                    </strong>{" "}
                    Many of these questions accept multiple answers. For
                    &quot;Name one right only for citizens,&quot; any single
                    correct answer from the accepted list works. Use our{" "}
                    <Link
                      href="/questions"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      questions page
                    </Link>{" "}
                    to see all accepted answers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Forgetting the voting age:
                    </strong>{" "}
                    The 26th Amendment set the voting age at 18. This is
                    frequently tested.
                  </span>
                </li>
              </ul>
              <p>
                The best way to avoid mistakes is practice. Take our{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  practice test
                </Link>{" "}
                and pay attention to how rights and responsibilities questions
                are worded. Study with{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  flashcards
                </Link>{" "}
                to reinforce the distinctions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Know your rights and responsibilities
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Practice answering rights and responsibilities questions with
              flashcards and realistic test simulations.
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
