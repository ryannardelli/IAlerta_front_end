import { useState } from "react";
import { Sparkles, ScanText } from "lucide-react";
import { useNavigate } from "react-router";
import { useAnalysis } from "../../hooks/useAnalysis";

export function TextDetectorIA() {
  const [text, setText] = useState("");
  const { analyzeText, state } = useAnalysis();
  const navigate = useNavigate();

  async function handleAnalyze() {
    if (!text.trim()) return;

    navigate("/loading-result");

    await analyzeText(text);

    navigate("/result-analysis");
  }

  return (
    <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
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
          disabled={state.loading}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
        >
          <ScanText className="w-5 h-5" />
          {state.loading ? "Analisando..." : "Analisar texto"}
        </button>
      </div>
    </section>
  );
}
