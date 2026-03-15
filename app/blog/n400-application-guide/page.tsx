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

const post = getBlogPost("n400-application-guide")!;

export const metadata: Metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
});

const faqs = [
  {
    question: "How much does it cost to file the N-400?",
    answer:
      "The total filing fee is $795, which includes a $710 application fee and an $85 biometrics fee. If you qualify, you can request a full fee waiver using Form I-912 or a reduced fee using Form I-942. Military applicants may also be exempt from fees.",
  },
  {
    question: "How long does it take to process the N-400?",
    answer:
      "Processing times vary by field office but typically range from 8 to 14 months from filing to oath ceremony. You can check current processing times for your local office on the USCIS website. Factors like incomplete applications or additional document requests can extend the timeline.",
  },
  {
    question: "Can I file the N-400 online?",
    answer:
      "Yes. Most applicants can file Form N-400 online through their myUSCIS account at uscis.gov. Online filing allows you to upload documents, pay fees electronically, and track your case status. Some applicants with accommodations or military-related applications may need to file by mail.",
  },
  {
    question: "What happens if my N-400 is denied?",
    answer:
      "If your N-400 is denied, you will receive a written notice explaining the reason. You can file a Request for a Hearing on a Decision (Form N-336) within 30 days of the denial. Alternatively, you can address the issues and submit a new N-400 application with a new filing fee.",
  },
  {
    question: "Do I need a lawyer to file the N-400?",
    answer:
      "No, a lawyer is not required. Many applicants successfully complete the N-400 on their own. However, if you have a complicated immigration history, past arrests, extended absences from the US, or other issues that may affect eligibility, consulting an immigration attorney is recommended.",
  },
  {
    question:
      "Can I travel outside the US after filing the N-400?",
    answer:
      "Yes, you can travel after filing, but be cautious. Trips over 6 months can disrupt your continuous residence requirement and may cause issues. Keep all trips under 6 months and carry your green card and travel documents. Notify USCIS if your address changes while abroad.",
  },
];

