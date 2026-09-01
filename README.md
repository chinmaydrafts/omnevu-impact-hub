# OmneVu Compass

Build a complete, production-quality, responsive Business Responsibility and Sustainability Report microsite for OmneVu. This must be a functioning multi-page React website, not a static landing-page concept.

The website should use the information architecture and disclosure organization commonly used in Indian BRSR reporting, particularly the pattern of:

a visual report-directory landing page;

an Assurance page;

Section A: General Disclosures;

Section B: Management and Process Disclosures; and

nine separate principle pages under Section C.

The user experience may take structural inspiration from HUL's BRSR microsite, but do not copy HUL's source code, exact layouts, photographs, colors, typography, branding, wording, or proprietary content. Create an original OmneVu design. Preserve the regulatory structure and question numbering, but express it through a distinctive OmneVu visual system.

Critical content and compliance rules
The public OmneVu website identifies Digilytics Systems LLP as the operating legal entity.

OmneVu is described as a team of software engineers and architects focused on SaaS solutions for B2B and B2C customers.

Registered office currently available publicly: 5, Prabhas, Sahakar Nagar-2, Pune, Maharashtra, India.

Public contact email: omnevu@gmail.com.

Public product families: OV Plan, OV Time(r), OV Retail, OV Inventory, OV Warranty(MS), OV EventMgmt, OV Profile, OV Sureway, OV NewsLetter, and OV Guru.

The public website does not currently provide a CIN/LLPIN, employee data, turnover, environmental metrics, governance committee details, ESG targets, assurance provider, stock-exchange information, or completed BRSR disclosures.

Never invent company statistics, legal identifiers, financial values, employee counts, environmental data, policy approvals, certifications, incidents, complaint counts, assurance claims, or targets.

Wherever verified data is missing, show a polished placeholder state such as "Data pending company validation", "Not yet reported", or "Applicability under review".

Include a visible global notice: "Demonstration disclosure interface. Company data is pending validation and approval."

Position this as a "BRSR-aligned voluntary responsible-business disclosure", not as an official listed-entity filing.

Do not use fake zeroes. If data is unknown, do not display 0.

Do not describe an indicator as assured unless an assurance provider and scope have been supplied.

Preserve official BRSR question IDs so real information can replace demonstration content later.

Project objective
Create a credible corporate reporting experience that:

makes a dense BRSR framework understandable to investors, customers, employees, suppliers, regulators, and the public;

allows readers to navigate from an approachable visual overview to formal question-level disclosures;

supports Essential and Leadership Indicators;

makes current-year and previous-year comparisons easy to understand;

exposes methodology, evidence, data status, and assurance status;

works well on desktop, tablet, mobile, keyboard, screen reader, and print;

uses structured local data so every disclosure can later be connected to a CMS or API;

feels like a real, polished annual-report microsite rather than a generic dashboard or SaaS landing page.

Technology requirements
Use:

React

TypeScript

Vite

Tailwind CSS

shadcn/ui where appropriate

React Router

Lucide React icons

Recharts only where a chart genuinely improves comprehension

Implementation requirements:

Build reusable typed components.

Store disclosure content in structured TypeScript or JSON data files.

Do not hard-code every disclosure directly into page JSX.

Use semantic HTML.

Add a functional mobile navigation drawer.

Add functional accordions, tabs, search, filters, download menus, and back-to-top behavior.

Persist URL fragments for question-level deep links.

When a disclosure anchor is opened from a URL, automatically open the correct accordion and scroll it into view.

Add print CSS so all accordions expand and the report becomes a clean printable document.

Add a simple working "Download full report" action that downloads or opens a clearly labelled demonstration PDF placeholder. If generating a PDF is not feasible, make the button open a modal explaining that the validated report PDF will be attached before publication.

Add CSV export for data tables using data generated in the browser.

Do not add authentication, a backend, or a database in the first version.

Avoid excessive dependencies.

