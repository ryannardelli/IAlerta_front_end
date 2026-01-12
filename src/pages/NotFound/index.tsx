import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import animationNotFound from "../../../public/img/Error 404.json";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <div className="w-full max-w-lg">
        <Lottie animationData={animationNotFound} loop={true} />
      </div>

      <h1 className="mt-6 text-4xl font-bold text-gray-800">
        Oops! Página não encontrada
      </h1>
      <p className="mt-2 text-gray-500">
        A página que você está procurando não existe ou foi movida.
      </p>

      <button
        onClick={() => navigate("/")} // Aqui usamos navigate
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Voltar para a Home
      </button>
    </div>
  );
}
