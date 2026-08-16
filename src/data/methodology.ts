export interface MethodologySection {
  id: string;
  title: string;
  body: string;
  status: "pending-validation" | "publicly-verified" | "applicability-review";
  fields?: Array<{ label: string; value: string }>;
}

export const methodologySections: MethodologySection[] = [
  {
    id: "approach",
    title: "Reporting approach",
    status: "publicly-verified",
    body: "This microsite organises OmneVu responsible-business information using the structure of India's Business Responsibility and Sustainability Reporting (BRSR) framework. It is a voluntary, BRSR-aligned disclosure interface and is not an official listed-entity filing. Question numbering follows the framework so that validated company information can replace demonstration content without restructuring the report.",
    fields: [
      { label: "Framework", value: "BRSR structure aligned to the NGRBC principles" },
      { label: "Reporting status", value: "Demonstration — data pending validation" },
      { label: "Filing status", value: "Voluntary disclosure, not a regulatory filing" },
    ],
  },
  {
    id: "boundary",
    title: "Reporting boundary",
    status: "pending-validation",
    body: "The reporting entity is Digilytics Systems LLP, operating publicly as OmneVu. Whether disclosures will be made on a standalone or consolidated basis, and which locations and services fall within the boundary, must be confirmed by the company before publication.",
    fields: [
      { label: "Reporting entity", value: "Digilytics Systems LLP" },
      { label: "Basis (standalone or consolidated)", value: "Pending validation" },
      { label: "Locations in scope", value: "Pending validation" },
      { label: "Reporting period", value: "Pending confirmation" },
    ],
  },
  {
    id: "collection",
    title: "Data collection and ownership",
    status: "pending-validation",
    body: "Every indicator requires a named data owner, a defined source system or document, a collection frequency and a review step. No indicator owners have been nominated, so all disclosures currently show 'Pending nomination'.",
    fields: [
      { label: "Indicator owners nominated", value: "Pending nomination" },
      { label: "Source systems mapped", value: "Pending validation" },
      { label: "Collection frequency", value: "Pending validation" },
    ],
  },
  {
    id: "calculation",
    title: "Calculation and estimation",
    status: "pending-validation",
    body: "Where a value is calculated rather than measured, the calculation basis, emission or conversion factors, denominators used for intensity metrics and any estimation technique must be recorded alongside the value. No calculation bases have been supplied.",
    fields: [
      { label: "Intensity denominators", value: "Pending validation" },
      { label: "Emission factors and sources", value: "Not supplied" },
      { label: "Estimation techniques used", value: "Not supplied" },
    ],
  },
  {
    id: "quality",
    title: "Data quality and validation",
    status: "pending-validation",
    body: "Before publication, each disclosure must pass internal validation, evidence attachment and governance approval. Values that cannot be validated are shown as status text rather than as a numeric value; a zero is never used to represent unknown data.",
    fields: [
      { label: "Internal validation", value: "Pending" },
      { label: "Evidence attached", value: "Placeholder records only" },
      { label: "Governance approval", value: "Pending" },
    ],
  },
  {
    id: "assurance",
    title: "Assurance",
    status: "pending-validation",
    body: "No independent assurance provider has been appointed and no assurance scope has been supplied. Accordingly, no indicator in this interface is described as assured. Assurance status for every disclosure currently reads 'Assurance not supplied'.",
    fields: [
      { label: "Assurance provider", value: "Not supplied" },
      { label: "Assurance scope", value: "Not supplied" },
      { label: "Assurance standard", value: "Not supplied" },
    ],
  },
  {
    id: "restatements",
    title: "Restatements",
    status: "pending-validation",
    body: "There is no previously published report, so there are no restatements. Once a first validated report is published, restatements will be listed here with the indicator, the previous value, the revised value and the reason.",
    fields: [{ label: "Restatements in this edition", value: "Not applicable — no prior published report" }],
  },
];

export const definitions: Array<{ term: string; definition: string }> = [
  {
    term: "BRSR",
    definition:
      "Business Responsibility and Sustainability Report — the disclosure format prescribed in India for reporting on responsible-business performance, structured in Sections A, B and C.",
  },
  {
    term: "NGRBC",
    definition:
      "National Guidelines on Responsible Business Conduct — the nine principles that Section C of the BRSR is organised around.",
  },
  {
    term: "Essential Indicator",
    definition: "The core reporting layer of each principle, expected to be answered by reporting entities.",
  },
  {
    term: "Leadership Indicator",
    definition: "A voluntary, more advanced layer of disclosure demonstrating practice beyond the essential expectations.",
  },
  {
    term: "Reporting boundary",
    definition:
      "The entities, locations and activities covered by the report, and whether the report is prepared on a standalone or consolidated basis.",
  },
  {
    term: "Value chain",
    definition:
      "Upstream and downstream parties connected to the entity's activities, such as suppliers, cloud and hosting providers, partners and customers.",
  },
  {
    term: "Independent assurance",
    definition:
      "An engagement in which a practitioner independent of the entity evaluates disclosures against stated criteria and issues a conclusion.",
  },
  {
    term: "Reasonable assurance",
    definition:
      "A high, but not absolute, level of assurance expressed as a positive opinion on the subject matter.",
  },
  {
    term: "Limited assurance",
    definition:
      "A moderate level of assurance expressed as a negative-form conclusion, based on fewer procedures than reasonable assurance.",
  },
];
