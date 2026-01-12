import type { AnalysisAction, AnalysisState } from "../model/AIAnalysisResult ";

export const initialState: AnalysisState = {
  result: null,
  loading: false,
  error: null,
};

export function analysisReducer(
  state: AnalysisState,
  action: AnalysisAction
): AnalysisState {
  switch (action.type) {
    case "START_ANALYSIS":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "SET_RESULT":
      return {
        result: action.payload,
        loading: false,
        error: null,
      };

    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "RESET_ANALYSIS":
      return initialState;

    default:
      return state;
  }
}