Brand and art direction
Create an original OmneVu responsible-business design system. The visual tone should be:

credible;

modern;

responsible;

data-literate;

technology-oriented;

calm rather than flashy;

suitable for corporate disclosure;

visually richer than a government form but more formal than a SaaS marketing page.

Logo treatment
Use a compact inline SVG interpretation of the OmneVu OV identity for the microsite header. It should be a geometric, minimal mark combining an O and V, use currentColor where possible, and work at 24px and 160px. Use orange and green only as restrained brand accents. Include the text OmneVu beside the mark.

Do not draw a complex illustration in SVG. The SVG should only be used as a simple logo mark.

Color system
Use the following design tokens:

css
--background: #0C121B;
--surface: #121B27;
--surface-elevated: #182638;
--surface-subtle: #EAF1F7;
--text-primary: #F4F7FA;
--text-secondary: #A9B7C7;
--text-dark: #102030;
--border: #2A3B50;
--primary: #1479D2;
--primary-hover: #0E65B3;
--cyan: #16B9D4;
--orange: #FB994A;
--green: #20AE60;
--warning: #D99B2B;
--danger: #C94C5C;
Use:

dark navy for the report canvas and page banners;

white or very light blue surfaces for long disclosure tables;

blue-to-cyan gradients only for major highlights and CTAs;

orange as a limited attention/assurance accent;

green only for verified, completed, or positive status;

red only for actual warning/error states;

thin blue-gray borders rather than heavy shadows.

Do not assign all nine principles unrelated rainbow colors. Use a coherent system of blue, cyan, green, orange, and controlled tints. Each principle must also be identified by number, title, and icon so meaning never depends on color.

Typography
Use:

General Sans for display headings, weights 600 and 700;

Satoshi for body copy, UI, and data, weights 400, 500, and 600;

system sans-serif fallbacks if the fonts fail to load;

tabular numerals for all data values.

Typography scale:

report hero: clamp(2.5rem, 5vw, 5rem);

page title: clamp(2rem, 3.5vw, 3.5rem);

section heading: 28-36px;

card heading: 20-24px;

body: 16-18px;

table text: 14-16px;

labels/captions: 12-14px.

Maintain readable line lengths between 50 and 75 characters for narrative content.

Photography and imagery
Do not use HUL or Unilever images.

Use image areas sparingly and intentionally. Suitable topics include:

software engineers collaborating;

ethical technology;

cloud and data infrastructure;

employee wellbeing;

accessible product design;

digital security and privacy;

community and stakeholder collaboration;

energy-efficient digital infrastructure.

If real OmneVu photography is unavailable, use restrained abstract gradient compositions or clearly generic technology imagery. Do not imply that stock-photo people, offices, facilities, or activities are actual OmneVu operations. Add a CMS-friendly image field so these visuals can be replaced later.

Avoid:

generic leaf graphics;

excessive globes;

fake 3D sustainability illustrations;

decorative ESG icons with no informational purpose;

glassmorphism everywhere;

neon cyberpunk styling;

giant KPI cards filled with invented values.

Global website structure
Create these routes:

text
/brsr
/brsr/assurance
/brsr/general-disclosures
/brsr/management-process
/brsr/principle/1
/brsr/principle/2
/brsr/principle/3
/brsr/principle/4
/brsr/principle/5
/brsr/principle/6
/brsr/principle/7
/brsr/principle/8
/brsr/principle/9
/brsr/downloads
/brsr/methodology
Add a custom NotFound page for invalid routes.

Global header
Create a sticky header with:

OmneVu SVG logo and wordmark;

report label: Responsible Business & Sustainability;

desktop links: Overview, General Disclosures, Management & Process, Principles, Downloads;

report-wide search button;

"Download report" button;

mobile menu button.

The Principles item should open a mega menu or large dropdown containing P1 through P9, each with number and title.

