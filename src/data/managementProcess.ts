import { placeholderEvidence } from "./helpers";
import type { Disclosure } from "./types";

export type MatrixState = "pending-mapping" | "not-supplied" | "applicability-review";

export interface MatrixQuestion {
  id: string;
  number: string;
  question: string;
  shortLabel: string;
  cells: Record<number, MatrixState>;
  note?: string;
}

const all = (state: MatrixState): Record<number, MatrixState> =>
  Object.fromEntries(Array.from({ length: 9 }, (_, i) => [i + 1, state])) as Record<number, MatrixState>;

export const MATRIX_STATE_LABEL: Record<MatrixState, string> = {
  "pending-mapping": "Pending mapping",
  "not-supplied": "Not supplied",
  "applicability-review": "Applicability under review",
};

export const matrixQuestions: MatrixQuestion[] = [
  {
    id: "B-1a",
    number: "B.1.a",
    shortLabel: "Policy coverage",
    question: "Whether the entity's policy/policies cover each Principle and its core elements of the NGRBCs.",
    cells: all("pending-mapping"),
  },
  {
    id: "B-1b",
    number: "B.1.b",
    shortLabel: "Governance approval",
    question: "Has the policy been approved by the Board / designated partners?",
    cells: all("not-supplied"),
  },
  {
    id: "B-1c",
    number: "B.1.c",
    shortLabel: "Public policy link",
    question: "Web link of the policies, if available.",
    cells: all("not-supplied"),
    note: "The public OmneVu privacy page exists as a public document; its BRSR mapping is pending review.",
  },
  {
    id: "B-2",
    number: "B.2",
    shortLabel: "Translation into procedures",
    question: "Whether the entity has translated the policy into procedures.",
    cells: all("pending-mapping"),
  },
  {
    id: "B-3",
    number: "B.3",
    shortLabel: "Value-chain extension",
    question: "Do the enlisted policies extend to your value chain partners?",
    cells: all("not-supplied"),
  },
  {
    id: "B-4",
    number: "B.4",
    shortLabel: "Codes, standards, certifications",
    question:
      "Name of the national and international codes, certifications, labels, standards adopted and mapped to each Principle.",
    cells: all("applicability-review"),
  },
  {
    id: "B-5",
    number: "B.5",
    shortLabel: "Commitments, goals and targets",
    question: "Specific commitments, goals and targets set by the entity with defined timelines, if any.",
    cells: all("not-supplied"),
  },
  {
    id: "B-6",
    number: "B.6",
    shortLabel: "Performance against goals",
    question:
      "Performance of the entity against the specific commitments, goals and targets, along with reasons in case the same are not met.",
    cells: all("not-supplied"),
  },
];

export const governanceDisclosures: Disclosure[] = [
  {
    id: "B-7",
    number: "B.7",
    title: "Statement by the director responsible for the report",
    question:
      "Statement by the director responsible for the report, highlighting ESG-related challenges, targets and achievements.",
  },
  {
    id: "B-8",
    number: "B.8",
    title: "Highest authority responsible for implementation",
    question:
      "Details of the highest authority responsible for implementation and oversight of the Business Responsibility policy(ies).",
  },
  {
    id: "B-9",
    number: "B.9",
    title: "Sustainability decision authority",
    question:
      "Does the entity have a specified Committee of the Board/Director responsible for decision making on sustainability related issues?",
  },
  {
    id: "B-10",
    number: "B.10",
    title: "Review of NGRBC principles and compliance",
    question:
      "Details of review of NGRBCs by the entity, including performance against above policies and compliance with statutory requirements.",
  },
  {
    id: "B-11",
    number: "B.11",
    title: "Independent external assessment of policies",
    question:
      "Has the entity carried out independent assessment/evaluation of the working of its policies by an external agency?",
  },
  {
    id: "B-12",
    number: "B.12",
    title: "Reasons for principles not covered",
    question:
      "If answer to question (1) above is 'No' i.e. not all Principles are covered by a policy, reasons to be stated.",
  },
].map((d) => ({
  ...d,
  section: "B" as const,
  status: "pending-validation" as const,
  responseType: "narrative" as const,
  narrative: undefined,
  emptyStateHint:
    "A validated governance response has not been supplied. This field is ready for a named authority, review frequency and approval record.",
  evidence: [placeholderEvidence(`${d.id}-EV1`)],
  dataOwner: "Pending nomination",
  lastUpdated: "Not yet validated",
  assurance: "not-supplied" as const,
}));
