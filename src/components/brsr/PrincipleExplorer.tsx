import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EditorialImage } from "./EditorialImage";
import { PrincipleStage } from "./PrincipleStage";
import { getAccent } from "./accents";
import { PRINCIPLE_IMAGE } from "@/data/imageRegistry";
import { PRINCIPLES } from "@/data/report";

/**
 * Signature interaction: desktop sticky scrollytelling across P1-P9, mobile
 * horizontal snap carousel. Uses the existing PRINCIPLES data only; nothing
 * about disclosure state is duplicated or invented here.
 */
export function PrincipleExplorer() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = Number((visible.target as HTMLElement).dataset["index"]);
        if (!Number.isNaN(idx)) setActive(idx);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const current = PRINCIPLES[active] ?? PRINCIPLES[0]!;

  return (
    <section aria-labelledby="principle-explorer" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[90rem] px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <p className="rule-label text-green">03 / Section C</p>
        <h2
          id="principle-explorer"
          className="mt-4 max-w-[20ch] font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[3rem]"
        >
          Nine principles, read one at a time
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
          Each principle page presents Essential and Leadership indicators with evidence, data ownership and assurance
          status.
        </p>
      </div>

      {/* Desktop: sticky stage + scrolling list */}
      <div className="mx-auto hidden max-w-[90rem] gap-14 px-4 pb-24 pt-12 sm:px-6 lg:grid lg:grid-cols-[48fr_52fr] lg:px-8">
        <div className="min-w-0">
          <div className="sticky top-28">
            <PrincipleStage principle={current} index={active} total={PRINCIPLES.length} />
          </div>
        </div>

        <ol className="relative min-w-0 border-l border-border">
          {PRINCIPLES.map((p, i) => {
            const accent = getAccent(p.number);
            const isActive = i === active;
            return (
              <li
                key={p.number}
                data-index={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                style={{ ["--accent" as string]: accent.color }}
                className="relative flex min-h-[150px] flex-col justify-center py-7 pl-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-px top-0 h-full w-[2px] transition-opacity duration-300"
                  style={{ background: accent.color, opacity: isActive ? 1 : 0 }}
                />
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className="group text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span
                      className="font-display text-[0.85rem] font-semibold tabular-nums"
                      style={{ color: isActive ? accent.color : undefined }}
                    >
                      P{p.number}
                    </span>
                    <span
                      className={`font-display text-[1.45rem] font-semibold leading-snug transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {p.title}
                    </span>
                  </span>
                </button>

                <div className={isActive ? "mt-3 max-w-xl" : "sr-only"}>
                  <p className="text-[1rem] leading-relaxed text-muted-foreground">{p.summary}</p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.85rem] text-muted-foreground">
                    <span>{p.essentialCount} essential indicators</span>
                    <span>{p.leadershipCount} leadership indicators</span>
                    <span className="inline-flex items-center gap-1.5">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-status-orange" />
                      Pending validation
                    </span>
                  </p>
                  <Link
                    to="/brsr/principle/$id"
                    params={{ id: String(p.number) }}
                    className="group/link mt-4 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[color:var(--accent)]"
                  >
                    <span className="link-draw">Explore principle {p.number}</span>
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover/link:translate-x-[5px]" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: horizontal snap carousel */}
      <div className="lg:hidden">
        <ul
          className="snap-row mt-10 flex gap-4 overflow-x-auto px-4 pb-14 sm:px-6"
          aria-label="Principles 1 to 9"
        >
          {PRINCIPLES.map((p, i) => {
            const accent = getAccent(p.number);
            return (
              <li
                key={p.number}
                className="snap-item w-[82%] shrink-0"
                style={{ ["--accent" as string]: accent.color }}
              >
                <Link to="/brsr/principle/$id" params={{ id: String(p.number) }} className="group block h-full">
                  <EditorialImage
                    image={PRINCIPLE_IMAGE[p.number] ?? "atmosphere"}
                    ratio="4 / 3"
                    sizes="82vw"
                    imgClassName="image-zoom"
                    overlay={
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(180deg, rgba(8,27,43,0.15), rgba(8,27,43,0.6))` }}
                      />
                    }
                  />
                  <div className="border-t-2 bg-surface p-5" style={{ borderTopColor: accent.color }}>
                    <p className="rule-label tabular-nums text-[color:var(--accent)]">
                      {String(i + 1).padStart(2, "0")} / 09
                    </p>
                    <p className="mt-2 font-display text-[1.25rem] font-semibold leading-snug text-foreground">
                      {p.title}
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{p.shortSummary}</p>
                    <p className="mt-3 text-[0.85rem] text-muted-foreground">
                      {p.essentialCount} essential · {p.leadershipCount} leadership · Pending validation
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
