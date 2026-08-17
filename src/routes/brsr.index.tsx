import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Network, ShieldCheck } from "lucide-react";
import { PrincipleCard } from "@/components/brsr/PrincipleCard";
import { ReportCover } from "@/components/brsr/ReportCover";
import { SectionArt } from "@/components/brsr/SectionArt";
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
    icon: ShieldCheck,
    label: "Report foundation",
    title: "Assurance and data status",
    body: "How each disclosure is sourced, validated and assured — and exactly what is not yet available.",
    color: "#1268a8",
    tint: "#eaf3f8",
    art: "shield" as const,
    status: "No assurance engagement in place",
    alt: "Documentation and verification — abstract illustration",
  },
  {
    to: "/brsr/general-disclosures" as const,
    icon: Building2,
    label: "Section A",
    title: "General Disclosures",
    body: "Entity details, products and services, operations, employees, holdings, CSR and complaints.",
    color: "#ee8a42",
    tint: "#fff1e6",
    art: "grid" as const,
    status: "Seven disclosure groups · pending validation",
    alt: "Organisation, operations and products — abstract illustration",
  },
  {
    to: "/brsr/management-process" as const,
    icon: Network,
    label: "Section B",
    title: "Management and Process Disclosures",
    body: "Policy coverage across all nine principles, with governance, oversight and review records.",
    color: "#229a62",
    tint: "#eaf5ee",
    art: "mesh" as const,
    status: "Policy matrix · mapping in progress",
    alt: "Interconnected governance and policy oversight — abstract illustration",
  },
];

const metaBlocks = [
  { label: "Entity", value: report.legalEntity, note: `Operating as ${report.brand}` },
  { label: "Reporting approach", value: report.basis, note: report.reportingYearLabel },
  { label: "Boundary", value: report.boundary, note: "To be confirmed with the company" },
  { label: "Assurance", value: "Not supplied", note: "No engagement appointed for this edition" },
];

