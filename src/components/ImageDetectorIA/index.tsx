import { useState, useRef } from "react";
import { Image as ImageIcon, Upload, XCircle } from "lucide-react";
import { useAnalysis } from "../../hooks/useAnalysis";
import { useNavigate } from "react-router";
import { FormatAllowed } from "../FormatAllowed";
import { ButtonStartAnalyse } from "../ButtonStartAnalyse";
import { ButtonUploadPattern } from "../ButtonUploadPattern";

export function ImageDetectorIA() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef(null);
  const { analyzeImage, state } = useAnalysis();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
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

      // Limpa após análise
      setSelectedFile(null);
      setPreviewUrl(null);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Erro ao analisar a imagem");
    }
  }

  // Remove a imagem selecionada
  const handleRemoveImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <Upload className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Detectar IA em Imagem
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 max-w-md">
            Envie uma imagem para verificar se ela foi gerada ou manipulada por
            inteligência artificial.
          </p>

          <div>
            {!selectedFile ? (
              <ButtonUploadPattern label="Selecionar imagem" onClick={handleButtonClick} icon={Upload} />
            ) : (
              <ButtonStartAnalyse label="Enviar" title="Enviar imagem para análise" ariaLabel="Enviar imagem para análise" onClick={handleUpload} />
            )}
          </div>

         {!selectedFile && <FormatAllowed label="Formatos suportados: JPG, PNG, WEBP" />}

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Área visual */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-44 h-44 border-2 border-dashed border-primary/40 rounded-xl flex items-center justify-center overflow-hidden">
            {previewUrl ? (
              <>
                <img
                  src={previewUrl}
                  alt="preview"
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Ícone de remover */}
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
              <ImageIcon className="w-14 h-14 text-primary" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
