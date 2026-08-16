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
  href?: string | undefined;
  owner?: string | undefined;
  validationDate?: string | undefined;
  status: DisclosureStatus;
}

export interface PeriodValue {
  period: string;
  value?: number | string | undefined;
  unit?: string | undefined;
  numerator?: number | undefined;
  denominator?: number | undefined;
  note?: string | undefined;
}

export interface DisclosureTable {
  caption?: string | undefined;
  columns: Array<{ key: string; label: string; numeric?: boolean }> | undefined;
  rows: Array<Record<string, string | number | null>>;
  footnotes?: string[] | undefined;
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
  principle?: number | undefined;
  tier?: "essential" | "leadership" | undefined;
  number: string;
  title: string;
  question: string;
  status: DisclosureStatus;
  applicabilityReason?: string | undefined;
  responseType: ResponseType;
  narrative?: string | undefined;
  emptyStateHint?: string | undefined;
  periods?: PeriodValue[] | undefined;
  table?: DisclosureTable | undefined;
  tables?: DisclosureTable[] | undefined;
  evidence: EvidenceItem[];
  methodology?: string | undefined;
  dataOwner?: string | undefined;
  lastUpdated?: string | undefined;
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
  imageSrc?: string | undefined;
}

export interface PrincipleContent {
  meta: PrincipleMeta;
  intro: string;
  essential: Disclosure[];
  leadership: Disclosure[];
  methodologyNote?: string | undefined;
}

export interface DisclosureGroup {
  id: string;
  roman: string;
  title: string;
  intro?: string | undefined;
  disclosures: Disclosure[];
}
