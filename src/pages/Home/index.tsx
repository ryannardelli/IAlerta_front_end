import { useEffect, useRef } from "react";
import { showMessage } from "../../adapters/showMessage";
import { ContainerContent } from "../../components/ContainerContent";
import { Heading } from "../../components/Heading";
import { TabPick } from "../../components/TabPick";
import { useAnalysis } from "../../hooks/useAnalysis";
import MainTemplate from "../../templates/MainTemplate";

export function Home() {
  const { state, dispatch } = useAnalysis();
  const shownRef = useRef(false);

  useEffect(() => {
    if (state.error && !shownRef.current) {
      showMessage.error(state.error);
      shownRef.current = true;
      dispatch({ type: "SET_ERROR", payload: null });
    }
  }, [state.error, dispatch]);

  return(
    <MainTemplate>
      <ContainerContent className="p-8">
        <Heading title="Detecte conteúdo gerado por Inteligência Artificial" label="Envie ou insira um conteúdo para analisar a probabilidade de ter sido criado por IA." />
        <TabPick />
      </ContainerContent>
    </MainTemplate>
  );
}
