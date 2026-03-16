"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface LeadCaptureProps {
  variant?: "inline" | "banner";
}

export default function LeadCapture({ variant = "inline" }: LeadCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (variant === "banner") {
      const captured = localStorage.getItem("lead-captured");
      if (captured) setDismissed(true);
    }
  }, [variant]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        localStorage.setItem("lead-captured", "true");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (dismissed && variant === "banner") return null;
  if (status === "success") {
    return (
      <div className={variant === "banner" ? "bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center" : "bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center"}>
        <div className="text-2xl mb-2">✓</div>
        <p className="text-emerald-300 font-medium">Check your email for the study guide!</p>
        <p className="text-slate-400 text-sm mt-2">
          Meanwhile, access your study guide at{" "}
          <Link href="/printable-study-guide" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
            /printable-study-guide
          </Link>
        </p>
        <p className="text-slate-400 text-sm mt-1">Didn&apos;t receive it? Check your spam folder.</p>
      </div>
    );
  }

  const containerClass = variant === "banner"
    ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-6 sm:p-8"
    : "bg-slate-900/80 border border-slate-800 rounded-2xl p-6";

  return (
    <div className={containerClass}>
      <div className={variant === "banner" ? "max-w-2xl mx-auto text-center" : ""}>
        <h3 className="text-lg font-semibold text-white mb-2">
          Free Printable Study Guide
        </h3>
        <p className="text-slate-300 text-sm mb-4">
          Get all 128 USCIS citizenship test questions in a printable PDF — perfect for studying offline.
        </p>
        <form onSubmit={handleSubmit} className={variant === "banner" ? "flex flex-col sm:flex-row gap-3 justify-center" : "flex flex-col gap-3"}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:text-slate-400 text-white font-medium rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            {status === "loading" ? "Sending..." : "Get Free PDF"}
          </button>
        </form>
        {status === "error" && (
          <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
        )}
        <p className="text-slate-500 text-xs mt-3">
          No spam. Unsubscribe anytime.{" "}
          <Link href="/privacy-policy" className="text-slate-400 hover:text-slate-300 underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
