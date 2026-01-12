import { MessageContainer } from "./components/MessageContainer"
import { AnalysisProvider } from "./provider"
import { MainRouter } from "./routers/MainRouter"

function App() {
  return (
    <AnalysisProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </AnalysisProvider>
  )
}

export default App
