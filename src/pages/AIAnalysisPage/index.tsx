// export default function AIAnalysisPage() {
//   // Dados mockados
//   const result = {
//     likelihood: "AI-generated",
//     reasoning: "Overall AI score: 77.2%",
//     confidence: 0.772,
//     patterns: ["AI patterns detected", "Perfect grammar", "Long, structured sentences"],
//     sentences: [
//       { text: "É de extrema importância compreender que...", score: 0.75 },
//       { text: "Ademais, é fundamental reconhecer que...", score: 0.80 },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
//       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
//         {/* Header */}
//         <div className="flex flex-col items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">
//             Análise de Conteúdo
//           </h1>
//           <span
//             className={`px-4 py-1 rounded-full text-sm font-semibold ${
//               result.likelihood === "AI-generated"
//                 ? "bg-red-100 text-red-700"
//                 : "bg-green-100 text-green-700"
//             }`}
//           >
//             {result.likelihood}
//           </span>
//           <p className="mt-2 text-gray-500">{result.reasoning}</p>
//         </div>

//         {/* Barra de progresso */}
//         <div className="mb-6">
//           <p className="text-gray-700 font-medium mb-1">Confiança: {(result.confidence * 100).toFixed(1)}%</p>
//           <div className="w-full bg-gray-200 rounded-full h-4">
//             <div
//               className="bg-red-500 h-4 rounded-full transition-all duration-500"
//               style={{ width: `${result.confidence * 100}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Padrões detectados */}
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">Padrões detectados:</h2>
//           <ul className="flex flex-wrap gap-2">
//             {result.patterns.map((pattern, idx) => (
//               <li
//                 key={idx}
//                 className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
//               >
//                 {pattern}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Detalhes frase a frase */}
//         <div>
//           <h2 className="text-lg font-semibold text-gray-800 mb-2">
//             Análise por frase
//           </h2>
//           <div className="space-y-4">
//             {result.sentences.map((sentence, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gray-50 p-4 rounded-lg border border-gray-200"
//               >
//                 <p className="text-gray-800 mb-1">{sentence.text}</p>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div
//                     className="bg-red-400 h-2 rounded-full"
//                     style={{ width: `${sentence.score * 100}%` }}
//                   ></div>
//                 </div>
//                 <p className="text-sm text-gray-500 mt-1">
//                   Chance de IA: {(sentence.score * 100).toFixed(1)}%
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Botão voltar */}
//         <div className="mt-8 flex justify-center">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition cursor-pointer">
//             Voltar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useAnalysis } from "../../hooks/useAnalysis";
import { EmptyResult } from "../../components/EmptyResult";

export default function AIAnalysisPage() {
  const { state, dispatch } = useAnalysis();
  const result = state.result;

  // Mock apenas para desenvolvimento
  useEffect(() => {
    dispatch({
      type: "SET_RESULT",
      payload: {
        likelihood: "AI-generated",
        reasoning: "Probabilidade geral de IA: 77,2%",
        confidence: 0.772,
        patterns: [
          "Padrões típicos de IA",
          "Gramática perfeita",
          "Frases longas e estruturadas",
        ],
        sentences: [
          { text: "É de extrema importância compreender que...", score: 0.75 },
          { text: "Ademais, é fundamental reconhecer que...", score: 0.8 },
        ],
      },
    });
  }, [dispatch]);

  /* ---------- Empty State ---------- */
  if (!result) {
    return (
      <EmptyResult />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Análise de Conteúdo
          </h1>

          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              result.likelihood === "AI-generated"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {result.likelihood === "AI-generated"
              ? "Gerado por IA"
              : "Escrito por humano"}
          </span>

          <p className="mt-2 text-gray-500">{result.reasoning}</p>
        </div>

        {/* Confiança */}
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-1">
            Confiança: {(result.confidence * 100).toFixed(1)}%
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-red-500 h-4 rounded-full transition-all"
              style={{ width: `${result.confidence * 100}%` }}
            />
          </div>
        </div>

        {/* Padrões */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Padrões detectados</h2>
          <ul className="flex flex-wrap gap-2">
            {result.patterns.map((pattern, idx) => (
              <li
                key={idx}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {pattern}
              </li>
            ))}
          </ul>
        </div>

        {/* Frases */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Análise por frase</h2>
          <div className="space-y-4">
            {result.sentences.map((sentence, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
              >
                <p className="mb-1 text-gray-800">{sentence.text}</p>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-red-400 h-2 rounded-full"
                    style={{ width: `${sentence.score * 100}%` }}
                  />
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Chance de IA: {(sentence.score * 100).toFixed(1)}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Voltar */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => dispatch({ type: "CLEAR_RESULT" })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold cursor-pointer"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
