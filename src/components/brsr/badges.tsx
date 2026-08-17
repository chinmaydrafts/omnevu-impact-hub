import type { AssuranceStatus, DisclosureStatus } from "@/data/types";
import { ASSURANCE_LABEL, STATUS_LABEL } from "@/data/report";

/** Dot + label. Colour is never the only carrier of meaning — the label always reads. */
const statusStyles: Record<DisclosureStatus, { wrap: string; dot: string }> = {
  "publicly-verified": {
    wrap: "border-status-green/40 bg-status-green/10 text-status-green",
    dot: "bg-status-green",
  },
  "pending-validation": {
    wrap: "border-status-orange/40 bg-status-orange/10 text-status-orange",
    dot: "bg-status-orange",
  },
  "not-reported": { wrap: "border-border-strong bg-surface-elevated text-muted-foreground", dot: "bg-muted-foreground" },
  "not-applicable": { wrap: "border-border-strong bg-transparent text-muted-foreground", dot: "bg-muted-foreground" },
  "applicability-review": {
    wrap: "border-status-blue/40 bg-status-blue/10 text-status-blue",
    dot: "bg-status-blue",
  },
};

const badgeBase =
  "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[0.78rem] font-medium leading-none";

export function DisclosureStatusBadge({
  status,
  className = "",
  compact = false,
}: {
  status: DisclosureStatus;
  className?: string;
  compact?: boolean;
}) {
  const s = statusStyles[status];
  return (
    <span className={`${badgeBase} ${s.wrap} ${className}`}>
      <span aria-hidden="true" className={`size-2 shrink-0 rounded-full ${s.dot}`} />
      {compact ? <span className="sr-only">{STATUS_LABEL[status]}</span> : STATUS_LABEL[status]}
    </span>
  );
}

export function AssuranceBadge({ assurance, className = "" }: { assurance: AssuranceStatus; className?: string }) {
  const assured = assurance === "reasonable" || assurance === "limited";
  const styles = assured
    ? "border-status-green/40 bg-status-green/10 text-status-green"
    : assurance === "internally-validated"
      ? "border-status-blue/40 bg-status-blue/10 text-status-blue"
      : assurance === "unassured"
        ? "border-status-orange/50 bg-transparent text-status-orange"
        : "border-border-strong bg-transparent text-muted-foreground";
  const dot = assured
    ? "bg-status-green"
    : assurance === "internally-validated"
      ? "bg-status-blue"
      : assurance === "unassured"
        ? "bg-status-orange"
        : "bg-muted-foreground";
  return (
    <span className={`${badgeBase} ${styles} ${className}`}>
      <span aria-hidden="true" className={`size-2 shrink-0 rounded-full ${dot}`} />
      {ASSURANCE_LABEL[assurance]}
    </span>
  );
}

export function TierBadge({ tier }: { tier: "essential" | "leadership" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[0.78rem] font-medium leading-none ${
        tier === "essential"
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-cyan/50 bg-cyan/10 text-teal"
      }`}
    >
      {tier === "essential" ? "Essential Indicator" : "Leadership Indicator"}
    </span>
  );
}
