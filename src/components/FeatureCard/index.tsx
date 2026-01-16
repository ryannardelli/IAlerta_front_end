import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
        <Icon className="h-6 w-6" />
      </div>

      <h4 className="text-lg font-semibold text-slate-900 mb-2">
        {title}
      </h4>

      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
