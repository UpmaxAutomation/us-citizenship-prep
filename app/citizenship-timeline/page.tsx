import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import AuthorAttribution from "@/app/components/AuthorAttribution";
import { buildMetadata, siteConfig } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateHowToSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "US Citizenship Timeline: How Long Naturalization Takes (2025)",
  description:
    "Understand exactly how long the US citizenship process takes from N-400 filing to oath ceremony. Includes 2025 processing times, step-by-step timeline, and tips to avoid delays.",
  path: "/citizenship-timeline",
});

const faqs = [
  {
    question: "How long does the entire citizenship process take?",
    answer:
      "From filing the N-400 to taking the Oath of Allegiance, the process typically takes 8 to 14 months. However, processing times vary significantly by USCIS field office. Some offices in smaller cities process cases in as little as 6 months, while offices in major metro areas like New York or Los Angeles can take 18 months or more.",
  },
  {
    question: "Can I speed up my citizenship application?",
    answer:
      "There is no official way to expedite a standard naturalization application. However, you can avoid delays by filing a complete and accurate N-400, responding promptly to all USCIS requests, attending all appointments on time, and passing the civics and English tests on the first attempt. Filing online also tends to be slightly faster than paper filing.",
  },
  {
    question: "What happens if my interview is rescheduled?",
    answer:
      "USCIS may reschedule your interview for administrative reasons. You can also request a reschedule by writing to your local field office, though this is not guaranteed and will likely add several months to your timeline. If USCIS reschedules, they will send a new appointment notice with the updated date.",
  },
  {
    question: "How long after the interview do I take the oath?",
    answer:
      "It varies. Some USCIS offices conduct same-day oath ceremonies, meaning you take the oath immediately after being approved at your interview. Other offices schedule a separate ceremony within 2 to 6 weeks. In rare cases, large administrative ceremonies may be scheduled at courthouses and could take longer.",
  },
  {
    question: "What if my case is taking longer than the estimated processing time?",
    answer:
      "If your case is outside the normal processing time for your field office, you can submit a case inquiry online at egov.uscis.gov/e-request. You can also call the USCIS Contact Center at 1-800-375-5283 or contact your US congressional representative's office for assistance with a congressional inquiry.",
  },
  {
    question: "Does the citizenship timeline change if I apply under the 3-year spouse rule?",
    answer:
      "The processing time after filing is generally the same regardless of whether you apply under the 5-year or 3-year rule. The difference is only in how soon you can file. Spouse rule applicants can file after 3 years of permanent residence (or 2 years and 9 months, since you can file 90 days early), which means you start the process sooner overall.",
  },
];

const timelineSteps = [
  {
    step: 1,
    title: "File N-400 Application",
    timing: "Day 1",
    description:
      "Submit your completed Form N-400 online through myUSCIS or by mail. Include all required documents, passport photos, and the filing fee ($795 or applicable reduced/waived amount). After submission, your application enters the USCIS processing queue for your local field office.",
    tip: "File online for faster processing and electronic notifications. Keep copies of everything you submit.",
  },
  {
    step: 2,
    title: "Receive Receipt Notice",
    timing: "2-3 weeks after filing",
    description:
      "USCIS sends Form I-797C, Notice of Action, confirming receipt of your application and payment. This notice includes your receipt number (starting with IOE for online filing or MSC/LIN/etc. for paper filing). Use this number to track your case status online at my.uscis.gov.",
    tip: "Save this receipt number. You will need it to check your case status and for all future correspondence with USCIS.",
  },
  {
    step: 3,
    title: "Biometrics Appointment",
    timing: "4-8 weeks after filing",
    description:
      "USCIS schedules you for a biometrics appointment at an Application Support Center (ASC) near your home. At this appointment, they take your fingerprints, photograph, and digital signature. The entire visit usually takes 15 to 30 minutes. USCIS uses your biometrics for a background check through the FBI.",
    tip: "Bring your appointment notice and a valid photo ID. Arrive early. If you cannot make the appointment, call to reschedule as soon as possible.",
  },
  {
    step: 4,
    title: "Interview Scheduled",
    timing: "6-12 months after filing",
    description:
      "USCIS sends an interview appointment notice (Form I-797C) with the date, time, and location of your naturalization interview at your local field office. This is the longest wait in the process and varies significantly by office workload. Some offices schedule interviews within 4 months; others may take 18 months or more.",
    tip: "Use this waiting period to study for the civics test. Take practice tests regularly and review your N-400 application so you can answer questions about it at the interview.",
  },
  {
    step: 5,
    title: "Attend Naturalization Interview",
    timing: "15-30 minutes (at scheduled date)",
    description:
      "The interview is the most critical step. A USCIS officer reviews your entire N-400 application, asks you to confirm or correct your answers, administers the English reading and writing test, and gives you the civics test (up to 20 questions from the 128-question pool, you need 12 correct). The officer evaluates your English speaking ability throughout the conversation.",
    tip: "Bring your appointment notice, green card, valid passport, and all original supporting documents. Re-read your N-400 the night before. Stay calm and answer clearly.",
  },
  {
    step: 6,
    title: "Receive Decision",
    timing: "Same day or within weeks",
    description:
      "In most cases, the officer tells you the result at the end of the interview. There are three possible outcomes: Granted (approved and scheduled for oath), Continued (more evidence needed or you failed a test and get a retest), or Denied (you did not meet requirements). If granted, you may receive an oath ceremony date immediately.",
    tip: "If your case is continued, respond to any USCIS requests promptly. If denied, you have 30 days to file an appeal (Form N-336) or you may refile a new N-400.",
  },
  {
    step: 7,
    title: "Oath Ceremony",
    timing: "Same day to 6 weeks after approval",
    description:
      "At the oath ceremony, you take the Oath of Allegiance to the United States alongside other new citizens. You return your green card to USCIS and receive your Certificate of Naturalization, which is your official proof of US citizenship. Some offices offer same-day ceremonies; others schedule administrative ceremonies at courthouses within a few weeks.",
    tip: "Bring your green card and appointment notice. Do not make international travel plans until after you have your certificate. You can apply for a US passport immediately after.",
  },
  {
    step: 8,
    title: "Receive Certificate of Naturalization",
    timing: "At the oath ceremony",
    description:
      "Your Certificate of Naturalization (Form N-550) is given to you at the oath ceremony. This document proves your US citizenship and is required to apply for a US passport, register to vote, and update your Social Security record. Guard it carefully as replacements (Form N-565) cost $555 and take months to process.",
    tip: "Make several high-quality photocopies immediately. Store the original in a safe or safety deposit box. Apply for your US passport as soon as possible as a secondary proof of citizenship.",
  },
];

