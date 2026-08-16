import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadCsv, slugifyFilename, tableToCsv } from "@/lib/csv";
import type { DisclosureTable } from "@/data/types";

const PENDING_TEXT = /pending|not supplied|not yet|under review|nomination/i;

export function DataTable({
  table,
  exportName,
  exportMeta = [],
}: {
  table: DisclosureTable;
  exportName: string;
  exportMeta?: string[];
}) {
  return (
    <figure className="my-4">
      <div className="mb-2.5 flex flex-wrap items-end justify-between gap-2">
        {table.caption ? (
          <figcaption className="text-sm font-medium text-foreground">{table.caption}</figcaption>
        ) : (
          <span />
        )}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="no-print h-8 gap-1.5 text-xs"
          onClick={() => downloadCsv(slugifyFilename(exportName), tableToCsv(table, exportMeta))}
        >
          <Download aria-hidden="true" className="size-3.5" />
          Export CSV
        </Button>
      </div>
      <div className="overflow-x-auto rounded-lg border border-border bg-surface">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-elevated/70">
              {table.columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground ${
                    col.numeric ? "text-right" : ""
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-border/60 last:border-0 hover:bg-surface-elevated/40">
                {table.columns.map((col) => {
                  const raw = row[col.key];
                  const value = raw === null || raw === undefined || raw === "" ? "—" : String(raw);
                  const pending = PENDING_TEXT.test(value);
                  return (
                    <td
                      key={col.key}
                      className={`px-3.5 py-2.5 align-top ${col.numeric ? "text-right tabular-nums" : ""} ${
                        pending ? "text-muted-foreground italic" : "text-foreground"
                      }`}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.footnotes?.length ? (
        <ul className="mt-2.5 space-y-1 text-xs leading-relaxed text-muted-foreground">
          {table.footnotes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      ) : null}
    </figure>
  );
}
