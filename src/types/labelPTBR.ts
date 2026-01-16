export const labelPTBR: Record<RawItem["label"], string> = {
  "AI-generated": "Gerado por IA",
  "Human-written": "Escrito por humano",
};

export type RawItem = {
  label: "AI-generated" | "Human-written";
  score: number;
};

export type FAQ = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

