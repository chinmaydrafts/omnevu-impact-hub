import type { PrincipleAccent } from "./accents";

/**
 * Original abstract artwork used as editorial imagery. Pure SVG/CSS so a card
 * never renders as a blank or broken image surface.
 */
export function SectionArt({
  variant,
  color,
  tint,
  className = "",
  label,
}: {
  variant: PrincipleAccent["art"];
  color: string;
  tint: string;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: tint }}
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <svg
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`g-${variant}-${color.slice(1)}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.85" />
            <stop offset="100%" stopColor={color} stopOpacity="0.25" />
          </linearGradient>
        </defs>
        {variant === "columns" ? (
          <g fill={`url(#g-${variant}-${color.slice(1)})`}>
            <rect x="40" y="110" width="26" height="70" rx="4" />
            <rect x="86" y="70" width="26" height="110" rx="4" opacity="0.75" />
            <rect x="132" y="34" width="26" height="146" rx="4" opacity="0.55" />
            <rect x="300" y="26" width="70" height="70" rx="35" opacity="0.35" />
            <path d="M188 180 L372 180" stroke={color} strokeWidth="2" opacity="0.35" />
          </g>
        ) : null}
        {variant === "rings" ? (
          <g fill="none" stroke={color}>
            <circle cx="140" cy="100" r="70" strokeWidth="2" opacity="0.4" />
            <circle cx="140" cy="100" r="46" strokeWidth="10" opacity="0.25" />
            <circle cx="140" cy="100" r="20" strokeWidth="3" opacity="0.7" />
            <circle cx="290" cy="60" r="34" strokeWidth="2" opacity="0.35" />
            <circle cx="330" cy="140" r="52" strokeWidth="2" opacity="0.25" />
          </g>
        ) : null}
        {variant === "arcs" ? (
          <g fill="none" stroke={color} strokeLinecap="round">
            <path d="M20 170 A120 120 0 0 1 260 170" strokeWidth="10" opacity="0.3" />
            <path d="M60 170 A80 80 0 0 1 220 170" strokeWidth="10" opacity="0.5" />
            <path d="M100 170 A40 40 0 0 1 180 170" strokeWidth="10" opacity="0.8" />
            <circle cx="320" cy="70" r="26" fill={color} opacity="0.3" stroke="none" />
          </g>
        ) : null}
        {variant === "waves" ? (
          <g fill="none" stroke={color} strokeWidth="3">
            <path d="M-10 60 Q60 20 130 60 T270 60 T410 60" opacity="0.65" />
            <path d="M-10 100 Q60 60 130 100 T270 100 T410 100" opacity="0.45" />
            <path d="M-10 140 Q60 100 130 140 T270 140 T410 140" opacity="0.3" />
            <circle cx="130" cy="100" r="9" fill={color} stroke="none" opacity="0.8" />
          </g>
        ) : null}
        {variant === "bars" ? (
          <g fill={`url(#g-${variant}-${color.slice(1)})`}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <rect key={i} x={30 + i * 46} y={180 - (30 + ((i * 37) % 120))} width="22" height={30 + ((i * 37) % 120)} rx="3" opacity={0.25 + (i % 4) * 0.18} />
            ))}
          </g>
        ) : null}
        {variant === "grid" ? (
          <g stroke={color} strokeWidth="1.5" opacity="0.45">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="200" />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
            ))}
            <rect x="150" y="50" width="100" height="100" fill={color} opacity="0.35" stroke="none" />
          </g>
        ) : null}
        {variant === "mesh" ? (
          <g stroke={color} strokeWidth="1.5">
            <path d="M40 160 L120 60 L200 150 L280 50 L360 140" fill="none" opacity="0.6" />
            {[
              [40, 160],
              [120, 60],
              [200, 150],
              [280, 50],
              [360, 140],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="10" fill={color} opacity="0.45" stroke="none" />
            ))}
          </g>
        ) : null}
        {variant === "nodes" ? (
          <g stroke={color} strokeWidth="1.5" opacity="0.7">
            <circle cx="200" cy="100" r="24" fill={color} opacity="0.35" stroke="none" />
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const a = (i / 6) * Math.PI * 2;
              const x = 200 + Math.cos(a) * 110;
              const y = 100 + Math.sin(a) * 70;
              return (
                <g key={i}>
                  <line x1="200" y1="100" x2={x} y2={y} opacity="0.4" />
                  <circle cx={x} cy={y} r="12" fill={color} opacity="0.3" stroke="none" />
                </g>
              );
            })}
          </g>
        ) : null}
        {variant === "shield" ? (
          <g fill="none" stroke={color}>
            <path d="M200 30 L280 62 V110 C280 152 240 172 200 182 C160 172 120 152 120 110 V62 Z" strokeWidth="3" opacity="0.7" />
            <path d="M200 56 L256 78 V112 C256 141 228 156 200 164 C172 156 144 141 144 112 V78 Z" fill={color} opacity="0.2" stroke="none" />
            <path d="M172 108 L194 130 L234 88" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </g>
        ) : null}
      </svg>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: `linear-gradient(160deg, transparent 45%, ${tint} 100%)` }}
      />
    </div>
  );
}
