import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardList,
  FileCheck2,
  Layers,
  ShieldQuestion,
} from "lucide-react";
import { PrincipleCard } from "@/components/brsr/PrincipleCard";
import { DisclosureStatusBadge } from "@/components/brsr/badges";
import { PRINCIPLES, report } from "@/data/report";

export const Route = createFileRoute("/brsr/")({
  head: () => ({
    meta: [
      { title: "OmneVu BRSR Report — Business Responsibility and Sustainability" },
      {
        name: "description",
        content:
          "OmneVu's BRSR-aligned responsibility and sustainability disclosure microsite: assurance status, Section A, Section B and the nine NGRBC principles.",
      },
      { property: "og:title", content: "OmneVu BRSR Report" },
      {
        property: "og:description",
        content:
          "Voluntary BRSR-aligned disclosure structure for OmneVu covering governance, workforce, environment and consumer responsibility.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/brsr" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/brsr" }],
  }),
  component: ReportHome,
});

const primaryCards = [
  {
    to: "/brsr/assurance" as const,
    icon: ShieldQuestion,
    label: "Foundation",
    title: "Assurance and data status",
    body: "How each disclosure is sourced, validated and assured — and what is not yet available.",
    accent: "text-cyan",
  },
  {
    to: "/brsr/general-disclosures" as const,
    icon: ClipboardList,
    label: "Section A",
    title: "General Disclosures",
    body: "Entity details, products and services, operations, employees, holdings, CSR and complaints.",
    accent: "text-primary",
  },
  {
    to: "/brsr/management-process" as const,
    icon: Layers,
    label: "Section B",
    title: "Management and Process Disclosures",
    body: "Policy coverage across all nine principles, governance, oversight and review.",
    accent: "text-green",
  },
];

function ReportHome() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_15%_-10%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {report.reportingYearLabel} · {report.basis}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
            Business Responsibility and Sustainability Report
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {report.legalEntity}, operating as {report.brand}. {report.entityDescription} This microsite organises
            responsibility disclosures using the BRSR structure so validated company data can be published as it is
            confirmed.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/brsr/general-disclosures"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Start with Section A
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              to="/brsr/methodology"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary/60"
            >
              How this report is built
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <DisclosureStatusBadge status="pending-validation" />
            <span className="text-sm text-muted-foreground">{report.notice}</span>
          </div>
        </div>
      </section>

      <section aria-labelledby="report-directory" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 id="report-directory" className="font-display text-2xl font-bold tracking-tight text-foreground">
          Report directory
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Three foundation documents, followed by the nine NGRBC principles that make up Section C.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {primaryCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group grid gap-4 rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-primary/60"
            >
              <card.icon aria-hidden="true" className={`size-7 ${card.accent}`} />
              <div className="min-w-0">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">{card.label}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Open
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="principles" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <h2 id="principles" className="font-display text-2xl font-bold tracking-tight text-foreground">
              Section C: Principle-wise performance
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Each principle page presents Essential and Leadership indicators with evidence, data ownership and
              assurance status.
            </p>
          </div>
          <FileCheck2 aria-hidden="true" className="hidden size-8 text-muted-foreground sm:block" />
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <PrincipleCard key={p.number} principle={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="material-topics" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 id="material-topics" className="font-display text-xl font-bold tracking-tight text-foreground">
            Proposed material topics
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            These topics are proposed for review based on OmneVu's publicly described business as a SaaS product
            company. They have not been confirmed through a completed materiality assessment.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {report.proposedMaterialTopics.map((topic) => (
              <li key={topic.title} className="rounded-xl border border-border bg-surface-elevated/50 p-4">
                <p className="font-medium text-foreground">{topic.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{topic.note}</p>
                <p className="mt-3 text-xs italic text-muted-foreground">Status: proposed, pending validation</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
