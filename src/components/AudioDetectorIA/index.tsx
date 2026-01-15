// // import { Mic2 } from "lucide-react";

// // export function AudioDetectorIA() {
// //   return(
// //     <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
// //       <div className="flex flex-col md:flex-row items-center justify-between gap-10">
// //          <div className="flex-1 space-y-4">
// //           <div className="flex items-center gap-3">
// //             <Mic2 className="w-6 h-6 text-primary" />
// //             <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
// //               Detectar IA em Aúdio
// //             </h2>
// //           </div>

// //           <p className="text-slate-600 dark:text-slate-400 max-w-md">
// //             Envie um aúdio para verificar se ela foi gerada ou manipulada por
// //             inteligência artificial.
// //           </p>

// //           <div>
// //            <p>A</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import { useState, useRef } from "react";
// import { Mic2, Play, Pause, Upload } from "lucide-react";
// import { ButtonUploadPattern } from "../ButtonUploadPattern";

// export function AudioDetectorIA() {
//   const [audioFile, setAudioFile] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const audioRef = useRef(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith("audio/")) {
//       setAudioFile(URL.createObjectURL(file));
//       setProgress(0);
//       setIsPlaying(false);
//     }
//   };

//   const togglePlay = () => {
//     if (!audioRef.current) return;
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     const current = audioRef.current.currentTime;
//     const total = audioRef.current.duration;
//     setProgress((current / total) * 100);
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   return (
//     <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//         <div className="flex-1 space-y-4">
//           <div className="flex items-center gap-3">
//             <Mic2 className="w-6 h-6 text-primary" />
//             <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
//               Detectar IA em Áudio
//             </h2>
//           </div>

//           <p className="text-slate-600 dark:text-slate-400 max-w-md">
//             Envie um áudio para verificar se ele foi gerado ou manipulado por
//             inteligência artificial.
//           </p>

//           <ButtonUploadPattern label="Selecionar aúdio" onClick={handleFileChange} icon={Upload} />

//           <div className="flex flex-col gap-2">
//             <input
//               type="file"
//               accept="audio/mp3, audio/wav, audio/ogg"
//               onChange={handleFileChange}
//               className="file-input file-input-bordered w-full max-w-xs"
//             />
//           </div>

//           {audioFile && (
//             <div className="flex items-center gap-4 mt-4 bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
//               <button
//                 onClick={togglePlay}
//                 className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full flex items-center justify-center"
//               >
//                 {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//               </button>

//               <div className="flex-1">
//                 <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-green-500 rounded-full"
//                     style={{ width: `${progress}%` }}
//                   />
//                 </div>
//                 <div className="flex justify-between text-xs mt-1 text-gray-600 dark:text-gray-300">
//                   <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
//                   <span>{formatTime(audioRef.current?.duration || 0)}</span>
//                 </div>
//               </div>

//               <audio
//                 ref={audioRef}
//                 src={audioFile}
//                 onTimeUpdate={handleTimeUpdate}
//                 onLoadedMetadata={() =>
//                   setDuration(audioRef.current?.duration || 0)
//                 }
//                 onEnded={() => setIsPlaying(false)}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState, useRef } from "react";
import { Mic2, Play, Pause, Upload } from "lucide-react";
import { ButtonUploadPattern } from "../ButtonUploadPattern";
import { FormatAllowed } from "../FormatAllowed";
import { ButtonStartAnalyse } from "../ButtonStartAnalyse";

export function AudioDetectorIA() {
  const [audioFile, setAudioFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(URL.createObjectURL(file));
      setProgress(0);
      setIsPlaying(false);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setProgress((current / total) * 100);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleUpload = async() => {
    alert("Test!");
  }

  return (
    <section className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <Mic2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Detectar IA em Áudio
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 max-w-md">
            Envie um áudio para verificar se ele foi gerado ou manipulado por
            inteligência artificial.
          </p>

          <div>
            {!audioFile ? (
               <ButtonUploadPattern
                label="Selecionar áudio"
                icon={Upload}
                onClick={handleButtonClick}
               />
            ) : (
              <ButtonStartAnalyse
                label="Enviar"
                title="Enviar aúdio para análise"
                ariaLabel="Enviar aúdio para análise"
                onClick={handleUpload}
              />
            )}
          </div>

          {!audioFile && <FormatAllowed label="Formatos suportados MP3, WAV e OGG" />}

          <input
            type="file"
            accept="audio/mp3, audio/wav, audio/ogg"
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {audioFile && (
            <div className="flex items-center gap-4 mt-4 bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
              <button
                onClick={togglePlay}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full flex items-center justify-center"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <div className="flex-1">
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs mt-1 text-gray-600 dark:text-gray-300">
                  <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                  <span>{formatTime(audioRef.current?.duration || 0)}</span>
                </div>
              </div>

              <audio
                ref={audioRef}
                src={audioFile}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() =>
                  setProgress(0)
                }
                onEnded={() => setIsPlaying(false)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
