import Lottie from "lottie-react";
import loadingResult from "../../../public/img/Loading.json";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Lottie animationData={loadingResult} loop={true} />
    </div>
  );
}
