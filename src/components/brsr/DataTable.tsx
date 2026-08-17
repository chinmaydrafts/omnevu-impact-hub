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
    <figure className="my-5">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        {table.caption ? (
          <figcaption className="text-[0.95rem] font-semibold text-foreground">{table.caption}</figcaption>
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
      <div className="relative max-h-[34rem] overflow-auto rounded-xl border border-border bg-white shadow-[0_1px_2px_rgba(18,35,50,0.05)]">
        <table className="w-full min-w-[36rem] border-collapse text-left text-[0.95rem]">
          {table.caption ? <caption className="sr-only">{table.caption}</caption> : null}
          <thead className="sticky top-0 z-10">
            <tr className="bg-navy">
              {table.columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`whitespace-nowrap px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-wide text-paper ${
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
              <tr
                key={i}
                className={`border-b border-[#e4eaee] last:border-0 ${i % 2 === 1 ? "bg-[#f7fafc]" : "bg-white"} hover:bg-tint-blue`}
              >
                {table.columns.map((col) => {
                  const raw = row[col.key];
                  const value = raw === null || raw === undefined || raw === "" ? "—" : String(raw);
                  const pending = PENDING_TEXT.test(value);
                  return (
                    <td
                      key={col.key}
                      className={`px-4 py-3 align-top ${col.numeric ? "text-right tabular-nums" : ""} ${
                        pending ? "italic text-[#5d7484]" : "text-[#122332]"
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
      <p className="no-print mt-2 text-xs text-muted-foreground sm:hidden">Scroll the table horizontally to see all columns.</p>
      {table.footnotes?.length ? (
        <ul className="mt-3 space-y-1 text-xs leading-relaxed text-muted-foreground">
          {table.footnotes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      ) : null}
    </figure>
  );
}
