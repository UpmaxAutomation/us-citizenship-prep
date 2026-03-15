import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import AuthorAttribution from "@/app/components/AuthorAttribution";
import { buildMetadata, siteConfig } from "@/app/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateSpeakableSchema,
} from "@/app/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "US Citizenship Costs: Complete Fee Breakdown (2025)",
  description:
    "Understand every cost of becoming a US citizen in 2025. Covers the $710 N-400 filing fee, $85 biometrics, fee waivers, reduced fees, passport costs, and hidden expenses most guides skip.",
  path: "/citizenship-costs",
});

const faqs = [
  {
    question: "How much does it cost to become a US citizen in 2025?",
    answer:
      "The standard total cost is $795, which includes the $710 Form N-400 filing fee and the $85 biometrics services fee. Additional costs may include passport-style photos ($10-15), certified document copies ($5-25 each), and a US passport after naturalization ($130-160). If you hire an immigration attorney, expect to pay $500 to $3,000 or more depending on complexity.",
  },
  {
    question: "Can I apply for citizenship for free?",
    answer:
      "Yes, if you qualify for a fee waiver using Form I-912, Request for Fee Waiver. You may be eligible if you receive a means-tested government benefit (such as Medicaid, SNAP, or SSI), if your household income is at or below 150% of the Federal Poverty Guidelines, or if you can demonstrate financial hardship. If approved, both the filing fee and biometrics fee are waived entirely.",
  },
  {
    question: "What is the reduced fee for Form N-400?",
    answer:
      "Applicants with a household income greater than 150% but at or below 200% of the Federal Poverty Guidelines can request a reduced filing fee of $405 using Form I-942, Request for Reduced Fee. The $85 biometrics fee still applies, bringing the reduced total to $490. You must submit proof of income with the request.",
  },
  {
    question: "What forms of payment does USCIS accept?",
    answer:
      "USCIS accepts several payment methods. For online filing, you can pay by credit card, debit card, or direct bank withdrawal (ACH). For paper filing, you can pay by money order, personal check, cashier's check, or credit card using Form G-1450 (Authorization for Credit Card Transactions). Do not send cash. Make checks payable to U.S. Department of Homeland Security.",
  },
  {
    question: "Do I get a refund if my citizenship application is denied?",
    answer:
      "No, USCIS does not refund the filing fee or biometrics fee if your application is denied. The fees cover the cost of processing your application and conducting background checks, regardless of the outcome. This is why it is important to verify your eligibility thoroughly before filing. Use our free eligibility checker to assess your situation before spending money.",
  },
  {
    question: "Are there additional costs beyond the USCIS filing fee?",
    answer:
      "Yes, several additional costs are commonly associated with the naturalization process. You will need two passport-style photos ($10-15 at most pharmacies), and you may need certified copies of vital records such as marriage certificates or court documents ($5-25 per copy). After naturalization, a US passport costs $130 for a passport book or $160 for both a book and card. If you hire an attorney, fees typically range from $500 to $3,000.",
  },
];

