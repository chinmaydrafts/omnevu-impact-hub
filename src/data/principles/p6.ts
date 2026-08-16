import { PENDING, REVIEW, pendingDisclosure, periodTable } from "../helpers";
import { getPrinciple } from "../report";
import type { PrincipleContent } from "../types";

const P = 6;
const meta = getPrinciple(P)!;

export const p6: PrincipleContent = {
  meta,
  intro:
    "Environmental disclosures cover energy, water, emissions, waste, compliance and value-chain impacts. No metered or supplier-verified environmental data has been supplied, so metric tables are shown as empty structures and charts remain in an awaiting-data state.",
  methodologyNote:
    "Boundary planning note (not a measurement claim). For a software entity the following categories would need to be scoped before any figure is reported: purchased electricity for offices; cloud and hosting service usage where the supplier publishes allocation data; employee business travel; commuting; purchased end-user devices; e-waste from retired hardware; and other supplier emissions. OmneVu has not measured any of these categories.",
  essential: [
    pendingDisclosure({
      id: "P6-E1",
      principle: P,
      number: "P6.E.1",
      title: "Energy consumption and energy intensity",
      question:
        "Details of total energy consumption (in Joules or multiples) and energy intensity, from renewable and non-renewable sources.",
      responseType: "metric-series",
      table: periodTable(
        [
          "Total electricity consumption (A)",
          "Total fuel consumption (B)",
          "Energy consumption through other sources (C)",
          "Total energy consumption (A+B+C)",
          "Energy intensity per rupee of turnover",
          "Energy intensity per full-time equivalent employee",
        ],
        "Parameter",
        undefined,
        undefined,
        "Energy consumption and intensity",
      ),
      emptyStateHint:
        "Required: metered or invoiced electricity and fuel data for all offices, plus a validated turnover or FTE denominator for intensity.",
    }),
    pendingDisclosure({
      id: "P6-E2",
      principle: P,
      number: "P6.E.2",
      title: "PAT scheme",
      question:
        "Whether the entity has any sites / facilities identified as designated consumers (DCs) under the Performance, Achieve and Trade (PAT) Scheme of the Government of India.",
      status: "applicability-review",
      applicabilityReason:
        "The PAT scheme applies to notified energy-intensive sectors. Applicability to a software services entity has not been assessed.",
    }),
    pendingDisclosure({
      id: "P6-E3",
      principle: P,
      number: "P6.E.3",
      title: "Water withdrawal, consumption and intensity",
      question:
        "Provide details of water withdrawal by source, total water withdrawal, total water consumption and water intensity.",
      responseType: "metric-series",
      table: periodTable(
        [
          "Surface water",
          "Groundwater",
          "Third party water",
          "Seawater / desalinated water",
          "Others",
          "Total volume of water withdrawal",
          "Total volume of water consumption",
          "Water intensity per rupee of turnover",
        ],
        "Parameter (kilolitres)",
        undefined,
        undefined,
        "Water withdrawal and consumption",
      ),
    }),
    pendingDisclosure({
      id: "P6-E4",
      principle: P,
      number: "P6.E.4",
      title: "Zero Liquid Discharge",
      question:
        "Has the entity implemented a mechanism for Zero Liquid Discharge? If yes, provide details of its coverage and implementation.",
      status: "applicability-review",
      applicabilityReason: "Applicability depends on process water use, which has not been assessed for office-based operations.",
    }),
    pendingDisclosure({
      id: "P6-E5",
      principle: P,
      number: "P6.E.5",
      title: "Air emissions other than greenhouse gases",
      question:
        "Please provide details of air emissions (other than GHG emissions) by the entity, including NOx, SOx, particulate matter, persistent organic pollutants, volatile organic compounds and hazardous air pollutants.",
      responseType: "metric-series",
      table: periodTable(
        ["NOx", "SOx", "Particulate matter (PM)", "Persistent organic pollutants (POP)", "Volatile organic compounds (VOC)", "Hazardous air pollutants (HAP)", "Others"],
        "Parameter",
      ),
    }),
    pendingDisclosure({
      id: "P6-E6",
      principle: P,
      number: "P6.E.6",
      title: "Greenhouse gas emissions (Scope 1 and Scope 2)",
      question:
        "Provide details of greenhouse gas emissions (Scope 1 and Scope 2 emissions) and their intensity.",
      responseType: "metric-series",
      table: periodTable(
        [
          "Total Scope 1 emissions (tCO2e)",
          "Total Scope 2 emissions (tCO2e)",
          "Total Scope 1 and Scope 2 emission intensity per rupee of turnover",
          "Total Scope 1 and Scope 2 emission intensity per full-time equivalent employee",
        ],
        "Parameter",
        undefined,
        undefined,
        "Scope 1 and Scope 2 emissions",
      ),
      emptyStateHint:
        "Required: activity data, emission factors and the consolidation approach before any emission value can be reported.",
    }),
    pendingDisclosure({
      id: "P6-E7",
      principle: P,
      number: "P6.E.7",
      title: "Projects to reduce greenhouse gas emissions",
      question:
        "Does the entity have any project related to reducing greenhouse gas emissions? If yes, then provide details.",
    }),
    pendingDisclosure({
      id: "P6-E8",
      principle: P,
      number: "P6.E.8",
      title: "Waste generation, recovery and disposal",
      question:
        "Provide details related to waste management by the entity, including total waste generated by category, waste recovered through recycling, re-using or other recovery operations, and waste disposed.",
      responseType: "metric-series",
      table: periodTable(
        [
          "Plastic waste (A)",
          "E-waste (B)",
          "Bio-medical waste (C)",
          "Construction and demolition waste (D)",
          "Battery waste (E)",
          "Radioactive waste (F)",
          "Other hazardous waste (G)",
          "Other non-hazardous waste (H)",
          "Total waste generated",
          "Waste recycled",
          "Waste re-used",
          "Waste disposed (landfilling)",
        ],
        "Parameter (metric tonnes)",
        undefined,
        undefined,
        "Waste generated, recovered and disposed",
      ),
    }),
    pendingDisclosure({
      id: "P6-E9",
      principle: P,
      number: "P6.E.9",
      title: "Waste management practices",
      question:
        "Briefly describe the waste management practices adopted in your establishments and the strategy adopted to reduce the usage of hazardous and toxic chemicals.",
    }),
    pendingDisclosure({
      id: "P6-E10",
      principle: P,
      number: "P6.E.10",
      title: "Operations in ecologically sensitive areas",
      question:
        "If the entity has operations / offices in / around ecologically sensitive areas where environmental approvals / clearances are required, provide details.",
      responseType: "table",
      table: {
        caption: "Operations in ecologically sensitive areas",
        columns: [
          { key: "location", label: "Location of operations / offices" },
          { key: "type", label: "Type of operations" },
          { key: "compliance", label: "Whether the conditions of environmental approval are being complied with" },
        ],
        rows: [],
      },
      emptyStateHint: "No validated register of ecologically sensitive locations has been supplied.",
    }),
    pendingDisclosure({
      id: "P6-E11",
      principle: P,
      number: "P6.E.11",
      title: "Environmental Impact Assessments",
      question:
        "Details of environmental impact assessments of projects undertaken by the entity in the current financial year.",
      responseType: "table",
      table: {
        caption: "Environmental Impact Assessments",
        columns: [
          { key: "name", label: "Name and brief details of project" },
          { key: "notification", label: "EIA notification number" },
          { key: "date", label: "Date" },
          { key: "external", label: "Whether conducted by independent external agency" },
          { key: "public", label: "Results communicated in public domain" },
          { key: "web", label: "Relevant web link" },
        ],
        rows: [],
      },
      emptyStateHint: "No environmental impact assessment records have been supplied.",
    }),
    pendingDisclosure({
      id: "P6-E12",
      principle: P,
      number: "P6.E.12",
      title: "Compliance with environmental law",
      question:
        "Is the entity compliant with the applicable environmental law / regulations / guidelines in India, such as the Water Act and Air Act? If not, provide details of all such non-compliances.",
      responseType: "table",
      table: {
        caption: "Environmental compliance",
        columns: [
          { key: "law", label: "Specify the law / regulation / guidelines which was not complied with" },
          { key: "noncompliance", label: "Provide details of the non-compliance" },
          { key: "action", label: "Any fines / penalties / action taken" },
          { key: "corrective", label: "Corrective action taken, if any" },
        ],
        rows: [],
        footnotes: ["A compliance confirmation cannot be published until the company validates its applicable obligations and status."],
      },
    }),
  ],
  leadership: [
    pendingDisclosure({
      id: "P6-L1",
      principle: P,
      tier: "leadership",
      number: "P6.L.1",
      title: "Break-up of energy consumption from renewable and non-renewable sources",
      question:
        "Provide break-up of the total energy consumed (in Joules or multiples) from renewable and non-renewable sources.",
      responseType: "metric-series",
      table: periodTable(
        [
          "From renewable sources — Electricity",
          "From renewable sources — Fuel",
          "From renewable sources — Other",
          "From non-renewable sources — Electricity",
          "From non-renewable sources — Fuel",
          "From non-renewable sources — Other",
        ],
        "Parameter",
      ),
    }),
    pendingDisclosure({
      id: "P6-L2",
      principle: P,
      tier: "leadership",
      number: "P6.L.2",
      title: "Water discharge by destination and level of treatment",
      question: "Provide details of water discharged by destination and level of treatment.",
      responseType: "metric-series",
      table: periodTable(
        ["To surface water", "To groundwater", "To seawater", "Sent to third parties", "Others", "Total water discharged"],
        "Parameter (kilolitres)",
      ),
    }),
    pendingDisclosure({
      id: "P6-L3",
      principle: P,
      tier: "leadership",
      number: "P6.L.3",
      title: "Water withdrawal, consumption and discharge in areas of water stress",
      question:
        "Water withdrawal, consumption and discharge in areas of water stress (in kilolitres), including the name of the area and nature of operations.",
      responseType: "metric-series",
      table: periodTable(["Total water withdrawal", "Total water consumption", "Total water discharged"], "Parameter"),
      status: "applicability-review",
      applicabilityReason: "Water-stress classification of the operating location has not been assessed.",
    }),
    pendingDisclosure({
      id: "P6-L4",
      principle: P,
      tier: "leadership",
      number: "P6.L.4",
      title: "Scope 3 emissions",
      question: "Please provide details of total Scope 3 emissions and their intensity.",
      responseType: "metric-series",
      table: periodTable(
        ["Total Scope 3 emissions (tCO2e)", "Total Scope 3 emission intensity per rupee of turnover"],
        "Parameter",
      ),
      emptyStateHint:
        "Required: category-level scoping decision, supplier data availability and emission factors before a Scope 3 figure can be produced.",
    }),
    pendingDisclosure({
      id: "P6-L5",
      principle: P,
      tier: "leadership",
      number: "P6.L.5",
      title: "Biodiversity impacts",
      question:
        "With respect to the ecologically sensitive areas reported at essential indicator 10 above, provide details of significant direct and indirect impact of the entity on biodiversity, and prevention and remediation activities.",
      status: "applicability-review",
      applicabilityReason: REVIEW,
    }),
    pendingDisclosure({
      id: "P6-L6",
      principle: P,
      tier: "leadership",
      number: "P6.L.6",
      title: "Resource efficiency initiatives",
      question:
        "If the entity has undertaken any specific initiatives or used innovative technology or solutions to improve resource efficiency, or reduce impact due to emissions, effluent discharge and waste generated, please provide details.",
      responseType: "table",
      table: {
        caption: "Resource efficiency initiatives",
        columns: [
          { key: "sno", label: "S. No." },
          { key: "initiative", label: "Initiative undertaken" },
          { key: "details", label: "Details of the initiative including web link" },
          { key: "outcome", label: "Outcome of the initiative" },
        ],
        rows: [],
      },
    }),
    pendingDisclosure({
      id: "P6-L7",
      principle: P,
      tier: "leadership",
      number: "P6.L.7",
      title: "Business continuity and disaster management plan",
      question: "Does the entity have a business continuity and disaster management plan? Give details in 100 words or a web link.",
      emptyStateHint:
        "Required: plan document, scope of covered services, testing cadence and accountable owner.",
    }),
    pendingDisclosure({
      id: "P6-L8",
      principle: P,
      tier: "leadership",
      number: "P6.L.8",
      title: "Value chain environmental impacts",
      question:
        "Disclose any significant adverse impact to the environment arising from the value chain of the entity and the mitigation or adaptation measures taken.",
    }),
    pendingDisclosure({
      id: "P6-L9",
      principle: P,
      tier: "leadership",
      number: "P6.L.9",
      title: "Value chain environmental assessments",
      question:
        "Percentage of value chain partners (by value of business done) that were assessed for environmental impacts.",
      responseType: "table",
      table: {
        caption: "Value chain environmental assessments",
        columns: [
          { key: "area", label: "Assessment area" },
          { key: "pct", label: "% of value chain partners covered", numeric: true },
        ],
        rows: [{ area: "Environmental impacts", pct: PENDING }],
      },
    }),
  ],
};