The mobile menu should be a right-side drawer. It must list all report routes and allow nested principle navigation.

The header should start translucent over the landing hero, then become an opaque navy surface with a bottom border after scrolling.

Global disclosure notice
Under the header, include a narrow amber or orange status strip:

Demonstration disclosure interface. Company data is pending validation and approval.

Include a "Learn about data status" link that opens a small explanatory modal:

Verified public information is labelled "Publicly verified".

Unsupplied company information is labelled "Pending validation".

No indicator is treated as assured unless an assurance provider and scope are supplied.

The interface is BRSR-aligned and voluntary.

Global footer
Create a substantial but clean footer containing:

OmneVu logo and a short responsible-business statement;

report navigation;

P1-P9 links;

methodology and downloads;

contact email;

registered office;

disclosure-status notice;

copyright;

privacy and terms links pointing to the existing OmneVu pages;

"Back to top" control.

Do not include social icons because the current OmneVu social links are placeholders.

Landing page: /brsr
Hero
Create an editorial report hero, not a product-marketing hero.

Content:

eyebrow: OMNEVU RESPONSIBLE BUSINESS DISCLOSURE

H1: Technology with accountability. Progress with perspective.

description: A BRSR-aligned view of how OmneVu approaches governance, people, responsible technology, stakeholders, and environmental impact.

badge: Demonstration | Data pending validation

reporting year selector showing FY 2025-26 as a demonstration label, with a clear note that the final reporting period must be confirmed;

buttons: Explore disclosures and Download report;

metadata row:

Entity: Digilytics Systems LLP

Reporting basis: BRSR-aligned voluntary disclosure

Boundary: Pending validation

Last updated: Demonstration

Use a split layout on desktop. On the right, create a restrained abstract data composition using CSS, with nine labelled principle nodes connected to the report center. Do not use a decorative illustration that conveys fake operational data.

Report introduction
Add a two-column section:

left: "About this disclosure" narrative;

right: four small metadata cards for Framework, Reporting status, Data assurance, and Contact.

Use this copy:

About this disclosure

This microsite organizes OmneVu's responsible-business information using the structure of India's Business Responsibility and Sustainability Reporting framework. It is intended to improve transparency and prepare company information for validation, governance review, and future reporting.

Primary report cards
Create a three-card row:

Assurance and data status

label: Report foundation

description: Understand validation, methodology, evidence, and assurance status.

icon: ShieldCheck

Section A: General Disclosures

label: Entity and operating context

description: Company identity, products, operations, people, related entities, and material issues.

icon: Building2

Section B: Management and Process

label: Policy and governance

description: Policy coverage, procedures, targets, reviews, and sustainability oversight.

icon: Network

Make the cards approximately equal height, with a subtle image or abstract visual in the upper area and text below. Add arrow animation on hover. The entire card must be clickable and keyboard accessible.

Principle directory
Create a heading:

Section C: Principle-wise performance

Add a short explanation that Essential Indicators represent the core reporting layer and Leadership Indicators represent voluntary advanced practice.

Create a responsive three-column grid of nine principle cards:

Integrity and Ethics

Sustainable and Safe Products

Employee and Worker Wellbeing

Stakeholder Responsiveness

Human Rights

Environment

Responsible Public Policy

Inclusive Growth

Responsible Consumer Engagement

Every card must show:

principle number;

title;

one-sentence official-style summary;

Essential Indicator count;

Leadership Indicator count;

disclosure completion status;

meaningful Lucide icon;

"View principle" affordance.

Use these indicator counts:

Principle	Essential	Leadership
P1	7	2
P2	4	5
P3	15	6
P4	2	3
P5	10	5
P6	12	9
P7	2	1
P8	4	6
P9	6	5
The counts describe framework indicators, not company completion. Display company completion as Pending validation.

Material topics preview
Create a horizontal topic area with five BRSR-relevant topics for a SaaS business:

Data privacy and cybersecurity

