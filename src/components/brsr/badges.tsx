import { AlertCircle, CircleDashed, CircleHelp, CircleSlash, ShieldCheck, ShieldQuestion } from "lucide-react";
import type { AssuranceStatus, DisclosureStatus } from "@/data/types";
import { ASSURANCE_LABEL, STATUS_LABEL } from "@/data/report";

const statusStyles: Record<DisclosureStatus, string> = {
  "publicly-verified": "border-green/40 bg-green/12 text-green",
  "pending-validation": "border-orange/40 bg-orange/12 text-orange",
  "not-reported": "border-border bg-surface-elevated text-muted-foreground",
  "not-applicable": "border-border bg-surface-elevated text-muted-foreground",
  "applicability-review": "border-cyan/40 bg-cyan/12 text-cyan",
};

const statusIcon: Record<DisclosureStatus, typeof ShieldCheck> = {
  "publicly-verified": ShieldCheck,
  "pending-validation": CircleDashed,
  "not-reported": CircleSlash,
  "not-applicable": CircleSlash,
  "applicability-review": CircleHelp,
};

export function DisclosureStatusBadge({
  status,
  className = "",
  compact = false,
}: {
  status: DisclosureStatus;
  className?: string;
  compact?: boolean;
}) {
  const Icon = statusIcon[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.75rem] font-medium leading-none ${statusStyles[status]} ${className}`}
    >
      <Icon aria-hidden="true" className="size-3.5" />
      {compact ? null : STATUS_LABEL[status]}
      {compact ? <span className="sr-only">{STATUS_LABEL[status]}</span> : null}
    </span>
  );
}

export function AssuranceBadge({ assurance, className = "" }: { assurance: AssuranceStatus; className?: string }) {
  const assured = assurance === "reasonable" || assurance === "limited";
  const Icon = assured ? ShieldCheck : assurance === "not-supplied" ? ShieldQuestion : AlertCircle;
  const styles = assured
    ? "border-green/40 bg-green/12 text-green"
    : assurance === "internally-validated"
      ? "border-cyan/40 bg-cyan/12 text-cyan"
      : "border-border bg-surface-elevated text-muted-foreground";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.75rem] font-medium leading-none ${styles} ${className}`}
    >
      <Icon aria-hidden="true" className="size-3.5" />
      {ASSURANCE_LABEL[assurance]}
    </span>
  );
}

export function TierBadge({ tier }: { tier: "essential" | "leadership" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[0.75rem] font-medium leading-none ${
        tier === "essential" ? "border-primary/50 bg-primary/15 text-foreground" : "border-cyan/40 bg-cyan/12 text-cyan"
      }`}
    >
      {tier === "essential" ? "Essential Indicator" : "Leadership Indicator"}
    </span>
  );
}
