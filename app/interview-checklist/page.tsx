import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import AuthorAttribution from "@/app/components/AuthorAttribution";
import { buildMetadata, siteConfig } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";
import InteractiveChecklist from "./InteractiveChecklist";

export const metadata: Metadata = buildMetadata({
  title:
    "Citizenship Interview Checklist — What to Bring & How to Prepare",
  description:
    "Complete checklist for your US citizenship interview. Know exactly what documents to bring, how to prepare, and what to expect on interview day.",
  path: "/interview-checklist",
});

const faqs = [
  {
    question: "What documents do I need for my citizenship interview?",
    answer:
      "You need your appointment notice (Form I-797C), green card, valid passport, state photo ID, two passport photos, tax returns for the last 5 years, and Selective Service proof if applicable. Bring originals, not copies.",
  },
  {
    question: "What happens if I forget a document at my interview?",
    answer:
      "The officer may still proceed with the interview but will likely schedule a follow-up appointment for you to provide the missing document. This delays the process, so it is best to bring everything listed on your appointment notice.",
  },
  {
    question: "How early should I arrive for my citizenship interview?",
    answer:
      "Arrive 15 to 30 minutes before your scheduled appointment time. You will need to go through security screening and check in at the front desk. Arriving early also gives you time to review your notes and settle your nerves.",
  },
  {
    question: "Can I bring my spouse or family to the interview?",
    answer:
      "Family members may accompany you to the USCIS office but typically cannot be present in the interview room unless they are serving as your interpreter (if you qualify for a language exemption). They can wait in the lobby.",
  },
  {
    question: "What if I need to reschedule my interview?",
    answer:
      "You can request to reschedule by writing to the USCIS office listed on your appointment notice before the interview date. Include your receipt number and reason for rescheduling. Be aware that this may delay your case by several months.",
  },
  {
    question:
      "Is the citizenship interview the same as the citizenship test?",
    answer:
      "The citizenship test (civics and English) is part of the interview, but the interview also includes a review of your N-400 application, verification of your identity and documents, and questions about your background and eligibility.",
  },
];

const howToSteps = [
  {
    name: "Review your N-400 application",
    text: "Re-read your entire N-400 application to refresh your memory on dates, addresses, travel history, and employment. The officer will ask about information on your application.",
  },
  {
    name: "Study all 128 civics questions",
    text: "Use flashcards and practice tests to master all 128 USCIS civics questions. Focus on questions you find most difficult and make sure you know your state-specific answers.",
  },
  {
    name: "Practice English reading and writing",
    text: "Review the USCIS reading and writing vocabulary lists. Practice reading sentences aloud and writing dictated sentences. Spelling and capitalization matter.",
  },
  {
    name: "Gather all required documents",
    text: "Collect your appointment notice, green card, passport, photo ID, passport photos, tax returns, and any other documents listed on your appointment notice. Organize them in a folder.",
  },
  {
    name: "Plan your route to the USCIS office",
    text: "Look up the address, check traffic and parking options, and plan to arrive 15-30 minutes early. Consider doing a test drive the day before if you are unfamiliar with the area.",
  },
  {
    name: "Prepare the night before",
    text: "Set out your clothes, pack your documents, set multiple alarms, and get a good night's sleep. Do a final review of your most challenging questions but avoid cramming.",
  },
  {
    name: "Arrive and complete your interview",
    text: "Arrive early, go through security, check in, and wait to be called. During the interview, speak clearly, stay calm, and ask the officer to repeat questions if needed.",
  },
];

