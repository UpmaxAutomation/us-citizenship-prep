import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import AuthorAttribution from "@/app/components/AuthorAttribution";
import { buildMetadata, siteConfig } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateSpeakableSchema,
  generateWebApplicationSchema,
} from "@/app/lib/schema";
import EligibilityForm from "./EligibilityForm";

export const metadata: Metadata = buildMetadata({
  title: "Am I Eligible for US Citizenship? Free Eligibility Checker",
  description:
    "Check if you meet the requirements for US citizenship with our free eligibility checker. Covers green card duration, residency, physical presence, and more.",
  path: "/eligibility-checker",
});

const faqs = [
  {
    question: "How long do I need a green card before applying for citizenship?",
    answer:
      "Most applicants need to have held a green card for at least 5 years (or 3 years if married to a US citizen and living together). You can file your N-400 application up to 90 days before reaching your required residency period.",
  },
  {
    question: "Can I apply for citizenship if I have a criminal record?",
    answer:
      "It depends on the type and severity of the offense. Minor traffic violations generally do not affect eligibility. However, serious crimes like aggravated felonies can permanently bar you from citizenship. Misdemeanors and other offenses are evaluated case by case. Consult an immigration attorney if you have any criminal history.",
  },
  {
    question: "What is the continuous residence requirement?",
    answer:
      "You must have lived continuously in the United States for the entire statutory period (5 years or 3 years). A single trip outside the US lasting 6 months or more can break continuous residence. Trips under 6 months are generally fine, but frequent extended travel may raise questions.",
  },
  {
    question: "What is the physical presence requirement?",
    answer:
      "You must have been physically present in the United States for at least 30 months out of the last 5 years (or 18 months out of 3 years if applying under the spouse rule). This counts actual days on US soil, not just your legal residence status.",
  },
  {
    question: "Can I apply for citizenship if I am under 18?",
    answer:
      "Generally, you cannot independently apply for naturalization if you are under 18. However, children of US citizens may automatically acquire citizenship under certain conditions through the Child Citizenship Act. If one or both parents naturalize while the child is under 18 and the child has a green card, they may automatically become a citizen.",
  },
  {
    question: "Do I need to speak English to become a US citizen?",
    answer:
      "Yes, most applicants must demonstrate basic English ability in reading, writing, and speaking during the naturalization interview. However, exemptions exist for applicants aged 50+ with 20+ years of permanent residence (50/20 rule) or aged 55+ with 15+ years (55/15 rule), who may take the civics test in their native language.",
  },
  {
    question: "What happens if I fail the eligibility requirements?",
    answer:
      "If you do not currently meet all requirements, you may simply need to wait. For example, if you have not held your green card long enough, you can apply once you reach the required time. If a specific issue blocks your eligibility, such as a criminal record, consult with an immigration attorney to understand your options.",
  },
  {
    question: "Is this eligibility checker a substitute for legal advice?",
    answer:
      "No. This tool provides a general assessment based on the most common eligibility criteria. It is not legal advice and does not account for every possible factor in your case. For personalized guidance, consult a qualified immigration attorney or accredited representative.",
  },
];

