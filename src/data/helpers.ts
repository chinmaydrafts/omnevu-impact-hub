import type { Disclosure, DisclosureStatus, EvidenceItem, ResponseType } from "./types";

export const placeholderEvidence = (id: string, label = "Placeholder evidence record"): EvidenceItem => ({
  id,
  label,
  owner: "Pending nomination",
  validationDate: "Pending validation",
  status: "pending-validation",
});

interface MakeArgs {
  id: string;
  number: string;
  title: string;
  question: string;
  principle?: number;
  tier?: "essential" | "leadership";
  responseType?: ResponseType;
  status?: DisclosureStatus;
  narrative?: string;
  emptyStateHint?: string;
  applicabilityReason?: string;
  methodology?: string;
  table?: Disclosure["table"];
  tables?: Disclosure["tables"];
  periods?: Disclosure["periods"];
}

/** Factory for a disclosure whose company data has not yet been supplied. */
export const pendingDisclosure = (args: MakeArgs): Disclosure => ({
  id: args.id,
  section: "C",
  principle: args.principle,
  tier: args.tier ?? "essential",
  number: args.number,
  title: args.title,
  question: args.question,
  status: args.status ?? "pending-validation",
  applicabilityReason: args.applicabilityReason,
  responseType: args.responseType ?? "narrative",
  narrative: args.narrative,
  emptyStateHint: args.emptyStateHint,
  table: args.table,
  tables: args.tables,
  periods: args.periods,
  evidence: [placeholderEvidence(`${args.id}-EV1`)],
  methodology: args.methodology,
  dataOwner: "Pending nomination",
  lastUpdated: "Not yet validated",
  assurance: "not-supplied",
});

export const PENDING = "Pending validation";
export const NOT_REPORTED = "Not yet reported";
export const REVIEW = "Applicability under review";

/** Two-period comparison table skeleton with status text instead of fake zeroes. */
export const periodTable = (
  rowLabels: string[],
  labelHeader = "Parameter",
  current = "Current period",
  previous = "Previous period",
  caption?: string,
) => ({
  caption,
  columns: [
    { key: "param", label: labelHeader },
    { key: "current", label: current, numeric: true },
    { key: "previous", label: previous, numeric: true },
  ],
  rows: rowLabels.map((param) => ({ param, current: PENDING, previous: PENDING })),
});
