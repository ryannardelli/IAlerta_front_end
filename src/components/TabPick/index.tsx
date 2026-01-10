import { FileText, Type } from "lucide-react";
import { UploadPDFDetectorIA } from "../UploadPDFDetectorIA";

export function TabPick() {
  return (
    <div className="p-4">
      <ul className="flex max-sm:flex-col gap-x-2 gap-y-4 w-max rounded-lg">
        {/* TAB PDF */}
        <li
          id="pdfTab"
          className="tab flex flex-col justify-center items-center border-2 border-blue-700 hover:border-blue-700 rounded-lg bg-gray-100 text-sm font-semibold text-blue-700 hover:text-blue-700 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
        >
          <FileText className="w-5 h-5 mb-3" />
          PDF
        </li>

        {/* TAB TEXTO */}
        <li
          id="textTab"
          className="tab flex flex-col justify-center items-center border-2 border-gray-300 hover:border-blue-700 rounded-lg bg-gray-100 text-sm font-medium text-slate-600 hover:text-blue-700 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
        >
          <Type className="w-5 h-5 mb-3" />
          Texto
        </li>

      </ul>

      {/* CONTEÚDO PDF */}
      <UploadPDFDetectorIA />
      
      {/* CONTEÚDO TEXTO */}
      <div id="textContent" className="tab-content max-w-2xl hidden mt-8">
        <h4 className="text-base font-semibold text-slate-600">Análise de Texto</h4>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Cole ou digite um texto para verificar se ele foi produzido por uma IA.
          A análise considera linguagem, repetição, previsibilidade e estilo.
        </p>
      </div>
    </div>
  );
}

