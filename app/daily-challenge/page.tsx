import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/app/components/JsonLd";
import { buildMetadata } from "@/app/lib/metadata";
import { generateBreadcrumbSchema, generateSpeakableSchema } from "@/app/lib/schema";
import { siteConfig } from "@/app/lib/metadata";
import DailyChallenge from "./DailyChallenge";

export const metadata: Metadata = buildMetadata({
  title: "Daily Citizenship Challenge — Test Your Knowledge Every Day",
  description:
    "Take on a new USCIS citizenship question every day. Build your streak, share your results, and prepare for your naturalization interview one question at a time.",
  path: "/daily-challenge",
});

export default function DailyChallengePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Daily Challenge", url: `${siteConfig.url}/daily-challenge` },
  ]);

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/daily-challenge`,
    ["h1", "[data-speakable]"]
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={speakableSchema} />

      <div className="min-h-screen pb-20">
        <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-4 pt-6">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li><span className="text-slate-300">Daily Challenge</span></li>
          </ol>
        </nav>

        <header className="max-w-3xl mx-auto px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Daily Citizenship Challenge
          </h1>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed" data-speakable="true">
            Test your knowledge with a new USCIS civics question every day.
            Build your streak and share your results with friends.
          </p>
        </header>

        <div className="max-w-3xl mx-auto px-4 mt-10">
          <DailyChallenge />
        </div>
      </div>
    </>
  );
}
