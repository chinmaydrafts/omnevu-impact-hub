import { useEffect, useRef, useState } from "react";
import { DisclosureList } from "./DisclosureList";
import type { Disclosure } from "@/data/types";

type TabId = "essential" | "leadership";

/**
 * Essential / Leadership indicator tabs for a principle page.
 *
 * Both panels stay mounted so deep links, Expand All, search results, CSV export
 * and print continue to work; the inactive panel is visually hidden on screen and
 * always shown when printing.
 */
export function IndicatorTabs({
  principleNumber,
  essential,
  leadership,
}: {
  principleNumber: number;
  essential: Disclosure[];
  leadership: Disclosure[];
}) {
  const [active, setActive] = useState<TabId>("essential");
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ essential: null, leadership: null });

  // Activate whichever tab owns the deep-linked disclosure.
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      if (hash === "leadership" || leadership.some((d) => d.id === hash)) setActive("leadership");
      else if (hash === "essential" || essential.some((d) => d.id === hash)) setActive("essential");
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [essential, leadership]);

  const tabs: Array<{ id: TabId; label: string; count: number }> = [
    { id: "essential", label: "Essential indicators", count: essential.length },
    { id: "leadership", label: "Leadership indicators", count: leadership.length },
  ];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next: TabId = active === "essential" ? "leadership" : "essential";
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section aria-labelledby="indicators" className="scroll-mt-24" id="indicators">
      <h2 id="indicators" className="sr-only">
        Principle {principleNumber} indicators
      </h2>

      <div
        role="tablist"
        aria-label="Indicator type"
        onKeyDown={onKeyDown}
        className="no-print flex flex-wrap gap-1 border-b border-border"
      >
        {tabs.map((t) => {
          const selected = active === t.id;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[t.id] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.id)}
              className={`-mb-px inline-flex items-center gap-2.5 border-b-2 px-4 py-3 font-display text-[1rem] font-semibold transition-colors ${
                selected
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              <span
                className={`rounded-full px-2 py-0.5 text-[0.75rem] font-semibold tabular-nums ${
                  selected ? "bg-primary text-primary-foreground" : "bg-surface-elevated text-muted-foreground"
                }`}
              >
                {t.count}
              </span>
            </button>
          );
        })}
      </div>

      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          className={active === t.id ? "mt-6" : "hidden print:mt-6 print:block"}
        >
          <h3 className="mb-4 hidden font-display text-xl font-bold text-foreground print:block">{t.label}</h3>
          <div id={t.id} className="scroll-mt-24">
            <DisclosureList
              disclosures={t.id === "essential" ? essential : leadership}
              contextLabel={`Principle ${principleNumber} · ${t.id === "essential" ? "Essential" : "Leadership"}`}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
