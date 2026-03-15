import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";
import { getBlogPost } from "@/app/data/blog-posts";
import AuthorAttribution from "@/app/components/AuthorAttribution";

const post = getBlogPost("citizenship-test-tips-non-english-speakers")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

const faqs = [
  {
    question: "Can I take the citizenship test in my native language?",
    answer:
      "Only if you qualify for the 65/20 exemption (aged 65 or older with 20 or more years as a permanent resident) or the 50/20 exemption (aged 50 or older with 20 or more years as a permanent resident). These applicants can take the civics test in their native language and bring an interpreter. All other applicants must take the test in English.",
  },
  {
    question: "How good does my English need to be to pass?",
    answer:
      "USCIS tests for basic English ability, not fluency. You need to read 1 simple sentence aloud, write 1 simple dictated sentence, and demonstrate basic conversational ability during the interview. The vocabulary used is from the official USCIS word lists, which contain common civics-related words.",
  },
  {
    question:
      "What is the N-648 medical disability waiver for the English test?",
    answer:
      "Form N-648 is a Medical Certification for Disability Exceptions. If you have a physical or developmental disability or mental impairment that prevents you from learning English or civics, a licensed medical professional can complete this form. If approved, you may be exempted from the English test, the civics test, or both.",
  },
  {
    question: "Are there free ESL classes for citizenship preparation?",
    answer:
      "Yes. Many community organizations, libraries, and adult education centers offer free ESL citizenship preparation classes. USCIS maintains a list of providers at uscis.gov. These classes focus on the specific vocabulary and topics tested during the naturalization interview.",
  },
  {
    question: "How long should non-English speakers study for the test?",
    answer:
      "ESL applicants typically need more study time than native English speakers. Plan for 8 to 12 weeks of consistent daily practice (30 to 60 minutes per day). Focus on learning the USCIS vocabulary lists first, then move to civics content. Regular practice tests help build both language skills and civics knowledge simultaneously.",
  },
  {
    question: "Will the officer speak slowly during the interview?",
    answer:
      "USCIS officers are trained to speak clearly during the interview, but they will not slow down significantly or simplify their language. You can ask the officer to repeat a question, and they will read the same question again. They cannot rephrase questions or use simpler words. Practicing with our study tools helps you get used to hearing questions in standard English.",
  },
];

