import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EditorialHero } from "@/components/brsr/EditorialHero";
import { ReportIntroduction } from "@/components/brsr/ReportIntroduction";
import { FoundationChapters } from "@/components/brsr/FoundationChapters";
import { PrincipleExplorer } from "@/components/brsr/PrincipleExplorer";
import { ResponsibleTechnologyBand } from "@/components/brsr/ResponsibleTechnologyBand";
import { ReportingTimeline } from "@/components/brsr/ReportingTimeline";
import { MaterialTopics } from "@/components/brsr/MaterialTopics";
import { report } from "@/data/report";

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

function ReportHome() {
  return (
    <div className="page-enter">
      <h1 className="sr-only">
        {report.brand} Business Responsibility and Sustainability Report, {report.reportingYearLabel}
      </h1>

      <EditorialHero />
      <ReportIntroduction />
      <FoundationChapters />
      <PrincipleExplorer />
      <ResponsibleTechnologyBand />
      <ReportingTimeline />
      <MaterialTopics />

      <section aria-labelledby="data-status" className="bg-surface">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[45fr_55fr] lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="rule-label text-primary">07 / Data status</p>
            <h2
              id="data-status"
              className="mt-4 max-w-[20ch] font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[2.4rem]"
            >
              What is missing, and why it is shown that way
            </h2>
          </div>
          <div className="min-w-0 self-end">
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
              {report.notice} Quantitative disclosures appear as “Pending company validation” rather than as zeros or
              estimates, so nothing in this report can be mistaken for a verified figure. Each disclosure records its
              data owner, calculation basis, evidence and assurance state.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/brsr/methodology"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-[0.95rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Methodology and definitions
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-[4px]" />
              </Link>
              <Link
                to="/brsr/downloads"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-[0.95rem] font-semibold text-foreground transition-colors hover:border-primary"
              >
                Downloads and data exports
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
