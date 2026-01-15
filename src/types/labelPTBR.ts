// export const labelPTBR: Record<string, string> = {
//   "Human-written": "Escrito por humano",
//   "AI-generated": "Gerado por IA",
// }

export const labelPTBR: Record<RawItem["label"], string> = {
  "AI-generated": "Gerado por IA",
  "Human-written": "Escrito por humano",
};


export type RawItem = {
  label: "AI-generated" | "Human-written";
  score: number;
};
