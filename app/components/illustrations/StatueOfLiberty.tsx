export default function StatueOfLiberty({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 120" fill="none" aria-hidden="true">
      {/* Torch flame */}
      <ellipse cx="58" cy="10" rx="5" ry="8" fill="#3b82f6" opacity="0.5" />
      <ellipse cx="58" cy="12" rx="3" ry="5" fill="#60a5fa" opacity="0.6" />
      {/* Torch */}
      <rect x="55" y="16" width="6" height="14" rx="1" fill="#475569" />
      {/* Raised arm */}
      <rect x="50" y="28" width="8" height="22" rx="3" fill="#334155" transform="rotate(-10, 54, 39)" />
      {/* Crown */}
      <polygon points="30,30 33,20 36,30 39,18 42,30 45,20 48,30" fill="#475569" />
      {/* Head */}
      <ellipse cx="39" cy="34" rx="10" ry="8" fill="#334155" />
      {/* Face hint */}
      <rect x="36" y="32" width="6" height="3" rx="1" fill="#3d4f63" />
      {/* Body / robe */}
      <path d="M28 42 L24 100 L54 100 L50 42 Z" fill="#334155" />
      {/* Robe folds */}
      <line x1="32" y1="50" x2="30" y2="95" stroke="#475569" strokeWidth="1.5" />
      <line x1="38" y1="48" x2="36" y2="95" stroke="#475569" strokeWidth="1.5" />
      <line x1="44" y1="48" x2="42" y2="95" stroke="#475569" strokeWidth="1.5" />
      <line x1="48" y1="50" x2="47" y2="95" stroke="#475569" strokeWidth="1.5" />
      {/* Left arm holding tablet */}
      <rect x="22" y="50" width="8" height="20" rx="2" fill="#3d4f63" />
      {/* Tablet */}
      <rect x="18" y="52" width="10" height="16" rx="1" fill="#475569" />
      <line x1="20" y1="56" x2="26" y2="56" stroke="#64748b" strokeWidth="1" />
      <line x1="20" y1="59" x2="26" y2="59" stroke="#64748b" strokeWidth="1" />
      <line x1="20" y1="62" x2="26" y2="62" stroke="#64748b" strokeWidth="1" />
      {/* Pedestal */}
      <rect x="20" y="100" width="38" height="8" fill="#475569" />
      <rect x="16" y="108" width="46" height="6" fill="#3d4f63" />
      <rect x="12" y="114" width="54" height="6" fill="#334155" />
    </svg>
  );
}
