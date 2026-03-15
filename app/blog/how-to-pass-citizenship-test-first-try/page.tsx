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

const post = getBlogPost("how-to-pass-citizenship-test-first-try")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

export default function HowToPassPage() {
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
            How to Pass the US Citizenship Test{" "}
            <span className="text-blue-400">on Your First Try</span>
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
        {/* Section 1: Understanding the Test Format      */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              1. Understand the Test Format
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Before you start studying, make sure you understand exactly what
                you are preparing for. The USCIS citizenship test has two main
                components: the civics test and the English test.
              </p>
              <p>
                The civics test is oral. A USCIS officer asks you up to 20
                questions from a pool of 128, and you answer verbally. You need
                12 correct answers to pass. The officer stops asking once you
                hit 12.
              </p>
              <p>
                The English test evaluates your reading, writing, and speaking
                ability. You read 1 out of 3 sentences aloud, write 1 out of 3
                dictated sentences, and your speaking is evaluated throughout
                the entire interview.
              </p>
              <p>
                Knowing this format is critical because it shapes how you should
                study. You need to practice recalling answers from memory (not
                recognizing them from a list), and you need to practice speaking
                your answers out loud.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 2: Start with the Right Materials     */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              2. Start with the Right Study Materials
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The most common mistake applicants make is using outdated study
                materials. Before October 2025, the test had only 100
                questions. The current test has 128. If your study guide does
                not include all 128 questions, you are missing 28 questions
                that could appear on your interview.
              </p>
              <p>
                Start with the official USCIS question list. Our{" "}
                <Link
                  href="/questions"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  complete list of all 128 questions
                </Link>{" "}
                includes every question with all accepted answers, organized by
                category. This should be your primary reference.
              </p>
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 mt-2">
                <p className="text-blue-300 text-sm font-medium">
                  Tip: Bookmark the questions page and review it regularly. Some
                  questions have multiple acceptable answers, and knowing all of
                  them gives you more flexibility during the interview.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 3: Use Spaced Repetition              */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              3. Use Spaced Repetition
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Spaced repetition is the single most effective technique for
                memorizing a large number of facts. Instead of reviewing all 128
                questions equally, you focus more time on the questions you find
                difficult and less time on ones you already know.
              </p>
              <p>
                Here is how it works: after you study a question, you rate how
                well you knew the answer. Questions you got wrong or found
                difficult come back sooner. Questions you answered easily come
                back after longer intervals (days or even weeks). Over time, this
                ensures that every question moves into your long-term memory.
              </p>
              <p>
                Our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  flashcard study tool
                </Link>{" "}
                uses spaced repetition automatically. It tracks your progress
                across sessions and prioritizes the questions you need to
                review most. Even 20 to 30 minutes per day with this method is
                more effective than hours of passive reading.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 4: Focus on Weak Areas                */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              4. Focus on Your Weak Areas
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                After your first pass through all 128 questions, you will
                notice patterns. Some categories are easier than others. Some
                questions trip you up consistently. This is normal and expected.
              </p>
              <p>
                Common trouble spots include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Questions with multiple answers:
                    </strong>{" "}
                    Some questions accept several possible answers (e.g.,
                    &quot;Name one right in the First Amendment&quot;). Make sure
                    you can recall at least one.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Questions with changing answers:
                    </strong>{" "}
                    Your U.S. senators, governor, Speaker of the House, and
                    other officials can change. Verify current answers before
                    your interview.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Similar-sounding questions:
                    </strong>{" "}
                    Several questions ask about related but different topics
                    (e.g., the number of senators vs. representatives). Pay
                    attention to exact wording.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      History dates and names:
                    </strong>{" "}
                    Memorizing specific years and historical figures takes
                    repetition. Group related facts together (e.g., all
                    Founding Fathers, all wars in chronological order).
                  </span>
                </li>
              </ul>
              <p>
                Spend extra study sessions on these areas. You do not need to
                get every question right — you just need 12 out of 20.
                But the more comfortable you are with difficult questions, the
                more confident you will feel during the interview.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 5: Take Practice Tests Regularly      */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              5. Take Practice Tests Regularly
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Practice tests are the closest thing to the real interview
                experience. They pull 20 random questions from the 128-question
                pool and test you under realistic conditions. Taking them
                regularly helps you in several ways:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    You build stamina for a 20-question session
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    You identify which questions you consistently miss
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    You reduce test anxiety by making the format familiar
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    You can track your improvement over time
                  </span>
                </li>
              </ul>
              <p>
                Aim for at least 2 to 3 practice tests per week. When you
                consistently score 16 or higher out of 20, you are likely
                ready for the real test.
              </p>
              <p>
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Take a free practice test now &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 6: Prepare for the English Portion    */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              6. Prepare for the English Portion
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Many applicants focus entirely on the civics questions and
                neglect the English reading and writing test. Do not make this
                mistake. Even though the English test is generally considered
                easier, failing it means you fail the interview and must
                reschedule.
              </p>
              <p>
                The reading and writing sentences use vocabulary from official
                USCIS word lists. These lists contain civics-related words
                (president, Congress, America) and everyday words (people, come,
                here). The sentences are short and straightforward, but you
                need to be comfortable reading them aloud and writing them from
                dictation.
              </p>
              <p>
                Practice with the actual vocabulary words. Read them aloud to
                build fluency. Write them repeatedly to build muscle memory.
                Our{" "}
                <Link
                  href="/reading-writing"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  reading and writing practice tool
                </Link>{" "}
                uses the official USCIS vocabulary lists so you practice with
                exactly the words that appear on the test.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 7: Know Your State-Specific Answers   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              7. Know Your State-Specific Answers
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Several civics questions have answers that depend on where you
                live. You will be asked about officials and facts specific to
                your state of residence. These include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Your two U.S. senators
                    </strong>{" "}
                    — know both names
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Your governor</strong> —
                    know your current state governor&apos;s name
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Your state capital
                    </strong>{" "}
                    — not the largest city, the capital
                  </span>
                </li>
              </ul>
              <p>
                Look up your state-specific answers well before your interview
                to make sure they are current. Use our{" "}
                <Link
                  href="/#states"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  state-specific prep tool
                </Link>{" "}
                to find the correct answers for your state.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 8: Interview Day Tips                 */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              8. Interview Day Tips
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Everything you have studied comes down to this day. Here are
                practical tips from people who passed on their first try:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">Arrive early.</strong> 15 to
                    30 minutes before your appointment. Expect to wait.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Bring all documents.
                    </strong>{" "}
                    Appointment notice, Green Card, passport, and any documents
                    USCIS specifically requested.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Speak clearly and calmly.
                    </strong>{" "}
                    Take a breath before answering. It is okay to pause briefly
                    to think.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Ask for a repeat if needed.
                    </strong>{" "}
                    You are allowed to ask the officer to repeat any question.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Do not overthink it.
                    </strong>{" "}
                    Give the first correct answer that comes to mind. You do
                    not need to provide all possible answers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Be honest on the N-400 review.
                    </strong>{" "}
                    The officer will go through your application. Answer
                    truthfully. Inconsistencies can lead to denial.
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                Read our full{" "}
                <Link
                  href="/interview-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  interview guide
                </Link>{" "}
                for a complete walkthrough of the interview process, timeline,
                and possible outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 9: What If You Don't Pass?            */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              9. What If You Don&apos;t Pass?
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                First, do not panic. Failing the citizenship test does not mean
                your application is immediately denied. USCIS gives you a
                second chance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    You are automatically scheduled for a retest within 60 to
                    90 days
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    You only retake the portion you failed (civics, English, or
                    both)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    The retest uses new randomly-selected questions — not the
                    same ones from your first attempt
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>
                    If you fail the retest, your N-400 is denied. However, you
                    can reapply by filing a new N-400 application
                  </span>
                </li>
              </ul>
              <p>
                The best way to avoid a retest is thorough preparation. Use the
                60 to 90 day window between attempts to intensify your study.
                Focus specifically on the areas that caused difficulty during
                your first interview.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* CTA Section                                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to start preparing?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Use our free study tools to master all 128 USCIS civics questions
              and feel confident walking into your interview.
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
