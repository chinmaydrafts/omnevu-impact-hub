import { PENDING, pendingDisclosure, periodTable } from "../helpers";
import { getPrinciple } from "../report";
import type { PrincipleContent } from "../types";

const P = 2;
const meta = getPrinciple(P)!;

export const p2: PrincipleContent = {
  meta,
  intro:
    "Product sustainability indicators were drafted for manufactured goods. For a software business the applicability considerations relate to the software lifecycle, cloud infrastructure, devices and e-waste. These considerations are shown as scoping notes and are not company claims.",
  methodologyNote:
    "Applicability considerations for a SaaS entity: software release lifecycle and deprecation, cloud hosting suppliers and their disclosures, developer and customer device procurement, e-waste handling for retired hardware, and responsible digital design (accessibility, performance, data minimisation). Each of these must be confirmed by the company before it is reported.",
  essential: [
    pendingDisclosure({
      id: "P2-E1",
      principle: P,
      number: "P2.E.1",
      title: "R&D and capital expenditure investments",
      question:
        "Percentage of R&D and capital expenditure (capex) investments in specific technologies to improve the environmental and social impacts of products and processes, along with details of improvements.",
      responseType: "period-comparison",
      table: periodTable(["R&D", "Capex"], "Investment category", undefined, undefined, "Share of investment (%)"),
      emptyStateHint:
        "Required: validated R&D and capex totals plus the subset attributable to environmental or social improvement, with the definition used.",
    }),
    pendingDisclosure({
      id: "P2-E2",
      principle: P,
      number: "P2.E.2",
      title: "Sustainable sourcing",
      question:
        "Does the entity have procedures in place for sustainable sourcing? If yes, what percentage of inputs were sourced sustainably?",
      status: "applicability-review",
      applicabilityReason:
        "Input sourcing for a software entity is primarily cloud services, software licences and devices. The boundary has not been defined or validated.",
    }),
    pendingDisclosure({
      id: "P2-E3",
      principle: P,
      number: "P2.E.3",
      title: "Reclaim processes for end-of-life products",
      question:
        "Describe the processes in place to safely reclaim your products for reusing, recycling and disposing at the end of life, for plastics, e-waste, hazardous waste and other waste.",
      status: "applicability-review",
      applicabilityReason:
        "OmneVu products are delivered as software. Any reclaim obligation would relate to hardware used by the company; no validated process has been supplied.",
    }),
    pendingDisclosure({
      id: "P2-E4",
      principle: P,
      number: "P2.E.4",
      title: "Extended Producer Responsibility (EPR)",
      question:
        "Whether Extended Producer Responsibility (EPR) is applicable to the entity's activities. If yes, whether the waste collection plan is in line with the EPR plan submitted to Pollution Control Boards.",
      status: "applicability-review",
      applicabilityReason: "EPR applicability for a software services entity has not been assessed or confirmed.",
    }),
  ],
  leadership: [
    pendingDisclosure({
      id: "P2-L1",
      principle: P,
      tier: "leadership",
      number: "P2.L.1",
      title: "Life Cycle Assessments",
      question:
        "Has the entity conducted Life Cycle Perspective / Assessments (LCA) for any of its products or for its services? If yes, provide details.",
      responseType: "table",
      table: {
        caption: "Life Cycle Assessments",
        columns: [
          { key: "nic", label: "NIC code" },
          { key: "name", label: "Name of product / service" },
          { key: "turnover", label: "% of total turnover contributed", numeric: true },
          { key: "boundary", label: "Boundary for which the LCA was conducted" },
          { key: "external", label: "Whether conducted by an independent external agency" },
          { key: "public", label: "Results communicated in the public domain" },
        ],
        rows: [],
      },
      emptyStateHint: "No validated life cycle assessment has been supplied.",
    }),
    pendingDisclosure({
      id: "P2-L2",
      principle: P,
      tier: "leadership",
      number: "P2.L.2",
      title: "Significant social or environmental concerns of products",
      question:
        "If there are any significant social or environmental concerns and/or risks arising from production or disposal of your products / services, provide details of the same and the action taken to mitigate them.",
    }),
    pendingDisclosure({
      id: "P2-L3",
      principle: P,
      tier: "leadership",
      number: "P2.L.3",
      title: "Recycled or reused input material",
      question:
        "Percentage of recycled or reused input material to total material (by value) used in production or providing services.",
      responseType: "period-comparison",
      table: periodTable(["Recycled or re-used input material to total material"], "Indicate input material"),
      status: "applicability-review",
      applicabilityReason: "Material inputs are not a primary feature of software delivery; boundary definition pending.",
    }),
    pendingDisclosure({
      id: "P2-L4",
      principle: P,
      tier: "leadership",
      number: "P2.L.4",
      title: "Products and packaging reclaimed at end of life",
      question:
        "Of the products and packaging reclaimed at end of life of products, the amount (in metric tonnes) reused, recycled and safely disposed.",
      responseType: "table",
      table: {
        caption: "Reclaimed products and packaging (MT)",
        columns: [
          { key: "cat", label: "Category" },
          { key: "reused", label: "Re-used", numeric: true },
          { key: "recycled", label: "Recycled", numeric: true },
          { key: "disposed", label: "Safely disposed", numeric: true },
        ],
        rows: ["Plastics (including packaging)", "E-waste", "Hazardous waste", "Other waste"].map((cat) => ({
          cat,
          reused: PENDING,
          recycled: PENDING,
          disposed: PENDING,
        })),
      },
    }),
    pendingDisclosure({
      id: "P2-L5",
      principle: P,
      tier: "leadership",
      number: "P2.L.5",
      title: "Reclaimed products as percentage of products sold",
      question: "Reclaimed products and their packaging materials as a percentage of total products sold.",
      responseType: "table",
      table: {
        caption: "Reclaimed products as % of products sold",
        columns: [
          { key: "cat", label: "Indicate product category" },
          { key: "pct", label: "Reclaimed products and their packaging as % of total products sold", numeric: true },
        ],
        rows: [{ cat: "Software products (applicability under review)", pct: PENDING }],
      },
    }),
  ],
};
