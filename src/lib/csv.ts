export interface CsvTable {
  columns: Array<{ key: string; label: string }>;
  rows: Array<Record<string, string | number | null>>;
}

const escapeCell = (value: string | number | null | undefined) => {
  const text = value === null || value === undefined ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

export const tableToCsv = (table: CsvTable, meta: string[] = []): string => {
  const header = table.columns.map((c) => escapeCell(c.label)).join(",");
  const body = table.rows.map((row) => table.columns.map((c) => escapeCell(row[c.key])).join(","));
  return [...meta.map((m) => escapeCell(m)), header, ...body].join("\n");
};

export const downloadCsv = (filename: string, csv: string) => {
  if (typeof window === "undefined") return;
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.endsWith(".csv") ? filename : `${filename}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const slugifyFilename = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
