type ButtonStartAnalyseProps = {
  label: string;
  title: string;
  ariaLabel: string;
  onClick: () => void;
}

export function ButtonStartAnalyse({ label, title, ariaLabel, onClick }: ButtonStartAnalyseProps) {
  return(
      <button
        title={title}
        aria-label={ariaLabel}
        onClick={onClick}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition duration-200 cursor-pointer"
      >
        {label}
      </button>
  );
}
