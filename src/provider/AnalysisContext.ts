import { createContext } from "react";
import type { AnalysisAction, AnalysisState } from "../model/AIAnalysisResult ";

type AnalysisContextType = {
  state: AnalysisState;
  analyzeText: (text: string) => Promise<void>;
  resetAnalysis: () => void;
  dispatch: React.Dispatch<AnalysisAction>;
};

export const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);
