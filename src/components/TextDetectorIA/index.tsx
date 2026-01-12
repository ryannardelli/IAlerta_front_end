import { useState } from "react";
import { Sparkles, ScanText, Text } from "lucide-react";
import { detectAIContent } from "../../services/detectIa";
import { useNavigate } from "react-router";

export function TextDetectorIA() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleAnalyze() {
    if (!text.trim()) return;
     navigate("/loading-result");
    try {
      const res = await detectAIContent(text);
      navigate("/result-analysis", { state: { result: res } });
      setResult(res);
    } catch (err) {
      console.error("Erro ao detectar IA:", err);
      navigate("/");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
      <div>
        {/* Texto e Input */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Detectar IA em Texto
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 max-w-md">
            Cole ou digite o texto abaixo para analisar se ele foi gerado por inteligência artificial.
          </p>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Cole aqui o texto que deseja analisar..."
            rows={8}
            className="w-full resize-none rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition cursor-pointer disabled:opacity-50"
          >
            <ScanText className="w-5 h-5" />
            Analisar texto
          </button>

          {/* Resultado */}
          {result && (
            <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <p><strong>Probabilidade de IA:</strong> {result.probability}</p>
              <p><strong>Gerado por IA?</strong> {result.ai_generated ? "Sim" : "Não"}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
