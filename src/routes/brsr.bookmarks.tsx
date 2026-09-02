import { createFileRoute, Link } from "@tanstack/react-router";
import { BookmarkX, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/brsr/PageHeader";
import { useBookmarks } from "@/lib/bookmarks";

export const Route = createFileRoute("/brsr/bookmarks")({
  head: () => ({
    meta: [
      { title: "Saved disclosures — OmneVu Responsibility Report" },
      {
        name: "description",
        content:
          "Your saved BRSR disclosures from the OmneVu responsibility report, stored in this browser for quick return.",
      },
      { property: "og:title", content: "Saved disclosures — OmneVu BRSR" },
      { property: "og:description", content: "Return to the disclosures you bookmarked while reading the report." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/brsr/bookmarks" }],
  }),
  component: BookmarksPage,
});

function BookmarksPage() {
  const { items, remove, clear } = useBookmarks();

  return (
    <div className="page-enter">
      <PageHeader
        eyebrow="Reading list"
        title="Saved disclosures"
        lead="Disclosures you bookmarked while reading. Saved in this browser only — nothing is sent to a server."
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border-strong bg-surface p-10 text-center">
            <BookmarkX aria-hidden="true" className="mx-auto size-7 text-muted-foreground" />
            <p className="mt-4 font-display text-lg font-semibold text-foreground">No saved disclosures yet</p>
            <p className="mx-auto mt-2 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
              Use the bookmark icon beside any disclosure in Section A, Section B or the nine principles to build a
              reading list.
            </p>
            <Link
              to="/brsr/general-disclosures"
              className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Browse Section A
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[0.95rem] text-muted-foreground">
                {items.length} saved {items.length === 1 ? "disclosure" : "disclosures"}
              </p>
              <button
                type="button"
                onClick={clear}
                className="no-print inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
              >
                <Trash2 aria-hidden="true" className="size-4" />
                Clear all
              </button>
            </div>

            <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {items.map((item) => (
                <li key={item.id} className="flex items-start gap-4 p-5">
                  <span className="mt-0.5 rounded-md border border-border bg-surface-subtle px-2 py-0.5 text-[0.75rem] font-semibold tabular-nums text-primary">
                    {item.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <a
                      href={`${item.route}#${item.id}`}
                      className="font-display text-[1.05rem] font-semibold leading-snug text-foreground hover:text-primary"
                    >
                      {item.title}
                    </a>
                    <p className="mt-1 text-[0.9rem] text-muted-foreground">{item.context}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(item.id)}
                    aria-label={`Remove ${item.number} from saved list`}
                    className="no-print rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                  >
                    <Trash2 aria-hidden="true" className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
