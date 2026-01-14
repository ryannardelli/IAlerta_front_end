import { useNavigate } from "react-router";
import { useAnalysis } from "../../hooks/useAnalysis";

type ButtonBackAnalyseProps = {
  label: string;
}

export function ButtonBackAnalyse({ label }: ButtonBackAnalyseProps) {
  const navigate = useNavigate();
  const { resetAnalysis } = useAnalysis();

  return(
    <div className="flex justify-center">
        <button
          onClick={() => {
            resetAnalysis();
            navigate("/");
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition shadow-md cursor-pointer"
        >
          {label}
        </button>
    </div>
  );
}
