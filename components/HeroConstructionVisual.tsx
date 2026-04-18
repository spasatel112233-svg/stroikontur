export function HeroConstructionVisual() {
  return (
    <div className="svg-visual" aria-hidden>
      <svg viewBox="0 0 640 520" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1b2f63" />
            <stop offset="100%" stopColor="#0a1531" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff9b3d" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="640" height="520" fill="url(#g1)" rx="30" />
        <rect x="348" y="126" width="156" height="238" rx="16" fill="#132347" opacity="0.92" />
        <rect x="514" y="168" width="74" height="196" rx="16" fill="#112040" opacity="0.82" />
        <rect x="278" y="186" width="48" height="178" rx="12" fill="#14284f" opacity="0.72" />
        <rect x="218" y="228" width="44" height="136" rx="12" fill="#163058" opacity="0.68" />
        <line x1="170" y1="112" x2="512" y2="112" stroke="#d4dae5" strokeOpacity="0.22" strokeWidth="8" strokeLinecap="round" />
        <line x1="470" y1="112" x2="560" y2="170" stroke="#d4dae5" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
        <line x1="472" y1="112" x2="420" y2="314" stroke="#d4dae5" strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
        <line x1="312" y1="112" x2="312" y2="410" stroke="#e4e8ef" strokeOpacity="0.28" strokeWidth="7" strokeLinecap="round" />
        <line x1="282" y1="150" x2="358" y2="150" stroke="url(#g2)" strokeWidth="14" strokeLinecap="round" />
        <rect x="80" y="322" width="468" height="74" rx="18" fill="#0b1838" opacity="0.4" />
        <rect x="86" y="380" width="478" height="18" rx="9" fill="#ff7a00" opacity="0.18" />
        <circle cx="476" cy="160" r="76" fill="#ffffff" fillOpacity="0.06" />
        <circle cx="476" cy="160" r="46" fill="#ffffff" fillOpacity="0.08" />
      </svg>
    </div>
  );
}
