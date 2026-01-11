import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import AIAnalysisPage from "../../pages/AIAnalysisPage";
import { NotFound } from "../../pages/NotFound";

export function MainRouter() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result-analysis" element={<AIAnalysisPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
