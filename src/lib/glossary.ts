import { definitions } from "@/data/methodology";

export interface GlossaryEntry {
  term: string;
  definition: string;
  aliases?: string[];
}

/** Report glossary: the shared methodology definitions plus reporting shorthand
 *  that appears throughout the disclosure text. */
export const glossary: GlossaryEntry[] = [
  ...definitions.map((d) => ({
    term: d.term,
    definition: d.definition,
    aliases:
      d.term === "Essential Indicator"
        ? ["Essential indicators", "Essential indicator"]
        : d.term === "Leadership Indicator"
          ? ["Leadership indicators", "Leadership indicator"]
          : undefined,
  })),
  {
    term: "SEBI",
    definition:
      "Securities and Exchange Board of India — the regulator that prescribes the BRSR format for listed entities.",
  },
  {
    term: "CSR",
    definition:
      "Corporate Social Responsibility — spending and activity undertaken for community benefit, reported under Section A of the BRSR.",
  },
  {
    term: "Materiality",
    definition:
      "The process of identifying the responsible-business topics most significant to the entity and its stakeholders.",
    aliases: ["material topics", "material topic"],
  },
  {
    term: "Scope 1",
    definition: "Direct greenhouse-gas emissions from sources owned or controlled by the entity.",
  },
  {
    term: "Scope 2",
    definition: "Indirect greenhouse-gas emissions from purchased electricity, steam, heating or cooling.",
  },
  {
    term: "Scope 3",
    definition:
      "Other indirect emissions across the value chain, including cloud and hosting services, business travel and purchased goods.",
  },
  {
    term: "Grievance mechanism",
    definition:
      "A defined channel through which a stakeholder group can raise a complaint and receive a tracked response.",
    aliases: ["grievance redressal"],
  },
  {
    term: "Data owner",
    definition:
      "The named individual accountable for the source, accuracy and refresh of an indicator's data before publication.",
  },
];

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const lookup = new Map<string, GlossaryEntry>();
for (const entry of glossary) {
  for (const key of [entry.term, ...(entry.aliases ?? [])]) lookup.set(key.toLowerCase(), entry);
}

const pattern = new RegExp(
  `\\b(${[...lookup.keys()]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|")})\\b`,
  "gi",
);

export type GlossarySegment = { text: string; entry?: GlossaryEntry };

/** Splits copy into plain text and glossary-term segments, marking each term only once. */
export function segmentGlossary(text: string): GlossarySegment[] {
  const segments: GlossarySegment[] = [];
  const seen = new Set<string>();
  let last = 0;
  pattern.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    const entry = lookup.get(match[0].toLowerCase());
    if (!entry || seen.has(entry.term)) continue;
    seen.add(entry.term);
    if (match.index > last) segments.push({ text: text.slice(last, match.index) });
    segments.push({ text: match[0], entry });
    last = match.index + match[0].length;
  }
  if (last < text.length) segments.push({ text: text.slice(last) });
  return segments;
}
