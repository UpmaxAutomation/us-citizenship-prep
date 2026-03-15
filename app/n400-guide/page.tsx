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
  title: "N-400 Form Guide: Complete Section-by-Section Walkthrough",
  description:
    "Step-by-step guide to completing USCIS Form N-400, Application for Naturalization. Covers every section, required documents, fees, common mistakes, and what happens after filing.",
  path: "/n400-guide",
});

const faqs = [
  {
    question: "How long does it take to fill out Form N-400?",
    answer:
      "Most applicants spend 1 to 2 hours completing the N-400. USCIS estimates the form takes about 6 hours total when you include time gathering documents, reading instructions, and preparing supporting evidence. Filing online through myUSCIS can be faster since it saves your progress.",
  },
  {
    question: "Can I file Form N-400 online?",
    answer:
      "Yes, USCIS strongly encourages online filing through your myUSCIS account at my.uscis.gov. Online filing allows you to save your progress, upload documents electronically, pay fees by credit card, and receive electronic notifications. You can also file by mail using the paper form.",
  },
  {
    question: "What is the filing fee for Form N-400?",
    answer:
      "The standard filing fee is $710 plus an $85 biometrics fee, totaling $795. If you qualify for a fee waiver (Form I-912) based on means-tested benefits, income below 150% of the federal poverty guidelines, or financial hardship, you may pay nothing. A reduced fee of $405 is available for applicants with income below 200% of poverty guidelines (Form I-942).",
  },
  {
    question: "What documents do I need to submit with my N-400?",
    answer:
      "At minimum, you need a copy of your green card (front and back), two passport-style photos, and the filing fee. Depending on your situation, you may also need your marriage certificate, spouse's proof of citizenship, tax returns, travel records, court documents for any arrests, and military service records. USCIS may request additional evidence at any time.",
  },
  {
    question: "What happens if I make a mistake on my N-400?",
    answer:
      "If you catch the mistake before your interview, you can correct it at the interview. Bring the corrected information and any supporting documents. The USCIS officer will go through your N-400 line by line during the interview and give you the opportunity to make corrections. If filing online, you may be able to edit your application before final submission.",
  },
  {
    question: "Can I apply for citizenship if I have been outside the US for an extended period?",
    answer:
      "Extended absences can affect your eligibility. Trips of 6 to 12 months may raise a presumption that you broke continuous residence, which you can overcome with evidence. Trips over 12 months generally break continuous residence, requiring you to restart the waiting period. List all trips on Part 9 of the N-400 accurately and bring supporting documentation to your interview.",
  },
];