Ethical product development

Employee capability and wellbeing

Responsible suppliers and cloud infrastructure

Customer trust and service continuity

Label these as Proposed topics for company validation, not as completed materiality findings.

Reporting workflow
Add a four-step section:

Collect

Validate

Approve

Publish

Explain that disclosure owners, evidence, calculations, and governance approvals must be completed before publication.

Assurance page: /brsr/assurance
The Assurance page should make it obvious that independent assurance has not yet been supplied.

Hero content:

title: Assurance and data status

description: How evidence, validation, methodology, and independent assurance are represented in this disclosure.

status badge: No independent assurance provider supplied

Create the following sections:

Current status

Internal data validation: Pending

Governance approval: Pending

Independent assurance: Not commissioned / information not supplied

Public report status: Demonstration

How assurance will be represented

Reasonable assurance

Limited assurance

Internally validated

Unassured

Not applicable

Evidence register

responsive table with Indicator ID, Evidence, Owner, Validation date, Assurance status;

sample rows must say "Placeholder evidence record", never fake document names;

table filters by principle and status.

Future assurance report structure

Scope

Criteria

Management responsibility

Practitioner responsibility

Opinion or conclusion

Exclusions

Appendix of assured indicators

Call to action

"Attach assurance statement"

open a non-functional informational modal explaining that a validated assurance document must be supplied by OmneVu.

Section A page: /brsr/general-disclosures
Create:

page hero;

introduction;

completion summary showing 7 groups and "Pending validation";

Expand All / Collapse All;

search within Section A;

seven full-width accordion groups with Roman-numeral badges.

Group I: Details of the entity
Use a three-column table:

| S. No. | Particulars | Response |

Rows:

Legal identifier: Data pending company validation

Name: Digilytics Systems LLP, with a "Publicly verified" badge

Year of incorporation: Pending validation

Registered office: 5, Prabhas, Sahakar Nagar-2, Pune, Maharashtra, India

Corporate address: Pending validation

Email: omnevu@gmail.com

Telephone: Pending validation

Website: https://www.omnevu.com/

Financial year: Pending confirmation

Stock exchanges: Not applicable based on current public information; confirm with company

Paid-up capital: Pending validation / applicability review

BRSR contact: Pending nomination

Reporting boundary: Pending validation

Add optional extension rows:

Assessment or assurance provider

Type and scope of assurance

Both must show "Not supplied".

Group II: Products and services
Add:

business activities table;

product/service table;

turnover-share columns must show "Pending validation";

list the known product families as proposed records;

NIC codes must show "Pending validation".

Group III: Operations
Add:

offices/facilities table;

markets served;

export share;

customer types;

only Pune, India may be shown as publicly verified;

all other operational metrics remain pending.

Group IV: Employees
Add empty-state versions of:

employee and worker composition table;

differently abled employee/worker table;

women in governance table;

three-year turnover-rate table.

Show a high-quality empty state:

Workforce data has not yet been supplied. This table is ready for validated employee and worker information by employment type and gender.

Group V: Related entities
Add the formal table for holding, subsidiary, associate, and joint-venture entities. Show "No validated related-entity register supplied."

Group VI: CSR details
Show:

CSR applicability: Under review

Turnover: Pending validation

Net worth: Pending validation

Group VII: Transparency and disclosure compliance
Add:

stakeholder complaint table for communities, investors, owners, employees/workers, customers, value-chain partners, and other;

material issues table with Risk/Opportunity, rationale, mitigation, and financial implications;

no fake counts;

proposed material topics may appear only in a clearly labelled planning panel outside the formal response table.

Section B page: /brsr/management-process
Create a responsive principle matrix with columns P1-P9 and rows for:

Policy coverage

Governance approval

Public policy link

Translation into procedures

Value-chain extension

Codes, standards, and certifications

Commitments, goals, and targets

Performance against goals

Since actual company policies are not supplied, cells should use states:

