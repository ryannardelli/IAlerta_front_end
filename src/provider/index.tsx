import { useReducer } from "react";
import { analysisReducer, initialState } from "../reducer/analysisReducer";
import { AnalysisContext } from "./AnalysisContext";
import { detectAIContent } from "../services/detectIa";
import { detectAIImage } from "../services/detectAIImage";

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

  async function analyzeImage(file: File) {
    dispatch({ type: "START_ANALYSIS" });

    try {
      const result = await detectAIImage(file);

      dispatch({
          type: "SET_RESULT",
          payload: {
            provider: "IA Detector",
            raw: result, // se quiser manter raw, adicione no tipo também
            likelihood: result[0].label === "ai" ? "AI-generated" : "Human",
            confidence: result[0].score,
            reasoning: "Alguma explicação aqui",
            patterns: [],
            sentences: [],
          },
        });


      // dispatch({
      //   type: "SET_RESULT",
      //   payload: {
      //     provider: "IA Detector",
      //     raw: result, // array que vem da API
      //     likelihood: result[0].label === "ai" ? "AI-generated" : "Human",
      //     confidence: result[0].score,
      //   }
      // });


      // dispatch({
      //   type: "SET_RESULT",
      //   payload: result,
      // });
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
    <AnalysisContext.Provider value={{ state, dispatch, analyzeText, resetAnalysis, analyzeImage }}>
      {children}
    </AnalysisContext.Provider>
  );
}
