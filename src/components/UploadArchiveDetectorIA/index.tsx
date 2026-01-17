import { useState, useRef } from "react";
import { Upload, FileText, XCircle, Check } from "lucide-react";
import { useAnalysis } from "../../hooks/useAnalysis";
import { useNavigate } from "react-router";
import { FormatAllowed } from "../FormatAllowed";
import { ButtonStartAnalyse } from "../ButtonStartAnalyse";
import { ButtonUploadPattern } from "../ButtonUploadPattern";

export function UploadArcchiveDetectorIA() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { analyzeArchive } = useAnalysis();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    navigate("/loading-result");

    try {
      await analyzeArchive(selectedFile);
      navigate("/result-analysis");
      setSelectedFile(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err);
        alert(err.message || "Erro ao analisar o arquivo");
      }
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-6 sm:p-8 bg-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-10">

        {/* Texto + ações */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Upload className="w-6 h-6 text-primary" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Detectar IA em Arquivo
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Envie um arquivo PDF ou Word para analisar se o conteúdo foi gerado por
            inteligência artificial.
          </p>

          <div className="flex justify-center md:justify-start">
            {!selectedFile ? (
              <ButtonUploadPattern
                label="Selecionar arquivo"
                onClick={handleButtonClick}
                icon={Upload}
              />
            ) : (
              <ButtonStartAnalyse
                label="Enviar"
                title="Enviar arquivo para análise"
                ariaLabel="Enviar arquivo para análise"
                onClick={handleUpload}
              />
            )}
          </div>

          {!selectedFile && (
            <div className="flex justify-center md:justify-start">
              <FormatAllowed label="Formatos suportados: PDF, Word (.doc, .docx)" />
            </div>
          )}

          {selectedFile && (
            <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <div className="flex items-center gap-2 px-3 py-1 max-w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200">
                <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400 shrink-0" />
                <span className="font-medium text-sm break-all">
                  {selectedFile.name}
                </span>
                <Check className="w-4 h-4 text-green-500 shrink-0" />
              </div>

              <button
                onClick={handleRemoveFile}
                title="Remover arquivo"
                aria-label="Remover arquivo"
                className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Área visual */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 border-2 border-dashed border-primary/40 rounded-xl flex items-center justify-center">
            <FileText className="w-12 h-12 sm:w-14 sm:h-14 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}


