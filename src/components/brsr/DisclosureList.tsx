import { DisclosureItem } from "./DisclosureItem";
import type { Disclosure } from "@/data/types";

export function DisclosureList({
  disclosures,
  contextLabel,
}: {
  disclosures: Disclosure[];
  contextLabel: string;
}) {
  return (
    <div className="space-y-3">
      {disclosures.map((d) => (
        <DisclosureItem key={d.id} disclosure={d} contextLabel={contextLabel} />
      ))}
    </div>
  );
}