export default function CitizenshipTimelinePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Citizenship Timeline",
      url: `${siteConfig.url}/citizenship-timeline`,
    },
  ]);

  const articleSchema = generateArticleSchema({
    title: "US Citizenship Timeline: How Long Naturalization Takes (2025)",
    description:
      "Step-by-step timeline of the US naturalization process with 2025 processing times.",
    path: "/citizenship-timeline",
    datePublished: "2025-11-01",
    dateModified: "2026-03-10",
  });

  const faqSchema = generateFAQSchema(faqs);

  const howToSchema = generateHowToSchema({
    name: "US Citizenship Naturalization Process Timeline",
    description:
      "Complete timeline from filing Form N-400 to receiving your Certificate of Naturalization.",
    totalTime: "P12M",
    steps: timelineSteps.map((s) => ({
      name: s.title,
      text: s.description,
    })),
  });

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/citizenship-timeline`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
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
              <span className="text-slate-300">Citizenship Timeline</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            US Citizenship Timeline:{" "}
            <span className="text-blue-400">
              From Application to Oath
            </span>
          </h1>
          <p
            data-speakable="true"
            className="mt-4 text-slate-400 text-lg leading-relaxed"
          >
            The journey from filing your N-400 to becoming a US citizen
            typically takes 8 to 14 months, though timelines vary by USCIS
            field office. This guide breaks down every step of the
            naturalization process with current 2025 processing estimates,
            so you know exactly what to expect and how to prepare at each
            stage.
          </p>
        </header>

        {/* ============================================= */}
        {/* Visual Timeline                                */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-8">
            Step-by-Step Naturalization Timeline
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-500/30"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {timelineSteps.map((item) => (
                <div key={item.step} className="relative pl-14">
                  {/* Step circle */}
                  <div
                    className="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm border-4 border-slate-950"
                    aria-hidden="true"
                  >
                    {item.step}
                  </div>

                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <span className="text-sm font-medium text-blue-400 whitespace-nowrap">
                        {item.timing}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg px-4 py-3">
                      <p className="text-xs text-blue-300">
                        <strong>Tip:</strong> {item.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: 2025 Processing Times                 */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              2025 Processing Times by Field Office
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Processing times vary dramatically depending on which USCIS
                field office handles your case. Below are approximate timelines
                for selected offices based on recent USCIS data. Check the
                official{" "}
                <a
                  href="https://egov.uscis.gov/processing-times/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  USCIS processing times page
                </a>{" "}
                for the most current estimates for your specific field office.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-3 pr-4 text-white font-semibold">
                        Field Office
                      </th>
                      <th className="py-3 text-white font-semibold text-right">
                        Estimated Timeline
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400">
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4">Salt Lake City, UT</td>
                      <td className="py-3 text-right">5-7 months</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4">Denver, CO</td>
                      <td className="py-3 text-right">6-8 months</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4">Dallas, TX</td>
                      <td className="py-3 text-right">7-10 months</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4">Chicago, IL</td>
                      <td className="py-3 text-right">8-12 months</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4">Miami, FL</td>
                      <td className="py-3 text-right">9-13 months</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4">Los Angeles, CA</td>
                      <td className="py-3 text-right">10-15 months</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">New York City, NY</td>
                      <td className="py-3 text-right">12-18 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-slate-500 mt-2">
                Times shown are approximate and based on publicly available
                USCIS processing data. Your actual timeline may differ based on
                case complexity, background check duration, and current office
                workload.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: How to Track Your Case                */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              How to Track Your Case
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Once your N-400 is filed, you can monitor its progress using
                several methods. Staying informed helps reduce anxiety and
                ensures you respond quickly to any USCIS requests.
              </p>

              <div className="space-y-4 mt-4">
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                  <h3 className="font-semibold text-blue-300 mb-2">
                    myUSCIS Online Account
                  </h3>
                  <p className="text-sm text-slate-400">
                    The most reliable way to track your case. Log in at{" "}
                    <a
                      href="https://my.uscis.gov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      my.uscis.gov
                    </a>{" "}
                    and enter your receipt number to see real-time status
                    updates, appointment notices, and any requests for evidence.
                    You can also set up email and text notifications for case
                    updates.
                  </p>
                </div>

                <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                  <h3 className="font-semibold text-blue-300 mb-2">
                    USCIS Contact Center
                  </h3>
                  <p className="text-sm text-slate-400">
                    Call 1-800-375-5283 (TTY: 1-800-767-1833) to speak with a
                    USCIS representative. They can provide case status updates
                    and help with rescheduling appointments. Wait times can be
                    long, so try calling early in the morning on weekdays.
                  </p>
                </div>

                <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                  <h3 className="font-semibold text-blue-300 mb-2">
                    Congressional Inquiry
                  </h3>
                  <p className="text-sm text-slate-400">
                    If your case has been pending beyond normal processing times,
                    contact your US congressional representative or senator.
                    Their office can submit an official inquiry to USCIS on your
                    behalf, which sometimes helps move things along. This is
                    a free service available to all constituents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Tips to Avoid Delays                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Tips to Avoid Delays
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                While you cannot control USCIS processing speeds, you can
                prevent delays on your end. Here are the most effective
                strategies:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      File a complete, accurate application.
                    </strong>{" "}
                    The number one cause of delays is incomplete or incorrect
                    information on the N-400. Double-check every section before
                    submitting. See our{" "}
                    <Link
                      href="/n400-guide"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      N-400 guide
                    </Link>{" "}
                    for a section-by-section walkthrough.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Respond to requests immediately.
                    </strong>{" "}
                    If USCIS sends a Request for Evidence (RFE) or Request for
                    Initial Evidence (RFIE), respond as quickly as possible with
                    complete documentation. Delays in responding can push your
                    case to the back of the queue.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Attend all appointments on time.
                    </strong>{" "}
                    Missing a biometrics or interview appointment can delay your
                    case by months. If you must reschedule, do so as early as
                    possible.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Pass the tests on the first attempt.
                    </strong>{" "}
                    If you fail the civics or English test, you get one retest
                    within 60-90 days. This adds months to your timeline.
                    Prepare thoroughly using our{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      study tools
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice tests
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Keep your address updated.
                    </strong>{" "}
                    If you move during the application process, file a change
                    of address with USCIS within 10 days using Form AR-11 and
                    update your address through your myUSCIS account. Missed
                    mail means missed appointments.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Avoid extended travel outside the US.
                    </strong>{" "}
                    Trips over 6 months during the application process can
                    complicate your case and may require USCIS to re-examine
                    your eligibility. If you must travel, keep trips short.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: What to Do While Waiting              */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              What to Do During the Waiting Period
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The months between filing and your interview are valuable
                preparation time. Here is how to make the most of them:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">Study the civics test.</strong>{" "}
                    Master all{" "}
                    <Link
                      href="/questions"
                      className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                    >
                      128 USCIS civics questions
                    </Link>{" "}
                    using our free flashcards and spaced repetition system.
                    Aim to consistently score 90% or higher on practice tests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Practice English reading and writing.
                    </strong>{" "}
                    Review the official USCIS vocabulary lists on our{" "}
                    <Link
                      href="/reading-writing"
                      className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                    >
                      reading and writing practice
                    </Link>{" "}
                    page.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Prepare for the interview.
                    </strong>{" "}
                    Read our{" "}
                    <Link
                      href="/interview-guide"
                      className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                    >
                      interview day guide
                    </Link>{" "}
                    to understand the full process and what the officer will
                    ask beyond the civics test.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Gather documents for the interview.
                    </strong>{" "}
                    Collect your green card, passport, tax returns, and any
                    documents related to issues flagged on your N-400. Being
                    prepared eliminates the risk of a &ldquo;continued&rdquo;
                    decision.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">
                      Understand the costs.
                    </strong>{" "}
                    Review our{" "}
                    <Link
                      href="/citizenship-costs"
                      className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                    >
                      citizenship costs guide
                    </Link>{" "}
                    to budget for passport fees and other post-naturalization
                    expenses.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* FAQ Section                                    */}
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
        {/* CTA Section                                    */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Start preparing for your citizenship test today
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              The waiting period is the perfect time to study. Use our free
              tools to master all 128 USCIS civics questions with flashcards,
              practice tests, and spaced repetition.
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
                href="/n400-guide"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                N-400 Form Guide
              </Link>
              <Link
                href="/eligibility-checker"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Eligibility Checker
              </Link>
              <Link
                href="/interview-guide"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Interview Guide
              </Link>
            </div>
          </div>

          <AuthorAttribution />
        </section>
      </div>
    </>
  );
}
