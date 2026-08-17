import { useEffect, useRef, useState } from "react";
import { Check, FileText, Link2, Minus, Plus } from "lucide-react";
import { DataTable } from "./DataTable";
import { AssuranceBadge, DisclosureStatusBadge, TierBadge } from "./badges";
import type { Disclosure } from "@/data/types";

function EvidenceRail({ disclosure }: { disclosure: Disclosure }) {
  return (
    <div className="mt-5 grid gap-4 rounded-xl border border-[#cfe0ea] bg-tint-blue p-4 sm:grid-cols-2">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Evidence</p>
        <ul className="mt-2 space-y-1.5">
          {disclosure.evidence.length === 0 ? (
            <li className="text-[0.95rem] italic text-muted-foreground">No evidence record supplied.</li>
          ) : (
            disclosure.evidence.map((item) => (
              <li key={item.id} className="flex items-start gap-2 text-[0.95rem] text-foreground">
                <FileText aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-muted-foreground" />
                <span className="min-w-0">
                  {item.href ? (
                    <a href={item.href} className="text-primary underline underline-offset-2 hover:text-primary-hover">
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 text-[0.95rem]">
        <dt className="text-muted-foreground">Data owner</dt>
        <dd className="min-w-0 text-foreground">{disclosure.dataOwner ?? "Pending nomination"}</dd>
        <dt className="text-muted-foreground">Last validated</dt>
        <dd className="min-w-0 text-foreground">{disclosure.lastUpdated ?? "Not yet validated"}</dd>
        <dt className="text-muted-foreground">Assurance</dt>
        <dd className="min-w-0">
          <AssuranceBadge assurance={disclosure.assurance} />
        </dd>
      </dl>
    </div>
  );
}

export function DisclosureItem({
  disclosure,
  contextLabel,
  defaultOpen = false,
}: {
  disclosure: Disclosure;
  contextLabel: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const applyHash = () => {
      if (window.location.hash.slice(1) === disclosure.id) {
        setOpen(true);
        window.requestAnimationFrame(() => {
          ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [disclosure.id]);

  const copyLink = async () => {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}${window.location.pathname}#${disclosure.id}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.location.hash = disclosure.id;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const tables = disclosure.tables ?? (disclosure.table ? [disclosure.table] : []);

  return (
    <div
      ref={ref}
      id={disclosure.id}
      data-print-expand
      className={`scroll-mt-28 overflow-hidden rounded-xl border bg-surface shadow-[0_1px_2px_rgba(18,35,50,0.04)] transition-colors target:border-primary ${
        open ? "border-[#b6cddb]" : "border-border"
      }`}
    >
      <div className="flex items-start gap-2 p-4 sm:p-5">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${disclosure.id}-panel`}
          onClick={() => setOpen((v) => !v)}
          className="group grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-start gap-3 text-left"
        >
          <span className="min-w-0">
            <span className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-border bg-surface-subtle px-2 py-0.5 text-[0.75rem] font-semibold tabular-nums text-primary">
                {disclosure.number}
              </span>
              <DisclosureStatusBadge status={disclosure.status} />
              {disclosure.tier ? <TierBadge tier={disclosure.tier} /> : null}
            </span>
            <span className="mt-2.5 block font-display text-[1.1rem] font-semibold leading-snug text-foreground group-hover:text-primary">
              {disclosure.title}
            </span>
            {!open ? (
              <span className="mt-1.5 line-clamp-2 block text-[0.95rem] leading-relaxed text-muted-foreground">
                {disclosure.question}
              </span>
            ) : null}
          </span>
          <span
            aria-hidden="true"
            className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-tint-blue"
          >
            {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
          </span>
        </button>
        <button
          type="button"
          onClick={copyLink}
          aria-label={`Copy link to disclosure ${disclosure.number}`}
          className="no-print mt-1 shrink-0 rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {copied ? <Check aria-hidden="true" className="size-4 text-status-green" /> : <Link2 aria-hidden="true" className="size-4" />}
        </button>
      </div>

      <div
        id={`${disclosure.id}-panel`}
        hidden={!open}
        className="border-t border-border bg-[#fcfdfe] px-4 pb-6 pt-5 sm:px-6"
      >
        <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{disclosure.question}</p>

        {disclosure.applicabilityReason ? (
          <p className="mt-4 rounded-xl border border-[#cfe0ea] bg-tint-blue p-4 text-[0.95rem] leading-relaxed text-foreground">
            <span className="font-semibold text-primary">Applicability note. </span>
            {disclosure.applicabilityReason}
          </p>
        ) : null}

        {disclosure.narrative ? (
          <p className="mt-4 text-[1rem] leading-relaxed text-foreground">{disclosure.narrative}</p>
        ) : null}

        {tables.map((table, i) => (
          <DataTable
            key={i}
            table={table}
            exportName={`omnevu-brsr-${disclosure.number}-${table.caption ?? "table"}`}
            exportMeta={[
              `OmneVu BRSR-aligned disclosure ${disclosure.number} — ${disclosure.title}`,
              `Context: ${contextLabel}`,
              "Status: data pending company validation. Blank or 'Pending' cells are not zero values.",
            ]}
          />
        ))}

        {!disclosure.narrative && tables.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-border-strong bg-surface p-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-status-orange/40 bg-status-orange/10 px-2.5 py-1 text-[0.78rem] font-medium text-status-orange">
              <span aria-hidden="true" className="size-2 rounded-full bg-status-orange" />
              Awaiting validated data
            </span>
            <p className="mt-3 font-display text-base font-semibold text-foreground">Data pending company validation</p>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">
              {disclosure.emptyStateHint ??
                "This disclosure will be completed once the company supplies validated records and a nominated data owner signs off."}
            </p>
          </div>
        ) : null}

        {disclosure.methodology ? (
          <p className="mt-4 rounded-lg border border-border bg-surface-elevated p-3 text-[0.85rem] leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Methodology. </span>
            {disclosure.methodology}
          </p>
        ) : null}

        <EvidenceRail disclosure={disclosure} />
      </div>
    </div>
  );
}
