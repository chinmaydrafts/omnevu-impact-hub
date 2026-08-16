import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Printer, X } from "lucide-react";
import { OmneVuLogo } from "./OmneVuLogo";
import { SearchDialog } from "./SearchDialog";
import { PRINCIPLES } from "@/data/report";

const navLinks = [
  { to: "/brsr", label: "Overview", exact: true },
  { to: "/brsr/assurance", label: "Assurance" },
  { to: "/brsr/general-disclosures", label: "Section A" },
  { to: "/brsr/management-process", label: "Section B" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [principlesOpen, setPrinciplesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setMobileOpen(false);
    setPrinciplesOpen(false);
  }, [pathname]);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/brsr" className="flex min-w-0 items-center gap-3 text-foreground">
          <OmneVuLogo />
          <span className="hidden min-w-0 border-l border-border pl-3 text-xs leading-tight text-muted-foreground sm:block">
            Business Responsibility and
            <br />
            Sustainability Report
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.exact ?? false }}
                activeProps={{ className: "bg-surface-elevated text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-elevated hover:text-foreground"
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
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-elevated hover:text-foreground ${
                  pathname.startsWith("/brsr/principle") ? "bg-surface-elevated text-foreground" : "text-muted-foreground"
                }`}
              >
                Section C: Principles
              </button>
              {principlesOpen ? (
                <div className="absolute right-0 top-full w-[34rem] pt-2">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-surface p-2 shadow-xl">
                    {PRINCIPLES.map((p) => (
                      <Link
                        key={p.number}
                        to="/brsr/principle/$id"
                        params={{ id: String(p.number) }}
                        className="grid grid-cols-[auto_minmax(0,1fr)] gap-2.5 rounded-lg p-2.5 transition-colors hover:bg-surface-elevated"
                      >
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border border-border bg-surface-elevated font-mono text-[0.7rem] text-muted-foreground">
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
            <Link
              to="/brsr/downloads"
              activeProps={{ className: "bg-surface-elevated text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-elevated hover:text-foreground"
            >
              Downloads
            </Link>
          </nav>

          <SearchDialog />

          <button
            type="button"
            onClick={() => typeof window !== "undefined" && window.print()}
            aria-label="Print this report page"
            className="hidden h-9 items-center gap-2 rounded-lg border border-border bg-surface-elevated/70 px-3 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground md:inline-flex"
          >
            <Printer aria-hidden="true" className="size-4" />
            Print
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {mobileOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile" className="border-t border-border bg-surface px-4 py-3 lg:hidden">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/brsr/downloads" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated">
              Downloads
            </Link>
            <Link to="/brsr/methodology" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated">
              Methodology
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
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-surface-elevated"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-md border border-border font-mono text-[0.7rem] text-muted-foreground">
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
