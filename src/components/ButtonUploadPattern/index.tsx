import type { LucideIcon } from "lucide-react";

type ButtonUploadPatternProps = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function ButtonUploadPattern({ label, onClick, icon: Icon }: ButtonUploadPatternProps) {
    return(
        <button
          onClick={onClick}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition cursor-pointer"
        >
          <Icon className="w-5 h-5" />
          {label}
    </button>
    );
}
