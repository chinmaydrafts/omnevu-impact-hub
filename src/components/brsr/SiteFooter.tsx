import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { OmneVuLogo } from "./OmneVuLogo";
import { PRINCIPLES, report } from "@/data/report";

export function SiteFooter() {
  return (
    <>
      <div className="border-t border-border bg-surface-subtle">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
            Every indicator in this report moves out of pending status only when the company supplies validated
            records, a nominated data owner and an evidence trail.
          </p>
          <Link
            to="/brsr/methodology"
            className="shrink-0 text-[0.95rem] font-semibold text-primary underline underline-offset-4"
          >
            Read the methodology
          </Link>
        </div>
      </div>

      <footer data-site-footer className="band-dark border-t border-border">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
          <div className="min-w-0">
            <OmneVuLogo size={32} />
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              {report.legalEntity}, operating as {report.brand}. A BRSR-aligned voluntary disclosure structure built
              so responsible-business information can be published as it is verified. It is not an official
              regulatory filing.
            </p>
            <address className="mt-5 space-y-1 text-[0.95rem] not-italic text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">Registered office</p>
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
            <ul className="mt-3 space-y-2 text-[0.95rem] text-muted-foreground">
              <li><Link to="/brsr" className="hover:text-primary">Overview</Link></li>
              <li><Link to="/brsr/assurance" className="hover:text-primary">Assurance and data status</Link></li>
              <li><Link to="/brsr/general-disclosures" className="hover:text-primary">Section A</Link></li>
              <li><Link to="/brsr/management-process" className="hover:text-primary">Section B</Link></li>
              <li><Link to="/brsr/methodology" className="hover:text-primary">Methodology</Link></li>
              <li><Link to="/brsr/downloads" className="hover:text-primary">Downloads</Link></li>
              <li><Link to="/brsr/executive-summary" className="hover:text-primary">Executive summary</Link></li>
              <li><Link to="/brsr/glossary" className="hover:text-primary">Glossary</Link></li>
              <li><Link to="/brsr/bookmarks" className="hover:text-primary">Saved disclosures</Link></li>
            </ul>
          </nav>

          <nav aria-label="Principles 1 to 5" className="min-w-0">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground">Principles 1–5</h2>
            <ul className="mt-3 space-y-2 text-[0.95rem] text-muted-foreground">
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
            <ul className="mt-3 space-y-2 text-[0.95rem] text-muted-foreground">
              {PRINCIPLES.slice(5).map((p) => (
                <li key={p.number}>
                  <Link to="/brsr/principle/$id" params={{ id: String(p.number) }} className="hover:text-primary">
                    P{p.number}. {p.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-6 text-xs font-semibold uppercase tracking-wide text-foreground">Legal</h2>
            <ul className="mt-3 space-y-2 text-[0.95rem] text-muted-foreground">
              <li>
                <a href={report.privacyUrl} rel="noreferrer" className="hover:text-primary">Privacy notice</a>
              </li>
              <li>
                <a href={report.termsUrl} rel="noreferrer" className="hover:text-primary">Terms of use</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-[90rem] flex-col gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} {report.legalEntity}. All rights reserved.</p>
            <p className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="size-2 rounded-full bg-status-orange" />
              {report.notice}
            </p>
            <a href="#top" className="no-print inline-flex items-center gap-1.5 hover:text-primary">
              <ArrowUp aria-hidden="true" className="size-3.5" />
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