Pending mapping

Not supplied

Applicability under review

Clicking a cell should open a side drawer with:

question;

principle;

current status;

response;

evidence;

owner;

last updated;

assurance status.

Below the matrix, add:

Governance, leadership, and oversight
responsible leader statement;

highest implementation authority;

sustainability decision authority;

policy and compliance review;

external assessment;

reason for uncovered principles.

Use polished pending-validation states.

Add a clear mobile presentation. On small screens, do not show a compressed nine-column table. Use a question accordion, with P1-P9 responses stacked vertically.

Shared principle-page template
All nine principle pages should use the same template with different content.

Principle hero
Include:

breadcrumb;

principle number;

display title;

official-style principle summary;

Essential and Leadership counts;

overall status;

previous/next principle navigation.

Sticky page index
On desktop, use a sticky left rail listing:

Overview

Essential Indicators

Leadership Indicators

Evidence and methodology

On mobile, replace it with a compact sticky jump-menu button.

Indicator controls
Add:

tabs: Essential Indicators / Leadership Indicators;

Expand All / Collapse All;

indicator search;

status filter;

current/previous year display control;

print/export menu.

Disclosure accordion
Every indicator accordion should show:

canonical indicator ID;

full question or concise faithful title;

applicability badge;

response status;

short answer preview;

expanded formal response;

data table or narrative area;

evidence links;

methodology;

data owner;

last updated;

assurance status;

copy-link button.

When actual information is missing, provide a contextual empty state explaining what data is required. Never populate fake values.

Principle 1 page: /brsr/principle/1
Title: Integrity and Ethics

Summary: Businesses should conduct and govern themselves with integrity and in an ethical, transparent, and accountable manner.

Essential Indicators:

Training and awareness coverage

Monetary and non-monetary proceedings

Appeals and revisions

Anti-corruption and anti-bribery policy

Disciplinary action for bribery or corruption

Conflict-of-interest complaints

Corrective action

Leadership Indicators:

Value-chain awareness programmes

Board conflict-of-interest management

Use training tables, proceedings tables, two-year counts, policy cards, and corrective-action logs.

Principle 2 page: /brsr/principle/2
Title: Sustainable and Safe Products

Summary: Businesses should provide goods and services in a manner that is sustainable and safe.

Essential Indicators:

R&D and capital expenditure improving environmental/social impacts

Sustainable sourcing process and percentage

End-of-life reclamation processes

Extended Producer Responsibility

Leadership Indicators:

Life Cycle Assessments

Product/service environmental and social risks

Recycled or reused inputs

Reused, recycled, and safely disposed products or packaging

Reclaimed products and packaging

Adapt explanatory prompts to a SaaS company without changing the formal indicator. For example, let product-impact notes discuss software lifecycle, device/e-waste boundaries, cloud infrastructure, and responsible digital design, but label these as applicability considerations rather than company claims.

Principle 3 page: /brsr/principle/3
Title: Employee and Worker Wellbeing

Summary: Businesses should respect and promote the wellbeing of all employees, including those in their value chains.

Essential Indicators:

Wellbeing-benefit coverage

Retirement benefits

Workplace accessibility

Equal-opportunity policy

Parental-leave return and retention

Grievance mechanisms

Association or union membership

Health, safety, and skill training

Performance and career-development reviews

Occupational health and safety systems

Safety incidents

Safe and healthy workplace measures

Working-condition and safety complaints

Sites assessed

Corrective action

Leadership Indicators:

Life insurance or compensatory package

Value-chain statutory dues

Rehabilitation and re-employment

Transition assistance

Value-chain health-and-safety assessments

Corrective action following assessments

Use detailed workforce matrices, two-year comparison tables, policy cards, complaint tables, and accessible safety KPI layouts. All values remain pending validation.

Principle 4 page: /brsr/principle/4
Title: Stakeholder Responsiveness