export default function N400GuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "N-400 Guide", url: `${siteConfig.url}/n400-guide` },
  ]);

  const articleSchema = generateArticleSchema({
    title: "N-400 Form Guide: Complete Section-by-Section Walkthrough",
    description:
      "Step-by-step guide to completing USCIS Form N-400, Application for Naturalization.",
    path: "/n400-guide",
    datePublished: "2025-11-15",
    dateModified: "2026-03-10",
  });

  const faqSchema = generateFAQSchema(faqs);

  const howToSchema = generateHowToSchema({
    name: "How to Apply for US Citizenship (Form N-400)",
    description:
      "Complete process for filing Form N-400 and becoming a naturalized US citizen.",
    totalTime: "P8M",
    steps: [
      {
        name: "Determine your eligibility",
        text: "Confirm you meet all naturalization requirements including age, green card duration, continuous residence, physical presence, and good moral character. Use our eligibility checker for a quick assessment.",
      },
      {
        name: "Create a USCIS online account",
        text: "Visit my.uscis.gov and create an account. This allows you to file online, track your case, and receive electronic notifications about your application status.",
      },
      {
        name: "Complete Form N-400",
        text: "Fill out all 18 parts of the N-400 application including personal information, residence history, employment history, travel history, and the oath of allegiance. Review every answer carefully before submitting.",
      },
      {
        name: "Gather required documents",
        text: "Collect copies of your green card, passport photos, marriage certificate (if applicable), tax returns, and any other supporting documents required for your specific situation.",
      },
      {
        name: "Pay the filing fee",
        text: "Submit the $710 filing fee plus $85 biometrics fee ($795 total). Payment can be made by credit card, money order, or personal check. Apply for a fee waiver using Form I-912 if you qualify.",
      },
      {
        name: "Submit your application",
        text: "File online through myUSCIS or mail your completed paper form to the appropriate USCIS lockbox facility. Keep copies of everything you submit.",
      },
      {
        name: "Attend biometrics appointment",
        text: "Visit a USCIS Application Support Center for fingerprinting and photo capture, typically 4 to 8 weeks after filing. Bring your appointment notice and valid photo ID.",
      },
      {
        name: "Attend your naturalization interview",
        text: "Meet with a USCIS officer who will review your N-400, test your English ability, and administer the civics test. Bring all original documents, your green card, and your appointment notice.",
      },
      {
        name: "Take the Oath of Allegiance",
        text: "After approval, attend a naturalization ceremony where you take the Oath of Allegiance and receive your Certificate of Naturalization. You are now a US citizen.",
      },
    ],
  });

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/n400-guide`,
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
              <span className="text-slate-300">N-400 Guide</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            N-400 Form Guide:{" "}
            <span className="text-blue-400">
              Complete Section-by-Section Walkthrough
            </span>
          </h1>
          <p
            data-speakable="true"
            className="mt-4 text-slate-400 text-lg leading-relaxed"
          >
            Form N-400, Application for Naturalization, is the official form you
            file with USCIS to apply for US citizenship. This guide walks you
            through every section of the form, explains what documents you need,
            covers the fees and waiver options, and tells you exactly what to
            expect after you submit your application.
          </p>
        </header>

        {/* ============================================= */}
        {/* Section: What is Form N-400                    */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">What Is Form N-400?</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Form N-400, officially titled &ldquo;Application for
                Naturalization,&rdquo; is the application that lawful permanent
                residents file to become US citizens. It is administered by US
                Citizenship and Immigration Services (USCIS) and is the only
                path to citizenship for most green card holders.
              </p>
              <p>
                The form is 20 pages long and contains 18 parts. It covers your
                personal information, immigration history, residence and
                employment history, travel records, family information, and a
                series of questions about your background and moral character.
                You also affirm your willingness to take the Oath of Allegiance.
              </p>
              <p>
                Before starting the N-400, confirm that you meet all
                eligibility requirements using our{" "}
                <Link
                  href="/eligibility-checker"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  eligibility checker
                </Link>
                . You can file the form online at{" "}
                <a
                  href="https://my.uscis.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  my.uscis.gov
                </a>{" "}
                or by mailing a paper copy to the appropriate USCIS lockbox.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Section-by-Section Walkthrough        */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Section-by-Section Walkthrough
            </h2>

            {/* Parts 1-3 */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 mb-4">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">
                Parts 1-3: Eligibility, Personal Information &amp;
                Accommodations
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">Part 1 - Eligibility:</strong>{" "}
                  Select the basis for your eligibility. Most applicants choose
                  either the 5-year rule (general) or the 3-year rule (married
                  to a US citizen). Other options include military service and
                  certain special categories.
                </p>
                <p>
                  <strong className="text-white">
                    Part 2 - Information About You:
                  </strong>{" "}
                  Enter your full legal name, any previous names, date of birth,
                  Social Security number, USCIS account number (A-Number), and
                  country of birth and nationality. If you have ever used a
                  different name (including maiden name), list it here. This
                  section also asks about your immigration status and green card
                  details.
                </p>
                <p>
                  <strong className="text-white">
                    Part 3 - Accommodations:
                  </strong>{" "}
                  If you have a physical or developmental disability or mental
                  impairment that requires accommodation during the interview or
                  oath ceremony, request it here. You may also need to file Form
                  N-648 (Medical Certification for Disability Exceptions) if you
                  are requesting an exemption from the English or civics test.
                </p>
              </div>
            </div>

            {/* Parts 4-6 */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 mb-4">
              <h3 className="text-lg font-semibold text-amber-300 mb-3">
                Parts 4-6: Contact, Residence &amp; Parents
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">
                    Part 4 - Contact Information:
                  </strong>{" "}
                  Your current mailing address, phone number, and email. USCIS
                  sends all correspondence to this address, so make sure it is
                  accurate and up to date. If you move during the application
                  process, file a change of address with USCIS immediately.
                </p>
                <p>
                  <strong className="text-white">
                    Part 5 - Residence History:
                  </strong>{" "}
                  List every address where you have lived during the past 5
                  years (or 3 years if applying under the spouse rule), starting
                  with your current address and working backward. Include exact
                  dates for each address. Gaps in your residence history will
                  raise questions at your interview. This is one of the most
                  common areas where applicants make mistakes, so double-check
                  your dates carefully.
                </p>
                <p>
                  <strong className="text-white">
                    Part 6 - Parents:
                  </strong>{" "}
                  Provide information about both of your parents, including
                  names, dates of birth, countries of birth, and citizenship
                  status. This is used to determine whether you may already have
                  a claim to US citizenship through a parent. If a parent
                  naturalized before you turned 18, you may have automatically
                  acquired citizenship.
                </p>
              </div>
            </div>

            {/* Parts 7-9 */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 mb-4">
              <h3 className="text-lg font-semibold text-emerald-300 mb-3">
                Parts 7-9: Biographic, Employment &amp; Travel
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">
                    Part 7 - Biographic Information:
                  </strong>{" "}
                  Your ethnicity, race, height, weight, and eye and hair color.
                  This information is used for the biometrics appointment and
                  identity verification.
                </p>
                <p>
                  <strong className="text-white">
                    Part 8 - Employment History:
                  </strong>{" "}
                  List all employers during the past 5 years (or 3 years),
                  including company names, addresses, job titles, and dates of
                  employment. Include periods of unemployment or self-employment.
                  USCIS uses this to verify your residence and ties to the US.
                </p>
                <p>
                  <strong className="text-white">
                    Part 9 - Time Outside the United States:
                  </strong>{" "}
                  This is a critical section. List every trip outside the US
                  during the statutory period with exact departure and return
                  dates, destination countries, and purpose of each trip. USCIS
                  uses this information to calculate your physical presence and
                  evaluate continuous residence. Keep a detailed travel log and
                  cross-reference with passport stamps.
                </p>
              </div>
            </div>

            {/* Parts 10-13 */}
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6 mb-4">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">
                Parts 10-13: Background, Moral Character &amp; Oath
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">
                    Part 10 - Criminal and Immigration History:
                  </strong>{" "}
                  Answer honestly about any arrests, citations, charges, or
                  convictions, even if they were dismissed or expunged. Disclose
                  any immigration violations or deportation proceedings. Lying or
                  omitting information here is far worse than the underlying
                  issue. USCIS conducts a background check and will discover
                  discrepancies.
                </p>
                <p>
                  <strong className="text-white">
                    Part 11 - Good Moral Character:
                  </strong>{" "}
                  A series of yes/no questions covering topics like tax
                  obligations, child support, substance abuse, gambling, and
                  other behaviors that reflect on moral character. Answer every
                  question truthfully. A &ldquo;yes&rdquo; answer does not
                  automatically disqualify you but will require additional
                  documentation and explanation.
                </p>
                <p>
                  <strong className="text-white">
                    Part 12 - Attachment to the Constitution:
                  </strong>{" "}
                  Questions about your support for the US Constitution and form
                  of government. You must affirm your willingness to defend the
                  Constitution and bear arms or perform civilian service if
                  required by law. Religious or conscientious objections to
                  bearing arms are permitted.
                </p>
                <p>
                  <strong className="text-white">
                    Part 13 - Oath of Allegiance:
                  </strong>{" "}
                  You affirm that you are willing to take the full Oath of
                  Allegiance at your naturalization ceremony. This includes
                  renouncing foreign titles of nobility and any allegiance to
                  foreign states.
                </p>
              </div>
            </div>

            {/* Parts 14-18 */}
            <div className="bg-slate-800/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-300 mb-3">
                Parts 14-18: Signatures &amp; Additional Information
              </h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">Part 14 - Your Signature:</strong>{" "}
                  Sign and date your application. If filing online, you will
                  provide an electronic signature. Your signature certifies that
                  everything in the application is true and correct.
                </p>
                <p>
                  <strong className="text-white">
                    Parts 15-16 - Interpreter and Preparer:
                  </strong>{" "}
                  If someone helped you complete the form or translated for you,
                  their information goes here. An attorney or accredited
                  representative who prepared your application would also be
                  listed.
                </p>
                <p>
                  <strong className="text-white">
                    Parts 17-18 - Additional Information:
                  </strong>{" "}
                  Extra space for answers that did not fit in the designated
                  sections. If you need more room for residence history, travel
                  records, or employment history, continue here and clearly
                  reference the part and question number.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Required Documents Checklist          */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Required Documents Checklist
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Gather these documents before starting your N-400. Having
                everything ready will make the process smoother and reduce
                delays.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Green card</strong> (Form
                    I-551) - copy of front and back
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Two passport-style photos
                    </strong>{" "}
                    (2x2 inches, taken within the last 30 days)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Valid passport</strong> or
                    travel document (current and any expired passports used
                    during the statutory period)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Marriage certificate</strong>{" "}
                    (if applying under the 3-year spouse rule)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Spouse&apos;s proof of US citizenship
                    </strong>{" "}
                    (birth certificate, naturalization certificate, or passport)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Tax returns</strong> (IRS
                    transcripts for the past 5 or 3 years)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Court records and police reports
                    </strong>{" "}
                    (for any arrests, charges, or convictions, even if dismissed)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Selective Service registration
                    </strong>{" "}
                    (for males who registered between ages 18-25)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Common Mistakes                       */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Common Mistakes and How to Avoid Them
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                These are the most frequent errors that delay applications or
                cause problems at the interview. Avoid them by being thorough
                and honest.
              </p>

              <div className="space-y-4 mt-4">
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                  <h3 className="font-semibold text-red-300 mb-1">
                    1. Incorrect or incomplete travel history
                  </h3>
                  <p className="text-sm text-slate-400">
                    Many applicants forget short trips or get dates wrong. Review
                    passport stamps, flight records, and credit card statements
                    to build an accurate list. USCIS will compare your records
                    against their own data.
                  </p>
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                  <h3 className="font-semibold text-red-300 mb-1">
                    2. Gaps in residence history
                  </h3>
                  <p className="text-sm text-slate-400">
                    Every day of the statutory period must be accounted for. If
                    there are gaps between addresses, the officer will ask about
                    them. Use utility bills, lease agreements, or bank statements
                    to verify dates.
                  </p>
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                  <h3 className="font-semibold text-red-300 mb-1">
                    3. Failing to disclose arrests
                  </h3>
                  <p className="text-sm text-slate-400">
                    You must disclose every arrest, citation, or charge,
                    regardless of outcome. Omitting an arrest that USCIS
                    discovers through their background check can be grounds for
                    denial based on lack of good moral character.
                  </p>
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                  <h3 className="font-semibold text-red-300 mb-1">
                    4. Filing too early
                  </h3>
                  <p className="text-sm text-slate-400">
                    You can file up to 90 days before reaching the required
                    residency period, but not earlier. Filing too early will
                    result in rejection and a wasted fee. Calculate your
                    eligibility date carefully.
                  </p>
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                  <h3 className="font-semibold text-red-300 mb-1">
                    5. Wrong filing fee or incorrect payment
                  </h3>
                  <p className="text-sm text-slate-400">
                    Submitting the wrong amount or an invalid payment method
                    causes automatic rejection. Verify the current fee on the
                    USCIS website before filing. Check that your payment clears
                    and keep a receipt.
                  </p>
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                  <h3 className="font-semibold text-red-300 mb-1">
                    6. Not studying the N-400 before the interview
                  </h3>
                  <p className="text-sm text-slate-400">
                    The USCIS officer will review your entire application at the
                    interview and ask you to confirm or correct every answer.
                    If you do not remember what you wrote, you may give
                    inconsistent answers, which raises concerns. Re-read your
                    N-400 thoroughly before your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: Filing Fee                            */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Filing Fee and Payment Options
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-3 pr-4 text-white font-semibold">
                        Fee Type
                      </th>
                      <th className="py-3 text-white font-semibold text-right">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400">
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4">N-400 Filing Fee</td>
                      <td className="py-3 text-right">$710</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4">Biometrics Fee</td>
                      <td className="py-3 text-right">$85</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 pr-4 text-white font-semibold">
                        Total
                      </td>
                      <td className="py-3 text-right text-white font-semibold">
                        $795
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-3 pr-4">
                        Reduced Fee (Form I-942)
                      </td>
                      <td className="py-3 text-right">$405</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">
                        Fee Waiver (Form I-912)
                      </td>
                      <td className="py-3 text-right">$0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                For a detailed breakdown of all costs involved in becoming a
                citizen, including optional expenses like legal help and
                passport fees, see our{" "}
                <Link
                  href="/citizenship-costs"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  complete citizenship costs guide
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section: What Happens After Filing             */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              What Happens After You File
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                After submitting your N-400, the process follows a predictable
                sequence. Here is what to expect at each stage:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Receipt Notice (2-3 weeks):</strong>{" "}
                    USCIS sends Form I-797C confirming they received your
                    application and fee. This includes your receipt number for
                    tracking your case online.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Biometrics Appointment (4-8 weeks):
                    </strong>{" "}
                    You visit a USCIS Application Support Center for
                    fingerprinting and photographs. This is usually a quick
                    appointment lasting 15 to 30 minutes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Interview (6-12 months after filing):
                    </strong>{" "}
                    The naturalization interview where the officer reviews your
                    N-400, administers the English and civics tests, and makes
                    a determination. This is the most important step. Prepare
                    thoroughly using our{" "}
                    <Link
                      href="/interview-guide"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      interview guide
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      study tools
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Decision (same day or within weeks):
                    </strong>{" "}
                    Most applicants receive a decision the same day as their
                    interview. You may be approved, continued (if additional
                    evidence is needed), or denied.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">
                      Oath Ceremony (same day to 6 weeks):
                    </strong>{" "}
                    Some offices conduct same-day ceremonies. Others schedule a
                    separate ceremony within a few weeks. You take the Oath of
                    Allegiance and receive your Certificate of Naturalization.
                  </span>
                </li>
              </ul>
              <p>
                For a detailed breakdown of the full process with estimated
                wait times, see our{" "}
                <Link
                  href="/citizenship-timeline"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  citizenship timeline
                </Link>
                .
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
              Prepare for the civics test while you wait
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              After filing your N-400, the smartest thing you can do is start
              studying for the civics and English tests. Our free tools use
              spaced repetition to help you master all 128 questions.
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
                href="/interview-guide"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Interview Guide
              </Link>
              <Link
                href="/eligibility-checker"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Eligibility Checker
              </Link>
            </div>
          </div>

          <AuthorAttribution />
        </section>
      </div>
    </>
  );
}
