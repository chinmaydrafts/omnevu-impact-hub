import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bookmark, Download, Menu, Printer, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useBookmarks } from "@/lib/bookmarks";
import { OmneVuLogo } from "./OmneVuLogo";
import { SearchDialog } from "./SearchDialog";
import { PRINCIPLES } from "@/data/report";

const navLinks = [
  { to: "/brsr", label: "Overview", exact: true },
  { to: "/brsr/assurance", label: "Assurance" },
  { to: "/brsr/general-disclosures", label: "Section A" },
  { to: "/brsr/management-process", label: "Section B" },
  { to: "/brsr/executive-summary", label: "Summary" },
];

const navBase =
  "rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors hover:bg-surface-elevated hover:text-foreground";
const navActive = "bg-surface-subtle text-foreground";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [principlesOpen, setPrinciplesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { items: bookmarks } = useBookmarks();

  useEffect(() => {
    setMobileOpen(false);
    setPrinciplesOpen(false);
  }, [pathname]);

  return (
    <header
      data-site-header
      className="band-dark no-print sticky top-0 z-50 border-b border-border shadow-[0_1px_0_rgba(255,255,255,0.04)]"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/brsr" className="flex min-w-0 items-center gap-3.5 text-foreground">
          <OmneVuLogo size={34} />
          <span className="hidden min-w-0 border-l border-border pl-3.5 text-[0.8rem] leading-tight text-muted-foreground sm:block">
            Business Responsibility and
            <br />
            Sustainability Report
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.exact ?? false }}
                activeProps={{ className: navActive }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className={navBase}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setPrinciplesOpen(true)}
              onMouseLeave={() => setPrinciplesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={principlesOpen}
                onClick={() => setPrinciplesOpen((v) => !v)}
                className={`${navBase} ${
                  pathname.startsWith("/brsr/principle") ? navActive : "text-muted-foreground"
                }`}
              >
                Section C: Principles
              </button>
              {principlesOpen ? (
                <div className="absolute right-0 top-full w-[36rem] pt-3">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border-strong bg-surface p-2 shadow-2xl">
                    {PRINCIPLES.map((p) => (
                      <Link
                        key={p.number}
                        to="/brsr/principle/$id"
                        params={{ id: String(p.number) }}
                        className="grid grid-cols-[auto_minmax(0,1fr)] gap-2.5 rounded-lg p-2.5 transition-colors hover:bg-surface-elevated"
                      >
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border border-border bg-surface-elevated text-[0.72rem] font-semibold text-muted-foreground">
                          {p.number}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium text-foreground">{p.title}</span>
                          <span className="block truncate text-xs text-muted-foreground">{p.shortSummary}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </nav>

          <SearchDialog />

          <Link
            to="/brsr/bookmarks"
            aria-label={`Saved disclosures (${bookmarks.length})`}
            className="relative hidden h-9 items-center gap-2 rounded-full border border-border px-3.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground md:inline-flex"
          >
            <Bookmark aria-hidden="true" className="size-4" />
            Saved
            {bookmarks.length > 0 ? (
              <span className="grid min-w-5 place-items-center rounded-full bg-primary px-1.5 text-[0.7rem] font-semibold tabular-nums text-primary-foreground">
                {bookmarks.length}
              </span>
            ) : null}
          </Link>

          <ThemeToggle />

          <Link
            to="/brsr/downloads"
            aria-label="Downloads and data exports"
            className="hidden h-9 items-center gap-2 rounded-full border border-border px-3.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground md:inline-flex"
          >
            <Download aria-hidden="true" className="size-4" />
            Download
          </Link>

          <button
            type="button"
            onClick={() => typeof window !== "undefined" && window.print()}
            aria-label="Print this report page"
            className="hidden h-9 items-center gap-2 rounded-full border border-border px-3.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground md:inline-flex"
          >
            <Printer aria-hidden="true" className="size-4" />
            Print
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {mobileOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile" data-site-nav className="border-t border-border bg-surface px-4 py-3 lg:hidden">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-3 py-3 text-[0.95rem] font-medium text-foreground hover:bg-surface-elevated"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/brsr/downloads" className="rounded-lg px-3 py-3 text-[0.95rem] font-medium text-foreground hover:bg-surface-elevated">
              Downloads
            </Link>
            <Link to="/brsr/methodology" className="rounded-lg px-3 py-3 text-[0.95rem] font-medium text-foreground hover:bg-surface-elevated">
              Methodology
            </Link>
            <Link to="/brsr/glossary" className="rounded-lg px-3 py-3 text-[0.95rem] font-medium text-foreground hover:bg-surface-elevated">
              Glossary
            </Link>
            <Link to="/brsr/bookmarks" className="rounded-lg px-3 py-3 text-[0.95rem] font-medium text-foreground hover:bg-surface-elevated">
              Saved disclosures{bookmarks.length ? ` (${bookmarks.length})` : ""}
            </Link>
          </div>
          <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Section C: Principles
          </p>
          <div className="mt-1 grid gap-1">
            {PRINCIPLES.map((p) => (
              <Link
                key={p.number}
                to="/brsr/principle/$id"
                params={{ id: String(p.number) }}
                className="grid min-h-11 grid-cols-[auto_minmax(0,1fr)] items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-surface-elevated"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-md border border-border text-[0.72rem] font-semibold text-muted-foreground">
                  {p.number}
                </span>
                <span className="truncate text-sm text-foreground">{p.title}</span>
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
