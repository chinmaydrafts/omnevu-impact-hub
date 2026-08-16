import { p1 } from "./p1";
import { p2 } from "./p2";
import { p3 } from "./p3";
import { p4 } from "./p4";
import { p5 } from "./p5";
import { p6 } from "./p6";
import { p7 } from "./p7";
import { p8 } from "./p8";
import { p9 } from "./p9";
import type { PrincipleContent } from "../types";

export const principleContent: Record<string, PrincipleContent> = {
  "1": p1,
  "2": p2,
  "3": p3,
  "4": p4,
  "5": p5,
  "6": p6,
  "7": p7,
  "8": p8,
  "9": p9,
};

export const allPrincipleContent: PrincipleContent[] = Object.values(principleContent);