export default function NonEnglishSpeakersTipsPage() {
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

  const faqSchema = generateFAQSchema(faqs);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/blog/${post.slug}`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
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
            Citizenship Test Tips for{" "}
            <span className="text-blue-400">Non-English Speakers</span>
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
        {/* Section 1: Introduction                       */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              You Can Pass the Citizenship Test as an ESL Applicant
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                If English is not your first language, preparing for the US
                citizenship test can feel overwhelming. The idea of being tested
                on your English reading, writing, and speaking skills while
                also answering civics questions can seem like a double challenge.
              </p>
              <p>
                But here is the truth: thousands of ESL applicants pass the
                naturalization interview every year. The English test evaluates
                basic ability, not fluency. The civics test is oral, and many
                questions have short, simple answers. With the right study
                strategies and consistent practice, you can succeed.
              </p>
              <p>
                This guide is specifically for non-native English speakers. It
                covers language exemptions you may qualify for, targeted study
                strategies for ESL learners, and practical tips for each part of
                the test. Whether you have been speaking English for years or
                are still building your confidence, this guide will help you
                prepare effectively.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 2: Language Exemptions                 */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Language Exemptions You May Qualify For
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Before you start studying, check whether you qualify for a
                language exemption. These exemptions can significantly reduce
                the difficulty of the test:
              </p>

              <div className="mt-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                  65/20 Rule
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  If you are 65 years old or older and have been a lawful
                  permanent resident for at least 20 years, you are exempt from
                  the English test entirely. You can take the civics test in
                  your native language with an interpreter, and you only study
                  20 designated questions instead of the full 128. Learn more on
                  our{" "}
                  <Link
                    href="/senior-exemption"
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                  >
                    65/20 senior exemption guide
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-300 mb-2">
                  50/20 Rule
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  If you are 50 years old or older and have been a lawful
                  permanent resident for at least 20 years, you may qualify for
                  a similar exemption. Under the 50/20 rule, you are exempt from
                  the English language requirement and can take the civics test
                  in your native language with an interpreter. However, unlike
                  the 65/20 rule, you must study and answer questions from the
                  full pool of 128 civics questions.
                </p>
              </div>

              <div className="mt-4 bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  Disability Waiver (Form N-648)
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  If you have a physical or developmental disability or mental
                  impairment that prevents you from learning English or
                  understanding civics concepts, you may qualify for a disability
                  waiver. A licensed medical professional (doctor, clinical
                  psychologist, or osteopathic doctor) must complete Form N-648
                  certifying that your condition prevents you from demonstrating
                  knowledge of English or civics. If approved, you may be
                  exempted from one or both tests.
                </p>
              </div>

              <p>
                If you do not qualify for any exemption, do not worry. The
                strategies below will help you prepare for both the English
                and civics portions of the test.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 3: Study Strategies for ESL Learners  */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Study Strategies for ESL Learners
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                These strategies are designed specifically for learners whose
                first language is not English. They focus on building both
                language skills and civics knowledge at the same time.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Start with Vocabulary
              </h3>
              <p>
                Before diving into the civics questions, build a foundation
                of key vocabulary. The USCIS provides official reading and
                writing vocabulary lists. These lists contain the exact words
                that appear on the English test. Start by learning these words
                first, as many of them also appear in the civics questions.
                Visit our{" "}
                <Link
                  href="/reading-writing"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  reading and writing practice page
                </Link>{" "}
                to study these vocabulary lists.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Use Flashcards with Audio
              </h3>
              <p>
                Flashcards are one of the most effective tools for ESL learners
                because they combine visual recognition with repetition. Look
                for flashcards that include audio pronunciation so you can hear
                how words and answers are spoken. Our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  flashcard study tool
                </Link>{" "}
                uses spaced repetition, which shows you difficult cards more
                often and easy cards less often, making your study time more
                efficient.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Study in Both Languages
              </h3>
              <p>
                When learning a new civics concept, first understand it in your
                native language, then practice expressing it in English. For
                example, learn what &quot;the Bill of Rights&quot; means in your
                language first, then memorize the English answer. This two-step
                approach builds deeper understanding and makes it easier to
                recall answers under pressure.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Practice Speaking Answers Out Loud
              </h3>
              <p>
                The civics test is oral, which means you need to be comfortable
                saying your answers, not just recognizing them. Practice
                speaking each answer out loud every day. Record yourself and
                listen back. Ask a friend or family member to quiz you verbally.
                The more you practice speaking, the more natural it will feel
                during the real interview.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Use Our Free Study Tool
              </h3>
              <p>
                Our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  study tool
                </Link>{" "}
                is designed to be simple and accessible for all English levels.
                The interface is clean and focused, without confusing menus or
                complicated navigation. Each question is displayed clearly with
                its accepted answers. You can study at your own pace and track
                your progress over time.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 4: Reading Test Tips                  */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Reading Test Tips
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The reading test requires you to read 1 to 3 simple sentences
                aloud. You must correctly read at least 1 sentence to pass.
                Here is how to prepare:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Learn the USCIS vocabulary list:</strong>{" "}
                    The reading sentences use words from a specific USCIS
                    vocabulary list. This list includes civics words (president,
                    Congress, Constitution), people words (Abraham Lincoln,
                    George Washington), place words (United States, America),
                    and everyday words (can, do, have, is). Memorize these words
                    and practice reading them in sentences.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Practice reading simple sentences:</strong>{" "}
                    Write out sentences using words from the vocabulary list and
                    practice reading them aloud. Examples: &quot;Abraham Lincoln
                    was the President during the Civil War.&quot; &quot;Citizens can vote
                    for President.&quot; &quot;Congress makes laws in the United
                    States.&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Focus on civics words:</strong>{" "}
                    The reading sentences are always related to civics topics.
                    You will not be asked to read random English text. By
                    studying the civics questions, you are also building reading
                    skills for the English test. The two reinforce each other.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">You get 3 tries:</strong>{" "}
                    If you do not read the first sentence correctly, the officer
                    will show you a second and possibly a third sentence. You
                    only need to get 1 right. Do not panic if the first
                    sentence is difficult.
                  </span>
                </li>
              </ul>
              <p>
                Practice with our{" "}
                <Link
                  href="/reading-writing"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  reading and writing practice tool
                </Link>{" "}
                which includes all vocabulary words from the official USCIS lists.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 5: Writing Test Tips                  */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Writing Test Tips
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The writing test requires you to write 1 to 3 dictated
                sentences. You must correctly write at least 1 sentence. Here
                is how to prepare:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Practice writing civics sentences:</strong>{" "}
                    Have someone dictate simple civics sentences to you and
                    practice writing them down. Focus on sentences that use words
                    from the USCIS writing vocabulary list. For example:
                    &quot;The President lives in the White House.&quot;
                    &quot;Citizens have the right to vote.&quot;
                    &quot;Washington, D.C. is the capital of the United States.&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Spelling counts, but minor errors are OK:</strong>{" "}
                    Your spelling should be accurate enough that the meaning is
                    clear. Small errors (like &quot;Presidant&quot; instead of
                    &quot;President&quot;) may be accepted if the word is still
                    recognizable. However, spelling that changes the meaning of
                    the word will be marked incorrect. Practice spelling the most
                    common civics words until they feel automatic.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Capitalization matters:</strong>{" "}
                    Proper nouns must be capitalized. This includes names of
                    people (George Washington), places (United States, White
                    House), documents (Constitution, Bill of Rights), and months
                    (February, July). Practice capitalizing these words
                    correctly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Write legibly:</strong>{" "}
                    The officer must be able to read your handwriting. Use print
                    letters if your cursive is difficult to read. Write at a
                    comfortable size and leave space between words. Practice
                    writing neatly under time pressure.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 6: Civics Test Tips                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Civics Test Tips for ESL Applicants
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The civics test can be challenging for ESL learners because you
                need to understand the question in English and respond verbally.
                Here are strategies to make it easier:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Understand question patterns:</strong>{" "}
                    Many civics questions follow predictable patterns. &quot;What
                    is...&quot; questions ask for definitions. &quot;Who...&quot; questions
                    ask for a person. &quot;How many...&quot; questions ask for a
                    number. &quot;Name one...&quot; questions only require a single
                    answer. Learning to recognize these patterns helps you
                    understand what is being asked even if you do not catch
                    every word.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Learn key words in each question:</strong>{" "}
                    Instead of memorizing the entire question word for word,
                    focus on the key words that tell you which question is being
                    asked. For example, if you hear &quot;amendments&quot; and
                    &quot;Bill of Rights,&quot; you know the answer is &quot;the first
                    ten amendments.&quot; Key word recognition helps you respond
                    faster and with more confidence.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Practice with a partner:</strong>{" "}
                    Have someone quiz you verbally, just like the real
                    interview. This is especially important for ESL learners
                    because it practices both listening comprehension and spoken
                    responses at the same time. If you do not have a study
                    partner, use our{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice test
                    </Link>{" "}
                    to simulate the experience.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Keep answers short:</strong>{" "}
                    You do not need to answer in complete sentences. A short,
                    correct answer is just as valid as a long one. For example,
                    if asked &quot;What is the supreme law of the land?&quot; you
                    can simply say &quot;the Constitution&quot; instead of &quot;The
                    supreme law of the land is the Constitution of the United
                    States.&quot; Short answers reduce the chance of grammatical
                    errors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Ask to repeat if needed:</strong>{" "}
                    You are allowed to ask the officer to repeat a question.
                    This is not a sign of failure. It is a normal part of the
                    process. Use this if you did not hear the question clearly
                    or need to hear it one more time.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 7: Free Resources                     */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Free Resources for ESL Citizenship Preparation
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                You do not need to spend money on expensive prep courses. Here
                are free resources that can help you prepare:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Our practice test:</strong>{" "}
                    Take a{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      free simulated practice test
                    </Link>{" "}
                    with 20 randomly selected questions, just like the real
                    interview. It shows you the correct answer after each
                    question so you can learn as you go.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Our study flashcards:</strong>{" "}
                    Use our{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      spaced repetition flashcards
                    </Link>{" "}
                    to learn all 128 civics questions efficiently. The system
                    automatically focuses on questions you find difficult.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Reading and writing practice:</strong>{" "}
                    Our{" "}
                    <Link
                      href="/reading-writing"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      reading and writing page
                    </Link>{" "}
                    includes all vocabulary words from the official USCIS lists,
                    organized for easy study.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">ESL citizenship classes:</strong>{" "}
                    Many libraries, community colleges, and nonprofit
                    organizations offer free ESL citizenship preparation classes.
                    These classes provide in-person instruction and practice
                    with teachers who understand the challenges ESL learners
                    face. Search for programs in your area on the USCIS website.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">USCIS free study materials:</strong>{" "}
                    USCIS publishes free study materials on their website,
                    including the official list of 128 civics questions with
                    answers, reading and writing vocabulary lists, and study
                    guides available in multiple languages. You can browse all
                    128 questions on our{" "}
                    <Link
                      href="/questions"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      questions page
                    </Link>
                    .
                  </span>
                </li>
              </ul>
            </div>
            <AuthorAttribution />
          </div>
        </section>

        {/* ============================================= */}
        {/* FAQ Section                                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl bg-slate-900/50 border border-slate-800/50 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-white font-medium hover:bg-slate-800/30 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-slate-400 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ============================================= */}
        {/* CTA Section                                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Start preparing at your own pace
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Our free study tools are designed for all English levels. Learn
              all 128 civics questions with flashcards, practice the reading
              and writing vocabulary, and take simulated tests.
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
                href="/reading-writing"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Reading &amp; Writing Practice
              </Link>
              <Link
                href="/senior-exemption"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                65/20 Senior Exemption
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
