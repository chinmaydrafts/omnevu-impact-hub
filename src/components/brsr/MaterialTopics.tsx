import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EditorialImage } from "./EditorialImage";
import { report } from "@/data/report";

const ACCENTS = ["#9b4b72", "#1aafc1", "#239a64", "#c39a45", "#1478b8"];

/**
 * Editorial 1 + 4 materiality composition. The lead topic is a full photographic
 * panel; the remaining four are stacked text entries — no empty grid cell.
 */
export function MaterialTopics() {
  const [lead, ...rest] = report.proposedMaterialTopics;

  return (
    <section aria-labelledby="material-topics" className="border-b border-border bg-paper-warm">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="rule-label text-magenta">06 / Materiality</p>
            <h2
              id="material-topics"
              className="mt-4 max-w-[22ch] font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[2.6rem]"
            >
              Five proposed material topics
            </h2>
          </div>
          <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
            Proposed only. These topics have not yet been confirmed through a formal stakeholder materiality
            assessment, and no topic has been ranked or scored.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[46fr_54fr] lg:gap-14">
          {lead ? (
            <article className="relative min-w-0" style={{ ["--accent" as string]: ACCENTS[0] }}>
              <EditorialImage
                image="consumerTrust"
                ratio="5 / 4"
                sizes="(min-width: 1024px) 44vw, 100vw"
                overlay={
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, rgba(8,27,43,0.2) 0%, rgba(8,27,43,0.88) 78%)" }}
                  />
                }
              >
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="rule-label text-[#cfe0ea]">Lead topic</p>
                  <h3 className="mt-2 font-display text-[1.8rem] font-bold leading-tight text-[#f6f7f3]">
                    {lead.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-[#cfe0ea]">{lead.note}</p>
                </div>
              </EditorialImage>
            </article>
          ) : null}

          <ol className="min-w-0 self-center">
            {rest.map((t, i) => (
              <li
                key={t.title}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-t border-border py-6 last:border-b"
                style={{ ["--accent" as string]: ACCENTS[i + 1] }}
              >
                <span className="mt-1 font-display text-[0.8rem] font-semibold tabular-nums text-[color:var(--accent)]">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[1.25rem] font-semibold leading-snug text-foreground">{t.title}</h3>
                  <p className="mt-1.5 text-[0.98rem] leading-relaxed text-muted-foreground">{t.note}</p>
                </div>
              </li>
            ))}
            <li className="pt-7">
              <Link
                to="/brsr/methodology"
                className="group inline-flex items-center gap-2 text-[0.98rem] font-semibold text-primary"
              >
                <span className="link-draw">How these topics were proposed</span>
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-[5px]" />
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
