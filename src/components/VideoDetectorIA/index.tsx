// // import { Video } from "lucide-react";

// // export function VideoDetectorIA() {
// //  return(
// //    <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
// //      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
// //       <div className="flex items-center gap-3">
// //         <Video className="w-6 h-6 text-primary" />
// //         <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
// //               Detectar IA em Vídeo
// //         </h2>
// //       </div>
// //      </div>
// //   </section>
// //  );
// // }


// import { useState, useRef } from "react";
// import { Eye, Trash, Video, X } from "lucide-react";
// import { ButtonUploadPattern } from "../ButtonUploadPattern";
// import { ButtonStartAnalyse } from "../ButtonStartAnalyse";

// export function VideoDetectorIA() {
//   const [videoFile, setVideoFile] = useState<File | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleButtonClick = () => inputRef.current?.click();

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type.startsWith("video/")) {
//       setVideoFile(file);
//     }
//   };

//   const handleUpload =  async() => {
//     alert("Send!");
//   }

//   return (
//     <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
//       <div className="flex flex-col gap-6">
//         {/* Cabeçalho */}
//         <div className="flex items-center gap-3">
//           <Video className="w-6 h-6 text-primary" />
//           <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
//             Detectar IA em Vídeo
//           </h2>
//         </div>

//         <p className="text-slate-600 dark:text-slate-400 max-w-md">
//             Envie um vídeo para verificar se ele foi gerado ou manipulado por
//             inteligência artificial.
//         </p>

//         {/* Upload */}
//         <div>
//           {!videoFile ? (
//             <ButtonUploadPattern
//               label="Selecionar vídeo"
//               icon={Video}
//               onClick={handleButtonClick}
//             />
//           ) : (
//             <div className="flex gap-2">
//               <ButtonStartAnalyse label="Enviar" ariaLabel="Enviar vídeo para análise" title="Enviar vídeo para análise" onClick={handleUpload} />

//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition flex items-center gap-2 cursor-pointer"
//               >
//                 <Eye />
//                 Ver vídeo
//               </button>

//                <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg transition flex items-center gap-2 cursor-pointer"
//               >
//                 <Trash />
//                 Remover vídeo
//               </button>
//             </div>
//           )}
//           <input
//             type="file"
//             accept="video/mp4,video/webm,video/ogg"
//             ref={inputRef}
//             className="hidden"
//             onChange={handleFileChange}
//           />
//         </div>

//         {/* Modal */}
//         {isModalOpen && videoFile && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white dark:bg-slate-900 p-4 rounded-lg max-w-2xl w-full relative">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-red-500 transition rounded-full bg-white dark:bg-slate-800 shadow-sm cursor-pointer"
//               >
//                 <X className="w-4 h-4" />
//               </button>

//               <video
//                 src={URL.createObjectURL(videoFile)}
//                 controls
//                 className="w-full rounded-md"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


import { useState, useRef } from "react";
import { Eye, Trash, Video, X } from "lucide-react";
import { ButtonUploadPattern } from "../ButtonUploadPattern";
import { ButtonStartAnalyse } from "../ButtonStartAnalyse";

export function VideoDetectorIA() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => inputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    }
  };

  const handleUpload = async () => {
    alert("Enviar vídeo para análise!");
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
      <div className="flex flex-col gap-6">
        {/* Cabeçalho */}
        <div className="flex items-center gap-3">
          <Video className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Detectar IA em Vídeo
          </h2>
        </div>

        <p className="text-slate-600 dark:text-slate-400 max-w-md">
          Envie um vídeo para verificar se ele foi gerado ou manipulado por
          inteligência artificial.
        </p>

        {/* Upload */}
        <div>
          {!videoFile ? (
            <ButtonUploadPattern
              label="Selecionar vídeo"
              icon={Video}
              onClick={handleButtonClick}
            />
          ) : (
            <div className="flex gap-2 flex-wrap">
              {/* Botão de enviar para análise */}
              <ButtonStartAnalyse
                label="Enviar"
                ariaLabel="Enviar vídeo para análise"
                title="Enviar vídeo para análise"
                onClick={handleUpload}
              />

              {/* Botão de ver vídeo */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition flex items-center gap-2 cursor-pointer"
              >
                <Eye />
                Ver vídeo
              </button>

              {/* Botão de remover vídeo */}
              <button
                onClick={() => {
                  setVideoFile(null); // remove o vídeo
                  setIsModalOpen(false); // fecha modal caso esteja aberto
                }}
                className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg transition flex items-center gap-2 cursor-pointer"
              >
                <Trash />
                Remover vídeo
              </button>
            </div>
          )}

          <input
            type="file"
            accept="video/mp4,video/webm,video/ogg"
            ref={inputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Modal de vídeo */}
        {isModalOpen && videoFile && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg max-w-2xl w-full relative shadow-lg">
              {/* Botão de fechar modal */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-red-500 transition rounded-full bg-white dark:bg-slate-800 shadow-sm cursor-pointer"
                title="Fechar modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Player de vídeo */}
              <video
                src={URL.createObjectURL(videoFile)}
                controls
                className="w-full rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
