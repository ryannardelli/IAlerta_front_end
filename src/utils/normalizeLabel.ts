import type { NormalizedLabel } from "../types/labelPTBR";

export function normalizeLabel(label: string): NormalizedLabel {
  if (label.toLowerCase().includes("ai")) return "AI";
  return "HUMAN";
}
