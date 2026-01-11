import { AnalysisProvider } from "./provider"
import { MainRouter } from "./routers/MainRouter"

function App() {
  return (
    <AnalysisProvider>
      <MainRouter />
    </AnalysisProvider>
  )
}

export default App
