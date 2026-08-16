import { pendingDisclosure } from "../helpers";
import { getPrinciple } from "../report";
import type { PrincipleContent } from "../types";

const P = 4;
const meta = getPrinciple(P)!;

export const p4: PrincipleContent = {
  meta,
  intro:
    "Stakeholder disclosures describe how groups are identified, how often they are engaged and how their input reaches governance. The stakeholder groups shown on this page are proposed for validation and do not represent a completed engagement programme.",
  essential: [
    pendingDisclosure({
      id: "P4-E1",
      principle: P,
      number: "P4.E.1",
      title: "Process for identifying key stakeholder groups",
      question: "Describe the processes for identifying key stakeholder groups of the entity.",
      emptyStateHint:
        "Required: identification method, criteria for materiality of each group, review frequency and accountable owner.",
    }),
    pendingDisclosure({
      id: "P4-E2",
      principle: P,
      number: "P4.E.2",
      title: "Stakeholder groups and engagement",
      question:
        "List stakeholder groups identified as key for the entity and the frequency of engagement with each group.",
      responseType: "table",
      table: {
        caption: "Proposed stakeholder groups (pending validation)",
        columns: [
          { key: "group", label: "Stakeholder group" },
          { key: "vulnerable", label: "Whether identified as vulnerable and marginalised group" },
          { key: "channels", label: "Channels of communication" },
          { key: "frequency", label: "Frequency of engagement" },
          { key: "purpose", label: "Purpose and scope of engagement" },
        ],
        rows: [
          "Customers (B2B and B2C)",
          "Employees and contractors",
          "Cloud and technology suppliers",
          "Partners and resellers",
          "Regulators and industry bodies",
          "Local community",
        ].map((group) => ({
          group,
          vulnerable: "Applicability under review",
          channels: "Pending validation",
          frequency: "Pending validation",
          purpose: "Pending validation",
        })),
        footnotes: ["Groups listed are proposed for company validation and are not a completed engagement register."],
      },
    }),
  ],
  leadership: [
    pendingDisclosure({
      id: "P4-L1",
      principle: P,
      tier: "leadership",
      number: "P4.L.1",
      title: "Consultation between stakeholders and the Board",
      question:
        "Provide the processes for consultation between stakeholders and the Board on economic, environmental and social topics, or if consultation is delegated, how such feedback is provided to the Board.",
    }),
    pendingDisclosure({
      id: "P4-L2",
      principle: P,
      tier: "leadership",
      number: "P4.L.2",
      title: "Use of stakeholder consultation",
      question:
        "Whether stakeholder consultation is used to support the identification and management of environmental and social topics. If so, provide details of instances.",
    }),
    pendingDisclosure({
      id: "P4-L3",
      principle: P,
      tier: "leadership",
      number: "P4.L.3",
      title: "Engagement with vulnerable and marginalised groups",
      question:
        "Provide details of instances of engagement with, and actions taken to address the concerns of, vulnerable / marginalised stakeholder groups.",
    }),
  ],
};
