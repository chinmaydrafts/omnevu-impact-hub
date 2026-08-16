import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lead,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-gradient-to-b from-surface to-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <nav aria-label="Breadcrumb" className="no-print mb-5">
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
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {lead ? <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
        {meta ? <div className="mt-6 flex flex-wrap items-center gap-2">{meta}</div> : null}
        {children}
      </div>
    </div>
  );
}
