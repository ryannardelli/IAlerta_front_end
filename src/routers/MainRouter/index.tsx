import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import AIAnalysisPage from "../../pages/AIAnalysisPage";
import { NotFound } from "../../pages/NotFound";
import LoadingPage from "../../pages/LoadingPage";
import { Howwork } from "../../pages/Howwork";
import { About } from "../../pages/About";

export function MainRouter() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-work" element={<Howwork />} />
          <Route path="/about" element={<About />} />
          <Route path="/result-analysis" element={<AIAnalysisPage />} />
          <Route path="/loading-result" element={<LoadingPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
