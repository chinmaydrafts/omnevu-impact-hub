import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/brsr/PageHeader";
import { DisclosureList } from "@/components/brsr/DisclosureList";
import { DataTable } from "@/components/brsr/DataTable";
import { DisclosureStatusBadge } from "@/components/brsr/badges";
import { MATRIX_STATE_LABEL, governanceDisclosures, matrixQuestions } from "@/data/managementProcess";
import { PRINCIPLES, report } from "@/data/report";

export const Route = createFileRoute("/brsr/management-process")({
  head: () => ({
    meta: [
      { title: "Section B: Management and Process Disclosures — OmneVu BRSR" },
      {
        name: "description",
        content:
          "Section B of the OmneVu BRSR-aligned report: policy coverage across the nine NGRBC principles, governance, leadership and oversight.",
      },
      { property: "og:title", content: "Section B: Management and Process Disclosures — OmneVu BRSR" },
      { property: "og:description", content: "Policy and management process disclosures across all nine principles." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/brsr/management-process" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/brsr/management-process" }],
  }),
  component: SectionB,
});

function SectionB() {
  const matrixTable = {
    caption: "Policy and management process matrix (P1–P9)",
    columns: [
      { key: "question", label: "Disclosure question" },
      ...PRINCIPLES.map((p) => ({ key: `P${p.number}`, label: `P${p.number}` })),
    ],
    rows: matrixQuestions.map((q) => ({
      question: `${q.number} ${q.shortLabel}`,
      ...Object.fromEntries(PRINCIPLES.map((p) => [`P${p.number}`, MATRIX_STATE_LABEL[q.cells[p.number]!]])),
    })),
    footnotes: [
      "No cell asserts that a policy exists or has been approved. Each cell reports the current mapping status only.",
    ],
  };

  return (
    <div>
      <PageHeader
        eyebrow="Section B"
        title="Management and Process Disclosures"
        lead="Policy coverage across the nine NGRBC principles, together with governance, leadership and oversight disclosures."
        meta={
          <>
            <DisclosureStatusBadge status="pending-validation" />
            <span className="text-sm text-muted-foreground">{report.reportingYearLabel}</span>
          </>
        }
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section aria-labelledby="matrix" id="matrix" className="scroll-mt-24">
          <h2 id="matrix-h" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Policy and management process matrix
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The matrix reports mapping status per principle. A completed matrix requires the company's policy set,
            approval records and value-chain coverage decisions.
          </p>
          <DataTable
            table={matrixTable}
            exportName="omnevu-brsr-section-b-matrix"
            exportMeta={["OmneVu BRSR — Section B policy matrix", "Status: pending mapping; no policy existence asserted"]}
          />
          <div className="mt-6 space-y-3">
            {matrixQuestions.map((q) => (
              <div key={q.id} id={q.id} className="scroll-mt-24 rounded-xl border border-border bg-surface p-4">
                <p className="font-mono text-xs text-muted-foreground">{q.number}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">{q.question}</p>
                {q.note ? <p className="mt-1.5 text-xs italic text-muted-foreground">{q.note}</p> : null}
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="governance" id="governance" className="scroll-mt-24">
          <h2 id="governance-h" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Governance, leadership and oversight
          </h2>
          <div className="mt-5">
            <DisclosureList
              disclosures={governanceDisclosures}
              contextLabel="Section B · Governance, leadership and oversight"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
