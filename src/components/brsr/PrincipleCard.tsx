import { Link } from "@tanstack/react-router";
import { ArrowUpRight, icons } from "lucide-react";
import type { PrincipleMeta } from "@/data/types";

const accentBar: Record<PrincipleMeta["accent"], string> = {
  primary: "bg-primary",
  cyan: "bg-cyan",
  green: "bg-green",
  orange: "bg-orange",
  tint: "bg-primary/60",
};

const accentText: Record<PrincipleMeta["accent"], string> = {
  primary: "text-primary",
  cyan: "text-cyan",
  green: "text-green",
  orange: "text-orange",
  tint: "text-primary",
};

export function PrincipleCard({ principle }: { principle: PrincipleMeta }) {
  const Icon = icons[principle.icon as keyof typeof icons] ?? icons.Circle;

  return (
    <Link
      to="/brsr/principle/$id"
      params={{ id: String(principle.number) }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-primary/60"
    >
      <div className="relative grid h-32 place-items-center overflow-hidden bg-gradient-to-br from-surface-elevated to-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <Icon aria-hidden="true" className={`relative size-10 ${accentText[principle.accent]}`} />
        <span className="absolute left-4 top-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
          Principle {principle.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
          {principle.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{principle.shortSummary}</p>
        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            {principle.essentialCount} essential · {principle.leadershipCount} leadership
          </span>
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
      <div className={`h-1.5 w-full ${accentBar[principle.accent]}`} />
    </Link>
  );
}
