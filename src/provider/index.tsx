import { useReducer } from "react";
import { analysisReducer, initialState } from "../reducer/analysisReducer";
import { AnalysisContext } from "./AnalysisContext";
import { detectAIContent } from "../services/detectIa";

export function AnalysisProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(analysisReducer, initialState);

  async function analyzeText(text: string) {
    dispatch({ type: "START_ANALYSIS" });

    try {
      const result = await detectAIContent(text);

      dispatch({
        type: "SET_RESULT",
        payload: result,
      });
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message ?? "Erro inesperado",
      });
    }
  }

  function resetAnalysis() {
    dispatch({ type: "RESET_ANALYSIS" });
  }

  return (
    <AnalysisContext.Provider value={{ state, dispatch, analyzeText, resetAnalysis }}>
      {children}
    </AnalysisContext.Provider>
  );
}
