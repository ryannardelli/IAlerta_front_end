import { useState, useRef } from "react";
import { Image as ImageIcon, Upload, XCircle } from "lucide-react";
import { useAnalysis } from "../../hooks/useAnalysis";
import { useNavigate } from "react-router";
import { FormatAllowed } from "../FormatAllowed";
import { ButtonStartAnalyse } from "../ButtonStartAnalyse";
import { ButtonUploadPattern } from "../ButtonUploadPattern";

export function ImageDetectorIA() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { analyzeImage } = useAnalysis();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  async function handleUpload() {
    if (!selectedFile) return;

    navigate("/loading-result");

    try {
      await analyzeImage(selectedFile);
      navigate("/result-analysis");
      setSelectedFile(null);
      setPreviewUrl(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err);
        alert(err.message || "Erro ao analisar a imagem");
      }
    }
  }

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-6 sm:p-8 bg-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-10">

        {/* Texto + ações */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Upload className="w-6 h-6 text-primary" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Detectar IA em Imagem
            </h2>
          </div>

          <p className="text-slate-600 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Envie uma imagem para verificar se ela foi gerada ou manipulada por
            inteligência artificial.
          </p>

          <div className="flex justify-center md:justify-start">
            {!selectedFile ? (
              <ButtonUploadPattern
                label="Selecionar imagem"
                onClick={handleButtonClick}
                icon={Upload}
              />
            ) : (
              <ButtonStartAnalyse
                label="Enviar"
                title="Enviar imagem para análise"
                ariaLabel="Enviar imagem para análise"
                onClick={handleUpload}
              />
            )}
          </div>

          {!selectedFile && (
            <div className="flex justify-center md:justify-start">
              <FormatAllowed label="Formatos suportados: JPG, PNG, WEBP" />
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Preview */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 border-2 border-dashed border-primary/40 rounded-xl flex items-center justify-center overflow-hidden">
            {previewUrl ? (
              <>
                <img
                  src={previewUrl}
                  alt="preview"
                  className="w-full h-full object-cover rounded-xl"
                />
                <button
                  title="Remover imagem"
                  aria-label="Remover imagem"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-600 rounded-full p-1 shadow-md transition cursor-pointer"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </>
            ) : (
              <ImageIcon className="w-12 h-12 sm:w-14 sm:h-14 text-primary" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
