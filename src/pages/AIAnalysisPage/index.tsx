import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAnalysis } from "../../hooks/useAnalysis";
import { EmptyResult } from "../../components/EmptyResult";
import { ButtonBackAnalyse } from "../../components/ButtonBackAnalyse";
import { labelPTBR, type RawItem } from "../../types/labelPTBR";

export default function AIAnalysisPage() {
  const { state } = useAnalysis();
  const navigate = useNavigate();

  console.log(state);

  const rawItems: RawItem[] = state.result?.raw ?? [];
  const result = state.result;

  useEffect(() => {
    if (!result) {
      navigate("/");
    }
  }, [result, navigate]);

  if (!result) {
    return <EmptyResult />;
  }

    const isAI =
    result.likelihood === "AI-generated" ||
    result.likelihood === "AI";

  const confidencePercent = (result.confidence * 100).toFixed(1) ?? 0;

  return (
    <div className="min-h-screen from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 md:p-10">

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Resultado da Análise
          </h1>
          <p className="text-gray-500 mt-2">
            Detecção de autoria por Inteligência Artificial
          </p>
        </div>

        <div
            className={`rounded-2xl p-6 mb-8 border ${
              isAI ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              {!state.result?.confidence ? (
                <>
                  <span
                  className={`text-sm font-semibold px-4 py-1 rounded-full mb-3 ${
                    isAI ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                  }`}
                >
                  {isAI ? "Conteúdo gerado por IA" : "Conteúdo provavelmente humano"}
                </span>
                <p className="text-gray-500 mt-1 text-lg">
                  Resultado fornecido pelo provedor: <strong>{result.provider}</strong>
                </p>
                </>
              ) : (
                <>
                  <span
                    className={`text-sm font-semibold px-4 py-1 rounded-full mb-3 ${
                      isAI ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                    }`}
                  >
                    {isAI ? "Conteúdo gerado por IA" : "Conteúdo provavelmente humano"}
                  </span>

                  <p className="text-5xl font-bold text-gray-800">
                    {confidencePercent}%
                  </p>

                  <p className="text-gray-500 mt-1">Nível de confiança</p>
                </>
              )}
            </div>
          </div>

        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Distribuição de probabilidades
          </h2>

          <div className="space-y-4">
            {rawItems.map((item, idx) => {
              const percent = (item.score * 100).toFixed(1);

              const translatedLabel = labelPTBR[item.label] || item.label;

              return (
                <div key={idx}>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{translatedLabel}</span>
                    <span>{percent}%</span>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className={`h-2 rounded-full ${
                        item.label === "AI-generated"
                          ? "bg-red-400"
                          : "bg-green-400"
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mb-10">
          Análise realizada por{" "}
          <span className="font-medium">{result.provider}</span>
        </div>

        <ButtonBackAnalyse label="Nova análise" />
      </div>
    </div>
  );
}
