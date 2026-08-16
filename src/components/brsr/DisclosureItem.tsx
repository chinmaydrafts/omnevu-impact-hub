import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, FileText, Link2, UserRound } from "lucide-react";
import { DataTable } from "./DataTable";
import { AssuranceBadge, DisclosureStatusBadge, TierBadge } from "./badges";
import type { Disclosure } from "@/data/types";

function EvidenceBlock({ disclosure }: { disclosure: Disclosure }) {
  return (
    <div className="mt-4 grid gap-3 rounded-lg border border-border bg-surface-elevated/50 p-3.5 sm:grid-cols-2">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Evidence</p>
        <ul className="mt-1.5 space-y-1.5">
          {disclosure.evidence.length === 0 ? (
            <li className="text-sm italic text-muted-foreground">No evidence record supplied.</li>
          ) : (
            disclosure.evidence.map((item) => (
              <li key={item.id} className="flex items-start gap-2 text-sm text-foreground">
                <FileText aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                <span className="min-w-0">
                  {item.href ? (
                    <a href={item.href} className="underline underline-offset-2 hover:text-primary">
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
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-sm">
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
      className="scroll-mt-28 rounded-xl border border-border bg-surface transition-colors target:border-primary/70"
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
              <span className="rounded-md border border-border bg-surface-elevated px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground">
                {disclosure.number}
              </span>
              <DisclosureStatusBadge status={disclosure.status} />
              {disclosure.tier ? <TierBadge tier={disclosure.tier} /> : null}
            </span>
            <span className="mt-2 block font-display text-base font-semibold leading-snug text-foreground group-hover:text-primary sm:text-[1.05rem]">
              {disclosure.title}
            </span>
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`mt-1 size-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        <button
          type="button"
          onClick={copyLink}
          aria-label={`Copy link to disclosure ${disclosure.number}`}
          className="no-print mt-1 shrink-0 rounded-md border border-border p-1.5 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
        >
          {copied ? <Check aria-hidden="true" className="size-4 text-green" /> : <Link2 aria-hidden="true" className="size-4" />}
        </button>
      </div>

      <div id={`${disclosure.id}-panel`} hidden={!open} className="border-t border-border px-4 pb-5 pt-4 sm:px-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{disclosure.question}</p>

        {disclosure.applicabilityReason ? (
          <p className="mt-3 rounded-lg border border-cyan/30 bg-cyan/8 p-3 text-sm leading-relaxed text-foreground">
            <span className="font-semibold text-cyan">Applicability note. </span>
            {disclosure.applicabilityReason}
          </p>
        ) : null}

        {disclosure.narrative ? (
          <p className="mt-3 text-sm leading-relaxed text-foreground">{disclosure.narrative}</p>
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
          <div className="mt-3 rounded-lg border border-dashed border-border bg-surface-elevated/40 p-4">
            <p className="text-sm font-medium text-foreground">Data pending company validation</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {disclosure.emptyStateHint ??
                "This disclosure will be completed once the company supplies validated records and a nominated data owner signs off."}
            </p>
          </div>
        ) : null}

        {disclosure.methodology ? (
          <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <UserRound aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
            <span>{disclosure.methodology}</span>
          </p>
        ) : null}

        <EvidenceBlock disclosure={disclosure} />
      </div>
    </div>
  );
}
