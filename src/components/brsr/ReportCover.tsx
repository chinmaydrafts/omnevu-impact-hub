import { PRINCIPLES } from "@/data/report";

const THEME_LABELS = [
  { label: "Governance", angle: -90 },
  { label: "People", angle: -18 },
  { label: "Planet", angle: 54 },
  { label: "Product", angle: 126 },
  { label: "Trust", angle: 198 },
];

/**
 * OmneVu OV mark orbited by the nine NGRBC principle nodes.
 * Framework illustration only — it carries no metrics.
 *
 * `subtle` renders the restrained overlay version used on the photographic
 * report cover: no glow, thinner strokes, lower contrast.
 */
export function ReportCover({ subtle = false }: { subtle?: boolean }) {
  const radius = 132;
  const stroke = subtle ? "rgba(230,240,246,0.34)" : "#284459";
  const nodeFill = subtle ? "rgba(8,27,43,0.55)" : "#0b1f33";

  return (
    <div className={`relative mx-auto aspect-square w-full ${subtle ? "max-w-[22rem]" : "max-w-[26rem]"}`}>
      {subtle ? null : (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-70 blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(20,120,184,0.42), rgba(26,175,193,0.16) 60%, transparent 78%)",
          }}
        />
      )}
      <svg
        viewBox="0 0 360 360"
        className="orbit-in relative size-full"
        role="img"
        aria-label="OmneVu reporting framework: the OV mark encircled by the nine NGRBC principles across governance, people, planet, product and trust."
      >
        <defs>
          <linearGradient id={`cover-ring-${subtle ? "s" : "f"}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1478b8" />
            <stop offset="45%" stopColor="#1aafc1" />
            <stop offset="75%" stopColor="#239a64" />
            <stop offset="100%" stopColor="#ed8b43" />
          </linearGradient>
        </defs>

        <circle cx="180" cy="180" r="164" fill="none" stroke={stroke} strokeWidth="1" />
        <circle
          cx="180"
          cy="180"
          r={radius}
          fill="none"
          stroke={`url(#cover-ring-${subtle ? "s" : "f"})`}
          strokeWidth={subtle ? 1.25 : 2}
          opacity={subtle ? 0.55 : 0.9}
        />
        <circle cx="180" cy="180" r="92" fill="none" stroke={stroke} strokeWidth="1" strokeDasharray="3 6" />

        {THEME_LABELS.map((t) => {
          const rad = (t.angle * Math.PI) / 180;
          return (
            <text
              key={t.label}
              x={180 + Math.cos(rad) * 164}
              y={180 + Math.sin(rad) * 164}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={subtle ? "rgba(230,240,246,0.6)" : "#a9c0d0"}
              fontSize="10.5"
              letterSpacing="1.3"
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
              <line x1="180" y1="180" x2={x} y2={y} stroke={stroke} strokeWidth="1" opacity="0.7" />
              <circle cx={x} cy={y} r={subtle ? 15 : 19} fill={nodeFill} stroke={subtle ? "rgba(230,240,246,0.45)" : "#3a5a72"} strokeWidth="1.25" />
              <text
                x={x}
                y={y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={subtle ? "rgba(240,247,251,0.9)" : "#e7f0f6"}
                fontSize={subtle ? 10 : 12}
                fontWeight="600"
              >
                P{p.number}
              </text>
            </g>
          );
        })}

        <circle cx="180" cy="180" r="52" fill={nodeFill} stroke={subtle ? "rgba(26,175,193,0.55)" : "#1478b8"} strokeWidth="1.25" />
        <circle cx="168" cy="174" r="13" fill="none" stroke={subtle ? "rgba(240,247,251,0.88)" : "#e7f0f6"} strokeWidth="3.5" />
        <path d="M182 166 L192 194 L202 166" fill="none" stroke="#ed8b43" strokeWidth="3.5" strokeLinecap="square" />
        <path d="M158 200 h44" stroke="#239a64" strokeWidth="3" strokeLinecap="square" />
      </svg>
    </div>
  );
}
