import { report } from "@/data/report";

const metaRows = [
  { label: "Entity", value: report.legalEntity, note: `Operating as ${report.brand}` },
  { label: "Reporting approach", value: report.basis, note: report.reportingYearLabel },
  { label: "Boundary", value: report.boundary, note: "To be confirmed with the company" },
  { label: "Assurance", value: "Not supplied", note: "No engagement appointed for this edition" },
];

/** White editorial introduction: pull quote left, prose and metadata rules right. */
export function ReportIntroduction() {
  return (
    <section aria-labelledby="intro" className="relative border-b border-border bg-surface">
      <p
        aria-hidden="true"
        className="caption-vertical absolute left-2 top-24 hidden text-muted-foreground xl:block"
      >
        OmneVu responsible business
      </p>
      <div className="mx-auto grid max-w-[90rem] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[35fr_55fr] lg:gap-20 lg:px-8 lg:py-24">
        <div className="min-w-0">
          <p className="rule-label text-primary">01 / About this disclosure</p>
          <blockquote
            id="intro"
            className="mt-6 border-l-2 border-primary pl-5 font-display text-[1.6rem] font-semibold leading-[1.25] tracking-tight text-foreground sm:text-[2rem]"
          >
            Accountability becomes useful when information is structured, traceable, and open to scrutiny.
          </blockquote>
        </div>

        <div className="min-w-0">
          <p className="max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            OmneVu builds SaaS products for B2B and B2C customers. For a software business, responsibility shows up in
            governance and integrity, in the capability and wellbeing of the people who build the products, in the
            energy behind the infrastructure that runs them, and in the trust customers place in how their data is
            handled.
          </p>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            This report follows the BRSR structure used in Indian corporate reporting: general disclosures, management
            and process disclosures, and principle-wise performance across the nine NGRBC principles. Where a figure
            has not been validated by the company, the report says so rather than publishing an estimate or a zero.
          </p>

          <dl className="mt-10 border-t border-border">
            {metaRows.map((m) => (
              <div
                key={m.label}
                className="grid gap-1 border-b border-border py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="rule-label text-muted-foreground">{m.label}</dt>
                <dd className="min-w-0">
                  <span className="block font-display text-[1.05rem] font-semibold text-foreground">{m.value}</span>
                  <span className="mt-0.5 block text-[0.9rem] text-muted-foreground">{m.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
