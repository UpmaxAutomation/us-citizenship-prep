export default function Capitol({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" aria-hidden="true">
      {/* Dome */}
      <ellipse cx="60" cy="30" rx="22" ry="18" fill="#334155" />
      <rect x="56" y="12" width="8" height="10" rx="2" fill="#475569" />
      <circle cx="60" cy="10" r="3" fill="#64748b" />
      {/* Dome base */}
      <rect x="35" y="28" width="50" height="6" rx="1" fill="#475569" />
      {/* Main building */}
      <rect x="30" y="34" width="60" height="30" fill="#334155" />
      {/* Columns */}
      <rect x="36" y="36" width="4" height="26" rx="1" fill="#475569" />
      <rect x="46" y="36" width="4" height="26" rx="1" fill="#475569" />
      <rect x="56" y="36" width="4" height="26" rx="1" fill="#475569" />
      <rect x="66" y="36" width="4" height="26" rx="1" fill="#475569" />
      <rect x="76" y="36" width="4" height="26" rx="1" fill="#475569" />
      {/* Pediment */}
      <polygon points="28,34 60,22 92,34" fill="#475569" />
      {/* Base steps */}
      <rect x="24" y="64" width="72" height="5" rx="1" fill="#334155" />
      <rect x="18" y="69" width="84" height="5" rx="1" fill="#2d3a4a" />
      <rect x="12" y="74" width="96" height="5" rx="1" fill="#263344" />
      {/* Wings */}
      <rect x="8" y="44" width="22" height="20" fill="#2d3a4a" />
      <rect x="90" y="44" width="22" height="20" fill="#2d3a4a" />
      {/* Wing columns */}
      <rect x="12" y="46" width="3" height="16" rx="1" fill="#3d4f63" />
      <rect x="19" y="46" width="3" height="16" rx="1" fill="#3d4f63" />
      <rect x="26" y="46" width="3" height="16" rx="1" fill="#3d4f63" />
      <rect x="94" y="46" width="3" height="16" rx="1" fill="#3d4f63" />
      <rect x="101" y="46" width="3" height="16" rx="1" fill="#3d4f63" />
      <rect x="108" y="46" width="3" height="16" rx="1" fill="#3d4f63" />
    </svg>
  );
}
