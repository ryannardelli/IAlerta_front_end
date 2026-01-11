// import { FileText, Image, Type } from "lucide-react";
// import { UploadPDFDetectorIA } from "../UploadPDFDetectorIA";

// export function TabPick() {
//   return (
//     <div className="p-4">
//       <ul className="flex max-sm:flex-col gap-x-2 gap-y-4 w-max rounded-lg">
//         <li
//           id="textTab"
//           className="tab flex flex-col justify-center items-center border-2 border-gray-300 hover:border-blue-700 rounded-lg bg-gray-100 text-sm font-medium text-slate-600 hover:text-blue-700 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
//         >
//           <Image className="w-5 h-5 mb-3" />
//           Imagem
//         </li>

//         <li
//           id="textTab"
//           className="tab flex flex-col justify-center items-center border-2 border-gray-300 hover:border-blue-700 rounded-lg bg-gray-100 text-sm font-medium text-slate-600 hover:text-blue-700 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
//         >
//           <Type className="w-5 h-5 mb-3" />
//           Texto
//         </li>

//         <li
//           id="pdfTab"
//           className="tab flex flex-col justify-center items-center border-2 border-blue-700 hover:border-blue-700 rounded-lg bg-gray-100 text-sm font-semibold text-blue-700 hover:text-blue-700 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
//         >
//           <FileText className="w-5 h-5 mb-3" />
//           PDF
//         </li>

//       </ul>

//       <UploadPDFDetectorIA />
//     </div>
//   );
// }

import { useState } from "react";
import { FileText, Image, Type } from "lucide-react";

import { UploadPDFDetectorIA } from "../UploadPDFDetectorIA";
import { TextDetectorIA } from "../TextDetectorIA";
import { ImageDetectorIA } from "../ImageDetectorIA";

type TabType = "pdf" | "text" | "image";

export function TabPick() {
  const [activeTab, setActiveTab] = useState<TabType>("pdf");

  const tabBase =
    "flex flex-col justify-center items-center border-2 rounded-lg bg-gray-100 text-sm py-4 px-4 min-w-[120px] cursor-pointer transition-all";

  const tabActive =
    "border-blue-700 text-blue-700 font-semibold";

  const tabInactive =
    "border-gray-300 text-slate-600 hover:border-blue-700 hover:text-blue-700";

  return (
    <div className="p-4 space-y-6">
      {/* Tabs */}
      <ul className="flex max-sm:flex-col gap-x-2 gap-y-4 w-max rounded-lg">
         {/* Texto */}
        <li
          onClick={() => setActiveTab("text")}
          className={`${tabBase} ${
            activeTab === "text" ? tabActive : tabInactive
          }`}
        >
          <Type className="w-5 h-5 mb-3" />
          Texto
        </li>

        {/* Imagem */}
        <li
          onClick={() => setActiveTab("image")}
          className={`${tabBase} ${
            activeTab === "image" ? tabActive : tabInactive
          }`}
        >
          <Image className="w-5 h-5 mb-3" />
          Imagem
        </li>

        {/* PDF */}
        <li
          onClick={() => setActiveTab("pdf")}
          className={`${tabBase} ${
            activeTab === "pdf" ? tabActive : tabInactive
          }`}
        >
          <FileText className="w-5 h-5 mb-3" />
          PDF
        </li>
      </ul>

      {/* Conteúdo */}
      <div>
        {activeTab === "pdf" && <UploadPDFDetectorIA />}
        {activeTab === "text" && <TextDetectorIA />}
        {activeTab === "image" && <ImageDetectorIA />}
      </div>
    </div>
  );
}
