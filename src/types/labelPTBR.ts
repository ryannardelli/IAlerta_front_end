export type NormalizedLabel = "AI" | "HUMAN";

export function normalizeLabel(label: string): NormalizedLabel {
  if (label.toLowerCase().includes("ai")) return "AI";
  return "HUMAN";
}

export const labelPTBR: Record<string, string> = {
  "AI-generated": "Gerado por IA",
  "Human-written": "Escrito por humano",
  "ai": "Gerado por IA",
  "hum": "Escrito por humano",
  "AI": "Gerado por IA",
  "HUMAN": "Humano",
};

export type RawItem = {
  label: "AI-generated" | "Human-written" | "AI" | "HUMAN";
  score: number;
};

