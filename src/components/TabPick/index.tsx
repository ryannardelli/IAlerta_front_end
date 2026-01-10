import { FileText, Image, Type } from "lucide-react";
import { UploadPDFDetectorIA } from "../UploadPDFDetectorIA";
import { ImageDetectorIA } from "../ImageDetectorIA";

export function TabPick() {
  return (
    <div className="p-4">
      <ul className="flex max-sm:flex-col gap-x-2 gap-y-4 w-max rounded-lg">
        <li
          id="textTab"
          className="tab flex flex-col justify-center items-center border-2 border-gray-300 hover:border-blue-700 rounded-lg bg-gray-100 text-sm font-medium text-slate-600 hover:text-blue-700 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
        >
          <Image className="w-5 h-5 mb-3" />
          Imagem
        </li>

        <li
          id="textTab"
          className="tab flex flex-col justify-center items-center border-2 border-gray-300 hover:border-blue-700 rounded-lg bg-gray-100 text-sm font-medium text-slate-600 hover:text-blue-700 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
        >
          <Type className="w-5 h-5 mb-3" />
          Texto
        </li>

        <li
          id="pdfTab"
          className="tab flex flex-col justify-center items-center border-2 border-blue-700 hover:border-blue-700 rounded-lg bg-gray-100 text-sm font-semibold text-blue-700 hover:text-blue-700 py-4 px-4 min-w-[120px] cursor-pointer transition-all"
        >
          <FileText className="w-5 h-5 mb-3" />
          PDF
        </li>

      </ul>

      <UploadPDFDetectorIA />
    </div>
  );
}

