export default function VotingBallot({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 100" fill="none" aria-hidden="true">
      {/* Ballot paper */}
      <rect x="8" y="5" width="64" height="85" rx="3" fill="#334155" />
      <rect x="8" y="5" width="64" height="14" rx="3" fill="#475569" />
      {/* Header text lines */}
      <line x1="18" y1="12" x2="62" y2="12" stroke="#64748b" strokeWidth="2" />
      <line x1="28" y1="16" x2="52" y2="16" stroke="#64748b" strokeWidth="1.5" />
      {/* Option 1 - checked */}
      <rect x="16" y="28" width="10" height="10" rx="2" fill="#475569" stroke="#64748b" strokeWidth="1" />
      <polyline points="18,33 21,37 25,29" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="32" y1="33" x2="62" y2="33" stroke="#475569" strokeWidth="2" />
      {/* Option 2 */}
      <rect x="16" y="46" width="10" height="10" rx="2" fill="#475569" stroke="#64748b" strokeWidth="1" />
      <line x1="32" y1="51" x2="58" y2="51" stroke="#475569" strokeWidth="2" />
      {/* Option 3 */}
      <rect x="16" y="64" width="10" height="10" rx="2" fill="#475569" stroke="#64748b" strokeWidth="1" />
      <line x1="32" y1="69" x2="55" y2="69" stroke="#475569" strokeWidth="2" />
      {/* Ballot box hint at bottom */}
      <rect x="22" y="82" width="36" height="4" rx="1" fill="#475569" />
    </svg>
  );
}
