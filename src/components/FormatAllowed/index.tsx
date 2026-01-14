type FormatAllowed = {
  label: string;
}

export function FormatAllowed({ label }: FormatAllowed) {
  return(
    <span className="block text-sm text-slate-500 dark:text-slate-500">
        {label}
    </span>
  );
}
