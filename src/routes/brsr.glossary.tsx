import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/brsr/PageHeader";
import { glossary } from "@/lib/glossary";

export const Route = createFileRoute("/brsr/glossary")({
  head: () => ({
    meta: [
      { title: "Glossary of BRSR terms — OmneVu Responsibility Report" },
      {
        name: "description",
        content:
          "Plain-language definitions of the BRSR, NGRBC and assurance terminology used across the OmneVu responsibility report.",
      },
      { property: "og:title", content: "Glossary of BRSR terms — OmneVu" },
      { property: "og:description", content: "Definitions of reporting, assurance and disclosure terminology used in this report." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/brsr/glossary" }],
  }),
  component: GlossaryPage,
});

function GlossaryPage() {
  const [query, setQuery] = useState("");

  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
    return q
      ? list.filter((e) => e.term.toLowerCase().includes(q) || e.definition.toLowerCase().includes(q))
      : list;
  }, [query]);

  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Reference"
        title="Glossary"
        lead="Reporting, assurance and disclosure terminology used throughout this report. Terms marked with a dotted underline in disclosure text show these definitions inline."
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <label className="no-print relative block">
          <span className="sr-only">Search glossary</span>
          <Search aria-hidden="true" className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms, e.g. assurance"
            className="h-12 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-[1rem] text-foreground placeholder:text-muted-foreground"
          />
        </label>

        <dl className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {entries.map((entry) => (
            <div key={entry.term} className="grid gap-2 p-6 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-6">
              <dt className="font-display text-[1.05rem] font-semibold text-foreground">{entry.term}</dt>
              <dd className="text-[0.98rem] leading-relaxed text-muted-foreground">{entry.definition}</dd>
            </div>
          ))}
          {entries.length === 0 ? (
            <p className="p-6 text-[0.98rem] text-muted-foreground">No terms match “{query}”.</p>
          ) : null}
        </dl>
      </div>
    </div>
  );
}
