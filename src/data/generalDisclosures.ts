import { report } from "./report";
import { PENDING, REVIEW, placeholderEvidence } from "./helpers";
import type { Disclosure, DisclosureGroup } from "./types";

const base = (
  id: string,
  number: string,
  title: string,
  question: string,
  extra: Partial<Disclosure> = {},
): Disclosure => ({
  id,
  section: "A",
  number,
  title,
  question,
  status: "pending-validation",
  responseType: "table",
  evidence: [placeholderEvidence(`${id}-EV1`)],
  dataOwner: "Pending nomination",
  lastUpdated: "Not yet validated",
  assurance: "not-supplied",
  ...extra,
});

const entityRows: Array<Record<string, string>> = [
  ["1", "Corporate Identity Number (CIN) / LLPIN of the listed entity", "Data pending company validation"],
  ["2", "Name of the entity", `${report.legalEntity} (operating brand: OmneVu)`],
  ["3", "Year of incorporation", PENDING],
  ["4", "Registered office address", report.registeredOffice],
  ["5", "Corporate address", PENDING],
  ["6", "E-mail", report.email],
  ["7", "Telephone", PENDING],
  ["8", "Website", report.website],
  ["9", "Financial year for which reporting is being done", "Pending confirmation"],
  [
    "10",
    "Name of the stock exchange(s) where shares are listed",
    "Not applicable based on current public information; confirm with company",
  ],
  ["11", "Paid-up capital", "Pending validation / applicability review"],
  ["12", "Name and contact details of the person for queries on the BRSR report", "Pending nomination"],
  ["13", "Reporting boundary (standalone or consolidated)", PENDING],
  ["14", "Name of assessment or assurance provider", "Not supplied"],
  ["15", "Type and scope of assurance obtained", "Not supplied"],
].map(([sno, particulars, response]) => ({
  sno: sno as string,
  particulars: particulars as string,
  response: response as string,
  flag:
    ["2", "4", "6", "8"].includes(sno as string) ? "Publicly verified" : "Pending validation",
}));

