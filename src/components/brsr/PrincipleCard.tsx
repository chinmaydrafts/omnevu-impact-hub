import { Link } from "@tanstack/react-router";
import { ArrowRight, icons } from "lucide-react";
import { SectionArt } from "./SectionArt";
import { getAccent } from "./accents";
import type { PrincipleMeta } from "@/data/types";

export function PrincipleCard({ principle }: { principle: PrincipleMeta }) {
  const Icon = icons[principle.icon as keyof typeof icons] ?? icons.Circle;
  const accent = getAccent(principle.number);

  return (
    <Link
      to="/brsr/principle/$id"
      params={{ id: String(principle.number) }}
      style={{ ["--accent" as string]: accent.color }}
      className="card-lift group flex flex-col overflow-hidden rounded-xl border border-border bg-surface hover:border-[color:var(--accent)]"
    >
      <div className="relative h-36 overflow-hidden">
        <SectionArt
          variant={accent.art}
          color={accent.color}
          tint={accent.tint}
          className="size-full transition-transform duration-500 group-hover:scale-[1.03]"
          label={`${principle.imageTopic} — abstract illustration`}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 right-3 font-display text-[5.5rem] font-bold leading-none text-[color:var(--accent)] opacity-20"
        >
          {principle.number}
        </span>
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-surface/90 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--accent)] shadow-sm">
          <Icon aria-hidden="true" className="size-3.5" />
          Principle {principle.number}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 border-t border-border p-5">
        <h3 className="font-display text-[1.35rem] font-semibold leading-snug text-foreground group-hover:text-[color:var(--accent)]">
          {principle.title}
        </h3>
        <p className="flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">{principle.shortSummary}</p>
        <dl className="mt-1 grid grid-cols-2 gap-3 border-t border-border pt-3 text-sm">
          <div>
            <dt className="text-xs text-muted-foreground">Essential</dt>
            <dd className="font-display text-lg font-semibold tabular-nums text-foreground">{principle.essentialCount}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">Leadership</dt>
            <dd className="font-display text-lg font-semibold tabular-nums text-foreground">{principle.leadershipCount}</dd>
          </div>
        </dl>
        <div className="mt-1 flex items-center justify-between gap-3 border-t border-border pt-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-status-orange" />
            Pending validation
          </span>
          <ArrowRight
            aria-hidden="true"
            className="size-4 text-[color:var(--accent)] transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
      <div aria-hidden="true" className="h-1 w-full bg-[color:var(--accent)]" />
    </Link>
  );
}
