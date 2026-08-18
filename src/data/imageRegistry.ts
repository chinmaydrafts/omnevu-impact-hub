/**
 * Central editorial image registry.
 *
 * NOTE FOR THE COMPANY: every image below is an *editorial placeholder* sourced
 * from royalty-free libraries (Unsplash). None of them depict OmneVu people,
 * offices, customers or facilities, and none of them may be read as evidence for
 * any disclosure. They must be replaced with approved OmneVu photography before
 * public release. No third-party corporate assets are used.
 *
 * Components must reference keys from this registry rather than embedding URLs.
 */

export interface EditorialImage {
  /** Base Unsplash asset URL without sizing parameters. */
  base: string;
  /** Descriptive alt text. Empty string only for purely decorative usage. */
  alt: string;
  /** Deliberate CSS object-position focal point. */
  focal: string;
  /** Local CSS gradient shown before load and if the remote asset fails. */
  fallback: string;
  /** Attribution / provenance note kept with the asset. */
  source: string;
}

const U = (id: string) => `https://images.unsplash.com/${id}`;

export const imageRegistry = {
  hero: {
    base: U("photo-1522071820081-009f0129c71c"),
    alt: "A software product team working together around a table with laptops and notes in a daylit office.",
    focal: "70% 45%",
    fallback: "linear-gradient(135deg, #081B2B 0%, #11334A 55%, #14506e 100%)",
    source: "Unsplash — editorial placeholder",
  },
  assurance: {
    base: U("photo-1454165804606-c3d57bc86b40"),
    alt: "Printed report pages, charts and review annotations spread across a desk during an evidence review.",
    focal: "50% 55%",
    fallback: "linear-gradient(140deg, #0d2739 0%, #1478B8 120%)",
    source: "Unsplash — editorial placeholder",
  },
  generalDisclosures: {
    base: U("photo-1497366754035-f200968a6e72"),
    alt: "A contemporary open-plan workplace with desks, screens and meeting space in natural light.",
    focal: "50% 50%",
    fallback: "linear-gradient(140deg, #12324a 0%, #ED8B43 150%)",
    source: "Unsplash — editorial placeholder",
  },
  managementProcess: {
    base: U("photo-1517245386807-bb43f82c33c4"),
    alt: "Colleagues planning at a whiteboard covered with process notes during a governance workshop.",
    focal: "55% 40%",
    fallback: "linear-gradient(140deg, #102c34 0%, #239A64 150%)",
    source: "Unsplash — editorial placeholder",
  },
  people: {
    base: U("photo-1573164713988-8665fc963095"),
    alt: "An engineer working at a laptop in a shared workspace, seen from a candid side angle.",
    focal: "45% 40%",
    fallback: "linear-gradient(140deg, #11334A 0%, #1AAFC1 160%)",
    source: "Unsplash — editorial placeholder",
  },
  infrastructure: {
    base: U("photo-1558494949-ef010cbdcc31"),
    alt: "A data-centre corridor of server racks, representing the digital infrastructure behind cloud software.",
    focal: "50% 50%",
    fallback: "linear-gradient(140deg, #071c28 0%, #1478B8 150%)",
    source: "Unsplash — editorial placeholder",
  },
  stakeholders: {
    base: U("photo-1524178232363-1fb2b075b655"),
    alt: "A cross-functional group in discussion around a shared table during a collaborative workshop.",
    focal: "50% 45%",
    fallback: "linear-gradient(140deg, #12324a 0%, #C39A45 160%)",
    source: "Unsplash — editorial placeholder",
  },
  consumerTrust: {
    base: U("photo-1550751827-4bd374c3f58b"),
    alt: "Close view of security and monitoring code on a screen, representing privacy and cybersecurity work.",
    focal: "50% 50%",
    fallback: "linear-gradient(140deg, #081B2B 0%, #9B4B72 170%)",
    source: "Unsplash — editorial placeholder",
  },
  productLifecycle: {
    base: U("photo-1517048676732-d65bc937f952"),
    alt: "A small team reviewing product work together across laptops and printed notes.",
    focal: "50% 40%",
    fallback: "linear-gradient(140deg, #0e2b3d 0%, #1AAFC1 160%)",
    source: "Unsplash — editorial placeholder",
  },
  methodology: {
    base: U("photo-1531973576160-7125cd663d86"),
    alt: "Close-up of structured handwritten notes and documentation on grid paper beside a laptop.",
    focal: "50% 55%",
    fallback: "linear-gradient(140deg, #14202b 0%, #536874 160%)",
    source: "Unsplash — editorial placeholder",
  },
  atmosphere: {
    base: U("photo-1521737604893-d14cc237f11d"),
    alt: "A wide, atmospheric view of a working team in a softly lit contemporary office.",
    focal: "50% 45%",
    fallback: "linear-gradient(120deg, #04121E 0%, #11334A 100%)",
    source: "Unsplash — editorial placeholder",
  },
} satisfies Record<string, EditorialImage>;

export type ImageKey = keyof typeof imageRegistry;

/** Consistent colour grade applied to every editorial photograph. */
export const IMAGE_GRADE = "saturate(0.82) contrast(1.04) brightness(0.96)";

/** Build a sized Unsplash URL. Keeps a single sizing convention site-wide. */
export function imageUrl(key: ImageKey, width: number, quality = 68) {
  return `${imageRegistry[key].base}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

/** Responsive srcSet across the widths actually used by the layout. */
export function imageSrcSet(key: ImageKey, widths: number[] = [640, 1024, 1600, 2000]) {
  return widths.map((w) => `${imageUrl(key, w)} ${w}w`).join(", ");
}

/** Principle number -> shared editorial image. Nine principles, six photographs. */
export const PRINCIPLE_IMAGE: Record<number, ImageKey> = {
  1: "assurance",
  2: "productLifecycle",
  3: "people",
  4: "stakeholders",
  5: "people",
  6: "infrastructure",
  7: "managementProcess",
  8: "stakeholders",
  9: "consumerTrust",
};
