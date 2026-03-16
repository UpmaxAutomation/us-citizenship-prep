export default function Constitution({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 110" fill="none" aria-hidden="true">
      {/* Scroll top curl */}
      <ellipse cx="45" cy="10" rx="38" ry="8" fill="#475569" />
      <ellipse cx="45" cy="10" rx="34" ry="5" fill="#334155" />
      {/* Main parchment */}
      <rect x="10" y="10" width="70" height="82" rx="2" fill="#334155" />
      {/* Scroll bottom curl */}
      <ellipse cx="45" cy="92" rx="38" ry="8" fill="#475569" />
      <ellipse cx="45" cy="92" rx="34" ry="5" fill="#334155" />
      {/* "We the People" text */}
      <text
        x="45"
        y="30"
        textAnchor="middle"
        fontSize="8"
        fontStyle="italic"
        fill="#64748b"
        fontFamily="serif"
      >
        We the People
      </text>
      {/* Content lines */}
      <line x1="20" y1="40" x2="70" y2="40" stroke="#475569" strokeWidth="1.5" />
      <line x1="20" y1="47" x2="65" y2="47" stroke="#475569" strokeWidth="1.5" />
      <line x1="20" y1="54" x2="68" y2="54" stroke="#475569" strokeWidth="1.5" />
      <line x1="20" y1="61" x2="60" y2="61" stroke="#475569" strokeWidth="1.5" />
      <line x1="20" y1="68" x2="66" y2="68" stroke="#475569" strokeWidth="1.5" />
      <line x1="20" y1="75" x2="55" y2="75" stroke="#475569" strokeWidth="1.5" />
      {/* Quill decoration */}
      <line x1="62" y1="78" x2="75" y2="95" stroke="#64748b" strokeWidth="1.5" />
      <path d="M75 95 Q78 88 72 92 Q76 90 75 95 Z" fill="#64748b" />
    </svg>
  );
}
