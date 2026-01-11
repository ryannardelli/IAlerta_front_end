import { useReducer } from "react";
import { analysisReducer, initialState } from "../reducer/analysisReducer";
import { AnalysisContext } from "./AnalysisContext";

export function AnalysisProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(analysisReducer, initialState);

  return (
    <AnalysisContext.Provider value={{ state, dispatch }}>
      {children}
    </AnalysisContext.Provider>
  );
}
