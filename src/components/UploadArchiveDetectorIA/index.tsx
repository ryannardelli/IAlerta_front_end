// import { useState, useRef } from "react";
// import { Upload, FileText, Sparkles, X, Check } from "lucide-react";
// import { FormatAllowed } from "../FormatAllowed";
// import { ButtonStartAnalyse } from "../ButtonStartAnalyse";
// import { useAnalysis } from "../../hooks/useAnalysis";
// import { useNavigate } from "react-router";

// export function UploadArcchiveDetectorIA() {
//   const [file, setFile] = useState<File | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const { analyzeArchive } = useAnalysis();
//   const { navigate } = useNavigate();

//   const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleRemoveFile = () => {
//     setFile(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const handleButtonClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     navigate("/loading-result");

//     try {
//       await analyzeArchive(file);
//       navigate("/result-analysis");

//       // Limpa após análise
//       setFile(null);
//       setPreviewUrl(null);
//     } catch (err: any) {
//       console.error(err);
//       alert(err.message || "Erro ao analisar a imagem");
//     }

//     // const formData = new FormData();
//     // formData.append("file", file);
//   };

//   return (
//     <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10">

//         {/* Texto */}
//         <div className="flex-1 space-y-4">
//           <div className="flex items-center gap-3">
//             <Sparkles className="w-6 h-6 text-primary" />
//             <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
//               Detectar IA em Arquivo
//             </h2>
//           </div>

//           <p className="text-slate-600 dark:text-slate-400 max-w-md">
//             Anexe um arquivo para analisar se o conteúdo foi gerado por
//             inteligência artificial.
//           </p>

//           {!file ? (
//             <div className="flex items-center gap-2">
//             <button
//               onClick={handleButtonClick}
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition cursor-pointer"
//             >
//               <Upload className="w-5 h-5" />
//               Selecionar arquivo
//             </button>
//           </div>
//           ) : (
//             <ButtonStartAnalyse label="Enviar" title="Enviar um arquivo para análise" ariaLabel="Enviar um arquivo para análise" onClick={handleUpload} />
//           )}

//           {!file && <FormatAllowed label="Formatos suportados: PDF, Word" /> }

//           {file && (
//             <div className="mt-2 flex items-center gap-2">
//               <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200">
//                 <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//                 <span className="font-medium">{file.name}</span>
//                 <Check className="w-4 h-4 text-green-500" />
//               </div>
//               <button
//                 onClick={handleRemoveFile}
//                 className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
//               >
//                 <X />
//               </button>
//             </div>
//           )}

//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             ref={fileInputRef}
//             className="hidden"
//             onChange={handleFileSelect}
//           />
//         </div>

//         {/* Área visual */}
//         <div className="flex-1 flex justify-center">
//           <div className="relative w-40 h-48 border-2 border-dashed border-primary/40 rounded-xl flex items-center justify-center">
//             <FileText className="w-14 h-14 text-primary" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useRef } from "react";
import { Upload, FileText, XCircle, Check } from "lucide-react";
import { useAnalysis } from "../../hooks/useAnalysis";
import { useNavigate } from "react-router";
import { FormatAllowed } from "../FormatAllowed";
import { ButtonStartAnalyse } from "../ButtonStartAnalyse";

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

      // Limpa após análise
      setSelectedFile(null);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Erro ao analisar o arquivo");
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <Upload className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Detectar IA em Arquivo
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 max-w-md">
            Envie um arquivo PDF ou Word para analisar se o conteúdo foi gerado por inteligência artificial.
          </p>

          <div>
            {!selectedFile ? (
              <button
                onClick={handleButtonClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition cursor-pointer"
              >
                <Upload className="w-5 h-5" />
                Selecionar arquivo
              </button>
            ) : (
              <ButtonStartAnalyse
                label="Enviar"
                title="Enviar arquivo para análise"
                ariaLabel="Enviar arquivo para análise"
                onClick={handleUpload}
              />
            )}
          </div>

          <FormatAllowed label="Formatos suportados: PDF, Word (.doc, .docx)" />

          {selectedFile && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200">
                <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                <span className="font-medium">{selectedFile.name}</span>
                <Check className="w-4 h-4 text-green-500" />
              </div>
              <button
                onClick={handleRemoveFile}
                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
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
          <div className="relative w-44 h-44 border-2 border-dashed border-primary/40 rounded-xl flex items-center justify-center overflow-hidden">
            <FileText className="w-14 h-14 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

