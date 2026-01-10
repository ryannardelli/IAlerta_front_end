import { ContainerContent } from "../../components/ContainerContent";
import { Heading } from "../../components/Heading";
import { TabPick } from "../../components/TabPick";
import MainTemplate from "../../templates/MainTemplate";

export function Home() {
  return(
    <MainTemplate>
      <ContainerContent className="flex flex-col justify-center items-center w-full">
        <Heading title="Detecte conteúdo gerado por Inteligência Artificial" label="Envie ou insira um conteúdo para analisar a probabilidade de ter sido criado por IA." />
        <TabPick />
      </ContainerContent>
    </MainTemplate>
  );
}