Summary: Businesses should respect the interests of and be responsive to all stakeholders.

Essential Indicators:

Process for identifying key stakeholder groups

Stakeholder groups and engagement

Leadership Indicators:

Stakeholder-to-governance consultation

Use of consultation in environmental and social decisions

Engagement with vulnerable or marginalized groups

Create:

a stakeholder map;

a formal engagement table;

a consultation flow diagram using HTML/CSS;

outcome cards.

Label all stakeholder groups as proposed until validated.

Principle 5 page: /brsr/principle/5
Title: Human Rights

Summary: Businesses should respect and promote human rights.

Essential Indicators:

Human-rights training

Minimum-wage coverage

Median remuneration

Human-rights focal point

Grievance mechanism

Human-rights complaints

Complainant protection

Human-rights clauses in agreements

Sites assessed

Corrective action

Leadership Indicators:

Process changes after grievances

Human-rights due diligence

Visitor accessibility

Value-chain assessment

Corrective action

Use wage and training tables without sample numbers. Include sensitive-data design that avoids exposing personal information.

Principle 6 page: /brsr/principle/6
Title: Environment

Summary: Businesses should respect, protect, and make efforts to restore the environment.

Essential Indicators:

Energy consumption and intensity

PAT scheme applicability

Water withdrawal, consumption, and intensity

Zero Liquid Discharge

Non-GHG air emissions

Scope 1 and Scope 2 greenhouse-gas emissions

GHG reduction projects

Waste generation, recovery, and disposal

Waste-management practices

Ecologically sensitive operations

Environmental Impact Assessments

Environmental compliance

Leadership Indicators:

Renewable/non-renewable energy

Water discharge

Water-stress facilities

Scope 3 emissions

Biodiversity impacts

Resource-efficiency initiatives

Business continuity and disaster management

Value-chain environmental impacts

Value-chain environmental assessments

This is the data-dense showcase page. Create reusable metric tables for energy, water, emissions, and waste.

Add chart containers that show a high-quality "Awaiting validated data" state. Do not render fake chart lines or bars. Once data arrays are populated, charts should appear automatically.

For a SaaS business, include a methodology planning note describing possible boundaries:

purchased electricity for offices;

cloud service usage where supplier data is available;

employee business travel;

commuting;

purchased devices;

e-waste;

supplier emissions.

This planning note must not imply that OmneVu has measured these categories.

Principle 7 page: /brsr/principle/7
Title: Responsible Public Policy

Summary: Businesses engaging in public and regulatory policy should do so responsibly and transparently.

Essential Indicators:

Trade and industry association affiliations

Corrective action relating to anti-competitive conduct

Leadership Indicator:

Public-policy positions advocated

Use an affiliation table, adverse-order table, and policy-position register. Show "No validated affiliation or advocacy register supplied."

Principle 8 page: /brsr/principle/8
Title: Inclusive Growth

Summary: Businesses should promote inclusive growth and equitable development.

Essential Indicators:

Social Impact Assessments

Rehabilitation and resettlement projects

Community grievance mechanisms

Local and inclusive sourcing

Leadership Indicators:

Mitigation of negative social impacts

CSR projects in aspirational districts

Preferential procurement

Traditional-knowledge intellectual-property benefits

Corrective action following disputes

CSR beneficiaries

Create impact-assessment tables, sourcing comparisons, project cards, and beneficiary tables. Use applicability-review states appropriate for a software company.

Principle 9 page: /brsr/principle/9
Title: Responsible Consumer Engagement

Summary: Businesses should engage with and provide value to consumers in a responsible manner.

Essential Indicators:

Consumer complaint and feedback mechanisms

Product/service information coverage

Consumer complaints by category

Product recalls

Cybersecurity and data-privacy framework

Corrective action

Leadership Indicators:

Product/service information channels

Consumer education

Essential-service disruption notification

Information beyond legal requirements and satisfaction surveys

