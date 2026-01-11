import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import AIAnalysisPage from "../../pages/AIAnalysisPage";

export function MainRouter() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result-analysis" element={<AIAnalysisPage />} />
      </Routes>
    </BrowserRouter>
  );
}
