"use client";

import { useState } from "react";
import Link from "next/link";

type Answers = {
  age: string | null;
  greenCard: string | null;
  greenCardYears: string | null;
  marriedToCitizen: string | null;
  continuousResidence: string | null;
  physicalPresence: string | null;
  goodMoralCharacter: string | null;
};

const initialAnswers: Answers = {
  age: null,
  greenCard: null,
  greenCardYears: null,
  marriedToCitizen: null,
  continuousResidence: null,
  physicalPresence: null,
  goodMoralCharacter: null,
};

const questions = [
  {
    key: "age" as const,
    question: "Are you at least 18 years old?",
    options: ["Yes", "No"],
    helpText:
      "You must be at least 18 years of age at the time of filing Form N-400.",
  },
  {
    key: "greenCard" as const,
    question: "Are you a lawful permanent resident (green card holder)?",
    options: ["Yes", "No"],
    helpText:
      "You must hold a valid green card to apply for US citizenship through naturalization.",
  },
  {
    key: "greenCardYears" as const,
    question: "How long have you had your green card?",
    options: ["Less than 3 years", "3-4 years", "5+ years"],
    helpText:
      "The standard requirement is 5 years. If married to a US citizen, the requirement may be reduced to 3 years.",
  },
  {
    key: "marriedToCitizen" as const,
    question: "Are you married to a US citizen?",
    options: ["Yes", "No"],
    helpText:
      "Being married to a US citizen may allow you to apply after only 3 years of permanent residence.",
  },
  {
    key: "continuousResidence" as const,
    question:
      "Have you lived continuously in the US during your required residency period?",
    options: ["Yes", "No"],
    helpText:
      "You must not have taken any trip outside the US lasting 6 months or more during the statutory period.",
  },
  {
    key: "physicalPresence" as const,
    question:
      "Have you been physically present in the US for the required time?",
    options: ["Yes", "No"],
    helpText:
      "You need at least 30 months in the US over the past 5 years (or 18 months over 3 years for the spouse rule).",
  },
  {
    key: "goodMoralCharacter" as const,
    question:
      "Do you have good moral character (no serious criminal record)?",
    options: ["Yes", "No"],
    helpText:
      "Certain criminal offenses can bar you from citizenship. Minor traffic violations generally do not affect eligibility.",
  },
];

