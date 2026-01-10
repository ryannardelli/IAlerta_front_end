import { ContainerContent } from "../../components/ContainerContent";
import { Heading } from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export function Home() {
  return(
    <MainTemplate>
      <ContainerContent className="flex justify-center items-center h-screen">
        <Heading title="Detecte conteúdo gerado por Inteligência Artificial" label="Envie um arquivo PDF ou cole um texto para analisar a probabilidade de ter sido criado por IA." />
      </ContainerContent>
    </MainTemplate>
  );
}
