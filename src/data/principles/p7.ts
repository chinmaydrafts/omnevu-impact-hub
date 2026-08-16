import { pendingDisclosure } from "../helpers";
import { getPrinciple } from "../report";
import type { PrincipleContent } from "../types";

const P = 7;
const meta = getPrinciple(P)!;

export const p7: PrincipleContent = {
  meta,
  intro:
    "Public policy disclosures cover trade and industry affiliations, anti-competitive conduct and advocacy positions. No validated affiliation or advocacy register has been supplied.",
  essential: [
    pendingDisclosure({
      id: "P7-E1",
      principle: P,
      number: "P7.E.1",
      title: "Affiliations with trade and industry chambers or associations",
      question:
        "Number of affiliations with trade and industry chambers / associations, and a list of the top 10 such bodies (determined based on the total members of such bodies) that the entity is a member of / affiliated to.",
      responseType: "table",
      table: {
        caption: "Trade and industry affiliations",
        columns: [
          { key: "sno", label: "S. No." },
          { key: "name", label: "Name of the trade and industry chamber / association" },
          { key: "reach", label: "Reach of the trade and industry chamber / association (State / National)" },
        ],
        rows: [],
      },
      emptyStateHint: "No validated affiliation register supplied.",
    }),
    pendingDisclosure({
      id: "P7-E2",
      principle: P,
      number: "P7.E.2",
      title: "Corrective action on anti-competitive conduct",
      question:
        "Provide details of corrective action taken or underway on any issues related to anti-competitive conduct by the entity, based on adverse orders from regulatory authorities.",
      responseType: "corrective-action",
      table: {
        caption: "Adverse orders relating to anti-competitive conduct",
        columns: [
          { key: "authority", label: "Name of authority" },
          { key: "brief", label: "Brief of the case" },
          { key: "corrective", label: "Corrective action taken" },
        ],
        rows: [],
      },
      emptyStateHint: "No validated adverse-order register supplied.",
    }),
  ],
  leadership: [
    pendingDisclosure({
      id: "P7-L1",
      principle: P,
      tier: "leadership",
      number: "P7.L.1",
      title: "Public policy positions advocated",
      question:
        "Details of public policy positions advocated by the entity, including the method resorted for such advocacy, whether the information is available in the public domain and the frequency of review by the Board.",
      responseType: "table",
      table: {
        caption: "Public policy positions",
        columns: [
          { key: "sno", label: "S. No." },
          { key: "position", label: "Public policy advocated" },
          { key: "method", label: "Method resorted for such advocacy" },
          { key: "public", label: "Whether information available in public domain" },
          { key: "frequency", label: "Frequency of review by Board" },
          { key: "web", label: "Web link, if available" },
        ],
        rows: [],
      },
      emptyStateHint: "No validated advocacy register supplied.",
    }),
  ],
};
