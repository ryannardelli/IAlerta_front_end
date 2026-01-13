export type SentenceAnalysis = {
  text: string;
  score: number;
};

export type AIAnalysisResult = {
  likelihood: string;
  reasoning: string;
  confidence: number;
  patterns: string[];
  sentences: SentenceAnalysis[];
};

export type AnalysisState = {
  result: AIAnalysisResult | null;
  loading: boolean;
  error: string | null;
};

export type AIAnalysisResultWithProvider = AIAnalysisResult & {
  provider: string;
  raw: [];
};


export type AnalysisAction =
  | { type: "START_ANALYSIS" }
  | { type: "SET_RESULT"; payload: AIAnalysisResultWithProvider }
  | { type: "SET_ERROR"; payload: string }
  | { type: "RESET_ANALYSIS" };
