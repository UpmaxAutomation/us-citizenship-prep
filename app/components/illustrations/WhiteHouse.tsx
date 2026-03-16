export default function WhiteHouse({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 90" fill="none" aria-hidden="true">
      {/* Main building */}
      <rect x="35" y="30" width="70" height="40" fill="#334155" />
      {/* Portico pediment */}
      <polygon points="40,30 70,16 100,30" fill="#475569" />
      {/* Portico columns */}
      <rect x="45" y="30" width="4" height="38" rx="1" fill="#475569" />
      <rect x="55" y="30" width="4" height="38" rx="1" fill="#475569" />
      <rect x="65" y="30" width="4" height="38" rx="1" fill="#475569" />
      <rect x="75" y="30" width="4" height="38" rx="1" fill="#475569" />
      <rect x="85" y="30" width="4" height="38" rx="1" fill="#475569" />
      <rect x="95" y="30" width="4" height="38" rx="1" fill="#475569" />
      {/* Door */}
      <rect x="64" y="50" width="12" height="20" rx="6" fill="#1e293b" />
      {/* Windows row 1 */}
      <rect x="42" y="36" width="8" height="10" rx="1" fill="#1e293b" />
      <rect x="56" y="36" width="8" height="10" rx="1" fill="#1e293b" />
      <rect x="76" y="36" width="8" height="10" rx="1" fill="#1e293b" />
      <rect x="90" y="36" width="8" height="10" rx="1" fill="#1e293b" />
      {/* Windows row 2 */}
      <rect x="42" y="52" width="8" height="10" rx="1" fill="#1e293b" />
      <rect x="90" y="52" width="8" height="10" rx="1" fill="#1e293b" />
      {/* Left wing */}
      <rect x="5" y="40" width="30" height="30" fill="#2d3a4a" />
      <rect x="9" y="45" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="19" y="45" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="29" y="45" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="9" y="57" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="19" y="57" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="29" y="57" width="6" height="8" rx="1" fill="#1e293b" />
      {/* Right wing */}
      <rect x="105" y="40" width="30" height="30" fill="#2d3a4a" />
      <rect x="109" y="45" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="119" y="45" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="129" y="45" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="109" y="57" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="119" y="57" width="6" height="8" rx="1" fill="#1e293b" />
      <rect x="129" y="57" width="6" height="8" rx="1" fill="#1e293b" />
      {/* Base */}
      <rect x="3" y="70" width="134" height="5" rx="1" fill="#475569" />
      {/* Flag on top */}
      <line x1="70" y1="16" x2="70" y2="6" stroke="#64748b" strokeWidth="1.5" />
      <rect x="70" y="6" width="10" height="6" rx="1" fill="#3b82f6" opacity="0.5" />
    </svg>
  );
}
