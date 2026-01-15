import { useState } from "react";
import { FileText, Image, Mic, Type, Video } from "lucide-react";
import { TextDetectorIA } from "../TextDetectorIA";
import { ImageDetectorIA } from "../ImageDetectorIA";
import { UploadArcchiveDetectorIA } from "../UploadArchiveDetectorIA";
import { AudioDetectorIA } from "../AudioDetectorIA";
import { VideoDetectorIA } from "../VideoDetectorIA";

type TabType = "archive" | "text" | "image" | "audio" | "video";

export function TabPick() {
  const [activeTab, setActiveTab] = useState<TabType>("text");

  const tabBase =
    "flex flex-col justify-center items-center border-2 rounded-lg bg-gray-100 text-sm py-4 px-4 min-w-[120px] cursor-pointer transition-all";

  const tabActive =
    "border-blue-700 text-blue-700 font-semibold";

  const tabInactive =
    "border-gray-300 text-slate-600 hover:border-blue-700 hover:text-blue-700";

  return (
    <div className="p-4 space-y-6">
      {/* Tabs */}
      <ul className="flex max-sm:flex-col gap-x-2 gap-y-4 w-max rounded-lg mx-auto">
         {/* Text */}
        <li
          onClick={() => setActiveTab("text")}
          className={`${tabBase} ${
            activeTab === "text" ? tabActive : tabInactive
          }`}
        >
          <Type className="w-5 h-5 mb-3" />
          Texto
        </li>

        {/* Image */}
        <li
          onClick={() => setActiveTab("image")}
          className={`${tabBase} ${
            activeTab === "image" ? tabActive : tabInactive
          }`}
        >
          <Image className="w-5 h-5 mb-3" />
          Imagem
        </li>

        {/* Archive */}
        <li
          onClick={() => setActiveTab("archive")}
          className={`${tabBase} ${
            activeTab === "archive" ? tabActive : tabInactive
          }`}
        >
          <FileText className="w-5 h-5 mb-3" />
          Arquivo
        </li>

        {/* Audio */}
        <li
          onClick={() => setActiveTab("audio")}
          className={`${tabBase} ${
            activeTab === "audio" ? tabActive : tabInactive
          }`}
        >
          <Mic className="w-5 h-5 mb-3" />
          Aúdio
        </li>

        {/* Vídeo */}
        <li
          onClick={() => setActiveTab("video")}
          className={`${tabBase} ${
            activeTab === "video" ? tabActive : tabInactive
          }`}
        >
          <Video className="w-5 h-5 mb-3" />
          Vídeo
        </li>
      </ul>

      {/* Conteúdo */}
      <div>
        {activeTab === "archive" && <UploadArcchiveDetectorIA />}
        {activeTab === "text" && <TextDetectorIA />}
        {activeTab === "image" && <ImageDetectorIA />}
        {activeTab === "audio" && <AudioDetectorIA />}
        {activeTab === "video" && <VideoDetectorIA />}
      </div>
    </div>
  );
}
