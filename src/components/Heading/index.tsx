type HeadingProps = {
  title: string;
  label: string;
};

export function Heading({ title, label }: HeadingProps) {
  return (
    <div className="w-full max-w-3xl mx-auto text-center space-y-4">

      <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
        {title}
      </h1>

      <p className="text-slate-400 text-base md:text-lg leading-relaxed">
        {label}
      </p>

    </div>
  );
}
