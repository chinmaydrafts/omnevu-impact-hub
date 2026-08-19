import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EditorialImage } from "./EditorialImage";
import { ReportCover } from "./ReportCover";
import { report } from "@/data/report";

/**
 * Full-bleed photographic report cover. Typography is the primary element:
 * the title occupies roughly half the desktop width, and the following light
 * section stays partly visible at the bottom of the first viewport.
 */
export function EditorialHero() {
  return (
    <section className="band-dark relative isolate overflow-hidden">
      <EditorialImage
        image="hero"
        priority
        decorative
        sizes="100vw"
        className="absolute inset-0 -z-10 size-full"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(96deg, rgba(4,18,30,0.96) 0%, rgba(8,27,43,0.9) 42%, rgba(8,27,43,0.42) 72%, rgba(8,27,43,0.28) 100%)",
        }}
      />
      <div aria-hidden="true" className="grid-texture absolute inset-0 -z-10 opacity-50" />

      <div className="relative mx-auto flex min-h-[78svh] max-w-[90rem] flex-col justify-between gap-12 px-4 pb-10 pt-14 sm:px-6 lg:min-h-[84svh] lg:px-8 lg:pb-12 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-center">
          <div className="min-w-0">
            <p className="rule-label text-cyan">{report.reportingYearLabel}</p>
            <p className="rule-label mt-1.5 text-muted-foreground">BRSR-aligned voluntary disclosure</p>
            <h1 className="mt-6 max-w-[13ch] font-display text-[2.7rem] font-bold leading-[0.98] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[4.5rem]">
              Business
              <br />
              Responsibility
              <br />
              and Sustainability
              <br />
              Report
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
              {report.legalEntity}, operating as {report.brand}, published as a structured disclosure rather than a
              brochure. Every indicator states its data owner, evidence and validation state.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/brsr/general-disclosures"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-[0.95rem] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Explore report
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-[5px]" />
              </Link>
              <Link
                to="/brsr/methodology"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong px-6 text-[0.95rem] font-semibold text-foreground transition-colors hover:border-primary"
              >
                How this report is built
              </Link>
            </div>
          </div>

          <div className="hidden min-w-0 justify-end lg:flex" aria-hidden="true">
            <ReportCover subtle />
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6">
          <p className="flex items-center gap-2.5 text-[0.9rem] text-muted-foreground">
            <span className="size-2 rounded-full bg-status-orange" aria-hidden="true" />
            Pending company validation — no figure is published before it is verified.
          </p>
          <p className="hidden items-center gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex">
            Scroll to explore
            <span aria-hidden="true" className="hero-scroll-rule block h-10 w-px bg-current opacity-60" />
          </p>
        </div>
      </div>
    </section>
  );
}
