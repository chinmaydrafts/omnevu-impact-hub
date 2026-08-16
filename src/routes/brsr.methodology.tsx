import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/brsr/PageHeader";
import { DisclosureStatusBadge } from "@/components/brsr/badges";
import { definitions, methodologySections } from "@/data/methodology";

export const Route = createFileRoute("/brsr/methodology")({
  head: () => ({
    meta: [
      { title: "Methodology and Definitions — OmneVu BRSR Report" },
      {
        name: "description",
        content:
          "Reporting boundary, data collection, calculation basis, data quality, assurance and BRSR definitions used in the OmneVu report.",
      },
      { property: "og:title", content: "Methodology and Definitions — OmneVu BRSR" },
      { property: "og:description", content: "How the OmneVu BRSR-aligned report is prepared, validated and defined." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/brsr/methodology" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/brsr/methodology" }],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Methodology"
        title="How this report is prepared"
        lead="Boundary, data collection, calculation basis, quality controls, assurance and restatements — plus the definitions used across the report."
        meta={<DisclosureStatusBadge status="pending-validation" />}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <nav aria-label="Methodology contents" className="no-print lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contents</p>
          <ul className="mt-3 space-y-1">
            {methodologySections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="block rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-surface-elevated hover:text-foreground">
                  {s.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#definitions" className="block rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-surface-elevated hover:text-foreground">
                Definitions
              </a>
            </li>
          </ul>
        </nav>

        <div className="min-w-0 space-y-8">
          {methodologySections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h2 id={`${s.id}-h`} className="font-display text-xl font-bold tracking-tight text-foreground">
                  {s.title}
                </h2>
                <DisclosureStatusBadge status={s.status} />
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              {s.fields?.length ? (
                <dl className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {s.fields.map((f) => (
                    <div key={f.label} className="min-w-0 rounded-lg border border-border bg-surface-elevated/50 p-3">
                      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{f.label}</dt>
                      <dd className="mt-1 text-sm text-foreground">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </section>
          ))}

          <section id="definitions" aria-labelledby="definitions-h" className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6">
            <h2 id="definitions-h" className="font-display text-xl font-bold tracking-tight text-foreground">
              Definitions
            </h2>
            <dl className="mt-4 space-y-4">
              {definitions.map((d) => (
                <div key={d.term} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <dt className="text-sm font-semibold text-foreground">{d.term}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.definition}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </div>
  );
}
