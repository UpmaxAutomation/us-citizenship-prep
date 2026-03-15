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

const post = getBlogPost("citizenship-interview-what-to-expect")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

const faqs = [
  {
    question: "How long does the citizenship interview last?",
    answer:
      "Most naturalization interviews last between 15 and 30 minutes. The time includes the oath, English test, civics test, and a review of your N-400 application. More complex cases involving travel history or moral character questions may take longer.",
  },
  {
    question: "What if I fail the civics test at my interview?",
    answer:
      "If you fail the civics test, you will be scheduled for a retest within 60 to 90 days. You only retake the portion you failed (civics, English reading, or English writing). If you fail the retest, your N-400 will be denied, but you can reapply by filing a new application.",
  },
  {
    question: "Can I bring a lawyer or interpreter to the interview?",
    answer:
      "You can bring an attorney or accredited representative to your interview at your own expense. If you qualify for the 65/20 exemption, you may also bring an interpreter for the civics test. Otherwise, the entire interview is conducted in English.",
  },
  {
    question: "What should I wear to the citizenship interview?",
    answer:
      "There is no strict dress code, but business casual attire is recommended. Dress neatly and professionally. Avoid overly casual clothing like flip-flops, tank tops, or torn jeans. A clean, respectful appearance makes a positive impression.",
  },
  {
    question: "Can I reschedule my citizenship interview?",
    answer:
      "Yes, you can reschedule by sending a written request to the USCIS office that scheduled your interview before your appointment date. However, rescheduling may delay your case by several months. Only reschedule if absolutely necessary, such as a medical emergency.",
  },
  {
    question: "What happens if I arrive late to the interview?",
    answer:
      "If you arrive late, USCIS may still allow you to interview that day if time permits, but they are not required to accommodate you. If you miss your appointment entirely, you will need to wait for USCIS to reschedule, which can add months to your timeline. Always plan to arrive 15 to 30 minutes early.",
  },
];

