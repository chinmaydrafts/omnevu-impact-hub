const stages = [
  {
    n: "01",
    title: "Collect",
    owner: "Owner: to be nominated",
    status: "Not started",
    body: "Source records are requested from the responsible function with the reporting period and boundary stated.",
    color: "#1478b8",
  },
  {
    n: "02",
    title: "Validate",
    owner: "Owner: to be nominated",
    status: "Pending",
    body: "Figures are reconciled to evidence, checked for completeness and marked with a calculation basis.",
    color: "#1aafc1",
  },
  {
    n: "03",
    title: "Approve",
    owner: "Owner: to be nominated",
    status: "Pending",
    body: "A named approver signs off each disclosure before it changes state from pending to reported.",
    color: "#239a64",
  },
  {
    n: "04",
    title: "Publish",
    owner: "Owner: to be nominated",
    status: "Pending",
    body: "Approved disclosures are released to this report with their evidence and assurance state attached.",
    color: "#ed8b43",
  },
];

/** Four-stage editorial timeline — horizontal on desktop, vertical on mobile. */
export function ReportingTimeline() {
  return (
    <section aria-labelledby="reporting-workflow" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="rule-label text-primary">05 / Reporting workflow</p>
        <h2
          id="reporting-workflow"
          className="mt-4 max-w-[20ch] font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[2.6rem]"
        >
          No number is published before it is validated
        </h2>

        <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          <li aria-hidden="true" className="absolute left-[7px] top-2 hidden h-full w-px bg-border md:left-0 md:top-[46px] md:h-px md:w-full md:block" />
          {stages.map((s) => (
            <li key={s.n} className="relative pl-8 md:pl-0" style={{ ["--accent" as string]: s.color }}>
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 bg-surface md:left-0 md:top-[39px]"
                style={{ borderColor: s.color }}
              />
              <p className="font-display text-[2.6rem] font-bold leading-none tabular-nums text-foreground/12 md:text-[3.2rem]" style={{ color: `${s.color}33` }}>
                {s.n}
              </p>
              <div className="md:pt-8">
                <h3 className="font-display text-[1.3rem] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 max-w-xs text-[0.98rem] leading-relaxed text-muted-foreground">{s.body}</p>
                <p className="mt-3 text-[0.82rem] text-muted-foreground">{s.owner}</p>
                <p className="mt-1 inline-flex items-center gap-2 text-[0.82rem] text-muted-foreground">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-status-orange" />
                  {s.status}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
