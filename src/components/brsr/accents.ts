/** Topic accent per NGRBC principle. Values mirror the OmneVu brand scale in styles.css. */
export type PrincipleAccent = {
  /** Accent hex, used through the --accent custom property. */
  color: string;
  /** Pale contextual surface for the card visual area. */
  tint: string;
  /** Short visual theme used for the abstract artwork variant. */
  art: "grid" | "arcs" | "waves" | "bars" | "rings" | "mesh" | "columns" | "nodes" | "shield";
};

export const PRINCIPLE_ACCENTS: Record<number, PrincipleAccent> = {
  1: { color: "#1268a8", tint: "#eaf3f8", art: "columns" },
  2: { color: "#1aafc4", tint: "#e8f6f8", art: "rings" },
  3: { color: "#229a62", tint: "#eaf5ee", art: "arcs" },
  4: { color: "#ee8a42", tint: "#fff1e6", art: "waves" },
  5: { color: "#a34e78", tint: "#f9edf3", art: "nodes" },
  6: { color: "#1b7a4b", tint: "#e8f3ec", art: "bars" },
  7: { color: "#c99a3d", tint: "#fbf3e2", art: "grid" },
  8: { color: "#158a8d", tint: "#e7f4f4", art: "mesh" },
  9: { color: "#d8603c", tint: "#fdeee8", art: "shield" },
};

export const getAccent = (n: number): PrincipleAccent =>
  PRINCIPLE_ACCENTS[n] ?? { color: "#1268a8", tint: "#eaf3f8", art: "grid" };