Data breaches and personal-information impact

For OmneVu, make privacy, cybersecurity, service continuity, customer support, and responsible product information the primary UX themes. Do not claim that policies or controls exist unless supplied. Link the existing OmneVu privacy page only as an existing public document, with status "Public document available; BRSR mapping pending review."

Downloads page: /brsr/downloads
Create sections for:

Full report

Data tables

Policies and governance

Methodology

Assurance

Cards must show:

document title;

description;

reporting year;

file format;

status;

last updated;

download button.

Use disabled or informational buttons for unavailable files. Do not fabricate PDFs.

Provide functional CSV downloads for any on-page demonstration table structures, even if cells contain status text.

Methodology page: /brsr/methodology
Create:

Reporting approach

Reporting boundary

Data collection and ownership

Calculation and estimation

Data quality and validation

Assurance

Restatements

Definitions and abbreviations

Use a definition list for:

BRSR

NGRBC

Essential Indicator

Leadership Indicator

Reporting boundary

Value chain

Independent assurance

Reasonable assurance

Limited assurance

Make all unsupplied methodology fields visibly pending.

Report-wide search
Create a Cmd/Ctrl+K search experience that searches:

page titles;

section names;

principle names;

indicator IDs;

indicator questions;

policy titles;

status labels.

Results should show:

title;

section or principle;

indicator ID;

matched text;

route.

Selecting a disclosure result should navigate to the route, open the accordion, and focus the indicator heading.

Reusable data model
Use TypeScript interfaces similar to:

ts
type DisclosureStatus =
  | "publicly-verified"
  | "pending-validation"
  | "not-reported"
  | "not-applicable"
  | "applicability-review";

type AssuranceStatus =
  | "reasonable"
  | "limited"
  | "internally-validated"
  | "unassured"
  | "not-supplied";

interface EvidenceItem {
  id: string;
  label: string;
  href?: string;
  owner?: string;
  validationDate?: string;
  status: DisclosureStatus;
}

interface PeriodValue {
  period: string;
  value?: number | string;
  unit?: string;
  numerator?: number;
  denominator?: number;
  note?: string;
}

interface Disclosure {
  id: string;
  section: "A" | "B" | "C";
  principle?: number;
  tier?: "essential" | "leadership";
  number: string;
  title: string;
  question: string;
  status: DisclosureStatus;
  applicabilityReason?: string;
  responseType:
    | "narrative"
    | "key-value"
    | "table"
    | "period-comparison"
    | "metric-series"
    | "policy"
    | "corrective-action";
  narrative?: string;
  periods?: PeriodValue[];
  table?: {
    columns: Array<{ key: string; label: string }>;
    rows: Array<Record<string, string | number | null>>;
  };
  evidence: EvidenceItem[];
  methodology?: string;
  dataOwner?: string;
  lastUpdated?: string;
  assurance: AssuranceStatus;
}
Create central data files:

text
src/data/report.ts
src/data/generalDisclosures.ts
src/data/managementProcess.ts
src/data/principles/p1.ts
...
src/data/principles/p9.ts
src/data/methodology.ts
Reusable component requirements
Create:

SiteHeader

MobileNavigation

ReportStatusStrip

ReportHero

ReportCard

PrincipleCard

Breadcrumbs

PageHero

DisclosureToolbar

DisclosureAccordion

DisclosureStatusBadge

AssuranceBadge

KeyValueTable

PrincipleMatrix

PeriodComparisonTable

ThreeYearTrendTable

WorkforceMatrix

ComplaintsTable

EnvironmentalMetricTable

PolicyCard

EvidenceDrawer

CorrectiveActionLog

EmptyDisclosureState

DownloadMenu

ReportSearch

BackToTop

SiteFooter

Interaction and motion
Use restrained motion:

180-240ms hover and focus transitions;

accordion expansion with subtle height/opacity movement;

landing cards rise no more than 4px on hover;

