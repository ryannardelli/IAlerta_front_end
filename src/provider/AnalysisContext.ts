import { createContext } from "react";
import type { AnalysisAction, AnalysisState } from "../model/AIAnalysisResult ";

type AnalysisContextType = {
  state: AnalysisState;
  dispatch: React.Dispatch<AnalysisAction>;
};

export const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);
