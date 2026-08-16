import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { buildSearchIndex, searchEntries, type SearchEntry } from "@/lib/searchIndex";

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => searchEntries(index, query), [index, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const go = (entry: SearchEntry) => {
    setOpen(false);
    setQuery("");
    navigate({ to: entry.route, hash: entry.hash });
  };

  const grouped = results.reduce<Record<string, SearchEntry[]>>((acc, entry) => {
    (acc[entry.context] ??= []).push(entry);
    return acc;
  }, {});

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="no-print inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-surface-elevated/70 px-3 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
      >
        <Search aria-hidden="true" className="size-4" />
        <span className="hidden sm:inline">Search disclosures</span>
        <span className="sr-only sm:hidden">Search disclosures</span>
        <kbd className="ml-1 hidden rounded border border-border px-1.5 py-0.5 font-mono text-[0.65rem] lg:inline">
          ⌘K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search by indicator number, title or keyword…"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No disclosure matches that search.</CommandEmpty>
          {Object.entries(grouped).map(([group, entries]) => (
            <CommandGroup key={group} heading={group}>
              {entries.map((entry) => (
                <CommandItem key={entry.id} value={`${entry.indicatorId ?? ""} ${entry.title} ${entry.matchedText}`} onSelect={() => go(entry)}>
                  <span className="min-w-0 flex-1 truncate">{entry.title}</span>
                  {entry.indicatorId ? (
                    <span className="ml-2 shrink-0 font-mono text-[0.7rem] text-muted-foreground">
                      {entry.indicatorId}
                    </span>
                  ) : null}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
