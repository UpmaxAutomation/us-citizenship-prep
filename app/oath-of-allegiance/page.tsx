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
import USFlag from "@/app/components/illustrations/USFlag";
import BaldEagle from "@/app/components/illustrations/BaldEagle";

export const metadata: Metadata = buildMetadata({
  title: "Oath of Allegiance — Full Text, Meaning & What to Expect",
  description:
    "Read the full text of the US Oath of Allegiance with a phrase-by-phrase breakdown. Learn what happens at the naturalization ceremony, exemptions, and what changes after you take the oath.",
  path: "/oath-of-allegiance",
});

const oathFaqs = [
  {
    question: "Do I need to memorize the Oath of Allegiance?",
    answer:
      "No, you do not need to memorize the oath. During the naturalization ceremony, a USCIS officer will lead you through the oath line by line. You simply repeat each phrase after the officer. However, understanding the meaning of each phrase beforehand helps you feel more confident and prepared.",
  },
  {
    question: "Can I refuse any part of the Oath of Allegiance?",
    answer:
      "Generally, no. Taking the full oath is a legal requirement for naturalization. However, USCIS allows certain modifications for religious or conscientious objectors. If you cannot swear to bear arms or perform noncombatant service, you may request a modified oath that omits those clauses. You must request this modification before the ceremony.",
  },
  {
    question: "What happens if I miss my oath ceremony?",
    answer:
      "If you miss your scheduled oath ceremony, USCIS will typically reschedule you for a future ceremony. You should contact your local USCIS office as soon as possible to explain your absence and arrange a new date. Missing the ceremony does not mean your application is denied, but significant delays in taking the oath could require you to restart part of the process.",
  },
  {
    question: "Can I bring family and friends to the oath ceremony?",
    answer:
      "Yes, most USCIS offices and courts welcome guests at naturalization ceremonies. Family members and friends can attend to celebrate this milestone with you. Seating may be limited, so check with your local office about guest policies. Some ceremonies also allow photography after the official portion concludes.",
  },
  {
    question:
      "Do I lose my previous citizenship when I take the Oath of Allegiance?",
    answer:
      "The oath requires you to renounce allegiance to foreign states, but the actual effect on your previous citizenship depends on the laws of your home country. Some countries allow dual citizenship, while others do not. The United States generally permits dual citizenship, but your country of origin may revoke your citizenship when you naturalize. Consult your home country's embassy or consulate for specific guidance.",
  },
  {
    question: "How long does the oath ceremony take?",
    answer:
      "A typical naturalization oath ceremony lasts between 60 and 90 minutes. This includes check-in, a welcome address, the oath administration, a keynote speaker, and the distribution of Certificates of Naturalization. Large ceremonies with hundreds of participants may take longer. Arrive at least 30 minutes early to complete check-in procedures.",
  },
];

