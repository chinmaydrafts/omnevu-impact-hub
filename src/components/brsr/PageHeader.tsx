import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lead,
  meta,
  accent,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  meta?: ReactNode;
  /** Optional hex accent used for the eyebrow and top rule (principle pages). */
  accent?: string;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div
      className="band-dark relative overflow-hidden border-b border-border"
      style={accent ? ({ ["--accent" as string]: accent } as React.CSSProperties) : undefined}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(48rem 22rem at 12% -20%, rgba(29,135,200,0.30), transparent 70%), radial-gradient(36rem 20rem at 92% 0%, rgba(26,175,196,0.16), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5"
        style={{ background: accent ?? "linear-gradient(90deg,#1d87c8,#1aafc4,#229a62,#ee8a42)" }}
      />
      <div className="relative mx-auto grid max-w-[90rem] gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-8">
        <div className="min-w-0">
          <nav aria-label="Breadcrumb" className="no-print mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              <li>
                <Link to="/brsr" className="hover:text-primary">
                  BRSR Report
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3" />
              </li>
              <li className="text-foreground">{eyebrow}</li>
            </ol>
          </nav>
          <p className="eyebrow" style={{ color: accent ?? "var(--cyan)" }}>
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          ) : null}
          {meta ? <div className="mt-7 flex flex-wrap items-center gap-2.5">{meta}</div> : null}
          {children}
        </div>
        {aside ? <div className="min-w-0 lg:max-w-sm">{aside}</div> : null}
      </div>
    </div>
  );
}