export default function N400ApplicationGuidePage() {
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
            N-400 Application Guide:{" "}
            <span className="text-blue-400">How to Apply for US Citizenship</span>
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
        {/* Section 1: What is Form N-400                 */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              What Is Form N-400?
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Form N-400, officially titled &quot;Application for Naturalization,&quot;
                is the form you submit to U.S. Citizenship and Immigration
                Services (USCIS) to apply for American citizenship. It is the
                single most important document in the naturalization process and
                serves as your formal request to become a United States citizen.
              </p>
              <p>
                The N-400 collects detailed information about your background,
                including your immigration history, employment, travel outside
                the US, family status, and moral character. USCIS uses this
                information to determine whether you meet all the legal
                requirements for naturalization.
              </p>
              <p>
                You can file Form N-400 online through a myUSCIS account or by
                mailing a paper form to a USCIS lockbox facility. Most applicants
                today file online because it is faster and allows you to track
                your case status, upload supporting documents, and receive
                electronic notifications about your application.
              </p>
              <p>
                Once your N-400 is accepted, USCIS will schedule you for a
                biometrics appointment and then a naturalization interview, where
                you will also take the{" "}
                <Link
                  href="/practice-test"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  civics test
                </Link>{" "}
                and the English reading and writing test. If you pass everything,
                you will be scheduled for an oath ceremony to officially become a
                US citizen.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 2: Eligibility Requirements           */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Eligibility Requirements
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Before filing Form N-400, you must meet several eligibility
                requirements established by immigration law. If you do not meet
                all of these requirements, your application will be denied. Here
                are the key criteria:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Green card for 5 years:</strong>{" "}
                    You must have been a lawful permanent resident (green card
                    holder) for at least 5 years before filing. You can file up
                    to 90 days before your 5-year anniversary.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">3 years if married to a US citizen:</strong>{" "}
                    If you are married to and living with a US citizen, you may
                    be eligible after just 3 years of permanent residency. Your
                    spouse must have been a citizen for the entire 3-year period.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Age 18 or older:</strong>{" "}
                    You must be at least 18 years old at the time of filing.
                    There is no upper age limit for naturalization.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Continuous residence:</strong>{" "}
                    You must have lived continuously in the United States for at
                    least 5 years (or 3 years for spouse-based applicants). Trips
                    outside the US lasting more than 6 months may break your
                    continuous residence unless you can prove you maintained ties
                    to the US.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Physical presence:</strong>{" "}
                    You must have been physically present in the US for at least
                    30 months out of the past 5 years (or 18 months out of 3
                    years for spouse-based applicants). USCIS counts actual days
                    spent in the country.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Good moral character:</strong>{" "}
                    You must demonstrate good moral character during the
                    statutory period (5 or 3 years). Certain criminal offenses,
                    fraud, or failure to pay taxes can prevent you from meeting
                    this requirement. USCIS will review your background check
                    results during the application process.
                  </span>
                </li>
              </ul>
              <p>
                Additionally, you must be willing to take the Oath of Allegiance
                to the United States and demonstrate a basic knowledge of US
                history, government, and the English language. You can begin
                preparing for the civics test using our{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  free study tools
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 3: Documents You Need                 */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Documents You Need
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Gathering the right documents before you start filling out the
                N-400 will save you time and help you avoid delays. Here is a
                checklist of what you will need:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Permanent Resident Card (Green Card):</strong>{" "}
                    Your current, unexpired green card. If your card is expired,
                    you should file Form I-90 to renew it, though an expired card
                    does not prevent you from filing the N-400.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Passport-style photographs:</strong>{" "}
                    Two identical color photographs (2x2 inches) taken within
                    the last 30 days. Follow USCIS photo specifications exactly.
                    Online filers may upload a digital photo instead.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Tax returns:</strong>{" "}
                    Copies of your federal tax returns for the past 5 years (or
                    3 years for spouse-based applicants). USCIS uses these to
                    verify your good moral character and that you have met your
                    tax obligations. If you did not file taxes, you should
                    consult a tax professional before applying.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Travel records:</strong>{" "}
                    A complete record of all trips outside the United States
                    during the statutory period. Include exact dates of departure
                    and return for each trip. You can use your passport stamps,
                    airline records, or the I-94 travel history from the CBP
                    website to reconstruct your travel history.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Marriage and divorce records:</strong>{" "}
                    If applicable, bring your marriage certificate and any divorce
                    decrees from previous marriages. Spouse-based applicants must
                    prove their current marriage to a US citizen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Court records:</strong>{" "}
                    If you have ever been arrested, charged, or convicted of any
                    crime, bring complete court dispositions and records. This
                    includes expunged or sealed records, DUIs, and any interaction
                    with law enforcement, even if charges were dropped.
                  </span>
                </li>
              </ul>
              <p>
                Keep all original documents together in a folder. You will need
                to bring them to your{" "}
                <Link
                  href="/blog/citizenship-interview-what-to-expect"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  naturalization interview
                </Link>{" "}
                as well, so stay organized from the start.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 4: Step-by-Step Filing Process        */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Step-by-Step Filing Process
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Filing your N-400 online is the fastest and most convenient
                method. Here is a walkthrough of each step:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 1: Create a myUSCIS Account
              </h3>
              <p>
                Go to{" "}
                <span className="text-white">uscis.gov</span> and create a free
                myUSCIS online account. This account serves as your portal for
                filing the application, uploading documents, paying fees,
                receiving notifications, and checking your case status throughout
                the entire process.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 2: Fill Out Form N-400
              </h3>
              <p>
                The online form walks you through each section with instructions.
                You will provide personal information, immigration history,
                employment history, travel records, family details, and answers
                to good moral character questions. Take your time and answer
                every question accurately. You can save your progress and return
                to it later.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 3: Upload Supporting Documents
              </h3>
              <p>
                Upload digital copies of your green card, photos, and any other
                required documents. Make sure the images are clear and legible.
                Accepted formats typically include PDF, JPG, and PNG. If filing
                by mail, include photocopies (not originals) of your supporting
                documents.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 4: Pay the Filing Fee
              </h3>
              <p>
                The total fee is $795 ($710 application fee + $85 biometrics
                fee). You can pay online with a credit card, debit card, or
                directly from a bank account. If filing by mail, you can include
                a check, money order, or pay by credit card using Form G-1450.
                If you cannot afford the fee, submit Form I-912 for a fee waiver
                or Form I-942 for a reduced fee before or with your application.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Step 5: Submit Your Application
              </h3>
              <p>
                Review everything carefully, then submit. Once USCIS receives
                your application, you will get a receipt notice (Form I-797C)
                with your receipt number. Keep this receipt number safe. You
                will use it to track your case status online.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 5: Filing Fee and Waivers             */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Filing Fee and Fee Waivers
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                The cost of naturalizing is one of the most common concerns for
                applicants. Here is a breakdown of the current fees and available
                relief options:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                <div className="bg-slate-800/30 rounded-xl p-4 text-center">
                  <p className="text-white font-medium text-sm mb-1">
                    Application Fee
                  </p>
                  <p className="text-2xl font-bold text-blue-400">$710</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4 text-center">
                  <p className="text-white font-medium text-sm mb-1">
                    Biometrics Fee
                  </p>
                  <p className="text-2xl font-bold text-blue-400">$85</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4 text-center">
                  <p className="text-white font-medium text-sm mb-1">
                    Total Cost
                  </p>
                  <p className="text-2xl font-bold text-emerald-400">$795</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mt-6">
                Fee Waiver (Form I-912)
              </h3>
              <p>
                If you receive a means-tested benefit (such as Medicaid, SNAP,
                or SSI), have a household income below 150% of the Federal
                Poverty Guidelines, or are experiencing financial hardship, you
                may qualify for a complete fee waiver. Submit Form I-912 with
                supporting evidence of your financial situation.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Reduced Fee (Form I-942)
              </h3>
              <p>
                If your household income is more than 150% but less than 200%
                of the Federal Poverty Guidelines, you may qualify for a reduced
                filing fee. The reduced fee is currently $405, which covers both
                the application and biometrics. Submit Form I-942 with proof of
                income.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Military Applicants
              </h3>
              <p>
                Current and former members of the US military may be eligible
                for fee exemptions. Active-duty service members can file the
                N-400 with no filing fee. Check the USCIS military
                naturalization page for specific eligibility requirements.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 6: Common Mistakes to Avoid           */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Even small errors on the N-400 can cause delays, requests for
                additional evidence, or even denial. These are the most common
                mistakes applicants make and how to avoid them:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Incorrect dates:</strong>{" "}
                    Double-check every date on your application, especially your
                    date of permanent residence, date of birth, and dates of
                    travel. Even a one-digit error can trigger a Request for
                    Evidence (RFE) or raise questions during your interview.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Incomplete travel history:</strong>{" "}
                    You must list every trip outside the United States during
                    the statutory period, even short trips to Canada or Mexico.
                    Missing trips can be seen as an attempt to conceal information.
                    Use your passport stamps and I-94 records to create a
                    complete list before you start the form.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Not disclosing arrests:</strong>{" "}
                    You must disclose all arrests, citations, charges, and
                    convictions, even if they were dismissed, expunged, or sealed.
                    Failure to disclose is considered a lack of good moral
                    character and can result in denial. When in doubt, disclose
                    it and bring the court records to your interview.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Name inconsistencies:</strong>{" "}
                    Make sure your name on the N-400 matches your green card
                    exactly. If your name has changed due to marriage, divorce,
                    or court order, provide documentation. You can also request a
                    legal name change as part of the naturalization process.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Filing too early:</strong>{" "}
                    You can file up to 90 days before you meet the residency
                    requirement, but not earlier. Filing too early will result
                    in rejection, and you will lose your filing fee. Calculate
                    your earliest filing date carefully.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-blue-400" />
                  <span>
                    <strong className="text-white">Leaving questions blank:</strong>{" "}
                    Every question on the N-400 must be answered. If a question
                    does not apply to you, write &quot;N/A&quot; or &quot;None&quot; rather
                    than leaving it blank. Blank fields can cause processing
                    delays or appear as if you skipped the question intentionally.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Section 7: What Happens After Filing          */}
        {/* ============================================= */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              What Happens After Filing
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                After you submit your N-400 and pay the fee, your application
                enters the USCIS processing pipeline. Here is what to expect at
                each stage:
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Receipt Notice (2-3 Weeks)
              </h3>
              <p>
                Within 2 to 3 weeks of filing, you will receive a receipt
                notice (Form I-797C) confirming USCIS has accepted your
                application. This notice includes your receipt number, which
                you will use to track your case online through myUSCIS. If
                you filed online, you may see this notice in your account
                even sooner.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Biometrics Appointment (4-8 Weeks)
              </h3>
              <p>
                USCIS will schedule you for a biometrics appointment at a local
                Application Support Center (ASC). During this appointment, they
                will take your fingerprints, photograph, and signature. This
                information is used for background checks through the FBI.
                The appointment itself takes about 30 minutes.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Interview Scheduling (6-12 Months)
              </h3>
              <p>
                After your background check clears, USCIS will schedule your
                naturalization interview at your local field office. Wait times
                vary significantly by location. Some offices schedule interviews
                within 6 months, while others may take 12 months or more. You
                will receive a notice (Form I-797C) with the date, time, and
                location of your interview.
              </p>
              <p>
                Use this waiting period wisely to prepare for the{" "}
                <Link
                  href="/study"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  civics test
                </Link>{" "}
                and the{" "}
                <Link
                  href="/reading-writing"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  English reading and writing test
                </Link>
                . Most applicants find that 4 to 8 weeks of focused study is
                sufficient to master all 128 civics questions.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                The Interview
              </h3>
              <p>
                At the interview, a USCIS officer will review your N-400
                application, test your English ability, administer the civics
                test, and make a decision on your case. Most interviews last
                15 to 30 minutes. For a complete walkthrough, read our{" "}
                <Link
                  href="/blog/citizenship-interview-what-to-expect"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  interview day guide
                </Link>
                .
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">
                Decision and Oath Ceremony
              </h3>
              <p>
                Most applicants receive a decision on the same day as their
                interview. If approved, you will be scheduled for an oath
                ceremony, sometimes on the same day. At the oath ceremony, you
                take the Oath of Allegiance, turn in your green card, and
                receive your Certificate of Naturalization. You are officially
                a US citizen from that moment forward.
              </p>
              <p>
                For more details on the timeline, see our guide on{" "}
                <Link
                  href="/blog/how-long-citizenship-process"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  how long the citizenship process takes
                </Link>
                .
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
              Prepare for your naturalization interview
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              After filing your N-400, use the waiting period to master all 128
              civics questions. Our free tools use spaced repetition and practice
              tests to help you pass on your first try.
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