export default function OathOfAllegiancePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    {
      name: "Oath of Allegiance",
      url: `${siteConfig.url}/oath-of-allegiance`,
    },
  ]);

  const faqSchema = generateFAQSchema(oathFaqs);

  const articleSchema = generateArticleSchema({
    title: "Oath of Allegiance — Full Text, Meaning & What to Expect",
    description:
      "Complete guide to the US Oath of Allegiance including the full text, phrase-by-phrase meaning, ceremony details, exemptions, and what changes after naturalization.",
    path: "/oath-of-allegiance",
    datePublished: "2025-10-01",
    dateModified: "2026-03-15",
  });

  const speakableSchema = generateSpeakableSchema(
    `${siteConfig.url}/oath-of-allegiance`,
    ["h1", "[data-speakable='oath-text']", "[data-speakable='summary']"]
  );

  const oathPhrases: { phrase: string; meaning: string }[] = [
    {
      phrase:
        "I hereby declare, on oath, that I absolutely and entirely renounce and abjure all allegiance and fidelity to any foreign prince, potentate, state, or sovereignty, of whom or which I have heretofore been a subject or citizen;",
      meaning:
        "You are giving up loyalty to any other country or ruler. This is a formal statement that your primary allegiance is now to the United States, not to any foreign government or monarch you previously owed loyalty to.",
    },
    {
      phrase:
        "that I will support and defend the Constitution and laws of the United States of America against all enemies, foreign and domestic;",
      meaning:
        "You promise to uphold the US Constitution and federal laws. You commit to protecting the country's foundational legal document from threats, whether those threats come from outside or within the country.",
    },
    {
      phrase:
        "that I will bear true faith and allegiance to the same;",
      meaning:
        "You pledge genuine and complete loyalty to the Constitution and the United States. This means your commitment is sincere and wholehearted, not just a formality.",
    },
    {
      phrase:
        "that I will bear arms on behalf of the United States when required by the law;",
      meaning:
        "If called upon by law (such as through a military draft), you agree to serve in the armed forces to defend the country. This clause can be modified for conscientious objectors who have religious or moral objections to bearing arms.",
    },
    {
      phrase:
        "that I will perform noncombatant service in the Armed Forces of the United States when required by the law;",
      meaning:
        "Even if you do not bear arms, you agree to serve in a non-fighting capacity in the military if required. This could include roles in medical support, logistics, or other non-combat positions.",
    },
    {
      phrase:
        "that I will perform work of national importance under civilian direction when required by the law;",
      meaning:
        "If called upon, you agree to contribute to essential civilian work that serves the nation. This could include public service during emergencies or other nationally important projects directed by civilian authorities.",
    },
    {
      phrase:
        "that I take this obligation freely, without any mental reservation or purpose of evasion;",
      meaning:
        "You confirm that you are making this commitment voluntarily, with full understanding and sincerity. There are no hidden doubts or intentions to avoid fulfilling these promises.",
    },
    {
      phrase: "so help me God.",
      meaning:
        "A traditional closing that invokes a higher power as witness to your commitment. If you have religious objections to this phrase or prefer a secular affirmation, you may omit it. USCIS accommodates applicants who prefer to affirm rather than swear.",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={speakableSchema} />

      <div className="min-h-screen pb-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-3xl mx-auto px-4 pt-6 print:hidden"
        >
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
              <span className="text-slate-300">Oath of Allegiance</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 mt-8">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              The Oath of{" "}
              <span className="text-blue-400">Allegiance</span>
            </h1>
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              <USFlag className="w-12 h-12 opacity-20" />
              <BaldEagle className="w-12 h-12 opacity-20" />
            </div>
          </div>
          <p
            className="mt-4 text-slate-400 text-lg leading-relaxed"
            data-speakable="summary"
          >
            The Oath of Allegiance is the final step in becoming a United States
            citizen. Every applicant must recite this oath during their
            naturalization ceremony. Below you will find the complete text, a
            phrase-by-phrase breakdown of its meaning, details about the
            ceremony, and answers to common questions.
          </p>
        </header>

        {/* Full Oath Text */}
        <section className="max-w-3xl mx-auto px-4 mt-10">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-4">Full Text of the Oath</h2>
            <blockquote
              className="bg-blue-500/5 border-l-4 border-blue-400 pl-6 py-4 rounded-r-xl"
              data-speakable="oath-text"
            >
              <p className="italic text-lg text-slate-200 leading-relaxed">
                &ldquo;I hereby declare, on oath, that I absolutely and entirely
                renounce and abjure all allegiance and fidelity to any foreign
                prince, potentate, state, or sovereignty, of whom or which I
                have heretofore been a subject or citizen; that I will support
                and defend the Constitution and laws of the United States of
                America against all enemies, foreign and domestic; that I will
                bear true faith and allegiance to the same; that I will bear
                arms on behalf of the United States when required by the law;
                that I will perform noncombatant service in the Armed Forces of
                the United States when required by the law; that I will perform
                work of national importance under civilian direction when
                required by the law; and that I take this obligation freely,
                without any mental reservation or purpose of evasion; so help me
                God.&rdquo;
              </p>
            </blockquote>
            <p className="mt-4 text-sm text-slate-500">
              Source: U.S. Citizenship and Immigration Services (USCIS),
              Section 337(a) of the Immigration and Nationality Act (INA).
            </p>
          </div>
        </section>

        {/* Phrase-by-Phrase Meaning */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Phrase-by-Phrase Meaning
          </h2>
          <p className="text-slate-400 mb-8">
            The oath contains powerful language rooted in centuries of legal
            tradition. Understanding each phrase helps you appreciate the
            commitment you are making as a new citizen.
          </p>

          <div className="space-y-6">
            {oathPhrases.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-bold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="italic text-slate-200 leading-relaxed font-medium">
                      &ldquo;{item.phrase}&rdquo;
                    </p>
                    <div className="mt-3 flex items-start gap-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#60a5fa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.meaning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exemptions and Modifications */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-2">
            Exemptions and Modifications
          </h2>
          <p className="text-slate-400 mb-6">
            While every naturalization candidate must take the oath, USCIS
            provides accommodations for applicants with specific beliefs or
            disabilities.
          </p>

          <div className="space-y-4">
            {/* Religious / Conscientious Objectors */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-300 mb-2">
                    Conscientious Objectors
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    If you are opposed to bearing arms or performing military
                    service because of religious training, belief, or deeply held
                    moral or ethical convictions, you may request a modified oath
                    that omits the clauses about bearing arms and noncombatant
                    service. You must notify USCIS before your ceremony and may
                    need to provide documentation of your beliefs.
                  </p>
                </div>
              </div>
            </div>

            {/* &quot;So help me God&quot; */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8h1a4 4 0 010 8h-1" />
                    <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-300 mb-2">
                    Omitting &ldquo;So Help Me God&rdquo;
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    If you have a personal or religious objection to the phrase
                    &ldquo;so help me God,&rdquo; you may choose to omit it.
                    You can take a secular affirmation instead of a religious
                    oath. This accommodation is available to everyone and does
                    not require any special documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Disability Accommodations */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-300 mb-2">
                    Disability Accommodations
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Applicants with physical or developmental disabilities that
                    prevent them from understanding or communicating the meaning
                    of the oath may be eligible for a waiver under Section
                    337(a) of the INA. USCIS evaluates these requests on a
                    case-by-case basis. A medical professional may need to
                    provide documentation supporting the waiver request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Oath Ceremony */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-2">
            The Oath Ceremony
          </h2>
          <p className="text-slate-400 mb-6">
            The naturalization oath ceremony is the culminating event of your
            citizenship journey. Here is what to expect from start to finish.
          </p>

          <div className="space-y-4">
            {/* Before the Ceremony */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center">
                  1
                </span>
                Before the Ceremony
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    You will receive a notice (Form N-445) with the date, time,
                    and location of your ceremony. This could be at a USCIS
                    office, a federal courthouse, or a special venue for large
                    ceremonies.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Complete the questionnaire on the back of Form N-445
                    before arriving. This asks about any changes since your
                    interview (trips abroad, arrests, address changes).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Bring your Permanent Resident Card (Green Card) to surrender
                    at check-in. You will not need it after becoming a citizen.
                  </span>
                </li>
              </ul>
            </div>

            {/* During the Ceremony */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center">
                  2
                </span>
                During the Ceremony
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Check in with USCIS officers who will verify your identity
                    and collect your Green Card.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    A USCIS official or judge will deliver a welcome address
                    and may introduce a keynote speaker.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    All candidates stand and recite the Oath of Allegiance
                    together, repeating each phrase after the officer.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    You will receive your Certificate of Naturalization
                    (Form N-550). Verify that all information is correct
                    before leaving.
                  </span>
                </li>
              </ul>
            </div>

            {/* After the Ceremony */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center">
                  3
                </span>
                After the Ceremony
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Celebrate! You are now a United States citizen.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Keep your Certificate of Naturalization in a safe place.
                    It is extremely important as proof of your citizenship.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    Apply for your US passport as soon as possible using Form
                    DS-11 at a passport acceptance facility.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Changes After the Oath */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-2">
            What Changes After the Oath
          </h2>
          <p className="text-slate-400 mb-6">
            Taking the oath grants you the full rights and responsibilities of
            a US citizen. Here are the most important changes.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Right to Vote */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-300 mb-1">
                Right to Vote
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Register to vote in federal, state, and local elections.
                You can now have a direct voice in choosing your
                representatives and shaping public policy.
              </p>
            </div>

            {/* US Passport */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="2" y1="3" x2="22" y2="3" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-300 mb-1">
                US Passport
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Apply for a US passport to travel internationally with the
                full protection of the US government. A US passport provides
                visa-free access to many countries.
              </p>
            </div>

            {/* Petition Family Members */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-300 mb-1">
                Petition Family Members
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                As a citizen, you can sponsor immediate relatives (spouse,
                unmarried children under 21, and parents) for green cards
                without numerical limits or long waiting periods.
              </p>
            </div>

            {/* Federal Employment */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-300 mb-1">
                Federal Employment
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Many federal government positions require US citizenship.
                As a naturalized citizen, you are eligible for these roles,
                including positions that require security clearances.
              </p>
            </div>

            {/* Run for Office */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-300 mb-1">
                Run for Office
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Naturalized citizens can run for most elected offices,
                including US Senate and House of Representatives. The only
                office restricted to natural-born citizens is the presidency.
              </p>
            </div>

            {/* Protection from Deportation */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-semibold text-emerald-300 mb-1">
                Protection from Deportation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                US citizens cannot be deported. Your right to live in the
                United States is permanent and unconditional, giving you
                security and stability for yourself and your family.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {oathFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-medium text-slate-200 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Important Reminder */}
        <section className="max-w-3xl mx-auto px-4 mt-12">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-blue-300 mb-3">
              Preparing for Your Interview First?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Before you reach the oath ceremony, you need to pass the civics
              test and English test during your naturalization interview. Make
              sure you are fully prepared by studying all 128 USCIS civics
              questions and reviewing the{" "}
              <Link
                href="/interview-checklist"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                interview checklist
              </Link>{" "}
              to ensure you have everything you need on interview day.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  The civics test covers 128 questions about American
                  government, history, and symbols. You will be asked up to 10
                  questions and must answer at least 6 correctly.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  The English test evaluates your ability to read, write, and
                  speak in English. Sentences are drawn from civics and history
                  topics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>
                  Applicants aged 65 or older who have been permanent residents
                  for 20+ years qualify for the{" "}
                  <Link
                    href="/questions?filter=6520"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    65/20 exemption
                  </Link>
                  , which covers a smaller set of questions.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 mt-12 print:hidden">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to prepare for your interview?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Study all 128 civics questions, take practice tests, and use our
              flashcards to make sure you pass the naturalization interview with
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/practice-test"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Take a Practice Test
              </Link>
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Study with Flashcards
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
              <Link
                href="/questions"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Browse All Questions
              </Link>
              <Link
                href="/printable-study-guide"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Printable Study Guide
              </Link>
              <Link
                href="/interview-checklist"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Interview Checklist
              </Link>
              <Link
                href="/faq"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </section>

        {/* Author Attribution */}
        <div className="max-w-3xl mx-auto px-4 print:hidden">
          <AuthorAttribution />
        </div>
      </div>
    </>
  );
}
