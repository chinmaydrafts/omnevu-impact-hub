const lenses = [
  {
    title: "People and capability",
    body: "Engineering skills, working conditions, equitable opportunity and the safety of everyday work.",
  },
  {
    title: "Data, privacy, and trust",
    body: "How customer and end-user information is protected, retained, disclosed and recovered.",
  },
  {
    title: "Infrastructure and environmental footprint",
    body: "Purchased electricity, cloud and hosting choices, hardware lifecycle and electronic waste.",
  },
];

/** Dark statement band: oversized left statement, three responsibility lenses right. */
export function ResponsibleTechnologyBand() {
  return (
    <section aria-labelledby="responsible-tech" className="band-dark relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="grid-texture absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="rule-travel pointer-events-none absolute inset-x-0 top-1/2 h-px bg-cyan/40"
      />
      <div className="relative mx-auto grid max-w-[90rem] gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[52fr_48fr] lg:px-8 lg:py-28">
        <div className="min-w-0">
          <p className="rule-label text-cyan">04 / Responsible technology</p>
          <h2
            id="responsible-tech"
            className="mt-6 max-w-[16ch] font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-[3.1rem]"
          >
            For a software business, responsibility lives in the systems behind the screen.
          </h2>
        </div>

        <dl className="min-w-0 self-end">
          {lenses.map((l, i) => (
            <div key={l.title} className="border-t border-border py-7 last:border-b">
              <dt className="flex items-baseline gap-4">
                <span className="font-display text-[0.8rem] font-semibold tabular-nums text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.35rem] font-semibold leading-snug text-foreground">
                  {l.title}
                </span>
              </dt>
              <dd className="mt-2 max-w-xl pl-9 text-[1rem] leading-relaxed text-muted-foreground">{l.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
