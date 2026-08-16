import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/brsr/PageHeader";
import { DataTable } from "@/components/brsr/DataTable";
import { AssuranceBadge, DisclosureStatusBadge } from "@/components/brsr/badges";
import { report } from "@/data/report";
import { PRINCIPLES } from "@/data/report";

export const Route = createFileRoute("/brsr/assurance")({
  head: () => ({
    meta: [
      { title: "Assurance and Data Status — OmneVu BRSR Report" },
      {
        name: "description",
        content:
          "Assurance scope, evidence handling and data-readiness status for every section of the OmneVu BRSR-aligned report.",
      },
      { property: "og:title", content: "Assurance and Data Status — OmneVu BRSR" },
      {
        property: "og:description",
        content: "How OmneVu disclosures are sourced, validated and assured, and what is not yet available.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/brsr/assurance" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/brsr/assurance" }],
  }),
  component: AssurancePage,
});

const scopeRows = [
  { item: "Assurance provider", value: "Not supplied" },
  { item: "Assurance standard", value: "Not supplied" },
  { item: "Assurance type (reasonable / limited)", value: "Not supplied" },
  { item: "Indicators within assurance scope", value: "None — no engagement in place" },
  { item: "Assurance statement", value: "Not available" },
  { item: "Reporting period assured", value: "Not applicable" },
];

const readinessRows = [
  { section: "Section A: General Disclosures", verified: "Entity name, registered office, e-mail, website", pending: "All quantitative and structural disclosures", assurance: "Assurance not supplied" },
  { section: "Section B: Management and Process", verified: "None", pending: "Policy set, approvals, governance and review records", assurance: "Assurance not supplied" },
  ...PRINCIPLES.map((p) => ({
    section: `Principle ${p.number}: ${p.title}`,
    verified: "None",
    pending: `${p.essentialCount} essential and ${p.leadershipCount} leadership indicators`,
    assurance: "Assurance not supplied",
  })),
];

function AssurancePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Report foundation"
        title="Assurance and data status"
        lead="This page states plainly what has been verified, what is pending company validation and what carries independent assurance. No indicator in this edition is assured."
        meta={
          <>
            <DisclosureStatusBadge status="pending-validation" />
            <AssuranceBadge assurance="not-supplied" />
            <span className="text-sm text-muted-foreground">{report.reportingYearLabel}</span>
          </>
        }
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section aria-labelledby="scope">
          <h2 id="scope" className="font-display text-xl font-bold tracking-tight text-foreground">
            Assurance scope
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            No independent assurance engagement has been commissioned for this report. Until an engagement is
            appointed and completed, every indicator is labelled "Assurance not supplied".
          </p>
          <DataTable
            exportName="omnevu-brsr-assurance-scope"
            exportMeta={["OmneVu BRSR — assurance scope", "Status: no assurance engagement in place"]}
            table={{
              caption: "Assurance engagement details",
              columns: [
                { key: "item", label: "Item" },
                { key: "value", label: "Status" },
              ],
              rows: scopeRows,
            }}
          />
        </section>

        <section aria-labelledby="readiness">
          <h2 id="readiness" className="font-display text-xl font-bold tracking-tight text-foreground">
            Section-by-section data readiness
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Verified content is limited to information published by the company. Everything else is shown as pending
            rather than filled with estimates or zeros.
          </p>
          <DataTable
            exportName="omnevu-brsr-data-readiness"
            exportMeta={["OmneVu BRSR — data readiness by section"]}
            table={{
              caption: "Data readiness by section",
              columns: [
                { key: "section", label: "Section" },
                { key: "verified", label: "Publicly verified content" },
                { key: "pending", label: "Pending company validation" },
                { key: "assurance", label: "Assurance status" },
              ],
              rows: readinessRows,
            }}
          />
        </section>

        <section aria-labelledby="controls" className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <h2 id="controls" className="font-display text-xl font-bold tracking-tight text-foreground">
              Controls applied to this report
            </h2>
          </div>
          {[
            {
              title: "No invented data",
              body: "Numbers are only published when the company supplies validated records. Unknown values are never rendered as zero.",
            },
            {
              title: "Evidence before publication",
              body: "Each indicator carries an evidence record with a nominated owner and validation date before it can move out of pending status.",
            },
            {
              title: "Applicability is stated, not assumed",
              body: "Where a BRSR indicator may not apply to a software business, the page says so and marks it for applicability review rather than silently omitting it.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
