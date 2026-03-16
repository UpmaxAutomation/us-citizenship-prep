export default function Gavel({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" aria-hidden="true">
      {/* Gavel head */}
      <rect
        x="50"
        y="10"
        width="36"
        height="14"
        rx="4"
        fill="#475569"
        transform="rotate(-30, 68, 17)"
      />
      {/* Gavel head bands */}
      <rect
        x="52"
        y="14"
        width="4"
        height="14"
        rx="1"
        fill="#64748b"
        transform="rotate(-30, 54, 21)"
      />
      <rect
        x="80"
        y="14"
        width="4"
        height="14"
        rx="1"
        fill="#64748b"
        transform="rotate(-30, 82, 21)"
      />
      {/* Handle */}
      <rect
        x="38"
        y="22"
        width="6"
        height="40"
        rx="2"
        fill="#334155"
        transform="rotate(-30, 41, 42)"
      />
      {/* Handle grip */}
      <rect
        x="30"
        y="48"
        width="8"
        height="10"
        rx="3"
        fill="#475569"
        transform="rotate(-30, 34, 53)"
      />
      {/* Sound block (base) */}
      <rect x="10" y="62" width="50" height="8" rx="3" fill="#334155" />
      <rect x="14" y="58" width="42" height="6" rx="2" fill="#475569" />
      {/* Impact lines */}
      <line x1="35" y1="54" x2="32" y2="50" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="52" x2="40" y2="48" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
      <line x1="45" y1="54" x2="48" y2="50" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
