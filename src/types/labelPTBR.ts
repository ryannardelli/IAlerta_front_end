export type NormalizedLabel = "AI" | "HUMAN";

export function normalizeLabel(label: string): NormalizedLabel {
  if (label.toLowerCase().includes("ai")) return "AI";
  return "HUMAN";
}

export const labelPTBR: Record<string, string> = {
  "AI-generated": "Gerado por IA",
  "Human-written": "Escrito por humano",
  "AI": "Gerado por IA",
  "HUMAN": "Humano",
  "Real": "Humano",
  "Fake": "IA",
  "ai": "IA",
  "hum": "Humano"
};

export type RawItem = {
  label: "AI-generated" | "Human-written" | "AI" | "HUMAN";
  score: number;
};