function getResult(answers: Answers) {
  if (answers.age === "No") {
    return {
      eligible: false,
      title: "Not Yet Eligible",
      message:
        "You must be at least 18 years old to independently apply for naturalization. If you are under 18, you may qualify for automatic citizenship through a US citizen parent under the Child Citizenship Act.",
      color: "red" as const,
    };
  }

  if (answers.greenCard === "No") {
    return {
      eligible: false,
      title: "Not Yet Eligible",
      message:
        "You must be a lawful permanent resident (green card holder) before applying for citizenship. You will need to obtain a green card first through family sponsorship, employment, the diversity lottery, or another immigration pathway.",
      color: "red" as const,
    };
  }

  if (answers.goodMoralCharacter === "No") {
    return {
      eligible: false,
      title: "Potential Issue: Good Moral Character",
      message:
        "A serious criminal record may bar you from citizenship. The impact depends on the type and severity of the offense. We strongly recommend consulting an immigration attorney to evaluate your specific situation before filing.",
      color: "amber" as const,
    };
  }

  if (
    answers.greenCardYears === "5+ years" &&
    answers.continuousResidence === "Yes" &&
    answers.physicalPresence === "Yes"
  ) {
    return {
      eligible: true,
      title: "You Are Likely Eligible!",
      message:
        "Based on your answers, you appear to meet the basic eligibility requirements for US citizenship through the standard 5-year path. The next step is to file Form N-400 and prepare for the civics and English tests.",
      color: "green" as const,
    };
  }

  if (
    answers.greenCardYears === "3-4 years" &&
    answers.marriedToCitizen === "Yes" &&
    answers.continuousResidence === "Yes" &&
    answers.physicalPresence === "Yes"
  ) {
    return {
      eligible: true,
      title: "You Are Likely Eligible (3-Year Rule)!",
      message:
        "Based on your answers, you appear to meet the eligibility requirements under the 3-year rule for spouses of US citizens. You can file Form N-400 and begin preparing for the civics and English tests.",
      color: "green" as const,
    };
  }

  if (
    answers.greenCardYears === "3-4 years" &&
    answers.marriedToCitizen === "No"
  ) {
    return {
      eligible: false,
      title: "Not Yet Eligible",
      message:
        "Since you are not married to a US citizen, you need to have held your green card for at least 5 years. You may be eligible to apply once you reach the 5-year mark. You can file your N-400 up to 90 days before the 5-year anniversary.",
      color: "amber" as const,
    };
  }

  if (answers.greenCardYears === "Less than 3 years") {
    if (answers.marriedToCitizen === "Yes") {
      return {
        eligible: false,
        title: "Not Yet Eligible",
        message:
          "Even with the 3-year spouse rule, you need at least 3 years as a permanent resident. You may file your N-400 up to 90 days before your 3-year anniversary. In the meantime, you can start preparing for the civics test.",
        color: "amber" as const,
      };
    }
    return {
      eligible: false,
      title: "Not Yet Eligible",
      message:
        "You need to have held your green card for at least 5 years (or 3 years if married to a US citizen). Keep your green card and continue building your residency. You can start studying for the civics test now so you are prepared when the time comes.",
      color: "amber" as const,
    };
  }

  if (answers.continuousResidence === "No") {
    return {
      eligible: false,
      title: "Potential Issue: Continuous Residence",
      message:
        "Extended trips outside the US may have broken your continuous residence. If you were abroad for 6 to 12 months, you may be able to overcome the presumption. If over 12 months, you may need to restart the residency clock. Consult an immigration attorney for guidance on your specific travel history.",
      color: "amber" as const,
    };
  }

  if (answers.physicalPresence === "No") {
    return {
      eligible: false,
      title: "Potential Issue: Physical Presence",
      message:
        "You may not have accumulated enough days on US soil. For the 5-year path, you need at least 30 months (913 days) of physical presence. For the 3-year spouse path, you need at least 18 months (548 days). Consider waiting until you meet the requirement before filing.",
      color: "amber" as const,
    };
  }

  return {
    eligible: false,
    title: "Unable to Determine",
    message:
      "Based on your answers, we could not make a clear determination. Your situation may require individual evaluation. We recommend consulting an immigration attorney or contacting USCIS directly.",
    color: "amber" as const,
  };
}

export default function EligibilityForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[step];
  const totalSteps = questions.length;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.key]: value };
    setAnswers(newAnswers);

    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers(initialAnswers);
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult(answers);
    const colorMap = {
      green: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        icon: "text-emerald-400",
        title: "text-emerald-300",
      },
      red: {
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: "text-red-400",
        title: "text-red-300",
      },
      amber: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        icon: "text-amber-400",
        title: "text-amber-300",
      },
    };
    const colors = colorMap[result.color];

    return (
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
        <div className={`${colors.bg} ${colors.border} border rounded-xl p-6 mb-6`}>
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 mt-0.5 ${colors.icon}`}>
              {result.color === "green" ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              ) : result.color === "red" ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              )}
            </div>
            <div>
              <h3 className={`text-xl font-bold ${colors.title} mb-2`}>
                {result.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {result.message}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-xl p-4 mb-6">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-400">Disclaimer:</strong> This tool
            provides a general assessment only and is not legal advice. It does
            not account for every possible factor in your individual case.
            Eligibility for US citizenship depends on many factors and USCIS
            makes the final determination. For personalized guidance, consult a
            qualified immigration attorney or an accredited representative.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          {result.eligible ? (
            <>
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
              >
                Start Studying for the Test
              </Link>
              <Link
                href="/n400-guide"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
              >
                Read the N-400 Guide
              </Link>
            </>
          ) : (
            <Link
              href="/study"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors w-full sm:w-auto"
            >
              Start Studying Ahead of Time
            </Link>
          )}
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700 transition-colors w-full sm:w-auto"
          >
            Retake Checker
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-400">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="text-sm text-slate-500">
            {Math.round(((step + 1) / totalSteps) * 100)}% complete
          </span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-bold text-white mb-2">
        {currentQuestion.question}
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        {currentQuestion.helpText}
      </p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="w-full text-left px-5 py-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 hover:border-blue-500/50 text-white font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {option}
          </button>
        ))}
      </div>

      {/* Back Button */}
      {step > 0 && (
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-300 transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to previous question
        </button>
      )}
    </div>
  );
}
