import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/app/lib/metadata";
import { generateBreadcrumbSchema } from "@/app/lib/schema";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for US Citizenship Test Prep. Read the terms and conditions for using our free USCIS naturalization test preparation tool.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Terms of Service", url: `${siteConfig.url}/terms` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-slate-400 mb-8">
          Last Updated: March 2, 2026
        </p>

        <div className="space-y-8">
          <section>
            <p className="text-slate-300 mb-6">
              Welcome to US Citizenship Test Prep (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
              By accessing or using our website at{" "}
              <a
                href="https://uscitizenshiptestprep.com"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                uscitizenshiptestprep.com
              </a>{" "}
              (the &quot;Site&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, please do not use
              the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-300">
              By using this Site, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and our{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy
              </Link>
              . We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting. Your continued use of
              the Site after any changes constitutes your acceptance of the new
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              2. Description of Service
            </h2>
            <p className="text-slate-300 mb-4">
              US Citizenship Test Prep is a free educational tool designed to
              help individuals prepare for the United States Citizenship and
              Immigration Services (USCIS) naturalization civics test. Our
              service includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                Interactive flashcards covering all 128 official USCIS civics
                questions
              </li>
              <li>Practice tests and quizzes</li>
              <li>Spaced repetition study tools</li>
              <li>Study progress tracking (stored locally in your browser)</li>
              <li>
                Educational guides and resources related to the citizenship test
              </li>
            </ul>
          </section>

          <section className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-6 my-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              3. USCIS Disclaimer — Independent Educational Tool
            </h2>
            <p className="text-slate-300 mb-4 font-medium">
              <strong className="text-blue-400">IMPORTANT:</strong> This Site
              is an independent educational tool created to help individuals
              study for the USCIS naturalization civics test.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">
                  We are NOT affiliated with, endorsed by, or connected to
                </strong>{" "}
                the United States Citizenship and Immigration Services (USCIS),
                the U.S. Department of Homeland Security, or any other U.S.
                government agency.
              </li>
              <li>
                <strong className="text-white">
                  We do NOT provide legal advice
                </strong>{" "}
                or immigration services. This Site is for educational purposes
                only.
              </li>
              <li>
                <strong className="text-white">
                  All USCIS civics test questions
                </strong>{" "}
                used on this Site are sourced from publicly available official
                USCIS materials and are in the public domain.
              </li>
            </ul>
            <p className="text-slate-300 mt-4">
              For official information about the naturalization process, please
              visit the official USCIS website at{" "}
              <a
                href="https://www.uscis.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                www.uscis.gov
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              4. Accuracy and Disclaimers
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Accuracy of Content:</strong> We
                strive to ensure that all content on this Site is accurate,
                up-to-date, and aligned with official USCIS materials. However,
                we make no guarantees or warranties regarding the completeness,
                accuracy, or reliability of any content.
              </li>
              <li>
                <strong className="text-white">
                  Changes to USCIS Requirements:
                </strong>{" "}
                USCIS may update the civics test questions, passing criteria, or
                interview procedures at any time. While we make reasonable
                efforts to keep our content current, we cannot guarantee that
                all information reflects the latest USCIS updates.
              </li>
              <li>
                <strong className="text-white">Verify with Official Sources:</strong>{" "}
                Users should verify all information with official USCIS sources
                before relying on it for their naturalization interview or
                application.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              5. User Responsibilities
            </h2>
            <p className="text-slate-300 mb-4">By using this Site, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Personal Use Only:</strong> Use
                the Site for personal, non-commercial study purposes only.
              </li>
              <li>
                <strong className="text-white">No Unauthorized Reproduction:</strong>{" "}
                You may not scrape, reproduce, redistribute, or create
                derivative works from our original content (design, code,
                guides, etc.) without our written permission.
              </li>
              <li>
                <strong className="text-white">Lawful Use:</strong> Comply with
                all applicable laws and regulations when using the Site.
              </li>
              <li>
                <strong className="text-white">No Interference:</strong> Not
                interfere with or disrupt the Site or servers hosting the Site.
              </li>
              <li>
                <strong className="text-white">
                  No Unauthorized Access:
                </strong>{" "}
                Not attempt to gain unauthorized access to any part of the Site,
                other users&apos; data, or our systems.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              6. Intellectual Property
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Our Original Content:</strong>{" "}
                The design, code, user interface, guides, and other original
                content created by us are owned by US Citizenship Test Prep and
                are protected by copyright and other intellectual property laws.
              </li>
              <li>
                <strong className="text-white">USCIS Questions (Public Domain):</strong>{" "}
                The 128 official USCIS civics test questions and answers are in
                the public domain as official U.S. government materials.
              </li>
              <li>
                <strong className="text-white">Third-Party Content:</strong> Any
                third-party content, trademarks, or logos displayed on the Site
                are the property of their respective owners.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              7. Third-Party Links and Services
            </h2>
            <p className="text-slate-300 mb-4">
              The Site may contain links to third-party websites or services
              (e.g., official USCIS website, Google Analytics, Google AdSense).
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">No Endorsement:</strong> We do
                not endorse or assume responsibility for the content, privacy
                policies, or practices of any third-party sites or services.
              </li>
              <li>
                <strong className="text-white">Your Responsibility:</strong> You
                access third-party links at your own risk. We encourage you to
                review the terms and privacy policies of any third-party sites
                you visit.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              8. Limitation of Liability
            </h2>
            <p className="text-slate-300 mb-4">
              <strong className="text-white">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">&quot;AS IS&quot; Service:</strong> This
                Site is provided &quot;as is&quot; and &quot;as available&quot; without warranties
                of any kind, either express or implied, including but not
                limited to warranties of merchantability, fitness for a
                particular purpose, or non-infringement.
              </li>
              <li>
                <strong className="text-white">No Guarantee of Results:</strong>{" "}
                We do NOT guarantee that using this Site will result in passing
                the USCIS naturalization test or obtaining U.S. citizenship.
              </li>
              <li>
                <strong className="text-white">No Liability for Outcomes:</strong>{" "}
                We are NOT liable for any direct, indirect, incidental,
                consequential, or punitive damages arising from your use of (or
                inability to use) the Site, including but not limited to:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Failure to pass the USCIS test</li>
                  <li>Delays or errors in content</li>
                  <li>Loss of data stored in your browser</li>
                  <li>Any decisions made based on information from the Site</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              9. Indemnification
            </h2>
            <p className="text-slate-300">
              You agree to indemnify, defend, and hold harmless US Citizenship
              Test Prep, its owners, operators, affiliates, and service
              providers from any claims, liabilities, damages, losses, or
              expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 mt-4">
              <li>Your use of the Site</li>
              <li>Your violation of these Terms</li>
              <li>
                Your violation of any rights of another person or entity
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              10. Termination
            </h2>
            <p className="text-slate-300">
              We reserve the right to suspend or terminate your access to the
              Site at any time, without notice, for any reason, including but
              not limited to violation of these Terms. Upon termination, all
              provisions of these Terms that by their nature should survive
              (including disclaimers, limitations of liability, and
              indemnification) will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              11. Governing Law and Dispute Resolution
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Governing Law:</strong> These
                Terms are governed by and construed in accordance with the laws
                of the United States, without regard to conflict of law
                principles.
              </li>
              <li>
                <strong className="text-white">Jurisdiction:</strong> Any
                disputes arising from these Terms or your use of the Site shall
                be subject to the exclusive jurisdiction of the courts located
                in the United States.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              12. Severability
            </h2>
            <p className="text-slate-300">
              If any provision of these Terms is found to be invalid or
              unenforceable by a court of competent jurisdiction, the remaining
              provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              13. Entire Agreement
            </h2>
            <p className="text-slate-300">
              These Terms, together with our{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and US Citizenship
              Test Prep regarding your use of the Site, superseding any prior
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              14. Changes to These Terms
            </h2>
            <p className="text-slate-300">
              We may update these Terms from time to time. Changes will be
              posted on this page with an updated &quot;Last Updated&quot; date. Your
              continued use of the Site after changes are posted constitutes
              your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">
              15. Contact Information
            </h2>
            <p className="text-slate-300 mb-4">
              If you have any questions about these Terms, please contact us:
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

          <section className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-slate-300 font-medium mb-4">
              Thank you for using US Citizenship Test Prep. We wish you success
              in your journey to U.S. citizenship!
            </p>
            <p className="text-slate-400">
              For information about how we handle your data, please visit our{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
