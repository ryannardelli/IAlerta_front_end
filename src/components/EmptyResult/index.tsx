import { FileSearch } from "lucide-react";

export function EmptyResult() {
  return (
    <div className="flex flex-col items-center h-screen justify-center text-center py-24 space-y-4">

      <div className="p-4 rounded-full bg-slate-800">
        <FileSearch className="w-8 h-8 text-primary" />
      </div>

      <h2 className="text-xl font-semibold text-slate-100">
        Nenhuma análise encontrada
      </h2>

      <p className="text-slate-400 max-w-md">
        Você ainda não realizou nenhuma análise. Envie um texto ou PDF para
        verificar se o conteúdo foi gerado por Inteligência Artificial.
      </p>

      <a
        href="/"
        className="mt-4 inline-flex items-center px-4 py-2 rounded-md bg-primary text-slate-950 font-medium hover:brightness-110 transition"
      >
        Analisar conteúdo
      </a>
    </div>
  );
}
