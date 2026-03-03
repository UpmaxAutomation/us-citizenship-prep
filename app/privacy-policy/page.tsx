import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/app/lib/metadata";
import { generateBreadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for US Citizenship Test Prep. Learn how we collect, use, and protect your data while you prepare for the USCIS naturalization test.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Privacy Policy", url: `${siteConfig.url}/privacy-policy` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-400 mb-8">
          Last Updated: March 2, 2026
        </p>

        <div className="space-y-8">
          <section>
            <p className="text-slate-300 mb-6">
              At US Citizenship Test Prep (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and safeguard your information when you use
              our website at{" "}
              <a
                href="https://www.uscitizenshiptestprep.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                www.uscitizenshiptestprep.com
              </a>
              .
            </p>
            <p className="text-slate-300">
              This site is an independent educational tool and is not affiliated
              with, endorsed by, or connected to the United States Citizenship
              and Immigration Services (USCIS) or any U.S. government agency.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              1. Information We Collect
            </h2>
            <p className="text-slate-300 mb-4">
              We collect limited information to provide and improve our service:
            </p>

            <h3 className="text-lg font-medium text-white mb-3 mt-6">
              a. Information You Provide Voluntarily
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4">
              <li>
                <strong className="text-white">Email Address:</strong> If you
                choose to sign up for our study guide or newsletter, we collect
                your email address. This is entirely optional.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-3 mt-6">
              b. Information Stored Locally (No Personally Identifiable
              Information)
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4">
              <li>
                <strong className="text-white">Study Progress:</strong> Your
                progress through flashcards, quizzes, and spaced repetition
                sessions is stored in your browser&apos;s localStorage. This data
                never leaves your device and is not transmitted to our servers.
              </li>
              <li>
                <strong className="text-white">User Settings:</strong>{" "}
                Preferences such as theme selection or display settings are
                stored locally in your browser.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-3 mt-6">
              c. Automatically Collected Information (Analytics)
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Google Analytics:</strong> We use
                Google Analytics to understand how visitors use our site. This
                includes anonymized IP addresses, pages visited, time spent on
                pages, device type, browser type, and geographic location
                (country/region level).
              </li>
              <li>
                <strong className="text-white">Cookies:</strong> Google
                Analytics uses cookies to track your session and distinguish
                users. See the &quot;Cookies&quot; section below.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              2. Cookies and Tracking Technologies
            </h2>
            <p className="text-slate-300 mb-4">
              We use cookies and similar tracking technologies:
            </p>

            <h3 className="text-lg font-medium text-white mb-3 mt-6">
              a. First-Party Cookies
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4">
              <li>
                <strong className="text-white">localStorage:</strong> Used to
                store your study progress and preferences locally in your
                browser. This data is essential for the app to function.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-3 mt-6">
              b. Third-Party Cookies
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Google Analytics:</strong> Tracks
                usage patterns to help us improve the site. You can opt out by
                using the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
              <li>
                <strong className="text-white">Google AdSense:</strong> If
                enabled, Google AdSense may use cookies to serve personalized
                ads. You can control ad personalization through{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Google Ad Settings
                </a>
                .
              </li>
              <li>
                <strong className="text-white">Google Tag Manager:</strong> Used
                to manage tracking scripts.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              3. Third-Party Services
            </h2>
            <p className="text-slate-300 mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Google Analytics:</strong> For
                website traffic analysis.{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-white">Google AdSense:</strong> For
                serving advertisements (if enabled).{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Google Ads Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-white">Google Tag Manager:</strong> For
                managing analytics and marketing tags.
              </li>
            </ul>
            <p className="text-slate-300 mt-4">
              These services have their own privacy policies. We do not control
              how they use your data beyond the scope of our integration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              4. How We Use Your Information
            </h2>
            <p className="text-slate-300 mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Improve the App:</strong>{" "}
                Understand how users interact with our site to enhance features
                and content.
              </li>
              <li>
                <strong className="text-white">Serve Relevant Ads:</strong> If
                you see ads, Google AdSense may use your browsing data to show
                personalized ads.
              </li>
              <li>
                <strong className="text-white">Deliver Requested Content:</strong>{" "}
                If you voluntarily provide your email, we use it to send you
                study guides or updates (you can unsubscribe anytime).
              </li>
              <li>
                <strong className="text-white">Analytics and Reporting:</strong>{" "}
                Analyze traffic patterns and user behavior to optimize the user
                experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              5. Data Sharing and Disclosure
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">We Do Not Sell Your Data:</strong>{" "}
                We do not sell, rent, or trade your personal information to
                third parties.
              </li>
              <li>
                <strong className="text-white">Third-Party Analytics and Ads:</strong>{" "}
                We share anonymized usage data with Google Analytics and Google
                AdSense as described above.
              </li>
              <li>
                <strong className="text-white">Legal Compliance:</strong> We may
                disclose information if required by law, court order, or
                government regulation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              6. Your Rights (CCPA and GDPR)
            </h2>
            <p className="text-slate-300 mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>

            <h3 className="text-lg font-medium text-white mb-3 mt-6">
              a. Right to Know
            </h3>
            <p className="text-slate-300 mb-4">
              You can request information about the data we collect and how we
              use it.
            </p>

            <h3 className="text-lg font-medium text-white mb-3 mt-6">
              b. Right to Delete
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4">
              <li>
                <strong className="text-white">localStorage Data:</strong> You
                can clear your study progress and settings at any time by
                clearing your browser&apos;s localStorage or using your browser&apos;s
                &quot;Clear Browsing Data&quot; feature.
              </li>
              <li>
                <strong className="text-white">Email Data:</strong> If you
                provided an email, you can request deletion by contacting us at{" "}
                <a
                  href="mailto:contact@uscitizenshiptestprep.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  contact@uscitizenshiptestprep.com
                </a>
                .
              </li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-3 mt-6">
              c. Right to Opt-Out
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300 mb-4">
              <li>
                <strong className="text-white">Cookies:</strong> You can disable
                cookies in your browser settings. Note that disabling cookies
                may affect site functionality.
              </li>
              <li>
                <strong className="text-white">Google Analytics:</strong> Use
                the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Google Analytics Opt-out Add-on
                </a>
                .
              </li>
              <li>
                <strong className="text-white">Personalized Ads:</strong>{" "}
                Customize your ad preferences through{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Google Ad Settings
                </a>
                .
              </li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-3 mt-6">
              d. California Residents (CCPA)
            </h3>
            <p className="text-slate-300">
              California residents have additional rights under the California
              Consumer Privacy Act (CCPA), including the right to know, delete,
              and opt-out of the sale of personal information. We do not sell
              personal information. For CCPA requests, contact us at{" "}
              <a
                href="mailto:contact@uscitizenshiptestprep.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                contact@uscitizenshiptestprep.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              7. Children&apos;s Privacy (COPPA)
            </h2>
            <p className="text-slate-300">
              Our service is not directed at children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If we become aware that we have collected such information, we
              will take steps to delete it. If you believe a child under 13 has
              provided us with personal information, please contact us at{" "}
              <a
                href="mailto:contact@uscitizenshiptestprep.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                contact@uscitizenshiptestprep.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              8. Data Retention
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">localStorage Data:</strong>{" "}
                Persists in your browser until you manually clear it or
                uninstall your browser.
              </li>
              <li>
                <strong className="text-white">Analytics Data:</strong> Retained
                by Google Analytics according to{" "}
                <a
                  href="https://support.google.com/analytics/answer/7667196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Google&apos;s data retention policy
                </a>
                .
              </li>
              <li>
                <strong className="text-white">Email Data:</strong> If you
                provide an email, we retain it until you request deletion or
                unsubscribe.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              9. Data Security
            </h2>
            <p className="text-slate-300">
              We take reasonable measures to protect your information from
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-slate-300">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated &quot;Last Updated&quot; date. We
              encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              11. Contact Us
            </h2>
            <p className="text-slate-300 mb-4">
              If you have questions or concerns about this Privacy Policy, or
              wish to exercise your rights, please contact us:
            </p>
            <p className="text-slate-300">
              Email:{" "}
              <a
                href="mailto:contact@uscitizenshiptestprep.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                contact@uscitizenshiptestprep.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              12. Disclaimer
            </h2>
            <p className="text-slate-300">
              US Citizenship Test Prep is an independent educational tool. We
              are not affiliated with, endorsed by, or connected to the United
              States Citizenship and Immigration Services (USCIS) or any U.S.
              government agency. All USCIS civics test questions are sourced
              from publicly available official materials.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-slate-400">
              For our Terms of Service, please visit our{" "}
              <Link
                href="/terms"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Terms of Service page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
