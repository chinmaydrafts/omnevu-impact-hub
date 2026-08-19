import { EditorialImage } from "./EditorialImage";
import { getAccent } from "./accents";
import { PRINCIPLE_IMAGE } from "@/data/imageRegistry";
import type { PrincipleMeta } from "@/data/types";

/**
 * Sticky visual stage for the desktop principle explorer. Purely supplementary:
 * every fact shown here is also present as text in the accessible list.
 */
export function PrincipleStage({ principle, index, total }: { principle: PrincipleMeta; index: number; total: number }) {
  const accent = getAccent(principle.number);
  const progress = ((index + 1) / total) * 100;
  const r = 17;
  const c = 2 * Math.PI * r;

  return (
    <div aria-hidden="true" style={{ ["--accent" as string]: accent.color }}>
      <div className="relative overflow-hidden bg-navy">
        <EditorialImage
          key={principle.number}
          image={PRINCIPLE_IMAGE[principle.number] ?? "atmosphere"}
          ratio="4 / 3"
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="w-full animate-[page-enter_420ms_ease-out]"
        />
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(8,27,43,0.18) 0%, rgba(8,27,43,0.86) 72%), linear-gradient(120deg, ${accent.color}33, transparent 60%)`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="flex items-end justify-between gap-6">
            <div className="min-w-0">
              <span className="rule-label text-[#cfe0ea]">Principle {principle.number}</span>
              <p className="mt-2 font-display text-[1.9rem] font-bold leading-[1.05] text-[#f6f7f3]">
                {principle.title}
              </p>
              <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.85rem] text-[#cfe0ea]">
                <span>{principle.essentialCount} essential</span>
                <span>{principle.leadershipCount} leadership</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-status-orange" />
                  Pending validation
                </span>
              </p>
            </div>
            <svg viewBox="0 0 40 40" className="size-14 shrink-0 -rotate-90">
              <circle cx="20" cy="20" r={r} fill="none" stroke="rgba(246,247,243,0.22)" strokeWidth="2" />
              <circle
                cx="20"
                cy="20"
                r={r}
                fill="none"
                stroke={accent.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={c - (c * progress) / 100}
                style={{ transition: "stroke-dashoffset 400ms ease" }}
              />
            </svg>
          </div>
          <p className="mt-4 border-t border-[rgba(246,247,243,0.18)] pt-3 text-[0.78rem] uppercase tracking-[0.18em] text-[#cfe0ea]">
            {index + 1} of {total}
          </p>
        </div>
      </div>
    </div>
  );
}
