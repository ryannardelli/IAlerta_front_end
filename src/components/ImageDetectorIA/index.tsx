import { Image as ImageIcon, Upload, Sparkles } from "lucide-react";

export function ImageDetectorIA() {
  return (
    <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Texto */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Detectar IA em Imagem
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 max-w-md">
            Envie uma imagem para verificar se ela foi gerada ou manipulada por
            inteligência artificial.
          </p>

          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition"
          >
            <Upload className="w-5 h-5" />
            Selecionar imagem
          </button>

          <span className="block text-sm text-slate-500 dark:text-slate-500">
            Formatos suportados: JPG, PNG, WEBP
          </span>
        </div>

        {/* Área visual */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-44 h-44 border-2 border-dashed border-primary/40 rounded-xl flex items-center justify-center">
            <ImageIcon className="w-14 h-14 text-primary" />

            <div className="absolute -right-4 -bottom-4 bg-primary rounded-full p-3 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
