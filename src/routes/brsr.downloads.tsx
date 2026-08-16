import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/brsr/PageHeader";
import { DisclosureStatusBadge } from "@/components/brsr/badges";
import { Button } from "@/components/ui/button";
import { generalDisclosureGroups } from "@/data/generalDisclosures";
import { allPrincipleContent } from "@/data/principles";
import { report } from "@/data/report";
import { downloadCsv, tableToCsv } from "@/lib/csv";

export const Route = createFileRoute("/brsr/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads and Data Exports — OmneVu BRSR Report" },
      {
        name: "description",
        content: "Export the OmneVu BRSR disclosure register as CSV and review the status of report files and policies.",
      },
      { property: "og:title", content: "Downloads and Data Exports — OmneVu BRSR" },
      { property: "og:description", content: "CSV exports of the OmneVu BRSR disclosure register and document status." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/brsr/downloads" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/brsr/downloads" }],
  }),
  component: DownloadsPage,
});

const documents = [
  { name: "Full BRSR report (PDF)", status: "Not yet published — pending company validation" },
  { name: "Independent assurance statement", status: "Not supplied — no engagement in place" },
  { name: "Policy set referenced in Section B", status: "Not supplied" },
  { name: "Privacy notice", status: "Published on the OmneVu website" },
  { name: "Terms of use", status: "Published on the OmneVu website" },
];

function DownloadsPage() {
  const exportRegister = () => {
    const rows = [
      ...generalDisclosureGroups.flatMap((g) =>
        g.disclosures.map((d) => ({
          section: `Section A · ${g.title}`,
          number: d.number,
          title: d.title,
          status: d.status,
          assurance: d.assurance,
          owner: d.dataOwner ?? "Pending nomination",
        })),
      ),
      ...allPrincipleContent.flatMap((p) =>
        [...p.essential, ...p.leadership].map((d) => ({
          section: `Principle ${p.meta.number} · ${d.tier === "leadership" ? "Leadership" : "Essential"}`,
          number: d.number,
          title: d.title,
          status: d.status,
          assurance: d.assurance,
          owner: d.dataOwner ?? "Pending nomination",
        })),
      ),
    ];
    downloadCsv(
      "omnevu-brsr-disclosure-register",
      tableToCsv(
        {
          columns: [
            { key: "section", label: "Section" },
            { key: "number", label: "Indicator" },
            { key: "title", label: "Disclosure" },
            { key: "status", label: "Data status" },
            { key: "assurance", label: "Assurance status" },
            { key: "owner", label: "Data owner" },
          ],
          rows,
        },
        [`OmneVu BRSR disclosure register — ${report.reportingYearLabel}`, report.notice],
      ),
    );
  };

  return (
    <div>
      <PageHeader
        eyebrow="Downloads"
        title="Report files and data exports"
        lead="Export the full disclosure register as CSV, and see which report documents are available today."
        meta={<DisclosureStatusBadge status="pending-validation" />}
      />

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6">
        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Disclosure register (CSV)</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Every indicator across Section A and Section C with its data status, assurance status and nominated owner.
            Individual data tables can also be exported from each disclosure.
          </p>
          <Button type="button" onClick={exportRegister} className="mt-5 gap-2">
            <Download aria-hidden="true" className="size-4" />
            Export disclosure register
          </Button>
        </section>

        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Documents</h2>
          <ul className="mt-4 divide-y divide-border">
            {documents.map((doc) => (
              <li key={doc.name} className="grid gap-1 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4">
                <span className="min-w-0 text-sm text-foreground">{doc.name}</span>
                <span className="text-sm text-muted-foreground">{doc.status}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
