import { Fragment, useMemo } from "react";
import { segmentGlossary } from "@/lib/glossary";

/**
 * Renders copy with BRSR terminology annotated. Each term is a native <button>
 * carrying an accessible description, so keyboard and screen-reader users get the
 * same definition as pointer users. Printing keeps the plain text.
 */
export function GlossaryText({ text }: { text: string }) {
  const segments = useMemo(() => segmentGlossary(text), [text]);

  return (
    <>
      {segments.map((seg, i) =>
        seg.entry ? (
          <span key={i} className="group/term relative inline-block">
            <button
              type="button"
              aria-describedby={`glossary-tip-${i}`}
              className="cursor-help border-b border-dotted border-primary/70 font-medium text-foreground focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
            >
              {seg.text}
            </button>
            <span
              id={`glossary-tip-${i}`}
              role="tooltip"
              className="no-print pointer-events-none absolute bottom-full left-0 z-40 mb-2 hidden w-72 rounded-lg border border-border-strong bg-surface p-3 text-left text-[0.85rem] font-normal leading-relaxed text-foreground shadow-xl group-focus-within/term:block group-hover/term:block"
            >
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
                {seg.entry.term}
              </span>
              <span className="mt-1 block text-muted-foreground">{seg.entry.definition}</span>
            </span>
          </span>
        ) : (
          <Fragment key={i}>{seg.text}</Fragment>
        ),
      )}
    </>
  );
}
