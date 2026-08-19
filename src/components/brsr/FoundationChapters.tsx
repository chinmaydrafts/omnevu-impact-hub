import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { EditorialImage } from "./EditorialImage";
import type { ImageKey } from "@/data/imageRegistry";

type Chapter = {
  to: "/brsr/assurance" | "/brsr/general-disclosures" | "/brsr/management-process";
  number: string;
  label: string;
  title: string;
  body: string;
  status: string;
  image: ImageKey;
  accent: string;
  /** Editorial stagger offset applied on desktop only. */
  offset: string;
};

const chapters: Chapter[] = [
  {
    to: "/brsr/assurance",
    number: "01",
    label: "Report foundation",
    title: "Assurance and data status",
    body: "How each disclosure is sourced, validated and assured — and exactly what is not yet available.",
    status: "No assurance engagement in place",
    image: "assurance",
    accent: "#1478b8",
    offset: "lg:mt-0",
  },
  {
    to: "/brsr/general-disclosures",
    number: "02",
    label: "Section A",
    title: "General Disclosures",
    body: "Entity details, products and services, operations, employees, holdings, CSR and complaints.",
    status: "Seven disclosure groups · pending validation",
    image: "generalDisclosures",
    accent: "#ed8b43",
    offset: "lg:mt-20",
  },
  {
    to: "/brsr/management-process",
    number: "03",
    label: "Section B",
    title: "Management and Process",
    body: "Policy coverage across all nine principles, with governance, oversight and review records.",
    status: "Policy matrix · mapping in progress",
    image: "managementProcess",
    accent: "#239a64",
    offset: "lg:mt-12",
  },
];

/** Pale-stone chapter directory: three image-led, editorially staggered links. */
export function FoundationChapters() {
  return (
    <section aria-labelledby="report-directory" className="border-b border-border bg-paper-warm">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="rule-label text-primary">02 / Directory</p>
        <h2
          id="report-directory"
          className="mt-4 max-w-[18ch] font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[3rem]"
        >
          The report, in three foundations
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8 lg:pb-20">
          {chapters.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              style={{ ["--accent" as string]: c.accent }}
              className={`group relative block ${c.offset}`}
            >
              <EditorialImage
                image={c.image}
                ratio="4 / 5"
                sizes="(min-width: 1024px) 30vw, 100vw"
                imgClassName="image-zoom"
                className="w-full"
                overlay={
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg, rgba(8,27,43,0.28) 0%, rgba(8,27,43,0.05) 45%)" }}
                    />
                    <span className="absolute left-5 top-5 rule-label rounded-full bg-navy/80 px-3 py-1.5 text-[0.68rem] text-[#f6f7f3]">
                      {c.label}
                    </span>
                  </>
                }
              />

              <div className="relative -mt-12 ml-4 mr-0 bg-surface p-6 shadow-[0_18px_40px_-30px_rgba(11,31,51,0.6)] transition-transform duration-300 group-hover:-translate-y-[6px] sm:-mt-14 sm:ml-6">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-[color:var(--accent)]" />
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="font-display text-[0.8rem] font-semibold tabular-nums text-[color:var(--accent)]">
                      {c.number}
                    </span>
                    <h3 className="mt-1.5 font-display text-[1.5rem] font-semibold leading-snug text-foreground">
                      {c.title}
                    </h3>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-[color:var(--accent)] transition-colors group-hover:border-[color:var(--accent)]">
                    <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
                  </span>
                </div>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">{c.body}</p>
                <p className="mt-4 border-t border-border pt-3 text-[0.85rem] text-muted-foreground">{c.status}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
