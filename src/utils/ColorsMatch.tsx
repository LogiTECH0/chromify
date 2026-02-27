import type { RGBA } from "../types/Types";
export function colorsMatch(c1: RGBA, c2: RGBA) { 
  const tolerance = 20;
  for (let i = 0; i < 3; i++) {
    if (Math.abs(c1[i] - c2[i]) > tolerance) {
      return false;
    }
  }
  return true;
}