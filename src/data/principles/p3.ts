import { PENDING, pendingDisclosure, periodTable } from "../helpers";
import { getPrinciple } from "../report";
import type { PrincipleContent } from "../types";

const P = 3;
const meta = getPrinciple(P)!;

const genderMatrix = (caption: string, rows: string[]) => ({
  caption,
  columns: [
    { key: "cat", label: "Category" },
    { key: "total", label: "Total (A)", numeric: true },
    { key: "male", label: "Male — No.", numeric: true },
    { key: "malep", label: "Male — %", numeric: true },
    { key: "female", label: "Female — No.", numeric: true },
    { key: "femalep", label: "Female — %", numeric: true },
  ],
  rows: rows.map((cat) => ({
    cat,
    total: PENDING,
    male: PENDING,
    malep: PENDING,
    female: PENDING,
    femalep: PENDING,
  })),
});

export const p3: PrincipleContent = {
  meta,
  intro:
    "Workforce wellbeing indicators require validated employee and worker records. No headcount, benefit coverage, grievance or safety data has been supplied, so every table below is presented as an empty structure rather than with placeholder numbers.",
  essential: [
    pendingDisclosure({
      id: "P3-E1",
      principle: P,
      number: "P3.E.1",
      title: "Wellbeing measures for employees and workers",
      question:
        "Details of measures for the wellbeing of employees and workers, covering health insurance, accident insurance, maternity benefits, paternity benefits and day care facilities.",
      responseType: "table",
      table: {
        caption: "Wellbeing benefit coverage (% of category covered)",
        columns: [
          { key: "cat", label: "Category" },
          { key: "health", label: "Health insurance", numeric: true },
          { key: "accident", label: "Accident insurance", numeric: true },
          { key: "maternity", label: "Maternity benefits", numeric: true },
          { key: "paternity", label: "Paternity benefits", numeric: true },
          { key: "daycare", label: "Day care facilities", numeric: true },
        ],
        rows: ["Permanent employees", "Other than permanent employees", "Permanent workers", "Other than permanent workers"].map(
          (cat) => ({ cat, health: PENDING, accident: PENDING, maternity: PENDING, paternity: PENDING, daycare: PENDING }),
        ),
      },
      emptyStateHint:
        "Required: benefit policy documents and covered headcount by employment category and gender.",
    }),
    pendingDisclosure({
      id: "P3-E2",
      principle: P,
      number: "P3.E.2",
      title: "Retirement benefits",
      question:
        "Details of retirement benefits including Provident Fund, Gratuity, ESI and others, for the current and previous financial year.",
      responseType: "table",
      table: {
        caption: "Retirement benefits",
        columns: [
          { key: "benefit", label: "Benefit" },
          { key: "empCur", label: "Employees covered (%) — current", numeric: true },
          { key: "wrkCur", label: "Workers covered (%) — current", numeric: true },
          { key: "depCur", label: "Deducted and deposited with the authority — current" },
          { key: "empPrev", label: "Employees covered (%) — previous", numeric: true },
        ],
        rows: ["Provident Fund", "Gratuity", "ESI", "Others"].map((benefit) => ({
          benefit,
          empCur: PENDING,
          wrkCur: PENDING,
          depCur: PENDING,
          empPrev: PENDING,
        })),
      },
    }),
    pendingDisclosure({
      id: "P3-E3",
      principle: P,
      number: "P3.E.3",
      title: "Accessibility of workplaces",
      question:
        "Are the premises / offices of the entity accessible to differently abled employees and workers, as per the requirements of the Rights of Persons with Disabilities Act, 2016?",
      emptyStateHint:
        "Required: accessibility audit of the workplace and any remediation plan with dates.",
    }),
    pendingDisclosure({
      id: "P3-E4",
      principle: P,
      number: "P3.E.4",
      title: "Equal opportunity policy",
      question:
        "Does the entity have an equal opportunity policy as per the Rights of Persons with Disabilities Act, 2016? If so, provide a web link to the policy.",
      responseType: "policy",
    }),
    pendingDisclosure({
      id: "P3-E5",
      principle: P,
      number: "P3.E.5",
      title: "Return to work and retention rates after parental leave",
      question: "Return to work and retention rates of permanent employees and workers that took parental leave.",
      responseType: "table",
      table: {
        caption: "Parental leave return and retention",
        columns: [
          { key: "cat", label: "Category" },
          { key: "returnM", label: "Return to work rate — Male", numeric: true },
          { key: "returnF", label: "Return to work rate — Female", numeric: true },
          { key: "retM", label: "Retention rate — Male", numeric: true },
          { key: "retF", label: "Retention rate — Female", numeric: true },
        ],
        rows: ["Permanent employees", "Permanent workers"].map((cat) => ({
          cat,
          returnM: PENDING,
          returnF: PENDING,
          retM: PENDING,
          retF: PENDING,
        })),
      },
    }),
    pendingDisclosure({
      id: "P3-E6",
      principle: P,
      number: "P3.E.6",
      title: "Grievance redressal mechanisms",
      question:
        "Is there a mechanism available to receive and redress grievances for permanent and other than permanent employees and workers? If yes, give details of the mechanism in brief.",
    }),
    pendingDisclosure({
      id: "P3-E7",
      principle: P,
      number: "P3.E.7",
      title: "Membership of association or union",
      question:
        "Membership of employees and workers in association(s) or unions recognised by the entity.",
      responseType: "table",
      table: genderMatrix("Membership of associations or unions", [
        "Total permanent employees",
        "Total permanent workers",
      ]),
    }),
    pendingDisclosure({
      id: "P3-E8",
      principle: P,
      number: "P3.E.8",
      title: "Training on health, safety and skill upgradation",
      question:
        "Details of training given to employees and workers on health and safety measures and on skill upgradation.",
      responseType: "table",
      table: genderMatrix("Training coverage", [
        "Employees — health and safety measures",
        "Employees — skill upgradation",
        "Workers — health and safety measures",
        "Workers — skill upgradation",
      ]),
    }),
    pendingDisclosure({
      id: "P3-E9",
      principle: P,
      number: "P3.E.9",
      title: "Performance and career development reviews",
      question: "Details of performance and career development reviews of employees and workers.",
      responseType: "table",
      table: genderMatrix("Performance and career development reviews", ["Employees", "Workers"]),
    }),
    pendingDisclosure({
      id: "P3-E10",
      principle: P,
      number: "P3.E.10",
      title: "Occupational health and safety management system",
      question:
        "Whether an occupational health and safety management system has been implemented by the entity, along with its coverage, processes to identify hazards, worker reporting of hazards and access to non-occupational medical and healthcare services.",
    }),
    pendingDisclosure({
      id: "P3-E11",
      principle: P,
      number: "P3.E.11",
      title: "Safety related incidents",
      question:
        "Details of safety related incidents including Lost Time Injury Frequency Rate, total recordable work-related injuries, number of fatalities and high consequence work-related injuries.",
      responseType: "period-comparison",
      table: periodTable(
        [
          "Lost Time Injury Frequency Rate (per one million person hours worked)",
          "Total recordable work-related injuries",
          "Number of fatalities",
          "High consequence work-related injury or ill-health (excluding fatalities)",
        ],
        "Safety incident / number",
        undefined,
        undefined,
        "Safety incidents",
      ),
      emptyStateHint:
        "Required: incident register and person-hours worked. Counts are not shown as zero because no validated record exists.",
    }),
    pendingDisclosure({
      id: "P3-E12",
      principle: P,
      number: "P3.E.12",
      title: "Measures for a safe and healthy workplace",
      question: "Describe the measures taken by the entity to ensure a safe and healthy workplace.",
    }),
    pendingDisclosure({
      id: "P3-E13",
      principle: P,
      number: "P3.E.13",
      title: "Complaints on working conditions and health and safety",
      question: "Number of complaints on working conditions and health and safety made by employees and workers.",
      responseType: "period-comparison",
      table: periodTable(["Working conditions", "Health and safety"], "Complaint category"),
    }),
    pendingDisclosure({
      id: "P3-E14",
      principle: P,
      number: "P3.E.14",
      title: "Assessments for the year",
      question:
        "Percentage of plants and offices that were assessed by the entity or by a statutory authority or third party on health and safety practices and working conditions.",
      responseType: "table",
      table: {
        caption: "Assessments of plants and offices",
        columns: [
          { key: "area", label: "Assessment area" },
          { key: "pct", label: "% of plants and offices covered", numeric: true },
        ],
        rows: ["Health and safety practices", "Working conditions"].map((area) => ({ area, pct: PENDING })),
      },
    }),
    pendingDisclosure({
      id: "P3-E15",
      principle: P,
      number: "P3.E.15",
      title: "Corrective action on safety and working conditions",
      question:
        "Provide details of any corrective action taken or underway to address safety-related incidents and on significant risks / concerns arising from assessments of health and safety practices and working conditions.",
      responseType: "corrective-action",
    }),
  ],
  leadership: [
    pendingDisclosure({
      id: "P3-L1",
      principle: P,
      tier: "leadership",
      number: "P3.L.1",
      title: "Life insurance and compensatory package",
      question:
        "Does the entity extend any life insurance or any compensatory package in the event of death of employees and workers?",
    }),
    pendingDisclosure({
      id: "P3-L2",
      principle: P,
      tier: "leadership",
      number: "P3.L.2",
      title: "Statutory dues of value chain partners",
      question:
        "Provide the measures undertaken by the entity to ensure that statutory dues have been deducted and deposited by the value chain partners.",
    }),
    pendingDisclosure({
      id: "P3-L3",
      principle: P,
      tier: "leadership",
      number: "P3.L.3",
      title: "Rehabilitation and re-employment",
      question:
        "Number of employees and workers having suffered high consequence work-related injury or ill-health or fatalities, that have been rehabilitated and placed in suitable employment or whose family members have been placed in suitable employment.",
      responseType: "period-comparison",
      table: periodTable(["Employees", "Workers"], "Category"),
    }),
    pendingDisclosure({
      id: "P3-L4",
      principle: P,
      tier: "leadership",
      number: "P3.L.4",
      title: "Transition assistance programmes",
      question:
        "Does the entity provide transition assistance programmes to facilitate continued employability and the management of career endings resulting from retirement or termination of employment?",
    }),
    pendingDisclosure({
      id: "P3-L5",
      principle: P,
      tier: "leadership",
      number: "P3.L.5",
      title: "Value chain health and safety assessments",
      question:
        "Details on assessment of value chain partners on health and safety practices and working conditions.",
      responseType: "table",
      table: {
        caption: "Value chain assessments",
        columns: [
          { key: "area", label: "Assessment area" },
          { key: "pct", label: "% of value chain partners covered (by value of business done)", numeric: true },
        ],
        rows: ["Health and safety practices", "Working conditions"].map((area) => ({ area, pct: PENDING })),
      },
    }),
    pendingDisclosure({
      id: "P3-L6",
      principle: P,
      tier: "leadership",
      number: "P3.L.6",
      title: "Corrective action following value chain assessments",
      question:
        "Provide details of any corrective actions taken or underway to address significant risks / concerns arising from assessments of health and safety practices and working conditions of value chain partners.",
      responseType: "corrective-action",
    }),
  ],
};
