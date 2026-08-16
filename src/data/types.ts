export type DisclosureStatus =
  | "publicly-verified"
  | "pending-validation"
  | "not-reported"
  | "not-applicable"
  | "applicability-review";

export type AssuranceStatus =
  | "reasonable"
  | "limited"
  | "internally-validated"
  | "unassured"
  | "not-supplied";

export interface EvidenceItem {
  id: string;
  label: string;
  href?: string;
  owner?: string;
  validationDate?: string;
  status: DisclosureStatus;
}

export interface PeriodValue {
  period: string;
  value?: number | string;
  unit?: string;
  numerator?: number;
  denominator?: number;
  note?: string;
}

export interface DisclosureTable {
  caption?: string;
  columns: Array<{ key: string; label: string; numeric?: boolean }>;
  rows: Array<Record<string, string | number | null>>;
  footnotes?: string[];
}

export type ResponseType =
  | "narrative"
  | "key-value"
  | "table"
  | "period-comparison"
  | "metric-series"
  | "policy"
  | "corrective-action";

export interface Disclosure {
  id: string;
  section: "A" | "B" | "C";
  principle?: number;
  tier?: "essential" | "leadership";
  number: string;
  title: string;
  question: string;
  status: DisclosureStatus;
  applicabilityReason?: string;
  responseType: ResponseType;
  narrative?: string;
  emptyStateHint?: string;
  periods?: PeriodValue[];
  table?: DisclosureTable;
  tables?: DisclosureTable[];
  evidence: EvidenceItem[];
  methodology?: string;
  dataOwner?: string;
  lastUpdated?: string;
  assurance: AssuranceStatus;
}

export interface PrincipleMeta {
  number: number;
  slug: string;
  title: string;
  summary: string;
  shortSummary: string;
  essentialCount: number;
  leadershipCount: number;
  icon: string;
  accent: "primary" | "cyan" | "green" | "orange" | "tint";
  imageTopic: string;
  /** CMS-friendly replaceable image field */
  imageSrc?: string;
}

export interface PrincipleContent {
  meta: PrincipleMeta;
  intro: string;
  essential: Disclosure[];
  leadership: Disclosure[];
  methodologyNote?: string;
}

export interface DisclosureGroup {
  id: string;
  roman: string;
  title: string;
  intro?: string;
  disclosures: Disclosure[];
}
