import { PENDING, pendingDisclosure, periodTable } from "../helpers";
import { getPrinciple } from "../report";
import type { PrincipleContent } from "../types";

const P = 5;
const meta = getPrinciple(P)!;

export const p5: PrincipleContent = {
  meta,
  intro:
    "Human rights disclosures cover training, remuneration, grievance mechanisms, complaints and due diligence. Complaint and remuneration structures are designed so that no personal or identifying information about individuals is exposed.",
  methodologyNote:
    "Human rights complaint records must be reported in aggregate only. Case narratives, complainant identity, team, location or role must never be published in this interface.",
  essential: [
    pendingDisclosure({
      id: "P5-E1",
      principle: P,
      number: "P5.E.1",
      title: "Training on human rights issues and policy",
      question:
        "Employees and workers who have been provided training on human rights issues and policy(ies) of the entity, including the percentage of persons in respective category covered by the awareness programmes.",
      responseType: "table",
      table: {
        caption: "Human rights training coverage",
        columns: [
          { key: "cat", label: "Category" },
          { key: "total", label: "Total (A)", numeric: true },
          { key: "covered", label: "No. of employees / workers covered (B)", numeric: true },
          { key: "pct", label: "% (B/A)", numeric: true },
        ],
        rows: [
          "Permanent employees",
          "Other than permanent employees",
          "Permanent workers",
          "Other than permanent workers",
        ].map((cat) => ({ cat, total: PENDING, covered: PENDING, pct: PENDING })),
      },
    }),
    pendingDisclosure({
      id: "P5-E2",
      principle: P,
      number: "P5.E.2",
      title: "Minimum wages",
      question: "Details of minimum wages paid to employees and workers, by category and gender.",
      responseType: "table",
      table: {
        caption: "Minimum wage coverage",
        columns: [
          { key: "cat", label: "Category" },
          { key: "total", label: "Total (A)", numeric: true },
          { key: "equal", label: "Equal to minimum wage — No.", numeric: true },
          { key: "more", label: "More than minimum wage — No.", numeric: true },
        ],
        rows: [
          "Permanent employees — Male",
          "Permanent employees — Female",
          "Other than permanent employees",
          "Permanent workers",
          "Other than permanent workers",
        ].map((cat) => ({ cat, total: PENDING, equal: PENDING, more: PENDING })),
      },
    }),
    pendingDisclosure({
      id: "P5-E3",
      principle: P,
      number: "P5.E.3",
      title: "Remuneration and wages",
      question:
        "Details of remuneration / salary / wages: median remuneration of Board of Directors, Key Managerial Personnel, employees other than BoD and KMP, and workers, by gender.",
      responseType: "table",
      table: {
        caption: "Median remuneration / wages",
        columns: [
          { key: "cat", label: "Category" },
          { key: "maleN", label: "Male — Number", numeric: true },
          { key: "maleMed", label: "Male — Median remuneration", numeric: true },
          { key: "femaleN", label: "Female — Number", numeric: true },
          { key: "femaleMed", label: "Female — Median remuneration", numeric: true },
        ],
        rows: [
          "Board of Directors / Designated Partners",
          "Key Managerial Personnel",
          "Employees other than BoD and KMP",
          "Workers",
        ].map((cat) => ({ cat, maleN: PENDING, maleMed: PENDING, femaleN: PENDING, femaleMed: PENDING })),
        footnotes: [
          "Where a category contains very few individuals, the company should confirm that publication would not identify a person before reporting.",
        ],
      },
    }),
    pendingDisclosure({
      id: "P5-E4",
      principle: P,
      number: "P5.E.4",
      title: "Focal point for human rights impacts",
      question:
        "Is there a focal point (individual / committee) responsible for addressing human rights impacts or issues caused or contributed to by the business?",
    }),
    pendingDisclosure({
      id: "P5-E5",
      principle: P,
      number: "P5.E.5",
      title: "Internal mechanisms for grievance redressal",
      question: "Describe the internal mechanisms in place to redress grievances related to human rights issues.",
    }),
    pendingDisclosure({
      id: "P5-E6",
      principle: P,
      number: "P5.E.6",
      title: "Complaints on human rights issues",
      question:
        "Number of complaints on sexual harassment, discrimination at workplace, child labour, forced labour / involuntary labour, wages, and other human rights related issues.",
      responseType: "period-comparison",
      table: periodTable(
        [
          "Sexual harassment",
          "Discrimination at workplace",
          "Child labour",
          "Forced labour / involuntary labour",
          "Wages",
          "Other human rights related issues",
        ],
        "Complaint category",
        undefined,
        undefined,
        "Human rights complaints (aggregate only)",
      ),
      emptyStateHint:
        "Required: aggregate complaint counts, cases pending at close and remarks. Individual case details must not be published.",
    }),
    pendingDisclosure({
      id: "P5-E7",
      principle: P,
      number: "P5.E.7",
      title: "Mechanisms to prevent adverse consequences to complainants",
      question:
        "Mechanisms to prevent adverse consequences to the complainant in discrimination and harassment cases.",
    }),
    pendingDisclosure({
      id: "P5-E8",
      principle: P,
      number: "P5.E.8",
      title: "Human rights requirements in business agreements",
      question: "Do human rights requirements form part of your business agreements and contracts?",
    }),
    pendingDisclosure({
      id: "P5-E9",
      principle: P,
      number: "P5.E.9",
      title: "Assessments for the year",
      question:
        "Percentage of plants and offices assessed for child labour, forced labour, sexual harassment, discrimination at workplace, wages and other human rights related issues.",
      responseType: "table",
      table: {
        caption: "Human rights assessments of plants and offices",
        columns: [
          { key: "area", label: "Assessment area" },
          { key: "pct", label: "% of plants and offices covered", numeric: true },
        ],
        rows: [
          "Child labour",
          "Forced / involuntary labour",
          "Sexual harassment",
          "Discrimination at workplace",
          "Wages",
          "Others",
        ].map((area) => ({ area, pct: PENDING })),
      },
    }),
    pendingDisclosure({
      id: "P5-E10",
      principle: P,
      number: "P5.E.10",
      title: "Corrective action on human rights risks",
      question:
        "Provide details of any corrective actions taken or underway to address significant risks / concerns arising from the assessments above.",
      responseType: "corrective-action",
    }),
  ],
  leadership: [
    pendingDisclosure({
      id: "P5-L1",
      principle: P,
      tier: "leadership",
      number: "P5.L.1",
      title: "Process modifications following grievances",
      question:
        "Details of a business process being modified / introduced as a result of addressing human rights grievances / complaints.",
    }),
    pendingDisclosure({
      id: "P5-L2",
      principle: P,
      tier: "leadership",
      number: "P5.L.2",
      title: "Human rights due diligence",
      question: "Details of scope and coverage of any human rights due diligence conducted.",
    }),
    pendingDisclosure({
      id: "P5-L3",
      principle: P,
      tier: "leadership",
      number: "P5.L.3",
      title: "Accessibility for differently abled visitors",
      question:
        "Is the premise / office of the entity accessible to differently abled visitors, as per the requirements of the Rights of Persons with Disabilities Act, 2016?",
    }),
    pendingDisclosure({
      id: "P5-L4",
      principle: P,
      tier: "leadership",
      number: "P5.L.4",
      title: "Assessment of value chain partners",
      question:
        "Details on assessment of value chain partners on human rights related issues, as a percentage of value chain partners by value of business done.",
      responseType: "table",
      table: {
        caption: "Value chain human rights assessments",
        columns: [
          { key: "area", label: "Assessment area" },
          { key: "pct", label: "% of value chain partners covered", numeric: true },
        ],
        rows: ["Sexual harassment", "Discrimination at workplace", "Child labour", "Forced labour", "Wages", "Others"].map(
          (area) => ({ area, pct: PENDING }),
        ),
      },
    }),
    pendingDisclosure({
      id: "P5-L5",
      principle: P,
      tier: "leadership",
      number: "P5.L.5",
      title: "Corrective action on value chain human rights risks",
      question:
        "Provide details of any corrective actions taken or underway to address significant risks / concerns arising from the assessments of value chain partners.",
      responseType: "corrective-action",
    }),
  ],
};
