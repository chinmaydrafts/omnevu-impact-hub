import { PRINCIPLES } from "@/data/report";

const THEME_LABELS = [
  { label: "Governance", angle: -90 },
  { label: "People", angle: -18 },
  { label: "Planet", angle: 54 },
  { label: "Product", angle: 126 },
  { label: "Trust", angle: 198 },
];

/**
 * Original report-cover composition: an OmneVu OV mark orbited by the nine
 * NGRBC principle nodes. Framework illustration only — it carries no metrics.
 */
export function ReportCover() {
  const radius = 132;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(29,135,200,0.45), rgba(26,175,196,0.18) 60%, transparent 78%)",
        }}
      />
      <svg
        viewBox="0 0 360 360"
        className="orbit-in relative size-full"
        role="img"
        aria-label="OmneVu reporting framework: the OV mark encircled by the nine NGRBC principles across governance, people, planet, product and trust."
      >
        <defs>
          <linearGradient id="cover-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1d87c8" />
            <stop offset="45%" stopColor="#1aafc4" />
            <stop offset="75%" stopColor="#229a62" />
            <stop offset="100%" stopColor="#ee8a42" />
          </linearGradient>
        </defs>

        <circle cx="180" cy="180" r="164" fill="none" stroke="#284459" strokeWidth="1" />
        <circle cx="180" cy="180" r={radius} fill="none" stroke="url(#cover-ring)" strokeWidth="2" opacity="0.9" />
        <circle cx="180" cy="180" r="92" fill="none" stroke="#284459" strokeWidth="1" strokeDasharray="3 6" />

        {THEME_LABELS.map((t) => {
          const rad = (t.angle * Math.PI) / 180;
          return (
            <text
              key={t.label}
              x={180 + Math.cos(rad) * 164}
              y={180 + Math.sin(rad) * 164}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#a9c0d0"
              fontSize="11"
              letterSpacing="1.2"
            >
              {t.label.toUpperCase()}
            </text>
          );
        })}

        {PRINCIPLES.map((p, i) => {
          const rad = ((i / PRINCIPLES.length) * Math.PI * 2) - Math.PI / 2;
          const x = 180 + Math.cos(rad) * radius;
          const y = 180 + Math.sin(rad) * radius;
          return (
            <g key={p.number}>
              <line x1="180" y1="180" x2={x} y2={y} stroke="#284459" strokeWidth="1" opacity="0.8" />
              <circle cx={x} cy={y} r="19" fill="#0b1f33" stroke="#3a5a72" strokeWidth="1.5" />
              <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle" fill="#e7f0f6" fontSize="12" fontWeight="600">
                P{p.number}
              </text>
            </g>
          );
        })}

        <circle cx="180" cy="180" r="52" fill="#0b1f33" stroke="#1d87c8" strokeWidth="1.5" />
        <circle cx="168" cy="174" r="13" fill="none" stroke="#e7f0f6" strokeWidth="4" />
        <path d="M182 166 L192 194 L202 166" fill="none" stroke="#ee8a42" strokeWidth="4" strokeLinecap="square" />
        <path d="M158 200 h44" stroke="#229a62" strokeWidth="3.5" strokeLinecap="square" />
      </svg>
    </div>
  );
}