export default function EligibilityCheckerPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Eligibility Checker", url: `${siteConfig.url}/eligibility-checker` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/eligibility-checker`,
    ["h1", "[data-speakable]"]
  );

  const webAppSchema = generateWebApplicationSchema();

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={speakableSchema} />
      <JsonLd data={webAppSchema} />

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
              <span className="text-slate-300">Eligibility Checker</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            US Citizenship{" "}
            <span className="text-blue-400">Eligibility Checker</span>
          </h1>
          <p
            data-speakable="true"
            className="mt-4 text-slate-400 text-lg leading-relaxed"
          >
            Not sure if you qualify for US citizenship? Answer a few simple
            questions to find out whether you meet the basic requirements for
            naturalization. This free tool checks the most common eligibility
            criteria including age, green card status, residency, physical
            presence, and good moral character.
          </p>
        </header>

        {/* Interactive Eligibility Form */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <EligibilityForm />
        </section>

        {/* ============================================= */}
        {/* Section: Age Requirement                      */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Age Requirement: You Must Be 18 or Older
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                To apply for naturalization through the standard N-400 process,
                you must be at least 18 years old at the time of filing. There
                are no exceptions to this age requirement for independent
                applications.
              </p>
              <p>
                However, children under 18 may acquire citizenship automatically
                if at least one parent is a US citizen (either by birth or
                naturalization) and the child meets certain conditions under the
                Child Citizenship Act of 2000. This is a separate process from
                filing an{" "}
                <Link
                  href="/n400-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  N-400 application
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Green Card Requirement               */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Green Card Requirement: 5 Years (or 3 Years)
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                You must be a lawful permanent resident (green card holder)
                before you can apply for citizenship. The standard requirement is
                5 years of permanent residence. However, if you are married to
                and living with a US citizen, the requirement is reduced to 3
                years.
              </p>
              <p>
                The clock starts from the date your green card was issued, not
                from when you entered the United States. You can file your N-400
                up to 90 days before reaching the full 5-year or 3-year mark.
              </p>
              <div className="mt-4 bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  The 3-Year Rule for Spouses
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  To qualify for the 3-year path, you must meet all of these
                  conditions: you have been a permanent resident for at least 3
                  years, you have been married to the same US citizen for all 3
                  years, your spouse has been a US citizen for all 3 years, and
                  you have been living together in marital union during that
                  entire period.
                </p>
              </div>
              <p>
                If you do not yet have a green card, the naturalization process
                is not available to you. You would first need to apply for and
                receive permanent residence through family sponsorship,
                employment, the diversity lottery, or another immigration
                pathway.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Continuous Residence                  */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Continuous Residence Requirement
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Continuous residence means you have maintained your primary home
                in the United States throughout the required statutory period (5
                years or 3 years). This is different from physical presence,
                which counts actual days in the country.
              </p>
              <p>
                <strong className="text-white">Trips under 6 months:</strong>{" "}
                Generally do not break continuous residence, though the time
                abroad does not count toward physical presence.
              </p>
              <p>
                <strong className="text-white">Trips of 6 to 12 months:</strong>{" "}
                Create a presumption that you broke continuous residence. You may
                overcome this presumption by showing that you maintained your
                home, job, family ties, and tax obligations in the US during the
                trip.
              </p>
              <p>
                <strong className="text-white">Trips over 12 months:</strong>{" "}
                Automatically break continuous residence. You will need to start
                the clock over unless you obtained a re-entry permit (Form
                I-131) before departing or qualify for a military or government
                employment exception.
              </p>
              <p>
                If you travel frequently for work or family reasons, keep
                careful records of every trip. USCIS will ask about your travel
                history during the{" "}
                <Link
                  href="/interview-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  naturalization interview
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Physical Presence                     */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Physical Presence Requirement
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Physical presence measures the actual number of days you were on
                US soil. For the 5-year path, you need at least 30 months (913
                days) of physical presence. For the 3-year spouse path, you need
                at least 18 months (548 days).
              </p>
              <p>
                This is a strict count. Every day you spend outside the United
                States is subtracted from your total. USCIS calculates this by
                reviewing your travel history, passport stamps, and the travel
                records you list on your{" "}
                <Link
                  href="/n400-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  N-400 application
                </Link>
                .
              </p>
              <div className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-300 mb-2">
                  Tip: Calculate Your Days
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Before filing, add up the total number of days you have spent
                  outside the US during the statutory period. Subtract this
                  number from the total days in that period. If the remaining
                  days meet or exceed the physical presence requirement, you
                  qualify. Keep detailed records of all travel dates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Good Moral Character                  */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Good Moral Character Requirement
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                USCIS requires that you demonstrate good moral character during
                the statutory period (the 5 or 3 years before filing, continuing
                through the oath ceremony). This is one of the most nuanced
                eligibility requirements.
              </p>
              <p>
                <strong className="text-white">Automatic bars</strong> to good
                moral character include: murder (permanent bar), aggravated
                felony convictions after November 29, 1990 (permanent bar),
                persecution of others, and certain drug trafficking offenses.
              </p>
              <p>
                <strong className="text-white">Conditional bars</strong> that
                apply during the statutory period include: any crime involving
                moral turpitude, two or more offenses with combined sentences of
                5+ years, controlled substance violations, imprisonment for 180+
                days, gambling offenses, prostitution, and failure to pay
                court-ordered child support or alimony.
              </p>
              <p>
                <strong className="text-white">Not automatically disqualifying:</strong>{" "}
                Minor traffic violations (including DUI in some cases), arrests
                without conviction, and expunged records. However, you must
                disclose all arrests and charges on your N-400, even if they did
                not result in conviction.
              </p>
              <p>
                If you have any criminal history or concerns about moral
                character, consult an immigration attorney before filing. Being
                transparent on your application is always better than omitting
                information, which USCIS considers a sign of poor moral
                character.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: English and Civics Test               */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              English and Civics Test Requirements
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                All naturalization applicants must pass both an English language
                test and a civics test during the{" "}
                <Link
                  href="/interview-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  naturalization interview
                </Link>
                . The English test evaluates your ability to read, write, and
                speak English. The civics test evaluates your knowledge of
                American government, history, and geography.
              </p>
              <p>
                The 2025 civics test draws from a pool of{" "}
                <Link
                  href="/questions"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  128 official questions
                </Link>
                . During your interview, the officer asks up to 20 questions and
                you must answer at least 12 correctly (60%) to pass. You can
                start preparing with our free{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  flashcard study tool
                </Link>{" "}
                or take a{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  simulated practice test
                </Link>
                .
              </p>
              <div className="mt-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                  English Exemptions
                </h3>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                    <span>
                      <strong className="text-white">50/20 rule:</strong> Age 50+
                      with 20+ years as a permanent resident. Take civics in your
                      language.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                    <span>
                      <strong className="text-white">55/15 rule:</strong> Age 55+
                      with 15+ years as a permanent resident. Take civics in your
                      language.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-emerald-400" />
                    <span>
                      <strong className="text-white">
                        <Link
                          href="/senior-exemption"
                          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                        >
                          65/20 rule
                        </Link>
                        :
                      </strong>{" "}
                      Age 65+ with 20+ years as a permanent resident. Take a
                      simplified 20-question civics test in your language.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Additional Requirements               */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Additional Requirements
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Beyond the main criteria covered in the eligibility checker
                above, USCIS also requires that you:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Have lived in your state or district for at least 3
                      months
                    </strong>{" "}
                    before filing. Your application is processed by the USCIS
                    field office that serves your place of residence.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Be willing to take the Oath of Allegiance
                    </strong>{" "}
                    to the United States. This includes supporting the
                    Constitution, renouncing foreign allegiances, and being
                    willing to serve in the US military or perform civilian
                    service if required by law.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Have filed US tax returns
                    </strong>{" "}
                    for all years during the statutory period, if required. USCIS
                    may request tax transcripts at your interview.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Register for Selective Service
                    </strong>{" "}
                    if you are a male who was between 18 and 25 when you became
                    a permanent resident. Failure to register can affect your
                    good moral character finding.
                  </span>
                </li>
              </ul>
              <p>
                Once you confirm eligibility, the next step is to file Form
                N-400. See our{" "}
                <Link
                  href="/n400-guide"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  complete N-400 guide
                </Link>{" "}
                for a section-by-section walkthrough, or review the{" "}
                <Link
                  href="/citizenship-timeline"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  citizenship timeline
                </Link>{" "}
                to understand how long the process takes.
              </p>
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
              Ready to start your citizenship journey?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              If you meet the eligibility requirements, the next step is
              preparing for the civics and English tests. Our free tools will
              help you pass on the first try.
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
                href="/citizenship-timeline"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Citizenship Timeline
              </Link>
              <Link
                href="/citizenship-costs"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Costs &amp; Fees
              </Link>
            </div>
          </div>

          <AuthorAttribution />
        </section>
      </div>
    </>
  );
}
