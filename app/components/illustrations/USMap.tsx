export default function USMap({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 90" fill="none" aria-hidden="true">
      {/* Simplified continental US outline */}
      <path
        d="M10 25 L15 20 L25 18 L35 15 L40 18 L42 15 L48 14 L55 16 L58 14 L65 15 L70 12 L78 10 L85 12 L90 10 L95 12 L100 14 L108 16 L115 20 L120 18 L125 22 L128 28 L130 35 L128 40 L125 45 L120 48 L118 55 L115 60 L110 62 L105 65 L100 62 L95 65 L90 68 L85 70 L80 68 L75 70 L70 72 L65 70 L58 68 L50 65 L42 62 L38 58 L35 55 L30 58 L25 60 L20 58 L18 52 L15 48 L12 42 L10 38 L8 32 Z"
        fill="#334155"
        stroke="#475569"
        strokeWidth="1.5"
      />
      {/* Florida peninsula */}
      <path
        d="M105 65 L108 72 L112 78 L110 80 L106 76 L102 70 L100 62"
        fill="#334155"
        stroke="#475569"
        strokeWidth="1.5"
      />
      {/* State grid hints */}
      <line x1="45" y1="20" x2="45" y2="55" stroke="#3d4f63" strokeWidth="0.5" />
      <line x1="70" y1="18" x2="70" y2="65" stroke="#3d4f63" strokeWidth="0.5" />
      <line x1="95" y1="15" x2="95" y2="62" stroke="#3d4f63" strokeWidth="0.5" />
      <line x1="15" y1="38" x2="125" y2="38" stroke="#3d4f63" strokeWidth="0.5" />
      {/* Star marker (capital) */}
      <circle cx="108" cy="38" r="2.5" fill="#3b82f6" opacity="0.6" />
    </svg>
  );
}
