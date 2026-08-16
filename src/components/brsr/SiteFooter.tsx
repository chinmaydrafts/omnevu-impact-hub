import { Link } from "@tanstack/react-router";
import { OmneVuLogo } from "./OmneVuLogo";
import { PRINCIPLES, report } from "@/data/report";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="min-w-0">
          <OmneVuLogo />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {report.legalEntity}, operating as {report.brand}. This microsite presents a BRSR-aligned voluntary
            disclosure structure. It is not an official regulatory filing.
          </p>
          <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
            <p>{report.registeredOffice}</p>
            <p>
              <a className="underline underline-offset-2 hover:text-primary" href={`mailto:${report.email}`}>
                {report.email}
              </a>
            </p>
            <p>
              <a className="underline underline-offset-2 hover:text-primary" href={report.website} rel="noreferrer">
                {report.website}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Report sections" className="min-w-0">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground">Report</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/brsr" className="hover:text-primary">Overview</Link></li>
            <li><Link to="/brsr/assurance" className="hover:text-primary">Assurance and data status</Link></li>
            <li><Link to="/brsr/general-disclosures" className="hover:text-primary">Section A</Link></li>
            <li><Link to="/brsr/management-process" className="hover:text-primary">Section B</Link></li>
            <li><Link to="/brsr/methodology" className="hover:text-primary">Methodology</Link></li>
            <li><Link to="/brsr/downloads" className="hover:text-primary">Downloads</Link></li>
          </ul>
        </nav>

        <nav aria-label="Principles 1 to 5" className="min-w-0">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground">Principles 1–5</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {PRINCIPLES.slice(0, 5).map((p) => (
              <li key={p.number}>
                <Link to="/brsr/principle/$id" params={{ id: String(p.number) }} className="hover:text-primary">
                  P{p.number}. {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Principles 6 to 9" className="min-w-0">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground">Principles 6–9</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {PRINCIPLES.slice(5).map((p) => (
              <li key={p.number}>
                <Link to="/brsr/principle/$id" params={{ id: String(p.number) }} className="hover:text-primary">
                  P{p.number}. {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {report.legalEntity}. All rights reserved.</p>
          <p>{report.notice}</p>
        </div>
      </div>
    </footer>
  );
}
