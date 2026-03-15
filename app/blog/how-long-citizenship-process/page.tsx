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

const post = getBlogPost("how-long-citizenship-process")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

const faqs = [
  {
    question: "How long does it take to become a US citizen in 2025?",
    answer:
      "The entire naturalization process typically takes 8 to 14 months from filing your N-400 application to your oath ceremony. This includes 2 to 3 weeks for a receipt notice, 4 to 8 weeks for biometrics, 6 to 12 months for interview scheduling, and up to 6 weeks for the oath ceremony after approval. Processing times vary significantly by USCIS field office.",
  },
  {
    question: "Which USCIS field offices have the fastest processing times?",
    answer:
      "Processing times change frequently, but offices in smaller cities and suburban areas tend to be faster than major metropolitan offices. For example, offices in cities like Anchorage, Boise, or Des Moines often process cases faster than New York City, Los Angeles, or Miami. Check the USCIS processing times tool for current estimates at your local office.",
  },
  {
    question: "Can I speed up my citizenship application?",
    answer:
      "USCIS offers expedite requests for cases involving severe financial loss, emergencies, humanitarian reasons, USCIS error, or compelling national interest. Military members also qualify for expedited processing. Outside of these categories, there is no way to pay for faster processing. Filing a complete and accurate application is the best way to avoid delays.",
  },
  {
    question: "What causes delays in the citizenship process?",
    answer:
      "Common causes of delay include incomplete applications that trigger Requests for Evidence (RFEs), name check or background check holds, extended travel outside the US that raises continuous residence questions, criminal history that requires additional review, and high caseloads at your local field office. Filing accurately and responding promptly to USCIS requests helps minimize delays.",
  },
  {
    question: "How do I check the status of my citizenship application?",
    answer:
      "You can check your case status online at uscis.gov using your 13-character receipt number (which starts with IOE, SRC, WAC, EAC, LIN, or MSC). You can also create a myUSCIS account to track your case, receive notifications, and view documents. If you have not received any updates for longer than the estimated processing time, you can submit a case inquiry or contact the USCIS Contact Center at 1-800-375-5283.",
  },
  {
    question: "What if my case is taking longer than the estimated processing time?",
    answer:
      "If your case is outside the normal processing time for your field office, you can submit an e-Request (case inquiry) through the USCIS website or call the USCIS Contact Center at 1-800-375-5283. You may also contact your congressional representative for assistance with stalled cases. In some situations, you can file a lawsuit (mandamus action) in federal court to compel USCIS to act on your case, though this is typically a last resort.",
  },
];

