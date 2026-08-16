import { PENDING, pendingDisclosure, periodTable } from "../helpers";
import { getPrinciple } from "../report";
import type { PrincipleContent } from "../types";

const P = 8;
const meta = getPrinciple(P)!;

export const p8: PrincipleContent = {
  meta,
  intro:
    "Inclusive growth disclosures cover social impact assessments, community grievance mechanisms, local and inclusive sourcing and CSR projects. Several indicators were drafted for land-based or manufacturing operations, so applicability for a software entity is under review.",
  essential: [
    pendingDisclosure({
      id: "P8-E1",
      principle: P,
      number: "P8.E.1",
      title: "Social Impact Assessments",
      question:
        "Details of Social Impact Assessments (SIA) of projects undertaken by the entity based on applicable laws, in the current financial year.",
      responseType: "table",
      table: {
        caption: "Social Impact Assessments",
        columns: [
          { key: "name", label: "Name and brief details of project" },
          { key: "notification", label: "SIA notification number" },
          { key: "date", label: "Date of notification" },
          { key: "external", label: "Whether conducted by independent external agency" },
          { key: "public", label: "Results communicated in public domain" },
          { key: "web", label: "Relevant web link" },
        ],
        rows: [],
      },
      emptyStateHint: "No social impact assessment records have been supplied.",
      status: "applicability-review",
      applicabilityReason: "Statutory SIA requirements generally apply to land acquisition or infrastructure projects.",
    }),
    pendingDisclosure({
      id: "P8-E2",
      principle: P,
      number: "P8.E.2",
      title: "Rehabilitation and resettlement",
      question:
        "Provide information on project(s) for which ongoing Rehabilitation and Resettlement (R&R) is being undertaken by the entity.",
      responseType: "table",
      table: {
        caption: "Rehabilitation and resettlement projects",
        columns: [
          { key: "sno", label: "S. No." },
          { key: "name", label: "Name of project for which R&R is ongoing" },
          { key: "state", label: "State" },
          { key: "district", label: "District" },
          { key: "pafs", label: "No. of Project Affected Families (PAFs)", numeric: true },
          { key: "covered", label: "% of PAFs covered by R&R", numeric: true },
          { key: "amount", label: "Amounts paid to PAFs in the FY (INR)", numeric: true },
        ],
        rows: [],
      },
      status: "applicability-review",
      applicabilityReason: "No land-based operations have been reported in public information.",
    }),
    pendingDisclosure({
      id: "P8-E3",
      principle: P,
      number: "P8.E.3",
      title: "Community grievance redressal mechanism",
      question:
        "Describe the mechanisms to receive and redress grievances of the community.",
      emptyStateHint:
        "Required: intake channel, response commitment, escalation path and accountable owner.",
    }),
    pendingDisclosure({
      id: "P8-E4",
      principle: P,
      number: "P8.E.4",
      title: "Input material sourced from suppliers",
      question:
        "Percentage of input material (inputs to total inputs by value) sourced from suppliers, split between directly sourced from MSMEs / small producers and sourced directly from within India.",
      responseType: "period-comparison",
      table: periodTable(
        [
          "Directly sourced from MSMEs / small producers",
          "Directly from within India",
        ],
        "Sourcing category (%)",
      ),
    }),
  ],
  leadership: [
    pendingDisclosure({
      id: "P8-L1",
      principle: P,
      tier: "leadership",
      number: "P8.L.1",
      title: "Actions to mitigate negative social impacts",
      question:
        "Provide details of actions taken to mitigate any negative social impacts identified in the Social Impact Assessments carried out by the entity.",
      responseType: "corrective-action",
    }),
    pendingDisclosure({
      id: "P8-L2",
      principle: P,
      tier: "leadership",
      number: "P8.L.2",
      title: "CSR projects in aspirational districts",
      question:
        "Provide the following information on CSR projects undertaken by your entity in designated aspirational districts as identified by government bodies.",
      responseType: "table",
      table: {
        caption: "CSR projects in aspirational districts",
        columns: [
          { key: "sno", label: "S. No." },
          { key: "state", label: "State" },
          { key: "district", label: "Aspirational district" },
          { key: "amount", label: "Amount spent (INR)", numeric: true },
        ],
        rows: [],
      },
      status: "applicability-review",
      applicabilityReason: "CSR applicability for the entity is itself under review (see Section A, Group VI).",
    }),
    pendingDisclosure({
      id: "P8-L3",
      principle: P,
      tier: "leadership",
      number: "P8.L.3",
      title: "Preferential procurement",
      question:
        "Do you have a preferential procurement policy where you give preference to purchase from suppliers comprising marginalised / vulnerable groups? If yes, provide details of the groups and the percentage of total procurement by value.",
      responseType: "table",
      table: {
        caption: "Preferential procurement",
        columns: [
          { key: "param", label: "Parameter" },
          { key: "value", label: "Response" },
        ],
        rows: [
          { param: "Preferential procurement policy in place", value: PENDING },
          { param: "Marginalised / vulnerable groups from which procurement is done", value: PENDING },
          { param: "% of total procurement (by value) from such groups", value: PENDING },
        ],
      },
    }),
    pendingDisclosure({
      id: "P8-L4",
      principle: P,
      tier: "leadership",
      number: "P8.L.4",
      title: "Intellectual properties based on traditional knowledge",
      question:
        "Details of the benefits derived and shared from intellectual properties owned or acquired by your entity based on traditional knowledge.",
      responseType: "table",
      table: {
        caption: "Traditional-knowledge intellectual property",
        columns: [
          { key: "sno", label: "S. No." },
          { key: "ip", label: "Intellectual property based on traditional knowledge" },
          { key: "owned", label: "Owned / acquired" },
          { key: "benefit", label: "Benefit shared" },
          { key: "basis", label: "Basis of calculating benefit share" },
        ],
        rows: [],
      },
      status: "applicability-review",
    }),
    pendingDisclosure({
      id: "P8-L5",
      principle: P,
      tier: "leadership",
      number: "P8.L.5",
      title: "Corrective actions relating to intellectual property disputes",
      question:
        "Details of corrective actions taken or underway, based on any adverse order in intellectual property related disputes wherein usage of traditional knowledge is involved.",
      responseType: "corrective-action",
    }),
    pendingDisclosure({
      id: "P8-L6",
      principle: P,
      tier: "leadership",
      number: "P8.L.6",
      title: "Beneficiaries of CSR projects",
      question: "Details of beneficiaries of CSR projects.",
      responseType: "table",
      table: {
        caption: "CSR beneficiaries",
        columns: [
          { key: "sno", label: "S. No." },
          { key: "project", label: "CSR project" },
          { key: "beneficiaries", label: "No. of persons benefitted from CSR projects", numeric: true },
          { key: "vulnerable", label: "% of beneficiaries from vulnerable and marginalised groups", numeric: true },
        ],
        rows: [],
      },
    }),
  ],
};