export default function InterviewChecklistPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Interview Checklist",
      url: `${siteConfig.url}/interview-checklist`,
    },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const howToSchema = generateHowToSchema({
    name: "How to Prepare for Your US Citizenship Interview",
    description:
      "Step-by-step guide to preparing for your USCIS naturalization interview, from studying to arriving at the office.",
    steps: howToSteps,
    totalTime: "P4W",
  });

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/interview-checklist`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />
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
              <span className="text-slate-300">Interview Checklist</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Citizenship Interview{" "}
            <span className="text-blue-400">Checklist</span>
          </h1>
          <p
            data-speakable="true"
            className="mt-4 text-slate-400 text-lg leading-relaxed"
          >
            Being fully prepared for your naturalization interview is the best
            way to reduce stress and increase your chances of passing on the
            first try. Use this interactive checklist to track your preparation
            and make sure you have everything you need on interview day.
          </p>
        </header>

        {/* Interactive Checklist Component */}
        <div className="max-w-3xl mx-auto px-4">
          <InteractiveChecklist />
        </div>

        {/* ============================================= */}
        {/* 1 Week Before                                 */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-14">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-sm">7d</span>
              </div>
              <h2 className="text-2xl font-bold">1 Week Before</h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                One week out is the time to finalize your preparation and make
                sure nothing is left to the last minute. By now, you should have
                been studying consistently for several weeks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Review your N-400 application
                    </strong>{" "}
                    — Re-read every section, paying special attention to dates,
                    addresses, employment history, and travel records. The USCIS
                    officer will ask you about this information during the
                    interview.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Take multiple practice tests
                    </strong>{" "}
                    — Complete at least 2 to 3{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice tests
                    </Link>{" "}
                    to gauge your readiness. Focus on any questions you
                    consistently get wrong.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Verify all documents are ready
                    </strong>{" "}
                    — Check that your green card, passport, photo ID, and all
                    required paperwork are gathered and organized. Make copies
                    for your records.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Confirm state-specific answers
                    </strong>{" "}
                    — Verify your current governor, US senators, state capital,
                    and US Representative. These can change with elections. Check
                    our{" "}
                    <Link
                      href="/#states"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      state information
                    </Link>{" "}
                    page for current data.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 3 Days Before                                 */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <span className="text-amber-400 font-bold text-sm">3d</span>
              </div>
              <h2 className="text-2xl font-bold">3 Days Before</h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                With three days to go, shift from intensive studying to
                confirmation and logistics. You want to arrive on interview day
                feeling prepared, not overwhelmed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Confirm your appointment details
                    </strong>{" "}
                    — Double-check the date, time, and address on your
                    appointment notice (Form I-797C). Verify the office location
                    online.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Plan your route and transportation
                    </strong>{" "}
                    — Look up directions, check parking availability, and
                    estimate travel time including traffic. Consider doing a test
                    drive if the office is in an unfamiliar area.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Prepare your outfit
                    </strong>{" "}
                    — Choose business casual attire. While there is no dress
                    code, professional clothing demonstrates respect for the
                    process and helps you feel more confident.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Continue light review
                    </strong>{" "}
                    — Focus on your weakest questions and state-specific answers.
                    Avoid trying to learn new material at this point.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Night Before                                  */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Night Before</h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The night before your interview is about final preparation and
                rest. Cramming at this point is counterproductive. Trust your
                preparation and focus on logistics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-indigo-400" />
                  <span>
                    <strong className="text-white">Do a final review</strong>{" "}
                    — Spend 20 to 30 minutes reviewing your most challenging
                    questions. Read through your N-400 one last time. Then stop
                    studying.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-indigo-400" />
                  <span>
                    <strong className="text-white">Pack your documents</strong>{" "}
                    — Place all documents in a folder or envelope: appointment
                    notice, green card, passport, photo ID, passport photos, tax
                    returns, and any other required paperwork.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-indigo-400" />
                  <span>
                    <strong className="text-white">Set multiple alarms</strong>{" "}
                    — Set at least two alarms to make sure you wake up with
                    plenty of time. Missing your appointment can result in your
                    application being denied.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-indigo-400" />
                  <span>
                    <strong className="text-white">
                      Get a full night of sleep
                    </strong>{" "}
                    — Being well-rested improves your recall, focus, and
                    composure. Aim for 7 to 8 hours of sleep.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Morning Of                                    */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Morning Of</h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                This is it. You have studied, prepared, and organized
                everything. Now focus on arriving calm and ready.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Eat a proper breakfast
                    </strong>{" "}
                    — Do not arrive hungry. A good meal helps you stay focused
                    and calm during the interview.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Arrive 15 to 30 minutes early
                    </strong>{" "}
                    — Check in at the front desk and go through security. You
                    will likely wait in a lobby before being called.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Bring study materials for the wait
                    </strong>{" "}
                    — Use the waiting time to do a quick final review. Our{" "}
                    <Link
                      href="/printable-study-guide"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      printable study guide
                    </Link>{" "}
                    is perfect for this.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-400" />
                  <span>
                    <strong className="text-white">
                      Silence your phone
                    </strong>{" "}
                    — Turn your phone off or set it to silent before entering the
                    interview room.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* During the Interview                          */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">During the Interview</h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The interview typically takes 20 to 45 minutes and includes the
                civics test, English reading and writing test, and a review of
                your N-400 application.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Stay calm and breathe</strong>{" "}
                    — Nervousness is completely normal. Take a deep breath before
                    answering each question. The officer understands you may be
                    anxious.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Ask to repeat if needed
                    </strong>{" "}
                    — You can ask the officer to repeat any question without
                    penalty. Do not guess if you did not hear the question
                    clearly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Speak clearly and at a natural pace
                    </strong>{" "}
                    — You do not need to rush. Speaking clearly helps the officer
                    understand your answers and also demonstrates your English
                    proficiency.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Answer honestly
                    </strong>{" "}
                    — When reviewing your N-400, answer all questions truthfully.
                    If you do not remember a specific date, say so rather than
                    guessing. Dishonesty can result in denial.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Remember: 12 out of 20 to pass
                    </strong>{" "}
                    — You can miss up to 8 civics questions and still pass. If
                    you get one wrong, move on and stay focused on the next one.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* After the Interview                           */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">After the Interview</h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                At the end of your interview, the officer will inform you of
                one of three outcomes:
              </p>
              <div className="grid gap-4 mt-4">
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                  <h3 className="text-emerald-300 font-semibold mb-1">
                    Approved (N-652 with &quot;Congratulations&quot;)
                  </h3>
                  <p className="text-slate-400 text-sm">
                    You passed both the civics and English tests and met all
                    requirements. You will be scheduled for an{" "}
                    <Link
                      href="/oath-of-allegiance"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      oath ceremony
                    </Link>
                    , usually within a few weeks. Some offices offer same-day
                    oath ceremonies.
                  </p>
                </div>
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                  <h3 className="text-amber-300 font-semibold mb-1">
                    Continued (More Information Needed)
                  </h3>
                  <p className="text-slate-400 text-sm">
                    The officer needs additional documentation or information
                    before making a decision. You will receive instructions on
                    what to provide and may be scheduled for a follow-up
                    appointment.
                  </p>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                  <h3 className="text-red-300 font-semibold mb-1">
                    Denied (Did Not Meet Requirements)
                  </h3>
                  <p className="text-slate-400 text-sm">
                    If you failed the civics or English test, you will get one
                    retest opportunity within 60 to 90 days. If denied for other
                    reasons, you will receive a written explanation and
                    information about your options, including the right to appeal
                    or reapply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* FAQ                                           */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-14">
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
        {/* CTA                                           */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to prepare for your interview?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Master all 128 civics questions with our free study tools and
              take a practice test to see how you would perform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/practice-test"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Take a Practice Test
              </Link>
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Study with Flashcards
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
              <Link
                href="/printable-study-guide"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Printable Study Guide
              </Link>
              <Link
                href="/oath-of-allegiance"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Oath of Allegiance
              </Link>
              <Link
                href="/faq"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </section>

        {/* Author Attribution */}
        <div className="max-w-3xl mx-auto px-4">
          <AuthorAttribution />
        </div>
      </div>
    </>
  );
}
