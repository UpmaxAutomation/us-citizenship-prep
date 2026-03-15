import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import AuthorAttribution from "@/app/components/AuthorAttribution";
import { buildMetadata } from "@/app/lib/metadata";
import { generateBreadcrumbSchema, generateSpeakableSchema } from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About US Citizenship Test Prep",
  description:
    "Learn about US Citizenship Test Prep, our mission to help immigrants prepare for the USCIS naturalization civics test, and how our content is sourced from official USCIS materials.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "About", url: `${siteConfig.url}/about` },
  ]);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/about`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={speakableSchema} />

      <div className="min-h-screen pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 pt-6">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-slate-300">About</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About US Citizenship Test Prep
          </h1>
          <p
            className="mt-4 text-slate-400 text-lg leading-relaxed"
            data-speakable="true"
          >
            A free study tool helping people prepare for the United States
            naturalization civics test. All 128 official USCIS questions with
            interactive flashcards, practice tests, and state-specific answers.
          </p>
        </header>

        {/* Mission */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                Becoming a United States citizen is one of the most important
                milestones in an immigrant&apos;s life. The civics test is a key part
                of the naturalization process, and we believe everyone deserves
                access to high-quality study materials — regardless of their
                background or financial situation.
              </p>
              <p>
                US Citizenship Test Prep provides free, comprehensive study tools
                that cover all 128 official USCIS civics questions updated for the
                2025 test format. Our goal is to help applicants feel confident and
                prepared when they walk into their naturalization interview.
              </p>
            </div>
          </div>
        </section>

        {/* How Content Is Sourced */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              How Our Content Is Sourced
            </h2>
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                Every question, answer, and vocabulary word in this study guide
                comes directly from official USCIS (United States Citizenship and
                Immigration Services) civics test materials. We do not create our
                own questions or modify official answers.
              </p>
              <p>
                State-specific answers — including current U.S. senators,
                governors, and state capitals — are updated regularly to reflect
                the latest election results and appointments. Reading and writing
                vocabulary lists match the official USCIS word lists used for the
                English portion of the naturalization test.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <ul className="text-slate-400 leading-relaxed space-y-3 list-disc list-inside">
              <li>
                <span className="text-slate-200 font-medium">
                  All 128 civics questions and answers
                </span>{" "}
                — organized by category with 65/20 exemption questions marked
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Flashcards with spaced repetition
                </span>{" "}
                — a proven study technique that helps you remember answers long-term
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Practice quizzes and a 20-question test
                </span>{" "}
                — simulating the real USCIS interview format with 12/20 passing score
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Reading and writing vocabulary
                </span>{" "}
                — all 58 reading words and 75 writing words from the USCIS English test
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  State-specific answers
                </span>{" "}
                — personalized for all 50 states plus Washington, D.C.
              </li>
              <li>
                <span className="text-slate-200 font-medium">
                  Offline access
                </span>{" "}
                — install as a Progressive Web App and study without internet
              </li>
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              USCIS Disclaimer
            </h2>
            <p className="text-slate-400 leading-relaxed">
              US Citizenship Test Prep is an independent educational resource. It
              is not affiliated with, endorsed by, or sponsored by USCIS (United
              States Citizenship and Immigration Services), the Department of
              Homeland Security, or any other U.S. government agency. All
              questions and answers are sourced from publicly available official
              USCIS civics test materials. For the most current official
              information, visit{" "}
              <a
                href="https://www.uscis.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                uscis.gov
              </a>
              .
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4">
          <AuthorAttribution />
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Start studying today</h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Begin your citizenship test preparation with our free study tools.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Start Studying Now
              </Link>
              <Link
                href="/questions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                View All 128 Questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