export const generalDisclosureGroups: DisclosureGroup[] = [
  {
    id: "A-I",
    roman: "I",
    title: "Details of the entity",
    intro:
      "Identity, contact and reporting-boundary details. Only information published on the OmneVu public website is marked as publicly verified.",
    disclosures: [
      base("A-I-1", "A.I", "Entity details", "Details of the listed entity.", {
        table: {
          caption: "Details of the entity",
          columns: [
            { key: "sno", label: "S. No." },
            { key: "particulars", label: "Particulars" },
            { key: "response", label: "Response" },
            { key: "flag", label: "Data status" },
          ],
          rows: entityRows,
          footnotes: [
            "Rows 14 and 15 are extension rows retained so an assurance provider and scope can be recorded once supplied.",
          ],
        },
      }),
    ],
  },
  {
    id: "A-II",
    roman: "II",
    title: "Products and services",
    intro:
      "Business activities and product families. Product names are drawn from the public OmneVu website; turnover shares and NIC codes have not been supplied.",
    disclosures: [
      base("A-II-16", "A.II.16", "Business activities accounting for 90% of turnover", "Details of business activities (accounting for 90% of the turnover).", {
        table: {
          caption: "Business activities",
          columns: [
            { key: "sno", label: "S. No." },
            { key: "activity", label: "Description of main activity" },
            { key: "sub", label: "Description of business activity" },
            { key: "share", label: "% of turnover", numeric: true },
          ],
          rows: [
            {
              sno: "1",
              activity: "Information technology and software services",
              sub: "Design and delivery of SaaS products for B2B and B2C customers (proposed record)",
              share: PENDING,
            },
          ],
          footnotes: ["Turnover share requires validated financial information."],
        },
      }),
      base("A-II-17", "A.II.17", "Products/services sold (accounting for 90% of turnover)", "Products/services sold by the entity (accounting for 90% of the entity's turnover).", {
        table: {
          caption: "Product families proposed for validation",
          columns: [
            { key: "sno", label: "S. No." },
            { key: "product", label: "Product / service" },
            { key: "nic", label: "NIC code" },
            { key: "share", label: "% of total turnover contributed", numeric: true },
          ],
          rows: report.productFamilies.map((product, i) => ({
            sno: String(i + 1),
            product,
            nic: PENDING,
            share: PENDING,
          })),
          footnotes: [
            "Product families are listed as proposed records from public information; inclusion does not imply a validated turnover contribution.",
          ],
        },
      }),
    ],
  },
  {
    id: "A-III",
    roman: "III",
    title: "Operations",
    intro: "Locations, markets served and customer types.",
    disclosures: [
      base("A-III-18", "A.III.18", "Number of locations", "Number of locations where plants and/or operations/offices of the entity are situated.", {
        table: {
          caption: "Locations of plants and offices",
          columns: [
            { key: "location", label: "Location" },
            { key: "plants", label: "Number of plants", numeric: true },
            { key: "offices", label: "Number of offices", numeric: true },
            { key: "total", label: "Total", numeric: true },
          ],
          rows: [
            { location: "National (India)", plants: REVIEW, offices: PENDING, total: PENDING },
            { location: "International", plants: REVIEW, offices: PENDING, total: PENDING },
          ],
          footnotes: [
            "Pune, Maharashtra, India is publicly verified as the registered office. All facility counts remain pending validation.",
          ],
        },
      }),
      base("A-III-19", "A.III.19", "Markets served", "Markets served by the entity: number of locations and contribution of exports.", {
        table: {
          caption: "Markets served",
          columns: [
            { key: "param", label: "Parameter" },
            { key: "value", label: "Response" },
          ],
          rows: [
            { param: "Number of states / union territories served", value: PENDING },
            { param: "Number of countries served", value: PENDING },
            { param: "Contribution of exports as a percentage of total turnover", value: PENDING },
            {
              param: "Types of customers",
              value: "B2B and B2C software customers (publicly stated); segment detail pending validation",
            },
          ],
        },
      }),
    ],
  },
  {
    id: "A-IV",
    roman: "IV",
    title: "Employees",
    intro:
      "Workforce composition, accessibility, participation in governance and turnover rates. No workforce data has been supplied.",
    disclosures: [
      base("A-IV-20", "A.IV.20", "Employees and workers (including differently abled)", "Details as at the end of the financial year for employees and workers, including differently abled.", {
        emptyStateHint:
          "Workforce data has not yet been supplied. This table is ready for validated employee and worker information by employment type and gender.",
        tables: [
          {
            caption: "Employees and workers by gender",
            columns: [
              { key: "cat", label: "Category" },
              { key: "total", label: "Total (A)", numeric: true },
              { key: "male", label: "Male — No. (B)", numeric: true },
              { key: "malep", label: "Male — % (B/A)", numeric: true },
              { key: "female", label: "Female — No. (C)", numeric: true },
              { key: "femalep", label: "Female — % (C/A)", numeric: true },
            ],
            rows: [
              "Permanent employees (D)",
              "Other than permanent employees (E)",
              "Total employees (D + E)",
              "Permanent workers (F)",
              "Other than permanent workers (G)",
              "Total workers (F + G)",
            ].map((cat) => ({
              cat,
              total: PENDING,
              male: PENDING,
              malep: PENDING,
              female: PENDING,
              femalep: PENDING,
            })),
          },
          {
            caption: "Differently abled employees and workers",
            columns: [
              { key: "cat", label: "Category" },
              { key: "total", label: "Total (A)", numeric: true },
              { key: "male", label: "Male — No. (B)", numeric: true },
              { key: "female", label: "Female — No. (C)", numeric: true },
            ],
            rows: [
              "Differently abled permanent employees",
              "Differently abled other than permanent employees",
              "Differently abled permanent workers",
              "Differently abled other than permanent workers",
            ].map((cat) => ({ cat, total: PENDING, male: PENDING, female: PENDING })),
          },
        ],
      }),
      base("A-IV-21", "A.IV.21", "Participation of women in governance", "Participation/inclusion/representation of women in the Board and among Key Management Personnel.", {
        table: {
          caption: "Women in governance",
          columns: [
            { key: "cat", label: "Category" },
            { key: "total", label: "Total (A)", numeric: true },
            { key: "women", label: "No. of women (B)", numeric: true },
            { key: "pct", label: "% of women (B/A)", numeric: true },
          ],
          rows: ["Board of Directors / Designated Partners", "Key Management Personnel"].map((cat) => ({
            cat,
            total: PENDING,
            women: PENDING,
            pct: PENDING,
          })),
        },
      }),
      base("A-IV-22", "A.IV.22", "Turnover rate for permanent employees and workers", "Turnover rate for permanent employees and workers for the last three financial years.", {
        table: {
          caption: "Three-year turnover rate (%)",
          columns: [
            { key: "cat", label: "Category" },
            { key: "y1", label: "Current period", numeric: true },
            { key: "y2", label: "Previous period", numeric: true },
            { key: "y3", label: "Period before previous", numeric: true },
          ],
          rows: ["Permanent employees — Male", "Permanent employees — Female", "Permanent employees — Total", "Permanent workers — Total"].map(
            (cat) => ({ cat, y1: PENDING, y2: PENDING, y3: PENDING }),
          ),
        },
      }),
    ],
  },
  {
    id: "A-V",
    roman: "V",
    title: "Holding, subsidiary, associate companies and joint ventures",
    disclosures: [
      base("A-V-23", "A.V.23", "Related entities", "Names of holding, subsidiary, associate companies and joint ventures.", {
        emptyStateHint: "No validated related-entity register supplied.",
        table: {
          caption: "Related entities",
          columns: [
            { key: "sno", label: "S. No." },
            { key: "name", label: "Name of the entity" },
            { key: "type", label: "Holding / Subsidiary / Associate / JV" },
            { key: "share", label: "% of shares held", numeric: true },
            { key: "participates", label: "Participates in the BR initiatives of the listed entity" },
          ],
          rows: [],
        },
      }),
    ],
  },
  {
    id: "A-VI",
    roman: "VI",
    title: "CSR details",
    disclosures: [
      base("A-VI-24", "A.VI.24", "CSR applicability, turnover and net worth", "Whether CSR is applicable as per Section 135 of the Companies Act, 2013, along with turnover and net worth.", {
        status: "applicability-review",
        applicabilityReason:
          "The operating entity is an LLP and no financial thresholds have been supplied, so CSR applicability cannot be determined from public information.",
        table: {
          caption: "CSR details",
          columns: [
            { key: "param", label: "Particulars" },
            { key: "value", label: "Response" },
          ],
          rows: [
            { param: "CSR applicability (Section 135, Companies Act 2013)", value: "Under review" },
            { param: "Turnover", value: PENDING },
            { param: "Net worth", value: PENDING },
          ],
        },
      }),
    ],
  },
  {
    id: "A-VII",
    roman: "VII",
    title: "Transparency and disclosure compliance",
    intro:
      "Stakeholder complaints and material responsible-business issues. No complaint counts are shown because no validated records have been supplied.",
    disclosures: [
      base("A-VII-25", "A.VII.25", "Complaints and grievances on responsible business conduct", "Complaints/grievances on any of the Principles under the National Guidelines on Responsible Business Conduct, by stakeholder group.", {
        table: {
          caption: "Stakeholder complaints",
          columns: [
            { key: "group", label: "Stakeholder group" },
            { key: "mechanism", label: "Grievance redressal mechanism in place" },
            { key: "filed", label: "Filed during the period", numeric: true },
            { key: "pending", label: "Pending at close", numeric: true },
            { key: "remarks", label: "Remarks" },
          ],
          rows: [
            "Communities",
            "Investors (other than shareholders)",
            "Shareholders / Partners",
            "Employees and workers",
            "Customers",
            "Value chain partners",
            "Other (please specify)",
          ].map((group) => ({
            group,
            mechanism: PENDING,
            filed: PENDING,
            pending: PENDING,
            remarks: "No validated complaint register supplied",
          })),
          footnotes: ["Counts are intentionally not shown as zero where records have not been supplied."],
        },
      }),
      base("A-VII-26", "A.VII.26", "Material responsible business conduct issues", "Overview of the entity's material responsible business conduct issues, the rationale, approach to mitigation and financial implications.", {
        table: {
          caption: "Material issues identified",
          columns: [
            { key: "sno", label: "S. No." },
            { key: "issue", label: "Material issue identified" },
            { key: "ro", label: "Risk or opportunity" },
            { key: "rationale", label: "Rationale" },
            { key: "mitigation", label: "Approach to adapt or mitigate" },
            { key: "impact", label: "Financial implications" },
          ],
          rows: [],
          footnotes: [
            "A validated materiality assessment has not been supplied. Proposed topics are shown separately in the planning panel below and are not a formal response.",
          ],
        },
      }),
    ],
  },
];
