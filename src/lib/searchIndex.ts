import { generalDisclosureGroups } from "@/data/generalDisclosures";
import { governanceDisclosures, matrixQuestions } from "@/data/managementProcess";
import { methodologySections, definitions } from "@/data/methodology";
import { allPrincipleContent } from "@/data/principles";
import { PRINCIPLES, STATUS_LABEL } from "@/data/report";

export interface SearchEntry {
  id: string;
  title: string;
  context: string;
  indicatorId?: string;
  matchedText: string;
  route: string;
  hash?: string;
  kind: "page" | "section" | "principle" | "disclosure" | "definition" | "status";
}

const pages: SearchEntry[] = [
  { id: "pg-overview", title: "Report overview", context: "Report", matchedText: "BRSR-aligned voluntary disclosure overview", route: "/brsr", kind: "page" },
  { id: "pg-assurance", title: "Assurance and data status", context: "Report foundation", matchedText: "Evidence, validation and assurance status", route: "/brsr/assurance", kind: "page" },
  { id: "pg-sectiona", title: "Section A: General Disclosures", context: "Entity and operating context", matchedText: "Entity details, products, operations, employees", route: "/brsr/general-disclosures", kind: "page" },
  { id: "pg-sectionb", title: "Section B: Management and Process Disclosures", context: "Policy and governance", matchedText: "Policy coverage, governance and oversight", route: "/brsr/management-process", kind: "page" },
  { id: "pg-downloads", title: "Downloads", context: "Report", matchedText: "Report files, data tables and policies", route: "/brsr/downloads", kind: "page" },
  { id: "pg-methodology", title: "Methodology", context: "Report", matchedText: "Boundary, calculation, data quality and assurance", route: "/brsr/methodology", kind: "page" },
];

export const buildSearchIndex = (): SearchEntry[] => {
  const entries: SearchEntry[] = [...pages];

  PRINCIPLES.forEach((p) => {
    entries.push({
      id: `pr-${p.number}`,
      title: `Principle ${p.number}: ${p.title}`,
      context: "Section C",
      matchedText: p.summary,
      route: `/brsr/principle/${p.number}`,
      kind: "principle",
    });
  });

  generalDisclosureGroups.forEach((g) => {
    entries.push({
      id: `sec-${g.id}`,
      title: `${g.roman}. ${g.title}`,
      context: "Section A",
      matchedText: g.intro ?? g.title,
      route: "/brsr/general-disclosures",
      hash: g.id,
      kind: "section",
    });
    g.disclosures.forEach((d) => {
      entries.push({
        id: d.id,
        title: d.title,
        context: `Section A · ${g.title}`,
        indicatorId: d.number,
        matchedText: d.question,
        route: "/brsr/general-disclosures",
        hash: d.id,
        kind: "disclosure",
      });
    });
  });

  matrixQuestions.forEach((q) => {
    entries.push({
      id: q.id,
      title: q.shortLabel,
      context: "Section B · Policy and management process",
      indicatorId: q.number,
      matchedText: q.question,
      route: "/brsr/management-process",
      hash: q.id,
      kind: "disclosure",
    });
  });

  governanceDisclosures.forEach((d) => {
    entries.push({
      id: d.id,
      title: d.title,
      context: "Section B · Governance, leadership and oversight",
      indicatorId: d.number,
      matchedText: d.question,
      route: "/brsr/management-process",
      hash: d.id,
      kind: "disclosure",
    });
  });

  allPrincipleContent.forEach((p) => {
    [...p.essential, ...p.leadership].forEach((d) => {
      entries.push({
        id: d.id,
        title: d.title,
        context: `Principle ${p.meta.number} · ${d.tier === "leadership" ? "Leadership" : "Essential"} Indicator`,
        indicatorId: d.number,
        matchedText: d.question,
        route: `/brsr/principle/${p.meta.number}`,
        hash: d.id,
        kind: "disclosure",
      });
    });
  });

  methodologySections.forEach((s) => {
    entries.push({
      id: `me-${s.id}`,
      title: s.title,
      context: "Methodology",
      matchedText: s.body,
      route: "/brsr/methodology",
      hash: s.id,
      kind: "section",
    });
  });

  definitions.forEach((d) => {
    entries.push({
      id: `def-${d.term}`,
      title: d.term,
      context: "Methodology · Definitions",
      matchedText: d.definition,
      route: "/brsr/methodology",
      hash: "definitions",
      kind: "definition",
    });
  });

  Object.entries(STATUS_LABEL).forEach(([key, label]) => {
    entries.push({
      id: `st-${key}`,
      title: label,
      context: "Data status label",
      matchedText: `Status used across the report: ${label}`,
      route: "/brsr/methodology",
      hash: "quality",
      kind: "status",
    });
  });

  return entries;
};

export const searchEntries = (index: SearchEntry[], query: string): SearchEntry[] => {
  const q = query.trim().toLowerCase();
  if (!q) return index.slice(0, 12);
  const scored = index
    .map((entry) => {
      const hay = `${entry.title} ${entry.indicatorId ?? ""} ${entry.context} ${entry.matchedText}`.toLowerCase();
      if (!hay.includes(q)) return null;
      let score = 0;
      if (entry.indicatorId?.toLowerCase() === q) score += 100;
      if (entry.indicatorId?.toLowerCase().includes(q)) score += 40;
      if (entry.title.toLowerCase().includes(q)) score += 20;
      if (entry.title.toLowerCase().startsWith(q)) score += 10;
      return { entry, score };
    })
    .filter((x): x is { entry: SearchEntry; score: number } => x !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, 30);
  return scored.map((s) => s.entry);
};
