import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { PageHeader } from "@/components/brsr/PageHeader";
import { generalDisclosureGroups } from "@/data/generalDisclosures";
import { governanceDisclosures } from "@/data/managementProcess";
import { allPrincipleContent } from "@/data/principles";
import { PRINCIPLES, STATUS_LABEL, report } from "@/data/report";

export const Route = createFileRoute("/brsr/executive-summary")({
  head: () => ({
    meta: [
      { title: "Executive summary — OmneVu Responsibility Report" },
      {
        name: "description",
        content:
          "A one-page, print-ready executive summary of OmneVu's BRSR-aligned responsibility report: entity profile, disclosure coverage, data status and next steps.",
      },
      { property: "og:title", content: "Executive summary — OmneVu Responsibility Report" },
      {
        property: "og:description",
        content: "Print-ready summary of entity profile, disclosure coverage and validation status.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/brsr/executive-summary" }],
  }),
  component: ExecutiveSummaryPage,
});

function ExecutiveSummaryPage() {
  const sectionA = generalDisclosureGroups.flatMap((g) => g.disclosures);
  const sectionC = allPrincipleContent.flatMap((p) => [...p.essential, ...p.leadership]);
  const all = [...sectionA, ...governanceDisclosures, ...sectionC];

  const statusCounts = all.reduce<Record<string, number>>((acc, d) => {
    acc[d.status] = (acc[d.status] ?? 0) + 1;
    return acc;
  }, {});

  const essentialTotal = allPrincipleContent.reduce((n, p) => n + p.essential.length, 0);
  const leadershipTotal = allPrincipleContent.reduce((n, p) => n + p.leadership.length, 0);

  const profile: Array<[string, string]> = [
    ["Reporting entity", report.legalEntity],
    ["Operating brand", report.brand],
    ["Registered office", report.registeredOffice],
    ["Contact", report.email],
    ["Reporting period", report.reportingYearLabel],
    ["Reporting basis", report.basis],
    ["Reporting boundary", report.boundary],
    ["Independent assurance", "Not supplied"],
  ];

  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Executive summary"
        title="Responsibility report at a glance"
        lead="A single-page summary of the reporting entity, disclosure coverage and validation status, formatted for printing or saving to PDF."
        meta={
          <button
            type="button"
            onClick={() => typeof window !== "undefined" && window.print()}
            className="no-print inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            <Printer aria-hidden="true" className="size-4" />
            Print or save as PDF
          </button>
        }
      />

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12 sm:px-6">
        <section aria-labelledby="es-profile">
          <h2 id="es-profile" className="font-display text-2xl font-semibold text-foreground">
            Entity profile
          </h2>
          <dl className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {profile.map(([label, value]) => (
              <div key={label} className="bg-surface p-4">
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-1.5 text-[1rem] leading-relaxed text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="es-coverage">
          <h2 id="es-coverage" className="font-display text-2xl font-semibold text-foreground">
            Disclosure coverage
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-4">
            {[
              { label: "Total disclosures", value: all.length },
              { label: "Section A general", value: sectionA.length },
              { label: "Section C essential", value: essentialTotal },
              { label: "Section C leadership", value: leadershipTotal },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-display text-3xl font-bold tabular-nums text-primary">{stat.value}</p>
                <p className="mt-1.5 text-[0.9rem] leading-snug text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="es-status">
          <h2 id="es-status" className="font-display text-2xl font-semibold text-foreground">
            Data status
          </h2>
          <table className="mt-4 w-full overflow-hidden rounded-2xl border border-border text-left">
            <thead>
              <tr className="bg-navy">
                <th scope="col" className="px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-wide text-paper">
                  Status
                </th>
                <th scope="col" className="px-4 py-3 text-right text-[0.78rem] font-semibold uppercase tracking-wide text-paper">
                  Disclosures
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(statusCounts).map(([status, count], i) => (
                <tr key={status} className={`border-b border-border last:border-0 ${i % 2 === 1 ? "bg-surface-elevated/60" : "bg-surface"}`}>
                  <td className="px-4 py-3 text-[0.98rem] text-foreground">{STATUS_LABEL[status] ?? status}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-foreground">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
            No indicator in this edition carries independent assurance. Blank or “pending” values are not zero values.
          </p>
        </section>

        <section aria-labelledby="es-principles">
          <h2 id="es-principles" className="font-display text-2xl font-semibold text-foreground">
            Section C principles
          </h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <li key={p.number} className="rounded-xl border border-border bg-surface p-4">
                <Link
                  to="/brsr/principle/$id"
                  params={{ id: String(p.number) }}
                  className="font-display text-[1rem] font-semibold text-foreground hover:text-primary"
                >
                  Principle {p.number}: {p.title}
                </Link>
                <p className="mt-1 text-[0.9rem] leading-relaxed text-muted-foreground">{p.shortSummary}</p>
                <p className="mt-2 text-[0.82rem] tabular-nums text-muted-foreground">
                  {p.essentialCount} essential · {p.leadershipCount} leadership
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="es-next" className="rounded-2xl border border-border bg-tint-blue p-6">
          <h2 id="es-next" className="font-display text-xl font-semibold text-foreground">
            Next steps to publication
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[0.98rem] leading-relaxed text-muted-foreground">
            <li>Nominate a data owner for every indicator and confirm the reporting boundary and period.</li>
            <li>Collect source records, attach evidence and record calculation bases for derived values.</li>
            <li>Complete internal validation and governance approval for each disclosure.</li>
            <li>Appoint an assurance provider and agree the assurance scope, then publish the validated edition.</li>
          </ol>
          <p className="mt-4 text-[0.85rem] text-muted-foreground">{report.notice}</p>
        </section>
      </div>
    </div>
  );
}