function ReportHome() {
  return (
    <div>
      {/* Report cover */}
      <section className="band-dark relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50rem 26rem at 8% -10%, rgba(29,135,200,0.34), transparent 68%), radial-gradient(38rem 24rem at 95% 10%, rgba(26,175,196,0.16), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[90rem] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[55fr_45fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="eyebrow text-cyan">{report.reportingYearLabel} · BRSR-aligned voluntary disclosure</p>
            <h1 className="mt-4 max-w-[16ch] font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
              Business Responsibility and Sustainability Report
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {report.legalEntity}, operating as {report.brand}. {report.entityDescription} This report organises
              responsibility disclosures in the BRSR structure so validated company data can be published as it is
              confirmed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/brsr/general-disclosures"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-[0.95rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Explore the report
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                to="/brsr/methodology"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-6 text-[0.95rem] font-semibold text-foreground transition-colors hover:border-primary"
              >
                How this report is built
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <DisclosureStatusBadge status="pending-validation" />
              <span className="text-[0.95rem] text-muted-foreground">{report.notice}</span>
            </div>
          </div>

          <div className="min-w-0 order-last">
            <ReportCover />
          </div>
        </div>
      </section>

      {/* Editorial introduction */}
      <section aria-labelledby="intro" className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="eyebrow text-primary">Introduction</p>
            <h2 id="intro" className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-[2.5rem]">
              A structured view of responsible business
            </h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
              OmneVu builds SaaS products for B2B and B2C customers. Responsibility for a software business shows up
              in governance and integrity, the wellbeing and capability of the people who build the products, the
              energy behind the infrastructure that runs them, and the trust customers place in how their data is
              handled.
            </p>
            <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
              This microsite follows the BRSR structure used in Indian corporate reporting: general disclosures,
              management and process disclosures, and principle-wise performance across the nine NGRBC principles.
              Where a figure has not yet been validated by the company, the report says so rather than publishing an
              estimate or a zero.
            </p>
          </div>
          <dl className="grid min-w-0 gap-0 self-start border-t border-border">
            {metaBlocks.map((m) => (
              <div key={m.label} className="grid gap-1 border-b border-border py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
                <dt className="text-[0.8rem] font-semibold uppercase tracking-wide text-muted-foreground">{m.label}</dt>
                <dd className="min-w-0">
                  <span className="block font-display text-lg font-semibold text-foreground">{m.value}</span>
                  <span className="mt-0.5 block text-[0.9rem] text-muted-foreground">{m.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Report directory */}
      <section aria-labelledby="report-directory" className="border-b border-border bg-paper-warm">
        <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="eyebrow text-primary">Directory</p>
          <h2 id="report-directory" className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-[2.5rem]">
            Start with the report foundation
          </h2>
          <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            Three foundation documents, followed by the nine NGRBC principles that make up Section C.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {primaryCards.map((card) => (
              <Link
                key={card.to}
                to={card.to}
                style={{ ["--accent" as string]: card.color }}
                className="card-lift group flex flex-col overflow-hidden rounded-xl border border-border bg-surface hover:border-[color:var(--accent)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <SectionArt
                    variant={card.art}
                    color={card.color}
                    tint={card.tint}
                    className="size-full transition-transform duration-500 group-hover:scale-[1.03]"
                    label={card.alt}
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-surface/90 px-3 py-1 text-[0.75rem] font-semibold text-[color:var(--accent)] shadow-sm">
                    <card.icon aria-hidden="true" className="size-3.5" />
                    {card.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-[1.5rem] font-semibold leading-snug text-foreground group-hover:text-[color:var(--accent)]">
                    {card.title}
                  </h3>
                  <p className="flex-1 text-[1rem] leading-relaxed text-muted-foreground">{card.body}</p>
                  <p className="text-[0.85rem] text-muted-foreground">{card.status}</p>
                  <span className="mt-1 inline-flex items-center gap-2 border-t border-border pt-4 text-[0.95rem] font-semibold text-[color:var(--accent)]">
                    Explore section
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                <div aria-hidden="true" className="h-1 w-full bg-[color:var(--accent)]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principle directory */}
      <section aria-labelledby="principles" className="border-b border-border bg-background">
        <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="eyebrow text-green">Section C</p>
          <h2 id="principles" className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-[2.5rem]">
            Principle-wise performance
          </h2>
          <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            Each principle page presents Essential and Leadership indicators with evidence, data ownership and
            assurance status.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <PrincipleCard key={p.number} principle={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Dark methodology callout */}
      <section aria-labelledby="how-built" className="band-dark border-b border-border">
        <div className="mx-auto grid max-w-[90rem] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:px-8">
          <div className="min-w-0">
            <p className="eyebrow text-cyan">Reporting discipline</p>
            <h2 id="how-built" className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-[2.25rem]">
              No number is published before it is validated
            </h2>
            <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
              Every indicator carries a data owner, an evidence record and an assurance state. Unknown values are
              shown as pending — never rendered as zero, an estimate or a placeholder trend.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/brsr/methodology"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-[0.95rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Methodology
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              to="/brsr/downloads"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-6 text-[0.95rem] font-semibold text-foreground transition-colors hover:border-primary"
            >
              Downloads and exports
            </Link>
          </div>
        </div>
      </section>

      {/* Material topics */}
      <section aria-labelledby="material-topics" className="bg-surface">
        <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="eyebrow text-orange">Materiality</p>
          <h2 id="material-topics" className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-[2.25rem]">
            Proposed material topics
          </h2>
          <p className="mt-3 max-w-3xl text-[1.05rem] leading-relaxed text-muted-foreground">
            These topics are proposed for review based on OmneVu's publicly described business as a SaaS product
            company. They have not been confirmed through a completed materiality assessment.
          </p>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {report.proposedMaterialTopics.map((topic, i) => (
              <li key={topic.title} className="bg-surface p-6">
                <span className="text-[0.8rem] font-semibold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-[1.2rem] font-semibold text-foreground">{topic.title}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{topic.note}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <span aria-hidden="true" className="size-2 rounded-full bg-status-orange" />
                  Proposed, pending validation
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