export default function CitizenshipInterviewPage() {
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
            Citizenship Interview:{" "}
            <span className="text-blue-400">What to Expect on Interview Day</span>
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
        {/* Section 1: Overview                           */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Overview of the Naturalization Interview
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The naturalization interview is the most important step in your
                journey to becoming a US citizen. Conducted at a local USCIS
                field office, this is where an immigration officer evaluates
                your eligibility, tests your English skills, administers the
                civics test, and reviews your N-400 application in detail.
              </p>
              <p>
                Most interviews last 15 to 30 minutes. While the idea of being
                tested by a government officer may feel intimidating, the
                interview is straightforward if you are well-prepared. The
                officer is not trying to trick you. They are following a
                standard checklist to verify your information and assess your
                qualifications.
              </p>
              <p>
                Understanding exactly what happens during the interview,
                from the moment you enter the building to the moment you
                receive your decision, will help you feel confident and ready.
                This guide walks you through every step so there are no
                surprises on interview day.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 2: Before Your Interview              */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Before Your Interview: Preparation Timeline
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Good preparation starts well before interview day. Here is a
                timeline to help you get ready:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                1 Week Before
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Take at least 2 to 3{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice tests
                    </Link>{" "}
                    to confirm you can consistently score 12 or higher out of 20
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Review your N-400 application thoroughly so you can answer
                    questions about your background accurately
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Gather all required documents and organize them in a folder
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Practice the{" "}
                    <Link
                      href="/reading-writing"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      reading and writing
                    </Link>{" "}
                    vocabulary words daily
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                3 Days Before
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Verify the date, time, and address on your appointment notice
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Plan your route to the USCIS office and check for parking or
                    public transit options
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Do a final review of your weakest civics topics using the{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      flashcard study tool
                    </Link>
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                The Night Before
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Lay out your documents and outfit for the morning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Do a light review of difficult questions, but do not cram
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Set multiple alarms and get a full night of sleep
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">
                Morning Of
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Eat a good breakfast and stay hydrated
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Double-check that you have all your documents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    Leave early and plan to arrive 15 to 30 minutes before your
                    appointment time
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 3: Documents to Bring                 */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Documents to Bring
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Bring the following documents to your interview. Missing
                documents can result in your case being continued, which means
                you will need a second appointment and additional months of
                waiting.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Appointment notice (Form I-797C):</strong>{" "}
                    The letter USCIS sent you with the date, time, and address
                    of your interview. You may be asked to show it at check-in.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Permanent Resident Card (Green Card):</strong>{" "}
                    Your current green card, even if it is expired. This is
                    your primary proof of lawful permanent residence.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Valid passport:</strong>{" "}
                    Any passport you used for international travel during the
                    statutory period. If you have multiple passports (current
                    and expired), bring all of them.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">State-issued photo ID:</strong>{" "}
                    A driver&apos;s license or state ID card as additional identification.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Two passport-style photos:</strong>{" "}
                    Recent color photographs (2x2 inches) in case they are needed
                    to update your file.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Tax returns and supporting documents:</strong>{" "}
                    Bring copies of your tax returns for the statutory period,
                    marriage certificates, divorce decrees, and any court records
                    if applicable.
                  </span>
                </li>
              </ul>
              <p>
                For a complete list of documents based on your situation, review
                our{" "}
                <Link
                  href="/blog/n400-application-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  N-400 application guide
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 4: What Happens During the Interview  */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              What Happens During the Interview
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Here is a step-by-step breakdown of what happens from the
                moment you arrive at the USCIS field office:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 1: Check In
              </h3>
              <p>
                When you arrive, go to the front desk or check-in counter with
                your appointment notice. A staff member will verify your
                identity and direct you to a waiting area. You may wait
                anywhere from a few minutes to an hour before your name is
                called, so bring study materials to review.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 2: The Oath
              </h3>
              <p>
                The USCIS officer will greet you, walk you to their office, and
                begin by asking you to raise your right hand and swear or affirm
                that you will tell the truth. This is a standard oath
                administered at the start of every interview. Simply respond
                &quot;I do&quot; or &quot;Yes.&quot;
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 3: The English Test
              </h3>
              <p>
                The officer will assess your English ability in three areas:
                speaking (evaluated throughout the conversation), reading (you
                read 1 to 3 sentences aloud), and writing (you write 1 to 3
                sentences dictated by the officer). Your speaking is evaluated
                naturally as you communicate during the interview. There is no
                separate speaking test section.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 4: The Civics Test
              </h3>
              <p>
                The officer will ask up to 20 civics questions orally from the
                official pool of 128 questions. You need to answer at least 12
                correctly to pass. Once you reach 12 correct, the officer will
                stop asking. You can ask the officer to repeat a question, but
                they cannot rephrase it or give hints. Take your time and speak
                clearly. You can start preparing with our{" "}
                <Link
                  href="/questions"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  full list of 128 questions
                </Link>
                .
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 5: N-400 Application Review
              </h3>
              <p>
                The officer will go through your N-400 application question by
                question, verifying your answers. They may ask you to confirm
                your name, address, employment history, travel dates, and
                responses to the good moral character questions. Answer honestly
                and consistently with what you wrote on your application. If
                anything has changed since you filed, tell the officer.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 6: The Decision
              </h3>
              <p>
                At the end of the interview, the officer will typically inform
                you of the result. There are three possible outcomes: approved,
                continued, or denied. Most applicants who prepared well receive
                an approval on the same day.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 5: The English Test                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The English Test in Detail
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The English test has three components. Here is exactly what each
                one involves:
              </p>

              <div className="mt-4 bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  Reading Test
                </h3>
                <p className="text-slate-400 leading-relaxed mb-3">
                  The officer shows you 1 to 3 sentences on a card or screen.
                  You must read at least 1 sentence correctly out loud. The
                  sentences are constructed from the official USCIS reading
                  vocabulary list, which contains civics-related words and
                  common English words. You do not need perfect pronunciation,
                  but you must demonstrate you can read and understand the
                  sentence.
                </p>
                <p className="text-slate-400 text-sm">
                  You get up to 3 attempts. If you read the first sentence
                  correctly, the test is complete. If not, the officer will show
                  you additional sentences.
                </p>
              </div>

              <div className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-300 mb-2">
                  Writing Test
                </h3>
                <p className="text-slate-400 leading-relaxed mb-3">
                  The officer dictates 1 to 3 sentences for you to write down.
                  You must write at least 1 sentence correctly. The sentences
                  also use vocabulary from the official USCIS word lists.
                  Spelling, capitalization, and basic punctuation are evaluated,
                  but minor errors that do not change the meaning are generally
                  acceptable.
                </p>
                <p className="text-slate-400 text-sm">
                  As with reading, you get up to 3 attempts. Practice writing
                  common civics sentences on our{" "}
                  <Link
                    href="/reading-writing"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    reading and writing practice page
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                  Speaking Evaluation
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  There is no separate speaking test. The officer evaluates your
                  English speaking ability throughout the entire interview as you
                  respond to questions, discuss your application, and interact
                  naturally. You do not need to speak perfectly. USCIS is looking
                  for basic conversational ability: can you understand questions
                  and communicate your answers clearly?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 6: The Civics Test                    */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              The Civics Test
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The civics test is the portion most applicants worry about the
                most. Here is everything you need to know about how it works
                during the interview:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">20 questions from 128:</strong>{" "}
                    The officer randomly selects 20 questions from the official
                    pool of 128 civics questions. You cannot predict which
                    questions will be asked, so you need to study all of them.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Need 12 correct to pass:</strong>{" "}
                    The passing threshold is 60%, meaning 12 out of 20 correct
                    answers. Once you reach 12 correct, the officer stops asking
                    questions. This means you can miss up to 8 and still pass.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Oral format:</strong>{" "}
                    Questions are asked and answered verbally. There are no
                    multiple-choice options, no written answers, and no visual
                    aids. You listen to the question and speak your answer.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">You can ask to repeat:</strong>{" "}
                    If you did not hear or understand a question, you can ask
                    the officer to repeat it. They will read the same question
                    again but cannot rephrase it, explain it, or give hints.
                  </span>
                </li>
              </ul>
              <p>
                The best way to prepare is to use our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  spaced repetition flashcards
                </Link>{" "}
                to learn all 128 questions, then take{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  practice tests
                </Link>{" "}
                to simulate the real experience. If you qualify for the 65/20
                exemption, visit our{" "}
                <Link
                  href="/senior-exemption"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  senior exemption guide
                </Link>{" "}
                to study the reduced set of 20 questions.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 7: After the Interview                */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              After the Interview: Possible Outcomes
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                At the end of your interview, the officer will inform you of one
                of three possible outcomes:
              </p>

              <div className="mt-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                  Approved
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  If you pass all tests and the officer is satisfied with your
                  application, you will be approved. You will receive a
                  congratulatory letter and be scheduled for an oath ceremony.
                  Some USCIS offices hold same-day oath ceremonies, meaning you
                  could become a citizen on your interview day. Others schedule
                  the ceremony for a later date, typically within 2 to 6 weeks.
                  At the oath ceremony, you take the Oath of Allegiance, turn in
                  your green card, and receive your Certificate of
                  Naturalization.
                </p>
              </div>

              <div className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-300 mb-2">
                  Continued
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  A continued decision means USCIS needs more information before
                  making a final decision. This can happen if you are missing
                  documents, if the officer needs to verify something from your
                  background check, or if you failed the English or civics test
                  and need to retake it. You will receive a notice telling you
                  what is needed and when to return. Retests are typically
                  scheduled 60 to 90 days later.
                </p>
              </div>

              <div className="mt-4 bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-300 mb-2">
                  Denied
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  A denial means USCIS determined you do not meet one or more
                  eligibility requirements. You will receive a written notice
                  explaining the specific reasons. If you disagree with the
                  decision, you can file Form N-336 (Request for a Hearing on a
                  Decision in Naturalization Proceedings) within 30 days of the
                  denial. You may also address the issues and submit a new N-400
                  application with a new filing fee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 8: Tips to Calm Your Nerves           */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Tips to Calm Your Nerves
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Feeling nervous before the interview is completely normal. Here
                are practical strategies to manage anxiety and perform your best:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Practice out loud:</strong>{" "}
                    In the days leading up to your interview, practice answering
                    civics questions out loud. Have a friend or family member ask
                    you questions as if they were the officer. The more you
                    practice speaking your answers, the more natural it will feel
                    during the real interview.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Arrive early:</strong>{" "}
                    Give yourself plenty of time to get to the USCIS office.
                    Rushing and worrying about being late adds unnecessary stress.
                    Arriving 15 to 30 minutes early gives you time to settle in,
                    use the restroom, and do a final mental review.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Use deep breathing:</strong>{" "}
                    If you feel anxious while waiting, take slow, deep breaths.
                    Inhale for 4 counts, hold for 4 counts, exhale for 4 counts.
                    This activates your parasympathetic nervous system and
                    physically reduces anxiety.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Remember the math:</strong>{" "}
                    You can miss up to 8 questions out of 20 and still pass.
                    That is a generous margin. You do not need a perfect score.
                    If you have studied consistently and can pass practice tests,
                    you are ready.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">The officer is not your enemy:</strong>{" "}
                    USCIS officers conduct hundreds of these interviews. They
                    want you to succeed. They are following a checklist, not
                    trying to trick you. Be polite, honest, and straightforward.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">It is okay to ask for a repeat:</strong>{" "}
                    If you do not hear a question clearly, simply ask the officer
                    to repeat it. This is allowed and will not count against you.
                    It is better to ask than to guess.
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
              Be confident on interview day
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Master all 128 civics questions with our free study tools.
              Practice tests simulate the real interview so you know exactly
              what to expect.
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
              <Link
                href="/interview-guide"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Interview Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
