import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/brsr/PageHeader";
import { DisclosureList } from "@/components/brsr/DisclosureList";
import { AssuranceBadge, DisclosureStatusBadge } from "@/components/brsr/badges";
import { principleContent } from "@/data/principles";
import { PRINCIPLES, report } from "@/data/report";

export const Route = createFileRoute("/brsr/principle/$id")({
  loader: ({ params }) => {
    const content = principleContent[params.id];
    if (!content) throw notFound();
    return { number: content.meta.number, title: content.meta.title, summary: content.meta.shortSummary };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Principle not found — OmneVu BRSR" }, { name: "robots", content: "noindex" }] };
    }
    const title = `Principle ${loaderData.number}: ${loaderData.title} — OmneVu BRSR`;
    return {
      meta: [
        { title },
        { name: "description", content: `${loaderData.summary} Essential and Leadership indicators with evidence, ownership and assurance status.` },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/brsr/principle/${params.id}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/brsr/principle/${params.id}` }],
    };
  },
  notFoundComponent: PrincipleNotFound,
  component: PrinciplePage,
});

function PrincipleNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold text-foreground">Principle not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">Section C covers principles 1 to 9.</p>
      <Link to="/brsr" className="mt-6 inline-flex text-sm font-medium text-primary underline underline-offset-4">
        Back to report overview
      </Link>
    </div>
  );
}

function PrinciplePage() {
  const { id } = Route.useParams();
  const content = principleContent[id]!;
  const { meta } = content;
  const prev = PRINCIPLES.find((p) => p.number === meta.number - 1);
  const next = PRINCIPLES.find((p) => p.number === meta.number + 1);

  return (
    <div>
      <PageHeader
        eyebrow={`Section C · Principle ${meta.number}`}
        title={meta.title}
        lead={meta.summary}
        meta={
          <>
            <DisclosureStatusBadge status="pending-validation" />
            <AssuranceBadge assurance="not-supplied" />
            <span className="text-sm text-muted-foreground">
              {meta.essentialCount} essential · {meta.leadershipCount} leadership · {report.reportingYearLabel}
            </span>
          </>
        }
      />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6">
        <section className="rounded-2xl border border-border bg-surface p-6">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{content.intro}</p>
          {content.methodologyNote ? (
            <p className="mt-4 max-w-3xl rounded-lg border border-border bg-surface-elevated/50 p-4 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Methodology note. </span>
              {content.methodologyNote}
            </p>
          ) : null}
        </section>

        <section aria-labelledby="essential" id="essential" className="scroll-mt-24">
          <h2 id="essential-h" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Essential Indicators
          </h2>
          <div className="mt-5">
            <DisclosureList disclosures={content.essential} contextLabel={`Principle ${meta.number} · Essential`} />
          </div>
        </section>

        <section aria-labelledby="leadership" id="leadership" className="scroll-mt-24">
          <h2 id="leadership-h" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Leadership Indicators
          </h2>
          <div className="mt-5">
            <DisclosureList disclosures={content.leadership} contextLabel={`Principle ${meta.number} · Leadership`} />
          </div>
        </section>

        <nav aria-label="Principle navigation" className="no-print grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              to="/brsr/principle/$id"
              params={{ id: String(prev.number) }}
              className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-xl border border-border bg-surface p-4 hover:border-primary/60"
            >
              <ArrowLeft aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Principle {prev.number}</span>
                <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">{prev.title}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/brsr/principle/$id"
              params={{ id: String(next.number) }}
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-surface p-4 text-right hover:border-primary/60 sm:justify-self-end sm:w-full"
            >
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Principle {next.number}</span>
                <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">{next.title}</span>
              </span>
              <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
            </Link>
          ) : null}
        </nav>
      </div>
    </div>
  );
}
