export default function LibertyBell({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 100" fill="none" aria-hidden="true">
      {/* Yoke (top mounting bracket) */}
      <rect x="25" y="5" width="30" height="8" rx="3" fill="#475569" />
      <rect x="35" y="2" width="10" height="6" rx="2" fill="#64748b" />
      {/* Top crown of bell */}
      <rect x="30" y="13" width="20" height="6" rx="2" fill="#475569" />
      {/* Bell body */}
      <path
        d="M30 19 Q28 35 24 50 Q20 65 16 72 L64 72 Q60 65 56 50 Q52 35 50 19 Z"
        fill="#334155"
      />
      {/* Bell lip */}
      <path
        d="M16 72 Q14 76 14 78 L66 78 Q66 76 64 72 Z"
        fill="#475569"
      />
      {/* Crack */}
      <path
        d="M42 25 L40 32 L43 40 L39 48 L42 56 L40 64 L38 72"
        stroke="#1e293b"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Decorative band */}
      <rect x="27" y="38" width="26" height="4" rx="1" fill="#475569" />
      <rect x="25" y="54" width="30" height="4" rx="1" fill="#475569" />
      {/* Text hint on bell */}
      <line x1="30" y1="46" x2="50" y2="46" stroke="#3d4f63" strokeWidth="1" />
      <line x1="32" y1="49" x2="48" y2="49" stroke="#3d4f63" strokeWidth="1" />
      {/* Clapper */}
      <line x1="40" y1="60" x2="40" y2="76" stroke="#64748b" strokeWidth="2" />
      <circle cx="40" cy="78" r="3" fill="#64748b" />
    </svg>
  );
}
