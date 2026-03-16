export default function BaldEagle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" aria-hidden="true">
      {/* Left wing */}
      <path
        d="M60 35 Q40 15 8 20 Q15 30 20 35 Q10 28 5 32 Q18 38 25 40 Q15 36 10 40 Q25 42 35 42 L60 40 Z"
        fill="#334155"
      />
      {/* Right wing */}
      <path
        d="M60 35 Q80 15 112 20 Q105 30 100 35 Q110 28 115 32 Q102 38 95 40 Q105 36 110 40 Q95 42 85 42 L60 40 Z"
        fill="#334155"
      />
      {/* Body */}
      <ellipse cx="60" cy="45" rx="12" ry="15" fill="#475569" />
      {/* Head */}
      <circle cx="60" cy="28" r="8" fill="#e2e8f0" />
      {/* Eye */}
      <circle cx="62" cy="27" r="1.5" fill="#1e293b" />
      {/* Beak */}
      <polygon points="66,29 74,32 66,33" fill="#eab308" />
      {/* Tail feathers */}
      <path d="M52 58 L48 72 L54 68 L58 74 L60 68 L62 74 L66 68 L72 72 L68 58 Z" fill="#e2e8f0" />
      {/* Talons left */}
      <path d="M52 56 L46 64 M52 56 L48 66 M52 56 L50 66" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" />
      {/* Talons right */}
      <path d="M68 56 L74 64 M68 56 L72 66 M68 56 L70 66" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
