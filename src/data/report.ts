import type { PrincipleMeta } from "./types";

export const report = {
  brand: "OmneVu",
  legalEntity: "Digilytics Systems LLP",
  entityDescription:
    "OmneVu is a team of software engineers and architects building SaaS solutions for B2B and B2C customers.",
  registeredOffice: "5, Prabhas, Sahakar Nagar-2, Pune, Maharashtra, India",
  email: "omnevu@gmail.com",
  website: "https://www.omnevu.com/",
  privacyUrl: "https://www.omnevu.com/privacy",
  termsUrl: "https://www.omnevu.com/terms",
  reportingYearLabel: "FY 2025-26",
  reportingYearNote:
    "Demonstration reporting label. The final reporting period must be confirmed by the company.",
  currentPeriod: "Current period",
  previousPeriod: "Previous period",
  basis: "BRSR-aligned voluntary disclosure",
  boundary: "Pending validation",
  lastUpdated: "Demonstration",
  notice:
    "Demonstration disclosure interface. Company data is pending validation and approval.",
  productFamilies: [
    "OV Plan",
    "OV Time(r)",
    "OV Retail",
    "OV Inventory",
    "OV Warranty(MS)",
    "OV EventMgmt",
    "OV Profile",
    "OV Sureway",
    "OV NewsLetter",
    "OV Guru",
  ],
  proposedMaterialTopics: [
    {
      title: "Data privacy and cybersecurity",
      note: "Protection of customer and end-user information across OmneVu SaaS products.",
    },
    {
      title: "Ethical product development",
      note: "Responsible design, accessibility and transparency in software delivery.",
    },
    {
      title: "Employee capability and wellbeing",
      note: "Engineering skills, working conditions and equitable opportunity.",
    },
    {
      title: "Responsible suppliers and cloud infrastructure",
      note: "Cloud, hosting and vendor practices including energy sourcing.",
    },
    {
      title: "Customer trust and service continuity",
      note: "Availability, support quality and incident communication.",
    },
  ],
} as const;

export const PRINCIPLES: PrincipleMeta[] = [
  {
    number: 1,
    slug: "1",
    title: "Integrity and Ethics",
    summary:
      "Businesses should conduct and govern themselves with integrity and in an ethical, transparent, and accountable manner.",
    shortSummary: "Ethical conduct, transparency and accountable governance.",
    essentialCount: 7,
    leadershipCount: 2,
    icon: "Scale",
    accent: "primary",
    imageTopic: "Governance review between engineering and business leadership",
  },
  {
    number: 2,
    slug: "2",
    title: "Sustainable and Safe Products",
    summary: "Businesses should provide goods and services in a manner that is sustainable and safe.",
    shortSummary: "Sustainable, safe design and delivery of products and services.",
    essentialCount: 4,
    leadershipCount: 5,
    icon: "PackageCheck",
    accent: "cyan",
    imageTopic: "Software lifecycle and responsible digital design",
  },
  {
    number: 3,
    slug: "3",
    title: "Employee and Worker Wellbeing",
    summary:
      "Businesses should respect and promote the wellbeing of all employees, including those in their value chains.",
    shortSummary: "Wellbeing, safety and fair treatment across the workforce.",
    essentialCount: 15,
    leadershipCount: 6,
    icon: "HeartPulse",
    accent: "green",
    imageTopic: "Employee wellbeing and inclusive workplaces",
  },
  {
    number: 4,
    slug: "4",
    title: "Stakeholder Responsiveness",
    summary: "Businesses should respect the interests of and be responsive to all stakeholders.",
    shortSummary: "Identifying stakeholders and responding to their interests.",
    essentialCount: 2,
    leadershipCount: 3,
    icon: "Users",
    accent: "orange",
    imageTopic: "Stakeholder and community collaboration",
  },
  {
    number: 5,
    slug: "5",
    title: "Human Rights",
    summary: "Businesses should respect and promote human rights.",
    shortSummary: "Respect for human rights across operations and value chain.",
    essentialCount: 10,
    leadershipCount: 5,
    icon: "HandHeart",
    accent: "tint",
    imageTopic: "Fair and dignified working conditions",
  },
  {
    number: 6,
    slug: "6",
    title: "Environment",
    summary: "Businesses should respect, protect, and make efforts to restore the environment.",
    shortSummary: "Energy, water, emissions, waste and environmental compliance.",
    essentialCount: 12,
    leadershipCount: 9,
    icon: "Leaf",
    accent: "green",
    imageTopic: "Energy-efficient digital infrastructure",
  },
  {
    number: 7,
    slug: "7",
    title: "Responsible Public Policy",
    summary:
      "Businesses engaging in public and regulatory policy should do so responsibly and transparently.",
    shortSummary: "Transparent, responsible policy advocacy and affiliations.",
    essentialCount: 2,
    leadershipCount: 1,
    icon: "Landmark",
    accent: "primary",
    imageTopic: "Industry association and regulatory engagement",
  },
  {
    number: 8,
    slug: "8",
    title: "Inclusive Growth",
    summary: "Businesses should promote inclusive growth and equitable development.",
    shortSummary: "Inclusive sourcing, community impact and equitable development.",
    essentialCount: 4,
    leadershipCount: 6,
    icon: "Sprout",
    accent: "cyan",
    imageTopic: "Digital skills and community capability building",
  },
  {
    number: 9,
    slug: "9",
    title: "Responsible Consumer Engagement",
    summary:
      "Businesses should engage with and provide value to consumers in a responsible manner.",
    shortSummary: "Customer trust, privacy, security and service continuity.",
    essentialCount: 6,
    leadershipCount: 5,
    icon: "ShieldCheck",
    accent: "orange",
    imageTopic: "Digital security, privacy and customer trust",
  },
];

export const getPrinciple = (n: number | string) =>
  PRINCIPLES.find((p) => String(p.number) === String(n));

export const STATUS_LABEL: Record<string, string> = {
  "publicly-verified": "Publicly verified",
  "pending-validation": "Pending validation",
  "not-reported": "Not yet reported",
  "not-applicable": "Not applicable",
  "applicability-review": "Applicability under review",
};

export const ASSURANCE_LABEL: Record<string, string> = {
  reasonable: "Reasonable assurance",
  limited: "Limited assurance",
  "internally-validated": "Internally validated",
  unassured: "Unassured",
  "not-supplied": "Assurance not supplied",
};