export default function HowLongCitizenshipProcessPage() {
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
            How Long Does the{" "}
            <span className="text-blue-400">Citizenship Process Take in 2025?</span>
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
              Overview: 8 to 14 Months from Start to Finish
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The journey from filing your N-400 application to taking the Oath
                of Allegiance typically takes 8 to 14 months for most applicants
                in 2025. However, this timeline can vary significantly depending
                on your local USCIS field office, the completeness of your
                application, and whether any issues arise during processing.
              </p>
              <p>
                Some applicants in faster offices complete the process in as
                little as 6 months, while others in high-volume offices may
                wait 18 months or longer. Understanding each step of the timeline
                and what you can control will help you set realistic expectations
                and avoid unnecessary delays.
              </p>
              <p>
                The naturalization process involves several distinct stages, each
                with its own timeframe. While you cannot speed up most of these
                stages, you can ensure your application is complete, accurate,
                and well-documented to avoid the most common causes of delay.
                Use the waiting period to prepare for your{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  civics test
                </Link>{" "}
                and{" "}
                <Link
                  href="/reading-writing"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  English reading and writing test
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 2: Step-by-Step Timeline              */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Step-by-Step Timeline
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Here is a detailed breakdown of each stage in the naturalization
                process and how long each one typically takes:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 1: File Form N-400 (Day 1)
              </h3>
              <p>
                Your citizenship journey officially begins when you submit Form
                N-400 to USCIS. You can file online through your myUSCIS account
                or by mailing a paper application. Online filing is faster and
                allows you to track your case immediately. The filing fee is $795
                ($710 application + $85 biometrics), though fee waivers and
                reduced fees are available for qualifying applicants. For a
                complete walkthrough of the filing process, see our{" "}
                <Link
                  href="/blog/n400-application-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  N-400 application guide
                </Link>
                .
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 2: Receipt Notice (2-3 Weeks)
              </h3>
              <p>
                Within 2 to 3 weeks of filing, you will receive a receipt notice
                (Form I-797C) confirming that USCIS has accepted your application.
                This notice contains your 13-character receipt number, which is
                your key to tracking your case status online. If you filed online,
                you may see confirmation in your myUSCIS account even sooner. If
                you do not receive a receipt within 4 weeks, contact the USCIS
                Contact Center to confirm your application was received.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 3: Biometrics Appointment (4-8 Weeks)
              </h3>
              <p>
                USCIS will schedule you for a biometrics appointment at a local
                Application Support Center (ASC), typically 4 to 8 weeks after
                your application is accepted. During this appointment, they will
                capture your fingerprints, photograph, and digital signature.
                This information is used to conduct FBI background checks and
                identity verification. The appointment itself takes about 30
                minutes. Do not miss this appointment, as it will delay your
                entire case.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 4: Interview Scheduling (6-12 Months)
              </h3>
              <p>
                After your biometrics are processed and your background check
                clears, USCIS will schedule your naturalization interview at
                your local field office. This is typically the longest wait in
                the process, ranging from 6 to 12 months depending on your
                field office&apos;s caseload. Some high-volume offices may take
                even longer. You will receive a notice (Form I-797C) with the
                date, time, and location of your interview at least 2 weeks in
                advance.
              </p>
              <p>
                Use this waiting period to prepare thoroughly. Most applicants
                find that 4 to 8 weeks of focused study is enough to master all
                128 civics questions using our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  spaced repetition flashcards
                </Link>
                .
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 5: Interview Day (15-30 Minutes)
              </h3>
              <p>
                The naturalization interview itself typically lasts 15 to 30
                minutes. During the interview, a USCIS officer will place you
                under oath, review your N-400 application, test your English
                reading and writing ability, and administer the civics test (up
                to 20 questions, need 12 correct to pass). The officer will ask
                you questions about your background, travel history, and moral
                character based on your application. For a complete walkthrough,
                read our{" "}
                <Link
                  href="/blog/citizenship-interview-what-to-expect"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  interview day guide
                </Link>
                .
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 6: Decision (Same Day)
              </h3>
              <p>
                Most applicants receive a decision on the same day as their
                interview. If you passed all tests and the officer is satisfied
                with your application, you will be approved. In some cases, the
                officer may &quot;continue&quot; your case if additional documents or
                information are needed, or if you need to retake a portion of the
                test. Denials happen when applicants do not meet eligibility
                requirements. If continued, you will receive instructions on what
                is needed and when to return.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 7: Oath Ceremony (Same Day to 6 Weeks)
              </h3>
              <p>
                Once approved, you will be scheduled for an oath ceremony. Some
                USCIS offices and courts hold same-day oath ceremonies,
                meaning you could become a citizen on the day of your interview.
                Other offices schedule ceremonies separately, typically within
                2 to 6 weeks after approval. At the ceremony, you take the Oath
                of Allegiance, turn in your green card, and receive your
                Certificate of Naturalization. You are officially a United States
                citizen from that moment forward.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 8: Certificate of Naturalization (At Oath)
              </h3>
              <p>
                Your Certificate of Naturalization (Form N-550) is handed to you
                at the oath ceremony. This is the most important document proving
                your citizenship. You will need it to apply for a US passport,
                update your Social Security record, register to vote, and more.
                Review the certificate carefully before leaving the ceremony to
                ensure all information is correct. If there are any errors, bring
                them to the attention of USCIS staff immediately. Store the
                original certificate in a safe place and keep copies for your
                records.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 3: Timeline Summary Grid              */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Timeline at a Glance
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Here is a quick reference of estimated timeframes for each step:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    File N-400
                  </p>
                  <p className="text-slate-400 text-sm">Day 1</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    Receipt Notice
                  </p>
                  <p className="text-slate-400 text-sm">2-3 weeks</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    Biometrics
                  </p>
                  <p className="text-slate-400 text-sm">4-8 weeks</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    Interview
                  </p>
                  <p className="text-slate-400 text-sm">6-12 months</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    Decision
                  </p>
                  <p className="text-slate-400 text-sm">Same day as interview</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-white font-medium text-sm mb-1">
                    Oath Ceremony
                  </p>
                  <p className="text-slate-400 text-sm">Same day to 6 weeks</p>
                </div>
              </div>
              <div className="mt-4 bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                <p className="text-blue-300 font-semibold mb-1">
                  Total Estimated Timeline
                </p>
                <p className="text-2xl font-bold text-white">
                  8 to 14 Months
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  From N-400 filing to oath ceremony, for most applicants
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 4: Processing Times by Field Office   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Processing Times by Field Office
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                USCIS processing times vary dramatically depending on which field
                office handles your case. Your case is assigned to the field
                office that serves the ZIP code where you live. There is no way
                to choose or transfer to a different office.
              </p>
              <p>
                Here is what you need to know about field office processing times:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Fastest offices (6-8 months):</strong>{" "}
                    Smaller offices in less populated areas tend to have shorter
                    wait times. Offices in cities like Anchorage, Boise, Des
                    Moines, Omaha, and Salt Lake City often process cases faster
                    than the national average.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Average offices (8-14 months):</strong>{" "}
                    Most mid-sized offices fall within the national average. This
                    includes offices in cities like Atlanta, Chicago, Dallas,
                    Denver, Phoenix, and Seattle. Processing times at these offices
                    fluctuate throughout the year based on caseload.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Slowest offices (14-24 months):</strong>{" "}
                    High-volume offices in major metropolitan areas often have the
                    longest wait times. Offices in New York City, Los Angeles,
                    Miami, San Francisco, and Houston are frequently among the
                    slowest due to high application volumes.
                  </span>
                </li>
              </ul>
              <p>
                You can check current processing times for your specific field
                office using the{" "}
                <span className="text-white">
                  USCIS processing times tool
                </span>{" "}
                on the USCIS website. Enter your form type (N-400), your field
                office or service center, and the tool will show you estimated
                processing times based on recent data. Keep in mind that these
                estimates change monthly and are not guarantees.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 5: How to Track Your Case             */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              How to Track Your Case
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Waiting for USCIS to process your application can be stressful.
                Here are three ways to stay informed about your case status:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                myUSCIS Online Account
              </h3>
              <p>
                If you filed online, your myUSCIS account is the best way to
                track your case. Log in at{" "}
                <span className="text-white">uscis.gov</span> to see your
                current case status, view appointment notices, access receipt
                notices, and receive electronic notifications when your case
                status changes. The online portal shows a timeline view of
                your case progress and estimated completion dates. Even if you
                filed by mail, you can link your case to a myUSCIS account
                using your receipt number.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                USCIS Contact Center
              </h3>
              <p>
                You can call the USCIS Contact Center at{" "}
                <span className="text-white">1-800-375-5283</span> (TTY:
                1-800-767-1833) to speak with a representative about your case.
                The contact center is available Monday through Friday, 8 AM to
                8 PM Eastern Time. Have your receipt number ready when you call.
                Wait times can be long, so try calling early in the morning or
                later in the evening for shorter hold times. The automated system
                can also provide basic case status information without speaking
                to an agent.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Online Case Status Check
              </h3>
              <p>
                Even without a myUSCIS account, you can check your case status
                at{" "}
                <span className="text-white">
                  uscis.gov/check-case-status
                </span>{" "}
                by entering your 13-character receipt number. This quick lookup
                tool shows the most recent status update for your case. While
                it provides less detail than the full myUSCIS account, it is a
                fast way to check for updates. You can also sign up for email
                or text notifications about case status changes through this
                tool.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 6: Tips to Avoid Delays               */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Tips to Avoid Delays
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                While you cannot control USCIS processing speed, you can take
                steps to ensure your application moves through the system as
                smoothly as possible:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">File a complete application:</strong>{" "}
                    Incomplete applications are the most common cause of
                    preventable delays. Answer every question on the N-400 (use
                    &quot;N/A&quot; or &quot;None&quot; for questions that do not apply).
                    Include all required documents and the correct filing fee.
                    Double-check dates, names, and addresses before submitting.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Respond to RFEs immediately:</strong>{" "}
                    If USCIS sends a Request for Evidence (RFE), respond as
                    quickly as possible with the exact documents requested.
                    Delays in responding to RFEs directly extend your processing
                    time. Keep all your documents organized so you can respond
                    within days, not weeks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Attend all appointments:</strong>{" "}
                    Do not miss your biometrics appointment or interview. Missing
                    either one can delay your case by months while USCIS
                    reschedules. If you absolutely cannot attend, contact the
                    USCIS office before the appointment to request a
                    rescheduling.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Keep trips short:</strong>{" "}
                    Trips outside the US lasting more than 6 months can disrupt
                    your continuous residence and trigger additional review. Keep
                    all trips under 6 months and maintain strong ties to the US
                    (home, job, family) during the process. Travel over 1 year
                    will almost certainly break continuous residence.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Update your address:</strong>{" "}
                    If you move after filing, file Form AR-11 online within 10
                    days and also update your address in your myUSCIS account.
                    If USCIS sends notices to your old address and you miss them,
                    your case could be delayed or even abandoned.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Prepare for the test early:</strong>{" "}
                    Failing the civics or English test at your interview means
                    you will be scheduled for a retest 60 to 90 days later,
                    adding months to your timeline. Start studying well before
                    your interview using our{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      flashcard study tool
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
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 7: Expedite Options                   */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Expedite Options
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                USCIS does not offer a paid premium processing option for N-400
                applications. However, there are limited circumstances where you
                can request expedited processing:
              </p>

              <div className="mt-4 bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  Military Service
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Active-duty military members and veterans may qualify for
                  expedited naturalization under sections 328 and 329 of the
                  Immigration and Nationality Act. Military applicants can file
                  the N-400 without a filing fee, may have their biometrics
                  taken at their military installation, and can be naturalized
                  overseas. Processing is typically faster than civilian
                  applications. Contact your installation&apos;s legal assistance
                  office for help with the process.
                </p>
              </div>

              <div className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-300 mb-2">
                  Humanitarian Reasons
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  You can submit an expedite request if you have a severe illness,
                  are a caregiver for a critically ill family member, or face
                  other urgent humanitarian circumstances that require expedited
                  processing. USCIS evaluates these requests on a case-by-case
                  basis. You must provide documentation supporting your request,
                  such as medical records, doctor letters, or other evidence of
                  the humanitarian situation.
                </p>
              </div>

              <div className="mt-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                  USCIS Error
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  If USCIS made an error that is causing a delay in your case,
                  such as losing your file, failing to schedule an appointment,
                  or not acting on a completed background check, you can request
                  expedited processing to correct the situation. Document the
                  error clearly, include your receipt number, and submit your
                  request through the USCIS website or by calling the Contact
                  Center at 1-800-375-5283.
                </p>
              </div>

              <p className="mt-4">
                To submit an expedite request, call the USCIS Contact Center or
                submit an e-Request online. Include a detailed explanation of
                why your case should be expedited and all supporting
                documentation. USCIS will review your request and notify you
                of the decision. There is no guarantee that an expedite request
                will be approved, and most routine cases do not qualify.
              </p>
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
              Use the wait time to prepare
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              While your application is processing, master all 128 civics
              questions with our free study tools. Be ready to pass on your
              first try when your interview date arrives.
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