arrow icons translate slightly on hover;

principle nodes in the hero can animate into place once;

no parallax;

no constant floating;

no cursor-following effects;

no scroll hijacking;

respect prefers-reduced-motion.

Responsive behavior
Desktop
maximum content width around 1440px;

generous gutters;

three-column card grids;

sticky left principle index;

wide tables with sticky first columns where necessary.

Tablet
two-column card grids;

compact header;

principle matrix may use horizontal scrolling;

keep question column sticky.

Mobile
single-column cards;

mobile navigation drawer;

no compressed nine-column matrices;

convert complex tables into labelled row cards where practical;

otherwise provide accessible horizontal scrolling with clear affordance;

sticky jump-menu for page sections;

buttons at least 44px high;

no text below 12px;

avoid fixed elements obscuring disclosure content.

Accessibility requirements
Meet WCAG 2.2 AA contrast.

Add a "Skip to content" link.

Use proper heading hierarchy.

All interactive elements must work by keyboard.

Accordions must expose aria-expanded and aria-controls.

Tabs must use correct tab roles and arrow-key behavior.

Drawers and modals must trap focus and return focus on close.

Provide visible focus rings.

Do not communicate status using color alone.

Add text alternatives to meaningful images.

Treat decorative visuals as aria-hidden.

Charts must have an accessible data table.

Tables need captions and scoped headers.

Make link purpose understandable out of context.

Table and data-display requirements
Align numbers right and labels left.

Use tabular numerals.

Keep units in headers or beside values.

Support current and previous period labels from report metadata.

Preserve unavailable values as text statuses, not zeroes.

Use N.A. only when an applicability reason exists.

Add footnote support.

Add a "View methodology" action for calculated values.

Add CSV export.

Never use 3D charts, gauges, or pie charts.

Do not render a chart unless at least two valid numeric values exist.

SEO and metadata
Add:

title templates for every route;

meta descriptions;

Open Graph metadata;

canonical placeholders;

organization structured data using only verified public information;

no fake ratings, founding date, employee count, or legal identifier.

Suggested home title:

OmneVu Responsible Business & Sustainability Disclosure

Suggested description:

Explore OmneVu's BRSR-aligned approach to governance, responsible technology, people, stakeholders, consumers, and environmental impact.

Quality and acceptance criteria
Before considering the build complete, ensure:

Every route listed in this prompt exists and is navigable.

All nine principle pages use the shared template but contain their correct indicator lists.

Section A contains all seven groups.

Section B contains policy/process and governance/oversight content.

Essential and Leadership Indicators are clearly separated.

No company value has been invented.

Missing data states are polished and contextual.

The demonstration notice is visible globally.

All cards, accordions, tabs, filters, search, drawers, modals, and navigation work.

Search can locate an indicator ID and deep-link to it.

Mobile layouts do not compress wide regulatory tables into unreadable text.

Print view expands all disclosures and removes nonessential navigation.

Dark and light content surfaces have accessible contrast.

The design is recognizably OmneVu but does not look like the current default Material UI site.

The design does not copy HUL branding or proprietary content.

There are no lorem ipsum blocks.

There are no fake sustainability achievements.

There are no broken placeholder links.

The project compiles without TypeScript errors.

The result feels like a polished corporate annual-report microsite.

Build order
Implement in this order:

Design tokens, typography, and global layout.

Typed data model.

Header, footer, status notice, and search.

Landing page.

Section A.

Section B.

Shared principle-page template.

Populate P1-P9 indicator structures.

Assurance, Downloads, and Methodology pages.

Responsive refinements.

Accessibility refinements.

Print styles and CSV export.

Final QA.

Do not stop after generating the homepage. Build the complete routed microsite and verify that all routes, interactions, responsive states, and disclosure structures work.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://omnevu-impact-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5a694b61-89cd-4d3b-b6f9-dda3a0bb1c90).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
