import { useState } from "react";
import { FileText, Image, Type } from "lucide-react";
import { TextDetectorIA } from "../TextDetectorIA";
import { ImageDetectorIA } from "../ImageDetectorIA";
import { UploadArcchiveDetectorIA } from "../UploadArchiveDetectorIA";

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
          Arquivo
        </li>
      </ul>

      {/* Conteúdo */}
      <div>
        {activeTab === "pdf" && <UploadArcchiveDetectorIA />}
        {activeTab === "text" && <TextDetectorIA />}
        {activeTab === "image" && <ImageDetectorIA />}
      </div>
    </div>
  );
}