export default function CitizenshipCostsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Citizenship Costs",
      url: `${siteConfig.url}/citizenship-costs`,
    },
  ]);

  const articleSchema = generateArticleSchema({
    title: "US Citizenship Costs: Complete Fee Breakdown (2025)",
    description:
      "Complete breakdown of every cost associated with becoming a US citizen through naturalization in 2025.",
    path: "/citizenship-costs",
    datePublished: "2025-11-15",
    dateModified: "2026-03-10",
  });

  const faqSchema = generateFAQSchema(faqs);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/citizenship-costs`,
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
              <span className="text-slate-300">Citizenship Costs</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How Much Does US Citizenship Cost?
          </h1>
          <p
            className="text-lg text-slate-400 leading-relaxed"
            data-speakable="true"
          >
            Becoming a United States citizen through naturalization involves
            several costs beyond the government filing fee. This guide breaks
            down every expense you should budget for in 2025, including the
            N-400 filing fee, biometrics, passport photos, the post-oath
            passport application, and optional legal assistance. We also cover
            how to apply for a fee waiver or reduced fee if you qualify.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-4 mt-12 space-y-12">
          {/* USCIS Filing Fees */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              USCIS Filing Fee Breakdown
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              The United States Citizenship and Immigration Services (USCIS)
              charges two mandatory fees when you file Form N-400, Application
              for Naturalization. These fees fund the processing of your
              application, background checks, interview, and oath ceremony.
            </p>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                      Fee Component
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300 text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr>
                    <td className="px-6 py-4 text-slate-400">
                      N-400 Filing Fee
                    </td>
                    <td className="px-6 py-4 text-white font-semibold text-right">
                      $710
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">
                      Biometrics Services Fee
                    </td>
                    <td className="px-6 py-4 text-white font-semibold text-right">
                      $85
                    </td>
                  </tr>
                  <tr className="bg-slate-800/30">
                    <td className="px-6 py-4 text-white font-bold">
                      Total Standard Cost
                    </td>
                    <td className="px-6 py-4 text-emerald-400 font-bold text-right text-lg">
                      $795
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-blue-400">Note:</strong> Applicants
                aged 75 and older are exempt from the biometrics fee, reducing
                the total to $710. Military applicants filing under Section 328
                or 329 of the INA pay no filing fee at all.
              </p>
            </div>
          </section>

          {/* Fee Waiver */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Fee Waiver: Pay Nothing with Form I-912
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              If you are in a difficult financial situation, you may qualify for
              a complete fee waiver that eliminates both the filing fee and the
              biometrics fee. To request a fee waiver, you must file{" "}
              <strong className="text-white">Form I-912</strong>, Request for
              Fee Waiver, along with your N-400 application. USCIS will consider
              your request if you meet any of the following criteria:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    Means-Tested Government Benefit
                  </p>
                  <p className="text-sm text-slate-400">
                    You, your spouse, or a member of your household currently
                    receives a means-tested benefit such as Medicaid, SNAP
                    (food stamps), Supplemental Security Income (SSI), or
                    Temporary Assistance for Needy Families (TANF).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    Income at or Below 150% of Federal Poverty Guidelines
                  </p>
                  <p className="text-sm text-slate-400">
                    Your household income is at or below 150% of the federal
                    poverty level. For 2025, this means an annual income of
                    $22,590 or less for a single person, or $46,800 or less for
                    a family of four (amounts vary by household size).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">
                    Financial Hardship
                  </p>
                  <p className="text-sm text-slate-400">
                    You can demonstrate that paying the fee would cause a
                    financial hardship due to extraordinary circumstances such
                    as unexpected medical bills, a recent job loss, or a natural
                    disaster affecting your household.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              You must submit supporting documentation with your I-912, such as
              benefit award letters, tax returns, pay stubs, or a written
              statement explaining your hardship. USCIS reviews each fee waiver
              request individually. If your waiver is denied, USCIS will notify
              you and you will need to resubmit your N-400 with the full fee.
            </p>
          </section>

          {/* Reduced Fee */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Reduced Fee: Pay $490 with Form I-942
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              If your income is too high for a full fee waiver but still
              limited, you may qualify for a reduced filing fee. Using{" "}
              <strong className="text-white">Form I-942</strong>, Request for
              Reduced Fee, the N-400 filing fee drops from $710 to $405. The
              $85 biometrics fee still applies.
            </p>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                      Fee Component
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300 text-right">
                      Standard
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300 text-right">
                      Reduced
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr>
                    <td className="px-6 py-4 text-slate-400">Filing Fee</td>
                    <td className="px-6 py-4 text-slate-500 text-right line-through">
                      $710
                    </td>
                    <td className="px-6 py-4 text-emerald-400 font-semibold text-right">
                      $405
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">
                      Biometrics Fee
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-right">
                      $85
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-right">
                      $85
                    </td>
                  </tr>
                  <tr className="bg-slate-800/30">
                    <td className="px-6 py-4 text-white font-bold">Total</td>
                    <td className="px-6 py-4 text-slate-500 text-right font-semibold line-through">
                      $795
                    </td>
                    <td className="px-6 py-4 text-emerald-400 font-bold text-right text-lg">
                      $490
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 leading-relaxed">
              To qualify, your household income must be greater than 150% but
              at or below 200% of the Federal Poverty Guidelines. For 2025,
              this means a single person earning between $22,591 and $30,120,
              or a family of four earning between $46,801 and $62,400. You must
              provide proof of income such as recent tax returns, pay stubs, or
              an employer letter.
            </p>
          </section>

          {/* Payment Methods */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Accepted Payment Methods
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              USCIS accepts different payment methods depending on whether you
              file online or by mail. It is critical that your payment is
              correct, as an incorrect or bounced payment will cause USCIS to
              reject your entire application package.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">
                  Online Filing (myUSCIS)
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">&#10003;</span>
                    Credit card (Visa, Mastercard, Amex, Discover)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">&#10003;</span>
                    Debit card
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">&#10003;</span>
                    Direct bank withdrawal (ACH)
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">
                  Paper Filing (By Mail)
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">&#10003;</span>
                    Money order (payable to U.S. Department of Homeland
                    Security)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">&#10003;</span>
                    Personal check
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">&#10003;</span>
                    Cashier&apos;s check
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">&#10003;</span>
                    Credit card via Form G-1450
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-amber-400">Important:</strong> Never
                send cash to USCIS. If paying by check, make it payable to
                &quot;U.S. Department of Homeland Security&quot; (not USCIS).
                A bounced check will result in your application being rejected
                and may delay your case by months.
              </p>
            </div>
          </section>

          {/* Additional Costs */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Additional Costs to Budget For
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Beyond the USCIS filing fee, there are several other expenses
              that most applicants encounter during the naturalization process.
              While not all are mandatory, you should budget for them to avoid
              surprises.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-semibold">
                    Passport-Style Photos
                  </h3>
                  <span className="text-emerald-400 font-semibold whitespace-nowrap">
                    $10 - $15
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  Two USCIS-compliant passport photos are required with your
                  N-400 application. Most pharmacies (CVS, Walgreens, Walmart)
                  offer passport photo services. Photos must be 2x2 inches,
                  taken within the last 30 days, with a plain white background.
                  Online filing may allow digital upload instead.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-semibold">
                    Certified Document Copies
                  </h3>
                  <span className="text-emerald-400 font-semibold whitespace-nowrap">
                    $5 - $25 each
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  You may need certified copies of marriage certificates, birth
                  certificates, divorce decrees, or court records. Fees vary by
                  jurisdiction. Some states charge $5 per copy while others
                  charge $25 or more. If your documents are in a foreign
                  language, you will also need certified English translations.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-semibold">
                    Certified Translations
                  </h3>
                  <span className="text-emerald-400 font-semibold whitespace-nowrap">
                    $20 - $75 per page
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  Any document submitted to USCIS that is not in English must
                  include a certified English translation. Professional
                  translation services typically charge $20 to $75 per page
                  depending on the language and document complexity. The
                  translator must certify that the translation is complete and
                  accurate.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-semibold">
                    US Passport (After Naturalization)
                  </h3>
                  <span className="text-emerald-400 font-semibold whitespace-nowrap">
                    $130 - $160
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  After becoming a citizen, you will want to apply for a US
                  passport as a secondary proof of citizenship. A passport book
                  costs $130 ($100 application fee + $30 acceptance fee for
                  first-time applicants). A passport book plus card costs $160.
                  Expedited processing adds $60.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-semibold">
                    Immigration Attorney (Optional)
                  </h3>
                  <span className="text-amber-400 font-semibold whitespace-nowrap">
                    $500 - $3,000+
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  Most straightforward naturalization cases do not require an
                  attorney. However, if you have a criminal record, extended
                  travel history, tax issues, or other complicating factors, an
                  immigration attorney can help navigate your case. Fees
                  typically range from $500 for a basic consultation and review
                  to $3,000 or more for full representation through the oath
                  ceremony.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-semibold">
                    Travel to USCIS Offices
                  </h3>
                  <span className="text-slate-500 font-semibold whitespace-nowrap">
                    Varies
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  You will need to travel to a USCIS Application Support Center
                  for biometrics and to your local field office for the
                  interview and oath ceremony. Factor in gas, parking, public
                  transit, or rideshare costs, as well as time off from work.
                  Some applicants need to travel significant distances to reach
                  the nearest office.
                </p>
              </div>
            </div>
          </section>

          {/* Total Cost Summary */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Total Cost Summary
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Here is a realistic estimate of what most applicants spend from
              filing to passport in hand. Your actual costs will depend on
              your specific situation.
            </p>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                      Expense
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300 text-right">
                      Low End
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300 text-right">
                      High End
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr>
                    <td className="px-6 py-4 text-slate-400">
                      USCIS Filing + Biometrics
                    </td>
                    <td className="px-6 py-4 text-white text-right">$795</td>
                    <td className="px-6 py-4 text-white text-right">$795</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">
                      Passport Photos
                    </td>
                    <td className="px-6 py-4 text-white text-right">$10</td>
                    <td className="px-6 py-4 text-white text-right">$15</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">
                      Certified Copies / Translations
                    </td>
                    <td className="px-6 py-4 text-white text-right">$0</td>
                    <td className="px-6 py-4 text-white text-right">$200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">
                      US Passport (Book + Card)
                    </td>
                    <td className="px-6 py-4 text-white text-right">$130</td>
                    <td className="px-6 py-4 text-white text-right">$220</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-400">
                      Attorney (Optional)
                    </td>
                    <td className="px-6 py-4 text-white text-right">$0</td>
                    <td className="px-6 py-4 text-white text-right">
                      $3,000
                    </td>
                  </tr>
                  <tr className="bg-slate-800/30">
                    <td className="px-6 py-4 text-white font-bold">
                      Estimated Total
                    </td>
                    <td className="px-6 py-4 text-emerald-400 font-bold text-right">
                      $935
                    </td>
                    <td className="px-6 py-4 text-amber-400 font-bold text-right">
                      $4,230
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* International Comparison */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How US Citizenship Costs Compare Internationally
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              The cost of naturalization varies significantly around the world.
              While the US fee is substantial, it falls in the middle compared
              to other popular immigration destinations. Here is how the US
              compares to several other countries in 2025:
            </p>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                      Country
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300 text-right">
                      Government Fee
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-300 text-right">
                      Approx. USD
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">
                      United States
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-right">
                      $795 USD
                    </td>
                    <td className="px-6 py-4 text-white font-semibold text-right">
                      $795
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">
                      Canada
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-right">
                      $630 CAD
                    </td>
                    <td className="px-6 py-4 text-white font-semibold text-right">
                      ~$460
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">
                      United Kingdom
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-right">
                      &pound;1,330 GBP
                    </td>
                    <td className="px-6 py-4 text-white font-semibold text-right">
                      ~$1,680
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">
                      Australia
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-right">
                      $490 AUD
                    </td>
                    <td className="px-6 py-4 text-white font-semibold text-right">
                      ~$320
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">
                      Germany
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-right">
                      &euro;255 EUR
                    </td>
                    <td className="px-6 py-4 text-white font-semibold text-right">
                      ~$275
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-white font-medium">
                      New Zealand
                    </td>
                    <td className="px-6 py-4 text-slate-400 text-right">
                      $470 NZD
                    </td>
                    <td className="px-6 py-4 text-white font-semibold text-right">
                      ~$280
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The UK is notably more expensive than the US, while countries
              like Australia, Germany, and New Zealand are significantly cheaper.
              However, costs should be weighed against processing times, the
              benefits of citizenship in each country, and the overall
              immigration system. The US does offer fee waivers and reduced
              fees for low-income applicants, which most other countries do not.
            </p>
          </section>

          {/* Tips to Save Money */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Tips to Minimize Your Costs
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <span className="text-blue-400 font-bold mt-0.5">1.</span>
                <div>
                  <p className="text-white font-medium mb-1">
                    Apply for a Fee Waiver or Reduced Fee
                  </p>
                  <p className="text-sm text-slate-400">
                    If your income is below 150% of the poverty guidelines, you
                    may qualify for a complete waiver using Form I-912. If
                    between 150% and 200%, use Form I-942 for the reduced fee.
                    This alone can save you $305 to $795.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <span className="text-blue-400 font-bold mt-0.5">2.</span>
                <div>
                  <p className="text-white font-medium mb-1">
                    File Online to Avoid Mailing Costs
                  </p>
                  <p className="text-sm text-slate-400">
                    Filing through myUSCIS saves you the cost of printing,
                    certified mail, and shipping. You also get faster
                    notifications and can upload documents digitally instead of
                    making copies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <span className="text-blue-400 font-bold mt-0.5">3.</span>
                <div>
                  <p className="text-white font-medium mb-1">
                    Use Free Study Resources
                  </p>
                  <p className="text-sm text-slate-400">
                    You do not need to pay for citizenship test prep. Our{" "}
                    <Link
                      href="/study"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      free study guide
                    </Link>{" "}
                    covers all 128 civics questions with flashcards and{" "}
                    <Link
                      href="/practice-test"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      practice tests
                    </Link>
                    . Avoid paying for courses or books that cover the same free
                    USCIS material.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <span className="text-blue-400 font-bold mt-0.5">4.</span>
                <div>
                  <p className="text-white font-medium mb-1">
                    Get It Right the First Time
                  </p>
                  <p className="text-sm text-slate-400">
                    USCIS does not refund fees for denied applications. Verify
                    your{" "}
                    <Link
                      href="/eligibility-checker"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      eligibility
                    </Link>{" "}
                    before filing, follow our{" "}
                    <Link
                      href="/n400-guide"
                      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      N-400 guide
                    </Link>{" "}
                    to avoid common mistakes, and prepare thoroughly for the
                    civics test to pass on the first attempt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <span className="text-blue-400 font-bold mt-0.5">5.</span>
                <div>
                  <p className="text-white font-medium mb-1">
                    Take Your Own Passport Photos
                  </p>
                  <p className="text-sm text-slate-400">
                    If filing online and your camera takes high-resolution
                    photos, you can take compliant passport photos at home using
                    a white background and proper lighting. Several free online
                    tools can help you crop and format them to USCIS
                    specifications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions About Citizenship Costs
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-slate-900/50 border border-slate-800 rounded-xl"
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none text-white font-medium hover:text-blue-400 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4">
                    <p className="text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Cross-Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Continue Your Citizenship Journey
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Understanding costs is just one part of the process. Use these
              resources to prepare for every step of your naturalization
              journey.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/eligibility-checker"
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors group"
              >
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors mb-1">
                  Eligibility Checker
                </h3>
                <p className="text-sm text-slate-500">
                  Find out if you meet the requirements to apply for US
                  citizenship before spending any money.
                </p>
              </Link>
              <Link
                href="/n400-guide"
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors group"
              >
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors mb-1">
                  N-400 Form Guide
                </h3>
                <p className="text-sm text-slate-500">
                  Step-by-step walkthrough of every section of the
                  naturalization application.
                </p>
              </Link>
              <Link
                href="/citizenship-timeline"
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors group"
              >
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors mb-1">
                  Citizenship Timeline
                </h3>
                <p className="text-sm text-slate-500">
                  See how long each step takes from filing to oath ceremony
                  with 2025 processing times.
                </p>
              </Link>
              <Link
                href="/interview-guide"
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-colors group"
              >
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors mb-1">
                  Interview Guide
                </h3>
                <p className="text-sm text-slate-500">
                  Learn what to expect at your naturalization interview and how
                  to prepare effectively.
                </p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-600/20 to-blue-800/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Start Preparing for Your Citizenship Test
            </h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              While you budget for the costs, start studying for the civics
              and English tests right now. Our free tools cover all 128 USCIS
              questions and include practice tests to track your progress.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Start Studying for Free
              </Link>
              <Link
                href="/practice-test"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Take a Practice Test
              </Link>
            </div>
          </section>

          {/* Author Attribution */}
          <AuthorAttribution />
        </main>
      </div>
    </>
  );
}
