"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentStatus = "accepted" | "rejected" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored as ConsentStatus);
      if (stored === "accepted") {
        window.dispatchEvent(new Event("cookie-consent-granted"));
      }
    } else {
      // Show banner after short delay
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-granted"));
  }

  function handleReject() {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
    setVisible(false);
  }

  if (consent || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl shadow-black/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-slate-300">
            We use cookies to analyze site traffic and improve your experience.{" "}
            <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg border border-slate-700 hover:border-slate-600"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
