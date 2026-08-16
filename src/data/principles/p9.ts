import { PENDING, pendingDisclosure, periodTable } from "../helpers";
import { getPrinciple, report } from "../report";
import type { PrincipleContent } from "../types";

const P = 9;
const meta = getPrinciple(P)!;

export const p9: PrincipleContent = {
  meta,
  intro:
    "For a SaaS business, responsible consumer engagement centres on privacy, cybersecurity, service continuity, support quality and clear product information. The OmneVu privacy page is an existing public document; no controls, policies or complaint records have been validated for BRSR reporting.",
  methodologyNote:
    "Cybersecurity and privacy indicators must be answered from validated records: the applicable policy set, its approval, incident and breach registers, customer notification procedures and service-availability records. Nothing on this page should be read as a statement that a specific control exists.",
  essential: [
    pendingDisclosure({
      id: "P9-E1",
      principle: P,
      number: "P9.E.1",
      title: "Mechanisms to receive and respond to consumer complaints and feedback",
      question:
        "Describe the mechanisms in place to receive and respond to consumer complaints and feedback.",
      emptyStateHint:
        "Required: support intake channels, response and resolution commitments, escalation path and record-keeping method.",
    }),
    pendingDisclosure({
      id: "P9-E2",
      principle: P,
      number: "P9.E.2",
      title: "Turnover of products and services with information on the product label",
      question:
        "Turnover of products and / or services as a percentage of turnover from all products / services that carry information about environmental and social parameters, safe and responsible usage, and recycling and / or safe disposal.",
      responseType: "table",
      table: {
        caption: "Product / service information coverage",
        columns: [
          { key: "param", label: "Information category" },
          { key: "value", label: "As a percentage of total turnover", numeric: true },
        ],
        rows: [
          "Environmental and social parameters relevant to the product",
          "Safe and responsible usage",
          "Recycling and / or safe disposal",
        ].map((param) => ({ param, value: PENDING })),
        footnotes: [
          "For software services, the equivalent artefacts would be product documentation, terms of use, data-processing information and accessibility statements. This mapping is pending review.",
        ],
      },
    }),
    pendingDisclosure({
      id: "P9-E3",
      principle: P,
      number: "P9.E.3",
      title: "Consumer complaints by category",
      question:
        "Number of consumer complaints in respect of data privacy, advertising, cyber-security, delivery of essential services, restrictive trade practices, unfair trade practices and other matters.",
      responseType: "period-comparison",
      table: periodTable(
        [
          "Data privacy",
          "Advertising",
          "Cyber-security",
          "Delivery of essential services",
          "Restrictive trade practices",
          "Unfair trade practices",
          "Other",
        ],
        "Complaint category",
        undefined,
        undefined,
        "Consumer complaints",
      ),
      emptyStateHint:
        "Required: complaint register with category, received count, pending at close and remarks. Counts are not shown as zero.",
    }),
    pendingDisclosure({
      id: "P9-E4",
      principle: P,
      number: "P9.E.4",
      title: "Details of instances of product recalls",
      question: "Details of instances of product recalls on account of safety issues, voluntary and forced.",
      responseType: "table",
      table: {
        caption: "Product recalls",
        columns: [
          { key: "type", label: "Type" },
          { key: "number", label: "Number", numeric: true },
          { key: "reason", label: "Reasons for recall" },
        ],
        rows: ["Voluntary recalls", "Forced recalls"].map((type) => ({ type, number: PENDING, reason: PENDING })),
        footnotes: [
          "For software, the analogous events would be release rollbacks or withdrawal of a version. This mapping is pending review.",
        ],
      },
    }),
    pendingDisclosure({
      id: "P9-E5",
      principle: P,
      number: "P9.E.5",
      title: "Framework / policy on cyber security and risks related to data privacy",
      question:
        "Does the entity have a framework / policy on cyber security and risks related to data privacy? If available, provide a web link of the policy.",
      responseType: "policy",
      narrative:
        "A public privacy page is published on the OmneVu website. Status: Public document available; BRSR mapping pending review. No statement is made here about the existence or effectiveness of a cyber security framework.",
      emptyStateHint:
        "Required: the applicable policy set, approval authority and date, scope, review cadence and publication link.",
    }),
    pendingDisclosure({
      id: "P9-E6",
      principle: P,
      number: "P9.E.6",
      title: "Corrective actions on consumer, privacy and cyber security issues",
      question:
        "Provide details of any corrective actions taken or underway on issues relating to advertising and delivery of essential services; cyber security and data privacy of customers; re-occurrence of instances of product recalls; and penalty / action taken by regulatory authorities on safety of products / services.",
      responseType: "corrective-action",
    }),
  ],
  leadership: [
    pendingDisclosure({
      id: "P9-L1",
      principle: P,
      tier: "leadership",
      number: "P9.L.1",
      title: "Channels for information about products and services",
      question:
        "Channels / platforms where information on products and services of the entity can be accessed (provide web link, if available).",
      narrative: `Public product information is available on the OmneVu website (${report.website}). Completeness of channel mapping is pending validation.`,
      status: "pending-validation",
    }),
    pendingDisclosure({
      id: "P9-L2",
      principle: P,
      tier: "leadership",
      number: "P9.L.2",
      title: "Consumer education on safe and responsible usage",
      question:
        "Steps taken to inform and educate consumers about safe and responsible usage of products and / or services.",
    }),
    pendingDisclosure({
      id: "P9-L3",
      principle: P,
      tier: "leadership",
      number: "P9.L.3",
      title: "Notification of risk of disruption or discontinuation of essential services",
      question:
        "Mechanisms in place to inform consumers of any risk of disruption / discontinuation of essential services.",
      emptyStateHint:
        "Required: status page or notification channel, notice period commitment and incident communication procedure.",
    }),
    pendingDisclosure({
      id: "P9-L4",
      principle: P,
      tier: "leadership",
      number: "P9.L.4",
      title: "Information beyond legal requirements and consumer satisfaction surveys",
      question:
        "Does the entity display product information on the product over and above what is mandated as per local laws? If yes, provide details. Additionally, does the entity carry out any survey with regard to consumer satisfaction relating to the major products / services of the entity?",
    }),
    pendingDisclosure({
      id: "P9-L5",
      principle: P,
      tier: "leadership",
      number: "P9.L.5",
      title: "Data breaches and impact on personal information",
      question:
        "Provide the following information relating to data breaches: number of instances of data breaches, percentage of data breaches involving personally identifiable information of customers, and impact, if any.",
      responseType: "table",
      table: {
        caption: "Data breaches",
        columns: [
          { key: "param", label: "Parameter" },
          { key: "value", label: "Response" },
        ],
        rows: [
          { param: "Number of instances of data breaches", value: PENDING },
          { param: "Percentage of data breaches involving personally identifiable information of customers", value: PENDING },
          { param: "Impact, if any, of the data breaches", value: PENDING },
        ],
        footnotes: [
          "No count is displayed as zero. An absence of published records is not a statement that no incident occurred.",
        ],
      },
    }),
  ],
};
