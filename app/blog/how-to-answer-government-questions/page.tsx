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

const post = getBlogPost("how-to-answer-government-questions")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function GovernmentQuestionsPage() {
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
            <span className="text-blue-400">Government Questions</span> on the
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
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The American Government section is the largest part of the USCIS
                citizenship test. With 72 questions covering everything from the
                Constitution to state government, it accounts for roughly 56% of
                the entire 128-question pool. If you can master this section, you
                are well on your way to passing.
              </p>
              <p>
                The good news is that these questions follow predictable patterns.
                They test your understanding of how the U.S. government is
                structured, what the Constitution says, and how the democratic
                process works. This guide breaks the section into manageable
                topics and gives you strategies for remembering the answers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Three Branches */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Understanding the Three Branches of Government
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                A large number of government questions revolve around the three
                branches. The key is understanding what each branch does and who
                leads it. Here is a simple framework to organize your thinking:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-blue-300 mb-2">
                    Legislative Branch
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Makes laws. Consists of Congress (Senate + House of
                    Representatives). 100 senators, 435 representatives.
                  </p>
                </div>
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-amber-300 mb-2">
                    Executive Branch
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Enforces laws. Led by the President. Includes the Vice
                    President and the Cabinet.
                  </p>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-emerald-300 mb-2">
                    Judicial Branch
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Interprets laws. Led by the Supreme Court. Reviews whether
                    laws are constitutional.
                  </p>
                </div>
              </div>

              <p>
                When you encounter a question about who does what, think about
                which branch it belongs to. For example, the question about{" "}
                <Link
                  href="/questions/what-does-the-judicial-branch-do"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  what the judicial branch does
                </Link>{" "}
                becomes easy when you remember: judicial means judges, and
                judges interpret laws.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Numbers to Memorize
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">100 senators</strong> — 2
                    per state, 50 states
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">435 representatives</strong>{" "}
                    — based on state population
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">9 Supreme Court justices</strong>{" "}
                    — appointed for life
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">4-year presidential term</strong>{" "}
                    — maximum of 2 terms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">6-year senator term</strong>{" "}
                    — no term limits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">2-year representative term</strong>{" "}
                    — no term limits
                  </span>
                </li>
              </ul>
              <p>
                A helpful trick: senators serve 6 years (S-I-X has three letters,
                Senate has six). Representatives serve 2 years (the shortest
                term, because they are closest to the people).
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Constitution and Amendments */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The Constitution and Amendments
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The Constitution is the foundation of many government questions.
                You need to know what it is (the supreme law of the land), what
                it does (sets up the government and protects basic rights), and
                how it can be changed (through amendments).
              </p>
              <p>
                The test asks about specific amendments frequently. Rather than
                trying to memorize all 27, focus on the ones USCIS actually
                tests. Here are the amendments that appear most often:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                The Bill of Rights (Amendments 1-10)
              </h3>
              <p>
                The first 10 amendments are called the Bill of Rights. You do
                not need to know all 10 individually, but you should know that
                they protect individual freedoms. The{" "}
                <Link
                  href="/questions/what-is-the-bill-of-rights"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  Bill of Rights question
                </Link>{" "}
                is among the most commonly asked.
              </p>
              <p>
                The First Amendment is especially important. It protects five
                freedoms: speech, religion, press, assembly, and the right to
                petition the government. A simple way to remember these is the
                acronym SPRAP (Speech, Press, Religion, Assembly, Petition).
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Key Amendments Beyond the Bill of Rights
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">13th Amendment</strong> —
                    Abolished slavery (think: 13 is unlucky, slavery was a
                    terrible institution)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">14th Amendment</strong> —
                    Citizenship for all persons born in the U.S. and equal
                    protection under the law
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">15th Amendment</strong> —
                    Right to vote regardless of race
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">19th Amendment</strong> —
                    Gave women the right to vote (think: 1920, women&apos;s
                    suffrage)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">26th Amendment</strong> —
                    Lowered the voting age to 18
                  </span>
                </li>
              </ul>
              <p>
                Notice the pattern: amendments 13, 14, and 15 all came after the
                Civil War and expanded rights for formerly enslaved people. Group
                them together in your mind as the &quot;Reconstruction
                Amendments.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: State-Specific Questions */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              State-Specific Questions
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Several government questions require answers that depend on
                where you live. These are some of the easiest questions to get
                right if you prepare, and some of the most common to get wrong
                if you do not.
              </p>
              <p>
                You will be asked to name:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Your two U.S. senators
                    </strong>{" "}
                    — you need to know both names
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Your state governor
                    </strong>{" "}
                    — verify the current name before your interview
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Your state capital
                    </strong>{" "}
                    — remember, this is not always the largest city
                  </span>
                </li>
              </ul>
              <p>
                Look up your answers on our{" "}
                <Link
                  href="/#states"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  state-specific prep tool
                </Link>{" "}
                to make sure your information is current. Politicians change, so
                always verify close to your interview date.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Study Strategy */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Study Strategy for Government Questions
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                With 72 questions, the government section needs the most study
                time. Here is an efficient approach:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Break It Into Sub-Topics
              </h3>
              <p>
                Do not try to study all 72 questions at once. Break them into
                groups: Constitution and founding principles, branches of
                government, the legislative process, rights and
                responsibilities, and state and local government. Study one
                group per day using our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  flashcard study tool
                </Link>
                .
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Focus on Understanding, Not Just Memorization
              </h3>
              <p>
                Many government questions have a logical answer if you
                understand how the system works. For example, if you know that
                Congress makes laws and the President signs them, you can
                answer several questions about the legislative process without
                pure memorization.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Watch Out for Similar Questions
              </h3>
              <p>
                The test includes questions that sound alike but have different
                answers. For example, &quot;How many U.S. senators are
                there?&quot; (100) versus &quot;How many voting members are in
                the House of Representatives?&quot; (435). Pay close attention
                to the exact wording. Browse{" "}
                <Link
                  href="/questions"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  all 128 questions
                </Link>{" "}
                to see each question&apos;s precise wording and accepted
                answers.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Test Yourself Regularly
              </h3>
              <p>
                After studying a group of questions, immediately test yourself.
                Our{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  practice test
                </Link>{" "}
                pulls random questions from all categories, which helps you
                practice switching between topics quickly, just like in the real
                interview.
              </p>
            </div>
          </div>
        </section>

        {/* Key Concepts Quick Reference */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Key Concepts Quick Reference
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Here are the most important concepts to know for the government
                section. Refer back to this list as you study:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    The{" "}
                    <Link
                      href="/questions/form-of-government-of-the-united-states"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      form of government
                    </Link>{" "}
                    is a constitutional federal republic
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    The Constitution is the supreme law of the land
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    &quot;Rule of law&quot; means everyone must follow the law,
                    including leaders
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    &quot;Checks and balances&quot; prevents any one branch from
                    becoming too powerful
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    The Electoral College elects the President (not a direct
                    popular vote)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Federal laws apply to everyone; state laws vary by state
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Master all 72 government questions
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our free flashcards and practice tests to study the American
              Government section with spaced repetition.
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
                href="/blog/how-to-answer-history-questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                History Questions Guide
              </Link>
              <Link
                href="/blog/citizenship-test-passing-score"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Passing Score Explained
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
