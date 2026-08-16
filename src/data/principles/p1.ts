import { PENDING, pendingDisclosure, periodTable } from "../helpers";
import { getPrinciple } from "../report";
import type { PrincipleContent } from "../types";

const P = 1;
const meta = getPrinciple(P)!;

export const p1: PrincipleContent = {
  meta,
  intro:
    "Integrity disclosures cover ethics training, legal proceedings, anti-bribery arrangements, conflicts of interest and corrective action. OmneVu has not yet supplied validated records for any indicator on this Principle.",
  essential: [
    pendingDisclosure({
      id: "P1-E1",
      principle: P,
      number: "P1.E.1",
      title: "Training and awareness programmes",
      question:
        "Percentage coverage by training and awareness programmes on any of the Principles during the financial year, for Board of Directors / Key Managerial Personnel, employees other than BoD and KMPs, and workers.",
      responseType: "table",
      table: {
        caption: "Awareness programmes coverage",
        columns: [
          { key: "segment", label: "Segment" },
          { key: "programmes", label: "Total number of training and awareness programmes held", numeric: true },
          { key: "topics", label: "Topics / principles covered" },
          { key: "coverage", label: "% of persons covered", numeric: true },
        ],
        rows: [
          "Board of Directors / Designated Partners",
          "Key Managerial Personnel",
          "Employees other than BoD and KMP",
          "Workers",
        ].map((segment) => ({ segment, programmes: PENDING, topics: PENDING, coverage: PENDING })),
      },
      emptyStateHint:
        "Required: programme register with dates, audience, principles covered and attendance, so coverage percentages can be calculated.",
    }),
    pendingDisclosure({
      id: "P1-E2",
      principle: P,
      number: "P1.E.2",
      title: "Fines, penalties, punishment, award, compounding fees or settlement amounts",
      question:
        "Details of fines / penalties / punishment / award / compounding fees / settlement amount paid in proceedings with regulators, law enforcement agencies and judicial institutions, in monetary and non-monetary terms.",
      responseType: "table",
      tables: [
        {
          caption: "Monetary proceedings",
          columns: [
            { key: "type", label: "Type" },
            { key: "agency", label: "NGRBC Principle / regulatory agency" },
            { key: "amount", label: "Amount (INR)", numeric: true },
            { key: "brief", label: "Brief of the case" },
            { key: "appeal", label: "Has an appeal been preferred?" },
          ],
          rows: ["Penalty / fine", "Settlement", "Compounding fee"].map((type) => ({
            type,
            agency: PENDING,
            amount: PENDING,
            brief: "No validated proceeding register supplied",
            appeal: PENDING,
          })),
        },
        {
          caption: "Non-monetary proceedings",
          columns: [
            { key: "type", label: "Type" },
            { key: "agency", label: "NGRBC Principle / regulatory agency" },
            { key: "brief", label: "Brief of the case" },
            { key: "appeal", label: "Has an appeal been preferred?" },
          ],
          rows: ["Imprisonment", "Punishment"].map((type) => ({
            type,
            agency: PENDING,
            brief: "No validated proceeding register supplied",
            appeal: PENDING,
          })),
        },
      ],
    }),
    pendingDisclosure({
      id: "P1-E3",
      principle: P,
      number: "P1.E.3",
      title: "Appeals and revisions",
      question:
        "Details of the appeal / revision preferred in cases where monetary or non-monetary action has been appealed.",
      emptyStateHint:
        "Required: case reference, forum, filing date and current status for every appeal or revision, if any exist.",
    }),
    pendingDisclosure({
      id: "P1-E4",
      principle: P,
      number: "P1.E.4",
      title: "Anti-corruption and anti-bribery policy",
      question:
        "Does the entity have an anti-corruption or anti-bribery policy? If yes, provide details in brief and a web link, if available.",
      responseType: "policy",
      emptyStateHint:
        "Required: policy document, approval authority, approval date, scope of applicability and publication link.",
    }),
    pendingDisclosure({
      id: "P1-E5",
      principle: P,
      number: "P1.E.5",
      title: "Disciplinary action for bribery or corruption",
      question:
        "Number of Directors / KMPs / employees / workers against whom disciplinary action was taken by any law enforcement agency for the charges of bribery or corruption.",
      responseType: "period-comparison",
      table: periodTable(
        ["Directors / Designated Partners", "KMPs", "Employees", "Workers"],
        "Category",
        undefined,
        undefined,
        "Disciplinary action for bribery or corruption",
      ),
    }),
    pendingDisclosure({
      id: "P1-E6",
      principle: P,
      number: "P1.E.6",
      title: "Complaints on conflict of interest",
      question:
        "Details of complaints with regard to conflict of interest of the Directors and of the KMPs.",
      responseType: "period-comparison",
      table: periodTable(
        [
          "Number of complaints received in relation to issues of conflict of interest of the Directors",
          "Number of complaints received in relation to issues of conflict of interest of the KMPs",
        ],
        "Complaint category",
        undefined,
        undefined,
        "Conflict-of-interest complaints",
      ),
    }),
    pendingDisclosure({
      id: "P1-E7",
      principle: P,
      number: "P1.E.7",
      title: "Corrective action on corruption or conflicts of interest",
      question:
        "Provide details of any corrective action taken or underway on issues related to fines / penalties / action taken by regulators / law enforcement agencies / judicial institutions on cases of corruption and conflicts of interest.",
      responseType: "corrective-action",
      emptyStateHint:
        "Required: issue reference, corrective action, accountable owner, target date and closure evidence.",
    }),
  ],
  leadership: [
    pendingDisclosure({
      id: "P1-L1",
      principle: P,
      tier: "leadership",
      number: "P1.L.1",
      title: "Awareness programmes for value chain partners",
      question:
        "Awareness programmes conducted for value chain partners on any of the Principles during the financial year.",
      responseType: "table",
      table: {
        caption: "Value chain awareness programmes",
        columns: [
          { key: "programmes", label: "Total number of awareness programmes held", numeric: true },
          { key: "topics", label: "Topics / principles covered" },
          { key: "coverage", label: "% of value chain partners covered", numeric: true },
        ],
        rows: [{ programmes: PENDING, topics: PENDING, coverage: PENDING }],
      },
    }),
    pendingDisclosure({
      id: "P1-L2",
      principle: P,
      tier: "leadership",
      number: "P1.L.2",
      title: "Board conflict-of-interest management",
      question:
        "Does the entity have processes in place to avoid / manage conflict of interests involving members of the Board? If yes, provide details of the same.",
      emptyStateHint:
        "Required: declaration process, frequency, register custodian and recusal procedure.",
    }),
  ],
};
