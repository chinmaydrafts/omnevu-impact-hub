import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/brsr/PageHeader";
import { DisclosureList } from "@/components/brsr/DisclosureList";
import { DisclosureStatusBadge } from "@/components/brsr/badges";
import { generalDisclosureGroups } from "@/data/generalDisclosures";
import { report } from "@/data/report";

export const Route = createFileRoute("/brsr/general-disclosures")({
  head: () => ({
    meta: [
      { title: "Section A: General Disclosures — OmneVu BRSR Report" },
      {
        name: "description",
        content:
          "Section A of the OmneVu BRSR-aligned report: entity details, products and services, operations, employees, holdings, CSR and complaint disclosures.",
      },
      { property: "og:title", content: "Section A: General Disclosures — OmneVu BRSR" },
      { property: "og:description", content: "Entity, operations, workforce and transparency disclosures for OmneVu." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/brsr/general-disclosures" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/brsr/general-disclosures" }],
  }),
  component: SectionA,
});

function SectionA() {
  return (
    <div>
      <PageHeader
        eyebrow="Section A"
        title="General Disclosures"
        lead="Entity details, products and services, operations, employees, holdings and subsidiaries, CSR details and transparency and disclosure complaints."
        meta={
          <>
            <DisclosureStatusBadge status="pending-validation" />
            <span className="text-sm text-muted-foreground">{report.reportingYearLabel}</span>
          </>
        }
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <nav aria-label="Section A contents" className="no-print lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contents</p>
          <ol className="mt-3 space-y-1">
            {generalDisclosureGroups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] gap-1 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                >
                  <span className="font-mono text-xs">{g.roman}.</span>
                  <span className="min-w-0">{g.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="min-w-0 space-y-12">
          {generalDisclosureGroups.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-24">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Group {g.roman}</p>
              <h2 id={`${g.id}-h`} className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground">
                {g.title}
              </h2>
              {g.intro ? (
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{g.intro}</p>
              ) : null}
              <div className="mt-5">
                <DisclosureList disclosures={g.disclosures} contextLabel={`Section A · ${g.title}`} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
